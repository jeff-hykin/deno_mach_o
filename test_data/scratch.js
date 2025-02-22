import { parse } from '/Users/jeffhykin/repos/deno_libc/tooling/macos/mach_o.js#adf'
var f = Deno.readFileSync("/Users/jeffhykin/.deno/bin/deno")
var info = parse(f)
var a = {...info}
delete a.cmds
info.cmds.filter(each=>each.type != "reexport_dylib")
var toStr = (arr)=>new TextDecoder().decode(new Uint8Array(arr))
var b

var types = [
    "segment_64",
    "dyld_info",
    "symtab",
    "dysymtab",
    "load_dylinker",
    "uuid",
    "build_version",
    "main",
    "load_dylib",
    "load_weak_dylib",
    "function_starts",
    "data_in_code",
    "code_signature"
]

var sizes = info.cmds.filter(each=>each.type=="segment_64")[5].sections.map(each=>[each.sectname,toStr(each.data)])
info.cmds.filter(each=>each.type=="segment_64")[5].sections.map(each=>[each.sectname,toStr(each.data)])
toStr(f.slice(968,1120))
info.cmds.filter(each=>each.type=="segment_64").map(each=>each.offset)
var sum = 0
for (let each of info.cmds.filter(each=>each.type=="segment_64").map(each=>each.filesize)) {
    sum += each
}
// info.cmds.map(each=>each.filesize)

toStr(f.slice(b=10769)).replace(/\x00+$/g,"").split("\x00")
toStr(f.slice(b=1416,b+100)).replace(/\x00+$/g,"").split("\x00")
var i = 0
for (let each of toStr(f)) {
    i++
    if (toStr(f.slice(i,i+50)).includes("/usr/lib/libSystem.B.dylib" )) {
        console.log(i)
        break
    }
}


// 3976




var t =new Set(["___crashreporter_info__",
"___error",
"___keymgr_initializer",
"___libdarwin_init",
"___libkernel_init",
"___libkernel_init_after_boot_tasks",
"___libkernel_init_late",
"___libplatform_init",
"___malloc_init",
"___malloc_late_init",
"___pthread_init",
"___pthread_late_init",
"__asl_fork_child",
"__container_init",
"__dirhelper",
"__dyld_atfork_parent",
"__dyld_atfork_prepare",
"__dyld_dlopen_atfork_child",
"__dyld_dlopen_atfork_parent",
"__dyld_dlopen_atfork_prepare",
"__dyld_fork_child",
"__dyld_initializer",
"__libSC_info_fork_child",
"__libSC_info_fork_parent",
"__libSC_info_fork_prepare",
"__libc_fork_child",
"__libc_initializer",
"__libcoreservices_fork_child",
"__libsecinit_initializer",
"__libtrace_fork_child",
"__libtrace_init",
"__libxpc_initializer",
"__mach_fork_child",
"__malloc_fork_child",
"__malloc_fork_parent",
"__malloc_fork_prepare",
"__notify_fork_child",
"__os_feature_enabled_impl",
"__pthread_atfork_child",
"__pthread_atfork_child_handlers",
"__pthread_atfork_parent",
"__pthread_atfork_parent_handlers",
"__pthread_atfork_prepare",
"__pthread_atfork_prepare_handlers",
"__pthread_clear_qos_tsd",
"__pthread_exit_if_canceled",
"_cc_atfork_child",
"_cc_atfork_parent",
"_cc_atfork_prepare",
"_dispatch_atfork_child",
"_dispatch_atfork_parent",
"_dispatch_atfork_prepare",
"_dlopen",
"_dlsym",
"_dyld_get_active_platform",
"_dyld_get_program_sdk_version",
"_dyld_program_sdk_at_least",
"_exit",
"_free",
"_getenv",
"_getpid",
"_kdebug_trace",
"_libSystem_init_after_boot_tasks_4launchd",
"_libdispatch_init",
"_mach_init_routine",
"_malloc",
"_os_variant_has_internal_diagnostics",
"_pthread_current_stack_contains_np",
"_realloc",
"_strncmp",
"_strtol",
"_xpc_atfork_child",
"_xpc_atfork_parent",
"_xpc_atfork_prepare",])