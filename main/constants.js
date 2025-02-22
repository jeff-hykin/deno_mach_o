export const cpuArch = {
    mask: 0xff000000,
    abi64: 0x01000000,
    abi32: 0x02000000,
}
export const cpuType = {
    0x01: "vax",
    0x06: "mc680x0",
    0x07: "i386",
    0x01000007: "x86_64",
    0x0a: "mc98000",
    0x0b: "hppa",
    0x0c: "arm",
    0x0100000c: "arm64",
    0x0200000c: "arm64_32",
    0x0d: "mc88000",
    0x0e: "sparc",
    0x0f: "i860",
    0x10: "alpha",
    0x12: "powerpc",
    0x01000012: "powerpc64",
}
export const endian = {
    0xffffffff: "multiple",
    0: "le",
    1: "be",
}
export const cpuSubType = {
    mask: 0x00ffffff,
    vax: {
        0: "all",
        1: "780",
        2: "785",
        3: "750",
        4: "730",
        5: "I",
        6: "II",
        7: "8200",
        8: "8500",
        9: "8600",
        10: "8650",
        11: "8800",
        12: "III",
    },
    mc680x0: {
        1: "all",
        2: "40",
        3: "30_only",
    },
    i386: {},
    x86_64: {
        3: "all",
        4: "arch1",
    },
    mips: {
        0: "all",
        1: "r2300",
        2: "r2600",
        3: "r2800",
        4: "r2000a",
        5: "r2000",
        6: "r3000a",
        7: "r3000",
    },
    mc98000: {
        0: "all",
        1: "mc98601",
    },
    hppa: {
        0: "all",
        1: "7100lc",
    },
    mc88000: {
        0: "all",
        1: "mc88100",
        2: "mc88110",
    },
    sparc: {
        0: "all",
    },
    i860: {
        0: "all",
        1: "860",
    },
    powerpc: {
        0: "all",
        1: "601",
        2: "602",
        3: "603",
        4: "603e",
        5: "603ev",
        6: "604",
        7: "604e",
        8: "620",
        9: "750",
        10: "7400",
        11: "7450",
        100: "970",
    },
    arm: {
        0: "all",
        5: "v4t",
        6: "v6",
        7: "v5tej",
        8: "xscale",
        9: "v7",
        10: "v7f",
        11: "v7s",
        12: "v7k",
        14: "v6m",
        15: "v7m",
        16: "v7em",
    },
    arm64: {
        0: "all",
        1: "v8",
        2: "e",
    },
    arm64_32: {
        1: "all",
    },
}

function cpuSubtypeIntel(a, b, name) {
    cpuSubType.i386[a + (b << 4)] = name
}

;[
    [3, 0, "all"],
    [4, 0, "486"],
    [4, 8, "486sx"],
    [5, 0, "586"],
    [6, 1, "pentpro"],
    [6, 3, "pentII_m3"],
    [6, 5, "pentII_m5"],
    [7, 6, "celeron"],
    [7, 7, "celeron_mobile"],
    [8, 0, "pentium_3"],
    [8, 1, "pentium_3_m"],
    [8, 2, "pentium_3_xeon"],
    [9, 0, "pentium_m"],
    [10, 0, "pentium_4"],
    [10, 1, "pentium_4_m"],
    [11, 0, "itanium"],
    [11, 1, "itanium_2"],
    [12, 0, "xeon"],
    [12, 1, "xeon_mp"],
].forEach(function (item) {
    cpuSubtypeIntel(item[0], item[1], item[2])
})
export const fileType = {
    1: "object",
    2: "execute",
    3: "fvmlib",
    4: "core",
    5: "preload",
    6: "dylib",
    7: "dylinker",
    8: "bundle",
    9: "dylib_stub",
    10: "dsym",
    11: "kext",
}

// for flags
//     see: https://stackoverflow.com/a/54572306/4367134
//     and: https://web.archive.org/web/20230328221404/https://opensource.apple.com/source/cctools/cctools-921/include/mach-o/loader.h.auto.html
export const flags = {
    0x1: "noundefs", /* the object file has no undefined references */
    0x2: "incrlink", /* the object file is the output of an incremental link against a base file and can't be link edited again */
    0x4: "dyldlink", /* the object file is input for the dynamic linker and can't be staticly link edited again */
    0x8: "bindatload", /* the object file's undefined references are bound by the dynamic linker when loaded. */
    0x10: "prebound", /* the file has its dynamic undefined references prebound. */
    0x20: "split_segs", /* the file has its read-only and read-write segments split */
    0x40: "lazy_init", /* the shared library init routine is to be run lazily via catching memory faults to its writeable segments (obsolete) */
    0x80: "twolevel", /* the image is using two-level name space bindings */
    0x100: "force_flat", /* the executable is forcing all images to use flat name space bindings */
    0x200: "nomultidefs", /* this umbrella guarantees no multiple defintions of symbols in its sub-images so the two-level namespace hints can always be used. */
    0x400: "nofixprebinding", /* do not have dyld notify the prebinding agent about this executable */
    0x800: "prebindable", /* the binary is not prebound but can have its prebinding redone. only used when MH_PREBOUND is not set. */
    0x1000: "allmodsbound", /* indicates that this binary binds to all two-level namespace modules of its dependent libraries. only used when MH_PREBINDABLE and MH_TWOLEVEL are both set. */ 
    0x2000: "subsections_via_symbols", /* safe to divide up the sections into sub-sections via symbols for dead code stripping */
    0x4000: "canonical", /* the binary has been canonicalized via the unprebind operation */
    0x8000: "weak_defines", /* the final linked image contains external weak symbols */
    0x10000: "binds_to_weak", /* the final linked image uses weak symbols */
    0x20000: "allow_stack_execution", /* When this bit is set, all stacks  in the task will be given stack execution privilege.  Only used in MH_EXECUTE filetypes. */
    0x40000: "root_safe", /* When this bit is set, the binary  declares it is safe for use in processes with uid zero */
    0x80000: "setuid_safe", /* When this bit is set, the binary  declares it is safe for use in processes when issetugid() is true */
    0x100000: "reexported_dylibs", /* When this bit is set on a dylib,  the static linker does not need to examine dependent dylibs to see if any are re-exported */
    0x200000: "pie", /* When this bit is set, the OS will load the main executable at a random address.  Only used in MH_EXECUTE filetypes. */
    0x400000: "dead_strippable_dylib", /* Only for use on dylibs.  When linking against a dylib that has this bit set, the static linker will automatically not create a LC_LOAD_DYLIB load command to the dylib if no symbols are being referenced from the dylib. */
    0x800000: "has_tlv_descriptors", /* Contains a section of type  S_THREAD_LOCAL_VARIABLES */
    0x1000000: "no_heap_execution", /* When this bit is set, the OS will run the main executable with a non-executable heap even on platforms (e.g. i386) that don't require it. Only used in MH_EXECUTE filetypes. */
    0x2000000: "app_extension_safe",  /* The code was linked for use in an application extension. */
    0x4000000: "nlist_outofsync_with_dyldinfo",  /* The external symbols listed in the nlist symbol table do not include all the symbols listed in the dyld info. */
    0x8000000: "sim_support",  /* Allow LC_MIN_VERSION_MACOS and LC_BUILD_VERSION load commands with the platforms macOS, iOSMac, iOSSimulator, tvOSSimulator and watchOSSimulator. */
}
export const cmdType = {
    0x80000000: "req_dyld",
    0x1: "segment",
    0x2: "symtab",
    0x3: "symseg",
    0x4: "thread",
    0x5: "unixthread",
    0x6: "loadfvmlib",
    0x7: "idfvmlib",
    0x8: "ident",
    0x9: "fmvfile",
    0xa: "prepage",
    0xb: "dysymtab",
    0xc: "load_dylib",
    0xd: "id_dylib",
    0xe: "load_dylinker",
    0xf: "id_dylinker",
    0x10: "prebound_dylib",
    0x11: "routines",
    0x12: "sub_framework",
    0x13: "sub_umbrella",
    0x14: "sub_client",
    0x15: "sub_library",
    0x16: "twolevel_hints",
    0x17: "prebind_cksum",

    0x80000018: "load_weak_dylib",
    0x19: "segment_64",
    0x1a: "routines_64",
    0x1b: "uuid",
    0x8000001c: "rpath",
    0x1d: "code_signature",
    0x1e: "segment_split_info",
    0x8000001f: "reexport_dylib",
    0x20: "lazy_load_dylib",
    0x21: "encryption_info",
    0x80000022: "dyld_info",
    0x80000023: "dyld_info_only",
    0x24: "version_min_macosx",
    0x25: "version_min_iphoneos",
    0x26: "function_starts",
    0x27: "dyld_environment",
    0x80000028: "main",
    0x29: "data_in_code",
    0x2a: "source_version",
    0x2b: "dylib_code_sign_drs",
    0x2c: "encryption_info_64",
    0x2d: "linker_option",
    0x80000033: "dyld_exports_trie", // idk exactlty what this refers to in the Apple source code
    0x80000034: "dyld_chained_fixups", // idk exactlty what this refers to in the Apple source code
    0x2E: "linker_optimization_hint",  /* optimization hints in MH_OBJECT files */
    0x2F: "version_min_tvos",  /* build for AppleTV min OS version */
    0x30: "version_min_watchos",  /* build for Watch min OS version */
    0x31: "note",  /* arbitrary data included within a Mach-O file */
    0x32: "build_version",  /* build for platform min OS version */
}
export const prot = {
    none: 0,
    read: 1,
    write: 2,
    execute: 4,
}
export const segFlag = {
    1: "highvm",
    2: "fvmlib",
    4: "noreloc",
    8: "protected_version_1",
}
export const segTypeMask = 0xff
export const segType = {
    0: "regular",
    1: "zerofill",
    2: "cstring_literals",
    3: "4byte_literals",
    4: "8byte_literals",
    5: "literal_pointers",
    6: "non_lazy_symbol_pointers",
    7: "lazy_symbol_pointers",
    8: "symbol_stubs",
    9: "mod_init_func_pointers",
    0xa: "mod_term_func_pointers",
    0xb: "coalesced",
    0xc: "gb_zerofill",
    0xd: "interposing",
    0xe: "16byte_literals",
    0xf: "dtrace_dof",
    0x10: "lazy_dylib_symbol_pointers",
    0x11: "thread_local_regular",
    0x12: "thread_local_zerofill",
    0x13: "thread_local_variables",
    0x14: "thread_local_variable_pointers",
    0x15: "thread_local_init_function_pointers",
}
export const segAttrUsrMask = 0xff000000
export const segAttrUsr = {
    "-2147483648": "pure_instructions",
    0x40000000: "no_toc",
    0x20000000: "strip_static_syms",
    0x10000000: "no_dead_strip",
    0x08000000: "live_support",
    0x04000000: "self_modifying_code",
    0x02000000: "debug",
}
export const segAttrSysMask = 0x00ffff00
export const segAttrSys = {
    0x400: "some_instructions",
    0x200: "ext_reloc",
    0x100: "loc_reloc",
}
