#!/usr/bin/env -S deno run --allow-all
import { getSymbolInfo } from "../main/get_symbol_info.js"
import { getRexportedLibs } from "../main/get_reexported_libs.js"

import { parseArgs, flag, required, initialValue } from "https://esm.sh/gh/jeff-hykin/good-js@1.14.3.0/source/flattened/parse_args.js"
import { didYouMean } from "https://esm.sh/gh/jeff-hykin/good-js@1.14.3.0/source/flattened/did_you_mean.js"
const Path = await import('https://deno.land/std@0.128.0/path/mod.ts')

const argsInfo = parseArgs({
    rawArgs: Deno.args,
    fields: [
        [[0, "--file"], str=>str],
        [["--direct-symbols-only"], flag, ],
        [["--include-internal-symbols"], flag, ],
        [["--extra-root"], initialValue([]), (value)=>value instanceof Array ? value : [value]],
        [["--help"], flag, ],
        [["--version"], flag, ],
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
        --version                  - prints version
        --file <path>              - path to .dylib or executable file
        --extra-root 'root1'      - path for extra root to search in 
        --extra-root 'root2'        ex: 'unable to read /lib/system/libxpc.dylib' will
                                    try /your_root/lib/system/libxpc.dylib before giving up
        --direct-symbols-only      - basically = recursive=false
        --include-internal-symbols - note: usually you'll only care about external symbols
    
    NOTE: all output is valid YAML, for easy parsing

    Examples:
        macho_list_symbols --help
        macho_list_symbols --version
        macho_list_symbols --file /path/to/file.dylib
        macho_list_symbols --file /path/to/file.dylib --direct-symbols-only
        macho_list_symbols --file /path/to/file.dylib --include-internal-symbols
        macho_list_symbols --file /path/to/file.dylib --extra-root '/path/to/root1' --extra-root "/path/to/root2"
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
if (args.directSymbolsOnly) {
    const symbols = getSymbolInfo(file)
    for (const [key, value] of Object.entries(symbols)) {
        if (!value.internal || args.includeInternalSymbols) {
            console.debug(`- ${JSON.stringify(key)}`)
        }
    }
} else {
    const start = Path.dirname(args.file)
    function recursiveGetRexportedLibs(filePath, alreadySeen=new Set()) {
        let file
        let errorString = ""
        try {
            try {
                file = Deno.readFileSync(filePath)
            } catch (error) {
                // TODO: probably could use LD_LIBRARY_PATH or DYLD_LIBRARY_PATH
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
        const symbols = getSymbolInfo(file)
        for (const [key, value] of Object.entries(symbols)) {
            if (!value.internal || args.includeInternalSymbols) {
                console.debug(`- ${JSON.stringify(key)}`)
            }
        }
        const libs = getRexportedLibs(file)
        for (const lib of libs) {
            if (!alreadySeen.has(lib)) {
                alreadySeen.add(lib)
                recursiveGetRexportedLibs(lib, alreadySeen)
            }
        }
    }
    recursiveGetRexportedLibs(args.file)
}