const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/browser.CbF1tUhY.js","_astro/runtime.Ch_-BveN.js","_astro/render.XWdhkaYa.js","_astro/index.B_cB54B5.js"])))=>i.map(i=>d[i]);
import { a as we, s as be, $ as Se, e as De, i as Re } from "./runtime.Ch_-BveN.js";
import { o as Ce, i as q } from "./if.9UCCxOQ1.js";
import { q as Ee, K as Pe, N as Qe, w as Oe, Q as Te, R as ke, S as Ne, d as Le, i as E, j as Ie, t as P, b as R, f as Ue, p as Ae, l as a, g as r, a as y, h as C, c as l, r as c, T as F, s as h, e as L } from "./render.XWdhkaYa.js";
import { s as qe } from "./attributes.CbxPEldj.js";
let rt;
let __tla = (async ()=>{
    function W(g, S) {
        return g === S || g?.[Ne] === S;
    }
    function Fe(g = {}, S, d, I) {
        var T = Ee.r, o = Te;
        return Pe(()=>{
            var u, s;
            return Qe(()=>{
                u = s, s = [], Oe(()=>{
                    g !== d(...s) && (S(g, ...s), u && W(d(...u), g) && S(null, ...u));
                });
            }), ()=>{
                let v = o;
                for(; v !== T && v.parent !== null && v.parent.f & ke;)v = v.parent;
                const n = ()=>{
                    s && W(d(...s), g) && S(null, ...s);
                }, f = v.teardown;
                v.teardown = ()=>{
                    n(), f?.();
                };
            };
        }), g;
    }
    const Je = "modulepreload", je = function(g) {
        return "/" + g;
    }, Y = {}, K = function(S, d, I) {
        let T = Promise.resolve();
        if (d && d.length > 0) {
            let u = function(n) {
                return Promise.all(n.map((f)=>Promise.resolve(f).then((D)=>({
                            status: "fulfilled",
                            value: D
                        }), (D)=>({
                            status: "rejected",
                            reason: D
                        }))));
            };
            document.getElementsByTagName("link");
            const s = document.querySelector("meta[property=csp-nonce]"), v = s?.nonce || s?.getAttribute("nonce");
            T = u(d.map((n)=>{
                if (n = je(n), n in Y) return;
                Y[n] = !0;
                const f = n.endsWith(".css"), D = f ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${n}"]${D}`)) return;
                const m = document.createElement("link");
                if (m.rel = f ? "stylesheet" : Je, f || (m.as = "script"), m.crossOrigin = "", m.href = n, v && m.setAttribute("nonce", v), document.head.appendChild(m), f) return new Promise((Q, N)=>{
                    m.addEventListener("load", Q), m.addEventListener("error", ()=>N(new Error(`Unable to preload CSS for ${n}`)));
                });
            }));
        }
        function o(u) {
            const s = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (s.payload = u, window.dispatchEvent(s), !s.defaultPrevented) throw u;
        }
        return T.then((u)=>{
            for (const s of u || [])s.status === "rejected" && o(s.reason);
            return S().catch(o);
        });
    };
    var Me = C('<div class="bg-red-50 border border-red-200 rounded-lg p-4"><p class="text-red-700 text-sm"> </p></div>'), $e = C('<div class="space-y-4"><button class="w-full py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"> </button> <button class="w-full py-4 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"> </button></div>'), Be = C('<div class="text-center py-8"><div class="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div> <p class="mt-4 text-sm text-gray-600">Generating QR Code...</p></div>'), Ge = C('<div class="text-center space-y-4"><p class="text-sm text-gray-600"> </p> <div class="bg-white rounded-xl p-4 inline-block shadow-sm"><img alt="QR Code" class="w-64 h-64 mx-auto"/></div> <button class="text-sm text-gray-500 hover:text-gray-700"> </button></div>'), He = C('<div class="text-center space-y-4"><p class="text-sm text-gray-600"> </p> <div id="qr-reader" class="bg-gray-100 rounded-xl overflow-hidden"></div> <button class="text-sm text-gray-500 hover:text-gray-700"> </button></div>'), Ve = C('<div class="text-center py-8"><div class="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div> <p class="mt-4 text-sm text-gray-600">Connecting...</p></div>'), We = C('<div class="text-center py-8"><p class="text-4xl mb-4">✅</p> <p class="text-lg font-medium text-green-600"> </p> <p class="text-sm text-gray-500 mt-2">Devices are now synced!</p></div>'), Ye = C('<div class="bg-white rounded-lg p-3 flex items-center justify-between"><div><p class="font-medium text-gray-900"> </p> <p class="text-xs text-gray-500"> </p></div> <span class="text-xs px-2 py-1 bg-green-100 text-green-700 rounded"> </span></div>'), Ke = C('<div class="mt-8"><h3 class="text-sm font-medium text-gray-700 mb-3"> </h3> <div class="space-y-2"></div></div>'), ze = C('<div class="space-y-6"><div class="text-center"><p class="text-sm text-gray-600"> </p> <p class="text-xs text-gray-500 mt-1">P2P • Serverless • Encrypted</p></div> <!> <!> <!> <div class="mt-8 p-4 bg-blue-50 rounded-xl"><h4 class="text-sm font-medium text-blue-900 mb-2">How it works</h4> <ol class="text-xs text-blue-700 space-y-1"><li>1. Device A taps "Show QR Code"</li> <li>2. Device B taps "Scan QR Code"</li> <li>3. Devices connect directly via WebRTC</li> <li>4. No data passes through any server</li></ol></div></div>');
    rt = function(g, S) {
        Ae(S, !0);
        const d = ()=>be(Se, "$_", I), [I, T] = we();
        let o = E("idle"), u = E(null), s = E(null), v = E(Ie([])), n = E(null), f = E(null), D = E(null), m = E(null), Q = E(null);
        const N = [
            {
                urls: "stun:stun.l.google.com:19302"
            }
        ];
        Ce(()=>(z(), ()=>{
                J();
            }));
        function z() {
            const t = localStorage.getItem("vacationes-paired-devices");
            t && a(v, JSON.parse(t), !0);
        }
        function X() {
            localStorage.setItem("vacationes-paired-devices", JSON.stringify(r(v)));
        }
        function J() {
            r(f) && (r(f).close(), a(f, null)), r(n) && (r(n).close(), a(n, null)), r(m) && (r(m).stop().catch(()=>{}), a(m, null));
        }
        async function Z() {
            a(o, "generating"), a(s, null);
            try {
                a(n, new RTCPeerConnection({
                    iceServers: N
                }), !0), a(f, r(n).createDataChannel("automerge", {
                    ordered: !0
                }), !0);
                const t = await r(n).createOffer();
                await r(n).setLocalDescription(t), await new Promise((e)=>{
                    if (!r(n)) return e();
                    r(n).onicegatheringstatechange = ()=>{
                        r(n).iceGatheringState === "complete" && e();
                    }, setTimeout(e, 2e3);
                }), a(Q, JSON.stringify(r(n).localDescription), !0), a(u, await j(r(Q)), !0), a(o, "waiting-scan");
            } catch (t) {
                a(s, t instanceof Error ? t.message : "Failed to generate offer", !0), a(o, "idle");
            }
        }
        async function ee(t) {
            if (r(D)) try {
                const e = JSON.parse(t);
                e.type === "offer" ? await te(e) : e.type === "answer" ? await re(e) : a(s, "Invalid QR code format");
            } catch (e) {
                a(s, e instanceof Error ? e.message : "Failed to process QR code", !0);
            }
        }
        async function te(t) {
            a(o, "connecting"), a(s, null);
            try {
                a(n, new RTCPeerConnection({
                    iceServers: N
                }), !0), r(n).ondatachannel = (x)=>{
                    a(f, x.channel, !0), ae();
                }, await r(n).setRemoteDescription(t);
                const e = await r(n).createAnswer();
                await r(n).setLocalDescription(e);
                const i = JSON.stringify(r(n).localDescription);
                a(u, await j(i), !0), a(o, "waiting-scan");
            } catch (e) {
                a(s, e instanceof Error ? e.message : "Failed to process QR code", !0), a(o, "idle");
            }
        }
        async function re(t) {
            try {
                if (r(n)) {
                    await r(n).setRemoteDescription(t), a(o, "connected");
                    const e = {
                        id: crypto.randomUUID(),
                        name: `Device ${r(v).length + 1}`,
                        lastConnected: new Date().toISOString(),
                        peerId: ""
                    };
                    a(v, [
                        ...r(v),
                        e
                    ], !0), X(), setTimeout(()=>{
                        a(o, "idle"), a(u, null), a(Q, null);
                    }, 3e3);
                }
            } catch (e) {
                a(s, e instanceof Error ? e.message : "Failed to complete connection", !0);
            }
        }
        function ae() {
            r(f) && (r(f).onopen = ()=>{
                a(o, "connected"), setTimeout(()=>{
                    a(o, "idle"), a(u, null), a(Q, null);
                }, 3e3);
            }, r(f).onmessage = (t)=>{
                console.log("Received data:", t.data);
            }, r(f).onerror = (t)=>{
                a(s, "Data channel error"), console.error(t);
            });
        }
        async function j(t) {
            return (await K(()=>import("./browser.CbF1tUhY.js").then((i)=>i.b), __vite__mapDeps([0,1,2]))).toDataURL(t, {
                width: 256,
                margin: 2,
                color: {
                    dark: "#000000",
                    light: "#ffffff"
                }
            });
        }
        async function ne() {
            if (a(o, "scanning"), a(s, null), !!r(D)) try {
                const { Html5Qrcode: t } = await K(async ()=>{
                    const { Html5Qrcode: e } = await import("./index.B_cB54B5.js");
                    return {
                        Html5Qrcode: e
                    };
                }, __vite__mapDeps([3,1,2]));
                a(m, new t("qr-reader"), !0), await r(m).start({
                    facingMode: "environment"
                }, {
                    fps: 10,
                    qrbox: {
                        width: 250,
                        height: 250
                    }
                }, (e)=>{
                    ee(e);
                }, ()=>{});
            } catch (t) {
                a(s, t instanceof Error ? t.message : "Failed to start camera", !0), a(o, "idle");
            }
        }
        function M() {
            J(), a(o, "idle"), a(u, null), a(s, null), a(Q, null);
        }
        var U = ze(), A = l(U), $ = l(A), se = l($, !0);
        c($), F(2), c(A);
        var B = h(A, 2);
        {
            var ie = (t)=>{
                var e = Me(), i = l(e), x = l(i, !0);
                c(i), c(e), P(()=>y(x, r(s))), R(t, e);
            };
            q(B, (t)=>{
                r(s) && t(ie);
            });
        }
        var G = h(B, 2);
        {
            var oe = (t)=>{
                var e = $e(), i = l(e), x = l(i, !0);
                c(i);
                var p = h(i, 2), _ = l(p, !0);
                c(p), c(e), P((w, b)=>{
                    y(x, w), y(_, b);
                }, [
                    ()=>d()("sync.showQR"),
                    ()=>d()("sync.scanToPair")
                ]), L("click", i, Z), L("click", p, ne), R(t, e);
            }, ce = (t)=>{
                var e = Be();
                R(t, e);
            }, le = (t)=>{
                var e = Ge(), i = l(e), x = l(i, !0);
                c(i);
                var p = h(i, 2), _ = l(p);
                c(p);
                var w = h(p, 2), b = l(w, !0);
                c(w), c(e), P((O, k)=>{
                    y(x, O), qe(_, "src", r(u)), y(b, k);
                }, [
                    ()=>r(o) === "waiting-scan" ? d()("sync.step4") : d()("sync.step5"),
                    ()=>d()("common.cancel")
                ]), L("click", w, M), R(t, e);
            }, de = (t)=>{
                var e = He(), i = l(e), x = l(i, !0);
                c(i);
                var p = h(i, 2);
                Fe(p, (b)=>a(D, b), ()=>r(D));
                var _ = h(p, 2), w = l(_, !0);
                c(_), c(e), P((b, O)=>{
                    y(x, b), y(w, O);
                }, [
                    ()=>d()("sync.scanning"),
                    ()=>d()("common.cancel")
                ]), L("click", _, M), R(t, e);
            }, ue = (t)=>{
                var e = Ve();
                R(t, e);
            }, ve = (t)=>{
                var e = We(), i = h(l(e), 2), x = l(i, !0);
                c(i), F(2), c(e), P((p)=>y(x, p), [
                    ()=>d()("sync.connected")
                ]), R(t, e);
            };
            q(G, (t)=>{
                r(o) === "idle" ? t(oe) : r(o) === "generating" ? t(ce, 1) : r(o) === "waiting-scan" && r(u) ? t(le, 2) : r(o) === "scanning" ? t(de, 3) : r(o) === "connecting" ? t(ue, 4) : r(o) === "connected" && t(ve, 5);
            });
        }
        var fe = h(G, 2);
        {
            var pe = (t)=>{
                var e = Ke(), i = l(e), x = l(i, !0);
                c(i);
                var p = h(i, 2);
                De(p, 21, ()=>r(v), Re, (_, w)=>{
                    var b = Ye(), O = l(b), k = l(O), me = l(k, !0);
                    c(k);
                    var H = h(k, 2), ge = l(H);
                    c(H), c(O);
                    var V = h(O, 2), xe = l(V, !0);
                    c(V), c(b), P((ye, he, _e)=>{
                        y(me, r(w).name), y(ge, `${ye ?? ""}: ${he ?? ""}`), y(xe, _e);
                    }, [
                        ()=>d()("sync.lastConnected"),
                        ()=>r(w).lastConnected ? new Date(r(w).lastConnected).toLocaleDateString() : "-",
                        ()=>d()("sync.connected")
                    ]), R(_, b);
                }), c(p), c(e), P((_)=>y(x, _), [
                    ()=>d()("sync.pairedDevices")
                ]), R(t, e);
            };
            q(fe, (t)=>{
                r(v).length > 0 && t(pe);
            });
        }
        F(2), c(U), P((t)=>y(se, t), [
            ()=>d()("sync.title")
        ]), R(g, U), Ue(), T();
    };
    Le([
        "click"
    ]);
})();
export { rt as default, __tla };
