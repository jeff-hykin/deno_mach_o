var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// https://esm.sh/base64-js@1.5.1?dev&target=denonext
var base64_js_1_5_exports = {};
__export(base64_js_1_5_exports, {
  byteLength: () => z,
  default: () => J,
  fromByteArray: () => G,
  toByteArray: () => D
});

// https://esm.sh/base64-js@1.5.1/denonext/base64-js.development.mjs
var C = Object.create;
var s = Object.defineProperty;
var L = Object.getOwnPropertyDescriptor;
var g = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf;
var B = Object.prototype.hasOwnProperty;
var i = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var j = (r, e, t, a) => {
  if (e && typeof e == "object" || typeof e == "function") for (let o of g(e)) !B.call(r, o) && o !== t && s(r, o, { get: () => e[o], enumerable: !(a = L(e, o)) || a.enumerable });
  return r;
};
var k = (r, e, t) => (t = r != null ? C(m(r)) : {}, j(e || !r || !r.__esModule ? s(t, "default", { value: r, enumerable: true }) : t, r));
var p = i((u) => {
  "use strict";
  u.byteLength = H2;
  u.toByteArray = E;
  u.fromByteArray = T;
  var f = [], h = [], w = typeof Uint8Array < "u" ? Uint8Array : Array, A2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (d = 0, x2 = A2.length; d < x2; ++d) f[d] = A2[d], h[A2.charCodeAt(d)] = d;
  var d, x2;
  h[45] = 62;
  h[95] = 63;
  function l(r) {
    var e = r.length;
    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var t = r.indexOf("=");
    t === -1 && (t = e);
    var a = t === e ? 0 : 4 - t % 4;
    return [t, a];
  }
  function H2(r) {
    var e = l(r), t = e[0], a = e[1];
    return (t + a) * 3 / 4 - a;
  }
  function U(r, e, t) {
    return (e + t) * 3 / 4 - t;
  }
  function E(r) {
    var e, t = l(r), a = t[0], o = t[1], n = new w(U(r, a, o)), v3 = 0, F = o > 0 ? a - 4 : a, c;
    for (c = 0; c < F; c += 4) e = h[r.charCodeAt(c)] << 18 | h[r.charCodeAt(c + 1)] << 12 | h[r.charCodeAt(c + 2)] << 6 | h[r.charCodeAt(c + 3)], n[v3++] = e >> 16 & 255, n[v3++] = e >> 8 & 255, n[v3++] = e & 255;
    return o === 2 && (e = h[r.charCodeAt(c)] << 2 | h[r.charCodeAt(c + 1)] >> 4, n[v3++] = e & 255), o === 1 && (e = h[r.charCodeAt(c)] << 10 | h[r.charCodeAt(c + 1)] << 4 | h[r.charCodeAt(c + 2)] >> 2, n[v3++] = e >> 8 & 255, n[v3++] = e & 255), n;
  }
  function I2(r) {
    return f[r >> 18 & 63] + f[r >> 12 & 63] + f[r >> 6 & 63] + f[r & 63];
  }
  function O(r, e, t) {
    for (var a, o = [], n = e; n < t; n += 3) a = (r[n] << 16 & 16711680) + (r[n + 1] << 8 & 65280) + (r[n + 2] & 255), o.push(I2(a));
    return o.join("");
  }
  function T(r) {
    for (var e, t = r.length, a = t % 3, o = [], n = 16383, v3 = 0, F = t - a; v3 < F; v3 += n) o.push(O(r, v3, v3 + n > F ? F : v3 + n));
    return a === 1 ? (e = r[t - 1], o.push(f[e >> 2] + f[e << 4 & 63] + "==")) : a === 2 && (e = (r[t - 2] << 8) + r[t - 1], o.push(f[e >> 10] + f[e >> 4 & 63] + f[e << 2 & 63] + "=")), o.join("");
  }
});
var y = k(p());
var { byteLength: z, toByteArray: D, fromByteArray: G } = y;
var J = y.default ?? y;

// https://esm.sh/ieee754@1.2.1?dev&target=denonext
var ieee754_1_2_exports = {};
__export(ieee754_1_2_exports, {
  default: () => K,
  read: () => H,
  write: () => J2
});

// https://esm.sh/ieee754@1.2.1/denonext/ieee754.development.mjs
var B2 = Object.create;
var v = Object.defineProperty;
var k2 = Object.getOwnPropertyDescriptor;
var q = Object.getOwnPropertyNames;
var y2 = Object.getPrototypeOf;
var z2 = Object.prototype.hasOwnProperty;
var A = (t, r) => () => (r || t((r = { exports: {} }).exports, r), r.exports);
var C2 = (t, r, p2, w) => {
  if (r && typeof r == "object" || typeof r == "function") for (let i2 of q(r)) !z2.call(t, i2) && i2 !== p2 && v(t, i2, { get: () => r[i2], enumerable: !(w = k2(r, i2)) || w.enumerable });
  return t;
};
var D2 = (t, r, p2) => (p2 = t != null ? B2(y2(t)) : {}, C2(r || !t || !t.__esModule ? v(p2, "default", { value: t, enumerable: true }) : p2, t));
var I = A((n) => {
  n.read = function(t, r, p2, w, i2) {
    var M, a, s2 = i2 * 8 - w - 1, N = (1 << s2) - 1, c = N >> 1, o = -7, h = p2 ? i2 - 1 : 0, d = p2 ? -1 : 1, f = t[r + h];
    for (h += d, M = f & (1 << -o) - 1, f >>= -o, o += s2; o > 0; M = M * 256 + t[r + h], h += d, o -= 8) ;
    for (a = M & (1 << -o) - 1, M >>= -o, o += w; o > 0; a = a * 256 + t[r + h], h += d, o -= 8) ;
    if (M === 0) M = 1 - c;
    else {
      if (M === N) return a ? NaN : (f ? -1 : 1) * (1 / 0);
      a = a + Math.pow(2, w), M = M - c;
    }
    return (f ? -1 : 1) * a * Math.pow(2, M - w);
  };
  n.write = function(t, r, p2, w, i2, M) {
    var a, s2, N, c = M * 8 - i2 - 1, o = (1 << c) - 1, h = o >> 1, d = i2 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = w ? 0 : M - 1, j2 = w ? 1 : -1, g2 = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
    for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (s2 = isNaN(r) ? 1 : 0, a = o) : (a = Math.floor(Math.log(r) / Math.LN2), r * (N = Math.pow(2, -a)) < 1 && (a--, N *= 2), a + h >= 1 ? r += d / N : r += d * Math.pow(2, 1 - h), r * N >= 2 && (a++, N /= 2), a + h >= o ? (s2 = 0, a = o) : a + h >= 1 ? (s2 = (r * N - 1) * Math.pow(2, i2), a = a + h) : (s2 = r * Math.pow(2, h - 1) * Math.pow(2, i2), a = 0)); i2 >= 8; t[p2 + f] = s2 & 255, f += j2, s2 /= 256, i2 -= 8) ;
    for (a = a << i2 | s2, c += i2; c > 0; t[p2 + f] = a & 255, f += j2, a /= 256, c -= 8) ;
    t[p2 + f - j2] |= g2 * 128;
  };
});
var x = D2(I());
var { read: H, write: J2 } = x;
var K = x.default ?? x;

// https://esm.sh/buffer@6.0.3/denonext/buffer.development.mjs
var require2 = (n) => {
  const e = (m2) => typeof m2.default < "u" ? m2.default : m2, c = (m2) => Object.assign({ __esModule: true }, m2);
  switch (n) {
    case "base64-js":
      return e(base64_js_1_5_exports);
    case "ieee754":
      return e(ieee754_1_2_exports);
    default:
      console.error('module "' + n + '" not found');
      return null;
  }
};
var rr = Object.create;
var $ = Object.defineProperty;
var tr = Object.getOwnPropertyDescriptor;
var ir = Object.getOwnPropertyNames;
var nr = Object.getPrototypeOf;
var er = Object.prototype.hasOwnProperty;
var k3 = ((i2) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(i2, { get: (r, t) => (typeof require2 < "u" ? require2 : r)[t] }) : i2)(function(i2) {
  if (typeof require2 < "u") return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + i2 + '" is not supported');
});
var or = (i2, r) => () => (r || i2((r = { exports: {} }).exports, r), r.exports);
var ur = (i2, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function") for (let e of ir(r)) !er.call(i2, e) && e !== t && $(i2, e, { get: () => r[e], enumerable: !(n = tr(r, e)) || n.enumerable });
  return i2;
};
var hr = (i2, r, t) => (t = i2 != null ? rr(nr(i2)) : {}, ur(r || !i2 || !i2.__esModule ? $(t, "default", { value: i2, enumerable: true }) : t, i2));
var v2 = or((d) => {
  "use strict";
  var T = k3("base64-js"), g2 = k3("ieee754"), P = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  d.Buffer = u;
  d.SlowBuffer = yr;
  d.INSPECT_MAX_BYTES = 50;
  var U = 2147483647;
  d.kMaxLength = U;
  u.TYPED_ARRAY_SUPPORT = fr();
  !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function fr() {
    try {
      let i2 = new Uint8Array(1), r = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(i2, r), i2.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(u.prototype, "parent", { enumerable: true, get: function() {
    if (u.isBuffer(this)) return this.buffer;
  } });
  Object.defineProperty(u.prototype, "offset", { enumerable: true, get: function() {
    if (u.isBuffer(this)) return this.byteOffset;
  } });
  function x2(i2) {
    if (i2 > U) throw new RangeError('The value "' + i2 + '" is invalid for option "size"');
    let r = new Uint8Array(i2);
    return Object.setPrototypeOf(r, u.prototype), r;
  }
  function u(i2, r, t) {
    if (typeof i2 == "number") {
      if (typeof r == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
      return b(i2);
    }
    return Y(i2, r, t);
  }
  u.poolSize = 8192;
  function Y(i2, r, t) {
    if (typeof i2 == "string") return pr(i2, r);
    if (ArrayBuffer.isView(i2)) return lr(i2);
    if (i2 == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i2);
    if (a(i2, ArrayBuffer) || i2 && a(i2.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (a(i2, SharedArrayBuffer) || i2 && a(i2.buffer, SharedArrayBuffer))) return _(i2, r, t);
    if (typeof i2 == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    let n = i2.valueOf && i2.valueOf();
    if (n != null && n !== i2) return u.from(n, r, t);
    let e = sr(i2);
    if (e) return e;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof i2[Symbol.toPrimitive] == "function") return u.from(i2[Symbol.toPrimitive]("string"), r, t);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i2);
  }
  u.from = function(i2, r, t) {
    return Y(i2, r, t);
  };
  Object.setPrototypeOf(u.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(u, Uint8Array);
  function q2(i2) {
    if (typeof i2 != "number") throw new TypeError('"size" argument must be of type number');
    if (i2 < 0) throw new RangeError('The value "' + i2 + '" is invalid for option "size"');
  }
  function cr(i2, r, t) {
    return q2(i2), i2 <= 0 ? x2(i2) : r !== void 0 ? typeof t == "string" ? x2(i2).fill(r, t) : x2(i2).fill(r) : x2(i2);
  }
  u.alloc = function(i2, r, t) {
    return cr(i2, r, t);
  };
  function b(i2) {
    return q2(i2), x2(i2 < 0 ? 0 : L2(i2) | 0);
  }
  u.allocUnsafe = function(i2) {
    return b(i2);
  };
  u.allocUnsafeSlow = function(i2) {
    return b(i2);
  };
  function pr(i2, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
    let t = W(i2, r) | 0, n = x2(t), e = n.write(i2, r);
    return e !== t && (n = n.slice(0, e)), n;
  }
  function S(i2) {
    let r = i2.length < 0 ? 0 : L2(i2.length) | 0, t = x2(r);
    for (let n = 0; n < r; n += 1) t[n] = i2[n] & 255;
    return t;
  }
  function lr(i2) {
    if (a(i2, Uint8Array)) {
      let r = new Uint8Array(i2);
      return _(r.buffer, r.byteOffset, r.byteLength);
    }
    return S(i2);
  }
  function _(i2, r, t) {
    if (r < 0 || i2.byteLength < r) throw new RangeError('"offset" is outside of buffer bounds');
    if (i2.byteLength < r + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return r === void 0 && t === void 0 ? n = new Uint8Array(i2) : t === void 0 ? n = new Uint8Array(i2, r) : n = new Uint8Array(i2, r, t), Object.setPrototypeOf(n, u.prototype), n;
  }
  function sr(i2) {
    if (u.isBuffer(i2)) {
      let r = L2(i2.length) | 0, t = x2(r);
      return t.length === 0 || i2.copy(t, 0, 0, r), t;
    }
    if (i2.length !== void 0) return typeof i2.length != "number" || N(i2.length) ? x2(0) : S(i2);
    if (i2.type === "Buffer" && Array.isArray(i2.data)) return S(i2.data);
  }
  function L2(i2) {
    if (i2 >= U) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + U.toString(16) + " bytes");
    return i2 | 0;
  }
  function yr(i2) {
    return +i2 != i2 && (i2 = 0), u.alloc(+i2);
  }
  u.isBuffer = function(r) {
    return r != null && r._isBuffer === true && r !== u.prototype;
  };
  u.compare = function(r, t) {
    if (a(r, Uint8Array) && (r = u.from(r, r.offset, r.byteLength)), a(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(r) || !u.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (r === t) return 0;
    let n = r.length, e = t.length;
    for (let o = 0, h = Math.min(n, e); o < h; ++o) if (r[o] !== t[o]) {
      n = r[o], e = t[o];
      break;
    }
    return n < e ? -1 : e < n ? 1 : 0;
  };
  u.isEncoding = function(r) {
    switch (String(r).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  u.concat = function(r, t) {
    if (!Array.isArray(r)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0) return u.alloc(0);
    let n;
    if (t === void 0) for (t = 0, n = 0; n < r.length; ++n) t += r[n].length;
    let e = u.allocUnsafe(t), o = 0;
    for (n = 0; n < r.length; ++n) {
      let h = r[n];
      if (a(h, Uint8Array)) o + h.length > e.length ? (u.isBuffer(h) || (h = u.from(h)), h.copy(e, o)) : Uint8Array.prototype.set.call(e, h, o);
      else if (u.isBuffer(h)) h.copy(e, o);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      o += h.length;
    }
    return e;
  };
  function W(i2, r) {
    if (u.isBuffer(i2)) return i2.length;
    if (ArrayBuffer.isView(i2) || a(i2, ArrayBuffer)) return i2.byteLength;
    if (typeof i2 != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof i2);
    let t = i2.length, n = arguments.length > 2 && arguments[2] === true;
    if (!n && t === 0) return 0;
    let e = false;
    for (; ; ) switch (r) {
      case "ascii":
      case "latin1":
      case "binary":
        return t;
      case "utf8":
      case "utf-8":
        return C3(i2).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return t * 2;
      case "hex":
        return t >>> 1;
      case "base64":
        return Q(i2).length;
      default:
        if (e) return n ? -1 : C3(i2).length;
        r = ("" + r).toLowerCase(), e = true;
    }
  }
  u.byteLength = W;
  function wr(i2, r, t) {
    let n = false;
    if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r)) return "";
    for (i2 || (i2 = "utf8"); ; ) switch (i2) {
      case "hex":
        return Ur(this, r, t);
      case "utf8":
      case "utf-8":
        return X(this, r, t);
      case "ascii":
        return dr(this, r, t);
      case "latin1":
      case "binary":
        return Fr(this, r, t);
      case "base64":
        return gr(this, r, t);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Ar(this, r, t);
      default:
        if (n) throw new TypeError("Unknown encoding: " + i2);
        i2 = (i2 + "").toLowerCase(), n = true;
    }
  }
  u.prototype._isBuffer = true;
  function E(i2, r, t) {
    let n = i2[r];
    i2[r] = i2[t], i2[t] = n;
  }
  u.prototype.swap16 = function() {
    let r = this.length;
    if (r % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < r; t += 2) E(this, t, t + 1);
    return this;
  };
  u.prototype.swap32 = function() {
    let r = this.length;
    if (r % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < r; t += 4) E(this, t, t + 3), E(this, t + 1, t + 2);
    return this;
  };
  u.prototype.swap64 = function() {
    let r = this.length;
    if (r % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < r; t += 8) E(this, t, t + 7), E(this, t + 1, t + 6), E(this, t + 2, t + 5), E(this, t + 3, t + 4);
    return this;
  };
  u.prototype.toString = function() {
    let r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? X(this, 0, r) : wr.apply(this, arguments);
  };
  u.prototype.toLocaleString = u.prototype.toString;
  u.prototype.equals = function(r) {
    if (!u.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
    return this === r ? true : u.compare(this, r) === 0;
  };
  u.prototype.inspect = function() {
    let r = "", t = d.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (r += " ... "), "<Buffer " + r + ">";
  };
  P && (u.prototype[P] = u.prototype.inspect);
  u.prototype.compare = function(r, t, n, e, o) {
    if (a(r, Uint8Array) && (r = u.from(r, r.offset, r.byteLength)), !u.isBuffer(r)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r);
    if (t === void 0 && (t = 0), n === void 0 && (n = r ? r.length : 0), e === void 0 && (e = 0), o === void 0 && (o = this.length), t < 0 || n > r.length || e < 0 || o > this.length) throw new RangeError("out of range index");
    if (e >= o && t >= n) return 0;
    if (e >= o) return -1;
    if (t >= n) return 1;
    if (t >>>= 0, n >>>= 0, e >>>= 0, o >>>= 0, this === r) return 0;
    let h = o - e, f = n - t, l = Math.min(h, f), p2 = this.slice(e, o), s2 = r.slice(t, n);
    for (let c = 0; c < l; ++c) if (p2[c] !== s2[c]) {
      h = p2[c], f = s2[c];
      break;
    }
    return h < f ? -1 : f < h ? 1 : 0;
  };
  function j2(i2, r, t, n, e) {
    if (i2.length === 0) return -1;
    if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, N(t) && (t = e ? 0 : i2.length - 1), t < 0 && (t = i2.length + t), t >= i2.length) {
      if (e) return -1;
      t = i2.length - 1;
    } else if (t < 0) if (e) t = 0;
    else return -1;
    if (typeof r == "string" && (r = u.from(r, n)), u.isBuffer(r)) return r.length === 0 ? -1 : M(i2, r, t, n, e);
    if (typeof r == "number") return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? e ? Uint8Array.prototype.indexOf.call(i2, r, t) : Uint8Array.prototype.lastIndexOf.call(i2, r, t) : M(i2, [r], t, n, e);
    throw new TypeError("val must be string, number or Buffer");
  }
  function M(i2, r, t, n, e) {
    let o = 1, h = i2.length, f = r.length;
    if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
      if (i2.length < 2 || r.length < 2) return -1;
      o = 2, h /= 2, f /= 2, t /= 2;
    }
    function l(s2, c) {
      return o === 1 ? s2[c] : s2.readUInt16BE(c * o);
    }
    let p2;
    if (e) {
      let s2 = -1;
      for (p2 = t; p2 < h; p2++) if (l(i2, p2) === l(r, s2 === -1 ? 0 : p2 - s2)) {
        if (s2 === -1 && (s2 = p2), p2 - s2 + 1 === f) return s2 * o;
      } else s2 !== -1 && (p2 -= p2 - s2), s2 = -1;
    } else for (t + f > h && (t = h - f), p2 = t; p2 >= 0; p2--) {
      let s2 = true;
      for (let c = 0; c < f; c++) if (l(i2, p2 + c) !== l(r, c)) {
        s2 = false;
        break;
      }
      if (s2) return p2;
    }
    return -1;
  }
  u.prototype.includes = function(r, t, n) {
    return this.indexOf(r, t, n) !== -1;
  };
  u.prototype.indexOf = function(r, t, n) {
    return j2(this, r, t, n, true);
  };
  u.prototype.lastIndexOf = function(r, t, n) {
    return j2(this, r, t, n, false);
  };
  function ar(i2, r, t, n) {
    t = Number(t) || 0;
    let e = i2.length - t;
    n ? (n = Number(n), n > e && (n = e)) : n = e;
    let o = r.length;
    n > o / 2 && (n = o / 2);
    let h;
    for (h = 0; h < n; ++h) {
      let f = parseInt(r.substr(h * 2, 2), 16);
      if (N(f)) return h;
      i2[t + h] = f;
    }
    return h;
  }
  function xr(i2, r, t, n) {
    return A2(C3(r, i2.length - t), i2, t, n);
  }
  function Br(i2, r, t, n) {
    return A2(_r(r), i2, t, n);
  }
  function Er(i2, r, t, n) {
    return A2(Q(r), i2, t, n);
  }
  function mr(i2, r, t, n) {
    return A2(Cr(r, i2.length - t), i2, t, n);
  }
  u.prototype.write = function(r, t, n, e) {
    if (t === void 0) e = "utf8", n = this.length, t = 0;
    else if (n === void 0 && typeof t == "string") e = t, n = this.length, t = 0;
    else if (isFinite(t)) t = t >>> 0, isFinite(n) ? (n = n >>> 0, e === void 0 && (e = "utf8")) : (e = n, n = void 0);
    else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    let o = this.length - t;
    if ((n === void 0 || n > o) && (n = o), r.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    e || (e = "utf8");
    let h = false;
    for (; ; ) switch (e) {
      case "hex":
        return ar(this, r, t, n);
      case "utf8":
      case "utf-8":
        return xr(this, r, t, n);
      case "ascii":
      case "latin1":
      case "binary":
        return Br(this, r, t, n);
      case "base64":
        return Er(this, r, t, n);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return mr(this, r, t, n);
      default:
        if (h) throw new TypeError("Unknown encoding: " + e);
        e = ("" + e).toLowerCase(), h = true;
    }
  };
  u.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function gr(i2, r, t) {
    return r === 0 && t === i2.length ? T.fromByteArray(i2) : T.fromByteArray(i2.slice(r, t));
  }
  function X(i2, r, t) {
    t = Math.min(i2.length, t);
    let n = [], e = r;
    for (; e < t; ) {
      let o = i2[e], h = null, f = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
      if (e + f <= t) {
        let l, p2, s2, c;
        switch (f) {
          case 1:
            o < 128 && (h = o);
            break;
          case 2:
            l = i2[e + 1], (l & 192) === 128 && (c = (o & 31) << 6 | l & 63, c > 127 && (h = c));
            break;
          case 3:
            l = i2[e + 1], p2 = i2[e + 2], (l & 192) === 128 && (p2 & 192) === 128 && (c = (o & 15) << 12 | (l & 63) << 6 | p2 & 63, c > 2047 && (c < 55296 || c > 57343) && (h = c));
            break;
          case 4:
            l = i2[e + 1], p2 = i2[e + 2], s2 = i2[e + 3], (l & 192) === 128 && (p2 & 192) === 128 && (s2 & 192) === 128 && (c = (o & 15) << 18 | (l & 63) << 12 | (p2 & 63) << 6 | s2 & 63, c > 65535 && c < 1114112 && (h = c));
        }
      }
      h === null ? (h = 65533, f = 1) : h > 65535 && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), h = 56320 | h & 1023), n.push(h), e += f;
    }
    return Ir(n);
  }
  var O = 4096;
  function Ir(i2) {
    let r = i2.length;
    if (r <= O) return String.fromCharCode.apply(String, i2);
    let t = "", n = 0;
    for (; n < r; ) t += String.fromCharCode.apply(String, i2.slice(n, n += O));
    return t;
  }
  function dr(i2, r, t) {
    let n = "";
    t = Math.min(i2.length, t);
    for (let e = r; e < t; ++e) n += String.fromCharCode(i2[e] & 127);
    return n;
  }
  function Fr(i2, r, t) {
    let n = "";
    t = Math.min(i2.length, t);
    for (let e = r; e < t; ++e) n += String.fromCharCode(i2[e]);
    return n;
  }
  function Ur(i2, r, t) {
    let n = i2.length;
    (!r || r < 0) && (r = 0), (!t || t < 0 || t > n) && (t = n);
    let e = "";
    for (let o = r; o < t; ++o) e += br[i2[o]];
    return e;
  }
  function Ar(i2, r, t) {
    let n = i2.slice(r, t), e = "";
    for (let o = 0; o < n.length - 1; o += 2) e += String.fromCharCode(n[o] + n[o + 1] * 256);
    return e;
  }
  u.prototype.slice = function(r, t) {
    let n = this.length;
    r = ~~r, t = t === void 0 ? n : ~~t, r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < r && (t = r);
    let e = this.subarray(r, t);
    return Object.setPrototypeOf(e, u.prototype), e;
  };
  function y3(i2, r, t) {
    if (i2 % 1 !== 0 || i2 < 0) throw new RangeError("offset is not uint");
    if (i2 + r > t) throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(r, t, n) {
    r = r >>> 0, t = t >>> 0, n || y3(r, t, this.length);
    let e = this[r], o = 1, h = 0;
    for (; ++h < t && (o *= 256); ) e += this[r + h] * o;
    return e;
  };
  u.prototype.readUintBE = u.prototype.readUIntBE = function(r, t, n) {
    r = r >>> 0, t = t >>> 0, n || y3(r, t, this.length);
    let e = this[r + --t], o = 1;
    for (; t > 0 && (o *= 256); ) e += this[r + --t] * o;
    return e;
  };
  u.prototype.readUint8 = u.prototype.readUInt8 = function(r, t) {
    return r = r >>> 0, t || y3(r, 1, this.length), this[r];
  };
  u.prototype.readUint16LE = u.prototype.readUInt16LE = function(r, t) {
    return r = r >>> 0, t || y3(r, 2, this.length), this[r] | this[r + 1] << 8;
  };
  u.prototype.readUint16BE = u.prototype.readUInt16BE = function(r, t) {
    return r = r >>> 0, t || y3(r, 2, this.length), this[r] << 8 | this[r + 1];
  };
  u.prototype.readUint32LE = u.prototype.readUInt32LE = function(r, t) {
    return r = r >>> 0, t || y3(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  };
  u.prototype.readUint32BE = u.prototype.readUInt32BE = function(r, t) {
    return r = r >>> 0, t || y3(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  };
  u.prototype.readBigUInt64LE = B3(function(r) {
    r = r >>> 0, I2(r, "offset");
    let t = this[r], n = this[r + 7];
    (t === void 0 || n === void 0) && F(r, this.length - 8);
    let e = t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, o = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + n * 2 ** 24;
    return BigInt(e) + (BigInt(o) << BigInt(32));
  });
  u.prototype.readBigUInt64BE = B3(function(r) {
    r = r >>> 0, I2(r, "offset");
    let t = this[r], n = this[r + 7];
    (t === void 0 || n === void 0) && F(r, this.length - 8);
    let e = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], o = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n;
    return (BigInt(e) << BigInt(32)) + BigInt(o);
  });
  u.prototype.readIntLE = function(r, t, n) {
    r = r >>> 0, t = t >>> 0, n || y3(r, t, this.length);
    let e = this[r], o = 1, h = 0;
    for (; ++h < t && (o *= 256); ) e += this[r + h] * o;
    return o *= 128, e >= o && (e -= Math.pow(2, 8 * t)), e;
  };
  u.prototype.readIntBE = function(r, t, n) {
    r = r >>> 0, t = t >>> 0, n || y3(r, t, this.length);
    let e = t, o = 1, h = this[r + --e];
    for (; e > 0 && (o *= 256); ) h += this[r + --e] * o;
    return o *= 128, h >= o && (h -= Math.pow(2, 8 * t)), h;
  };
  u.prototype.readInt8 = function(r, t) {
    return r = r >>> 0, t || y3(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  };
  u.prototype.readInt16LE = function(r, t) {
    r = r >>> 0, t || y3(r, 2, this.length);
    let n = this[r] | this[r + 1] << 8;
    return n & 32768 ? n | 4294901760 : n;
  };
  u.prototype.readInt16BE = function(r, t) {
    r = r >>> 0, t || y3(r, 2, this.length);
    let n = this[r + 1] | this[r] << 8;
    return n & 32768 ? n | 4294901760 : n;
  };
  u.prototype.readInt32LE = function(r, t) {
    return r = r >>> 0, t || y3(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  };
  u.prototype.readInt32BE = function(r, t) {
    return r = r >>> 0, t || y3(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  };
  u.prototype.readBigInt64LE = B3(function(r) {
    r = r >>> 0, I2(r, "offset");
    let t = this[r], n = this[r + 7];
    (t === void 0 || n === void 0) && F(r, this.length - 8);
    let e = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (n << 24);
    return (BigInt(e) << BigInt(32)) + BigInt(t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  });
  u.prototype.readBigInt64BE = B3(function(r) {
    r = r >>> 0, I2(r, "offset");
    let t = this[r], n = this[r + 7];
    (t === void 0 || n === void 0) && F(r, this.length - 8);
    let e = (t << 24) + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(e) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n);
  });
  u.prototype.readFloatLE = function(r, t) {
    return r = r >>> 0, t || y3(r, 4, this.length), g2.read(this, r, true, 23, 4);
  };
  u.prototype.readFloatBE = function(r, t) {
    return r = r >>> 0, t || y3(r, 4, this.length), g2.read(this, r, false, 23, 4);
  };
  u.prototype.readDoubleLE = function(r, t) {
    return r = r >>> 0, t || y3(r, 8, this.length), g2.read(this, r, true, 52, 8);
  };
  u.prototype.readDoubleBE = function(r, t) {
    return r = r >>> 0, t || y3(r, 8, this.length), g2.read(this, r, false, 52, 8);
  };
  function w(i2, r, t, n, e, o) {
    if (!u.isBuffer(i2)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > e || r < o) throw new RangeError('"value" argument is out of bounds');
    if (t + n > i2.length) throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(r, t, n, e) {
    if (r = +r, t = t >>> 0, n = n >>> 0, !e) {
      let f = Math.pow(2, 8 * n) - 1;
      w(this, r, t, n, f, 0);
    }
    let o = 1, h = 0;
    for (this[t] = r & 255; ++h < n && (o *= 256); ) this[t + h] = r / o & 255;
    return t + n;
  };
  u.prototype.writeUintBE = u.prototype.writeUIntBE = function(r, t, n, e) {
    if (r = +r, t = t >>> 0, n = n >>> 0, !e) {
      let f = Math.pow(2, 8 * n) - 1;
      w(this, r, t, n, f, 0);
    }
    let o = n - 1, h = 1;
    for (this[t + o] = r & 255; --o >= 0 && (h *= 256); ) this[t + o] = r / h & 255;
    return t + n;
  };
  u.prototype.writeUint8 = u.prototype.writeUInt8 = function(r, t, n) {
    return r = +r, t = t >>> 0, n || w(this, r, t, 1, 255, 0), this[t] = r & 255, t + 1;
  };
  u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || w(this, r, t, 2, 65535, 0), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
  };
  u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || w(this, r, t, 2, 65535, 0), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
  };
  u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || w(this, r, t, 4, 4294967295, 0), this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255, t + 4;
  };
  u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || w(this, r, t, 4, 4294967295, 0), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
  };
  function V(i2, r, t, n, e) {
    Z(r, n, e, i2, t, 7);
    let o = Number(r & BigInt(4294967295));
    i2[t++] = o, o = o >> 8, i2[t++] = o, o = o >> 8, i2[t++] = o, o = o >> 8, i2[t++] = o;
    let h = Number(r >> BigInt(32) & BigInt(4294967295));
    return i2[t++] = h, h = h >> 8, i2[t++] = h, h = h >> 8, i2[t++] = h, h = h >> 8, i2[t++] = h, t;
  }
  function z3(i2, r, t, n, e) {
    Z(r, n, e, i2, t, 7);
    let o = Number(r & BigInt(4294967295));
    i2[t + 7] = o, o = o >> 8, i2[t + 6] = o, o = o >> 8, i2[t + 5] = o, o = o >> 8, i2[t + 4] = o;
    let h = Number(r >> BigInt(32) & BigInt(4294967295));
    return i2[t + 3] = h, h = h >> 8, i2[t + 2] = h, h = h >> 8, i2[t + 1] = h, h = h >> 8, i2[t] = h, t + 8;
  }
  u.prototype.writeBigUInt64LE = B3(function(r, t = 0) {
    return V(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  u.prototype.writeBigUInt64BE = B3(function(r, t = 0) {
    return z3(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  u.prototype.writeIntLE = function(r, t, n, e) {
    if (r = +r, t = t >>> 0, !e) {
      let l = Math.pow(2, 8 * n - 1);
      w(this, r, t, n, l - 1, -l);
    }
    let o = 0, h = 1, f = 0;
    for (this[t] = r & 255; ++o < n && (h *= 256); ) r < 0 && f === 0 && this[t + o - 1] !== 0 && (f = 1), this[t + o] = (r / h >> 0) - f & 255;
    return t + n;
  };
  u.prototype.writeIntBE = function(r, t, n, e) {
    if (r = +r, t = t >>> 0, !e) {
      let l = Math.pow(2, 8 * n - 1);
      w(this, r, t, n, l - 1, -l);
    }
    let o = n - 1, h = 1, f = 0;
    for (this[t + o] = r & 255; --o >= 0 && (h *= 256); ) r < 0 && f === 0 && this[t + o + 1] !== 0 && (f = 1), this[t + o] = (r / h >> 0) - f & 255;
    return t + n;
  };
  u.prototype.writeInt8 = function(r, t, n) {
    return r = +r, t = t >>> 0, n || w(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
  };
  u.prototype.writeInt16LE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || w(this, r, t, 2, 32767, -32768), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
  };
  u.prototype.writeInt16BE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || w(this, r, t, 2, 32767, -32768), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
  };
  u.prototype.writeInt32LE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || w(this, r, t, 4, 2147483647, -2147483648), this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24, t + 4;
  };
  u.prototype.writeInt32BE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || w(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
  };
  u.prototype.writeBigInt64LE = B3(function(r, t = 0) {
    return V(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  u.prototype.writeBigInt64BE = B3(function(r, t = 0) {
    return z3(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function H2(i2, r, t, n, e, o) {
    if (t + n > i2.length) throw new RangeError("Index out of range");
    if (t < 0) throw new RangeError("Index out of range");
  }
  function J3(i2, r, t, n, e) {
    return r = +r, t = t >>> 0, e || H2(i2, r, t, 4, 34028234663852886e22, -34028234663852886e22), g2.write(i2, r, t, n, 23, 4), t + 4;
  }
  u.prototype.writeFloatLE = function(r, t, n) {
    return J3(this, r, t, true, n);
  };
  u.prototype.writeFloatBE = function(r, t, n) {
    return J3(this, r, t, false, n);
  };
  function K2(i2, r, t, n, e) {
    return r = +r, t = t >>> 0, e || H2(i2, r, t, 8, 17976931348623157e292, -17976931348623157e292), g2.write(i2, r, t, n, 52, 8), t + 8;
  }
  u.prototype.writeDoubleLE = function(r, t, n) {
    return K2(this, r, t, true, n);
  };
  u.prototype.writeDoubleBE = function(r, t, n) {
    return K2(this, r, t, false, n);
  };
  u.prototype.copy = function(r, t, n, e) {
    if (!u.isBuffer(r)) throw new TypeError("argument should be a Buffer");
    if (n || (n = 0), !e && e !== 0 && (e = this.length), t >= r.length && (t = r.length), t || (t = 0), e > 0 && e < n && (e = n), e === n || r.length === 0 || this.length === 0) return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
    if (e < 0) throw new RangeError("sourceEnd out of bounds");
    e > this.length && (e = this.length), r.length - t < e - n && (e = r.length - t + n);
    let o = e - n;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, e) : Uint8Array.prototype.set.call(r, this.subarray(n, e), t), o;
  };
  u.prototype.fill = function(r, t, n, e) {
    if (typeof r == "string") {
      if (typeof t == "string" ? (e = t, t = 0, n = this.length) : typeof n == "string" && (e = n, n = this.length), e !== void 0 && typeof e != "string") throw new TypeError("encoding must be a string");
      if (typeof e == "string" && !u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
      if (r.length === 1) {
        let h = r.charCodeAt(0);
        (e === "utf8" && h < 128 || e === "latin1") && (r = h);
      }
    } else typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
    if (n <= t) return this;
    t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, r || (r = 0);
    let o;
    if (typeof r == "number") for (o = t; o < n; ++o) this[o] = r;
    else {
      let h = u.isBuffer(r) ? r : u.from(r, e), f = h.length;
      if (f === 0) throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (o = 0; o < n - t; ++o) this[o + t] = h[o % f];
    }
    return this;
  };
  var m2 = {};
  function D3(i2, r, t) {
    m2[i2] = class extends t {
      constructor() {
        super(), Object.defineProperty(this, "message", { value: r.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${i2}]`, this.stack, delete this.name;
      }
      get code() {
        return i2;
      }
      set code(e) {
        Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: e, writable: true });
      }
      toString() {
        return `${this.name} [${i2}]: ${this.message}`;
      }
    };
  }
  D3("ERR_BUFFER_OUT_OF_BOUNDS", function(i2) {
    return i2 ? `${i2} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError);
  D3("ERR_INVALID_ARG_TYPE", function(i2, r) {
    return `The "${i2}" argument must be of type number. Received type ${typeof r}`;
  }, TypeError);
  D3("ERR_OUT_OF_RANGE", function(i2, r, t) {
    let n = `The value of "${i2}" is out of range.`, e = t;
    return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? e = G2(String(t)) : typeof t == "bigint" && (e = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (e = G2(e)), e += "n"), n += ` It must be ${r}. Received ${e}`, n;
  }, RangeError);
  function G2(i2) {
    let r = "", t = i2.length, n = i2[0] === "-" ? 1 : 0;
    for (; t >= n + 4; t -= 3) r = `_${i2.slice(t - 3, t)}${r}`;
    return `${i2.slice(0, t)}${r}`;
  }
  function Rr(i2, r, t) {
    I2(r, "offset"), (i2[r] === void 0 || i2[r + t] === void 0) && F(r, i2.length - (t + 1));
  }
  function Z(i2, r, t, n, e, o) {
    if (i2 > t || i2 < r) {
      let h = typeof r == "bigint" ? "n" : "", f;
      throw o > 3 ? r === 0 || r === BigInt(0) ? f = `>= 0${h} and < 2${h} ** ${(o + 1) * 8}${h}` : f = `>= -(2${h} ** ${(o + 1) * 8 - 1}${h}) and < 2 ** ${(o + 1) * 8 - 1}${h}` : f = `>= ${r}${h} and <= ${t}${h}`, new m2.ERR_OUT_OF_RANGE("value", f, i2);
    }
    Rr(n, e, o);
  }
  function I2(i2, r) {
    if (typeof i2 != "number") throw new m2.ERR_INVALID_ARG_TYPE(r, "number", i2);
  }
  function F(i2, r, t) {
    throw Math.floor(i2) !== i2 ? (I2(i2, t), new m2.ERR_OUT_OF_RANGE(t || "offset", "an integer", i2)) : r < 0 ? new m2.ERR_BUFFER_OUT_OF_BOUNDS() : new m2.ERR_OUT_OF_RANGE(t || "offset", `>= ${t ? 1 : 0} and <= ${r}`, i2);
  }
  var Tr = /[^+/0-9A-Za-z-_]/g;
  function Sr(i2) {
    if (i2 = i2.split("=")[0], i2 = i2.trim().replace(Tr, ""), i2.length < 2) return "";
    for (; i2.length % 4 !== 0; ) i2 = i2 + "=";
    return i2;
  }
  function C3(i2, r) {
    r = r || 1 / 0;
    let t, n = i2.length, e = null, o = [];
    for (let h = 0; h < n; ++h) {
      if (t = i2.charCodeAt(h), t > 55295 && t < 57344) {
        if (!e) {
          if (t > 56319) {
            (r -= 3) > -1 && o.push(239, 191, 189);
            continue;
          } else if (h + 1 === n) {
            (r -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          e = t;
          continue;
        }
        if (t < 56320) {
          (r -= 3) > -1 && o.push(239, 191, 189), e = t;
          continue;
        }
        t = (e - 55296 << 10 | t - 56320) + 65536;
      } else e && (r -= 3) > -1 && o.push(239, 191, 189);
      if (e = null, t < 128) {
        if ((r -= 1) < 0) break;
        o.push(t);
      } else if (t < 2048) {
        if ((r -= 2) < 0) break;
        o.push(t >> 6 | 192, t & 63 | 128);
      } else if (t < 65536) {
        if ((r -= 3) < 0) break;
        o.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
      } else if (t < 1114112) {
        if ((r -= 4) < 0) break;
        o.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
      } else throw new Error("Invalid code point");
    }
    return o;
  }
  function _r(i2) {
    let r = [];
    for (let t = 0; t < i2.length; ++t) r.push(i2.charCodeAt(t) & 255);
    return r;
  }
  function Cr(i2, r) {
    let t, n, e, o = [];
    for (let h = 0; h < i2.length && !((r -= 2) < 0); ++h) t = i2.charCodeAt(h), n = t >> 8, e = t % 256, o.push(e), o.push(n);
    return o;
  }
  function Q(i2) {
    return T.toByteArray(Sr(i2));
  }
  function A2(i2, r, t, n) {
    let e;
    for (e = 0; e < n && !(e + t >= r.length || e >= i2.length); ++e) r[e + t] = i2[e];
    return e;
  }
  function a(i2, r) {
    return i2 instanceof r || i2 != null && i2.constructor != null && i2.constructor.name != null && i2.constructor.name === r.name;
  }
  function N(i2) {
    return i2 !== i2;
  }
  var br = function() {
    let i2 = "0123456789abcdef", r = new Array(256);
    for (let t = 0; t < 16; ++t) {
      let n = t * 16;
      for (let e = 0; e < 16; ++e) r[n + e] = i2[t] + i2[e];
    }
    return r;
  }();
  function B3(i2) {
    return typeof BigInt > "u" ? Lr : i2;
  }
  function Lr() {
    throw new Error("BigInt not supported");
  }
});
var R = hr(v2());
var { Buffer: kr, SlowBuffer: Pr, INSPECT_MAX_BYTES: Mr, kMaxLength: Or } = R;
var Gr = R.default ?? R;
export {
  kr as Buffer,
  Mr as INSPECT_MAX_BYTES,
  Pr as SlowBuffer,
  Gr as default,
  Or as kMaxLength
};
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
/*! Bundled license information:

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
