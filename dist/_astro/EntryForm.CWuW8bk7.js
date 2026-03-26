import { e as ze, i as Be, s as ke, $ as Re, a as Ue, b as mt } from "./runtime.Ch_-BveN.js";
import { o as gt, i as De } from "./if.9UCCxOQ1.js";
import { d as yt, p as Ge, c as a, r as t, s, t as L, a as n, g as e, b as x, e as xt, f as He, h, i as p, j as qe, u as ht, k as Dt, l, m as Y, n as wt, o as kt } from "./render.XWdhkaYa.js";
import { r as y } from "./attributes.CbxPEldj.js";
import { i as It, s as Tt, b as Me, a as S, c as we } from "./input.VVmaz_zC.js";
import "./i18n.B6oimAYo.js";
import { f as Z, i as $t, g as At, u as Lt, v as Pt, __tla as __tla_0 } from "./automerge.DkXqKZhq.js";
let Nt;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    var St = h("<option> </option>"), jt = h('<div><label class="block text-sm font-medium text-gray-700 mb-1"> </label> <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></select></div>');
    function Ct(ee, g) {
        Ge(g, !0);
        const te = ()=>ke(Re, "$_", o), [o, R] = Ue();
        var j = jt(), D = a(j), U = a(D, !0);
        t(D);
        var v = s(D, 2);
        ze(v, 21, ()=>g.leaveTypes, Be, (_, m)=>{
            var d = St(), P = a(d);
            t(d);
            var k = {};
            L(()=>{
                n(P, `${e(m).icon ?? ""} ${e(m).name[g.locale === "en" ? "en" : "pt"] ?? ""}`), k !== (k = e(m).id) && (d.value = (d.__value = e(m).id) ?? "");
            }), x(_, d);
        }), t(v);
        var w;
        It(v), t(j), L((_)=>{
            n(U, _), w !== (w = g.selectedId) && (v.value = (v.__value = g.selectedId) ?? "", Tt(v, g.selectedId));
        }, [
            ()=>te()("entry.leaveType")
        ]), xt("change", v, (_)=>g.onchange(_.currentTarget.value)), x(ee, j), He(), R();
    }
    yt([
        "change"
    ]);
    var Et = h('<p class="text-gray-500"> </p>'), Ft = h("<option> </option>"), Ot = h('<div><label class="block text-sm font-medium text-gray-700 mb-1"> </label> <div class="flex gap-4"><label class="flex items-center"><input type="radio" class="mr-2"/> <span class="text-sm"> </span></label> <label class="flex items-center"><input type="radio" class="mr-2"/> <span class="text-sm"> </span></label> <label class="flex items-center"><input type="radio" class="mr-2"/> <span class="text-sm"> </span></label></div></div>'), qt = h('<p class="text-red-600 text-sm"> </p>'), Mt = h('<div><label class="block text-sm font-medium text-gray-700 mb-1"> </label> <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></select></div> <!> <div class="grid grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-gray-700 mb-1"> </label> <input type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"/></div> <div><label class="block text-sm font-medium text-gray-700 mb-1"> </label> <input type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"/></div></div> <!> <div><label class="block text-sm font-medium text-gray-700 mb-1"> </label> <input type="text" placeholder="e.g., Beach vacation" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"/></div> <div><label class="block text-sm font-medium text-gray-700 mb-1"> </label> <input type="text" placeholder="e.g., Algarve" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"/></div> <div><label class="block text-sm font-medium text-gray-700 mb-1"> </label> <input type="number" placeholder="0.00" step="0.01" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"/></div> <div><label class="block text-sm font-medium text-gray-700 mb-1"> </label> <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"><option> </option><option> </option><option> </option></select></div> <div><label class="block text-sm font-medium text-gray-700 mb-1"> </label> <textarea rows="3" placeholder="Additional notes..." class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea></div> <!> <button type="submit" class="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"> </button>', 1), zt = h('<form class="space-y-4"><!></form>');
    Nt = function(ee, g) {
        Ge(g, !0);
        const te = ()=>ke(Pt, "$vacationesDoc", R), o = ()=>ke(Re, "$_", R), [R, j] = Ue(), D = [];
        let U = p(!0), v = p(""), w = p("ferias"), _ = p(qe(Z(new Date))), m = p(qe(Z(new Date))), d = p(null), P = p(""), k = p(""), G = p(""), H = p(null), J = p("planned"), K = p(!1), N = p(null), C = Y(te), ae = Y(()=>e(C) ? Object.values(e(C).profiles) : []), re = Y(()=>e(C) ? Object.values(e(C).leaveTypes).sort((u, i)=>u.order - i.order) : []);
        gt(async ()=>{
            const u = new URLSearchParams(window.location.search), i = u.get("start"), f = u.get("end");
            i && l(_, i, !0), f && l(m, f, !0), await $t(), l(U, !1);
        }), ht(()=>{
            e(ae).length > 0 && !e(v) && l(v, e(ae)[0].id, !0);
        });
        function Je(u) {
            l(w, u, !0);
            const i = e(re).find((f)=>f.id === u);
            i && !i.halfDayAllowed && l(d, null);
        }
        async function Ke(u) {
            if (u.preventDefault(), !(!e(C) || !e(v))) {
                l(K, !0), l(N, null);
                try {
                    const i = {
                        id: At(),
                        personId: e(v),
                        leaveTypeId: e(w),
                        startDate: e(_),
                        endDate: e(m),
                        halfDay: e(d),
                        label: e(P),
                        notes: e(k),
                        destination: e(G),
                        budget: e(H),
                        status: e(J),
                        createdAt: new Date().toISOString()
                    };
                    Lt((f)=>{
                        f.entries[i.id] = i;
                    }), Ne();
                } catch (i) {
                    l(N, i instanceof Error ? i.message : "Failed to save", !0);
                } finally{
                    l(K, !1);
                }
            }
        }
        function Ne() {
            l(_, Z(new Date), !0), l(m, Z(new Date), !0), l(d, null), l(P, ""), l(k, ""), l(G, ""), l(H, null), l(J, "planned");
        }
        var Q = zt(), Qe = a(Q);
        {
            var Ve = (u)=>{
                var i = Et(), f = a(i, !0);
                t(i), L((E)=>n(f, E), [
                    ()=>o()("common.loading")
                ]), x(u, i);
            }, We = (u)=>{
                var i = Mt(), f = wt(i), E = a(f), Xe = a(E, !0);
                t(E);
                var le = s(E, 2);
                ze(le, 21, ()=>e(ae), Be, (r, c)=>{
                    var b = Ft(), q = a(b, !0);
                    t(b);
                    var I = {};
                    L(()=>{
                        n(q, e(c).name), I !== (I = e(c).id) && (b.value = (b.__value = e(c).id) ?? "");
                    }), x(r, b);
                }), t(le), t(f);
                var Ie = s(f, 2);
                Ct(Ie, {
                    get leaveTypes () {
                        return e(re);
                    },
                    get selectedId () {
                        return e(w);
                    },
                    get locale () {
                        return mt;
                    },
                    onchange: Je
                });
                var se = s(Ie, 2), ne = a(se), oe = a(ne), Ye = a(oe, !0);
                t(oe);
                var Te = s(oe, 2);
                y(Te), t(ne);
                var $e = s(ne, 2), ie = a($e), Ze = a(ie, !0);
                t(ie);
                var Ae = s(ie, 2);
                y(Ae), t($e), t(se);
                var Le = s(se, 2);
                {
                    var et = (r)=>{
                        var c = Ot(), b = a(c), q = a(b, !0);
                        t(b);
                        var I = s(b, 2), M = a(I), T = a(M);
                        y(T), T.value = (T.__value = null) ?? "";
                        var W = s(T, 2), he = a(W, !0);
                        t(W), t(M);
                        var z = s(M, 2), $ = a(z);
                        y($), $.value = $.__value = "morning";
                        var X = s($, 2), ct = a(X, !0);
                        t(X), t(z);
                        var Fe = s(z, 2), B = a(Fe);
                        y(B), B.value = B.__value = "afternoon";
                        var Oe = s(B, 2), bt = a(Oe, !0);
                        t(Oe), t(Fe), t(I), t(c), L((A, pt, ft, _t)=>{
                            n(q, A), n(he, pt), n(ct, ft), n(bt, _t);
                        }, [
                            ()=>o()("entry.halfDay"),
                            ()=>o()("common.no"),
                            ()=>o()("entry.halfDayMorning"),
                            ()=>o()("entry.halfDayAfternoon")
                        ]), we(D, [], T, ()=>e(d), (A)=>l(d, A)), we(D, [], $, ()=>e(d), (A)=>l(d, A)), we(D, [], B, ()=>e(d), (A)=>l(d, A)), x(r, c);
                    }, tt = Y(()=>e(re).find((r)=>r.id === e(w))?.halfDayAllowed);
                    De(Le, (r)=>{
                        e(tt) && r(et);
                    });
                }
                var ue = s(Le, 2), de = a(ue), at = a(de, !0);
                t(de);
                var Pe = s(de, 2);
                y(Pe), t(ue);
                var ve = s(ue, 2), ce = a(ve), rt = a(ce, !0);
                t(ce);
                var Se = s(ce, 2);
                y(Se), t(ve);
                var be = s(ve, 2), pe = a(be), lt = a(pe, !0);
                t(pe);
                var je = s(pe, 2);
                y(je), t(be);
                var fe = s(be, 2), _e = a(fe), st = a(_e, !0);
                t(_e);
                var me = s(_e, 2), F = a(me), nt = a(F, !0);
                t(F), F.value = F.__value = "planned";
                var O = s(F), ot = a(O, !0);
                t(O), O.value = O.__value = "confirmed";
                var V = s(O), it = a(V, !0);
                t(V), V.value = V.__value = "completed", t(me), t(fe);
                var ge = s(fe, 2), ye = a(ge), ut = a(ye, !0);
                t(ye);
                var Ce = s(ye, 2);
                kt(Ce), t(ge);
                var Ee = s(ge, 2);
                {
                    var dt = (r)=>{
                        var c = qt(), b = a(c, !0);
                        t(c), L(()=>n(b, e(N))), x(r, c);
                    };
                    De(Ee, (r)=>{
                        e(N) && r(dt);
                    });
                }
                var xe = s(Ee, 2), vt = a(xe, !0);
                t(xe), L((r, c, b, q, I, M, T, W, he, z, $, X)=>{
                    n(Xe, r), n(Ye, c), n(Ze, b), n(at, q), n(rt, I), n(lt, M), n(st, T), n(nt, W), n(ot, he), n(it, z), n(ut, $), xe.disabled = e(K), n(vt, X);
                }, [
                    ()=>o()("entry.person"),
                    ()=>o()("entry.startDate"),
                    ()=>o()("entry.endDate"),
                    ()=>o()("entry.label"),
                    ()=>o()("entry.destination"),
                    ()=>o()("entry.budget"),
                    ()=>o()("entry.status"),
                    ()=>o()("entry.statusPlanned"),
                    ()=>o()("entry.statusConfirmed"),
                    ()=>o()("entry.statusCompleted"),
                    ()=>o()("entry.notes"),
                    ()=>e(K) ? o()("common.loading") : o()("entry.save")
                ]), Me(le, ()=>e(v), (r)=>l(v, r)), S(Te, ()=>e(_), (r)=>l(_, r)), S(Ae, ()=>e(m), (r)=>l(m, r)), S(Pe, ()=>e(P), (r)=>l(P, r)), S(Se, ()=>e(G), (r)=>l(G, r)), S(je, ()=>e(H), (r)=>l(H, r)), Me(me, ()=>e(J), (r)=>l(J, r)), S(Ce, ()=>e(k), (r)=>l(k, r)), x(u, i);
            };
            De(Qe, (u)=>{
                e(U) ? u(Ve) : u(We, -1);
            });
        }
        t(Q), Dt("submit", Q, Ke), x(ee, Q), He(), j();
    };
});
export { Nt as default, __tla };
