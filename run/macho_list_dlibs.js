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
        [["--recursive"], flag,],
        [["--help"], flag, ],
        [["--version"], flag, ],
        [["--extra-roots"], initialValue([]), str=>JSON.parse(str)],
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
        --file <path>        - path to .dylib or executable file
        --extra-roots '[]'   - JSON list of extra root paths to search
                               only really matters for --recursive
                               ex: 'unable to read /lib/system/libxpc.dylib' will
                               try /your_root/lib/system/libxpc.dylib before giving up
    NOTE: all output is valid YAML, for easy parsing
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
    for (let each of getRexportedLibs(file)) {
        console.log(`- ${JSON.stringify(each)}`)
    }
} else {
    const start = Path.dirname(args.file)
    function recursivegetRexportedLibs(filePath, alreadySeen=new Set()) {
        let file
        let errorString = ""
        try {
            try {
                file = Deno.readFileSync(filePath)
            } catch (error) {
                // FIXME: probably need to use LD_LIBRARY_PATH or DYLD_LIBRARY_PATH
                for (let each of args.extraRoots) {
                    const path = `${each}/${filePath}`
                    try {
                        file = Deno.readFileSync(path)
                        break
                    } catch (error) {
                        errorString = `${errorString}\n    # NOTE: unable to read ${filePath}, skipping. Error: ${`${error?.stack||error}`.replace(/\n/g, "\n     #    ")}`
                    }
                }
                if (!file) {
                    throw error
                }
            }
        } catch (error) {
            console.error(`# NOTE: unable to read ${filePath}, skipping. Error: ${`${error?.stack||error}`.replace(/\n/g, "\n #    ")}\n${errorString}`)
            return
        }
        const libs = getRexportedLibs(file)
        for (let each of libs) {
            console.log(`- ${JSON.stringify(each)}`)
        }
        for (const lib of libs) {
            if (!alreadySeen.has(lib)) {
                alreadySeen.add(lib)
                recursivegetRexportedLibs(lib, alreadySeen)
            }
        }
    }
    recursivegetRexportedLibs(args.file)
}