import { g as tr, w as Li } from "./runtime.Ch_-BveN.js";
let vl, wl, Al, Rl, El, Il, yl, Cs, Cl, Hl, ml, Rs, kl, ks;
let __tla = (async ()=>{
    const on = Symbol.for("_am_meta"), mt = Symbol.for("_am_trace"), wt = Symbol.for("_am_objectId"), nr = Symbol.for("_am_isProxy"), rr = Symbol.for("_am_clearCache"), $i = Symbol.for("_am_uint"), Vi = Symbol.for("_am_int"), zi = Symbol.for("_am_f64"), Ds = Symbol.for("_am_counter"), Os = Symbol.for("_am_immutableString");
    class Bn {
        constructor(e){
            this.value = e || 0, Reflect.defineProperty(this, Ds, {
                value: !0
            });
        }
        valueOf() {
            return this.value;
        }
        toString() {
            return this.valueOf().toString();
        }
        toJSON() {
            return this.value;
        }
        increment(e) {
            throw new Error("Counters should not be incremented outside of a change callback");
        }
        decrement(e) {
            throw new Error("Counters should not be decremented outside of a change callback");
        }
    }
    class Ni extends Bn {
        constructor(e, n, r, s, i){
            super(e), this.context = n, this.path = r, this.objectId = s, this.key = i;
        }
        increment(e) {
            return e = typeof e == "number" ? e : 1, this.context.increment(this.objectId, this.key, e), this.value += e, this.value;
        }
        decrement(e) {
            return this.increment(typeof e == "number" ? -e : -1);
        }
    }
    function qi(t, e, n, r, s) {
        return new Ni(t, e, n, r, s);
    }
    var Ms;
    class Ts {
        constructor(e){
            this[Ms] = !0, this.val = e;
        }
        toString() {
            return this.val;
        }
        toJSON() {
            return this.val;
        }
    }
    Ms = Os;
    const Wi = BigInt("9223372036854775807");
    function ct(t, e, n) {
        if (t === void 0) throw new RangeError([
            `Cannot assign undefined value at ${jn(n)}, `,
            "You might consider setting the property's value to `null`, ",
            "or using `delete` to remove it altogether."
        ].join(""));
        if (!(t === null || typeof t !== "object")) {
            if (e && Ct(t, e)) throw new RangeError("Cannot create a reference to an existing document object");
            if (t instanceof Array) for(let s = 0; s < t.length; s++)ct(t[s], e, [
                ...n,
                s
            ]);
            else if (Object.prototype.toString.call(t) === "[object Object]") for(const s in t)ct(t[s], e, [
                ...n,
                s
            ]);
        }
    }
    function Be(t) {
        if (typeof t == "string" && /^[0-9]+$/.test(t) && (t = parseInt(t, 10)), typeof t != "number") return t;
        if (t < 0 || isNaN(t) || t === 1 / 0 || t === -1 / 0) throw new RangeError("A list index must be positive, but you passed " + t);
        return t;
    }
    function _e(t, e) {
        const { context: n, objectId: r, path: s } = t, i = n.getWithType(r, e);
        if (i === null) return;
        const o = i[0], a = i[1];
        switch(o){
            case void 0:
                return;
            case "map":
                return Us(n, a, [
                    ...s,
                    e
                ]);
            case "list":
                return Ji(n, a, [
                    ...s,
                    e
                ]);
            case "text":
                return n.text(a);
            case "str":
                return new Ts(a);
            case "uint":
                return a;
            case "int":
                return a;
            case "f64":
                return a;
            case "boolean":
                return a;
            case "null":
                return null;
            case "bytes":
                return a;
            case "timestamp":
                return a;
            case "counter":
                return qi(a, n, s, r, e);
            default:
                throw RangeError(`datatype ${o} unimplemented`);
        }
    }
    function sr(t, e, n) {
        const r = typeof t;
        switch(r){
            case "object":
                if (t == null) return [
                    null,
                    "null"
                ];
                if (t[$i]) return [
                    t.value,
                    "uint"
                ];
                if (t[Vi]) return [
                    t.value,
                    "int"
                ];
                if (t[zi]) return [
                    t.value,
                    "f64"
                ];
                if (t[Ds]) return [
                    t.value,
                    "counter"
                ];
                if (t instanceof Date) return [
                    t.getTime(),
                    "timestamp"
                ];
                if (Bs(t)) return [
                    t.toString(),
                    "str"
                ];
                if (t instanceof Uint8Array) return [
                    t,
                    "bytes"
                ];
                if (t instanceof Array) return [
                    t,
                    "list"
                ];
                if (Object.prototype.toString.call(t) === "[object Object]") return [
                    t,
                    "map"
                ];
                throw Ct(t, n) ? new RangeError("Cannot create a reference to an existing document object") : new RangeError(`Cannot assign unknown object: ${t}`);
            case "boolean":
                return [
                    t,
                    "boolean"
                ];
            case "bigint":
                return t > Wi ? [
                    t,
                    "uint"
                ] : [
                    t,
                    "int"
                ];
            case "number":
                return Number.isInteger(t) ? [
                    t,
                    "int"
                ] : [
                    t,
                    "f64"
                ];
            case "string":
                return [
                    t,
                    "text"
                ];
            case "undefined":
                throw new RangeError([
                    `Cannot assign undefined value at ${jn(e)}, `,
                    "because `undefined` is not a valid JSON data type. ",
                    "You might consider setting the property's value to `null`, ",
                    "or using `delete` to remove it altogether."
                ].join(""));
            default:
                throw new RangeError([
                    `Cannot assign ${r} value at ${jn(e)}. `,
                    "All JSON primitive datatypes (object, array, string, number, boolean, null) ",
                    `are supported in an Automerge document; ${r} values are not. `
                ].join(""));
        }
    }
    function Ct(t, e) {
        var n, r;
        return t instanceof Date ? !1 : !!(t && ((r = (n = t[on]) === null || n === void 0 ? void 0 : n.handle) === null || r === void 0 ? void 0 : r.__wbg_ptr) === e.__wbg_ptr);
    }
    const Gi = {
        get (t, e) {
            const { context: n, objectId: r, cache: s } = t;
            return e === Symbol.toStringTag ? t[Symbol.toStringTag] : e === wt ? r : e === nr ? !0 : e === mt ? t.trace : e === on ? {
                handle: n
            } : (s[e] || (s[e] = _e(t, e)), s[e]);
        },
        set (t, e, n) {
            const { context: r, objectId: s, path: i } = t;
            if (t.cache = {}, Ct(n, r)) throw new RangeError("Cannot create a reference to an existing document object");
            if (e === mt) return t.trace = n, !0;
            if (e === rr) return !0;
            const [o, a] = sr(n, [
                ...i,
                e
            ], r);
            switch(a){
                case "list":
                case "map":
                    {
                        ct(o, r, [
                            ...i,
                            e
                        ]), r.putObjectFromHydrate(s, e, o);
                        break;
                    }
                case "text":
                    {
                        r.putObject(s, e, o);
                        break;
                    }
                default:
                    r.put(s, e, o, a);
            }
            return !0;
        },
        deleteProperty (t, e) {
            const { context: n, objectId: r } = t;
            return t.cache = {}, n.delete(r, e), !0;
        },
        has (t, e) {
            return this.get(t, e) !== void 0;
        },
        getOwnPropertyDescriptor (t, e) {
            const n = this.get(t, e);
            if (typeof n < "u") return {
                configurable: !0,
                enumerable: !0,
                value: n
            };
        },
        ownKeys (t) {
            const { context: e, objectId: n } = t, r = e.keys(n);
            return [
                ...new Set(r)
            ];
        }
    }, Ki = {
        get (t, e) {
            const { context: n, objectId: r } = t;
            return e = Be(e), e === Symbol.hasInstance ? (s)=>Array.isArray(s) : e === Symbol.toStringTag ? t[Symbol.toStringTag] : e === wt ? r : e === nr ? !0 : e === mt ? t.trace : e === on ? {
                handle: n
            } : e === "length" ? n.length(r) : typeof e == "number" ? _e(t, e) : Xi(t)[e];
        },
        set (t, e, n) {
            const { context: r, objectId: s, path: i } = t;
            if (e = Be(e), Ct(n, r)) throw new RangeError("Cannot create a reference to an existing document object");
            if (e === rr) return !0;
            if (e === mt) return t.trace = n, !0;
            if (typeof e == "string") throw new RangeError("list index must be a number");
            const [o, a] = sr(n, [
                ...i,
                e
            ], r);
            switch(a){
                case "list":
                case "map":
                    {
                        ct(o, r, [
                            ...i,
                            e
                        ]), e >= r.length(s) ? r.insertObjectFromHydrate(s, e, o) : r.putObjectFromHydrate(s, e, o);
                        break;
                    }
                case "text":
                    {
                        e >= r.length(s) ? r.insertObject(s, e, o) : r.putObject(s, e, o);
                        break;
                    }
                default:
                    e >= r.length(s) ? r.insert(s, e, o, a) : r.put(s, e, o, a);
            }
            return !0;
        },
        deleteProperty (t, e) {
            const { context: n, objectId: r } = t;
            e = Be(e);
            const s = n.get(r, e);
            if (s != null && s[0] == "counter") throw new TypeError("Unsupported operation: deleting a counter from a list");
            return n.delete(r, e), !0;
        },
        has (t, e) {
            const { context: n, objectId: r } = t;
            return e = Be(e), typeof e == "number" ? e < n.length(r) : e === "length";
        },
        getOwnPropertyDescriptor (t, e) {
            const { context: n, objectId: r } = t;
            return e === "length" ? {
                writable: !0,
                value: n.length(r)
            } : e === wt ? {
                configurable: !1,
                enumerable: !1,
                value: r
            } : (e = Be(e), {
                configurable: !0,
                enumerable: !0,
                value: _e(t, e)
            });
        },
        getPrototypeOf (t) {
            return Object.getPrototypeOf(t);
        },
        ownKeys () {
            const t = [];
            return t.push("length"), t;
        }
    };
    function Us(t, e, n) {
        const r = {
            context: t,
            objectId: e,
            path: n || [],
            cache: {}
        }, s = {};
        return Object.assign(s, r), new Proxy(s, Gi);
    }
    function Ji(t, e, n) {
        const r = {
            context: t,
            objectId: e,
            path: n || [],
            cache: {}
        }, s = [];
        return Object.assign(s, r), new Proxy(s, Ki);
    }
    function Yi(t) {
        return Us(t, "_root", []);
    }
    function Xi(t) {
        const { context: e, objectId: n, path: r } = t;
        return {
            at (i) {
                return _e(t, i);
            },
            deleteAt (i, o) {
                return typeof o == "number" ? e.splice(n, i, o) : e.delete(n, i), this;
            },
            fill (i, o, a) {
                const [c, u] = sr(i, [
                    ...r,
                    o
                ], e), g = e.length(n);
                o = Be(o || 0), a = Be(a || g);
                for(let f = o; f < Math.min(a, g); f++)u === "list" || u === "map" || u === "text" ? e.putObject(n, f, c) : e.put(n, f, c, u);
                return this;
            },
            indexOf (i, o = 0) {
                const a = e.length(n);
                for(let c = o; c < a; c++){
                    const u = e.getWithType(n, c);
                    if (!u) continue;
                    const [g, f] = u;
                    if (![
                        "map",
                        "list",
                        "text"
                    ].includes(g)) {
                        if (f === i) return c;
                        continue;
                    }
                    if (g === "text" && typeof i == "string" && i === _e(t, c) || i[wt] === f) return c;
                }
                return -1;
            },
            insertAt (i, ...o) {
                return this.splice(i, 0, ...o), this;
            },
            pop () {
                const i = e.length(n);
                if (i == 0) return;
                const o = _e(t, i - 1);
                return e.delete(n, i - 1), o;
            },
            push (...i) {
                const o = e.length(n);
                return this.splice(o, 0, ...i), e.length(n);
            },
            shift () {
                if (e.length(n) == 0) return;
                const i = _e(t, 0);
                return e.delete(n, 0), i;
            },
            splice (i, o, ...a) {
                i = Be(i), typeof o != "number" && (o = e.length(n) - i), o = Be(o);
                for (const u of a)if (Ct(u, e)) throw new RangeError("Cannot create a reference to an existing document object");
                const c = [];
                for(let u = 0; u < o; u++){
                    const g = _e(t, i + u);
                    g !== void 0 && c.push(g);
                }
                for(let u = 0; u < a.length; u++)try {
                    ct(a[u], e, [
                        ...r,
                        i + u
                    ]);
                } catch (g) {
                    throw g instanceof RangeError ? new RangeError(`${g.message} (at index ${u} in the input)`) : g;
                }
                return e.spliceFromHydrate(n, i, o, a), c;
            },
            unshift (...i) {
                return this.splice(0, 0, ...i), e.length(n);
            },
            entries () {
                let i = 0;
                return {
                    next: ()=>{
                        const a = _e(t, i);
                        return a === void 0 ? {
                            value: void 0,
                            done: !0
                        } : {
                            value: [
                                i++,
                                a
                            ],
                            done: !1
                        };
                    },
                    [Symbol.iterator] () {
                        return this;
                    }
                };
            },
            keys () {
                let i = 0;
                const o = e.length(n);
                return {
                    next: ()=>i < o ? {
                            value: i++,
                            done: !1
                        } : {
                            value: void 0,
                            done: !0
                        },
                    [Symbol.iterator] () {
                        return this;
                    }
                };
            },
            values () {
                let i = 0;
                return {
                    next: ()=>{
                        const a = _e(t, i++);
                        return a === void 0 ? {
                            value: void 0,
                            done: !0
                        } : {
                            value: a,
                            done: !1
                        };
                    },
                    [Symbol.iterator] () {
                        return this;
                    }
                };
            },
            toArray () {
                const i = [];
                let o;
                do o = _e(t, i.length), o !== void 0 && i.push(o);
                while (o !== void 0);
                return i;
            },
            map (i) {
                return this.toArray().map(i);
            },
            toString () {
                return this.toArray().toString();
            },
            toLocaleString () {
                return this.toArray().toLocaleString();
            },
            forEach (i) {
                return this.toArray().forEach(i);
            },
            concat (i) {
                return this.toArray().concat(i);
            },
            every (i) {
                return this.toArray().every(i);
            },
            filter (i) {
                return this.toArray().filter(i);
            },
            find (i) {
                let o = 0;
                for (const a of this){
                    if (i(a, o)) return a;
                    o += 1;
                }
            },
            findIndex (i) {
                let o = 0;
                for (const a of this){
                    if (i(a, o)) return o;
                    o += 1;
                }
                return -1;
            },
            includes (i) {
                return this.find((o)=>o === i) !== void 0;
            },
            join (i) {
                return this.toArray().join(i);
            },
            reduce (i, o) {
                return this.toArray().reduce(i, o);
            },
            reduceRight (i, o) {
                return this.toArray().reduceRight(i, o);
            },
            lastIndexOf (i, o = 1 / 0) {
                return this.toArray().lastIndexOf(i, o);
            },
            slice (i, o) {
                return this.toArray().slice(i, o);
            },
            some (i) {
                let o = 0;
                for (const a of this){
                    if (i(a, o)) return !0;
                    o += 1;
                }
                return !1;
            },
            [Symbol.iterator]: function*() {
                let i = 0, o = _e(t, i);
                for(; o !== void 0;)yield o, i += 1, o = _e(t, i);
            }
        };
    }
    function jn(t) {
        const e = t.map((n)=>{
            if (typeof n == "number") return n.toString();
            if (typeof n == "string") return n.replace(/~/g, "~0").replace(/\//g, "~1");
        });
        return t.length === 0 ? "" : "/" + e.join("/");
    }
    function Bs(t) {
        return typeof t == "object" && t !== null && Object.prototype.hasOwnProperty.call(t, Os);
    }
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((t)=>js.__wbg_automerge_free(t >>> 0, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((t)=>js.__wbg_syncstate_free(t >>> 0, 1));
    let Zi = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    Zi.decode();
    const pn = new TextEncoder;
    "encodeInto" in pn || (pn.encodeInto = function(t, e) {
        const n = pn.encode(t);
        return e.set(n), {
            read: t.length,
            written: n.length
        };
    });
    let js, Qi = [];
    function eo(t) {
        for(const e in t)ce[e] = t[e];
        for (const e of Qi)e();
    }
    const ce = {
        create (t) {
            throw new RangeError("Automerge.use() not called");
        },
        load (t, e) {
            throw new RangeError("Automerge.use() not called (load)");
        },
        encodeChange (t) {
            throw new RangeError("Automerge.use() not called (encodeChange)");
        },
        decodeChange (t) {
            throw new RangeError("Automerge.use() not called (decodeChange)");
        },
        initSyncState () {
            throw new RangeError("Automerge.use() not called (initSyncState)");
        },
        encodeSyncMessage (t) {
            throw new RangeError("Automerge.use() not called (encodeSyncMessage)");
        },
        decodeSyncMessage (t) {
            throw new RangeError("Automerge.use() not called (decodeSyncMessage)");
        },
        encodeSyncState (t) {
            throw new RangeError("Automerge.use() not called (encodeSyncState)");
        },
        decodeSyncState (t) {
            throw new RangeError("Automerge.use() not called (decodeSyncState)");
        },
        exportSyncState (t) {
            throw new RangeError("Automerge.use() not called (exportSyncState)");
        },
        importSyncState (t) {
            throw new RangeError("Automerge.use() not called (importSyncState)");
        },
        readBundle (t) {
            throw new RangeError("Automerge.use() not called (readBundle)");
        },
        wasmReleaseInfo () {
            throw new RangeError("Automerge.use() not called (wasmReleaseInfo)");
        }
    }, to = "9bc455a30c8d26e6d17fe663f6d73575bf75fda1";
    function X(t, e = !0) {
        if (typeof t != "object") throw new RangeError("must be the document root");
        const n = Reflect.get(t, on);
        if (n === void 0 || n == null || e && Ls(t) !== "_root") throw new RangeError("must be the document root");
        return n;
    }
    function Fs(t) {
        Reflect.set(t, rr, !0);
    }
    function Ps(t) {
        return Reflect.get(t, mt);
    }
    function Ls(t) {
        return typeof t != "object" || t === null ? null : Reflect.get(t, wt);
    }
    function ht(t) {
        return !!Reflect.get(t, nr);
    }
    var no = function(t, e) {
        var n = {};
        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (t != null && typeof Object.getOwnPropertySymbols == "function") for(var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (n[r[s]] = t[r[s]]);
        return n;
    };
    function ir(t) {
        return typeof t == "object" ? t : {
            actor: t
        };
    }
    function ro(t, e, n) {
        if (typeof n == "string") {
            if (/^-?[0-9]+@[0-9a-zA-Z]+$|^[se]$/.test(n)) return t.handle.getCursorPosition(e, n);
            throw new RangeError("index must be a number or cursor");
        } else return n;
    }
    function Ae(t) {
        const e = ir(t), n = !!e.freeze, r = e.patchCallback, s = e.actor, i = ce.create({
            actor: s
        });
        return i.enableFreeze(!!e.freeze), Ns(i), i.materialize("/", void 0, {
            handle: i,
            heads: void 0,
            freeze: n,
            patchCallback: r
        });
    }
    function so(t, e) {
        const n = X(t), r = n.handle;
        return n.handle.materialize("/", e, Object.assign(Object.assign({}, n), {
            handle: r,
            heads: e
        }));
    }
    function Yt(t, e) {
        const n = X(t), r = n.heads, s = ir(e), i = n.handle.fork(s.actor, r);
        i.updateDiffCursor();
        const { heads: o } = n, a = no(n, [
            "heads"
        ]);
        return a.patchCallback = s.patchCallback, i.applyPatches(t, Object.assign(Object.assign({}, a), {
            handle: i
        }));
    }
    function Rr(t, e) {
        (typeof t != "object" || Array.isArray(t)) && (t = Object.assign({}, t)), ct(t, null, []);
        const n = Ae(e);
        return xt(n, "from", {}, (r)=>(X(n).handle.initRootFromHydrate(t), r)).newDoc;
    }
    function io(t, e, n) {
        if (typeof e == "function") return xt(t, "change", {}, e).newDoc;
        if (typeof n == "function") return typeof e == "string" && (e = {
            message: e
        }), xt(t, "change", e, n).newDoc;
        throw RangeError("Invalid args for change");
    }
    function oo(t, e, n, r) {
        if (typeof n == "function") return xt(t, "changeAt", {}, n, e);
        if (typeof r == "function") return typeof n == "string" && (n = {
            message: n
        }), xt(t, "changeAt", n, r, e);
        throw RangeError("Invalid args for changeAt");
    }
    function Rt(t, e, n, r) {
        if (n == null) return t;
        const s = X(t), i = Object.assign(Object.assign({}, s), {
            heads: void 0
        }), { value: o, patches: a } = s.handle.applyAndReturnPatches(t, i);
        if (a.length > 0) {
            r?.(a, {
                before: t,
                after: o,
                source: e
            });
            const c = X(o);
            c.mostRecentPatch = {
                before: X(t).heads,
                after: c.handle.getHeads(),
                patches: a
            };
        }
        return s.heads = n, o;
    }
    function xt(t, e, n, r, s) {
        if (typeof r != "function") throw new RangeError("invalid change function");
        const i = X(t);
        if (t === void 0 || i === void 0) throw new RangeError("must be the document root");
        if (i.heads) throw new RangeError("Attempting to change an outdated document.  Use Automerge.clone() if you wish to make a writable copy.");
        if (ht(t)) throw new RangeError("Calls to Automerge.change cannot be nested");
        let o = i.handle.getHeads();
        s && co(s, o) && (s = void 0), s && (i.handle.isolate(s), o = s), "time" in n || (n.time = Math.floor(Date.now() / 1e3));
        try {
            i.heads = o;
            const a = Yi(i.handle);
            if (r(a), i.handle.pendingOps() === 0) return i.heads = void 0, s && i.handle.integrate(), {
                newDoc: t,
                newHeads: null
            };
            {
                const c = i.handle.commit(n.message, n.time);
                return i.handle.integrate(), {
                    newDoc: Rt(t, e, o, n.patchCallback || i.patchCallback),
                    newHeads: c != null ? [
                        c
                    ] : null
                };
            }
        } catch (a) {
            throw i.heads = void 0, i.handle.rollback(), a;
        }
    }
    function Hr(t, e) {
        e === void 0 && (e = {}), typeof e == "string" && (e = {
            message: e
        }), "time" in e || (e.time = Math.floor(Date.now() / 1e3));
        const n = X(t);
        if (n.heads) throw new RangeError("Attempting to change an outdated document.  Use Automerge.clone() if you wish to make a writable copy.");
        if (ht(t)) throw new RangeError("Calls to Automerge.change cannot be nested");
        const r = n.handle.getHeads();
        return n.handle.emptyChange(e.message, e.time), Rt(t, "emptyChange", r);
    }
    function ao(t, e) {
        const n = ir(e);
        if (n.patchCallback) return or(Ae(n), t);
        const r = n.actor, s = n.patchCallback, i = n.unchecked || !1, o = n.allowMissingChanges || !1, a = n.convertImmutableStringsToText || !1, c = ce.load(t, {
            actor: r,
            unchecked: i,
            allowMissingDeps: o,
            convertImmutableStringsToText: a
        });
        return c.enableFreeze(!!n.freeze), Ns(c), c.materialize("/", void 0, {
            handle: c,
            heads: void 0,
            patchCallback: s
        });
    }
    function or(t, e, n) {
        n || (n = {});
        const r = X(t);
        if (r.heads) throw new RangeError("Attempting to change an out of date document - set at: " + Ps(t));
        if (ht(t)) throw new RangeError("Calls to Automerge.change cannot be nested");
        const s = r.handle.getHeads();
        return r.handle.loadIncremental(e), Rt(t, "loadIncremental", s, n.patchCallback || r.patchCallback);
    }
    function $s(t) {
        return X(t).handle.save();
    }
    function kr(t, e) {
        const n = X(t);
        if (n.heads) throw new RangeError("Attempting to change an out of date document - set at: " + Ps(t));
        const r = n.handle.getHeads(), s = X(e), i = n.handle.getChangesAdded(s.handle);
        return n.handle.applyChanges(i), Rt(t, "merge", r, n.patchCallback);
    }
    function yn(t, e, n) {
        Dr(e, "before heads"), Dr(n, "after heads");
        const r = X(t);
        return r.mostRecentPatch && Fn(r.mostRecentPatch.before, e) && Fn(r.mostRecentPatch.after, n) ? r.mostRecentPatch.patches : r.handle.diff(e, n);
    }
    function co(t, e) {
        if (t.length !== e.length) return !1;
        for(let n = 0; n < t.length; n++)if (t[n] !== e[n]) return !1;
        return !0;
    }
    function Dr(t, e) {
        if (!Array.isArray(t)) throw new Error(`invalid ${e}: must be an array`);
    }
    function Fn(t, e) {
        if (!Or(t) || !Or(e)) return t === e;
        const n = Object.keys(t).sort(), r = Object.keys(e).sort();
        if (n.length !== r.length) return !1;
        for(let s = 0; s < n.length; s++)if (n[s] !== r[s] || !Fn(t[n[s]], e[r[s]])) return !1;
        return !0;
    }
    function Vs(t) {
        const e = ce.importSyncState(t), n = ce.encodeSyncState(e);
        return e.free(), n;
    }
    function zs(t) {
        const e = ce.decodeSyncState(t), n = ce.exportSyncState(e);
        return e.free(), n;
    }
    function uo(t, e) {
        const n = X(t), r = ce.importSyncState(e), s = n.handle.generateSyncMessage(r);
        return [
            ce.exportSyncState(r),
            s
        ];
    }
    function fo(t, e, n, r) {
        const s = ce.importSyncState(e);
        r || (r = {});
        const i = X(t);
        if (i.heads) throw new RangeError("Attempting to change an outdated document.  Use Automerge.clone() if you wish to make a writable copy.");
        if (ht(t)) throw new RangeError("Calls to Automerge.change cannot be nested");
        const o = i.handle.getHeads();
        i.handle.receiveSyncMessage(s, n);
        const a = ce.exportSyncState(s);
        return [
            Rt(t, "receiveSyncMessage", o, r.patchCallback || i.patchCallback),
            a,
            null
        ];
    }
    function ho() {
        return ce.exportSyncState(ce.initSyncState());
    }
    function lo(t) {
        return ce.decodeSyncMessage(t);
    }
    function we(t) {
        const e = X(t);
        return e.heads || e.handle.getHeads();
    }
    function Or(t) {
        return typeof t == "object" && t !== null;
    }
    function go(t, e) {
        return X(t).handle.saveSince(e);
    }
    function Ns(t) {
        t.registerDatatype("counter", (e)=>new Bn(e), (e)=>{
            if (e instanceof Bn) return e.value;
        }), t.registerDatatype("str", (e)=>new Ts(e), (e)=>{
            if (Bs(e)) return e.val;
        });
    }
    function _o(t) {
        return X(t).handle.topoHistoryTraversal();
    }
    function po(t, e) {
        return X(t).handle.getDecodedChangeByHash(e);
    }
    function ar(t) {
        var e, n, r, s, i, o;
        const c = X(t).handle.stats(), u = yo();
        return Object.assign(Object.assign({}, c), {
            cargoPackageName: (n = (e = u.wasm) === null || e === void 0 ? void 0 : e.cargoPackageName) !== null && n !== void 0 ? n : "unknown",
            cargoPackageVersion: (s = (r = u.wasm) === null || r === void 0 ? void 0 : r.cargoPackageVersion) !== null && s !== void 0 ? s : "unknown",
            rustcVersion: (o = (i = u.wasm) === null || i === void 0 ? void 0 : i.rustcVersion) !== null && o !== void 0 ? o : "unknown"
        });
    }
    function yo() {
        let t = null;
        try {
            t = ce.wasmReleaseInfo();
        } catch  {}
        return {
            js: {
                gitHead: to
            },
            wasm: t
        };
    }
    function qs(t, e, n, r, s) {
        const i = an(t, e, "splice");
        if (!ht(t)) throw new RangeError("object cannot be modified outside of a change block");
        const o = X(t, !1);
        Fs(t), n = ro(o, i, n);
        try {
            return o.handle.splice(i, n, r, s);
        } catch (a) {
            throw new RangeError(`Cannot splice: ${a}`);
        }
    }
    function bo(t, e, n) {
        const r = an(t, e, "updateText");
        if (!ht(t)) throw new RangeError("object cannot be modified outside of a change block");
        const s = X(t, !1);
        Fs(t);
        try {
            return s.handle.updateText(r, n);
        } catch (i) {
            throw new RangeError(`Cannot updateText: ${i}`);
        }
    }
    function Mr(t, e, n, r) {
        const s = an(t, e, "getCursor"), i = X(t, !1);
        try {
            return i.handle.getCursor(s, n, i.heads, r);
        } catch (o) {
            throw new RangeError(`Cannot getCursor: ${o}`);
        }
    }
    function Tr(t, e, n) {
        const r = an(t, e, "getCursorPosition"), s = X(t, !1);
        try {
            return s.handle.getCursorPosition(r, n, s.heads);
        } catch (i) {
            throw new RangeError(`Cannot getCursorPosition: ${i}`);
        }
    }
    function an(t, e, n) {
        e = e.slice();
        const r = Ls(t);
        if (!r) throw new RangeError(`invalid object for ${n}`);
        return e.unshift(r), e.join("/");
    }
    var Mt = {
        exports: {}
    }, bn, Ur;
    function mo() {
        if (Ur) return bn;
        Ur = 1;
        var t = 1e3, e = t * 60, n = e * 60, r = n * 24, s = r * 7, i = r * 365.25;
        bn = function(g, f) {
            f = f || {};
            var h = typeof g;
            if (h === "string" && g.length > 0) return o(g);
            if (h === "number" && isFinite(g)) return f.long ? c(g) : a(g);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(g));
        };
        function o(g) {
            if (g = String(g), !(g.length > 100)) {
                var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(g);
                if (f) {
                    var h = parseFloat(f[1]), l = (f[2] || "ms").toLowerCase();
                    switch(l){
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return h * i;
                        case "weeks":
                        case "week":
                        case "w":
                            return h * s;
                        case "days":
                        case "day":
                        case "d":
                            return h * r;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return h * n;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return h * e;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return h * t;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return h;
                        default:
                            return;
                    }
                }
            }
        }
        function a(g) {
            var f = Math.abs(g);
            return f >= r ? Math.round(g / r) + "d" : f >= n ? Math.round(g / n) + "h" : f >= e ? Math.round(g / e) + "m" : f >= t ? Math.round(g / t) + "s" : g + "ms";
        }
        function c(g) {
            var f = Math.abs(g);
            return f >= r ? u(g, f, r, "day") : f >= n ? u(g, f, n, "hour") : f >= e ? u(g, f, e, "minute") : f >= t ? u(g, f, t, "second") : g + " ms";
        }
        function u(g, f, h, l) {
            var d = f >= h * 1.5;
            return Math.round(g / h) + " " + l + (d ? "s" : "");
        }
        return bn;
    }
    var mn, Br;
    function wo() {
        if (Br) return mn;
        Br = 1;
        function t(e) {
            r.debug = r, r.default = r, r.coerce = u, r.disable = a, r.enable = i, r.enabled = c, r.humanize = mo(), r.destroy = g, Object.keys(e).forEach((f)=>{
                r[f] = e[f];
            }), r.names = [], r.skips = [], r.formatters = {};
            function n(f) {
                let h = 0;
                for(let l = 0; l < f.length; l++)h = (h << 5) - h + f.charCodeAt(l), h |= 0;
                return r.colors[Math.abs(h) % r.colors.length];
            }
            r.selectColor = n;
            function r(f) {
                let h, l = null, d, b;
                function w(...O) {
                    if (!w.enabled) return;
                    const U = w, S = Number(new Date), z = S - (h || S);
                    U.diff = z, U.prev = h, U.curr = S, h = S, O[0] = r.coerce(O[0]), typeof O[0] != "string" && O.unshift("%O");
                    let M = 0;
                    O[0] = O[0].replace(/%([a-zA-Z%])/g, (V, F)=>{
                        if (V === "%%") return "%";
                        M++;
                        const C = r.formatters[F];
                        if (typeof C == "function") {
                            const k = O[M];
                            V = C.call(U, k), O.splice(M, 1), M--;
                        }
                        return V;
                    }), r.formatArgs.call(U, O), (U.log || r.log).apply(U, O);
                }
                return w.namespace = f, w.useColors = r.useColors(), w.color = r.selectColor(f), w.extend = s, w.destroy = r.destroy, Object.defineProperty(w, "enabled", {
                    enumerable: !0,
                    configurable: !1,
                    get: ()=>l !== null ? l : (d !== r.namespaces && (d = r.namespaces, b = r.enabled(f)), b),
                    set: (O)=>{
                        l = O;
                    }
                }), typeof r.init == "function" && r.init(w), w;
            }
            function s(f, h) {
                const l = r(this.namespace + (typeof h > "u" ? ":" : h) + f);
                return l.log = this.log, l;
            }
            function i(f) {
                r.save(f), r.namespaces = f, r.names = [], r.skips = [];
                const h = (typeof f == "string" ? f : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
                for (const l of h)l[0] === "-" ? r.skips.push(l.slice(1)) : r.names.push(l);
            }
            function o(f, h) {
                let l = 0, d = 0, b = -1, w = 0;
                for(; l < f.length;)if (d < h.length && (h[d] === f[l] || h[d] === "*")) h[d] === "*" ? (b = d, w = l, d++) : (l++, d++);
                else if (b !== -1) d = b + 1, w++, l = w;
                else return !1;
                for(; d < h.length && h[d] === "*";)d++;
                return d === h.length;
            }
            function a() {
                const f = [
                    ...r.names,
                    ...r.skips.map((h)=>"-" + h)
                ].join(",");
                return r.enable(""), f;
            }
            function c(f) {
                for (const h of r.skips)if (o(f, h)) return !1;
                for (const h of r.names)if (o(f, h)) return !0;
                return !1;
            }
            function u(f) {
                return f instanceof Error ? f.stack || f.message : f;
            }
            function g() {
                console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
            }
            return r.enable(r.load()), r;
        }
        return mn = t, mn;
    }
    var jr;
    function xo() {
        return jr || (jr = 1, (function(t, e) {
            var n = {};
            e.formatArgs = s, e.save = i, e.load = o, e.useColors = r, e.storage = a(), e.destroy = (()=>{
                let u = !1;
                return ()=>{
                    u || (u = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
                };
            })(), e.colors = [
                "#0000CC",
                "#0000FF",
                "#0033CC",
                "#0033FF",
                "#0066CC",
                "#0066FF",
                "#0099CC",
                "#0099FF",
                "#00CC00",
                "#00CC33",
                "#00CC66",
                "#00CC99",
                "#00CCCC",
                "#00CCFF",
                "#3300CC",
                "#3300FF",
                "#3333CC",
                "#3333FF",
                "#3366CC",
                "#3366FF",
                "#3399CC",
                "#3399FF",
                "#33CC00",
                "#33CC33",
                "#33CC66",
                "#33CC99",
                "#33CCCC",
                "#33CCFF",
                "#6600CC",
                "#6600FF",
                "#6633CC",
                "#6633FF",
                "#66CC00",
                "#66CC33",
                "#9900CC",
                "#9900FF",
                "#9933CC",
                "#9933FF",
                "#99CC00",
                "#99CC33",
                "#CC0000",
                "#CC0033",
                "#CC0066",
                "#CC0099",
                "#CC00CC",
                "#CC00FF",
                "#CC3300",
                "#CC3333",
                "#CC3366",
                "#CC3399",
                "#CC33CC",
                "#CC33FF",
                "#CC6600",
                "#CC6633",
                "#CC9900",
                "#CC9933",
                "#CCCC00",
                "#CCCC33",
                "#FF0000",
                "#FF0033",
                "#FF0066",
                "#FF0099",
                "#FF00CC",
                "#FF00FF",
                "#FF3300",
                "#FF3333",
                "#FF3366",
                "#FF3399",
                "#FF33CC",
                "#FF33FF",
                "#FF6600",
                "#FF6633",
                "#FF9900",
                "#FF9933",
                "#FFCC00",
                "#FFCC33"
            ];
            function r() {
                if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return !0;
                if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                let u;
                return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (u = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(u[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
            }
            function s(u) {
                if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
                const g = "color: " + this.color;
                u.splice(1, 0, g, "color: inherit");
                let f = 0, h = 0;
                u[0].replace(/%[a-zA-Z%]/g, (l)=>{
                    l !== "%%" && (f++, l === "%c" && (h = f));
                }), u.splice(h, 0, g);
            }
            e.log = console.debug || console.log || (()=>{});
            function i(u) {
                try {
                    u ? e.storage.setItem("debug", u) : e.storage.removeItem("debug");
                } catch  {}
            }
            function o() {
                let u;
                try {
                    u = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
                } catch  {}
                return !u && typeof process < "u" && "env" in process && (u = n.DEBUG), u;
            }
            function a() {
                try {
                    return localStorage;
                } catch  {}
            }
            t.exports = wo()(e);
            const { formatters: c } = t.exports;
            c.j = function(u) {
                try {
                    return JSON.stringify(u);
                } catch (g) {
                    return "[UnexpectedJSONParseError]: " + g.message;
                }
            };
        })(Mt, Mt.exports)), Mt.exports;
    }
    var So = xo();
    const Ye = tr(So);
    var wn = {
        exports: {}
    }, Fr;
    function vo() {
        return Fr || (Fr = 1, (function(t) {
            var e = Object.prototype.hasOwnProperty, n = "~";
            function r() {}
            Object.create && (r.prototype = Object.create(null), new r().__proto__ || (n = !1));
            function s(c, u, g) {
                this.fn = c, this.context = u, this.once = g || !1;
            }
            function i(c, u, g, f, h) {
                if (typeof g != "function") throw new TypeError("The listener must be a function");
                var l = new s(g, f || c, h), d = n ? n + u : u;
                return c._events[d] ? c._events[d].fn ? c._events[d] = [
                    c._events[d],
                    l
                ] : c._events[d].push(l) : (c._events[d] = l, c._eventsCount++), c;
            }
            function o(c, u) {
                --c._eventsCount === 0 ? c._events = new r : delete c._events[u];
            }
            function a() {
                this._events = new r, this._eventsCount = 0;
            }
            a.prototype.eventNames = function() {
                var u = [], g, f;
                if (this._eventsCount === 0) return u;
                for(f in g = this._events)e.call(g, f) && u.push(n ? f.slice(1) : f);
                return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(g)) : u;
            }, a.prototype.listeners = function(u) {
                var g = n ? n + u : u, f = this._events[g];
                if (!f) return [];
                if (f.fn) return [
                    f.fn
                ];
                for(var h = 0, l = f.length, d = new Array(l); h < l; h++)d[h] = f[h].fn;
                return d;
            }, a.prototype.listenerCount = function(u) {
                var g = n ? n + u : u, f = this._events[g];
                return f ? f.fn ? 1 : f.length : 0;
            }, a.prototype.emit = function(u, g, f, h, l, d) {
                var b = n ? n + u : u;
                if (!this._events[b]) return !1;
                var w = this._events[b], O = arguments.length, U, S;
                if (w.fn) {
                    switch(w.once && this.removeListener(u, w.fn, void 0, !0), O){
                        case 1:
                            return w.fn.call(w.context), !0;
                        case 2:
                            return w.fn.call(w.context, g), !0;
                        case 3:
                            return w.fn.call(w.context, g, f), !0;
                        case 4:
                            return w.fn.call(w.context, g, f, h), !0;
                        case 5:
                            return w.fn.call(w.context, g, f, h, l), !0;
                        case 6:
                            return w.fn.call(w.context, g, f, h, l, d), !0;
                    }
                    for(S = 1, U = new Array(O - 1); S < O; S++)U[S - 1] = arguments[S];
                    w.fn.apply(w.context, U);
                } else {
                    var z = w.length, M;
                    for(S = 0; S < z; S++)switch(w[S].once && this.removeListener(u, w[S].fn, void 0, !0), O){
                        case 1:
                            w[S].fn.call(w[S].context);
                            break;
                        case 2:
                            w[S].fn.call(w[S].context, g);
                            break;
                        case 3:
                            w[S].fn.call(w[S].context, g, f);
                            break;
                        case 4:
                            w[S].fn.call(w[S].context, g, f, h);
                            break;
                        default:
                            if (!U) for(M = 1, U = new Array(O - 1); M < O; M++)U[M - 1] = arguments[M];
                            w[S].fn.apply(w[S].context, U);
                    }
                }
                return !0;
            }, a.prototype.on = function(u, g, f) {
                return i(this, u, g, f, !1);
            }, a.prototype.once = function(u, g, f) {
                return i(this, u, g, f, !0);
            }, a.prototype.removeListener = function(u, g, f, h) {
                var l = n ? n + u : u;
                if (!this._events[l]) return this;
                if (!g) return o(this, l), this;
                var d = this._events[l];
                if (d.fn) d.fn === g && (!h || d.once) && (!f || d.context === f) && o(this, l);
                else {
                    for(var b = 0, w = [], O = d.length; b < O; b++)(d[b].fn !== g || h && !d[b].once || f && d[b].context !== f) && w.push(d[b]);
                    w.length ? this._events[l] = w.length === 1 ? w[0] : w : o(this, l);
                }
                return this;
            }, a.prototype.removeAllListeners = function(u) {
                var g;
                return u ? (g = n ? n + u : u, this._events[g] && o(this, g)) : (this._events = new r, this._eventsCount = 0), this;
            }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, t.exports = a;
        })(wn)), wn.exports;
    }
    var Ao = vo();
    const Xe = tr(Ao);
    function Eo() {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
    }
    function Io() {
        const t = Eo();
        if (t.__xstate__) return t.__xstate__;
    }
    const Co = (t)=>{
        if (typeof window > "u") return;
        const e = Io();
        e && e.register(t);
    };
    class Pr {
        constructor(e){
            this._process = e, this._active = !1, this._current = null, this._last = null;
        }
        start() {
            this._active = !0, this.flush();
        }
        clear() {
            this._current && (this._current.next = null, this._last = this._current);
        }
        enqueue(e) {
            const n = {
                value: e,
                next: null
            };
            if (this._current) {
                this._last.next = n, this._last = n;
                return;
            }
            this._current = n, this._last = n, this._active && this.flush();
        }
        flush() {
            for(; this._current;){
                const e = this._current;
                this._process(e.value), this._current = e.next;
            }
            this._last = null;
        }
    }
    const Ws = ".", Ro = "", Gs = "", Ho = "#", ko = "*", Ks = "xstate.init", Do = "xstate.error", Pn = "xstate.stop";
    function Oo(t, e) {
        return {
            type: `xstate.after.${t}.${e}`
        };
    }
    function Ln(t, e) {
        return {
            type: `xstate.done.state.${t}`,
            output: e
        };
    }
    function Mo(t, e) {
        return {
            type: `xstate.done.actor.${t}`,
            output: e,
            actorId: t
        };
    }
    function Js(t, e) {
        return {
            type: `xstate.error.actor.${t}`,
            error: e,
            actorId: t
        };
    }
    function Ys(t) {
        return {
            type: Ks,
            input: t
        };
    }
    function ke(t) {
        setTimeout(()=>{
            throw t;
        });
    }
    const To = typeof Symbol == "function" && Symbol.observable || "@@observable";
    function Xs(t, e) {
        const n = Lr(t), r = Lr(e);
        return typeof r == "string" ? typeof n == "string" ? r === n : !1 : typeof n == "string" ? n in r : Object.keys(n).every((s)=>s in r ? Xs(n[s], r[s]) : !1);
    }
    function cr(t) {
        if (Qs(t)) return t;
        const e = [];
        let n = "";
        for(let r = 0; r < t.length; r++){
            switch(t.charCodeAt(r)){
                case 92:
                    n += t[r + 1], r++;
                    continue;
                case 46:
                    e.push(n), n = "";
                    continue;
            }
            n += t[r];
        }
        return e.push(n), e;
    }
    function Lr(t) {
        if (ga(t)) return t.value;
        if (typeof t != "string") return t;
        const e = cr(t);
        return Uo(e);
    }
    function Uo(t) {
        if (t.length === 1) return t[0];
        const e = {};
        let n = e;
        for(let r = 0; r < t.length - 1; r++)if (r === t.length - 2) n[t[r]] = t[r + 1];
        else {
            const s = n;
            n = {}, s[t[r]] = n;
        }
        return e;
    }
    function $r(t, e) {
        const n = {}, r = Object.keys(t);
        for(let s = 0; s < r.length; s++){
            const i = r[s];
            n[i] = e(t[i], i, t, s);
        }
        return n;
    }
    function Zs(t) {
        return Qs(t) ? t : [
            t
        ];
    }
    function je(t) {
        return t === void 0 ? [] : Zs(t);
    }
    function $n(t, e, n, r) {
        return typeof t == "function" ? t({
            context: e,
            event: n,
            self: r
        }) : t;
    }
    function Qs(t) {
        return Array.isArray(t);
    }
    function Bo(t) {
        return t.type.startsWith("xstate.error.actor");
    }
    function st(t) {
        return Zs(t).map((e)=>typeof e > "u" || typeof e == "string" ? {
                target: e
            } : e);
    }
    function ei(t) {
        if (!(t === void 0 || t === Ro)) return je(t);
    }
    function Vt(t, e, n) {
        const r = typeof t == "object", s = r ? t : void 0;
        return {
            next: (r ? t.next : t)?.bind(s),
            error: (r ? t.error : e)?.bind(s),
            complete: (r ? t.complete : n)?.bind(s)
        };
    }
    function Vr(t, e) {
        return `${e}.${t}`;
    }
    function ur(t, e) {
        const n = e.match(/^xstate\.invoke\.(\d+)\.(.*)/);
        if (!n) return t.implementations.actors[e];
        const [, r, s] = n, o = t.getStateNodeById(s).config.invoke;
        return (Array.isArray(o) ? o[r] : o).src;
    }
    function ti(t, e) {
        if (e === t || e === ko) return !0;
        if (!e.endsWith(".*")) return !1;
        const n = e.split("."), r = t.split(".");
        for(let s = 0; s < n.length; s++){
            const i = n[s], o = r[s];
            if (i === "*") return s === n.length - 1;
            if (i !== o) return !1;
        }
        return !0;
    }
    function zr(t, e) {
        return `${t.sessionId}.${e}`;
    }
    let jo = 0;
    function Fo(t, e) {
        const n = new Map, r = new Map, s = new WeakMap, i = new Set, o = {}, { clock: a, logger: c } = e, u = {
            schedule: (h, l, d, b, w = Math.random().toString(36).slice(2))=>{
                const O = {
                    source: h,
                    target: l,
                    event: d,
                    delay: b,
                    id: w,
                    startedAt: Date.now()
                }, U = zr(h, w);
                f._snapshot._scheduledEvents[U] = O;
                const S = a.setTimeout(()=>{
                    delete o[U], delete f._snapshot._scheduledEvents[U], f._relay(h, l, d);
                }, b);
                o[U] = S;
            },
            cancel: (h, l)=>{
                const d = zr(h, l), b = o[d];
                delete o[d], delete f._snapshot._scheduledEvents[d], b !== void 0 && a.clearTimeout(b);
            },
            cancelAll: (h)=>{
                for(const l in f._snapshot._scheduledEvents){
                    const d = f._snapshot._scheduledEvents[l];
                    d.source === h && u.cancel(h, d.id);
                }
            }
        }, g = (h)=>{
            if (!i.size) return;
            const l = {
                ...h,
                rootId: t.sessionId
            };
            i.forEach((d)=>d.next?.(l));
        }, f = {
            _snapshot: {
                _scheduledEvents: (e?.snapshot && e.snapshot.scheduler) ?? {}
            },
            _bookId: ()=>`x:${jo++}`,
            _register: (h, l)=>(n.set(h, l), h),
            _unregister: (h)=>{
                n.delete(h.sessionId);
                const l = s.get(h);
                l !== void 0 && (r.delete(l), s.delete(h));
            },
            get: (h)=>r.get(h),
            getAll: ()=>Object.fromEntries(r.entries()),
            _set: (h, l)=>{
                const d = r.get(h);
                if (d && d !== l) throw new Error(`Actor with system ID '${h}' already exists.`);
                r.set(h, l), s.set(l, h);
            },
            inspect: (h)=>{
                const l = Vt(h);
                return i.add(l), {
                    unsubscribe () {
                        i.delete(l);
                    }
                };
            },
            _sendInspectionEvent: g,
            _relay: (h, l, d)=>{
                f._sendInspectionEvent({
                    type: "@xstate.event",
                    sourceRef: h,
                    actorRef: l,
                    event: d
                }), l._send(d);
            },
            scheduler: u,
            getSnapshot: ()=>({
                    _scheduledEvents: {
                        ...f._snapshot._scheduledEvents
                    }
                }),
            start: ()=>{
                const h = f._snapshot._scheduledEvents;
                f._snapshot._scheduledEvents = {};
                for(const l in h){
                    const { source: d, target: b, event: w, delay: O, id: U } = h[l];
                    u.schedule(d, b, w, O, U);
                }
            },
            _clock: a,
            _logger: c
        };
        return f;
    }
    let xn = !1;
    const fr = 1;
    let ue = (function(t) {
        return t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped", t;
    })({});
    const Po = {
        clock: {
            setTimeout: (t, e)=>setTimeout(t, e),
            clearTimeout: (t)=>clearTimeout(t)
        },
        logger: console.log.bind(console),
        devTools: !1
    };
    class Lo {
        constructor(e, n){
            this.logic = e, this._snapshot = void 0, this.clock = void 0, this.options = void 0, this.id = void 0, this.mailbox = new Pr(this._process.bind(this)), this.observers = new Set, this.eventListeners = new Map, this.logger = void 0, this._processingStatus = ue.NotStarted, this._parent = void 0, this._syncSnapshot = void 0, this.ref = void 0, this._actorScope = void 0, this.systemId = void 0, this.sessionId = void 0, this.system = void 0, this._doneEvent = void 0, this.src = void 0, this._deferred = [];
            const r = {
                ...Po,
                ...n
            }, { clock: s, logger: i, parent: o, syncSnapshot: a, id: c, systemId: u, inspect: g } = r;
            this.system = o ? o.system : Fo(this, {
                clock: s,
                logger: i
            }), g && !o && this.system.inspect(Vt(g)), this.sessionId = this.system._bookId(), this.id = c ?? this.sessionId, this.logger = n?.logger ?? this.system._logger, this.clock = n?.clock ?? this.system._clock, this._parent = o, this._syncSnapshot = a, this.options = r, this.src = r.src ?? e, this.ref = this, this._actorScope = {
                self: this,
                id: this.id,
                sessionId: this.sessionId,
                logger: this.logger,
                defer: (f)=>{
                    this._deferred.push(f);
                },
                system: this.system,
                stopChild: (f)=>{
                    if (f._parent !== this) throw new Error(`Cannot stop child actor ${f.id} of ${this.id} because it is not a child`);
                    f._stop();
                },
                emit: (f)=>{
                    const h = this.eventListeners.get(f.type), l = this.eventListeners.get("*");
                    if (!h && !l) return;
                    const d = [
                        ...h ? h.values() : [],
                        ...l ? l.values() : []
                    ];
                    for (const b of d)try {
                        b(f);
                    } catch (w) {
                        ke(w);
                    }
                },
                actionExecutor: (f)=>{
                    const h = ()=>{
                        if (this._actorScope.system._sendInspectionEvent({
                            type: "@xstate.action",
                            actorRef: this,
                            action: {
                                type: f.type,
                                params: f.params
                            }
                        }), !f.exec) return;
                        const l = xn;
                        try {
                            xn = !0, f.exec(f.info, f.params);
                        } finally{
                            xn = l;
                        }
                    };
                    this._processingStatus === ue.Running ? h() : this._deferred.push(h);
                }
            }, this.send = this.send.bind(this), this.system._sendInspectionEvent({
                type: "@xstate.actor",
                actorRef: this
            }), u && (this.systemId = u, this.system._set(u, this)), this._initState(n?.snapshot ?? n?.state), u && this._snapshot.status !== "active" && this.system._unregister(this);
        }
        _initState(e) {
            try {
                this._snapshot = e ? this.logic.restoreSnapshot ? this.logic.restoreSnapshot(e, this._actorScope) : e : this.logic.getInitialSnapshot(this._actorScope, this.options?.input);
            } catch (n) {
                this._snapshot = {
                    status: "error",
                    output: void 0,
                    error: n
                };
            }
        }
        update(e, n) {
            this._snapshot = e;
            let r;
            for(; r = this._deferred.shift();)try {
                r();
            } catch (s) {
                this._deferred.length = 0, this._snapshot = {
                    ...e,
                    status: "error",
                    error: s
                };
            }
            switch(this._snapshot.status){
                case "active":
                    for (const s of this.observers)try {
                        s.next?.(e);
                    } catch (i) {
                        ke(i);
                    }
                    break;
                case "done":
                    for (const s of this.observers)try {
                        s.next?.(e);
                    } catch (i) {
                        ke(i);
                    }
                    this._stopProcedure(), this._complete(), this._doneEvent = Mo(this.id, this._snapshot.output), this._parent && this.system._relay(this, this._parent, this._doneEvent);
                    break;
                case "error":
                    this._error(this._snapshot.error);
                    break;
            }
            this.system._sendInspectionEvent({
                type: "@xstate.snapshot",
                actorRef: this,
                event: n,
                snapshot: e
            });
        }
        subscribe(e, n, r) {
            const s = Vt(e, n, r);
            if (this._processingStatus !== ue.Stopped) this.observers.add(s);
            else switch(this._snapshot.status){
                case "done":
                    try {
                        s.complete?.();
                    } catch (i) {
                        ke(i);
                    }
                    break;
                case "error":
                    {
                        const i = this._snapshot.error;
                        if (!s.error) ke(i);
                        else try {
                            s.error(i);
                        } catch (o) {
                            ke(o);
                        }
                        break;
                    }
            }
            return {
                unsubscribe: ()=>{
                    this.observers.delete(s);
                }
            };
        }
        on(e, n) {
            let r = this.eventListeners.get(e);
            r || (r = new Set, this.eventListeners.set(e, r));
            const s = n.bind(void 0);
            return r.add(s), {
                unsubscribe: ()=>{
                    r.delete(s);
                }
            };
        }
        select(e, n = Object.is) {
            return {
                subscribe: (r)=>{
                    const s = Vt(r), i = this.getSnapshot();
                    let o = e(i);
                    return this.subscribe((a)=>{
                        const c = e(a);
                        n(o, c) || (o = c, s.next?.(c));
                    });
                },
                get: ()=>e(this.getSnapshot())
            };
        }
        start() {
            if (this._processingStatus === ue.Running) return this;
            this._syncSnapshot && this.subscribe({
                next: (r)=>{
                    r.status === "active" && this.system._relay(this, this._parent, {
                        type: `xstate.snapshot.${this.id}`,
                        snapshot: r
                    });
                },
                error: ()=>{}
            }), this.system._register(this.sessionId, this), this.systemId && this.system._set(this.systemId, this), this._processingStatus = ue.Running;
            const e = Ys(this.options.input);
            switch(this.system._sendInspectionEvent({
                type: "@xstate.event",
                sourceRef: this._parent,
                actorRef: this,
                event: e
            }), this._snapshot.status){
                case "done":
                    return this.update(this._snapshot, e), this;
                case "error":
                    return this._error(this._snapshot.error), this;
            }
            if (this._parent || this.system.start(), this.logic.start) try {
                this.logic.start(this._snapshot, this._actorScope);
            } catch (r) {
                return this._snapshot = {
                    ...this._snapshot,
                    status: "error",
                    error: r
                }, this._error(r), this;
            }
            return this.update(this._snapshot, e), this.options.devTools && this.attachDevTools(), this.mailbox.start(), this;
        }
        _process(e) {
            let n, r;
            try {
                n = this.logic.transition(this._snapshot, e, this._actorScope);
            } catch (s) {
                r = {
                    err: s
                };
            }
            if (r) {
                const { err: s } = r;
                this._snapshot = {
                    ...this._snapshot,
                    status: "error",
                    error: s
                }, this._error(s);
                return;
            }
            this.update(n, e), e.type === Pn && (this._stopProcedure(), this._complete());
        }
        _stop() {
            return this._processingStatus === ue.Stopped ? this : (this.mailbox.clear(), this._processingStatus === ue.NotStarted ? (this._processingStatus = ue.Stopped, this) : (this.mailbox.enqueue({
                type: Pn
            }), this));
        }
        stop() {
            if (this._parent) throw new Error("A non-root actor cannot be stopped directly.");
            return this._stop();
        }
        _complete() {
            for (const e of this.observers)try {
                e.complete?.();
            } catch (n) {
                ke(n);
            }
            this.observers.clear(), this.eventListeners.clear();
        }
        _reportError(e) {
            if (!this.observers.size) {
                this._parent || ke(e), this.eventListeners.clear();
                return;
            }
            let n = !1;
            for (const r of this.observers){
                const s = r.error;
                n ||= !s;
                try {
                    s?.(e);
                } catch (i) {
                    ke(i);
                }
            }
            this.observers.clear(), this.eventListeners.clear(), n && ke(e);
        }
        _error(e) {
            this._stopProcedure(), this._reportError(e), this._parent && this.system._relay(this, this._parent, Js(this.id, e));
        }
        _stopProcedure() {
            return this._processingStatus !== ue.Running ? this : (this.system.scheduler.cancelAll(this), this.mailbox.clear(), this.mailbox = new Pr(this._process.bind(this)), this._processingStatus = ue.Stopped, this.system._unregister(this), this);
        }
        _send(e) {
            this._processingStatus !== ue.Stopped && this.mailbox.enqueue(e);
        }
        send(e) {
            this.system._relay(void 0, this, e);
        }
        attachDevTools() {
            const { devTools: e } = this.options;
            e && (typeof e == "function" ? e : Co)(this);
        }
        toJSON() {
            return {
                xstate$$type: fr,
                id: this.id
            };
        }
        getPersistedSnapshot(e) {
            return this.logic.getPersistedSnapshot(this._snapshot, e);
        }
        [To]() {
            return this;
        }
        getSnapshot() {
            return this._snapshot;
        }
    }
    function St(t, ...[e]) {
        return new Lo(t, e);
    }
    function $o(t, e, n, r, { sendId: s }) {
        const i = typeof s == "function" ? s(n, r) : s;
        return [
            e,
            {
                sendId: i
            },
            void 0
        ];
    }
    function Vo(t, e) {
        t.defer(()=>{
            t.system.scheduler.cancel(t.self, e.sendId);
        });
    }
    function dr(t) {
        function e(n, r) {}
        return e.type = "xstate.cancel", e.sendId = t, e.resolve = $o, e.execute = Vo, e;
    }
    function zo(t, e, n, r, { id: s, systemId: i, src: o, input: a, syncSnapshot: c }) {
        const u = typeof o == "string" ? ur(e.machine, o) : o, g = typeof s == "function" ? s(n) : s;
        let f, h;
        return u && (h = typeof a == "function" ? a({
            context: e.context,
            event: n.event,
            self: t.self
        }) : a, f = St(u, {
            id: g,
            src: o,
            parent: t.self,
            syncSnapshot: c,
            systemId: i,
            input: h
        })), [
            Ke(e, {
                children: {
                    ...e.children,
                    [g]: f
                }
            }),
            {
                id: s,
                systemId: i,
                actorRef: f,
                src: o,
                input: h
            },
            void 0
        ];
    }
    function No(t, { actorRef: e }) {
        e && t.defer(()=>{
            e._processingStatus !== ue.Stopped && e.start();
        });
    }
    function hr(...[t, { id: e, systemId: n, input: r, syncSnapshot: s = !1 } = {}]) {
        function i(o, a) {}
        return i.type = "xstate.spawnChild", i.id = e, i.systemId = n, i.src = t, i.input = r, i.syncSnapshot = s, i.resolve = zo, i.execute = No, i;
    }
    function qo(t, e, n, r, { actorRef: s }) {
        const i = typeof s == "function" ? s(n, r) : s, o = typeof i == "string" ? e.children[i] : i;
        let a = e.children;
        return o && (a = {
            ...a
        }, delete a[o.id]), [
            Ke(e, {
                children: a
            }),
            o,
            void 0
        ];
    }
    function ni(t, e) {
        const n = e.getSnapshot();
        if (n && "children" in n) for (const r of Object.values(n.children))ni(t, r);
        t.system._unregister(e);
    }
    function Wo(t, e) {
        if (e) {
            if (ni(t, e), e._processingStatus !== ue.Running) {
                t.stopChild(e);
                return;
            }
            t.defer(()=>{
                t.stopChild(e);
            });
        }
    }
    function cn(t) {
        function e(n, r) {}
        return e.type = "xstate.stopChild", e.actorRef = t, e.resolve = qo, e.execute = Wo, e;
    }
    function un(t, e, n, r) {
        const { machine: s } = r, i = typeof t == "function", o = i ? t : s.implementations.guards[typeof t == "string" ? t : t.type];
        if (!i && !o) throw new Error(`Guard '${typeof t == "string" ? t : t.type}' is not implemented.'.`);
        if (typeof o != "function") return un(o, e, n, r);
        const a = {
            context: e,
            event: n
        }, c = i || typeof t == "string" ? void 0 : "params" in t ? typeof t.params == "function" ? t.params({
            context: e,
            event: n
        }) : t.params : void 0;
        return "check" in o ? o.check(r, a, o) : o(a, c);
    }
    function lr(t) {
        return t.type === "atomic" || t.type === "final";
    }
    function ut(t) {
        return Object.values(t.states).filter((e)=>e.type !== "history");
    }
    function Ht(t, e) {
        const n = [];
        if (e === t) return n;
        let r = t.parent;
        for(; r && r !== e;)n.push(r), r = r.parent;
        return n;
    }
    function Xt(t) {
        const e = new Set(t), n = si(e);
        for (const r of e)if (r.type === "compound" && (!n.get(r) || !n.get(r).length)) Nr(r).forEach((s)=>e.add(s));
        else if (r.type === "parallel") {
            for (const s of ut(r))if (s.type !== "history" && !e.has(s)) {
                const i = Nr(s);
                for (const o of i)e.add(o);
            }
        }
        for (const r of e){
            let s = r.parent;
            for(; s;)e.add(s), s = s.parent;
        }
        return e;
    }
    function ri(t, e) {
        const n = e.get(t);
        if (!n) return {};
        if (t.type === "compound") {
            const s = n[0];
            if (s) {
                if (lr(s)) return s.key;
            } else return {};
        }
        const r = {};
        for (const s of n)r[s.key] = ri(s, e);
        return r;
    }
    function si(t) {
        const e = new Map;
        for (const n of t)e.has(n) || e.set(n, []), n.parent && (e.has(n.parent) || e.set(n.parent, []), e.get(n.parent).push(n));
        return e;
    }
    function ii(t, e) {
        const n = Xt(e);
        return ri(t, si(n));
    }
    function gr(t, e) {
        return e.type === "compound" ? ut(e).some((n)=>n.type === "final" && t.has(n)) : e.type === "parallel" ? ut(e).every((n)=>gr(t, n)) : e.type === "final";
    }
    const fn = (t)=>t[0] === Ho;
    function Go(t, e) {
        return t.transitions.get(e) || [
            ...t.transitions.keys()
        ].filter((r)=>ti(e, r)).sort((r, s)=>s.length - r.length).flatMap((r)=>t.transitions.get(r));
    }
    function Ko(t) {
        const e = t.config.after;
        if (!e) return [];
        const n = (s)=>{
            const i = Oo(s, t.id), o = i.type;
            return t.entry.push(yr(i, {
                id: o,
                delay: s
            })), t.exit.push(dr(o)), o;
        };
        return Object.keys(e).flatMap((s)=>{
            const i = e[s], o = typeof i == "string" ? {
                target: i
            } : i, a = Number.isNaN(+s) ? s : +s, c = n(a);
            return je(o).map((u)=>({
                    ...u,
                    event: c,
                    delay: a
                }));
        }).map((s)=>{
            const { delay: i } = s;
            return {
                ...$e(t, s.event, s),
                delay: i
            };
        });
    }
    function $e(t, e, n) {
        const r = ei(n.target), s = n.reenter ?? !1, i = Zo(t, r), o = {
            ...n,
            actions: je(n.actions),
            guard: n.guard,
            target: i,
            source: t,
            reenter: s,
            eventType: e,
            toJSON: ()=>({
                    ...o,
                    source: `#${t.id}`,
                    target: i ? i.map((a)=>`#${a.id}`) : void 0
                })
        };
        return o;
    }
    function Jo(t) {
        const e = new Map;
        if (t.config.on) for (const n of Object.keys(t.config.on)){
            if (n === Gs) throw new Error('Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.');
            const r = t.config.on[n];
            e.set(n, st(r).map((s)=>$e(t, n, s)));
        }
        if (t.config.onDone) {
            const n = `xstate.done.state.${t.id}`;
            e.set(n, st(t.config.onDone).map((r)=>$e(t, n, r)));
        }
        for (const n of t.invoke){
            if (n.onDone) {
                const r = `xstate.done.actor.${n.id}`;
                e.set(r, st(n.onDone).map((s)=>$e(t, r, s)));
            }
            if (n.onError) {
                const r = `xstate.error.actor.${n.id}`;
                e.set(r, st(n.onError).map((s)=>$e(t, r, s)));
            }
            if (n.onSnapshot) {
                const r = `xstate.snapshot.${n.id}`;
                e.set(r, st(n.onSnapshot).map((s)=>$e(t, r, s)));
            }
        }
        for (const n of t.after){
            let r = e.get(n.eventType);
            r || (r = [], e.set(n.eventType, r)), r.push(n);
        }
        return e;
    }
    function Yo(t) {
        const e = [], n = (r)=>{
            Object.values(r).forEach((s)=>{
                if (s.config.route && s.config.id) {
                    const i = s.config.id, o = s.config.route.guard, a = (u, g)=>u.event.to !== `#${i}` ? !1 : o && typeof o == "function" ? o(u, g) : !0, c = {
                        ...s.config.route,
                        guard: a,
                        target: `#${i}`
                    };
                    e.push($e(t, "xstate.route", c));
                }
                s.states && n(s.states);
            });
        };
        n(t.states), e.length > 0 && t.transitions.set("xstate.route", e);
    }
    function Xo(t, e) {
        const n = typeof e == "string" ? t.states[e] : e ? t.states[e.target] : void 0;
        if (!n && e) throw new Error(`Initial state node "${e}" not found on parent state node #${t.id}`);
        const r = {
            source: t,
            actions: !e || typeof e == "string" ? [] : je(e.actions),
            eventType: null,
            reenter: !1,
            target: n ? [
                n
            ] : [],
            toJSON: ()=>({
                    ...r,
                    source: `#${t.id}`,
                    target: n ? [
                        `#${n.id}`
                    ] : []
                })
        };
        return r;
    }
    function Zo(t, e) {
        if (e !== void 0) return e.map((n)=>{
            if (typeof n != "string") return n;
            if (fn(n)) return t.machine.getStateNodeById(n);
            const r = n[0] === Ws;
            if (r && !t.parent) return Zt(t, n.slice(1));
            const s = r ? t.key + n : n;
            if (t.parent) try {
                return Zt(t.parent, s);
            } catch (i) {
                throw new Error(`Invalid transition definition for state node '${t.id}':
${i.message}`);
            }
            else throw new Error(`Invalid target: "${n}" is not a valid target from the root node. Did you mean ".${n}"?`);
        });
    }
    function oi(t) {
        const e = ei(t.config.target);
        return e ? {
            target: e.map((n)=>typeof n == "string" ? Zt(t.parent, n) : n)
        } : t.parent.initial;
    }
    function qe(t) {
        return t.type === "history";
    }
    function Nr(t) {
        const e = ai(t);
        for (const n of e)for (const r of Ht(n, t))e.add(r);
        return e;
    }
    function ai(t) {
        const e = new Set;
        function n(r) {
            if (!e.has(r)) {
                if (e.add(r), r.type === "compound") n(r.initial.target[0]);
                else if (r.type === "parallel") for (const s of ut(r))n(s);
            }
        }
        return n(t), e;
    }
    function ft(t, e) {
        if (fn(e)) return t.machine.getStateNodeById(e);
        if (!t.states) throw new Error(`Unable to retrieve child state '${e}' from '${t.id}'; no child states exist.`);
        const n = t.states[e];
        if (!n) throw new Error(`Child state '${e}' does not exist on '${t.id}'`);
        return n;
    }
    function Zt(t, e) {
        if (typeof e == "string" && fn(e)) try {
            return t.machine.getStateNodeById(e);
        } catch  {}
        const n = cr(e).slice();
        let r = t;
        for(; n.length;){
            const s = n.shift();
            if (!s.length) break;
            r = ft(r, s);
        }
        return r;
    }
    function Qt(t, e) {
        if (typeof e == "string") {
            const s = t.states[e];
            if (!s) throw new Error(`State '${e}' does not exist on '${t.id}'`);
            return [
                t,
                s
            ];
        }
        const n = Object.keys(e), r = n.map((s)=>ft(t, s)).filter(Boolean);
        return [
            t.machine.root,
            t
        ].concat(r, n.reduce((s, i)=>{
            const o = ft(t, i);
            if (!o) return s;
            const a = Qt(o, e[i]);
            return s.concat(a);
        }, []));
    }
    function Qo(t, e, n, r) {
        const i = ft(t, e).next(n, r);
        return !i || !i.length ? t.next(n, r) : i;
    }
    function ea(t, e, n, r) {
        const s = Object.keys(e), i = ft(t, s[0]), o = _r(i, e[s[0]], n, r);
        return !o || !o.length ? t.next(n, r) : o;
    }
    function ta(t, e, n, r) {
        const s = [];
        for (const i of Object.keys(e)){
            const o = e[i];
            if (!o) continue;
            const a = ft(t, i), c = _r(a, o, n, r);
            c && s.push(...c);
        }
        return s.length ? s : t.next(n, r);
    }
    function _r(t, e, n, r) {
        return typeof e == "string" ? Qo(t, e, n, r) : Object.keys(e).length === 1 ? ea(t, e, n, r) : ta(t, e, n, r);
    }
    function na(t) {
        return Object.keys(t.states).map((e)=>t.states[e]).filter((e)=>e.type === "history");
    }
    function Ve(t, e) {
        let n = t;
        for(; n.parent && n.parent !== e;)n = n.parent;
        return n.parent === e;
    }
    function ra(t, e) {
        const n = new Set(t), r = new Set(e);
        for (const s of n)if (r.has(s)) return !0;
        for (const s of r)if (n.has(s)) return !0;
        return !1;
    }
    function ci(t, e, n) {
        const r = new Set;
        for (const s of t){
            let i = !1;
            const o = new Set;
            for (const a of r)if (ra(Vn([
                s
            ], e, n), Vn([
                a
            ], e, n))) if (Ve(s.source, a.source)) o.add(a);
            else {
                i = !0;
                break;
            }
            if (!i) {
                for (const a of o)r.delete(a);
                r.add(s);
            }
        }
        return Array.from(r);
    }
    function sa(t) {
        const [e, ...n] = t;
        for (const r of Ht(e, void 0))if (n.every((s)=>Ve(s, r))) return r;
    }
    function pr(t, e) {
        if (!t.target) return [];
        const n = new Set;
        for (const r of t.target)if (qe(r)) if (e[r.id]) for (const s of e[r.id])n.add(s);
        else for (const s of pr(oi(r), e))n.add(s);
        else n.add(r);
        return [
            ...n
        ];
    }
    function ui(t, e) {
        const n = pr(t, e);
        if (!n) return;
        if (!t.reenter && n.every((s)=>s === t.source || Ve(s, t.source))) return t.source;
        const r = sa(n.concat(t.source));
        if (r) return r;
        if (!t.reenter) return t.source.machine.root;
    }
    function Vn(t, e, n) {
        const r = new Set;
        for (const s of t)if (s.target?.length) {
            const i = ui(s, n);
            s.reenter && s.source === i && r.add(i);
            for (const o of e)Ve(o, i) && r.add(o);
        }
        return [
            ...r
        ];
    }
    function ia(t, e) {
        if (t.length !== e.size) return !1;
        for (const n of t)if (!e.has(n)) return !1;
        return !0;
    }
    function oa(t, e, n, r, s) {
        return zn([
            {
                target: [
                    ...ai(t)
                ],
                source: t,
                reenter: !0,
                actions: [],
                eventType: null,
                toJSON: null
            }
        ], e, n, r, !0, s);
    }
    function zn(t, e, n, r, s, i) {
        const o = [];
        if (!t.length) return [
            e,
            o
        ];
        const a = n.actionExecutor;
        n.actionExecutor = (c)=>{
            o.push(c), a(c);
        };
        try {
            const c = new Set(e._nodes);
            let u = e.historyValue;
            const g = ci(t, c, u);
            let f = e;
            s || ([f, u] = fa(f, r, n, g, c, u, i, n.actionExecutor)), f = dt(f, r, n, g.flatMap((l)=>l.actions), i, void 0), f = ca(f, r, n, g, c, i, u, s);
            const h = [
                ...c
            ];
            f.status === "done" && (f = dt(f, r, n, h.sort((l, d)=>d.order - l.order).flatMap((l)=>l.exit), i, void 0));
            try {
                return u === e.historyValue && ia(e._nodes, c) ? [
                    f,
                    o
                ] : [
                    Ke(f, {
                        _nodes: h,
                        historyValue: u
                    }),
                    o
                ];
            } catch (l) {
                throw l;
            }
        } finally{
            n.actionExecutor = a;
        }
    }
    function aa(t, e, n, r, s) {
        if (r.output === void 0) return;
        const i = Ln(s.id, s.output !== void 0 && s.parent ? $n(s.output, t.context, e, n.self) : void 0);
        return $n(r.output, t.context, i, n.self);
    }
    function ca(t, e, n, r, s, i, o, a) {
        let c = t;
        const u = new Set, g = new Set;
        ua(r, o, g, u), a && g.add(t.machine.root);
        const f = new Set;
        for (const h of [
            ...u
        ].sort((l, d)=>l.order - d.order)){
            s.add(h);
            const l = [];
            l.push(...h.entry);
            for (const d of h.invoke)l.push(hr(d.src, {
                ...d,
                syncSnapshot: !!d.onSnapshot
            }));
            if (g.has(h)) {
                const d = h.initial.actions;
                l.push(...d);
            }
            if (c = dt(c, e, n, l, i, h.invoke.map((d)=>d.id)), h.type === "final") {
                const d = h.parent;
                let b = d?.type === "parallel" ? d : d?.parent, w = b || h;
                for(d?.type === "compound" && i.push(Ln(d.id, h.output !== void 0 ? $n(h.output, c.context, e, n.self) : void 0)); b?.type === "parallel" && !f.has(b) && gr(s, b);)f.add(b), i.push(Ln(b.id)), w = b, b = b.parent;
                if (b) continue;
                c = Ke(c, {
                    status: "done",
                    output: aa(c, e, n, c.machine.root, w)
                });
            }
        }
        return c;
    }
    function ua(t, e, n, r) {
        for (const s of t){
            const i = ui(s, e);
            for (const a of s.target || [])!qe(a) && (s.source !== a || s.source !== i || s.reenter) && (r.add(a), n.add(a)), it(a, e, n, r);
            const o = pr(s, e);
            for (const a of o){
                const c = Ht(a, i);
                i?.type === "parallel" && c.push(i), fi(r, e, n, c, !s.source.parent && s.reenter ? void 0 : i);
            }
        }
    }
    function it(t, e, n, r) {
        if (qe(t)) if (e[t.id]) {
            const s = e[t.id];
            for (const i of s)r.add(i), it(i, e, n, r);
            for (const i of s)Sn(i, t.parent, r, e, n);
        } else {
            const s = oi(t);
            for (const i of s.target)r.add(i), s === t.parent?.initial && n.add(t.parent), it(i, e, n, r);
            for (const i of s.target)Sn(i, t.parent, r, e, n);
        }
        else if (t.type === "compound") {
            const [s] = t.initial.target;
            qe(s) || (r.add(s), n.add(s)), it(s, e, n, r), Sn(s, t, r, e, n);
        } else if (t.type === "parallel") for (const s of ut(t).filter((i)=>!qe(i)))[
            ...r
        ].some((i)=>Ve(i, s)) || (qe(s) || (r.add(s), n.add(s)), it(s, e, n, r));
    }
    function fi(t, e, n, r, s) {
        for (const i of r)if ((!s || Ve(i, s)) && t.add(i), i.type === "parallel") for (const o of ut(i).filter((a)=>!qe(a)))[
            ...t
        ].some((a)=>Ve(a, o)) || (t.add(o), it(o, e, n, t));
    }
    function Sn(t, e, n, r, s) {
        fi(n, r, s, Ht(t, e));
    }
    function fa(t, e, n, r, s, i, o, a) {
        let c = t;
        const u = Vn(r, s, i);
        u.sort((f, h)=>h.order - f.order);
        let g;
        for (const f of u)for (const h of na(f)){
            let l;
            h.history === "deep" ? l = (d)=>lr(d) && Ve(d, f) : l = (d)=>d.parent === f, g ??= {
                ...i
            }, g[h.id] = Array.from(s).filter(l);
        }
        for (const f of u)c = dt(c, e, n, [
            ...f.exit,
            ...f.invoke.map((h)=>cn(h.id))
        ], o, void 0), s.delete(f);
        return [
            c,
            g || i
        ];
    }
    function da(t, e) {
        return t.implementations.actions[e];
    }
    function di(t, e, n, r, s, i) {
        const { machine: o } = t;
        let a = t;
        for (const c of r){
            const u = typeof c == "function", g = u ? c : da(o, typeof c == "string" ? c : c.type), f = {
                context: a.context,
                event: e,
                self: n.self,
                system: n.system
            }, h = u || typeof c == "string" ? void 0 : "params" in c ? typeof c.params == "function" ? c.params({
                context: a.context,
                event: e
            }) : c.params : void 0;
            if (!g || !("resolve" in g)) {
                n.actionExecutor({
                    type: typeof c == "string" ? c : typeof c == "object" ? c.type : c.name || "(anonymous)",
                    info: f,
                    params: h,
                    exec: g
                });
                continue;
            }
            const l = g, [d, b, w] = l.resolve(n, a, f, h, g, s);
            a = d, "retryResolve" in l && i?.push([
                l,
                b
            ]), "execute" in l && n.actionExecutor({
                type: l.type,
                info: f,
                params: b,
                exec: l.execute.bind(null, n, b)
            }), w && (a = di(a, e, n, w, s, i));
        }
        return a;
    }
    function dt(t, e, n, r, s, i) {
        const o = i ? [] : void 0, a = di(t, e, n, r, {
            internalQueue: s,
            deferredActorIds: i
        }, o);
        return o?.forEach(([c, u])=>{
            c.retryResolve(n, a, u);
        }), a;
    }
    function vn(t, e, n, r) {
        let s = t;
        const i = [];
        function o(u, g, f) {
            n.system._sendInspectionEvent({
                type: "@xstate.microstep",
                actorRef: n.self,
                event: g,
                snapshot: u[0],
                _transitions: f
            }), i.push(u);
        }
        if (e.type === Pn) return s = Ke(qr(s, e, n), {
            status: "stopped"
        }), o([
            s,
            []
        ], e, []), {
            snapshot: s,
            microsteps: i
        };
        let a = e;
        if (a.type !== Ks) {
            const u = a, g = Bo(u), f = Wr(u, s);
            if (g && !f.length) return s = Ke(t, {
                status: "error",
                error: u.error
            }), o([
                s,
                []
            ], u, []), {
                snapshot: s,
                microsteps: i
            };
            const h = zn(f, t, n, a, !1, r);
            s = h[0], o(h, u, f);
        }
        let c = !0;
        for(; s.status === "active";){
            let u = c ? ha(s, a) : [];
            const g = u.length ? s : void 0;
            if (!u.length) {
                if (!r.length) break;
                a = r.shift(), u = Wr(a, s);
            }
            const f = zn(u, s, n, a, !1, r);
            s = f[0], c = s !== g, o(f, a, u);
        }
        return s.status !== "active" && qr(s, a, n), {
            snapshot: s,
            microsteps: i
        };
    }
    function qr(t, e, n) {
        return dt(t, e, n, Object.values(t.children).map((r)=>cn(r)), [], void 0);
    }
    function Wr(t, e) {
        return e.machine.getTransitionData(e, t);
    }
    function ha(t, e) {
        const n = new Set, r = t._nodes.filter(lr);
        for (const s of r)e: for (const i of [
            s
        ].concat(Ht(s, void 0)))if (i.always) {
            for (const o of i.always)if (o.guard === void 0 || un(o.guard, t.context, e, t)) {
                n.add(o);
                break e;
            }
        }
        return ci(Array.from(n), new Set(t._nodes), t.historyValue);
    }
    function la(t, e) {
        const n = Xt(Qt(t, e));
        return ii(t, [
            ...n
        ]);
    }
    function ga(t) {
        return !!t && typeof t == "object" && "machine" in t && "value" in t;
    }
    const _a = function(e) {
        return Xs(e, this.value);
    }, pa = function(e) {
        return this.tags.has(e);
    }, ya = function(e) {
        const n = this.machine.getTransitionData(this, e);
        return !!n?.length && n.some((r)=>r.target !== void 0 || r.actions.length);
    }, ba = function() {
        const { _nodes: e, tags: n, machine: r, getMeta: s, toJSON: i, can: o, hasTag: a, matches: c, ...u } = this;
        return {
            ...u,
            tags: Array.from(n)
        };
    }, ma = function() {
        return this._nodes.reduce((e, n)=>(n.meta !== void 0 && (e[n.id] = n.meta), e), {});
    };
    function zt(t, e) {
        return {
            status: t.status,
            output: t.output,
            error: t.error,
            machine: e,
            context: t.context,
            _nodes: t._nodes,
            value: ii(e.root, t._nodes),
            tags: new Set(t._nodes.flatMap((n)=>n.tags)),
            children: t.children,
            historyValue: t.historyValue || {},
            matches: _a,
            hasTag: pa,
            can: ya,
            getMeta: ma,
            toJSON: ba
        };
    }
    function Ke(t, e = {}) {
        return zt({
            ...t,
            ...e
        }, t.machine);
    }
    function wa(t) {
        if (typeof t != "object" || t === null) return {};
        const e = {};
        for(const n in t){
            const r = t[n];
            Array.isArray(r) && (e[n] = r.map((s)=>({
                    id: s.id
                })));
        }
        return e;
    }
    function xa(t, e) {
        const { _nodes: n, tags: r, machine: s, children: i, context: o, can: a, hasTag: c, matches: u, getMeta: g, toJSON: f, ...h } = t, l = {};
        for(const b in i){
            const w = i[b];
            l[b] = {
                snapshot: w.getPersistedSnapshot(e),
                src: w.src,
                systemId: w.systemId,
                syncSnapshot: w._syncSnapshot
            };
        }
        return {
            ...h,
            context: hi(o),
            children: l,
            historyValue: wa(h.historyValue)
        };
    }
    function hi(t) {
        let e;
        for(const n in t){
            const r = t[n];
            if (r && typeof r == "object") if ("sessionId" in r && "send" in r && "ref" in r) e ??= Array.isArray(t) ? t.slice() : {
                ...t
            }, e[n] = {
                xstate$$type: fr,
                id: r.id
            };
            else {
                const s = hi(r);
                s !== r && (e ??= Array.isArray(t) ? t.slice() : {
                    ...t
                }, e[n] = s);
            }
        }
        return e ?? t;
    }
    function Sa(t, e, n, r, { event: s, id: i, delay: o }, { internalQueue: a }) {
        const c = e.machine.implementations.delays;
        if (typeof s == "string") throw new Error(`Only event objects may be used with raise; use raise({ type: "${s}" }) instead`);
        const u = typeof s == "function" ? s(n, r) : s;
        let g;
        if (typeof o == "string") {
            const f = c && c[o];
            g = typeof f == "function" ? f(n, r) : f;
        } else g = typeof o == "function" ? o(n, r) : o;
        return typeof g != "number" && a.push(u), [
            e,
            {
                event: u,
                id: i,
                delay: g
            },
            void 0
        ];
    }
    function va(t, e) {
        const { event: n, delay: r, id: s } = e;
        if (typeof r == "number") {
            t.defer(()=>{
                const i = t.self;
                t.system.scheduler.schedule(i, i, n, r, s);
            });
            return;
        }
    }
    function yr(t, e) {
        function n(r, s) {}
        return n.type = "xstate.raise", n.event = t, n.id = e?.id, n.delay = e?.delay, n.resolve = Sa, n.execute = va, n;
    }
    function Aa(t, { machine: e, context: n }, r, s) {
        const i = (o, a)=>{
            if (typeof o == "string") {
                const c = ur(e, o);
                if (!c) throw new Error(`Actor logic '${o}' not implemented in machine '${e.id}'`);
                const u = St(c, {
                    id: a?.id,
                    parent: t.self,
                    syncSnapshot: a?.syncSnapshot,
                    input: typeof a?.input == "function" ? a.input({
                        context: n,
                        event: r,
                        self: t.self
                    }) : a?.input,
                    src: o,
                    systemId: a?.systemId
                });
                return s[u.id] = u, u;
            } else return St(o, {
                id: a?.id,
                parent: t.self,
                syncSnapshot: a?.syncSnapshot,
                input: a?.input,
                src: o,
                systemId: a?.systemId
            });
        };
        return (o, a)=>{
            const c = i(o, a);
            return s[c.id] = c, t.defer(()=>{
                c._processingStatus !== ue.Stopped && c.start();
            }), c;
        };
    }
    function Ea(t, e, n, r, { assignment: s }) {
        if (!e.context) throw new Error("Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.");
        const i = {}, o = {
            context: e.context,
            event: n.event,
            spawn: Aa(t, e, n.event, i),
            self: t.self,
            system: t.system
        };
        let a = {};
        if (typeof s == "function") a = s(o, r);
        else for (const u of Object.keys(s)){
            const g = s[u];
            a[u] = typeof g == "function" ? g(o, r) : g;
        }
        const c = Object.assign({}, e.context, a);
        return [
            Ke(e, {
                context: c,
                children: Object.keys(i).length ? {
                    ...e.children,
                    ...i
                } : e.children
            }),
            void 0,
            void 0
        ];
    }
    function We(t) {
        function e(n, r) {}
        return e.type = "xstate.assign", e.assignment = t, e.resolve = Ea, e;
    }
    const Gr = new WeakMap;
    function et(t, e, n) {
        let r = Gr.get(t);
        return r ? e in r || (r[e] = n()) : (r = {
            [e]: n()
        }, Gr.set(t, r)), r[e];
    }
    const Ia = {}, lt = (t)=>typeof t == "string" ? {
            type: t
        } : typeof t == "function" ? "resolve" in t ? {
            type: t.type
        } : {
            type: t.name
        } : t;
    class en {
        constructor(e, n){
            if (this.config = e, this.key = void 0, this.id = void 0, this.type = void 0, this.path = void 0, this.states = void 0, this.history = void 0, this.entry = void 0, this.exit = void 0, this.parent = void 0, this.machine = void 0, this.meta = void 0, this.output = void 0, this.order = -1, this.description = void 0, this.tags = [], this.transitions = void 0, this.always = void 0, this.parent = n._parent, this.key = n._key, this.machine = n._machine, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.id = this.config.id || [
                this.machine.id,
                ...this.path
            ].join(Ws), this.type = this.config.type || (this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.description = this.config.description, this.order = this.machine.idMap.size, this.machine.idMap.set(this.id, this), this.states = this.config.states ? $r(this.config.states, (r, s)=>new en(r, {
                    _parent: this,
                    _key: s,
                    _machine: this.machine
                })) : Ia, this.type === "compound" && !this.config.initial) throw new Error(`No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`);
            this.history = this.config.history === !0 ? "shallow" : this.config.history || !1, this.entry = je(this.config.entry).slice(), this.exit = je(this.config.exit).slice(), this.meta = this.config.meta, this.output = this.type === "final" || !this.parent ? this.config.output : void 0, this.tags = je(e.tags).slice();
        }
        _initialize() {
            this.transitions = Jo(this), this.config.always && (this.always = st(this.config.always).map((e)=>$e(this, Gs, e))), Object.keys(this.states).forEach((e)=>{
                this.states[e]._initialize();
            });
        }
        get definition() {
            return {
                id: this.id,
                key: this.key,
                version: this.machine.version,
                type: this.type,
                initial: this.initial ? {
                    target: this.initial.target,
                    source: this,
                    actions: this.initial.actions.map(lt),
                    eventType: null,
                    reenter: !1,
                    toJSON: ()=>({
                            target: this.initial.target.map((e)=>`#${e.id}`),
                            source: `#${this.id}`,
                            actions: this.initial.actions.map(lt),
                            eventType: null
                        })
                } : void 0,
                history: this.history,
                states: $r(this.states, (e)=>e.definition),
                on: this.on,
                transitions: [
                    ...this.transitions.values()
                ].flat().map((e)=>({
                        ...e,
                        actions: e.actions.map(lt)
                    })),
                entry: this.entry.map(lt),
                exit: this.exit.map(lt),
                meta: this.meta,
                order: this.order || -1,
                output: this.output,
                invoke: this.invoke,
                description: this.description,
                tags: this.tags
            };
        }
        toJSON() {
            return this.definition;
        }
        get invoke() {
            return et(this, "invoke", ()=>je(this.config.invoke).map((e, n)=>{
                    const { src: r, systemId: s } = e, i = e.id ?? Vr(this.id, n), o = typeof r == "string" ? r : `xstate.invoke.${Vr(this.id, n)}`;
                    return {
                        ...e,
                        src: o,
                        id: i,
                        systemId: s,
                        toJSON () {
                            const { onDone: a, onError: c, ...u } = e;
                            return {
                                ...u,
                                type: "xstate.invoke",
                                src: o,
                                id: i
                            };
                        }
                    };
                }));
        }
        get on() {
            return et(this, "on", ()=>[
                    ...this.transitions
                ].flatMap(([n, r])=>r.map((s)=>[
                            n,
                            s
                        ])).reduce((n, [r, s])=>(n[r] = n[r] || [], n[r].push(s), n), {}));
        }
        get after() {
            return et(this, "delayedTransitions", ()=>Ko(this));
        }
        get initial() {
            return et(this, "initial", ()=>Xo(this, this.config.initial));
        }
        next(e, n) {
            const r = n.type, s = [];
            let i;
            const o = et(this, `candidates-${r}`, ()=>Go(this, r));
            for (const a of o){
                const { guard: c } = a, u = e.context;
                let g = !1;
                try {
                    g = !c || un(c, u, n, e);
                } catch (f) {
                    const h = typeof c == "string" ? c : typeof c == "object" ? c.type : void 0;
                    throw new Error(`Unable to evaluate guard ${h ? `'${h}' ` : ""}in transition for event '${r}' in state node '${this.id}':
${f.message}`);
                }
                if (g) {
                    s.push(...a.actions), i = a;
                    break;
                }
            }
            return i ? [
                i
            ] : void 0;
        }
        get events() {
            return et(this, "events", ()=>{
                const { states: e } = this, n = new Set(this.ownEvents);
                if (e) for (const r of Object.keys(e)){
                    const s = e[r];
                    if (s.states) for (const i of s.events)n.add(`${i}`);
                }
                return Array.from(n);
            });
        }
        get ownEvents() {
            const e = Object.keys(Object.fromEntries(this.transitions)), n = new Set(e.filter((r)=>this.transitions.get(r).some((s)=>!(!s.target && !s.actions.length && !s.reenter))));
            return Array.from(n);
        }
    }
    const Ca = "#";
    class br {
        constructor(e, n){
            this.config = e, this.version = void 0, this.schemas = void 0, this.implementations = void 0, this.__xstatenode = !0, this.idMap = new Map, this.root = void 0, this.id = void 0, this.states = void 0, this.events = void 0, this.id = e.id || "(machine)", this.implementations = {
                actors: n?.actors ?? {},
                actions: n?.actions ?? {},
                delays: n?.delays ?? {},
                guards: n?.guards ?? {}
            }, this.version = this.config.version, this.schemas = this.config.schemas, this.transition = this.transition.bind(this), this.getInitialSnapshot = this.getInitialSnapshot.bind(this), this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this), this.restoreSnapshot = this.restoreSnapshot.bind(this), this.start = this.start.bind(this), this.root = new en(e, {
                _key: this.id,
                _machine: this
            }), this.root._initialize(), Yo(this.root), this.states = this.root.states, this.events = this.root.events;
        }
        provide(e) {
            const { actions: n, guards: r, actors: s, delays: i } = this.implementations;
            return new br(this.config, {
                actions: {
                    ...n,
                    ...e.actions
                },
                guards: {
                    ...r,
                    ...e.guards
                },
                actors: {
                    ...s,
                    ...e.actors
                },
                delays: {
                    ...i,
                    ...e.delays
                }
            });
        }
        resolveState(e) {
            const n = la(this.root, e.value), r = Xt(Qt(this.root, n));
            return zt({
                _nodes: [
                    ...r
                ],
                context: e.context || {},
                children: {},
                status: gr(r, this.root) ? "done" : e.status || "active",
                output: e.output,
                error: e.error,
                historyValue: e.historyValue
            }, this);
        }
        transition(e, n, r) {
            return vn(e, n, r, []).snapshot;
        }
        microstep(e, n, r) {
            return vn(e, n, r, []).microsteps.map(([s])=>s);
        }
        getTransitionData(e, n) {
            return _r(this.root, e.value, e, n) || [];
        }
        _getPreInitialState(e, n, r) {
            const { context: s } = this.config, i = zt({
                context: typeof s != "function" && s ? s : {},
                _nodes: [
                    this.root
                ],
                children: {},
                status: "active"
            }, this);
            return typeof s == "function" ? dt(i, n, e, [
                We(({ spawn: a, event: c, self: u })=>s({
                        spawn: a,
                        input: c.input,
                        self: u
                    }))
            ], r, void 0) : i;
        }
        getInitialSnapshot(e, n) {
            const r = Ys(n), s = [], i = this._getPreInitialState(e, r, s), [o] = oa(this.root, i, e, r, s), { snapshot: a } = vn(o, r, e, s);
            return a;
        }
        start(e) {
            Object.values(e.children).forEach((n)=>{
                n.getSnapshot().status === "active" && n.start();
            });
        }
        getStateNodeById(e) {
            const n = cr(e), r = n.slice(1), s = fn(n[0]) ? n[0].slice(Ca.length) : n[0], i = this.idMap.get(s);
            if (!i) throw new Error(`Child state node '#${s}' does not exist on machine '${this.id}'`);
            return Zt(i, r);
        }
        get definition() {
            return this.root.definition;
        }
        toJSON() {
            return this.definition;
        }
        getPersistedSnapshot(e, n) {
            return xa(e, n);
        }
        restoreSnapshot(e, n) {
            const r = {}, s = e.children;
            Object.keys(s).forEach((f)=>{
                const h = s[f], l = h.snapshot, d = h.src, b = typeof d == "string" ? ur(this, d) : d;
                if (!b) return;
                const w = St(b, {
                    id: f,
                    parent: n.self,
                    syncSnapshot: h.syncSnapshot,
                    snapshot: l,
                    src: d,
                    systemId: h.systemId
                });
                r[f] = w;
            });
            function i(f, h) {
                if (h instanceof en) return h;
                try {
                    return f.machine.getStateNodeById(h.id);
                } catch  {}
            }
            function o(f, h) {
                if (!h || typeof h != "object") return {};
                const l = {};
                for(const d in h){
                    const b = h[d];
                    for (const w of b){
                        const O = i(f, w);
                        O && (l[d] ??= [], l[d].push(O));
                    }
                }
                return l;
            }
            const a = o(this.root, e.historyValue), c = zt({
                ...e,
                children: r,
                _nodes: Array.from(Xt(Qt(this.root, e.value))),
                historyValue: a
            }, this), u = new Set;
            function g(f, h) {
                if (!u.has(f)) {
                    u.add(f);
                    for(const l in f){
                        const d = f[l];
                        if (d && typeof d == "object") {
                            if ("xstate$$type" in d && d.xstate$$type === fr) {
                                f[l] = h[d.id];
                                continue;
                            }
                            g(d, h);
                        }
                    }
                }
            }
            return g(c.context, r), c;
        }
    }
    function Ra(t, e, n, r, { event: s }) {
        const i = typeof s == "function" ? s(n, r) : s;
        return [
            e,
            {
                event: i
            },
            void 0
        ];
    }
    function Ha(t, { event: e }) {
        t.defer(()=>t.emit(e));
    }
    function li(t) {
        function e(n, r) {}
        return e.type = "xstate.emit", e.event = t, e.resolve = Ra, e.execute = Ha, e;
    }
    let Nn = (function(t) {
        return t.Parent = "#_parent", t.Internal = "#_internal", t;
    })({});
    function ka(t, e, n, r, { to: s, event: i, id: o, delay: a }, c) {
        const u = e.machine.implementations.delays;
        if (typeof i == "string") throw new Error(`Only event objects may be used with sendTo; use sendTo({ type: "${i}" }) instead`);
        const g = typeof i == "function" ? i(n, r) : i;
        let f;
        if (typeof a == "string") {
            const d = u && u[a];
            f = typeof d == "function" ? d(n, r) : d;
        } else f = typeof a == "function" ? a(n, r) : a;
        const h = typeof s == "function" ? s(n, r) : s;
        let l;
        if (typeof h == "string") {
            if (h === Nn.Parent ? l = t.self._parent : h === Nn.Internal ? l = t.self : h.startsWith("#_") ? l = e.children[h.slice(2)] : l = c.deferredActorIds?.includes(h) ? h : e.children[h], !l) throw new Error(`Unable to send event to actor '${h}' from machine '${e.machine.id}'.`);
        } else l = h || t.self;
        return [
            e,
            {
                to: l,
                targetId: typeof h == "string" ? h : void 0,
                event: g,
                id: o,
                delay: f
            },
            void 0
        ];
    }
    function Da(t, e, n) {
        typeof n.to == "string" && (n.to = e.children[n.to]);
    }
    function Oa(t, e) {
        t.defer(()=>{
            const { to: n, event: r, delay: s, id: i } = e;
            if (typeof s == "number") {
                t.system.scheduler.schedule(t.self, n, r, s, i);
                return;
            }
            t.system._relay(t.self, n, r.type === Do ? Js(t.self.id, r.data) : r);
        });
    }
    function mr(t, e, n) {
        function r(s, i) {}
        return r.type = "xstate.sendTo", r.to = t, r.event = e, r.id = n?.id, r.delay = n?.delay, r.resolve = ka, r.retryResolve = Da, r.execute = Oa, r;
    }
    function Ma(t, e) {
        return mr(Nn.Parent, t, e);
    }
    function Ta(t, e, n, r, { collect: s }) {
        const i = [], o = function(c) {
            i.push(c);
        };
        return o.assign = (...a)=>{
            i.push(We(...a));
        }, o.cancel = (...a)=>{
            i.push(dr(...a));
        }, o.raise = (...a)=>{
            i.push(yr(...a));
        }, o.sendTo = (...a)=>{
            i.push(mr(...a));
        }, o.sendParent = (...a)=>{
            i.push(Ma(...a));
        }, o.spawnChild = (...a)=>{
            i.push(hr(...a));
        }, o.stopChild = (...a)=>{
            i.push(cn(...a));
        }, o.emit = (...a)=>{
            i.push(li(...a));
        }, s({
            context: n.context,
            event: n.event,
            enqueue: o,
            check: (a)=>un(a, e.context, n.event, e),
            self: t.self,
            system: t.system
        }, r), [
            e,
            void 0,
            i
        ];
    }
    function Ua(t) {
        function e(n, r) {}
        return e.type = "xstate.enqueueActions", e.collect = t, e.resolve = Ta, e;
    }
    function Ba(t, e, n, r, { value: s, label: i }) {
        return [
            e,
            {
                value: typeof s == "function" ? s(n, r) : s,
                label: i
            },
            void 0
        ];
    }
    function ja({ logger: t }, { value: e, label: n }) {
        n ? t(n, e) : t(e);
    }
    function Fa(t = ({ context: n, event: r })=>({
            context: n,
            event: r
        }), e) {
        function n(r, s) {}
        return n.type = "xstate.log", n.value = t, n.label = e, n.resolve = Ba, n.execute = ja, n;
    }
    function Pa(t, e) {
        const n = je(e);
        if (!n.some((s)=>ti(t.type, s))) {
            const s = n.length === 1 ? `type matching "${n[0]}"` : `one of types matching "${n.join('", "')}"`;
            throw new Error(`Expected event ${JSON.stringify(t)} to have ${s}`);
        }
    }
    function La(t, e) {
        return new br(t, e);
    }
    function gi({ schemas: t, actors: e, actions: n, guards: r, delays: s }) {
        return {
            assign: We,
            sendTo: mr,
            raise: yr,
            log: Fa,
            cancel: dr,
            stopChild: cn,
            enqueueActions: Ua,
            emit: li,
            spawnChild: hr,
            createStateConfig: (i)=>i,
            createAction: (i)=>i,
            createMachine: (i)=>La({
                    ...i,
                    schemas: t
                }, {
                    actors: e,
                    actions: n,
                    guards: r,
                    delays: s
                }),
            extend: (i)=>gi({
                    schemas: t,
                    actors: e,
                    actions: {
                        ...n,
                        ...i.actions
                    },
                    guards: {
                        ...r,
                        ...i.guards
                    },
                    delays: {
                        ...s,
                        ...i.delays
                    }
                })
        };
    }
    const $a = {
        timeout: 1 / 0
    };
    function Va(t, e, n) {
        const r = {
            ...$a,
            ...n
        };
        return new Promise((s, i)=>{
            const { signal: o } = r;
            if (o?.aborted) {
                i(o.reason);
                return;
            }
            let a = !1;
            const c = r.timeout === 1 / 0 ? void 0 : setTimeout(()=>{
                u(), i(new Error(`Timeout of ${r.timeout} ms exceeded`));
            }, r.timeout), u = ()=>{
                clearTimeout(c), a = !0, h?.unsubscribe(), f && o.removeEventListener("abort", f);
            };
            function g(l) {
                e(l) && (u(), s(l));
            }
            let f, h;
            g(t.getSnapshot()), !a && (o && (f = ()=>{
                u(), i(o.reason);
            }, o.addEventListener("abort", f)), h = t.subscribe({
                next: g,
                error: (l)=>{
                    u(), i(l);
                },
                complete: ()=>{
                    u(), i(new Error("Actor terminated without satisfying predicate"));
                }
            }), a && h.unsubscribe());
        });
    }
    let Tt;
    const za = new Uint8Array(16);
    function Na() {
        if (!Tt && (Tt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Tt)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return Tt(za);
    }
    const qa = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    function _i(t) {
        return typeof t == "string" && qa.test(t);
    }
    const ie = [];
    for(let t = 0; t < 256; ++t)ie.push((t + 256).toString(16).slice(1));
    function Wa(t, e = 0) {
        return ie[t[e + 0]] + ie[t[e + 1]] + ie[t[e + 2]] + ie[t[e + 3]] + "-" + ie[t[e + 4]] + ie[t[e + 5]] + "-" + ie[t[e + 6]] + ie[t[e + 7]] + "-" + ie[t[e + 8]] + ie[t[e + 9]] + "-" + ie[t[e + 10]] + ie[t[e + 11]] + ie[t[e + 12]] + ie[t[e + 13]] + ie[t[e + 14]] + ie[t[e + 15]];
    }
    function Ga(t) {
        if (!_i(t)) throw TypeError("Invalid UUID");
        let e;
        const n = new Uint8Array(16);
        return n[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24, n[1] = e >>> 16 & 255, n[2] = e >>> 8 & 255, n[3] = e & 255, n[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8, n[5] = e & 255, n[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8, n[7] = e & 255, n[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8, n[9] = e & 255, n[10] = (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = e / 4294967296 & 255, n[12] = e >>> 24 & 255, n[13] = e >>> 16 & 255, n[14] = e >>> 8 & 255, n[15] = e & 255, n;
    }
    const Ka = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Kr = {
        randomUUID: Ka
    };
    function pi(t, e, n) {
        if (Kr.randomUUID && !e && !t) return Kr.randomUUID();
        t = t || {};
        const r = t.random || (t.rng || Na)();
        if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
            n = n || 0;
            for(let s = 0; s < 16; ++s)e[n + s] = r[s];
            return e;
        }
        return Wa(r);
    }
    var Ce = {}, J = {}, oe = {}, An = {}, gt = {}, Jr;
    function Ja() {
        return Jr || (Jr = 1, Object.defineProperty(gt, "__esModule", {
            value: !0
        }), gt.crypto = void 0, gt.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0), gt;
    }
    var Yr;
    function yi() {
        return Yr || (Yr = 1, (function(t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.wrapXOFConstructorWithOpts = t.wrapConstructorWithOpts = t.wrapConstructor = t.Hash = t.nextTick = t.swap32IfBE = t.byteSwapIfBE = t.swap8IfBE = t.isLE = void 0, t.isBytes = n, t.anumber = r, t.abytes = s, t.ahash = i, t.aexists = o, t.aoutput = a, t.u8 = c, t.u32 = u, t.clean = g, t.createView = f, t.rotr = h, t.rotl = l, t.byteSwap = d, t.byteSwap32 = b, t.bytesToHex = U, t.hexToBytes = M, t.asyncLoop = V, t.utf8ToBytes = F, t.bytesToUtf8 = C, t.toBytes = k, t.kdfInputToBytes = j, t.concatBytes = q, t.checkOpts = _, t.createHasher = E, t.createOptHasher = I, t.createXOFer = A, t.randomBytes = $;
            const e = Ja();
            function n(y) {
                return y instanceof Uint8Array || ArrayBuffer.isView(y) && y.constructor.name === "Uint8Array";
            }
            function r(y) {
                if (!Number.isSafeInteger(y) || y < 0) throw new Error("positive integer expected, got " + y);
            }
            function s(y, ...H) {
                if (!n(y)) throw new Error("Uint8Array expected");
                if (H.length > 0 && !H.includes(y.length)) throw new Error("Uint8Array expected of length " + H + ", got length=" + y.length);
            }
            function i(y) {
                if (typeof y != "function" || typeof y.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
                r(y.outputLen), r(y.blockLen);
            }
            function o(y, H = !0) {
                if (y.destroyed) throw new Error("Hash instance has been destroyed");
                if (H && y.finished) throw new Error("Hash#digest() has already been called");
            }
            function a(y, H) {
                s(y);
                const T = H.outputLen;
                if (y.length < T) throw new Error("digestInto() expects output buffer of length at least " + T);
            }
            function c(y) {
                return new Uint8Array(y.buffer, y.byteOffset, y.byteLength);
            }
            function u(y) {
                return new Uint32Array(y.buffer, y.byteOffset, Math.floor(y.byteLength / 4));
            }
            function g(...y) {
                for(let H = 0; H < y.length; H++)y[H].fill(0);
            }
            function f(y) {
                return new DataView(y.buffer, y.byteOffset, y.byteLength);
            }
            function h(y, H) {
                return y << 32 - H | y >>> H;
            }
            function l(y, H) {
                return y << H | y >>> 32 - H >>> 0;
            }
            t.isLE = new Uint8Array(new Uint32Array([
                287454020
            ]).buffer)[0] === 68;
            function d(y) {
                return y << 24 & 4278190080 | y << 8 & 16711680 | y >>> 8 & 65280 | y >>> 24 & 255;
            }
            t.swap8IfBE = t.isLE ? (y)=>y : (y)=>d(y), t.byteSwapIfBE = t.swap8IfBE;
            function b(y) {
                for(let H = 0; H < y.length; H++)y[H] = d(y[H]);
                return y;
            }
            t.swap32IfBE = t.isLE ? (y)=>y : b;
            const w = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", O = Array.from({
                length: 256
            }, (y, H)=>H.toString(16).padStart(2, "0"));
            function U(y) {
                if (s(y), w) return y.toHex();
                let H = "";
                for(let T = 0; T < y.length; T++)H += O[y[T]];
                return H;
            }
            const S = {
                _0: 48,
                _9: 57,
                A: 65,
                F: 70,
                a: 97,
                f: 102
            };
            function z(y) {
                if (y >= S._0 && y <= S._9) return y - S._0;
                if (y >= S.A && y <= S.F) return y - (S.A - 10);
                if (y >= S.a && y <= S.f) return y - (S.a - 10);
            }
            function M(y) {
                if (typeof y != "string") throw new Error("hex string expected, got " + typeof y);
                if (w) return Uint8Array.fromHex(y);
                const H = y.length, T = H / 2;
                if (H % 2) throw new Error("hex string expected, got unpadded hex of length " + H);
                const P = new Uint8Array(T);
                for(let K = 0, se = 0; K < T; K++, se += 2){
                    const Qe = z(y.charCodeAt(se)), me = z(y.charCodeAt(se + 1));
                    if (Qe === void 0 || me === void 0) {
                        const Ie = y[se] + y[se + 1];
                        throw new Error('hex string expected, got non-hex character "' + Ie + '" at index ' + se);
                    }
                    P[K] = Qe * 16 + me;
                }
                return P;
            }
            const B = async ()=>{};
            t.nextTick = B;
            async function V(y, H, T) {
                let P = Date.now();
                for(let K = 0; K < y; K++){
                    T(K);
                    const se = Date.now() - P;
                    se >= 0 && se < H || (await (0, t.nextTick)(), P += se);
                }
            }
            function F(y) {
                if (typeof y != "string") throw new Error("string expected");
                return new Uint8Array(new TextEncoder().encode(y));
            }
            function C(y) {
                return new TextDecoder().decode(y);
            }
            function k(y) {
                return typeof y == "string" && (y = F(y)), s(y), y;
            }
            function j(y) {
                return typeof y == "string" && (y = F(y)), s(y), y;
            }
            function q(...y) {
                let H = 0;
                for(let P = 0; P < y.length; P++){
                    const K = y[P];
                    s(K), H += K.length;
                }
                const T = new Uint8Array(H);
                for(let P = 0, K = 0; P < y.length; P++){
                    const se = y[P];
                    T.set(se, K), K += se.length;
                }
                return T;
            }
            function _(y, H) {
                if (H !== void 0 && {}.toString.call(H) !== "[object Object]") throw new Error("options should be object or undefined");
                return Object.assign(y, H);
            }
            class D {
            }
            t.Hash = D;
            function E(y) {
                const H = (P)=>y().update(k(P)).digest(), T = y();
                return H.outputLen = T.outputLen, H.blockLen = T.blockLen, H.create = ()=>y(), H;
            }
            function I(y) {
                const H = (P, K)=>y(K).update(k(P)).digest(), T = y({});
                return H.outputLen = T.outputLen, H.blockLen = T.blockLen, H.create = (P)=>y(P), H;
            }
            function A(y) {
                const H = (P, K)=>y(K).update(k(P)).digest(), T = y({});
                return H.outputLen = T.outputLen, H.blockLen = T.blockLen, H.create = (P)=>y(P), H;
            }
            t.wrapConstructor = E, t.wrapConstructorWithOpts = I, t.wrapXOFConstructorWithOpts = A;
            function $(y = 32) {
                if (e.crypto && typeof e.crypto.getRandomValues == "function") return e.crypto.getRandomValues(new Uint8Array(y));
                if (e.crypto && typeof e.crypto.randomBytes == "function") return Uint8Array.from(e.crypto.randomBytes(y));
                throw new Error("crypto.getRandomValues must be defined");
            }
        })(An)), An;
    }
    var Xr;
    function Ya() {
        if (Xr) return oe;
        Xr = 1, Object.defineProperty(oe, "__esModule", {
            value: !0
        }), oe.SHA512_IV = oe.SHA384_IV = oe.SHA224_IV = oe.SHA256_IV = oe.HashMD = void 0, oe.setBigUint64 = e, oe.Chi = n, oe.Maj = r;
        const t = yi();
        function e(i, o, a, c) {
            if (typeof i.setBigUint64 == "function") return i.setBigUint64(o, a, c);
            const u = BigInt(32), g = BigInt(4294967295), f = Number(a >> u & g), h = Number(a & g), l = c ? 4 : 0, d = c ? 0 : 4;
            i.setUint32(o + l, f, c), i.setUint32(o + d, h, c);
        }
        function n(i, o, a) {
            return i & o ^ ~i & a;
        }
        function r(i, o, a) {
            return i & o ^ i & a ^ o & a;
        }
        class s extends t.Hash {
            constructor(o, a, c, u){
                super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = o, this.outputLen = a, this.padOffset = c, this.isLE = u, this.buffer = new Uint8Array(o), this.view = (0, t.createView)(this.buffer);
            }
            update(o) {
                (0, t.aexists)(this), o = (0, t.toBytes)(o), (0, t.abytes)(o);
                const { view: a, buffer: c, blockLen: u } = this, g = o.length;
                for(let f = 0; f < g;){
                    const h = Math.min(u - this.pos, g - f);
                    if (h === u) {
                        const l = (0, t.createView)(o);
                        for(; u <= g - f; f += u)this.process(l, f);
                        continue;
                    }
                    c.set(o.subarray(f, f + h), this.pos), this.pos += h, f += h, this.pos === u && (this.process(a, 0), this.pos = 0);
                }
                return this.length += o.length, this.roundClean(), this;
            }
            digestInto(o) {
                (0, t.aexists)(this), (0, t.aoutput)(o, this), this.finished = !0;
                const { buffer: a, view: c, blockLen: u, isLE: g } = this;
                let { pos: f } = this;
                a[f++] = 128, (0, t.clean)(this.buffer.subarray(f)), this.padOffset > u - f && (this.process(c, 0), f = 0);
                for(let w = f; w < u; w++)a[w] = 0;
                e(c, u - 8, BigInt(this.length * 8), g), this.process(c, 0);
                const h = (0, t.createView)(o), l = this.outputLen;
                if (l % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
                const d = l / 4, b = this.get();
                if (d > b.length) throw new Error("_sha2: outputLen bigger than state");
                for(let w = 0; w < d; w++)h.setUint32(4 * w, b[w], g);
            }
            digest() {
                const { buffer: o, outputLen: a } = this;
                this.digestInto(o);
                const c = o.slice(0, a);
                return this.destroy(), c;
            }
            _cloneInto(o) {
                o || (o = new this.constructor), o.set(...this.get());
                const { blockLen: a, buffer: c, length: u, finished: g, destroyed: f, pos: h } = this;
                return o.destroyed = f, o.finished = g, o.length = u, o.pos = h, u % a && o.buffer.set(c), o;
            }
            clone() {
                return this._cloneInto();
            }
        }
        return oe.HashMD = s, oe.SHA256_IV = Uint32Array.from([
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225
        ]), oe.SHA224_IV = Uint32Array.from([
            3238371032,
            914150663,
            812702999,
            4144912697,
            4290775857,
            1750603025,
            1694076839,
            3204075428
        ]), oe.SHA384_IV = Uint32Array.from([
            3418070365,
            3238371032,
            1654270250,
            914150663,
            2438529370,
            812702999,
            355462360,
            4144912697,
            1731405415,
            4290775857,
            2394180231,
            1750603025,
            3675008525,
            1694076839,
            1203062813,
            3204075428
        ]), oe.SHA512_IV = Uint32Array.from([
            1779033703,
            4089235720,
            3144134277,
            2227873595,
            1013904242,
            4271175723,
            2773480762,
            1595750129,
            1359893119,
            2917565137,
            2600822924,
            725511199,
            528734635,
            4215389547,
            1541459225,
            327033209
        ]), oe;
    }
    var N = {}, Zr;
    function Xa() {
        if (Zr) return N;
        Zr = 1, Object.defineProperty(N, "__esModule", {
            value: !0
        }), N.toBig = N.shrSL = N.shrSH = N.rotrSL = N.rotrSH = N.rotrBL = N.rotrBH = N.rotr32L = N.rotr32H = N.rotlSL = N.rotlSH = N.rotlBL = N.rotlBH = N.add5L = N.add5H = N.add4L = N.add4H = N.add3L = N.add3H = void 0, N.add = O, N.fromBig = n, N.split = r;
        const t = BigInt(2 ** 32 - 1), e = BigInt(32);
        function n(C, k = !1) {
            return k ? {
                h: Number(C & t),
                l: Number(C >> e & t)
            } : {
                h: Number(C >> e & t) | 0,
                l: Number(C & t) | 0
            };
        }
        function r(C, k = !1) {
            const j = C.length;
            let q = new Uint32Array(j), _ = new Uint32Array(j);
            for(let D = 0; D < j; D++){
                const { h: E, l: I } = n(C[D], k);
                [q[D], _[D]] = [
                    E,
                    I
                ];
            }
            return [
                q,
                _
            ];
        }
        const s = (C, k)=>BigInt(C >>> 0) << e | BigInt(k >>> 0);
        N.toBig = s;
        const i = (C, k, j)=>C >>> j;
        N.shrSH = i;
        const o = (C, k, j)=>C << 32 - j | k >>> j;
        N.shrSL = o;
        const a = (C, k, j)=>C >>> j | k << 32 - j;
        N.rotrSH = a;
        const c = (C, k, j)=>C << 32 - j | k >>> j;
        N.rotrSL = c;
        const u = (C, k, j)=>C << 64 - j | k >>> j - 32;
        N.rotrBH = u;
        const g = (C, k, j)=>C >>> j - 32 | k << 64 - j;
        N.rotrBL = g;
        const f = (C, k)=>k;
        N.rotr32H = f;
        const h = (C, k)=>C;
        N.rotr32L = h;
        const l = (C, k, j)=>C << j | k >>> 32 - j;
        N.rotlSH = l;
        const d = (C, k, j)=>k << j | C >>> 32 - j;
        N.rotlSL = d;
        const b = (C, k, j)=>k << j - 32 | C >>> 64 - j;
        N.rotlBH = b;
        const w = (C, k, j)=>C << j - 32 | k >>> 64 - j;
        N.rotlBL = w;
        function O(C, k, j, q) {
            const _ = (k >>> 0) + (q >>> 0);
            return {
                h: C + j + (_ / 2 ** 32 | 0) | 0,
                l: _ | 0
            };
        }
        const U = (C, k, j)=>(C >>> 0) + (k >>> 0) + (j >>> 0);
        N.add3L = U;
        const S = (C, k, j, q)=>k + j + q + (C / 2 ** 32 | 0) | 0;
        N.add3H = S;
        const z = (C, k, j, q)=>(C >>> 0) + (k >>> 0) + (j >>> 0) + (q >>> 0);
        N.add4L = z;
        const M = (C, k, j, q, _)=>k + j + q + _ + (C / 2 ** 32 | 0) | 0;
        N.add4H = M;
        const B = (C, k, j, q, _)=>(C >>> 0) + (k >>> 0) + (j >>> 0) + (q >>> 0) + (_ >>> 0);
        N.add5L = B;
        const V = (C, k, j, q, _, D)=>k + j + q + _ + D + (C / 2 ** 32 | 0) | 0;
        N.add5H = V;
        const F = {
            fromBig: n,
            split: r,
            toBig: s,
            shrSH: i,
            shrSL: o,
            rotrSH: a,
            rotrSL: c,
            rotrBH: u,
            rotrBL: g,
            rotr32H: f,
            rotr32L: h,
            rotlSH: l,
            rotlSL: d,
            rotlBH: b,
            rotlBL: w,
            add: O,
            add3L: U,
            add3H: S,
            add4L: z,
            add4H: M,
            add5H: V,
            add5L: B
        };
        return N.default = F, N;
    }
    var Qr;
    function Za() {
        if (Qr) return J;
        Qr = 1, Object.defineProperty(J, "__esModule", {
            value: !0
        }), J.sha512_224 = J.sha512_256 = J.sha384 = J.sha512 = J.sha224 = J.sha256 = J.SHA512_256 = J.SHA512_224 = J.SHA384 = J.SHA512 = J.SHA224 = J.SHA256 = void 0;
        const t = Ya(), e = Xa(), n = yi(), r = Uint32Array.from([
            1116352408,
            1899447441,
            3049323471,
            3921009573,
            961987163,
            1508970993,
            2453635748,
            2870763221,
            3624381080,
            310598401,
            607225278,
            1426881987,
            1925078388,
            2162078206,
            2614888103,
            3248222580,
            3835390401,
            4022224774,
            264347078,
            604807628,
            770255983,
            1249150122,
            1555081692,
            1996064986,
            2554220882,
            2821834349,
            2952996808,
            3210313671,
            3336571891,
            3584528711,
            113926993,
            338241895,
            666307205,
            773529912,
            1294757372,
            1396182291,
            1695183700,
            1986661051,
            2177026350,
            2456956037,
            2730485921,
            2820302411,
            3259730800,
            3345764771,
            3516065817,
            3600352804,
            4094571909,
            275423344,
            430227734,
            506948616,
            659060556,
            883997877,
            958139571,
            1322822218,
            1537002063,
            1747873779,
            1955562222,
            2024104815,
            2227730452,
            2361852424,
            2428436474,
            2756734187,
            3204031479,
            3329325298
        ]), s = new Uint32Array(64);
        class i extends t.HashMD {
            constructor(S = 32){
                super(64, S, 8, !1), this.A = t.SHA256_IV[0] | 0, this.B = t.SHA256_IV[1] | 0, this.C = t.SHA256_IV[2] | 0, this.D = t.SHA256_IV[3] | 0, this.E = t.SHA256_IV[4] | 0, this.F = t.SHA256_IV[5] | 0, this.G = t.SHA256_IV[6] | 0, this.H = t.SHA256_IV[7] | 0;
            }
            get() {
                const { A: S, B: z, C: M, D: B, E: V, F, G: C, H: k } = this;
                return [
                    S,
                    z,
                    M,
                    B,
                    V,
                    F,
                    C,
                    k
                ];
            }
            set(S, z, M, B, V, F, C, k) {
                this.A = S | 0, this.B = z | 0, this.C = M | 0, this.D = B | 0, this.E = V | 0, this.F = F | 0, this.G = C | 0, this.H = k | 0;
            }
            process(S, z) {
                for(let _ = 0; _ < 16; _++, z += 4)s[_] = S.getUint32(z, !1);
                for(let _ = 16; _ < 64; _++){
                    const D = s[_ - 15], E = s[_ - 2], I = (0, n.rotr)(D, 7) ^ (0, n.rotr)(D, 18) ^ D >>> 3, A = (0, n.rotr)(E, 17) ^ (0, n.rotr)(E, 19) ^ E >>> 10;
                    s[_] = A + s[_ - 7] + I + s[_ - 16] | 0;
                }
                let { A: M, B, C: V, D: F, E: C, F: k, G: j, H: q } = this;
                for(let _ = 0; _ < 64; _++){
                    const D = (0, n.rotr)(C, 6) ^ (0, n.rotr)(C, 11) ^ (0, n.rotr)(C, 25), E = q + D + (0, t.Chi)(C, k, j) + r[_] + s[_] | 0, A = ((0, n.rotr)(M, 2) ^ (0, n.rotr)(M, 13) ^ (0, n.rotr)(M, 22)) + (0, t.Maj)(M, B, V) | 0;
                    q = j, j = k, k = C, C = F + E | 0, F = V, V = B, B = M, M = E + A | 0;
                }
                M = M + this.A | 0, B = B + this.B | 0, V = V + this.C | 0, F = F + this.D | 0, C = C + this.E | 0, k = k + this.F | 0, j = j + this.G | 0, q = q + this.H | 0, this.set(M, B, V, F, C, k, j, q);
            }
            roundClean() {
                (0, n.clean)(s);
            }
            destroy() {
                this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, n.clean)(this.buffer);
            }
        }
        J.SHA256 = i;
        class o extends i {
            constructor(){
                super(28), this.A = t.SHA224_IV[0] | 0, this.B = t.SHA224_IV[1] | 0, this.C = t.SHA224_IV[2] | 0, this.D = t.SHA224_IV[3] | 0, this.E = t.SHA224_IV[4] | 0, this.F = t.SHA224_IV[5] | 0, this.G = t.SHA224_IV[6] | 0, this.H = t.SHA224_IV[7] | 0;
            }
        }
        J.SHA224 = o;
        const a = e.split([
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817"
        ].map((U)=>BigInt(U))), c = a[0], u = a[1], g = new Uint32Array(80), f = new Uint32Array(80);
        class h extends t.HashMD {
            constructor(S = 64){
                super(128, S, 16, !1), this.Ah = t.SHA512_IV[0] | 0, this.Al = t.SHA512_IV[1] | 0, this.Bh = t.SHA512_IV[2] | 0, this.Bl = t.SHA512_IV[3] | 0, this.Ch = t.SHA512_IV[4] | 0, this.Cl = t.SHA512_IV[5] | 0, this.Dh = t.SHA512_IV[6] | 0, this.Dl = t.SHA512_IV[7] | 0, this.Eh = t.SHA512_IV[8] | 0, this.El = t.SHA512_IV[9] | 0, this.Fh = t.SHA512_IV[10] | 0, this.Fl = t.SHA512_IV[11] | 0, this.Gh = t.SHA512_IV[12] | 0, this.Gl = t.SHA512_IV[13] | 0, this.Hh = t.SHA512_IV[14] | 0, this.Hl = t.SHA512_IV[15] | 0;
            }
            get() {
                const { Ah: S, Al: z, Bh: M, Bl: B, Ch: V, Cl: F, Dh: C, Dl: k, Eh: j, El: q, Fh: _, Fl: D, Gh: E, Gl: I, Hh: A, Hl: $ } = this;
                return [
                    S,
                    z,
                    M,
                    B,
                    V,
                    F,
                    C,
                    k,
                    j,
                    q,
                    _,
                    D,
                    E,
                    I,
                    A,
                    $
                ];
            }
            set(S, z, M, B, V, F, C, k, j, q, _, D, E, I, A, $) {
                this.Ah = S | 0, this.Al = z | 0, this.Bh = M | 0, this.Bl = B | 0, this.Ch = V | 0, this.Cl = F | 0, this.Dh = C | 0, this.Dl = k | 0, this.Eh = j | 0, this.El = q | 0, this.Fh = _ | 0, this.Fl = D | 0, this.Gh = E | 0, this.Gl = I | 0, this.Hh = A | 0, this.Hl = $ | 0;
            }
            process(S, z) {
                for(let T = 0; T < 16; T++, z += 4)g[T] = S.getUint32(z), f[T] = S.getUint32(z += 4);
                for(let T = 16; T < 80; T++){
                    const P = g[T - 15] | 0, K = f[T - 15] | 0, se = e.rotrSH(P, K, 1) ^ e.rotrSH(P, K, 8) ^ e.shrSH(P, K, 7), Qe = e.rotrSL(P, K, 1) ^ e.rotrSL(P, K, 8) ^ e.shrSL(P, K, 7), me = g[T - 2] | 0, Ie = f[T - 2] | 0, Dt = e.rotrSH(me, Ie, 19) ^ e.rotrBH(me, Ie, 61) ^ e.shrSH(me, Ie, 6), gn = e.rotrSL(me, Ie, 19) ^ e.rotrBL(me, Ie, 61) ^ e.shrSL(me, Ie, 6), Ot = e.add4L(Qe, gn, f[T - 7], f[T - 16]), _n = e.add4H(Ot, se, Dt, g[T - 7], g[T - 16]);
                    g[T] = _n | 0, f[T] = Ot | 0;
                }
                let { Ah: M, Al: B, Bh: V, Bl: F, Ch: C, Cl: k, Dh: j, Dl: q, Eh: _, El: D, Fh: E, Fl: I, Gh: A, Gl: $, Hh: y, Hl: H } = this;
                for(let T = 0; T < 80; T++){
                    const P = e.rotrSH(_, D, 14) ^ e.rotrSH(_, D, 18) ^ e.rotrBH(_, D, 41), K = e.rotrSL(_, D, 14) ^ e.rotrSL(_, D, 18) ^ e.rotrBL(_, D, 41), se = _ & E ^ ~_ & A, Qe = D & I ^ ~D & $, me = e.add5L(H, K, Qe, u[T], f[T]), Ie = e.add5H(me, y, P, se, c[T], g[T]), Dt = me | 0, gn = e.rotrSH(M, B, 28) ^ e.rotrBH(M, B, 34) ^ e.rotrBH(M, B, 39), Ot = e.rotrSL(M, B, 28) ^ e.rotrBL(M, B, 34) ^ e.rotrBL(M, B, 39), _n = M & V ^ M & C ^ V & C, Pi = B & F ^ B & k ^ F & k;
                    y = A | 0, H = $ | 0, A = E | 0, $ = I | 0, E = _ | 0, I = D | 0, { h: _, l: D } = e.add(j | 0, q | 0, Ie | 0, Dt | 0), j = C | 0, q = k | 0, C = V | 0, k = F | 0, V = M | 0, F = B | 0;
                    const Cr = e.add3L(Dt, Ot, Pi);
                    M = e.add3H(Cr, Ie, gn, _n), B = Cr | 0;
                }
                ({ h: M, l: B } = e.add(this.Ah | 0, this.Al | 0, M | 0, B | 0)), { h: V, l: F } = e.add(this.Bh | 0, this.Bl | 0, V | 0, F | 0), { h: C, l: k } = e.add(this.Ch | 0, this.Cl | 0, C | 0, k | 0), { h: j, l: q } = e.add(this.Dh | 0, this.Dl | 0, j | 0, q | 0), { h: _, l: D } = e.add(this.Eh | 0, this.El | 0, _ | 0, D | 0), { h: E, l: I } = e.add(this.Fh | 0, this.Fl | 0, E | 0, I | 0), { h: A, l: $ } = e.add(this.Gh | 0, this.Gl | 0, A | 0, $ | 0), { h: y, l: H } = e.add(this.Hh | 0, this.Hl | 0, y | 0, H | 0), this.set(M, B, V, F, C, k, j, q, _, D, E, I, A, $, y, H);
            }
            roundClean() {
                (0, n.clean)(g, f);
            }
            destroy() {
                (0, n.clean)(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            }
        }
        J.SHA512 = h;
        class l extends h {
            constructor(){
                super(48), this.Ah = t.SHA384_IV[0] | 0, this.Al = t.SHA384_IV[1] | 0, this.Bh = t.SHA384_IV[2] | 0, this.Bl = t.SHA384_IV[3] | 0, this.Ch = t.SHA384_IV[4] | 0, this.Cl = t.SHA384_IV[5] | 0, this.Dh = t.SHA384_IV[6] | 0, this.Dl = t.SHA384_IV[7] | 0, this.Eh = t.SHA384_IV[8] | 0, this.El = t.SHA384_IV[9] | 0, this.Fh = t.SHA384_IV[10] | 0, this.Fl = t.SHA384_IV[11] | 0, this.Gh = t.SHA384_IV[12] | 0, this.Gl = t.SHA384_IV[13] | 0, this.Hh = t.SHA384_IV[14] | 0, this.Hl = t.SHA384_IV[15] | 0;
            }
        }
        J.SHA384 = l;
        const d = Uint32Array.from([
            2352822216,
            424955298,
            1944164710,
            2312950998,
            502970286,
            855612546,
            1738396948,
            1479516111,
            258812777,
            2077511080,
            2011393907,
            79989058,
            1067287976,
            1780299464,
            286451373,
            2446758561
        ]), b = Uint32Array.from([
            573645204,
            4230739756,
            2673172387,
            3360449730,
            596883563,
            1867755857,
            2520282905,
            1497426621,
            2519219938,
            2827943907,
            3193839141,
            1401305490,
            721525244,
            746961066,
            246885852,
            2177182882
        ]);
        class w extends h {
            constructor(){
                super(28), this.Ah = d[0] | 0, this.Al = d[1] | 0, this.Bh = d[2] | 0, this.Bl = d[3] | 0, this.Ch = d[4] | 0, this.Cl = d[5] | 0, this.Dh = d[6] | 0, this.Dl = d[7] | 0, this.Eh = d[8] | 0, this.El = d[9] | 0, this.Fh = d[10] | 0, this.Fl = d[11] | 0, this.Gh = d[12] | 0, this.Gl = d[13] | 0, this.Hh = d[14] | 0, this.Hl = d[15] | 0;
            }
        }
        J.SHA512_224 = w;
        class O extends h {
            constructor(){
                super(32), this.Ah = b[0] | 0, this.Al = b[1] | 0, this.Bh = b[2] | 0, this.Bl = b[3] | 0, this.Ch = b[4] | 0, this.Cl = b[5] | 0, this.Dh = b[6] | 0, this.Dl = b[7] | 0, this.Eh = b[8] | 0, this.El = b[9] | 0, this.Fh = b[10] | 0, this.Fl = b[11] | 0, this.Gh = b[12] | 0, this.Gl = b[13] | 0, this.Hh = b[14] | 0, this.Hl = b[15] | 0;
            }
        }
        return J.SHA512_256 = O, J.sha256 = (0, n.createHasher)(()=>new i), J.sha224 = (0, n.createHasher)(()=>new o), J.sha512 = (0, n.createHasher)(()=>new h), J.sha384 = (0, n.createHasher)(()=>new l), J.sha512_256 = (0, n.createHasher)(()=>new O), J.sha512_224 = (0, n.createHasher)(()=>new w), J;
    }
    var es;
    function Qa() {
        if (es) return Ce;
        es = 1, Object.defineProperty(Ce, "__esModule", {
            value: !0
        }), Ce.sha224 = Ce.SHA224 = Ce.sha256 = Ce.SHA256 = void 0;
        const t = Za();
        return Ce.SHA256 = t.SHA256, Ce.sha256 = t.sha256, Ce.SHA224 = t.SHA224, Ce.sha224 = t.sha224, Ce;
    }
    var En, ts;
    function ec() {
        if (ts) return En;
        ts = 1;
        function t(e) {
            if (e.length >= 255) throw new TypeError("Alphabet too long");
            for(var n = new Uint8Array(256), r = 0; r < n.length; r++)n[r] = 255;
            for(var s = 0; s < e.length; s++){
                var i = e.charAt(s), o = i.charCodeAt(0);
                if (n[o] !== 255) throw new TypeError(i + " is ambiguous");
                n[o] = s;
            }
            var a = e.length, c = e.charAt(0), u = Math.log(a) / Math.log(256), g = Math.log(256) / Math.log(a);
            function f(d) {
                if (d instanceof Uint8Array || (ArrayBuffer.isView(d) ? d = new Uint8Array(d.buffer, d.byteOffset, d.byteLength) : Array.isArray(d) && (d = Uint8Array.from(d))), !(d instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                if (d.length === 0) return "";
                for(var b = 0, w = 0, O = 0, U = d.length; O !== U && d[O] === 0;)O++, b++;
                for(var S = (U - O) * g + 1 >>> 0, z = new Uint8Array(S); O !== U;){
                    for(var M = d[O], B = 0, V = S - 1; (M !== 0 || B < w) && V !== -1; V--, B++)M += 256 * z[V] >>> 0, z[V] = M % a >>> 0, M = M / a >>> 0;
                    if (M !== 0) throw new Error("Non-zero carry");
                    w = B, O++;
                }
                for(var F = S - w; F !== S && z[F] === 0;)F++;
                for(var C = c.repeat(b); F < S; ++F)C += e.charAt(z[F]);
                return C;
            }
            function h(d) {
                if (typeof d != "string") throw new TypeError("Expected String");
                if (d.length === 0) return new Uint8Array;
                for(var b = 0, w = 0, O = 0; d[b] === c;)w++, b++;
                for(var U = (d.length - b) * u + 1 >>> 0, S = new Uint8Array(U); d[b];){
                    var z = d.charCodeAt(b);
                    if (z > 255) return;
                    var M = n[z];
                    if (M === 255) return;
                    for(var B = 0, V = U - 1; (M !== 0 || B < O) && V !== -1; V--, B++)M += a * S[V] >>> 0, S[V] = M % 256 >>> 0, M = M / 256 >>> 0;
                    if (M !== 0) throw new Error("Non-zero carry");
                    O = B, b++;
                }
                for(var F = U - O; F !== U && S[F] === 0;)F++;
                for(var C = new Uint8Array(w + (U - F)), k = w; F !== U;)C[k++] = S[F++];
                return C;
            }
            function l(d) {
                var b = h(d);
                if (b) return b;
                throw new Error("Non-base" + a + " character");
            }
            return {
                encode: f,
                decodeUnsafe: h,
                decode: l
            };
        }
        return En = t, En;
    }
    var In, ns;
    function tc() {
        return ns || (ns = 1, In = ec()("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")), In;
    }
    var Cn, rs;
    function nc() {
        if (rs) return Cn;
        rs = 1;
        var t = tc();
        return Cn = function(e) {
            function n(o) {
                var a = Uint8Array.from(o), c = e(a), u = a.length + 4, g = new Uint8Array(u);
                return g.set(a, 0), g.set(c.subarray(0, 4), a.length), t.encode(g, u);
            }
            function r(o) {
                var a = o.slice(0, -4), c = o.slice(-4), u = e(a);
                if (!(c[0] ^ u[0] | c[1] ^ u[1] | c[2] ^ u[2] | c[3] ^ u[3])) return a;
            }
            function s(o) {
                var a = t.decodeUnsafe(o);
                if (a) return r(a);
            }
            function i(o) {
                var a = t.decode(o), c = r(a);
                if (!c) throw new Error("Invalid checksum");
                return c;
            }
            return {
                encode: n,
                decode: i,
                decodeUnsafe: s
            };
        }, Cn;
    }
    var Rn, ss;
    function rc() {
        if (ss) return Rn;
        ss = 1;
        var { sha256: t } = Qa(), e = nc();
        function n(r) {
            return t(t(r));
        }
        return Rn = e(n), Rn;
    }
    var sc = rc();
    const Ze = tr(sc), ic = (t)=>{
        if (t.length % 2 !== 0) throw new Error("Hex string must have an even length");
        const e = new Uint8Array(t.length / 2);
        for(let n = 0; n < t.length; n += 2)e[n >> 1] = parseInt(t.slice(n, n + 2), 16);
        return e;
    }, bi = (t)=>Array.from(t, (e)=>e.toString(16).padStart(2, "0")).join(""), tn = "automerge:", at = (t)=>{
        const [e, n, ...r] = t.split("#");
        if (r.length > 0) throw new Error("Invalid URL: contains multiple heads sections");
        const s = new RegExp(`^${tn}(\\w+)$`), [, i] = e.match(s) || [], o = i, a = xi(o);
        if (!a) throw new Error("Invalid document URL: " + t);
        if (n === void 0) return {
            binaryDocumentId: a,
            documentId: o
        };
        const c = n === "" ? [] : n.split("|"), u = c.map((g)=>{
            try {
                return bi(Ze.decode(g));
            } catch  {
                throw new Error(`Invalid head in URL: ${g}`);
            }
        });
        return {
            binaryDocumentId: a,
            hexHeads: u,
            documentId: o,
            heads: c
        };
    }, mi = (t)=>{
        if (t instanceof Uint8Array || typeof t == "string") return tn + (t instanceof Uint8Array ? vt(t) : t);
        const { documentId: e, heads: n = void 0 } = t;
        if (e === void 0) throw new Error("Invalid documentId: " + e);
        const r = e instanceof Uint8Array ? vt(e) : e;
        let s = `${tn}${r}`;
        return n !== void 0 && (n.forEach((i)=>{
            try {
                Ze.decode(i);
            } catch  {
                throw new Error(`Invalid head: ${i}`);
            }
        }), s += "#" + n.join("|")), s;
    }, wr = (t)=>{
        if (typeof t != "string" || !t || !t.startsWith(tn)) return !1;
        try {
            const { documentId: e, heads: n } = at(t);
            return !(!wi(e) || n && !n.every((r)=>{
                try {
                    return Ze.decode(r), !0;
                } catch  {
                    return !1;
                }
            }));
        } catch  {
            return !1;
        }
    }, wi = (t)=>typeof t != "string" ? !1 : xi(t) !== void 0, oc = (t)=>typeof t == "string" && _i(t), is = ()=>{
        const t = pi(null, new Uint8Array(16));
        return mi({
            documentId: t
        });
    }, xi = (t)=>Ze.decodeUnsafe(t), vt = (t)=>Ze.encode(t), ye = (t)=>t.map((e)=>Ze.encode(ic(e))), Le = (t)=>t.map((e)=>bi(Ze.decode(e))), Ut = (t)=>{
        if (t instanceof Uint8Array) return vt(t);
        if (wr(t)) return at(t).documentId;
        if (wi(t)) return t;
        if (oc(t)) {
            console.warn("Future versions will not support UUIDs as document IDs; use Automerge URLs instead.");
            const e = Ga(t);
            return vt(e);
        }
        throw new Error(`Invalid AutomergeUrl: '${t}'`);
    };
    let qn;
    try {
        qn = new TextDecoder;
    } catch  {}
    let L, Ge, v = 0;
    const ac = 105, cc = 57342, uc = 57343, os = 57337, as = 6, tt = {};
    let _t = 11281e4, Ue = 1681e4, W = {}, Z, nn, rn = 0, At = 0, ne, xe, ee = [], Wn = [], de, ae, pt, cs = {
        useRecords: !1,
        mapsAsObjects: !0
    }, Et = !1, Si = 2;
    try {
        new Function("");
    } catch  {
        Si = 1 / 0;
    }
    class It {
        constructor(e){
            if (e && ((e.keyMap || e._keyMap) && !e.useRecords && (e.useRecords = !1, e.mapsAsObjects = !0), e.useRecords === !1 && e.mapsAsObjects === void 0 && (e.mapsAsObjects = !0), e.getStructures && (e.getShared = e.getStructures), e.getShared && !e.structures && ((e.structures = []).uninitialized = !0), e.keyMap)) {
                this.mapKey = new Map;
                for (let [n, r] of Object.entries(e.keyMap))this.mapKey.set(r, n);
            }
            Object.assign(this, e);
        }
        decodeKey(e) {
            return this.keyMap && this.mapKey.get(e) || e;
        }
        encodeKey(e) {
            return this.keyMap && this.keyMap.hasOwnProperty(e) ? this.keyMap[e] : e;
        }
        encodeKeys(e) {
            if (!this._keyMap) return e;
            let n = new Map;
            for (let [r, s] of Object.entries(e))n.set(this._keyMap.hasOwnProperty(r) ? this._keyMap[r] : r, s);
            return n;
        }
        decodeKeys(e) {
            if (!this._keyMap || e.constructor.name != "Map") return e;
            if (!this._mapKey) {
                this._mapKey = new Map;
                for (let [r, s] of Object.entries(this._keyMap))this._mapKey.set(s, r);
            }
            let n = {};
            return e.forEach((r, s)=>n[Se(this._mapKey.has(s) ? this._mapKey.get(s) : s)] = r), n;
        }
        mapDecode(e, n) {
            let r = this.decode(e);
            if (this._keyMap) switch(r.constructor.name){
                case "Array":
                    return r.map((s)=>this.decodeKeys(s));
            }
            return r;
        }
        decode(e, n) {
            if (L) return Ii(()=>(Yn(), this ? this.decode(e, n) : It.prototype.decode.call(cs, e, n)));
            Ge = n > -1 ? n : e.length, v = 0, At = 0, nn = null, ne = null, L = e;
            try {
                ae = e.dataView || (e.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength));
            } catch (r) {
                throw L = null, e instanceof Uint8Array ? r : new Error("Source must be a Uint8Array or Buffer but was a " + (e && typeof e == "object" ? e.constructor.name : typeof e));
            }
            if (this instanceof It) {
                if (W = this, de = this.sharedValues && (this.pack ? new Array(this.maxPrivatePackedValues || 16).concat(this.sharedValues) : this.sharedValues), this.structures) return Z = this.structures, Bt();
                (!Z || Z.length > 0) && (Z = []);
            } else W = cs, (!Z || Z.length > 0) && (Z = []), de = null;
            return Bt();
        }
        decodeMultiple(e, n) {
            let r, s = 0;
            try {
                let i = e.length;
                Et = !0;
                let o = this ? this.decode(e, i) : vr.decode(e, i);
                if (n) {
                    if (n(o) === !1) return;
                    for(; v < i;)if (s = v, n(Bt()) === !1) return;
                } else {
                    for(r = [
                        o
                    ]; v < i;)s = v, r.push(Bt());
                    return r;
                }
            } catch (i) {
                throw i.lastPosition = s, i.values = r, i;
            } finally{
                Et = !1, Yn();
            }
        }
    }
    function Bt() {
        try {
            let t = G();
            if (ne) {
                if (v >= ne.postBundlePosition) {
                    let e = new Error("Unexpected bundle position");
                    throw e.incomplete = !0, e;
                }
                v = ne.postBundlePosition, ne = null;
            }
            if (v == Ge) Z = null, L = null, xe && (xe = null);
            else if (v > Ge) {
                let e = new Error("Unexpected end of CBOR data");
                throw e.incomplete = !0, e;
            } else if (!Et) throw new Error("Data read, but end of buffer not reached");
            return t;
        } catch (t) {
            throw Yn(), (t instanceof RangeError || t.message.startsWith("Unexpected end of buffer")) && (t.incomplete = !0), t;
        }
    }
    function G() {
        let t = L[v++], e = t >> 5;
        if (t = t & 31, t > 23) switch(t){
            case 24:
                t = L[v++];
                break;
            case 25:
                if (e == 7) return lc();
                t = ae.getUint16(v), v += 2;
                break;
            case 26:
                if (e == 7) {
                    let n = ae.getFloat32(v);
                    if (W.useFloat32 > 2) {
                        let r = Sr[(L[v] & 127) << 1 | L[v + 1] >> 7];
                        return v += 4, (r * n + (n > 0 ? .5 : -.5) >> 0) / r;
                    }
                    return v += 4, n;
                }
                if (t = ae.getUint32(v), v += 4, e === 1) return -1 - t;
                break;
            case 27:
                if (e == 7) {
                    let n = ae.getFloat64(v);
                    return v += 8, n;
                }
                if (e > 1) {
                    if (ae.getUint32(v) > 0) throw new Error("JavaScript does not support arrays, maps, or strings with length over 4294967295");
                    t = ae.getUint32(v + 4);
                } else W.int64AsNumber ? (t = ae.getUint32(v) * 4294967296, t += ae.getUint32(v + 4)) : t = ae.getBigUint64(v);
                v += 8;
                break;
            case 31:
                switch(e){
                    case 2:
                    case 3:
                        throw new Error("Indefinite length not supported for byte or text strings");
                    case 4:
                        let n = [], r, s = 0;
                        for(; (r = G()) != tt;){
                            if (s >= _t) throw new Error(`Array length exceeds ${_t}`);
                            n[s++] = r;
                        }
                        return e == 4 ? n : e == 3 ? n.join("") : Buffer.concat(n);
                    case 5:
                        let i;
                        if (W.mapsAsObjects) {
                            let o = {}, a = 0;
                            if (W.keyMap) for(; (i = G()) != tt;){
                                if (a++ >= Ue) throw new Error(`Property count exceeds ${Ue}`);
                                o[Se(W.decodeKey(i))] = G();
                            }
                            else for(; (i = G()) != tt;){
                                if (a++ >= Ue) throw new Error(`Property count exceeds ${Ue}`);
                                o[Se(i)] = G();
                            }
                            return o;
                        } else {
                            pt && (W.mapsAsObjects = !0, pt = !1);
                            let o = new Map;
                            if (W.keyMap) {
                                let a = 0;
                                for(; (i = G()) != tt;){
                                    if (a++ >= Ue) throw new Error(`Map size exceeds ${Ue}`);
                                    o.set(W.decodeKey(i), G());
                                }
                            } else {
                                let a = 0;
                                for(; (i = G()) != tt;){
                                    if (a++ >= Ue) throw new Error(`Map size exceeds ${Ue}`);
                                    o.set(i, G());
                                }
                            }
                            return o;
                        }
                    case 7:
                        return tt;
                    default:
                        throw new Error("Invalid major type for indefinite length " + e);
                }
            default:
                throw new Error("Unknown token " + t);
        }
        switch(e){
            case 0:
                return t;
            case 1:
                return ~t;
            case 2:
                return hc(t);
            case 3:
                if (At >= v) return nn.slice(v - rn, (v += t) - rn);
                if (At == 0 && Ge < 140 && t < 32) {
                    let s = t < 16 ? vi(t) : dc(t);
                    if (s != null) return s;
                }
                return fc(t);
            case 4:
                if (t >= _t) throw new Error(`Array length exceeds ${_t}`);
                let n = new Array(t);
                for(let s = 0; s < t; s++)n[s] = G();
                return n;
            case 5:
                if (t >= Ue) throw new Error(`Map size exceeds ${_t}`);
                if (W.mapsAsObjects) {
                    let s = {};
                    if (W.keyMap) for(let i = 0; i < t; i++)s[Se(W.decodeKey(G()))] = G();
                    else for(let i = 0; i < t; i++)s[Se(G())] = G();
                    return s;
                } else {
                    pt && (W.mapsAsObjects = !0, pt = !1);
                    let s = new Map;
                    if (W.keyMap) for(let i = 0; i < t; i++)s.set(W.decodeKey(G()), G());
                    else for(let i = 0; i < t; i++)s.set(G(), G());
                    return s;
                }
            case 6:
                if (t >= os) {
                    let s = Z[t & 8191];
                    if (s) return s.read || (s.read = Gn(s)), s.read();
                    if (t < 65536) {
                        if (t == uc) {
                            let i = ot(), o = G(), a = G();
                            Jn(o, a);
                            let c = {};
                            if (W.keyMap) for(let u = 2; u < i; u++){
                                let g = W.decodeKey(a[u - 2]);
                                c[Se(g)] = G();
                            }
                            else for(let u = 2; u < i; u++){
                                let g = a[u - 2];
                                c[Se(g)] = G();
                            }
                            return c;
                        } else if (t == cc) {
                            let i = ot(), o = G();
                            for(let a = 2; a < i; a++)Jn(o++, G());
                            return G();
                        } else if (t == os) return mc();
                        if (W.getShared && (xr(), s = Z[t & 8191], s)) return s.read || (s.read = Gn(s)), s.read();
                    }
                }
                let r = ee[t];
                if (r) return r.handlesRead ? r(G) : r(G());
                {
                    let s = G();
                    for(let i = 0; i < Wn.length; i++){
                        let o = Wn[i](t, s);
                        if (o !== void 0) return o;
                    }
                    return new Je(s, t);
                }
            case 7:
                switch(t){
                    case 20:
                        return !1;
                    case 21:
                        return !0;
                    case 22:
                        return null;
                    case 23:
                        return;
                    case 31:
                    default:
                        let s = (de || ze())[t];
                        if (s !== void 0) return s;
                        throw new Error("Unknown token " + t);
                }
            default:
                if (isNaN(t)) {
                    let s = new Error("Unexpected end of CBOR data");
                    throw s.incomplete = !0, s;
                }
                throw new Error("Unknown CBOR token " + t);
        }
    }
    const us = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
    function Gn(t) {
        if (!t) throw new Error("Structure is required in record definition");
        function e() {
            let n = L[v++];
            if (n = n & 31, n > 23) switch(n){
                case 24:
                    n = L[v++];
                    break;
                case 25:
                    n = ae.getUint16(v), v += 2;
                    break;
                case 26:
                    n = ae.getUint32(v), v += 4;
                    break;
                default:
                    throw new Error("Expected array header, but got " + L[v - 1]);
            }
            let r = this.compiledReader;
            for(; r;){
                if (r.propertyCount === n) return r(G);
                r = r.next;
            }
            if (this.slowReads++ >= Si) {
                let i = this.length == n ? this : this.slice(0, n);
                return r = W.keyMap ? new Function("r", "return {" + i.map((o)=>W.decodeKey(o)).map((o)=>us.test(o) ? Se(o) + ":r()" : "[" + JSON.stringify(o) + "]:r()").join(",") + "}") : new Function("r", "return {" + i.map((o)=>us.test(o) ? Se(o) + ":r()" : "[" + JSON.stringify(o) + "]:r()").join(",") + "}"), this.compiledReader && (r.next = this.compiledReader), r.propertyCount = n, this.compiledReader = r, r(G);
            }
            let s = {};
            if (W.keyMap) for(let i = 0; i < n; i++)s[Se(W.decodeKey(this[i]))] = G();
            else for(let i = 0; i < n; i++)s[Se(this[i])] = G();
            return s;
        }
        return t.slowReads = 0, e;
    }
    function Se(t) {
        if (typeof t == "string") return t === "__proto__" ? "__proto_" : t;
        if (typeof t == "number" || typeof t == "boolean" || typeof t == "bigint") return t.toString();
        if (t == null) return t + "";
        throw new Error("Invalid property name type " + typeof t);
    }
    let fc = Kn;
    function Kn(t) {
        let e;
        if (t < 16 && (e = vi(t))) return e;
        if (t > 64 && qn) return qn.decode(L.subarray(v, v += t));
        const n = v + t, r = [];
        for(e = ""; v < n;){
            const s = L[v++];
            if ((s & 128) === 0) r.push(s);
            else if ((s & 224) === 192) {
                const i = L[v++] & 63, o = (s & 31) << 6 | i;
                o < 128 ? r.push(65533) : r.push(o);
            } else if ((s & 240) === 224) {
                const i = L[v++] & 63, o = L[v++] & 63, a = (s & 31) << 12 | i << 6 | o;
                a < 2048 || a >= 55296 && a <= 57343 ? r.push(65533) : r.push(a);
            } else if ((s & 248) === 240) {
                const i = L[v++] & 63, o = L[v++] & 63, a = L[v++] & 63;
                let c = (s & 7) << 18 | i << 12 | o << 6 | a;
                c < 65536 || c > 1114111 ? r.push(65533) : (c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | c & 1023), r.push(c));
            } else r.push(65533);
            r.length >= 4096 && (e += re.apply(String, r), r.length = 0);
        }
        return r.length > 0 && (e += re.apply(String, r)), e;
    }
    let re = String.fromCharCode;
    function dc(t) {
        let e = v, n = new Array(t);
        for(let r = 0; r < t; r++){
            const s = L[v++];
            if ((s & 128) > 0) {
                v = e;
                return;
            }
            n[r] = s;
        }
        return re.apply(String, n);
    }
    function vi(t) {
        if (t < 4) if (t < 2) {
            if (t === 0) return "";
            {
                let e = L[v++];
                if ((e & 128) > 1) {
                    v -= 1;
                    return;
                }
                return re(e);
            }
        } else {
            let e = L[v++], n = L[v++];
            if ((e & 128) > 0 || (n & 128) > 0) {
                v -= 2;
                return;
            }
            if (t < 3) return re(e, n);
            let r = L[v++];
            if ((r & 128) > 0) {
                v -= 3;
                return;
            }
            return re(e, n, r);
        }
        else {
            let e = L[v++], n = L[v++], r = L[v++], s = L[v++];
            if ((e & 128) > 0 || (n & 128) > 0 || (r & 128) > 0 || (s & 128) > 0) {
                v -= 4;
                return;
            }
            if (t < 6) {
                if (t === 4) return re(e, n, r, s);
                {
                    let i = L[v++];
                    if ((i & 128) > 0) {
                        v -= 5;
                        return;
                    }
                    return re(e, n, r, s, i);
                }
            } else if (t < 8) {
                let i = L[v++], o = L[v++];
                if ((i & 128) > 0 || (o & 128) > 0) {
                    v -= 6;
                    return;
                }
                if (t < 7) return re(e, n, r, s, i, o);
                let a = L[v++];
                if ((a & 128) > 0) {
                    v -= 7;
                    return;
                }
                return re(e, n, r, s, i, o, a);
            } else {
                let i = L[v++], o = L[v++], a = L[v++], c = L[v++];
                if ((i & 128) > 0 || (o & 128) > 0 || (a & 128) > 0 || (c & 128) > 0) {
                    v -= 8;
                    return;
                }
                if (t < 10) {
                    if (t === 8) return re(e, n, r, s, i, o, a, c);
                    {
                        let u = L[v++];
                        if ((u & 128) > 0) {
                            v -= 9;
                            return;
                        }
                        return re(e, n, r, s, i, o, a, c, u);
                    }
                } else if (t < 12) {
                    let u = L[v++], g = L[v++];
                    if ((u & 128) > 0 || (g & 128) > 0) {
                        v -= 10;
                        return;
                    }
                    if (t < 11) return re(e, n, r, s, i, o, a, c, u, g);
                    let f = L[v++];
                    if ((f & 128) > 0) {
                        v -= 11;
                        return;
                    }
                    return re(e, n, r, s, i, o, a, c, u, g, f);
                } else {
                    let u = L[v++], g = L[v++], f = L[v++], h = L[v++];
                    if ((u & 128) > 0 || (g & 128) > 0 || (f & 128) > 0 || (h & 128) > 0) {
                        v -= 12;
                        return;
                    }
                    if (t < 14) {
                        if (t === 12) return re(e, n, r, s, i, o, a, c, u, g, f, h);
                        {
                            let l = L[v++];
                            if ((l & 128) > 0) {
                                v -= 13;
                                return;
                            }
                            return re(e, n, r, s, i, o, a, c, u, g, f, h, l);
                        }
                    } else {
                        let l = L[v++], d = L[v++];
                        if ((l & 128) > 0 || (d & 128) > 0) {
                            v -= 14;
                            return;
                        }
                        if (t < 15) return re(e, n, r, s, i, o, a, c, u, g, f, h, l, d);
                        let b = L[v++];
                        if ((b & 128) > 0) {
                            v -= 15;
                            return;
                        }
                        return re(e, n, r, s, i, o, a, c, u, g, f, h, l, d, b);
                    }
                }
            }
        }
    }
    function hc(t) {
        return W.copyBuffers ? Uint8Array.prototype.slice.call(L, v, v += t) : L.subarray(v, v += t);
    }
    let Ai = new Float32Array(1), jt = new Uint8Array(Ai.buffer, 0, 4);
    function lc() {
        let t = L[v++], e = L[v++], n = (t & 127) >> 2;
        if (n === 31) return e || t & 3 ? NaN : t & 128 ? -1 / 0 : 1 / 0;
        if (n === 0) {
            let r = ((t & 3) << 8 | e) / 16777216;
            return t & 128 ? -r : r;
        }
        return jt[3] = t & 128 | (n >> 1) + 56, jt[2] = (t & 7) << 5 | e >> 3, jt[1] = e << 5, jt[0] = 0, Ai[0];
    }
    new Array(4096);
    class Je {
        constructor(e, n){
            this.value = e, this.tag = n;
        }
    }
    ee[0] = (t)=>new Date(t);
    ee[1] = (t)=>new Date(Math.round(t * 1e3));
    ee[2] = (t)=>{
        let e = BigInt(0);
        for(let n = 0, r = t.byteLength; n < r; n++)e = BigInt(t[n]) + (e << BigInt(8));
        return e;
    };
    ee[3] = (t)=>BigInt(-1) - ee[2](t);
    ee[4] = (t)=>+(t[1] + "e" + t[0]);
    ee[5] = (t)=>t[1] * Math.exp(t[0] * Math.log(2));
    const Jn = (t, e)=>{
        t = t - 57344;
        let n = Z[t];
        n && n.isShared && ((Z.restoreStructures || (Z.restoreStructures = []))[t] = n), Z[t] = e, e.read = Gn(e);
    };
    ee[ac] = (t)=>{
        let e = t.length, n = t[1];
        Jn(t[0], n);
        let r = {};
        for(let s = 2; s < e; s++){
            let i = n[s - 2];
            r[Se(i)] = t[s];
        }
        return r;
    };
    ee[14] = (t)=>ne ? ne[0].slice(ne.position0, ne.position0 += t) : new Je(t, 14);
    ee[15] = (t)=>ne ? ne[1].slice(ne.position1, ne.position1 += t) : new Je(t, 15);
    let gc = {
        Error,
        RegExp
    };
    ee[27] = (t)=>(gc[t[0]] || Error)(t[1], t[2]);
    const Ei = (t)=>{
        if (L[v++] != 132) {
            let n = new Error("Packed values structure must be followed by a 4 element array");
            throw L.length < v && (n.incomplete = !0), n;
        }
        let e = t();
        if (!e || !e.length) {
            let n = new Error("Packed values structure must be followed by a 4 element array");
            throw n.incomplete = !0, n;
        }
        return de = de ? e.concat(de.slice(e.length)) : e, de.prefixes = t(), de.suffixes = t(), t();
    };
    Ei.handlesRead = !0;
    ee[51] = Ei;
    ee[as] = (t)=>{
        if (!de) if (W.getShared) xr();
        else return new Je(t, as);
        if (typeof t == "number") return de[16 + (t >= 0 ? 2 * t : -2 * t - 1)];
        let e = new Error("No support for non-integer packed references yet");
        throw t === void 0 && (e.incomplete = !0), e;
    };
    ee[28] = (t)=>{
        xe || (xe = new Map, xe.id = 0);
        let e = xe.id++, n = v, r = L[v], s;
        r >> 5 == 4 ? s = [] : s = {};
        let i = {
            target: s
        };
        xe.set(e, i);
        let o = t();
        return i.used ? (Object.getPrototypeOf(s) !== Object.getPrototypeOf(o) && (v = n, s = o, xe.set(e, {
            target: s
        }), o = t()), Object.assign(s, o)) : (i.target = o, o);
    };
    ee[28].handlesRead = !0;
    ee[29] = (t)=>{
        let e = xe.get(t);
        return e.used = !0, e.target;
    };
    ee[258] = (t)=>new Set(t);
    (ee[259] = (t)=>(W.mapsAsObjects && (W.mapsAsObjects = !1, pt = !0), t())).handlesRead = !0;
    function nt(t, e) {
        return typeof t == "string" ? t + e : t instanceof Array ? t.concat(e) : Object.assign({}, t, e);
    }
    function ze() {
        if (!de) if (W.getShared) xr();
        else throw new Error("No packed values available");
        return de;
    }
    const _c = 1399353956;
    Wn.push((t, e)=>{
        if (t >= 225 && t <= 255) return nt(ze().prefixes[t - 224], e);
        if (t >= 28704 && t <= 32767) return nt(ze().prefixes[t - 28672], e);
        if (t >= 1879052288 && t <= 2147483647) return nt(ze().prefixes[t - 1879048192], e);
        if (t >= 216 && t <= 223) return nt(e, ze().suffixes[t - 216]);
        if (t >= 27647 && t <= 28671) return nt(e, ze().suffixes[t - 27639]);
        if (t >= 1811940352 && t <= 1879048191) return nt(e, ze().suffixes[t - 1811939328]);
        if (t == _c) return {
            packedValues: de,
            structures: Z.slice(0),
            version: e
        };
        if (t == 55799) return e;
    });
    const pc = new Uint8Array(new Uint16Array([
        1
    ]).buffer)[0] == 1, fs = [
        Uint8Array,
        Uint8ClampedArray,
        Uint16Array,
        Uint32Array,
        typeof BigUint64Array > "u" ? {
            name: "BigUint64Array"
        } : BigUint64Array,
        Int8Array,
        Int16Array,
        Int32Array,
        typeof BigInt64Array > "u" ? {
            name: "BigInt64Array"
        } : BigInt64Array,
        Float32Array,
        Float64Array
    ], yc = [
        64,
        68,
        69,
        70,
        71,
        72,
        77,
        78,
        79,
        85,
        86
    ];
    for(let t = 0; t < fs.length; t++)bc(fs[t], yc[t]);
    function bc(t, e) {
        let n = "get" + t.name.slice(0, -5), r;
        typeof t == "function" ? r = t.BYTES_PER_ELEMENT : t = null;
        for(let s = 0; s < 2; s++){
            if (!s && r == 1) continue;
            let i = r == 2 ? 1 : r == 4 ? 2 : r == 8 ? 3 : 0;
            ee[s ? e : e - 4] = r == 1 || s == pc ? (o)=>{
                if (!t) throw new Error("Could not find typed array for code " + e);
                return !W.copyBuffers && (r === 1 || r === 2 && !(o.byteOffset & 1) || r === 4 && !(o.byteOffset & 3) || r === 8 && !(o.byteOffset & 7)) ? new t(o.buffer, o.byteOffset, o.byteLength >> i) : new t(Uint8Array.prototype.slice.call(o, 0).buffer);
            } : (o)=>{
                if (!t) throw new Error("Could not find typed array for code " + e);
                let a = new DataView(o.buffer, o.byteOffset, o.byteLength), c = o.length >> i, u = new t(c), g = a[n];
                for(let f = 0; f < c; f++)u[f] = g.call(a, f << i, s);
                return u;
            };
        }
    }
    function mc() {
        let t = ot(), e = v + G();
        for(let r = 2; r < t; r++){
            let s = ot();
            v += s;
        }
        let n = v;
        return v = e, ne = [
            Kn(ot()),
            Kn(ot())
        ], ne.position0 = 0, ne.position1 = 0, ne.postBundlePosition = v, v = n, G();
    }
    function ot() {
        let t = L[v++] & 31;
        if (t > 23) switch(t){
            case 24:
                t = L[v++];
                break;
            case 25:
                t = ae.getUint16(v), v += 2;
                break;
            case 26:
                t = ae.getUint32(v), v += 4;
                break;
        }
        return t;
    }
    function xr() {
        if (W.getShared) {
            let t = Ii(()=>(L = null, W.getShared())) || {}, e = t.structures || [];
            W.sharedVersion = t.version, de = W.sharedValues = t.packedValues, Z === !0 ? W.structures = Z = e : Z.splice.apply(Z, [
                0,
                e.length
            ].concat(e));
        }
    }
    function Ii(t) {
        let e = Ge, n = v, r = rn, s = At, i = nn, o = xe, a = ne, c = new Uint8Array(L.slice(0, Ge)), u = Z, g = W, f = Et, h = t();
        return Ge = e, v = n, rn = r, At = s, nn = i, xe = o, ne = a, L = c, Et = f, Z = u, W = g, ae = new DataView(L.buffer, L.byteOffset, L.byteLength), h;
    }
    function Yn() {
        L = null, xe = null, Z = null;
    }
    const Sr = new Array(147);
    for(let t = 0; t < 256; t++)Sr[t] = +("1e" + Math.floor(45.15 - t * .30103));
    let vr = new It({
        useRecords: !1
    });
    const wc = vr.decode;
    vr.decodeMultiple;
    let Nt;
    try {
        Nt = new TextEncoder;
    } catch  {}
    let Xn, Ci;
    const dn = typeof globalThis == "object" && globalThis.Buffer, kt = typeof dn < "u", Hn = kt ? dn.allocUnsafeSlow : Uint8Array, ds = kt ? dn : Uint8Array, hs = 256, ls = kt ? 4294967296 : 2144337920;
    let kn, m, Y, p = 0, Fe, te = null;
    const xc = 61440, Sc = /[\u0080-\uFFFF]/, ge = Symbol("record-id");
    class Ri extends It {
        constructor(e){
            super(e), this.offset = 0;
            let n, r, s, i, o;
            e = e || {};
            let a = ds.prototype.utf8Write ? function(_, D) {
                return m.utf8Write(_, D, m.byteLength - D);
            } : Nt && Nt.encodeInto ? function(_, D) {
                return Nt.encodeInto(_, m.subarray(D)).written;
            } : !1, c = this, u = e.structures || e.saveStructures, g = e.maxSharedStructures;
            if (g == null && (g = u ? 128 : 0), g > 8190) throw new Error("Maximum maxSharedStructure is 8190");
            let f = e.sequential;
            f && (g = 0), this.structures || (this.structures = []), this.saveStructures && (this.saveShared = this.saveStructures);
            let h, l, d = e.sharedValues, b;
            if (d) {
                b = Object.create(null);
                for(let _ = 0, D = d.length; _ < D; _++)b[d[_]] = _;
            }
            let w = [], O = 0, U = 0;
            this.mapEncode = function(_, D) {
                if (this._keyMap && !this._mapped) switch(_.constructor.name){
                    case "Array":
                        _ = _.map((E)=>this.encodeKeys(E));
                        break;
                }
                return this.encode(_, D);
            }, this.encode = function(_, D) {
                if (m || (m = new Hn(8192), Y = new DataView(m.buffer, 0, 8192), p = 0), Fe = m.length - 10, Fe - p < 2048 ? (m = new Hn(m.length), Y = new DataView(m.buffer, 0, m.length), Fe = m.length - 10, p = 0) : D === ps && (p = p + 7 & 2147483640), n = p, c.useSelfDescribedHeader && (Y.setUint32(p, 3654940416), p += 3), o = c.structuredClone ? new Map : null, c.bundleStrings && typeof _ != "string" ? (te = [], te.size = 1 / 0) : te = null, r = c.structures, r) {
                    if (r.uninitialized) {
                        let I = c.getShared() || {};
                        c.structures = r = I.structures || [], c.sharedVersion = I.version;
                        let A = c.sharedValues = I.packedValues;
                        if (A) {
                            b = {};
                            for(let $ = 0, y = A.length; $ < y; $++)b[A[$]] = $;
                        }
                    }
                    let E = r.length;
                    if (E > g && !f && (E = g), !r.transitions) {
                        r.transitions = Object.create(null);
                        for(let I = 0; I < E; I++){
                            let A = r[I];
                            if (!A) continue;
                            let $, y = r.transitions;
                            for(let H = 0, T = A.length; H < T; H++){
                                y[ge] === void 0 && (y[ge] = I);
                                let P = A[H];
                                $ = y[P], $ || ($ = y[P] = Object.create(null)), y = $;
                            }
                            y[ge] = I | 1048576;
                        }
                    }
                    f || (r.nextId = E);
                }
                if (s && (s = !1), i = r || [], l = b, e.pack) {
                    let E = new Map;
                    if (E.values = [], E.encoder = c, E.maxValues = e.maxPrivatePackedValues || (b ? 16 : 1 / 0), E.objectMap = b || !1, E.samplingPackedValues = h, qt(_, E), E.values.length > 0) {
                        m[p++] = 216, m[p++] = 51, Oe(4);
                        let I = E.values;
                        S(I), Oe(0), Oe(0), l = Object.create(b || null);
                        for(let A = 0, $ = I.length; A < $; A++)l[I[A]] = A;
                    }
                }
                kn = D & On;
                try {
                    if (kn) return;
                    if (S(_), te && _s(n, S), c.offset = p, o && o.idsToInsert) {
                        p += o.idsToInsert.length * 2, p > Fe && M(p), c.offset = p;
                        let E = Ec(m.subarray(n, p), o.idsToInsert);
                        return o = null, E;
                    }
                    return D & ps ? (m.start = n, m.end = p, m) : m.subarray(n, p);
                } finally{
                    if (r) {
                        if (U < 10 && U++, r.length > g && (r.length = g), O > 1e4) r.transitions = null, U = 0, O = 0, w.length > 0 && (w = []);
                        else if (w.length > 0 && !f) {
                            for(let E = 0, I = w.length; E < I; E++)w[E][ge] = void 0;
                            w = [];
                        }
                    }
                    if (s && c.saveShared) {
                        c.structures.length > g && (c.structures = c.structures.slice(0, g));
                        let E = m.subarray(n, p);
                        return c.updateSharedData() === !1 ? c.encode(_) : E;
                    }
                    D & Ic && (p = n);
                }
            }, this.findCommonStringsToPack = ()=>(h = new Map, b || (b = Object.create(null)), (_)=>{
                    let D = _ && _.threshold || 4, E = this.pack ? _.maxPrivatePackedValues || 16 : 0;
                    d || (d = this.sharedValues = []);
                    for (let [I, A] of h)A.count > D && (b[I] = E++, d.push(I), s = !0);
                    for(; this.saveShared && this.updateSharedData() === !1;);
                    h = null;
                });
            const S = (_)=>{
                p > Fe && (m = M(p));
                var D = typeof _, E;
                if (D === "string") {
                    if (l) {
                        let y = l[_];
                        if (y >= 0) {
                            y < 16 ? m[p++] = y + 224 : (m[p++] = 198, y & 1 ? S(15 - y >> 1) : S(y - 16 >> 1));
                            return;
                        } else if (h && !e.pack) {
                            let H = h.get(_);
                            H ? H.count++ : h.set(_, {
                                count: 1
                            });
                        }
                    }
                    let I = _.length;
                    if (te && I >= 4 && I < 1024) {
                        if ((te.size += I) > xc) {
                            let H, T = (te[0] ? te[0].length * 3 + te[1].length : 0) + 10;
                            p + T > Fe && (m = M(p + T)), m[p++] = 217, m[p++] = 223, m[p++] = 249, m[p++] = te.position ? 132 : 130, m[p++] = 26, H = p - n, p += 4, te.position && _s(n, S), te = [
                                "",
                                ""
                            ], te.size = 0, te.position = H;
                        }
                        let y = Sc.test(_);
                        te[y ? 0 : 1] += _, m[p++] = y ? 206 : 207, S(I);
                        return;
                    }
                    let A;
                    I < 32 ? A = 1 : I < 256 ? A = 2 : I < 65536 ? A = 3 : A = 5;
                    let $ = I * 3;
                    if (p + $ > Fe && (m = M(p + $)), I < 64 || !a) {
                        let y, H, T, P = p + A;
                        for(y = 0; y < I; y++)H = _.charCodeAt(y), H < 128 ? m[P++] = H : H < 2048 ? (m[P++] = H >> 6 | 192, m[P++] = H & 63 | 128) : (H & 64512) === 55296 && ((T = _.charCodeAt(y + 1)) & 64512) === 56320 ? (H = 65536 + ((H & 1023) << 10) + (T & 1023), y++, m[P++] = H >> 18 | 240, m[P++] = H >> 12 & 63 | 128, m[P++] = H >> 6 & 63 | 128, m[P++] = H & 63 | 128) : (m[P++] = H >> 12 | 224, m[P++] = H >> 6 & 63 | 128, m[P++] = H & 63 | 128);
                        E = P - p - A;
                    } else E = a(_, p + A, $);
                    E < 24 ? m[p++] = 96 | E : E < 256 ? (A < 2 && m.copyWithin(p + 2, p + 1, p + 1 + E), m[p++] = 120, m[p++] = E) : E < 65536 ? (A < 3 && m.copyWithin(p + 3, p + 2, p + 2 + E), m[p++] = 121, m[p++] = E >> 8, m[p++] = E & 255) : (A < 5 && m.copyWithin(p + 5, p + 3, p + 3 + E), m[p++] = 122, Y.setUint32(p, E), p += 4), p += E;
                } else if (D === "number") if (!this.alwaysUseFloat && _ >>> 0 === _) _ < 24 ? m[p++] = _ : _ < 256 ? (m[p++] = 24, m[p++] = _) : _ < 65536 ? (m[p++] = 25, m[p++] = _ >> 8, m[p++] = _ & 255) : (m[p++] = 26, Y.setUint32(p, _), p += 4);
                else if (!this.alwaysUseFloat && _ >> 0 === _) _ >= -24 ? m[p++] = 31 - _ : _ >= -256 ? (m[p++] = 56, m[p++] = ~_) : _ >= -65536 ? (m[p++] = 57, Y.setUint16(p, ~_), p += 2) : (m[p++] = 58, Y.setUint32(p, ~_), p += 4);
                else if (!this.alwaysUseFloat && _ < 0 && _ >= -4294967296 && Math.floor(_) === _) m[p++] = 58, Y.setUint32(p, -1 - _), p += 4;
                else {
                    let I;
                    if ((I = this.useFloat32) > 0 && _ < 4294967296 && _ >= -2147483648) {
                        m[p++] = 250, Y.setFloat32(p, _);
                        let A;
                        if (I < 4 || (A = _ * Sr[(m[p] & 127) << 1 | m[p + 1] >> 7]) >> 0 === A) {
                            p += 4;
                            return;
                        } else p--;
                    }
                    m[p++] = 251, Y.setFloat64(p, _), p += 8;
                }
                else if (D === "object") if (!_) m[p++] = 246;
                else {
                    if (o) {
                        let A = o.get(_);
                        if (A) {
                            if (m[p++] = 216, m[p++] = 29, m[p++] = 25, !A.references) {
                                let $ = o.idsToInsert || (o.idsToInsert = []);
                                A.references = [], $.push(A);
                            }
                            A.references.push(p - n), p += 2;
                            return;
                        } else o.set(_, {
                            offset: p - n
                        });
                    }
                    let I = _.constructor;
                    if (I === Object) this.skipFunction === !0 && (_ = Object.fromEntries([
                        ...Object.keys(_).filter((A)=>typeof _[A] != "function").map((A)=>[
                                A,
                                _[A]
                            ])
                    ])), z(_);
                    else if (I === Array) {
                        E = _.length, E < 24 ? m[p++] = 128 | E : Oe(E);
                        for(let A = 0; A < E; A++)S(_[A]);
                    } else if (I === Map) if ((this.mapsAsObjects ? this.useTag259ForMaps !== !1 : this.useTag259ForMaps) && (m[p++] = 217, m[p++] = 1, m[p++] = 3), E = _.size, E < 24 ? m[p++] = 160 | E : E < 256 ? (m[p++] = 184, m[p++] = E) : E < 65536 ? (m[p++] = 185, m[p++] = E >> 8, m[p++] = E & 255) : (m[p++] = 186, Y.setUint32(p, E), p += 4), c.keyMap) for (let [A, $] of _)S(c.encodeKey(A)), S($);
                    else for (let [A, $] of _)S(A), S($);
                    else {
                        for(let A = 0, $ = Xn.length; A < $; A++){
                            let y = Ci[A];
                            if (_ instanceof y) {
                                let H = Xn[A], T = H.tag;
                                T == null && (T = H.getTag && H.getTag.call(this, _)), T < 24 ? m[p++] = 192 | T : T < 256 ? (m[p++] = 216, m[p++] = T) : T < 65536 ? (m[p++] = 217, m[p++] = T >> 8, m[p++] = T & 255) : T > -1 && (m[p++] = 218, Y.setUint32(p, T), p += 4), H.encode.call(this, _, S, M);
                                return;
                            }
                        }
                        if (_[Symbol.iterator]) {
                            if (kn) {
                                let A = new Error("Iterable should be serialized as iterator");
                                throw A.iteratorNotHandled = !0, A;
                            }
                            m[p++] = 159;
                            for (let A of _)S(A);
                            m[p++] = 255;
                            return;
                        }
                        if (_[Symbol.asyncIterator] || Dn(_)) {
                            let A = new Error("Iterable/blob should be serialized as iterator");
                            throw A.iteratorNotHandled = !0, A;
                        }
                        if (this.useToJSON && _.toJSON) {
                            const A = _.toJSON();
                            if (A !== _) return S(A);
                        }
                        z(_);
                    }
                }
                else if (D === "boolean") m[p++] = _ ? 245 : 244;
                else if (D === "bigint") {
                    if (_ < BigInt(1) << BigInt(64) && _ >= 0) m[p++] = 27, Y.setBigUint64(p, _);
                    else if (_ > -(BigInt(1) << BigInt(64)) && _ < 0) m[p++] = 59, Y.setBigUint64(p, -_ - BigInt(1));
                    else if (this.largeBigIntToFloat) m[p++] = 251, Y.setFloat64(p, Number(_));
                    else {
                        _ >= BigInt(0) ? m[p++] = 194 : (m[p++] = 195, _ = BigInt(-1) - _);
                        let I = [];
                        for(; _;)I.push(Number(_ & BigInt(255))), _ >>= BigInt(8);
                        Zn(new Uint8Array(I.reverse()), M);
                        return;
                    }
                    p += 8;
                } else if (D === "undefined") m[p++] = 247;
                else throw new Error("Unknown type: " + D);
            }, z = this.useRecords === !1 ? this.variableMapSize ? (_)=>{
                let D = Object.keys(_), E = Object.values(_), I = D.length;
                if (I < 24 ? m[p++] = 160 | I : I < 256 ? (m[p++] = 184, m[p++] = I) : I < 65536 ? (m[p++] = 185, m[p++] = I >> 8, m[p++] = I & 255) : (m[p++] = 186, Y.setUint32(p, I), p += 4), c.keyMap) for(let A = 0; A < I; A++)S(c.encodeKey(D[A])), S(E[A]);
                else for(let A = 0; A < I; A++)S(D[A]), S(E[A]);
            } : (_)=>{
                m[p++] = 185;
                let D = p - n;
                p += 2;
                let E = 0;
                if (c.keyMap) for(let I in _)(typeof _.hasOwnProperty != "function" || _.hasOwnProperty(I)) && (S(c.encodeKey(I)), S(_[I]), E++);
                else for(let I in _)(typeof _.hasOwnProperty != "function" || _.hasOwnProperty(I)) && (S(I), S(_[I]), E++);
                m[D++ + n] = E >> 8, m[D + n] = E & 255;
            } : (_, D)=>{
                let E, I = i.transitions || (i.transitions = Object.create(null)), A = 0, $ = 0, y, H;
                if (this.keyMap) {
                    H = Object.keys(_).map((P)=>this.encodeKey(P)), $ = H.length;
                    for(let P = 0; P < $; P++){
                        let K = H[P];
                        E = I[K], E || (E = I[K] = Object.create(null), A++), I = E;
                    }
                } else for(let P in _)(typeof _.hasOwnProperty != "function" || _.hasOwnProperty(P)) && (E = I[P], E || (I[ge] & 1048576 && (y = I[ge] & 65535), E = I[P] = Object.create(null), A++), I = E, $++);
                let T = I[ge];
                if (T !== void 0) T &= 65535, m[p++] = 217, m[p++] = T >> 8 | 224, m[p++] = T & 255;
                else if (H || (H = I.__keys__ || (I.__keys__ = Object.keys(_))), y === void 0 ? (T = i.nextId++, T || (T = 0, i.nextId = 1), T >= hs && (i.nextId = (T = g) + 1)) : T = y, i[T] = H, T < g) {
                    m[p++] = 217, m[p++] = T >> 8 | 224, m[p++] = T & 255, I = i.transitions;
                    for(let P = 0; P < $; P++)(I[ge] === void 0 || I[ge] & 1048576) && (I[ge] = T), I = I[H[P]];
                    I[ge] = T | 1048576, s = !0;
                } else {
                    if (I[ge] = T, Y.setUint32(p, 3655335680), p += 3, A && (O += U * A), w.length >= hs - g && (w.shift()[ge] = void 0), w.push(I), Oe($ + 2), S(57344 + T), S(H), D) return;
                    for(let P in _)(typeof _.hasOwnProperty != "function" || _.hasOwnProperty(P)) && S(_[P]);
                    return;
                }
                if ($ < 24 ? m[p++] = 128 | $ : Oe($), !D) for(let P in _)(typeof _.hasOwnProperty != "function" || _.hasOwnProperty(P)) && S(_[P]);
            }, M = (_)=>{
                let D;
                if (_ > 16777216) {
                    if (_ - n > ls) throw new Error("Encoded buffer would be larger than maximum buffer size");
                    D = Math.min(ls, Math.round(Math.max((_ - n) * (_ > 67108864 ? 1.25 : 2), 4194304) / 4096) * 4096);
                } else D = (Math.max(_ - n << 2, m.length - 1) >> 12) + 1 << 12;
                let E = new Hn(D);
                return Y = new DataView(E.buffer, 0, D), m.copy ? m.copy(E, 0, n, _) : E.set(m.slice(n, _)), p -= n, n = 0, Fe = E.length - 10, m = E;
            };
            let B = 100, V = 1e3;
            this.encodeAsIterable = function(_, D) {
                return j(_, D, F);
            }, this.encodeAsAsyncIterable = function(_, D) {
                return j(_, D, q);
            };
            function* F(_, D, E) {
                let I = _.constructor;
                if (I === Object) {
                    let A = c.useRecords !== !1;
                    A ? z(_, !0) : gs(Object.keys(_).length, 160);
                    for(let $ in _){
                        let y = _[$];
                        A || S($), y && typeof y == "object" ? D[$] ? yield* F(y, D[$]) : yield* C(y, D, $) : S(y);
                    }
                } else if (I === Array) {
                    let A = _.length;
                    Oe(A);
                    for(let $ = 0; $ < A; $++){
                        let y = _[$];
                        y && (typeof y == "object" || p - n > B) ? D.element ? yield* F(y, D.element) : yield* C(y, D, "element") : S(y);
                    }
                } else if (_[Symbol.iterator] && !_.buffer) {
                    m[p++] = 159;
                    for (let A of _)A && (typeof A == "object" || p - n > B) ? D.element ? yield* F(A, D.element) : yield* C(A, D, "element") : S(A);
                    m[p++] = 255;
                } else Dn(_) ? (gs(_.size, 64), yield m.subarray(n, p), yield _, k()) : _[Symbol.asyncIterator] ? (m[p++] = 159, yield m.subarray(n, p), yield _, k(), m[p++] = 255) : S(_);
                E && p > n ? yield m.subarray(n, p) : p - n > B && (yield m.subarray(n, p), k());
            }
            function* C(_, D, E) {
                let I = p - n;
                try {
                    S(_), p - n > B && (yield m.subarray(n, p), k());
                } catch (A) {
                    if (A.iteratorNotHandled) D[E] = {}, p = n + I, yield* F.call(this, _, D[E]);
                    else throw A;
                }
            }
            function k() {
                B = V, c.encode(null, On);
            }
            function j(_, D, E) {
                return D && D.chunkThreshold ? B = V = D.chunkThreshold : B = 100, _ && typeof _ == "object" ? (c.encode(null, On), E(_, c.iterateProperties || (c.iterateProperties = {}), !0)) : [
                    c.encode(_)
                ];
            }
            async function* q(_, D) {
                for (let E of F(_, D, !0)){
                    let I = E.constructor;
                    if (I === ds || I === Uint8Array) yield E;
                    else if (Dn(E)) {
                        let A = E.stream().getReader(), $;
                        for(; !($ = await A.read()).done;)yield $.value;
                    } else if (E[Symbol.asyncIterator]) for await (let A of E)k(), A ? yield* q(A, D.async || (D.async = {})) : yield c.encode(A);
                    else yield E;
                }
            }
        }
        useBuffer(e) {
            m = e, Y = new DataView(m.buffer, m.byteOffset, m.byteLength), p = 0;
        }
        clearSharedData() {
            this.structures && (this.structures = []), this.sharedValues && (this.sharedValues = void 0);
        }
        updateSharedData() {
            let e = this.sharedVersion || 0;
            this.sharedVersion = e + 1;
            let n = this.structures.slice(0), r = new Hi(n, this.sharedValues, this.sharedVersion), s = this.saveShared(r, (i)=>(i && i.version || 0) == e);
            return s === !1 ? (r = this.getShared() || {}, this.structures = r.structures || [], this.sharedValues = r.packedValues, this.sharedVersion = r.version, this.structures.nextId = this.structures.length) : n.forEach((i, o)=>this.structures[o] = i), s;
        }
    }
    function gs(t, e) {
        t < 24 ? m[p++] = e | t : t < 256 ? (m[p++] = e | 24, m[p++] = t) : t < 65536 ? (m[p++] = e | 25, m[p++] = t >> 8, m[p++] = t & 255) : (m[p++] = e | 26, Y.setUint32(p, t), p += 4);
    }
    class Hi {
        constructor(e, n, r){
            this.structures = e, this.packedValues = n, this.version = r;
        }
    }
    function Oe(t) {
        t < 24 ? m[p++] = 128 | t : t < 256 ? (m[p++] = 152, m[p++] = t) : t < 65536 ? (m[p++] = 153, m[p++] = t >> 8, m[p++] = t & 255) : (m[p++] = 154, Y.setUint32(p, t), p += 4);
    }
    const vc = typeof Blob > "u" ? function() {} : Blob;
    function Dn(t) {
        if (t instanceof vc) return !0;
        let e = t[Symbol.toStringTag];
        return e === "Blob" || e === "File";
    }
    function qt(t, e) {
        switch(typeof t){
            case "string":
                if (t.length > 3) {
                    if (e.objectMap[t] > -1 || e.values.length >= e.maxValues) return;
                    let r = e.get(t);
                    if (r) ++r.count == 2 && e.values.push(t);
                    else if (e.set(t, {
                        count: 1
                    }), e.samplingPackedValues) {
                        let s = e.samplingPackedValues.get(t);
                        s ? s.count++ : e.samplingPackedValues.set(t, {
                            count: 1
                        });
                    }
                }
                break;
            case "object":
                if (t) if (t instanceof Array) for(let r = 0, s = t.length; r < s; r++)qt(t[r], e);
                else {
                    let r = !e.encoder.useRecords;
                    for(var n in t)t.hasOwnProperty(n) && (r && qt(n, e), qt(t[n], e));
                }
                break;
            case "function":
                console.log(t);
        }
    }
    const Ac = new Uint8Array(new Uint16Array([
        1
    ]).buffer)[0] == 1;
    Ci = [
        Date,
        Set,
        Error,
        RegExp,
        Je,
        ArrayBuffer,
        Uint8Array,
        Uint8ClampedArray,
        Uint16Array,
        Uint32Array,
        typeof BigUint64Array > "u" ? function() {} : BigUint64Array,
        Int8Array,
        Int16Array,
        Int32Array,
        typeof BigInt64Array > "u" ? function() {} : BigInt64Array,
        Float32Array,
        Float64Array,
        Hi
    ];
    Xn = [
        {
            tag: 1,
            encode (t, e) {
                let n = t.getTime() / 1e3;
                (this.useTimestamp32 || t.getMilliseconds() === 0) && n >= 0 && n < 4294967296 ? (m[p++] = 26, Y.setUint32(p, n), p += 4) : (m[p++] = 251, Y.setFloat64(p, n), p += 8);
            }
        },
        {
            tag: 258,
            encode (t, e) {
                let n = Array.from(t);
                e(n);
            }
        },
        {
            tag: 27,
            encode (t, e) {
                e([
                    t.name,
                    t.message
                ]);
            }
        },
        {
            tag: 27,
            encode (t, e) {
                e([
                    "RegExp",
                    t.source,
                    t.flags
                ]);
            }
        },
        {
            getTag (t) {
                return t.tag;
            },
            encode (t, e) {
                e(t.value);
            }
        },
        {
            encode (t, e, n) {
                Zn(t, n);
            }
        },
        {
            getTag (t) {
                if (t.constructor === Uint8Array && (this.tagUint8Array || kt && this.tagUint8Array !== !1)) return 64;
            },
            encode (t, e, n) {
                Zn(t, n);
            }
        },
        De(68, 1),
        De(69, 2),
        De(70, 4),
        De(71, 8),
        De(72, 1),
        De(77, 2),
        De(78, 4),
        De(79, 8),
        De(85, 4),
        De(86, 8),
        {
            encode (t, e) {
                let n = t.packedValues || [], r = t.structures || [];
                if (n.values.length > 0) {
                    m[p++] = 216, m[p++] = 51, Oe(4);
                    let s = n.values;
                    e(s), Oe(0), Oe(0), packedObjectMap = Object.create(sharedPackedObjectMap || null);
                    for(let i = 0, o = s.length; i < o; i++)packedObjectMap[s[i]] = i;
                }
                if (r) {
                    Y.setUint32(p, 3655335424), p += 3;
                    let s = r.slice(0);
                    s.unshift(57344), s.push(new Je(t.version, 1399353956)), e(s);
                } else e(new Je(t.version, 1399353956));
            }
        }
    ];
    function De(t, e) {
        return !Ac && e > 1 && (t -= 4), {
            tag: t,
            encode: function(r, s) {
                let i = r.byteLength, o = r.byteOffset || 0, a = r.buffer || r;
                s(kt ? dn.from(a, o, i) : new Uint8Array(a, o, i));
            }
        };
    }
    function Zn(t, e) {
        let n = t.byteLength;
        n < 24 ? m[p++] = 64 + n : n < 256 ? (m[p++] = 88, m[p++] = n) : n < 65536 ? (m[p++] = 89, m[p++] = n >> 8, m[p++] = n & 255) : (m[p++] = 90, Y.setUint32(p, n), p += 4), p + n >= m.length && e(p + n), m.set(t.buffer ? t : new Uint8Array(t), p), p += n;
    }
    function Ec(t, e) {
        let n, r = e.length * 2, s = t.length - r;
        e.sort((i, o)=>i.offset > o.offset ? 1 : -1);
        for(let i = 0; i < e.length; i++){
            let o = e[i];
            o.id = i;
            for (let a of o.references)t[a++] = i >> 8, t[a] = i & 255;
        }
        for(; n = e.pop();){
            let i = n.offset;
            t.copyWithin(i + r, i, s), r -= 2;
            let o = i + r;
            t[o++] = 216, t[o++] = 28, s = i;
        }
        return t;
    }
    function _s(t, e) {
        Y.setUint32(te.position + t, p - te.position - t + 1);
        let n = te;
        te = null, e(n[0]), e(n[1]);
    }
    let Ar = new Ri({
        useRecords: !1
    });
    Ar.encode;
    Ar.encodeAsIterable;
    Ar.encodeAsAsyncIterable;
    const ps = 512, Ic = 1024, On = 2048;
    function Cc(t) {
        return new Ri({
            tagUint8Array: !1,
            useRecords: !1
        }).encode(t);
    }
    const Rc = (t, e)=>t.length === e.length && t.every((n, r)=>n === e[r]), hn = (t, e)=>Rc(t, e), Hc = async (t, e)=>{
        let n;
        const r = new Promise((s, i)=>{
            n = setTimeout(()=>i(new kc(`withTimeout: timed out after ${e}ms`)), e);
        });
        try {
            return await Promise.race([
                t,
                r
            ]);
        } finally{
            clearTimeout(n);
        }
    };
    class kc extends Error {
        constructor(e){
            super(e), this.name = "TimeoutError";
        }
    }
    class ln extends DOMException {
        constructor(e){
            super(e ?? "Operation aborted", "AbortError");
        }
    }
    const Dc = (t)=>t instanceof ln || (t instanceof Error || DOMException && t instanceof DOMException) && t.name === "AbortError";
    function ys(t, e) {
        let n = !1;
        return new Promise((r, s)=>{
            e?.addEventListener("abort", ()=>{
                n || s(new ln);
            }, {
                once: !0
            }), t.then((i)=>{
                r(i);
            }).catch((i)=>{
                s(i);
            }).finally(()=>{
                n = !0;
            });
        });
    }
    const Q = "AUTOMERGE_REF_KIND", Oc = "AUTOMERGE_REF_CURSOR_MARKER", Mc = "automerge:", Wt = "\\", Ft = "%5C", ki = "@", Gt = "[", Mn = "]", bs = "-", ms = [
        Wt,
        ki,
        "{",
        Gt
    ], ws = /^@(\d+)$/, Tc = {
        kind: "index",
        match: (t)=>ws.test(t),
        parse: (t)=>{
            const e = t.match(ws);
            if (!e) throw new Error(`Invalid index: ${t}`);
            return {
                [Q]: "index",
                index: parseInt(e[1], 10)
            };
        },
        serialize: (t)=>`${ki}${t.index}`
    }, Uc = {
        kind: "match",
        match: (t)=>t.startsWith("{") || t.startsWith("%7B"),
        parse: (t)=>{
            try {
                const e = decodeURIComponent(t), n = JSON.parse(e);
                if (typeof n != "object" || n === null || Array.isArray(n)) throw new Error("Match pattern must be a plain object");
                return {
                    [Q]: "match",
                    match: n
                };
            } catch (e) {
                throw new Error(`Invalid match pattern: ${t}. ${e instanceof Error ? e.message : ""}`);
            }
        },
        serialize: (t)=>encodeURIComponent(JSON.stringify(t.match))
    }, Bc = {
        kind: "cursors",
        match: (t)=>t.startsWith(Gt) && t.endsWith(Mn),
        parse: (t)=>{
            const e = t.slice(1, -1);
            if (!e) throw new Error("Invalid cursor range: empty brackets");
            const n = e.indexOf(bs);
            if (n === -1) {
                const i = e;
                return {
                    [Q]: "cursors",
                    start: i,
                    end: i
                };
            }
            const r = e.slice(0, n), s = e.slice(n + 1);
            if (!r || !s) throw new Error(`Invalid cursor range: ${t}. Expected format: [cursor] or [start-end]`);
            return {
                [Q]: "cursors",
                start: r,
                end: s
            };
        },
        serialize: (t)=>t.start === t.end ? `${Gt}${t.start}${Mn}` : `${Gt}${t.start}${bs}${t.end}${Mn}`
    }, jc = {
        kind: "key",
        match: (t)=>{
            if (t.startsWith(Ft) || t.startsWith(Wt)) return !0;
            const e = Fc(t);
            return !ms.some((n)=>t.startsWith(n) || e.startsWith(n));
        },
        parse: (t)=>t.startsWith(Ft) ? {
                [Q]: "key",
                key: decodeURIComponent(t.slice(Ft.length))
            } : t.startsWith(Wt) ? {
                [Q]: "key",
                key: decodeURIComponent(t.slice(Wt.length))
            } : {
                [Q]: "key",
                key: decodeURIComponent(t)
            },
        serialize: (t)=>{
            const e = ms.some((r)=>t.key.startsWith(r)), n = encodeURIComponent(t.key);
            return e ? `${Ft}${n}` : n;
        }
    };
    function Fc(t) {
        try {
            return decodeURIComponent(t);
        } catch  {
            return t;
        }
    }
    const Pc = [
        Tc,
        Uc,
        Bc,
        jc
    ];
    function Lc(t) {
        for (const e of Pc)if (t[Q] === e.kind) return e.serialize(t);
        throw new Error(`No codec found for segment kind: ${t[Q]}`);
    }
    function $c(t) {
        return t.map(Lc).join("/");
    }
    function Vc(t) {
        return t.length > 0 ? `#${t.join("|")}` : "";
    }
    function zc(t, e, n) {
        const r = $c(e), s = n ? Vc(n) : "";
        return `${Mc}${t}/${r}${s}`;
    }
    function Er(t) {
        return t !== null && typeof t == "object" && !Array.isArray(t);
    }
    function Di(t) {
        return Er(t) && Q in t;
    }
    function Oi(t) {
        return Er(t) && Oc in t;
    }
    function Nc(t) {
        return Er(t) && !Di(t) && !Oi(t);
    }
    function xs(t, e) {
        return Object.entries(e).every(([n, r])=>t[n] === r);
    }
    function qc(t, e, n) {
        const r = {
            splice (s, i, o) {
                qs(t, e, s, i, o);
            },
            updateText (s) {
                bo(t, e, s);
            }
        };
        return new Proxy(r, {
            get (s, i) {
                if (i in s) return s[i];
                const a = n[i];
                return typeof a == "function" ? a.bind(n) : a;
            },
            getPrototypeOf () {
                return String.prototype;
            }
        });
    }
    const Wc = new FinalizationRegistry((t)=>t());
    class Gc {
        docHandle;
        path;
        range;
        #e = new Set;
        #t;
        constructor(e, n){
            this.docHandle = e;
            const r = e.doc(), { path: s, range: i } = this.#i(r, n);
            this.path = s, this.range = i, this.#t = ()=>{
                const o = this.docHandle.doc();
                this.#c(o);
            }, this.docHandle.on("change", this.#t), Wc.register(this, ()=>this.#r(), this);
        }
        #r() {
            this.docHandle.off("change", this.#t);
            for (const e of this.#e)this.docHandle.off("change", e);
            this.#e.clear();
        }
        get rangePositions() {
            if (!this.range) return;
            const e = this.#u();
            if (!e) return;
            const n = this.doc();
            return this.#l(n, e, this.range);
        }
        viewAt(e) {
            return this.docHandle.view(ye(e)).ref(...this.path);
        }
        value() {
            const e = this.doc(), n = this.#u();
            if (!n) return;
            const r = this.#d(e, n);
            return this.range ? this.#_(e, n, r, this.range) : r;
        }
        doc() {
            return this.docHandle.doc();
        }
        change(e) {
            if (this.docHandle.isReadOnly()) throw new Error("Cannot change a Ref on a read-only handle");
            const n = typeof e == "function" ? e : ()=>e;
            this.docHandle.change((r)=>{
                if (this.path.length === 0 && !this.range) {
                    n(r);
                    return;
                }
                const s = this.#u();
                if (!s) throw new Error("Cannot resolve path");
                let i;
                if (this.range) {
                    const c = this.#d(r, s);
                    if (typeof c != "string") throw new Error("Range refs can only be used on string values");
                    i = this.#_(r, s, c, this.range);
                } else i = this.#d(r, s);
                const o = typeof i == "string" ? qc(r, s, i) : i, a = n(o);
                a !== void 0 && (a === null || typeof a == "string" || typeof a == "number" || typeof a == "boolean" || typeof a == "bigint" || console.warn("Ref.change() returned a non-primitive value. For objects and arrays, you should mutate them in place rather than returning a new instance. Returning new instances loses granular change tracking."), this.range ? this.#p(r, s, this.range, a) : this.#h(r, s, a));
            });
        }
        remove() {
            if (this.docHandle.isReadOnly()) throw new Error("Cannot remove from a Ref on a read-only handle");
            if (this.path.length === 0 && !this.range) throw new Error("Cannot remove the root document");
            this.docHandle.change((e)=>{
                const n = this.#u();
                if (!n || n.length === 0) throw new Error("Cannot resolve path for removal");
                if (this.range) {
                    this.#p(e, n, this.range, "");
                    return;
                }
                const r = n.slice(0, -1), s = n[n.length - 1], i = r.length === 0 ? e : this.#d(e, r);
                if (i == null) throw new Error("Cannot remove: parent is null or undefined");
                if (Array.isArray(i)) {
                    if (typeof s != "number") throw new Error("Cannot remove from array: key is not a number");
                    i.splice(s, 1);
                } else delete i[s];
            });
        }
        onChange(e) {
            const n = (s)=>{
                if (this.#b(s.patches)) {
                    const i = this.value();
                    e(i, s);
                }
            };
            return this.docHandle.on("change", n), this.#e.add(n), ()=>{
                this.docHandle.off("change", n), this.#e.delete(n);
            };
        }
        get url() {
            const e = this.range ? [
                ...this.path,
                this.range
            ] : this.path, n = this.docHandle.isReadOnly() ? Le(this.docHandle.heads()) : void 0;
            return zc(this.docHandle.documentId, e, n);
        }
        equals(e) {
            return this.url === e.url;
        }
        contains(e) {
            if (this.docHandle.documentId !== e.docHandle.documentId || this.docHandle.url !== e.docHandle.url || this.path.length >= e.path.length) return !1;
            for(let n = 0; n < this.path.length; n++)if (!this.#s(this.path[n], e.path[n])) return !1;
            return !0;
        }
        isChildOf(e) {
            if (this.docHandle.documentId !== e.docHandle.documentId || this.docHandle.url !== e.docHandle.url || this.path.length < e.path.length) return !1;
            for(let n = 0; n < e.path.length; n++)if (!this.#s(this.path[n], e.path[n])) return !1;
            return this.path.length === e.path.length ? this.range !== void 0 && e.range === void 0 : this.path.length === e.path.length + 1;
        }
        overlaps(e) {
            if (this.docHandle.documentId !== e.docHandle.documentId || this.docHandle.url !== e.docHandle.url || !this.range || !e.range || this.path.length !== e.path.length) return !1;
            for(let g = 0; g < this.path.length; g++)if (!this.#s(this.path[g], e.path[g])) return !1;
            const n = this.doc(), r = this.#u();
            if (!r) return !1;
            const s = this.#l(n, r, this.range), i = this.#l(n, r, e.range);
            if (!s || !i) return !1;
            const [o, a] = s, [c, u] = i;
            return o < u && c < a;
        }
        isEquivalent(e) {
            if (this === e) return !0;
            if (this.docHandle.documentId !== e.docHandle.documentId || !this.#n(e) || this.path.length !== e.path.length || this.range === void 0 != (e.range === void 0)) return !1;
            let n = !0;
            for(let r = 0; r < this.path.length; r++)if (!this.#s(this.path[r], e.path[r])) {
                n = !1;
                break;
            }
            if (n) return !this.range && !e.range ? !0 : this.range.start === e.range.start && this.range.end === e.range.end;
            for(let r = 0; r < this.path.length; r++){
                const s = this.path[r].prop, i = e.path[r].prop;
                if (s === void 0 || i === void 0 || s !== i) return !1;
            }
            return !this.range && !e.range ? !0 : this.range.start === e.range.start && this.range.end === e.range.end;
        }
        valueOf() {
            return this.url;
        }
        toString() {
            return this.url;
        }
        #n(e) {
            if (this.docHandle.url === e.docHandle.url) return !0;
            const n = this.docHandle.heads().join(","), r = e.docHandle.heads().join(",");
            return n === r;
        }
        #i(e, n) {
            const r = [], s = [];
            let i = e, o;
            for(let a = 0; a < n.length; a++){
                const c = n[a];
                if (Oi(c)) {
                    if (a < n.length - 1) throw new Error("cursor() must be the last segment in a ref path. Segments after cursor() are not allowed.");
                    o = this.#f(e, s, i, c);
                    break;
                }
                const u = Di(c) ? this.#o(i, c) : this.#g(i, c);
                if (u[Q] === "cursors") {
                    if (a < n.length - 1) throw new Error("Cursor range must be the last segment in a ref path. Segments after cursor range are not allowed.");
                    o = u;
                    break;
                }
                r.push(u), u.prop !== void 0 && i !== void 0 && i !== null && (s.push(u.prop), i = i[u.prop]);
            }
            return {
                path: r,
                range: o
            };
        }
        #o(e, n) {
            const r = this.#a(e, n);
            return {
                ...n,
                prop: r
            };
        }
        #a(e, n) {
            if (e != null) switch(n[Q]){
                case "key":
                    return n.key;
                case "index":
                    return n.index;
                case "match":
                    {
                        if (!Array.isArray(e)) return;
                        const r = e.findIndex((s)=>xs(s, n.match));
                        return r !== -1 ? r : void 0;
                    }
                case "cursors":
                    return;
                default:
                    return;
            }
        }
        #c(e) {
            let n = e;
            for (const r of this.path){
                const s = this.#a(n, r);
                if (r.prop = s, s !== void 0 && n !== void 0 && n !== null) n = n[s];
                else break;
            }
        }
        #s(e, n) {
            if (e[Q] !== n[Q]) return !1;
            switch(e[Q]){
                case "key":
                    return e.key === n.key;
                case "index":
                    return e.index === n.index;
                case "match":
                    {
                        const r = Object.keys(e.match), s = Object.keys(n.match);
                        return r.length !== s.length ? !1 : r.every((i)=>e.match[i] === n.match[i]);
                    }
                default:
                    return !1;
            }
        }
        #g(e, n) {
            if (typeof n == "string") return {
                [Q]: "key",
                key: n,
                prop: n
            };
            if (typeof n == "number") return {
                [Q]: "index",
                index: n,
                prop: n
            };
            if (Nc(n)) {
                if (!Array.isArray(e)) return {
                    [Q]: "match",
                    match: n,
                    prop: void 0
                };
                const r = e.findIndex((s)=>xs(s, n));
                return {
                    [Q]: "match",
                    match: n,
                    prop: r !== -1 ? r : void 0
                };
            }
            throw new Error(`Unsupported path input type: ${typeof n}. Expected string, number, or plain object.`);
        }
        #f(e, n, r, s) {
            const { start: i, end: o } = s;
            if (typeof r != "string") throw new Error(`cursor() can only be used on string values, got ${typeof r}`);
            const a = Mr(e, n, i), c = Mr(e, n, o);
            if (!a || !c) throw new Error(`Failed to create cursors at positions ${i}-${o}.`);
            return {
                [Q]: "cursors",
                start: a,
                end: c
            };
        }
        #u() {
            const e = [];
            for (const n of this.path){
                if (n.prop === void 0) return;
                e.push(n.prop);
            }
            return e;
        }
        #d(e, n) {
            let r = e;
            for (const s of n){
                if (r == null) return;
                r = r[s];
            }
            return r;
        }
        #_(e, n, r, s) {
            const i = this.#l(e, n, s);
            if (i) return r.slice(i[0], i[1]);
        }
        #h(e, n, r) {
            if (n.length === 0) throw new Error("Internal error: #setValueAt called with empty path. Root document changes should be handled by the caller.");
            const s = this.#d(e, n.slice(0, -1));
            if (s == null) throw new Error("Cannot set value: parent is null or undefined");
            s[n[n.length - 1]] = r;
        }
        #p(e, n, r, s) {
            const i = this.#l(e, n, r);
            if (!i) throw new Error("Cannot resolve range positions");
            const [o, a] = i;
            qs(e, n, o, a - o, s);
        }
        #l(e, n, r) {
            const s = Tr(e, n, r.start), i = Tr(e, n, r.end);
            return s !== void 0 && i !== void 0 ? [
                s,
                i
            ] : void 0;
        }
        #b(e) {
            const n = [];
            for (const r of this.path){
                if (r.prop === void 0) break;
                n.push(r.prop);
            }
            return n.length === 0 ? !1 : e.some((r)=>this.#m(r.path, n));
        }
        #m(e, n) {
            const r = Math.min(e.length, n.length);
            return e.slice(0, r).every((s, i)=>s === n[i]);
        }
    }
    class sn extends Xe {
        documentId;
        #e;
        #t;
        #r;
        #n = Ae();
        #i = 6e4;
        #o = {};
        #a = new Map;
        #c = new Map;
        constructor(e, n = {}){
            super(), this.documentId = e, "timeoutDelay" in n && n.timeoutDelay && (this.#i = n.timeoutDelay), "heads" in n && (this.#r = n.heads);
            const r = Ae();
            this.#e = Ye(`automerge-repo:dochandle:${this.documentId.slice(0, 5)}`);
            const s = this.#i, i = gi({
                actions: {
                    onUpdate: We(({ context: o, event: a })=>{
                        const c = o.doc;
                        Pa(a, vs);
                        const { callback: u } = a.payload;
                        return {
                            doc: u(c)
                        };
                    }),
                    onDelete: We(()=>(this.emit("delete", {
                            handle: this
                        }), {
                            doc: Ae()
                        })),
                    onUnavailable: We(()=>({
                            doc: Ae()
                        })),
                    onUnload: We(()=>({
                            doc: Ae()
                        }))
                }
            }).createMachine({
                initial: "idle",
                context: {
                    documentId: e,
                    doc: r
                },
                on: {
                    UPDATE: {
                        actions: "onUpdate"
                    },
                    UNLOAD: ".unloaded",
                    DELETE: ".deleted"
                },
                states: {
                    idle: {
                        on: {
                            BEGIN: "loading"
                        }
                    },
                    loading: {
                        on: {
                            REQUEST: "requesting",
                            DOC_READY: "ready"
                        },
                        after: {
                            [s]: "unavailable"
                        }
                    },
                    requesting: {
                        on: {
                            DOC_UNAVAILABLE: "unavailable",
                            DOC_READY: "ready"
                        },
                        after: {
                            [s]: "unavailable"
                        }
                    },
                    unavailable: {
                        entry: "onUnavailable",
                        on: {
                            DOC_READY: "ready"
                        }
                    },
                    ready: {},
                    unloaded: {
                        entry: "onUnload",
                        on: {
                            RELOAD: "loading"
                        }
                    },
                    deleted: {
                        entry: "onDelete",
                        type: "final"
                    }
                }
            });
            this.#t = St(i), this.#t.subscribe((o)=>{
                const a = this.#n, c = o.context.doc;
                this.#e(`→ ${o.value} %o`, c), this.#d(a, c);
            }), this.#t.start(), this.begin();
        }
        get #s() {
            return this.#t?.getSnapshot().context.doc;
        }
        get #g() {
            return this.#t?.getSnapshot().value;
        }
        #f(e, n) {
            const r = Array.isArray(e) ? e : [
                e
            ];
            return Va(this.#t, (s)=>r.some((i)=>s.matches(i)), {
                timeout: this.#i * 2,
                ...n
            });
        }
        #u(e) {
            let n = null;
            if (this.#t.send({
                type: vs,
                payload: {
                    callback: (r)=>{
                        try {
                            return e(r);
                        } catch (s) {
                            return n = s, r;
                        }
                    }
                }
            }), n) throw n;
        }
        #d(e, n) {
            const r = we(e), s = we(n);
            if (!hn(ye(s), ye(r))) {
                this.emit("heads-changed", {
                    handle: this,
                    doc: n
                });
                const o = yn(n, r, s);
                o.length > 0 && this.emit("change", {
                    handle: this,
                    doc: n,
                    patches: o,
                    patchInfo: {
                        before: e,
                        after: n,
                        source: "change"
                    }
                }), this.isReady() || this.#t.send({
                    type: Ss
                });
            }
            this.#n = n;
        }
        get url() {
            return mi({
                documentId: this.documentId,
                heads: this.#r
            });
        }
        isReady = ()=>this.inState([
                "ready"
            ]);
        isUnloaded = ()=>this.inState([
                "unloaded"
            ]);
        isDeleted = ()=>this.inState([
                "deleted"
            ]);
        isUnavailable = ()=>this.inState([
                "unavailable"
            ]);
        inState = (e)=>e.some((n)=>this.#t.getSnapshot().matches(n));
        get state() {
            return this.#t.getSnapshot().value;
        }
        async whenReady(e = [
            "ready"
        ], n) {
            try {
                await Hc(this.#f(e, n), this.#i);
            } catch (r) {
                throw Dc(r) ? new ln : (console.log(`error waiting for ${this.documentId} to be in one of states: ${e.join(", ")}`), r);
            }
        }
        doc() {
            if (!this.isReady()) throw new Error("DocHandle is not ready");
            return this.#r ? so(this.#s, Le(this.#r)) : this.#s;
        }
        docSync() {
            return console.warn("docSync is deprecated. Use doc() instead. This function will be removed as part of the 2.0 release."), this.doc();
        }
        heads() {
            if (!this.isReady()) throw new Error("DocHandle is not ready");
            return this.#r ? this.#r : ye(we(this.#s));
        }
        begin() {
            this.#t.send({
                type: Yc
            });
        }
        history() {
            if (this.isReady()) return _o(this.#s).map((e)=>ye([
                    e
                ]));
        }
        view(e) {
            if (!this.isReady()) throw new Error(`DocHandle#${this.documentId} is not ready. Check \`handle.isReady()\` before calling view().`);
            const n = JSON.stringify(e), r = this.#a.get(n);
            if (r) return r;
            const s = new sn(this.documentId, {
                heads: e,
                timeoutDelay: this.#i
            });
            return s.update(()=>Yt(this.#s)), s.doneLoading(), this.#a.set(n, s), s;
        }
        diff(e, n) {
            if (!this.isReady()) throw new Error(`DocHandle#${this.documentId} is not ready. Check \`handle.isReady()\` before calling diff().`);
            const r = this.#s;
            if (!r) throw new Error("Document not available");
            if (e instanceof sn) {
                if (!e.isReady()) throw new Error("Cannot diff against a handle that isn't ready");
                const o = e.heads();
                if (!o) throw new Error("Other document's heads not available");
                const a = kr(Yt(r), e.doc());
                return yn(a, Le(this.heads()), Le(o));
            }
            const s = n ? e : this.heads() || [], i = n || e;
            return yn(r, Le(s), Le(i));
        }
        metadata(e) {
            if (this.isReady()) return e || (e = this.heads()[0]), po(this.#s, Le([
                e
            ])[0]) || void 0;
        }
        update(e) {
            this.#u(e);
        }
        doneLoading() {
            this.#t.send({
                type: Ss
            });
        }
        setSyncInfo(e, n) {
            this.#o[e] = n, this.emit("remote-heads", {
                storageId: e,
                heads: n.lastHeads,
                timestamp: n.lastSyncTimestamp
            });
        }
        getRemoteHeads(e) {
            return this.#o[e]?.lastHeads;
        }
        getSyncInfo(e) {
            return this.#o[e];
        }
        change(e, n = {}) {
            if (!this.isReady()) throw new Error(`DocHandle#${this.documentId} is in ${this.state} and not ready. Check \`handle.isReady()\` before accessing the document.`);
            if (this.#r) throw new Error(`DocHandle#${this.documentId} is in view-only mode at specific heads. Use clone() to create a new document from this state.`);
            this.#u((r)=>io(r, n, e));
        }
        changeAt(e, n, r = {}) {
            if (!this.isReady()) throw new Error(`DocHandle#${this.documentId} is not ready. Check \`handle.isReady()\` before accessing the document.`);
            if (this.#r) throw new Error(`DocHandle#${this.documentId} is in view-only mode at specific heads. Use clone() to create a new document from this state.`);
            let s;
            return this.#u((i)=>{
                const o = oo(i, Le(e), r, n);
                return s = o.newHeads ? ye(o.newHeads) : void 0, o.newDoc;
            }), s;
        }
        isReadOnly() {
            return !!this.#r;
        }
        merge(e) {
            if (!this.isReady() || !e.isReady()) throw new Error("Both handles must be ready to merge");
            if (this.#r) throw new Error(`DocHandle#${this.documentId} is in view-only mode at specific heads. Use clone() to create a new document from this state.`);
            const n = e.doc();
            this.update((r)=>kr(r, n));
        }
        unavailable() {
            this.#t.send({
                type: tu
            });
        }
        request() {
            this.#g === "loading" && this.#t.send({
                type: Xc
            });
        }
        unload() {
            this.#t.send({
                type: Zc
            });
        }
        reload() {
            this.#t.send({
                type: Qc
            });
        }
        delete() {
            this.#t.send({
                type: eu
            });
        }
        broadcast(e) {
            this.emit("ephemeral-message-outbound", {
                handle: this,
                data: new Uint8Array(Cc(e))
            });
        }
        metrics() {
            return ar(this.#s);
        }
        ref(...e) {
            const n = this.#_(e), r = this.#c.get(n)?.deref();
            if (r) return r;
            const s = new Gc(this, e);
            return this.#c.set(n, new WeakRef(s)), s;
        }
        #_(e) {
            return e.map((n)=>typeof n == "string" ? `s:${n}` : typeof n == "number" ? `n:${n}` : typeof n == "object" && n !== null ? `o:${JSON.stringify(n)}` : `?:${String(n)}`).join("/");
        }
    }
    const Kc = {
        REQUESTING: "requesting",
        READY: "ready",
        UNLOADED: "unloaded",
        DELETED: "deleted",
        UNAVAILABLE: "unavailable"
    }, { REQUESTING: Pt, READY: Me, UNLOADED: Jc, DELETED: Lt, UNAVAILABLE: pe } = Kc, Yc = "BEGIN", Xc = "REQUEST", Ss = "DOC_READY", vs = "UPDATE", Zc = "UNLOAD", Qc = "RELOAD", eu = "DELETE", tu = "DOC_UNAVAILABLE";
    class nu extends Xe {
        #e = new Map;
        #t = new Set;
        #r = new Map;
        #n = new Set;
        #i = new Map;
        #o = Ye("automerge-repo:remote-heads-subscriptions");
        subscribeToRemotes(e) {
            this.#o("subscribeToRemotes", e);
            const n = [];
            for (const r of e)this.#t.has(r) || (this.#t.add(r), n.push(r));
            n.length > 0 && this.emit("change-remote-subs", {
                add: n,
                peers: Array.from(this.#n)
            });
        }
        unsubscribeFromRemotes(e) {
            this.#o("subscribeToRemotes", e);
            const n = [];
            for (const r of e)this.#t.has(r) && (this.#t.delete(r), this.#r.has(r) || n.push(r));
            n.length > 0 && this.emit("change-remote-subs", {
                remove: n,
                peers: Array.from(this.#n)
            });
        }
        handleControlMessage(e) {
            const n = [], r = [], s = [];
            if (this.#o("handleControlMessage", e), e.add) for (const i of e.add){
                let o = this.#r.get(i);
                (this.#t.has(i) || o) && s.push(i), o || (o = new Set, this.#r.set(i, o), this.#t.has(i) || n.push(i)), o.add(e.senderId);
            }
            if (e.remove) for (const i of e.remove){
                const o = this.#r.get(i);
                o && (o.delete(e.senderId), o.size == 0 && !this.#t.has(i) && r.push(i));
            }
            (n.length > 0 || r.length > 0) && this.emit("change-remote-subs", {
                peers: Array.from(this.#n),
                add: n,
                remove: r
            });
            for (const i of s){
                const o = this.#i.get(e.senderId);
                if (o) for (const a of o){
                    const c = this.#e.get(a);
                    if (!c) continue;
                    const u = c.get(i);
                    u && this.emit("notify-remote-heads", {
                        targetId: e.senderId,
                        documentId: a,
                        heads: u.lastHeads,
                        timestamp: u.lastSyncTimestamp,
                        storageId: i
                    });
                }
            }
        }
        handleRemoteHeads(e) {
            this.#o("handleRemoteHeads", e);
            const n = this.#c(e);
            for (const r of n)this.#t.has(r.storageId) && this.emit("remote-heads-changed", r);
            for (const r of n)for (const s of this.#n)s !== e.senderId && this.emit("notify-remote-heads", {
                targetId: s,
                documentId: r.documentId,
                heads: r.remoteHeads,
                timestamp: r.timestamp,
                storageId: r.storageId
            });
            for (const r of n){
                const s = this.#r.get(r.storageId);
                if (s) for (const i of s)this.#a(i, r.documentId) && this.emit("notify-remote-heads", {
                    targetId: i,
                    documentId: r.documentId,
                    heads: r.remoteHeads,
                    timestamp: r.timestamp,
                    storageId: r.storageId
                });
            }
        }
        handleImmediateRemoteHeadsChanged(e, n, r) {
            this.#o("handleLocalHeadsChanged", e, n, r);
            const s = this.#e.get(e), i = Date.now();
            if (!s) this.#e.set(e, new Map([
                [
                    n,
                    {
                        lastSyncTimestamp: i,
                        lastHeads: r
                    }
                ]
            ]));
            else {
                const a = s.get(n);
                (!a || a.lastSyncTimestamp < Date.now()) && s.set(n, {
                    lastSyncTimestamp: Date.now(),
                    lastHeads: r
                });
            }
            const o = this.#r.get(n);
            if (o) for (const a of o)this.#a(a, e) && this.emit("notify-remote-heads", {
                targetId: a,
                documentId: e,
                heads: r,
                timestamp: i,
                storageId: n
            });
        }
        addGenerousPeer(e) {
            this.#o("addGenerousPeer", e), this.#n.add(e), this.#t.size > 0 && this.emit("change-remote-subs", {
                add: Array.from(this.#t),
                peers: [
                    e
                ]
            });
            for (const [n, r] of this.#e)for (const [s, { lastHeads: i, lastSyncTimestamp: o }] of r)this.emit("notify-remote-heads", {
                targetId: e,
                documentId: n,
                heads: i,
                timestamp: o,
                storageId: s
            });
        }
        removePeer(e) {
            this.#o("removePeer", e);
            const n = [];
            this.#n.delete(e), this.#i.delete(e);
            for (const [r, s] of this.#r)s.has(e) && (s.delete(e), s.size == 0 && (n.push(r), this.#r.delete(r)));
            n.length > 0 && this.emit("change-remote-subs", {
                remove: n,
                peers: Array.from(this.#n)
            });
        }
        subscribePeerToDoc(e, n) {
            let r = this.#i.get(e);
            r || (r = new Set, this.#i.set(e, r)), r.add(n);
            const s = this.#e.get(n);
            if (s) for (const [i, o] of s){
                const a = this.#r.get(i);
                a && a.has(e) && this.emit("notify-remote-heads", {
                    targetId: e,
                    documentId: n,
                    heads: o.lastHeads,
                    timestamp: o.lastSyncTimestamp,
                    storageId: i
                });
            }
        }
        #a(e, n) {
            const r = this.#i.get(e);
            return r && r.has(n);
        }
        #c(e) {
            const n = [], { documentId: r, newHeads: s } = e;
            for (const [i, { heads: o, timestamp: a }] of Object.entries(s)){
                if (!this.#t.has(i) && !this.#r.has(i)) continue;
                let c = this.#e.get(r);
                c || (c = new Map, this.#e.set(r, c));
                const u = c.get(i);
                u && u.lastSyncTimestamp >= a || (c.set(i, {
                    lastSyncTimestamp: a,
                    lastHeads: o
                }), n.push({
                    documentId: r,
                    storageId: i,
                    remoteHeads: o,
                    timestamp: a
                }));
            }
            return n;
        }
    }
    const Qn = (t, e)=>{
        let n = Date.now(), r, s;
        return function(...i) {
            r = n + e - Date.now(), clearTimeout(s), s = setTimeout(()=>{
                t(...i), n = Date.now();
            }, r);
        };
    }, ru = (t)=>iu(t) || Ti(t) || Mi(t) || su(t) || ou(t) || au(t), su = (t)=>t.type === "doc-unavailable", Mi = (t)=>t.type === "request", iu = (t)=>t.type === "sync", Ti = (t)=>t.type === "ephemeral", ou = (t)=>t.type === "remote-subscription-change", au = (t)=>t.type === "remote-heads-changed", cu = (t)=>`${t.senderId}:${t.sessionId}`;
    class uu extends Xe {
        peerId;
        peerMetadata;
        #e;
        #t = {};
        #r = 0;
        #n = Math.random().toString(36).slice(2);
        #i = {};
        adapters = [];
        constructor(e, n, r){
            super(), this.peerId = n, this.peerMetadata = r, this.#e = Ye(`automerge-repo:network:${this.peerId}`), e.forEach((s)=>this.addNetworkAdapter(s));
        }
        disconnect() {
            this.adapters.forEach((e)=>e.disconnect());
        }
        reconnect() {
            this.adapters.forEach((e)=>e.connect(this.peerId));
        }
        addNetworkAdapter(e) {
            this.adapters.push(e), e.on("peer-candidate", ({ peerId: n, peerMetadata: r })=>{
                this.#e(`peer candidate: ${n} `), this.#t[n] || (this.#t[n] = e), this.emit("peer", {
                    peerId: n,
                    peerMetadata: r
                });
            }), e.on("peer-disconnected", ({ peerId: n })=>{
                this.#e(`peer disconnected: ${n} `), delete this.#t[n], this.emit("peer-disconnected", {
                    peerId: n
                });
            }), e.on("message", (n)=>{
                if (!ru(n)) {
                    this.#e(`invalid message: ${JSON.stringify(n)}`);
                    return;
                }
                if (this.#e(`message from ${n.senderId}`), Ti(n)) {
                    const r = cu(n);
                    (this.#i[r] === void 0 || n.count > this.#i[r]) && (this.#i[r] = n.count, this.emit("message", n));
                    return;
                }
                this.emit("message", n);
            }), e.on("close", ()=>{
                this.#e("adapter closed"), Object.entries(this.#t).forEach(([n, r])=>{
                    r === e && delete this.#t[n];
                }), this.adapters = this.adapters.filter((n)=>n !== e);
            }), this.peerMetadata.then((n)=>{
                e.connect(this.peerId, n);
            }).catch((n)=>{
                this.#e("error connecting to network", n);
            });
        }
        removeNetworkAdapter(e) {
            this.adapters = this.adapters.filter((n)=>n !== e), e.disconnect();
        }
        send(e) {
            const n = this.#t[e.targetId];
            if (!n) {
                this.#e(`Tried to send message but peer not found: ${e.targetId}`);
                return;
            }
            const s = ((i)=>i.type === "ephemeral" ? "count" in i ? i : {
                    ...i,
                    count: ++this.#r,
                    sessionId: this.#n,
                    senderId: this.peerId
                } : {
                    ...i,
                    senderId: this.peerId
                })(e);
            this.#e("sending message %o", s), n.send(s);
        }
        isReady = ()=>this.adapters.every((e)=>e.isReady());
        whenReady = async ()=>Promise.all(this.adapters.map((e)=>e.whenReady()));
    }
    function Ui(t) {
        let e = 0;
        t.forEach((s)=>{
            e += s.length;
        });
        const n = new Uint8Array(e);
        let r = 0;
        return t.forEach((s)=>{
            n.set(s, r), r += s.length;
        }), n;
    }
    var Kt = {
        exports: {}
    }, fu = Kt.exports, As;
    function du() {
        return As || (As = 1, (function(t) {
            (function(e, n) {
                var r = {};
                n(r);
                var s = r.default;
                for(var i in r)s[i] = r[i];
                t.exports = s;
            })(fu, function(e) {
                e.__esModule = !0, e.digestLength = 32, e.blockSize = 64;
                var n = new Uint32Array([
                    1116352408,
                    1899447441,
                    3049323471,
                    3921009573,
                    961987163,
                    1508970993,
                    2453635748,
                    2870763221,
                    3624381080,
                    310598401,
                    607225278,
                    1426881987,
                    1925078388,
                    2162078206,
                    2614888103,
                    3248222580,
                    3835390401,
                    4022224774,
                    264347078,
                    604807628,
                    770255983,
                    1249150122,
                    1555081692,
                    1996064986,
                    2554220882,
                    2821834349,
                    2952996808,
                    3210313671,
                    3336571891,
                    3584528711,
                    113926993,
                    338241895,
                    666307205,
                    773529912,
                    1294757372,
                    1396182291,
                    1695183700,
                    1986661051,
                    2177026350,
                    2456956037,
                    2730485921,
                    2820302411,
                    3259730800,
                    3345764771,
                    3516065817,
                    3600352804,
                    4094571909,
                    275423344,
                    430227734,
                    506948616,
                    659060556,
                    883997877,
                    958139571,
                    1322822218,
                    1537002063,
                    1747873779,
                    1955562222,
                    2024104815,
                    2227730452,
                    2361852424,
                    2428436474,
                    2756734187,
                    3204031479,
                    3329325298
                ]);
                function r(h, l, d, b, w) {
                    for(var O, U, S, z, M, B, V, F, C, k, j, q, _; w >= 64;){
                        for(O = l[0], U = l[1], S = l[2], z = l[3], M = l[4], B = l[5], V = l[6], F = l[7], k = 0; k < 16; k++)j = b + k * 4, h[k] = (d[j] & 255) << 24 | (d[j + 1] & 255) << 16 | (d[j + 2] & 255) << 8 | d[j + 3] & 255;
                        for(k = 16; k < 64; k++)C = h[k - 2], q = (C >>> 17 | C << 15) ^ (C >>> 19 | C << 13) ^ C >>> 10, C = h[k - 15], _ = (C >>> 7 | C << 25) ^ (C >>> 18 | C << 14) ^ C >>> 3, h[k] = (q + h[k - 7] | 0) + (_ + h[k - 16] | 0);
                        for(k = 0; k < 64; k++)q = (((M >>> 6 | M << 26) ^ (M >>> 11 | M << 21) ^ (M >>> 25 | M << 7)) + (M & B ^ ~M & V) | 0) + (F + (n[k] + h[k] | 0) | 0) | 0, _ = ((O >>> 2 | O << 30) ^ (O >>> 13 | O << 19) ^ (O >>> 22 | O << 10)) + (O & U ^ O & S ^ U & S) | 0, F = V, V = B, B = M, M = z + q | 0, z = S, S = U, U = O, O = q + _ | 0;
                        l[0] += O, l[1] += U, l[2] += S, l[3] += z, l[4] += M, l[5] += B, l[6] += V, l[7] += F, b += 64, w -= 64;
                    }
                    return b;
                }
                var s = (function() {
                    function h() {
                        this.digestLength = e.digestLength, this.blockSize = e.blockSize, this.state = new Int32Array(8), this.temp = new Int32Array(64), this.buffer = new Uint8Array(128), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1, this.reset();
                    }
                    return h.prototype.reset = function() {
                        return this.state[0] = 1779033703, this.state[1] = 3144134277, this.state[2] = 1013904242, this.state[3] = 2773480762, this.state[4] = 1359893119, this.state[5] = 2600822924, this.state[6] = 528734635, this.state[7] = 1541459225, this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1, this;
                    }, h.prototype.clean = function() {
                        for(var l = 0; l < this.buffer.length; l++)this.buffer[l] = 0;
                        for(var l = 0; l < this.temp.length; l++)this.temp[l] = 0;
                        this.reset();
                    }, h.prototype.update = function(l, d) {
                        if (d === void 0 && (d = l.length), this.finished) throw new Error("SHA256: can't update because hash was finished.");
                        var b = 0;
                        if (this.bytesHashed += d, this.bufferLength > 0) {
                            for(; this.bufferLength < 64 && d > 0;)this.buffer[this.bufferLength++] = l[b++], d--;
                            this.bufferLength === 64 && (r(this.temp, this.state, this.buffer, 0, 64), this.bufferLength = 0);
                        }
                        for(d >= 64 && (b = r(this.temp, this.state, l, b, d), d %= 64); d > 0;)this.buffer[this.bufferLength++] = l[b++], d--;
                        return this;
                    }, h.prototype.finish = function(l) {
                        if (!this.finished) {
                            var d = this.bytesHashed, b = this.bufferLength, w = d / 536870912 | 0, O = d << 3, U = d % 64 < 56 ? 64 : 128;
                            this.buffer[b] = 128;
                            for(var S = b + 1; S < U - 8; S++)this.buffer[S] = 0;
                            this.buffer[U - 8] = w >>> 24 & 255, this.buffer[U - 7] = w >>> 16 & 255, this.buffer[U - 6] = w >>> 8 & 255, this.buffer[U - 5] = w >>> 0 & 255, this.buffer[U - 4] = O >>> 24 & 255, this.buffer[U - 3] = O >>> 16 & 255, this.buffer[U - 2] = O >>> 8 & 255, this.buffer[U - 1] = O >>> 0 & 255, r(this.temp, this.state, this.buffer, 0, U), this.finished = !0;
                        }
                        for(var S = 0; S < 8; S++)l[S * 4 + 0] = this.state[S] >>> 24 & 255, l[S * 4 + 1] = this.state[S] >>> 16 & 255, l[S * 4 + 2] = this.state[S] >>> 8 & 255, l[S * 4 + 3] = this.state[S] >>> 0 & 255;
                        return this;
                    }, h.prototype.digest = function() {
                        var l = new Uint8Array(this.digestLength);
                        return this.finish(l), l;
                    }, h.prototype._saveState = function(l) {
                        for(var d = 0; d < this.state.length; d++)l[d] = this.state[d];
                    }, h.prototype._restoreState = function(l, d) {
                        for(var b = 0; b < this.state.length; b++)this.state[b] = l[b];
                        this.bytesHashed = d, this.finished = !1, this.bufferLength = 0;
                    }, h;
                })();
                e.Hash = s;
                var i = (function() {
                    function h(l) {
                        this.inner = new s, this.outer = new s, this.blockSize = this.inner.blockSize, this.digestLength = this.inner.digestLength;
                        var d = new Uint8Array(this.blockSize);
                        if (l.length > this.blockSize) new s().update(l).finish(d).clean();
                        else for(var b = 0; b < l.length; b++)d[b] = l[b];
                        for(var b = 0; b < d.length; b++)d[b] ^= 54;
                        this.inner.update(d);
                        for(var b = 0; b < d.length; b++)d[b] ^= 106;
                        this.outer.update(d), this.istate = new Uint32Array(8), this.ostate = new Uint32Array(8), this.inner._saveState(this.istate), this.outer._saveState(this.ostate);
                        for(var b = 0; b < d.length; b++)d[b] = 0;
                    }
                    return h.prototype.reset = function() {
                        return this.inner._restoreState(this.istate, this.inner.blockSize), this.outer._restoreState(this.ostate, this.outer.blockSize), this;
                    }, h.prototype.clean = function() {
                        for(var l = 0; l < this.istate.length; l++)this.ostate[l] = this.istate[l] = 0;
                        this.inner.clean(), this.outer.clean();
                    }, h.prototype.update = function(l) {
                        return this.inner.update(l), this;
                    }, h.prototype.finish = function(l) {
                        return this.outer.finished ? this.outer.finish(l) : (this.inner.finish(l), this.outer.update(l, this.digestLength).finish(l)), this;
                    }, h.prototype.digest = function() {
                        var l = new Uint8Array(this.digestLength);
                        return this.finish(l), l;
                    }, h;
                })();
                e.HMAC = i;
                function o(h) {
                    var l = new s().update(h), d = l.digest();
                    return l.clean(), d;
                }
                e.hash = o, e.default = o;
                function a(h, l) {
                    var d = new i(h).update(l), b = d.digest();
                    return d.clean(), b;
                }
                e.hmac = a;
                function c(h, l, d, b) {
                    var w = b[0];
                    if (w === 0) throw new Error("hkdf: cannot expand more");
                    l.reset(), w > 1 && l.update(h), d && l.update(d), l.update(b), l.finish(h), b[0]++;
                }
                var u = new Uint8Array(e.digestLength);
                function g(h, l, d, b) {
                    l === void 0 && (l = u), b === void 0 && (b = 32);
                    for(var w = new Uint8Array([
                        1
                    ]), O = a(l, h), U = new i(O), S = new Uint8Array(U.digestLength), z = S.length, M = new Uint8Array(b), B = 0; B < b; B++)z === S.length && (c(S, U, d, w), z = 0), M[B] = S[z++];
                    return U.clean(), S.fill(0), w.fill(0), M;
                }
                e.hkdf = g;
                function f(h, l, d, b) {
                    for(var w = new i(h), O = w.digestLength, U = new Uint8Array(4), S = new Uint8Array(O), z = new Uint8Array(O), M = new Uint8Array(b), B = 0; B * O < b; B++){
                        var V = B + 1;
                        U[0] = V >>> 24 & 255, U[1] = V >>> 16 & 255, U[2] = V >>> 8 & 255, U[3] = V >>> 0 & 255, w.reset(), w.update(l), w.update(U), w.finish(z);
                        for(var F = 0; F < O; F++)S[F] = z[F];
                        for(var F = 2; F <= d; F++){
                            w.reset(), w.update(z).finish(z);
                            for(var C = 0; C < O; C++)S[C] ^= z[C];
                        }
                        for(var F = 0; F < O && B * O + F < b; F++)M[B * O + F] = S[F];
                    }
                    for(var B = 0; B < O; B++)S[B] = z[B] = 0;
                    for(var B = 0; B < 4; B++)U[B] = 0;
                    return w.clean(), M;
                }
                e.pbkdf2 = f;
            });
        })(Kt)), Kt.exports;
    }
    var hu = du();
    function Bi(t) {
        const e = hu.hash(t);
        return gu(e);
    }
    function lu(t) {
        const e = new TextEncoder, n = Ui(t.map((r)=>e.encode(r)));
        return Bi(n);
    }
    function gu(t) {
        return Array.from(t, (e)=>e.toString(16).padStart(2, "0")).join("");
    }
    class _u {
        #e = 0;
        #t = new Map;
        lastSavedHeads(e) {
            return new pu(e, ++this.#e, this.#t);
        }
    }
    class pu {
        #e;
        #t;
        #r;
        #n = null;
        constructor(e, n, r){
            this.#e = e, this.#t = n, this.#r = r;
        }
        get value() {
            return this.#r.get(this.#e)?.heads ?? null;
        }
        update(e) {
            if (this.#n && !hn(ye(e), ye(this.#n))) throw new Error("attempting to reuase a heads update with different heads");
            this.#n = e;
            const n = this.#r.get(this.#e)?.seq ?? 0;
            this.#t >= n && this.#r.set(this.#e, {
                heads: e,
                seq: this.#t
            });
        }
    }
    class yu extends Xe {
        #e;
        #t = new _u;
        #r = new Map;
        #n = !1;
        #i = Ye("automerge-repo:storage-subsystem");
        constructor(e){
            super(), this.#e = e;
        }
        async id() {
            const e = await this.#e.load([
                "storage-adapter-id"
            ]);
            let n;
            return e ? n = new TextDecoder().decode(e) : (n = pi(), await this.#e.save([
                "storage-adapter-id"
            ], new TextEncoder().encode(n))), n;
        }
        async load(e, n) {
            const r = [
                e,
                n
            ];
            return await this.#e.load(r);
        }
        async save(e, n, r) {
            const s = [
                e,
                n
            ];
            await this.#e.save(s, r);
        }
        async remove(e, n) {
            const r = [
                e,
                n
            ];
            await this.#e.remove(r);
        }
        async loadDocData(e) {
            const n = await this.#e.loadRange([
                e,
                "snapshot"
            ]), r = await this.#e.loadRange([
                e,
                "incremental"
            ]), s = [], i = [];
            for (const o of n)o.data !== void 0 && (i.push({
                key: o.key,
                type: "snapshot",
                size: o.data.length
            }), s.push(o.data));
            for (const o of r)o.data !== void 0 && (i.push({
                key: o.key,
                type: "incremental",
                size: o.data.length
            }), s.push(o.data));
            return this.#r.set(e, i), s.length === 0 ? null : Ui(s);
        }
        async loadDoc(e) {
            const n = this.#t.lastSavedHeads(e), r = await this.loadDocData(e);
            if (!r) return null;
            const s = performance.now(), i = or(Ae(), r), o = performance.now();
            return this.emit("document-loaded", {
                documentId: e,
                durationMillis: o - s,
                ...ar(i)
            }), n.update(we(i)), i;
        }
        async saveDoc(e, n) {
            if (!this.#c(e, n)) return;
            const r = this.#r.get(e) ?? [];
            this.#s(r) ? await this.#a(e, n, r) : await this.#o(e, n);
        }
        async removeDoc(e) {
            await this.#e.removeRange([
                e,
                "snapshot"
            ]), await this.#e.removeRange([
                e,
                "incremental"
            ]), await this.#e.removeRange([
                e,
                "sync-state"
            ]);
        }
        async #o(e, n) {
            const r = this.#t.lastSavedHeads(e), s = r.value;
            if (!s || s.length === 0) {
                await this.#a(e, n, this.#r.get(e) ?? []);
                return;
            }
            const i = performance.now(), o = go(n, s), a = performance.now();
            if (this.emit("doc-saved", {
                documentId: e,
                durationMillis: a - i,
                sinceHeads: s,
                savedHeads: we(n)
            }), o && o.length > 0) {
                const c = [
                    e,
                    "incremental",
                    Bi(o)
                ];
                this.#i(`Saving incremental ${c} for document ${e}`), await this.#e.save(c, o), this.#r.has(e) || this.#r.set(e, []), this.#r.get(e).push({
                    key: c,
                    type: "incremental",
                    size: o.length
                }), r.update(we(n));
            } else return Promise.resolve();
        }
        async #a(e, n, r) {
            this.#n = !0;
            const s = this.#t.lastSavedHeads(e), i = performance.now(), o = $s(n), a = performance.now();
            this.emit("doc-compacted", {
                documentId: e,
                durationMillis: a - i,
                savedHeads: we(n)
            });
            const c = lu(we(n)), u = [
                e,
                "snapshot",
                c
            ], g = new Set(r.map((h)=>h.key).filter((h)=>h[2] !== c));
            this.#i(`Saving snapshot ${u} for document ${e}`), this.#i(`deleting old chunks ${Array.from(g)}`), await this.#e.save(u, o);
            for (const h of g)await this.#e.remove(h);
            const f = this.#r.get(e)?.filter((h)=>!g.has(h.key)) ?? [];
            f.push({
                key: u,
                type: "snapshot",
                size: o.length
            }), this.#r.set(e, f), s.update(we(n)), this.#n = !1;
        }
        async loadSyncState(e, n) {
            const r = [
                e,
                "sync-state",
                n
            ];
            try {
                const s = await this.#e.load(r);
                return s ? zs(s) : void 0;
            } catch  {
                this.#i(`Error loading sync state for ${e} from ${n}`);
                return;
            }
        }
        async saveSyncState(e, n, r) {
            const s = [
                e,
                "sync-state",
                n
            ];
            await this.#e.save(s, Vs(r));
        }
        #c(e, n) {
            const r = this.#t.lastSavedHeads(e).value;
            if (!r) return !0;
            const s = we(n);
            return !hn(ye(s), ye(r));
        }
        #s(e) {
            if (this.#n) return !1;
            let n = 0, r = 0;
            for (const s of e)s.type === "snapshot" ? n += s.size : r += s.size;
            return n < 1024 || r >= n;
        }
    }
    class ji extends Xe {
    }
    class bu extends ji {
        #e;
        syncDebounceRate = 100;
        #t = [];
        #r = {};
        #n = {};
        #i = {};
        #o = [];
        #a;
        #c = !1;
        #s;
        #g;
        constructor({ handle: e, peerId: n, onLoadSyncState: r }){
            super(), this.#a = n, this.#s = e, this.#g = r ?? (()=>Promise.resolve(void 0));
            const s = e.documentId.slice(0, 5);
            this.#e = Ye(`automerge-repo:docsync:${s}`), e.on("change", Qn(()=>this.#f(), this.syncDebounceRate)), e.on("ephemeral-message-outbound", (i)=>this.#u(i)), (async ()=>this.#w())();
        }
        get peerStates() {
            return this.#n;
        }
        get documentId() {
            return this.#s.documentId;
        }
        async #f() {
            try {
                await this.#s.whenReady();
                const e = this.#s.doc();
                this.#t.forEach((n)=>this.#b(n, e));
            } catch  {
                console.log("sync with peers threw an exception");
            }
        }
        async #u({ data: e }) {
            this.#e("broadcastToPeers", this.#t), this.#t.forEach((n)=>this.#d(n, e));
        }
        #d(e, n) {
            this.#e(`sendEphemeralMessage ->${e}`);
            const r = {
                type: "ephemeral",
                targetId: e,
                documentId: this.#s.documentId,
                data: n
            };
            this.emit("message", r);
        }
        #_(e, n) {
            this.#h(e), e in this.#n || (this.#n[e] = "unknown");
            const r = this.#i[e];
            if (r) {
                n(r);
                return;
            }
            let s = this.#r[e];
            s || (this.#g(e).then((i)=>{
                this.#p(e, i ?? ho());
            }).catch((i)=>{
                this.#e(`Error loading sync state for ${e}: ${i}`);
            }), s = this.#r[e] = []), s.push(n);
        }
        #h(e) {
            this.#t.includes(e) || (this.#t.push(e), this.emit("open-doc", {
                documentId: this.documentId,
                peerId: e
            }));
        }
        #p(e, n) {
            const r = this.#r[e];
            if (r) for (const s of r)s(n);
            delete this.#r[e], this.#i[e] = n;
        }
        #l(e, n) {
            this.#i[e] = n, this.emit("sync-state", {
                peerId: e,
                syncState: n,
                documentId: this.#s.documentId
            });
        }
        #b(e, n) {
            this.#e(`sendSyncMessage ->${e}`), this.#_(e, (r)=>{
                const s = performance.now(), [i, o] = uo(n, r), a = performance.now();
                if (this.emit("metrics", {
                    type: "generate-sync-message",
                    documentId: this.#s.documentId,
                    durationMillis: a - s,
                    forPeer: e
                }), this.#l(e, i), o) {
                    const c = we(n).length === 0;
                    !this.#s.isReady() && c && i.sharedHeads.length === 0 && !Object.values(this.#n).includes("has") && this.#n[e] === "unknown" ? this.emit("message", {
                        type: "request",
                        targetId: e,
                        documentId: this.#s.documentId,
                        data: o
                    }) : this.emit("message", {
                        type: "sync",
                        targetId: e,
                        data: o,
                        documentId: this.#s.documentId
                    }), c || (this.#n[e] = "has");
                }
            });
        }
        hasPeer(e) {
            return this.#t.includes(e);
        }
        async beginSync(e) {
            this.#s.whenReady([
                Me,
                Pt,
                pe
            ]).then(()=>{
                this.#c = !0, this.#y();
            }).catch((r)=>{
                console.log("caught whenready", r), this.#c = !0, this.#y();
            }), this.#t.some((r)=>this.#n[r] == "has") && await this.#s.whenReady(), e.forEach((r)=>{
                this.#_(r, (s)=>{
                    const i = zs(Vs(s));
                    this.#l(r, i), this.#s.whenReady([
                        Me,
                        Pt,
                        pe
                    ]).then(()=>{
                        const o = this.#s.isReady() ? this.#s.doc() : Ae(), a = e.every((u)=>this.#n[u] in [
                                "unavailable",
                                "wants"
                            ]);
                        o === void 0 && a || this.#b(r, o ?? Ae());
                    }).catch((o)=>{
                        this.#e(`Error loading doc for ${r}: ${o}`);
                    });
                });
            });
        }
        endSync(e) {
            this.#e(`removing peer ${e}`), this.#t = this.#t.filter((n)=>n !== e), delete this.#n[e], this.#y();
        }
        receiveMessage(e) {
            switch(e.type){
                case "sync":
                case "request":
                    this.receiveSyncMessage(e);
                    break;
                case "ephemeral":
                    this.receiveEphemeralMessage(e);
                    break;
                case "doc-unavailable":
                    this.#n[e.senderId] = "unavailable", this.#y();
                    break;
                default:
                    throw new Error(`unknown message type: ${e}`);
            }
        }
        receiveEphemeralMessage(e) {
            if (e.documentId !== this.#s.documentId) throw new Error("channelId doesn't match documentId");
            const { senderId: n, data: r } = e, s = wc(new Uint8Array(r));
            this.#s.emit("ephemeral-message", {
                handle: this.#s,
                senderId: n,
                message: s
            }), this.#t.forEach((i)=>{
                i !== n && this.emit("message", {
                    ...e,
                    targetId: i
                });
            });
        }
        receiveSyncMessage(e) {
            if (e.documentId !== this.#s.documentId) throw new Error("channelId doesn't match documentId");
            if (!this.#s.inState([
                Me,
                Pt,
                pe
            ])) {
                this.#o.push({
                    message: e,
                    received: new Date
                });
                return;
            }
            this.#w(), this.#m(e);
        }
        #m(e) {
            Mi(e) && (this.#n[e.senderId] = "wants"), this.#y(), lo(e.data).heads.length > 0 && (this.#n[e.senderId] = "has"), this.#_(e.senderId, (n)=>{
                this.#s.update((r)=>{
                    const s = performance.now(), [i, o] = fo(r, n, e.data), a = performance.now();
                    return this.emit("metrics", {
                        type: "receive-sync-message",
                        documentId: this.#s.documentId,
                        durationMillis: a - s,
                        fromPeer: e.senderId,
                        ...ar(r)
                    }), this.#l(e.senderId, o), this.#b(e.senderId, r), i;
                }), this.#y();
            });
        }
        #y() {
            this.#c && this.#s.inState([
                Pt,
                pe
            ]) && this.#t.every((e)=>this.#n[e] === "unavailable" || this.#n[e] === "wants") && (this.#t.filter((e)=>this.#n[e] === "wants").forEach((e)=>{
                this.#n[e] = "unavailable";
                const n = {
                    type: "doc-unavailable",
                    documentId: this.#s.documentId,
                    targetId: e
                };
                this.emit("message", n);
            }), this.#s.unavailable());
        }
        #w() {
            for (const e of this.#o)this.#m(e.message);
            this.#o = [];
        }
        metrics() {
            return {
                peers: this.#t,
                size: this.#s.metrics()
            };
        }
    }
    const Pe = Ye("automerge-repo:collectionsync");
    class mu extends ji {
        repo;
        #e = new Set;
        docSynchronizers = {};
        #t = {};
        #r;
        #n = new Map;
        constructor(e, n = []){
            super(), this.repo = e, this.#r = n.map((r)=>at(r).documentId);
        }
        #i(e) {
            return this.docSynchronizers[e.documentId] || (this.docSynchronizers[e.documentId] = this.#o(e)), this.docSynchronizers[e.documentId];
        }
        #o(e) {
            const n = new bu({
                handle: e,
                peerId: this.repo.networkSubsystem.peerId,
                onLoadSyncState: async (r)=>{
                    if (!this.repo.storageSubsystem) return;
                    const { storageId: s, isEphemeral: i } = this.repo.peerMetadataByPeerId[r] || {};
                    if (!(!s || i)) return this.repo.storageSubsystem.loadSyncState(e.documentId, s);
                }
            });
            return n.on("message", (r)=>this.emit("message", r)), n.on("open-doc", (r)=>this.emit("open-doc", r)), n.on("sync-state", (r)=>this.emit("sync-state", r)), n.on("metrics", (r)=>this.emit("metrics", r)), n;
        }
        async #a(e) {
            const n = Array.from(this.#e), r = [];
            for (const s of n)await this.#c(s, e) && r.push(s);
            return r;
        }
        async receiveMessage(e) {
            Pe(`onSyncMessage: ${e.senderId}, ${e.documentId}, ${"data" in e ? e.data.byteLength + "bytes" : ""}`);
            const n = e.documentId;
            if (!n) throw new Error("received a message with an invalid documentId");
            if (this.#r.includes(n)) {
                this.emit("metrics", {
                    type: "doc-denied",
                    documentId: n
                }), this.emit("message", {
                    type: "doc-unavailable",
                    documentId: n,
                    targetId: e.senderId
                });
                return;
            }
            if ((e.type === "request" || e.type === "sync") && (this.#n.has(n) || this.#n.set(n, new Set), this.#n.get(n)?.add(e.senderId)), !await this.repo.shareConfig.access(e.senderId, n)) {
                Pe("access denied"), this.emit("message", {
                    type: "doc-unavailable",
                    documentId: n,
                    targetId: e.senderId
                });
                return;
            }
            this.#t[n] = !0;
            const s = await this.repo.find(n, {
                allowableStates: [
                    "ready",
                    "unavailable",
                    "requesting"
                ]
            }), i = this.#i(s);
            i.receiveMessage(e);
            const o = await this.#a(n);
            i.beginSync(o.filter((a)=>!i.hasPeer(a)));
        }
        addDocument(e) {
            if (this.#t[e.documentId]) return;
            this.#t[e.documentId] = !0;
            const n = this.#i(e);
            this.#a(e.documentId).then((r)=>{
                n.beginSync(r);
            });
        }
        removeDocument(e) {
            Pe(`removing document ${e}`);
            const n = this.docSynchronizers[e];
            n !== void 0 && this.peers.forEach((r)=>n.endSync(r)), delete this.docSynchronizers[e], delete this.#t[e];
        }
        addPeer(e) {
            if (Pe(`adding ${e} & synchronizing with them`), !this.#e.has(e)) {
                this.#e.add(e);
                for (const n of Object.values(this.docSynchronizers)){
                    const { documentId: r } = n;
                    this.#c(e, r).then((s)=>{
                        s && n.beginSync([
                            e
                        ]);
                    });
                }
            }
        }
        removePeer(e) {
            Pe(`removing peer ${e}`), this.#e.delete(e);
            for (const n of this.#n.values())n.delete(e);
            for (const n of Object.values(this.docSynchronizers))n.endSync(e);
        }
        get peers() {
            return Array.from(this.#e);
        }
        async reevaluateDocumentShare() {
            const e = Array.from(this.#e), n = [];
            for (const r of Object.values(this.docSynchronizers)){
                const s = r.documentId;
                n.push((async ()=>{
                    for (const i of e){
                        const o = await this.#c(i, s), a = r.hasPeer(i);
                        Pe(`reevaluateDocumentShare: ${i} for ${s}, shouldShare: ${o}, isAlreadySyncing: ${a}`), o && !a ? (Pe(`reevaluateDocumentShare: starting sync with ${i} for ${s}`), r.beginSync([
                            i
                        ])) : !o && a && (Pe(`reevaluateDocumentShare: stopping sync with ${i} for ${s}`), r.endSync(i));
                    }
                })().catch((i)=>{
                    console.log(`error reevaluating document share for ${s}: ${i}`);
                }));
            }
            await Promise.allSettled(n);
        }
        metrics() {
            return Object.fromEntries(Object.entries(this.docSynchronizers).map(([e, n])=>[
                    e,
                    n.metrics()
                ]));
        }
        async #c(e, n) {
            const [r, s] = await Promise.all([
                this.repo.shareConfig.announce(e, n),
                this.repo.shareConfig.access(e, n)
            ]), i = this.#n.get(n)?.has(e) ?? !1;
            return r || s && i;
        }
    }
    function wu() {
        return "peer-" + Math.random().toString(36).slice(4);
    }
    class xu extends Xe {
        #e;
        networkSubsystem;
        storageSubsystem;
        #t;
        #r;
        #n = {};
        synchronizer;
        #i = {
            announce: async ()=>!0,
            access: async ()=>!0
        };
        peerMetadataByPeerId = {};
        #o = new nu;
        #a = !1;
        #c = {};
        #s = {};
        #g;
        constructor({ storage: e, network: n = [], peerId: r = wu(), sharePolicy: s, shareConfig: i, isEphemeral: o = e === void 0, enableRemoteHeadsGossiping: a = !1, denylist: c = [], saveDebounceRate: u = 100, idFactory: g } = {}){
            if (super(), this.#a = a, this.#e = Ye("automerge-repo:repo"), this.#g = g || null, s != null && i != null) throw new Error("cannot provide both sharePolicy and shareConfig at once");
            s && (this.#i = {
                announce: s,
                access: async ()=>!0
            }), i && (this.#i = i), this.on("delete-document", ({ documentId: d })=>{
                this.synchronizer.removeDocument(d), f && f.removeDoc(d).catch((b)=>{
                    this.#e("error deleting document", {
                        documentId: d,
                        err: b
                    });
                });
            }), this.synchronizer = new mu(this, c), this.synchronizer.on("message", (d)=>{
                this.#e(`sending ${d.type} message to ${d.targetId}`), l.send(d);
            }), this.synchronizer.on("metrics", (d)=>this.emit("doc-metrics", d)), this.#a && this.synchronizer.on("open-doc", ({ peerId: d, documentId: b })=>{
                this.#o.subscribePeerToDoc(d, b);
            });
            const f = e ? new yu(e) : void 0;
            f && (f.on("document-loaded", (d)=>this.emit("doc-metrics", {
                    type: "doc-loaded",
                    ...d
                })), f.on("doc-compacted", (d)=>this.emit("doc-metrics", {
                    type: "doc-compacted",
                    ...d
                })), f.on("doc-saved", (d)=>this.emit("doc-metrics", {
                    type: "doc-saved",
                    ...d
                }))), this.storageSubsystem = f, this.#t = u, this.storageSubsystem ? this.#r = ({ handle: d, doc: b })=>{
                let w = this.#s[d.documentId];
                w || (w = Qn(({ doc: O, handle: U })=>{
                    this.storageSubsystem.saveDoc(U.documentId, O);
                }, this.#t), this.#s[d.documentId] = w), w({
                    handle: d,
                    doc: b
                });
            } : this.#r = ()=>{};
            const h = (async ()=>({
                    storageId: await f?.id(),
                    isEphemeral: o
                }))(), l = new uu(n, r, h);
            this.networkSubsystem = l, l.on("peer", async ({ peerId: d, peerMetadata: b })=>{
                this.#e("peer connected", {
                    peerId: d
                }), b && (this.peerMetadataByPeerId[d] = {
                    ...b
                }), this.#i.announce(d).then((w)=>{
                    w && this.#a && this.#o.addGenerousPeer(d);
                }).catch((w)=>{
                    console.log("error in share policy", {
                        err: w
                    });
                }), this.synchronizer.addPeer(d);
            }), l.on("peer-disconnected", ({ peerId: d })=>{
                this.synchronizer.removePeer(d), this.#o.removePeer(d);
            }), l.on("message", async (d)=>{
                this.#u(d);
            }), this.synchronizer.on("sync-state", (d)=>{
                this.#_(d);
                const b = this.#n[d.documentId], { storageId: w } = this.peerMetadataByPeerId[d.peerId] || {};
                if (!w) return;
                const O = b.getSyncInfo(w)?.lastHeads;
                d.syncState.theirHeads && (!O || !hn(O, ye(d.syncState.theirHeads))) && d.syncState.theirHeads && (b.setSyncInfo(w, {
                    lastHeads: ye(d.syncState.theirHeads),
                    lastSyncTimestamp: Date.now()
                }), w && this.#a && this.#o.handleImmediateRemoteHeadsChanged(d.documentId, w, ye(d.syncState.theirHeads)));
            }), this.#a && (this.#o.on("notify-remote-heads", (d)=>{
                this.networkSubsystem.send({
                    type: "remote-heads-changed",
                    targetId: d.targetId,
                    documentId: d.documentId,
                    newHeads: {
                        [d.storageId]: {
                            heads: d.heads,
                            timestamp: d.timestamp
                        }
                    }
                });
            }), this.#o.on("change-remote-subs", (d)=>{
                this.#e("change-remote-subs", d);
                for (const b of d.peers)this.networkSubsystem.send({
                    type: "remote-subscription-change",
                    targetId: b,
                    add: d.add,
                    remove: d.remove
                });
            }), this.#o.on("remote-heads-changed", ({ documentId: d, storageId: b, remoteHeads: w, timestamp: O })=>{
                this.#n[d].setSyncInfo(b, {
                    lastHeads: w,
                    lastSyncTimestamp: O
                });
            }));
        }
        #f(e) {
            this.storageSubsystem && (e.listeners("heads-changed").some((r)=>r === this.#r) || e.on("heads-changed", this.#r)), this.synchronizer.addDocument(e);
        }
        #u(e) {
            switch(e.type){
                case "remote-subscription-change":
                    this.#a && this.#o.handleControlMessage(e);
                    break;
                case "remote-heads-changed":
                    this.#a && this.#o.handleRemoteHeads(e);
                    break;
                case "sync":
                case "request":
                case "ephemeral":
                case "doc-unavailable":
                    this.synchronizer.receiveMessage(e).catch((n)=>{
                        console.log("error receiving message", {
                            err: n,
                            message: e
                        });
                    });
            }
        }
        #d = {};
        #_(e) {
            if (!this.storageSubsystem) return;
            const { storageId: n, isEphemeral: r } = this.peerMetadataByPeerId[e.peerId] || {};
            if (!n || r) return;
            let s = this.#d[n];
            s || (s = this.#d[n] = Qn(({ documentId: i, syncState: o })=>{
                this.storageSubsystem.saveSyncState(i, n, o);
            }, this.#t)), s(e);
        }
        #h({ documentId: e }) {
            if (this.#n[e]) return this.#n[e];
            if (!e) throw new Error(`Invalid documentId ${e}`);
            const n = new sn(e);
            return this.#n[e] = n, n;
        }
        get handles() {
            return this.#n;
        }
        get peers() {
            return this.synchronizer.peers;
        }
        get peerId() {
            return this.networkSubsystem.peerId;
        }
        get sharePolicy() {
            return this.#i.announce;
        }
        set sharePolicy(e) {
            this.#i.announce = e;
        }
        get shareConfig() {
            return this.#i;
        }
        set shareConfig(e) {
            this.#i = e;
        }
        getStorageIdOfPeer(e) {
            return this.peerMetadataByPeerId[e]?.storageId;
        }
        create(e) {
            let n;
            e ? n = Rr(e) : n = Hr(Ae());
            const { documentId: r } = at(is()), s = this.#h({
                documentId: r
            });
            return this.#f(s), s.update(()=>n), s.doneLoading(), s;
        }
        async create2(e) {
            let n;
            e ? n = Rr(e) : n = Hr(Ae());
            let { documentId: r } = at(is());
            if (this.#g) {
                const i = await this.#g(we(n));
                r = vt(i);
            }
            const s = this.#h({
                documentId: r
            });
            return this.#f(s), s.update(()=>n), s.doneLoading(), s;
        }
        clone(e) {
            if (!e.isReady()) throw new Error(`Cloned handle is not yet in ready state.
        (Try await handle.whenReady() first.)`);
            const n = e.doc(), r = this.create();
            return r.update(()=>Yt(n)), r;
        }
        findWithProgress(e, n = {}) {
            const { signal: r } = n, { documentId: s, heads: i } = wr(e) ? at(e) : {
                documentId: Ut(e),
                heads: void 0
            };
            if (this.#n[s]) {
                const f = this.#n[s];
                if (f.state === pe) return {
                    state: "unavailable",
                    error: new Error(`Document ${e} is unavailable`),
                    handle: f
                };
                if (f.state === Lt) return {
                    state: "failed",
                    error: new Error(`Document ${e} was deleted`),
                    handle: f
                };
                if (f.state === Me) return {
                    state: "ready",
                    handle: i ? f.view(i) : f
                };
            }
            const o = this.#c[s];
            if (o) {
                const f = this.#n[s];
                if (f && (f.state === Me || f.state === pe || f.state === Lt || f.state === "loading")) return o;
            }
            const a = this.#h({
                documentId: s
            }), c = {
                state: "loading",
                progress: 0,
                handle: a
            }, u = {
                subscribers: new Set,
                currentProgress: void 0,
                notify: (f)=>{
                    u.currentProgress = f, u.subscribers.forEach((h)=>h(f)), this.#c[s] = f;
                },
                peek: ()=>u.currentProgress || c,
                subscribe: (f)=>(u.subscribers.add(f), ()=>u.subscribers.delete(f))
            };
            u.notify(c), this.#p(e, s, a, u, r ? ys(new Promise(()=>{}), r) : new Promise(()=>{}));
            const g = {
                ...c,
                peek: u.peek,
                subscribe: u.subscribe
            };
            return this.#c[s] = g, g;
        }
        async #p(e, n, r, s, i) {
            try {
                s.notify({
                    state: "loading",
                    progress: 25,
                    handle: r
                });
                const o = await (this.storageSubsystem ? this.storageSubsystem.loadDoc(r.documentId) : Promise.resolve(null)), a = await Promise.race([
                    o,
                    i
                ]);
                if (a ? (r.update(()=>a), r.doneLoading(), s.notify({
                    state: "loading",
                    progress: 50,
                    handle: r
                })) : (await Promise.race([
                    this.networkSubsystem.whenReady(),
                    i
                ]), r.request(), s.notify({
                    state: "loading",
                    progress: 75,
                    handle: r
                })), this.#f(r), await Promise.race([
                    r.whenReady([
                        Me,
                        pe
                    ]),
                    i
                ]), r.state === pe) {
                    const c = {
                        state: "unavailable",
                        handle: r
                    };
                    s.notify(c);
                    return;
                }
                if (r.state === Lt) throw new Error(`Document ${e} was deleted`);
                s.notify({
                    state: "ready",
                    handle: r
                });
            } catch (o) {
                s.notify({
                    state: "failed",
                    error: o instanceof Error || o instanceof DOMException ? o : new Error(String(o)),
                    handle: this.#h({
                        documentId: n
                    })
                });
            }
        }
        async find(e, n = {}) {
            const { allowableStates: r = [
                "ready"
            ], signal: s } = n;
            if (s?.aborted) throw new ln;
            const i = this.findWithProgress(e, {
                signal: s
            });
            if ("subscribe" in i) return this.#f(i.handle), new Promise((o, a)=>{
                const c = i.subscribe((u)=>{
                    r.includes(u.handle.state) ? (c(), o(u.handle)) : u.state === "unavailable" ? (c(), a(new Error(`Document ${e} is unavailable`))) : u.state === "failed" && (c(), a(u.error));
                });
            });
            if (i.handle.state === Me) return i.handle;
            if (await i.handle.whenReady([
                Me,
                pe
            ]), i.handle.state === "unavailable" && !r.includes(pe)) throw new Error(`Document ${e} is unavailable`);
            return i.handle;
        }
        async #l(e) {
            if (this.#n[e]) return this.#n[e];
            const n = this.#h({
                documentId: e
            }), r = await (this.storageSubsystem ? this.storageSubsystem.loadDoc(n.documentId) : Promise.resolve(null));
            return r ? (n.update(()=>r), n.doneLoading()) : (await this.networkSubsystem.whenReady(), n.request()), this.#f(n), n;
        }
        async findClassic(e, n = {}) {
            const r = Ut(e), { allowableStates: s, signal: i } = n;
            return ys((async ()=>{
                const o = await this.#l(r);
                if (!s && (await o.whenReady([
                    Me,
                    pe
                ]), o.state === pe && !i?.aborted)) throw new Error(`Document ${e} is unavailable`);
                return o;
            })(), i);
        }
        delete(e) {
            const n = Ut(e);
            this.#h({
                documentId: n
            }).delete(), delete this.#n[n], delete this.#c[n], delete this.#s[n], this.emit("delete-document", {
                documentId: n
            });
        }
        async export(e) {
            const n = Ut(e), s = (await this.find(n)).doc();
            return $s(s);
        }
        import(e, n) {
            const r = n?.docId;
            if (r != null) {
                const s = this.#h({
                    documentId: r
                });
                return s.update((i)=>or(i, e)), this.#f(s), s;
            } else {
                const s = ao(e), i = this.create();
                return i.update(()=>Yt(s)), i;
            }
        }
        subscribeToRemotes = (e)=>{
            this.#a ? (this.#e("subscribeToRemotes", {
                remotes: e
            }), this.#o.subscribeToRemotes(e)) : this.#e("WARN: subscribeToRemotes called but remote heads gossiping is not enabled");
        };
        storageId = async ()=>{
            if (this.storageSubsystem) return this.storageSubsystem.id();
        };
        async flush(e) {
            if (!this.storageSubsystem) return;
            const n = e ? e.map((r)=>this.#n[r]) : Object.values(this.#n);
            await Promise.all(n.map(async (r)=>this.storageSubsystem.saveDoc(r.documentId, r.doc())));
        }
        async removeFromCache(e) {
            if (!this.#n[e]) {
                this.#e(`WARN: removeFromCache called but handle not found in handleCache for documentId: ${e}`);
                return;
            }
            const n = this.#h({
                documentId: e
            });
            await n.whenReady([
                Me,
                Jc,
                Lt,
                pe
            ]), n.doc() ? (n.isReady() ? n.unload() : this.#e(`WARN: removeFromCache called but handle for documentId: ${e} in unexpected state: ${n.state}`), delete this.#n[e], delete this.#c[e], delete this.#s[e], this.synchronizer.removeDocument(e)) : this.#e(`WARN: removeFromCache called but doc undefined for documentId: ${e}`);
        }
        shutdown() {
            return this.networkSubsystem.adapters.forEach((e)=>{
                e.disconnect();
            }), this.flush();
        }
        metrics() {
            return {
                documents: this.synchronizer.metrics()
            };
        }
        shareConfigChanged() {
            this.synchronizer.reevaluateDocumentShare();
        }
    }
    class Su extends Xe {
        peerId;
        peerMetadata;
    }
    const vu = "/_astro/automerge_wasm_bg.DMAqNsnC.wasm", Au = async (t = {}, e)=>{
        let n;
        if (e.startsWith("data:")) {
            const r = e.replace(/^data:.*?base64,/, "");
            let s;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") s = Buffer.from(r, "base64");
            else if (typeof atob == "function") {
                const i = atob(r);
                s = new Uint8Array(i.length);
                for(let o = 0; o < i.length; o++)s[o] = i.charCodeAt(o);
            } else throw new Error("Cannot decode base64-encoded data URL");
            n = await WebAssembly.instantiate(s, t);
        } else {
            const r = await fetch(e), s = r.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && s.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(r, t);
            else {
                const i = await r.arrayBuffer();
                n = await WebAssembly.instantiate(i, t);
            }
        }
        return n.instance.exports;
    };
    class ve {
        static __wrap(e) {
            e = e >>> 0;
            const n = Object.create(ve.prototype);
            return n.__wbg_ptr = e, Es.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Es.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            x.__wbg_automerge_free(e, 0);
        }
        applyAndReturnPatches(e, n) {
            const r = x.automerge_applyAndReturnPatches(this.__wbg_ptr, e, n);
            if (r[2]) throw R(r[1]);
            return R(r[0]);
        }
        applyChanges(e) {
            const n = x.automerge_applyChanges(this.__wbg_ptr, e);
            if (n[1]) throw R(n[0]);
        }
        applyPatches(e, n) {
            const r = x.automerge_applyPatches(this.__wbg_ptr, e, n);
            if (r[2]) throw R(r[1]);
            return R(r[0]);
        }
        clone(e) {
            var n = fe(e) ? 0 : He(e, x.__wbindgen_malloc, x.__wbindgen_realloc), r = be;
            const s = x.automerge_clone(this.__wbg_ptr, n, r);
            if (s[2]) throw R(s[1]);
            return ve.__wrap(s[0]);
        }
        commit(e, n) {
            var r = fe(e) ? 0 : He(e, x.__wbindgen_malloc, x.__wbindgen_realloc), s = be;
            return x.automerge_commit(this.__wbg_ptr, r, s, !fe(n), fe(n) ? 0 : n);
        }
        delete(e, n) {
            const r = x.automerge_delete(this.__wbg_ptr, e, n);
            if (r[1]) throw R(r[0]);
        }
        diff(e, n) {
            const r = x.automerge_diff(this.__wbg_ptr, e, n);
            if (r[2]) throw R(r[1]);
            return R(r[0]);
        }
        diffIncremental() {
            const e = x.automerge_diffIncremental(this.__wbg_ptr);
            if (e[2]) throw R(e[1]);
            return R(e[0]);
        }
        diffPath(e, n, r, s) {
            const i = x.automerge_diffPath(this.__wbg_ptr, e, n, r, s);
            if (i[2]) throw R(i[1]);
            return R(i[0]);
        }
        dump() {
            x.automerge_dump(this.__wbg_ptr);
        }
        emptyChange(e, n) {
            var r = fe(e) ? 0 : He(e, x.__wbindgen_malloc, x.__wbindgen_realloc), s = be;
            return x.automerge_emptyChange(this.__wbg_ptr, r, s, !fe(n), fe(n) ? 0 : n);
        }
        enableFreeze(e) {
            const n = x.automerge_enableFreeze(this.__wbg_ptr, e);
            if (n[2]) throw R(n[1]);
            return n[0] !== 0;
        }
        fork(e, n) {
            var r = fe(e) ? 0 : He(e, x.__wbindgen_malloc, x.__wbindgen_realloc), s = be;
            const i = x.automerge_fork(this.__wbg_ptr, r, s, n);
            if (i[2]) throw R(i[1]);
            return ve.__wrap(i[0]);
        }
        generateSyncMessage(e) {
            return Ne(e, he), x.automerge_generateSyncMessage(this.__wbg_ptr, e.__wbg_ptr);
        }
        get(e, n, r) {
            const s = x.automerge_get(this.__wbg_ptr, e, n, r);
            if (s[2]) throw R(s[1]);
            return R(s[0]);
        }
        getActorId() {
            let e, n;
            try {
                const r = x.automerge_getActorId(this.__wbg_ptr);
                return e = r[0], n = r[1], Ee(r[0], r[1]);
            } finally{
                x.__wbindgen_free(e, n, 1);
            }
        }
        getAll(e, n, r) {
            const s = x.automerge_getAll(this.__wbg_ptr, e, n, r);
            if (s[2]) throw R(s[1]);
            return R(s[0]);
        }
        getBlock(e, n, r) {
            const s = x.automerge_getBlock(this.__wbg_ptr, e, n, r);
            if (s[2]) throw R(s[1]);
            return R(s[0]);
        }
        getChangeByHash(e) {
            const n = x.automerge_getChangeByHash(this.__wbg_ptr, e);
            if (n[2]) throw R(n[1]);
            return R(n[0]);
        }
        getChangeMetaByHash(e) {
            const n = x.automerge_getChangeMetaByHash(this.__wbg_ptr, e);
            if (n[2]) throw R(n[1]);
            return R(n[0]);
        }
        getChanges(e) {
            const n = x.automerge_getChanges(this.__wbg_ptr, e);
            if (n[2]) throw R(n[1]);
            return R(n[0]);
        }
        getChangesAdded(e) {
            return Ne(e, ve), x.automerge_getChangesAdded(this.__wbg_ptr, e.__wbg_ptr);
        }
        getChangesMeta(e) {
            const n = x.automerge_getChangesMeta(this.__wbg_ptr, e);
            if (n[2]) throw R(n[1]);
            return R(n[0]);
        }
        getCursor(e, n, r, s) {
            let i, o;
            try {
                const u = x.automerge_getCursor(this.__wbg_ptr, e, n, r, s);
                var a = u[0], c = u[1];
                if (u[3]) throw a = 0, c = 0, R(u[2]);
                return i = a, o = c, Ee(a, c);
            } finally{
                x.__wbindgen_free(i, o, 1);
            }
        }
        getCursorPosition(e, n, r) {
            const s = x.automerge_getCursorPosition(this.__wbg_ptr, e, n, r);
            if (s[2]) throw R(s[1]);
            return s[0];
        }
        getDecodedChangeByHash(e) {
            const n = x.automerge_getDecodedChangeByHash(this.__wbg_ptr, e);
            if (n[2]) throw R(n[1]);
            return R(n[0]);
        }
        getHeads() {
            return x.automerge_getHeads(this.__wbg_ptr);
        }
        getLastLocalChange() {
            return x.automerge_getLastLocalChange(this.__wbg_ptr);
        }
        getMissingDeps(e) {
            const n = x.automerge_getMissingDeps(this.__wbg_ptr, e);
            if (n[2]) throw R(n[1]);
            return R(n[0]);
        }
        getWithType(e, n, r) {
            const s = x.automerge_getWithType(this.__wbg_ptr, e, n, r);
            if (s[2]) throw R(s[1]);
            return R(s[0]);
        }
        hasOurChanges(e) {
            return Ne(e, he), x.automerge_hasOurChanges(this.__wbg_ptr, e.__wbg_ptr) !== 0;
        }
        increment(e, n, r) {
            const s = x.automerge_increment(this.__wbg_ptr, e, n, r);
            if (s[1]) throw R(s[0]);
        }
        initRootFromHydrate(e) {
            const n = x.automerge_initRootFromHydrate(this.__wbg_ptr, e);
            if (n[1]) throw R(n[0]);
        }
        insert(e, n, r, s) {
            const i = x.automerge_insert(this.__wbg_ptr, e, n, r, s);
            if (i[1]) throw R(i[0]);
        }
        insertObject(e, n, r) {
            let s, i;
            try {
                const c = x.automerge_insertObject(this.__wbg_ptr, e, n, r);
                var o = c[0], a = c[1];
                if (c[3]) throw o = 0, a = 0, R(c[2]);
                return s = o, i = a, Ee(o, a);
            } finally{
                x.__wbindgen_free(s, i, 1);
            }
        }
        insertObjectFromHydrate(e, n, r) {
            const s = x.automerge_insertObjectFromHydrate(this.__wbg_ptr, e, n, r);
            if (s[2]) throw R(s[1]);
            return R(s[0]);
        }
        integrate() {
            x.automerge_integrate(this.__wbg_ptr);
        }
        isolate(e) {
            const n = x.automerge_isolate(this.__wbg_ptr, e);
            if (n[1]) throw R(n[0]);
        }
        joinBlock(e, n) {
            const r = x.automerge_joinBlock(this.__wbg_ptr, e, n);
            if (r[1]) throw R(r[0]);
        }
        keys(e, n) {
            const r = x.automerge_keys(this.__wbg_ptr, e, n);
            if (r[2]) throw R(r[1]);
            return R(r[0]);
        }
        length(e, n) {
            const r = x.automerge_length(this.__wbg_ptr, e, n);
            if (r[2]) throw R(r[1]);
            return r[0];
        }
        loadIncremental(e) {
            const n = x.automerge_loadIncremental(this.__wbg_ptr, e);
            if (n[2]) throw R(n[1]);
            return n[0];
        }
        mark(e, n, r, s, i) {
            const o = x.automerge_mark(this.__wbg_ptr, e, n, r, s, i);
            if (o[1]) throw R(o[0]);
        }
        marks(e, n) {
            const r = x.automerge_marks(this.__wbg_ptr, e, n);
            if (r[2]) throw R(r[1]);
            return R(r[0]);
        }
        marksAt(e, n, r) {
            const s = x.automerge_marksAt(this.__wbg_ptr, e, n, r);
            if (s[2]) throw R(s[1]);
            return R(s[0]);
        }
        materialize(e, n, r) {
            const s = x.automerge_materialize(this.__wbg_ptr, e, n, r);
            if (s[2]) throw R(s[1]);
            return R(s[0]);
        }
        merge(e) {
            Ne(e, ve);
            const n = x.automerge_merge(this.__wbg_ptr, e.__wbg_ptr);
            if (n[2]) throw R(n[1]);
            return R(n[0]);
        }
        static new(e) {
            var n = fe(e) ? 0 : He(e, x.__wbindgen_malloc, x.__wbindgen_realloc), r = be;
            const s = x.automerge_new(n, r);
            if (s[2]) throw R(s[1]);
            return ve.__wrap(s[0]);
        }
        objInfo(e, n) {
            const r = x.automerge_objInfo(this.__wbg_ptr, e, n);
            if (r[2]) throw R(r[1]);
            return R(r[0]);
        }
        pendingOps() {
            return x.automerge_pendingOps(this.__wbg_ptr);
        }
        push(e, n, r) {
            const s = x.automerge_push(this.__wbg_ptr, e, n, r);
            if (s[1]) throw R(s[0]);
        }
        pushObject(e, n) {
            let r, s;
            try {
                const a = x.automerge_pushObject(this.__wbg_ptr, e, n);
                var i = a[0], o = a[1];
                if (a[3]) throw i = 0, o = 0, R(a[2]);
                return r = i, s = o, Ee(i, o);
            } finally{
                x.__wbindgen_free(r, s, 1);
            }
        }
        put(e, n, r, s) {
            const i = x.automerge_put(this.__wbg_ptr, e, n, r, s);
            if (i[1]) throw R(i[0]);
        }
        putObject(e, n, r) {
            const s = x.automerge_putObject(this.__wbg_ptr, e, n, r);
            if (s[2]) throw R(s[1]);
            return R(s[0]);
        }
        putObjectFromHydrate(e, n, r) {
            const s = x.automerge_putObjectFromHydrate(this.__wbg_ptr, e, n, r);
            if (s[2]) throw R(s[1]);
            return R(s[0]);
        }
        receiveSyncMessage(e, n) {
            Ne(e, he);
            const r = x.automerge_receiveSyncMessage(this.__wbg_ptr, e.__wbg_ptr, n);
            if (r[1]) throw R(r[0]);
        }
        registerDatatype(e, n, r) {
            const s = x.automerge_registerDatatype(this.__wbg_ptr, e, n, r);
            if (s[1]) throw R(s[0]);
        }
        resetDiffCursor() {
            x.automerge_resetDiffCursor(this.__wbg_ptr);
        }
        rollback() {
            return x.automerge_rollback(this.__wbg_ptr);
        }
        save() {
            return x.automerge_save(this.__wbg_ptr);
        }
        saveAndVerify() {
            const e = x.automerge_saveAndVerify(this.__wbg_ptr);
            if (e[2]) throw R(e[1]);
            return R(e[0]);
        }
        saveBundle(e) {
            const n = x.automerge_saveBundle(this.__wbg_ptr, e);
            if (n[2]) throw R(n[1]);
            return R(n[0]);
        }
        saveIncremental() {
            return x.automerge_saveIncremental(this.__wbg_ptr);
        }
        saveNoCompress() {
            return x.automerge_saveNoCompress(this.__wbg_ptr);
        }
        saveSince(e) {
            const n = x.automerge_saveSince(this.__wbg_ptr, e);
            if (n[2]) throw R(n[1]);
            return R(n[0]);
        }
        spans(e, n) {
            const r = x.automerge_spans(this.__wbg_ptr, e, n);
            if (r[2]) throw R(r[1]);
            return R(r[0]);
        }
        splice(e, n, r, s) {
            const i = x.automerge_splice(this.__wbg_ptr, e, n, r, s);
            if (i[1]) throw R(i[0]);
        }
        spliceFromHydrate(e, n, r, s) {
            const i = x.automerge_spliceFromHydrate(this.__wbg_ptr, e, n, r, s);
            if (i[1]) throw R(i[0]);
        }
        splitBlock(e, n, r) {
            const s = x.automerge_splitBlock(this.__wbg_ptr, e, n, r);
            if (s[1]) throw R(s[0]);
        }
        stats() {
            return x.automerge_stats(this.__wbg_ptr);
        }
        text(e, n) {
            let r, s;
            try {
                const a = x.automerge_text(this.__wbg_ptr, e, n);
                var i = a[0], o = a[1];
                if (a[3]) throw i = 0, o = 0, R(a[2]);
                return r = i, s = o, Ee(i, o);
            } finally{
                x.__wbindgen_free(r, s, 1);
            }
        }
        toJS(e) {
            const n = x.automerge_toJS(this.__wbg_ptr, e);
            if (n[2]) throw R(n[1]);
            return R(n[0]);
        }
        topoHistoryTraversal() {
            return x.automerge_topoHistoryTraversal(this.__wbg_ptr);
        }
        unmark(e, n, r) {
            const s = x.automerge_unmark(this.__wbg_ptr, e, n, r);
            if (s[1]) throw R(s[0]);
        }
        updateBlock(e, n, r) {
            const s = x.automerge_updateBlock(this.__wbg_ptr, e, n, r);
            if (s[1]) throw R(s[0]);
        }
        updateDiffCursor() {
            x.automerge_updateDiffCursor(this.__wbg_ptr);
        }
        updateSpans(e, n, r) {
            const s = x.automerge_updateSpans(this.__wbg_ptr, e, n, r);
            if (s[1]) throw R(s[0]);
        }
        updateText(e, n) {
            const r = x.automerge_updateText(this.__wbg_ptr, e, n);
            if (r[1]) throw R(r[0]);
        }
    }
    Symbol.dispose && (ve.prototype[Symbol.dispose] = ve.prototype.free);
    class he {
        static __wrap(e) {
            e = e >>> 0;
            const n = Object.create(he.prototype);
            return n.__wbg_ptr = e, Is.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Is.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            x.__wbg_syncstate_free(e, 0);
        }
        clone() {
            const e = x.syncstate_clone(this.__wbg_ptr);
            return he.__wrap(e);
        }
        get lastSentHeads() {
            return x.syncstate_lastSentHeads(this.__wbg_ptr);
        }
        set lastSentHeads(e) {
            const n = x.syncstate_set_lastSentHeads(this.__wbg_ptr, e);
            if (n[1]) throw R(n[0]);
        }
        set sentHashes(e) {
            const n = x.syncstate_set_sentHashes(this.__wbg_ptr, e);
            if (n[1]) throw R(n[0]);
        }
        get sharedHeads() {
            return x.syncstate_sharedHeads(this.__wbg_ptr);
        }
    }
    Symbol.dispose && (he.prototype[Symbol.dispose] = he.prototype.free);
    function Eu(t) {
        const e = x.create(t);
        if (e[2]) throw R(e[1]);
        return ve.__wrap(e[0]);
    }
    function Iu(t) {
        const e = x.decodeChange(t);
        if (e[2]) throw R(e[1]);
        return R(e[0]);
    }
    function Cu(t) {
        const e = x.decodeSyncMessage(t);
        if (e[2]) throw R(e[1]);
        return R(e[0]);
    }
    function Ru(t) {
        const e = x.decodeSyncState(t);
        if (e[2]) throw R(e[1]);
        return he.__wrap(e[0]);
    }
    function Hu(t) {
        const e = x.encodeChange(t);
        if (e[2]) throw R(e[1]);
        return R(e[0]);
    }
    function ku(t) {
        const e = x.encodeSyncMessage(t);
        if (e[2]) throw R(e[1]);
        return R(e[0]);
    }
    function Du(t) {
        return Ne(t, he), x.encodeSyncState(t.__wbg_ptr);
    }
    function Ou(t) {
        return Ne(t, he), x.exportSyncState(t.__wbg_ptr);
    }
    function Mu(t) {
        const e = x.importSyncState(t);
        if (e[2]) throw R(e[1]);
        return he.__wrap(e[0]);
    }
    function Tu() {
        const t = x.initSyncState();
        return he.__wrap(t);
    }
    function Uu(t, e) {
        const n = x.load(t, e);
        if (n[2]) throw R(n[1]);
        return ve.__wrap(n[0]);
    }
    function Bu(t) {
        const e = x.readBundle(t);
        if (e[2]) throw R(e[1]);
        return R(e[0]);
    }
    function ju() {
        return x.wasmReleaseInfo();
    }
    function Fu(t) {
        return BigInt(t);
    }
    function Pu(t, e) {
        return Error(Ee(t, e));
    }
    function Lu(t, e) {
        const n = String(e), r = He(n, x.__wbindgen_malloc, x.__wbindgen_realloc), s = be;
        le().setInt32(t + 4, s, !0), le().setInt32(t + 0, r, !0);
    }
    function $u(t) {
        const e = t, n = typeof e == "boolean" ? e : void 0;
        return fe(n) ? 16777215 : n ? 1 : 0;
    }
    function Vu(t, e) {
        const n = er(e), r = He(n, x.__wbindgen_malloc, x.__wbindgen_realloc), s = be;
        le().setInt32(t + 4, s, !0), le().setInt32(t + 0, r, !0);
    }
    function zu(t, e) {
        return t > e;
    }
    function Nu(t) {
        return typeof t == "bigint";
    }
    function qu(t) {
        return typeof t == "function";
    }
    function Wu(t) {
        return t === null;
    }
    function Gu(t) {
        const e = t;
        return typeof e == "object" && e !== null;
    }
    function Ku(t) {
        return typeof t == "string";
    }
    function Ju(t) {
        return t === void 0;
    }
    function Yu(t, e) {
        return t == e;
    }
    function Xu(t, e) {
        return t < e;
    }
    function Zu(t) {
        return -t;
    }
    function Qu(t, e) {
        const n = e, r = typeof n == "number" ? n : void 0;
        le().setFloat64(t + 8, fe(r) ? 0 : r, !0), le().setInt32(t + 0, !fe(r), !0);
    }
    function ef(t, e) {
        const n = e, r = typeof n == "string" ? n : void 0;
        var s = fe(r) ? 0 : He(r, x.__wbindgen_malloc, x.__wbindgen_realloc), i = be;
        le().setInt32(t + 4, i, !0), le().setInt32(t + 0, s, !0);
    }
    function tf(t, e) {
        throw new Error(Ee(t, e));
    }
    function nf() {
        return Te(function(t, e, n) {
            return Reflect.apply(t, e, n);
        }, arguments);
    }
    function rf(t, e) {
        return Object.assign(t, e);
    }
    function sf() {
        return Te(function(t, e) {
            return t.call(e);
        }, arguments);
    }
    function of() {
        return Te(function(t, e, n) {
            return t.call(e, n);
        }, arguments);
    }
    function af(t, e) {
        return t.concat(e);
    }
    function cf(t, e, n) {
        return Object.defineProperty(t, e, n);
    }
    function uf() {
        return Te(function(t, e) {
            return Reflect.deleteProperty(t, e);
        }, arguments);
    }
    function ff(t) {
        return t.done;
    }
    function df(t) {
        return Object.entries(t);
    }
    function hf(t, e) {
        let n, r;
        try {
            n = t, r = e, console.error(Ee(t, e));
        } finally{
            x.__wbindgen_free(n, r, 1);
        }
    }
    function lf(t, e) {
        return Symbol.for(Ee(t, e));
    }
    function gf(t) {
        return Object.freeze(t);
    }
    function _f(t) {
        return Array.from(t);
    }
    function pf() {
        return Te(function(t, e) {
            globalThis.crypto.getRandomValues(Ir(t, e));
        }, arguments);
    }
    function yf(t) {
        return t.getTime();
    }
    function bf(t, e) {
        return t[e >>> 0];
    }
    function mf() {
        return Te(function(t, e) {
            return Reflect.get(t, e);
        }, arguments);
    }
    function wf(t) {
        let e;
        try {
            e = t instanceof ArrayBuffer;
        } catch  {
            e = !1;
        }
        return e;
    }
    function xf(t) {
        let e;
        try {
            e = t instanceof Date;
        } catch  {
            e = !1;
        }
        return e;
    }
    function Sf(t) {
        let e;
        try {
            e = t instanceof Object;
        } catch  {
            e = !1;
        }
        return e;
    }
    function vf(t) {
        let e;
        try {
            e = t instanceof Uint8Array;
        } catch  {
            e = !1;
        }
        return e;
    }
    function Af(t) {
        return Array.isArray(t);
    }
    function Ef(t) {
        return Array.isArray(t);
    }
    function If() {
        return Symbol.iterator;
    }
    function Cf(t) {
        return Object.keys(t);
    }
    function Rf(t) {
        return t.length;
    }
    function Hf(t) {
        return t.length;
    }
    function kf(t) {
        return t.length;
    }
    function Df(t) {
        console.log(t);
    }
    function Of(t, e) {
        console.log(t, e);
    }
    function Mf(t) {
        return new Date(t);
    }
    function Tf() {
        return new Object;
    }
    function Uf() {
        return new Array;
    }
    function Bf(t, e) {
        return new Error(Ee(t, e));
    }
    function jf() {
        return new Error;
    }
    function Ff(t, e) {
        return new RangeError(Ee(t, e));
    }
    function Pf(t) {
        return new Uint8Array(t);
    }
    function Lf(t, e) {
        return new Uint8Array(Ir(t, e));
    }
    function $f() {
        return Te(function(t) {
            return t.next();
        }, arguments);
    }
    function Vf(t) {
        return t.next;
    }
    function zf() {
        return Te(function(t) {
            return Reflect.ownKeys(t);
        }, arguments);
    }
    function Nf(t, e, n) {
        Uint8Array.prototype.set.call(Ir(t, e), n);
    }
    function qf(t, e) {
        return t.push(e);
    }
    function Wf(t, e, n) {
        t[e] = n;
    }
    function Gf() {
        return Te(function(t, e, n) {
            return Reflect.set(t, e, n);
        }, arguments);
    }
    function Kf(t, e, n) {
        t[e >>> 0] = n;
    }
    function Jf(t, e, n) {
        return t.slice(e >>> 0, n >>> 0);
    }
    function Yf(t, e) {
        const n = e.stack, r = He(n, x.__wbindgen_malloc, x.__wbindgen_realloc), s = be;
        le().setInt32(t + 4, s, !0), le().setInt32(t + 0, r, !0);
    }
    function Xf(t, e) {
        const n = JSON.stringify(e);
        var r = fe(n) ? 0 : He(n, x.__wbindgen_malloc, x.__wbindgen_realloc), s = be;
        le().setInt32(t + 4, s, !0), le().setInt32(t + 0, r, !0);
    }
    function Zf() {
        return Te(function(t, e) {
            return t.toString(e);
        }, arguments);
    }
    function Qf(t, e, n) {
        const r = e.toString(n), s = He(r, x.__wbindgen_malloc, x.__wbindgen_realloc), i = be;
        le().setInt32(t + 4, i, !0), le().setInt32(t + 0, s, !0);
    }
    function ed(t) {
        return t.toString();
    }
    function td(t, e) {
        return t.unshift(e);
    }
    function nd(t) {
        return t.value;
    }
    function rd(t) {
        return Object.values(t);
    }
    function sd(t) {
        return t;
    }
    function id(t) {
        return t;
    }
    function od(t, e) {
        return Ee(t, e);
    }
    function ad(t) {
        return BigInt.asUintN(64, t);
    }
    function cd() {
        const t = x.__wbindgen_externrefs, e = t.grow(4);
        t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, !0), t.set(e + 3, !1);
    }
    const Es = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>x.__wbg_automerge_free(t >>> 0, 1)), Is = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>x.__wbg_syncstate_free(t >>> 0, 1));
    function ud(t) {
        const e = x.__externref_table_alloc();
        return x.__wbindgen_externrefs.set(e, t), e;
    }
    function Ne(t, e) {
        if (!(t instanceof e)) throw new Error(`expected instance of ${e.name}`);
    }
    function er(t) {
        const e = typeof t;
        if (e == "number" || e == "boolean" || t == null) return `${t}`;
        if (e == "string") return `"${t}"`;
        if (e == "symbol") {
            const s = t.description;
            return s == null ? "Symbol" : `Symbol(${s})`;
        }
        if (e == "function") {
            const s = t.name;
            return typeof s == "string" && s.length > 0 ? `Function(${s})` : "Function";
        }
        if (Array.isArray(t)) {
            const s = t.length;
            let i = "[";
            s > 0 && (i += er(t[0]));
            for(let o = 1; o < s; o++)i += ", " + er(t[o]);
            return i += "]", i;
        }
        const n = /\[object ([^\]]+)\]/.exec(toString.call(t));
        let r;
        if (n && n.length > 1) r = n[1];
        else return toString.call(t);
        if (r == "Object") try {
            return "Object(" + JSON.stringify(t) + ")";
        } catch  {
            return "Object";
        }
        return t instanceof Error ? `${t.name}: ${t.message}
${t.stack}` : r;
    }
    function Ir(t, e) {
        return t = t >>> 0, yt().subarray(t / 1, t / 1 + e);
    }
    let rt = null;
    function le() {
        return (rt === null || rt.buffer.detached === !0 || rt.buffer.detached === void 0 && rt.buffer !== x.memory.buffer) && (rt = new DataView(x.memory.buffer)), rt;
    }
    function Ee(t, e) {
        return t = t >>> 0, dd(t, e);
    }
    let $t = null;
    function yt() {
        return ($t === null || $t.byteLength === 0) && ($t = new Uint8Array(x.memory.buffer)), $t;
    }
    function Te(t, e) {
        try {
            return t.apply(this, e);
        } catch (n) {
            const r = ud(n);
            x.__wbindgen_exn_store(r);
        }
    }
    function fe(t) {
        return t == null;
    }
    function He(t, e, n) {
        if (n === void 0) {
            const a = bt.encode(t), c = e(a.length, 1) >>> 0;
            return yt().subarray(c, c + a.length).set(a), be = a.length, c;
        }
        let r = t.length, s = e(r, 1) >>> 0;
        const i = yt();
        let o = 0;
        for(; o < r; o++){
            const a = t.charCodeAt(o);
            if (a > 127) break;
            i[s + o] = a;
        }
        if (o !== r) {
            o !== 0 && (t = t.slice(o)), s = n(s, r, r = o + t.length * 3, 1) >>> 0;
            const a = yt().subarray(s + o, s + r), c = bt.encodeInto(t, a);
            o += c.written, s = n(s, r, o, 1) >>> 0;
        }
        return be = o, s;
    }
    function R(t) {
        const e = x.__wbindgen_externrefs.get(t);
        return x.__externref_table_dealloc(t), e;
    }
    let Jt = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    Jt.decode();
    const fd = 2146435072;
    let Tn = 0;
    function dd(t, e) {
        return Tn += e, Tn >= fd && (Jt = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), Jt.decode(), Tn = e), Jt.decode(yt().subarray(t, t + e));
    }
    const bt = new TextEncoder;
    "encodeInto" in bt || (bt.encodeInto = function(t, e) {
        const n = bt.encode(t);
        return e.set(n), {
            read: t.length,
            written: n.length
        };
    });
    let be = 0, x;
    function hd(t) {
        x = t;
    }
    URL = globalThis.URL;
    const ld = await Au({
        "./automerge_wasm_bg.js": {
            __wbg_new_8a6f238a6ece86ea: jf,
            __wbg_stack_0ed75d68575b0f3c: Yf,
            __wbg_error_7534b8e9a36f1ab4: hf,
            __wbg_String_8f0eb39a4a4c2f66: Lu,
            __wbg_set_3f1d0b984ed272ed: Wf,
            __wbg_getRandomValues_1c61fac11405ffdc: pf,
            __wbg_log_6b5ca2e6124b2808: Df,
            __wbg_log_b948c93e3e66d64f: Of,
            __wbg_get_9b94d73e6221f75c: bf,
            __wbg_length_35a7bace40f36eac: Hf,
            __wbg_new_3eb36ae241fe6f44: Uf,
            __wbg_BigInt_b7bbccdff258c9f2: Fu,
            __wbg_next_418f80d8f5303233: Vf,
            __wbg_next_3482f54c49e8af19: $f,
            __wbg_done_57b39ecd9addfe81: ff,
            __wbg_value_0546255b415e96c1: nd,
            __wbg_iterator_6ff6560ca1568e55: If,
            __wbg_get_b3ed3ad4be2bc8ac: mf,
            __wbg_call_389efe28435a9388: sf,
            __wbg_new_361308b2356cecd0: Tf,
            __wbg_length_68dc7c5cf1b6d349: kf,
            __wbg_set_f43e577aea94465b: Kf,
            __wbg_from_bddd64e7d5ff6941: _f,
            __wbg_isArray_d314bb98fcf08331: Ef,
            __wbg_push_8ffdcb2063340ba5: qf,
            __wbg_unshift_a4a28a3b4a2e621b: td,
            __wbg_instanceof_ArrayBuffer_c367199e2fa2aa04: wf,
            __wbg_toString_3cadee6e7c22b39e: Zf,
            __wbg_toString_56d946daff83867b: Qf,
            __wbg_new_72b49615380db768: Bf,
            __wbg_call_4708e0c13bdc8e95: of,
            __wbg_instanceof_Date_1b9f15b87f10aa4c: xf,
            __wbg_getTime_1e3cd1391c5c3995: yf,
            __wbg_new_245cd5c49157e602: Mf,
            __wbg_instanceof_Object_1c6af87502b733ed: Sf,
            __wbg_assign_6170c0d04d5c26f4: rf,
            __wbg_defineProperty_fc8692a66be8fe2d: cf,
            __wbg_entries_58c7934c745daac7: df,
            __wbg_freeze_661d9047fd889cd0: gf,
            __wbg_keys_b50a709a76add04e: Cf,
            __wbg_values_5da93bc719d272cf: rd,
            __wbg_new_911dabf69fa7eb20: Ff,
            __wbg_apply_2e22c45cb4f12415: nf,
            __wbg_deleteProperty_8c8a05da881fea59: uf,
            __wbg_ownKeys_c7100fb5fa376c6f: zf,
            __wbg_set_6cb8631f80447a67: Gf,
            __wbg_concat_f6e5ebc81f4917f1: af,
            __wbg_slice_b0fa09b1e0041d42: Jf,
            __wbg_for_c3adefd268cb6f1c: lf,
            __wbg_toString_b388ecd2d3c517c3: ed,
            __wbg_length_32ed9a279acd054c: Rf,
            __wbg_prototypesetcall_bdcdcc5842e4d77d: Nf,
            __wbg_new_dd2b680c8bf6ae29: Pf,
            __wbg_instanceof_Uint8Array_9b9075935c74707c: vf,
            __wbg_new_from_slice_a3d2629dc1826784: Lf,
            __wbg___wbindgen_string_get_72fb696202c56729: ef,
            __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: $u,
            __wbg___wbindgen_number_get_8ff4255516ccad3e: Qu,
            __wbg___wbindgen_is_undefined_9e4d92534c42d778: Ju,
            __wbg___wbindgen_debug_string_0bc8482c6e3508ae: Vu,
            __wbg_isArray_a2cef7634fcb7c0d: Af,
            __wbg_Error_8c4e43fe74559d73: Pu,
            __wbg_stringify_e4a940b133e6b7d8: Xf,
            __wbg___wbindgen_is_null_ac34f5003991759a: Wu,
            __wbg___wbindgen_is_object_5ae8e5880f2c1fbd: Gu,
            __wbg___wbindgen_is_function_0095a73b8b156f76: qu,
            __wbg___wbindgen_is_string_cd444516edc5b180: Ku,
            __wbg___wbindgen_is_bigint_31b12575b56f32fc: Nu,
            __wbg___wbindgen_neg_6b4d356dff49dcc6: Zu,
            __wbg___wbindgen_lt_bb59cc3d23526e0d: Xu,
            __wbg___wbindgen_gt_d7bb3629eac381f5: zu,
            __wbg___wbindgen_throw_be289d5034ed271b: tf,
            __wbg___wbindgen_jsval_loose_eq_9dd77d8cd6671811: Yu,
            __wbindgen_init_externref_table: cd,
            __wbindgen_cast_0000000000000001: sd,
            __wbindgen_cast_0000000000000002: id,
            __wbindgen_cast_0000000000000003: od,
            __wbindgen_cast_0000000000000004: ad
        }
    }, vu), { memory: gd, __wbg_syncstate_free: _d, syncstate_sharedHeads: pd, syncstate_lastSentHeads: yd, syncstate_set_lastSentHeads: bd, syncstate_set_sentHashes: md, syncstate_clone: wd, __wbg_automerge_free: xd, automerge_new: Sd, automerge_initRootFromHydrate: vd, automerge_clone: Ad, automerge_fork: Ed, automerge_pendingOps: Id, automerge_commit: Cd, automerge_merge: Rd, automerge_rollback: Hd, automerge_keys: kd, automerge_text: Dd, automerge_spans: Od, automerge_splice: Md, automerge_updateText: Td, automerge_updateSpans: Ud, automerge_push: Bd, automerge_pushObject: jd, automerge_insert: Fd, automerge_splitBlock: Pd, automerge_joinBlock: Ld, automerge_updateBlock: $d, automerge_getBlock: Vd, automerge_insertObject: zd, automerge_put: Nd, automerge_putObject: qd, automerge_putObjectFromHydrate: Wd, automerge_insertObjectFromHydrate: Gd, automerge_spliceFromHydrate: Kd, automerge_increment: Jd, automerge_get: Yd, automerge_getWithType: Xd, automerge_objInfo: Zd, automerge_getAll: Qd, automerge_enableFreeze: eh, automerge_registerDatatype: th, automerge_applyPatches: nh, automerge_applyAndReturnPatches: rh, automerge_diffIncremental: sh, automerge_updateDiffCursor: ih, automerge_resetDiffCursor: oh, automerge_diff: ah, automerge_diffPath: ch, automerge_isolate: uh, automerge_integrate: fh, automerge_length: dh, automerge_delete: hh, automerge_save: lh, automerge_saveIncremental: gh, automerge_saveSince: _h, automerge_saveNoCompress: ph, automerge_saveAndVerify: yh, automerge_loadIncremental: bh, automerge_applyChanges: mh, automerge_getChanges: wh, automerge_getChangesMeta: xh, automerge_getChangeByHash: Sh, automerge_getChangeMetaByHash: vh, automerge_getDecodedChangeByHash: Ah, automerge_getChangesAdded: Eh, automerge_getHeads: Ih, automerge_getActorId: Ch, automerge_getLastLocalChange: Rh, automerge_dump: Hh, automerge_getMissingDeps: kh, automerge_receiveSyncMessage: Dh, automerge_generateSyncMessage: Oh, automerge_toJS: Mh, automerge_materialize: Th, automerge_getCursor: Uh, automerge_getCursorPosition: Bh, automerge_emptyChange: jh, automerge_mark: Fh, automerge_unmark: Ph, automerge_marks: Lh, automerge_marksAt: $h, automerge_hasOurChanges: Vh, automerge_topoHistoryTraversal: zh, automerge_stats: Nh, automerge_saveBundle: qh, create: Wh, load: Gh, wasmReleaseInfo: Kh, encodeChange: Jh, decodeChange: Yh, initSyncState: Xh, importSyncState: Zh, exportSyncState: Qh, encodeSyncMessage: el, decodeSyncMessage: tl, encodeSyncState: nl, decodeSyncState: rl, readBundle: sl, __wbindgen_malloc: il, __wbindgen_realloc: ol, __wbindgen_exn_store: al, __externref_table_alloc: cl, __wbindgen_externrefs: ul, __wbindgen_free: fl, __externref_table_dealloc: dl, __wbindgen_start: Fi } = ld, hl = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_table_alloc: cl,
        __externref_table_dealloc: dl,
        __wbg_automerge_free: xd,
        __wbg_syncstate_free: _d,
        __wbindgen_exn_store: al,
        __wbindgen_externrefs: ul,
        __wbindgen_free: fl,
        __wbindgen_malloc: il,
        __wbindgen_realloc: ol,
        __wbindgen_start: Fi,
        automerge_applyAndReturnPatches: rh,
        automerge_applyChanges: mh,
        automerge_applyPatches: nh,
        automerge_clone: Ad,
        automerge_commit: Cd,
        automerge_delete: hh,
        automerge_diff: ah,
        automerge_diffIncremental: sh,
        automerge_diffPath: ch,
        automerge_dump: Hh,
        automerge_emptyChange: jh,
        automerge_enableFreeze: eh,
        automerge_fork: Ed,
        automerge_generateSyncMessage: Oh,
        automerge_get: Yd,
        automerge_getActorId: Ch,
        automerge_getAll: Qd,
        automerge_getBlock: Vd,
        automerge_getChangeByHash: Sh,
        automerge_getChangeMetaByHash: vh,
        automerge_getChanges: wh,
        automerge_getChangesAdded: Eh,
        automerge_getChangesMeta: xh,
        automerge_getCursor: Uh,
        automerge_getCursorPosition: Bh,
        automerge_getDecodedChangeByHash: Ah,
        automerge_getHeads: Ih,
        automerge_getLastLocalChange: Rh,
        automerge_getMissingDeps: kh,
        automerge_getWithType: Xd,
        automerge_hasOurChanges: Vh,
        automerge_increment: Jd,
        automerge_initRootFromHydrate: vd,
        automerge_insert: Fd,
        automerge_insertObject: zd,
        automerge_insertObjectFromHydrate: Gd,
        automerge_integrate: fh,
        automerge_isolate: uh,
        automerge_joinBlock: Ld,
        automerge_keys: kd,
        automerge_length: dh,
        automerge_loadIncremental: bh,
        automerge_mark: Fh,
        automerge_marks: Lh,
        automerge_marksAt: $h,
        automerge_materialize: Th,
        automerge_merge: Rd,
        automerge_new: Sd,
        automerge_objInfo: Zd,
        automerge_pendingOps: Id,
        automerge_push: Bd,
        automerge_pushObject: jd,
        automerge_put: Nd,
        automerge_putObject: qd,
        automerge_putObjectFromHydrate: Wd,
        automerge_receiveSyncMessage: Dh,
        automerge_registerDatatype: th,
        automerge_resetDiffCursor: oh,
        automerge_rollback: Hd,
        automerge_save: lh,
        automerge_saveAndVerify: yh,
        automerge_saveBundle: qh,
        automerge_saveIncremental: gh,
        automerge_saveNoCompress: ph,
        automerge_saveSince: _h,
        automerge_spans: Od,
        automerge_splice: Md,
        automerge_spliceFromHydrate: Kd,
        automerge_splitBlock: Pd,
        automerge_stats: Nh,
        automerge_text: Dd,
        automerge_toJS: Mh,
        automerge_topoHistoryTraversal: zh,
        automerge_unmark: Ph,
        automerge_updateBlock: $d,
        automerge_updateDiffCursor: ih,
        automerge_updateSpans: Ud,
        automerge_updateText: Td,
        create: Wh,
        decodeChange: Yh,
        decodeSyncMessage: tl,
        decodeSyncState: rl,
        encodeChange: Jh,
        encodeSyncMessage: el,
        encodeSyncState: nl,
        exportSyncState: Qh,
        importSyncState: Zh,
        initSyncState: Xh,
        load: Gh,
        memory: gd,
        readBundle: sl,
        syncstate_clone: wd,
        syncstate_lastSentHeads: yd,
        syncstate_set_lastSentHeads: bd,
        syncstate_set_sentHashes: md,
        syncstate_sharedHeads: pd,
        wasmReleaseInfo: Kh
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    hd(hl);
    Fi();
    const ll = Object.freeze(Object.defineProperty({
        __proto__: null,
        Automerge: ve,
        SyncState: he,
        create: Eu,
        decodeChange: Iu,
        decodeSyncMessage: Cu,
        decodeSyncState: Ru,
        encodeChange: Hu,
        encodeSyncMessage: ku,
        encodeSyncState: Du,
        exportSyncState: Ou,
        importSyncState: Mu,
        initSyncState: Tu,
        load: Uu,
        readBundle: Bu,
        wasmReleaseInfo: ju
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    eo(ll);
    class gl {
        database;
        store;
        dbPromise;
        constructor(e = "automerge", n = "documents"){
            this.database = e, this.store = n, this.dbPromise = this.createDatabasePromise();
        }
        createDatabasePromise() {
            return new Promise((e, n)=>{
                const r = indexedDB.open(this.database, 1);
                r.onerror = ()=>{
                    n(r.error);
                }, r.onupgradeneeded = (s)=>{
                    s.target.result.createObjectStore(this.store);
                }, r.onsuccess = (s)=>{
                    const i = s.target.result;
                    e(i);
                };
            });
        }
        async load(e) {
            const r = (await this.dbPromise).transaction(this.store), i = r.objectStore(this.store).get(e);
            return new Promise((o, a)=>{
                r.onerror = ()=>{
                    a(i.error);
                }, i.onsuccess = (c)=>{
                    const u = c.target.result;
                    u && typeof u == "object" && "binary" in u ? o(u.binary) : o(void 0);
                };
            });
        }
        async save(e, n) {
            const s = (await this.dbPromise).transaction(this.store, "readwrite");
            return s.objectStore(this.store).put({
                key: e,
                binary: n
            }, e), new Promise((o, a)=>{
                s.onerror = ()=>{
                    a(s.error);
                }, s.oncomplete = ()=>{
                    o();
                };
            });
        }
        async remove(e) {
            const r = (await this.dbPromise).transaction(this.store, "readwrite");
            return r.objectStore(this.store).delete(e), new Promise((i, o)=>{
                r.onerror = ()=>{
                    o(r.error);
                }, r.oncomplete = ()=>{
                    i();
                };
            });
        }
        async loadRange(e) {
            const n = await this.dbPromise, r = e, s = [
                ...e,
                "￿"
            ], i = IDBKeyRange.bound(r, s), o = n.transaction(this.store), c = o.objectStore(this.store).openCursor(i), u = [];
            return new Promise((g, f)=>{
                o.onerror = ()=>{
                    f(c.error);
                }, c.onsuccess = (h)=>{
                    const l = h.target.result;
                    l ? (u.push({
                        data: l.value.binary,
                        key: l.key
                    }), l.continue()) : g(u);
                };
            });
        }
        async removeRange(e) {
            const n = await this.dbPromise, r = e, s = [
                ...e,
                "￿"
            ], i = IDBKeyRange.bound(r, s), o = n.transaction(this.store, "readwrite");
            return o.objectStore(this.store).delete(i), new Promise((c, u)=>{
                o.onerror = ()=>{
                    u(o.error);
                }, o.oncomplete = ()=>{
                    c();
                };
            });
        }
    }
    class _l extends Su {
        #e;
        #t = !1;
        #r = !1;
        #n = ()=>{};
        #i;
        #o;
        #a = [];
        isReady() {
            return this.#r;
        }
        whenReady() {
            return this.#i;
        }
        constructor(e){
            super(), this.#o = {
                channelName: "broadcast",
                peerWaitMs: 1e3,
                ...e ?? {}
            }, this.#e = new BroadcastChannel(this.#o.channelName), this.#i = new Promise((n)=>{
                this.#n = ()=>{
                    this.#r = !0, n();
                }, setTimeout(()=>this.#n(), this.#o.peerWaitMs);
            });
        }
        connect(e, n) {
            this.peerId = e, this.peerMetadata = n, this.#t = !1, this.#e.addEventListener("message", (r)=>{
                const s = r.data;
                if ("targetId" in s && s.targetId !== this.peerId || this.#t) return;
                const { senderId: i, type: o } = s;
                switch(o){
                    case "arrive":
                        {
                            const { peerMetadata: a } = s;
                            this.#e.postMessage({
                                senderId: this.peerId,
                                targetId: i,
                                type: "welcome",
                                peerMetadata: this.peerMetadata
                            }), this.#c(i, a);
                        }
                        break;
                    case "welcome":
                        {
                            const { peerMetadata: a } = s;
                            this.#c(i, a);
                        }
                        break;
                    case "leave":
                        this.#a = this.#a.filter((a)=>a !== i), this.emit("peer-disconnected", {
                            peerId: i
                        });
                        break;
                    default:
                        if (!("data" in s)) this.emit("message", s);
                        else {
                            if (!s.data) throw new Error("We got a message without data, we can't send this.");
                            const a = s.data;
                            this.emit("message", {
                                ...s,
                                data: new Uint8Array(a)
                            });
                        }
                        break;
                }
            }), this.#e.postMessage({
                senderId: this.peerId,
                type: "arrive",
                peerMetadata: n
            });
        }
        #c(e, n) {
            this.#n(), this.#a.push(e), this.emit("peer-candidate", {
                peerId: e,
                peerMetadata: n
            });
        }
        send(e) {
            if (this.#t) return !1;
            "data" in e ? this.#e.postMessage({
                ...e,
                data: e.data ? e.data.buffer.slice(e.data.byteOffset, e.data.byteOffset + e.data.byteLength) : void 0
            }) : this.#e.postMessage(e);
        }
        disconnect() {
            this.#e.postMessage({
                senderId: this.peerId,
                type: "leave"
            });
            for (const e of this.#a)this.emit("peer-disconnected", {
                peerId: e
            });
            this.#t = !0;
        }
    }
    let pl;
    pl = [
        {
            id: "ferias",
            name: {
                pt: "Férias",
                en: "Vacation"
            },
            color: "#3B82F6",
            icon: "🏖️",
            annualAllowance: 22,
            deductsFrom: null,
            halfDayAllowed: !0,
            isDefault: !0,
            order: 1
        },
        {
            id: "flex",
            name: {
                pt: "Dias Flex",
                en: "Flex Days"
            },
            color: "#8B5CF6",
            icon: "✨",
            annualAllowance: 0,
            deductsFrom: null,
            halfDayAllowed: !1,
            isDefault: !0,
            order: 2
        },
        {
            id: "casamento",
            name: {
                pt: "Casamento",
                en: "Wedding"
            },
            color: "#EC4899",
            icon: "💒",
            annualAllowance: 15,
            deductsFrom: null,
            halfDayAllowed: !1,
            isDefault: !0,
            order: 3
        },
        {
            id: "luto",
            name: {
                pt: "Luto",
                en: "Bereavement"
            },
            color: "#6B7280",
            icon: "🕯️",
            annualAllowance: 5,
            deductsFrom: null,
            halfDayAllowed: !1,
            isDefault: !0,
            order: 4
        },
        {
            id: "baixa",
            name: {
                pt: "Baixa Médica",
                en: "Sick Leave"
            },
            color: "#EF4444",
            icon: "🏥",
            annualAllowance: null,
            deductsFrom: null,
            halfDayAllowed: !1,
            isDefault: !0,
            order: 5
        },
        {
            id: "meio-dia",
            name: {
                pt: "Meio Dia",
                en: "Half Day"
            },
            color: "#F59E0B",
            icon: "⏰",
            annualAllowance: null,
            deductsFrom: "ferias",
            halfDayAllowed: !1,
            isDefault: !0,
            order: 6
        },
        {
            id: "parental",
            name: {
                pt: "Licença Parental",
                en: "Parental Leave"
            },
            color: "#14B8A6",
            icon: "👶",
            annualAllowance: null,
            deductsFrom: null,
            halfDayAllowed: !1,
            isDefault: !0,
            order: 7
        }
    ];
    vl = [
        "Lisboa",
        "Porto",
        "Vila Nova de Gaia",
        "Aveiro",
        "Braga",
        "Coimbra",
        "Faro",
        "Leiria",
        "Viseu",
        "Setúbal",
        "Guimarães",
        "Viana do Castelo",
        "Barcelos",
        "Matosinhos",
        "Amadora",
        "Santana",
        "Almada",
        "Loures",
        "Oeiras",
        "Cascais",
        "Sintra",
        "Odivelas",
        "Seixal",
        "Maia",
        "Gondomar",
        "Valongo",
        "Santo Tirso",
        "Matosinhos",
        "Vila do Conde",
        "Póvoa de Varzim",
        "Trofa",
        "Fafe",
        "Vila Nova de Famalicão",
        "Ribeira Grande",
        "Ponta Delgada",
        "Angra do Heroísmo",
        "Horta",
        "Funchal",
        "Câmara de Lobos",
        "Funchal",
        "Porto Santo",
        "Alcobaça",
        "Nazaré",
        "Caldas da Rainha",
        "Obidos",
        "Peniche",
        "Torres Vedras",
        "Alenquer",
        "Lourinhã",
        "Cadaval",
        "Santarém",
        "Abrantes",
        "Torres Novas",
        "Entroncamento",
        "Mação",
        "Sardoal",
        "Ferreira do Zêzere",
        "Ourém",
        "Leiria",
        "Marinha Grande",
        "Pombal",
        "Figueira da Foz",
        "Montemor-o-Velho",
        "Cantanhede",
        "Mealhada",
        "Vagos",
        "Mira",
        "Coimbra",
        "Arganil",
        "Góis",
        "Lousã",
        "Miranda do Corvo",
        "Oliveira do Hospital",
        "Pampilhosa da Serra",
        "Tábua",
        "Vila Nova de Poiares",
        "Aveiro",
        "Águeda",
        "Albergaria-a-Velha",
        "Anadia",
        "Arouca",
        "Castelo de Paiva",
        "Espinho",
        "Estarreja",
        "Santa Maria da Feira",
        "Ílhavo",
        "Ovar",
        "São João da Madeira",
        "Sever do Vouga",
        "Vale de Cambra",
        "Vila Nova de Gaia",
        "Arouca",
        "Gondomar",
        "Maia",
        "Matosinhos",
        "Porto",
        "Póvoa de Varzim",
        "Trofa",
        "Valongo",
        "Vila do Conde",
        "Vila Nova de Gaia",
        "Braga",
        "Barcelos",
        "Esposende",
        "Fafe",
        "Guimarães",
        "Póvoa de Lanhoso",
        "Vieira do Minho",
        "Vila Nova de Famalicão",
        "Vila Verde",
        "Celorico de Basto",
        "Amares",
        "Caminha",
        "Melgaço",
        "Monção",
        "Paredes de Coura",
        "Ponte da Barca",
        "Valença",
        "Viana do Castelo",
        "Vila Nova de Cerveira",
        "Bragança",
        "Macedo de Cavaleiros",
        "Miranda do Douro",
        "Mirandela",
        "Vila Flor",
        "Vimioso",
        "Vinhais",
        "Alfândega da Fé",
        "Freixo de Espada à Cinta",
        "Torre de Moncorvo",
        "Vila Nova de Foz Côa",
        "Chaves",
        "Boticas",
        "Montalegre",
        "Ribeira de Pena",
        "Valpaços",
        "Vila Pouca de Aguiar",
        "Murça",
        "Alijó",
        "Armamar",
        "Lamego",
        "Mesão Frio",
        "Peso da Régua",
        "Santa Marta de Penaguião",
        "São João da Pesqueira",
        "Sátão",
        "Tarouca",
        "Trancoso",
        "Vila Nova de Paiva",
        "Aguiar da Beira",
        "Almeida",
        "Celorico da Beira",
        "Fornos de Algodres",
        "Gouveia",
        "Guarda",
        "Mêda",
        "Pinhel",
        "Sabugal",
        "Seia",
        "Trancoso",
        "Vila Nova de Foz Côa",
        "Castelo Branco",
        "Belmonte",
        "Covilhã",
        "Fundão",
        "Idanha-a-Nova",
        "Oleiros",
        "Penamacor",
        "Proença-a-Nova",
        "Sertã",
        "Vila de Rei",
        "Vila Velha de Ródão",
        "Portalegre",
        "Alter do Chão",
        "Arronches",
        "Avis",
        "Campo Maior",
        "Crato",
        "Elvas",
        "Fronteira",
        "Gavião",
        "Marvão",
        "Monforte",
        "Nisa",
        "Ponte de Sor",
        "Sardoal",
        "Ammaia",
        "Beja",
        "Aljustrel",
        "Alvito",
        "Barrancos",
        "Beja",
        "Castro Verde",
        "Cuba",
        "Ferreira do Alentejo",
        "Moura",
        "Odemira",
        "Ourique",
        "Serpa",
        "Vidigueira",
        "Évora",
        "Alandroal",
        "Arraiolos",
        "Borba",
        "Estremoz",
        "Évora",
        "Montemor-o-Novo",
        "Mora",
        "Mourão",
        "Portel",
        "Redondo",
        "Reguengos de Monsaraz",
        "Vila Viçosa",
        "Vendas Novas",
        "Açores",
        "Aveiro",
        "Braga",
        "Bragança",
        "Castelo Branco",
        "Faro",
        "Guarda",
        "Leiria",
        "Lisboa",
        "Portalegre",
        "Porto",
        "Santarém",
        "Setúbal",
        "Viana do Castelo",
        "Vila Real",
        "Viseu"
    ];
    Cs = function() {
        return crypto.randomUUID();
    };
    yl = function(t) {
        const e = t.getFullYear(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
        return `${e}-${n}-${r}`;
    };
    Rs = function(t) {
        const [e, n, r] = t.split("-").map(Number);
        return new Date(e, n - 1, r);
    };
    function bl(t, e) {
        return Math.round(Math.abs((e.getTime() - t.getTime()) / 864e5)) + 1;
    }
    Al = function(t, e, n) {
        const r = Rs(t), s = Rs(e);
        let i = bl(r, s);
        return n && (i = .5), i;
    };
    El = function(t, e) {
        const n = yl(t);
        return e.find((r)=>r.date === n) || null;
    };
    Il = function(t) {
        const e = t.getDay();
        return e === 0 || e === 6;
    };
    Cl = function(t, e) {
        const n = [], r = new Date(t, e, 1), s = new Date(t, e + 1, 0), i = r.getDay();
        for(let a = i - 1; a >= 0; a--){
            const c = new Date(t, e, -a);
            n.push(c);
        }
        for(let a = 1; a <= s.getDate(); a++)n.push(new Date(t, e, a));
        const o = 42 - n.length;
        for(let a = 1; a <= o; a++)n.push(new Date(t, e + 1, a));
        return n;
    };
    ml = function(t) {
        return t && t.startsWith("en") ? "en" : "pt";
    };
    Rl = function(t, e = "pt") {
        return {
            pt: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
            ],
            en: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]
        }[ml(e)][t];
    };
    const Hs = "vacationes-doc-url";
    let Un = null, Re = null;
    ks = Li(null);
    wl = function() {
        return Un || (Un = new xu({
            storage: new gl("vacationes-db"),
            network: [
                new _l
            ]
        })), Un;
    };
    function xl() {
        const t = Cs(), e = Cs();
        return {
            profiles: {
                [t]: {
                    id: t,
                    name: "Me",
                    municipality: "Lisboa",
                    color: "#3B82F6",
                    leaveBalances: {
                        ferias: 22,
                        flex: 5,
                        casamento: 15,
                        luto: 5
                    }
                },
                [e]: {
                    id: e,
                    name: "Wife",
                    municipality: "Lisboa",
                    color: "#EC4899",
                    leaveBalances: {
                        ferias: 22,
                        flex: 0,
                        casamento: 15,
                        luto: 5
                    }
                }
            },
            leaveTypes: pl.reduce((n, r)=>(n[r.id] = r, n), {}),
            entries: {},
            holidays: {},
            settings: {
                year: new Date().getFullYear(),
                language: "pt"
            },
            pairedDevices: {}
        };
    }
    Hl = async function() {
        if (Re) return;
        const t = wl(), e = localStorage.getItem(Hs);
        if (e && wr(e)) try {
            Re = await t.find(e), await Re.whenReady();
        } catch  {
            Re = null;
        }
        Re || (Re = t.create(xl()), localStorage.setItem(Hs, Re.url));
        const n = Re.doc();
        n && ks.set(n), Re.on("change", ({ doc: r })=>{
            ks.set(r);
        });
    };
    kl = function(t) {
        if (!Re) {
            console.warn("updateDoc called before initializeDoc");
            return;
        }
        Re.change(t);
    };
})();
export { vl as P, wl as a, Al as b, Rl as c, El as d, Il as e, yl as f, Cs as g, Cl as h, Hl as i, ml as n, Rs as p, kl as u, ks as v, __tla };
