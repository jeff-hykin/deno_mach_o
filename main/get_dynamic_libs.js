import { parse as parseMachO } from "./mach_o.js"

/**
 * get list of linked libraries for a compiled macos file
 *
 * @example
 * ```js
 * const path = (new URL(import.meta.resolve("../test_data/libSystem.B.dylib"))).pathname
 * const file = Deno.readFileSync(path)
 * console.log(getDynamicLibs(file))
 * ```
 *
 * @param fileBytes - (Uint8Array or similar of .dylib file)
 * @returns {[string]} output - list of linked libraries
 */
export function getDynamicLibs(fileBytes, {onlyStrongLibs=false, onlyWeakLibs=false}={}) {
    const info = parseMachO(fileBytes)
    return info.cmds.filter(each=>(!onlyWeakLibs && each.type == "load_dylib")||(!onlyStrongLibs && each.type == "load_weak_dylib")).map(each=>each.name)
}