#!/usr/bin/env -S deno run --allow-all
import { getSymbolInfo } from "../main/get_symbol_info.js"
import { getDynamicLibs } from "../main/get_dynamic_libs.js"

import { parseArgs, flag, required, initialValue } from "https://esm.sh/gh/jeff-hykin/good-js@1.14.3.0/source/flattened/parse_args.js"
import { didYouMean } from "https://esm.sh/gh/jeff-hykin/good-js@1.14.3.0/source/flattened/did_you_mean.js"
const Path = await import('https://deno.land/std@0.128.0/path/mod.ts')

const argsInfo = parseArgs({
    rawArgs: Deno.args,
    fields: [
        [[0, "--file"], str=>str],
        [["--recursive"], flag,],
        [["--strong-only"], flag,],
        [["--weak-only"], flag,],
        [["--help"], flag, ],
        [["--version"], flag, ],
        [["--extra-root"], initialValue([]), (value)=>value instanceof Array ? value : [value]],
    ],
    namedArgsStopper: "--",
    allowNameRepeats: true,
    valueTransformer: JSON.parse,
    isolateArgsAfterStopper: false,
    argsByNameSatisfiesNumberedArg: true,
    implicitNamePattern: /^(--|-)[a-zA-Z0-9\-_]+$/,
    implictFlagPattern: null,
})
if (argsInfo.simplifiedNames.help) {
    console.log(`
        --version            - prints version
        --recursive          - gets the whole tree of linked libraries
        --strong-only        - only get strongly linked libraries (default is both)
        --weak-only          - only get weakly linked libraries
        --file <path>        - path to .dylib or executable file
        --extra-root 'root1' - path for extra root to search in 
                               only really matters for --recursive
                               ex: 'unable to read /lib/system/libxpc.dylib' will
                               try /your_root/lib/system/libxpc.dylib before giving up
    
    NOTE: all output is valid YAML, for easy parsing
    
    Examples:
        macho_list_dlibs --help
        macho_list_dlibs --version
        macho_list_dlibs --file ~/.deno/bin/deno
        macho_list_dlibs --file ~/.deno/bin/deno --strong-only
        macho_list_dlibs --file ~/.deno/bin/deno --weak-only
        macho_list_dlibs --file ~/.deno/bin/deno --recursive
        macho_list_dlibs --file ~/.deno/bin/deno --recursive --extra-root '/path/to/root1' --extra-root "/path/to/root2"
    `)
    Deno.exit(0)
}
if (argsInfo.simplifiedNames.version) {
    console.log("0.0.1.0")
    Deno.exit(0)
}
didYouMean({
    givenWords: Object.keys(argsInfo.implicitArgsByName).filter(each=>each.startsWith(`-`)),
    possibleWords: Object.keys(argsInfo.explicitArgsByName).filter(each=>each.startsWith(`-`)),
    autoThrow: true,
    suggestionLimit: 1,
})
const args = argsInfo.simplifiedNames

const file = Deno.readFileSync(args.file)
if (!args.recursive) {
    for (let each of getDynamicLibs(file, { onlyStrongLibs: args.strongOnly, onlyWeakLibs: args.weakOnly })) {
        console.log(`- ${JSON.stringify(each)}`)
    }
} else {
    const start = Path.dirname(args.file)
    function recursiveGetDynamicLibs(filePath, alreadySeen=new Set()) {
        let file
        let errorString = ""
        try {
            try {
                file = Deno.readFileSync(filePath)
            } catch (error) {
                // FIXME: probably need to use LD_LIBRARY_PATH or DYLD_LIBRARY_PATH
                for (let each of args.extraRoot) {
                    const path = `${each}/${filePath}`
                    try {
                        file = Deno.readFileSync(path)
                        break
                    } catch (error) {
                        let extraInfo = `${error?.stack||error}`.replace(/\n/g, "\n    # ")
                        if (extraInfo.startsWith("NotFound: No such file or directory ")){
                            extraInfo = ""
                        } else {
                            extraInfo = `error message: ${extraInfo}`
                        }
                        errorString = `${errorString}\n    # NOTE: unable to read ${JSON.stringify(path)}, skipping. ${extraInfo}`
                    }
                }
                if (!file) {
                    throw error
                }
            }
        } catch (error) {
            let extraInfo = `${error?.stack||error}`.replace(/\n/g, "\n    # ")
            if (extraInfo.startsWith("NotFound: No such file or directory ")){
                extraInfo = ""
            } else {
                extraInfo = `error message: ${extraInfo}`
            }
            console.error(`# ERROR: unable to read ${filePath}, skipping. ${extraInfo}${errorString}`)
            return
        }
        const libs = getDynamicLibs(file, { onlyStrongLibs: args.strongOnly, onlyWeakLibs: args.weakOnly })
        for (let each of libs) {
            console.log(`- ${JSON.stringify(each)}`)
        }
        for (const lib of libs) {
            if (!alreadySeen.has(lib)) {
                alreadySeen.add(lib)
                recursiveGetDynamicLibs(lib, alreadySeen)
            }
        }
    }
    recursiveGetDynamicLibs(args.file)
}