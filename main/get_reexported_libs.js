import { parse as parseMachO } from "./mach_o.js"

/**
 * get list of linked libraries for a compiled macos file
 *
 * @example
 * ```js
 * const path = (new URL(import.meta.resolve("../test_data/libSystem.B.dylib"))).pathname
 * const file = Deno.readFileSync(path)
 * console.log(getRexportedLibs(file))
 * ```
 *
 * @param fileBytes - (Uint8Array or similar of .dylib file)
 * @returns {[string]} output - list of linked libraries
 */
export function getRexportedLibs(fileBytes) {
    const info = parseMachO(fileBytes)
    const reExportedThings = info.cmds.filter(each=>each.type == "reexport_dylib")
    const offsetToName = 20 // NOTE: this is from observation, not from documentation. I think this is always the same for "reexport_dylib" segments
    let outputPaths = []
    for (let { data } of reExportedThings) {
        const nameData = data.slice(offsetToName,)
        const pathString = (new TextDecoder().decode(nameData)).replace(/\x00+$/g,"") // chop off null terminator(s)
        outputPaths.push(pathString)
    }
    return outputPaths
}