import { a as Y, s as A, e as Z, i as aa, $ as ea, b as ta } from "./runtime.Ch_-BveN.js";
import { o as sa, i as L } from "./if.9UCCxOQ1.js";
import { b as m, f as ra, p as oa, l as la, h as b, c as i, g as a, r as o, i as na, m as D, t as M, a as p, D as ia, n as ca, s as I } from "./render.XWdhkaYa.js";
import { s as P } from "./style.DtKJV3y7.js";
import "./i18n.B6oimAYo.js";
import { b as da, i as va, v as ua, n as fa, __tla as __tla_0 } from "./automerge.DkXqKZhq.js";
import "./attributes.B1D2DcCs.js";
let ka;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    function ma(v, l, g, t) {
        const u = v.leaveBalances[l.id] ?? l.annualAllowance ?? -1, _ = Object.values(t).filter((e)=>e.personId === v.id && e.leaveTypeId === l.id);
        let d = 0;
        for (const e of _)(e.status === "completed" || e.status === "confirmed" || e.status === "planned") && (d += da(e.startDate, e.endDate, e.halfDay));
        const w = Object.values(g).filter((e)=>e.deductsFrom === l.id);
        for (const e of w){
            const y = Object.values(t).filter((f)=>f.personId === v.id && f.leaveTypeId === e.id && f.halfDay);
            d += y.length * .5;
        }
        const c = u >= 0 ? u - d : d;
        return {
            leaveTypeId: l.id,
            allowance: u >= 0 ? u : 0,
            used: d,
            remaining: u >= 0 ? c : d
        };
    }
    function pa(v, l, g) {
        return Object.values(l).filter((t)=>t.annualAllowance !== null).map((t)=>ma(v, t, l, Object.values(g))).filter((t)=>t.allowance > 0);
    }
    var ga = b('<p class="text-sm text-gray-500"> </p>'), _a = b('<div class="flex-shrink-0 bg-gray-50 rounded-lg p-3 min-w-[100px]"><div class="flex items-center gap-1 mb-1"><span> </span> <span class="text-xs font-medium text-gray-700"> </span></div> <div class="text-lg font-bold"> </div> <div class="text-xs text-gray-500"> </div> <div class="mt-1 h-1.5 bg-gray-200 rounded-full overflow-hidden"><div class="h-full rounded-full transition-all"></div></div></div>'), xa = b('<div class="flex gap-2 overflow-x-auto pb-2"></div>'), ha = b('<p class="text-sm text-gray-500"> </p>'), ba = b('<div class="bg-white rounded-xl shadow-sm p-4 mb-4"><!></div>');
    ka = function(v, l) {
        oa(l, !0);
        const g = ()=>A(ua, "$vacationesDoc", _), t = ()=>A(ea, "$_", _), u = ()=>A(ta, "$locale", _), [_, d] = Y();
        let w = na(!0), c = D(g), e = D(()=>a(c) ? Object.keys(a(c).profiles)[0] ?? null : null), y = D(()=>{
            if (!a(c) || !a(e)) return [];
            const s = a(c).profiles[a(e)];
            return s ? pa(s, a(c).leaveTypes, a(c).entries) : [];
        });
        sa(async ()=>{
            await va(), la(w, !1);
        });
        var f = ba(), R = i(f);
        {
            var q = (s)=>{
                var r = ga(), x = i(r, !0);
                o(r), M((n)=>p(x, n), [
                    ()=>t()("common.loading")
                ]), m(s, r);
            }, C = (s)=>{
                var r = xa();
                Z(r, 21, ()=>a(y), aa, (x, n)=>{
                    const h = D(()=>a(c)?.leaveTypes[a(n).leaveTypeId]);
                    var z = ia(), H = ca(z);
                    {
                        var J = (O)=>{
                            var j = _a(), k = i(j), B = i(k), K = i(B, !0);
                            o(B);
                            var E = I(B, 2), N = i(E, !0);
                            o(E), o(k);
                            var $ = I(k, 2), Q = i($, !0);
                            o($);
                            var T = I($, 2), S = i(T);
                            o(T);
                            var F = I(T, 2), U = i(F);
                            o(F), o(j), M((V, W, X)=>{
                                p(K, a(h).icon), p(N, V), P($, `color: ${a(h).color ?? ""}`), p(Q, a(n).remaining), p(S, `${W ?? ""} ${a(n).allowance ?? ""}`), P(U, `width: ${X ?? ""}%; background-color: ${a(h).color ?? ""}`);
                            }, [
                                ()=>a(h).name[fa(u())],
                                ()=>t()("balance.of"),
                                ()=>Math.max(0, Math.min(100, a(n).used / a(n).allowance * 100))
                            ]), m(O, j);
                        };
                        L(H, (O)=>{
                            a(h) && a(n).allowance > 0 && O(J);
                        });
                    }
                    m(x, z);
                }), o(r), m(s, r);
            }, G = (s)=>{
                var r = ha(), x = i(r, !0);
                o(r), M((n)=>p(x, n), [
                    ()=>t()("common.noData")
                ]), m(s, r);
            };
            L(R, (s)=>{
                a(w) ? s(q) : a(y).length > 0 ? s(C, 1) : s(G, -1);
            });
        }
        o(f), m(v, f), ra(), d();
    };
});
export { ka as default, __tla };
