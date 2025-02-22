import { parse as parseMachO } from "./mach_o.js"
import { getLinkedLibs } from "./get_linked_libs.js"

/**
 * get symbol names and info for a .dylib file
 *
 * @example
 * ```js
 * const path = (new URL(import.meta.resolve("../test_data/libSystem.B.dylib"))).pathname
 * const file = Deno.readFileSync(path)
 * console.log(getSymbolInfo(file))
 * ```
 *
 * @param fileBytes - (Uint8Array or similar of .dylib file)
 * @returns {Object} output - keys=symbols, values=flags about the symbol
 */
export function getSymbolInfo(fileBytes, {returnList=false}={}) {
    // ensure its a Uint8Array
    fileBytes = new Uint8Array(fileBytes)
    const info = parseMachO(fileBytes)
    let allSymbols = {}
    const symbolTables = info.cmds.filter(each=>each.type == "symtab"||each.type == "dysymtab")
    let index = -1
    for (const each of symbolTables) {
        index++
        if (each.type == "symtab") {
            let internalSymbolCount = 0
            const bytes = fileBytes.slice(each.stroff, each.stroff + each.strsize)
            const str = new TextDecoder().decode(bytes)
            const symbols = str.replace(/(^\x00+|\x00+$)/g,"").split("\x00") // chop off null terminator(s)
            
            // NOTE: I dont know if its spec or coincidence that dysymtab comes after symtab commands
            //       its possible they're asscoiated in some way as well (like an offset) I'm not sure
            const next = symbolTables[index+1]
            // next = { // example
            //     type: "dysymtab",
            //     ilocalsym: 0,
            //     nlocalsym: 10,
            //     iextdefsym: 10,
            //     nextdefsym: 3,
            //     iundefsym: 13,
            //     nundefsym: 71,
            //     tocoff: 0,
            //     ntoc: 0,
            //     modtaboff: 0,
            //     nmodtab: 0,
            //     extrefsymoff: 0,
            //     nextrefsyms: 0,
            //     indirectsymoff: 10272,
            //     nindirectsyms: 124,
            //     extreloff: 0,
            //     nextrel: 0,
            //     locreloff: 0,
            //     nlocrel: 0,
            //     fileOffset: 1440
            // }
            if (next?.type == "dysymtab") {
                internalSymbolCount = next.nlocalsym
                if (internalSymbolCount-0 != internalSymbolCount-0) {
                    for (const key of symbols) {
                        allSymbols[key] = { unknown: true }
                    }
                } else {
                    for (const key of symbols.slice(0, internalSymbolCount)) {
                        allSymbols[key] = { internal: true }
                    }
                    for (const key of symbols.slice(internalSymbolCount)) {
                        allSymbols[key] = { internal: false }
                    }
                }
            } else {
                for (const key of symbols) {
                    allSymbols[key] = { unknown: true }
                }
            }
            // TODO: there's more than just internal and non-internal symbols
            //       I'm not sure how to parse that extra info though
            //       see `nm -gC ./file.dylib` for more info
                // S (Symbol Type): The letter after the address refers to the type or state of the symbol:
                //     T: The symbol is located in the text segment (i.e., it is a function). This symbol represents a code (function) defined in the current binary.
                //     S: The symbol is located in the data segment and is a static variable. This means the symbol is defined within the same binary and is a static (not global) variable, which usually resides in the data section.
                //     U: The symbol is undefined. This means the symbol is referenced but has no definition in the current binary. It's likely an external symbol that will be resolved at runtime when the binary is linked to other libraries or components.
                //     B: The symbol is in the bss section (uninitialized data).
                //     D: The symbol is in the data segment and is a initialized variable.
                //     C: The symbol is a constructor function (used for initialization).

        }
    }
    if (returnList) {
        return Object.keys(allSymbols)
    }
    return allSymbols
}