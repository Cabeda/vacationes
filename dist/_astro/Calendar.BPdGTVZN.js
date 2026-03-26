import { e as N, i as G, a as kt, s as U, b as ot, $ as Et } from "./runtime.Ch_-BveN.js";
import { i as X, o as Ht } from "./if.9UCCxOQ1.js";
import { p as ut, c, r as i, s as _, t as $, g as t, a as D, b as S, f as vt, h as F, d as At, i as M, j as z, n as it, e as T, l as m, P as L, m as P, D as Ct } from "./render.XWdhkaYa.js";
import "./i18n.B6oimAYo.js";
import { f as C, i as jt, c as Lt, p as st, v as Nt, d as Gt, e as It, h as Jt, __tla as __tla_0 } from "./automerge.DkXqKZhq.js";
import { s as lt } from "./attributes.CbxPEldj.js";
import { s as dt } from "./class.SH6s6whB.js";
import { s as Wt } from "./style.DtKJV3y7.js";
import "./attributes.B1D2DcCs.js";
let ue;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    function Bt(l, n, b, h) {
        var p = h, f = !0, s = ()=>(f && (f = !1, p = h), p), g;
        g = l[n], g === void 0 && h !== void 0 && (g = s());
        var u;
        return u = ()=>{
            var x = l[n];
            return x === void 0 ? s() : (f = !0, x);
        }, u;
    }
    const Ot = "https://date.nager.at/api/v3";
    async function Qt(l) {
        try {
            const n = await fetch(`${Ot}/PublicHolidays/${l}/PT`);
            if (!n.ok) throw new Error(`Failed to fetch holidays: ${n.status}`);
            return await n.json();
        } catch (n) {
            return console.error("Error fetching national holidays:", n), [];
        }
    }
    function Rt() {
        return [
            {
                date: "2024-06-13",
                municipality: "Lisboa",
                name: "Santo António"
            },
            {
                date: "2024-06-24",
                municipality: "Porto",
                name: "São João"
            },
            {
                date: "2024-06-13",
                municipality: "Porto",
                name: "Santo António"
            },
            {
                date: "2025-06-13",
                municipality: "Lisboa",
                name: "Santo António"
            },
            {
                date: "2025-06-24",
                municipality: "Porto",
                name: "São João"
            },
            {
                date: "2026-06-13",
                municipality: "Lisboa",
                name: "Santo António"
            },
            {
                date: "2026-06-24",
                municipality: "Porto",
                name: "São João"
            },
            {
                date: "2027-06-13",
                municipality: "Lisboa",
                name: "Santo António"
            },
            {
                date: "2027-06-24",
                municipality: "Porto",
                name: "São João"
            }
        ];
    }
    function ct(l, n) {
        const b = Rt(), h = l[0] ? new Date(l[0].date).getFullYear() : new Date().getFullYear(), f = b.filter((s)=>new Date(s.date).getFullYear() === h).filter((s)=>s.municipality === n).map((s)=>({
                date: s.date,
                localName: s.name,
                name: s.name,
                countryCode: "PT",
                fixed: !0,
                global: !1,
                counties: [
                    n
                ],
                launchYear: null,
                types: [
                    "Public"
                ]
            }));
        return [
            ...l,
            ...f
        ];
    }
    async function Ut(l, n, b) {
        if (b[l]) return ct(b[l], n);
        const h = await Qt(l);
        return ct(h, n);
    }
    var zt = F('<span class="text-[8px] px-1 py-0.5 bg-red-100 text-red-700 rounded truncate max-w-[50px]"> </span>'), Xt = F('<div class="text-[10px] px-1 py-0.5 rounded truncate"> </div>'), qt = F('<div><div class="flex justify-between items-start"><span> </span> <!></div> <div class="mt-1 space-y-1"></div></div>');
    function Kt(l, n) {
        ut(n, !0);
        let b = Bt(n, "isSelected", 3, !1);
        function h(d, o) {
            return o[d.personId]?.color || "#3B82F6";
        }
        var p = qt(), f = c(p), s = c(f), g = c(s, !0);
        i(s);
        var u = _(s, 2);
        {
            var x = (d)=>{
                var o = zt(), v = c(o, !0);
                i(o), $(()=>D(v, n.holiday.localName)), S(d, o);
            };
            X(u, (d)=>{
                n.holiday && d(x);
            });
        }
        i(f);
        var k = _(f, 2);
        N(k, 21, ()=>n.entries, G, (d, o)=>{
            var v = Xt(), w = c(v, !0);
            i(v), $((I)=>{
                Wt(v, `background-color: ${I ?? ""}; color: white;`), lt(v, "title", t(o).label), D(w, t(o).label || "...");
            }, [
                ()=>h(t(o), {})
            ]), S(d, v);
        }), i(k), i(p), $((d, o)=>{
            lt(p, "data-date", d), dt(p, 1, `min-h-[80px] p-1 transition-colors cursor-pointer
    ${b() ? "bg-blue-100 ring-1 ring-inset ring-blue-400" : n.isWeekend ? "bg-gray-50" : "bg-white"}
    ${n.isCurrentMonth ? "" : "opacity-40"}`), dt(s, 1, `text-sm font-medium w-6 h-6 flex items-center justify-center rounded-full ${n.isToday ? "bg-blue-600 text-white" : "text-gray-700"}`), D(g, o);
        }, [
            ()=>C(n.date),
            ()=>n.date.getDate()
        ]), S(l, p), vt();
    }
    var Vt = F('<div class="text-center text-xs font-medium text-gray-500 py-2"> </div>'), Zt = F('<span class="text-xs px-2 py-1 bg-red-50 text-red-700 rounded"> </span>'), te = F('<div class="mt-4 bg-white rounded-xl shadow-sm p-4"><h3 class="text-sm font-medium text-gray-700 mb-2"> </h3> <div class="flex flex-wrap gap-2"></div></div>'), ee = F('<div class="bg-white rounded-xl shadow-sm overflow-hidden"><div class="flex items-center justify-between p-4 border-b border-gray-100"><button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">←</button> <div class="text-center"><h2 class="text-lg font-semibold text-gray-900"> </h2></div> <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">→</button></div> <div class="grid grid-cols-7 gap-px bg-gray-200 p-2 select-none" style="touch-action: none;"><!> <!></div> <div class="p-4 border-t border-gray-100"><button class="w-full py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"> </button></div></div> <!>', 1);
    ue = function(l, n) {
        ut(n, !0);
        const b = ()=>U(Nt, "$vacationesDoc", f), h = ()=>U(ot, "$locale", f), p = ()=>U(Et, "$_", f), [f, s] = kt();
        let g = M(z(new Date().getFullYear())), u = M(z(new Date().getMonth())), x = M(z([])), k = M(!0), d = M(null), o = M(null), v = M(!1), w = P(b);
        Ht(async ()=>(await jt(), await I(), m(k, !1), window.addEventListener("pointerup", V), ()=>window.removeEventListener("pointerup", V)));
        async function I() {
            if (!t(w)) return;
            const e = Object.keys(t(w).profiles), a = e.length > 0 ? t(w).profiles[e[0]].municipality : "Lisboa", r = t(w).holidays || {};
            m(x, await Ut(t(g), a, r), !0);
        }
        function ft() {
            t(u) === 0 ? (m(u, 11), L(g, -1)) : L(u, -1);
        }
        function gt() {
            t(u) === 11 ? (m(u, 0), L(g)) : L(u);
        }
        function mt() {
            const e = new Date;
            m(g, e.getFullYear(), !0), m(u, e.getMonth(), !0);
        }
        function pt(e) {
            if (!t(w)) return [];
            const a = C(e);
            return Object.values(t(w).entries).filter((r)=>a >= r.startDate && a <= r.endDate);
        }
        function ht(e) {
            const a = new Date;
            return e.getDate() === a.getDate() && e.getMonth() === a.getMonth() && e.getFullYear() === a.getFullYear();
        }
        function yt(e) {
            return e.getMonth() === t(u);
        }
        function q() {
            return !t(d) || !t(o) ? null : t(d) <= t(o) ? {
                start: t(d),
                end: t(o)
            } : {
                start: t(o),
                end: t(d)
            };
        }
        function bt(e) {
            const a = q();
            if (!a) return !1;
            const r = e.getTime();
            return r >= a.start.getTime() && r <= a.end.getTime();
        }
        function K(e) {
            const r = e?.closest("[data-date]")?.dataset.date;
            return r ? st(r) : null;
        }
        function xt(e) {
            const a = K(e.target);
            a && (m(v, !0), m(d, a, !0), m(o, a, !0), e.currentTarget.setPointerCapture(e.pointerId));
        }
        function _t(e) {
            if (!t(v)) return;
            const a = document.elementFromPoint(e.clientX, e.clientY), r = K(a);
            r && m(o, r, !0);
        }
        function wt(e) {
            t(v) && Z();
        }
        function V() {
            t(v) && Z();
        }
        function Z() {
            m(v, !1);
            const e = q();
            if (e) {
                const a = C(e.start), r = C(e.end);
                window.location.href = `/plan?start=${a}&end=${r}`;
            }
            m(d, null), m(o, null);
        }
        var tt = ee(), J = it(tt), W = c(J), et = c(W), B = _(et, 2), at = c(B), Dt = c(at);
        i(at), i(B);
        var St = _(B, 2);
        i(W);
        var Y = _(W, 2), nt = c(Y);
        N(nt, 16, ()=>[
                "D",
                "S",
                "T",
                "Q",
                "Q",
                "S",
                "S"
            ], G, (e, a)=>{
            var r = Vt(), E = c(r, !0);
            i(r), $(()=>D(E, a)), S(e, r);
        });
        var Mt = _(nt, 2);
        {
            var Pt = (e)=>{
                var a = Ct(), r = it(a);
                N(r, 17, ()=>Jt(t(g), t(u)), G, (E, y)=>{
                    const H = P(()=>Gt(t(y), t(x)));
                    {
                        let j = P(()=>yt(t(y))), A = P(()=>ht(t(y))), Q = P(()=>It(t(y))), R = P(()=>pt(t(y))), Tt = P(()=>bt(t(y)));
                        Kt(E, {
                            get date () {
                                return t(y);
                            },
                            get isCurrentMonth () {
                                return t(j);
                            },
                            get isToday () {
                                return t(A);
                            },
                            get isWeekend () {
                                return t(Q);
                            },
                            get holiday () {
                                return t(H);
                            },
                            get entries () {
                                return t(R);
                            },
                            get locale () {
                                return ot;
                            },
                            get isSelected () {
                                return t(Tt);
                            }
                        });
                    }
                }), S(e, a);
            };
            X(Mt, (e)=>{
                t(k) || e(Pt);
            });
        }
        i(Y);
        var rt = _(Y, 2), O = c(rt), $t = c(O, !0);
        i(O), i(rt), i(J);
        var Ft = _(J, 2);
        {
            var Yt = (e)=>{
                var a = te(), r = c(a), E = c(r, !0);
                i(r);
                var y = _(r, 2);
                N(y, 21, ()=>t(x).slice(0, 5), G, (H, j)=>{
                    var A = Zt(), Q = c(A);
                    i(A), $((R)=>D(Q, `${R ?? ""} - ${t(j).localName ?? ""}`), [
                        ()=>C(st(t(j).date))
                    ]), S(H, A);
                }), i(y), i(a), $((H)=>D(E, H), [
                    ()=>p()("holidays.title")
                ]), S(e, a);
            };
            X(Ft, (e)=>{
                t(x).length > 0 && e(Yt);
            });
        }
        $((e, a)=>{
            D(Dt, `${e ?? ""} ${t(g) ?? ""}`), D($t, a);
        }, [
            ()=>Lt(t(u), h() || "pt"),
            ()=>p()("calendar.today")
        ]), T("click", et, ft), T("click", St, gt), T("pointerdown", Y, xt), T("pointermove", Y, _t), T("pointerup", Y, wt), T("click", O, mt), S(l, tt), vt(), s();
    };
    At([
        "click",
        "pointerdown",
        "pointermove",
        "pointerup"
    ]);
});
export { ue as default, __tla };
