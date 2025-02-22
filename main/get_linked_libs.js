import { parse as parseMachO } from "./mach_o.js"

/**
 * get list of linked libraries for a compiled macos file
 *
 * @example
 * ```js
 * const path = (new URL(import.meta.resolve("../test_data/libSystem.B.dylib"))).pathname
 * const file = Deno.readFileSync(path)
 * console.log(getLinkedLibs(file))
 * ```
 *
 * @param fileBytes - (Uint8Array or similar of .dylib file)
 * @returns {Object} output - keys=symbols, values=flags about the symbol
 */
export function getLinkedLibs(fileBytes) {
    const info = parseMachO(fileBytes)
    const reExportedThings = info.cmds.filter(each=>each.type == "reexport_dylib")
    // const otherCmds = info.cmds.filter(each=>each.type != "reexport_dylib")
    // new TextDecoder().decode(new Uint8Array(info.cmds.filter(each=>each.type == "uuid")[0].data))
    // reExportedThings.map(each=>new Uint8Array(each.data))
    const offsetToName = 20 // NOTE: this is from observation, not from documentation. I think this is always the same for "reexport_dylib" segments
    let outputPaths = []
    for (let { data } of reExportedThings) {
        const nameData = data.slice(offsetToName,)
        const pathString = (new TextDecoder().decode(nameData)).replace(/\x00+$/g,"") // chop off null terminator(s)
    }
    return outputPaths
}