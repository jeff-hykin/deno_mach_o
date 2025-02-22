# What is this?

This is modern easy-to-use tooling for getting data out of MacOS executables and dynamic libraries (even on the web!). This is a updated forked version of macho (npm).

# How do I use it?

There is both a handy CLI and a library, which do different things.

## JavaScript API (works in Browsers and Deno)

```js
import { parseMachO, getDynamicLibs, getRexportedLibs, getSymbolInfo } from "https://esm.sh/gh/jeff-hykin/mach_o_js@0.0.1.0/main.js"

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
const linkedLibs = await getRexportedLibs(uint8Array)
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

The CLI tools provide some enhanced outputs similar to what would be given by MacOS's `otool`.
For example: quickly get a list of both direct, and re-exported symbols from a binary (recursive).

### How do I install it?

```sh
deno install --global -n macho_list_symbols -Af https://esm.sh/mach_o_js@0.0.1.0/run/macho_list_symbols.js
deno install --global -n macho_list_dlibs -Af https://esm.sh/mach_o_js@0.0.1.0/run/macho_list_dlibs.js
```

### How do I use it?

NOTE: all output is valid YAML, for easy parsing!

```sh
macho_list_symbols --help
macho_list_symbols --version
macho_list_symbols --file /path/to/file.dylib
macho_list_symbols --file /path/to/file.dylib --direct-symbols-only
macho_list_symbols --file /path/to/file.dylib --include-internal-symbols
macho_list_symbols --file /path/to/file.dylib --extra-root '/path/to/root1' --extra-root "/path/to/root2"
```

```sh
macho_list_dlibs --help
macho_list_dlibs --version
macho_list_dlibs --file ~/.deno/bin/deno
macho_list_dlibs --file ~/.deno/bin/deno --strong-only
macho_list_dlibs --file ~/.deno/bin/deno --weak-only
macho_list_dlibs --file ~/.deno/bin/deno --recursive
macho_list_dlibs --file ~/.deno/bin/deno --recursive --extra-root '/path/to/root1' --extra-root "/path/to/root2"
```

## Help "unable to read /lib/system/libunwind.dylib"

So MacOS does this thing where the system libraries do not exist as files, which makes everything a pain.
However, you can get force them to become real files with this tool someone made [here](https://github.com/angelystor/dyld_shared_cache_util).

Once you extract those shared object files, use the `--extra-root` flag to tell the tool where you extracted them. 
NOTE: you'll probbaly need to use the `usr` subfolder as the root, like this: `macho_list_symbols --file your.dylib' --extra-root "$HOME/shared_cache/usr"` 