import { e as xe, i as ge, s as ie, $ as Oe, a as _e, b as Ue } from "./runtime.Ch_-BveN.js";
import { i as X, o as Me } from "./if.9UCCxOQ1.js";
import { q as ze, v as qe, u as me, w as Ge, x as Je, y as De, g as e, z as Ke, A as Qe, d as ye, p as he, c as a, r as t, s as o, t as I, a as c, b as k, B as Ve, e as A, l as b, f as we, i as U, h as P, C as We, j as Xe, m as Ae, D as Ye, n as Ze } from "./render.XWdhkaYa.js";
import { r as q, a as je } from "./attributes.CbxPEldj.js";
import { s as le } from "./class.SH6s6whB.js";
import { s as He } from "./style.DtKJV3y7.js";
import { a as re, d as et, i as tt, s as at } from "./input.VVmaz_zC.js";
import { s as Le } from "./i18n.B6oimAYo.js";
import { a as fe, g as rt, i as lt, v as st, P as ot, u as nt, __tla as __tla_0 } from "./automerge.DkXqKZhq.js";
import "./attributes.B1D2DcCs.js";
let Ht;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    function it(H = !1) {
        const f = ze, n = f.l.u;
        if (!n) return;
        let x = ()=>Ke(f.s);
        if (H) {
            let O = 0, g = {};
            const h = Qe(()=>{
                let w = !1;
                const m = f.s;
                for(const _ in m)m[_] !== g[_] && (g[_] = m[_], w = !0);
                return w && O++, O;
            });
            x = ()=>e(h);
        }
        n.b.length && qe(()=>{
            Pe(f, x), De(n.b);
        }), me(()=>{
            const O = Ge(()=>n.m.map(Je));
            return ()=>{
                for (const g of O)typeof g == "function" && g();
            };
        }), n.a.length && me(()=>{
            Pe(f, x), De(n.a);
        });
    }
    function Pe(H, f) {
        if (H.l.s) for (const n of H.l.s)e(n);
        f();
    }
    var ct = P('<div class="bg-white rounded-xl shadow-sm p-4 space-y-3"><div class="grid grid-cols-2 gap-3"><div><label class="block text-xs font-medium text-gray-500 mb-1"> </label> <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Nome em Português"/></div> <div><label class="block text-xs font-medium text-gray-500 mb-1"> </label> <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Name in English"/></div></div> <div class="grid grid-cols-3 gap-3"><div><label class="block text-xs font-medium text-gray-500 mb-1"> </label> <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-center text-2xl" placeholder="📅"/></div> <div><label class="block text-xs font-medium text-gray-500 mb-1"> </label> <input type="color" class="w-full h-10 rounded-lg cursor-pointer"/></div> <div><label class="block text-xs font-medium text-gray-500 mb-1"> </label> <input type="number" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="22"/></div></div> <div class="flex items-center gap-4"><label class="flex items-center"><input type="checkbox" class="mr-2"/> <span class="text-sm"> </span></label></div> <button class="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50"> </button></div>'), vt = P('<button class="text-xs px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">Half day ✓</button>'), dt = P('<button class="text-xs px-2 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100"> </button>'), ut = P('<div class="bg-white rounded-lg p-3 flex items-center gap-3"><div class="w-10 h-10 rounded-lg flex items-center justify-center text-xl"> </div> <div class="flex-1 min-w-0"><p class="font-medium text-gray-900 truncate"> </p> <p class="text-xs text-gray-500"> <!></p></div> <div class="flex items-center gap-2"><!> <!></div></div>'), pt = P('<div class="space-y-4"><div class="flex justify-between items-center"><h3 class="font-medium text-gray-900"> </h3> <button class="text-sm px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"> </button></div> <!> <div class="space-y-2"></div></div>');
    function bt(H, f) {
        he(f, !0);
        const n = ()=>ie(Oe, "$_", x), [x, O] = _e();
        let g = U(!1), h = U(""), w = U(""), m = U("#3B82F6"), _ = U("📅"), C = U(22), Q = U(!1), V = U(null);
        async function Y() {
            const r = fe().find([
                "vacationes"
            ]);
            if (!r) return;
            const s = {
                id: rt(),
                name: {
                    pt: e(h),
                    en: e(w)
                },
                color: e(m),
                icon: e(_),
                annualAllowance: e(C),
                deductsFrom: e(V),
                halfDayAllowed: e(Q),
                isDefault: !1,
                order: f.leaveTypes.length + 1
            };
            r.change((i)=>{
                i.leaveTypes[s.id] = s;
            }), G(), b(g, !1);
        }
        function G() {
            b(h, ""), b(w, ""), b(m, "#3B82F6"), b(_, "📅"), b(C, 22), b(Q, !1), b(V, null);
        }
        async function ce(l) {
            if (f.leaveTypes.find((v)=>v.id === l)?.isDefault) return;
            const i = fe().find([
                "vacationes"
            ]);
            i && i.change((v)=>{
                delete v.leaveTypes[l];
            });
        }
        async function J(l) {
            if (!f.leaveTypes.find((v)=>v.id === l)) return;
            const i = fe().find([
                "vacationes"
            ]);
            i && i.change((v)=>{
                v.leaveTypes[l] && (v.leaveTypes[l].halfDayAllowed = !v.leaveTypes[l].halfDayAllowed);
            });
        }
        var Z = pt(), M = a(Z), ee = a(M), ve = a(ee, !0);
        t(ee);
        var te = o(ee, 2), de = a(te, !0);
        t(te), t(M);
        var se = o(M, 2);
        {
            var ue = (l)=>{
                var r = ct(), s = a(r), i = a(s), v = a(i), $ = a(v, !0);
                t(v);
                var j = o(v, 2);
                q(j), t(i);
                var N = o(i, 2), T = a(N), S = a(T, !0);
                t(T);
                var E = o(T, 2);
                q(E), t(N), t(s);
                var R = o(s, 2), y = a(R), B = a(y), W = a(B, !0);
                t(B);
                var z = o(B, 2);
                q(z), t(y);
                var K = o(y, 2), u = a(K), p = a(u, !0);
                t(u);
                var F = o(u, 2);
                q(F), t(K);
                var L = o(K, 2), ae = a(L), oe = a(ae, !0);
                t(ae);
                var Te = o(ae, 2);
                q(Te), t(L), t(R);
                var pe = o(R, 2), ke = a(pe), be = a(ke);
                q(be);
                var $e = o(be, 2), Se = a($e, !0);
                t($e), t(ke), t(pe);
                var ne = o(pe, 2), Ee = a(ne, !0);
                t(ne), t(r), I((D, Fe, Ie, Ne, Re, Be, Ce)=>{
                    c($, D), c(S, Fe), c(W, Ie), c(p, Ne), c(oe, Re), c(Se, Be), ne.disabled = !e(h) || !e(w), c(Ee, Ce);
                }, [
                    ()=>n()("leaveTypes.namePt"),
                    ()=>n()("leaveTypes.nameEn"),
                    ()=>n()("leaveTypes.icon"),
                    ()=>n()("leaveTypes.color"),
                    ()=>n()("leaveTypes.annualAllowance"),
                    ()=>n()("leaveTypes.halfDayAllowed"),
                    ()=>n()("leaveTypes.add")
                ]), re(j, ()=>e(h), (D)=>b(h, D)), re(E, ()=>e(w), (D)=>b(w, D)), re(z, ()=>e(_), (D)=>b(_, D)), re(F, ()=>e(m), (D)=>b(m, D)), re(Te, ()=>e(C), (D)=>b(C, D)), et(be, ()=>e(Q), (D)=>b(Q, D)), A("click", ne, Y), k(l, r);
            };
            X(se, (l)=>{
                e(g) && l(ue);
            });
        }
        var d = o(se, 2);
        xe(d, 21, ()=>f.leaveTypes.sort((l, r)=>l.order - r.order), ge, (l, r)=>{
            var s = ut(), i = a(s), v = a(i, !0);
            t(i);
            var $ = o(i, 2), j = a($), N = a(j, !0);
            t(j);
            var T = o(j, 2), S = a(T), E = o(S);
            {
                var R = (u)=>{
                    var p = Ve("• Half day");
                    k(u, p);
                };
                X(E, (u)=>{
                    e(r).halfDayAllowed && u(R);
                });
            }
            t(T), t($);
            var y = o($, 2), B = a(y);
            {
                var W = (u)=>{
                    var p = vt();
                    A("click", p, ()=>J(e(r).id)), k(u, p);
                };
                X(B, (u)=>{
                    e(r).halfDayAllowed && u(W);
                });
            }
            var z = o(B, 2);
            {
                var K = (u)=>{
                    var p = dt(), F = a(p, !0);
                    t(p), I((L)=>c(F, L), [
                        ()=>n()("common.delete")
                    ]), A("click", p, ()=>ce(e(r).id)), k(u, p);
                };
                X(z, (u)=>{
                    e(r).isDefault || u(K);
                });
            }
            t(y), t(s), I((u)=>{
                He(i, `background-color: ${e(r).color ?? ""}20; color: ${e(r).color ?? ""}`), c(v, e(r).icon), c(N, e(r).name[f.locale === "en" ? "en" : "pt"]), c(S, `${u ?? ""} `);
            }, [
                ()=>e(r).annualAllowance !== null ? `${e(r).annualAllowance} days` : n()("leaveTypes.annualAllowanceUnlimited")
            ]), k(l, s);
        }), t(d), t(Z), I((l, r)=>{
            c(ve, l), c(de, r);
        }, [
            ()=>n()("leaveTypes.title"),
            ()=>e(g) ? n()("common.cancel") : n()("leaveTypes.add")
        ]), A("click", te, ()=>b(g, !e(g))), k(H, Z), we(), O();
    }
    ye([
        "click"
    ]);
    We();
    var ft = P('<div class="flex gap-2"><button>🇵🇹 Português</button> <button>🇬🇧 English</button></div>');
    function xt(H, f) {
        he(f, !1);
        const n = ()=>ie(Ue, "$locale", x), [x, O] = _e();
        it();
        var g = ft(), h = a(g), w = o(h, 2);
        t(g), I(()=>{
            le(h, 1, `flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-colors ${n() === "pt" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`), le(w, 1, `flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-colors ${n() === "en" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`);
        }), A("click", h, ()=>Le("pt")), A("click", w, ()=>Le("en")), k(H, g), we(), O();
    }
    ye([
        "click"
    ]);
    var gt = P('<p class="text-gray-500"> </p>'), mt = P("<option> </option>"), _t = P('<div class="bg-white rounded-xl shadow-sm p-4 space-y-3"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"> </div> <div class="flex-1"><input type="text" class="font-medium text-gray-900 bg-transparent border-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 w-full"/></div></div> <div><label class="block text-xs font-medium text-gray-500 mb-1"> </label> <select class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"></select></div> <div><label class="block text-xs font-medium text-gray-500 mb-1"> </label> <input type="color" class="w-full h-10 rounded-lg cursor-pointer"/></div></div>'), yt = P('<div class="space-y-4"></div>'), ht = P('<div class="space-y-4"><div class="bg-white rounded-xl shadow-sm p-4"><h3 class="font-medium text-gray-900 mb-3"> </h3> <!></div> <div class="bg-white rounded-xl shadow-sm p-4"><h3 class="font-medium text-gray-900 mb-3"> </h3> <button class="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"> </button></div></div>'), wt = P('<div class="space-y-4"><div class="flex border-b border-gray-200"><button> </button> <button> </button> <button> </button></div> <!></div>');
    Ht = function(H, f) {
        he(f, !0);
        const n = ()=>ie(st, "$vacationesDoc", O), x = ()=>ie(Oe, "$_", O), [O, g] = _e();
        let h = U(Xe([])), w = U(!0), m = U("profiles"), _ = Ae(n);
        Me(async ()=>{
            await lt(), b(w, !1);
        }), me(()=>{
            e(_) && b(h, Object.values(e(_).profiles), !0);
        });
        function C(d, l) {
            e(_) && nt((r)=>{
                r.profiles[d] && Object.assign(r.profiles[d], l);
            });
        }
        function Q() {
            if (!e(_)) return;
            const d = JSON.stringify(e(_), null, 2), l = new Blob([
                d
            ], {
                type: "application/json"
            }), r = URL.createObjectURL(l), s = document.createElement("a");
            s.href = r, s.download = `vacationes-backup-${new Date().toISOString().split("T")[0]}.json`, s.click(), URL.revokeObjectURL(r);
        }
        var V = wt(), Y = a(V), G = a(Y), ce = a(G, !0);
        t(G);
        var J = o(G, 2), Z = a(J, !0);
        t(J);
        var M = o(J, 2), ee = a(M, !0);
        t(M), t(Y);
        var ve = o(Y, 2);
        {
            var te = (d)=>{
                var l = gt(), r = a(l, !0);
                t(l), I((s)=>c(r, s), [
                    ()=>x()("common.loading")
                ]), k(d, l);
            }, de = (d)=>{
                var l = yt();
                xe(l, 21, ()=>e(h), ge, (r, s)=>{
                    var i = _t(), v = a(i), $ = a(v), j = a($, !0);
                    t($);
                    var N = o($, 2), T = a(N);
                    q(T), t(N), t(v);
                    var S = o(v, 2), E = a(S), R = a(E, !0);
                    t(E);
                    var y = o(E, 2);
                    xe(y, 21, ()=>ot.sort(), ge, (p, F)=>{
                        var L = mt(), ae = a(L, !0);
                        t(L);
                        var oe = {};
                        I(()=>{
                            c(ae, e(F)), oe !== (oe = e(F)) && (L.value = (L.__value = e(F)) ?? "");
                        }), k(p, L);
                    }), t(y);
                    var B;
                    tt(y), t(S);
                    var W = o(S, 2), z = a(W), K = a(z, !0);
                    t(z);
                    var u = o(z, 2);
                    q(u), t(W), t(i), I((p, F, L)=>{
                        He($, `background-color: ${e(s).color ?? ""}`), c(j, p), je(T, e(s).name), c(R, F), B !== (B = e(s).municipality) && (y.value = (y.__value = e(s).municipality) ?? "", at(y, e(s).municipality)), c(K, L), je(u, e(s).color);
                    }, [
                        ()=>e(s).name.charAt(0).toUpperCase(),
                        ()=>x()("profile.municipality"),
                        ()=>x()("profile.color")
                    ]), A("change", T, (p)=>C(e(s).id, {
                            name: p.currentTarget.value
                        })), A("change", y, (p)=>C(e(s).id, {
                            municipality: p.currentTarget.value
                        })), A("change", u, (p)=>C(e(s).id, {
                            color: p.currentTarget.value
                        })), k(r, i);
                }), t(l), k(d, l);
            }, se = (d)=>{
                var l = Ye(), r = Ze(l);
                {
                    var s = (i)=>{
                        {
                            let v = Ae(()=>Object.values(e(_).leaveTypes));
                            bt(i, {
                                get leaveTypes () {
                                    return e(v);
                                },
                                get locale () {
                                    return Ue;
                                }
                            });
                        }
                    };
                    X(r, (i)=>{
                        e(_) && i(s);
                    });
                }
                k(d, l);
            }, ue = (d)=>{
                var l = ht(), r = a(l), s = a(r), i = a(s, !0);
                t(s);
                var v = o(s, 2);
                xt(v, {}), t(r);
                var $ = o(r, 2), j = a($), N = a(j, !0);
                t(j);
                var T = o(j, 2), S = a(T, !0);
                t(T), t($), t(l), I((E, R, y)=>{
                    c(i, E), c(N, R), c(S, y);
                }, [
                    ()=>x()("settings.language"),
                    ()=>x()("settings.exportData"),
                    ()=>x()("settings.exportData")
                ]), A("click", T, Q), k(d, l);
            };
            X(ve, (d)=>{
                e(w) ? d(te) : e(m) === "profiles" ? d(de, 1) : e(m) === "leaveTypes" ? d(se, 2) : d(ue, -1);
            });
        }
        t(V), I((d, l, r)=>{
            le(G, 1, `flex-1 py-2 text-sm font-medium text-center transition-colors ${e(m) === "profiles" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`), c(ce, d), le(J, 1, `flex-1 py-2 text-sm font-medium text-center transition-colors ${e(m) === "leaveTypes" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`), c(Z, l), le(M, 1, `flex-1 py-2 text-sm font-medium text-center transition-colors ${e(m) === "general" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`), c(ee, r);
        }, [
            ()=>x()("profile.title"),
            ()=>x()("leaveTypes.title"),
            ()=>x()("settings.title")
        ]), A("click", G, ()=>b(m, "profiles")), A("click", J, ()=>b(m, "leaveTypes")), A("click", M, ()=>b(m, "general")), k(H, V), we(), g();
    };
    ye([
        "click",
        "change"
    ]);
});
export { Ht as default, __tla };
