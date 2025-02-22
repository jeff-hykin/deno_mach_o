# What is this?

This is modern easy-to-use tooling for getting data out of MacOS executables and dynamic libraries. This is a updated forked version of macho (npm).

# How do I use it?

There is both a handy CLI and a library, which do different things.

## JavaScript API (works in Browsers and Deno)

```js
import { parseMachO, getLinkedLibs, getSymbolInfo } from "https://esm.sh/mach_o_js@0.0.1.0/main.js"

// get a Uint8Array of the file
let uint8Array = await Deno.readFile("./path/to/executable")

// the main function
const machoInfo = await parseMachO(uint8Array)

// example output:
// machoInfo = {
//   bits: 64,
//   magic: 4277009103,
//   cpu: { type: "arm64", subtype: "e", endian: "le" },
//   filetype: "dylib",
//   ncmds: 52,
//   hsize: 32,
//   sizeofcmds: 3976,
//   flags: {
//     noundefs: true,
//     dyldlink: true,
//     twolevel: true,
//     app_extension_safe: true
//   },
//   cmds: [
//      /* ... */
//   ],
// }

// some helpers
const linkedLibs = await getLinkedLibs(uint8Array)
console.log(linkedLibs) // ["/usr/lib/libSystem.B.dylib"]

const symbols = await getSymbolInfo(uint8Array)
// symbols = {
//   _libSystem_atfork_prepare: { internal: true },
//   _libSystem_atfork_parent: { internal: true },
//   _libSystem_initializer: { internal: true },
//   _libSystem_atfork_child: { internal: true },
//   _mach_init_old: { internal: true },
//   ___System_BVersionString: { internal: true },
//   ___System_BVersionNumber: { internal: true },
//   "_libSystem_initializer.libkernel_funcs": { internal: true },
//   "_libSystem_initializer.libpthread_funcs": { internal: true },
//   "_libSystem_initializer.libc_funcs": { internal: true },
//   ___crashreporter_info__: { internal: false },
//   ...
// }
```

## CLI

The CLI provides some enhanced outputs that would normally be given by MacOS's `otool`.
For example: quickly get a list of direct, and re-exported symbols from a binary recursively.

### How do I install it?

```sh
deno install --global -n macho_list_symbols -Af https://esm.sh/mach_o_js@0.0.1.0/run/macho_list_symbols.js
```

### How do I use it?

```sh
macho_list_symbols --help
macho_list_symbols --version
macho_list_symbols --file /path/to/file.dylib
macho_list_symbols --file /path/to/file.dylib --direct-symbols-only
macho_list_symbols --file /path/to/file.dylib --include-internal-symbols
macho_list_symbols --file /path/to/file.dylib --extra-roots '[ "/path/to/root1", "/path/to/root2" ]'
```