var ek = Object.defineProperty;
var tk = (e, n, t) => n in e ? ek(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var cu = (e, n, t) => (tk(e, typeof n != "symbol" ? n + "" : n, t), t);
import { j as o, u as zu, a as ue, b as Te, H as st, c as Aa, S as Fi, d as qe, F as nk, e as Ct, R as At, f as On, g as sn, h as rk, i as ak, B as Ye, k as sk, l as ik, m as qi, n as ok, E as lk, o as Ak, p as hp, q as ck, N as xe, M as It, r as Sn, s as uk, t as En, v as Ul, w as fk, T as Oa, I as Qt, P as pp, x as dk, y as mp, z as nt, A as ct, C as hk, D as pk, G as rA, J as Yu, K as gp, L as mk, O as dt, Q as bt, U as je, V as gk, W as qn, X as Ha, Y as ft, Z as vp, _ as vk, $ as St, a0 as wk, a1 as xk, a2 as wp, a3 as kk, a4 as bk, a5 as xp, a6 as mh, a7 as kp, a8 as yt, a9 as ua, aa as yk, ab as Ba, ac as bp, ad as Qr, ae as Vn, af as aA, ag as Nr, ah as Ek, ai as gh, aj as vh, ak as Bt, al as yp, am as Mk, an as Qs, ao as Hr, ap as Or, aq as Cs, ar as Br, as as fa, at as Sk, au as Ep, av as Ik, aw as Ll, ax as Vi, ay as Jk, az as Ds, aA as Tk, aB as it, aC as Ck, aD as Mp, aE as _i, aF as Es, aG as Pr, aH as Dk, aI as ot, aJ as lt, aK as $e, aL as ge, aM as be, aN as et, aO as Rk, aP as Ci, aQ as Sp, aR as Ip, aS as jk, aT as Ok, aU as Qk, aV as Nk, aW as Hk, aX as Bk, aY as Uk, aZ as yu, a_ as Lk, a$ as Pk, b0 as zk, b1 as Yk, b2 as Jp, b3 as Tp, b4 as wr, b5 as Fk, b6 as Zi, b7 as Fu, b8 as Cp, b9 as wh, ba as Dp, bb as Zk, bc as $i, bd as Zu, be as Gk, bf as Kk, bg as Gi, bh as Rp, bi as Xk, bj as Wk, bk as qk, bl as Eu, bm as Vk, bn as zn, bo as Bi, bp as Gu, bq as _k, br as $k, bs as jp, bt as eb, bu as tb, bv as nb, bw as rb, bx as ab, by as xh, bz as kh, bA as sb, bB as bh, bC as ib, bD as ob, bE as lb, bF as sA, bG as Pl, bH as Mu, bI as Ab, bJ as cb, bK as Op, bL as ub, bM as Qp, bN as fb, bO as db, bP as hb, bQ as pb, bR as xs, bS as yh, bT as Eh, bU as mb, bV as gb, bW as vb, bX as wb } from "./index-b0e98052.mjs";
const Np = ({ children: e, ...n }) => /* @__PURE__ */ o.jsx("div", { className: "flex h-full w-full flex-col px-5", ...n, children: /* @__PURE__ */ o.jsx("div", { className: "h-full w-full overflow-hidden rounded-t-[4px] shadow-sm", children: e }) }), Hp = ({ children: e, ...n }) => /* @__PURE__ */ o.jsx("div", { className: "flex h-[775px] w-[380px] flex-col rounded-3xl bg-white p-2 shadow-xl dark:bg-grey-900", ...n, children: /* @__PURE__ */ o.jsx("div", { className: "w-100 h-100 grow overflow-auto rounded-2xl border border-grey-100 dark:border-grey-950", children: e }) }), xb = ({ title: e, label: n, value: t, onChange: a, disabled: s, error: l, hint: A, checked: f, separator: u }) => {
  const d = zu(), [h, m] = ue(f);
  Te(() => {
    m(f);
  }, [f]);
  const v = (k) => {
    const b = k.target.checked;
    m(b), a(b);
  };
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsxs("div", { className: `flex flex-col gap-1 ${u && "pb-2"}`, children: [
      e && /* @__PURE__ */ o.jsx(st, { grey: !0, level: 6, children: e }),
      /* @__PURE__ */ o.jsxs("label", { className: `flex cursor-pointer items-start ${e && "-mb-1 mt-1"}`, htmlFor: d, children: [
        /* @__PURE__ */ o.jsx(
          "input",
          {
            checked: h,
            className: "relative float-left mt-[3px] h-4 w-4 appearance-none border-2 border-solid border-grey-200 bg-grey-200 outline-none checked:border-black checked:bg-black checked:after:absolute checked:after:-mt-px checked:after:ml-[3px] checked:after:block checked:after:h-[11px] checked:after:w-[6px] checked:after:rotate-45 checked:after:border-[2px] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer focus:shadow-none focus:transition-[border-color_0.2s] dark:border-grey-800 dark:bg-grey-800 dark:checked:border-green dark:checked:bg-green",
            disabled: s,
            id: d,
            type: "checkbox",
            value: t,
            onChange: v
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: `ml-2 flex flex-col ${A && "mb-2"}`, children: [
          /* @__PURE__ */ o.jsx("span", { className: `inline-block text-[1.425rem] dark:text-white ${A && "-mb-1"}`, children: n }),
          A && /* @__PURE__ */ o.jsx(Aa, { color: l ? "red" : "", children: A })
        ] })
      ] })
    ] }),
    (u || l) && /* @__PURE__ */ o.jsx(Fi, { className: l ? "border-red" : "" })
  ] });
}, Su = ({
  title: e,
  checkboxes: n,
  hint: t,
  error: a
}) => /* @__PURE__ */ o.jsxs("div", { children: [
  e && /* @__PURE__ */ o.jsx(st, { grey: !0, level: 6, children: e }),
  /* @__PURE__ */ o.jsx("div", { className: "mt-2 flex flex-col gap-1", children: n == null ? void 0 : n.map(({ key: s, ...l }) => /* @__PURE__ */ o.jsx(xb, { ...l }, s)) }),
  /* @__PURE__ */ o.jsx("div", { className: `flex flex-col ${t && "mb-2"}`, children: t && /* @__PURE__ */ o.jsx(Aa, { color: a ? "red" : "", children: t }) })
] }), kb = ({ hex: e, value: n, title: t, size: a = "md", isSelected: s, onSelect: l }) => {
  const A = Ct(null), f = (h) => {
    h.preventDefault(), l(n !== void 0 ? n : e);
  }, u = e.length === 4 && e[3] === "0" || e.length === 8 && e.slice(6) === "00";
  let d = "h-5 w-5";
  switch (a) {
    case "lg":
      d = "w-6 h-6";
      break;
  }
  return /* @__PURE__ */ o.jsx(
    "button",
    {
      ref: A,
      className: qe(
        "relative flex shrink-0 cursor-pointer items-center rounded-full border border-grey-200 dark:border-grey-800",
        d,
        s && "outline outline-2 outline-green"
      ),
      style: { backgroundColor: e },
      title: t,
      type: "button",
      onClick: f,
      children: u && /* @__PURE__ */ o.jsx("div", { className: "absolute left-0 top-0 z-10 w-[136%] origin-left rotate-45 border-b border-b-red" })
    }
  );
}, Ku = ({ title: e, value: n, swatches: t, swatchSize: a = "md", onSwatchChange: s, onTogglePicker: l, isExpanded: A, picker: f = !0, containerClassName: u }) => {
  let d = t.find((h) => h.value === n || h.hex === n);
  return A && (d = void 0), u = qe(
    "flex flex-col gap-3"
  ), /* @__PURE__ */ o.jsxs("div", { className: u, children: [
    e && /* @__PURE__ */ o.jsx(st, { useLabelTag: !0, children: e }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ o.jsx("div", { className: "flex items-center gap-1", children: t.map(({ customContent: h, ...m }) => h ? /* @__PURE__ */ o.jsx(nk, { children: h }, m.title) : /* @__PURE__ */ o.jsx(kb, { isSelected: (d == null ? void 0 : d.title) === m.title, size: a, onSelect: s, ...m }, m.title)) }),
      f && /* @__PURE__ */ o.jsxs("button", { "aria-label": "Pick color", className: "relative h-6 w-6 cursor-pointer rounded-full border border-grey-200 dark:border-grey-800", type: "button", onClick: l, children: [
        /* @__PURE__ */ o.jsx("div", { className: "absolute inset-0 rounded-full bg-[conic-gradient(hsl(360,100%,50%),hsl(315,100%,50%),hsl(270,100%,50%),hsl(225,100%,50%),hsl(180,100%,50%),hsl(135,100%,50%),hsl(90,100%,50%),hsl(45,100%,50%),hsl(0,100%,50%))]" }),
        n && !d && /* @__PURE__ */ o.jsx("div", { className: "absolute inset-[3px] overflow-hidden rounded-full border border-white dark:border-grey-950", style: { backgroundColor: n }, children: n === "transparent" && /* @__PURE__ */ o.jsx("div", { className: "absolute left-[3px] top-[3px] z-10 w-[136%] origin-left rotate-45 border-b border-b-red" }) })
      ] })
    ] })
  ] });
};
function Ns() {
  return (Ns = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }).apply(this, arguments);
}
function iA(e, n) {
  if (e == null)
    return {};
  var t, a, s = {}, l = Object.keys(e);
  for (a = 0; a < l.length; a++)
    n.indexOf(t = l[a]) >= 0 || (s[t] = e[t]);
  return s;
}
function Ki(e) {
  var n = Ct(e), t = Ct(function(a) {
    n.current && n.current(a);
  });
  return n.current = e, t.current;
}
var Xi = function(e, n, t) {
  return n === void 0 && (n = 0), t === void 0 && (t = 1), e > t ? t : e < n ? n : e;
}, Ui = function(e) {
  return "touches" in e;
}, Iu = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Mh = function(e, n, t) {
  var a = e.getBoundingClientRect(), s = Ui(n) ? function(l, A) {
    for (var f = 0; f < l.length; f++)
      if (l[f].identifier === A)
        return l[f];
    return l[0];
  }(n.touches, t) : n;
  return { left: Xi((s.pageX - (a.left + Iu(e).pageXOffset)) / a.width), top: Xi((s.pageY - (a.top + Iu(e).pageYOffset)) / a.height) };
}, Sh = function(e) {
  !Ui(e) && e.preventDefault();
}, Bp = At.memo(function(e) {
  var n = e.onMove, t = e.onKey, a = iA(e, ["onMove", "onKey"]), s = Ct(null), l = Ki(n), A = Ki(t), f = Ct(null), u = Ct(!1), d = On(function() {
    var k = function(S) {
      Sh(S), (Ui(S) ? S.touches.length > 0 : S.buttons > 0) && s.current ? l(Mh(s.current, S, f.current)) : y(!1);
    }, b = function() {
      return y(!1);
    };
    function y(S) {
      var T = u.current, O = Iu(s.current), B = S ? O.addEventListener : O.removeEventListener;
      B(T ? "touchmove" : "mousemove", k), B(T ? "touchend" : "mouseup", b);
    }
    return [function(S) {
      var T = S.nativeEvent, O = s.current;
      if (O && (Sh(T), !function(K, _) {
        return _ && !Ui(K);
      }(T, u.current) && O)) {
        if (Ui(T)) {
          u.current = !0;
          var B = T.changedTouches || [];
          B.length && (f.current = B[0].identifier);
        }
        O.focus(), l(Mh(O, T, f.current)), y(!0);
      }
    }, function(S) {
      var T = S.which || S.keyCode;
      T < 37 || T > 40 || (S.preventDefault(), A({ left: T === 39 ? 0.05 : T === 37 ? -0.05 : 0, top: T === 40 ? 0.05 : T === 38 ? -0.05 : 0 }));
    }, y];
  }, [A, l]), h = d[0], m = d[1], v = d[2];
  return Te(function() {
    return v;
  }, [v]), At.createElement("div", Ns({}, a, { onTouchStart: h, onMouseDown: h, className: "react-colorful__interactive", ref: s, onKeyDown: m, tabIndex: 0, role: "slider" }));
}), Xu = function(e) {
  return e.filter(Boolean).join(" ");
}, Up = function(e) {
  var n = e.color, t = e.left, a = e.top, s = a === void 0 ? 0.5 : a, l = Xu(["react-colorful__pointer", e.className]);
  return At.createElement("div", { className: l, style: { top: 100 * s + "%", left: 100 * t + "%" } }, At.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: n } }));
}, cn = function(e, n, t) {
  return n === void 0 && (n = 0), t === void 0 && (t = Math.pow(10, n)), Math.round(t * e) / t;
}, bb = function(e) {
  return Ib(Ju(e));
}, Ju = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? cn(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? cn(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, yb = function(e) {
  return Sb(Mb(e));
}, Eb = function(e) {
  var n = e.s, t = e.v, a = e.a, s = (200 - n) * t / 100;
  return { h: cn(e.h), s: cn(s > 0 && s < 200 ? n * t / 100 / (s <= 100 ? s : 200 - s) * 100 : 0), l: cn(s / 2), a: cn(a, 2) };
}, Tu = function(e) {
  var n = Eb(e);
  return "hsl(" + n.h + ", " + n.s + "%, " + n.l + "%)";
}, Mb = function(e) {
  var n = e.h, t = e.s, a = e.v, s = e.a;
  n = n / 360 * 6, t /= 100, a /= 100;
  var l = Math.floor(n), A = a * (1 - t), f = a * (1 - (n - l) * t), u = a * (1 - (1 - n + l) * t), d = l % 6;
  return { r: cn(255 * [a, f, A, A, u, a][d]), g: cn(255 * [u, a, a, f, A, A][d]), b: cn(255 * [A, A, u, a, a, f][d]), a: cn(s, 2) };
}, Rl = function(e) {
  var n = e.toString(16);
  return n.length < 2 ? "0" + n : n;
}, Sb = function(e) {
  var n = e.r, t = e.g, a = e.b, s = e.a, l = s < 1 ? Rl(cn(255 * s)) : "";
  return "#" + Rl(n) + Rl(t) + Rl(a) + l;
}, Ib = function(e) {
  var n = e.r, t = e.g, a = e.b, s = e.a, l = Math.max(n, t, a), A = l - Math.min(n, t, a), f = A ? l === n ? (t - a) / A : l === t ? 2 + (a - n) / A : 4 + (n - t) / A : 0;
  return { h: cn(60 * (f < 0 ? f + 6 : f)), s: cn(l ? A / l * 100 : 0), v: cn(l / 255 * 100), a: s };
}, Jb = At.memo(function(e) {
  var n = e.hue, t = e.onChange, a = Xu(["react-colorful__hue", e.className]);
  return At.createElement("div", { className: a }, At.createElement(Bp, { onMove: function(s) {
    t({ h: 360 * s.left });
  }, onKey: function(s) {
    t({ h: Xi(n + 360 * s.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": cn(n), "aria-valuemax": "360", "aria-valuemin": "0" }, At.createElement(Up, { className: "react-colorful__hue-pointer", left: n / 360, color: Tu({ h: n, s: 100, v: 100, a: 1 }) })));
}), Tb = At.memo(function(e) {
  var n = e.hsva, t = e.onChange, a = { backgroundColor: Tu({ h: n.h, s: 100, v: 100, a: 1 }) };
  return At.createElement("div", { className: "react-colorful__saturation", style: a }, At.createElement(Bp, { onMove: function(s) {
    t({ s: 100 * s.left, v: 100 - 100 * s.top });
  }, onKey: function(s) {
    t({ s: Xi(n.s + 100 * s.left, 0, 100), v: Xi(n.v - 100 * s.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + cn(n.s) + "%, Brightness " + cn(n.v) + "%" }, At.createElement(Up, { className: "react-colorful__saturation-pointer", top: 1 - n.v / 100, left: n.s / 100, color: Tu(n) })));
}), Lp = function(e, n) {
  if (e === n)
    return !0;
  for (var t in e)
    if (e[t] !== n[t])
      return !1;
  return !0;
}, Cb = function(e, n) {
  return e.toLowerCase() === n.toLowerCase() || Lp(Ju(e), Ju(n));
};
function Db(e, n, t) {
  var a = Ki(t), s = ue(function() {
    return e.toHsva(n);
  }), l = s[0], A = s[1], f = Ct({ color: n, hsva: l });
  Te(function() {
    if (!e.equal(n, f.current.color)) {
      var d = e.toHsva(n);
      f.current = { hsva: d, color: n }, A(d);
    }
  }, [n, e]), Te(function() {
    var d;
    Lp(l, f.current.hsva) || e.equal(d = e.fromHsva(l), f.current.color) || (f.current = { hsva: l, color: d }, a(d));
  }, [l, e, a]);
  var u = sn(function(d) {
    A(function(h) {
      return Object.assign({}, h, d);
    });
  }, []);
  return [l, u];
}
var Rb = typeof window < "u" ? rk : Te, jb = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Ih = /* @__PURE__ */ new Map(), Ob = function(e) {
  Rb(function() {
    var n = e.current ? e.current.ownerDocument : document;
    if (n !== void 0 && !Ih.has(n)) {
      var t = n.createElement("style");
      t.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Ih.set(n, t);
      var a = jb();
      a && t.setAttribute("nonce", a), n.head.appendChild(t);
    }
  }, []);
}, Qb = function(e) {
  var n = e.className, t = e.colorModel, a = e.color, s = a === void 0 ? t.defaultColor : a, l = e.onChange, A = iA(e, ["className", "colorModel", "color", "onChange"]), f = Ct(null);
  Ob(f);
  var u = Db(t, s, l), d = u[0], h = u[1], m = Xu(["react-colorful", n]);
  return At.createElement("div", Ns({}, A, { ref: f, className: m }), At.createElement(Tb, { hsva: d, onChange: h }), At.createElement(Jb, { hue: d.h, onChange: h, className: "react-colorful__last-control" }));
}, Nb = { defaultColor: "000", toHsva: bb, fromHsva: function(e) {
  return yb({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: Cb }, Hb = function(e) {
  return At.createElement(Qb, Ns({}, e, { colorModel: Nb }));
}, Bb = /^#?([0-9A-F]{3,8})$/i, Ub = function(e) {
  var n = e.color, t = n === void 0 ? "" : n, a = e.onChange, s = e.onBlur, l = e.escape, A = e.validate, f = e.format, u = e.process, d = iA(e, ["color", "onChange", "onBlur", "escape", "validate", "format", "process"]), h = ue(function() {
    return l(t);
  }), m = h[0], v = h[1], k = Ki(a), b = Ki(s), y = sn(function(T) {
    var O = l(T.target.value);
    v(O), A(O) && k(u ? u(O) : O);
  }, [l, u, A, k]), S = sn(function(T) {
    A(T.target.value) || v(l(t)), b(T);
  }, [t, l, A, b]);
  return Te(function() {
    v(l(t));
  }, [t, l]), At.createElement("input", Ns({}, d, { value: f ? f(m) : m, spellCheck: "false", onChange: y, onBlur: S }));
}, Jh = function(e) {
  return "#" + e;
}, Lb = function(e) {
  var n = e.prefixed, t = e.alpha, a = iA(e, ["prefixed", "alpha"]), s = sn(function(A) {
    return A.replace(/([^0-9A-F]+)/gi, "").substring(0, t ? 8 : 6);
  }, [t]), l = sn(function(A) {
    return function(f, u) {
      var d = Bb.exec(f), h = d ? d[1].length : 0;
      return h === 3 || h === 6 || !!u && h === 4 || !!u && h === 8;
    }(A, t);
  }, [t]);
  return At.createElement(Ub, Ns({}, a, { escape: s, format: n ? Jh : void 0, process: Jh, validate: l }));
};
const Pp = ({ hexValue: e, eyedropper: n, clearButtonValue: t, containerClassName: a, onChange: s }) => {
  const l = Ct(null), A = sn((v) => {
    var k, b, y;
    v.stopPropagation();
    const S = (k = l.current) == null ? void 0 : k.querySelector("input");
    v.target !== S && ((y = (b = l.current) == null ? void 0 : b.querySelector("input")) == null || y.focus(), v.preventDefault());
  }, []), f = Ct(!1), u = sn(() => {
    var v, k;
    f.current = !1, (k = (v = l.current) == null ? void 0 : v.querySelector("input")) == null || k.focus(), document.removeEventListener("mouseup", u), document.removeEventListener("touchend", u);
  }, []), d = sn(() => {
    f.current = !0, document.addEventListener("mouseup", u), document.addEventListener("touchend", u);
  }, [u]), h = sn((v) => {
    if (v.preventDefault(), !window.EyeDropper)
      return;
    f.current = !0, document.body.style.setProperty("pointer-events", "none"), new window.EyeDropper().open().then((b) => s == null ? void 0 : s(b.sRGBHex)).finally(() => {
      var b, y;
      f.current = !1, document.body.style.removeProperty("pointer-events"), (y = (b = l.current) == null ? void 0 : b.querySelector("input")) == null || y.focus();
    });
  }, [s]);
  Te(() => {
    var v, k;
    (k = (v = l.current) == null ? void 0 : v.querySelector("input")) == null || k.focus();
  }, []);
  const m = sn(() => {
    var v, k;
    (k = (v = l.current) == null ? void 0 : v.querySelector("input")) == null || k.focus();
  }, []);
  return a = qe(
    "mt-2",
    a
  ), /* @__PURE__ */ o.jsxs("div", { className: a, onMouseDown: A, onTouchStart: A, children: [
    /* @__PURE__ */ o.jsx(Hb, { className: "w-full", color: e || "#ffffff", onChange: s, onMouseDown: d, onTouchStart: d }),
    /* @__PURE__ */ o.jsxs("div", { className: "mt-3 flex gap-2", children: [
      /* @__PURE__ */ o.jsxs("div", { ref: l, className: "peer relative order-2 flex h-10 w-full items-center", onClick: m, children: [
        /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 top-[9px] z-10 ml-1 mr-2 text-grey-700", children: "#" }),
        /* @__PURE__ */ o.jsx(Lb, { "aria-label": "Color value", className: "z-[1] w-full rounded-md border border-transparent bg-grey-150 p-2 pl-6 transition-all hover:bg-grey-100 focus:border-green focus:bg-white focus:shadow-[0_0_0_1px_rgba(48,207,67,1)] dark:bg-grey-900 dark:text-white dark:focus:bg-grey-925", color: e, onChange: s }),
        n && !!window.EyeDropper && /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "absolute inset-y-0 right-3 z-50 my-auto h-4 w-4 p-[1px]",
            type: "button",
            onClick: h,
            children: /* @__PURE__ */ o.jsx(ak, { className: "h-full w-full" })
          }
        )
      ] }),
      t !== void 0 && /* @__PURE__ */ o.jsx(Ye, { color: "grey", value: "Clear", onClick: () => s == null ? void 0 : s(t) })
    ] })
  ] });
}, Pb = sk({
  colorPickers: []
}), Th = (e) => e.length === 4 ? e.replace(/#(.)(.)(.)/, "#$1$1$2$2$3$3") : e, Li = ({ testId: e, title: n, direction: t, value: a, hint: s, error: l, eyedropper: A, clearButtonValue: f, onChange: u, swatches: d = [], alwaysOpen: h = !1, debounceMs: m }) => {
  const [v, k] = ue(!1), [b, y] = ue(a), S = ik(Pb), T = zu();
  Te(() => {
    y((F) => Th(F || "") === a ? F : a);
  }, [a]), Te(() => (S.colorPickers.push({ id: T, setExpanded: k }), () => {
    S.colorPickers = S.colorPickers.filter((F) => F.id !== T);
  }), [S, T]), Te(() => {
    if (v) {
      S.colorPickers.filter((ee) => ee.id !== T).forEach((ee) => ee.setExpanded(!1));
      const F = () => {
        k(!1);
      };
      return document.addEventListener("click", F), () => {
        document.removeEventListener("click", F);
      };
    }
  }, [S, T, v]);
  const O = On(() => u && m ? qi(u, m) : u, [m, u]), B = (F) => {
    y(F), O == null || O(F ? Th(F) : null);
  };
  let K = /* @__PURE__ */ o.jsx(
    Ku,
    {
      isExpanded: v,
      swatches: d,
      value: b,
      onSwatchChange: (F) => {
        B(F), k(!1);
      },
      onTogglePicker: () => !h && k(!v)
    }
  );
  n && (K = /* @__PURE__ */ o.jsxs("div", { className: qe("flex w-full cursor-pointer items-start first:mt-0 dark:text-white", t === "rtl" && "flex-row-reverse"), children: [
    /* @__PURE__ */ o.jsx("div", { className: "shrink-0", children: K }),
    /* @__PURE__ */ o.jsxs("div", { className: qe("flex-1", t === "rtl" ? "pr-2" : "pl-2", s ? "mt-[-2px]" : "mt-[1px]"), onClick: () => !h && k(!v), children: [
      n,
      s && /* @__PURE__ */ o.jsx("div", { className: `text-xs ${l ? "text-red" : "text-grey-700"}`, children: s })
    ] })
  ] }));
  const _ = d.find((F) => F.value === b);
  return /* @__PURE__ */ o.jsxs("div", { className: "mt-2 flex-col", "data-testid": e, onClick: (F) => F.stopPropagation(), children: [
    K,
    (h || v) && /* @__PURE__ */ o.jsx(Pp, { clearButtonValue: f, eyedropper: A, hexValue: (_ == null ? void 0 : _.hex) || b || void 0, onChange: B })
  ] });
};
function zb(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
const Yb = function(e) {
  let n = "pending", t;
  const a = e().then(
    (l) => {
      n = "success", t = l;
    },
    (l) => {
      n = "error", t = l;
    }
  );
  return { read: () => {
    switch (n) {
      case "pending":
        throw a;
      case "error":
        throw t;
      default:
        return t;
    }
  } };
}, Fb = ({
  editor: e,
  value: n,
  onChange: t,
  onBlur: a,
  placeholder: s,
  nodes: l,
  emojiPicker: A = !0
}) => {
  const f = sn((b) => {
    var y;
    try {
      hp({
        error: b,
        tags: { lexical: !0 },
        contexts: {
          koenig: {
            version: (y = window["@tryghost/koenig-lexical"]) == null ? void 0 : y.version
          }
        }
      });
    } catch (S) {
      console.error(S);
    }
    console.error(b);
  }, []), { setFocusState: u } = ck(), d = () => {
    a && a(), u(!1);
  }, h = () => {
    u(!0);
  }, m = On(() => new Proxy({}, {
    get: (b, y) => e.read()[y]
  }), [e]), v = {
    DEFAULT_NODES: m.DEFAULT_TRANSFORMERS,
    BASIC_NODES: m.BASIC_TRANSFORMERS,
    MINIMAL_NODES: m.MINIMAL_TRANSFORMERS
  }, k = (b) => {
    const S = new DOMParser().parseFromString(b, "text/html");
    S.querySelectorAll("*").forEach((O) => {
      O.style.removeProperty("white-space"), O.getAttribute("style") || O.removeAttribute("style");
    }), S.body.innerHTML !== n && (t == null || t(S.body.innerHTML));
  };
  return /* @__PURE__ */ o.jsx(
    m.KoenigComposer,
    {
      nodes: m[l || "DEFAULT_NODES"],
      onError: f,
      children: /* @__PURE__ */ o.jsxs(
        m.KoenigComposableEditor,
        {
          className: "koenig-lexical koenig-lexical-editor-input",
          darkMode: !1,
          isSnippetsEnabled: !1,
          markdownTransformers: v[l || "DEFAULT_NODES"],
          placeholderClassName: "koenig-lexical-editor-input-placeholder line-clamp-1",
          placeholderText: s,
          singleParagraph: !0,
          onBlur: d,
          onFocus: h,
          children: [
            /* @__PURE__ */ o.jsx(m.HtmlOutputPlugin, { html: n, setHtml: k }),
            A ? /* @__PURE__ */ o.jsx(m.EmojiPickerPlugin, {}) : null
          ]
        }
      )
    }
  );
}, Zb = ({
  className: e,
  ...n
}) => {
  const { fetchKoenigLexical: t } = ok(), a = On(() => Yb(t), [t]);
  return /* @__PURE__ */ o.jsx("div", { className: e || "w-full", children: /* @__PURE__ */ o.jsx("div", { className: "koenig-react-editor w-full [&_*]:!font-inherit [&_*]:!text-inherit", children: /* @__PURE__ */ o.jsx(lk, { name: "editor", children: /* @__PURE__ */ o.jsx(Ak, { fallback: /* @__PURE__ */ o.jsx("p", { className: "koenig-react-editor-loading", children: "Loading editor..." }), children: /* @__PURE__ */ o.jsx(Fb, { ...n, editor: a }) }) }) }) });
}, Wu = ({
  title: e,
  hideTitle: n,
  error: t,
  hint: a,
  value: s,
  clearBg: l = !1,
  className: A = "",
  containerClassName: f = "",
  hintClassName: u = "",
  unstyled: d = !1,
  ...h
}) => {
  const m = d ? "" : qe(
    "flex min-h-[32px] items-center rounded-md border border-transparent py-1.5 md:min-h-[36px]",
    l ? "bg-transparent" : "bg-grey-150 px-3 dark:bg-grey-900",
    t ? "border-red" : "transition-all hover:bg-grey-100 has-[:focus]:border-green has-[:focus]:bg-white has-[:focus]:shadow-[0_0_0_1px_rgba(48,207,67,1)] dark:selection:bg-[rgba(88,101,116,0.99)] dark:hover:bg-grey-925 dark:has-[:focus]:bg-grey-950",
    e && !n && !l && "mt-2",
    A
  );
  return /* @__PURE__ */ o.jsxs("div", { className: `flex flex-col ${f}`, children: [
    e && /* @__PURE__ */ o.jsx(st, { className: n ? "sr-only" : "", grey: !0, useLabelTag: !0, children: e }),
    /* @__PURE__ */ o.jsx("div", { className: m, children: /* @__PURE__ */ o.jsx(Zb, { ...h, value: s }) }),
    a && /* @__PURE__ */ o.jsx(Aa, { className: u, color: t ? "red" : "", children: a })
  ] });
}, qu = ({ id: e, title: n, options: t, onSelect: a, error: s, hint: l, selectedOption: A, separator: f }) => {
  const u = (d) => {
    a(d.target.value);
  };
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsxs("div", { className: `flex flex-col gap-2 ${f && "pb-2"}`, children: [
      n && /* @__PURE__ */ o.jsx(st, { level: 6, children: n }),
      t.map((d) => /* @__PURE__ */ o.jsxs("label", { className: `flex cursor-pointer items-start ${n && "-mb-1 mt-1"}`, htmlFor: d.value, children: [
        /* @__PURE__ */ o.jsx(
          "input",
          {
            checked: A === d.value,
            className: "relative float-left mt-[3px] h-4 w-4 min-w-[16px] appearance-none rounded-full border-2 border-solid border-grey-300 after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-green checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-green checked:after:bg-green checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer focus:shadow-none focus:outline-none focus:ring-0 checked:focus:border-green dark:border-grey-800 dark:text-white dark:checked:border-green dark:checked:after:border-green dark:checked:after:bg-green dark:checked:focus:border-green",
            id: d.value,
            name: e,
            type: "radio",
            value: d.value,
            onChange: u
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: `ml-2 flex flex-col ${d.hint && "mb-2"}`, children: [
          /* @__PURE__ */ o.jsx("span", { className: `inline-block text-md dark:text-white ${d.hint && "-mb-1"}`, children: d.label }),
          d.hint && /* @__PURE__ */ o.jsx(Aa, { children: d.hint })
        ] })
      ] }, d.value)),
      l && /* @__PURE__ */ o.jsx(Aa, { color: s ? "red" : "", children: l })
    ] }),
    (f || s) && /* @__PURE__ */ o.jsx(Fi, { className: s ? "border-red" : "" })
  ] });
}, Pi = ({ children: e, gap: n = "md", className: t }) => {
  let a = "gap-3";
  switch (n) {
    case "sm":
      a = "gap-2";
      break;
    case "md":
      a = "gap-3";
      break;
    case "lg":
      a = "gap-4";
      break;
  }
  return t = qe(
    "flex flex-col gap-3",
    a,
    t
  ), /* @__PURE__ */ o.jsx("div", { className: t, children: e });
}, Gb = ({
  title: e = "Upgrade your plan",
  prompt: n,
  okLabel: t = "Upgrade",
  formSheet: a = !1,
  onOk: s
}) => /* @__PURE__ */ o.jsx(
  It,
  {
    backDropClick: !1,
    formSheet: a,
    okColor: "green",
    okLabel: t,
    testId: "limit-modal",
    title: e,
    width: 540,
    onOk: s,
    children: /* @__PURE__ */ o.jsx("div", { className: "py-4 leading-9", children: n })
  }
), eo = xe.create(Gb), Vu = ({ heading: e, children: n, className: t }) => (t = qe(
  "w-full p-[8vmin] pt-5",
  t
), /* @__PURE__ */ o.jsxs("div", { className: t, children: [
  e && /* @__PURE__ */ o.jsx(st, { className: "mb-8", children: e }),
  n
] })), oA = ({
  items: e,
  backIcon: n = !1,
  snapBackIcon: t = !0,
  onBack: a,
  containerClassName: s,
  itemClassName: l,
  activeItemClassName: A,
  separatorClassName: f
}) => {
  const u = e.length;
  let d = 0;
  return s = qe(
    "flex items-center gap-2 text-sm",
    s
  ), A = qe(
    "font-bold",
    A
  ), l = qe(
    "text-sm",
    l
  ), /* @__PURE__ */ o.jsxs("div", { className: s, children: [
    n && /* @__PURE__ */ o.jsx(Ye, { className: t ? "mr-1" : "mr-6", icon: "arrow-left", iconColorClass: "dark:text-white", size: "sm", link: !0, onClick: a }),
    e.map((h) => {
      const m = d === u - 1 ? /* @__PURE__ */ o.jsx("span", { className: A, children: h.label }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: `${l} ${h.onClick && "-mx-1 cursor-pointer rounded-sm px-1 py-px hover:bg-grey-100 dark:hover:bg-grey-900"}`,
            type: "button",
            onClick: h.onClick,
            children: h.label
          },
          `bc-${d}`
        ),
        /* @__PURE__ */ o.jsx("span", { className: f, children: "/" })
      ] });
      return d = d + 1, m;
    })
  ] });
}, Hs = ({
  testId: e,
  title: n,
  titleHeadingLevel: t = 4,
  size: a = "full",
  width: s,
  height: l,
  sidebar: A = "",
  preview: f,
  dirty: u = !1,
  cancelLabel: d = "Cancel",
  okLabel: h = "OK",
  okColor: m = "black",
  previewToolbar: v = !0,
  leftToolbar: k = !0,
  rightToolbar: b = !0,
  deviceSelector: y = !0,
  siteLink: S,
  previewToolbarURLs: T,
  previewBgColor: O = "grey",
  selectedURL: B,
  previewToolbarTabs: K,
  previewToolbarBreadcrumbs: _,
  buttonsDisabled: F,
  sidebarButtons: ee,
  sidebarHeader: oe,
  sidebarPadding: re = !0,
  sidebarContentClasses: $,
  enableCMDS: ae = !0,
  backDropClick: Z,
  onCancel: N,
  onOk: Y,
  afterClose: W,
  onSelectURL: H,
  onSelectDesktopView: G,
  onSelectMobileView: pe,
  onBreadcrumbsBack: ke
}) => {
  const X = Sn(), { setGlobalDirtyState: Ie } = uk();
  Te(() => {
    Ie(u);
  }, [u, Ie]), Te(() => {
    if (Y) {
      const Ne = (Et) => {
        (Et.metaKey || Et.ctrlKey) && Et.key === "s" && (Et.preventDefault(), Y());
      };
      if (ae)
        return window.addEventListener("keydown", Ne), () => {
          window.removeEventListener("keydown", Ne);
        };
    }
  });
  const [Me, ye] = ue("desktop");
  if (Me === "mobile" && y ? f = /* @__PURE__ */ o.jsx(Hp, { "data-testid": "preview-mobile", children: f }) : Me === "desktop" && y && (f = /* @__PURE__ */ o.jsx(Np, { "data-testid": "preview-desktop", children: f })), v) {
    let Ne = /* @__PURE__ */ o.jsx(o.Fragment, {});
    T ? Ne = /* @__PURE__ */ o.jsx(
      En,
      {
        options: T,
        selectedOption: T.find((Xe) => Xe.value === B),
        onSelect: (Xe) => Xe && (H == null ? void 0 : H(Xe.value))
      }
    ) : K ? Ne = /* @__PURE__ */ o.jsx(
      Oa,
      {
        border: !1,
        selectedTab: B,
        tabs: K,
        width: "wide",
        onTabChange: H
      }
    ) : _ && (Ne = /* @__PURE__ */ o.jsx(
      oA,
      {
        activeItemClassName: "hidden md:!block md:!visible",
        containerClassName: "whitespace-nowrap",
        itemClassName: "hidden md:!block md:!visible",
        items: _,
        separatorClassName: "hidden md:!block md:!visible",
        backIcon: !0,
        onBack: ke
      }
    ));
    const Et = "text-black dark:text-green", Xt = "text-grey-500 dark:text-grey-600", Ve = [
      {
        icon: "laptop",
        label: "Desktop",
        hideLabel: !0,
        link: !0,
        size: "sm",
        iconColorClass: Me === "desktop" ? Et : Xt,
        onClick: G || (() => {
          ye("desktop");
        })
      },
      {
        icon: "mobile",
        label: "Mobile",
        hideLabel: !0,
        link: !0,
        size: "sm",
        iconColorClass: Me === "mobile" ? Et : Xt,
        onClick: pe || (() => {
          ye("mobile");
        })
      }
    ], Le = y && /* @__PURE__ */ o.jsx(
      Ul,
      {
        buttons: Ve
      }
    );
    let te = "";
    O === "grey" ? te = "bg-grey-50 dark:bg-black" : O === "greygradient" && (te = "bg-gradient-to-tr from-white to-[#f9f9fa] dark:from-grey-950 dark:to-black");
    const Ee = qe(
      "min-w-100 absolute inset-y-0 left-0 right-[400px] flex w-full grow flex-col overflow-y-auto",
      te
    );
    let Ce;
    S && (Ce = /* @__PURE__ */ o.jsx("div", { className: "ml-3 border-l border-grey-400 dark:border-grey-800", children: /* @__PURE__ */ o.jsxs("a", { className: "ml-3 flex items-center gap-1 text-sm", href: S, rel: "noopener noreferrer", target: "_blank", children: [
      "View site ",
      /* @__PURE__ */ o.jsx(Qt, { name: "arrow-top-right", size: "xs" })
    ] }) })), f = /* @__PURE__ */ o.jsxs("div", { className: Ee, children: [
      v && /* @__PURE__ */ o.jsxs("header", { className: "relative flex h-[74px] shrink-0 items-center justify-center px-3 py-5", "data-testid": "design-toolbar", children: [
        k && /* @__PURE__ */ o.jsx("div", { className: "absolute left-5 flex h-full items-center", children: Ne }),
        b && /* @__PURE__ */ o.jsxs("div", { className: "absolute right-5 flex h-full items-center", children: [
          Le,
          Ce
        ] })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "flex grow items-center justify-center text-sm text-grey-400", children: f })
    ] });
  }
  const de = [];
  return ee || (de.push({
    key: "cancel-modal",
    label: d,
    onClick: N || (() => {
      fk(u, () => {
        X.remove(), W == null || W();
      });
    }),
    disabled: F
  }), de.push({
    key: "ok-modal",
    label: h,
    color: m,
    onClick: Y,
    disabled: F
  })), /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: W,
      animate: !1,
      backDropClick: Z,
      dirty: u,
      footer: !1,
      height: l,
      padding: !1,
      size: a,
      testId: e,
      title: "",
      width: s,
      hideXOnMobile: !0,
      children: /* @__PURE__ */ o.jsxs("div", { className: "flex h-full grow", children: [
        /* @__PURE__ */ o.jsx("div", { className: `relative hidden grow flex-col [@media(min-width:801px)]:!visible [@media(min-width:801px)]:!flex ${O === "grey" ? "bg-grey-50" : "bg-white dark:bg-black"}`, children: f }),
        A && /* @__PURE__ */ o.jsxs("div", { className: "relative flex h-full w-full flex-col border-l border-grey-100 dark:border-grey-900 [@media(min-width:801px)]:w-auto [@media(min-width:801px)]:basis-[400px]", children: [
          oe || /* @__PURE__ */ o.jsxs("div", { className: "flex max-h-[82px] items-center justify-between gap-3 px-7 py-6", children: [
            /* @__PURE__ */ o.jsx(st, { level: t, children: n }),
            ee || /* @__PURE__ */ o.jsx(Ul, { buttons: de })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: `${oe ? "" : "absolute inset-x-0 bottom-0 top-[74px] grow"} ${re && "p-7 pt-0"} flex flex-col justify-between overflow-y-auto ${$ && $}`, children: A })
        ] })
      ] })
    }
  );
}, Kb = ({ offset: e, onTrigger: n }) => {
  const t = Ct(null);
  return Te(() => {
    const a = new IntersectionObserver((s) => {
      s[0].intersectionRatio <= 0 || n();
    });
    return t.current && a.observe(t.current), () => a.disconnect();
  }, [n]), /* @__PURE__ */ o.jsx("div", { ref: t, className: "absolute w-full", style: { bottom: e } });
}, zp = ({
  trigger: e,
  triggerButtonProps: n,
  items: t,
  position: a = "left"
}) => (e || (e = /* @__PURE__ */ o.jsx(Ye, { icon: "ellipsis", label: "Menu", hideLabel: !0, ...n })), /* @__PURE__ */ o.jsx(pp, { position: a, trigger: e, closeOnItemClick: !0, children: /* @__PURE__ */ o.jsx("div", { className: "flex min-w-[160px] flex-col justify-stretch py-1", role: "none", children: t.map((s) => /* @__PURE__ */ o.jsx("button", { className: "mx-1 block cursor-pointer rounded-[2.5px] px-4 py-1.5 text-left text-sm hover:bg-grey-100 dark:hover:bg-grey-800", type: "button", onClick: s.onClick, children: s.label }, s.id)) }) })), uu = ({
  className: e,
  children: n,
  colSpan: t,
  sticky: a = !1,
  ...s
}) => {
  const l = qe(
    "!py-2 !pl-0 !pr-6 text-left align-top",
    a && "sticky top-0 bg-white",
    s.onClick && "hover:cursor-pointer",
    e
  );
  return /* @__PURE__ */ o.jsx("th", { className: l, colSpan: t, ...s, children: /* @__PURE__ */ o.jsx(st, { className: "whitespace-nowrap", level: 6, children: n }) });
}, Yp = ({
  left: e,
  center: n,
  right: t,
  sticky: a = !0,
  containerClassName: s,
  children: l
}) => {
  const A = qe(
    "z-50 h-22 min-h-[92px] p-8 px-6 tablet:px-12",
    !l && "flex items-center justify-between gap-3",
    a && "sticky top-0",
    s
  );
  if (!l) {
    if (e) {
      const f = qe(
        "flex flex-auto items-center",
        t && n && "basis-1/3",
        !t && n && "basis-1/2"
      );
      e = /* @__PURE__ */ o.jsx("div", { className: f, children: e });
    }
    if (n) {
      const f = qe(
        "flex flex-auto items-center justify-center",
        e && t && "basis-1/3",
        (e && !t || !e && t) && "basis-1/2"
      );
      n = /* @__PURE__ */ o.jsx("div", { className: f, children: n });
    }
    if (t) {
      const f = qe(
        "flex flex-auto items-center justify-end",
        e && n && "basis-1/3",
        !e && n && "basis-1/2"
      );
      t = /* @__PURE__ */ o.jsx("div", { className: f, children: t });
    }
  }
  return /* @__PURE__ */ o.jsx("div", { className: A, children: l || /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    e,
    n,
    t
  ] }) });
}, Fp = ({ items: e, setItems: n, blank: t, canAddNewItem: a }) => {
  const [s, l] = ue(e.map((v, k) => ({ item: v, id: k.toString() }))), [A, f] = ue(t);
  return Te(() => {
    const v = s.map(({ item: k }) => k);
    a(A) && v.push(A), JSON.stringify(v) !== JSON.stringify(e) && n(v);
  }, [s, A, e, n, a]), {
    items: s,
    updateItem: (v, k) => {
      const b = s.map((y) => y.id === v ? { ...y, item: k } : y);
      l(b), n(b.map((y) => y.item));
    },
    addItem: () => {
      if (a(A)) {
        const v = s.reduce((b, y) => Math.max(b, parseInt(y.id)), 0), k = s.concat({ item: A, id: (v + 1).toString() });
        l(k), n(k.map((b) => b.item)), f(t);
      }
    },
    removeItem: (v) => {
      const k = s.filter((b) => b.id !== v);
      l(k), n(k.map((b) => b.item));
    },
    moveItem: (v, k) => {
      if (v !== k) {
        const b = s.findIndex((T) => T.id === v), y = k ? s.findIndex((T) => T.id === k) : 0, S = dk(s, b, y);
        l(S), n(S.map((T) => T.item));
      }
    },
    newItem: A,
    setNewItem: f
  };
}, Xb = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
};
var Zp = Xb;
const Wb = "2.0.0", Gp = 256, qb = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Vb = 16, _b = Gp - 6, $b = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var Kp = {
  MAX_LENGTH: Gp,
  MAX_SAFE_COMPONENT_LENGTH: Vb,
  MAX_SAFE_BUILD_LENGTH: _b,
  MAX_SAFE_INTEGER: qb,
  RELEASE_TYPES: $b,
  SEMVER_SPEC_VERSION: Wb,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
}, Cu = { exports: {} };
(function(e, n) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: t,
    MAX_SAFE_BUILD_LENGTH: a,
    MAX_LENGTH: s
  } = Kp, l = Zp;
  n = e.exports = {};
  const A = n.re = [], f = n.safeRe = [], u = n.src = [], d = n.t = {};
  let h = 0;
  const m = "[a-zA-Z0-9-]", v = [
    ["\\s", 1],
    ["\\d", s],
    [m, a]
  ], k = (y) => {
    for (const [S, T] of v)
      y = y.split(`${S}*`).join(`${S}{0,${T}}`).split(`${S}+`).join(`${S}{1,${T}}`);
    return y;
  }, b = (y, S, T) => {
    const O = k(S), B = h++;
    l(y, B, S), d[y] = B, u[B] = S, A[B] = new RegExp(S, T ? "g" : void 0), f[B] = new RegExp(O, T ? "g" : void 0);
  };
  b("NUMERICIDENTIFIER", "0|[1-9]\\d*"), b("NUMERICIDENTIFIERLOOSE", "\\d+"), b("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${m}*`), b("MAINVERSION", `(${u[d.NUMERICIDENTIFIER]})\\.(${u[d.NUMERICIDENTIFIER]})\\.(${u[d.NUMERICIDENTIFIER]})`), b("MAINVERSIONLOOSE", `(${u[d.NUMERICIDENTIFIERLOOSE]})\\.(${u[d.NUMERICIDENTIFIERLOOSE]})\\.(${u[d.NUMERICIDENTIFIERLOOSE]})`), b("PRERELEASEIDENTIFIER", `(?:${u[d.NUMERICIDENTIFIER]}|${u[d.NONNUMERICIDENTIFIER]})`), b("PRERELEASEIDENTIFIERLOOSE", `(?:${u[d.NUMERICIDENTIFIERLOOSE]}|${u[d.NONNUMERICIDENTIFIER]})`), b("PRERELEASE", `(?:-(${u[d.PRERELEASEIDENTIFIER]}(?:\\.${u[d.PRERELEASEIDENTIFIER]})*))`), b("PRERELEASELOOSE", `(?:-?(${u[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[d.PRERELEASEIDENTIFIERLOOSE]})*))`), b("BUILDIDENTIFIER", `${m}+`), b("BUILD", `(?:\\+(${u[d.BUILDIDENTIFIER]}(?:\\.${u[d.BUILDIDENTIFIER]})*))`), b("FULLPLAIN", `v?${u[d.MAINVERSION]}${u[d.PRERELEASE]}?${u[d.BUILD]}?`), b("FULL", `^${u[d.FULLPLAIN]}$`), b("LOOSEPLAIN", `[v=\\s]*${u[d.MAINVERSIONLOOSE]}${u[d.PRERELEASELOOSE]}?${u[d.BUILD]}?`), b("LOOSE", `^${u[d.LOOSEPLAIN]}$`), b("GTLT", "((?:<|>)?=?)"), b("XRANGEIDENTIFIERLOOSE", `${u[d.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), b("XRANGEIDENTIFIER", `${u[d.NUMERICIDENTIFIER]}|x|X|\\*`), b("XRANGEPLAIN", `[v=\\s]*(${u[d.XRANGEIDENTIFIER]})(?:\\.(${u[d.XRANGEIDENTIFIER]})(?:\\.(${u[d.XRANGEIDENTIFIER]})(?:${u[d.PRERELEASE]})?${u[d.BUILD]}?)?)?`), b("XRANGEPLAINLOOSE", `[v=\\s]*(${u[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[d.XRANGEIDENTIFIERLOOSE]})(?:${u[d.PRERELEASELOOSE]})?${u[d.BUILD]}?)?)?`), b("XRANGE", `^${u[d.GTLT]}\\s*${u[d.XRANGEPLAIN]}$`), b("XRANGELOOSE", `^${u[d.GTLT]}\\s*${u[d.XRANGEPLAINLOOSE]}$`), b("COERCEPLAIN", `(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?`), b("COERCE", `${u[d.COERCEPLAIN]}(?:$|[^\\d])`), b("COERCEFULL", u[d.COERCEPLAIN] + `(?:${u[d.PRERELEASE]})?(?:${u[d.BUILD]})?(?:$|[^\\d])`), b("COERCERTL", u[d.COERCE], !0), b("COERCERTLFULL", u[d.COERCEFULL], !0), b("LONETILDE", "(?:~>?)"), b("TILDETRIM", `(\\s*)${u[d.LONETILDE]}\\s+`, !0), n.tildeTrimReplace = "$1~", b("TILDE", `^${u[d.LONETILDE]}${u[d.XRANGEPLAIN]}$`), b("TILDELOOSE", `^${u[d.LONETILDE]}${u[d.XRANGEPLAINLOOSE]}$`), b("LONECARET", "(?:\\^)"), b("CARETTRIM", `(\\s*)${u[d.LONECARET]}\\s+`, !0), n.caretTrimReplace = "$1^", b("CARET", `^${u[d.LONECARET]}${u[d.XRANGEPLAIN]}$`), b("CARETLOOSE", `^${u[d.LONECARET]}${u[d.XRANGEPLAINLOOSE]}$`), b("COMPARATORLOOSE", `^${u[d.GTLT]}\\s*(${u[d.LOOSEPLAIN]})$|^$`), b("COMPARATOR", `^${u[d.GTLT]}\\s*(${u[d.FULLPLAIN]})$|^$`), b("COMPARATORTRIM", `(\\s*)${u[d.GTLT]}\\s*(${u[d.LOOSEPLAIN]}|${u[d.XRANGEPLAIN]})`, !0), n.comparatorTrimReplace = "$1$2$3", b("HYPHENRANGE", `^\\s*(${u[d.XRANGEPLAIN]})\\s+-\\s+(${u[d.XRANGEPLAIN]})\\s*$`), b("HYPHENRANGELOOSE", `^\\s*(${u[d.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[d.XRANGEPLAINLOOSE]})\\s*$`), b("STAR", "(<|>)?=?\\s*\\*"), b("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), b("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Cu, Cu.exports);
var ey = Cu.exports;
const ty = Object.freeze({ loose: !0 }), ny = Object.freeze({}), ry = (e) => e ? typeof e != "object" ? ty : e : ny;
var ay = ry;
const Ch = /^[0-9]+$/, Xp = (e, n) => {
  const t = Ch.test(e), a = Ch.test(n);
  return t && a && (e = +e, n = +n), e === n ? 0 : t && !a ? -1 : a && !t ? 1 : e < n ? -1 : 1;
}, sy = (e, n) => Xp(n, e);
var iy = {
  compareIdentifiers: Xp,
  rcompareIdentifiers: sy
};
const jl = Zp, { MAX_LENGTH: Dh, MAX_SAFE_INTEGER: Ol } = Kp, { safeRe: Rh, t: jh } = ey, oy = ay, { compareIdentifiers: ks } = iy;
let ly = class hr {
  constructor(n, t) {
    if (t = oy(t), n instanceof hr) {
      if (n.loose === !!t.loose && n.includePrerelease === !!t.includePrerelease)
        return n;
      n = n.version;
    } else if (typeof n != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof n}".`);
    if (n.length > Dh)
      throw new TypeError(
        `version is longer than ${Dh} characters`
      );
    jl("SemVer", n, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
    const a = n.trim().match(t.loose ? Rh[jh.LOOSE] : Rh[jh.FULL]);
    if (!a)
      throw new TypeError(`Invalid Version: ${n}`);
    if (this.raw = n, this.major = +a[1], this.minor = +a[2], this.patch = +a[3], this.major > Ol || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Ol || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Ol || this.patch < 0)
      throw new TypeError("Invalid patch version");
    a[4] ? this.prerelease = a[4].split(".").map((s) => {
      if (/^[0-9]+$/.test(s)) {
        const l = +s;
        if (l >= 0 && l < Ol)
          return l;
      }
      return s;
    }) : this.prerelease = [], this.build = a[5] ? a[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(n) {
    if (jl("SemVer.compare", this.version, this.options, n), !(n instanceof hr)) {
      if (typeof n == "string" && n === this.version)
        return 0;
      n = new hr(n, this.options);
    }
    return n.version === this.version ? 0 : this.compareMain(n) || this.comparePre(n);
  }
  compareMain(n) {
    return n instanceof hr || (n = new hr(n, this.options)), ks(this.major, n.major) || ks(this.minor, n.minor) || ks(this.patch, n.patch);
  }
  comparePre(n) {
    if (n instanceof hr || (n = new hr(n, this.options)), this.prerelease.length && !n.prerelease.length)
      return -1;
    if (!this.prerelease.length && n.prerelease.length)
      return 1;
    if (!this.prerelease.length && !n.prerelease.length)
      return 0;
    let t = 0;
    do {
      const a = this.prerelease[t], s = n.prerelease[t];
      if (jl("prerelease compare", t, a, s), a === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (a === void 0)
        return -1;
      if (a === s)
        continue;
      return ks(a, s);
    } while (++t);
  }
  compareBuild(n) {
    n instanceof hr || (n = new hr(n, this.options));
    let t = 0;
    do {
      const a = this.build[t], s = n.build[t];
      if (jl("build compare", t, a, s), a === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (a === void 0)
        return -1;
      if (a === s)
        continue;
      return ks(a, s);
    } while (++t);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(n, t, a) {
    switch (n) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, a);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, a);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", t, a), this.inc("pre", t, a);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", t, a), this.inc("pre", t, a);
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const s = Number(a) ? 1 : 0;
        if (!t && a === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0)
          this.prerelease = [s];
        else {
          let l = this.prerelease.length;
          for (; --l >= 0; )
            typeof this.prerelease[l] == "number" && (this.prerelease[l]++, l = -2);
          if (l === -1) {
            if (t === this.prerelease.join(".") && a === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(s);
          }
        }
        if (t) {
          let l = [t, s];
          a === !1 && (l = [t]), ks(this.prerelease[0], t) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = l) : this.prerelease = l;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${n}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var Ay = ly;
const Oh = Ay, cy = (e, n, t = !1) => {
  if (e instanceof Oh)
    return e;
  try {
    return new Oh(e, n);
  } catch (a) {
    if (!t)
      return null;
    throw a;
  }
};
var uy = cy;
const fy = /* @__PURE__ */ mp(uy);
function Qh(e) {
  var t;
  if (e.includes("-pre."))
    try {
      const a = fy(e, { includePrerelease: !0 });
      return a && ((t = a.build) != null && t[0]) ? `https://github.com/TryGhost/Ghost/commit/${a.build[0]}` : "";
    } catch {
      return "";
    }
  return `https://github.com/TryGhost/Ghost/releases/tag/v${e.replace("+moya", "")}`;
}
function dy(e, n) {
  var a;
  const t = !!((a = e.match) != null && a.call(e, /production/i));
  return !!(t && n !== "mysql8" || !t && n === "mysql5");
}
const hy = xe.create(({}) => {
  const { updateRoute: e } = nt();
  let t = ct().config;
  const a = hk();
  function s() {
    return (/* @__PURE__ */ new Date()).getFullYear();
  }
  function l() {
    return !!t.enableDeveloperExperiments;
  }
  function A() {
    var u;
    return !((u = t.hostSettings) != null && u.siteId);
  }
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        e("");
      },
      cancelLabel: "",
      footer: /* @__PURE__ */ o.jsx(o.Fragment, {}),
      topRightContent: "close",
      width: 540,
      children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-4 pb-7 text-sm", children: [
        /* @__PURE__ */ o.jsx(pk, { className: "h-auto w-[120px] dark:invert" }),
        /* @__PURE__ */ o.jsxs("div", { className: "mt-3 flex flex-col gap-1.5", children: [
          (a == null ? void 0 : a.message) && /* @__PURE__ */ o.jsxs("div", { className: "gh-prose-links mb-4 rounded-sm border border-green p-5", children: [
            /* @__PURE__ */ o.jsx("strong", { children: "Update available!" }),
            /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: a.message } })
          ] }),
          Qh(t.version) && /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("strong", { children: "Version:" }),
            " ",
            /* @__PURE__ */ o.jsx("a", { className: "text-green", href: Qh(t.version), rel: "noopener noreferrer", target: "_blank", children: t.version })
          ] }) || /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("strong", { children: "Version:" }),
            " ",
            t.version
          ] }),
          A() && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("strong", { children: "Environment:" }),
              " ",
              t.environment
            ] }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("strong", { children: "Database:" }),
              " ",
              t.database
            ] }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("strong", { children: "Mail:" }),
              " ",
              t.mail ? t.mail : "Native"
            ] })
          ] }),
          l() && /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("strong", { children: "Developer experiments:" }),
            " Enabled"
          ] }),
          A() && dy(t.environment, t.database) && /* @__PURE__ */ o.jsxs("div", { className: "text-red-500 dark:text-red-400", children: [
            "You are running an unsupported database in production. Please ",
            /* @__PURE__ */ o.jsx("a", { href: "https://ghost.org/docs/faq/supported-databases/", rel: "noopener noreferrer", target: "_blank", children: "upgrade to MySQL 8" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ o.jsx(Fi, {}),
        /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ o.jsxs("a", { className: "flex items-center gap-2 hover:text-grey-900 dark:hover:text-grey-400", href: "https://ghost.org/docs/", rel: "noopener noreferrer", target: "_blank", children: [
            /* @__PURE__ */ o.jsx(Qt, { name: "book-open", size: "sm" }),
            " User documentation"
          ] }),
          /* @__PURE__ */ o.jsxs("a", { className: "flex items-center gap-2 hover:text-grey-900 dark:hover:text-grey-400", href: "https://forum.ghost.org/", rel: "noopener noreferrer", target: "_blank", children: [
            /* @__PURE__ */ o.jsx(Qt, { name: "question-circle", size: "sm" }),
            " Get help with Ghost"
          ] }),
          /* @__PURE__ */ o.jsxs("a", { className: "flex items-center gap-2 hover:text-grey-900 dark:hover:text-grey-400", href: "https://ghost.org/docs/contributing/", rel: "noopener noreferrer", target: "_blank", children: [
            /* @__PURE__ */ o.jsx(Qt, { name: "angle-brackets", size: "sm" }),
            " Get involved"
          ] })
        ] }),
        /* @__PURE__ */ o.jsx(Fi, {}),
        /* @__PURE__ */ o.jsxs("p", { className: "max-w-[460px] text-xs", children: [
          "Copyright © 2013 – ",
          s(),
          " Ghost Foundation, released under the ",
          /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://github.com/TryGhost/Ghost/blob/main/LICENSE", rel: "noopener noreferrer", target: "_blank", children: "MIT license" }),
          ". ",
          /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://ghost.org/", rel: "noopener noreferrer", target: "_blank", children: "Ghost" }),
          " is a registered trademark of ",
          /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://ghost.org/trademark/", rel: "noopener noreferrer", target: "_blank", children: "Ghost Foundation Ltd" }),
          "."
        ] })
      ] })
    }
  );
}), py = "MembersResponseType", _u = rA({
  dataType: py,
  path: "/members/"
}), my = import("./index-39468f31.mjs").then((e) => e.i);
class Wp extends Error {
  constructor({ errorType: t, errorDetails: a, message: s }) {
    super(s);
    cu(this, "errorType");
    cu(this, "errorDetails");
    this.errorType = t, this.errorDetails = a;
  }
}
class gy extends Wp {
  constructor(n) {
    super(Object.assign({ errorType: "IncorrectUsageError" }, n));
  }
}
class Ua extends Wp {
  constructor(n) {
    super(Object.assign({ errorType: "HostLimitError" }, n));
  }
}
const Bs = () => {
  var h, m;
  const { config: e } = ct(), [n, t] = ue(null);
  Te(() => {
    my.then((v) => t(() => v.default));
  }, []);
  const { users: a, contributorUsers: s, invites: l, isLoading: A } = Yu(), { refetch: f } = _u({
    searchParams: { limit: "1" },
    enabled: !1
  }), { refetch: u } = gp({
    searchParams: { filter: "status:active", limit: "1" },
    enabled: !1
  }), d = On(() => {
    var v, k, b, y;
    return ((k = (v = e.hostSettings) == null ? void 0 : v.billing) == null ? void 0 : k.enabled) === !0 && ((y = (b = e.hostSettings) == null ? void 0 : b.billing) != null && y.url) ? e.hostSettings.billing.url : "https://ghost.org/help/";
  }, [(h = e.hostSettings) == null ? void 0 : h.billing]);
  return On(() => {
    var b;
    if (!n || !((b = e.hostSettings) != null && b.limits) || A)
      return;
    const v = { ...e.hostSettings.limits }, k = new n();
    return v.staff && (v.staff.currentCountQuery = async () => {
      const y = a.filter((T) => T.status !== "inactive" && !s.includes(T)), S = l.filter((T) => T.role !== "Contributor");
      return y.length + S.length;
    }), v.members && (v.members.currentCountQuery = async () => {
      var S, T;
      const { data: y } = await f();
      return ((T = (S = y == null ? void 0 : y.meta) == null ? void 0 : S.pagination) == null ? void 0 : T.total) || 0;
    }), v.newsletters && (v.newsletters.currentCountQuery = async () => {
      var S;
      const { data: { pages: y } = { pages: [] } } = await u();
      return ((S = y[0].meta) == null ? void 0 : S.pagination.total) || 0;
    }), k.loadLimits({
      limits: v,
      helpLink: d,
      errors: {
        HostLimitError: Ua,
        IncorrectUsageError: gy
      }
    }), {
      isLimited: (y) => k.isLimited(y),
      checkWouldGoOverLimit: (y) => k.checkWouldGoOverLimit(y),
      errorIfWouldGoOverLimit: (y, S = {}) => k.errorIfWouldGoOverLimit(y, S),
      errorIfIsOverLimit: (y) => k.errorIfIsOverLimit(y)
    };
  }, [n, (m = e.hostSettings) == null ? void 0 : m.limits, s, f, u, d, l, A, a]);
}, vy = () => {
  const e = Sn(), { updateRoute: n } = nt(), [t, a] = ue(""), [s, l] = ue({ name: "" }), { mutateAsync: A } = mk(), f = Bs(), u = dt();
  return Te(() => {
    f != null && f.isLimited("customIntegrations") && f.errorIfWouldGoOverLimit("customIntegrations").catch((d) => {
      d instanceof Ua && (xe.show(eo, {
        prompt: d.message || "Your current plan doesn't support more custom integrations.",
        onOk: () => n({ route: "/pro", isExternal: !0 })
      }), e.remove(), n("integrations"));
    });
  }, [f, e, n]), /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        n("integrations");
      },
      okColor: "black",
      okLabel: "Add",
      size: "sm",
      testId: "add-integration-modal",
      title: "Add integration",
      onOk: async () => {
        if (!t) {
          l({ name: "Name is required" });
          return;
        }
        try {
          const d = await A({ name: t });
          e.remove(), n({ route: `integrations/${d.integrations[0].id}` });
        } catch (d) {
          u(d);
        }
      },
      children: /* @__PURE__ */ o.jsx("div", { className: "mt-5", children: /* @__PURE__ */ o.jsx(
        bt,
        {
          marginBottom: !1,
          marginTop: !1,
          children: /* @__PURE__ */ o.jsx(
            je,
            {
              autoFocus: !0,
              error: !!s.name,
              hint: s.name,
              maxLength: 191,
              placeholder: "Custom integration",
              title: "Name",
              value: t,
              onChange: (d) => a(d.target.value),
              onInput: () => {
                s.name && l({ name: "" });
              }
            }
          )
        }
      ) })
    }
  );
}, wy = xe.create(vy), xy = () => {
  var k, b;
  const e = Sn(), { updateRoute: n } = nt(), t = dt(), { data: a } = _u({
    searchParams: { filter: "newsletters.status:active+email_disabled:0", limit: "1", page: "1", include: "newsletters,labels" }
  }), { mutateAsync: s } = gk(), { formState: l, updateForm: A, saveState: f, handleSave: u, errors: d, clearError: h } = qn({
    initialState: {
      name: "",
      description: "",
      optInExistingSubscribers: !0
    },
    onSave: async () => {
      const y = await s({
        name: l.name,
        description: l.description,
        opt_in_existing: l.optInExistingSubscribers,
        feedback_enabled: !0
      });
      n({ route: `newsletters/${y.newsletters[0].id}` });
    },
    onSaveError: t,
    onValidate: () => {
      const y = {};
      return l.name || (y.name = "Name is required"), y;
    }
  }), m = Bs();
  Te(() => {
    m == null || m.errorIfWouldGoOverLimit("newsletters").catch((y) => {
      if (y instanceof Ua)
        xe.show(eo, {
          prompt: y.message || "Your current plan doesn't support more newsletters.",
          onOk: () => n({ route: "/pro", isExternal: !0 })
        }), e.remove(), n("newsletters");
      else
        throw y;
    });
  }, [m, e, n]);
  const v = (k = a == null ? void 0 : a.meta) == null ? void 0 : k.pagination.total;
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        n("newsletters");
      },
      backDropClick: !1,
      okColor: "black",
      okLabel: "Create",
      okLoading: f === "saving",
      size: "sm",
      testId: "add-newsletter-modal",
      title: "Create newsletter",
      onOk: async () => {
        await u() && e.remove();
      },
      children: /* @__PURE__ */ o.jsxs(
        bt,
        {
          marginBottom: !1,
          marginTop: !0,
          children: [
            /* @__PURE__ */ o.jsx(
              je,
              {
                autoFocus: !0,
                error: !!d.name,
                hint: d.name,
                maxLength: 191,
                placeholder: "Weekly roundup",
                title: "Name",
                value: l.name,
                onChange: (y) => A((S) => ({ ...S, name: y.target.value })),
                onKeyDown: () => h("name")
              }
            ),
            /* @__PURE__ */ o.jsx(
              Ha,
              {
                maxLength: 2e3,
                title: "Description",
                value: l.description,
                onChange: (y) => A((S) => ({ ...S, description: y.target.value }))
              }
            ),
            /* @__PURE__ */ o.jsx(
              ft,
              {
                checked: l.optInExistingSubscribers,
                direction: "rtl",
                hint: l.optInExistingSubscribers ? `This newsletter will be available to all members. Your ${v === void 0 ? "" : vp(v)} existing subscriber${((b = a == null ? void 0 : a.meta) == null ? void 0 : b.pagination.total) === 1 ? "" : "s"} will also be opted-in to receive it.` : "The newsletter will be available to all new members. Existing members won’t be subscribed, but may visit their account area to opt-in to future emails.",
                label: "Opt-in existing subscribers",
                labelStyle: "heading",
                onChange: (y) => A((S) => ({ ...S, optInExistingSubscribers: y.target.checked }))
              }
            )
          ]
        }
      )
    }
  );
}, ky = xe.create(xy), by = ({ recommendation: e, animate: n }) => {
  const t = Sn(), { updateRoute: a, route: s } = nt(), { mutateAsync: l } = vk(), A = dt(), { formState: f, updateForm: u, handleSave: d, saveState: h, errors: m, clearError: v, setErrors: k } = qn({
    initialState: {
      ...e
    },
    onSave: async (T) => {
      await l(T), t.remove(), St({
        title: "Recommendation added",
        type: "success"
      }), wk("Recommendation Added", {
        oneClickSubscribe: T.one_click_subscribe
      }), a("recommendations");
    },
    onSaveError: A,
    onValidate: (T) => xk(T)
  });
  let b = "Add", y = !1;
  h === "saving" ? y = !0 : h === "saved" && (b = "Added");
  let S = {
    label: "Back",
    icon: "arrow-left",
    iconColorClass: "text-black dark:text-white",
    link: !0,
    size: "sm",
    onClick: () => {
      h !== "saving" && (t.remove(), xe.show(qp, {
        pathName: s,
        animate: !1,
        recommendation: {
          ...f
        }
      }));
    }
  };
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        a("recommendations");
      },
      animate: n ?? !0,
      backDropClick: !1,
      cancelLabel: "Cancel",
      dirty: !0,
      leftButtonProps: S,
      okColor: "black",
      okLabel: b,
      okLoading: y,
      size: "sm",
      testId: "add-recommendation-modal",
      title: "Add recommendation",
      stickyFooter: !0,
      onCancel: () => {
        h !== "saving" && (t.remove(), a("recommendations"));
      },
      onOk: async () => {
        if (h !== "saving") {
          wp();
          try {
            await d({ force: !0 });
          } catch {
            St({
              type: "error",
              title: "Something went wrong when adding this recommendation, please try again."
            });
          }
        }
      },
      children: /* @__PURE__ */ o.jsx(kk, { clearError: v, errors: m, formState: f, setErrors: k, showURL: !1, updateForm: u })
    }
  );
}, yy = xe.create(by), Nh = (e) => xp(e).save || "", Ey = function(e, n) {
  try {
    new URL(n).hostname.includes(".") ? delete e.url : e.url = "Enter a valid URL";
  } catch {
    e.url = "Enter a valid URL";
  }
  return e;
}, My = ({ searchParams: e, recommendation: n, animate: t }) => {
  const [a, s] = ue(!1), l = Sn(), { updateRoute: A } = nt(), { mutateAsync: f } = bk(), u = n ? "" : (e == null ? void 0 : e.get("url")) ?? "", { save: d } = u ? xp(u) : { save: "" }, h = At.useRef(!1), [m, v] = At.useState(!!d), { formState: k, updateForm: b, handleSave: y, errors: S, saveState: T, clearError: O } = qn({
    initialState: n ?? {
      title: "",
      url: d || "",
      description: "",
      excerpt: null,
      featured_image: null,
      favicon: null,
      one_click_subscribe: !1
    },
    onSave: async () => {
      let K;
      K = new URL(k.url);
      const _ = K.hostname.replace("www.", ""), F = {
        ...k,
        url: K.toString()
      }, { recommendations: ee = [] } = await f(K);
      if (!ee || ee.length === 0)
        return;
      const oe = ee[0];
      if (oe.id)
        throw new mh("A recommendation with this URL already exists.");
      F.title = oe.title ?? _, F.excerpt = oe.excerpt ?? F.excerpt, F.featured_image = oe.featured_image ?? F.featured_image ?? null, F.favicon = oe.favicon ?? F.favicon ?? null, F.one_click_subscribe = oe.one_click_subscribe ?? F.one_click_subscribe ?? !1, F.description = F.excerpt || null, l.remove(), xe.show(yy, {
        animate: !1,
        recommendation: F
      });
    },
    onValidate: () => {
      const K = {};
      return Ey(K, k.url), m && v(Object.keys(K).length === 0), K;
    }
  }), B = At.useCallback(async () => {
    if (T !== "saving") {
      wp();
      try {
        if (await y({ force: !0 }))
          return;
      } catch (K) {
        const _ = K instanceof mh ? K.message : "Something went wrong while checking this URL, please try again.";
        St({
          type: "error",
          title: _
        });
      }
      m && v(!1);
    }
  }, [y, T, m, v]);
  return At.useEffect(() => {
    m && !h.current && (h.current = !0, B());
  }, [m, B]), Te(() => {
    a && (B(), s(!1));
  }, [k]), m ? /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        A("recommendations");
      },
      animate: t ?? !0,
      backDropClick: !1,
      footer: !1,
      header: !1,
      size: "sm",
      children: /* @__PURE__ */ o.jsx("div", { className: "flex flex-col items-center justify-center p-8", children: /* @__PURE__ */ o.jsx(kp, {}) })
    }
  ) : /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        A("recommendations");
      },
      animate: t ?? !0,
      backDropClick: !1,
      okColor: "black",
      okLabel: "Next",
      okLoading: T === "saving",
      size: "sm",
      testId: "add-recommendation-modal",
      title: "Add recommendation",
      onOk: B,
      children: [
        /* @__PURE__ */ o.jsxs("p", { className: "mt-4", children: [
          "You can recommend ",
          /* @__PURE__ */ o.jsx("strong", { children: "any site" }),
          " your audience will find valuable, not just those published on Ghost."
        ] }),
        /* @__PURE__ */ o.jsx(
          bt,
          {
            marginBottom: !1,
            marginTop: !0,
            children: /* @__PURE__ */ o.jsx(
              je,
              {
                autoFocus: !0,
                error: !!S.url,
                hint: S.url || /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                  "Need inspiration? ",
                  /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://www.ghost.org/explore", rel: "noopener noreferrer", target: "_blank", children: "Explore thousands of sites" }),
                  " to recommend"
                ] }),
                maxLength: 2e3,
                placeholder: "https://www.example.com",
                title: "URL",
                value: k.url,
                onBlur: () => {
                  const K = Nh(k.url);
                  b((_) => ({ ..._, url: K }));
                },
                onChange: (K) => {
                  O == null || O("url"), b((_) => ({ ..._, url: K.target.value }));
                },
                onKeyDown: (K) => {
                  K.key === "Enter" && (K.preventDefault(), b((_) => ({ ..._, url: Nh(k.url) })), s(!0));
                }
              }
            )
          }
        )
      ]
    }
  );
}, qp = xe.create(My), Us = ({
  icon: e,
  title: n,
  detail: t,
  extra: a
}) => /* @__PURE__ */ o.jsxs("div", { className: "-mx-8 -mt-8 flex flex-col gap-4 bg-grey-75 p-8 dark:bg-grey-950 md:flex-row", children: [
  /* @__PURE__ */ o.jsx("div", { className: "h-14 w-14", children: e }),
  /* @__PURE__ */ o.jsxs("div", { className: "mt-1.5 flex min-w-0 flex-1 flex-col", children: [
    /* @__PURE__ */ o.jsx("h3", { children: n }),
    /* @__PURE__ */ o.jsx("div", { children: t }),
    a && /* @__PURE__ */ o.jsx("div", { className: "mt-4", children: a })
  ] })
] }), Sy = xe.create(() => {
  const { updateRoute: e } = nt(), { settings: n } = ct(), [t] = yt(n, ["amp"]), [a] = yt(n, ["amp_gtag_id"]), s = xe.useModal(), [l, A] = ue(!1), [f, u] = ue(""), { mutateAsync: d } = ua(), h = dt();
  Te(() => {
    A(t || !1), u(a || null);
  }, [t, a]);
  const m = async () => {
    const v = [
      { key: "amp", value: l },
      { key: "amp_gtag_id", value: f }
    ];
    try {
      await d(v);
    } catch (k) {
      h(k);
    }
  };
  return /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        e("integrations");
      },
      dirty: l !== t || f !== a,
      okColor: "black",
      okLabel: "Save & close",
      testId: "amp-modal",
      title: "",
      onOk: async () => {
        await m(), s.remove(), e("integrations");
      },
      children: [
        /* @__PURE__ */ o.jsx(
          Us,
          {
            detail: "Accelerated Mobile Pages",
            icon: /* @__PURE__ */ o.jsx(yk, { className: "h-14 w-14" }),
            title: "AMP"
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsxs(bt, { marginBottom: !1, title: "AMP configuration", grouped: !0, children: [
          /* @__PURE__ */ o.jsx(
            ft,
            {
              checked: l,
              direction: "rtl",
              hint: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                "Google AMP is ",
                /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://en.m.wikipedia.org/wiki/Accelerated_Mobile_Pages", rel: "noopener noreferrer", target: "_blank", children: "being retired" }),
                " — this feature will be removed in Ghost 6.0"
              ] }),
              label: "Enable AMP",
              onChange: (v) => {
                A(v.target.checked);
              }
            }
          ),
          l && /* @__PURE__ */ o.jsx(
            je,
            {
              hint: "Tracks AMP traffic in Google Analytics",
              placeholder: "UA-XXXXXXX-X",
              title: "Google Analytics Tracking ID",
              value: f || "",
              onChange: (v) => {
                u(v.target.value);
              }
            }
          )
        ] }) })
      ]
    }
  );
});
function Iy(e, n) {
  let t;
  return function(...s) {
    const l = () => {
      clearTimeout(t), e(...s);
    };
    clearTimeout(t), t = setTimeout(l, n);
  };
}
const $u = ({ generateContent: e, className: n, height: t, width: a, parentClassName: s, testId: l, addDelay: A = !1 }) => {
  const [f, u] = ue(0), d = [Ct(null), Ct(null)], [h, m] = ue(0);
  return Te(() => {
    const v = f === 0 ? 1 : 0, k = d[v].current;
    if (k) {
      e(k);
      const b = () => {
        A ? setTimeout(() => {
          u(v);
        }, 500) : u(v);
      };
      return k.addEventListener("load", b), () => {
        k.removeEventListener("load", b);
      };
    }
  }, [e]), Te(() => {
    var b;
    const v = d[f].current, k = Iy(() => {
      var y;
      m(((y = v == null ? void 0 : v.contentWindow) == null ? void 0 : y.scrollY) || 0);
    }, 250);
    return (b = v == null ? void 0 : v.contentWindow) == null || b.addEventListener("scroll", k), () => {
      var y;
      (y = v == null ? void 0 : v.contentWindow) == null || y.removeEventListener("scroll", k);
    };
  }, [f, d]), Te(() => {
    var k;
    const v = d[f].current;
    if (v)
      try {
        (k = v.contentWindow) == null || k.scrollTo(0, h);
      } catch (b) {
        hp(b);
      }
  }, [h, f, d]), /* @__PURE__ */ o.jsxs("div", { className: s, "data-testid": l, children: [
    /* @__PURE__ */ o.jsx(
      "iframe",
      {
        ref: d[0],
        className: `${n} ${f !== 0 ? "z-10 opacity-0" : "z-20 opacity-100"}`,
        "data-visible": f === 0,
        frameBorder: "0",
        height: t,
        title: "Buffered Preview 1",
        width: a
      }
    ),
    /* @__PURE__ */ o.jsx(
      "iframe",
      {
        ref: d[1],
        className: `${n} ${f !== 1 ? "z-10 opacity-0" : "z-20 opacity-100"}`,
        "data-visible": f === 1,
        frameBorder: "0",
        height: t,
        title: "Buffered Preview 2",
        width: a
      }
    )
  ] });
}, Jy = (e, n, t) => {
  const a = new URLSearchParams();
  return a.append("announcement_bg", e || "accent"), a.append("announcement", n || ""), t && t.length > 0 && a.append("announcement_vis", (t == null ? void 0 : t.join(",")) || ""), a.toString();
}, Ty = ({ announcementBackgroundColor: e, announcementContent: n, url: t, visibility: a }) => {
  const s = On(() => a, [a == null ? void 0 : a.join(",")]), l = sn((A) => {
    t && fetch(t, {
      method: "POST",
      headers: {
        "Content-Type": "text/html;charset=utf-8",
        "x-ghost-preview": Jy(
          e,
          n,
          s
        ),
        Accept: "text/plain"
      },
      mode: "cors",
      credentials: "include"
    }).then((f) => f.text()).then((f) => {
      var y, S, T;
      const u = "html { pointer-events: none; }", h = new DOMParser().parseFromString(f, "text/html"), m = h.querySelector("style"), v = m.innerHTML;
      m.innerHTML = `${v}

${u}`;
      let b = (h.doctype ? new XMLSerializer().serializeToString(h.doctype) : "") + h.documentElement.outerHTML;
      (y = A.contentDocument) == null || y.open(), (S = A.contentDocument) == null || S.write(b), (T = A.contentDocument) == null || T.close();
    }).catch(() => {
    });
  }, [e, n, t, s]);
  return /* @__PURE__ */ o.jsx(
    $u,
    {
      addDelay: !0,
      className: "absolute h-[110%] w-[110%] origin-top-left scale-[.90909] bg-white max-[1600px]:h-[130%] max-[1600px]:w-[130%] max-[1600px]:scale-[.76923]",
      generateContent: l,
      height: "100%",
      parentClassName: "relative h-full w-full",
      testId: "announcement-bar-preview-iframe",
      width: "100%"
    }
  );
}, Cy = ({
  announcementContent: e,
  announcementTextHandler: n,
  accentColor: t,
  announcementBackgroundColor: a,
  toggleColorSwatch: s,
  toggleVisibility: l,
  visibility: A = [],
  paidMembersEnabled: f,
  onBlur: u
}) => {
  const d = [
    {
      label: "Logged out visitors",
      onChange: (h) => {
        l("visitors", h);
      },
      value: "visitors",
      checked: A.includes("visitors")
    },
    {
      label: "Free members",
      onChange: (h) => {
        l("free_members", h);
      },
      value: "free_members",
      checked: A.includes("free_members")
    },
    ...f ? [{
      label: "Paid members",
      onChange: (h) => {
        l("paid_members", h);
      },
      value: "paid_members",
      checked: A.includes("paid_members")
    }] : []
  ];
  return /* @__PURE__ */ o.jsxs(bt, { children: [
    /* @__PURE__ */ o.jsx(
      Wu,
      {
        nodes: "MINIMAL_NODES",
        placeholder: "Highlight breaking news, offers or updates",
        title: "Announcement",
        value: e,
        onBlur: u,
        onChange: n
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ku,
      {
        isExpanded: !1,
        picker: !1,
        swatches: [
          {
            hex: "#08090c",
            title: "Dark",
            value: "dark"
          },
          {
            hex: "#ffffff",
            title: "Light",
            value: "light"
          },
          {
            hex: t || "#ffdd00",
            title: "Accent",
            value: "accent"
          }
        ],
        swatchSize: "lg",
        title: "Background color",
        value: a,
        onSwatchChange: (h) => {
          h !== null && s(h);
        },
        onTogglePicker: () => {
        }
      }
    ),
    /* @__PURE__ */ o.jsx(
      Su,
      {
        checkboxes: d,
        title: "Visibility"
      }
    )
  ] });
}, Dy = () => {
  const { siteData: e } = ct(), { localSettings: n, updateSetting: t, handleSave: a, okProps: s } = Ba({ savingDelay: 500 }), [l] = yt(n, ["announcement_content"]), [A] = yt(n, ["accent_color"]), [f] = yt(n, ["announcement_background"]), [u] = yt(n, ["announcement_visibility"]), [d] = yt(n, ["paid_members_enabled"]), h = JSON.parse((u == null ? void 0 : u.toString()) || "[]"), { updateRoute: m } = nt(), [v, k] = ue("homepage"), b = (ee) => {
    t("announcement_background", ee);
  }, y = (ee, oe) => {
    const re = h.indexOf(ee);
    re === -1 && oe ? h.push(ee) : h.splice(re, 1), t("announcement_visibility", JSON.stringify(h));
  }, S = Ct(
    qi((ee) => {
      t("announcement_content", ee);
    }, 500)
  ), T = /* @__PURE__ */ o.jsx(
    Cy,
    {
      accentColor: A,
      announcementBackgroundColor: f,
      announcementContent: l,
      announcementTextHandler: (ee) => {
        S.current(ee);
      },
      paidMembersEnabled: d,
      toggleColorSwatch: b,
      toggleVisibility: y,
      visibility: u,
      onBlur: () => {
      }
    }
  ), { data: { posts: [O] } = { posts: [] } } = bp({
    searchParams: {
      filter: "status:published",
      order: "published_at DESC",
      limit: "1",
      fields: "id,url"
    }
  });
  let B = [];
  O && (B = [
    { id: "homepage", title: "Homepage" },
    { id: "post", title: "Post" }
  ]);
  const K = (ee) => {
    B.length && k(ee);
  };
  let _ = Qr(e);
  switch (v) {
    case "homepage":
      _ = Qr(e);
      break;
    case "post":
      _ = O.url;
      break;
  }
  const F = /* @__PURE__ */ o.jsx(
    Ty,
    {
      announcementBackgroundColor: f,
      announcementContent: l,
      url: _,
      visibility: h
    }
  );
  return /* @__PURE__ */ o.jsx(
    Hs,
    {
      afterClose: () => {
        m("announcement-bar");
      },
      buttonsDisabled: s.disabled,
      cancelLabel: "Close",
      deviceSelector: !0,
      dirty: !1,
      okColor: s.color,
      okLabel: s.label || "Save",
      preview: F,
      previewBgColor: "greygradient",
      previewToolbarTabs: B,
      selectedURL: v,
      sidebar: T,
      testId: "announcement-bar-modal",
      title: "Announcement",
      titleHeadingLevel: 5,
      onOk: async () => {
        await a({ fakeWhenUnchanged: !0 }) || St({
          type: "error",
          message: "An error occurred while saving your changes. Please try again."
        });
      },
      onSelectURL: K
    }
  );
}, Ry = xe.create(Dy), jy = ({ label: e, text: n = "", hint: t, onRegenerate: a }) => {
  const [s, l] = ue(!1), A = () => {
    navigator.clipboard.writeText(n), l(!0), setTimeout(() => l(!1), 2e3);
  }, f = qe(
    "group/api-keys relative -mt-1 mb-1 w-full overflow-hidden border-b border-transparent py-2 hover:border-grey-300 dark:hover:border-grey-600"
  );
  return /* @__PURE__ */ o.jsxs("div", { className: "mb-3 grid grid-cols-1", children: [
    e && /* @__PURE__ */ o.jsx(st, { level: 6, grey: !0, children: e }),
    /* @__PURE__ */ o.jsxs("div", { className: f, children: [
      /* @__PURE__ */ o.jsx("span", { children: n }),
      t,
      /* @__PURE__ */ o.jsxs("div", { className: "visible absolute right-0 top-1/2 flex translate-y-[-50%] gap-1 bg-white pl-1 text-sm group-hover/api-keys:visible dark:bg-black md:invisible", children: [
        a && /* @__PURE__ */ o.jsx(Ye, { color: "outline", label: "Regenerate", size: "sm", onClick: a }),
        /* @__PURE__ */ o.jsx(Ye, { color: "outline", label: s ? "Copied" : "Copy", size: "sm", onClick: A })
      ] })
    ] })
  ] });
}, ef = ({ keys: e }) => /* @__PURE__ */ o.jsx("div", { "data-testid": "api-keys", children: e.map((n) => /* @__PURE__ */ o.jsx(jy, { ...n }, n.label)) }), Du = [
  {
    label: "Global",
    options: [{ value: "site.changed", label: "Site changed (rebuild)" }]
  },
  {
    label: "Posts",
    options: [
      { value: "post.added", label: "Post created" },
      { value: "post.deleted", label: "Post deleted" },
      { value: "post.edited", label: "Post updated" },
      { value: "post.published", label: "Post published" },
      { value: "post.published.edited", label: "Published post updated" },
      { value: "post.unpublished", label: "Post unpublished" },
      { value: "post.scheduled", label: "Post scheduled" },
      { value: "post.unscheduled", label: "Post unscheduled" },
      { value: "post.tag.attached", label: "Tag added to post" },
      { value: "post.tag.detached", label: "Tag removed from post" }
    ]
  },
  {
    label: "Pages",
    options: [
      { value: "page.added", label: "Page created" },
      { value: "page.deleted", label: "Page deleted" },
      { value: "page.edited", label: "Page updated" },
      { value: "page.published", label: "Page published" },
      { value: "page.published.edited", label: "Published page updated" },
      { value: "page.unpublished", label: "Page unpublished" },
      { value: "page.tag.attached", label: "Tag added to page" },
      { value: "page.tag.detached", label: "Tag removed from page" }
    ]
  },
  {
    label: "Tags",
    options: [
      { value: "tag.added", label: "Tag created" },
      { value: "tag.edited", label: "Tag updated" },
      { value: "tag.deleted", label: "Tag deleted" }
    ]
  },
  {
    label: "Members",
    options: [
      { value: "member.added", label: "Member added" },
      { value: "member.edited", label: "Member updated" },
      { value: "member.deleted", label: "Member deleted" }
    ]
  }
], Oy = (e) => {
  const n = Du.flatMap(({ options: t }) => t).find((t) => t.value === e);
  return n == null ? void 0 : n.label;
}, Qy = Vn({
  method: "POST",
  path: () => "/webhooks/",
  body: (e) => ({ webhooks: [e] }),
  updateQueries: {
    dataType: aA,
    emberUpdateType: "createOrUpdate",
    update: (e, n) => n && {
      ...n,
      integrations: n.integrations.map((t) => {
        const a = e.webhooks[0];
        return a.integration_id === t.id ? { ...t, webhooks: [...t.webhooks || [], a] } : t;
      })
    }
  }
}), Ny = Vn({
  method: "PUT",
  path: (e) => `/webhooks/${e.id}/`,
  body: (e) => ({ webhooks: [e] }),
  updateQueries: {
    dataType: aA,
    emberUpdateType: "createOrUpdate",
    update: (e, n) => n && {
      ...n,
      integrations: n.integrations.map((t) => {
        var a;
        return {
          ...t,
          webhooks: (a = t.webhooks) == null ? void 0 : a.map((s) => s.id === e.webhooks[0].id ? e.webhooks[0] : s)
        };
      })
    }
  }
}), Hy = Vn({
  method: "DELETE",
  path: (e) => `/webhooks/${e}/`,
  updateQueries: {
    dataType: aA,
    emberUpdateType: "createOrUpdate",
    update: (e, n, t) => ({
      ...n,
      integrations: n.integrations.map((a) => {
        var s;
        return {
          ...a,
          webhooks: (s = a.webhooks) == null ? void 0 : s.filter((l) => l.id !== t)
        };
      })
    })
  }
}), By = ({ webhook: e, integrationId: n }) => {
  const t = Sn(), { mutateAsync: a } = Qy(), { mutateAsync: s } = Ny(), l = dt(), { formState: A, updateForm: f, handleSave: u, errors: d, clearError: h } = qn({
    initialState: e || {},
    onSave: async () => {
      A.id ? await s(A) : await a({ ...A, integration_id: n });
    },
    onSaveError: l,
    onValidate: () => {
      const m = {};
      return A.name || (m.name = "Enter a name"), A.event || (m.event = "Select an event"), A.target_url || (m.target_url = "Enter a target URL"), A.target_url && !Nr.isURL(A.target_url) && (m.target_url = "Enter a valid URL"), m;
    }
  });
  return /* @__PURE__ */ o.jsx(
    It,
    {
      okColor: "black",
      okLabel: e ? "Update" : "Add",
      size: "sm",
      testId: "webhook-modal",
      title: "Add webhook",
      formSheet: !0,
      onOk: async () => {
        await u() && t.remove();
      },
      children: /* @__PURE__ */ o.jsx("div", { className: "mt-5", children: /* @__PURE__ */ o.jsxs(
        bt,
        {
          marginBottom: !1,
          marginTop: !1,
          children: [
            /* @__PURE__ */ o.jsx(
              je,
              {
                error: !!d.name,
                hint: d.name,
                maxLength: 191,
                placeholder: "Custom webhook",
                title: "Name",
                value: A.name,
                onChange: (m) => f((v) => ({ ...v, name: m.target.value })),
                onKeyDown: () => h("name")
              }
            ),
            /* @__PURE__ */ o.jsx(
              En,
              {
                error: !!d.event,
                hint: d.event,
                options: Du,
                prompt: "Select an event",
                selectedOption: Du.flatMap((m) => m.options).find((m) => m.value === A.event),
                testId: "event-select",
                title: "Event",
                hideTitle: !0,
                onSelect: (m) => {
                  f((v) => ({ ...v, event: m == null ? void 0 : m.value })), h("event");
                }
              }
            ),
            /* @__PURE__ */ o.jsx(
              je,
              {
                error: !!d.target_url,
                hint: d.target_url,
                maxLength: 2e3,
                placeholder: "https://example.com",
                title: "Target URL",
                type: "url",
                value: A.target_url,
                onChange: (m) => f((v) => ({ ...v, target_url: m.target.value })),
                onKeyDown: () => h("target_url")
              }
            ),
            /* @__PURE__ */ o.jsx(
              je,
              {
                maxLength: 191,
                placeholder: "https://example.com",
                title: "Secret",
                value: A.secret || void 0,
                onChange: (m) => f((v) => ({ ...v, secret: m.target.value }))
              }
            )
          ]
        }
      ) })
    }
  );
}, Hh = xe.create(By), Uy = ({ integration: e }) => {
  var s, l, A;
  const { mutateAsync: n } = Hy(), t = dt(), a = (f) => {
    xe.show(Bt, {
      title: "Are you sure?",
      prompt: "Deleting this webhook may prevent the integration from functioning.",
      okColor: "red",
      okLabel: "Delete Webhook",
      onOk: async (u) => {
        try {
          await n(f), u == null || u.remove(), St({
            message: "Webhook deleted",
            type: "info"
          });
        } catch (d) {
          t(d);
        }
      }
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsxs(Ek, { children: [
      /* @__PURE__ */ o.jsxs(gh, { bgOnHover: !1, children: [
        /* @__PURE__ */ o.jsxs(uu, { children: [
          ((s = e.webhooks) == null ? void 0 : s.length) || 0,
          " ",
          ((l = e.webhooks) == null ? void 0 : l.length) === 1 ? "webhook" : "webhooks"
        ] }),
        /* @__PURE__ */ o.jsx(uu, { children: "Last triggered" }),
        /* @__PURE__ */ o.jsx(uu, {})
      ] }),
      (A = e.webhooks) == null ? void 0 : A.map((f) => /* @__PURE__ */ o.jsxs(
        gh,
        {
          action: /* @__PURE__ */ o.jsx(Ye, { color: "red", label: "Delete", link: !0, onClick: (u) => {
            u == null || u.stopPropagation(), a(f.id);
          } }),
          hideActions: !0,
          onClick: () => {
            xe.show(Hh, {
              webhook: f,
              integrationId: e.id
            });
          },
          children: [
            /* @__PURE__ */ o.jsxs(vh, { className: "w-1/2", children: [
              /* @__PURE__ */ o.jsx("div", { className: "text-sm font-semibold", children: f.name }),
              /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-[max-content_1fr] gap-x-1 text-xs leading-snug", children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-grey-600", children: "Event:" }),
                /* @__PURE__ */ o.jsx("span", { children: Oy(f.event) }),
                /* @__PURE__ */ o.jsx("span", { className: "text-grey-600", children: "URL:" }),
                /* @__PURE__ */ o.jsx("span", { children: f.target_url })
              ] })
            ] }),
            /* @__PURE__ */ o.jsx(vh, { className: "w-1/2 text-sm", children: f.last_triggered_at && new Date(f.last_triggered_at).toLocaleString("default", {
              weekday: "short",
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit"
            }) })
          ]
        }
      ))
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "mt-5", children: /* @__PURE__ */ o.jsx(
      Ye,
      {
        color: "green",
        icon: "add",
        iconColorClass: "text-green",
        label: "Add webhook",
        size: "sm",
        link: !0,
        onClick: () => {
          xe.show(Hh, {
            integrationId: e.id
          });
        }
      }
    ) })
  ] });
}, Vp = Vn({
  method: "POST",
  path: ({ integrationId: e, apiKeyId: n }) => `/integrations/${e}/api_key/${n}/refresh/`,
  body: ({ integrationId: e }) => ({ integrations: [{ id: e }] }),
  updateQueries: {
    emberUpdateType: "createOrUpdate",
    dataType: aA,
    update: (e, n) => n && {
      ...n,
      integrations: n.integrations.map((t) => e.integrations.find(({ id: s }) => s === t.id) || t)
    }
  }
}), Ly = ({ integration: e }) => {
  var _, F;
  const n = Sn(), { updateRoute: t } = nt(), { mutateAsync: a } = Mk(), { mutateAsync: s } = Vp(), { mutateAsync: l } = Qs(), A = dt(), { formState: f, updateForm: u, handleSave: d, saveState: h, errors: m, clearError: v, okProps: k } = qn({
    initialState: e,
    savingDelay: 500,
    savedDelay: 500,
    onSave: async () => {
      await a(f);
    },
    onSavedStateReset: () => {
      n.remove(), t("integrations");
    },
    onSaveError: A,
    onValidate: () => {
      const ee = {};
      return f.name || (ee.name = "Enter integration title"), ee;
    }
  }), b = (_ = e.api_keys) == null ? void 0 : _.find((ee) => ee.type === "admin"), y = (F = e.api_keys) == null ? void 0 : F.find((ee) => ee.type === "content"), [S, T] = ue(!1), [O, B] = ue(!1);
  Te(() => {
    e.type !== "custom" && (n.remove(), t("integrations"));
  }, [e.type, n, t]);
  const K = (ee, oe) => {
    oe(!1);
    const re = ee.type === "content" ? "Content" : "Admin";
    xe.show(Bt, {
      title: `Regenerate ${re} API Key`,
      prompt: `You can regenerate ${re} API Key any time, but any scripts or applications using it will need to be updated.`,
      okLabel: `Regenerate ${re} API Key`,
      onOk: async ($) => {
        try {
          await s({ integrationId: e.id, apiKeyId: ee.id }), oe(!0), $ == null || $.remove();
        } catch (ae) {
          A(ae);
        }
      }
    });
  };
  return /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        t("integrations");
      },
      buttonsDisabled: k.disabled,
      dirty: h === "unsaved",
      okColor: k.color,
      okLabel: k.label || "Save & close",
      size: "md",
      testId: "custom-integration-modal",
      title: f.name || "Custom integration",
      stickyFooter: !0,
      onOk: async () => {
        await d({ fakeWhenUnchanged: !0 });
      },
      children: [
        /* @__PURE__ */ o.jsxs("div", { className: "mt-7 flex w-full flex-col gap-7 md:flex-row", children: [
          /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx(
            Hr,
            {
              height: "100px",
              id: "custom-integration-icon",
              imageURL: f.icon_image || void 0,
              width: "100px",
              onDelete: () => u((ee) => ({ ...ee, icon_image: null })),
              onUpload: async (ee) => {
                try {
                  const oe = Or(await l({ file: ee }));
                  u((re) => ({ ...re, icon_image: oe }));
                } catch (oe) {
                  const re = oe;
                  re.response.status === 415 && (re.message = "Unsupported file type"), A(re);
                }
              },
              children: "Upload icon"
            }
          ) }),
          /* @__PURE__ */ o.jsx("div", { className: "flex grow flex-col", children: /* @__PURE__ */ o.jsxs(bt, { children: [
            /* @__PURE__ */ o.jsx(
              je,
              {
                error: !!m.name,
                hint: m.name,
                maxLength: 191,
                title: "Title",
                value: f.name,
                onChange: (ee) => u((oe) => ({ ...oe, name: ee.target.value })),
                onKeyDown: () => v("name")
              }
            ),
            /* @__PURE__ */ o.jsx(je, { maxLength: 2e3, title: "Description", value: f.description || "", onChange: (ee) => u((oe) => ({ ...oe, description: ee.target.value })) }),
            /* @__PURE__ */ o.jsx(ef, { keys: [
              {
                label: "Content API key",
                text: y == null ? void 0 : y.secret,
                hint: O ? /* @__PURE__ */ o.jsx("div", { className: "text-green", children: "Content API Key was successfully regenerated" }) : void 0,
                onRegenerate: () => y && K(y, B)
              },
              {
                label: "Admin API key",
                text: b == null ? void 0 : b.secret,
                hint: S ? /* @__PURE__ */ o.jsx("div", { className: "text-green", children: "Admin API Key was successfully regenerated" }) : void 0,
                onRegenerate: () => b && K(b, T)
              },
              {
                label: "API URL",
                text: window.location.origin + Cs().subdir
              }
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx(Uy, { integration: e }) })
      ]
    }
  );
}, Py = ({ params: e }) => {
  const { data: { integrations: n } = {} } = yp(), t = n == null ? void 0 : n.find(({ id: a }) => a === (e == null ? void 0 : e.id));
  return t ? /* @__PURE__ */ o.jsx(Ly, { integration: t }) : null;
}, zy = xe.create(Py), Yy = null, tf = "CustomThemeSettingsResponseType", Fy = tf, Zy = rA({
  dataType: tf,
  path: "/custom_theme_settings/"
}), Gy = Vn({
  method: "PUT",
  path: () => "/custom_theme_settings/",
  body: (e) => ({ custom_theme_settings: e }),
  updateQueries: {
    emberUpdateType: "skip",
    dataType: tf,
    update: (e) => e
  }
}), to = "ThemesResponseType", _p = rA({
  dataType: to,
  path: "/themes/"
}), nf = Vn({
  method: "PUT",
  path: (e) => `/themes/${e}/activate/`,
  updateQueries: {
    dataType: to,
    emberUpdateType: "createOrUpdate",
    update: (e, n) => ({
      ...n,
      themes: n.themes.map((t) => {
        const a = e.themes.find(({ name: s }) => s === t.name);
        return a || { ...t, active: !1 };
      })
    })
  },
  invalidateQueries: {
    dataType: Fy
  }
}), Ky = Vn({
  method: "DELETE",
  path: (e) => `/themes/${e}/`,
  updateQueries: {
    dataType: to,
    emberUpdateType: "delete",
    update: (e, n, t) => ({
      ...n,
      themes: n.themes.filter((a) => a.name !== t)
    })
  }
}), Xy = Vn({
  method: "POST",
  path: () => "/themes/install/",
  searchParams: (e) => ({ source: "github", ref: e }),
  updateQueries: {
    dataType: to,
    emberUpdateType: "createOrUpdate",
    // Assume that all invite queries should include this new one
    update: (e, n) => n && {
      ...n,
      themes: [
        ...n.themes,
        ...e.themes
      ]
    }
  }
}), Wy = Vn({
  method: "POST",
  path: () => "/themes/upload/",
  body: ({ file: e }) => {
    const n = new FormData();
    return n.append("file", e), n;
  },
  updateQueries: {
    dataType: to,
    emberUpdateType: "createOrUpdate",
    // Assume that all invite queries should include this new one
    update: (e, n) => n && {
      ...n,
      themes: [
        ...n.themes,
        ...e.themes
      ]
    }
  }
});
function rf(e) {
  return e.active;
}
function af(e) {
  return e.name.toLowerCase() === "source";
}
function sf(e) {
  return e.name.toLowerCase() === "casper";
}
function zl(e) {
  return af(e) || sf(e);
}
function qy(e) {
  return !af(e) && !sf(e) && !rf(e);
}
function Vy(e) {
  var t, a;
  let n = ((t = e.package) == null ? void 0 : t.name) || e.name;
  return af(e) ? n += " (default)" : sf(e) ? n += " (legacy)" : ((a = e.package) == null ? void 0 : a.name) !== e.name && (n = /* @__PURE__ */ o.jsxs("span", { className: "text-sm md:text-base", children: [
    n,
    " ",
    /* @__PURE__ */ o.jsxs("span", { className: "text-grey-600", children: [
      "(",
      e.name,
      ")"
    ] })
  ] })), rf(e) && (n = /* @__PURE__ */ o.jsxs("span", { className: "text-sm font-bold md:text-base", children: [
    n,
    " — ",
    /* @__PURE__ */ o.jsx("span", { className: "text-green", children: " Active" })
  ] })), n;
}
function _y(e) {
  var n;
  return ((n = e.package) == null ? void 0 : n.version) || "1.0";
}
const $y = ({
  theme: e
}) => {
  const { mutateAsync: n } = nf(), { mutateAsync: t } = Ky(), a = dt(), s = async () => {
    try {
      await n(e.name), St({
        title: "Theme activated",
        type: "success",
        message: /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("span", { className: "capitalize", children: e.name }),
          " is now your active theme"
        ] })
      });
    } catch (h) {
      a(h);
    }
  }, l = async () => {
    const { apiRoot: h } = Cs();
    Sk(`${h}/themes/${e.name}/download`);
  }, A = async () => {
    xe.show(Bt, {
      title: "Are you sure you want to delete this?",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "You are about to delete ",
        /* @__PURE__ */ o.jsxs("strong", { children: [
          '"',
          e.name,
          '".'
        ] }),
        " This is permanent! We warned you, k? Maybe download",
        " ",
        /* @__PURE__ */ o.jsx(
          "span",
          {
            className: "cursor-pointer text-green-500",
            onClick: () => {
              l();
            },
            children: "your theme before continuing"
          }
        )
      ] }),
      okLabel: "Delete",
      okRunningLabel: "Deleting",
      okColor: "red",
      onOk: async (h) => {
        try {
          await t(e.name), h == null || h.remove();
        } catch (m) {
          a(m);
        }
      }
    });
  };
  let f = [];
  rf(e) || f.push(
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        className: "ml-2",
        color: "green",
        label: "Activate",
        link: !0,
        onClick: s
      },
      "activate"
    )
  );
  let u = [
    {
      id: "download",
      label: "Download",
      onClick: l
    }
  ];
  qy(e) && u.push({
    id: "delete",
    label: "Delete",
    onClick: A
  });
  const d = {
    iconColorClass: "text-base",
    size: "sm"
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "-mr-3 flex items-center gap-4", children: [
    f,
    /* @__PURE__ */ o.jsx(zp, { items: u, position: "left", triggerButtonProps: d })
  ] });
}, eE = ({
  themes: e
}) => (e.sort((n, t) => {
  var a, s;
  return n.active && !t.active ? -1 : !n.active && t.active ? 1 : (a = n.package) != null && a.name && ((s = t.package) != null && s.name) ? n.package.name.localeCompare(t.package.name) : n.name.localeCompare(t.name);
}), /* @__PURE__ */ o.jsx(Br, { pageTitle: "Installed themes", children: e.map((n) => {
  const t = Vy(n), a = _y(n);
  return /* @__PURE__ */ o.jsx(
    fa,
    {
      action: /* @__PURE__ */ o.jsx($y, { theme: n }),
      detail: a,
      id: `theme-${n.name}`,
      separator: !1,
      testId: "theme-list-item",
      title: t
    },
    n.name
  );
}) })), tE = ({ themes: e }) => /* @__PURE__ */ o.jsx(Vu, { children: /* @__PURE__ */ o.jsx(eE, { themes: e }) }), nE = ({ problem: e }) => {
  const [n, t] = ue(!1), a = () => {
    t(!n);
  };
  return /* @__PURE__ */ o.jsx(
    fa,
    {
      title: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("div", { className: `${e.level === "error" ? "before:bg-red" : "before:bg-yellow"} relative px-4 text-sm before:absolute before:left-0 before:top-1.5 before:block before:h-2 before:w-2 before:rounded-full before:content-['']`, children: [
          e != null && e.fatal ? /* @__PURE__ */ o.jsx("strong", { children: "Fatal: " }) : /* @__PURE__ */ o.jsx("strong", { children: e.level === "error" ? "Error: " : "Warning: " }),
          /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: e.rule } }),
          /* @__PURE__ */ o.jsx("div", { className: "absolute -right-4 top-1", children: /* @__PURE__ */ o.jsx(Ye, { color: "green", icon: n ? "chevron-down" : "chevron-right", iconColorClass: "text-grey-700", size: "sm", link: !0, onClick: () => a() }) })
        ] }),
        n ? /* @__PURE__ */ o.jsxs("div", { className: "mt-2 px-4 text-[13px] leading-8", children: [
          /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: e.details }, className: "mb-4" }),
          /* @__PURE__ */ o.jsx(st, { level: 6, children: "Affected files:" }),
          /* @__PURE__ */ o.jsx("ul", { className: "mt-1", children: e.failures.map((s) => /* @__PURE__ */ o.jsxs("li", { children: [
            /* @__PURE__ */ o.jsx("code", { children: s.ref }),
            s.message ? `: ${s.message}` : ""
          ] })) })
        ] }) : null
      ] }),
      hideActions: !0,
      separator: !0
    }
  );
}, rE = ({ title: e, prompt: n, fatalErrors: t, onRetry: a }) => {
  let s = null;
  return t && (s = /* @__PURE__ */ o.jsx("div", { className: "mt-10", children: /* @__PURE__ */ o.jsx(Br, { title: "Errors", children: t.map((l) => typeof l.details == "object" && l.details.errors && l.details.errors.length > 0 ? l.details.errors.map((A) => /* @__PURE__ */ o.jsx(nE, { problem: A })) : typeof l.details == "string" ? /* @__PURE__ */ o.jsx(fa, { title: l.details }) : null) }) })), /* @__PURE__ */ o.jsx(
    Ep,
    {
      cancelLabel: "Close",
      okColor: "black",
      okLabel: "Retry",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        n,
        s
      ] }),
      title: e,
      onOk: a
    }
  );
}, aE = xe.create(rE), sE = "data:image/png;base64,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", iE = 3e3, Bh = (e) => e.variants && e.variants.length > 0, fu = (e) => {
  const n = [{
    category: e.category,
    previewUrl: e.previewUrl,
    image: e.image
  }];
  return e.variants && e.variants.length > 0 && n.push(...e.variants), n;
}, oE = ({
  onSelectTheme: e
}) => {
  const { adminRoot: n } = Cs(), t = Ik(), [a, s] = ue(null), [l, A] = ue(0), f = (u) => {
    s(u), A(
      u !== null && Bh(u) && fu(u).length > 1 ? 1 : 0
    );
  };
  return Te(() => {
    if (a === null)
      return;
    const u = setInterval(() => {
      A((l + 1) % (fu(a).length || 0));
    }, iE);
    return () => clearInterval(u);
  }, [a, l]), /* @__PURE__ */ o.jsxs(Vu, { heading: "Themes", children: [
    /* @__PURE__ */ o.jsx("div", { className: "mt-[6vmin] grid grid-cols-1 gap-[6vmin] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4", children: t.map((u) => {
      const d = Bh(u), h = fu(u), m = a === u;
      return /* @__PURE__ */ o.jsxs("button", { className: "flex cursor-pointer flex-col gap-3 text-left", type: "button", onClick: () => {
        e == null || e(u);
      }, children: [
        /* @__PURE__ */ o.jsx("div", { className: "relative w-full bg-grey-100 shadow-md transition-all duration-500 hover:scale-[1.05]", onMouseEnter: () => f(u), onMouseLeave: () => f(null), children: d ? /* @__PURE__ */ o.jsx(o.Fragment, { children: h.map((v, k) => /* @__PURE__ */ o.jsx(
          "img",
          {
            alt: `${u.name} Theme - ${v.category}`,
            className: qe("h-full w-full object-contain opacity-0 transition-opacity duration-500", {
              "opacity-100": k === l && m || !m && k === 0,
              relative: k === l,
              absolute: k !== l,
              "left-0": k !== l,
              "top-0": k !== l
            }),
            src: Ll(v.image, n)
          },
          `theme-variant-${v.category.toLowerCase()}`
        )) }) : /* @__PURE__ */ o.jsx(
          "img",
          {
            alt: `${u.name} Theme`,
            className: "h-full w-full object-contain",
            src: Ll(u.image, n)
          }
        ) }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative mt-3", children: [
          /* @__PURE__ */ o.jsx(st, { level: 4, children: u.name }),
          d ? h.map((v, k) => /* @__PURE__ */ o.jsx("span", { className: qe("absolute left-0 translate-y-px text-sm text-grey-700 opacity-0", {
            "opacity-100": k === l && m || !m && k === 0
          }), children: v.category })) : /* @__PURE__ */ o.jsx("span", { className: "text-sm text-grey-700", children: u.category })
        ] })
      ] }, u.name);
    }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "mx-[-8vmin] mb-[-8vmin] mt-[8vmin] bg-black px-[8vmin] py-16 text-center text-lg text-white", style: {
      background: `#15171a url(${sE}) 100% 100% / 35vw no-repeat`
    }, children: [
      "Find and buy third-party, premium themes from independent developers in the ",
      /* @__PURE__ */ o.jsx("a", { className: "inline-block font-semibold text-lime", href: "https://ghost.org/themes/", rel: "noopener noreferrer", target: "_blank", children: "Ghost Marketplace →" })
    ] })
  ] });
}, Uh = ({ problem: e }) => {
  const [n, t] = ue(!1);
  return /* @__PURE__ */ o.jsx(
    fa,
    {
      title: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("div", { className: `${e.level === "error" ? "before:bg-red" : "before:bg-yellow"} relative px-4 text-sm before:absolute before:left-0 before:top-1.5 before:block before:h-2 before:w-2 before:rounded-full before:content-['']`, children: [
          /* @__PURE__ */ o.jsx("strong", { children: e.level === "error" ? "Error: " : "Warning: " }),
          /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: e.rule } }),
          /* @__PURE__ */ o.jsx("div", { className: "absolute -right-4 top-1", children: /* @__PURE__ */ o.jsx(Ye, { color: "green", icon: n ? "chevron-down" : "chevron-right", iconColorClass: "text-grey-700", size: "sm", link: !0, onClick: () => t(!n) }) })
        ] }),
        n ? /* @__PURE__ */ o.jsxs("div", { className: "mt-2 px-4 text-[13px] leading-8", children: [
          /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: e.details }, className: "mb-4" }),
          /* @__PURE__ */ o.jsx(st, { level: 6, children: "Affected files:" }),
          /* @__PURE__ */ o.jsx("ul", { className: "mt-1", children: e.failures.map((a) => /* @__PURE__ */ o.jsxs("li", { children: [
            /* @__PURE__ */ o.jsx("code", { children: a.ref }),
            a.message ? `: ${a.message}` : ""
          ] })) })
        ] }) : null
      ] }),
      hideActions: !0,
      separator: !0
    }
  );
}, lE = ({ title: e, prompt: n, installedTheme: t, onActivate: a }) => {
  var d, h, m;
  const { mutateAsync: s } = nf(), l = dt();
  let A = null;
  t && t.gscan_errors && (A = /* @__PURE__ */ o.jsx("div", { className: "mt-6", children: /* @__PURE__ */ o.jsx(Br, { hint: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    "Highly recommended to fix, functionality ",
    /* @__PURE__ */ o.jsx("strong", { children: "could" }),
    " be restricted"
  ] }), title: "Errors", children: (d = t.gscan_errors) == null ? void 0 : d.map((v) => /* @__PURE__ */ o.jsx(Uh, { problem: v })) }) }));
  let f = null;
  t && t.warnings && (f = /* @__PURE__ */ o.jsx("div", { className: "mt-10", children: /* @__PURE__ */ o.jsx(Br, { title: "Warnings", children: (h = t.warnings) == null ? void 0 : h.map((v) => /* @__PURE__ */ o.jsx(Uh, { problem: v })) }) }));
  let u = `Activate${(m = t.gscan_errors) != null && m.length ? " with errors" : ""}`;
  return t.active && (u = "OK"), /* @__PURE__ */ o.jsx(
    Ep,
    {
      cancelLabel: "Close",
      okColor: "black",
      okLabel: u,
      okRunningLabel: "Activating...",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        n,
        A,
        f
      ] }),
      title: e,
      onOk: async (v) => {
        if (!t.active)
          try {
            const b = (await s(t.name)).themes[0];
            St({
              title: "Theme activated",
              type: "success",
              message: /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("span", { className: "capitalize", children: b.name }),
                " is now your active theme."
              ] })
            });
          } catch (k) {
            l(k);
          }
        a == null || a(), v == null || v.remove();
      }
    }
  );
}, $p = xe.create(lE), Lh = (e) => e.variants && e.variants.length > 0, Ph = (e) => {
  const n = [{
    image: e.image,
    category: e.category,
    previewUrl: e.previewUrl
  }];
  return e.variants && e.variants.length > 0 && n.push(...e.variants), n;
}, zh = (e) => e.category.toLowerCase(), AE = ({
  selectedTheme: e,
  isInstalling: n,
  installedTheme: t,
  onBack: a,
  onClose: s,
  onInstall: l
}) => {
  var S;
  const [A, f] = ue("desktop"), [u, d] = ue(void 0);
  if (!e)
    return null;
  let h = e.previewUrl;
  const m = Ph(e).map((T) => ({
    label: T.category,
    value: zh(T)
  }));
  Lh(e) && (u === void 0 && d(m[0]), h = ((S = Ph(e).find((T) => zh(T) === (u == null ? void 0 : u.value))) == null ? void 0 : S.previewUrl) || h);
  let v = `Install ${e.name}`;
  n ? v = "Installing..." : zl(e) && !(t != null && t.active) ? v = `Activate ${e.name}` : t && (v = `Update ${e.name}`);
  const k = () => {
    t && !zl(e) ? xe.show(Bt, {
      title: "Overwrite theme",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "This will overwrite your existing version of ",
        e.name,
        t != null && t.active ? ", which is your active theme" : "",
        ". All custom changes will be lost."
      ] }),
      okLabel: "Overwrite",
      okRunningLabel: "Installing...",
      cancelLabel: "Cancel",
      okColor: "red",
      onOk: async (T) => {
        await (l == null ? void 0 : l()), T == null || T.remove();
      }
    }) : l == null || l();
  }, b = /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ o.jsx(
      oA,
      {
        activeItemClassName: "hidden md:!block md:!visible",
        containerClassName: "whitespace-nowrap",
        itemClassName: "hidden md:!block md:!visible",
        items: [
          { label: "Design", onClick: s },
          { label: "Change theme", onClick: a },
          { label: e.name }
        ],
        separatorClassName: "hidden md:!block md:!visible",
        backIcon: !0,
        onBack: a
      }
    ),
    Lh(e) ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("span", { className: "hidden md:!visible md:!block", children: "–" }),
      /* @__PURE__ */ o.jsx(
        En,
        {
          border: !1,
          containerClassName: "text-sm font-bold",
          controlClasses: { menu: "w-24" },
          fullWidth: !1,
          options: m,
          selectedOption: u,
          clearBg: !0,
          onSelect: (T) => {
            d(T || void 0);
          }
        }
      )
    ] }) : null
  ] }), y = /* @__PURE__ */ o.jsxs("div", { className: "flex justify-end gap-8", children: [
    /* @__PURE__ */ o.jsx(
      Ul,
      {
        buttons: [
          {
            icon: "laptop",
            iconColorClass: A === "desktop" ? "text-black dark:text-green" : "text-grey-500 dark:text-grey-600",
            link: !0,
            size: "sm",
            onClick: () => {
              f("desktop");
            }
          },
          {
            icon: "mobile",
            iconColorClass: A === "mobile" ? "text-black dark:text-green" : "text-grey-500 dark:text-grey-600",
            link: !0,
            size: "sm",
            onClick: () => {
              f("mobile");
            }
          }
        ]
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        color: "green",
        disabled: n,
        label: n ? "Installing..." : v,
        onClick: k
      }
    )
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: "absolute inset-0 z-[100]", children: [
    /* @__PURE__ */ o.jsx(Yp, { containerClassName: "bg-grey-50 dark:bg-black z-[100]", left: b, right: y, sticky: !1 }),
    /* @__PURE__ */ o.jsx("div", { className: "flex h-[calc(100%-74px)] grow flex-col items-center justify-center bg-grey-50 dark:bg-black", children: A === "desktop" ? /* @__PURE__ */ o.jsx(Np, { children: /* @__PURE__ */ o.jsx(
      "iframe",
      {
        className: "h-full w-full",
        src: h,
        title: "Theme preview"
      }
    ) }) : /* @__PURE__ */ o.jsx(Hp, { children: /* @__PURE__ */ o.jsx(
      "iframe",
      {
        className: "h-full w-full",
        src: h,
        title: "Theme preview"
      }
    ) }) })
  ] });
}, cE = ({ onUpload: e }) => {
  const n = Sn();
  return /* @__PURE__ */ o.jsx("div", { className: "-mb-6", children: /* @__PURE__ */ o.jsx(
    Jk,
    {
      id: "theme-upload",
      onUpload: (t) => {
        n.remove(), e(t);
      },
      children: /* @__PURE__ */ o.jsx("div", { className: "cursor-pointer bg-grey-75 p-10 text-center dark:bg-grey-950", children: "Click to select or drag & drop zip file" })
    }
  ) });
}, uE = ({
  currentTab: e,
  setCurrentTab: n,
  themes: t
}) => {
  const { updateRoute: a } = nt(), { mutateAsync: s } = Wy(), l = Bs(), A = dt(), f = Vi().getParam("ref"), [u, d] = ue(), [h, m] = ue(!1);
  Te(() => {
    l ? l.errorIfWouldGoOverLimit("customThemes", { value: "." }).then(() => d({ enabled: !0 })).catch((O) => {
      O instanceof Ua && d({ enabled: !1, error: O.message });
    }) : d({ enabled: !0 });
  }, [l]);
  const v = () => {
    a(f ? `design/edit?ref=${f}` : "design/edit");
  }, k = async (O) => {
    const B = O == null ? void 0 : O.name.replace(/\.zip$/, ""), K = t.map((_) => _.name);
    zl({ name: B }) ? xe.show(Bt, {
      title: "Upload failed",
      cancelLabel: "Cancel",
      okLabel: "",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("p", { children: [
          "The default ",
          /* @__PURE__ */ o.jsx("strong", { children: B }),
          " theme cannot be overwritten."
        ] }),
        /* @__PURE__ */ o.jsx("p", { children: "Rename your zip file and try again." })
      ] }),
      onOk: async (_) => {
        _ == null || _.remove();
      }
    }) : K.includes(B) ? xe.show(Bt, {
      title: "Overwrite theme",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "The theme ",
        /* @__PURE__ */ o.jsx("strong", { children: B }),
        " already exists. Do you want to overwrite it?"
      ] }),
      okLabel: "Overwrite",
      cancelLabel: "Cancel",
      okRunningLabel: "Overwriting...",
      okColor: "red",
      onOk: async (_) => {
        m(!0);
        const F = K.indexOf(B);
        t.splice(F, 1), await b({ file: O, onActivate: v }), m(!1), n("installed"), _ == null || _.remove();
      }
    }) : (n("installed"), b({ file: O, onActivate: v }));
  }, b = async ({
    file: O,
    onActivate: B
  }) => {
    var re, $, ae, Z, N;
    let K, _ = null;
    try {
      m(!0), K = await s({ file: O }), m(!1);
    } catch (Y) {
      m(!1), Y instanceof Ds && ((re = Y.response) == null ? void 0 : re.status) === 422 && (($ = Y.data) != null && $.errors) ? _ = Y.data.errors : A(Y);
    }
    if (_ && !K) {
      let Y = "Invalid Theme", W = /* @__PURE__ */ o.jsx(o.Fragment, { children: "This theme is invalid and cannot be activated. Fix the following errors and re-upload the theme" });
      xe.show(aE, {
        title: Y,
        prompt: W,
        fatalErrors: _,
        onRetry: async (H) => {
          H == null || H.remove(), S();
        }
      });
    }
    if (!K)
      return;
    const F = K.themes[0];
    let ee = "Upload successful", oe = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("strong", { children: F.name }),
      " uploaded"
    ] });
    if (F.active || (oe = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      oe,
      " ",
      "Do you want to activate it now?"
    ] })), (ae = F == null ? void 0 : F.gscan_errors) != null && ae.length || (Z = F.warnings) != null && Z.length) {
      const Y = (N = F == null ? void 0 : F.gscan_errors) == null ? void 0 : N.length;
      ee = `Upload successful with ${Y ? "errors" : "warnings"}`, oe = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "The theme ",
        /* @__PURE__ */ o.jsxs("strong", { children: [
          '"',
          F.name,
          '"'
        ] }),
        " was installed but we detected some ",
        Y ? "errors" : "warnings",
        "."
      ] }), F.active || (oe = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        oe,
        "You are still able to activate and use the theme but it is recommended to fix these ",
        Y ? "errors" : "warnings",
        " before you do so."
      ] }));
    }
    xe.show($p, {
      title: ee,
      prompt: oe,
      installedTheme: F,
      onActivate: B
    });
  }, y = /* @__PURE__ */ o.jsx(
    oA,
    {
      activeItemClassName: "hidden md:!block md:!visible",
      itemClassName: "hidden md:!block md:!visible",
      items: [
        { label: "Design", onClick: v },
        { label: "Change theme" }
      ],
      separatorClassName: "hidden md:!block md:!visible",
      backIcon: !0,
      onBack: v
    }
  ), S = () => {
    u != null && u.enabled ? xe.show(Bt, {
      title: "Upload theme",
      prompt: /* @__PURE__ */ o.jsx(cE, { onUpload: k }),
      okLabel: "",
      formSheet: !1
    }) : xe.show(eo, {
      title: "Upgrade to enable custom themes",
      prompt: (u == null ? void 0 : u.error) || /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "Your current plan only supports official themes. You can install them from the ",
        /* @__PURE__ */ o.jsx("a", { href: "https://ghost.org/marketplace/", children: "Ghost theme marketplace" }),
        "."
      ] }),
      onOk: () => a({ route: "/pro", isExternal: !0 })
    });
  }, T = /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-14", children: [
    /* @__PURE__ */ o.jsx("div", { className: "hidden md:!visible md:!block", children: /* @__PURE__ */ o.jsx(
      Oa,
      {
        border: !1,
        selectedTab: e,
        tabs: [
          { id: "official", title: "Official themes" },
          { id: "installed", title: "Installed" }
        ],
        onTabChange: (O) => {
          n(O);
        }
      }
    ) }),
    /* @__PURE__ */ o.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ o.jsx(Ye, { color: "black", label: "Upload theme", loading: h, onClick: S }) })
  ] });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(Yp, { containerClassName: "bg-white dark:bg-black", left: y, right: T }),
    /* @__PURE__ */ o.jsx("div", { className: "px-[8vmin] md:hidden", children: /* @__PURE__ */ o.jsx(
      Oa,
      {
        border: !1,
        selectedTab: e,
        tabs: [
          { id: "official", title: "Official themes" },
          { id: "installed", title: "Installed" }
        ],
        onTabChange: (O) => {
          n(O);
        }
      }
    ) })
  ] });
}, fE = ({
  currentTab: e,
  onSelectTheme: n,
  themes: t
}) => {
  switch (e) {
    case "official":
      return /* @__PURE__ */ o.jsx(oE, { onSelectTheme: n });
    case "installed":
      return /* @__PURE__ */ o.jsx(tE, { themes: t });
  }
  return null;
}, Yh = ({ source: e, themeRef: n }) => {
  const [t, a] = ue("official"), [s, l] = ue(null), [A, f] = ue("desktop"), [u, d] = ue(!1), [h, m] = ue(!1), { updateRoute: v } = nt(), k = Vi().getParam("ref"), b = Sn(), { data: { themes: y } = {} } = _p(), { mutateAsync: S } = Xy(), { mutateAsync: T } = nf(), O = dt(), B = (F) => {
    l(F);
  };
  if (Te(() => {
    if (e && n && !h) {
      const F = n.split("/")[1];
      let ee = "Install Theme";
      const oe = (y == null ? void 0 : y.map((N) => N.name)) || [];
      let re = oe.includes(F.toLowerCase());
      const $ = oe.indexOf(F.toLowerCase()), ae = y == null ? void 0 : y[$];
      let Z = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "By clicking below, ",
        /* @__PURE__ */ o.jsx("strong", { children: F }),
        " will automatically be activated as the theme for your site.",
        re && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("br", {}),
          /* @__PURE__ */ o.jsx("br", {}),
          "This will overwrite your existing version of ",
          /* @__PURE__ */ o.jsx("strong", { children: "Liebling" }),
          ae != null && ae.active ? " which is your active theme" : "",
          ". All custom changes will be lost."
        ] })
      ] });
      xe.show(Bt, {
        title: ee,
        prompt: Z,
        okLabel: "Install",
        cancelLabel: "Cancel",
        okRunningLabel: "Installing...",
        okColor: "black",
        onOk: async (N) => {
          let Y;
          m(!0);
          try {
            re && y && y.splice($, 1), Y = await S(n), Y != null && Y.themes[0] && (await T(Y.themes[0].name), St({
              title: "Theme activated",
              type: "success",
              message: /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("span", { className: "capitalize", children: Y.themes[0].name }),
                " is now your active theme"
              ] })
            })), N == null || N.remove(), v(k ? `design/edit?ref=${k}` : "design/edit");
          } catch (W) {
            O(W);
          }
        }
      });
    }
  }, [n, e, S, O, T, v, y, h, k]), !y)
    return;
  let K, _;
  return s && (K = y.find((F) => F.name.toLowerCase() === s.name.toLowerCase()), _ = async () => {
    var oe, re, $;
    let F = "Success", ee = /* @__PURE__ */ o.jsx(o.Fragment, {});
    if (zl(s))
      F = "Activate theme", ee = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "By clicking below, ",
        /* @__PURE__ */ o.jsx("strong", { children: s.name }),
        " will automatically be activated as the theme for your site."
      ] });
    else {
      d(!0);
      let ae;
      try {
        ae = await S(s.ref);
      } catch (N) {
        O(N);
      } finally {
        d(!1);
      }
      if (!ae)
        return;
      const Z = ae.themes[0];
      if (F = "Success", ee = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("strong", { children: Z.name }),
        " has been successfully installed."
      ] }), Z.active || (ee = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        ee,
        " ",
        "Do you want to activate it now?"
      ] })), (oe = Z.gscan_errors) != null && oe.length || (re = Z.warnings) != null && re.length) {
        const N = ($ = Z.gscan_errors) == null ? void 0 : $.length;
        F = `Installed with ${N ? "errors" : "warnings"}`, ee = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          "The theme ",
          /* @__PURE__ */ o.jsxs("strong", { children: [
            '"',
            Z.name,
            '"'
          ] }),
          " was installed successfully but we detected some ",
          N ? "errors" : "warnings",
          "."
        ] }), Z.active || (ee = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          ee,
          "You are still able to activate and use the theme but it is recommended to contact the theme developer fix these ",
          N ? "errors" : "warnings",
          " before you do so."
        ] }));
      }
      K = Z;
    }
    xe.show($p, {
      title: F,
      prompt: ee,
      installedTheme: K,
      onActivate: () => {
        v(k ? `design/edit?ref=${k}` : "design/edit");
      }
    });
  }), /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        v(k ? `design/edit?ref=${k}` : "design/edit");
      },
      animate: !1,
      cancelLabel: "",
      footer: !1,
      padding: !1,
      size: "full",
      testId: "theme-modal",
      title: "",
      scrolling: !0,
      onCancel: () => {
        b.remove(), v("");
      },
      children: /* @__PURE__ */ o.jsx("div", { className: "flex h-full justify-between", children: /* @__PURE__ */ o.jsxs("div", { className: "grow", children: [
        s && /* @__PURE__ */ o.jsx(
          AE,
          {
            installedTheme: K,
            isInstalling: u,
            selectedTheme: s,
            onBack: () => {
              l(null);
            },
            onClose: () => {
              v("design/edit");
            },
            onInstall: _
          }
        ),
        /* @__PURE__ */ o.jsx(
          uE,
          {
            currentTab: t,
            modal: b,
            previewMode: A,
            selectedTheme: s,
            setCurrentTab: a,
            setPreviewMode: f,
            setSelectedTheme: l,
            themes: y
          }
        ),
        !s && /* @__PURE__ */ o.jsx(
          fE,
          {
            currentTab: t,
            themes: y,
            onSelectTheme: B
          }
        )
      ] }) })
    }
  );
};
const dE = ({ children: e, to: n, classNames: t }) => {
  const a = n || document.body;
  if (!a)
    return /* @__PURE__ */ o.jsx(o.Fragment, { children: e });
  const s = (l) => {
    l.stopPropagation();
  };
  return Tk(
    /* @__PURE__ */ o.jsx("div", { className: t, onMouseDown: s, children: /* @__PURE__ */ o.jsx("div", { children: e }) }),
    a
  );
};
var hE = Object.defineProperty, pE = (e, n, t) => n in e ? hE(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, jt = (e, n, t) => (pE(e, typeof n != "symbol" ? n + "" : n, t), t), em = { exports: {} }, Di = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fh;
function mE() {
  if (Fh)
    return Di;
  Fh = 1;
  var e = At, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(f, u, d) {
    var h, m = {}, v = null, k = null;
    d !== void 0 && (v = "" + d), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (k = u.ref);
    for (h in u)
      a.call(u, h) && !l.hasOwnProperty(h) && (m[h] = u[h]);
    if (f && f.defaultProps)
      for (h in u = f.defaultProps, u)
        m[h] === void 0 && (m[h] = u[h]);
    return { $$typeof: n, type: f, key: v, ref: k, props: m, _owner: s.current };
  }
  return Di.Fragment = t, Di.jsx = A, Di.jsxs = A, Di;
}
em.exports = mE();
var Be = em.exports;
class gE {
  constructor(n = 3) {
    jt(this, "columnCount"), jt(this, "columns", []), jt(this, "columnHeights"), this.columnCount = n, this.columns = [[]], this.columnHeights = null;
  }
  reset() {
    let n = [], t = [];
    for (let a = 0; a < this.columnCount; a += 1)
      n[a] = [], t[a] = 0;
    this.columns = n, this.columnHeights = t;
  }
  addColumns() {
    for (let n = 0; n < this.columnCount; n++)
      this.columns.push([]), this.columnHeights.push(0);
  }
  addPhotoToColumns(n) {
    this.columns || this.reset();
    let t = Math.min(...this.columnHeights), a = this.columnHeights.indexOf(t);
    this.columnHeights[a] += 300 * n.ratio, this.columns[a].push(n);
  }
  getColumns() {
    return this.columns;
  }
  changeColumnCount(n) {
    n !== this.columnCount && (this.columnCount = n, this.reset());
  }
}
const vE = (e) => /* @__PURE__ */ it("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ it("path", { d: "M20 5.5l-8 8-8-8m-3.5 13h23", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, fill: "none" })), wE = (e) => /* @__PURE__ */ it("svg", { viewBox: "0 0 32 32", ...e }, /* @__PURE__ */ it("path", { d: "M17.4 29c-.8.8-2 .8-2.8 0L2.3 16.2C-.8 13.1-.8 8 2.3 4.8c3.1-3.1 8.2-3.1 11.3 0L16 7.6l2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4L17.4 29z" })), xE = {
  heart: wE,
  download: vE
}, du = ({ icon: e, label: n, ...t }) => {
  let a = null;
  return e && (a = xE[e]), /* @__PURE__ */ Be.jsxs(
    "a",
    {
      className: "text-grey-700 flex h-8 shrink-0 cursor-pointer items-center rounded-md bg-white px-3 py-2 font-sans text-sm font-medium leading-6 opacity-90 transition-all ease-in-out hover:opacity-100",
      onClick: (s) => s.stopPropagation(),
      ...t,
      children: [
        e && a && /* @__PURE__ */ Be.jsx(a, { className: `size-4 ${e === "heart" ? "fill-red" : ""} stroke-[3px] ${n && "mr-1"}` }),
        n && /* @__PURE__ */ Be.jsx("span", { children: n })
      ]
    }
  );
}, tm = ({ payload: e, srcUrl: n, links: t, likes: a, user: s, alt: l, urls: A, height: f, width: u, zoomed: d, insertImage: h, selectImg: m }) => {
  const v = (k) => {
    k.stopPropagation(), m(d ? null : e);
  };
  return /* @__PURE__ */ Be.jsxs(
    "div",
    {
      className: `relative mb-6 block ${d ? "h-full w-[max-content] cursor-zoom-out" : "w-full cursor-zoom-in"}`,
      style: { backgroundColor: e.color || "transparent" },
      "data-kg-unsplash-gallery-item": !0,
      onClick: v,
      children: [
        /* @__PURE__ */ Be.jsx(
          "img",
          {
            alt: l,
            className: `${d ? "h-full w-auto object-contain" : "block h-auto"}`,
            height: f,
            loading: "lazy",
            src: n,
            width: u,
            "data-kg-unsplash-gallery-img": !0
          }
        ),
        /* @__PURE__ */ Be.jsxs("div", { className: "absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/5 via-black/5 to-black/30 p-5 opacity-0 transition-all ease-in-out hover:opacity-100", children: [
          /* @__PURE__ */ Be.jsxs("div", { className: "flex items-center justify-end gap-3", children: [
            /* @__PURE__ */ Be.jsx(
              du,
              {
                "data-kg-button": "unsplash-like",
                href: `${t.html}/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit`,
                icon: "heart",
                label: a.toString(),
                rel: "noopener noreferrer",
                target: "_blank"
              }
            ),
            /* @__PURE__ */ Be.jsx(
              du,
              {
                "data-kg-button": "unsplash-download",
                href: `${t.download}/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit&amp;force=true`,
                icon: "download"
              }
            )
          ] }),
          /* @__PURE__ */ Be.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ Be.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ Be.jsx("img", { alt: "author", className: "mr-2 size-8 rounded-full", src: s.profile_image.medium }),
              /* @__PURE__ */ Be.jsx("div", { className: "mr-2 truncate font-sans text-sm font-medium text-white", children: s.name })
            ] }),
            /* @__PURE__ */ Be.jsx(du, { label: "Insert image", "data-kg-unsplash-insert-button": !0, onClick: (k) => {
              k.stopPropagation(), h({
                src: A.regular.replace(/&w=1080/, "&w=2000"),
                caption: `<span>Photo by <a href="${s.links.html}">${s.name}</a> / <a href="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit">Unsplash</a></span>`,
                height: f,
                width: u,
                alt: l,
                links: t
              });
            } })
          ] })
        ] })
      ]
    }
  );
}, kE = ({ payload: e, insertImage: n, selectImg: t, zoomed: a }) => /* @__PURE__ */ Be.jsx("div", { className: "flex h-full grow basis-0 justify-center", "data-kg-unsplash-zoomed": !0, onClick: () => t(null), children: /* @__PURE__ */ Be.jsx(
  tm,
  {
    alt: e.alt_description,
    height: e.height,
    insertImage: n,
    likes: e.likes,
    links: e.links,
    payload: e,
    selectImg: t,
    srcUrl: e.urls.regular,
    urls: e.urls,
    user: e.user,
    width: e.width,
    zoomed: a
  }
) }), bE = () => /* @__PURE__ */ Be.jsx("div", { className: "absolute inset-y-0 left-0 flex w-full items-center justify-center overflow-hidden pb-[8vh]", "data-kg-loader": !0, children: /* @__PURE__ */ Be.jsx("div", { className: "animate-spin before:bg-grey-800 relative inline-block size-[50px] rounded-full border border-black/10 before:z-10 before:mt-[7px] before:block before:size-[7px] before:rounded-full" }) }), yE = (e) => /* @__PURE__ */ Be.jsx("div", { className: "mr-6 flex grow basis-0 flex-col justify-start last-of-type:mr-0", children: e.children }), EE = (e) => e != null && e.columns ? e == null ? void 0 : e.columns.map((n, t) => (
  // eslint-disable-next-line react/no-array-index-key
  /* @__PURE__ */ Be.jsx(yE, { children: n.map((a) => /* @__PURE__ */ Be.jsx(
    tm,
    {
      alt: a.alt_description,
      height: a.height,
      insertImage: e == null ? void 0 : e.insertImage,
      likes: a.likes,
      links: a.links,
      payload: a,
      selectImg: e == null ? void 0 : e.selectImg,
      srcUrl: a.urls.regular,
      urls: a.urls,
      user: a.user,
      width: a.width,
      zoomed: (e == null ? void 0 : e.zoomed) || null
    },
    a.id
  )) }, t)
)) : null, hu = (e) => /* @__PURE__ */ Be.jsx("div", { className: "relative h-full overflow-hidden", "data-kg-unsplash-gallery": !0, children: /* @__PURE__ */ Be.jsxs("div", { ref: e.galleryRef, className: `flex size-full justify-center overflow-auto px-20 ${e != null && e.zoomed ? "pb-10" : ""}`, "data-kg-unsplash-gallery-scrollref": !0, children: [
  e.children,
  (e == null ? void 0 : e.isLoading) && /* @__PURE__ */ Be.jsx(bE, {})
] }) }), ME = ({
  zoomed: e,
  error: n,
  galleryRef: t,
  isLoading: a,
  dataset: s,
  selectImg: l,
  insertImage: A
}) => e ? /* @__PURE__ */ Be.jsx(
  hu,
  {
    galleryRef: t,
    zoomed: e,
    children: /* @__PURE__ */ Be.jsx(
      kE,
      {
        alt: e.alt_description,
        height: e.height,
        insertImage: A,
        likes: e.likes,
        links: e.links,
        payload: e,
        selectImg: l,
        srcUrl: e.urls.regular,
        urls: e.urls,
        user: e.user,
        width: e.width,
        zoomed: e
      }
    )
  }
) : n ? /* @__PURE__ */ Be.jsx(
  hu,
  {
    galleryRef: t,
    zoomed: e,
    children: /* @__PURE__ */ Be.jsxs("div", { className: "flex h-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ Be.jsx("h1", { className: "mb-4 text-2xl font-bold", children: "Error" }),
      /* @__PURE__ */ Be.jsx("p", { className: "text-lg font-medium", children: n })
    ] })
  }
) : /* @__PURE__ */ Be.jsx(
  hu,
  {
    galleryRef: t,
    isLoading: a,
    zoomed: e,
    children: /* @__PURE__ */ Be.jsx(
      EE,
      {
        columns: s,
        insertImage: A,
        selectImg: l,
        zoomed: e
      }
    )
  }
), SE = (e) => /* @__PURE__ */ it("svg", { xmlns: "http://www.w3.org/2000/svg", strokeWidth: 1.5, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ it("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M.75 23.249l22.5-22.5M23.25 23.249L.75.749" })), IE = (e) => /* @__PURE__ */ it("svg", { xmlns: "http://www.w3.org/2000/svg", strokeWidth: 1.5, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ it("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M1.472 13.357a9.063 9.063 0 1 0 16.682-7.09 9.063 9.063 0 1 0-16.682 7.09Zm14.749 2.863 7.029 7.03" })), JE = (e) => /* @__PURE__ */ it("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 122.43 122.41", ...e }, /* @__PURE__ */ it("path", { d: "M83.86 54.15v34.13H38.57V54.15H0v68.26h122.43V54.15H83.86zM38.57 0h45.3v34.13h-45.3z" })), TE = ({ closeModal: e, handleSearch: n, children: t }) => /* @__PURE__ */ Be.jsxs(Be.Fragment, { children: [
  /* @__PURE__ */ Be.jsx("div", { className: "fixed inset-0 z-40 h-[100vh] bg-black opacity-60" }),
  /* @__PURE__ */ Be.jsxs("div", { className: "not-kg-prose fixed inset-8 z-50 overflow-hidden rounded bg-white shadow-xl", "data-kg-modal": "unsplash", children: [
    /* @__PURE__ */ Be.jsx("button", { className: "absolute right-6 top-6 cursor-pointer", type: "button", children: /* @__PURE__ */ Be.jsx(
      SE,
      {
        className: "text-grey-400 size-4 stroke-2",
        "data-kg-modal-close-button": !0,
        onClick: () => e()
      }
    ) }),
    /* @__PURE__ */ Be.jsxs("div", { className: "flex h-full flex-col", children: [
      /* @__PURE__ */ Be.jsxs("header", { className: "flex shrink-0 items-center justify-between px-20 py-10", children: [
        /* @__PURE__ */ Be.jsxs("h1", { className: "flex items-center gap-2 font-sans text-3xl font-bold text-black", children: [
          /* @__PURE__ */ Be.jsx(JE, { className: "mb-1" }),
          "Unsplash"
        ] }),
        /* @__PURE__ */ Be.jsxs("div", { className: "relative w-full max-w-sm", children: [
          /* @__PURE__ */ Be.jsx(IE, { className: "text-grey-700 absolute left-4 top-1/2 size-4 -translate-y-2" }),
          /* @__PURE__ */ Be.jsx("input", { className: "border-grey-300 focus:border-grey-400 h-10 w-full rounded-full border border-solid pl-10 pr-8 font-sans text-md font-normal text-black focus-visible:outline-none", placeholder: "Search free high-resolution photos", autoFocus: !0, "data-kg-unsplash-search": !0, onChange: n })
        ] })
      ] }),
      t
    ] })
  ] })
] }), CE = [
  {
    id: "TA5hw14Coh4",
    slug: "a-person-standing-on-a-sand-dune-in-the-desert-TA5hw14Coh4",
    alternative_slugs: {
      en: "a-person-standing-on-a-sand-dune-in-the-desert-TA5hw14Coh4"
    },
    created_at: "2024-02-07T22:39:36Z",
    updated_at: "2024-03-07T23:46:14Z",
    promoted_at: null,
    width: 8640,
    height: 5760,
    color: "#8c5940",
    blur_hash: "LKD]brE2IUr?Lgwci_NaDjR*ofoe",
    description: "NEOM will be home to one of the world’s largest nature reserves: a 25,000 sq km stretch of wilderness, encompassing two deserts divided by a mountain range. | NEOM, Saudi Arabia",
    alt_description: "a person standing on a sand dune in the desert",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?ixid=M3wxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1707345512638-997d31a10eaa"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-person-standing-on-a-sand-dune-in-the-desert-TA5hw14Coh4",
      html: "https://unsplash.com/photos/a-person-standing-on-a-sand-dune-in-the-desert-TA5hw14Coh4",
      download: "https://unsplash.com/photos/TA5hw14Coh4/download?ixid=M3wxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/TA5hw14Coh4/download?ixid=M3wxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 226,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [],
      tagline: "Made to Change",
      tagline_url: "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
      sponsor: {
        id: "mYizSrdJkkU",
        updated_at: "2024-03-11T08:54:08Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers"
        },
        profile_image: {
          small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 1,
        total_photos: 222,
        total_promoted_photos: 72,
        accepted_tos: !0,
        for_hire: !1,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null
        }
      }
    },
    topic_submissions: {},
    user: {
      id: "mYizSrdJkkU",
      updated_at: "2024-03-11T08:54:08Z",
      username: "neom",
      name: "NEOM",
      first_name: "NEOM",
      last_name: null,
      twitter_username: "neom",
      portfolio_url: "http://www.neom.com",
      bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
      location: "NEOM, Saudi Arabia",
      links: {
        self: "https://api.unsplash.com/users/neom",
        html: "https://unsplash.com/@neom",
        photos: "https://api.unsplash.com/users/neom/photos",
        likes: "https://api.unsplash.com/users/neom/likes",
        portfolio: "https://api.unsplash.com/users/neom/portfolio",
        following: "https://api.unsplash.com/users/neom/following",
        followers: "https://api.unsplash.com/users/neom/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "discoverneom",
      total_collections: 7,
      total_likes: 1,
      total_photos: 222,
      total_promoted_photos: 72,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "discoverneom",
        portfolio_url: "http://www.neom.com",
        twitter_username: "neom",
        paypal_email: null
      }
    }
  },
  {
    id: "UArA9A02Kvk",
    slug: "a-black-and-white-photo-of-a-man-with-his-head-in-his-hands-UArA9A02Kvk",
    alternative_slugs: {
      en: "a-black-and-white-photo-of-a-man-with-his-head-in-his-hands-UArA9A02Kvk"
    },
    created_at: "2024-03-05T15:48:31Z",
    updated_at: "2024-03-11T06:59:25Z",
    promoted_at: "2024-03-11T06:59:25Z",
    width: 2160,
    height: 2700,
    color: "#262626",
    blur_hash: "L78;S$~p00oLD%D%IVay9F9ZIUay",
    description: null,
    alt_description: "a black and white photo of a man with his head in his hands",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?ixid=M3wxMTc3M3wwfDF8YWxsfDJ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDJ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDJ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDJ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDJ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709653688483-fc2b356c1f36"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-black-and-white-photo-of-a-man-with-his-head-in-his-hands-UArA9A02Kvk",
      html: "https://unsplash.com/photos/a-black-and-white-photo-of-a-man-with-his-head-in-his-hands-UArA9A02Kvk",
      download: "https://unsplash.com/photos/UArA9A02Kvk/download?ixid=M3wxMTc3M3wwfDF8YWxsfDJ8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/UArA9A02Kvk/download?ixid=M3wxMTc3M3wwfDF8YWxsfDJ8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 20,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "gwWL9kMcm2g",
      updated_at: "2024-03-11T10:14:07Z",
      username: "nickandreka",
      name: "Nick Andréka",
      first_name: "Nick",
      last_name: "Andréka",
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: null,
      links: {
        self: "https://api.unsplash.com/users/nickandreka",
        html: "https://unsplash.com/@nickandreka",
        photos: "https://api.unsplash.com/users/nickandreka/photos",
        likes: "https://api.unsplash.com/users/nickandreka/likes",
        portfolio: "https://api.unsplash.com/users/nickandreka/portfolio",
        following: "https://api.unsplash.com/users/nickandreka/following",
        followers: "https://api.unsplash.com/users/nickandreka/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1698854198608-989031a5ccdeimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1698854198608-989031a5ccdeimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1698854198608-989031a5ccdeimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "andreka.art",
      total_collections: 0,
      total_likes: 8,
      total_photos: 35,
      total_promoted_photos: 19,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "andreka.art",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "QX_7m4Lh2qg",
    slug: "a-black-and-white-photo-of-a-lighthouse-QX_7m4Lh2qg",
    alternative_slugs: {
      en: "a-black-and-white-photo-of-a-lighthouse-QX_7m4Lh2qg"
    },
    created_at: "2024-03-10T16:46:33Z",
    updated_at: "2024-03-11T06:59:11Z",
    promoted_at: "2024-03-11T06:59:11Z",
    width: 4e3,
    height: 5751,
    color: "#f3f3f3",
    blur_hash: "LAQJiu~X-;9G-:?cIURj~qD%00xt",
    description: null,
    alt_description: "a black and white photo of a lighthouse",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710088912041-34d1767d376a?ixid=M3wxMTc3M3wwfDF8YWxsfDN8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710088912041-34d1767d376a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDN8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710088912041-34d1767d376a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDN8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710088912041-34d1767d376a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDN8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710088912041-34d1767d376a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDN8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710088912041-34d1767d376a"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-black-and-white-photo-of-a-lighthouse-QX_7m4Lh2qg",
      html: "https://unsplash.com/photos/a-black-and-white-photo-of-a-lighthouse-QX_7m4Lh2qg",
      download: "https://unsplash.com/photos/QX_7m4Lh2qg/download?ixid=M3wxMTc3M3wwfDF8YWxsfDN8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/QX_7m4Lh2qg/download?ixid=M3wxMTc3M3wwfDF8YWxsfDN8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 21,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "ue6QWAAHoIQ",
      updated_at: "2024-03-11T08:53:54Z",
      username: "huzhewseh",
      name: "Volodymyr M",
      first_name: "Volodymyr",
      last_name: "M",
      twitter_username: "huzhewseh",
      portfolio_url: null,
      bio: null,
      location: null,
      links: {
        self: "https://api.unsplash.com/users/huzhewseh",
        html: "https://unsplash.com/@huzhewseh",
        photos: "https://api.unsplash.com/users/huzhewseh/photos",
        likes: "https://api.unsplash.com/users/huzhewseh/likes",
        portfolio: "https://api.unsplash.com/users/huzhewseh/portfolio",
        following: "https://api.unsplash.com/users/huzhewseh/following",
        followers: "https://api.unsplash.com/users/huzhewseh/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1663221970918-58b1620c49c9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1663221970918-58b1620c49c9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1663221970918-58b1620c49c9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "huzhewseh",
      total_collections: 0,
      total_likes: 0,
      total_photos: 18,
      total_promoted_photos: 3,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "huzhewseh",
        portfolio_url: null,
        twitter_username: "huzhewseh",
        paypal_email: null
      }
    }
  },
  {
    id: "fMNP7XVcct0",
    slug: "a-woman-standing-in-a-dark-room-with-her-eyes-closed-fMNP7XVcct0",
    alternative_slugs: {
      en: "a-woman-standing-in-a-dark-room-with-her-eyes-closed-fMNP7XVcct0"
    },
    created_at: "2024-03-09T08:40:07Z",
    updated_at: "2024-03-11T06:58:58Z",
    promoted_at: "2024-03-11T06:58:58Z",
    width: 3264,
    height: 4928,
    color: "#262626",
    blur_hash: "L35hY|xu00D%-;xuIUD%00j[?bWB",
    description: null,
    alt_description: "a woman standing in a dark room with her eyes closed",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709973540503-77d699279634?ixid=M3wxMTc3M3wwfDF8YWxsfDR8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709973540503-77d699279634?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDR8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709973540503-77d699279634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDR8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709973540503-77d699279634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDR8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709973540503-77d699279634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDR8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709973540503-77d699279634"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-woman-standing-in-a-dark-room-with-her-eyes-closed-fMNP7XVcct0",
      html: "https://unsplash.com/photos/a-woman-standing-in-a-dark-room-with-her-eyes-closed-fMNP7XVcct0",
      download: "https://unsplash.com/photos/fMNP7XVcct0/download?ixid=M3wxMTc3M3wwfDF8YWxsfDR8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/fMNP7XVcct0/download?ixid=M3wxMTc3M3wwfDF8YWxsfDR8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 7,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "lSlibqdw_c8",
      updated_at: "2024-03-11T08:54:13Z",
      username: "vitaliyshev89",
      name: "Vitaliy Shevchenko",
      first_name: "Vitaliy",
      last_name: "Shevchenko",
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: "Kharkiv, Ukraine",
      links: {
        self: "https://api.unsplash.com/users/vitaliyshev89",
        html: "https://unsplash.com/@vitaliyshev89",
        photos: "https://api.unsplash.com/users/vitaliyshev89/photos",
        likes: "https://api.unsplash.com/users/vitaliyshev89/likes",
        portfolio: "https://api.unsplash.com/users/vitaliyshev89/portfolio",
        following: "https://api.unsplash.com/users/vitaliyshev89/following",
        followers: "https://api.unsplash.com/users/vitaliyshev89/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1652271342920-31eebbc2c3d0image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1652271342920-31eebbc2c3d0image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1652271342920-31eebbc2c3d0image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 1,
      total_photos: 205,
      total_promoted_photos: 29,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: null,
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "b4kKyX0BQvc",
    slug: "a-train-station-with-a-train-on-the-tracks-b4kKyX0BQvc",
    alternative_slugs: {
      en: "a-train-station-with-a-train-on-the-tracks-b4kKyX0BQvc"
    },
    created_at: "2024-03-08T21:58:28Z",
    updated_at: "2024-03-11T06:57:35Z",
    promoted_at: "2024-03-11T06:57:27Z",
    width: 6e3,
    height: 4e3,
    color: "#0c2626",
    blur_hash: "LSDJS6kD9Zxu~qkDM|xaS%j]xaV@",
    description: 'Stunning metro train station "Elbbrücken" in Hamburg, Germany during sunset',
    alt_description: "a train station with a train on the tracks",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?ixid=M3wxMTc3M3wwfDF8YWxsfDV8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDV8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDV8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDV8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDV8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709934645859-f1ed8d3a4954"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-train-station-with-a-train-on-the-tracks-b4kKyX0BQvc",
      html: "https://unsplash.com/photos/a-train-station-with-a-train-on-the-tracks-b4kKyX0BQvc",
      download: "https://unsplash.com/photos/b4kKyX0BQvc/download?ixid=M3wxMTc3M3wwfDF8YWxsfDV8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/b4kKyX0BQvc/download?ixid=M3wxMTc3M3wwfDF8YWxsfDV8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 8,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "street-photography": {
        status: "approved",
        approved_on: "2024-03-11T06:57:35Z"
      }
    },
    user: {
      id: "TffftDPlBPk",
      updated_at: "2024-03-11T06:59:04Z",
      username: "christianlue",
      name: "Christian Lue",
      first_name: "Christian",
      last_name: "Lue",
      twitter_username: "chrrischii",
      portfolio_url: null,
      bio: null,
      location: "Frankfurt / Berlin",
      links: {
        self: "https://api.unsplash.com/users/christianlue",
        html: "https://unsplash.com/@christianlue",
        photos: "https://api.unsplash.com/users/christianlue/photos",
        likes: "https://api.unsplash.com/users/christianlue/likes",
        portfolio: "https://api.unsplash.com/users/christianlue/portfolio",
        following: "https://api.unsplash.com/users/christianlue/following",
        followers: "https://api.unsplash.com/users/christianlue/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1581889127238-ea4aa40e8cb4image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1581889127238-ea4aa40e8cb4image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1581889127238-ea4aa40e8cb4image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: null,
      total_collections: 7,
      total_likes: 15,
      total_photos: 571,
      total_promoted_photos: 103,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: null,
        portfolio_url: null,
        twitter_username: "chrrischii",
        paypal_email: null
      }
    }
  },
  {
    id: "9633dHhioC8",
    slug: "a-person-walking-through-a-canyon-in-the-desert-9633dHhioC8",
    alternative_slugs: {
      en: "a-person-walking-through-a-canyon-in-the-desert-9633dHhioC8"
    },
    created_at: "2023-04-28T15:30:26Z",
    updated_at: "2024-03-10T10:46:58Z",
    promoted_at: "2023-05-13T12:02:35Z",
    width: 8316,
    height: 5544,
    color: "#734026",
    blur_hash: "LVHdd89G57-o.9IBsSR-~pD*M{xt",
    description: "Amongst expansive red sands and spectacular sandstone rock formations, Hisma Desert – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.",
    alt_description: "a person walking through a canyon in the desert",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixid=M3wxMTc3M3wxfDF8YWxsfDZ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDZ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDZ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDZ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDZ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682695795255-b236b1f1267d"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-person-walking-through-a-canyon-in-the-desert-9633dHhioC8",
      html: "https://unsplash.com/photos/a-person-walking-through-a-canyon-in-the-desert-9633dHhioC8",
      download: "https://unsplash.com/photos/9633dHhioC8/download?ixid=M3wxMTc3M3wxfDF8YWxsfDZ8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/9633dHhioC8/download?ixid=M3wxMTc3M3wxfDF8YWxsfDZ8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 631,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [
        "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515595&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
        "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515798&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
      ],
      tagline: "Made to Change",
      tagline_url: "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
      sponsor: {
        id: "mYizSrdJkkU",
        updated_at: "2024-03-11T08:54:08Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers"
        },
        profile_image: {
          small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 1,
        total_photos: 222,
        total_promoted_photos: 72,
        accepted_tos: !0,
        for_hire: !1,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null
        }
      }
    },
    topic_submissions: {},
    user: {
      id: "mYizSrdJkkU",
      updated_at: "2024-03-11T08:54:08Z",
      username: "neom",
      name: "NEOM",
      first_name: "NEOM",
      last_name: null,
      twitter_username: "neom",
      portfolio_url: "http://www.neom.com",
      bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
      location: "NEOM, Saudi Arabia",
      links: {
        self: "https://api.unsplash.com/users/neom",
        html: "https://unsplash.com/@neom",
        photos: "https://api.unsplash.com/users/neom/photos",
        likes: "https://api.unsplash.com/users/neom/likes",
        portfolio: "https://api.unsplash.com/users/neom/portfolio",
        following: "https://api.unsplash.com/users/neom/following",
        followers: "https://api.unsplash.com/users/neom/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "discoverneom",
      total_collections: 7,
      total_likes: 1,
      total_photos: 222,
      total_promoted_photos: 72,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "discoverneom",
        portfolio_url: "http://www.neom.com",
        twitter_username: "neom",
        paypal_email: null
      }
    }
  },
  {
    id: "4PmYYBFhwFM",
    slug: "a-close-up-of-a-car-door-with-the-word-budder-on-it-4PmYYBFhwFM",
    alternative_slugs: {
      en: "a-close-up-of-a-car-door-with-the-word-budder-on-it-4PmYYBFhwFM"
    },
    created_at: "2024-03-09T18:40:37Z",
    updated_at: "2024-03-11T06:57:23Z",
    promoted_at: "2024-03-11T06:57:23Z",
    width: 5248,
    height: 7872,
    color: "#a6a6a6",
    blur_hash: "LHDA40%MbGxu%L?bt7of_N%gIBRj",
    description: null,
    alt_description: "a close up of a car door with the word budder on it",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710009439657-c0dfdc051a28?ixid=M3wxMTc3M3wwfDF8YWxsfDd8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710009439657-c0dfdc051a28?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDd8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710009439657-c0dfdc051a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDd8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710009439657-c0dfdc051a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDd8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710009439657-c0dfdc051a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDd8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710009439657-c0dfdc051a28"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-close-up-of-a-car-door-with-the-word-budder-on-it-4PmYYBFhwFM",
      html: "https://unsplash.com/photos/a-close-up-of-a-car-door-with-the-word-budder-on-it-4PmYYBFhwFM",
      download: "https://unsplash.com/photos/4PmYYBFhwFM/download?ixid=M3wxMTc3M3wwfDF8YWxsfDd8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/4PmYYBFhwFM/download?ixid=M3wxMTc3M3wwfDF8YWxsfDd8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 5,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "Xz7_QPPM2So",
      updated_at: "2024-03-11T08:27:09Z",
      username: "tiago_f_ferreira",
      name: "Tiago Ferreira",
      first_name: "Tiago",
      last_name: "Ferreira",
      twitter_username: null,
      portfolio_url: "https://tiagoferreira765.wixsite.com/photographyandmusic",
      bio: `Photography - a hobby, a passion.\r
Planet earth 🌎, a creative space to enjoy.`,
      location: "Lisboa, Portugal",
      links: {
        self: "https://api.unsplash.com/users/tiago_f_ferreira",
        html: "https://unsplash.com/@tiago_f_ferreira",
        photos: "https://api.unsplash.com/users/tiago_f_ferreira/photos",
        likes: "https://api.unsplash.com/users/tiago_f_ferreira/likes",
        portfolio: "https://api.unsplash.com/users/tiago_f_ferreira/portfolio",
        following: "https://api.unsplash.com/users/tiago_f_ferreira/following",
        followers: "https://api.unsplash.com/users/tiago_f_ferreira/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1595844391672-cdf854039843image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1595844391672-cdf854039843image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1595844391672-cdf854039843image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "tiago_f_ferreira",
      total_collections: 1,
      total_likes: 144,
      total_photos: 205,
      total_promoted_photos: 8,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "tiago_f_ferreira",
        portfolio_url: "https://tiagoferreira765.wixsite.com/photographyandmusic",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "BUhVFtY-890",
    slug: "a-close-up-of-a-bird-with-a-red-head-BUhVFtY-890",
    alternative_slugs: {
      en: "a-close-up-of-a-bird-with-a-red-head-BUhVFtY-890"
    },
    created_at: "2024-03-09T10:03:28Z",
    updated_at: "2024-03-11T06:57:20Z",
    promoted_at: "2024-03-11T06:57:20Z",
    width: 3511,
    height: 2231,
    color: "#262626",
    blur_hash: "L24epEWB0eMx$*t8OEV@RPj]baay",
    description: null,
    alt_description: "a close up of a bird with a red head",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709978601970-036e92662b46?ixid=M3wxMTc3M3wwfDF8YWxsfDh8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709978601970-036e92662b46?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDh8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709978601970-036e92662b46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDh8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709978601970-036e92662b46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDh8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709978601970-036e92662b46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDh8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709978601970-036e92662b46"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-close-up-of-a-bird-with-a-red-head-BUhVFtY-890",
      html: "https://unsplash.com/photos/a-close-up-of-a-bird-with-a-red-head-BUhVFtY-890",
      download: "https://unsplash.com/photos/BUhVFtY-890/download?ixid=M3wxMTc3M3wwfDF8YWxsfDh8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/BUhVFtY-890/download?ixid=M3wxMTc3M3wwfDF8YWxsfDh8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 8,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "textures-patterns": {
        status: "rejected"
      },
      spring: {
        status: "rejected"
      },
      "earth-hour": {
        status: "approved",
        approved_on: "2024-03-10T12:31:10Z"
      },
      health: {
        status: "unevaluated"
      },
      animals: {
        status: "unevaluated"
      },
      film: {
        status: "unevaluated"
      },
      travel: {
        status: "unevaluated"
      },
      nature: {
        status: "unevaluated"
      },
      wallpapers: {
        status: "unevaluated"
      }
    },
    user: {
      id: "3SCC0WcF-wA",
      updated_at: "2024-03-11T09:44:02Z",
      username: "refargotohp",
      name: "refargotohp",
      first_name: "refargotohp",
      last_name: null,
      twitter_username: null,
      portfolio_url: null,
      bio: "Hello 👋🏼 My name is Pavel, and I am a photographer. I enjoy the photo in any of its manifestations. Sequential shooting, street, studio, portraiture - it's all me. Waiting for you on my social networks - @refargotohp",
      location: null,
      links: {
        self: "https://api.unsplash.com/users/refargotohp",
        html: "https://unsplash.com/@refargotohp",
        photos: "https://api.unsplash.com/users/refargotohp/photos",
        likes: "https://api.unsplash.com/users/refargotohp/likes",
        portfolio: "https://api.unsplash.com/users/refargotohp/portfolio",
        following: "https://api.unsplash.com/users/refargotohp/following",
        followers: "https://api.unsplash.com/users/refargotohp/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1653036388874-dab6bdb375bcimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1653036388874-dab6bdb375bcimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1653036388874-dab6bdb375bcimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "refargotohp",
      total_collections: 1,
      total_likes: 86,
      total_photos: 132,
      total_promoted_photos: 61,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "refargotohp",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "99clkpyauJI",
    slug: "there-are-bottles-of-beer-on-a-shelf-in-front-of-a-window-99clkpyauJI",
    alternative_slugs: {
      en: "there-are-bottles-of-beer-on-a-shelf-in-front-of-a-window-99clkpyauJI"
    },
    created_at: "2024-03-10T00:15:28Z",
    updated_at: "2024-03-11T06:56:32Z",
    promoted_at: "2024-03-11T06:56:32Z",
    width: 4299,
    height: 3448,
    color: "#f3f3f3",
    blur_hash: "LjJuGn?bM{xu~qoKRPM{9FM{t6M_",
    description: null,
    alt_description: "there are bottles of beer on a shelf in front of a window",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710029721414-9e2125e155c3?ixid=M3wxMTc3M3wwfDF8YWxsfDl8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710029721414-9e2125e155c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDl8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710029721414-9e2125e155c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDl8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710029721414-9e2125e155c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDl8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710029721414-9e2125e155c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDl8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710029721414-9e2125e155c3"
    },
    links: {
      self: "https://api.unsplash.com/photos/there-are-bottles-of-beer-on-a-shelf-in-front-of-a-window-99clkpyauJI",
      html: "https://unsplash.com/photos/there-are-bottles-of-beer-on-a-shelf-in-front-of-a-window-99clkpyauJI",
      download: "https://unsplash.com/photos/99clkpyauJI/download?ixid=M3wxMTc3M3wwfDF8YWxsfDl8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/99clkpyauJI/download?ixid=M3wxMTc3M3wwfDF8YWxsfDl8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 2,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      film: {
        status: "approved",
        approved_on: "2024-03-10T16:39:06Z"
      }
    },
    user: {
      id: "TPCcwPbQzmY",
      updated_at: "2024-03-11T06:59:01Z",
      username: "suzm4film",
      name: "szm 4",
      first_name: "szm",
      last_name: "4",
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: "Japan",
      links: {
        self: "https://api.unsplash.com/users/suzm4film",
        html: "https://unsplash.com/@suzm4film",
        photos: "https://api.unsplash.com/users/suzm4film/photos",
        likes: "https://api.unsplash.com/users/suzm4film/likes",
        portfolio: "https://api.unsplash.com/users/suzm4film/portfolio",
        following: "https://api.unsplash.com/users/suzm4film/following",
        followers: "https://api.unsplash.com/users/suzm4film/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1632890829763-5c518f873dee?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1632890829763-5c518f873dee?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1632890829763-5c518f873dee?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 0,
      total_photos: 189,
      total_promoted_photos: 19,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: null,
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "Lbt-cZyOUM4",
    slug: "an-old-fashioned-typewriter-sitting-on-a-table-in-front-of-a-window-Lbt-cZyOUM4",
    alternative_slugs: {
      en: "an-old-fashioned-typewriter-sitting-on-a-table-in-front-of-a-window-Lbt-cZyOUM4"
    },
    created_at: "2024-03-09T16:58:57Z",
    updated_at: "2024-03-11T06:57:06Z",
    promoted_at: "2024-03-11T06:55:38Z",
    width: 5783,
    height: 3848,
    color: "#0c2626",
    blur_hash: "LkG[.y01Ri-:?bM{RjofM{xuRkWB",
    description: null,
    alt_description: "an old fashioned typewriter sitting on a table in front of a window",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710003364549-de37d4ed3413?ixid=M3wxMTc3M3wwfDF8YWxsfDEwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710003364549-de37d4ed3413?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710003364549-de37d4ed3413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710003364549-de37d4ed3413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710003364549-de37d4ed3413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710003364549-de37d4ed3413"
    },
    links: {
      self: "https://api.unsplash.com/photos/an-old-fashioned-typewriter-sitting-on-a-table-in-front-of-a-window-Lbt-cZyOUM4",
      html: "https://unsplash.com/photos/an-old-fashioned-typewriter-sitting-on-a-table-in-front-of-a-window-Lbt-cZyOUM4",
      download: "https://unsplash.com/photos/Lbt-cZyOUM4/download?ixid=M3wxMTc3M3wwfDF8YWxsfDEwfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/Lbt-cZyOUM4/download?ixid=M3wxMTc3M3wwfDF8YWxsfDEwfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 3,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "8D4VFtkiIuw",
      updated_at: "2024-03-11T07:28:57Z",
      username: "tama66",
      name: "Peter Herrmann",
      first_name: "Peter",
      last_name: "Herrmann",
      twitter_username: null,
      portfolio_url: null,
      bio: "Everything... but not boring! Instagram@Tiefstapler66",
      location: "Leverkusen/Germany",
      links: {
        self: "https://api.unsplash.com/users/tama66",
        html: "https://unsplash.com/@tama66",
        photos: "https://api.unsplash.com/users/tama66/photos",
        likes: "https://api.unsplash.com/users/tama66/likes",
        portfolio: "https://api.unsplash.com/users/tama66/portfolio",
        following: "https://api.unsplash.com/users/tama66/following",
        followers: "https://api.unsplash.com/users/tama66/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1611475141936-383e23c6cc6dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1611475141936-383e23c6cc6dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1611475141936-383e23c6cc6dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "tiefstapler66",
      total_collections: 1,
      total_likes: 149,
      total_photos: 363,
      total_promoted_photos: 152,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "tiefstapler66",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "D1jr0Mevs-c",
    slug: "an-aerial-view-of-a-body-of-water-D1jr0Mevs-c",
    alternative_slugs: {
      en: "an-aerial-view-of-a-body-of-water-D1jr0Mevs-c"
    },
    created_at: "2024-02-07T22:34:15Z",
    updated_at: "2024-03-10T10:54:36Z",
    promoted_at: null,
    width: 5280,
    height: 2970,
    color: "#0c2626",
    blur_hash: "LH9[JL0i+HM{^}Ezw#R.b@n$nhbb",
    description: "The Islands of NEOM are home to kaleidoscopic-coloured coral reefs and an abundance of diverse marine life | Islands of NEOM – NEOM, Saudi Arabia",
    alt_description: "an aerial view of a body of water",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?ixid=M3wxMTc3M3wxfDF8YWxsfDExfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDExfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDExfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDExfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDExfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1707343843982-f8275f3994c5"
    },
    links: {
      self: "https://api.unsplash.com/photos/an-aerial-view-of-a-body-of-water-D1jr0Mevs-c",
      html: "https://unsplash.com/photos/an-aerial-view-of-a-body-of-water-D1jr0Mevs-c",
      download: "https://unsplash.com/photos/D1jr0Mevs-c/download?ixid=M3wxMTc3M3wxfDF8YWxsfDExfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/D1jr0Mevs-c/download?ixid=M3wxMTc3M3wxfDF8YWxsfDExfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 308,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [],
      tagline: "Made to Change",
      tagline_url: "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
      sponsor: {
        id: "mYizSrdJkkU",
        updated_at: "2024-03-11T08:54:08Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers"
        },
        profile_image: {
          small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 1,
        total_photos: 222,
        total_promoted_photos: 72,
        accepted_tos: !0,
        for_hire: !1,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null
        }
      }
    },
    topic_submissions: {},
    user: {
      id: "mYizSrdJkkU",
      updated_at: "2024-03-11T08:54:08Z",
      username: "neom",
      name: "NEOM",
      first_name: "NEOM",
      last_name: null,
      twitter_username: "neom",
      portfolio_url: "http://www.neom.com",
      bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
      location: "NEOM, Saudi Arabia",
      links: {
        self: "https://api.unsplash.com/users/neom",
        html: "https://unsplash.com/@neom",
        photos: "https://api.unsplash.com/users/neom/photos",
        likes: "https://api.unsplash.com/users/neom/likes",
        portfolio: "https://api.unsplash.com/users/neom/portfolio",
        following: "https://api.unsplash.com/users/neom/following",
        followers: "https://api.unsplash.com/users/neom/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "discoverneom",
      total_collections: 7,
      total_likes: 1,
      total_photos: 222,
      total_promoted_photos: 72,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "discoverneom",
        portfolio_url: "http://www.neom.com",
        twitter_username: "neom",
        paypal_email: null
      }
    }
  },
  {
    id: "0RBEUjWQBBA",
    slug: "a-woman-standing-under-a-cherry-blossom-tree-0RBEUjWQBBA",
    alternative_slugs: {
      en: "a-woman-standing-under-a-cherry-blossom-tree-0RBEUjWQBBA"
    },
    created_at: "2024-03-10T10:15:48Z",
    updated_at: "2024-03-11T06:55:22Z",
    promoted_at: "2024-03-11T06:55:22Z",
    width: 4672,
    height: 7008,
    color: "#262626",
    blur_hash: "LOG8o{t7WBWB~DofR*j@D%NGR%WB",
    description: null,
    alt_description: "a woman standing under a cherry blossom tree",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710065574765-a685385c6d9a?ixid=M3wxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710065574765-a685385c6d9a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710065574765-a685385c6d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710065574765-a685385c6d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710065574765-a685385c6d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710065574765-a685385c6d9a"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-woman-standing-under-a-cherry-blossom-tree-0RBEUjWQBBA",
      html: "https://unsplash.com/photos/a-woman-standing-under-a-cherry-blossom-tree-0RBEUjWQBBA",
      download: "https://unsplash.com/photos/0RBEUjWQBBA/download?ixid=M3wxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/0RBEUjWQBBA/download?ixid=M3wxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 11,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "ePlndXHeIiM",
      updated_at: "2024-03-11T09:04:03Z",
      username: "lwdzl",
      name: "Jack Dong",
      first_name: "Jack",
      last_name: "Dong",
      twitter_username: null,
      portfolio_url: "https://www.xiaohongshu.com/user/profile/5f11b998000000000101d8d2?xhsshare=CopyLink&appuid=5f11b998000000000101d8d2&apptime=1696562673",
      bio: null,
      location: null,
      links: {
        self: "https://api.unsplash.com/users/lwdzl",
        html: "https://unsplash.com/@lwdzl",
        photos: "https://api.unsplash.com/users/lwdzl/photos",
        likes: "https://api.unsplash.com/users/lwdzl/likes",
        portfolio: "https://api.unsplash.com/users/lwdzl/portfolio",
        following: "https://api.unsplash.com/users/lwdzl/following",
        followers: "https://api.unsplash.com/users/lwdzl/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1696563144074-80a8da44bcd4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1696563144074-80a8da44bcd4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1696563144074-80a8da44bcd4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 101,
      total_photos: 640,
      total_promoted_photos: 112,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: null,
        portfolio_url: "https://www.xiaohongshu.com/user/profile/5f11b998000000000101d8d2?xhsshare=CopyLink&appuid=5f11b998000000000101d8d2&apptime=1696562673",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "2IGDvJa2Bd0",
    slug: "a-path-in-the-middle-of-a-foggy-forest-2IGDvJa2Bd0",
    alternative_slugs: {
      en: "a-path-in-the-middle-of-a-foggy-forest-2IGDvJa2Bd0"
    },
    created_at: "2024-02-21T14:32:53Z",
    updated_at: "2024-03-11T06:54:06Z",
    promoted_at: "2024-03-11T06:54:06Z",
    width: 4672,
    height: 5840,
    color: "#f3f3f3",
    blur_hash: "L#Gv00ofD%ay~qoeM_ay%NafWVj[",
    description: null,
    alt_description: "a path in the middle of a foggy forest",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1708525736169-534ee3e24e99?ixid=M3wxMTc3M3wwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1708525736169-534ee3e24e99?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1708525736169-534ee3e24e99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1708525736169-534ee3e24e99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1708525736169-534ee3e24e99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1708525736169-534ee3e24e99"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-path-in-the-middle-of-a-foggy-forest-2IGDvJa2Bd0",
      html: "https://unsplash.com/photos/a-path-in-the-middle-of-a-foggy-forest-2IGDvJa2Bd0",
      download: "https://unsplash.com/photos/2IGDvJa2Bd0/download?ixid=M3wxMTc3M3wwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/2IGDvJa2Bd0/download?ixid=M3wxMTc3M3wwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 11,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "zL5HAN1fnJw",
      updated_at: "2024-03-11T06:58:57Z",
      username: "viklukphotography",
      name: "Viktor Mischke",
      first_name: "Viktor",
      last_name: "Mischke",
      twitter_username: null,
      portfolio_url: "https://www.istockphoto.com/de/portfolio/snoviktor",
      bio: null,
      location: "Schloss Holte-Stukenbrock",
      links: {
        self: "https://api.unsplash.com/users/viklukphotography",
        html: "https://unsplash.com/@viklukphotography",
        photos: "https://api.unsplash.com/users/viklukphotography/photos",
        likes: "https://api.unsplash.com/users/viklukphotography/likes",
        portfolio: "https://api.unsplash.com/users/viklukphotography/portfolio",
        following: "https://api.unsplash.com/users/viklukphotography/following",
        followers: "https://api.unsplash.com/users/viklukphotography/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1646051425690-ed09fae6858fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1646051425690-ed09fae6858fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1646051425690-ed09fae6858fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "viktormischke",
      total_collections: 0,
      total_likes: 141,
      total_photos: 38,
      total_promoted_photos: 8,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "viktormischke",
        portfolio_url: "https://www.istockphoto.com/de/portfolio/snoviktor",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "PZfeP0uwBpQ",
    slug: "a-person-with-a-hat-on-their-head-in-a-field-PZfeP0uwBpQ",
    alternative_slugs: {
      en: "a-person-with-a-hat-on-their-head-in-a-field-PZfeP0uwBpQ"
    },
    created_at: "2024-02-24T10:57:49Z",
    updated_at: "2024-03-11T06:53:56Z",
    promoted_at: "2024-03-11T06:53:56Z",
    width: 2720,
    height: 4080,
    color: "#404026",
    blur_hash: "LIB:Tx%K56NGORbYxas:0KRj-poe",
    description: "A woman wearing a traditional coolie hat kneels in a field of green vegetables, carefully harvesting the crops.",
    alt_description: "a person with a hat on their head in a field",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1708771641703-0df3d179cec3?ixid=M3wxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1708771641703-0df3d179cec3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1708771641703-0df3d179cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1708771641703-0df3d179cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1708771641703-0df3d179cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1708771641703-0df3d179cec3"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-person-with-a-hat-on-their-head-in-a-field-PZfeP0uwBpQ",
      html: "https://unsplash.com/photos/a-person-with-a-hat-on-their-head-in-a-field-PZfeP0uwBpQ",
      download: "https://unsplash.com/photos/PZfeP0uwBpQ/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/PZfeP0uwBpQ/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 2,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      people: {
        status: "rejected"
      },
      experimental: {
        status: "rejected"
      }
    },
    user: {
      id: "mWjiXj5vQuQ",
      updated_at: "2024-03-11T06:58:57Z",
      username: "chanwei_snap",
      name: "Chanwei",
      first_name: "Chanwei",
      last_name: null,
      twitter_username: null,
      portfolio_url: null,
      bio: `👋 Just a snap-happy amateur sharing my photos with you!\r
📍Instagram: @chanwei.snap\r
`,
      location: "Taipei, Taiwan",
      links: {
        self: "https://api.unsplash.com/users/chanwei_snap",
        html: "https://unsplash.com/@chanwei_snap",
        photos: "https://api.unsplash.com/users/chanwei_snap/photos",
        likes: "https://api.unsplash.com/users/chanwei_snap/likes",
        portfolio: "https://api.unsplash.com/users/chanwei_snap/portfolio",
        following: "https://api.unsplash.com/users/chanwei_snap/following",
        followers: "https://api.unsplash.com/users/chanwei_snap/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1705518610211-a929b876f4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1705518610211-a929b876f4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1705518610211-a929b876f4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "chanwei.snap",
      total_collections: 15,
      total_likes: 63,
      total_photos: 150,
      total_promoted_photos: 2,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "chanwei.snap",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "1JwHaWeSK9s",
    slug: "a-picture-of-some-white-flowers-on-a-white-background-1JwHaWeSK9s",
    alternative_slugs: {
      en: "a-picture-of-some-white-flowers-on-a-white-background-1JwHaWeSK9s"
    },
    created_at: "2024-03-10T11:33:51Z",
    updated_at: "2024-03-11T06:57:09Z",
    promoted_at: "2024-03-11T06:53:39Z",
    width: 3586,
    height: 3917,
    color: "#f3f3d9",
    blur_hash: "LIQ0T^j=_4%M%MxbM{M{_4jZITbH",
    description: "Title: Christmas eve Artist: Callowhill, James Publisher: L. Prang & Co. Name on Item: JC Date: [ca. 1861–1897] https://www.digitalcommonwealth.org/search/commonwealth:7w62f880r",
    alt_description: "a picture of some white flowers on a white background",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710069455079-2059d3cefe91?ixid=M3wxMTc3M3wwfDF8YWxsfDE1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710069455079-2059d3cefe91?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710069455079-2059d3cefe91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710069455079-2059d3cefe91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710069455079-2059d3cefe91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710069455079-2059d3cefe91"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-picture-of-some-white-flowers-on-a-white-background-1JwHaWeSK9s",
      html: "https://unsplash.com/photos/a-picture-of-some-white-flowers-on-a-white-background-1JwHaWeSK9s",
      download: "https://unsplash.com/photos/1JwHaWeSK9s/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE1fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/1JwHaWeSK9s/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE1fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 7,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "piFVWeoWxU8",
      updated_at: "2024-03-11T07:28:12Z",
      username: "bostonpubliclibrary",
      name: "Boston Public Library",
      first_name: "Boston",
      last_name: "Public Library",
      twitter_username: null,
      portfolio_url: "https://www.bpl.org/",
      bio: "Considered a pioneer of public library service in the United States, the Boston Public Library is among the three largest collections in the country and is committed to be ‘Free for All’.",
      location: "Boston, USA",
      links: {
        self: "https://api.unsplash.com/users/bostonpubliclibrary",
        html: "https://unsplash.com/@bostonpubliclibrary",
        photos: "https://api.unsplash.com/users/bostonpubliclibrary/photos",
        likes: "https://api.unsplash.com/users/bostonpubliclibrary/likes",
        portfolio: "https://api.unsplash.com/users/bostonpubliclibrary/portfolio",
        following: "https://api.unsplash.com/users/bostonpubliclibrary/following",
        followers: "https://api.unsplash.com/users/bostonpubliclibrary/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1579171056760-0293bb679901image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1579171056760-0293bb679901image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1579171056760-0293bb679901image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: null,
      total_collections: 6,
      total_likes: 0,
      total_photos: 510,
      total_promoted_photos: 62,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: null,
        portfolio_url: "https://www.bpl.org/",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "efzvMAIpfWY",
    slug: "a-couple-of-people-that-are-standing-in-the-dirt-efzvMAIpfWY",
    alternative_slugs: {
      en: "a-couple-of-people-that-are-standing-in-the-dirt-efzvMAIpfWY"
    },
    created_at: "2023-04-28T12:46:16Z",
    updated_at: "2024-03-11T09:48:19Z",
    promoted_at: null,
    width: 9504,
    height: 6336,
    color: "#c07359",
    blur_hash: "LELo7xNHxa~Bz:s9S4nO~VbwoLS~",
    description: "Amongst expansive red sands and spectacular sandstone rock formations, Hisma Desert – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.",
    alt_description: "a couple of people that are standing in the dirt",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1682685797742-42c9987a2c34?ixid=M3wxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1682685797742-42c9987a2c34?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1682685797742-42c9987a2c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1682685797742-42c9987a2c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1682685797742-42c9987a2c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682685797742-42c9987a2c34"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-couple-of-people-that-are-standing-in-the-dirt-efzvMAIpfWY",
      html: "https://unsplash.com/photos/a-couple-of-people-that-are-standing-in-the-dirt-efzvMAIpfWY",
      download: "https://unsplash.com/photos/efzvMAIpfWY/download?ixid=M3wxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/efzvMAIpfWY/download?ixid=M3wxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 211,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [
        "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515544&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
        "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515747&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
      ],
      tagline: "Made to Change",
      tagline_url: "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
      sponsor: {
        id: "mYizSrdJkkU",
        updated_at: "2024-03-11T08:54:08Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers"
        },
        profile_image: {
          small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 1,
        total_photos: 222,
        total_promoted_photos: 72,
        accepted_tos: !0,
        for_hire: !1,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null
        }
      }
    },
    topic_submissions: {},
    user: {
      id: "mYizSrdJkkU",
      updated_at: "2024-03-11T08:54:08Z",
      username: "neom",
      name: "NEOM",
      first_name: "NEOM",
      last_name: null,
      twitter_username: "neom",
      portfolio_url: "http://www.neom.com",
      bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
      location: "NEOM, Saudi Arabia",
      links: {
        self: "https://api.unsplash.com/users/neom",
        html: "https://unsplash.com/@neom",
        photos: "https://api.unsplash.com/users/neom/photos",
        likes: "https://api.unsplash.com/users/neom/likes",
        portfolio: "https://api.unsplash.com/users/neom/portfolio",
        following: "https://api.unsplash.com/users/neom/following",
        followers: "https://api.unsplash.com/users/neom/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "discoverneom",
      total_collections: 7,
      total_likes: 1,
      total_photos: 222,
      total_promoted_photos: 72,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "discoverneom",
        portfolio_url: "http://www.neom.com",
        twitter_username: "neom",
        paypal_email: null
      }
    }
  },
  {
    id: "j39-6Uto9QQ",
    slug: "a-forest-filled-with-lots-of-tall-trees-j39-6Uto9QQ",
    alternative_slugs: {
      en: "a-forest-filled-with-lots-of-tall-trees-j39-6Uto9QQ"
    },
    created_at: "2024-03-09T22:12:40Z",
    updated_at: "2024-03-11T07:57:13Z",
    promoted_at: "2024-03-11T06:51:56Z",
    width: 3759,
    height: 5639,
    color: "#26260c",
    blur_hash: "L79tDG?H4;IURu%MM{RP~oohIoIo",
    description: null,
    alt_description: "a forest filled with lots of tall trees",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710020339360-ce951881b835?ixid=M3wxMTc3M3wwfDF8YWxsfDE3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710020339360-ce951881b835?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710020339360-ce951881b835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710020339360-ce951881b835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710020339360-ce951881b835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710020339360-ce951881b835"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-forest-filled-with-lots-of-tall-trees-j39-6Uto9QQ",
      html: "https://unsplash.com/photos/a-forest-filled-with-lots-of-tall-trees-j39-6Uto9QQ",
      download: "https://unsplash.com/photos/j39-6Uto9QQ/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE3fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/j39-6Uto9QQ/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE3fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 1,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "MarIhx6ztc0",
      updated_at: "2024-03-11T06:51:56Z",
      username: "brice_cooper18",
      name: "Brice Cooper",
      first_name: "Brice",
      last_name: "Cooper",
      twitter_username: null,
      portfolio_url: null,
      bio: "Always down for an adventure, capturing those adventures one photo at a time. Never stop exploring!",
      location: "Florida",
      links: {
        self: "https://api.unsplash.com/users/brice_cooper18",
        html: "https://unsplash.com/@brice_cooper18",
        photos: "https://api.unsplash.com/users/brice_cooper18/photos",
        likes: "https://api.unsplash.com/users/brice_cooper18/likes",
        portfolio: "https://api.unsplash.com/users/brice_cooper18/portfolio",
        following: "https://api.unsplash.com/users/brice_cooper18/following",
        followers: "https://api.unsplash.com/users/brice_cooper18/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1673045276376-91bb892b6e94image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1673045276376-91bb892b6e94image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1673045276376-91bb892b6e94image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "brice_cooper18",
      total_collections: 14,
      total_likes: 0,
      total_photos: 1467,
      total_promoted_photos: 51,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "brice_cooper18",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "oTE1p2Awp3I",
    slug: "a-couple-of-people-standing-on-top-of-a-cliff-next-to-the-ocean-oTE1p2Awp3I",
    alternative_slugs: {
      en: "a-couple-of-people-standing-on-top-of-a-cliff-next-to-the-ocean-oTE1p2Awp3I"
    },
    created_at: "2024-02-27T22:15:01Z",
    updated_at: "2024-03-11T06:51:52Z",
    promoted_at: "2024-03-11T06:51:52Z",
    width: 4e3,
    height: 5333,
    color: "#c0c0c0",
    blur_hash: "LLE:C[u5IooJ_N%gE1ax~ps8Vsoe",
    description: null,
    alt_description: "a couple of people standing on top of a cliff next to the ocean",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709071784840-cf3ecc434749?ixid=M3wxMTc3M3wwfDF8YWxsfDE4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709071784840-cf3ecc434749?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709071784840-cf3ecc434749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709071784840-cf3ecc434749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709071784840-cf3ecc434749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709071784840-cf3ecc434749"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-couple-of-people-standing-on-top-of-a-cliff-next-to-the-ocean-oTE1p2Awp3I",
      html: "https://unsplash.com/photos/a-couple-of-people-standing-on-top-of-a-cliff-next-to-the-ocean-oTE1p2Awp3I",
      download: "https://unsplash.com/photos/oTE1p2Awp3I/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE4fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/oTE1p2Awp3I/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE4fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 8,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "khtnjqjzcq0",
      updated_at: "2024-03-11T06:51:53Z",
      username: "mitchorr",
      name: "Mitchell Orr",
      first_name: "Mitchell",
      last_name: "Orr",
      twitter_username: null,
      portfolio_url: "https://mitchorr.darkroom.tech/",
      bio: `If you feel you would like to support my work, any donations no matter how small, would be extremely helpful. \r
Thanks for looking!`,
      location: "Wirral",
      links: {
        self: "https://api.unsplash.com/users/mitchorr",
        html: "https://unsplash.com/@mitchorr",
        photos: "https://api.unsplash.com/users/mitchorr/photos",
        likes: "https://api.unsplash.com/users/mitchorr/likes",
        portfolio: "https://api.unsplash.com/users/mitchorr/portfolio",
        following: "https://api.unsplash.com/users/mitchorr/following",
        followers: "https://api.unsplash.com/users/mitchorr/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1687891061126-8858e815018fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1687891061126-8858e815018fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1687891061126-8858e815018fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "mitchorr1",
      total_collections: 0,
      total_likes: 41,
      total_photos: 358,
      total_promoted_photos: 118,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "mitchorr1",
        portfolio_url: "https://mitchorr.darkroom.tech/",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "ihmo0uRQ3jA",
    slug: "a-bed-sitting-in-a-bedroom-next-to-a-window-ihmo0uRQ3jA",
    alternative_slugs: {
      en: "a-bed-sitting-in-a-bedroom-next-to-a-window-ihmo0uRQ3jA"
    },
    created_at: "2024-02-24T20:00:04Z",
    updated_at: "2024-03-11T06:51:48Z",
    promoted_at: "2024-03-11T06:51:48Z",
    width: 4e3,
    height: 6e3,
    color: "#260c0c",
    blur_hash: "L78;b;?I4Xx?tcIUD+xt03oy-.M|",
    description: null,
    alt_description: "a bed sitting in a bedroom next to a window",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1708804309492-5ef3f3458c33?ixid=M3wxMTc3M3wwfDF8YWxsfDE5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1708804309492-5ef3f3458c33?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1708804309492-5ef3f3458c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1708804309492-5ef3f3458c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1708804309492-5ef3f3458c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1708804309492-5ef3f3458c33"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-bed-sitting-in-a-bedroom-next-to-a-window-ihmo0uRQ3jA",
      html: "https://unsplash.com/photos/a-bed-sitting-in-a-bedroom-next-to-a-window-ihmo0uRQ3jA",
      download: "https://unsplash.com/photos/ihmo0uRQ3jA/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE5fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/ihmo0uRQ3jA/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE5fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 20,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "Og5qBrDjufI",
      updated_at: "2024-03-11T06:51:49Z",
      username: "mariailves",
      name: "Maria Ilves",
      first_name: "Maria",
      last_name: "Ilves",
      twitter_username: null,
      portfolio_url: "http://www.mariailves.com",
      bio: null,
      location: "Ambleside",
      links: {
        self: "https://api.unsplash.com/users/mariailves",
        html: "https://unsplash.com/@mariailves",
        photos: "https://api.unsplash.com/users/mariailves/photos",
        likes: "https://api.unsplash.com/users/mariailves/likes",
        portfolio: "https://api.unsplash.com/users/mariailves/portfolio",
        following: "https://api.unsplash.com/users/mariailves/following",
        followers: "https://api.unsplash.com/users/mariailves/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1708802611867-ab4ff1564c8cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1708802611867-ab4ff1564c8cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1708802611867-ab4ff1564c8cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "mariailves_",
      total_collections: 0,
      total_likes: 0,
      total_photos: 38,
      total_promoted_photos: 4,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "mariailves_",
        portfolio_url: "http://www.mariailves.com",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "UvQtTVdFi9I",
    slug: "UvQtTVdFi9I",
    alternative_slugs: {
      en: "UvQtTVdFi9I"
    },
    created_at: "2016-08-12T16:12:25Z",
    updated_at: "2024-03-11T06:50:27Z",
    promoted_at: "2024-03-11T06:50:27Z",
    width: 3648,
    height: 5472,
    color: "#8ca673",
    blur_hash: "LGG9g4IAVax[.Zxus=kB9HtQ%LRj",
    description: null,
    alt_description: null,
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1471018289981-5d9f06e2bf45?ixid=M3wxMTc3M3wwfDF8YWxsfDIwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1471018289981-5d9f06e2bf45?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1471018289981-5d9f06e2bf45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1471018289981-5d9f06e2bf45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1471018289981-5d9f06e2bf45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1471018289981-5d9f06e2bf45"
    },
    links: {
      self: "https://api.unsplash.com/photos/UvQtTVdFi9I",
      html: "https://unsplash.com/photos/UvQtTVdFi9I",
      download: "https://unsplash.com/photos/UvQtTVdFi9I/download?ixid=M3wxMTc3M3wwfDF8YWxsfDIwfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/UvQtTVdFi9I/download?ixid=M3wxMTc3M3wwfDF8YWxsfDIwfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 60,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "dhG1THiRwtA",
      updated_at: "2024-03-11T06:50:28Z",
      username: "clarissemeyer",
      name: "Clarisse Meyer",
      first_name: "Clarisse",
      last_name: "Meyer",
      twitter_username: "claireymeyer",
      portfolio_url: "https://www.clarisserae.com",
      bio: `Photo | Video | Design - Southern California & Beyond\r
Instagram: @clarisse.rae`,
      location: "Orange County, CA",
      links: {
        self: "https://api.unsplash.com/users/clarissemeyer",
        html: "https://unsplash.com/@clarissemeyer",
        photos: "https://api.unsplash.com/users/clarissemeyer/photos",
        likes: "https://api.unsplash.com/users/clarissemeyer/likes",
        portfolio: "https://api.unsplash.com/users/clarissemeyer/portfolio",
        following: "https://api.unsplash.com/users/clarissemeyer/following",
        followers: "https://api.unsplash.com/users/clarissemeyer/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1470948329031-558b487bdf37?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1470948329031-558b487bdf37?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1470948329031-558b487bdf37?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "clarisse.rae",
      total_collections: 2,
      total_likes: 139,
      total_photos: 99,
      total_promoted_photos: 58,
      accepted_tos: !1,
      for_hire: !1,
      social: {
        instagram_username: "clarisse.rae",
        portfolio_url: "https://www.clarisserae.com",
        twitter_username: "claireymeyer",
        paypal_email: null
      }
    }
  },
  {
    id: "xQhP7RVgA3c",
    slug: "a-person-swimming-in-the-ocean-with-a-mountain-in-the-background-xQhP7RVgA3c",
    alternative_slugs: {
      en: "a-person-swimming-in-the-ocean-with-a-mountain-in-the-background-xQhP7RVgA3c"
    },
    created_at: "2024-02-07T22:34:15Z",
    updated_at: "2024-03-10T21:55:55Z",
    promoted_at: null,
    width: 7512,
    height: 5008,
    color: "#c0d9f3",
    blur_hash: "L?ENFxX9Rkaz.AR.WBjsx^a~oLa}",
    description: "NEOM is home to 2,000 different marine species, 600 of which are native to the Red Sea and cannot be found anywhere else in the world. | Islands of NEOM- NEOM, Saudi Arabia",
    alt_description: "a person swimming in the ocean with a mountain in the background",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?ixid=M3wxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1707343846292-56e4c6abf291"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-mountain-in-the-background-xQhP7RVgA3c",
      html: "https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-mountain-in-the-background-xQhP7RVgA3c",
      download: "https://unsplash.com/photos/xQhP7RVgA3c/download?ixid=M3wxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/xQhP7RVgA3c/download?ixid=M3wxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 98,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [],
      tagline: "Made to Change",
      tagline_url: "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
      sponsor: {
        id: "mYizSrdJkkU",
        updated_at: "2024-03-11T08:54:08Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers"
        },
        profile_image: {
          small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 1,
        total_photos: 222,
        total_promoted_photos: 72,
        accepted_tos: !0,
        for_hire: !1,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null
        }
      }
    },
    topic_submissions: {},
    user: {
      id: "mYizSrdJkkU",
      updated_at: "2024-03-11T08:54:08Z",
      username: "neom",
      name: "NEOM",
      first_name: "NEOM",
      last_name: null,
      twitter_username: "neom",
      portfolio_url: "http://www.neom.com",
      bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
      location: "NEOM, Saudi Arabia",
      links: {
        self: "https://api.unsplash.com/users/neom",
        html: "https://unsplash.com/@neom",
        photos: "https://api.unsplash.com/users/neom/photos",
        likes: "https://api.unsplash.com/users/neom/likes",
        portfolio: "https://api.unsplash.com/users/neom/portfolio",
        following: "https://api.unsplash.com/users/neom/following",
        followers: "https://api.unsplash.com/users/neom/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "discoverneom",
      total_collections: 7,
      total_likes: 1,
      total_photos: 222,
      total_promoted_photos: 72,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "discoverneom",
        portfolio_url: "http://www.neom.com",
        twitter_username: "neom",
        paypal_email: null
      }
    }
  },
  {
    id: "iswshBYbTBk",
    slug: "a-woman-riding-an-escalator-down-an-escalator-iswshBYbTBk",
    alternative_slugs: {
      en: "a-woman-riding-an-escalator-down-an-escalator-iswshBYbTBk"
    },
    created_at: "2024-02-27T19:26:10Z",
    updated_at: "2024-03-11T06:48:50Z",
    promoted_at: "2024-03-11T06:48:50Z",
    width: 3940,
    height: 2634,
    color: "#73a673",
    blur_hash: "LEDn~t%{y:WXDPVtH[jt8{o|VGk9",
    description: null,
    alt_description: "a woman riding an escalator down an escalator",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709061965707-9a89ffb23103?ixid=M3wxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709061965707-9a89ffb23103?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709061965707-9a89ffb23103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709061965707-9a89ffb23103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709061965707-9a89ffb23103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709061965707-9a89ffb23103"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-woman-riding-an-escalator-down-an-escalator-iswshBYbTBk",
      html: "https://unsplash.com/photos/a-woman-riding-an-escalator-down-an-escalator-iswshBYbTBk",
      download: "https://unsplash.com/photos/iswshBYbTBk/download?ixid=M3wxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/iswshBYbTBk/download?ixid=M3wxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 4,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      people: {
        status: "rejected"
      }
    },
    user: {
      id: "d-2o2yQwtxY",
      updated_at: "2024-03-11T06:48:59Z",
      username: "vitalymazur",
      name: "Vitalii Mazur",
      first_name: "Vitalii",
      last_name: "Mazur",
      twitter_username: "@madebyvitalii",
      portfolio_url: "https://www.behance.net/vitaliimazur",
      bio: `Life through photography 🌿 \r
Feel free to support me via PayPal (vitaly.mazur@icloud.com) if you like to use my shots. Also I'm available for a photoshoot in Toronto 📸🇨🇦`,
      location: "Toronto, Canada",
      links: {
        self: "https://api.unsplash.com/users/vitalymazur",
        html: "https://unsplash.com/@vitalymazur",
        photos: "https://api.unsplash.com/users/vitalymazur/photos",
        likes: "https://api.unsplash.com/users/vitalymazur/likes",
        portfolio: "https://api.unsplash.com/users/vitalymazur/portfolio",
        following: "https://api.unsplash.com/users/vitalymazur/following",
        followers: "https://api.unsplash.com/users/vitalymazur/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1708119387274-fad12c7d293b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1708119387274-fad12c7d293b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1708119387274-fad12c7d293b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "vitalymazur ",
      total_collections: 14,
      total_likes: 773,
      total_photos: 263,
      total_promoted_photos: 15,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "vitalymazur ",
        portfolio_url: "https://www.behance.net/vitaliimazur",
        twitter_username: "@madebyvitalii",
        paypal_email: null
      }
    }
  },
  {
    id: "uSNuKKh7wpA",
    slug: "a-picture-of-a-green-object-with-a-white-background-uSNuKKh7wpA",
    alternative_slugs: {
      en: "a-picture-of-a-green-object-with-a-white-background-uSNuKKh7wpA"
    },
    created_at: "2024-03-01T10:58:28Z",
    updated_at: "2024-03-11T06:48:07Z",
    promoted_at: "2024-03-11T06:48:07Z",
    width: 9600,
    height: 5400,
    color: "#d9d9d9",
    blur_hash: "LJLq]_WI_3%eo$xa?cRi~qobITM|",
    description: "Made in blender 4.0",
    alt_description: "a picture of a green object with a white background",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709290649154-54c725bd4484?ixid=M3wxMTc3M3wwfDF8YWxsfDIzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709290649154-54c725bd4484?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709290649154-54c725bd4484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709290649154-54c725bd4484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709290649154-54c725bd4484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709290649154-54c725bd4484"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-picture-of-a-green-object-with-a-white-background-uSNuKKh7wpA",
      html: "https://unsplash.com/photos/a-picture-of-a-green-object-with-a-white-background-uSNuKKh7wpA",
      download: "https://unsplash.com/photos/uSNuKKh7wpA/download?ixid=M3wxMTc3M3wwfDF8YWxsfDIzfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/uSNuKKh7wpA/download?ixid=M3wxMTc3M3wwfDF8YWxsfDIzfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 42,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "3d-renders": {
        status: "approved",
        approved_on: "2024-03-06T08:20:20Z"
      },
      experimental: {
        status: "approved",
        approved_on: "2024-03-06T07:38:30Z"
      }
    },
    user: {
      id: "5TCQxdaW0wE",
      updated_at: "2024-03-11T10:04:04Z",
      username: "theshubhamdhage",
      name: "Shubham Dhage",
      first_name: "Shubham",
      last_name: "Dhage",
      twitter_username: "theshubhamdhage",
      portfolio_url: "https://theshubhamdhage.com/",
      bio: "Creating things is my passion.",
      location: "Pune, India",
      links: {
        self: "https://api.unsplash.com/users/theshubhamdhage",
        html: "https://unsplash.com/@theshubhamdhage",
        photos: "https://api.unsplash.com/users/theshubhamdhage/photos",
        likes: "https://api.unsplash.com/users/theshubhamdhage/likes",
        portfolio: "https://api.unsplash.com/users/theshubhamdhage/portfolio",
        following: "https://api.unsplash.com/users/theshubhamdhage/following",
        followers: "https://api.unsplash.com/users/theshubhamdhage/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1702918491890-622aa47079a5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1702918491890-622aa47079a5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1702918491890-622aa47079a5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "theshubhamdhage",
      total_collections: 2,
      total_likes: 296,
      total_photos: 734,
      total_promoted_photos: 147,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "theshubhamdhage",
        portfolio_url: "https://theshubhamdhage.com/",
        twitter_username: "theshubhamdhage",
        paypal_email: null
      }
    }
  },
  {
    id: "7lN8MJPnlXs",
    slug: "a-close-up-of-a-pine-tree-with-lots-of-needles-7lN8MJPnlXs",
    alternative_slugs: {
      en: "a-close-up-of-a-pine-tree-with-lots-of-needles-7lN8MJPnlXs"
    },
    created_at: "2024-03-06T19:31:23Z",
    updated_at: "2024-03-11T06:47:23Z",
    promoted_at: "2024-03-11T06:47:23Z",
    width: 6720,
    height: 4480,
    color: "#26260c",
    blur_hash: "L05OKD},~lR7TJRj%d^$_0E49Is:",
    description: null,
    alt_description: "a close up of a pine tree with lots of needles",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709753422610-39ed7ddf9e08?ixid=M3wxMTc3M3wwfDF8YWxsfDI0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709753422610-39ed7ddf9e08?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709753422610-39ed7ddf9e08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709753422610-39ed7ddf9e08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709753422610-39ed7ddf9e08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709753422610-39ed7ddf9e08"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-close-up-of-a-pine-tree-with-lots-of-needles-7lN8MJPnlXs",
      html: "https://unsplash.com/photos/a-close-up-of-a-pine-tree-with-lots-of-needles-7lN8MJPnlXs",
      download: "https://unsplash.com/photos/7lN8MJPnlXs/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI0fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/7lN8MJPnlXs/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI0fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 5,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "textures-patterns": {
        status: "approved",
        approved_on: "2024-03-11T06:47:18Z"
      }
    },
    user: {
      id: "gMFqynHNocY",
      updated_at: "2024-03-11T06:48:57Z",
      username: "blakecheekk",
      name: "Blake Cheek",
      first_name: "Blake",
      last_name: "Cheek",
      twitter_username: "blakecheekk",
      portfolio_url: "http://blakecheek.com",
      bio: "Photographer and Videographer. Lover of coffee and Jesus. ",
      location: "Atlanta, Ga",
      links: {
        self: "https://api.unsplash.com/users/blakecheekk",
        html: "https://unsplash.com/@blakecheekk",
        photos: "https://api.unsplash.com/users/blakecheekk/photos",
        likes: "https://api.unsplash.com/users/blakecheekk/likes",
        portfolio: "https://api.unsplash.com/users/blakecheekk/portfolio",
        following: "https://api.unsplash.com/users/blakecheekk/following",
        followers: "https://api.unsplash.com/users/blakecheekk/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1709746841716-156061dd4fe9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1709746841716-156061dd4fe9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1709746841716-156061dd4fe9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "blakecheekk",
      total_collections: 4,
      total_likes: 0,
      total_photos: 423,
      total_promoted_photos: 165,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "blakecheekk",
        portfolio_url: "http://blakecheek.com",
        twitter_username: "blakecheekk",
        paypal_email: null
      }
    }
  },
  {
    id: "Fw8vp9G6FtE",
    slug: "the-contents-of-a-backpack-laid-out-on-a-table-Fw8vp9G6FtE",
    alternative_slugs: {
      en: "the-contents-of-a-backpack-laid-out-on-a-table-Fw8vp9G6FtE"
    },
    created_at: "2024-03-10T00:43:31Z",
    updated_at: "2024-03-11T06:46:50Z",
    promoted_at: "2024-03-11T06:46:50Z",
    width: 6240,
    height: 4160,
    color: "#262626",
    blur_hash: "LIINNov{ae}=56I]eToaEmWC^iI;",
    description: null,
    alt_description: "the contents of a backpack laid out on a table",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710031407576-135a680d6e10?ixid=M3wxMTc3M3wwfDF8YWxsfDI1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710031407576-135a680d6e10?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710031407576-135a680d6e10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710031407576-135a680d6e10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710031407576-135a680d6e10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710031407576-135a680d6e10"
    },
    links: {
      self: "https://api.unsplash.com/photos/the-contents-of-a-backpack-laid-out-on-a-table-Fw8vp9G6FtE",
      html: "https://unsplash.com/photos/the-contents-of-a-backpack-laid-out-on-a-table-Fw8vp9G6FtE",
      download: "https://unsplash.com/photos/Fw8vp9G6FtE/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI1fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/Fw8vp9G6FtE/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI1fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 4,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "UmKpkFAcSDE",
      updated_at: "2024-03-11T06:46:50Z",
      username: "taylorheeryphoto",
      name: "Taylor Heery",
      first_name: "Taylor",
      last_name: "Heery",
      twitter_username: "tahegri",
      portfolio_url: "http://www.taylorheery.com",
      bio: `VENMO: @taylorheeryphoto\r
Fujifilm fanatic.`,
      location: "Hendersonville, NC",
      links: {
        self: "https://api.unsplash.com/users/taylorheeryphoto",
        html: "https://unsplash.com/@taylorheeryphoto",
        photos: "https://api.unsplash.com/users/taylorheeryphoto/photos",
        likes: "https://api.unsplash.com/users/taylorheeryphoto/likes",
        portfolio: "https://api.unsplash.com/users/taylorheeryphoto/portfolio",
        following: "https://api.unsplash.com/users/taylorheeryphoto/following",
        followers: "https://api.unsplash.com/users/taylorheeryphoto/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1710031596049-549d947d2a3a?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1710031596049-549d947d2a3a?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1710031596049-549d947d2a3a?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "taylorheeryphoto",
      total_collections: 0,
      total_likes: 107,
      total_photos: 520,
      total_promoted_photos: 209,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "taylorheeryphoto",
        portfolio_url: "http://www.taylorheery.com",
        twitter_username: "tahegri",
        paypal_email: null
      }
    }
  },
  {
    id: "e75CfMG0Sgo",
    slug: "a-person-with-a-backpack-looking-at-mountains-e75CfMG0Sgo",
    alternative_slugs: {
      en: "a-person-with-a-backpack-looking-at-mountains-e75CfMG0Sgo"
    },
    created_at: "2023-04-28T12:46:16Z",
    updated_at: "2024-03-10T11:50:20Z",
    promoted_at: null,
    width: 5429,
    height: 3619,
    color: "#a6c0d9",
    blur_hash: "LnHLYm%0IAi_?wn$ngj[OtRjs:f6",
    description: "Nature Reserve – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.",
    alt_description: "a person with a backpack looking at mountains",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1682685796002-e05458d61f07?ixid=M3wxMTc3M3wxfDF8YWxsfDI2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1682685796002-e05458d61f07?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDI2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1682685796002-e05458d61f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDI2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1682685796002-e05458d61f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDI2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1682685796002-e05458d61f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDI2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682685796002-e05458d61f07"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-person-with-a-backpack-looking-at-mountains-e75CfMG0Sgo",
      html: "https://unsplash.com/photos/a-person-with-a-backpack-looking-at-mountains-e75CfMG0Sgo",
      download: "https://unsplash.com/photos/e75CfMG0Sgo/download?ixid=M3wxMTc3M3wxfDF8YWxsfDI2fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/e75CfMG0Sgo/download?ixid=M3wxMTc3M3wxfDF8YWxsfDI2fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 174,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [
        "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515577&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
        "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515780&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
      ],
      tagline: "Made to Change",
      tagline_url: "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
      sponsor: {
        id: "mYizSrdJkkU",
        updated_at: "2024-03-11T08:54:08Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers"
        },
        profile_image: {
          small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 1,
        total_photos: 222,
        total_promoted_photos: 72,
        accepted_tos: !0,
        for_hire: !1,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null
        }
      }
    },
    topic_submissions: {},
    user: {
      id: "mYizSrdJkkU",
      updated_at: "2024-03-11T08:54:08Z",
      username: "neom",
      name: "NEOM",
      first_name: "NEOM",
      last_name: null,
      twitter_username: "neom",
      portfolio_url: "http://www.neom.com",
      bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
      location: "NEOM, Saudi Arabia",
      links: {
        self: "https://api.unsplash.com/users/neom",
        html: "https://unsplash.com/@neom",
        photos: "https://api.unsplash.com/users/neom/photos",
        likes: "https://api.unsplash.com/users/neom/likes",
        portfolio: "https://api.unsplash.com/users/neom/portfolio",
        following: "https://api.unsplash.com/users/neom/following",
        followers: "https://api.unsplash.com/users/neom/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "discoverneom",
      total_collections: 7,
      total_likes: 1,
      total_photos: 222,
      total_promoted_photos: 72,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "discoverneom",
        portfolio_url: "http://www.neom.com",
        twitter_username: "neom",
        paypal_email: null
      }
    }
  },
  {
    id: "jSjHcyHFOdQ",
    slug: "a-picture-of-a-green-plant-in-a-dark-room-jSjHcyHFOdQ",
    alternative_slugs: {
      en: "a-picture-of-a-green-plant-in-a-dark-room-jSjHcyHFOdQ"
    },
    created_at: "2024-02-08T15:36:25Z",
    updated_at: "2024-03-11T06:46:46Z",
    promoted_at: "2024-03-11T06:46:46Z",
    width: 8400,
    height: 5600,
    color: "#0c260c",
    blur_hash: "L44CLsVuD7pF.Po2R7R*-.oyX5My",
    description: null,
    alt_description: "a picture of a green plant in a dark room",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1707406543260-ed14bbd0d086?ixid=M3wxMTc3M3wwfDF8YWxsfDI3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1707406543260-ed14bbd0d086?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1707406543260-ed14bbd0d086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1707406543260-ed14bbd0d086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1707406543260-ed14bbd0d086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1707406543260-ed14bbd0d086"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-picture-of-a-green-plant-in-a-dark-room-jSjHcyHFOdQ",
      html: "https://unsplash.com/photos/a-picture-of-a-green-plant-in-a-dark-room-jSjHcyHFOdQ",
      download: "https://unsplash.com/photos/jSjHcyHFOdQ/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI3fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/jSjHcyHFOdQ/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI3fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 14,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "ogQykx6hk_c",
      updated_at: "2024-03-11T06:46:46Z",
      username: "pawel_czerwinski",
      name: "Pawel Czerwinski",
      first_name: "Pawel",
      last_name: "Czerwinski",
      twitter_username: "pm_cze",
      portfolio_url: "http://paypal.me/pmcze",
      bio: "Questions about how you can use the photos? help.unsplash.com/en/collections/1463188-unsplash-license 👍",
      location: "Poland",
      links: {
        self: "https://api.unsplash.com/users/pawel_czerwinski",
        html: "https://unsplash.com/@pawel_czerwinski",
        photos: "https://api.unsplash.com/users/pawel_czerwinski/photos",
        likes: "https://api.unsplash.com/users/pawel_czerwinski/likes",
        portfolio: "https://api.unsplash.com/users/pawel_czerwinski/portfolio",
        following: "https://api.unsplash.com/users/pawel_czerwinski/following",
        followers: "https://api.unsplash.com/users/pawel_czerwinski/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1592328433409-d9ce8a5333eaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1592328433409-d9ce8a5333eaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1592328433409-d9ce8a5333eaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "pmcze",
      total_collections: 7,
      total_likes: 39154,
      total_photos: 2137,
      total_promoted_photos: 1760,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "pmcze",
        portfolio_url: "http://paypal.me/pmcze",
        twitter_username: "pm_cze",
        paypal_email: null
      }
    }
  },
  {
    id: "OfGHUYX0CCg",
    slug: "a-body-of-water-that-has-some-waves-on-it-OfGHUYX0CCg",
    alternative_slugs: {
      en: "a-body-of-water-that-has-some-waves-on-it-OfGHUYX0CCg"
    },
    created_at: "2024-03-06T14:06:51Z",
    updated_at: "2024-03-11T08:56:52Z",
    promoted_at: "2024-03-11T06:45:54Z",
    width: 8192,
    height: 5460,
    color: "#260c0c",
    blur_hash: "LUF{kg=cj@fQ}XxFS3azxFfjS2WW",
    description: null,
    alt_description: "a body of water that has some waves on it",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709733167477-25398ca709c0?ixid=M3wxMTc3M3wwfDF8YWxsfDI4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709733167477-25398ca709c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709733167477-25398ca709c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709733167477-25398ca709c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709733167477-25398ca709c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709733167477-25398ca709c0"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-body-of-water-that-has-some-waves-on-it-OfGHUYX0CCg",
      html: "https://unsplash.com/photos/a-body-of-water-that-has-some-waves-on-it-OfGHUYX0CCg",
      download: "https://unsplash.com/photos/OfGHUYX0CCg/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI4fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/OfGHUYX0CCg/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI4fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 16,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "earth-hour": {
        status: "approved",
        approved_on: "2024-03-07T09:43:45Z"
      }
    },
    user: {
      id: "uFFemR6e1vs",
      updated_at: "2024-03-11T06:48:56Z",
      username: "marcospradobr",
      name: "Marcos Paulo Prado",
      first_name: "Marcos Paulo",
      last_name: "Prado",
      twitter_username: null,
      portfolio_url: "https://www.instagram.com/eusoumarcosprado",
      bio: "People and commercial photographer based in Rio de Janeiro, Brasil",
      location: "Rio de Janeiro, Brazil",
      links: {
        self: "https://api.unsplash.com/users/marcospradobr",
        html: "https://unsplash.com/@marcospradobr",
        photos: "https://api.unsplash.com/users/marcospradobr/photos",
        likes: "https://api.unsplash.com/users/marcospradobr/likes",
        portfolio: "https://api.unsplash.com/users/marcospradobr/portfolio",
        following: "https://api.unsplash.com/users/marcospradobr/following",
        followers: "https://api.unsplash.com/users/marcospradobr/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1572910425876-25d44d080554image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1572910425876-25d44d080554image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1572910425876-25d44d080554image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "eusoumarcosprado",
      total_collections: 0,
      total_likes: 306,
      total_photos: 413,
      total_promoted_photos: 139,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "eusoumarcosprado",
        portfolio_url: "https://www.instagram.com/eusoumarcosprado",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "VKQpbzeWbrk",
    slug: "a-bouquet-of-orange-and-white-tulips-on-a-red-door-VKQpbzeWbrk",
    alternative_slugs: {
      en: "a-bouquet-of-orange-and-white-tulips-on-a-red-door-VKQpbzeWbrk"
    },
    created_at: "2024-03-09T21:24:04Z",
    updated_at: "2024-03-11T06:45:51Z",
    promoted_at: "2024-03-11T06:45:51Z",
    width: 2592,
    height: 3872,
    color: "#8c2626",
    blur_hash: "LFI2{Exr0gE}Dlo|=_W-5RE3O=xH",
    description: null,
    alt_description: "a bouquet of orange and white tulips on a red door",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710018337941-58197591d55a?ixid=M3wxMTc3M3wwfDF8YWxsfDI5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710018337941-58197591d55a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710018337941-58197591d55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710018337941-58197591d55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710018337941-58197591d55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710018337941-58197591d55a"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-bouquet-of-orange-and-white-tulips-on-a-red-door-VKQpbzeWbrk",
      html: "https://unsplash.com/photos/a-bouquet-of-orange-and-white-tulips-on-a-red-door-VKQpbzeWbrk",
      download: "https://unsplash.com/photos/VKQpbzeWbrk/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI5fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/VKQpbzeWbrk/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI5fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 3,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "H8-Yyg-eX4A",
      updated_at: "2024-03-11T06:48:56Z",
      username: "jaelphotos",
      name: "Jael Coon",
      first_name: "Jael",
      last_name: "Coon",
      twitter_username: null,
      portfolio_url: "https://linktr.ee/jaelcoon",
      bio: "Coffee drinker, photographer, artist and chef/baker",
      location: "USA",
      links: {
        self: "https://api.unsplash.com/users/jaelphotos",
        html: "https://unsplash.com/@jaelphotos",
        photos: "https://api.unsplash.com/users/jaelphotos/photos",
        likes: "https://api.unsplash.com/users/jaelphotos/likes",
        portfolio: "https://api.unsplash.com/users/jaelphotos/portfolio",
        following: "https://api.unsplash.com/users/jaelphotos/following",
        followers: "https://api.unsplash.com/users/jaelphotos/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1693432710439-47b22b3f6a9eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1693432710439-47b22b3f6a9eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1693432710439-47b22b3f6a9eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "jaelcoon",
      total_collections: 51,
      total_likes: 0,
      total_photos: 230,
      total_promoted_photos: 3,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "jaelcoon",
        portfolio_url: "https://linktr.ee/jaelcoon",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "W6AqsLH6HOg",
    slug: "a-license-plate-on-the-back-of-a-car-W6AqsLH6HOg",
    alternative_slugs: {
      en: "a-license-plate-on-the-back-of-a-car-W6AqsLH6HOg"
    },
    created_at: "2024-03-06T06:59:15Z",
    updated_at: "2024-03-11T06:45:45Z",
    promoted_at: "2024-03-11T06:45:45Z",
    width: 6e3,
    height: 4e3,
    color: "#595959",
    blur_hash: "LYE_]gO?}qOsW--Ux]$%RPoeX9oz",
    description: null,
    alt_description: "a license plate on the back of a car",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709708210553-490ba885fcf6?ixid=M3wxMTc3M3wwfDF8YWxsfDMwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709708210553-490ba885fcf6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDMwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709708210553-490ba885fcf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDMwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709708210553-490ba885fcf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDMwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709708210553-490ba885fcf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDMwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709708210553-490ba885fcf6"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-license-plate-on-the-back-of-a-car-W6AqsLH6HOg",
      html: "https://unsplash.com/photos/a-license-plate-on-the-back-of-a-car-W6AqsLH6HOg",
      download: "https://unsplash.com/photos/W6AqsLH6HOg/download?ixid=M3wxMTc3M3wwfDF8YWxsfDMwfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/W6AqsLH6HOg/download?ixid=M3wxMTc3M3wwfDF8YWxsfDMwfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 3,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "VNV70zPYNto",
      updated_at: "2024-03-11T06:48:56Z",
      username: "venajeborec",
      name: "Václav Pechar",
      first_name: "Václav",
      last_name: "Pechar",
      twitter_username: null,
      portfolio_url: null,
      bio: `Photographer from South Bohemia ✌🏻\r
Be free to contact me to book a shoot 🙏🏻`,
      location: "Czech Republic - Písek",
      links: {
        self: "https://api.unsplash.com/users/venajeborec",
        html: "https://unsplash.com/@venajeborec",
        photos: "https://api.unsplash.com/users/venajeborec/photos",
        likes: "https://api.unsplash.com/users/venajeborec/likes",
        portfolio: "https://api.unsplash.com/users/venajeborec/portfolio",
        following: "https://api.unsplash.com/users/venajeborec/following",
        followers: "https://api.unsplash.com/users/venajeborec/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1687031143105-2420498da92eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1687031143105-2420498da92eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1687031143105-2420498da92eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "amazingvena",
      total_collections: 0,
      total_likes: 7,
      total_photos: 324,
      total_promoted_photos: 30,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "amazingvena",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  }
], DE = CE;
class RE {
  constructor() {
    jt(this, "photos", DE), jt(this, "PAGINATION", {}), jt(this, "REQUEST_IS_RUNNING", !1), jt(this, "SEARCH_IS_RUNNING", !1), jt(this, "LAST_REQUEST_URL", ""), jt(this, "ERROR", null), jt(this, "IS_LOADING", !1), jt(this, "currentPage", 1);
  }
  async fetchPhotos() {
    this.IS_LOADING = !0;
    const n = (this.currentPage - 1) * 30, t = this.currentPage * 30;
    return this.currentPage += 1, this.IS_LOADING = !1, this.photos.slice(n, t);
  }
  async fetchNextPage() {
    if (this.REQUEST_IS_RUNNING || this.SEARCH_IS_RUNNING)
      return null;
    const n = await this.fetchPhotos();
    return n.length > 0 ? n : null;
  }
  async searchPhotos(n) {
    this.SEARCH_IS_RUNNING = !0;
    const t = this.photos.filter(
      (a) => a.description && a.description.toLowerCase().includes(n.toLowerCase()) || a.alt_description && a.alt_description.toLowerCase().includes(n.toLowerCase())
    );
    return this.SEARCH_IS_RUNNING = !1, t;
  }
  searchIsRunning() {
    return this.SEARCH_IS_RUNNING;
  }
  triggerDownload(n) {
  }
}
class jE {
  constructor(n) {
    jt(this, "_provider"), this._provider = n;
  }
  async fetchPhotos() {
    return await this._provider.fetchPhotos();
  }
  async searchPhotos(n) {
    return await this._provider.searchPhotos(n);
  }
  async triggerDownload(n) {
    this._provider.triggerDownload(n);
  }
  async fetchNextPage() {
    return await this._provider.fetchNextPage() || null;
  }
  searchIsRunning() {
    return this._provider.searchIsRunning();
  }
}
class OE {
  constructor(n) {
    jt(this, "API_URL", "https://api.unsplash.com"), jt(this, "HEADERS"), jt(this, "ERROR", null), jt(this, "PAGINATION", {}), jt(this, "REQUEST_IS_RUNNING", !1), jt(this, "SEARCH_IS_RUNNING", !1), jt(this, "LAST_REQUEST_URL", ""), jt(this, "IS_LOADING", !1), this.HEADERS = n;
  }
  async makeRequest(n) {
    if (this.REQUEST_IS_RUNNING)
      return null;
    this.LAST_REQUEST_URL = n;
    const t = {
      method: "GET",
      headers: this.HEADERS
    };
    try {
      this.REQUEST_IS_RUNNING = !0, this.IS_LOADING = !0;
      const a = await fetch(n, t), s = await this.checkStatus(a);
      this.extractPagination(s);
      const l = await s.json();
      return "results" in l ? l.results : l;
    } catch (a) {
      return this.ERROR = a, null;
    } finally {
      this.REQUEST_IS_RUNNING = !1, this.IS_LOADING = !1;
    }
  }
  extractPagination(n) {
    let t = new RegExp('<(.*)>; rel="(.*)"'), a = [], s = {};
    for (let l of n.headers.entries())
      l[0] === "link" && a.push(l[1]);
    return a && a.toString().split(",").forEach((l) => {
      if (l) {
        let A = t.exec(l);
        A && (s[A[2]] = A[1]);
      }
    }), this.PAGINATION = s, n;
  }
  async fetchPhotos() {
    const n = `${this.API_URL}/photos?per_page=30`;
    return await this.makeRequest(n);
  }
  async fetchNextPage() {
    if (this.REQUEST_IS_RUNNING || this.SEARCH_IS_RUNNING)
      return null;
    if (this.PAGINATION.next) {
      const n = `${this.PAGINATION.next}`, t = await this.makeRequest(n);
      if (t)
        return t;
    }
    return null;
  }
  async searchPhotos(n) {
    const t = `${this.API_URL}/search/photos?query=${n}&per_page=30`;
    return await this.makeRequest(t) || [];
  }
  async triggerDownload(n) {
    n.links.download_location && await this.makeRequest(n.links.download_location);
  }
  async checkStatus(n) {
    if (n.status >= 200 && n.status < 300)
      return n;
    let t = "", a;
    const s = n.headers.get("content-type");
    if (s === "application/json")
      a = n.json().then((l) => l.errors[0]);
    else if (s === "text/xml")
      a = n.text();
    else
      throw new Error("Unsupported content type");
    return a.then((l) => {
      throw n.status === 403 && n.headers.get("x-ratelimit-remaining") === "0" && (t = "Unsplash API rate limit reached, please try again later."), t = t || l || `Error ${n.status}: Uh-oh! Trouble reaching the Unsplash API`, this.ERROR = t, new Error(t);
    });
  }
  searchIsRunning() {
    return this.SEARCH_IS_RUNNING;
  }
}
class QE {
  constructor(n, t) {
    jt(this, "photoUseCases"), jt(this, "masonryService"), jt(this, "photos", []), this.photoUseCases = n, this.masonryService = t;
  }
  async loadNew() {
    let n = await this.photoUseCases.fetchPhotos();
    this.photos = n, await this.layoutPhotos();
  }
  async layoutPhotos() {
    this.masonryService.reset(), this.photos.forEach((n) => {
      n.ratio = n.height / n.width, this.masonryService.addPhotoToColumns(n);
    });
  }
  getColumns() {
    return this.masonryService.getColumns();
  }
  async updateSearch(n) {
    let t = await this.photoUseCases.searchPhotos(n);
    this.photos = t, this.layoutPhotos();
  }
  async loadNextPage() {
    const n = await this.photoUseCases.fetchNextPage() || [];
    this.photos = [...this.photos, ...n], this.layoutPhotos();
  }
  clearPhotos() {
    this.photos = [];
  }
  triggerDownload(n) {
    this.photoUseCases.triggerDownload(n);
  }
  searchIsRunning() {
    return this.photoUseCases.searchIsRunning();
  }
}
const NE = ({ onClose: e, onImageInsert: n, unsplashProviderConfig: t }) => {
  const a = On(() => t ? new OE(t) : new RE(), [t]), s = On(() => new jE(a), [a]), l = On(() => new gE(3), []), A = On(() => new QE(s, l), [s, l]), f = Ct(null), [u, d] = ue(0), [h, m] = ue(0), [v, k] = ue(A.searchIsRunning() || !0), b = Ct(!1), [y, S] = ue(""), [T, O] = ue(null), [B, K] = ue([]);
  At.useEffect(() => {
    f.current && T === null && h !== 0 && (f.current.scrollTop = h, m(0));
  }, [T, u, h]), At.useEffect(() => {
    const ae = (Z) => {
      Z.key === "Escape" && e();
    };
    return window.addEventListener("keydown", ae), () => {
      window.removeEventListener("keydown", ae);
    };
  }, [e]), At.useEffect(() => {
    const ae = f.current;
    if (!T)
      return ae && ae.addEventListener("scroll", () => {
        d(ae.scrollTop);
      }), () => {
        ae && ae.removeEventListener("scroll", () => {
          d(ae.scrollTop);
        });
      };
  }, [f, T]);
  const _ = At.useCallback(async () => {
    if (b.current === !1 || y.length === 0) {
      K([]), A.clearPhotos(), await A.loadNew();
      const ae = A.getColumns();
      K(ae || []), f.current && f.current.scrollTop !== 0 && (f.current.scrollTop = 0), k(!1);
    }
  }, [A, y]), F = async (ae) => {
    const Z = ae.target.value;
    Z.length > 2 && (O(null), S(Z)), Z.length === 0 && (S(""), b.current = !1, await _());
  }, ee = At.useCallback(async () => {
    if (y) {
      k(!0), K([]), A.clearPhotos(), await A.updateSearch(y);
      const ae = A.getColumns();
      ae && K(ae), f.current && f.current.scrollTop !== 0 && (f.current.scrollTop = 0), k(!1);
    }
  }, [y, A]);
  At.useEffect(() => {
    const ae = setTimeout(async () => {
      y.length > 2 ? await ee() : await _();
    }, 300);
    return () => {
      b.current = !0, clearTimeout(ae);
    };
  }, [y, ee, _]);
  const oe = At.useCallback(async () => {
    k(!0), await A.loadNextPage();
    const ae = A.getColumns();
    K(ae || []), k(!1);
  }, [A]);
  At.useEffect(() => {
    const ae = f.current;
    if (ae) {
      const Z = async () => {
        T === null && ae.scrollTop + ae.clientHeight >= ae.scrollHeight - 1e3 && await oe();
      };
      return ae.addEventListener("scroll", Z), () => {
        ae.removeEventListener("scroll", Z);
      };
    }
  }, [f, oe, T]);
  const re = (ae) => {
    ae && (O(ae), m(u)), ae === null && (O(null), f.current && (f.current.scrollTop = h));
  };
  async function $(ae) {
    ae.src && (A.triggerDownload(ae), n(ae));
  }
  return /* @__PURE__ */ Be.jsx(
    TE,
    {
      closeModal: e,
      handleSearch: F,
      children: /* @__PURE__ */ Be.jsx(
        ME,
        {
          dataset: B,
          error: null,
          galleryRef: f,
          insertImage: $,
          isLoading: v,
          selectImg: re,
          zoomed: T
        }
      )
    }
  );
}, HE = ({ unsplashProviderConfig: e, onClose: n, onImageInsert: t }) => /* @__PURE__ */ o.jsx(dE, { classNames: "admin-x-settings", children: /* @__PURE__ */ o.jsx(
  NE,
  {
    unsplashProviderConfig: e,
    onClose: n,
    onImageInsert: t
  }
) }), BE = ({ values: e, updateSetting: n }) => {
  const { mutateAsync: t } = Qs(), [a, s] = ue(e.description), { settings: l } = ct(), [A] = yt(l, ["unsplash"]), [f, u] = ue(!1), { unsplashConfig: d } = Ck(), h = dt(), m = Ct(
    qi((k) => {
      n("description", k);
    }, 500)
  ), v = Mp();
  return /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsxs(_i, { children: [
    /* @__PURE__ */ o.jsx(
      je,
      {
        hint: "Used in your theme, meta data and search results",
        maxLength: 200,
        title: "Site description",
        value: a,
        onChange: (k) => {
          s(k.target.value), m.current(k.target.value);
        }
      },
      "site-description"
    ),
    /* @__PURE__ */ o.jsx(
      Li,
      {
        debounceMs: 200,
        direction: "rtl",
        title: /* @__PURE__ */ o.jsx(st, { className: "mt-[3px]", grey: !0, level: 6, children: "Accent color" }),
        value: e.accentColor,
        alwaysOpen: !0,
        onChange: (k) => n("accent_color", k)
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: `flex justify-between ${e.icon ? "items-start " : "items-end"}`, children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx(st, { grey: !!e.icon, level: 6, children: "Publication icon" }),
        /* @__PURE__ */ o.jsx(Aa, { className: "mr-5 max-w-[160px]", children: "A square, social icon, at least 60x60px" })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ o.jsx(
        Hr,
        {
          deleteButtonClassName: "!top-1 !right-1",
          editButtonClassName: "!top-1 !right-1",
          height: e.icon ? "66px" : "36px",
          id: "logo",
          imageBWCheckedBg: !0,
          imageURL: e.icon || "",
          width: e.icon ? "66px" : "150px",
          onDelete: () => n("icon", null),
          onUpload: async (k) => {
            try {
              n("icon", Or(await t({ file: k })));
            } catch (b) {
              const y = b;
              y.response.status === 415 && (y.message = "Unsupported file type"), h(y);
            }
          },
          children: "Upload icon"
        }
      ) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { children: [
      /* @__PURE__ */ o.jsx(st, { className: "mb-2", grey: !!e.logo, level: 6, children: "Publication logo" }),
      /* @__PURE__ */ o.jsx(
        Hr,
        {
          deleteButtonClassName: "!top-1 !right-1",
          height: "80px",
          id: "site-logo",
          imageBWCheckedBg: !0,
          imageFit: "contain",
          imageURL: e.logo || "",
          onDelete: () => n("logo", null),
          onUpload: async (k) => {
            try {
              n("logo", Or(await t({ file: k })));
            } catch (b) {
              const y = b;
              y.response.status === 415 && (y.message = "Unsupported file type"), h(y);
            }
          },
          children: "Upload logo"
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { children: [
      /* @__PURE__ */ o.jsx(st, { className: "mb-2", grey: !!e.coverImage, level: 6, children: "Publication cover" }),
      /* @__PURE__ */ o.jsx(
        Hr,
        {
          deleteButtonClassName: "!top-1 !right-1",
          editButtonClassName: "!top-1 !right-10",
          height: "180px",
          id: "cover",
          imageURL: e.coverImage || "",
          openUnsplash: () => u(!0),
          pintura: {
            isEnabled: v.isEnabled,
            openEditor: async () => v.openEditor({
              image: e.coverImage || "",
              handleSave: async (k) => {
                try {
                  n("cover_image", Or(await t({ file: k })));
                } catch (b) {
                  h(b);
                }
              }
            })
          },
          unsplashButtonClassName: "!top-1 !right-1 z-50",
          unsplashEnabled: A,
          onDelete: () => n("cover_image", null),
          onUpload: async (k) => {
            try {
              n("cover_image", Or(await t({ file: k })));
            } catch (b) {
              const y = b;
              y.response.status === 415 && (y.message = "Unsupported file type"), h(y);
            }
          },
          children: "Upload cover"
        }
      ),
      f && d && A && /* @__PURE__ */ o.jsx(
        HE,
        {
          unsplashProviderConfig: d,
          onClose: () => {
            u(!1);
          },
          onImageInsert: (k) => {
            k.src && n("cover_image", k.src), u(!1);
          }
        }
      )
    ] })
  ] }) });
};
var of = { exports: {} }, nm = { exports: {} };
(function(e, n) {
  //! mingo.js 2.5.3
  //! Copyright (c) 2020 Francis Asante
  //! MIT
  (function(t, a) {
    e.exports = a();
  })(Es, function() {
    function t(p) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(g) {
        return typeof g;
      } : t = function(g) {
        return g && typeof Symbol == "function" && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g;
      }, t(p);
    }
    function a(p, g) {
      if (!(p instanceof g))
        throw new TypeError("Cannot call a class as a function");
    }
    function s(p, g) {
      for (var w = 0; w < g.length; w++) {
        var E = g[w];
        E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(p, E.key, E);
      }
    }
    function l(p, g, w) {
      return g && s(p.prototype, g), w && s(p, w), p;
    }
    function A(p, g) {
      return f(p) || u(p, g) || d(p, g) || m();
    }
    function f(p) {
      if (Array.isArray(p))
        return p;
    }
    function u(p, g) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(p)))) {
        var w = [], E = !0, C = !1, j = void 0;
        try {
          for (var z = p[Symbol.iterator](), q; !(E = (q = z.next()).done) && (w.push(q.value), !(g && w.length === g)); E = !0)
            ;
        } catch (fe) {
          C = !0, j = fe;
        } finally {
          try {
            !E && z.return != null && z.return();
          } finally {
            if (C)
              throw j;
          }
        }
        return w;
      }
    }
    function d(p, g) {
      if (p) {
        if (typeof p == "string")
          return h(p, g);
        var w = Object.prototype.toString.call(p).slice(8, -1);
        if (w === "Object" && p.constructor && (w = p.constructor.name), w === "Map" || w === "Set")
          return Array.from(w);
        if (w === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))
          return h(p, g);
      }
    }
    function h(p, g) {
      (g == null || g > p.length) && (g = p.length);
      for (var w = 0, E = new Array(g); w < g; w++)
        E[w] = p[w];
      return E;
    }
    function m() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var v = "null", k = "undefined", b = "bool", y = "boolean", S = "number", T = "string", O = "date", B = "regex", K = "regexp", _ = "array", F = "object", ee = "function", oe = [v, k, y, S, T, O, K], re = "expression", $ = "group", ae = "pipeline", Z = "projection", N = "query", Y = function() {
    };
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
      value: function(g, w) {
        if (this == null)
          throw new TypeError('"this" is null or not defined');
        var E = Object(this), C = E.length >>> 0;
        if (C === 0)
          return !1;
        var j = w | 0, z = Math.max(j >= 0 ? j : C - Math.abs(j), 0);
        function q(fe, le) {
          return fe === le || typeof fe == "number" && typeof le == "number" && isNaN(fe) && isNaN(le);
        }
        for (; z < C; ) {
          if (q(E[z], g))
            return !0;
          z++;
        }
        return !1;
      }
    });
    var W = Array.prototype.push;
    function H(p, g) {
      p || kr(g);
    }
    function G(p) {
      switch (X(p)) {
        case _:
          return p.map(G);
        case F:
          return zr(p, G);
        default:
          return p;
      }
    }
    function pe(p) {
      switch (X(p)) {
        case _:
          return un([], p);
        case F:
          return Object.assign({}, p);
        default:
          return p;
      }
    }
    function ke(p) {
      return p === null ? "Null" : p === void 0 ? "Undefined" : p.constructor.name;
    }
    function X(p) {
      return ke(p).toLowerCase();
    }
    function Ie(p) {
      return X(p) === y;
    }
    function Me(p) {
      return X(p) === T;
    }
    function ye(p) {
      return X(p) === S;
    }
    var de = Array.isArray || function(p) {
      return !!p && p.constructor === Array;
    };
    function Ne(p) {
      return !!p && p.constructor === Object;
    }
    function Et(p) {
      return p === Object(p);
    }
    function Xt(p) {
      return X(p) === O;
    }
    function Ve(p) {
      return X(p) === K;
    }
    function Le(p) {
      return X(p) === ee;
    }
    function te(p) {
      return p == null;
    }
    function Ee(p) {
      return p === null;
    }
    function Ce(p) {
      return p === void 0;
    }
    function Xe(p, g) {
      return p.includes(g);
    }
    function wt(p, g) {
      return !Xe(p, g);
    }
    function Pt(p) {
      return !!p;
    }
    function Dt(p) {
      return te(p) || de(p) && p.length === 0 || Ne(p) && rt(p).length === 0 || !p;
    }
    function tn(p) {
      return de(p) ? p : [p];
    }
    function Jt(p, g) {
      return p.hasOwnProperty(g);
    }
    function kr(p) {
      throw new Error(p);
    }
    var rt = Object.keys;
    function Pe(p, g, w) {
      if (g = g.bind(w), de(p))
        for (var E = 0, C = p.length; E < C && g(p[E], E, p) !== !1; E++)
          ;
      else
        for (var j in p)
          if (p.hasOwnProperty(j) && g(p[j], j, p) === !1)
            break;
    }
    function zr(p, g, w) {
      g = g.bind(w);
      for (var E = {}, C = rt(p), j = 0; j < C.length; j++) {
        var z = C[j];
        E[z] = g(p[z], z);
      }
      return E;
    }
    function Yr(p, g) {
      var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (p === Y)
        return g;
      if (g === Y)
        return p;
      var E = [p, g];
      if (!(E.every(Ne) || E.every(de)))
        throw Error("mismatched types. must both be array or object");
      if (w.flatten = w.flatten || !1, de(p))
        if (w.flatten) {
          for (var C = 0, j = 0; C < p.length && j < g.length; )
            p[C] = Yr(p[C++], g[j++], w);
          for (; j < g.length; )
            p.push(g[j++]);
        } else
          W.apply(p, g);
      else
        Object.keys(g).forEach(function(z) {
          p.hasOwnProperty(z) ? p[z] = Yr(p[z], g[z], w) : p[z] = g[z];
        });
      return p;
    }
    function nn(p, g, w) {
      return de(p) ? p.reduce(g, w) : (Pe(p, function(E, C) {
        return w = g(w, E, C, p);
      }), w);
    }
    function _n(p, g) {
      var w = g.map(Fn);
      return p.filter(function(E) {
        return Xe(w, Fn(E));
      });
    }
    function vA(p, g) {
      return un(un([], p), g.filter(wt.bind(null, p)));
    }
    function Fr(p) {
      var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, w = [];
      function E(C, j) {
        for (var z = 0, q = C.length; z < q; z++)
          de(C[z]) && (j > 0 || j < 0) ? E(C[z], Math.max(-1, j - 1)) : w.push(C[z]);
      }
      return E(p, g), w;
    }
    function Zr(p, g) {
      if (g < 1)
        return p;
      for (; g-- && de(p) && p.length === 1; )
        p = p[0];
      return p;
    }
    function sr(p, g) {
      for (var w = [p], E = [g]; w.length > 0; )
        if (p = w.pop(), g = E.pop(), p !== g) {
          var C = X(p);
          if (C !== X(g) || C === ee)
            return !1;
          switch (C) {
            case _:
              if (p.length !== g.length)
                return !1;
              un(w, p), un(E, g);
              break;
            case F:
              var j = rt(p), z = rt(g);
              if (j.length !== z.length)
                return !1;
              j.sort(), z.sort();
              for (var q = 0, fe = j.length; q < fe; q++) {
                var le = j[q];
                if (le !== z[q])
                  return !1;
                w.push(p[le]), E.push(g[le]);
              }
              break;
            default:
              if (ir(p) !== ir(g))
                return !1;
          }
        }
      return w.length === 0;
    }
    function pa(p) {
      var g = {}, w = [];
      return Pe(p, function(E) {
        var C = Fn(E);
        Jt(g, C) || (w.push(E), g[C] = 0);
      }), w;
    }
    function ir(p) {
      var g = X(p);
      switch (g) {
        case y:
        case S:
        case K:
          return p.toString();
        case T:
          return JSON.stringify(p);
        case O:
          return p.toISOString();
        case v:
        case k:
          return g;
        case _:
          return "[" + p.map(ir) + "]";
        default:
          var w = g === F ? "" : "".concat(ke(p)), E = rt(p);
          return E.sort(), "".concat(w, "{") + E.map(function(C) {
            return "".concat(ir(C), ":").concat(ir(p[C]));
          }) + "}";
      }
    }
    function Fn(p) {
      if (te(p))
        return null;
      for (var g = 0, w = ir(p), E = w.length; E; )
        g = (g << 5) - g ^ w.charCodeAt(--E);
      return g >>> 0;
    }
    function ma(p, g) {
      return p < g ? -1 : p > g ? 1 : 0;
    }
    function za(p, g, w) {
      var E = [], C = [], j = {};
      if (w = w || ma, Dt(p))
        return p;
      for (var z = 0; z < p.length; z++) {
        var q = p[z], fe = g(q, z);
        te(fe) ? C.push(q) : (j[fe] ? j[fe].push(q) : j[fe] = [q], E.push(fe));
      }
      E.sort(w);
      for (var le = 0; le < E.length; le++)
        un(C, j[E[le]]);
      return C;
    }
    function Ya(p, g) {
      var w = {
        keys: [],
        groups: []
      }, E = {};
      return Pe(p, function(C) {
        var j = g(C), z = Fn(j), q = -1;
        E[z] === void 0 && (q = w.keys.length, E[z] = q, w.keys.push(j), w.groups.push([])), q = E[z], w.groups[q].push(C);
      }), w;
    }
    function un(p, g) {
      return W.apply(p, g), p;
    }
    function zs(p, g) {
      for (var w = 0, E = p.length - 1; w <= E; ) {
        var C = Math.round(w + (E - w) / 2);
        if (g < p[C])
          E = C - 1;
        else if (g > p[C])
          w = C + 1;
        else
          return C;
      }
      return w;
    }
    function wA(p) {
      var g = this;
      return function(w) {
        return function() {
          for (var E = arguments.length, C = new Array(E), j = 0; j < E; j++)
            C[j] = arguments[j];
          var z = Fn(C);
          return Jt(w, z) || (w[z] = p.apply(g, C)), w[z];
        };
      }({
        /* storage */
      });
    }
    function Ys(p, g) {
      return Et(p) ? p[g] : void 0;
    }
    function Qn(p, g) {
      var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, E = 0;
      w.meta = w.meta || !1;
      function C(j, z) {
        for (var q = j, fe = 0; fe < z.length; fe++) {
          var le = z[fe], De = le.match(/^\d+$/) === null;
          if (De && de(q)) {
            if (fe === 0 && E > 0)
              break;
            E += 1, z = z.slice(fe), q = nn(q, function(ve, at) {
              var Ge = C(at, z);
              return Ge !== void 0 && ve.push(Ge), ve;
            }, []);
            break;
          } else
            q = Ys(q, le);
          if (q === void 0)
            break;
        }
        return q;
      }
      return p = Xe(oe, X(p)) ? p : C(p, g.split(".")), w.meta ? {
        result: p,
        depth: E
      } : p;
    }
    function Gr(p, g) {
      var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      w.preserveMissingValues = w.preserveMissingValues || !1;
      var E = g.split("."), C = E[0], j = E.length === 1 || E.slice(1).join("."), z = C.match(/^\d+$/) !== null, q = E.length > 1, fe, le;
      try {
        de(p) ? z ? (fe = Ys(p, Number(C)), q && (fe = Gr(fe, j, w)), fe = [fe]) : (fe = [], Pe(p, function(De) {
          le = Gr(De, g, w), w.preserveMissingValues ? (le === void 0 && (le = Y), fe.push(le)) : le !== void 0 && fe.push(le);
        })) : (le = Ys(p, C), q && (le = Gr(le, j, w)), H(le !== void 0), fe = {}, fe[C] = le);
      } catch {
        fe = void 0;
      }
      return fe;
    }
    function Fa(p) {
      if (de(p))
        for (var g = p.length - 1; g >= 0; g--)
          p[g] === Y ? p.splice(g, 1) : Fa(p[g]);
      else if (Ne(p))
        for (var w in p)
          p.hasOwnProperty(w) && Fa(p[w]);
      return p;
    }
    function Fs(p, g, w) {
      var E = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, C = g.split("."), j = C[0], z = C.length === 1 || C.slice(1).join(".");
      C.length === 1 ? w(p, j) : (E === !0 && te(p[j]) && (p[j] = {}), Fs(p[j], z, w, E));
    }
    function Zs(p, g, w) {
      Fs(p, g, function(E, C) {
        E[C] = w;
      }, !0);
    }
    function Gs(p, g) {
      Fs(p, g, function(w, E) {
        de(w) && /^\d+$/.test(E) ? w.splice(parseInt(E), 1) : Ne(w) && delete w[E];
      });
    }
    function Ks(p) {
      return !!p && p[0] === "$";
    }
    function Xs(p) {
      if (Xe(oe, X(p)))
        return Ve(p) ? {
          $regex: p
        } : {
          $eq: p
        };
      if (Et(p)) {
        var g = rt(p);
        if (!g.some(Ks))
          return {
            $eq: p
          };
        if (Xe(g, "$regex")) {
          var w = p.$regex, E = p.$options || "", C = "";
          Me(w) && (C += w.ignoreCase || E.indexOf("i") >= 0 ? "i" : "", C += w.multiline || E.indexOf("m") >= 0 ? "m" : "", C += w.global || E.indexOf("g") >= 0 ? "g" : "", w = new RegExp(w, C)), p.$regex = w, delete p.$options;
        }
      }
      return p;
    }
    function Ws(p, g) {
      var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      return te(w) ? g < 0 ? (g = Math.max(0, p.length + g), w = p.length - g + 1) : (w = g, g = 0) : (g < 0 && (g = Math.max(0, p.length + g)), H(w > 0, "Invalid argument value for $slice operator. Limit must be a positive number"), w += g), p.slice(g, w);
    }
    function oo(p, g) {
      var w = nn(p, function(z, q) {
        return z + q;
      }, 0), E = p.length || 1, C = g && 1 || 0, j = w / E;
      return Math.sqrt(nn(p, function(z, q) {
        return z + Math.pow(q - j, 2);
      }, 0) / (E - C));
    }
    function xA() {
      return {
        assert: H,
        clone: pe,
        cloneDeep: G,
        each: Pe,
        err: kr,
        hashCode: Fn,
        getType: ke,
        has: Jt,
        includes: Xe.bind(null),
        isArray: de,
        isBoolean: Ie,
        isDate: Xt,
        isEmpty: Dt,
        isEqual: sr,
        isFunction: Le,
        isNil: te,
        isNull: Ee,
        isNumber: ye,
        isObject: Ne,
        isRegExp: Ve,
        isString: Me,
        isUndefined: Ce,
        keys: rt,
        reduce: nn,
        resolve: Qn,
        resolveObj: Gr
      };
    }
    var Za = function() {
      return Object.assign({
        computeValue: ce,
        ops: Vs
      }, xA());
    }, lo = {
      key: "_id"
    };
    function qs(p) {
      Object.assign(lo, p || {});
    }
    var Ao = {
      $$ROOT: function(g, w, E) {
        return E.root;
      },
      $$CURRENT: function(g, w, E) {
        return g;
      },
      $$REMOVE: function(g, w, E) {
      }
    }, co = {
      $$KEEP: function(g) {
        return g;
      },
      $$PRUNE: function() {
      },
      $$DESCEND: function(g, w, E) {
        if (!Jt(w, "$cond"))
          return g;
        var C;
        return Pe(g, function(j, z) {
          Et(j) && (de(j) ? (C = [], Pe(j, function(q) {
            Ne(q) && (q = Ka(q, w, E)), te(q) || C.push(q);
          })) : C = Ka(j, w, E), te(C) ? delete g[z] : g[z] = C);
        }), g;
      }
    }, uo = rt(Ao), fo = rt(co);
    function Kr() {
      return lo.key;
    }
    function Vs() {
      var p = Array.prototype.slice.call(arguments);
      return nn(p, function(g, w) {
        return un(g, rt(Tt[w]));
      }, []);
    }
    function Ga(p, g, w) {
      if (Jt(Tt[$], g))
        return Tt[$][g](p, w);
      if (Ne(w)) {
        var E = {};
        return Pe(w, function(C, j) {
          if (E[j] = Ga(p, j, w[j]), Jt(Tt[$], j))
            return E = E[j], H(rt(w).length === 1, "Invalid $group expression '" + JSON.stringify(w) + "'"), !1;
        }), E;
      }
    }
    function ce(p, g) {
      var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, E = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      if (E.root = E.root || p, Jt(Tt[re], w))
        return Tt[re][w](p, g, E);
      if (Jt(Tt[$], w))
        return p = ce(p, g, null, E), H(de(p), w + " expression must resolve to an array"), Tt[$][w](p, null, E);
      if (Me(g) && g.length > 0 && g[0] === "$") {
        if (Xe(uo, g))
          return Ao[g](p, null, E);
        if (Xe(fo, g))
          return g;
        var C = uo.filter(function(z) {
          return g.indexOf(z + ".") === 0;
        });
        return C.length === 1 && (C = C[0], C === "$$ROOT" && (p = E.root), g = g.substr(C.length)), Qn(p, g.slice(1));
      }
      switch (X(g)) {
        case _:
          return g.map(function(z) {
            return ce(p, z);
          });
        case F:
          var j = {};
          return Pe(g, function(z, q) {
            if (j[q] = ce(p, z, q, E), [re, $].some(function(fe) {
              return Jt(Tt[fe], q);
            }))
              return H(rt(g).length === 1, "Invalid aggregation expression '" + JSON.stringify(g) + "'"), j = j[q], !1;
          }), j;
        default:
          return g;
      }
    }
    function Ka(p, g) {
      var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      w.root = w.root || p;
      var E = ce(p, g, null, w);
      return Xe(fo, E) ? co[E](p, g, w) : E;
    }
    function kA(p, g) {
      var w = ce(p, g);
      return w == null ? null : Math.abs(w);
    }
    function bA(p, g) {
      var w = ce(p, g), E = !1, C = nn(w, function(j, z) {
        return Xt(z) && (H(!E, "'$add' can only have one date value"), E = !0, z = z.getTime()), j += z, j;
      }, 0);
      return E ? new Date(C) : C;
    }
    function yA(p, g) {
      var w = ce(p, g);
      return te(w) ? null : (H(ye(w) || isNaN(w), "$ceil expression must resolve to a number."), Math.ceil(w));
    }
    function EA(p, g) {
      var w = ce(p, g);
      return w[0] / w[1];
    }
    function MA(p, g) {
      var w = ce(p, g);
      return te(w) ? null : (H(ye(w) || isNaN(w), "$exp expression must resolve to a number."), Math.exp(w));
    }
    function SA(p, g) {
      var w = ce(p, g);
      return te(w) ? null : (H(ye(w) || isNaN(w), "$floor expression must resolve to a number."), Math.floor(w));
    }
    function Xa(p, g) {
      var w = ce(p, g);
      return te(w) ? null : (H(ye(w) || isNaN(w), "$ln expression must resolve to a number."), Math.log(w));
    }
    function IA(p, g) {
      var w = ce(p, g), E = "$log expression must resolve to array(2) of numbers";
      return H(de(w) && w.length === 2, E), w.some(te) ? null : (H(w.some(isNaN) || w.every(ye), E), Math.log10(w[0]) / Math.log10(w[1]));
    }
    function Wa(p, g) {
      var w = ce(p, g);
      return te(w) ? null : (H(ye(w) || isNaN(w), "$log10 expression must resolve to a number."), Math.log10(w));
    }
    function JA(p, g) {
      var w = ce(p, g);
      return w[0] % w[1];
    }
    function TA(p, g) {
      var w = ce(p, g);
      return nn(w, function(E, C) {
        return E * C;
      }, 1);
    }
    function CA(p, g) {
      var w = ce(p, g);
      return H(de(w) && w.length === 2 && w.every(ye), "$pow expression must resolve to array(2) of numbers"), H(!(w[0] === 0 && w[1] < 0), "$pow cannot raise 0 to a negative exponent"), Math.pow(w[0], w[1]);
    }
    function ho(p, g) {
      var w = ce(p, g), E = w[0], C = w[1];
      return te(E) || isNaN(E) || Math.abs(E) === 1 / 0 ? E : (H(ye(E), "$round expression must resolve to a number."), go(E, C, !0));
    }
    function po(p, g) {
      var w = ce(p, g);
      return te(w) ? null : (H(ye(w) && w > 0 || isNaN(w), "$sqrt expression must resolve to non-negative number."), Math.sqrt(w));
    }
    function mo(p, g) {
      var w = ce(p, g);
      return w[0] - w[1];
    }
    function DA(p, g) {
      var w = ce(p, g), E = w[0], C = w[1];
      return te(E) || isNaN(E) || Math.abs(E) === 1 / 0 ? E : (H(ye(E), "$trunc expression must resolve to a number."), H(te(C) || ye(C) && C > -20 && C < 100, "$trunc expression has invalid place"), go(E, C, !1));
    }
    function go(p, g, w) {
      g = g || 0;
      var E = Math.abs(p) === p ? 1 : -1;
      p = Math.abs(p);
      var C = Math.trunc(p), j = p - C;
      if (g === 0) {
        var z = Math.trunc(10 * j);
        w && (C & 1) === 1 && z >= 5 && C++;
      } else if (g > 0) {
        var q = Math.pow(10, g), fe = Math.trunc(j * q), le = Math.trunc(j * q * 10) % 10;
        w && le > 5 && (fe += 1), C += fe / q;
      } else if (g < 0) {
        var De = Math.pow(10, -1 * g), ve = C % De;
        if (C = Math.max(0, C - ve), w && E === -1) {
          for (; ve > 10; )
            ve -= ve % 10;
          C > 0 && ve >= 5 && (C += De);
        }
      }
      return C * E;
    }
    function RA(p, g) {
      var w = ce(p, g);
      H(de(w) && w.length === 2, "$arrayElemAt expression must resolve to array(2)"), H(de(w[0]), "First operand to $arrayElemAt must resolve to an array"), H(ye(w[1]), "Second operand to $arrayElemAt must resolve to an integer");
      var E = w[1];
      if (w = w[0], E < 0 && Math.abs(E) <= w.length)
        return w[E + w.length];
      if (E >= 0 && E < w.length)
        return w[E];
    }
    function jA(p, g) {
      var w = ce(p, g);
      return H(de(w), "$arrayToObject expression must resolve to an array"), nn(w, function(E, C) {
        return de(C) && C.length == 2 ? E[C[0]] = C[1] : (H(Ne(C) && Jt(C, "k") && Jt(C, "v"), "$arrayToObject expression is invalid."), E[C.k] = C.v), E;
      }, {});
    }
    function vo(p, g) {
      var w = ce(p, g, null);
      return H(de(w), "$concatArrays must resolve to an array"), w.some(te) ? null : w.reduce(function(E, C) {
        return un(E, C);
      }, []);
    }
    function wo(p, g) {
      var w = ce(p, g.input), E = g.as, C = g.cond;
      return H(de(w), "$filter 'input' expression must resolve to an array"), w.filter(function(j) {
        var z = {};
        return z["$" + E] = j, ce(z, C) === !0;
      });
    }
    function xo(p, g) {
      var w = ce(p, g[0]), E = ce(p, g[1]);
      return H(de(E), "$in second argument must be an array"), E.some(sr.bind(null, w));
    }
    function _s(p, g) {
      var w = ce(p, g);
      if (te(w))
        return null;
      var E = w[0], C = w[1];
      if (te(E))
        return null;
      H(de(E), "$indexOfArray expression must resolve to an array.");
      var j = w[2] || 0, z = w[3];
      return te(z) && (z = E.length), j > z ? -1 : (H(j >= 0 && z >= 0, "$indexOfArray expression is invalid"), (j > 0 || z < E.length) && (E = E.slice(j, z)), E.findIndex(sr.bind(null, C)) + j);
    }
    function OA(p, g) {
      return de(ce(p, g[0]));
    }
    function ko(p, g) {
      var w = ce(p, g.input);
      H(de(w), "$map 'input' expression must resolve to an array");
      var E = g.as, C = g.in, j = "$" + E;
      return w.map(function(z) {
        return p[j] = z, ce(p, C);
      });
    }
    function qa(p, g) {
      var w = ce(p, g);
      H(Ne(w), "$objectToArray expression must resolve to an object");
      var E = [];
      return Pe(w, function(C, j) {
        return E.push({
          k: j,
          v: C
        });
      }), E;
    }
    function bo(p, g) {
      for (var w = ce(p, g), E = w[0], C = w[1], j = w[2] || 1, z = []; E < C && j > 0 || E > C && j < 0; )
        z.push(E), E += j;
      return z;
    }
    function QA(p, g) {
      var w = ce(p, g.input), E = ce(p, g.initialValue), C = g.in;
      return te(w) ? null : (H(de(w), "$reduce 'input' expression must resolve to an array"), nn(w, function(j, z) {
        return ce({
          $value: j,
          $this: z
        }, C);
      }, E));
    }
    function yo(p, g) {
      var w = ce(p, g);
      if (te(w))
        return null;
      H(de(w), "$reverseArray expression must resolve to an array");
      var E = [];
      return un(E, w), E.reverse(), E;
    }
    function Eo(p, g) {
      var w = ce(p, g);
      return de(w) ? w.length : void 0;
    }
    function $s(p, g) {
      var w = ce(p, g);
      return Ws(w[0], w[1], w[2]);
    }
    function NA(p, g) {
      var w = ce(p, g.inputs), E = g.useLongestLength || !1;
      H(de(w), "'inputs' expression must resolve to an array"), H(Ie(E), "'useLongestLength' must be a boolean"), de(g.defaults) && H(Pt(E), "'useLongestLength' must be set to true to use 'defaults'");
      for (var C = 0, j = 0, z = w.length; j < z; j++) {
        var q = w[j];
        if (te(q))
          return null;
        H(de(q), "'inputs' expression values must resolve to an array or null"), C = E ? Math.max(C, q.length) : Math.min(C || q.length, q.length);
      }
      for (var fe = [], le = g.defaults || [], De = function(Ge) {
        var vt = w.map(function(Wt, Tn) {
          return te(Wt[Ge]) ? le[Tn] || null : Wt[Ge];
        });
        fe.push(vt);
      }, ve = 0; ve < C; ve++)
        De(ve);
      return fe;
    }
    function Mo(p, g) {
      var w = ce(p, g);
      return de(w) ? nn(w, function(E, C) {
        return Object.assign(E, C);
      }, {}) : {};
    }
    function ei(p, g) {
      var w = ce(p, g);
      return Pt(w) && w.every(Pt);
    }
    function ti(p, g) {
      var w = ce(p, g);
      return Pt(w) && w.some(Pt);
    }
    function Xr(p, g) {
      return !ce(p, g[0]);
    }
    function pn(p) {
      return p instanceof _a ? p : new _a(p);
    }
    pn.isIterator = ni;
    function ni(p) {
      return !!p && t(p) === "object" && ri(p.next);
    }
    function ri(p) {
      return !!p && typeof p == "function";
    }
    function So(p, g) {
      var w = p.slice(g + 1);
      p.splice(g), Array.prototype.push.apply(p, w);
    }
    var Va = new Error(), ai = 1, si = 2, Io = 3, Jo = 4;
    function HA(p, g, w) {
      var E = !1, C = -1, j = 0;
      return function(z) {
        z = z === w;
        try {
          e:
            for (; !E; ) {
              var q = p();
              C++;
              for (var fe = -1, le = g.length, De = !1; ++fe < le; ) {
                var ve = g[fe], at = ve.func, Ge = ve.type;
                switch (Ge) {
                  case ai:
                    q = at(q, C);
                    break;
                  case si:
                    if (!at(q, C))
                      continue e;
                    break;
                  case Io:
                    --ve.func, ve.func || (De = !0);
                    break;
                  case Jo:
                    --ve.func, ve.func || So(g, fe);
                    continue e;
                  default:
                    break e;
                }
              }
              if (E = De, z)
                w[j++] = q;
              else
                return {
                  value: q,
                  done: !1
                };
            }
        } catch (vt) {
          if (vt !== Va)
            throw vt;
        }
        return E = !0, {
          done: !0
        };
      };
    }
    var _a = /* @__PURE__ */ function() {
      function p(g) {
        if (a(this, p), this.__iteratees = [], this.__first = !1, this.__done = !1, this.__buf = [], ri(g) && (g = {
          next: g
        }), ni(g)) {
          var w = g;
          g = function() {
            var q = w.next();
            if (q.done)
              throw Va;
            return q.value;
          };
        } else if (Array.isArray(g)) {
          var E = g, C = E.length, j = 0;
          g = function() {
            if (j < C)
              return E[j++];
            throw Va;
          };
        } else if (!ri(g))
          throw new Error("Source is not iterable. Must be Array, Function or Object{next:Function}");
        this.next = HA(g, this.__iteratees, this.__buf);
      }
      return l(p, [{
        key: "_validate",
        value: function() {
          if (this.__first)
            throw new Error("Cannot add iteratee/transform after `first()`");
        }
        /**
         * Add an iteratee to this lazy sequence
         * @param {Object} iteratee
         */
      }, {
        key: "_push",
        value: function(w) {
          return this._validate(), this.__iteratees.push(w), this;
        }
        // Iteratees methods
        /**
         * Transform each item in the sequence to a new value
         * @param {Function} f
         */
      }, {
        key: "map",
        value: function(w) {
          return this._push({
            type: ai,
            func: w
          });
        }
        /**
         * Select only items matching the given predicate
         * @param {Function} pred
         */
      }, {
        key: "filter",
        value: function(w) {
          return this._push({
            type: si,
            func: w
          });
        }
        /**
         * Take given numbe for values from sequence
         * @param {Number} n A number greater than 0
         */
      }, {
        key: "take",
        value: function(w) {
          return w > 0 ? this._push({
            type: Io,
            func: w
          }) : this;
        }
        /**
         * Drop a number of values from the sequence
         * @param {Number} n Number of items to drop greater than 0
         */
      }, {
        key: "drop",
        value: function(w) {
          return w > 0 ? this._push({
            type: Jo,
            func: w
          }) : this;
        }
        // Transformations
        /**
         * Returns a new lazy object with results of the transformation
         * The entire sequence is realized.
         *
         * @param {Function} fn Tranform function of type (Array) => (Any)
         */
      }, {
        key: "transform",
        value: function(w) {
          this._validate();
          var E = this, C;
          return pn(function() {
            return C || (C = pn(w(E.value()))), C.next();
          });
        }
        /**
         * Mark this lazy object to return only the first result on `lazy.value()`.
         * No more iteratees or transformations can be added after this method is called.
         */
      }, {
        key: "first",
        value: function() {
          return this.take(1), this.__first = !0, this;
        }
        // Terminal methods
        /**
         * Returns the fully realized values of the iterators.
         * The return value will be an array unless `lazy.first()` was used.
         * The realized values are cached for subsequent calls
         */
      }, {
        key: "value",
        value: function() {
          return this.__done || (this.__done = this.next(this.__buf).done), this.__first ? this.__buf[0] : this.__buf;
        }
        /**
         * Execute the funcion for each value. Will stop when an execution returns false.
         * @param {Function} f
         * @returns {Boolean} false iff `f` return false for any execution, otherwise true
         */
      }, {
        key: "each",
        value: function(w) {
          for (; ; ) {
            var E = this.next();
            if (E.done)
              break;
            if (w(E.value) === !1)
              return !1;
          }
          return !0;
        }
        /**
         * Returns the reduction of sequence according the reducing function
         *
         * @param {*} f a reducing function
         * @param {*} init
         */
      }, {
        key: "reduce",
        value: function(w, E) {
          var C = this.next(), j = 0;
          for (E === void 0 && !C.done && (E = C.value, C = this.next(), j++); !C.done; )
            E = w(E, C.value, j++), C = this.next();
          return E;
        }
        /**
         * Returns the number of matched items in the sequence
         */
      }, {
        key: "size",
        value: function() {
          return this.reduce(function(w, E) {
            return ++w;
          }, 0);
        }
      }]), p;
    }();
    typeof Symbol == "function" && (_a.prototype[Symbol.iterator] = function() {
      return this;
    });
    var $a = /* @__PURE__ */ function() {
      function p(g, w) {
        a(this, p), this.__operators = g, this.__options = w;
      }
      return l(p, [{
        key: "stream",
        value: function(w, E) {
          var C = this;
          w = pn(w);
          var j = Tt[ae];
          return Dt(this.__operators) || Pe(this.__operators, function(z) {
            var q = rt(z);
            H(q.length === 1 && Xe(Vs(ae), q[0]), "invalid aggregation operator ".concat(q)), q = q[0], E && E instanceof Nn ? w = j[q].call(E, w, z[q], C.__options) : w = j[q](w, z[q], C.__options);
          }), w;
        }
        /**
         * Return the results of the aggregation as an array.
         * @param {*} collection
         * @param {*} query
         */
      }, {
        key: "run",
        value: function(w, E) {
          return this.stream(w, E).value();
        }
      }]), p;
    }();
    function To(p, g, w) {
      return H(de(g), "Aggregation pipeline must be an array"), new $a(g, w).run(p);
    }
    var ii = /* @__PURE__ */ function() {
      function p(g, w, E) {
        a(this, p), this.__filterFn = w.test.bind(w), this.__query = w, this.__source = g, this.__projection = E || w.__projection, this.__operators = [], this.__result = null, this.__stack = [], this.__options = {};
      }
      return l(p, [{
        key: "_fetch",
        value: function() {
          return this.__result ? this.__result : (Ne(this.__projection) && this.__operators.push({
            $project: this.__projection
          }), this.__result = pn(this.__source).filter(this.__filterFn), this.__operators.length > 0 && (this.__result = new $a(this.__operators, this.__options).stream(this.__result, this.__query)), this.__result);
        }
        /**
         * Return remaining objects in the cursor as an array. This method exhausts the cursor
         * @returns {Array}
         */
      }, {
        key: "all",
        value: function() {
          return this._fetch().value();
        }
        /**
         * Returns the number of objects return in the cursor. This method exhausts the cursor
         * @returns {Number}
         */
      }, {
        key: "count",
        value: function() {
          return this.all().length;
        }
        /**
         * Returns a cursor that begins returning results only after passing or skipping a number of documents.
         * @param {Number} n the number of results to skip.
         * @return {Cursor} Returns the cursor, so you can chain this call.
         */
      }, {
        key: "skip",
        value: function(w) {
          return this.__operators.push({
            $skip: w
          }), this;
        }
        /**
         * Constrains the size of a cursor's result set.
         * @param {Number} n the number of results to limit to.
         * @return {Cursor} Returns the cursor, so you can chain this call.
         */
      }, {
        key: "limit",
        value: function(w) {
          return this.__operators.push({
            $limit: w
          }), this;
        }
        /**
         * Returns results ordered according to a sort specification.
         * @param {Object} modifier an object of key and values specifying the sort order. 1 for ascending and -1 for descending
         * @return {Cursor} Returns the cursor, so you can chain this call.
         */
      }, {
        key: "sort",
        value: function(w) {
          return this.__operators.push({
            $sort: w
          }), this;
        }
        /**
         * Specifies the collation for the cursor returned by the `mingo.Query.find`
         * @param {*} options
         */
      }, {
        key: "collation",
        value: function(w) {
          return this.__options.collation = w, this;
        }
        /**
         * Returns the next document in a cursor.
         * @returns {Object | Boolean}
         */
      }, {
        key: "next",
        value: function() {
          if (this.__stack) {
            if (this.__stack.length > 0)
              return this.__stack.pop();
            var w = this._fetch().next();
            if (!w.done)
              return w.value;
            this.__stack = null;
          }
        }
        /**
         * Returns true if the cursor has documents and can be iterated.
         * @returns {boolean}
         */
      }, {
        key: "hasNext",
        value: function() {
          if (!this.__stack)
            return !1;
          if (this.__stack.length > 0)
            return !0;
          var w = this._fetch().next();
          return w.done ? this.__stack = null : this.__stack.push(w.value), !!this.__stack;
        }
        /**
         * Applies a function to each document in a cursor and collects the return values in an array.
         * @param callback
         * @returns {Array}
         */
      }, {
        key: "map",
        value: function(w) {
          return this._fetch().map(w).value();
        }
        /**
         * Applies a JavaScript function for every document in a cursor.
         * @param callback
         */
      }, {
        key: "forEach",
        value: function(w) {
          this._fetch().each(w);
        }
      }]), p;
    }();
    typeof Symbol == "function" && (ii.prototype[Symbol.iterator] = function() {
      return this._fetch();
    });
    var Nn = /* @__PURE__ */ function() {
      function p(g, w) {
        a(this, p), this.__criteria = g, this.__projection = w || {}, this.__compiled = [], this._compile();
      }
      return l(p, [{
        key: "_compile",
        value: function() {
          var w = this;
          H(Ne(this.__criteria), "query criteria must be an object");
          var E;
          Pe(this.__criteria, function(C, j) {
            j === "$where" ? E = {
              field: j,
              expr: C
            } : j === "$expr" || Xe(["$and", "$or", "$nor"], j) ? w._processOperator(j, j, C) : (H(!Ks(j), "unknown top level operator: ".concat(j)), C = Xs(C), Pe(C, function(z, q) {
              w._processOperator(j, q, z);
            })), Ne(E) && w._processOperator(E.field, E.field, E.expr);
          });
        }
      }, {
        key: "_processOperator",
        value: function(w, E, C) {
          H(Jt(Tt[N], E), "invalid query operator ".concat(E, " detected")), this.__compiled.push(Tt[N][E](w, C));
        }
        /**
         * Checks if the object passes the query criteria. Returns true if so, false otherwise.
         * @param obj
         * @returns {boolean}
         */
      }, {
        key: "test",
        value: function(w) {
          for (var E = 0, C = this.__compiled.length; E < C; E++)
            if (!this.__compiled[E](w))
              return !1;
          return !0;
        }
        /**
         * Performs a query on a collection and returns a cursor object.
         * @param collection
         * @param projection
         * @returns {Cursor}
         */
      }, {
        key: "find",
        value: function(w, E) {
          return new ii(w, this, E);
        }
        /**
         * Remove matched documents from the collection returning the remainder
         * @param collection
         * @returns {Array}
         */
      }, {
        key: "remove",
        value: function(w) {
          var E = this;
          return nn(w, function(C, j) {
            return E.test(j) || C.push(j), C;
          }, []);
        }
      }]), p;
    }();
    function oi(p, g, w) {
      return new Nn(g).find(p, w);
    }
    function BA(p, g) {
      return new Nn(g).remove(p);
    }
    function li(p, g) {
      if (sr(p, g) || te(p) && te(g))
        return !0;
      if (de(p)) {
        var w = sr.bind(null, g);
        return p.some(w) || Fr(p, 1).some(w);
      }
      return !1;
    }
    function Co(p, g) {
      return !li(p, g);
    }
    function Do(p, g) {
      return te(p) ? g.some(Ee) : _n(tn(p), g).length > 0;
    }
    function Ro(p, g) {
      return !Do(p, g);
    }
    function xt(p, g) {
      return Wr(p, g, function(w, E) {
        return w < E;
      });
    }
    function mt(p, g) {
      return Wr(p, g, function(w, E) {
        return w <= E;
      });
    }
    function jo(p, g) {
      return Wr(p, g, function(w, E) {
        return w > E;
      });
    }
    function Oo(p, g) {
      return Wr(p, g, function(w, E) {
        return w >= E;
      });
    }
    function UA(p, g) {
      return tn(p).some(function(w) {
        return ye(w) && de(g) && g.length === 2 && w % g[0] === g[1];
      });
    }
    function LA(p, g) {
      p = tn(p);
      var w = function(C) {
        return Me(C) && !!C.match(g);
      };
      return p.some(w) || Fr(p, 1).some(w);
    }
    function PA(p, g) {
      return (g === !1 || g === 0) && p === void 0 || (g === !0 || g === 1) && p !== void 0;
    }
    function zA(p, g) {
      var w = !1;
      if (de(p) && de(g))
        for (var E = 0, C = g.length; E < C; E++)
          if (Ne(g[E]) && Xe(rt(g[E]), "$elemMatch"))
            w = w || No(p, g[E].$elemMatch);
          else
            return _n(g, p).length === C;
      return w;
    }
    function Qo(p, g) {
      return de(p) && ye(g) && p.length === g;
    }
    function No(p, g) {
      if (de(p) && !Dt(p)) {
        var w = function(fe) {
          return fe;
        }, E = g;
        rt(g).every(Ks) && (E = {
          temp: g
        }, w = function(fe) {
          return {
            temp: fe
          };
        });
        for (var C = new Nn(E), j = 0, z = p.length; j < z; j++)
          if (C.test(w(p[j])))
            return !0;
      }
      return !1;
    }
    function $t(p, g) {
      switch (g) {
        case 1:
        case "double":
          return ye(p) && (p + "").indexOf(".") !== -1;
        case 2:
        case T:
          return Me(p);
        case 3:
        case F:
          return Ne(p);
        case 4:
        case _:
          return de(p);
        case 6:
        case k:
          return te(p);
        case 8:
        case b:
          return Ie(p);
        case 9:
        case O:
          return Xt(p);
        case 10:
        case v:
          return Ee(p);
        case 11:
        case B:
          return Ve(p);
        case 16:
        case "int":
          return ye(p) && p <= 2147483647 && (p + "").indexOf(".") === -1;
        case 18:
        case "long":
          return ye(p) && p > 2147483647 && p <= 9223372036854776e3 && (p + "").indexOf(".") === -1;
        case 19:
        case "decimal":
          return ye(p);
        default:
          return !1;
      }
    }
    function Wr(p, g, w) {
      return tn(p).some(function(E) {
        return ke(E) === ke(g) && w(E, g);
      });
    }
    function mn(p) {
      return function(g, w) {
        var E = ce(g, w);
        return p(E[0], E[1]);
      };
    }
    var Ho = mn(li), Ai = mn(Co), In = mn(jo), Bo = mn(xt), Uo = mn(Oo), Lo = mn(mt), Po = mn(Ro);
    function zo(p, g) {
      var w = ce(p, g);
      return w[0] > w[1] ? 1 : w[0] < w[1] ? -1 : 0;
    }
    function Yo(p, g) {
      var w, E, C, j = "$cond: invalid arguments";
      de(g) ? (H(g.length === 3, j), w = g[0], E = g[1], C = g[2]) : (H(Ne(g), j), w = g.if, E = g.then, C = g.else);
      var z = ce(p, w);
      return z ? ce(p, E) : ce(p, C);
    }
    function gn(p, g) {
      var w = "Invalid arguments for $switch operator";
      H(g.branches, w);
      var E = g.branches.find(function(C) {
        return H(C.case && C.then, w), ce(p, C.case);
      });
      return E ? ce(p, E.then) : (H(g.default, w), ce(p, g.default));
    }
    function YA(p, g) {
      H(de(g) && g.length === 2, "$ifNull expression must resolve to array(2)");
      var w = ce(p, g);
      return te(w[0]) ? w[1] : w[0];
    }
    function vn(p, g) {
      var w = ce(p, g), E = new Date(w.getFullYear(), 0, 0), C = w - E, j = 1e3 * 60 * 60 * 24;
      return Math.round(C / j);
    }
    function Fo(p, g) {
      var w = ce(p, g);
      return w.getDate();
    }
    function ci(p, g) {
      var w = ce(p, g);
      return w.getDay() + 1;
    }
    function $n(p, g) {
      var w = ce(p, g);
      return w.getFullYear();
    }
    function ga(p, g) {
      var w = ce(p, g);
      return w.getMonth() + 1;
    }
    function es(p, g) {
      var w = ce(p, g);
      w = /* @__PURE__ */ new Date(+w), w.setHours(0, 0, 0), w.setDate(w.getDate() + 4 - (w.getDay() || 7));
      var E = new Date(w.getFullYear(), 0, 1);
      return Math.floor(((w - E) / 864e5 + 1) / 7);
    }
    function kt(p, g) {
      var w = ce(p, g);
      return w.getUTCHours();
    }
    function er(p, g) {
      var w = ce(p, g);
      return w.getMinutes();
    }
    function ts(p, g) {
      var w = ce(p, g);
      return w.getSeconds();
    }
    function Zo(p, g) {
      var w = ce(p, g);
      return w.getMilliseconds();
    }
    var ui = {
      "%Y": [$n, 4],
      "%m": [ga, 2],
      "%d": [Fo, 2],
      "%H": [kt, 2],
      "%M": [er, 2],
      "%S": [ts, 2],
      "%L": [Zo, 3],
      "%j": [vn, 3],
      "%w": [ci, 1],
      "%U": [es, 2],
      "%%": "%"
    };
    function FA(p, g) {
      for (var w = g.format, E = ce(p, g.date), C = w.match(/(%%|%Y|%m|%d|%H|%M|%S|%L|%j|%w|%U)/g), j = 0, z = C.length; j < z; j++) {
        var q = ui[C[j]], fe = q;
        if (de(q)) {
          var le = q[0], De = q[1];
          fe = ZA(le(p, E), De);
        }
        w = w.replace(C[j], fe);
      }
      return w;
    }
    function ZA(p, g) {
      return new Array(Math.max(g - String(p).length + 1, 0)).join("0") + p;
    }
    function GA(p, g) {
      return g;
    }
    function Go(p, g) {
      var w = ce(p, g), E = pa(w[0]), C = pa(w[1]);
      return E.length === C.length && E.length === _n(E, C).length;
    }
    function ns(p, g) {
      var w = ce(p, g);
      return _n(w[0], w[1]);
    }
    function qr(p, g) {
      var w = ce(p, g);
      return w[0].filter(wt.bind(null, w[1]));
    }
    function KA(p, g) {
      var w = ce(p, g);
      return vA(w[0], w[1]);
    }
    function Ko(p, g) {
      var w = ce(p, g);
      return _n(w[0], w[1]).length === w[0].length;
    }
    function Xo(p, g) {
      var w = ce(p, g)[0];
      return w.some(Pt);
    }
    function fi(p, g) {
      var w = ce(p, g)[0];
      return w.every(Pt);
    }
    function di(p, g) {
      var w = ce(p, g);
      return [null, void 0].some(Xe.bind(null, w)) ? null : w.join("");
    }
    function Wo(p, g) {
      var w = ce(p, g), E = "$indexOfBytes expression resolves to invalid an argument";
      if (te(w[0]))
        return null;
      H(Me(w[0]) && Me(w[1]), E);
      var C = w[0], j = w[1], z = w[2], q = w[3], fe = te(z) || ye(z) && z >= 0 && Math.round(z) === z;
      if (fe = fe && (te(q) || ye(q) && q >= 0 && Math.round(q) === q), H(fe, E), z = z || 0, q = q || C.length, z > q)
        return -1;
      var le = C.substring(z, q).indexOf(j);
      return le > -1 ? le + z : le;
    }
    function XA(p, g) {
      var w = ce(p, g);
      return te(w[0]) ? null : (H(w.every(Me), "$split expression must result to array(2) of strings"), w[0].split(w[1]));
    }
    function hi(p, g) {
      return ~-encodeURI(ce(p, g)).split(/%..|./).length;
    }
    function pi(p, g) {
      return ce(p, g).length;
    }
    function WA(p, g) {
      var w = ce(p, g), E = w[0], C = w[1];
      return sr(E, C) || w.every(te) ? 0 : (H(w.every(Me), "$strcasecmp must resolve to array(2) of strings"), E = E.toUpperCase(), C = C.toUpperCase(), E > C && 1 || E < C && -1 || 0);
    }
    function qo(p, g) {
      var w = ce(p, g), E = w[0], C = w[1], j = w[2];
      H(Me(E) && ye(C) && C >= 0 && ye(j) && j >= 0, "$substrBytes: invalid arguments");
      for (var z = VA(E), q = [], fe = 0, le = 0; le < z.length; le++)
        q.push(fe), fe += z[le].length;
      var De = q.indexOf(C), ve = q.indexOf(C + j);
      return H(De > -1 && ve > -1, "$substrBytes: invalid range, start or end index is a UTF-8 continuation byte."), E.substring(De, ve);
    }
    function fn(p, g) {
      var w = ce(p, g), E = w[0], C = w[1], j = w[2];
      return Me(E) ? C < 0 ? "" : j < 0 ? E.substr(C) : E.substr(C, j) : "";
    }
    function mi(p, g) {
      return fn(p, g);
    }
    function va(p, g) {
      var w = ce(p, g);
      return Dt(w) ? "" : w.toLowerCase();
    }
    function Vo(p, g) {
      var w = ce(p, g);
      return Dt(w) ? "" : w.toUpperCase();
    }
    var _o = [192, 224, 240];
    function qA(p) {
      if (p < 128)
        return [p];
      for (var g = p < 2048 && 1 || p < 65536 && 2 || 3, w = _o[g - 1], E = [(p >> 6 * g) + w]; g > 0; )
        E.push(128 | p >> 6 * --g & 63);
      return E;
    }
    function VA(p) {
      for (var g = [], w = 0, E = p.length; w < E; w++)
        g.push(qA(p.codePointAt(w)));
      return g;
    }
    function _A(p, g) {
      var w = g.vars, E = g.in, C = rt(w);
      return Pe(C, function(j) {
        var z = ce(p, w[j]), q = "$" + j;
        p[q] = z;
      }), ce(p, E);
    }
    var $A = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $abs: kA,
      $add: bA,
      $ceil: yA,
      $divide: EA,
      $exp: MA,
      $floor: SA,
      $ln: Xa,
      $log: IA,
      $log10: Wa,
      $mod: JA,
      $multiply: TA,
      $pow: CA,
      $round: ho,
      $sqrt: po,
      $subtract: mo,
      $trunc: DA,
      $arrayElemAt: RA,
      $arrayToObject: jA,
      $concatArrays: vo,
      $filter: wo,
      $in: xo,
      $indexOfArray: _s,
      $isArray: OA,
      $map: ko,
      $objectToArray: qa,
      $range: bo,
      $reduce: QA,
      $reverseArray: yo,
      $size: Eo,
      $slice: $s,
      $zip: NA,
      $mergeObjects: Mo,
      $and: ei,
      $or: ti,
      $not: Xr,
      $eq: Ho,
      $ne: Ai,
      $gt: In,
      $lt: Bo,
      $gte: Uo,
      $lte: Lo,
      $nin: Po,
      $cmp: zo,
      $cond: Yo,
      $switch: gn,
      $ifNull: YA,
      $dayOfYear: vn,
      $dayOfMonth: Fo,
      $dayOfWeek: ci,
      $year: $n,
      $month: ga,
      $week: es,
      $hour: kt,
      $minute: er,
      $second: ts,
      $millisecond: Zo,
      $dateToString: FA,
      $literal: GA,
      $setEquals: Go,
      $setIntersection: ns,
      $setDifference: qr,
      $setUnion: KA,
      $setIsSubset: Ko,
      $anyElementTrue: Xo,
      $allElementsTrue: fi,
      $concat: di,
      $indexOfBytes: Wo,
      $split: XA,
      $strLenBytes: hi,
      $strLenCP: pi,
      $strcasecmp: WA,
      $substrBytes: qo,
      $substr: fn,
      $substrCP: mi,
      $toLower: va,
      $toUpper: Vo,
      $let: _A
    });
    function or(p, g) {
      return te(g) ? p : p.map(function(w) {
        return ce(w, g);
      });
    }
    function Vr(p, g) {
      return pa(or(p, g));
    }
    function ec(p, g) {
      var w = or(p, g).filter(ye), E = nn(w, function(C, j) {
        return C + j;
      }, 0);
      return E / (w.length || 1);
    }
    function tc(p, g) {
      return p.length > 0 ? ce(p[0], g) : void 0;
    }
    function gi(p, g) {
      return p.length > 0 ? ce(p[p.length - 1], g) : void 0;
    }
    function $o(p, g) {
      return nn(or(p, g), function(w, E) {
        return te(w) || E > w ? E : w;
      }, void 0);
    }
    function lr(p, g) {
      return nn(p, function(w, E) {
        return Object.assign(w, ce(E, g));
      }, {});
    }
    function rs(p, g) {
      return nn(or(p, g), function(w, E) {
        return te(w) || E < w ? E : w;
      }, void 0);
    }
    function nc(p, g) {
      return oo(or(p, g).filter(ye), !1);
    }
    function rc(p, g) {
      return oo(or(p, g).filter(ye), !0);
    }
    function ac(p, g) {
      return de(p) ? ye(g) ? p.length * g : nn(or(p, g).filter(ye), function(w, E) {
        return w + E;
      }, 0) : 0;
    }
    var _r = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $addToSet: Vr,
      $avg: ec,
      $first: tc,
      $last: gi,
      $max: $o,
      $mergeObjects: lr,
      $min: rs,
      $push: or,
      $stdDevPop: nc,
      $stdDevSamp: rc,
      $sum: ac
    });
    function Jn(p, g, w) {
      var E = rt(g);
      return E.length === 0 ? p : p.map(function(C) {
        var j = G(C);
        return Pe(E, function(z) {
          var q = ce(C, g[z]);
          Zs(j, z, q);
        }), j;
      });
    }
    var el = Jn;
    function sc(p, g, w) {
      var E = g.boundaries, C = g.default, j = E[0], z = E[E.length - 1], q = g.output || {
        count: {
          $sum: 1
        }
      };
      H(E.length > 2, "$bucket 'boundaries' expression must have at least 3 elements");
      for (var fe = ke(j), le = 0, De = E.length - 1; le < De; le++)
        H(fe === ke(E[le + 1]), "$bucket 'boundaries' must all be of the same type"), H(E[le] < E[le + 1], "$bucket 'boundaries' must be sorted in ascending order");
      !te(C) && ke(g.default) === ke(j) && H(j > g.default || z < g.default, "$bucket 'default' expression must be out of boundaries range");
      var ve = {};
      Pe(E, function(Ge) {
        return ve[Ge] = [];
      }), te(C) || (ve[C] = []);
      var at = !1;
      return pn(function() {
        return at || (p.each(function(Ge) {
          var vt = ce(Ge, g.groupBy);
          if (te(vt) || vt < j || vt >= z)
            H(!te(C), "$bucket require a default for out of range values"), ve[C].push(Ge);
          else {
            H(vt >= j && vt < z, "$bucket 'groupBy' expression must resolve to a value in range of boundaries");
            var Wt = zs(E, vt), Tn = E[Math.max(0, Wt - 1)];
            ve[Tn].push(Ge);
          }
        }), E.pop(), te(C) || E.push(C), at = pn(E).map(function(Ge) {
          var vt = Ga(ve[Ge], null, q);
          return Object.assign(vt, {
            _id: Ge
          });
        })), at.next();
      });
    }
    function ic(p, g, w) {
      var E = g.output || {
        count: {
          $sum: 1
        }
      }, C = g.groupBy, j = g.buckets;
      return H(j > 0, "The $bucketAuto 'buckets' field must be greater than 0, but found: " + j), p.transform(function(z) {
        for (var q = Math.max(1, Math.round(z.length / j)), fe = wA(ce), le = {}, De = [], ve = za(z, function(xi) {
          var ka = fe(xi, C);
          return te(ka) ? De.push(xi) : (le[ka] || (le[ka] = []), le[ka].push(xi)), ka;
        }), at = Kr(), Ge = [], vt = 0, Wt = 0, Tn = ve.length; Wt < j && vt < Tn; Wt++) {
          for (var I = {}, Hn = [], xa = 0; xa < q && vt < Tn; xa++) {
            var qt = fe(ve[vt], C);
            if (te(qt) && (qt = null), un(Hn, te(qt) ? De : le[qt]), vt += te(qt) ? De.length : le[qt].length, Jt(I, "min") || (I.min = qt), Ge.length > 0) {
              var Ke = Ge[Ge.length - 1];
              Ke[at].max = I.min;
            }
          }
          Wt == j - 1 && un(Hn, ve.slice(vt)), Ge.push(Object.assign(Ga(Hn, null, E), {
            _id: I
          }));
        }
        return Ge.length > 0 && (Ge[Ge.length - 1][at].max = fe(ve[ve.length - 1], C)), Ge;
      });
    }
    function oc(p, g, w) {
      return H(Me(g) && g.trim() !== "" && g.indexOf(".") === -1 && g.trim()[0] !== "$", "Invalid expression value for $count"), pn(function() {
        var E = {};
        return E[g] = p.size(), {
          value: E,
          done: !1
        };
      }).first();
    }
    function lc(p, g, w) {
      return p.transform(function(E) {
        return [zr(g, function(C) {
          return To(E, C);
        })];
      });
    }
    function tl(p, g, w) {
      var E = Kr(), C = g[E];
      return p.transform(function(j) {
        var z = Ya(j, function(le) {
          return ce(le, C, C);
        });
        g = pe(g), delete g[E];
        var q = -1, fe = z.keys.length;
        return function() {
          if (++q === fe)
            return {
              done: !0
            };
          var le = z.keys[q], De = {};
          return le !== void 0 && (De[E] = le), Pe(g, function(ve, at) {
            De[at] = Ga(z.groups[q], at, ve);
          }), {
            value: De,
            done: !1
          };
        };
      });
    }
    function $r(p, g, w) {
      return p.take(g);
    }
    function U(p, g, w) {
      var E = g.from, C = g.localField, j = g.foreignField, z = g.as;
      H(de(E) && Me(j) && Me(C) && Me(z), "$lookup: invalid argument");
      var q = {};
      return Pe(E, function(fe) {
        var le = Fn(Qn(fe, j));
        q[le] = q[le] || [], q[le].push(fe);
      }), p.map(function(fe) {
        var le = Fn(Qn(fe, C)), De = pe(fe);
        return De[z] = q[le] || [], De;
      });
    }
    function ne(p, g, w) {
      var E = new Nn(g);
      return p.filter(function(C) {
        return E.test(C);
      });
    }
    function V(p, g, w) {
      return H(de(g), "$out expression must be an array"), p.map(function(E) {
        return g.push(E), E;
      });
    }
    function we(p, g, w) {
      if (Dt(g))
        return p;
      var E = rt(g), C = !1, j = Kr();
      if (tt(g), Xe(E, j)) {
        var z = g[j];
        (z === 0 || z === !1) && (E = E.filter(wt.bind(null, [j])), H(wt(E, j), "Must not contain collections id key"), C = Dt(E));
      } else
        E.push(j);
      return p.map(function(q) {
        return He(q, g, E, C);
      });
    }
    function He(p, g, w, E) {
      var C = Kr(), j = {}, z = !1, q = !1, fe = [];
      return E && fe.push(C), w.forEach(function(le) {
        var De, ve = g[le];
        if (le !== C && Xe([0, !1], ve) && (q = !0), le === C && Dt(ve))
          De = p[le];
        else if (Me(ve))
          De = ce(p, ve, le);
        else if (!Xe([1, !0], ve))
          if (de(ve))
            De = ve.map(function(I) {
              var Hn = ce(p, I);
              return te(Hn) ? null : Hn;
            });
          else if (Ne(ve)) {
            var at = rt(ve), Ge = at.length > 1 ? !1 : at[0];
            if (Xe(Vs(Z), Ge)) {
              var vt = Tt[Z];
              Ge === "$slice" ? tn(ve[Ge]).every(ye) ? (De = vt[Ge](p, ve[Ge], le), z = !0) : De = ce(p, ve, le) : De = vt[Ge](p, ve[Ge], le);
            } else if (Jt(p, le)) {
              tt(ve);
              var Wt = p[le];
              De = de(Wt) ? Wt.map(function(I) {
                return He(I, ve, at, !1);
              }) : He(Wt, ve, at, !1);
            } else
              De = ce(p, ve, le);
          } else {
            fe.push(le);
            return;
          }
        var Tn = Gr(p, le, {
          preserveMissingValues: !0
        });
        Tn !== void 0 && Yr(j, Tn, {
          flatten: !0
        }), wt([0, 1, !1, !0], ve) && (De === void 0 ? Gs(j, le) : Zs(j, le, De));
      }), Fa(j), (z || q || E) && (j = Object.assign({}, p, j), fe.length > 0 && (j = G(j), Pe(fe, function(le) {
        return Gs(j, le);
      }))), j;
    }
    function tt(p) {
      var g = Kr(), w = [!1, !1];
      Pe(p, function(E, C) {
        C !== g && (E === 0 || E === !1 ? w[0] = !0 : (E === 1 || E === !0) && (w[1] = !0), H(!(w[0] && w[1]), "Projection cannot have a mix of inclusion and exclusion."));
      });
    }
    function zt(p, g, w) {
      return p.map(function(E) {
        return Ka(G(E), g);
      });
    }
    function gt(p, g, w) {
      return p.map(function(E) {
        return E = ce(E, g.newRoot), H(Ne(E), "$replaceRoot expression must return an object"), E;
      });
    }
    function vi(p, g, w) {
      var E = g.size;
      return H(ye(E), "$sample size must be a positive integer"), p.transform(function(C) {
        var j = C.length, z = -1;
        return function() {
          if (++z === E)
            return {
              done: !0
            };
          var q = Math.floor(Math.random() * j);
          return {
            value: C[q],
            done: !1
          };
        };
      });
    }
    function Ac(p, g, w) {
      return p.drop(g);
    }
    function wn(p, g, w) {
      if (Dt(g) || !Ne(g))
        return p;
      w = w || {};
      var E = ma, C = w.collation;
      return Ne(C) && Me(C.locale) && (E = cc(C)), p.transform(function(j) {
        var z = rt(g);
        return Pe(z.reverse(), function(q) {
          var fe = Ya(j, function(ve) {
            return Qn(ve, q);
          }), le = {}, De = za(fe.keys, function(ve, at) {
            return le[ve] = at, ve;
          }, E);
          g[q] === -1 && De.reverse(), j = [], Pe(De, function(ve) {
            return un(j, fe.groups[le[ve]]);
          });
        }), j;
      });
    }
    var as = {
      // Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.
      1: "base",
      //  Only strings that differ in base letters or accents and other diacritic marks compare as unequal.
      // Examples: a ≠ b, a ≠ á, a = A.
      2: "accent",
      // Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal.
      // Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A
      3: "variant"
      // case - Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.
    };
    function cc(p) {
      var g = {
        sensitivity: as[p.strength || 3],
        caseFirst: p.caseFirst === "off" ? "false" : p.caseFirst || "false",
        numeric: p.numericOrdering || !1,
        ignorePunctuation: p.alternate === "shifted"
      };
      (p.caseLevel || !1) === !0 && (g.sensitivity === "base" && (g.sensitivity = "case"), g.sensitivity === "accent" && (g.sensitivity = "variant"));
      var w = new Intl.Collator(p.locale, g);
      return function(E, C) {
        if (!Me(E) || !Me(C))
          return ma(E, C);
        var j = w.compare(E, C);
        return j < 0 ? -1 : j > 0 ? 1 : 0;
      };
    }
    function ea(p, g, w) {
      var E = {
        count: {
          $sum: 1
        }
      };
      return E[Kr()] = g, wn(tl(p, E), {
        count: -1
      }, w);
    }
    function ss(p, g, w) {
      Me(g) && (g = {
        path: g
      });
      var E = g.path.substr(1), C = g.includeArrayIndex || !1, j = g.preserveNullAndEmptyArrays || !1, z = function(le, De) {
        return C !== !1 && (le[C] = De), le;
      }, q;
      return pn(function() {
        for (var fe = function() {
          if (pn.isIterator(q)) {
            var ve = q.next();
            if (!ve.done)
              return {
                v: ve
              };
          }
          var at = p.next();
          if (at.done)
            return {
              v: at
            };
          if (at = at.value, q = Qn(at, E), de(q))
            if (q.length === 0 && j === !0) {
              q = null;
              var Ge = G(at);
              return Gs(Ge, E), {
                v: {
                  value: z(Ge, null),
                  done: !1
                }
              };
            } else
              q = pn(q).map(function(Wt, Tn) {
                var I = G(at);
                return Zs(I, E, Wt), z(I, Tn);
              });
          else if (!Dt(q) || j === !0) {
            var vt = G(at);
            return {
              v: {
                value: z(vt, null),
                done: !1
              }
            };
          }
        }; ; ) {
          var le = fe();
          if (t(le) === "object")
            return le.v;
        }
      });
    }
    var is = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $addFields: Jn,
      $set: el,
      $bucket: sc,
      $bucketAuto: ic,
      $count: oc,
      $facet: lc,
      $group: tl,
      $limit: $r,
      $lookup: U,
      $match: ne,
      $out: V,
      $project: we,
      $redact: zt,
      $replaceRoot: gt,
      $sample: vi,
      $skip: Ac,
      $sort: wn,
      $sortByCount: ea,
      $unwind: ss
    });
    function ut(p, g, w) {
      kr("$ not implemented");
    }
    function uc(p, g, w) {
      var E = Qn(p, w), C = new Nn(g);
      H(de(E), "$elemMatch: invalid argument");
      for (var j = 0; j < E.length; j++)
        if (C.test(E[j]))
          return [E[j]];
    }
    function nl(p, g, w) {
      var E = Qn(p, w);
      return de(E) ? de(g) ? Ws(E, g[0], g[1]) : (H(ye(g), "$slice: invalid arguments for projection"), Ws(E, g)) : E;
    }
    var os = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $: ut,
      $elemMatch: uc,
      $slice: nl
    });
    function on(p) {
      return function(g, w) {
        return function(E) {
          var C = Qn(E, g, {
            meta: !0
          });
          return C = Zr(C.result, C.depth), p(C, w);
        };
      };
    }
    var fc = on(zA), dc = on(No), ls = on(li), Ar = on(PA), As = on(jo), rl = on(Oo), cs = on(Do), al = on(xt), sl = on(mt), us = on(UA), il = on(Co), wa = on(Ro), br = on(LA), fs = on(Qo), hc = on($t);
    function pc(p, g) {
      H(de(g), "Invalid expression: $and expects value to be an Array");
      var w = [];
      return Pe(g, function(E) {
        return w.push(new Nn(E));
      }), function(E) {
        for (var C = 0; C < w.length; C++)
          if (!w[C].test(E))
            return !1;
        return !0;
      };
    }
    function ol(p, g) {
      H(de(g), "Invalid expression. $or expects value to be an Array");
      var w = [];
      return Pe(g, function(E) {
        return w.push(new Nn(E));
      }), function(E) {
        for (var C = 0; C < w.length; C++)
          if (w[C].test(E))
            return !0;
        return !1;
      };
    }
    function ds(p, g) {
      H(de(g), "Invalid expression. $nor expects value to be an Array");
      var w = ol("$or", g);
      return function(E) {
        return !w(E);
      };
    }
    function hs(p, g) {
      var w = {};
      w[p] = Xs(g);
      var E = new Nn(w);
      return function(C) {
        return !E.test(C);
      };
    }
    function wi(p, g) {
      return Le(g) || (g = new Function("return " + g + ";")), function(w) {
        return g.call(w) === !0;
      };
    }
    function mc(p, g) {
      return function(w) {
        return ce(w, g);
      };
    }
    var ll = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $all: fc,
      $elemMatch: dc,
      $eq: ls,
      $exists: Ar,
      $gt: As,
      $gte: rl,
      $in: cs,
      $lt: al,
      $lte: sl,
      $mod: us,
      $ne: il,
      $nin: wa,
      $regex: br,
      $size: fs,
      $type: hc,
      $and: pc,
      $or: ol,
      $nor: ds,
      $not: hs,
      $where: wi,
      $expr: mc
    }), Tt = {};
    Tt[re] = {}, Tt[$] = {}, Tt[ae] = {}, Tt[Z] = {}, Tt[N] = {};
    var gc = [[re, $A], [$, _r], [ae, is], [Z, os], [N, ll]];
    function Yt() {
      Pe(gc, function(p) {
        var g = A(p, 2), w = g[0], E = g[1];
        Object.assign(Tt[w], E);
      });
    }
    function rn(p, g) {
      var w = g(Za());
      H(Jt(Tt, p), "Invalid operator class ".concat(p));
      var E = Tt[p];
      Pe(w, function(j, z) {
        H(/^\$[a-zA-Z0-9_]*$/.test(z), "Invalid operator name ".concat(z)), H(!Jt(E, z), "".concat(z, " already exists for '").concat(p, "' operators"));
      });
      var C = {};
      switch (p) {
        case N:
          Pe(w, function(j, z) {
            j = j.bind(w), C[z] = function(q, fe) {
              return function(le) {
                var De = Qn(le, q), ve = j(q, De, fe);
                return H(Ie(ve), "".concat(z, " must return a boolean")), ve;
              };
            };
          });
          break;
        case Z:
          Pe(w, function(j, z) {
            j = j.bind(w), C[z] = function(q, fe, le) {
              var De = Qn(q, le);
              return j(le, De, fe);
            };
          });
          break;
        default:
          Pe(w, function(j, z) {
            C[z] = function() {
              for (var q = arguments.length, fe = new Array(q), le = 0; le < q; le++)
                fe[le] = arguments[le];
              return j.apply(w, fe);
            };
          });
      }
      Object.assign(Tt[p], C);
    }
    var vc = {
      /**
       * Runs a query and returns a cursor to the result
       * @param criteria
       * @param projection
       * @returns {Cursor}
       */
      query: function(g, w) {
        return new Nn(g).find(this.toJSON(), w);
      },
      /**
       * Runs the given aggregation operators on this collection
       * @params pipeline
       * @returns {Array}
       */
      aggregate: function(g) {
        return new $a(g).run(this.toJSON());
      }
    };
    Yt();
    var wc = "2.5.3", Al = {
      _internal: Za,
      Aggregator: $a,
      CollectionMixin: vc,
      Cursor: ii,
      Lazy: pn,
      OP_EXPRESSION: re,
      OP_GROUP: $,
      OP_PIPELINE: ae,
      OP_PROJECTION: Z,
      OP_QUERY: N,
      Query: Nn,
      VERSION: wc,
      addOperators: rn,
      aggregate: To,
      find: oi,
      remove: BA,
      setup: qs
    };
    return Al;
  });
})(nm);
var UE = nm.exports, lf = {}, Yl = { exports: {} }, Zh = {};
Yl.exports;
(function(e, n) {
  var t = function() {
    var a = function(ae, Z, N, Y) {
      for (N = N || {}, Y = ae.length; Y--; N[ae[Y]] = Z)
        ;
      return N;
    }, s = [1, 5], l = [1, 7], A = [1, 8], f = [1, 6, 10], u = [1, 9], d = [1, 6, 8, 10], h = [1, 24], m = [1, 25], v = [1, 26], k = [1, 27], b = [1, 28], y = [1, 29], S = [1, 30], T = [1, 17], O = [1, 18], B = [1, 19], K = [21, 22, 23, 24, 25, 29, 30], _ = [1, 6, 8, 10, 18], F = [1, 47], ee = [6, 18], oe = {
      trace: function() {
      },
      yy: {},
      symbols_: { error: 2, expressions: 3, expression: 4, andCondition: 5, OR: 6, filterExpr: 7, AND: 8, LPAREN: 9, RPAREN: 10, propExpr: 11, valueExpr: 12, PROP: 13, NOT: 14, REGEXPOP: 15, LBRACKET: 16, inExpr: 17, RBRACKET: 18, OP: 19, VALUE: 20, NULL: 21, TRUE: 22, FALSE: 23, NUMBER: 24, NOW: 25, DATEOP: 26, AMOUNT: 27, INTERVAL: 28, LITERAL: 29, STRING: 30, ADD: 31, SUB: 32, CONTAINS: 33, STARTSWITH: 34, ENDSWITH: 35, GT: 36, LT: 37, GTE: 38, LTE: 39, $accept: 0, $end: 1 },
      terminals_: { 2: "error", 6: "OR", 8: "AND", 9: "LPAREN", 10: "RPAREN", 13: "PROP", 14: "NOT", 16: "LBRACKET", 18: "RBRACKET", 21: "NULL", 22: "TRUE", 23: "FALSE", 24: "NUMBER", 25: "NOW", 27: "AMOUNT", 28: "INTERVAL", 29: "LITERAL", 30: "STRING", 31: "ADD", 32: "SUB", 33: "CONTAINS", 34: "STARTSWITH", 35: "ENDSWITH", 36: "GT", 37: "LT", 38: "GTE", 39: "LTE" },
      productions_: [0, [3, 1], [4, 1], [4, 3], [5, 1], [5, 3], [7, 3], [7, 2], [11, 1], [12, 2], [12, 1], [12, 4], [12, 3], [12, 2], [12, 1], [17, 3], [17, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 4], [20, 1], [20, 1], [26, 1], [26, 1], [15, 2], [15, 2], [15, 2], [19, 1], [19, 1], [19, 1], [19, 1], [19, 1]],
      performAction: function(Z, N, Y, W, H, G, pe, ke) {
        var X = G.length - 1;
        switch (H) {
          case 1:
            return W.debug("expression", G[X]), W.debug("opt", ke), G[X] && G[X].yg ? G[X].yg : G[X];
          case 2:
            W.debug("andCondition", G[X]), this.$ = G[X];
            break;
          case 3:
            W.debug("expression OR andCondition", G[X - 2], G[X]), G[X - 2] = G[X - 2].$or ? G[X - 2] : { $or: [W.ungroup(G[X - 2])] }, G[X - 2].$or.push(W.ungroup(G[X])), this.$ = G[X - 2];
            break;
          case 4:
            W.debug("filterExpr", G[X]), this.$ = G[X];
            break;
          case 5:
            W.debug("andCondition AND filterExpr", G[X - 2], G[X]), G[X - 2] = G[X - 2].$and ? G[X - 2] : { $and: [W.ungroup(G[X - 2])] }, G[X - 2].$and.push(W.ungroup(G[X])), this.$ = G[X - 2];
            break;
          case 6:
            W.debug("LPAREN expression RPAREN", G[X - 1]), this.$ = { yg: G[X - 1] };
            break;
          case 7:
            this.$ = { [G[X - 1]]: G[X] };
            break;
          case 8:
            G[X] = G[X].replace(/:$/, ""), G[X] = ke.aliases && ke.aliases[G[X]] ? ke.aliases[G[X]] : G[X], this.$ = G[X];
            break;
          case 9:
            this.$ = { $not: G[X] };
            break;
          case 10:
            this.$ = { $regex: G[X] };
            break;
          case 11:
            this.$ = { $nin: G[X - 1] };
            break;
          case 12:
            this.$ = { $in: G[X - 1] };
            break;
          case 13:
            this.$ = {}, this.$[G[X - 1]] = G[X];
            break;
          case 14:
            this.$ = G[X];
            break;
          case 15:
            this.$.push(G[X]);
            break;
          case 16:
            this.$ = [G[X]];
            break;
          case 17:
            this.$ = null;
            break;
          case 18:
            this.$ = !0;
            break;
          case 19:
            this.$ = !1;
            break;
          case 20:
            this.$ = parseInt(Z);
            break;
          case 21:
            this.$ = W.relDateToAbsolute(G[X - 2], G[X - 1], G[X]);
            break;
          case 22:
            this.$ = W.unescape(G[X]);
            break;
          case 23:
            G[X] = G[X].replace(/^'|'$/g, ""), this.$ = W.unescape(G[X]);
            break;
          case 24:
            this.$ = "add";
            break;
          case 25:
            this.$ = "sub";
            break;
          case 26:
            G[X] = G[X].replace(/^'|'$/g, ""), G[X] = W.unescape(G[X]), this.$ = W.stringToRegExp(G[X]);
            break;
          case 27:
            G[X] = G[X].replace(/^'|'$/g, ""), G[X] = W.unescape(G[X]), this.$ = W.stringToRegExp(G[X], "^");
            break;
          case 28:
            G[X] = G[X].replace(/^'|'$/g, ""), G[X] = W.unescape(G[X]), this.$ = W.stringToRegExp(G[X], "$");
            break;
          case 29:
            this.$ = "$ne";
            break;
          case 30:
            this.$ = "$gt";
            break;
          case 31:
            this.$ = "$lt";
            break;
          case 32:
            this.$ = "$gte";
            break;
          case 33:
            this.$ = "$lte";
            break;
        }
      },
      table: [{ 3: 1, 4: 2, 5: 3, 7: 4, 9: s, 11: 6, 13: l }, { 1: [3] }, { 1: [2, 1], 6: A }, a(f, [2, 2], { 8: u }), a(d, [2, 4]), { 4: 10, 5: 3, 7: 4, 9: s, 11: 6, 13: l }, { 12: 11, 14: [1, 12], 15: 13, 16: [1, 14], 19: 15, 20: 16, 21: h, 22: m, 23: v, 24: k, 25: b, 29: y, 30: S, 33: T, 34: O, 35: B, 36: [1, 20], 37: [1, 21], 38: [1, 22], 39: [1, 23] }, a([14, 16, 21, 22, 23, 24, 25, 29, 30, 33, 34, 35, 36, 37, 38, 39], [2, 8]), { 5: 31, 7: 4, 9: s, 11: 6, 13: l }, { 7: 32, 9: s, 11: 6, 13: l }, { 6: A, 10: [1, 33] }, a(d, [2, 7]), a(K, [2, 29], { 15: 34, 16: [1, 35], 33: T, 34: O, 35: B }), a(d, [2, 10]), { 17: 36, 20: 37, 21: h, 22: m, 23: v, 24: k, 25: b, 29: y, 30: S }, { 20: 38, 21: h, 22: m, 23: v, 24: k, 25: b, 29: y, 30: S }, a(d, [2, 14]), { 30: [1, 39] }, { 30: [1, 40] }, { 30: [1, 41] }, a(K, [2, 30]), a(K, [2, 31]), a(K, [2, 32]), a(K, [2, 33]), a(_, [2, 17]), a(_, [2, 18]), a(_, [2, 19]), a(_, [2, 20]), { 26: 42, 31: [1, 43], 32: [1, 44] }, a(_, [2, 22]), a(_, [2, 23]), a(f, [2, 3], { 8: u }), a(d, [2, 5]), a(d, [2, 6]), a(d, [2, 9]), { 17: 45, 20: 37, 21: h, 22: m, 23: v, 24: k, 25: b, 29: y, 30: S }, { 6: F, 18: [1, 46] }, a(ee, [2, 16]), a(d, [2, 13]), a(d, [2, 26]), a(d, [2, 27]), a(d, [2, 28]), { 27: [1, 48] }, { 27: [2, 24] }, { 27: [2, 25] }, { 6: F, 18: [1, 49] }, a(d, [2, 12]), { 20: 50, 21: h, 22: m, 23: v, 24: k, 25: b, 29: y, 30: S }, { 28: [1, 51] }, a(d, [2, 11]), a(ee, [2, 15]), a(_, [2, 21])],
      defaultActions: { 43: [2, 24], 44: [2, 25] },
      parseError: function(Z, N) {
        if (N.recoverable)
          this.trace(Z);
        else {
          var Y = new Error(Z);
          throw Y.hash = N, Y;
        }
      },
      parse: function(Z) {
        var N = this, Y = [0], W = [null], H = [], G = this.table, pe = "", ke = 0, X = 0, Ie = 2, Me = 1, ye = H.slice.call(arguments, 1), de = Object.create(this.lexer), Ne = { yy: {} };
        for (var Et in this.yy)
          Object.prototype.hasOwnProperty.call(this.yy, Et) && (Ne.yy[Et] = this.yy[Et]);
        de.setInput(Z, Ne.yy), Ne.yy.lexer = de, Ne.yy.parser = this, typeof de.yylloc > "u" && (de.yylloc = {});
        var Xt = de.yylloc;
        H.push(Xt);
        var Ve = de.options && de.options.ranges;
        typeof Ne.yy.parseError == "function" ? this.parseError = Ne.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
        for (var Le = function() {
          var rt;
          return rt = de.lex() || Me, typeof rt != "number" && (rt = N.symbols_[rt] || rt), rt;
        }, te, Ee, Ce, Xe, wt = {}, Pt, Dt, tn, Jt; ; ) {
          if (Ee = Y[Y.length - 1], this.defaultActions[Ee] ? Ce = this.defaultActions[Ee] : ((te === null || typeof te > "u") && (te = Le()), Ce = G[Ee] && G[Ee][te]), typeof Ce > "u" || !Ce.length || !Ce[0]) {
            var kr = "";
            Jt = [];
            for (Pt in G[Ee])
              this.terminals_[Pt] && Pt > Ie && Jt.push("'" + this.terminals_[Pt] + "'");
            de.showPosition ? kr = "Parse error on line " + (ke + 1) + `:
` + de.showPosition() + `
Expecting ` + Jt.join(", ") + ", got '" + (this.terminals_[te] || te) + "'" : kr = "Parse error on line " + (ke + 1) + ": Unexpected " + (te == Me ? "end of input" : "'" + (this.terminals_[te] || te) + "'"), this.parseError(kr, {
              text: de.match,
              token: this.terminals_[te] || te,
              line: de.yylineno,
              loc: Xt,
              expected: Jt
            });
          }
          if (Ce[0] instanceof Array && Ce.length > 1)
            throw new Error("Parse Error: multiple actions possible at state: " + Ee + ", token: " + te);
          switch (Ce[0]) {
            case 1:
              Y.push(te), W.push(de.yytext), H.push(de.yylloc), Y.push(Ce[1]), te = null, X = de.yyleng, pe = de.yytext, ke = de.yylineno, Xt = de.yylloc;
              break;
            case 2:
              if (Dt = this.productions_[Ce[1]][1], wt.$ = W[W.length - Dt], wt._$ = {
                first_line: H[H.length - (Dt || 1)].first_line,
                last_line: H[H.length - 1].last_line,
                first_column: H[H.length - (Dt || 1)].first_column,
                last_column: H[H.length - 1].last_column
              }, Ve && (wt._$.range = [
                H[H.length - (Dt || 1)].range[0],
                H[H.length - 1].range[1]
              ]), Xe = this.performAction.apply(wt, [
                pe,
                X,
                ke,
                Ne.yy,
                Ce[1],
                W,
                H
              ].concat(ye)), typeof Xe < "u")
                return Xe;
              Dt && (Y = Y.slice(0, -1 * Dt * 2), W = W.slice(0, -1 * Dt), H = H.slice(0, -1 * Dt)), Y.push(this.productions_[Ce[1]][0]), W.push(wt.$), H.push(wt._$), tn = G[Y[Y.length - 2]][Y[Y.length - 1]], Y.push(tn);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }
    };
    oe.parseError = function(ae, Z) {
      var N = ae.split(`
`);
      throw N[0] = "Query Error: unexpected character in filter at char " + (Z.loc.first_column + 1), new Error(N.join(`
`));
    };
    var re = function() {
      var ae = {
        EOF: 1,
        parseError: function(N, Y) {
          if (this.yy.parser)
            this.yy.parser.parseError(N, Y);
          else
            throw new Error(N);
        },
        // resets the lexer, sets new input
        setInput: function(Z, N) {
          return this.yy = N || this.yy || {}, this._input = Z, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
        },
        // consumes and returns one char from the input
        input: function() {
          var Z = this._input[0];
          this.yytext += Z, this.yyleng++, this.offset++, this.match += Z, this.matched += Z;
          var N = Z.match(/(?:\r\n?|\n).*/g);
          return N ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), Z;
        },
        // unshifts one char (or a string) into the input
        unput: function(Z) {
          var N = Z.length, Y = Z.split(/(?:\r\n?|\n)/g);
          this._input = Z + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - N), this.offset -= N;
          var W = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), Y.length - 1 && (this.yylineno -= Y.length - 1);
          var H = this.yylloc.range;
          return this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: Y ? (Y.length === W.length ? this.yylloc.first_column : 0) + W[W.length - Y.length].length - Y[0].length : this.yylloc.first_column - N
          }, this.options.ranges && (this.yylloc.range = [H[0], H[0] + this.yyleng - N]), this.yyleng = this.yytext.length, this;
        },
        // When called from action, caches matched text and appends it on next action
        more: function() {
          return this._more = !0, this;
        },
        // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
        reject: function() {
          if (this.options.backtrack_lexer)
            this._backtrack = !0;
          else
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          return this;
        },
        // retain first n characters of the match
        less: function(Z) {
          this.unput(this.match.slice(Z));
        },
        // displays already matched input, i.e. for error messages
        pastInput: function() {
          var Z = this.matched.substr(0, this.matched.length - this.match.length);
          return (Z.length > 20 ? "..." : "") + Z.substr(-20).replace(/\n/g, "");
        },
        // displays upcoming input, i.e. for error messages
        upcomingInput: function() {
          var Z = this.match;
          return Z.length < 20 && (Z += this._input.substr(0, 20 - Z.length)), (Z.substr(0, 20) + (Z.length > 20 ? "..." : "")).replace(/\n/g, "");
        },
        // displays the character position where the lexing error occurred, i.e. for error messages
        showPosition: function() {
          var Z = this.pastInput(), N = new Array(Z.length + 1).join("-");
          return Z + this.upcomingInput() + `
` + N + "^";
        },
        // test the lexed token: return FALSE when not a match, otherwise return token
        test_match: function(Z, N) {
          var Y, W, H;
          if (this.options.backtrack_lexer && (H = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          }, this.options.ranges && (H.yylloc.range = this.yylloc.range.slice(0))), W = Z[0].match(/(?:\r\n?|\n).*/g), W && (this.yylineno += W.length), this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: W ? W[W.length - 1].length - W[W.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + Z[0].length
          }, this.yytext += Z[0], this.match += Z[0], this.matches = Z, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(Z[0].length), this.matched += Z[0], Y = this.performAction.call(this, this.yy, this, N, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), Y)
            return Y;
          if (this._backtrack) {
            for (var G in H)
              this[G] = H[G];
            return !1;
          }
          return !1;
        },
        // return next match in input
        next: function() {
          if (this.done)
            return this.EOF;
          this._input || (this.done = !0);
          var Z, N, Y, W;
          this._more || (this.yytext = "", this.match = "");
          for (var H = this._currentRules(), G = 0; G < H.length; G++)
            if (Y = this._input.match(this.rules[H[G]]), Y && (!N || Y[0].length > N[0].length)) {
              if (N = Y, W = G, this.options.backtrack_lexer) {
                if (Z = this.test_match(Y, H[G]), Z !== !1)
                  return Z;
                if (this._backtrack) {
                  N = !1;
                  continue;
                } else
                  return !1;
              } else if (!this.options.flex)
                break;
            }
          return N ? (Z = this.test_match(N, H[W]), Z !== !1 ? Z : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        },
        // return next match that has a token
        lex: function() {
          var N = this.next();
          return N || this.lex();
        },
        // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
        begin: function(N) {
          this.conditionStack.push(N);
        },
        // pop the previously active lexer condition state off the condition stack
        popState: function() {
          var N = this.conditionStack.length - 1;
          return N > 0 ? this.conditionStack.pop() : this.conditionStack[0];
        },
        // produce the lexer rule set which is active for the currently active lexer condition state
        _currentRules: function() {
          return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
        },
        // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
        topState: function(N) {
          return N = this.conditionStack.length - 1 - Math.abs(N || 0), N >= 0 ? this.conditionStack[N] : "INITIAL";
        },
        // alias for begin(condition)
        pushState: function(N) {
          this.begin(N);
        },
        // return the number of states currently on the stack
        stateStackSize: function() {
          return this.conditionStack.length;
        },
        options: {},
        performAction: function(N, Y, W, H) {
          switch (W) {
            case 0:
              break;
            case 1:
              return 21;
            case 2:
              return 22;
            case 3:
              return 23;
            case 4:
              return 13;
            case 5:
              return 24;
            case 6:
              return 16;
            case 7:
              return 18;
            case 8:
              return this.pushState("reldate"), 25;
            case 9:
              return 32;
            case 10:
              return 31;
            case 11:
              return 27;
            case 12:
              return this.popState(), 28;
            case 13:
              return 29;
            case 14:
              return 30;
            case 15:
              return 9;
            case 16:
              return 10;
            case 17:
              return 6;
            case 18:
              return 8;
            case 19:
              return 14;
            case 20:
              return 38;
            case 21:
              return 39;
            case 22:
              return 36;
            case 23:
              return 37;
            case 24:
              return 34;
            case 25:
              return 35;
            case 26:
              return 33;
          }
        },
        rules: [/^(?:\s+)/, /^(?:(?:null|NULL|Null)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:true|TRUE|True)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:false|FALSE|False)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:[a-zA-Z_][a-zA-Z0-9_\.]*[:])/, /^(?:[0-9]+(\.[0-9]+)?\b(?![\-]))/, /^(?:\[)/, /^(?:\])/, /^(?:now(?=[-+]\d+[dwMyhms](?:([\+\,\(\)\[\]])|$)))/, /^(?:-)/, /^(?:\+)/, /^(?:\d+)/, /^(?:[dwMyhms])/, /^(?:([^\s'"\+\,\(\)\>\<=\[\]\~\-])(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+)/, /^(?:['](\\['"]|[^'"])+?['])/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:\+)/, /^(?:-)/, /^(?:>=)/, /^(?:<=)/, /^(?:>)/, /^(?:<)/, /^(?:~\^)/, /^(?:~\$)/, /^(?:~)/],
        conditions: { reldate: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], inclusive: !0 }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], inclusive: !0 } }
      };
      return ae.parseError = function(Z, N) {
        var Y = Z.split(`
`), W, H;
        throw W = Y[2].indexOf("^"), H = Y[1].charAt(W), Y[0] = 'Query Error: unrecognized text "' + H + '" in filter at char ' + (W + 1), Error(Y.join(`
`));
      }, ae;
    }();
    oe.lexer = re;
    function $() {
      this.yy = {};
    }
    return $.prototype = oe, oe.Parser = $, new $();
  }();
  typeof zb < "u" && (n.parser = t, n.Parser = t.Parser, n.parse = function() {
    return t.parse.apply(t, arguments);
  }, n.main = function(s) {
    s[1] || (console.log("Usage: " + s[0] + " FILE"), process.exit(1));
    var l = Zh.readFileSync(Zh.normalize(s[1]), "utf8");
    return n.parser.parse(l);
  }, require.main === e && n.main(process.argv.slice(1)));
})(Yl, Yl.exports);
var LE = Yl.exports;
function he(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var n = Number(e);
  return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
}
function R(e, n) {
  if (n.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + n.length + " present");
}
function L(e) {
  R(1, arguments);
  var n = Object.prototype.toString.call(e);
  return e instanceof Date || Pr(e) === "object" && n === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || n === "[object Number]" ? new Date(e) : ((typeof e == "string" || n === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function xr(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return isNaN(a) ? /* @__PURE__ */ new Date(NaN) : (a && t.setDate(t.getDate() + a), t);
}
function no(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  if (isNaN(a))
    return /* @__PURE__ */ new Date(NaN);
  if (!a)
    return t;
  var s = t.getDate(), l = new Date(t.getTime());
  l.setMonth(t.getMonth() + a + 1, 0);
  var A = l.getDate();
  return s >= A ? l : (t.setFullYear(l.getFullYear(), l.getMonth(), s), t);
}
function Ms(e, n) {
  if (R(2, arguments), !n || Pr(n) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var t = n.years ? he(n.years) : 0, a = n.months ? he(n.months) : 0, s = n.weeks ? he(n.weeks) : 0, l = n.days ? he(n.days) : 0, A = n.hours ? he(n.hours) : 0, f = n.minutes ? he(n.minutes) : 0, u = n.seconds ? he(n.seconds) : 0, d = L(e), h = a || t ? no(d, a + t * 12) : d, m = l || s ? xr(h, l + s * 7) : h, v = f + A * 60, k = u + v * 60, b = k * 1e3, y = new Date(m.getTime() + b);
  return y;
}
function Is(e) {
  R(1, arguments);
  var n = L(e), t = n.getDay();
  return t === 0 || t === 6;
}
function Af(e) {
  return R(1, arguments), L(e).getDay() === 0;
}
function rm(e) {
  return R(1, arguments), L(e).getDay() === 6;
}
function am(e, n) {
  R(2, arguments);
  var t = L(e), a = Is(t), s = he(n);
  if (isNaN(s))
    return /* @__PURE__ */ new Date(NaN);
  var l = t.getHours(), A = s < 0 ? -1 : 1, f = he(s / 5);
  t.setDate(t.getDate() + f * 7);
  for (var u = Math.abs(s % 5); u > 0; )
    t.setDate(t.getDate() + A), Is(t) || (u -= 1);
  return a && Is(t) && s !== 0 && (rm(t) && t.setDate(t.getDate() + (A < 0 ? 2 : -1)), Af(t) && t.setDate(t.getDate() + (A < 0 ? 1 : -2))), t.setHours(l), t;
}
function ro(e, n) {
  R(2, arguments);
  var t = L(e).getTime(), a = he(n);
  return new Date(t + a);
}
var PE = 36e5;
function cf(e, n) {
  R(2, arguments);
  var t = he(n);
  return ro(e, t * PE);
}
var sm = {};
function _t() {
  return sm;
}
function zE(e) {
  sm = e;
}
function Wn(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = _t(), m = he((t = (a = (s = (l = n == null ? void 0 : n.weekStartsOn) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : h.weekStartsOn) !== null && a !== void 0 ? a : (u = h.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = L(e), k = v.getDay(), b = (k < m ? 7 : 0) + k - m;
  return v.setDate(v.getDate() - b), v.setHours(0, 0, 0, 0), v;
}
function Ur(e) {
  return R(1, arguments), Wn(e, {
    weekStartsOn: 1
  });
}
function Qa(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear(), a = /* @__PURE__ */ new Date(0);
  a.setFullYear(t + 1, 0, 4), a.setHours(0, 0, 0, 0);
  var s = Ur(a), l = /* @__PURE__ */ new Date(0);
  l.setFullYear(t, 0, 4), l.setHours(0, 0, 0, 0);
  var A = Ur(l);
  return n.getTime() >= s.getTime() ? t + 1 : n.getTime() >= A.getTime() ? t : t - 1;
}
function ca(e) {
  R(1, arguments);
  var n = Qa(e), t = /* @__PURE__ */ new Date(0);
  t.setFullYear(n, 0, 4), t.setHours(0, 0, 0, 0);
  var a = Ur(t);
  return a;
}
function Mn(e) {
  var n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return n.setUTCFullYear(e.getFullYear()), e.getTime() - n.getTime();
}
function Rs(e) {
  R(1, arguments);
  var n = L(e);
  return n.setHours(0, 0, 0, 0), n;
}
var YE = 864e5;
function vr(e, n) {
  R(2, arguments);
  var t = Rs(e), a = Rs(n), s = t.getTime() - Mn(t), l = a.getTime() - Mn(a);
  return Math.round((s - l) / YE);
}
function im(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n), s = vr(t, ca(t)), l = /* @__PURE__ */ new Date(0);
  return l.setFullYear(a, 0, 4), l.setHours(0, 0, 0, 0), t = ca(l), t.setDate(t.getDate() + s), t;
}
function om(e, n) {
  R(2, arguments);
  var t = he(n);
  return im(e, Qa(e) + t);
}
var FE = 6e4;
function uf(e, n) {
  R(2, arguments);
  var t = he(n);
  return ro(e, t * FE);
}
function ff(e, n) {
  R(2, arguments);
  var t = he(n), a = t * 3;
  return no(e, a);
}
function lm(e, n) {
  R(2, arguments);
  var t = he(n);
  return ro(e, t * 1e3);
}
function lA(e, n) {
  R(2, arguments);
  var t = he(n), a = t * 7;
  return xr(e, a);
}
function Am(e, n) {
  R(2, arguments);
  var t = he(n);
  return no(e, t * 12);
}
function ZE(e, n, t) {
  R(2, arguments);
  var a = L(e == null ? void 0 : e.start).getTime(), s = L(e == null ? void 0 : e.end).getTime(), l = L(n == null ? void 0 : n.start).getTime(), A = L(n == null ? void 0 : n.end).getTime();
  if (!(a <= s && l <= A))
    throw new RangeError("Invalid interval");
  return t != null && t.inclusive ? a <= A && l <= s : a < A && l < s;
}
function cm(e) {
  R(1, arguments);
  var n;
  if (e && typeof e.forEach == "function")
    n = e;
  else if (Pr(e) === "object" && e !== null)
    n = Array.prototype.slice.call(e);
  else
    return /* @__PURE__ */ new Date(NaN);
  var t;
  return n.forEach(function(a) {
    var s = L(a);
    (t === void 0 || t < s || isNaN(Number(s))) && (t = s);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function um(e) {
  R(1, arguments);
  var n;
  if (e && typeof e.forEach == "function")
    n = e;
  else if (Pr(e) === "object" && e !== null)
    n = Array.prototype.slice.call(e);
  else
    return /* @__PURE__ */ new Date(NaN);
  var t;
  return n.forEach(function(a) {
    var s = L(a);
    (t === void 0 || t > s || isNaN(s.getDate())) && (t = s);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function GE(e, n) {
  var t = n.start, a = n.end;
  return R(2, arguments), um([cm([e, t]), a]);
}
function KE(e, n) {
  R(2, arguments);
  var t = L(e);
  if (isNaN(Number(t)))
    return NaN;
  var a = t.getTime(), s;
  n == null ? s = [] : typeof n.forEach == "function" ? s = n : s = Array.prototype.slice.call(n);
  var l, A;
  return s.forEach(function(f, u) {
    var d = L(f);
    if (isNaN(Number(d))) {
      l = NaN, A = NaN;
      return;
    }
    var h = Math.abs(a - d.getTime());
    (l == null || h < Number(A)) && (l = u, A = h);
  }), l;
}
function XE(e, n) {
  R(2, arguments);
  var t = L(e);
  if (isNaN(Number(t)))
    return /* @__PURE__ */ new Date(NaN);
  var a = t.getTime(), s;
  n == null ? s = [] : typeof n.forEach == "function" ? s = n : s = Array.prototype.slice.call(n);
  var l, A;
  return s.forEach(function(f) {
    var u = L(f);
    if (isNaN(Number(u))) {
      l = /* @__PURE__ */ new Date(NaN), A = NaN;
      return;
    }
    var d = Math.abs(a - u.getTime());
    (l == null || d < Number(A)) && (l = u, A = d);
  }), l;
}
function ar(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = t.getTime() - a.getTime();
  return s < 0 ? -1 : s > 0 ? 1 : s;
}
function WE(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = t.getTime() - a.getTime();
  return s > 0 ? -1 : s < 0 ? 1 : s;
}
var df = 7, fm = 365.2425, dm = Math.pow(10, 8) * 24 * 60 * 60 * 1e3, La = 6e4, Pa = 36e5, AA = 1e3, qE = -dm, hf = 60, pf = 3, mf = 12, gf = 4, ao = 3600, cA = 60, uA = ao * 24, hm = uA * 7, vf = uA * fm, wf = vf / 12, pm = wf * 3;
function VE(e) {
  R(1, arguments);
  var n = e / df;
  return Math.floor(n);
}
function so(e, n) {
  R(2, arguments);
  var t = Rs(e), a = Rs(n);
  return t.getTime() === a.getTime();
}
function mm(e) {
  return R(1, arguments), e instanceof Date || Pr(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Lr(e) {
  if (R(1, arguments), !mm(e) && typeof e != "number")
    return !1;
  var n = L(e);
  return !isNaN(Number(n));
}
function _E(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n);
  if (!Lr(t) || !Lr(a))
    return NaN;
  var s = vr(t, a), l = s < 0 ? -1 : 1, A = he(s / 7), f = A * 5;
  for (a = xr(a, A * 7); !so(t, a); )
    f += Is(a) ? 0 : l, a = xr(a, l);
  return f === 0 ? 0 : f;
}
function gm(e, n) {
  return R(2, arguments), Qa(e) - Qa(n);
}
var $E = 6048e5;
function e2(e, n) {
  R(2, arguments);
  var t = Ur(e), a = Ur(n), s = t.getTime() - Mn(t), l = a.getTime() - Mn(a);
  return Math.round((s - l) / $E);
}
function Fl(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = t.getFullYear() - a.getFullYear(), l = t.getMonth() - a.getMonth();
  return s * 12 + l;
}
function Ru(e) {
  R(1, arguments);
  var n = L(e), t = Math.floor(n.getMonth() / 3) + 1;
  return t;
}
function Bl(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = t.getFullYear() - a.getFullYear(), l = Ru(t) - Ru(a);
  return s * 4 + l;
}
var t2 = 6048e5;
function Zl(e, n, t) {
  R(2, arguments);
  var a = Wn(e, t), s = Wn(n, t), l = a.getTime() - Mn(a), A = s.getTime() - Mn(s);
  return Math.round((l - A) / t2);
}
function zi(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n);
  return t.getFullYear() - a.getFullYear();
}
function Gh(e, n) {
  var t = e.getFullYear() - n.getFullYear() || e.getMonth() - n.getMonth() || e.getDate() - n.getDate() || e.getHours() - n.getHours() || e.getMinutes() - n.getMinutes() || e.getSeconds() - n.getSeconds() || e.getMilliseconds() - n.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function xf(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = Gh(t, a), l = Math.abs(vr(t, a));
  t.setDate(t.getDate() - s * l);
  var A = +(Gh(t, a) === -s), f = s * (l - A);
  return f === 0 ? 0 : f;
}
function fA(e, n) {
  return R(2, arguments), L(e).getTime() - L(n).getTime();
}
var Kh = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function(n) {
    return n < 0 ? Math.ceil(n) : Math.floor(n);
  }
  // Math.trunc is not supported by IE
}, n2 = "trunc";
function Ls(e) {
  return e ? Kh[e] : Kh[n2];
}
function Gl(e, n, t) {
  R(2, arguments);
  var a = fA(e, n) / Pa;
  return Ls(t == null ? void 0 : t.roundingMethod)(a);
}
function vm(e, n) {
  R(2, arguments);
  var t = he(n);
  return om(e, -t);
}
function r2(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = ar(t, a), l = Math.abs(gm(t, a));
  t = vm(t, s * l);
  var A = +(ar(t, a) === -s), f = s * (l - A);
  return f === 0 ? 0 : f;
}
function Kl(e, n, t) {
  R(2, arguments);
  var a = fA(e, n) / La;
  return Ls(t == null ? void 0 : t.roundingMethod)(a);
}
function kf(e) {
  R(1, arguments);
  var n = L(e);
  return n.setHours(23, 59, 59, 999), n;
}
function bf(e) {
  R(1, arguments);
  var n = L(e), t = n.getMonth();
  return n.setFullYear(n.getFullYear(), t + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function wm(e) {
  R(1, arguments);
  var n = L(e);
  return kf(n).getTime() === bf(n).getTime();
}
function dA(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = ar(t, a), l = Math.abs(Fl(t, a)), A;
  if (l < 1)
    A = 0;
  else {
    t.getMonth() === 1 && t.getDate() > 27 && t.setDate(30), t.setMonth(t.getMonth() - s * l);
    var f = ar(t, a) === -s;
    wm(L(e)) && l === 1 && ar(e, a) === 1 && (f = !1), A = s * (l - Number(f));
  }
  return A === 0 ? 0 : A;
}
function a2(e, n, t) {
  R(2, arguments);
  var a = dA(e, n) / 3;
  return Ls(t == null ? void 0 : t.roundingMethod)(a);
}
function Js(e, n, t) {
  R(2, arguments);
  var a = fA(e, n) / 1e3;
  return Ls(t == null ? void 0 : t.roundingMethod)(a);
}
function s2(e, n, t) {
  R(2, arguments);
  var a = xf(e, n) / 7;
  return Ls(t == null ? void 0 : t.roundingMethod)(a);
}
function xm(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = ar(t, a), l = Math.abs(zi(t, a));
  t.setFullYear(1584), a.setFullYear(1584);
  var A = ar(t, a) === -s, f = s * (l - Number(A));
  return f === 0 ? 0 : f;
}
function km(e, n) {
  var t;
  R(1, arguments);
  var a = e || {}, s = L(a.start), l = L(a.end), A = l.getTime();
  if (!(s.getTime() <= A))
    throw new RangeError("Invalid interval");
  var f = [], u = s;
  u.setHours(0, 0, 0, 0);
  var d = Number((t = n == null ? void 0 : n.step) !== null && t !== void 0 ? t : 1);
  if (d < 1 || isNaN(d))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; u.getTime() <= A; )
    f.push(L(u)), u.setDate(u.getDate() + d), u.setHours(0, 0, 0, 0);
  return f;
}
function i2(e, n) {
  var t;
  R(1, arguments);
  var a = e || {}, s = L(a.start), l = L(a.end), A = s.getTime(), f = l.getTime();
  if (!(A <= f))
    throw new RangeError("Invalid interval");
  var u = [], d = s;
  d.setMinutes(0, 0, 0);
  var h = Number((t = n == null ? void 0 : n.step) !== null && t !== void 0 ? t : 1);
  if (h < 1 || isNaN(h))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; d.getTime() <= f; )
    u.push(L(d)), d = cf(d, h);
  return u;
}
function Xl(e) {
  R(1, arguments);
  var n = L(e);
  return n.setSeconds(0, 0), n;
}
function o2(e, n) {
  var t;
  R(1, arguments);
  var a = Xl(L(e.start)), s = L(e.end), l = a.getTime(), A = s.getTime();
  if (l >= A)
    throw new RangeError("Invalid interval");
  var f = [], u = a, d = Number((t = n == null ? void 0 : n.step) !== null && t !== void 0 ? t : 1);
  if (d < 1 || isNaN(d))
    throw new RangeError("`options.step` must be a number equal to or greater than 1");
  for (; u.getTime() <= A; )
    f.push(L(u)), u = uf(u, d);
  return f;
}
function l2(e) {
  R(1, arguments);
  var n = e || {}, t = L(n.start), a = L(n.end), s = a.getTime(), l = [];
  if (!(t.getTime() <= s))
    throw new RangeError("Invalid interval");
  var A = t;
  for (A.setHours(0, 0, 0, 0), A.setDate(1); A.getTime() <= s; )
    l.push(L(A)), A.setMonth(A.getMonth() + 1);
  return l;
}
function Wi(e) {
  R(1, arguments);
  var n = L(e), t = n.getMonth(), a = t - t % 3;
  return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n;
}
function A2(e) {
  R(1, arguments);
  var n = e || {}, t = L(n.start), a = L(n.end), s = a.getTime();
  if (!(t.getTime() <= s))
    throw new RangeError("Invalid interval");
  var l = Wi(t), A = Wi(a);
  s = A.getTime();
  for (var f = [], u = l; u.getTime() <= s; )
    f.push(L(u)), u = ff(u, 1);
  return f;
}
function c2(e, n) {
  R(1, arguments);
  var t = e || {}, a = L(t.start), s = L(t.end), l = s.getTime();
  if (!(a.getTime() <= l))
    throw new RangeError("Invalid interval");
  var A = Wn(a, n), f = Wn(s, n);
  A.setHours(15), f.setHours(15), l = f.getTime();
  for (var u = [], d = A; d.getTime() <= l; )
    d.setHours(0), u.push(L(d)), d = lA(d, 1), d.setHours(15);
  return u;
}
function yf(e) {
  R(1, arguments);
  for (var n = km(e), t = [], a = 0; a < n.length; ) {
    var s = n[a++];
    Is(s) && (t.push(s), Af(s) && (a = a + 5));
  }
  return t;
}
function hA(e) {
  R(1, arguments);
  var n = L(e);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function u2(e) {
  R(1, arguments);
  var n = hA(e);
  if (isNaN(n.getTime()))
    throw new RangeError("The passed date is invalid");
  var t = bf(e);
  return yf({
    start: n,
    end: t
  });
}
function bm(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear();
  return n.setFullYear(t + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Ef(e) {
  R(1, arguments);
  var n = L(e), t = /* @__PURE__ */ new Date(0);
  return t.setFullYear(n.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function f2(e) {
  R(1, arguments);
  var n = Ef(e), t = bm(e);
  return yf({
    start: n,
    end: t
  });
}
function d2(e) {
  R(1, arguments);
  var n = e || {}, t = L(n.start), a = L(n.end), s = a.getTime();
  if (!(t.getTime() <= s))
    throw new RangeError("Invalid interval");
  var l = [], A = t;
  for (A.setHours(0, 0, 0, 0), A.setMonth(0, 1); A.getTime() <= s; )
    l.push(L(A)), A.setFullYear(A.getFullYear() + 1);
  return l;
}
function h2(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear(), a = 9 + Math.floor(t / 10) * 10;
  return n.setFullYear(a, 11, 31), n.setHours(23, 59, 59, 999), n;
}
function p2(e) {
  R(1, arguments);
  var n = L(e);
  return n.setMinutes(59, 59, 999), n;
}
function ym(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = _t(), m = he((t = (a = (s = (l = n == null ? void 0 : n.weekStartsOn) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : h.weekStartsOn) !== null && a !== void 0 ? a : (u = h.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = L(e), k = v.getDay(), b = (k < m ? -7 : 0) + 6 - (k - m);
  return v.setDate(v.getDate() + b), v.setHours(23, 59, 59, 999), v;
}
function m2(e) {
  return R(1, arguments), ym(e, {
    weekStartsOn: 1
  });
}
function g2(e) {
  R(1, arguments);
  var n = Qa(e), t = /* @__PURE__ */ new Date(0);
  t.setFullYear(n + 1, 0, 4), t.setHours(0, 0, 0, 0);
  var a = Ur(t);
  return a.setMilliseconds(a.getMilliseconds() - 1), a;
}
function v2(e) {
  R(1, arguments);
  var n = L(e);
  return n.setSeconds(59, 999), n;
}
function w2(e) {
  R(1, arguments);
  var n = L(e), t = n.getMonth(), a = t - t % 3 + 3;
  return n.setMonth(a, 0), n.setHours(23, 59, 59, 999), n;
}
function x2(e) {
  R(1, arguments);
  var n = L(e);
  return n.setMilliseconds(999), n;
}
function k2() {
  return kf(Date.now());
}
function b2() {
  var e = /* @__PURE__ */ new Date(), n = e.getFullYear(), t = e.getMonth(), a = e.getDate(), s = /* @__PURE__ */ new Date(0);
  return s.setFullYear(n, t, a + 1), s.setHours(23, 59, 59, 999), s;
}
function y2() {
  var e = /* @__PURE__ */ new Date(), n = e.getFullYear(), t = e.getMonth(), a = e.getDate(), s = /* @__PURE__ */ new Date(0);
  return s.setFullYear(n, t, a - 1), s.setHours(23, 59, 59, 999), s;
}
function js(e, n) {
  R(2, arguments);
  var t = he(n);
  return ro(e, -t);
}
var E2 = 864e5;
function M2(e) {
  R(1, arguments);
  var n = L(e), t = n.getTime();
  n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
  var a = n.getTime(), s = t - a;
  return Math.floor(s / E2) + 1;
}
function Os(e) {
  R(1, arguments);
  var n = 1, t = L(e), a = t.getUTCDay(), s = (a < n ? 7 : 0) + a - n;
  return t.setUTCDate(t.getUTCDate() - s), t.setUTCHours(0, 0, 0, 0), t;
}
function Em(e) {
  R(1, arguments);
  var n = L(e), t = n.getUTCFullYear(), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(t + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = Os(a), l = /* @__PURE__ */ new Date(0);
  l.setUTCFullYear(t, 0, 4), l.setUTCHours(0, 0, 0, 0);
  var A = Os(l);
  return n.getTime() >= s.getTime() ? t + 1 : n.getTime() >= A.getTime() ? t : t - 1;
}
function S2(e) {
  R(1, arguments);
  var n = Em(e), t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(n, 0, 4), t.setUTCHours(0, 0, 0, 0);
  var a = Os(t);
  return a;
}
var I2 = 6048e5;
function Mm(e) {
  R(1, arguments);
  var n = L(e), t = Os(n).getTime() - S2(n).getTime();
  return Math.round(t / I2) + 1;
}
function Na(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = _t(), m = he((t = (a = (s = (l = n == null ? void 0 : n.weekStartsOn) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : h.weekStartsOn) !== null && a !== void 0 ? a : (u = h.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = L(e), k = v.getUTCDay(), b = (k < m ? 7 : 0) + k - m;
  return v.setUTCDate(v.getUTCDate() - b), v.setUTCHours(0, 0, 0, 0), v;
}
function Mf(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = L(e), m = h.getUTCFullYear(), v = _t(), k = he((t = (a = (s = (l = n == null ? void 0 : n.firstWeekContainsDate) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : v.firstWeekContainsDate) !== null && a !== void 0 ? a : (u = v.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && t !== void 0 ? t : 1);
  if (!(k >= 1 && k <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(m + 1, 0, k), b.setUTCHours(0, 0, 0, 0);
  var y = Na(b, n), S = /* @__PURE__ */ new Date(0);
  S.setUTCFullYear(m, 0, k), S.setUTCHours(0, 0, 0, 0);
  var T = Na(S, n);
  return h.getTime() >= y.getTime() ? m + 1 : h.getTime() >= T.getTime() ? m : m - 1;
}
function J2(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = _t(), m = he((t = (a = (s = (l = n == null ? void 0 : n.firstWeekContainsDate) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : h.firstWeekContainsDate) !== null && a !== void 0 ? a : (u = h.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && t !== void 0 ? t : 1), v = Mf(e, n), k = /* @__PURE__ */ new Date(0);
  k.setUTCFullYear(v, 0, m), k.setUTCHours(0, 0, 0, 0);
  var b = Na(k, n);
  return b;
}
var T2 = 6048e5;
function Sm(e, n) {
  R(1, arguments);
  var t = L(e), a = Na(t, n).getTime() - J2(t, n).getTime();
  return Math.round(a / T2) + 1;
}
function Je(e, n) {
  for (var t = e < 0 ? "-" : "", a = Math.abs(e).toString(); a.length < n; )
    a = "0" + a;
  return t + a;
}
var C2 = {
  // Year
  y: function(n, t) {
    var a = n.getUTCFullYear(), s = a > 0 ? a : 1 - a;
    return Je(t === "yy" ? s % 100 : s, t.length);
  },
  // Month
  M: function(n, t) {
    var a = n.getUTCMonth();
    return t === "M" ? String(a + 1) : Je(a + 1, 2);
  },
  // Day of the month
  d: function(n, t) {
    return Je(n.getUTCDate(), t.length);
  },
  // AM or PM
  a: function(n, t) {
    var a = n.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return a.toUpperCase();
      case "aaa":
        return a;
      case "aaaaa":
        return a[0];
      case "aaaa":
      default:
        return a === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(n, t) {
    return Je(n.getUTCHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H: function(n, t) {
    return Je(n.getUTCHours(), t.length);
  },
  // Minute
  m: function(n, t) {
    return Je(n.getUTCMinutes(), t.length);
  },
  // Second
  s: function(n, t) {
    return Je(n.getUTCSeconds(), t.length);
  },
  // Fraction of second
  S: function(n, t) {
    var a = t.length, s = n.getUTCMilliseconds(), l = Math.floor(s * Math.pow(10, a - 3));
    return Je(l, t.length);
  }
};
const Rr = C2;
var bs = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, D2 = {
  // Era
  G: function(n, t, a) {
    var s = n.getUTCFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(s, {
          width: "abbreviated"
        });
      case "GGGGG":
        return a.era(s, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return a.era(s, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(n, t, a) {
    if (t === "yo") {
      var s = n.getUTCFullYear(), l = s > 0 ? s : 1 - s;
      return a.ordinalNumber(l, {
        unit: "year"
      });
    }
    return Rr.y(n, t);
  },
  // Local week-numbering year
  Y: function(n, t, a, s) {
    var l = Mf(n, s), A = l > 0 ? l : 1 - l;
    if (t === "YY") {
      var f = A % 100;
      return Je(f, 2);
    }
    return t === "Yo" ? a.ordinalNumber(A, {
      unit: "year"
    }) : Je(A, t.length);
  },
  // ISO week-numbering year
  R: function(n, t) {
    var a = Em(n);
    return Je(a, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(n, t) {
    var a = n.getUTCFullYear();
    return Je(a, t.length);
  },
  // Quarter
  Q: function(n, t, a) {
    var s = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(s);
      case "QQ":
        return Je(s, 2);
      case "Qo":
        return a.ordinalNumber(s, {
          unit: "quarter"
        });
      case "QQQ":
        return a.quarter(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(s, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, t, a) {
    var s = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(s);
      case "qq":
        return Je(s, 2);
      case "qo":
        return a.ordinalNumber(s, {
          unit: "quarter"
        });
      case "qqq":
        return a.quarter(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(s, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, t, a) {
    var s = n.getUTCMonth();
    switch (t) {
      case "M":
      case "MM":
        return Rr.M(n, t);
      case "Mo":
        return a.ordinalNumber(s + 1, {
          unit: "month"
        });
      case "MMM":
        return a.month(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return a.month(s, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(n, t, a) {
    var s = n.getUTCMonth();
    switch (t) {
      case "L":
        return String(s + 1);
      case "LL":
        return Je(s + 1, 2);
      case "Lo":
        return a.ordinalNumber(s + 1, {
          unit: "month"
        });
      case "LLL":
        return a.month(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return a.month(s, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(n, t, a, s) {
    var l = Sm(n, s);
    return t === "wo" ? a.ordinalNumber(l, {
      unit: "week"
    }) : Je(l, t.length);
  },
  // ISO week of year
  I: function(n, t, a) {
    var s = Mm(n);
    return t === "Io" ? a.ordinalNumber(s, {
      unit: "week"
    }) : Je(s, t.length);
  },
  // Day of the month
  d: function(n, t, a) {
    return t === "do" ? a.ordinalNumber(n.getUTCDate(), {
      unit: "date"
    }) : Rr.d(n, t);
  },
  // Day of year
  D: function(n, t, a) {
    var s = M2(n);
    return t === "Do" ? a.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : Je(s, t.length);
  },
  // Day of week
  E: function(n, t, a) {
    var s = n.getUTCDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return a.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(s, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return a.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, t, a, s) {
    var l = n.getUTCDay(), A = (l - s.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(A);
      case "ee":
        return Je(A, 2);
      case "eo":
        return a.ordinalNumber(A, {
          unit: "day"
        });
      case "eee":
        return a.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return a.day(l, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(l, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return a.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, t, a, s) {
    var l = n.getUTCDay(), A = (l - s.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(A);
      case "cc":
        return Je(A, t.length);
      case "co":
        return a.ordinalNumber(A, {
          unit: "day"
        });
      case "ccc":
        return a.day(l, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return a.day(l, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(l, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return a.day(l, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, t, a) {
    var s = n.getUTCDay(), l = s === 0 ? 7 : s;
    switch (t) {
      case "i":
        return String(l);
      case "ii":
        return Je(l, t.length);
      case "io":
        return a.ordinalNumber(l, {
          unit: "day"
        });
      case "iii":
        return a.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return a.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return a.day(s, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return a.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, t, a) {
    var s = n.getUTCHours(), l = s / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return a.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return a.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return a.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, t, a) {
    var s = n.getUTCHours(), l;
    switch (s === 12 ? l = bs.noon : s === 0 ? l = bs.midnight : l = s / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return a.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return a.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return a.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, t, a) {
    var s = n.getUTCHours(), l;
    switch (s >= 17 ? l = bs.evening : s >= 12 ? l = bs.afternoon : s >= 4 ? l = bs.morning : l = bs.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, t, a) {
    if (t === "ho") {
      var s = n.getUTCHours() % 12;
      return s === 0 && (s = 12), a.ordinalNumber(s, {
        unit: "hour"
      });
    }
    return Rr.h(n, t);
  },
  // Hour [0-23]
  H: function(n, t, a) {
    return t === "Ho" ? a.ordinalNumber(n.getUTCHours(), {
      unit: "hour"
    }) : Rr.H(n, t);
  },
  // Hour [0-11]
  K: function(n, t, a) {
    var s = n.getUTCHours() % 12;
    return t === "Ko" ? a.ordinalNumber(s, {
      unit: "hour"
    }) : Je(s, t.length);
  },
  // Hour [1-24]
  k: function(n, t, a) {
    var s = n.getUTCHours();
    return s === 0 && (s = 24), t === "ko" ? a.ordinalNumber(s, {
      unit: "hour"
    }) : Je(s, t.length);
  },
  // Minute
  m: function(n, t, a) {
    return t === "mo" ? a.ordinalNumber(n.getUTCMinutes(), {
      unit: "minute"
    }) : Rr.m(n, t);
  },
  // Second
  s: function(n, t, a) {
    return t === "so" ? a.ordinalNumber(n.getUTCSeconds(), {
      unit: "second"
    }) : Rr.s(n, t);
  },
  // Fraction of second
  S: function(n, t) {
    return Rr.S(n, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, t, a, s) {
    var l = s._originalDate || n, A = l.getTimezoneOffset();
    if (A === 0)
      return "Z";
    switch (t) {
      case "X":
        return Wh(A);
      case "XXXX":
      case "XX":
        return Da(A);
      case "XXXXX":
      case "XXX":
      default:
        return Da(A, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, t, a, s) {
    var l = s._originalDate || n, A = l.getTimezoneOffset();
    switch (t) {
      case "x":
        return Wh(A);
      case "xxxx":
      case "xx":
        return Da(A);
      case "xxxxx":
      case "xxx":
      default:
        return Da(A, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, t, a, s) {
    var l = s._originalDate || n, A = l.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Xh(A, ":");
      case "OOOO":
      default:
        return "GMT" + Da(A, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, t, a, s) {
    var l = s._originalDate || n, A = l.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Xh(A, ":");
      case "zzzz":
      default:
        return "GMT" + Da(A, ":");
    }
  },
  // Seconds timestamp
  t: function(n, t, a, s) {
    var l = s._originalDate || n, A = Math.floor(l.getTime() / 1e3);
    return Je(A, t.length);
  },
  // Milliseconds timestamp
  T: function(n, t, a, s) {
    var l = s._originalDate || n, A = l.getTime();
    return Je(A, t.length);
  }
};
function Xh(e, n) {
  var t = e > 0 ? "-" : "+", a = Math.abs(e), s = Math.floor(a / 60), l = a % 60;
  if (l === 0)
    return t + String(s);
  var A = n || "";
  return t + String(s) + A + Je(l, 2);
}
function Wh(e, n) {
  if (e % 60 === 0) {
    var t = e > 0 ? "-" : "+";
    return t + Je(Math.abs(e) / 60, 2);
  }
  return Da(e, n);
}
function Da(e, n) {
  var t = n || "", a = e > 0 ? "-" : "+", s = Math.abs(e), l = Je(Math.floor(s / 60), 2), A = Je(s % 60, 2);
  return a + l + t + A;
}
const R2 = D2;
var qh = function(n, t) {
  switch (n) {
    case "P":
      return t.date({
        width: "short"
      });
    case "PP":
      return t.date({
        width: "medium"
      });
    case "PPP":
      return t.date({
        width: "long"
      });
    case "PPPP":
    default:
      return t.date({
        width: "full"
      });
  }
}, Im = function(n, t) {
  switch (n) {
    case "p":
      return t.time({
        width: "short"
      });
    case "pp":
      return t.time({
        width: "medium"
      });
    case "ppp":
      return t.time({
        width: "long"
      });
    case "pppp":
    default:
      return t.time({
        width: "full"
      });
  }
}, j2 = function(n, t) {
  var a = n.match(/(P+)(p+)?/) || [], s = a[1], l = a[2];
  if (!l)
    return qh(n, t);
  var A;
  switch (s) {
    case "P":
      A = t.dateTime({
        width: "short"
      });
      break;
    case "PP":
      A = t.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      A = t.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      A = t.dateTime({
        width: "full"
      });
      break;
  }
  return A.replace("{{date}}", qh(s, t)).replace("{{time}}", Im(l, t));
}, O2 = {
  p: Im,
  P: j2
};
const ju = O2;
var Q2 = ["D", "DD"], N2 = ["YY", "YYYY"];
function Jm(e) {
  return Q2.indexOf(e) !== -1;
}
function Tm(e) {
  return N2.indexOf(e) !== -1;
}
function Wl(e, n, t) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(n, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(n, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(n, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(n, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var H2 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, B2 = function(n, t, a) {
  var s, l = H2[n];
  return typeof l == "string" ? s = l : t === 1 ? s = l.one : s = l.other.replace("{{count}}", t.toString()), a != null && a.addSuffix ? a.comparison && a.comparison > 0 ? "in " + s : s + " ago" : s;
};
const U2 = B2;
function pu(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.width ? String(n.width) : e.defaultWidth, a = e.formats[t] || e.formats[e.defaultWidth];
    return a;
  };
}
var L2 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, P2 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, z2 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Y2 = {
  date: pu({
    formats: L2,
    defaultWidth: "full"
  }),
  time: pu({
    formats: P2,
    defaultWidth: "full"
  }),
  dateTime: pu({
    formats: z2,
    defaultWidth: "full"
  })
};
const F2 = Y2;
var Z2 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, G2 = function(n, t, a, s) {
  return Z2[n];
};
const K2 = G2;
function Ri(e) {
  return function(n, t) {
    var a = t != null && t.context ? String(t.context) : "standalone", s;
    if (a === "formatting" && e.formattingValues) {
      var l = e.defaultFormattingWidth || e.defaultWidth, A = t != null && t.width ? String(t.width) : l;
      s = e.formattingValues[A] || e.formattingValues[l];
    } else {
      var f = e.defaultWidth, u = t != null && t.width ? String(t.width) : e.defaultWidth;
      s = e.values[u] || e.values[f];
    }
    var d = e.argumentCallback ? e.argumentCallback(n) : n;
    return s[d];
  };
}
var X2 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, W2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, q2 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, V2 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, _2 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, $2 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, e3 = function(n, t) {
  var a = Number(n), s = a % 100;
  if (s > 20 || s < 10)
    switch (s % 10) {
      case 1:
        return a + "st";
      case 2:
        return a + "nd";
      case 3:
        return a + "rd";
    }
  return a + "th";
}, t3 = {
  ordinalNumber: e3,
  era: Ri({
    values: X2,
    defaultWidth: "wide"
  }),
  quarter: Ri({
    values: W2,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: Ri({
    values: q2,
    defaultWidth: "wide"
  }),
  day: Ri({
    values: V2,
    defaultWidth: "wide"
  }),
  dayPeriod: Ri({
    values: _2,
    defaultWidth: "wide",
    formattingValues: $2,
    defaultFormattingWidth: "wide"
  })
};
const n3 = t3;
function ji(e) {
  return function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.width, s = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth], l = n.match(s);
    if (!l)
      return null;
    var A = l[0], f = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(f) ? a3(f, function(m) {
      return m.test(A);
    }) : r3(f, function(m) {
      return m.test(A);
    }), d;
    d = e.valueCallback ? e.valueCallback(u) : u, d = t.valueCallback ? t.valueCallback(d) : d;
    var h = n.slice(A.length);
    return {
      value: d,
      rest: h
    };
  };
}
function r3(e, n) {
  for (var t in e)
    if (e.hasOwnProperty(t) && n(e[t]))
      return t;
}
function a3(e, n) {
  for (var t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function s3(e) {
  return function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.match(e.matchPattern);
    if (!a)
      return null;
    var s = a[0], l = n.match(e.parsePattern);
    if (!l)
      return null;
    var A = e.valueCallback ? e.valueCallback(l[0]) : l[0];
    A = t.valueCallback ? t.valueCallback(A) : A;
    var f = n.slice(s.length);
    return {
      value: A,
      rest: f
    };
  };
}
var i3 = /^(\d+)(th|st|nd|rd)?/i, o3 = /\d+/i, l3 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, A3 = {
  any: [/^b/i, /^(a|c)/i]
}, c3 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, u3 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, f3 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, d3 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, h3 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, p3 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, m3 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, g3 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, v3 = {
  ordinalNumber: s3({
    matchPattern: i3,
    parsePattern: o3,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: ji({
    matchPatterns: l3,
    defaultMatchWidth: "wide",
    parsePatterns: A3,
    defaultParseWidth: "any"
  }),
  quarter: ji({
    matchPatterns: c3,
    defaultMatchWidth: "wide",
    parsePatterns: u3,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: ji({
    matchPatterns: f3,
    defaultMatchWidth: "wide",
    parsePatterns: d3,
    defaultParseWidth: "any"
  }),
  day: ji({
    matchPatterns: h3,
    defaultMatchWidth: "wide",
    parsePatterns: p3,
    defaultParseWidth: "any"
  }),
  dayPeriod: ji({
    matchPatterns: m3,
    defaultMatchWidth: "any",
    parsePatterns: g3,
    defaultParseWidth: "any"
  })
};
const w3 = v3;
var x3 = {
  code: "en-US",
  formatDistance: U2,
  formatLong: F2,
  formatRelative: K2,
  localize: n3,
  match: w3,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Ps = x3;
var k3 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, b3 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, y3 = /^'([^]*?)'?$/, E3 = /''/g, M3 = /[a-zA-Z]/;
function Cm(e, n, t) {
  var a, s, l, A, f, u, d, h, m, v, k, b, y, S, T, O, B, K;
  R(2, arguments);
  var _ = String(n), F = _t(), ee = (a = (s = t == null ? void 0 : t.locale) !== null && s !== void 0 ? s : F.locale) !== null && a !== void 0 ? a : Ps, oe = he((l = (A = (f = (u = t == null ? void 0 : t.firstWeekContainsDate) !== null && u !== void 0 ? u : t == null || (d = t.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && f !== void 0 ? f : F.firstWeekContainsDate) !== null && A !== void 0 ? A : (m = F.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && l !== void 0 ? l : 1);
  if (!(oe >= 1 && oe <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var re = he((k = (b = (y = (S = t == null ? void 0 : t.weekStartsOn) !== null && S !== void 0 ? S : t == null || (T = t.locale) === null || T === void 0 || (O = T.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && y !== void 0 ? y : F.weekStartsOn) !== null && b !== void 0 ? b : (B = F.locale) === null || B === void 0 || (K = B.options) === null || K === void 0 ? void 0 : K.weekStartsOn) !== null && k !== void 0 ? k : 0);
  if (!(re >= 0 && re <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!ee.localize)
    throw new RangeError("locale must contain localize property");
  if (!ee.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var $ = L(e);
  if (!Lr($))
    throw new RangeError("Invalid time value");
  var ae = Mn($), Z = js($, ae), N = {
    firstWeekContainsDate: oe,
    weekStartsOn: re,
    locale: ee,
    _originalDate: $
  }, Y = _.match(b3).map(function(W) {
    var H = W[0];
    if (H === "p" || H === "P") {
      var G = ju[H];
      return G(W, ee.formatLong);
    }
    return W;
  }).join("").match(k3).map(function(W) {
    if (W === "''")
      return "'";
    var H = W[0];
    if (H === "'")
      return S3(W);
    var G = R2[H];
    if (G)
      return !(t != null && t.useAdditionalWeekYearTokens) && Tm(W) && Wl(W, n, String(e)), !(t != null && t.useAdditionalDayOfYearTokens) && Jm(W) && Wl(W, n, String(e)), G(Z, W, ee.localize, N);
    if (H.match(M3))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + H + "`");
    return W;
  }).join("");
  return Y;
}
function S3(e) {
  var n = e.match(y3);
  return n ? n[1].replace(E3, "'") : e;
}
function io(e, n) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var t in n)
    Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
  return e;
}
function Dm(e) {
  return io({}, e);
}
var Vh = 1440, I3 = 2520, mu = 43200, J3 = 86400;
function Rm(e, n, t) {
  var a, s;
  R(2, arguments);
  var l = _t(), A = (a = (s = t == null ? void 0 : t.locale) !== null && s !== void 0 ? s : l.locale) !== null && a !== void 0 ? a : Ps;
  if (!A.formatDistance)
    throw new RangeError("locale must contain formatDistance property");
  var f = ar(e, n);
  if (isNaN(f))
    throw new RangeError("Invalid time value");
  var u = io(Dm(t), {
    addSuffix: !!(t != null && t.addSuffix),
    comparison: f
  }), d, h;
  f > 0 ? (d = L(n), h = L(e)) : (d = L(e), h = L(n));
  var m = Js(h, d), v = (Mn(h) - Mn(d)) / 1e3, k = Math.round((m - v) / 60), b;
  if (k < 2)
    return t != null && t.includeSeconds ? m < 5 ? A.formatDistance("lessThanXSeconds", 5, u) : m < 10 ? A.formatDistance("lessThanXSeconds", 10, u) : m < 20 ? A.formatDistance("lessThanXSeconds", 20, u) : m < 40 ? A.formatDistance("halfAMinute", 0, u) : m < 60 ? A.formatDistance("lessThanXMinutes", 1, u) : A.formatDistance("xMinutes", 1, u) : k === 0 ? A.formatDistance("lessThanXMinutes", 1, u) : A.formatDistance("xMinutes", k, u);
  if (k < 45)
    return A.formatDistance("xMinutes", k, u);
  if (k < 90)
    return A.formatDistance("aboutXHours", 1, u);
  if (k < Vh) {
    var y = Math.round(k / 60);
    return A.formatDistance("aboutXHours", y, u);
  } else {
    if (k < I3)
      return A.formatDistance("xDays", 1, u);
    if (k < mu) {
      var S = Math.round(k / Vh);
      return A.formatDistance("xDays", S, u);
    } else if (k < J3)
      return b = Math.round(k / mu), A.formatDistance("aboutXMonths", b, u);
  }
  if (b = dA(h, d), b < 12) {
    var T = Math.round(k / mu);
    return A.formatDistance("xMonths", T, u);
  } else {
    var O = b % 12, B = Math.floor(b / 12);
    return O < 3 ? A.formatDistance("aboutXYears", B, u) : O < 9 ? A.formatDistance("overXYears", B, u) : A.formatDistance("almostXYears", B + 1, u);
  }
}
var _h = 1e3 * 60, ql = 60 * 24, $h = ql * 30, ep = ql * 365;
function jm(e, n, t) {
  var a, s, l;
  R(2, arguments);
  var A = _t(), f = (a = (s = t == null ? void 0 : t.locale) !== null && s !== void 0 ? s : A.locale) !== null && a !== void 0 ? a : Ps;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var u = ar(e, n);
  if (isNaN(u))
    throw new RangeError("Invalid time value");
  var d = io(Dm(t), {
    addSuffix: !!(t != null && t.addSuffix),
    comparison: u
  }), h, m;
  u > 0 ? (h = L(n), m = L(e)) : (h = L(e), m = L(n));
  var v = String((l = t == null ? void 0 : t.roundingMethod) !== null && l !== void 0 ? l : "round"), k;
  if (v === "floor")
    k = Math.floor;
  else if (v === "ceil")
    k = Math.ceil;
  else if (v === "round")
    k = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var b = m.getTime() - h.getTime(), y = b / _h, S = Mn(m) - Mn(h), T = (b - S) / _h, O = t == null ? void 0 : t.unit, B;
  if (O ? B = String(O) : y < 1 ? B = "second" : y < 60 ? B = "minute" : y < ql ? B = "hour" : T < $h ? B = "day" : T < ep ? B = "month" : B = "year", B === "second") {
    var K = k(b / 1e3);
    return f.formatDistance("xSeconds", K, d);
  } else if (B === "minute") {
    var _ = k(y);
    return f.formatDistance("xMinutes", _, d);
  } else if (B === "hour") {
    var F = k(y / 60);
    return f.formatDistance("xHours", F, d);
  } else if (B === "day") {
    var ee = k(T / ql);
    return f.formatDistance("xDays", ee, d);
  } else if (B === "month") {
    var oe = k(T / $h);
    return oe === 12 && O !== "month" ? f.formatDistance("xYears", 1, d) : f.formatDistance("xMonths", oe, d);
  } else if (B === "year") {
    var re = k(T / ep);
    return f.formatDistance("xYears", re, d);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function T3(e, n) {
  return R(1, arguments), Rm(e, Date.now(), n);
}
function C3(e, n) {
  return R(1, arguments), jm(e, Date.now(), n);
}
var D3 = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];
function R3(e, n) {
  var t, a, s, l, A;
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  var f = _t(), u = (t = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : f.locale) !== null && t !== void 0 ? t : Ps, d = (s = n == null ? void 0 : n.format) !== null && s !== void 0 ? s : D3, h = (l = n == null ? void 0 : n.zero) !== null && l !== void 0 ? l : !1, m = (A = n == null ? void 0 : n.delimiter) !== null && A !== void 0 ? A : " ";
  if (!u.formatDistance)
    return "";
  var v = d.reduce(function(k, b) {
    var y = "x".concat(b.replace(/(^.)/, function(T) {
      return T.toUpperCase();
    })), S = e[b];
    return typeof S == "number" && (h || e[b]) ? k.concat(u.formatDistance(y, S)) : k;
  }, []).join(m);
  return v;
}
function j3(e, n) {
  var t, a;
  R(1, arguments);
  var s = L(e);
  if (isNaN(s.getTime()))
    throw new RangeError("Invalid time value");
  var l = String((t = n == null ? void 0 : n.format) !== null && t !== void 0 ? t : "extended"), A = String((a = n == null ? void 0 : n.representation) !== null && a !== void 0 ? a : "complete");
  if (l !== "extended" && l !== "basic")
    throw new RangeError("format must be 'extended' or 'basic'");
  if (A !== "date" && A !== "time" && A !== "complete")
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  var f = "", u = "", d = l === "extended" ? "-" : "", h = l === "extended" ? ":" : "";
  if (A !== "time") {
    var m = Je(s.getDate(), 2), v = Je(s.getMonth() + 1, 2), k = Je(s.getFullYear(), 4);
    f = "".concat(k).concat(d).concat(v).concat(d).concat(m);
  }
  if (A !== "date") {
    var b = s.getTimezoneOffset();
    if (b !== 0) {
      var y = Math.abs(b), S = Je(Math.floor(y / 60), 2), T = Je(y % 60, 2), O = b < 0 ? "+" : "-";
      u = "".concat(O).concat(S, ":").concat(T);
    } else
      u = "Z";
    var B = Je(s.getHours(), 2), K = Je(s.getMinutes(), 2), _ = Je(s.getSeconds(), 2), F = f === "" ? "" : "T", ee = [B, K, _].join(h);
    f = "".concat(f).concat(F).concat(ee).concat(u);
  }
  return f;
}
function O3(e, n) {
  var t, a;
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  var s = L(e);
  if (!Lr(s))
    throw new RangeError("Invalid time value");
  var l = String((t = n == null ? void 0 : n.format) !== null && t !== void 0 ? t : "extended"), A = String((a = n == null ? void 0 : n.representation) !== null && a !== void 0 ? a : "complete");
  if (l !== "extended" && l !== "basic")
    throw new RangeError("format must be 'extended' or 'basic'");
  if (A !== "date" && A !== "time" && A !== "complete")
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  var f = "", u = l === "extended" ? "-" : "", d = l === "extended" ? ":" : "";
  if (A !== "time") {
    var h = Je(s.getDate(), 2), m = Je(s.getMonth() + 1, 2), v = Je(s.getFullYear(), 4);
    f = "".concat(v).concat(u).concat(m).concat(u).concat(h);
  }
  if (A !== "date") {
    var k = Je(s.getHours(), 2), b = Je(s.getMinutes(), 2), y = Je(s.getSeconds(), 2), S = f === "" ? "" : " ";
    f = "".concat(f).concat(S).concat(k).concat(d).concat(b).concat(d).concat(y);
  }
  return f;
}
function Q3(e) {
  if (R(1, arguments), Pr(e) !== "object")
    throw new Error("Duration must be an object");
  var n = e.years, t = n === void 0 ? 0 : n, a = e.months, s = a === void 0 ? 0 : a, l = e.days, A = l === void 0 ? 0 : l, f = e.hours, u = f === void 0 ? 0 : f, d = e.minutes, h = d === void 0 ? 0 : d, m = e.seconds, v = m === void 0 ? 0 : m;
  return "P".concat(t, "Y").concat(s, "M").concat(A, "DT").concat(u, "H").concat(h, "M").concat(v, "S");
}
function N3(e, n) {
  var t;
  if (arguments.length < 1)
    throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
  var a = L(e);
  if (!Lr(a))
    throw new RangeError("Invalid time value");
  var s = Number((t = n == null ? void 0 : n.fractionDigits) !== null && t !== void 0 ? t : 0);
  if (!(s >= 0 && s <= 3))
    throw new RangeError("fractionDigits must be between 0 and 3 inclusively");
  var l = Je(a.getDate(), 2), A = Je(a.getMonth() + 1, 2), f = a.getFullYear(), u = Je(a.getHours(), 2), d = Je(a.getMinutes(), 2), h = Je(a.getSeconds(), 2), m = "";
  if (s > 0) {
    var v = a.getMilliseconds(), k = Math.floor(v * Math.pow(10, s - 3));
    m = "." + Je(k, s);
  }
  var b = "", y = a.getTimezoneOffset();
  if (y !== 0) {
    var S = Math.abs(y), T = Je(he(S / 60), 2), O = Je(S % 60, 2), B = y < 0 ? "+" : "-";
    b = "".concat(B).concat(T, ":").concat(O);
  } else
    b = "Z";
  return "".concat(f, "-").concat(A, "-").concat(l, "T").concat(u, ":").concat(d, ":").concat(h).concat(m).concat(b);
}
var H3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], B3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function U3(e) {
  if (arguments.length < 1)
    throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
  var n = L(e);
  if (!Lr(n))
    throw new RangeError("Invalid time value");
  var t = H3[n.getUTCDay()], a = Je(n.getUTCDate(), 2), s = B3[n.getUTCMonth()], l = n.getUTCFullYear(), A = Je(n.getUTCHours(), 2), f = Je(n.getUTCMinutes(), 2), u = Je(n.getUTCSeconds(), 2);
  return "".concat(t, ", ").concat(a, " ").concat(s, " ").concat(l, " ").concat(A, ":").concat(f, ":").concat(u, " GMT");
}
function L3(e, n, t) {
  var a, s, l, A, f, u, d, h, m, v;
  R(2, arguments);
  var k = L(e), b = L(n), y = _t(), S = (a = (s = t == null ? void 0 : t.locale) !== null && s !== void 0 ? s : y.locale) !== null && a !== void 0 ? a : Ps, T = he((l = (A = (f = (u = t == null ? void 0 : t.weekStartsOn) !== null && u !== void 0 ? u : t == null || (d = t.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && f !== void 0 ? f : y.weekStartsOn) !== null && A !== void 0 ? A : (m = y.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && l !== void 0 ? l : 0);
  if (!S.localize)
    throw new RangeError("locale must contain localize property");
  if (!S.formatLong)
    throw new RangeError("locale must contain formatLong property");
  if (!S.formatRelative)
    throw new RangeError("locale must contain formatRelative property");
  var O = vr(k, b);
  if (isNaN(O))
    throw new RangeError("Invalid time value");
  var B;
  O < -6 ? B = "other" : O < -1 ? B = "lastWeek" : O < 0 ? B = "yesterday" : O < 1 ? B = "today" : O < 2 ? B = "tomorrow" : O < 7 ? B = "nextWeek" : B = "other";
  var K = js(k, Mn(k)), _ = js(b, Mn(b)), F = S.formatRelative(B, K, _, {
    locale: S,
    weekStartsOn: T
  });
  return Cm(k, F, {
    locale: S,
    weekStartsOn: T
  });
}
function P3(e) {
  R(1, arguments);
  var n = he(e);
  return L(n * 1e3);
}
function Om(e) {
  R(1, arguments);
  var n = L(e), t = n.getDate();
  return t;
}
function pA(e) {
  R(1, arguments);
  var n = L(e), t = n.getDay();
  return t;
}
function z3(e) {
  R(1, arguments);
  var n = L(e), t = vr(n, Ef(n)), a = t + 1;
  return a;
}
function Qm(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear(), a = n.getMonth(), s = /* @__PURE__ */ new Date(0);
  return s.setFullYear(t, a + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function Nm(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear();
  return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0;
}
function Y3(e) {
  R(1, arguments);
  var n = L(e);
  return String(new Date(n)) === "Invalid Date" ? NaN : Nm(n) ? 366 : 365;
}
function F3(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear(), a = Math.floor(t / 10) * 10;
  return a;
}
function Z3() {
  return io({}, _t());
}
function G3(e) {
  R(1, arguments);
  var n = L(e), t = n.getHours();
  return t;
}
function Hm(e) {
  R(1, arguments);
  var n = L(e), t = n.getDay();
  return t === 0 && (t = 7), t;
}
var K3 = 6048e5;
function Bm(e) {
  R(1, arguments);
  var n = L(e), t = Ur(n).getTime() - ca(n).getTime();
  return Math.round(t / K3) + 1;
}
var X3 = 6048e5;
function W3(e) {
  R(1, arguments);
  var n = ca(e), t = ca(lA(n, 60)), a = t.valueOf() - n.valueOf();
  return Math.round(a / X3);
}
function q3(e) {
  R(1, arguments);
  var n = L(e), t = n.getMilliseconds();
  return t;
}
function V3(e) {
  R(1, arguments);
  var n = L(e), t = n.getMinutes();
  return t;
}
function _3(e) {
  R(1, arguments);
  var n = L(e), t = n.getMonth();
  return t;
}
var $3 = 24 * 60 * 60 * 1e3;
function eM(e, n) {
  R(2, arguments);
  var t = e || {}, a = n || {}, s = L(t.start).getTime(), l = L(t.end).getTime(), A = L(a.start).getTime(), f = L(a.end).getTime();
  if (!(s <= l && A <= f))
    throw new RangeError("Invalid interval");
  var u = s < f && A < l;
  if (!u)
    return 0;
  var d = A < s ? s : A, h = f > l ? l : f, m = h - d;
  return Math.ceil(m / $3);
}
function tM(e) {
  R(1, arguments);
  var n = L(e), t = n.getSeconds();
  return t;
}
function Um(e) {
  R(1, arguments);
  var n = L(e), t = n.getTime();
  return t;
}
function nM(e) {
  return R(1, arguments), Math.floor(Um(e) / 1e3);
}
function Lm(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = L(e), m = h.getFullYear(), v = _t(), k = he((t = (a = (s = (l = n == null ? void 0 : n.firstWeekContainsDate) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : v.firstWeekContainsDate) !== null && a !== void 0 ? a : (u = v.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && t !== void 0 ? t : 1);
  if (!(k >= 1 && k <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var b = /* @__PURE__ */ new Date(0);
  b.setFullYear(m + 1, 0, k), b.setHours(0, 0, 0, 0);
  var y = Wn(b, n), S = /* @__PURE__ */ new Date(0);
  S.setFullYear(m, 0, k), S.setHours(0, 0, 0, 0);
  var T = Wn(S, n);
  return h.getTime() >= y.getTime() ? m + 1 : h.getTime() >= T.getTime() ? m : m - 1;
}
function Vl(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = _t(), m = he((t = (a = (s = (l = n == null ? void 0 : n.firstWeekContainsDate) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : h.firstWeekContainsDate) !== null && a !== void 0 ? a : (u = h.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && t !== void 0 ? t : 1), v = Lm(e, n), k = /* @__PURE__ */ new Date(0);
  k.setFullYear(v, 0, m), k.setHours(0, 0, 0, 0);
  var b = Wn(k, n);
  return b;
}
var rM = 6048e5;
function Pm(e, n) {
  R(1, arguments);
  var t = L(e), a = Wn(t, n).getTime() - Vl(t, n).getTime();
  return Math.round(a / rM) + 1;
}
function aM(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = _t(), m = he((t = (a = (s = (l = n == null ? void 0 : n.weekStartsOn) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : h.weekStartsOn) !== null && a !== void 0 ? a : (u = h.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = Om(e);
  if (isNaN(v))
    return NaN;
  var k = pA(hA(e)), b = m - k;
  b <= 0 && (b += 7);
  var y = v - b;
  return Math.ceil(y / 7) + 1;
}
function zm(e) {
  R(1, arguments);
  var n = L(e), t = n.getMonth();
  return n.setFullYear(n.getFullYear(), t + 1, 0), n.setHours(0, 0, 0, 0), n;
}
function sM(e, n) {
  return R(1, arguments), Zl(zm(e), hA(e), n) + 1;
}
function iM(e) {
  return R(1, arguments), L(e).getFullYear();
}
function oM(e) {
  return R(1, arguments), Math.floor(e * Pa);
}
function lM(e) {
  return R(1, arguments), Math.floor(e * hf);
}
function AM(e) {
  return R(1, arguments), Math.floor(e * ao);
}
function cM(e) {
  R(1, arguments);
  var n = L(e.start), t = L(e.end);
  if (isNaN(n.getTime()))
    throw new RangeError("Start Date is invalid");
  if (isNaN(t.getTime()))
    throw new RangeError("End Date is invalid");
  var a = {};
  a.years = Math.abs(xm(t, n));
  var s = ar(t, n), l = Ms(n, {
    years: s * a.years
  });
  a.months = Math.abs(dA(t, l));
  var A = Ms(l, {
    months: s * a.months
  });
  a.days = Math.abs(xf(t, A));
  var f = Ms(A, {
    days: s * a.days
  });
  a.hours = Math.abs(Gl(t, f));
  var u = Ms(f, {
    hours: s * a.hours
  });
  a.minutes = Math.abs(Kl(t, u));
  var d = Ms(u, {
    minutes: s * a.minutes
  });
  return a.seconds = Math.abs(Js(t, d)), a;
}
function uM(e, n, t) {
  var a;
  R(1, arguments);
  var s;
  return fM(n) ? s = n : t = n, new Intl.DateTimeFormat((a = t) === null || a === void 0 ? void 0 : a.locale, s).format(e);
}
function fM(e) {
  return e !== void 0 && !("locale" in e);
}
function dM(e, n, t) {
  R(2, arguments);
  var a = 0, s, l = L(e), A = L(n);
  if (t != null && t.unit)
    s = t == null ? void 0 : t.unit, s === "second" ? a = Js(l, A) : s === "minute" ? a = Kl(l, A) : s === "hour" ? a = Gl(l, A) : s === "day" ? a = vr(l, A) : s === "week" ? a = Zl(l, A) : s === "month" ? a = Fl(l, A) : s === "quarter" ? a = Bl(l, A) : s === "year" && (a = zi(l, A));
  else {
    var f = Js(l, A);
    Math.abs(f) < cA ? (a = Js(l, A), s = "second") : Math.abs(f) < ao ? (a = Kl(l, A), s = "minute") : Math.abs(f) < uA && Math.abs(vr(l, A)) < 1 ? (a = Gl(l, A), s = "hour") : Math.abs(f) < hm && (a = vr(l, A)) && Math.abs(a) < 7 ? s = "day" : Math.abs(f) < wf ? (a = Zl(l, A), s = "week") : Math.abs(f) < pm ? (a = Fl(l, A), s = "month") : Math.abs(f) < vf && Bl(l, A) < 4 ? (a = Bl(l, A), s = "quarter") : (a = zi(l, A), s = "year");
  }
  var u = new Intl.RelativeTimeFormat(t == null ? void 0 : t.locale, {
    localeMatcher: t == null ? void 0 : t.localeMatcher,
    numeric: (t == null ? void 0 : t.numeric) || "auto",
    style: t == null ? void 0 : t.style
  });
  return u.format(a, s);
}
function hM(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n);
  return t.getTime() > a.getTime();
}
function pM(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n);
  return t.getTime() < a.getTime();
}
function mM(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n);
  return t.getTime() === a.getTime();
}
function gM(e, n, t) {
  if (arguments.length < 3)
    throw new TypeError("3 argument required, but only " + arguments.length + " present");
  var a = new Date(e, n, t);
  return a.getFullYear() === e && a.getMonth() === n && a.getDate() === t;
}
function vM(e) {
  return R(1, arguments), L(e).getDate() === 1;
}
function wM(e) {
  return R(1, arguments), L(e).getDay() === 5;
}
function xM(e) {
  return R(1, arguments), L(e).getTime() > Date.now();
}
function tp(e, n) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!t) {
    if (Array.isArray(e) || (t = Dk(e)) || n && e && typeof e.length == "number") {
      t && (e = t);
      var a = 0, s = function() {
      };
      return {
        s,
        n: function() {
          return a >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[a++]
          };
        },
        e: function(d) {
          throw d;
        },
        f: s
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var l = !0, A = !1, f;
  return {
    s: function() {
      t = t.call(e);
    },
    n: function() {
      var d = t.next();
      return l = d.done, d;
    },
    e: function(d) {
      A = !0, f = d;
    },
    f: function() {
      try {
        !l && t.return != null && t.return();
      } finally {
        if (A)
          throw f;
      }
    }
  };
}
var kM = 10, Ym = /* @__PURE__ */ function() {
  function e() {
    $e(this, e), ge(this, "priority", void 0), ge(this, "subPriority", 0);
  }
  return et(e, [{
    key: "validate",
    value: function(t, a) {
      return !0;
    }
  }]), e;
}(), bM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t(a, s, l, A, f) {
    var u;
    return $e(this, t), u = n.call(this), u.value = a, u.validateValue = s, u.setValue = l, u.priority = A, f && (u.subPriority = f), u;
  }
  return et(t, [{
    key: "validate",
    value: function(s, l) {
      return this.validateValue(s, this.value, l);
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return this.setValue(s, l, this.value, A);
    }
  }]), t;
}(Ym), yM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", kM), ge(be(a), "subPriority", -1), a;
  }
  return et(t, [{
    key: "set",
    value: function(s, l) {
      if (l.timestampIsSet)
        return s;
      var A = /* @__PURE__ */ new Date(0);
      return A.setFullYear(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate()), A.setHours(s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), s.getUTCMilliseconds()), A;
    }
  }]), t;
}(Ym), ht = /* @__PURE__ */ function() {
  function e() {
    $e(this, e), ge(this, "incompatibleTokens", void 0), ge(this, "priority", void 0), ge(this, "subPriority", void 0);
  }
  return et(e, [{
    key: "run",
    value: function(t, a, s, l) {
      var A = this.parse(t, a, s, l);
      return A ? {
        setter: new bM(A.value, this.validate, this.set, this.priority, this.subPriority),
        rest: A.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(t, a, s) {
      return !0;
    }
  }]), e;
}(), EM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 140), ge(be(a), "incompatibleTokens", ["R", "u", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "G":
        case "GG":
        case "GGG":
          return A.era(s, {
            width: "abbreviated"
          }) || A.era(s, {
            width: "narrow"
          });
        case "GGGGG":
          return A.era(s, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return A.era(s, {
            width: "wide"
          }) || A.era(s, {
            width: "abbreviated"
          }) || A.era(s, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return l.era = A, s.setUTCFullYear(A, 0, 1), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), Gt = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, pr = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Kt(e, n) {
  return e && {
    value: n(e.value),
    rest: e.rest
  };
}
function Ot(e, n) {
  var t = n.match(e);
  return t ? {
    value: parseInt(t[0], 10),
    rest: n.slice(t[0].length)
  } : null;
}
function mr(e, n) {
  var t = n.match(e);
  if (!t)
    return null;
  if (t[0] === "Z")
    return {
      value: 0,
      rest: n.slice(1)
    };
  var a = t[1] === "+" ? 1 : -1, s = t[2] ? parseInt(t[2], 10) : 0, l = t[3] ? parseInt(t[3], 10) : 0, A = t[5] ? parseInt(t[5], 10) : 0;
  return {
    value: a * (s * Pa + l * La + A * AA),
    rest: n.slice(t[0].length)
  };
}
function Fm(e) {
  return Ot(Gt.anyDigitsSigned, e);
}
function Ut(e, n) {
  switch (e) {
    case 1:
      return Ot(Gt.singleDigit, n);
    case 2:
      return Ot(Gt.twoDigits, n);
    case 3:
      return Ot(Gt.threeDigits, n);
    case 4:
      return Ot(Gt.fourDigits, n);
    default:
      return Ot(new RegExp("^\\d{1," + e + "}"), n);
  }
}
function _l(e, n) {
  switch (e) {
    case 1:
      return Ot(Gt.singleDigitSigned, n);
    case 2:
      return Ot(Gt.twoDigitsSigned, n);
    case 3:
      return Ot(Gt.threeDigitsSigned, n);
    case 4:
      return Ot(Gt.fourDigitsSigned, n);
    default:
      return Ot(new RegExp("^-?\\d{1," + e + "}"), n);
  }
}
function Sf(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Zm(e, n) {
  var t = n > 0, a = t ? n : 1 - n, s;
  if (a <= 50)
    s = e || 100;
  else {
    var l = a + 50, A = Math.floor(l / 100) * 100, f = e >= l % 100;
    s = e + A - (f ? 100 : 0);
  }
  return t ? s : 1 - s;
}
function Gm(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
var MM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 130), ge(be(a), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      var f = function(d) {
        return {
          year: d,
          isTwoDigitYear: l === "yy"
        };
      };
      switch (l) {
        case "y":
          return Kt(Ut(4, s), f);
        case "yo":
          return Kt(A.ordinalNumber(s, {
            unit: "year"
          }), f);
        default:
          return Kt(Ut(l.length, s), f);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l.isTwoDigitYear || l.year > 0;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      var f = s.getUTCFullYear();
      if (A.isTwoDigitYear) {
        var u = Zm(A.year, f);
        return s.setUTCFullYear(u, 0, 1), s.setUTCHours(0, 0, 0, 0), s;
      }
      var d = !("era" in l) || l.era === 1 ? A.year : 1 - A.year;
      return s.setUTCFullYear(d, 0, 1), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), SM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 130), ge(be(a), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      var f = function(d) {
        return {
          year: d,
          isTwoDigitYear: l === "YY"
        };
      };
      switch (l) {
        case "Y":
          return Kt(Ut(4, s), f);
        case "Yo":
          return Kt(A.ordinalNumber(s, {
            unit: "year"
          }), f);
        default:
          return Kt(Ut(l.length, s), f);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l.isTwoDigitYear || l.year > 0;
    }
  }, {
    key: "set",
    value: function(s, l, A, f) {
      var u = Mf(s, f);
      if (A.isTwoDigitYear) {
        var d = Zm(A.year, u);
        return s.setUTCFullYear(d, 0, f.firstWeekContainsDate), s.setUTCHours(0, 0, 0, 0), Na(s, f);
      }
      var h = !("era" in l) || l.era === 1 ? A.year : 1 - A.year;
      return s.setUTCFullYear(h, 0, f.firstWeekContainsDate), s.setUTCHours(0, 0, 0, 0), Na(s, f);
    }
  }]), t;
}(ht), IM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 130), ge(be(a), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l) {
      return _l(l === "R" ? 4 : l.length, s);
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      var f = /* @__PURE__ */ new Date(0);
      return f.setUTCFullYear(A, 0, 4), f.setUTCHours(0, 0, 0, 0), Os(f);
    }
  }]), t;
}(ht), JM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 130), ge(be(a), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l) {
      return _l(l === "u" ? 4 : l.length, s);
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCFullYear(A, 0, 1), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), TM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 120), ge(be(a), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "Q":
        case "QQ":
          return Ut(l.length, s);
        case "Qo":
          return A.ordinalNumber(s, {
            unit: "quarter"
          });
        case "QQQ":
          return A.quarter(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.quarter(s, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return A.quarter(s, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return A.quarter(s, {
            width: "wide",
            context: "formatting"
          }) || A.quarter(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.quarter(s, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 1 && l <= 4;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCMonth((A - 1) * 3, 1), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), CM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 120), ge(be(a), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "q":
        case "qq":
          return Ut(l.length, s);
        case "qo":
          return A.ordinalNumber(s, {
            unit: "quarter"
          });
        case "qqq":
          return A.quarter(s, {
            width: "abbreviated",
            context: "standalone"
          }) || A.quarter(s, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return A.quarter(s, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return A.quarter(s, {
            width: "wide",
            context: "standalone"
          }) || A.quarter(s, {
            width: "abbreviated",
            context: "standalone"
          }) || A.quarter(s, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 1 && l <= 4;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCMonth((A - 1) * 3, 1), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), DM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), ge(be(a), "priority", 110), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      var f = function(d) {
        return d - 1;
      };
      switch (l) {
        case "M":
          return Kt(Ot(Gt.month, s), f);
        case "MM":
          return Kt(Ut(2, s), f);
        case "Mo":
          return Kt(A.ordinalNumber(s, {
            unit: "month"
          }), f);
        case "MMM":
          return A.month(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.month(s, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return A.month(s, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return A.month(s, {
            width: "wide",
            context: "formatting"
          }) || A.month(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.month(s, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 11;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCMonth(A, 1), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), RM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 110), ge(be(a), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      var f = function(d) {
        return d - 1;
      };
      switch (l) {
        case "L":
          return Kt(Ot(Gt.month, s), f);
        case "LL":
          return Kt(Ut(2, s), f);
        case "Lo":
          return Kt(A.ordinalNumber(s, {
            unit: "month"
          }), f);
        case "LLL":
          return A.month(s, {
            width: "abbreviated",
            context: "standalone"
          }) || A.month(s, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return A.month(s, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return A.month(s, {
            width: "wide",
            context: "standalone"
          }) || A.month(s, {
            width: "abbreviated",
            context: "standalone"
          }) || A.month(s, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 11;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCMonth(A, 1), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht);
function jM(e, n, t) {
  R(2, arguments);
  var a = L(e), s = he(n), l = Sm(a, t) - s;
  return a.setUTCDate(a.getUTCDate() - l * 7), a;
}
var OM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 100), ge(be(a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "w":
          return Ot(Gt.week, s);
        case "wo":
          return A.ordinalNumber(s, {
            unit: "week"
          });
        default:
          return Ut(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 1 && l <= 53;
    }
  }, {
    key: "set",
    value: function(s, l, A, f) {
      return Na(jM(s, A, f), f);
    }
  }]), t;
}(ht);
function QM(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n), s = Mm(t) - a;
  return t.setUTCDate(t.getUTCDate() - s * 7), t;
}
var NM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 100), ge(be(a), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "I":
          return Ot(Gt.week, s);
        case "Io":
          return A.ordinalNumber(s, {
            unit: "week"
          });
        default:
          return Ut(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 1 && l <= 53;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return Os(QM(s, A));
    }
  }]), t;
}(ht), HM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], BM = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], UM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 90), ge(be(a), "subPriority", 1), ge(be(a), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "d":
          return Ot(Gt.date, s);
        case "do":
          return A.ordinalNumber(s, {
            unit: "date"
          });
        default:
          return Ut(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      var A = s.getUTCFullYear(), f = Gm(A), u = s.getUTCMonth();
      return f ? l >= 1 && l <= BM[u] : l >= 1 && l <= HM[u];
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCDate(A), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), LM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 90), ge(be(a), "subpriority", 1), ge(be(a), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "D":
        case "DD":
          return Ot(Gt.dayOfYear, s);
        case "Do":
          return A.ordinalNumber(s, {
            unit: "date"
          });
        default:
          return Ut(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      var A = s.getUTCFullYear(), f = Gm(A);
      return f ? l >= 1 && l <= 366 : l >= 1 && l <= 365;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCMonth(0, A), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht);
function If(e, n, t) {
  var a, s, l, A, f, u, d, h;
  R(2, arguments);
  var m = _t(), v = he((a = (s = (l = (A = t == null ? void 0 : t.weekStartsOn) !== null && A !== void 0 ? A : t == null || (f = t.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && l !== void 0 ? l : m.weekStartsOn) !== null && s !== void 0 ? s : (d = m.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!(v >= 0 && v <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var k = L(e), b = he(n), y = k.getUTCDay(), S = b % 7, T = (S + 7) % 7, O = (T < v ? 7 : 0) + b - y;
  return k.setUTCDate(k.getUTCDate() + O), k;
}
var PM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 90), ge(be(a), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "E":
        case "EE":
        case "EEE":
          return A.day(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return A.day(s, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return A.day(s, {
            width: "wide",
            context: "formatting"
          }) || A.day(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 6;
    }
  }, {
    key: "set",
    value: function(s, l, A, f) {
      return s = If(s, A, f), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), zM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 90), ge(be(a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A, f) {
      var u = function(h) {
        var m = Math.floor((h - 1) / 7) * 7;
        return (h + f.weekStartsOn + 6) % 7 + m;
      };
      switch (l) {
        case "e":
        case "ee":
          return Kt(Ut(l.length, s), u);
        case "eo":
          return Kt(A.ordinalNumber(s, {
            unit: "day"
          }), u);
        case "eee":
          return A.day(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return A.day(s, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return A.day(s, {
            width: "wide",
            context: "formatting"
          }) || A.day(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 6;
    }
  }, {
    key: "set",
    value: function(s, l, A, f) {
      return s = If(s, A, f), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), YM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 90), ge(be(a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A, f) {
      var u = function(h) {
        var m = Math.floor((h - 1) / 7) * 7;
        return (h + f.weekStartsOn + 6) % 7 + m;
      };
      switch (l) {
        case "c":
        case "cc":
          return Kt(Ut(l.length, s), u);
        case "co":
          return Kt(A.ordinalNumber(s, {
            unit: "day"
          }), u);
        case "ccc":
          return A.day(s, {
            width: "abbreviated",
            context: "standalone"
          }) || A.day(s, {
            width: "short",
            context: "standalone"
          }) || A.day(s, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return A.day(s, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return A.day(s, {
            width: "short",
            context: "standalone"
          }) || A.day(s, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return A.day(s, {
            width: "wide",
            context: "standalone"
          }) || A.day(s, {
            width: "abbreviated",
            context: "standalone"
          }) || A.day(s, {
            width: "short",
            context: "standalone"
          }) || A.day(s, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 6;
    }
  }, {
    key: "set",
    value: function(s, l, A, f) {
      return s = If(s, A, f), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht);
function FM(e, n) {
  R(2, arguments);
  var t = he(n);
  t % 7 === 0 && (t = t - 7);
  var a = 1, s = L(e), l = s.getUTCDay(), A = t % 7, f = (A + 7) % 7, u = (f < a ? 7 : 0) + t - l;
  return s.setUTCDate(s.getUTCDate() + u), s;
}
var ZM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 90), ge(be(a), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      var f = function(d) {
        return d === 0 ? 7 : d;
      };
      switch (l) {
        case "i":
        case "ii":
          return Ut(l.length, s);
        case "io":
          return A.ordinalNumber(s, {
            unit: "day"
          });
        case "iii":
          return Kt(A.day(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          }), f);
        case "iiiii":
          return Kt(A.day(s, {
            width: "narrow",
            context: "formatting"
          }), f);
        case "iiiiii":
          return Kt(A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          }), f);
        case "iiii":
        default:
          return Kt(A.day(s, {
            width: "wide",
            context: "formatting"
          }) || A.day(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          }), f);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 1 && l <= 7;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s = FM(s, A), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), GM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 80), ge(be(a), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "a":
        case "aa":
        case "aaa":
          return A.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return A.dayPeriod(s, {
            width: "wide",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCHours(Sf(A), 0, 0, 0), s;
    }
  }]), t;
}(ht), KM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 80), ge(be(a), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "b":
        case "bb":
        case "bbb":
          return A.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return A.dayPeriod(s, {
            width: "wide",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCHours(Sf(A), 0, 0, 0), s;
    }
  }]), t;
}(ht), XM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 80), ge(be(a), "incompatibleTokens", ["a", "b", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "B":
        case "BB":
        case "BBB":
          return A.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return A.dayPeriod(s, {
            width: "wide",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCHours(Sf(A), 0, 0, 0), s;
    }
  }]), t;
}(ht), WM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 70), ge(be(a), "incompatibleTokens", ["H", "K", "k", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "h":
          return Ot(Gt.hour12h, s);
        case "ho":
          return A.ordinalNumber(s, {
            unit: "hour"
          });
        default:
          return Ut(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 1 && l <= 12;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      var f = s.getUTCHours() >= 12;
      return f && A < 12 ? s.setUTCHours(A + 12, 0, 0, 0) : !f && A === 12 ? s.setUTCHours(0, 0, 0, 0) : s.setUTCHours(A, 0, 0, 0), s;
    }
  }]), t;
}(ht), qM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 70), ge(be(a), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "H":
          return Ot(Gt.hour23h, s);
        case "Ho":
          return A.ordinalNumber(s, {
            unit: "hour"
          });
        default:
          return Ut(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 23;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCHours(A, 0, 0, 0), s;
    }
  }]), t;
}(ht), VM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 70), ge(be(a), "incompatibleTokens", ["h", "H", "k", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "K":
          return Ot(Gt.hour11h, s);
        case "Ko":
          return A.ordinalNumber(s, {
            unit: "hour"
          });
        default:
          return Ut(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 11;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      var f = s.getUTCHours() >= 12;
      return f && A < 12 ? s.setUTCHours(A + 12, 0, 0, 0) : s.setUTCHours(A, 0, 0, 0), s;
    }
  }]), t;
}(ht), _M = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 70), ge(be(a), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "k":
          return Ot(Gt.hour24h, s);
        case "ko":
          return A.ordinalNumber(s, {
            unit: "hour"
          });
        default:
          return Ut(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 1 && l <= 24;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      var f = A <= 24 ? A % 24 : A;
      return s.setUTCHours(f, 0, 0, 0), s;
    }
  }]), t;
}(ht), $M = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 60), ge(be(a), "incompatibleTokens", ["t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "m":
          return Ot(Gt.minute, s);
        case "mo":
          return A.ordinalNumber(s, {
            unit: "minute"
          });
        default:
          return Ut(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 59;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCMinutes(A, 0, 0), s;
    }
  }]), t;
}(ht), eS = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 50), ge(be(a), "incompatibleTokens", ["t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "s":
          return Ot(Gt.second, s);
        case "so":
          return A.ordinalNumber(s, {
            unit: "second"
          });
        default:
          return Ut(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 59;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCSeconds(A, 0), s;
    }
  }]), t;
}(ht), tS = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 30), ge(be(a), "incompatibleTokens", ["t", "T"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l) {
      var A = function(u) {
        return Math.floor(u * Math.pow(10, -l.length + 3));
      };
      return Kt(Ut(l.length, s), A);
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCMilliseconds(A), s;
    }
  }]), t;
}(ht), nS = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 10), ge(be(a), "incompatibleTokens", ["t", "T", "x"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l) {
      switch (l) {
        case "X":
          return mr(pr.basicOptionalMinutes, s);
        case "XX":
          return mr(pr.basic, s);
        case "XXXX":
          return mr(pr.basicOptionalSeconds, s);
        case "XXXXX":
          return mr(pr.extendedOptionalSeconds, s);
        case "XXX":
        default:
          return mr(pr.extended, s);
      }
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return l.timestampIsSet ? s : new Date(s.getTime() - A);
    }
  }]), t;
}(ht), rS = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 10), ge(be(a), "incompatibleTokens", ["t", "T", "X"]), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s, l) {
      switch (l) {
        case "x":
          return mr(pr.basicOptionalMinutes, s);
        case "xx":
          return mr(pr.basic, s);
        case "xxxx":
          return mr(pr.basicOptionalSeconds, s);
        case "xxxxx":
          return mr(pr.extendedOptionalSeconds, s);
        case "xxx":
        default:
          return mr(pr.extended, s);
      }
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return l.timestampIsSet ? s : new Date(s.getTime() - A);
    }
  }]), t;
}(ht), aS = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 40), ge(be(a), "incompatibleTokens", "*"), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s) {
      return Fm(s);
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return [new Date(A * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), t;
}(ht), sS = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    $e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(be(a), "priority", 20), ge(be(a), "incompatibleTokens", "*"), a;
  }
  return et(t, [{
    key: "parse",
    value: function(s) {
      return Fm(s);
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return [new Date(A), {
        timestampIsSet: !0
      }];
    }
  }]), t;
}(ht), iS = {
  G: new EM(),
  y: new MM(),
  Y: new SM(),
  R: new IM(),
  u: new JM(),
  Q: new TM(),
  q: new CM(),
  M: new DM(),
  L: new RM(),
  w: new OM(),
  I: new NM(),
  d: new UM(),
  D: new LM(),
  E: new PM(),
  e: new zM(),
  c: new YM(),
  i: new ZM(),
  a: new GM(),
  b: new KM(),
  B: new XM(),
  h: new WM(),
  H: new qM(),
  K: new VM(),
  k: new _M(),
  m: new $M(),
  s: new eS(),
  S: new tS(),
  X: new nS(),
  x: new rS(),
  t: new aS(),
  T: new sS()
}, oS = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, lS = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, AS = /^'([^]*?)'?$/, cS = /''/g, uS = /\S/, fS = /[a-zA-Z]/;
function Km(e, n, t, a) {
  var s, l, A, f, u, d, h, m, v, k, b, y, S, T, O, B, K, _;
  R(3, arguments);
  var F = String(e), ee = String(n), oe = _t(), re = (s = (l = a == null ? void 0 : a.locale) !== null && l !== void 0 ? l : oe.locale) !== null && s !== void 0 ? s : Ps;
  if (!re.match)
    throw new RangeError("locale must contain match property");
  var $ = he((A = (f = (u = (d = a == null ? void 0 : a.firstWeekContainsDate) !== null && d !== void 0 ? d : a == null || (h = a.locale) === null || h === void 0 || (m = h.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && u !== void 0 ? u : oe.firstWeekContainsDate) !== null && f !== void 0 ? f : (v = oe.locale) === null || v === void 0 || (k = v.options) === null || k === void 0 ? void 0 : k.firstWeekContainsDate) !== null && A !== void 0 ? A : 1);
  if (!($ >= 1 && $ <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var ae = he((b = (y = (S = (T = a == null ? void 0 : a.weekStartsOn) !== null && T !== void 0 ? T : a == null || (O = a.locale) === null || O === void 0 || (B = O.options) === null || B === void 0 ? void 0 : B.weekStartsOn) !== null && S !== void 0 ? S : oe.weekStartsOn) !== null && y !== void 0 ? y : (K = oe.locale) === null || K === void 0 || (_ = K.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && b !== void 0 ? b : 0);
  if (!(ae >= 0 && ae <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (ee === "")
    return F === "" ? L(t) : /* @__PURE__ */ new Date(NaN);
  var Z = {
    firstWeekContainsDate: $,
    weekStartsOn: ae,
    locale: re
  }, N = [new yM()], Y = ee.match(lS).map(function(Ve) {
    var Le = Ve[0];
    if (Le in ju) {
      var te = ju[Le];
      return te(Ve, re.formatLong);
    }
    return Ve;
  }).join("").match(oS), W = [], H = tp(Y), G;
  try {
    var pe = function() {
      var Le = G.value;
      !(a != null && a.useAdditionalWeekYearTokens) && Tm(Le) && Wl(Le, ee, e), !(a != null && a.useAdditionalDayOfYearTokens) && Jm(Le) && Wl(Le, ee, e);
      var te = Le[0], Ee = iS[te];
      if (Ee) {
        var Ce = Ee.incompatibleTokens;
        if (Array.isArray(Ce)) {
          var Xe = W.find(function(Pt) {
            return Ce.includes(Pt.token) || Pt.token === te;
          });
          if (Xe)
            throw new RangeError("The format string mustn't contain `".concat(Xe.fullToken, "` and `").concat(Le, "` at the same time"));
        } else if (Ee.incompatibleTokens === "*" && W.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(Le, "` and any other token at the same time"));
        W.push({
          token: te,
          fullToken: Le
        });
        var wt = Ee.run(F, Le, re.match, Z);
        if (!wt)
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        N.push(wt.setter), F = wt.rest;
      } else {
        if (te.match(fS))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + te + "`");
        if (Le === "''" ? Le = "'" : te === "'" && (Le = dS(Le)), F.indexOf(Le) === 0)
          F = F.slice(Le.length);
        else
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
      }
    };
    for (H.s(); !(G = H.n()).done; ) {
      var ke = pe();
      if (Pr(ke) === "object")
        return ke.v;
    }
  } catch (Ve) {
    H.e(Ve);
  } finally {
    H.f();
  }
  if (F.length > 0 && uS.test(F))
    return /* @__PURE__ */ new Date(NaN);
  var X = N.map(function(Ve) {
    return Ve.priority;
  }).sort(function(Ve, Le) {
    return Le - Ve;
  }).filter(function(Ve, Le, te) {
    return te.indexOf(Ve) === Le;
  }).map(function(Ve) {
    return N.filter(function(Le) {
      return Le.priority === Ve;
    }).sort(function(Le, te) {
      return te.subPriority - Le.subPriority;
    });
  }).map(function(Ve) {
    return Ve[0];
  }), Ie = L(t);
  if (isNaN(Ie.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var Me = js(Ie, Mn(Ie)), ye = {}, de = tp(X), Ne;
  try {
    for (de.s(); !(Ne = de.n()).done; ) {
      var Et = Ne.value;
      if (!Et.validate(Me, Z))
        return /* @__PURE__ */ new Date(NaN);
      var Xt = Et.set(Me, ye, Z);
      Array.isArray(Xt) ? (Me = Xt[0], io(ye, Xt[1])) : Me = Xt;
    }
  } catch (Ve) {
    de.e(Ve);
  } finally {
    de.f();
  }
  return Me;
}
function dS(e) {
  return e.match(AS)[1].replace(cS, "'");
}
function hS(e, n, t) {
  return R(2, arguments), Lr(Km(e, n, /* @__PURE__ */ new Date(), t));
}
function pS(e) {
  return R(1, arguments), L(e).getDay() === 1;
}
function mS(e) {
  return R(1, arguments), L(e).getTime() < Date.now();
}
function Ou(e) {
  R(1, arguments);
  var n = L(e);
  return n.setMinutes(0, 0, 0), n;
}
function Xm(e, n) {
  R(2, arguments);
  var t = Ou(e), a = Ou(n);
  return t.getTime() === a.getTime();
}
function Jf(e, n, t) {
  R(2, arguments);
  var a = Wn(e, t), s = Wn(n, t);
  return a.getTime() === s.getTime();
}
function Wm(e, n) {
  return R(2, arguments), Jf(e, n, {
    weekStartsOn: 1
  });
}
function gS(e, n) {
  R(2, arguments);
  var t = ca(e), a = ca(n);
  return t.getTime() === a.getTime();
}
function qm(e, n) {
  R(2, arguments);
  var t = Xl(e), a = Xl(n);
  return t.getTime() === a.getTime();
}
function Vm(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n);
  return t.getFullYear() === a.getFullYear() && t.getMonth() === a.getMonth();
}
function _m(e, n) {
  R(2, arguments);
  var t = Wi(e), a = Wi(n);
  return t.getTime() === a.getTime();
}
function Qu(e) {
  R(1, arguments);
  var n = L(e);
  return n.setMilliseconds(0), n;
}
function $m(e, n) {
  R(2, arguments);
  var t = Qu(e), a = Qu(n);
  return t.getTime() === a.getTime();
}
function eg(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n);
  return t.getFullYear() === a.getFullYear();
}
function vS(e) {
  return R(1, arguments), Xm(Date.now(), e);
}
function wS(e) {
  return R(1, arguments), Wm(e, Date.now());
}
function xS(e) {
  return R(1, arguments), qm(Date.now(), e);
}
function kS(e) {
  return R(1, arguments), Vm(Date.now(), e);
}
function bS(e) {
  return R(1, arguments), _m(Date.now(), e);
}
function yS(e) {
  return R(1, arguments), $m(Date.now(), e);
}
function ES(e, n) {
  return R(1, arguments), Jf(e, Date.now(), n);
}
function MS(e) {
  return R(1, arguments), eg(e, Date.now());
}
function SS(e) {
  return R(1, arguments), L(e).getDay() === 4;
}
function IS(e) {
  return R(1, arguments), so(e, Date.now());
}
function JS(e) {
  return R(1, arguments), so(e, xr(Date.now(), 1));
}
function TS(e) {
  return R(1, arguments), L(e).getDay() === 2;
}
function CS(e) {
  return R(1, arguments), L(e).getDay() === 3;
}
function DS(e, n) {
  R(2, arguments);
  var t = L(e).getTime(), a = L(n.start).getTime(), s = L(n.end).getTime();
  if (!(a <= s))
    throw new RangeError("Invalid interval");
  return t >= a && t <= s;
}
function mA(e, n) {
  R(2, arguments);
  var t = he(n);
  return xr(e, -t);
}
function RS(e) {
  return R(1, arguments), so(e, mA(Date.now(), 1));
}
function jS(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear(), a = 9 + Math.floor(t / 10) * 10;
  return n.setFullYear(a + 1, 0, 0), n.setHours(0, 0, 0, 0), n;
}
function tg(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = _t(), m = he((t = (a = (s = (l = n == null ? void 0 : n.weekStartsOn) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : h.weekStartsOn) !== null && a !== void 0 ? a : (u = h.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6");
  var v = L(e), k = v.getDay(), b = (k < m ? -7 : 0) + 6 - (k - m);
  return v.setHours(0, 0, 0, 0), v.setDate(v.getDate() + b), v;
}
function OS(e) {
  return R(1, arguments), tg(e, {
    weekStartsOn: 1
  });
}
function QS(e) {
  R(1, arguments);
  var n = Qa(e), t = /* @__PURE__ */ new Date(0);
  t.setFullYear(n + 1, 0, 4), t.setHours(0, 0, 0, 0);
  var a = Ur(t);
  return a.setDate(a.getDate() - 1), a;
}
function NS(e) {
  R(1, arguments);
  var n = L(e), t = n.getMonth(), a = t - t % 3 + 3;
  return n.setMonth(a, 0), n.setHours(0, 0, 0, 0), n;
}
function HS(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear();
  return n.setFullYear(t + 1, 0, 0), n.setHours(0, 0, 0, 0), n;
}
var BS = /(\w)\1*|''|'(''|[^'])+('|$)|./g, US = /^'([^]*?)'?$/, LS = /''/g, PS = /[a-zA-Z]/;
function zS(e, n) {
  R(2, arguments);
  var t = L(e);
  if (!Lr(t))
    throw new RangeError("Invalid time value");
  var a = Mn(t), s = js(t, a), l = n.match(BS);
  if (!l)
    return "";
  var A = l.map(function(f) {
    if (f === "''")
      return "'";
    var u = f[0];
    if (u === "'")
      return YS(f);
    var d = Rr[u];
    if (d)
      return d(s, f);
    if (u.match(PS))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + u + "`");
    return f;
  }).join("");
  return A;
}
function YS(e) {
  var n = e.match(US);
  return n ? n[1].replace(LS, "'") : e;
}
var np = 365.2425;
function FS(e) {
  var n = e.years, t = e.months, a = e.weeks, s = e.days, l = e.hours, A = e.minutes, f = e.seconds;
  R(1, arguments);
  var u = 0;
  n && (u += n * np), t && (u += t * (np / 12)), a && (u += a * 7), s && (u += s);
  var d = u * 24 * 60 * 60;
  return l && (d += l * 60 * 60), A && (d += A * 60), f && (d += f), Math.round(d * 1e3);
}
function ZS(e) {
  R(1, arguments);
  var n = e / Pa;
  return Math.floor(n);
}
function GS(e) {
  R(1, arguments);
  var n = e / La;
  return Math.floor(n);
}
function KS(e) {
  R(1, arguments);
  var n = e / AA;
  return Math.floor(n);
}
function XS(e) {
  R(1, arguments);
  var n = e / hf;
  return Math.floor(n);
}
function WS(e) {
  return R(1, arguments), Math.floor(e * La);
}
function qS(e) {
  return R(1, arguments), Math.floor(e * cA);
}
function VS(e) {
  R(1, arguments);
  var n = e / pf;
  return Math.floor(n);
}
function _S(e) {
  R(1, arguments);
  var n = e / mf;
  return Math.floor(n);
}
function da(e, n) {
  R(2, arguments);
  var t = n - pA(e);
  return t <= 0 && (t += 7), xr(e, t);
}
function $S(e) {
  return R(1, arguments), da(e, 5);
}
function eI(e) {
  return R(1, arguments), da(e, 1);
}
function tI(e) {
  return R(1, arguments), da(e, 6);
}
function nI(e) {
  return R(1, arguments), da(e, 0);
}
function rI(e) {
  return R(1, arguments), da(e, 4);
}
function aI(e) {
  return R(1, arguments), da(e, 2);
}
function sI(e) {
  return R(1, arguments), da(e, 3);
}
function iI(e, n) {
  var t;
  R(1, arguments);
  var a = he((t = n == null ? void 0 : n.additionalDigits) !== null && t !== void 0 ? t : 2);
  if (a !== 2 && a !== 1 && a !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var s = cI(e), l;
  if (s.date) {
    var A = uI(s.date, a);
    l = fI(A.restDateString, A.year);
  }
  if (!l || isNaN(l.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var f = l.getTime(), u = 0, d;
  if (s.time && (u = dI(s.time), isNaN(u)))
    return /* @__PURE__ */ new Date(NaN);
  if (s.timezone) {
    if (d = hI(s.timezone), isNaN(d))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var h = new Date(f + u), m = /* @__PURE__ */ new Date(0);
    return m.setFullYear(h.getUTCFullYear(), h.getUTCMonth(), h.getUTCDate()), m.setHours(h.getUTCHours(), h.getUTCMinutes(), h.getUTCSeconds(), h.getUTCMilliseconds()), m;
  }
  return new Date(f + u + d);
}
var Ql = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, oI = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, lI = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, AI = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function cI(e) {
  var n = {}, t = e.split(Ql.dateTimeDelimiter), a;
  if (t.length > 2)
    return n;
  if (/:/.test(t[0]) ? a = t[0] : (n.date = t[0], a = t[1], Ql.timeZoneDelimiter.test(n.date) && (n.date = e.split(Ql.timeZoneDelimiter)[0], a = e.substr(n.date.length, e.length))), a) {
    var s = Ql.timezone.exec(a);
    s ? (n.time = a.replace(s[1], ""), n.timezone = s[1]) : n.time = a;
  }
  return n;
}
function uI(e, n) {
  var t = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + n) + "})|(\\d{2}|[+-]\\d{" + (2 + n) + "})$)"), a = e.match(t);
  if (!a)
    return {
      year: NaN,
      restDateString: ""
    };
  var s = a[1] ? parseInt(a[1]) : null, l = a[2] ? parseInt(a[2]) : null;
  return {
    year: l === null ? s : l * 100,
    restDateString: e.slice((a[1] || a[2]).length)
  };
}
function fI(e, n) {
  if (n === null)
    return /* @__PURE__ */ new Date(NaN);
  var t = e.match(oI);
  if (!t)
    return /* @__PURE__ */ new Date(NaN);
  var a = !!t[4], s = Oi(t[1]), l = Oi(t[2]) - 1, A = Oi(t[3]), f = Oi(t[4]), u = Oi(t[5]) - 1;
  if (a)
    return wI(n, f, u) ? pI(n, f, u) : /* @__PURE__ */ new Date(NaN);
  var d = /* @__PURE__ */ new Date(0);
  return !gI(n, l, A) || !vI(n, s) ? /* @__PURE__ */ new Date(NaN) : (d.setUTCFullYear(n, l, Math.max(s, A)), d);
}
function Oi(e) {
  return e ? parseInt(e) : 1;
}
function dI(e) {
  var n = e.match(lI);
  if (!n)
    return NaN;
  var t = gu(n[1]), a = gu(n[2]), s = gu(n[3]);
  return xI(t, a, s) ? t * Pa + a * La + s * 1e3 : NaN;
}
function gu(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function hI(e) {
  if (e === "Z")
    return 0;
  var n = e.match(AI);
  if (!n)
    return 0;
  var t = n[1] === "+" ? -1 : 1, a = parseInt(n[2]), s = n[3] && parseInt(n[3]) || 0;
  return kI(a, s) ? t * (a * Pa + s * La) : NaN;
}
function pI(e, n, t) {
  var a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(e, 0, 4);
  var s = a.getUTCDay() || 7, l = (n - 1) * 7 + t + 1 - s;
  return a.setUTCDate(a.getUTCDate() + l), a;
}
var mI = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ng(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function gI(e, n, t) {
  return n >= 0 && n <= 11 && t >= 1 && t <= (mI[n] || (ng(e) ? 29 : 28));
}
function vI(e, n) {
  return n >= 1 && n <= (ng(e) ? 366 : 365);
}
function wI(e, n, t) {
  return n >= 1 && n <= 53 && t >= 0 && t <= 6;
}
function xI(e, n, t) {
  return e === 24 ? n === 0 && t === 0 : t >= 0 && t < 60 && n >= 0 && n < 60 && e >= 0 && e < 25;
}
function kI(e, n) {
  return n >= 0 && n <= 59;
}
function bI(e) {
  if (R(1, arguments), typeof e == "string") {
    var n = e.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);
    return n ? new Date(Date.UTC(+n[1], +n[2] - 1, +n[3], +n[4] - (+n[9] || 0) * (n[8] == "-" ? -1 : 1), +n[5] - (+n[10] || 0) * (n[8] == "-" ? -1 : 1), +n[6], +((n[7] || "0") + "00").substring(0, 3))) : /* @__PURE__ */ new Date(NaN);
  }
  return L(e);
}
function ha(e, n) {
  R(2, arguments);
  var t = pA(e) - n;
  return t <= 0 && (t += 7), mA(e, t);
}
function yI(e) {
  return R(1, arguments), ha(e, 5);
}
function EI(e) {
  return R(1, arguments), ha(e, 1);
}
function MI(e) {
  return R(1, arguments), ha(e, 6);
}
function SI(e) {
  return R(1, arguments), ha(e, 0);
}
function II(e) {
  return R(1, arguments), ha(e, 4);
}
function JI(e) {
  return R(1, arguments), ha(e, 2);
}
function TI(e) {
  return R(1, arguments), ha(e, 3);
}
function CI(e) {
  return R(1, arguments), Math.floor(e * pf);
}
function DI(e) {
  R(1, arguments);
  var n = e / gf;
  return Math.floor(n);
}
function RI(e, n) {
  var t;
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only none provided present");
  var a = he((t = n == null ? void 0 : n.nearestTo) !== null && t !== void 0 ? t : 1);
  if (a < 1 || a > 30)
    throw new RangeError("`options.nearestTo` must be between 1 and 30");
  var s = L(e), l = s.getSeconds(), A = s.getMinutes() + l / 60, f = Ls(n == null ? void 0 : n.roundingMethod), u = f(A / a) * a, d = A % a, h = Math.round(d / a) * a;
  return new Date(s.getFullYear(), s.getMonth(), s.getDate(), s.getHours(), u + h);
}
function jI(e) {
  R(1, arguments);
  var n = e / ao;
  return Math.floor(n);
}
function OI(e) {
  return R(1, arguments), e * AA;
}
function QI(e) {
  R(1, arguments);
  var n = e / cA;
  return Math.floor(n);
}
function Tf(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n), s = t.getFullYear(), l = t.getDate(), A = /* @__PURE__ */ new Date(0);
  A.setFullYear(s, a, 15), A.setHours(0, 0, 0, 0);
  var f = Qm(A);
  return t.setMonth(a, Math.min(l, f)), t;
}
function NI(e, n) {
  if (R(2, arguments), Pr(n) !== "object" || n === null)
    throw new RangeError("values parameter must be an object");
  var t = L(e);
  return isNaN(t.getTime()) ? /* @__PURE__ */ new Date(NaN) : (n.year != null && t.setFullYear(n.year), n.month != null && (t = Tf(t, n.month)), n.date != null && t.setDate(he(n.date)), n.hours != null && t.setHours(he(n.hours)), n.minutes != null && t.setMinutes(he(n.minutes)), n.seconds != null && t.setSeconds(he(n.seconds)), n.milliseconds != null && t.setMilliseconds(he(n.milliseconds)), t);
}
function HI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return t.setDate(a), t;
}
function BI(e, n, t) {
  var a, s, l, A, f, u, d, h;
  R(2, arguments);
  var m = _t(), v = he((a = (s = (l = (A = t == null ? void 0 : t.weekStartsOn) !== null && A !== void 0 ? A : t == null || (f = t.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && l !== void 0 ? l : m.weekStartsOn) !== null && s !== void 0 ? s : (d = m.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!(v >= 0 && v <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var k = L(e), b = he(n), y = k.getDay(), S = b % 7, T = (S + 7) % 7, O = 7 - v, B = b < 0 || b > 6 ? b - (y + O) % 7 : (T + O) % 7 - (y + O) % 7;
  return xr(k, B);
}
function UI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return t.setMonth(0), t.setDate(a), t;
}
function LI(e) {
  R(1, arguments);
  var n = {}, t = _t();
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
  for (var s in e)
    Object.prototype.hasOwnProperty.call(e, s) && (e[s] === void 0 ? delete n[s] : n[s] = e[s]);
  zE(n);
}
function PI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return t.setHours(a), t;
}
function zI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n), s = Hm(t), l = a - s;
  return xr(t, l);
}
function YI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n), s = Bm(t) - a;
  return t.setDate(t.getDate() - s * 7), t;
}
function FI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return t.setMilliseconds(a), t;
}
function ZI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return t.setMinutes(a), t;
}
function GI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n), s = Math.floor(t.getMonth() / 3) + 1, l = a - s;
  return Tf(t, t.getMonth() + l * 3);
}
function KI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return t.setSeconds(a), t;
}
function XI(e, n, t) {
  R(2, arguments);
  var a = L(e), s = he(n), l = Pm(a, t) - s;
  return a.setDate(a.getDate() - l * 7), a;
}
function WI(e, n, t) {
  var a, s, l, A, f, u, d, h;
  R(2, arguments);
  var m = _t(), v = he((a = (s = (l = (A = t == null ? void 0 : t.firstWeekContainsDate) !== null && A !== void 0 ? A : t == null || (f = t.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && l !== void 0 ? l : m.firstWeekContainsDate) !== null && s !== void 0 ? s : (d = m.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && a !== void 0 ? a : 1), k = L(e), b = he(n), y = vr(k, Vl(k, t)), S = /* @__PURE__ */ new Date(0);
  return S.setFullYear(b, 0, v), S.setHours(0, 0, 0, 0), k = Vl(S, t), k.setDate(k.getDate() + y), k;
}
function qI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return isNaN(t.getTime()) ? /* @__PURE__ */ new Date(NaN) : (t.setFullYear(a), t);
}
function VI(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear(), a = Math.floor(t / 10) * 10;
  return n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
}
function _I() {
  return Rs(Date.now());
}
function $I() {
  var e = /* @__PURE__ */ new Date(), n = e.getFullYear(), t = e.getMonth(), a = e.getDate(), s = /* @__PURE__ */ new Date(0);
  return s.setFullYear(n, t, a + 1), s.setHours(0, 0, 0, 0), s;
}
function e5() {
  var e = /* @__PURE__ */ new Date(), n = e.getFullYear(), t = e.getMonth(), a = e.getDate(), s = /* @__PURE__ */ new Date(0);
  return s.setFullYear(n, t, a - 1), s.setHours(0, 0, 0, 0), s;
}
function rg(e, n) {
  R(2, arguments);
  var t = he(n);
  return no(e, -t);
}
function t5(e, n) {
  if (R(2, arguments), !n || Pr(n) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var t = n.years ? he(n.years) : 0, a = n.months ? he(n.months) : 0, s = n.weeks ? he(n.weeks) : 0, l = n.days ? he(n.days) : 0, A = n.hours ? he(n.hours) : 0, f = n.minutes ? he(n.minutes) : 0, u = n.seconds ? he(n.seconds) : 0, d = rg(e, a + t * 12), h = mA(d, l + s * 7), m = f + A * 60, v = u + m * 60, k = v * 1e3, b = new Date(h.getTime() - k);
  return b;
}
function n5(e, n) {
  R(2, arguments);
  var t = he(n);
  return am(e, -t);
}
function r5(e, n) {
  R(2, arguments);
  var t = he(n);
  return cf(e, -t);
}
function a5(e, n) {
  R(2, arguments);
  var t = he(n);
  return uf(e, -t);
}
function s5(e, n) {
  R(2, arguments);
  var t = he(n);
  return ff(e, -t);
}
function i5(e, n) {
  R(2, arguments);
  var t = he(n);
  return lm(e, -t);
}
function o5(e, n) {
  R(2, arguments);
  var t = he(n);
  return lA(e, -t);
}
function l5(e, n) {
  R(2, arguments);
  var t = he(n);
  return Am(e, -t);
}
function A5(e) {
  return R(1, arguments), Math.floor(e * df);
}
function c5(e) {
  return R(1, arguments), Math.floor(e * mf);
}
function u5(e) {
  return R(1, arguments), Math.floor(e * gf);
}
const f5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: Ms,
  addBusinessDays: am,
  addDays: xr,
  addHours: cf,
  addISOWeekYears: om,
  addMilliseconds: ro,
  addMinutes: uf,
  addMonths: no,
  addQuarters: ff,
  addSeconds: lm,
  addWeeks: lA,
  addYears: Am,
  areIntervalsOverlapping: ZE,
  clamp: GE,
  closestIndexTo: KE,
  closestTo: XE,
  compareAsc: ar,
  compareDesc: WE,
  daysInWeek: df,
  daysInYear: fm,
  daysToWeeks: VE,
  differenceInBusinessDays: _E,
  differenceInCalendarDays: vr,
  differenceInCalendarISOWeekYears: gm,
  differenceInCalendarISOWeeks: e2,
  differenceInCalendarMonths: Fl,
  differenceInCalendarQuarters: Bl,
  differenceInCalendarWeeks: Zl,
  differenceInCalendarYears: zi,
  differenceInDays: xf,
  differenceInHours: Gl,
  differenceInISOWeekYears: r2,
  differenceInMilliseconds: fA,
  differenceInMinutes: Kl,
  differenceInMonths: dA,
  differenceInQuarters: a2,
  differenceInSeconds: Js,
  differenceInWeeks: s2,
  differenceInYears: xm,
  eachDayOfInterval: km,
  eachHourOfInterval: i2,
  eachMinuteOfInterval: o2,
  eachMonthOfInterval: l2,
  eachQuarterOfInterval: A2,
  eachWeekOfInterval: c2,
  eachWeekendOfInterval: yf,
  eachWeekendOfMonth: u2,
  eachWeekendOfYear: f2,
  eachYearOfInterval: d2,
  endOfDay: kf,
  endOfDecade: h2,
  endOfHour: p2,
  endOfISOWeek: m2,
  endOfISOWeekYear: g2,
  endOfMinute: v2,
  endOfMonth: bf,
  endOfQuarter: w2,
  endOfSecond: x2,
  endOfToday: k2,
  endOfTomorrow: b2,
  endOfWeek: ym,
  endOfYear: bm,
  endOfYesterday: y2,
  format: Cm,
  formatDistance: Rm,
  formatDistanceStrict: jm,
  formatDistanceToNow: T3,
  formatDistanceToNowStrict: C3,
  formatDuration: R3,
  formatISO: j3,
  formatISO9075: O3,
  formatISODuration: Q3,
  formatRFC3339: N3,
  formatRFC7231: U3,
  formatRelative: L3,
  fromUnixTime: P3,
  getDate: Om,
  getDay: pA,
  getDayOfYear: z3,
  getDaysInMonth: Qm,
  getDaysInYear: Y3,
  getDecade: F3,
  getDefaultOptions: Z3,
  getHours: G3,
  getISODay: Hm,
  getISOWeek: Bm,
  getISOWeekYear: Qa,
  getISOWeeksInYear: W3,
  getMilliseconds: q3,
  getMinutes: V3,
  getMonth: _3,
  getOverlappingDaysInIntervals: eM,
  getQuarter: Ru,
  getSeconds: tM,
  getTime: Um,
  getUnixTime: nM,
  getWeek: Pm,
  getWeekOfMonth: aM,
  getWeekYear: Lm,
  getWeeksInMonth: sM,
  getYear: iM,
  hoursToMilliseconds: oM,
  hoursToMinutes: lM,
  hoursToSeconds: AM,
  intervalToDuration: cM,
  intlFormat: uM,
  intlFormatDistance: dM,
  isAfter: hM,
  isBefore: pM,
  isDate: mm,
  isEqual: mM,
  isExists: gM,
  isFirstDayOfMonth: vM,
  isFriday: wM,
  isFuture: xM,
  isLastDayOfMonth: wm,
  isLeapYear: Nm,
  isMatch: hS,
  isMonday: pS,
  isPast: mS,
  isSameDay: so,
  isSameHour: Xm,
  isSameISOWeek: Wm,
  isSameISOWeekYear: gS,
  isSameMinute: qm,
  isSameMonth: Vm,
  isSameQuarter: _m,
  isSameSecond: $m,
  isSameWeek: Jf,
  isSameYear: eg,
  isSaturday: rm,
  isSunday: Af,
  isThisHour: vS,
  isThisISOWeek: wS,
  isThisMinute: xS,
  isThisMonth: kS,
  isThisQuarter: bS,
  isThisSecond: yS,
  isThisWeek: ES,
  isThisYear: MS,
  isThursday: SS,
  isToday: IS,
  isTomorrow: JS,
  isTuesday: TS,
  isValid: Lr,
  isWednesday: CS,
  isWeekend: Is,
  isWithinInterval: DS,
  isYesterday: RS,
  lastDayOfDecade: jS,
  lastDayOfISOWeek: OS,
  lastDayOfISOWeekYear: QS,
  lastDayOfMonth: zm,
  lastDayOfQuarter: NS,
  lastDayOfWeek: tg,
  lastDayOfYear: HS,
  lightFormat: zS,
  max: cm,
  maxTime: dm,
  milliseconds: FS,
  millisecondsInHour: Pa,
  millisecondsInMinute: La,
  millisecondsInSecond: AA,
  millisecondsToHours: ZS,
  millisecondsToMinutes: GS,
  millisecondsToSeconds: KS,
  min: um,
  minTime: qE,
  minutesInHour: hf,
  minutesToHours: XS,
  minutesToMilliseconds: WS,
  minutesToSeconds: qS,
  monthsInQuarter: pf,
  monthsInYear: mf,
  monthsToQuarters: VS,
  monthsToYears: _S,
  nextDay: da,
  nextFriday: $S,
  nextMonday: eI,
  nextSaturday: tI,
  nextSunday: nI,
  nextThursday: rI,
  nextTuesday: aI,
  nextWednesday: sI,
  parse: Km,
  parseISO: iI,
  parseJSON: bI,
  previousDay: ha,
  previousFriday: yI,
  previousMonday: EI,
  previousSaturday: MI,
  previousSunday: SI,
  previousThursday: II,
  previousTuesday: JI,
  previousWednesday: TI,
  quartersInYear: gf,
  quartersToMonths: CI,
  quartersToYears: DI,
  roundToNearestMinutes: RI,
  secondsInDay: uA,
  secondsInHour: ao,
  secondsInMinute: cA,
  secondsInMonth: wf,
  secondsInQuarter: pm,
  secondsInWeek: hm,
  secondsInYear: vf,
  secondsToHours: jI,
  secondsToMilliseconds: OI,
  secondsToMinutes: QI,
  set: NI,
  setDate: HI,
  setDay: BI,
  setDayOfYear: UI,
  setDefaultOptions: LI,
  setHours: PI,
  setISODay: zI,
  setISOWeek: YI,
  setISOWeekYear: im,
  setMilliseconds: FI,
  setMinutes: ZI,
  setMonth: Tf,
  setQuarter: GI,
  setSeconds: KI,
  setWeek: XI,
  setWeekYear: WI,
  setYear: qI,
  startOfDay: Rs,
  startOfDecade: VI,
  startOfHour: Ou,
  startOfISOWeek: Ur,
  startOfISOWeekYear: ca,
  startOfMinute: Xl,
  startOfMonth: hA,
  startOfQuarter: Wi,
  startOfSecond: Qu,
  startOfToday: _I,
  startOfTomorrow: $I,
  startOfWeek: Wn,
  startOfWeekYear: Vl,
  startOfYear: Ef,
  startOfYesterday: e5,
  sub: t5,
  subBusinessDays: n5,
  subDays: mA,
  subHours: r5,
  subISOWeekYears: vm,
  subMilliseconds: js,
  subMinutes: a5,
  subMonths: rg,
  subQuarters: s5,
  subSeconds: i5,
  subWeeks: o5,
  subYears: l5,
  toDate: L,
  weeksToDays: A5,
  yearsToMonths: c5,
  yearsToQuarters: u5
}, Symbol.toStringTag, { value: "Module" })), d5 = /* @__PURE__ */ Rk(f5), { add: h5, sub: p5 } = d5, m5 = {
  add: h5,
  sub: p5
}, g5 = {
  d: "days",
  w: "weeks",
  M: "months",
  y: "years",
  h: "hours",
  m: "minutes",
  s: "seconds"
}, v5 = (e) => e.toISOString().replace("T", " ").replace(/\.[0-9]{3}Z/, "");
var w5 = {
  ungroup(e) {
    return e.yg ? e.yg : e;
  },
  unescape(e) {
    const n = new RegExp(`\\\\(['"])`, "g");
    return e.replace(n, "$1");
  },
  stringToRegExp(e, n) {
    let t = e.replace(/[.*+?^$(){}|[\]\\]/g, "\\$&");
    return n === "^" ? t = "^" + t : n === "$" && (t = t + "$"), new RegExp(t, "i");
  },
  relDateToAbsolute(e, n, t) {
    const a = /* @__PURE__ */ new Date(), s = m5[e](a, { [g5[t]]: n });
    return v5(s);
  },
  debug() {
  }
};
const oa = LE.parser;
oa.yy = w5;
lf.lex = (e) => {
  oa.lexer.setInput(e);
  let n = oa.lexer.lex();
  const t = [];
  for (; n !== oa.lexer.EOF; )
    t.push({ token: oa.terminals_[n], matched: oa.lexer.match }), n = oa.lexer.lex();
  return t;
};
lf.parse = (e, n) => oa.parse(e, n || {});
var ag = lf, $l = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
$l.exports;
(function(e, n) {
  (function() {
    var t, a = "4.17.21", s = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", A = "Expected a function", f = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", d = 500, h = "__lodash_placeholder__", m = 1, v = 2, k = 4, b = 1, y = 2, S = 1, T = 2, O = 4, B = 8, K = 16, _ = 32, F = 64, ee = 128, oe = 256, re = 512, $ = 30, ae = "...", Z = 800, N = 16, Y = 1, W = 2, H = 3, G = 1 / 0, pe = 9007199254740991, ke = 17976931348623157e292, X = 0 / 0, Ie = 4294967295, Me = Ie - 1, ye = Ie >>> 1, de = [
      ["ary", ee],
      ["bind", S],
      ["bindKey", T],
      ["curry", B],
      ["curryRight", K],
      ["flip", re],
      ["partial", _],
      ["partialRight", F],
      ["rearg", oe]
    ], Ne = "[object Arguments]", Et = "[object Array]", Xt = "[object AsyncFunction]", Ve = "[object Boolean]", Le = "[object Date]", te = "[object DOMException]", Ee = "[object Error]", Ce = "[object Function]", Xe = "[object GeneratorFunction]", wt = "[object Map]", Pt = "[object Number]", Dt = "[object Null]", tn = "[object Object]", Jt = "[object Promise]", kr = "[object Proxy]", rt = "[object RegExp]", Pe = "[object Set]", zr = "[object String]", Yr = "[object Symbol]", nn = "[object Undefined]", _n = "[object WeakMap]", vA = "[object WeakSet]", Fr = "[object ArrayBuffer]", Zr = "[object DataView]", sr = "[object Float32Array]", pa = "[object Float64Array]", ir = "[object Int8Array]", Fn = "[object Int16Array]", ma = "[object Int32Array]", za = "[object Uint8Array]", Ya = "[object Uint8ClampedArray]", un = "[object Uint16Array]", zs = "[object Uint32Array]", wA = /\b__p \+= '';/g, Ys = /\b(__p \+=) '' \+/g, Qn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Gr = /&(?:amp|lt|gt|quot|#39);/g, Fa = /[&<>"']/g, Fs = RegExp(Gr.source), Zs = RegExp(Fa.source), Gs = /<%-([\s\S]+?)%>/g, Ks = /<%([\s\S]+?)%>/g, Xs = /<%=([\s\S]+?)%>/g, Ws = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, oo = /^\w*$/, xA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Za = /[\\^$.*+?()[\]{}|]/g, lo = RegExp(Za.source), qs = /^\s+/, Ao = /\s/, co = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, uo = /\{\n\/\* \[wrapped with (.+)\] \*/, fo = /,? & /, Kr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Vs = /[()=,{}\[\]\/\s]/, Ga = /\\(\\)?/g, ce = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ka = /\w*$/, kA = /^[-+]0x[0-9a-f]+$/i, bA = /^0b[01]+$/i, yA = /^\[object .+?Constructor\]$/, EA = /^0o[0-7]+$/i, MA = /^(?:0|[1-9]\d*)$/, SA = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Xa = /($^)/, IA = /['\n\r\u2028\u2029\\]/g, Wa = "\\ud800-\\udfff", JA = "\\u0300-\\u036f", TA = "\\ufe20-\\ufe2f", CA = "\\u20d0-\\u20ff", ho = JA + TA + CA, po = "\\u2700-\\u27bf", mo = "a-z\\xdf-\\xf6\\xf8-\\xff", DA = "\\xac\\xb1\\xd7\\xf7", go = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", RA = "\\u2000-\\u206f", jA = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", vo = "A-Z\\xc0-\\xd6\\xd8-\\xde", wo = "\\ufe0e\\ufe0f", xo = DA + go + RA + jA, _s = "['’]", OA = "[" + Wa + "]", ko = "[" + xo + "]", qa = "[" + ho + "]", bo = "\\d+", QA = "[" + po + "]", yo = "[" + mo + "]", Eo = "[^" + Wa + xo + bo + po + mo + vo + "]", $s = "\\ud83c[\\udffb-\\udfff]", NA = "(?:" + qa + "|" + $s + ")", Mo = "[^" + Wa + "]", ei = "(?:\\ud83c[\\udde6-\\uddff]){2}", ti = "[\\ud800-\\udbff][\\udc00-\\udfff]", Xr = "[" + vo + "]", pn = "\\u200d", ni = "(?:" + yo + "|" + Eo + ")", ri = "(?:" + Xr + "|" + Eo + ")", So = "(?:" + _s + "(?:d|ll|m|re|s|t|ve))?", Va = "(?:" + _s + "(?:D|LL|M|RE|S|T|VE))?", ai = NA + "?", si = "[" + wo + "]?", Io = "(?:" + pn + "(?:" + [Mo, ei, ti].join("|") + ")" + si + ai + ")*", Jo = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", HA = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", _a = si + ai + Io, $a = "(?:" + [QA, ei, ti].join("|") + ")" + _a, To = "(?:" + [Mo + qa + "?", qa, ei, ti, OA].join("|") + ")", ii = RegExp(_s, "g"), Nn = RegExp(qa, "g"), oi = RegExp($s + "(?=" + $s + ")|" + To + _a, "g"), BA = RegExp([
      Xr + "?" + yo + "+" + So + "(?=" + [ko, Xr, "$"].join("|") + ")",
      ri + "+" + Va + "(?=" + [ko, Xr + ni, "$"].join("|") + ")",
      Xr + "?" + ni + "+" + So,
      Xr + "+" + Va,
      HA,
      Jo,
      bo,
      $a
    ].join("|"), "g"), li = RegExp("[" + pn + Wa + ho + wo + "]"), Co = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Do = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Ro = -1, xt = {};
    xt[sr] = xt[pa] = xt[ir] = xt[Fn] = xt[ma] = xt[za] = xt[Ya] = xt[un] = xt[zs] = !0, xt[Ne] = xt[Et] = xt[Fr] = xt[Ve] = xt[Zr] = xt[Le] = xt[Ee] = xt[Ce] = xt[wt] = xt[Pt] = xt[tn] = xt[rt] = xt[Pe] = xt[zr] = xt[_n] = !1;
    var mt = {};
    mt[Ne] = mt[Et] = mt[Fr] = mt[Zr] = mt[Ve] = mt[Le] = mt[sr] = mt[pa] = mt[ir] = mt[Fn] = mt[ma] = mt[wt] = mt[Pt] = mt[tn] = mt[rt] = mt[Pe] = mt[zr] = mt[Yr] = mt[za] = mt[Ya] = mt[un] = mt[zs] = !0, mt[Ee] = mt[Ce] = mt[_n] = !1;
    var jo = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Oo = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, UA = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, LA = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, PA = parseFloat, zA = parseInt, Qo = typeof Es == "object" && Es && Es.Object === Object && Es, No = typeof self == "object" && self && self.Object === Object && self, $t = Qo || No || Function("return this")(), Wr = n && !n.nodeType && n, mn = Wr && !0 && e && !e.nodeType && e, Ho = mn && mn.exports === Wr, Ai = Ho && Qo.process, In = function() {
      try {
        var U = mn && mn.require && mn.require("util").types;
        return U || Ai && Ai.binding && Ai.binding("util");
      } catch {
      }
    }(), Bo = In && In.isArrayBuffer, Uo = In && In.isDate, Lo = In && In.isMap, Po = In && In.isRegExp, zo = In && In.isSet, Yo = In && In.isTypedArray;
    function gn(U, ne, V) {
      switch (V.length) {
        case 0:
          return U.call(ne);
        case 1:
          return U.call(ne, V[0]);
        case 2:
          return U.call(ne, V[0], V[1]);
        case 3:
          return U.call(ne, V[0], V[1], V[2]);
      }
      return U.apply(ne, V);
    }
    function YA(U, ne, V, we) {
      for (var He = -1, tt = U == null ? 0 : U.length; ++He < tt; ) {
        var zt = U[He];
        ne(we, zt, V(zt), U);
      }
      return we;
    }
    function vn(U, ne) {
      for (var V = -1, we = U == null ? 0 : U.length; ++V < we && ne(U[V], V, U) !== !1; )
        ;
      return U;
    }
    function Fo(U, ne) {
      for (var V = U == null ? 0 : U.length; V-- && ne(U[V], V, U) !== !1; )
        ;
      return U;
    }
    function ci(U, ne) {
      for (var V = -1, we = U == null ? 0 : U.length; ++V < we; )
        if (!ne(U[V], V, U))
          return !1;
      return !0;
    }
    function $n(U, ne) {
      for (var V = -1, we = U == null ? 0 : U.length, He = 0, tt = []; ++V < we; ) {
        var zt = U[V];
        ne(zt, V, U) && (tt[He++] = zt);
      }
      return tt;
    }
    function ga(U, ne) {
      var V = U == null ? 0 : U.length;
      return !!V && qr(U, ne, 0) > -1;
    }
    function es(U, ne, V) {
      for (var we = -1, He = U == null ? 0 : U.length; ++we < He; )
        if (V(ne, U[we]))
          return !0;
      return !1;
    }
    function kt(U, ne) {
      for (var V = -1, we = U == null ? 0 : U.length, He = Array(we); ++V < we; )
        He[V] = ne(U[V], V, U);
      return He;
    }
    function er(U, ne) {
      for (var V = -1, we = ne.length, He = U.length; ++V < we; )
        U[He + V] = ne[V];
      return U;
    }
    function ts(U, ne, V, we) {
      var He = -1, tt = U == null ? 0 : U.length;
      for (we && tt && (V = U[++He]); ++He < tt; )
        V = ne(V, U[He], He, U);
      return V;
    }
    function Zo(U, ne, V, we) {
      var He = U == null ? 0 : U.length;
      for (we && He && (V = U[--He]); He--; )
        V = ne(V, U[He], He, U);
      return V;
    }
    function ui(U, ne) {
      for (var V = -1, we = U == null ? 0 : U.length; ++V < we; )
        if (ne(U[V], V, U))
          return !0;
      return !1;
    }
    var FA = fi("length");
    function ZA(U) {
      return U.split("");
    }
    function GA(U) {
      return U.match(Kr) || [];
    }
    function Go(U, ne, V) {
      var we;
      return V(U, function(He, tt, zt) {
        if (ne(He, tt, zt))
          return we = tt, !1;
      }), we;
    }
    function ns(U, ne, V, we) {
      for (var He = U.length, tt = V + (we ? 1 : -1); we ? tt-- : ++tt < He; )
        if (ne(U[tt], tt, U))
          return tt;
      return -1;
    }
    function qr(U, ne, V) {
      return ne === ne ? rc(U, ne, V) : ns(U, Ko, V);
    }
    function KA(U, ne, V, we) {
      for (var He = V - 1, tt = U.length; ++He < tt; )
        if (we(U[He], ne))
          return He;
      return -1;
    }
    function Ko(U) {
      return U !== U;
    }
    function Xo(U, ne) {
      var V = U == null ? 0 : U.length;
      return V ? hi(U, ne) / V : X;
    }
    function fi(U) {
      return function(ne) {
        return ne == null ? t : ne[U];
      };
    }
    function di(U) {
      return function(ne) {
        return U == null ? t : U[ne];
      };
    }
    function Wo(U, ne, V, we, He) {
      return He(U, function(tt, zt, gt) {
        V = we ? (we = !1, tt) : ne(V, tt, zt, gt);
      }), V;
    }
    function XA(U, ne) {
      var V = U.length;
      for (U.sort(ne); V--; )
        U[V] = U[V].value;
      return U;
    }
    function hi(U, ne) {
      for (var V, we = -1, He = U.length; ++we < He; ) {
        var tt = ne(U[we]);
        tt !== t && (V = V === t ? tt : V + tt);
      }
      return V;
    }
    function pi(U, ne) {
      for (var V = -1, we = Array(U); ++V < U; )
        we[V] = ne(V);
      return we;
    }
    function WA(U, ne) {
      return kt(ne, function(V) {
        return [V, U[V]];
      });
    }
    function qo(U) {
      return U && U.slice(0, el(U) + 1).replace(qs, "");
    }
    function fn(U) {
      return function(ne) {
        return U(ne);
      };
    }
    function mi(U, ne) {
      return kt(ne, function(V) {
        return U[V];
      });
    }
    function va(U, ne) {
      return U.has(ne);
    }
    function Vo(U, ne) {
      for (var V = -1, we = U.length; ++V < we && qr(ne, U[V], 0) > -1; )
        ;
      return V;
    }
    function _o(U, ne) {
      for (var V = U.length; V-- && qr(ne, U[V], 0) > -1; )
        ;
      return V;
    }
    function qA(U, ne) {
      for (var V = U.length, we = 0; V--; )
        U[V] === ne && ++we;
      return we;
    }
    var VA = di(jo), _A = di(Oo);
    function $A(U) {
      return "\\" + LA[U];
    }
    function or(U, ne) {
      return U == null ? t : U[ne];
    }
    function Vr(U) {
      return li.test(U);
    }
    function ec(U) {
      return Co.test(U);
    }
    function tc(U) {
      for (var ne, V = []; !(ne = U.next()).done; )
        V.push(ne.value);
      return V;
    }
    function gi(U) {
      var ne = -1, V = Array(U.size);
      return U.forEach(function(we, He) {
        V[++ne] = [He, we];
      }), V;
    }
    function $o(U, ne) {
      return function(V) {
        return U(ne(V));
      };
    }
    function lr(U, ne) {
      for (var V = -1, we = U.length, He = 0, tt = []; ++V < we; ) {
        var zt = U[V];
        (zt === ne || zt === h) && (U[V] = h, tt[He++] = V);
      }
      return tt;
    }
    function rs(U) {
      var ne = -1, V = Array(U.size);
      return U.forEach(function(we) {
        V[++ne] = we;
      }), V;
    }
    function nc(U) {
      var ne = -1, V = Array(U.size);
      return U.forEach(function(we) {
        V[++ne] = [we, we];
      }), V;
    }
    function rc(U, ne, V) {
      for (var we = V - 1, He = U.length; ++we < He; )
        if (U[we] === ne)
          return we;
      return -1;
    }
    function ac(U, ne, V) {
      for (var we = V + 1; we--; )
        if (U[we] === ne)
          return we;
      return we;
    }
    function _r(U) {
      return Vr(U) ? ic(U) : FA(U);
    }
    function Jn(U) {
      return Vr(U) ? oc(U) : ZA(U);
    }
    function el(U) {
      for (var ne = U.length; ne-- && Ao.test(U.charAt(ne)); )
        ;
      return ne;
    }
    var sc = di(UA);
    function ic(U) {
      for (var ne = oi.lastIndex = 0; oi.test(U); )
        ++ne;
      return ne;
    }
    function oc(U) {
      return U.match(oi) || [];
    }
    function lc(U) {
      return U.match(BA) || [];
    }
    var tl = function U(ne) {
      ne = ne == null ? $t : $r.defaults($t.Object(), ne, $r.pick($t, Do));
      var V = ne.Array, we = ne.Date, He = ne.Error, tt = ne.Function, zt = ne.Math, gt = ne.Object, vi = ne.RegExp, Ac = ne.String, wn = ne.TypeError, as = V.prototype, cc = tt.prototype, ea = gt.prototype, ss = ne["__core-js_shared__"], is = cc.toString, ut = ea.hasOwnProperty, uc = 0, nl = function() {
        var r = /[^.]+$/.exec(ss && ss.keys && ss.keys.IE_PROTO || "");
        return r ? "Symbol(src)_1." + r : "";
      }(), os = ea.toString, on = is.call(gt), fc = $t._, dc = vi(
        "^" + is.call(ut).replace(Za, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ls = Ho ? ne.Buffer : t, Ar = ne.Symbol, As = ne.Uint8Array, rl = ls ? ls.allocUnsafe : t, cs = $o(gt.getPrototypeOf, gt), al = gt.create, sl = ea.propertyIsEnumerable, us = as.splice, il = Ar ? Ar.isConcatSpreadable : t, wa = Ar ? Ar.iterator : t, br = Ar ? Ar.toStringTag : t, fs = function() {
        try {
          var r = Sa(gt, "defineProperty");
          return r({}, "", {}), r;
        } catch {
        }
      }(), hc = ne.clearTimeout !== $t.clearTimeout && ne.clearTimeout, pc = we && we.now !== $t.Date.now && we.now, ol = ne.setTimeout !== $t.setTimeout && ne.setTimeout, ds = zt.ceil, hs = zt.floor, wi = gt.getOwnPropertySymbols, mc = ls ? ls.isBuffer : t, ll = ne.isFinite, Tt = as.join, gc = $o(gt.keys, gt), Yt = zt.max, rn = zt.min, vc = we.now, wc = ne.parseInt, Al = zt.random, p = as.reverse, g = Sa(ne, "DataView"), w = Sa(ne, "Map"), E = Sa(ne, "Promise"), C = Sa(ne, "Set"), j = Sa(ne, "WeakMap"), z = Sa(gt, "create"), q = j && new j(), fe = {}, le = Ia(g), De = Ia(w), ve = Ia(E), at = Ia(C), Ge = Ia(j), vt = Ar ? Ar.prototype : t, Wt = vt ? vt.valueOf : t, Tn = vt ? vt.toString : t;
      function I(r) {
        if (Nt(r) && !Ue(r) && !(r instanceof Ke)) {
          if (r instanceof qt)
            return r;
          if (ut.call(r, "__wrapped__"))
            return Qd(r);
        }
        return new qt(r);
      }
      var Hn = function() {
        function r() {
        }
        return function(i) {
          if (!Rt(i))
            return {};
          if (al)
            return al(i);
          r.prototype = i;
          var c = new r();
          return r.prototype = t, c;
        };
      }();
      function xa() {
      }
      function qt(r, i) {
        this.__wrapped__ = r, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = t;
      }
      I.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Gs,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Ks,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Xs,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: I
        }
      }, I.prototype = xa.prototype, I.prototype.constructor = I, qt.prototype = Hn(xa.prototype), qt.prototype.constructor = qt;
      function Ke(r) {
        this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ie, this.__views__ = [];
      }
      function xi() {
        var r = new Ke(this.__wrapped__);
        return r.__actions__ = Cn(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = Cn(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = Cn(this.__views__), r;
      }
      function ka() {
        if (this.__filtered__) {
          var r = new Ke(this);
          r.__dir__ = -1, r.__filtered__ = !0;
        } else
          r = this.clone(), r.__dir__ *= -1;
        return r;
      }
      function pg() {
        var r = this.__wrapped__.value(), i = this.__dir__, c = Ue(r), x = i < 0, M = c ? r.length : 0, J = I0(0, M, this.__views__), D = J.start, Q = J.end, P = Q - D, se = x ? Q : D - 1, ie = this.__iteratees__, Ae = ie.length, me = 0, Se = rn(P, this.__takeCount__);
        if (!c || !x && M == P && Se == P)
          return ad(r, this.__actions__);
        var Oe = [];
        e:
          for (; P-- && me < Se; ) {
            se += i;
            for (var Fe = -1, Qe = r[se]; ++Fe < Ae; ) {
              var We = ie[Fe], _e = We.iteratee, Ln = We.type, bn = _e(Qe);
              if (Ln == W)
                Qe = bn;
              else if (!bn) {
                if (Ln == Y)
                  continue e;
                break e;
              }
            }
            Oe[me++] = Qe;
          }
        return Oe;
      }
      Ke.prototype = Hn(xa.prototype), Ke.prototype.constructor = Ke;
      function ba(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++i < c; ) {
          var x = r[i];
          this.set(x[0], x[1]);
        }
      }
      function mg() {
        this.__data__ = z ? z(null) : {}, this.size = 0;
      }
      function gg(r) {
        var i = this.has(r) && delete this.__data__[r];
        return this.size -= i ? 1 : 0, i;
      }
      function vg(r) {
        var i = this.__data__;
        if (z) {
          var c = i[r];
          return c === u ? t : c;
        }
        return ut.call(i, r) ? i[r] : t;
      }
      function wg(r) {
        var i = this.__data__;
        return z ? i[r] !== t : ut.call(i, r);
      }
      function xg(r, i) {
        var c = this.__data__;
        return this.size += this.has(r) ? 0 : 1, c[r] = z && i === t ? u : i, this;
      }
      ba.prototype.clear = mg, ba.prototype.delete = gg, ba.prototype.get = vg, ba.prototype.has = wg, ba.prototype.set = xg;
      function yr(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++i < c; ) {
          var x = r[i];
          this.set(x[0], x[1]);
        }
      }
      function kg() {
        this.__data__ = [], this.size = 0;
      }
      function bg(r) {
        var i = this.__data__, c = cl(i, r);
        if (c < 0)
          return !1;
        var x = i.length - 1;
        return c == x ? i.pop() : us.call(i, c, 1), --this.size, !0;
      }
      function yg(r) {
        var i = this.__data__, c = cl(i, r);
        return c < 0 ? t : i[c][1];
      }
      function Eg(r) {
        return cl(this.__data__, r) > -1;
      }
      function Mg(r, i) {
        var c = this.__data__, x = cl(c, r);
        return x < 0 ? (++this.size, c.push([r, i])) : c[x][1] = i, this;
      }
      yr.prototype.clear = kg, yr.prototype.delete = bg, yr.prototype.get = yg, yr.prototype.has = Eg, yr.prototype.set = Mg;
      function Er(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++i < c; ) {
          var x = r[i];
          this.set(x[0], x[1]);
        }
      }
      function Sg() {
        this.size = 0, this.__data__ = {
          hash: new ba(),
          map: new (w || yr)(),
          string: new ba()
        };
      }
      function Ig(r) {
        var i = bl(this, r).delete(r);
        return this.size -= i ? 1 : 0, i;
      }
      function Jg(r) {
        return bl(this, r).get(r);
      }
      function Tg(r) {
        return bl(this, r).has(r);
      }
      function Cg(r, i) {
        var c = bl(this, r), x = c.size;
        return c.set(r, i), this.size += c.size == x ? 0 : 1, this;
      }
      Er.prototype.clear = Sg, Er.prototype.delete = Ig, Er.prototype.get = Jg, Er.prototype.has = Tg, Er.prototype.set = Cg;
      function ya(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.__data__ = new Er(); ++i < c; )
          this.add(r[i]);
      }
      function Dg(r) {
        return this.__data__.set(r, u), this;
      }
      function Rg(r) {
        return this.__data__.has(r);
      }
      ya.prototype.add = ya.prototype.push = Dg, ya.prototype.has = Rg;
      function tr(r) {
        var i = this.__data__ = new yr(r);
        this.size = i.size;
      }
      function jg() {
        this.__data__ = new yr(), this.size = 0;
      }
      function Og(r) {
        var i = this.__data__, c = i.delete(r);
        return this.size = i.size, c;
      }
      function Qg(r) {
        return this.__data__.get(r);
      }
      function Ng(r) {
        return this.__data__.has(r);
      }
      function Hg(r, i) {
        var c = this.__data__;
        if (c instanceof yr) {
          var x = c.__data__;
          if (!w || x.length < s - 1)
            return x.push([r, i]), this.size = ++c.size, this;
          c = this.__data__ = new Er(x);
        }
        return c.set(r, i), this.size = c.size, this;
      }
      tr.prototype.clear = jg, tr.prototype.delete = Og, tr.prototype.get = Qg, tr.prototype.has = Ng, tr.prototype.set = Hg;
      function Qf(r, i) {
        var c = Ue(r), x = !c && Ja(r), M = !c && !x && sa(r), J = !c && !x && !M && vs(r), D = c || x || M || J, Q = D ? pi(r.length, Ac) : [], P = Q.length;
        for (var se in r)
          (i || ut.call(r, se)) && !(D && // Safari 9 has enumerable `arguments.length` in strict mode.
          (se == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          M && (se == "offset" || se == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          J && (se == "buffer" || se == "byteLength" || se == "byteOffset") || // Skip index properties.
          Jr(se, P))) && Q.push(se);
        return Q;
      }
      function Nf(r) {
        var i = r.length;
        return i ? r[Cc(0, i - 1)] : t;
      }
      function Bg(r, i) {
        return yl(Cn(r), Ea(i, 0, r.length));
      }
      function Ug(r) {
        return yl(Cn(r));
      }
      function xc(r, i, c) {
        (c !== t && !nr(r[i], c) || c === t && !(i in r)) && Mr(r, i, c);
      }
      function ki(r, i, c) {
        var x = r[i];
        (!(ut.call(r, i) && nr(x, c)) || c === t && !(i in r)) && Mr(r, i, c);
      }
      function cl(r, i) {
        for (var c = r.length; c--; )
          if (nr(r[c][0], i))
            return c;
        return -1;
      }
      function Lg(r, i, c, x) {
        return ta(r, function(M, J, D) {
          i(x, M, c(M), D);
        }), x;
      }
      function Hf(r, i) {
        return r && ur(i, an(i), r);
      }
      function Pg(r, i) {
        return r && ur(i, Rn(i), r);
      }
      function Mr(r, i, c) {
        i == "__proto__" && fs ? fs(r, i, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : r[i] = c;
      }
      function kc(r, i) {
        for (var c = -1, x = i.length, M = V(x), J = r == null; ++c < x; )
          M[c] = J ? t : tu(r, i[c]);
        return M;
      }
      function Ea(r, i, c) {
        return r === r && (c !== t && (r = r <= c ? r : c), i !== t && (r = r >= i ? r : i)), r;
      }
      function Zn(r, i, c, x, M, J) {
        var D, Q = i & m, P = i & v, se = i & k;
        if (c && (D = M ? c(r, x, M, J) : c(r)), D !== t)
          return D;
        if (!Rt(r))
          return r;
        var ie = Ue(r);
        if (ie) {
          if (D = T0(r), !Q)
            return Cn(r, D);
        } else {
          var Ae = dn(r), me = Ae == Ce || Ae == Xe;
          if (sa(r))
            return od(r, Q);
          if (Ae == tn || Ae == Ne || me && !M) {
            if (D = P || me ? {} : Sd(r), !Q)
              return P ? v0(r, Pg(D, r)) : g0(r, Hf(D, r));
          } else {
            if (!mt[Ae])
              return M ? r : {};
            D = C0(r, Ae, Q);
          }
        }
        J || (J = new tr());
        var Se = J.get(r);
        if (Se)
          return Se;
        J.set(r, D), th(r) ? r.forEach(function(Qe) {
          D.add(Zn(Qe, i, c, Qe, r, J));
        }) : $d(r) && r.forEach(function(Qe, We) {
          D.set(We, Zn(Qe, i, c, We, r, J));
        });
        var Oe = se ? P ? Pc : Lc : P ? Rn : an, Fe = ie ? t : Oe(r);
        return vn(Fe || r, function(Qe, We) {
          Fe && (We = Qe, Qe = r[We]), ki(D, We, Zn(Qe, i, c, We, r, J));
        }), D;
      }
      function zg(r) {
        var i = an(r);
        return function(c) {
          return Bf(c, r, i);
        };
      }
      function Bf(r, i, c) {
        var x = c.length;
        if (r == null)
          return !x;
        for (r = gt(r); x--; ) {
          var M = c[x], J = i[M], D = r[M];
          if (D === t && !(M in r) || !J(D))
            return !1;
        }
        return !0;
      }
      function Uf(r, i, c) {
        if (typeof r != "function")
          throw new wn(A);
        return Ji(function() {
          r.apply(t, c);
        }, i);
      }
      function bi(r, i, c, x) {
        var M = -1, J = ga, D = !0, Q = r.length, P = [], se = i.length;
        if (!Q)
          return P;
        c && (i = kt(i, fn(c))), x ? (J = es, D = !1) : i.length >= s && (J = va, D = !1, i = new ya(i));
        e:
          for (; ++M < Q; ) {
            var ie = r[M], Ae = c == null ? ie : c(ie);
            if (ie = x || ie !== 0 ? ie : 0, D && Ae === Ae) {
              for (var me = se; me--; )
                if (i[me] === Ae)
                  continue e;
              P.push(ie);
            } else
              J(i, Ae, x) || P.push(ie);
          }
        return P;
      }
      var ta = fd(cr), Lf = fd(yc, !0);
      function Yg(r, i) {
        var c = !0;
        return ta(r, function(x, M, J) {
          return c = !!i(x, M, J), c;
        }), c;
      }
      function ul(r, i, c) {
        for (var x = -1, M = r.length; ++x < M; ) {
          var J = r[x], D = i(J);
          if (D != null && (Q === t ? D === D && !Un(D) : c(D, Q)))
            var Q = D, P = J;
        }
        return P;
      }
      function Fg(r, i, c, x) {
        var M = r.length;
        for (c = ze(c), c < 0 && (c = -c > M ? 0 : M + c), x = x === t || x > M ? M : ze(x), x < 0 && (x += M), x = c > x ? 0 : rh(x); c < x; )
          r[c++] = i;
        return r;
      }
      function Pf(r, i) {
        var c = [];
        return ta(r, function(x, M, J) {
          i(x, M, J) && c.push(x);
        }), c;
      }
      function ln(r, i, c, x, M) {
        var J = -1, D = r.length;
        for (c || (c = R0), M || (M = []); ++J < D; ) {
          var Q = r[J];
          i > 0 && c(Q) ? i > 1 ? ln(Q, i - 1, c, x, M) : er(M, Q) : x || (M[M.length] = Q);
        }
        return M;
      }
      var bc = dd(), zf = dd(!0);
      function cr(r, i) {
        return r && bc(r, i, an);
      }
      function yc(r, i) {
        return r && zf(r, i, an);
      }
      function fl(r, i) {
        return $n(i, function(c) {
          return Tr(r[c]);
        });
      }
      function Ma(r, i) {
        i = ra(i, r);
        for (var c = 0, x = i.length; r != null && c < x; )
          r = r[fr(i[c++])];
        return c && c == x ? r : t;
      }
      function Yf(r, i, c) {
        var x = i(r);
        return Ue(r) ? x : er(x, c(r));
      }
      function xn(r) {
        return r == null ? r === t ? nn : Dt : br && br in gt(r) ? S0(r) : U0(r);
      }
      function Ec(r, i) {
        return r > i;
      }
      function Zg(r, i) {
        return r != null && ut.call(r, i);
      }
      function Gg(r, i) {
        return r != null && i in gt(r);
      }
      function Kg(r, i, c) {
        return r >= rn(i, c) && r < Yt(i, c);
      }
      function Mc(r, i, c) {
        for (var x = c ? es : ga, M = r[0].length, J = r.length, D = J, Q = V(J), P = 1 / 0, se = []; D--; ) {
          var ie = r[D];
          D && i && (ie = kt(ie, fn(i))), P = rn(ie.length, P), Q[D] = !c && (i || M >= 120 && ie.length >= 120) ? new ya(D && ie) : t;
        }
        ie = r[0];
        var Ae = -1, me = Q[0];
        e:
          for (; ++Ae < M && se.length < P; ) {
            var Se = ie[Ae], Oe = i ? i(Se) : Se;
            if (Se = c || Se !== 0 ? Se : 0, !(me ? va(me, Oe) : x(se, Oe, c))) {
              for (D = J; --D; ) {
                var Fe = Q[D];
                if (!(Fe ? va(Fe, Oe) : x(r[D], Oe, c)))
                  continue e;
              }
              me && me.push(Oe), se.push(Se);
            }
          }
        return se;
      }
      function Xg(r, i, c, x) {
        return cr(r, function(M, J, D) {
          i(x, c(M), J, D);
        }), x;
      }
      function yi(r, i, c) {
        i = ra(i, r), r = Cd(r, i);
        var x = r == null ? r : r[fr(Kn(i))];
        return x == null ? t : gn(x, r, c);
      }
      function Ff(r) {
        return Nt(r) && xn(r) == Ne;
      }
      function Wg(r) {
        return Nt(r) && xn(r) == Fr;
      }
      function qg(r) {
        return Nt(r) && xn(r) == Le;
      }
      function Ei(r, i, c, x, M) {
        return r === i ? !0 : r == null || i == null || !Nt(r) && !Nt(i) ? r !== r && i !== i : Vg(r, i, c, x, Ei, M);
      }
      function Vg(r, i, c, x, M, J) {
        var D = Ue(r), Q = Ue(i), P = D ? Et : dn(r), se = Q ? Et : dn(i);
        P = P == Ne ? tn : P, se = se == Ne ? tn : se;
        var ie = P == tn, Ae = se == tn, me = P == se;
        if (me && sa(r)) {
          if (!sa(i))
            return !1;
          D = !0, ie = !1;
        }
        if (me && !ie)
          return J || (J = new tr()), D || vs(r) ? yd(r, i, c, x, M, J) : E0(r, i, P, c, x, M, J);
        if (!(c & b)) {
          var Se = ie && ut.call(r, "__wrapped__"), Oe = Ae && ut.call(i, "__wrapped__");
          if (Se || Oe) {
            var Fe = Se ? r.value() : r, Qe = Oe ? i.value() : i;
            return J || (J = new tr()), M(Fe, Qe, c, x, J);
          }
        }
        return me ? (J || (J = new tr()), M0(r, i, c, x, M, J)) : !1;
      }
      function _g(r) {
        return Nt(r) && dn(r) == wt;
      }
      function Sc(r, i, c, x) {
        var M = c.length, J = M, D = !x;
        if (r == null)
          return !J;
        for (r = gt(r); M--; ) {
          var Q = c[M];
          if (D && Q[2] ? Q[1] !== r[Q[0]] : !(Q[0] in r))
            return !1;
        }
        for (; ++M < J; ) {
          Q = c[M];
          var P = Q[0], se = r[P], ie = Q[1];
          if (D && Q[2]) {
            if (se === t && !(P in r))
              return !1;
          } else {
            var Ae = new tr();
            if (x)
              var me = x(se, ie, P, r, i, Ae);
            if (!(me === t ? Ei(ie, se, b | y, x, Ae) : me))
              return !1;
          }
        }
        return !0;
      }
      function Zf(r) {
        if (!Rt(r) || O0(r))
          return !1;
        var i = Tr(r) ? dc : yA;
        return i.test(Ia(r));
      }
      function $g(r) {
        return Nt(r) && xn(r) == rt;
      }
      function e0(r) {
        return Nt(r) && dn(r) == Pe;
      }
      function t0(r) {
        return Nt(r) && Tl(r.length) && !!xt[xn(r)];
      }
      function Gf(r) {
        return typeof r == "function" ? r : r == null ? jn : typeof r == "object" ? Ue(r) ? Wf(r[0], r[1]) : Xf(r) : hh(r);
      }
      function Ic(r) {
        if (!Ii(r))
          return gc(r);
        var i = [];
        for (var c in gt(r))
          ut.call(r, c) && c != "constructor" && i.push(c);
        return i;
      }
      function n0(r) {
        if (!Rt(r))
          return B0(r);
        var i = Ii(r), c = [];
        for (var x in r)
          x == "constructor" && (i || !ut.call(r, x)) || c.push(x);
        return c;
      }
      function Jc(r, i) {
        return r < i;
      }
      function Kf(r, i) {
        var c = -1, x = Dn(r) ? V(r.length) : [];
        return ta(r, function(M, J, D) {
          x[++c] = i(M, J, D);
        }), x;
      }
      function Xf(r) {
        var i = Yc(r);
        return i.length == 1 && i[0][2] ? Jd(i[0][0], i[0][1]) : function(c) {
          return c === r || Sc(c, r, i);
        };
      }
      function Wf(r, i) {
        return Zc(r) && Id(i) ? Jd(fr(r), i) : function(c) {
          var x = tu(c, r);
          return x === t && x === i ? nu(c, r) : Ei(i, x, b | y);
        };
      }
      function dl(r, i, c, x, M) {
        r !== i && bc(i, function(J, D) {
          if (M || (M = new tr()), Rt(J))
            r0(r, i, D, c, dl, x, M);
          else {
            var Q = x ? x(Kc(r, D), J, D + "", r, i, M) : t;
            Q === t && (Q = J), xc(r, D, Q);
          }
        }, Rn);
      }
      function r0(r, i, c, x, M, J, D) {
        var Q = Kc(r, c), P = Kc(i, c), se = D.get(P);
        if (se) {
          xc(r, c, se);
          return;
        }
        var ie = J ? J(Q, P, c + "", r, i, D) : t, Ae = ie === t;
        if (Ae) {
          var me = Ue(P), Se = !me && sa(P), Oe = !me && !Se && vs(P);
          ie = P, me || Se || Oe ? Ue(Q) ? ie = Q : Ft(Q) ? ie = Cn(Q) : Se ? (Ae = !1, ie = od(P, !0)) : Oe ? (Ae = !1, ie = ld(P, !0)) : ie = [] : Ti(P) || Ja(P) ? (ie = Q, Ja(Q) ? ie = ah(Q) : (!Rt(Q) || Tr(Q)) && (ie = Sd(P))) : Ae = !1;
        }
        Ae && (D.set(P, ie), M(ie, P, x, J, D), D.delete(P)), xc(r, c, ie);
      }
      function qf(r, i) {
        var c = r.length;
        if (c)
          return i += i < 0 ? c : 0, Jr(i, c) ? r[i] : t;
      }
      function Vf(r, i, c) {
        i.length ? i = kt(i, function(J) {
          return Ue(J) ? function(D) {
            return Ma(D, J.length === 1 ? J[0] : J);
          } : J;
        }) : i = [jn];
        var x = -1;
        i = kt(i, fn(Re()));
        var M = Kf(r, function(J, D, Q) {
          var P = kt(i, function(se) {
            return se(J);
          });
          return { criteria: P, index: ++x, value: J };
        });
        return XA(M, function(J, D) {
          return m0(J, D, c);
        });
      }
      function a0(r, i) {
        return _f(r, i, function(c, x) {
          return nu(r, x);
        });
      }
      function _f(r, i, c) {
        for (var x = -1, M = i.length, J = {}; ++x < M; ) {
          var D = i[x], Q = Ma(r, D);
          c(Q, D) && Mi(J, ra(D, r), Q);
        }
        return J;
      }
      function s0(r) {
        return function(i) {
          return Ma(i, r);
        };
      }
      function Tc(r, i, c, x) {
        var M = x ? KA : qr, J = -1, D = i.length, Q = r;
        for (r === i && (i = Cn(i)), c && (Q = kt(r, fn(c))); ++J < D; )
          for (var P = 0, se = i[J], ie = c ? c(se) : se; (P = M(Q, ie, P, x)) > -1; )
            Q !== r && us.call(Q, P, 1), us.call(r, P, 1);
        return r;
      }
      function $f(r, i) {
        for (var c = r ? i.length : 0, x = c - 1; c--; ) {
          var M = i[c];
          if (c == x || M !== J) {
            var J = M;
            Jr(M) ? us.call(r, M, 1) : jc(r, M);
          }
        }
        return r;
      }
      function Cc(r, i) {
        return r + hs(Al() * (i - r + 1));
      }
      function i0(r, i, c, x) {
        for (var M = -1, J = Yt(ds((i - r) / (c || 1)), 0), D = V(J); J--; )
          D[x ? J : ++M] = r, r += c;
        return D;
      }
      function Dc(r, i) {
        var c = "";
        if (!r || i < 1 || i > pe)
          return c;
        do
          i % 2 && (c += r), i = hs(i / 2), i && (r += r);
        while (i);
        return c;
      }
      function Ze(r, i) {
        return Xc(Td(r, i, jn), r + "");
      }
      function o0(r) {
        return Nf(ws(r));
      }
      function l0(r, i) {
        var c = ws(r);
        return yl(c, Ea(i, 0, c.length));
      }
      function Mi(r, i, c, x) {
        if (!Rt(r))
          return r;
        i = ra(i, r);
        for (var M = -1, J = i.length, D = J - 1, Q = r; Q != null && ++M < J; ) {
          var P = fr(i[M]), se = c;
          if (P === "__proto__" || P === "constructor" || P === "prototype")
            return r;
          if (M != D) {
            var ie = Q[P];
            se = x ? x(ie, P, Q) : t, se === t && (se = Rt(ie) ? ie : Jr(i[M + 1]) ? [] : {});
          }
          ki(Q, P, se), Q = Q[P];
        }
        return r;
      }
      var ed = q ? function(r, i) {
        return q.set(r, i), r;
      } : jn, A0 = fs ? function(r, i) {
        return fs(r, "toString", {
          configurable: !0,
          enumerable: !1,
          value: au(i),
          writable: !0
        });
      } : jn;
      function c0(r) {
        return yl(ws(r));
      }
      function Gn(r, i, c) {
        var x = -1, M = r.length;
        i < 0 && (i = -i > M ? 0 : M + i), c = c > M ? M : c, c < 0 && (c += M), M = i > c ? 0 : c - i >>> 0, i >>>= 0;
        for (var J = V(M); ++x < M; )
          J[x] = r[x + i];
        return J;
      }
      function u0(r, i) {
        var c;
        return ta(r, function(x, M, J) {
          return c = i(x, M, J), !c;
        }), !!c;
      }
      function hl(r, i, c) {
        var x = 0, M = r == null ? x : r.length;
        if (typeof i == "number" && i === i && M <= ye) {
          for (; x < M; ) {
            var J = x + M >>> 1, D = r[J];
            D !== null && !Un(D) && (c ? D <= i : D < i) ? x = J + 1 : M = J;
          }
          return M;
        }
        return Rc(r, i, jn, c);
      }
      function Rc(r, i, c, x) {
        var M = 0, J = r == null ? 0 : r.length;
        if (J === 0)
          return 0;
        i = c(i);
        for (var D = i !== i, Q = i === null, P = Un(i), se = i === t; M < J; ) {
          var ie = hs((M + J) / 2), Ae = c(r[ie]), me = Ae !== t, Se = Ae === null, Oe = Ae === Ae, Fe = Un(Ae);
          if (D)
            var Qe = x || Oe;
          else
            se ? Qe = Oe && (x || me) : Q ? Qe = Oe && me && (x || !Se) : P ? Qe = Oe && me && !Se && (x || !Fe) : Se || Fe ? Qe = !1 : Qe = x ? Ae <= i : Ae < i;
          Qe ? M = ie + 1 : J = ie;
        }
        return rn(J, Me);
      }
      function td(r, i) {
        for (var c = -1, x = r.length, M = 0, J = []; ++c < x; ) {
          var D = r[c], Q = i ? i(D) : D;
          if (!c || !nr(Q, P)) {
            var P = Q;
            J[M++] = D === 0 ? 0 : D;
          }
        }
        return J;
      }
      function nd(r) {
        return typeof r == "number" ? r : Un(r) ? X : +r;
      }
      function Bn(r) {
        if (typeof r == "string")
          return r;
        if (Ue(r))
          return kt(r, Bn) + "";
        if (Un(r))
          return Tn ? Tn.call(r) : "";
        var i = r + "";
        return i == "0" && 1 / r == -G ? "-0" : i;
      }
      function na(r, i, c) {
        var x = -1, M = ga, J = r.length, D = !0, Q = [], P = Q;
        if (c)
          D = !1, M = es;
        else if (J >= s) {
          var se = i ? null : b0(r);
          if (se)
            return rs(se);
          D = !1, M = va, P = new ya();
        } else
          P = i ? [] : Q;
        e:
          for (; ++x < J; ) {
            var ie = r[x], Ae = i ? i(ie) : ie;
            if (ie = c || ie !== 0 ? ie : 0, D && Ae === Ae) {
              for (var me = P.length; me--; )
                if (P[me] === Ae)
                  continue e;
              i && P.push(Ae), Q.push(ie);
            } else
              M(P, Ae, c) || (P !== Q && P.push(Ae), Q.push(ie));
          }
        return Q;
      }
      function jc(r, i) {
        return i = ra(i, r), r = Cd(r, i), r == null || delete r[fr(Kn(i))];
      }
      function rd(r, i, c, x) {
        return Mi(r, i, c(Ma(r, i)), x);
      }
      function pl(r, i, c, x) {
        for (var M = r.length, J = x ? M : -1; (x ? J-- : ++J < M) && i(r[J], J, r); )
          ;
        return c ? Gn(r, x ? 0 : J, x ? J + 1 : M) : Gn(r, x ? J + 1 : 0, x ? M : J);
      }
      function ad(r, i) {
        var c = r;
        return c instanceof Ke && (c = c.value()), ts(i, function(x, M) {
          return M.func.apply(M.thisArg, er([x], M.args));
        }, c);
      }
      function Oc(r, i, c) {
        var x = r.length;
        if (x < 2)
          return x ? na(r[0]) : [];
        for (var M = -1, J = V(x); ++M < x; )
          for (var D = r[M], Q = -1; ++Q < x; )
            Q != M && (J[M] = bi(J[M] || D, r[Q], i, c));
        return na(ln(J, 1), i, c);
      }
      function sd(r, i, c) {
        for (var x = -1, M = r.length, J = i.length, D = {}; ++x < M; ) {
          var Q = x < J ? i[x] : t;
          c(D, r[x], Q);
        }
        return D;
      }
      function Qc(r) {
        return Ft(r) ? r : [];
      }
      function Nc(r) {
        return typeof r == "function" ? r : jn;
      }
      function ra(r, i) {
        return Ue(r) ? r : Zc(r, i) ? [r] : Od(pt(r));
      }
      var f0 = Ze;
      function aa(r, i, c) {
        var x = r.length;
        return c = c === t ? x : c, !i && c >= x ? r : Gn(r, i, c);
      }
      var id = hc || function(r) {
        return $t.clearTimeout(r);
      };
      function od(r, i) {
        if (i)
          return r.slice();
        var c = r.length, x = rl ? rl(c) : new r.constructor(c);
        return r.copy(x), x;
      }
      function Hc(r) {
        var i = new r.constructor(r.byteLength);
        return new As(i).set(new As(r)), i;
      }
      function d0(r, i) {
        var c = i ? Hc(r.buffer) : r.buffer;
        return new r.constructor(c, r.byteOffset, r.byteLength);
      }
      function h0(r) {
        var i = new r.constructor(r.source, Ka.exec(r));
        return i.lastIndex = r.lastIndex, i;
      }
      function p0(r) {
        return Wt ? gt(Wt.call(r)) : {};
      }
      function ld(r, i) {
        var c = i ? Hc(r.buffer) : r.buffer;
        return new r.constructor(c, r.byteOffset, r.length);
      }
      function Ad(r, i) {
        if (r !== i) {
          var c = r !== t, x = r === null, M = r === r, J = Un(r), D = i !== t, Q = i === null, P = i === i, se = Un(i);
          if (!Q && !se && !J && r > i || J && D && P && !Q && !se || x && D && P || !c && P || !M)
            return 1;
          if (!x && !J && !se && r < i || se && c && M && !x && !J || Q && c && M || !D && M || !P)
            return -1;
        }
        return 0;
      }
      function m0(r, i, c) {
        for (var x = -1, M = r.criteria, J = i.criteria, D = M.length, Q = c.length; ++x < D; ) {
          var P = Ad(M[x], J[x]);
          if (P) {
            if (x >= Q)
              return P;
            var se = c[x];
            return P * (se == "desc" ? -1 : 1);
          }
        }
        return r.index - i.index;
      }
      function cd(r, i, c, x) {
        for (var M = -1, J = r.length, D = c.length, Q = -1, P = i.length, se = Yt(J - D, 0), ie = V(P + se), Ae = !x; ++Q < P; )
          ie[Q] = i[Q];
        for (; ++M < D; )
          (Ae || M < J) && (ie[c[M]] = r[M]);
        for (; se--; )
          ie[Q++] = r[M++];
        return ie;
      }
      function ud(r, i, c, x) {
        for (var M = -1, J = r.length, D = -1, Q = c.length, P = -1, se = i.length, ie = Yt(J - Q, 0), Ae = V(ie + se), me = !x; ++M < ie; )
          Ae[M] = r[M];
        for (var Se = M; ++P < se; )
          Ae[Se + P] = i[P];
        for (; ++D < Q; )
          (me || M < J) && (Ae[Se + c[D]] = r[M++]);
        return Ae;
      }
      function Cn(r, i) {
        var c = -1, x = r.length;
        for (i || (i = V(x)); ++c < x; )
          i[c] = r[c];
        return i;
      }
      function ur(r, i, c, x) {
        var M = !c;
        c || (c = {});
        for (var J = -1, D = i.length; ++J < D; ) {
          var Q = i[J], P = x ? x(c[Q], r[Q], Q, c, r) : t;
          P === t && (P = r[Q]), M ? Mr(c, Q, P) : ki(c, Q, P);
        }
        return c;
      }
      function g0(r, i) {
        return ur(r, Fc(r), i);
      }
      function v0(r, i) {
        return ur(r, Ed(r), i);
      }
      function ml(r, i) {
        return function(c, x) {
          var M = Ue(c) ? YA : Lg, J = i ? i() : {};
          return M(c, r, Re(x, 2), J);
        };
      }
      function ps(r) {
        return Ze(function(i, c) {
          var x = -1, M = c.length, J = M > 1 ? c[M - 1] : t, D = M > 2 ? c[2] : t;
          for (J = r.length > 3 && typeof J == "function" ? (M--, J) : t, D && kn(c[0], c[1], D) && (J = M < 3 ? t : J, M = 1), i = gt(i); ++x < M; ) {
            var Q = c[x];
            Q && r(i, Q, x, J);
          }
          return i;
        });
      }
      function fd(r, i) {
        return function(c, x) {
          if (c == null)
            return c;
          if (!Dn(c))
            return r(c, x);
          for (var M = c.length, J = i ? M : -1, D = gt(c); (i ? J-- : ++J < M) && x(D[J], J, D) !== !1; )
            ;
          return c;
        };
      }
      function dd(r) {
        return function(i, c, x) {
          for (var M = -1, J = gt(i), D = x(i), Q = D.length; Q--; ) {
            var P = D[r ? Q : ++M];
            if (c(J[P], P, J) === !1)
              break;
          }
          return i;
        };
      }
      function w0(r, i, c) {
        var x = i & S, M = Si(r);
        function J() {
          var D = this && this !== $t && this instanceof J ? M : r;
          return D.apply(x ? c : this, arguments);
        }
        return J;
      }
      function hd(r) {
        return function(i) {
          i = pt(i);
          var c = Vr(i) ? Jn(i) : t, x = c ? c[0] : i.charAt(0), M = c ? aa(c, 1).join("") : i.slice(1);
          return x[r]() + M;
        };
      }
      function ms(r) {
        return function(i) {
          return ts(fh(uh(i).replace(ii, "")), r, "");
        };
      }
      function Si(r) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new r();
            case 1:
              return new r(i[0]);
            case 2:
              return new r(i[0], i[1]);
            case 3:
              return new r(i[0], i[1], i[2]);
            case 4:
              return new r(i[0], i[1], i[2], i[3]);
            case 5:
              return new r(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new r(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new r(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var c = Hn(r.prototype), x = r.apply(c, i);
          return Rt(x) ? x : c;
        };
      }
      function x0(r, i, c) {
        var x = Si(r);
        function M() {
          for (var J = arguments.length, D = V(J), Q = J, P = gs(M); Q--; )
            D[Q] = arguments[Q];
          var se = J < 3 && D[0] !== P && D[J - 1] !== P ? [] : lr(D, P);
          if (J -= se.length, J < c)
            return wd(
              r,
              i,
              gl,
              M.placeholder,
              t,
              D,
              se,
              t,
              t,
              c - J
            );
          var ie = this && this !== $t && this instanceof M ? x : r;
          return gn(ie, this, D);
        }
        return M;
      }
      function pd(r) {
        return function(i, c, x) {
          var M = gt(i);
          if (!Dn(i)) {
            var J = Re(c, 3);
            i = an(i), c = function(Q) {
              return J(M[Q], Q, M);
            };
          }
          var D = r(i, c, x);
          return D > -1 ? M[J ? i[D] : D] : t;
        };
      }
      function md(r) {
        return Ir(function(i) {
          var c = i.length, x = c, M = qt.prototype.thru;
          for (r && i.reverse(); x--; ) {
            var J = i[x];
            if (typeof J != "function")
              throw new wn(A);
            if (M && !D && kl(J) == "wrapper")
              var D = new qt([], !0);
          }
          for (x = D ? x : c; ++x < c; ) {
            J = i[x];
            var Q = kl(J), P = Q == "wrapper" ? zc(J) : t;
            P && Gc(P[0]) && P[1] == (ee | B | _ | oe) && !P[4].length && P[9] == 1 ? D = D[kl(P[0])].apply(D, P[3]) : D = J.length == 1 && Gc(J) ? D[Q]() : D.thru(J);
          }
          return function() {
            var se = arguments, ie = se[0];
            if (D && se.length == 1 && Ue(ie))
              return D.plant(ie).value();
            for (var Ae = 0, me = c ? i[Ae].apply(this, se) : ie; ++Ae < c; )
              me = i[Ae].call(this, me);
            return me;
          };
        });
      }
      function gl(r, i, c, x, M, J, D, Q, P, se) {
        var ie = i & ee, Ae = i & S, me = i & T, Se = i & (B | K), Oe = i & re, Fe = me ? t : Si(r);
        function Qe() {
          for (var We = arguments.length, _e = V(We), Ln = We; Ln--; )
            _e[Ln] = arguments[Ln];
          if (Se)
            var bn = gs(Qe), Pn = qA(_e, bn);
          if (x && (_e = cd(_e, x, M, Se)), J && (_e = ud(_e, J, D, Se)), We -= Pn, Se && We < se) {
            var Zt = lr(_e, bn);
            return wd(
              r,
              i,
              gl,
              Qe.placeholder,
              c,
              _e,
              Zt,
              Q,
              P,
              se - We
            );
          }
          var rr = Ae ? c : this, Dr = me ? rr[r] : r;
          return We = _e.length, Q ? _e = L0(_e, Q) : Oe && We > 1 && _e.reverse(), ie && P < We && (_e.length = P), this && this !== $t && this instanceof Qe && (Dr = Fe || Si(Dr)), Dr.apply(rr, _e);
        }
        return Qe;
      }
      function gd(r, i) {
        return function(c, x) {
          return Xg(c, r, i(x), {});
        };
      }
      function vl(r, i) {
        return function(c, x) {
          var M;
          if (c === t && x === t)
            return i;
          if (c !== t && (M = c), x !== t) {
            if (M === t)
              return x;
            typeof c == "string" || typeof x == "string" ? (c = Bn(c), x = Bn(x)) : (c = nd(c), x = nd(x)), M = r(c, x);
          }
          return M;
        };
      }
      function Bc(r) {
        return Ir(function(i) {
          return i = kt(i, fn(Re())), Ze(function(c) {
            var x = this;
            return r(i, function(M) {
              return gn(M, x, c);
            });
          });
        });
      }
      function wl(r, i) {
        i = i === t ? " " : Bn(i);
        var c = i.length;
        if (c < 2)
          return c ? Dc(i, r) : i;
        var x = Dc(i, ds(r / _r(i)));
        return Vr(i) ? aa(Jn(x), 0, r).join("") : x.slice(0, r);
      }
      function k0(r, i, c, x) {
        var M = i & S, J = Si(r);
        function D() {
          for (var Q = -1, P = arguments.length, se = -1, ie = x.length, Ae = V(ie + P), me = this && this !== $t && this instanceof D ? J : r; ++se < ie; )
            Ae[se] = x[se];
          for (; P--; )
            Ae[se++] = arguments[++Q];
          return gn(me, M ? c : this, Ae);
        }
        return D;
      }
      function vd(r) {
        return function(i, c, x) {
          return x && typeof x != "number" && kn(i, c, x) && (c = x = t), i = Cr(i), c === t ? (c = i, i = 0) : c = Cr(c), x = x === t ? i < c ? 1 : -1 : Cr(x), i0(i, c, x, r);
        };
      }
      function xl(r) {
        return function(i, c) {
          return typeof i == "string" && typeof c == "string" || (i = Xn(i), c = Xn(c)), r(i, c);
        };
      }
      function wd(r, i, c, x, M, J, D, Q, P, se) {
        var ie = i & B, Ae = ie ? D : t, me = ie ? t : D, Se = ie ? J : t, Oe = ie ? t : J;
        i |= ie ? _ : F, i &= ~(ie ? F : _), i & O || (i &= ~(S | T));
        var Fe = [
          r,
          i,
          M,
          Se,
          Ae,
          Oe,
          me,
          Q,
          P,
          se
        ], Qe = c.apply(t, Fe);
        return Gc(r) && Dd(Qe, Fe), Qe.placeholder = x, Rd(Qe, r, i);
      }
      function Uc(r) {
        var i = zt[r];
        return function(c, x) {
          if (c = Xn(c), x = x == null ? 0 : rn(ze(x), 292), x && ll(c)) {
            var M = (pt(c) + "e").split("e"), J = i(M[0] + "e" + (+M[1] + x));
            return M = (pt(J) + "e").split("e"), +(M[0] + "e" + (+M[1] - x));
          }
          return i(c);
        };
      }
      var b0 = C && 1 / rs(new C([, -0]))[1] == G ? function(r) {
        return new C(r);
      } : ou;
      function xd(r) {
        return function(i) {
          var c = dn(i);
          return c == wt ? gi(i) : c == Pe ? nc(i) : WA(i, r(i));
        };
      }
      function Sr(r, i, c, x, M, J, D, Q) {
        var P = i & T;
        if (!P && typeof r != "function")
          throw new wn(A);
        var se = x ? x.length : 0;
        if (se || (i &= ~(_ | F), x = M = t), D = D === t ? D : Yt(ze(D), 0), Q = Q === t ? Q : ze(Q), se -= M ? M.length : 0, i & F) {
          var ie = x, Ae = M;
          x = M = t;
        }
        var me = P ? t : zc(r), Se = [
          r,
          i,
          c,
          x,
          M,
          ie,
          Ae,
          J,
          D,
          Q
        ];
        if (me && H0(Se, me), r = Se[0], i = Se[1], c = Se[2], x = Se[3], M = Se[4], Q = Se[9] = Se[9] === t ? P ? 0 : r.length : Yt(Se[9] - se, 0), !Q && i & (B | K) && (i &= ~(B | K)), !i || i == S)
          var Oe = w0(r, i, c);
        else
          i == B || i == K ? Oe = x0(r, i, Q) : (i == _ || i == (S | _)) && !M.length ? Oe = k0(r, i, c, x) : Oe = gl.apply(t, Se);
        var Fe = me ? ed : Dd;
        return Rd(Fe(Oe, Se), r, i);
      }
      function kd(r, i, c, x) {
        return r === t || nr(r, ea[c]) && !ut.call(x, c) ? i : r;
      }
      function bd(r, i, c, x, M, J) {
        return Rt(r) && Rt(i) && (J.set(i, r), dl(r, i, t, bd, J), J.delete(i)), r;
      }
      function y0(r) {
        return Ti(r) ? t : r;
      }
      function yd(r, i, c, x, M, J) {
        var D = c & b, Q = r.length, P = i.length;
        if (Q != P && !(D && P > Q))
          return !1;
        var se = J.get(r), ie = J.get(i);
        if (se && ie)
          return se == i && ie == r;
        var Ae = -1, me = !0, Se = c & y ? new ya() : t;
        for (J.set(r, i), J.set(i, r); ++Ae < Q; ) {
          var Oe = r[Ae], Fe = i[Ae];
          if (x)
            var Qe = D ? x(Fe, Oe, Ae, i, r, J) : x(Oe, Fe, Ae, r, i, J);
          if (Qe !== t) {
            if (Qe)
              continue;
            me = !1;
            break;
          }
          if (Se) {
            if (!ui(i, function(We, _e) {
              if (!va(Se, _e) && (Oe === We || M(Oe, We, c, x, J)))
                return Se.push(_e);
            })) {
              me = !1;
              break;
            }
          } else if (!(Oe === Fe || M(Oe, Fe, c, x, J))) {
            me = !1;
            break;
          }
        }
        return J.delete(r), J.delete(i), me;
      }
      function E0(r, i, c, x, M, J, D) {
        switch (c) {
          case Zr:
            if (r.byteLength != i.byteLength || r.byteOffset != i.byteOffset)
              return !1;
            r = r.buffer, i = i.buffer;
          case Fr:
            return !(r.byteLength != i.byteLength || !J(new As(r), new As(i)));
          case Ve:
          case Le:
          case Pt:
            return nr(+r, +i);
          case Ee:
            return r.name == i.name && r.message == i.message;
          case rt:
          case zr:
            return r == i + "";
          case wt:
            var Q = gi;
          case Pe:
            var P = x & b;
            if (Q || (Q = rs), r.size != i.size && !P)
              return !1;
            var se = D.get(r);
            if (se)
              return se == i;
            x |= y, D.set(r, i);
            var ie = yd(Q(r), Q(i), x, M, J, D);
            return D.delete(r), ie;
          case Yr:
            if (Wt)
              return Wt.call(r) == Wt.call(i);
        }
        return !1;
      }
      function M0(r, i, c, x, M, J) {
        var D = c & b, Q = Lc(r), P = Q.length, se = Lc(i), ie = se.length;
        if (P != ie && !D)
          return !1;
        for (var Ae = P; Ae--; ) {
          var me = Q[Ae];
          if (!(D ? me in i : ut.call(i, me)))
            return !1;
        }
        var Se = J.get(r), Oe = J.get(i);
        if (Se && Oe)
          return Se == i && Oe == r;
        var Fe = !0;
        J.set(r, i), J.set(i, r);
        for (var Qe = D; ++Ae < P; ) {
          me = Q[Ae];
          var We = r[me], _e = i[me];
          if (x)
            var Ln = D ? x(_e, We, me, i, r, J) : x(We, _e, me, r, i, J);
          if (!(Ln === t ? We === _e || M(We, _e, c, x, J) : Ln)) {
            Fe = !1;
            break;
          }
          Qe || (Qe = me == "constructor");
        }
        if (Fe && !Qe) {
          var bn = r.constructor, Pn = i.constructor;
          bn != Pn && "constructor" in r && "constructor" in i && !(typeof bn == "function" && bn instanceof bn && typeof Pn == "function" && Pn instanceof Pn) && (Fe = !1);
        }
        return J.delete(r), J.delete(i), Fe;
      }
      function Ir(r) {
        return Xc(Td(r, t, Bd), r + "");
      }
      function Lc(r) {
        return Yf(r, an, Fc);
      }
      function Pc(r) {
        return Yf(r, Rn, Ed);
      }
      var zc = q ? function(r) {
        return q.get(r);
      } : ou;
      function kl(r) {
        for (var i = r.name + "", c = fe[i], x = ut.call(fe, i) ? c.length : 0; x--; ) {
          var M = c[x], J = M.func;
          if (J == null || J == r)
            return M.name;
        }
        return i;
      }
      function gs(r) {
        var i = ut.call(I, "placeholder") ? I : r;
        return i.placeholder;
      }
      function Re() {
        var r = I.iteratee || su;
        return r = r === su ? Gf : r, arguments.length ? r(arguments[0], arguments[1]) : r;
      }
      function bl(r, i) {
        var c = r.__data__;
        return j0(i) ? c[typeof i == "string" ? "string" : "hash"] : c.map;
      }
      function Yc(r) {
        for (var i = an(r), c = i.length; c--; ) {
          var x = i[c], M = r[x];
          i[c] = [x, M, Id(M)];
        }
        return i;
      }
      function Sa(r, i) {
        var c = or(r, i);
        return Zf(c) ? c : t;
      }
      function S0(r) {
        var i = ut.call(r, br), c = r[br];
        try {
          r[br] = t;
          var x = !0;
        } catch {
        }
        var M = os.call(r);
        return x && (i ? r[br] = c : delete r[br]), M;
      }
      var Fc = wi ? function(r) {
        return r == null ? [] : (r = gt(r), $n(wi(r), function(i) {
          return sl.call(r, i);
        }));
      } : lu, Ed = wi ? function(r) {
        for (var i = []; r; )
          er(i, Fc(r)), r = cs(r);
        return i;
      } : lu, dn = xn;
      (g && dn(new g(new ArrayBuffer(1))) != Zr || w && dn(new w()) != wt || E && dn(E.resolve()) != Jt || C && dn(new C()) != Pe || j && dn(new j()) != _n) && (dn = function(r) {
        var i = xn(r), c = i == tn ? r.constructor : t, x = c ? Ia(c) : "";
        if (x)
          switch (x) {
            case le:
              return Zr;
            case De:
              return wt;
            case ve:
              return Jt;
            case at:
              return Pe;
            case Ge:
              return _n;
          }
        return i;
      });
      function I0(r, i, c) {
        for (var x = -1, M = c.length; ++x < M; ) {
          var J = c[x], D = J.size;
          switch (J.type) {
            case "drop":
              r += D;
              break;
            case "dropRight":
              i -= D;
              break;
            case "take":
              i = rn(i, r + D);
              break;
            case "takeRight":
              r = Yt(r, i - D);
              break;
          }
        }
        return { start: r, end: i };
      }
      function J0(r) {
        var i = r.match(uo);
        return i ? i[1].split(fo) : [];
      }
      function Md(r, i, c) {
        i = ra(i, r);
        for (var x = -1, M = i.length, J = !1; ++x < M; ) {
          var D = fr(i[x]);
          if (!(J = r != null && c(r, D)))
            break;
          r = r[D];
        }
        return J || ++x != M ? J : (M = r == null ? 0 : r.length, !!M && Tl(M) && Jr(D, M) && (Ue(r) || Ja(r)));
      }
      function T0(r) {
        var i = r.length, c = new r.constructor(i);
        return i && typeof r[0] == "string" && ut.call(r, "index") && (c.index = r.index, c.input = r.input), c;
      }
      function Sd(r) {
        return typeof r.constructor == "function" && !Ii(r) ? Hn(cs(r)) : {};
      }
      function C0(r, i, c) {
        var x = r.constructor;
        switch (i) {
          case Fr:
            return Hc(r);
          case Ve:
          case Le:
            return new x(+r);
          case Zr:
            return d0(r, c);
          case sr:
          case pa:
          case ir:
          case Fn:
          case ma:
          case za:
          case Ya:
          case un:
          case zs:
            return ld(r, c);
          case wt:
            return new x();
          case Pt:
          case zr:
            return new x(r);
          case rt:
            return h0(r);
          case Pe:
            return new x();
          case Yr:
            return p0(r);
        }
      }
      function D0(r, i) {
        var c = i.length;
        if (!c)
          return r;
        var x = c - 1;
        return i[x] = (c > 1 ? "& " : "") + i[x], i = i.join(c > 2 ? ", " : " "), r.replace(co, `{
/* [wrapped with ` + i + `] */
`);
      }
      function R0(r) {
        return Ue(r) || Ja(r) || !!(il && r && r[il]);
      }
      function Jr(r, i) {
        var c = typeof r;
        return i = i ?? pe, !!i && (c == "number" || c != "symbol" && MA.test(r)) && r > -1 && r % 1 == 0 && r < i;
      }
      function kn(r, i, c) {
        if (!Rt(c))
          return !1;
        var x = typeof i;
        return (x == "number" ? Dn(c) && Jr(i, c.length) : x == "string" && i in c) ? nr(c[i], r) : !1;
      }
      function Zc(r, i) {
        if (Ue(r))
          return !1;
        var c = typeof r;
        return c == "number" || c == "symbol" || c == "boolean" || r == null || Un(r) ? !0 : oo.test(r) || !Ws.test(r) || i != null && r in gt(i);
      }
      function j0(r) {
        var i = typeof r;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? r !== "__proto__" : r === null;
      }
      function Gc(r) {
        var i = kl(r), c = I[i];
        if (typeof c != "function" || !(i in Ke.prototype))
          return !1;
        if (r === c)
          return !0;
        var x = zc(c);
        return !!x && r === x[0];
      }
      function O0(r) {
        return !!nl && nl in r;
      }
      var Q0 = ss ? Tr : Au;
      function Ii(r) {
        var i = r && r.constructor, c = typeof i == "function" && i.prototype || ea;
        return r === c;
      }
      function Id(r) {
        return r === r && !Rt(r);
      }
      function Jd(r, i) {
        return function(c) {
          return c == null ? !1 : c[r] === i && (i !== t || r in gt(c));
        };
      }
      function N0(r) {
        var i = Il(r, function(x) {
          return c.size === d && c.clear(), x;
        }), c = i.cache;
        return i;
      }
      function H0(r, i) {
        var c = r[1], x = i[1], M = c | x, J = M < (S | T | ee), D = x == ee && c == B || x == ee && c == oe && r[7].length <= i[8] || x == (ee | oe) && i[7].length <= i[8] && c == B;
        if (!(J || D))
          return r;
        x & S && (r[2] = i[2], M |= c & S ? 0 : O);
        var Q = i[3];
        if (Q) {
          var P = r[3];
          r[3] = P ? cd(P, Q, i[4]) : Q, r[4] = P ? lr(r[3], h) : i[4];
        }
        return Q = i[5], Q && (P = r[5], r[5] = P ? ud(P, Q, i[6]) : Q, r[6] = P ? lr(r[5], h) : i[6]), Q = i[7], Q && (r[7] = Q), x & ee && (r[8] = r[8] == null ? i[8] : rn(r[8], i[8])), r[9] == null && (r[9] = i[9]), r[0] = i[0], r[1] = M, r;
      }
      function B0(r) {
        var i = [];
        if (r != null)
          for (var c in gt(r))
            i.push(c);
        return i;
      }
      function U0(r) {
        return os.call(r);
      }
      function Td(r, i, c) {
        return i = Yt(i === t ? r.length - 1 : i, 0), function() {
          for (var x = arguments, M = -1, J = Yt(x.length - i, 0), D = V(J); ++M < J; )
            D[M] = x[i + M];
          M = -1;
          for (var Q = V(i + 1); ++M < i; )
            Q[M] = x[M];
          return Q[i] = c(D), gn(r, this, Q);
        };
      }
      function Cd(r, i) {
        return i.length < 2 ? r : Ma(r, Gn(i, 0, -1));
      }
      function L0(r, i) {
        for (var c = r.length, x = rn(i.length, c), M = Cn(r); x--; ) {
          var J = i[x];
          r[x] = Jr(J, c) ? M[J] : t;
        }
        return r;
      }
      function Kc(r, i) {
        if (!(i === "constructor" && typeof r[i] == "function") && i != "__proto__")
          return r[i];
      }
      var Dd = jd(ed), Ji = ol || function(r, i) {
        return $t.setTimeout(r, i);
      }, Xc = jd(A0);
      function Rd(r, i, c) {
        var x = i + "";
        return Xc(r, D0(x, P0(J0(x), c)));
      }
      function jd(r) {
        var i = 0, c = 0;
        return function() {
          var x = vc(), M = N - (x - c);
          if (c = x, M > 0) {
            if (++i >= Z)
              return arguments[0];
          } else
            i = 0;
          return r.apply(t, arguments);
        };
      }
      function yl(r, i) {
        var c = -1, x = r.length, M = x - 1;
        for (i = i === t ? x : i; ++c < i; ) {
          var J = Cc(c, M), D = r[J];
          r[J] = r[c], r[c] = D;
        }
        return r.length = i, r;
      }
      var Od = N0(function(r) {
        var i = [];
        return r.charCodeAt(0) === 46 && i.push(""), r.replace(xA, function(c, x, M, J) {
          i.push(M ? J.replace(Ga, "$1") : x || c);
        }), i;
      });
      function fr(r) {
        if (typeof r == "string" || Un(r))
          return r;
        var i = r + "";
        return i == "0" && 1 / r == -G ? "-0" : i;
      }
      function Ia(r) {
        if (r != null) {
          try {
            return is.call(r);
          } catch {
          }
          try {
            return r + "";
          } catch {
          }
        }
        return "";
      }
      function P0(r, i) {
        return vn(de, function(c) {
          var x = "_." + c[0];
          i & c[1] && !ga(r, x) && r.push(x);
        }), r.sort();
      }
      function Qd(r) {
        if (r instanceof Ke)
          return r.clone();
        var i = new qt(r.__wrapped__, r.__chain__);
        return i.__actions__ = Cn(r.__actions__), i.__index__ = r.__index__, i.__values__ = r.__values__, i;
      }
      function z0(r, i, c) {
        (c ? kn(r, i, c) : i === t) ? i = 1 : i = Yt(ze(i), 0);
        var x = r == null ? 0 : r.length;
        if (!x || i < 1)
          return [];
        for (var M = 0, J = 0, D = V(ds(x / i)); M < x; )
          D[J++] = Gn(r, M, M += i);
        return D;
      }
      function Y0(r) {
        for (var i = -1, c = r == null ? 0 : r.length, x = 0, M = []; ++i < c; ) {
          var J = r[i];
          J && (M[x++] = J);
        }
        return M;
      }
      function F0() {
        var r = arguments.length;
        if (!r)
          return [];
        for (var i = V(r - 1), c = arguments[0], x = r; x--; )
          i[x - 1] = arguments[x];
        return er(Ue(c) ? Cn(c) : [c], ln(i, 1));
      }
      var Z0 = Ze(function(r, i) {
        return Ft(r) ? bi(r, ln(i, 1, Ft, !0)) : [];
      }), G0 = Ze(function(r, i) {
        var c = Kn(i);
        return Ft(c) && (c = t), Ft(r) ? bi(r, ln(i, 1, Ft, !0), Re(c, 2)) : [];
      }), K0 = Ze(function(r, i) {
        var c = Kn(i);
        return Ft(c) && (c = t), Ft(r) ? bi(r, ln(i, 1, Ft, !0), t, c) : [];
      });
      function X0(r, i, c) {
        var x = r == null ? 0 : r.length;
        return x ? (i = c || i === t ? 1 : ze(i), Gn(r, i < 0 ? 0 : i, x)) : [];
      }
      function W0(r, i, c) {
        var x = r == null ? 0 : r.length;
        return x ? (i = c || i === t ? 1 : ze(i), i = x - i, Gn(r, 0, i < 0 ? 0 : i)) : [];
      }
      function q0(r, i) {
        return r && r.length ? pl(r, Re(i, 3), !0, !0) : [];
      }
      function V0(r, i) {
        return r && r.length ? pl(r, Re(i, 3), !0) : [];
      }
      function _0(r, i, c, x) {
        var M = r == null ? 0 : r.length;
        return M ? (c && typeof c != "number" && kn(r, i, c) && (c = 0, x = M), Fg(r, i, c, x)) : [];
      }
      function Nd(r, i, c) {
        var x = r == null ? 0 : r.length;
        if (!x)
          return -1;
        var M = c == null ? 0 : ze(c);
        return M < 0 && (M = Yt(x + M, 0)), ns(r, Re(i, 3), M);
      }
      function Hd(r, i, c) {
        var x = r == null ? 0 : r.length;
        if (!x)
          return -1;
        var M = x - 1;
        return c !== t && (M = ze(c), M = c < 0 ? Yt(x + M, 0) : rn(M, x - 1)), ns(r, Re(i, 3), M, !0);
      }
      function Bd(r) {
        var i = r == null ? 0 : r.length;
        return i ? ln(r, 1) : [];
      }
      function $0(r) {
        var i = r == null ? 0 : r.length;
        return i ? ln(r, G) : [];
      }
      function ev(r, i) {
        var c = r == null ? 0 : r.length;
        return c ? (i = i === t ? 1 : ze(i), ln(r, i)) : [];
      }
      function tv(r) {
        for (var i = -1, c = r == null ? 0 : r.length, x = {}; ++i < c; ) {
          var M = r[i];
          x[M[0]] = M[1];
        }
        return x;
      }
      function Ud(r) {
        return r && r.length ? r[0] : t;
      }
      function nv(r, i, c) {
        var x = r == null ? 0 : r.length;
        if (!x)
          return -1;
        var M = c == null ? 0 : ze(c);
        return M < 0 && (M = Yt(x + M, 0)), qr(r, i, M);
      }
      function rv(r) {
        var i = r == null ? 0 : r.length;
        return i ? Gn(r, 0, -1) : [];
      }
      var av = Ze(function(r) {
        var i = kt(r, Qc);
        return i.length && i[0] === r[0] ? Mc(i) : [];
      }), sv = Ze(function(r) {
        var i = Kn(r), c = kt(r, Qc);
        return i === Kn(c) ? i = t : c.pop(), c.length && c[0] === r[0] ? Mc(c, Re(i, 2)) : [];
      }), iv = Ze(function(r) {
        var i = Kn(r), c = kt(r, Qc);
        return i = typeof i == "function" ? i : t, i && c.pop(), c.length && c[0] === r[0] ? Mc(c, t, i) : [];
      });
      function ov(r, i) {
        return r == null ? "" : Tt.call(r, i);
      }
      function Kn(r) {
        var i = r == null ? 0 : r.length;
        return i ? r[i - 1] : t;
      }
      function lv(r, i, c) {
        var x = r == null ? 0 : r.length;
        if (!x)
          return -1;
        var M = x;
        return c !== t && (M = ze(c), M = M < 0 ? Yt(x + M, 0) : rn(M, x - 1)), i === i ? ac(r, i, M) : ns(r, Ko, M, !0);
      }
      function Av(r, i) {
        return r && r.length ? qf(r, ze(i)) : t;
      }
      var cv = Ze(Ld);
      function Ld(r, i) {
        return r && r.length && i && i.length ? Tc(r, i) : r;
      }
      function uv(r, i, c) {
        return r && r.length && i && i.length ? Tc(r, i, Re(c, 2)) : r;
      }
      function fv(r, i, c) {
        return r && r.length && i && i.length ? Tc(r, i, t, c) : r;
      }
      var dv = Ir(function(r, i) {
        var c = r == null ? 0 : r.length, x = kc(r, i);
        return $f(r, kt(i, function(M) {
          return Jr(M, c) ? +M : M;
        }).sort(Ad)), x;
      });
      function hv(r, i) {
        var c = [];
        if (!(r && r.length))
          return c;
        var x = -1, M = [], J = r.length;
        for (i = Re(i, 3); ++x < J; ) {
          var D = r[x];
          i(D, x, r) && (c.push(D), M.push(x));
        }
        return $f(r, M), c;
      }
      function Wc(r) {
        return r == null ? r : p.call(r);
      }
      function pv(r, i, c) {
        var x = r == null ? 0 : r.length;
        return x ? (c && typeof c != "number" && kn(r, i, c) ? (i = 0, c = x) : (i = i == null ? 0 : ze(i), c = c === t ? x : ze(c)), Gn(r, i, c)) : [];
      }
      function mv(r, i) {
        return hl(r, i);
      }
      function gv(r, i, c) {
        return Rc(r, i, Re(c, 2));
      }
      function vv(r, i) {
        var c = r == null ? 0 : r.length;
        if (c) {
          var x = hl(r, i);
          if (x < c && nr(r[x], i))
            return x;
        }
        return -1;
      }
      function wv(r, i) {
        return hl(r, i, !0);
      }
      function xv(r, i, c) {
        return Rc(r, i, Re(c, 2), !0);
      }
      function kv(r, i) {
        var c = r == null ? 0 : r.length;
        if (c) {
          var x = hl(r, i, !0) - 1;
          if (nr(r[x], i))
            return x;
        }
        return -1;
      }
      function bv(r) {
        return r && r.length ? td(r) : [];
      }
      function yv(r, i) {
        return r && r.length ? td(r, Re(i, 2)) : [];
      }
      function Ev(r) {
        var i = r == null ? 0 : r.length;
        return i ? Gn(r, 1, i) : [];
      }
      function Mv(r, i, c) {
        return r && r.length ? (i = c || i === t ? 1 : ze(i), Gn(r, 0, i < 0 ? 0 : i)) : [];
      }
      function Sv(r, i, c) {
        var x = r == null ? 0 : r.length;
        return x ? (i = c || i === t ? 1 : ze(i), i = x - i, Gn(r, i < 0 ? 0 : i, x)) : [];
      }
      function Iv(r, i) {
        return r && r.length ? pl(r, Re(i, 3), !1, !0) : [];
      }
      function Jv(r, i) {
        return r && r.length ? pl(r, Re(i, 3)) : [];
      }
      var Tv = Ze(function(r) {
        return na(ln(r, 1, Ft, !0));
      }), Cv = Ze(function(r) {
        var i = Kn(r);
        return Ft(i) && (i = t), na(ln(r, 1, Ft, !0), Re(i, 2));
      }), Dv = Ze(function(r) {
        var i = Kn(r);
        return i = typeof i == "function" ? i : t, na(ln(r, 1, Ft, !0), t, i);
      });
      function Rv(r) {
        return r && r.length ? na(r) : [];
      }
      function jv(r, i) {
        return r && r.length ? na(r, Re(i, 2)) : [];
      }
      function Ov(r, i) {
        return i = typeof i == "function" ? i : t, r && r.length ? na(r, t, i) : [];
      }
      function qc(r) {
        if (!(r && r.length))
          return [];
        var i = 0;
        return r = $n(r, function(c) {
          if (Ft(c))
            return i = Yt(c.length, i), !0;
        }), pi(i, function(c) {
          return kt(r, fi(c));
        });
      }
      function Pd(r, i) {
        if (!(r && r.length))
          return [];
        var c = qc(r);
        return i == null ? c : kt(c, function(x) {
          return gn(i, t, x);
        });
      }
      var Qv = Ze(function(r, i) {
        return Ft(r) ? bi(r, i) : [];
      }), Nv = Ze(function(r) {
        return Oc($n(r, Ft));
      }), Hv = Ze(function(r) {
        var i = Kn(r);
        return Ft(i) && (i = t), Oc($n(r, Ft), Re(i, 2));
      }), Bv = Ze(function(r) {
        var i = Kn(r);
        return i = typeof i == "function" ? i : t, Oc($n(r, Ft), t, i);
      }), Uv = Ze(qc);
      function Lv(r, i) {
        return sd(r || [], i || [], ki);
      }
      function Pv(r, i) {
        return sd(r || [], i || [], Mi);
      }
      var zv = Ze(function(r) {
        var i = r.length, c = i > 1 ? r[i - 1] : t;
        return c = typeof c == "function" ? (r.pop(), c) : t, Pd(r, c);
      });
      function zd(r) {
        var i = I(r);
        return i.__chain__ = !0, i;
      }
      function Yv(r, i) {
        return i(r), r;
      }
      function El(r, i) {
        return i(r);
      }
      var Fv = Ir(function(r) {
        var i = r.length, c = i ? r[0] : 0, x = this.__wrapped__, M = function(J) {
          return kc(J, r);
        };
        return i > 1 || this.__actions__.length || !(x instanceof Ke) || !Jr(c) ? this.thru(M) : (x = x.slice(c, +c + (i ? 1 : 0)), x.__actions__.push({
          func: El,
          args: [M],
          thisArg: t
        }), new qt(x, this.__chain__).thru(function(J) {
          return i && !J.length && J.push(t), J;
        }));
      });
      function Zv() {
        return zd(this);
      }
      function Gv() {
        return new qt(this.value(), this.__chain__);
      }
      function Kv() {
        this.__values__ === t && (this.__values__ = nh(this.value()));
        var r = this.__index__ >= this.__values__.length, i = r ? t : this.__values__[this.__index__++];
        return { done: r, value: i };
      }
      function Xv() {
        return this;
      }
      function Wv(r) {
        for (var i, c = this; c instanceof xa; ) {
          var x = Qd(c);
          x.__index__ = 0, x.__values__ = t, i ? M.__wrapped__ = x : i = x;
          var M = x;
          c = c.__wrapped__;
        }
        return M.__wrapped__ = r, i;
      }
      function qv() {
        var r = this.__wrapped__;
        if (r instanceof Ke) {
          var i = r;
          return this.__actions__.length && (i = new Ke(this)), i = i.reverse(), i.__actions__.push({
            func: El,
            args: [Wc],
            thisArg: t
          }), new qt(i, this.__chain__);
        }
        return this.thru(Wc);
      }
      function Vv() {
        return ad(this.__wrapped__, this.__actions__);
      }
      var _v = ml(function(r, i, c) {
        ut.call(r, c) ? ++r[c] : Mr(r, c, 1);
      });
      function $v(r, i, c) {
        var x = Ue(r) ? ci : Yg;
        return c && kn(r, i, c) && (i = t), x(r, Re(i, 3));
      }
      function ew(r, i) {
        var c = Ue(r) ? $n : Pf;
        return c(r, Re(i, 3));
      }
      var tw = pd(Nd), nw = pd(Hd);
      function rw(r, i) {
        return ln(Ml(r, i), 1);
      }
      function aw(r, i) {
        return ln(Ml(r, i), G);
      }
      function sw(r, i, c) {
        return c = c === t ? 1 : ze(c), ln(Ml(r, i), c);
      }
      function Yd(r, i) {
        var c = Ue(r) ? vn : ta;
        return c(r, Re(i, 3));
      }
      function Fd(r, i) {
        var c = Ue(r) ? Fo : Lf;
        return c(r, Re(i, 3));
      }
      var iw = ml(function(r, i, c) {
        ut.call(r, c) ? r[c].push(i) : Mr(r, c, [i]);
      });
      function ow(r, i, c, x) {
        r = Dn(r) ? r : ws(r), c = c && !x ? ze(c) : 0;
        var M = r.length;
        return c < 0 && (c = Yt(M + c, 0)), Cl(r) ? c <= M && r.indexOf(i, c) > -1 : !!M && qr(r, i, c) > -1;
      }
      var lw = Ze(function(r, i, c) {
        var x = -1, M = typeof i == "function", J = Dn(r) ? V(r.length) : [];
        return ta(r, function(D) {
          J[++x] = M ? gn(i, D, c) : yi(D, i, c);
        }), J;
      }), Aw = ml(function(r, i, c) {
        Mr(r, c, i);
      });
      function Ml(r, i) {
        var c = Ue(r) ? kt : Kf;
        return c(r, Re(i, 3));
      }
      function cw(r, i, c, x) {
        return r == null ? [] : (Ue(i) || (i = i == null ? [] : [i]), c = x ? t : c, Ue(c) || (c = c == null ? [] : [c]), Vf(r, i, c));
      }
      var uw = ml(function(r, i, c) {
        r[c ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function fw(r, i, c) {
        var x = Ue(r) ? ts : Wo, M = arguments.length < 3;
        return x(r, Re(i, 4), c, M, ta);
      }
      function dw(r, i, c) {
        var x = Ue(r) ? Zo : Wo, M = arguments.length < 3;
        return x(r, Re(i, 4), c, M, Lf);
      }
      function hw(r, i) {
        var c = Ue(r) ? $n : Pf;
        return c(r, Jl(Re(i, 3)));
      }
      function pw(r) {
        var i = Ue(r) ? Nf : o0;
        return i(r);
      }
      function mw(r, i, c) {
        (c ? kn(r, i, c) : i === t) ? i = 1 : i = ze(i);
        var x = Ue(r) ? Bg : l0;
        return x(r, i);
      }
      function gw(r) {
        var i = Ue(r) ? Ug : c0;
        return i(r);
      }
      function vw(r) {
        if (r == null)
          return 0;
        if (Dn(r))
          return Cl(r) ? _r(r) : r.length;
        var i = dn(r);
        return i == wt || i == Pe ? r.size : Ic(r).length;
      }
      function ww(r, i, c) {
        var x = Ue(r) ? ui : u0;
        return c && kn(r, i, c) && (i = t), x(r, Re(i, 3));
      }
      var xw = Ze(function(r, i) {
        if (r == null)
          return [];
        var c = i.length;
        return c > 1 && kn(r, i[0], i[1]) ? i = [] : c > 2 && kn(i[0], i[1], i[2]) && (i = [i[0]]), Vf(r, ln(i, 1), []);
      }), Sl = pc || function() {
        return $t.Date.now();
      };
      function kw(r, i) {
        if (typeof i != "function")
          throw new wn(A);
        return r = ze(r), function() {
          if (--r < 1)
            return i.apply(this, arguments);
        };
      }
      function Zd(r, i, c) {
        return i = c ? t : i, i = r && i == null ? r.length : i, Sr(r, ee, t, t, t, t, i);
      }
      function Gd(r, i) {
        var c;
        if (typeof i != "function")
          throw new wn(A);
        return r = ze(r), function() {
          return --r > 0 && (c = i.apply(this, arguments)), r <= 1 && (i = t), c;
        };
      }
      var Vc = Ze(function(r, i, c) {
        var x = S;
        if (c.length) {
          var M = lr(c, gs(Vc));
          x |= _;
        }
        return Sr(r, x, i, c, M);
      }), Kd = Ze(function(r, i, c) {
        var x = S | T;
        if (c.length) {
          var M = lr(c, gs(Kd));
          x |= _;
        }
        return Sr(i, x, r, c, M);
      });
      function Xd(r, i, c) {
        i = c ? t : i;
        var x = Sr(r, B, t, t, t, t, t, i);
        return x.placeholder = Xd.placeholder, x;
      }
      function Wd(r, i, c) {
        i = c ? t : i;
        var x = Sr(r, K, t, t, t, t, t, i);
        return x.placeholder = Wd.placeholder, x;
      }
      function qd(r, i, c) {
        var x, M, J, D, Q, P, se = 0, ie = !1, Ae = !1, me = !0;
        if (typeof r != "function")
          throw new wn(A);
        i = Xn(i) || 0, Rt(c) && (ie = !!c.leading, Ae = "maxWait" in c, J = Ae ? Yt(Xn(c.maxWait) || 0, i) : J, me = "trailing" in c ? !!c.trailing : me);
        function Se(Zt) {
          var rr = x, Dr = M;
          return x = M = t, se = Zt, D = r.apply(Dr, rr), D;
        }
        function Oe(Zt) {
          return se = Zt, Q = Ji(We, i), ie ? Se(Zt) : D;
        }
        function Fe(Zt) {
          var rr = Zt - P, Dr = Zt - se, ph = i - rr;
          return Ae ? rn(ph, J - Dr) : ph;
        }
        function Qe(Zt) {
          var rr = Zt - P, Dr = Zt - se;
          return P === t || rr >= i || rr < 0 || Ae && Dr >= J;
        }
        function We() {
          var Zt = Sl();
          if (Qe(Zt))
            return _e(Zt);
          Q = Ji(We, Fe(Zt));
        }
        function _e(Zt) {
          return Q = t, me && x ? Se(Zt) : (x = M = t, D);
        }
        function Ln() {
          Q !== t && id(Q), se = 0, x = P = M = Q = t;
        }
        function bn() {
          return Q === t ? D : _e(Sl());
        }
        function Pn() {
          var Zt = Sl(), rr = Qe(Zt);
          if (x = arguments, M = this, P = Zt, rr) {
            if (Q === t)
              return Oe(P);
            if (Ae)
              return id(Q), Q = Ji(We, i), Se(P);
          }
          return Q === t && (Q = Ji(We, i)), D;
        }
        return Pn.cancel = Ln, Pn.flush = bn, Pn;
      }
      var bw = Ze(function(r, i) {
        return Uf(r, 1, i);
      }), yw = Ze(function(r, i, c) {
        return Uf(r, Xn(i) || 0, c);
      });
      function Ew(r) {
        return Sr(r, re);
      }
      function Il(r, i) {
        if (typeof r != "function" || i != null && typeof i != "function")
          throw new wn(A);
        var c = function() {
          var x = arguments, M = i ? i.apply(this, x) : x[0], J = c.cache;
          if (J.has(M))
            return J.get(M);
          var D = r.apply(this, x);
          return c.cache = J.set(M, D) || J, D;
        };
        return c.cache = new (Il.Cache || Er)(), c;
      }
      Il.Cache = Er;
      function Jl(r) {
        if (typeof r != "function")
          throw new wn(A);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !r.call(this);
            case 1:
              return !r.call(this, i[0]);
            case 2:
              return !r.call(this, i[0], i[1]);
            case 3:
              return !r.call(this, i[0], i[1], i[2]);
          }
          return !r.apply(this, i);
        };
      }
      function Mw(r) {
        return Gd(2, r);
      }
      var Sw = f0(function(r, i) {
        i = i.length == 1 && Ue(i[0]) ? kt(i[0], fn(Re())) : kt(ln(i, 1), fn(Re()));
        var c = i.length;
        return Ze(function(x) {
          for (var M = -1, J = rn(x.length, c); ++M < J; )
            x[M] = i[M].call(this, x[M]);
          return gn(r, this, x);
        });
      }), _c = Ze(function(r, i) {
        var c = lr(i, gs(_c));
        return Sr(r, _, t, i, c);
      }), Vd = Ze(function(r, i) {
        var c = lr(i, gs(Vd));
        return Sr(r, F, t, i, c);
      }), Iw = Ir(function(r, i) {
        return Sr(r, oe, t, t, t, i);
      });
      function Jw(r, i) {
        if (typeof r != "function")
          throw new wn(A);
        return i = i === t ? i : ze(i), Ze(r, i);
      }
      function Tw(r, i) {
        if (typeof r != "function")
          throw new wn(A);
        return i = i == null ? 0 : Yt(ze(i), 0), Ze(function(c) {
          var x = c[i], M = aa(c, 0, i);
          return x && er(M, x), gn(r, this, M);
        });
      }
      function Cw(r, i, c) {
        var x = !0, M = !0;
        if (typeof r != "function")
          throw new wn(A);
        return Rt(c) && (x = "leading" in c ? !!c.leading : x, M = "trailing" in c ? !!c.trailing : M), qd(r, i, {
          leading: x,
          maxWait: i,
          trailing: M
        });
      }
      function Dw(r) {
        return Zd(r, 1);
      }
      function Rw(r, i) {
        return _c(Nc(i), r);
      }
      function jw() {
        if (!arguments.length)
          return [];
        var r = arguments[0];
        return Ue(r) ? r : [r];
      }
      function Ow(r) {
        return Zn(r, k);
      }
      function Qw(r, i) {
        return i = typeof i == "function" ? i : t, Zn(r, k, i);
      }
      function Nw(r) {
        return Zn(r, m | k);
      }
      function Hw(r, i) {
        return i = typeof i == "function" ? i : t, Zn(r, m | k, i);
      }
      function Bw(r, i) {
        return i == null || Bf(r, i, an(i));
      }
      function nr(r, i) {
        return r === i || r !== r && i !== i;
      }
      var Uw = xl(Ec), Lw = xl(function(r, i) {
        return r >= i;
      }), Ja = Ff(function() {
        return arguments;
      }()) ? Ff : function(r) {
        return Nt(r) && ut.call(r, "callee") && !sl.call(r, "callee");
      }, Ue = V.isArray, Pw = Bo ? fn(Bo) : Wg;
      function Dn(r) {
        return r != null && Tl(r.length) && !Tr(r);
      }
      function Ft(r) {
        return Nt(r) && Dn(r);
      }
      function zw(r) {
        return r === !0 || r === !1 || Nt(r) && xn(r) == Ve;
      }
      var sa = mc || Au, Yw = Uo ? fn(Uo) : qg;
      function Fw(r) {
        return Nt(r) && r.nodeType === 1 && !Ti(r);
      }
      function Zw(r) {
        if (r == null)
          return !0;
        if (Dn(r) && (Ue(r) || typeof r == "string" || typeof r.splice == "function" || sa(r) || vs(r) || Ja(r)))
          return !r.length;
        var i = dn(r);
        if (i == wt || i == Pe)
          return !r.size;
        if (Ii(r))
          return !Ic(r).length;
        for (var c in r)
          if (ut.call(r, c))
            return !1;
        return !0;
      }
      function Gw(r, i) {
        return Ei(r, i);
      }
      function Kw(r, i, c) {
        c = typeof c == "function" ? c : t;
        var x = c ? c(r, i) : t;
        return x === t ? Ei(r, i, t, c) : !!x;
      }
      function $c(r) {
        if (!Nt(r))
          return !1;
        var i = xn(r);
        return i == Ee || i == te || typeof r.message == "string" && typeof r.name == "string" && !Ti(r);
      }
      function Xw(r) {
        return typeof r == "number" && ll(r);
      }
      function Tr(r) {
        if (!Rt(r))
          return !1;
        var i = xn(r);
        return i == Ce || i == Xe || i == Xt || i == kr;
      }
      function _d(r) {
        return typeof r == "number" && r == ze(r);
      }
      function Tl(r) {
        return typeof r == "number" && r > -1 && r % 1 == 0 && r <= pe;
      }
      function Rt(r) {
        var i = typeof r;
        return r != null && (i == "object" || i == "function");
      }
      function Nt(r) {
        return r != null && typeof r == "object";
      }
      var $d = Lo ? fn(Lo) : _g;
      function Ww(r, i) {
        return r === i || Sc(r, i, Yc(i));
      }
      function qw(r, i, c) {
        return c = typeof c == "function" ? c : t, Sc(r, i, Yc(i), c);
      }
      function Vw(r) {
        return eh(r) && r != +r;
      }
      function _w(r) {
        if (Q0(r))
          throw new He(l);
        return Zf(r);
      }
      function $w(r) {
        return r === null;
      }
      function ex(r) {
        return r == null;
      }
      function eh(r) {
        return typeof r == "number" || Nt(r) && xn(r) == Pt;
      }
      function Ti(r) {
        if (!Nt(r) || xn(r) != tn)
          return !1;
        var i = cs(r);
        if (i === null)
          return !0;
        var c = ut.call(i, "constructor") && i.constructor;
        return typeof c == "function" && c instanceof c && is.call(c) == on;
      }
      var eu = Po ? fn(Po) : $g;
      function tx(r) {
        return _d(r) && r >= -pe && r <= pe;
      }
      var th = zo ? fn(zo) : e0;
      function Cl(r) {
        return typeof r == "string" || !Ue(r) && Nt(r) && xn(r) == zr;
      }
      function Un(r) {
        return typeof r == "symbol" || Nt(r) && xn(r) == Yr;
      }
      var vs = Yo ? fn(Yo) : t0;
      function nx(r) {
        return r === t;
      }
      function rx(r) {
        return Nt(r) && dn(r) == _n;
      }
      function ax(r) {
        return Nt(r) && xn(r) == vA;
      }
      var sx = xl(Jc), ix = xl(function(r, i) {
        return r <= i;
      });
      function nh(r) {
        if (!r)
          return [];
        if (Dn(r))
          return Cl(r) ? Jn(r) : Cn(r);
        if (wa && r[wa])
          return tc(r[wa]());
        var i = dn(r), c = i == wt ? gi : i == Pe ? rs : ws;
        return c(r);
      }
      function Cr(r) {
        if (!r)
          return r === 0 ? r : 0;
        if (r = Xn(r), r === G || r === -G) {
          var i = r < 0 ? -1 : 1;
          return i * ke;
        }
        return r === r ? r : 0;
      }
      function ze(r) {
        var i = Cr(r), c = i % 1;
        return i === i ? c ? i - c : i : 0;
      }
      function rh(r) {
        return r ? Ea(ze(r), 0, Ie) : 0;
      }
      function Xn(r) {
        if (typeof r == "number")
          return r;
        if (Un(r))
          return X;
        if (Rt(r)) {
          var i = typeof r.valueOf == "function" ? r.valueOf() : r;
          r = Rt(i) ? i + "" : i;
        }
        if (typeof r != "string")
          return r === 0 ? r : +r;
        r = qo(r);
        var c = bA.test(r);
        return c || EA.test(r) ? zA(r.slice(2), c ? 2 : 8) : kA.test(r) ? X : +r;
      }
      function ah(r) {
        return ur(r, Rn(r));
      }
      function ox(r) {
        return r ? Ea(ze(r), -pe, pe) : r === 0 ? r : 0;
      }
      function pt(r) {
        return r == null ? "" : Bn(r);
      }
      var lx = ps(function(r, i) {
        if (Ii(i) || Dn(i)) {
          ur(i, an(i), r);
          return;
        }
        for (var c in i)
          ut.call(i, c) && ki(r, c, i[c]);
      }), sh = ps(function(r, i) {
        ur(i, Rn(i), r);
      }), Dl = ps(function(r, i, c, x) {
        ur(i, Rn(i), r, x);
      }), Ax = ps(function(r, i, c, x) {
        ur(i, an(i), r, x);
      }), cx = Ir(kc);
      function ux(r, i) {
        var c = Hn(r);
        return i == null ? c : Hf(c, i);
      }
      var fx = Ze(function(r, i) {
        r = gt(r);
        var c = -1, x = i.length, M = x > 2 ? i[2] : t;
        for (M && kn(i[0], i[1], M) && (x = 1); ++c < x; )
          for (var J = i[c], D = Rn(J), Q = -1, P = D.length; ++Q < P; ) {
            var se = D[Q], ie = r[se];
            (ie === t || nr(ie, ea[se]) && !ut.call(r, se)) && (r[se] = J[se]);
          }
        return r;
      }), dx = Ze(function(r) {
        return r.push(t, bd), gn(ih, t, r);
      });
      function hx(r, i) {
        return Go(r, Re(i, 3), cr);
      }
      function px(r, i) {
        return Go(r, Re(i, 3), yc);
      }
      function mx(r, i) {
        return r == null ? r : bc(r, Re(i, 3), Rn);
      }
      function gx(r, i) {
        return r == null ? r : zf(r, Re(i, 3), Rn);
      }
      function vx(r, i) {
        return r && cr(r, Re(i, 3));
      }
      function wx(r, i) {
        return r && yc(r, Re(i, 3));
      }
      function xx(r) {
        return r == null ? [] : fl(r, an(r));
      }
      function kx(r) {
        return r == null ? [] : fl(r, Rn(r));
      }
      function tu(r, i, c) {
        var x = r == null ? t : Ma(r, i);
        return x === t ? c : x;
      }
      function bx(r, i) {
        return r != null && Md(r, i, Zg);
      }
      function nu(r, i) {
        return r != null && Md(r, i, Gg);
      }
      var yx = gd(function(r, i, c) {
        i != null && typeof i.toString != "function" && (i = os.call(i)), r[i] = c;
      }, au(jn)), Ex = gd(function(r, i, c) {
        i != null && typeof i.toString != "function" && (i = os.call(i)), ut.call(r, i) ? r[i].push(c) : r[i] = [c];
      }, Re), Mx = Ze(yi);
      function an(r) {
        return Dn(r) ? Qf(r) : Ic(r);
      }
      function Rn(r) {
        return Dn(r) ? Qf(r, !0) : n0(r);
      }
      function Sx(r, i) {
        var c = {};
        return i = Re(i, 3), cr(r, function(x, M, J) {
          Mr(c, i(x, M, J), x);
        }), c;
      }
      function Ix(r, i) {
        var c = {};
        return i = Re(i, 3), cr(r, function(x, M, J) {
          Mr(c, M, i(x, M, J));
        }), c;
      }
      var Jx = ps(function(r, i, c) {
        dl(r, i, c);
      }), ih = ps(function(r, i, c, x) {
        dl(r, i, c, x);
      }), Tx = Ir(function(r, i) {
        var c = {};
        if (r == null)
          return c;
        var x = !1;
        i = kt(i, function(J) {
          return J = ra(J, r), x || (x = J.length > 1), J;
        }), ur(r, Pc(r), c), x && (c = Zn(c, m | v | k, y0));
        for (var M = i.length; M--; )
          jc(c, i[M]);
        return c;
      });
      function Cx(r, i) {
        return oh(r, Jl(Re(i)));
      }
      var Dx = Ir(function(r, i) {
        return r == null ? {} : a0(r, i);
      });
      function oh(r, i) {
        if (r == null)
          return {};
        var c = kt(Pc(r), function(x) {
          return [x];
        });
        return i = Re(i), _f(r, c, function(x, M) {
          return i(x, M[0]);
        });
      }
      function Rx(r, i, c) {
        i = ra(i, r);
        var x = -1, M = i.length;
        for (M || (M = 1, r = t); ++x < M; ) {
          var J = r == null ? t : r[fr(i[x])];
          J === t && (x = M, J = c), r = Tr(J) ? J.call(r) : J;
        }
        return r;
      }
      function jx(r, i, c) {
        return r == null ? r : Mi(r, i, c);
      }
      function Ox(r, i, c, x) {
        return x = typeof x == "function" ? x : t, r == null ? r : Mi(r, i, c, x);
      }
      var lh = xd(an), Ah = xd(Rn);
      function Qx(r, i, c) {
        var x = Ue(r), M = x || sa(r) || vs(r);
        if (i = Re(i, 4), c == null) {
          var J = r && r.constructor;
          M ? c = x ? new J() : [] : Rt(r) ? c = Tr(J) ? Hn(cs(r)) : {} : c = {};
        }
        return (M ? vn : cr)(r, function(D, Q, P) {
          return i(c, D, Q, P);
        }), c;
      }
      function Nx(r, i) {
        return r == null ? !0 : jc(r, i);
      }
      function Hx(r, i, c) {
        return r == null ? r : rd(r, i, Nc(c));
      }
      function Bx(r, i, c, x) {
        return x = typeof x == "function" ? x : t, r == null ? r : rd(r, i, Nc(c), x);
      }
      function ws(r) {
        return r == null ? [] : mi(r, an(r));
      }
      function Ux(r) {
        return r == null ? [] : mi(r, Rn(r));
      }
      function Lx(r, i, c) {
        return c === t && (c = i, i = t), c !== t && (c = Xn(c), c = c === c ? c : 0), i !== t && (i = Xn(i), i = i === i ? i : 0), Ea(Xn(r), i, c);
      }
      function Px(r, i, c) {
        return i = Cr(i), c === t ? (c = i, i = 0) : c = Cr(c), r = Xn(r), Kg(r, i, c);
      }
      function zx(r, i, c) {
        if (c && typeof c != "boolean" && kn(r, i, c) && (i = c = t), c === t && (typeof i == "boolean" ? (c = i, i = t) : typeof r == "boolean" && (c = r, r = t)), r === t && i === t ? (r = 0, i = 1) : (r = Cr(r), i === t ? (i = r, r = 0) : i = Cr(i)), r > i) {
          var x = r;
          r = i, i = x;
        }
        if (c || r % 1 || i % 1) {
          var M = Al();
          return rn(r + M * (i - r + PA("1e-" + ((M + "").length - 1))), i);
        }
        return Cc(r, i);
      }
      var Yx = ms(function(r, i, c) {
        return i = i.toLowerCase(), r + (c ? ch(i) : i);
      });
      function ch(r) {
        return ru(pt(r).toLowerCase());
      }
      function uh(r) {
        return r = pt(r), r && r.replace(SA, VA).replace(Nn, "");
      }
      function Fx(r, i, c) {
        r = pt(r), i = Bn(i);
        var x = r.length;
        c = c === t ? x : Ea(ze(c), 0, x);
        var M = c;
        return c -= i.length, c >= 0 && r.slice(c, M) == i;
      }
      function Zx(r) {
        return r = pt(r), r && Zs.test(r) ? r.replace(Fa, _A) : r;
      }
      function Gx(r) {
        return r = pt(r), r && lo.test(r) ? r.replace(Za, "\\$&") : r;
      }
      var Kx = ms(function(r, i, c) {
        return r + (c ? "-" : "") + i.toLowerCase();
      }), Xx = ms(function(r, i, c) {
        return r + (c ? " " : "") + i.toLowerCase();
      }), Wx = hd("toLowerCase");
      function qx(r, i, c) {
        r = pt(r), i = ze(i);
        var x = i ? _r(r) : 0;
        if (!i || x >= i)
          return r;
        var M = (i - x) / 2;
        return wl(hs(M), c) + r + wl(ds(M), c);
      }
      function Vx(r, i, c) {
        r = pt(r), i = ze(i);
        var x = i ? _r(r) : 0;
        return i && x < i ? r + wl(i - x, c) : r;
      }
      function _x(r, i, c) {
        r = pt(r), i = ze(i);
        var x = i ? _r(r) : 0;
        return i && x < i ? wl(i - x, c) + r : r;
      }
      function $x(r, i, c) {
        return c || i == null ? i = 0 : i && (i = +i), wc(pt(r).replace(qs, ""), i || 0);
      }
      function e1(r, i, c) {
        return (c ? kn(r, i, c) : i === t) ? i = 1 : i = ze(i), Dc(pt(r), i);
      }
      function t1() {
        var r = arguments, i = pt(r[0]);
        return r.length < 3 ? i : i.replace(r[1], r[2]);
      }
      var n1 = ms(function(r, i, c) {
        return r + (c ? "_" : "") + i.toLowerCase();
      });
      function r1(r, i, c) {
        return c && typeof c != "number" && kn(r, i, c) && (i = c = t), c = c === t ? Ie : c >>> 0, c ? (r = pt(r), r && (typeof i == "string" || i != null && !eu(i)) && (i = Bn(i), !i && Vr(r)) ? aa(Jn(r), 0, c) : r.split(i, c)) : [];
      }
      var a1 = ms(function(r, i, c) {
        return r + (c ? " " : "") + ru(i);
      });
      function s1(r, i, c) {
        return r = pt(r), c = c == null ? 0 : Ea(ze(c), 0, r.length), i = Bn(i), r.slice(c, c + i.length) == i;
      }
      function i1(r, i, c) {
        var x = I.templateSettings;
        c && kn(r, i, c) && (i = t), r = pt(r), i = Dl({}, i, x, kd);
        var M = Dl({}, i.imports, x.imports, kd), J = an(M), D = mi(M, J), Q, P, se = 0, ie = i.interpolate || Xa, Ae = "__p += '", me = vi(
          (i.escape || Xa).source + "|" + ie.source + "|" + (ie === Xs ? ce : Xa).source + "|" + (i.evaluate || Xa).source + "|$",
          "g"
        ), Se = "//# sourceURL=" + (ut.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ro + "]") + `
`;
        r.replace(me, function(Qe, We, _e, Ln, bn, Pn) {
          return _e || (_e = Ln), Ae += r.slice(se, Pn).replace(IA, $A), We && (Q = !0, Ae += `' +
__e(` + We + `) +
'`), bn && (P = !0, Ae += `';
` + bn + `;
__p += '`), _e && (Ae += `' +
((__t = (` + _e + `)) == null ? '' : __t) +
'`), se = Pn + Qe.length, Qe;
        }), Ae += `';
`;
        var Oe = ut.call(i, "variable") && i.variable;
        if (!Oe)
          Ae = `with (obj) {
` + Ae + `
}
`;
        else if (Vs.test(Oe))
          throw new He(f);
        Ae = (P ? Ae.replace(wA, "") : Ae).replace(Ys, "$1").replace(Qn, "$1;"), Ae = "function(" + (Oe || "obj") + `) {
` + (Oe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (Q ? ", __e = _.escape" : "") + (P ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Ae + `return __p
}`;
        var Fe = dh(function() {
          return tt(J, Se + "return " + Ae).apply(t, D);
        });
        if (Fe.source = Ae, $c(Fe))
          throw Fe;
        return Fe;
      }
      function o1(r) {
        return pt(r).toLowerCase();
      }
      function l1(r) {
        return pt(r).toUpperCase();
      }
      function A1(r, i, c) {
        if (r = pt(r), r && (c || i === t))
          return qo(r);
        if (!r || !(i = Bn(i)))
          return r;
        var x = Jn(r), M = Jn(i), J = Vo(x, M), D = _o(x, M) + 1;
        return aa(x, J, D).join("");
      }
      function c1(r, i, c) {
        if (r = pt(r), r && (c || i === t))
          return r.slice(0, el(r) + 1);
        if (!r || !(i = Bn(i)))
          return r;
        var x = Jn(r), M = _o(x, Jn(i)) + 1;
        return aa(x, 0, M).join("");
      }
      function u1(r, i, c) {
        if (r = pt(r), r && (c || i === t))
          return r.replace(qs, "");
        if (!r || !(i = Bn(i)))
          return r;
        var x = Jn(r), M = Vo(x, Jn(i));
        return aa(x, M).join("");
      }
      function f1(r, i) {
        var c = $, x = ae;
        if (Rt(i)) {
          var M = "separator" in i ? i.separator : M;
          c = "length" in i ? ze(i.length) : c, x = "omission" in i ? Bn(i.omission) : x;
        }
        r = pt(r);
        var J = r.length;
        if (Vr(r)) {
          var D = Jn(r);
          J = D.length;
        }
        if (c >= J)
          return r;
        var Q = c - _r(x);
        if (Q < 1)
          return x;
        var P = D ? aa(D, 0, Q).join("") : r.slice(0, Q);
        if (M === t)
          return P + x;
        if (D && (Q += P.length - Q), eu(M)) {
          if (r.slice(Q).search(M)) {
            var se, ie = P;
            for (M.global || (M = vi(M.source, pt(Ka.exec(M)) + "g")), M.lastIndex = 0; se = M.exec(ie); )
              var Ae = se.index;
            P = P.slice(0, Ae === t ? Q : Ae);
          }
        } else if (r.indexOf(Bn(M), Q) != Q) {
          var me = P.lastIndexOf(M);
          me > -1 && (P = P.slice(0, me));
        }
        return P + x;
      }
      function d1(r) {
        return r = pt(r), r && Fs.test(r) ? r.replace(Gr, sc) : r;
      }
      var h1 = ms(function(r, i, c) {
        return r + (c ? " " : "") + i.toUpperCase();
      }), ru = hd("toUpperCase");
      function fh(r, i, c) {
        return r = pt(r), i = c ? t : i, i === t ? ec(r) ? lc(r) : GA(r) : r.match(i) || [];
      }
      var dh = Ze(function(r, i) {
        try {
          return gn(r, t, i);
        } catch (c) {
          return $c(c) ? c : new He(c);
        }
      }), p1 = Ir(function(r, i) {
        return vn(i, function(c) {
          c = fr(c), Mr(r, c, Vc(r[c], r));
        }), r;
      });
      function m1(r) {
        var i = r == null ? 0 : r.length, c = Re();
        return r = i ? kt(r, function(x) {
          if (typeof x[1] != "function")
            throw new wn(A);
          return [c(x[0]), x[1]];
        }) : [], Ze(function(x) {
          for (var M = -1; ++M < i; ) {
            var J = r[M];
            if (gn(J[0], this, x))
              return gn(J[1], this, x);
          }
        });
      }
      function g1(r) {
        return zg(Zn(r, m));
      }
      function au(r) {
        return function() {
          return r;
        };
      }
      function v1(r, i) {
        return r == null || r !== r ? i : r;
      }
      var w1 = md(), x1 = md(!0);
      function jn(r) {
        return r;
      }
      function su(r) {
        return Gf(typeof r == "function" ? r : Zn(r, m));
      }
      function k1(r) {
        return Xf(Zn(r, m));
      }
      function b1(r, i) {
        return Wf(r, Zn(i, m));
      }
      var y1 = Ze(function(r, i) {
        return function(c) {
          return yi(c, r, i);
        };
      }), E1 = Ze(function(r, i) {
        return function(c) {
          return yi(r, c, i);
        };
      });
      function iu(r, i, c) {
        var x = an(i), M = fl(i, x);
        c == null && !(Rt(i) && (M.length || !x.length)) && (c = i, i = r, r = this, M = fl(i, an(i)));
        var J = !(Rt(c) && "chain" in c) || !!c.chain, D = Tr(r);
        return vn(M, function(Q) {
          var P = i[Q];
          r[Q] = P, D && (r.prototype[Q] = function() {
            var se = this.__chain__;
            if (J || se) {
              var ie = r(this.__wrapped__), Ae = ie.__actions__ = Cn(this.__actions__);
              return Ae.push({ func: P, args: arguments, thisArg: r }), ie.__chain__ = se, ie;
            }
            return P.apply(r, er([this.value()], arguments));
          });
        }), r;
      }
      function M1() {
        return $t._ === this && ($t._ = fc), this;
      }
      function ou() {
      }
      function S1(r) {
        return r = ze(r), Ze(function(i) {
          return qf(i, r);
        });
      }
      var I1 = Bc(kt), J1 = Bc(ci), T1 = Bc(ui);
      function hh(r) {
        return Zc(r) ? fi(fr(r)) : s0(r);
      }
      function C1(r) {
        return function(i) {
          return r == null ? t : Ma(r, i);
        };
      }
      var D1 = vd(), R1 = vd(!0);
      function lu() {
        return [];
      }
      function Au() {
        return !1;
      }
      function j1() {
        return {};
      }
      function O1() {
        return "";
      }
      function Q1() {
        return !0;
      }
      function N1(r, i) {
        if (r = ze(r), r < 1 || r > pe)
          return [];
        var c = Ie, x = rn(r, Ie);
        i = Re(i), r -= Ie;
        for (var M = pi(x, i); ++c < r; )
          i(c);
        return M;
      }
      function H1(r) {
        return Ue(r) ? kt(r, fr) : Un(r) ? [r] : Cn(Od(pt(r)));
      }
      function B1(r) {
        var i = ++uc;
        return pt(r) + i;
      }
      var U1 = vl(function(r, i) {
        return r + i;
      }, 0), L1 = Uc("ceil"), P1 = vl(function(r, i) {
        return r / i;
      }, 1), z1 = Uc("floor");
      function Y1(r) {
        return r && r.length ? ul(r, jn, Ec) : t;
      }
      function F1(r, i) {
        return r && r.length ? ul(r, Re(i, 2), Ec) : t;
      }
      function Z1(r) {
        return Xo(r, jn);
      }
      function G1(r, i) {
        return Xo(r, Re(i, 2));
      }
      function K1(r) {
        return r && r.length ? ul(r, jn, Jc) : t;
      }
      function X1(r, i) {
        return r && r.length ? ul(r, Re(i, 2), Jc) : t;
      }
      var W1 = vl(function(r, i) {
        return r * i;
      }, 1), q1 = Uc("round"), V1 = vl(function(r, i) {
        return r - i;
      }, 0);
      function _1(r) {
        return r && r.length ? hi(r, jn) : 0;
      }
      function $1(r, i) {
        return r && r.length ? hi(r, Re(i, 2)) : 0;
      }
      return I.after = kw, I.ary = Zd, I.assign = lx, I.assignIn = sh, I.assignInWith = Dl, I.assignWith = Ax, I.at = cx, I.before = Gd, I.bind = Vc, I.bindAll = p1, I.bindKey = Kd, I.castArray = jw, I.chain = zd, I.chunk = z0, I.compact = Y0, I.concat = F0, I.cond = m1, I.conforms = g1, I.constant = au, I.countBy = _v, I.create = ux, I.curry = Xd, I.curryRight = Wd, I.debounce = qd, I.defaults = fx, I.defaultsDeep = dx, I.defer = bw, I.delay = yw, I.difference = Z0, I.differenceBy = G0, I.differenceWith = K0, I.drop = X0, I.dropRight = W0, I.dropRightWhile = q0, I.dropWhile = V0, I.fill = _0, I.filter = ew, I.flatMap = rw, I.flatMapDeep = aw, I.flatMapDepth = sw, I.flatten = Bd, I.flattenDeep = $0, I.flattenDepth = ev, I.flip = Ew, I.flow = w1, I.flowRight = x1, I.fromPairs = tv, I.functions = xx, I.functionsIn = kx, I.groupBy = iw, I.initial = rv, I.intersection = av, I.intersectionBy = sv, I.intersectionWith = iv, I.invert = yx, I.invertBy = Ex, I.invokeMap = lw, I.iteratee = su, I.keyBy = Aw, I.keys = an, I.keysIn = Rn, I.map = Ml, I.mapKeys = Sx, I.mapValues = Ix, I.matches = k1, I.matchesProperty = b1, I.memoize = Il, I.merge = Jx, I.mergeWith = ih, I.method = y1, I.methodOf = E1, I.mixin = iu, I.negate = Jl, I.nthArg = S1, I.omit = Tx, I.omitBy = Cx, I.once = Mw, I.orderBy = cw, I.over = I1, I.overArgs = Sw, I.overEvery = J1, I.overSome = T1, I.partial = _c, I.partialRight = Vd, I.partition = uw, I.pick = Dx, I.pickBy = oh, I.property = hh, I.propertyOf = C1, I.pull = cv, I.pullAll = Ld, I.pullAllBy = uv, I.pullAllWith = fv, I.pullAt = dv, I.range = D1, I.rangeRight = R1, I.rearg = Iw, I.reject = hw, I.remove = hv, I.rest = Jw, I.reverse = Wc, I.sampleSize = mw, I.set = jx, I.setWith = Ox, I.shuffle = gw, I.slice = pv, I.sortBy = xw, I.sortedUniq = bv, I.sortedUniqBy = yv, I.split = r1, I.spread = Tw, I.tail = Ev, I.take = Mv, I.takeRight = Sv, I.takeRightWhile = Iv, I.takeWhile = Jv, I.tap = Yv, I.throttle = Cw, I.thru = El, I.toArray = nh, I.toPairs = lh, I.toPairsIn = Ah, I.toPath = H1, I.toPlainObject = ah, I.transform = Qx, I.unary = Dw, I.union = Tv, I.unionBy = Cv, I.unionWith = Dv, I.uniq = Rv, I.uniqBy = jv, I.uniqWith = Ov, I.unset = Nx, I.unzip = qc, I.unzipWith = Pd, I.update = Hx, I.updateWith = Bx, I.values = ws, I.valuesIn = Ux, I.without = Qv, I.words = fh, I.wrap = Rw, I.xor = Nv, I.xorBy = Hv, I.xorWith = Bv, I.zip = Uv, I.zipObject = Lv, I.zipObjectDeep = Pv, I.zipWith = zv, I.entries = lh, I.entriesIn = Ah, I.extend = sh, I.extendWith = Dl, iu(I, I), I.add = U1, I.attempt = dh, I.camelCase = Yx, I.capitalize = ch, I.ceil = L1, I.clamp = Lx, I.clone = Ow, I.cloneDeep = Nw, I.cloneDeepWith = Hw, I.cloneWith = Qw, I.conformsTo = Bw, I.deburr = uh, I.defaultTo = v1, I.divide = P1, I.endsWith = Fx, I.eq = nr, I.escape = Zx, I.escapeRegExp = Gx, I.every = $v, I.find = tw, I.findIndex = Nd, I.findKey = hx, I.findLast = nw, I.findLastIndex = Hd, I.findLastKey = px, I.floor = z1, I.forEach = Yd, I.forEachRight = Fd, I.forIn = mx, I.forInRight = gx, I.forOwn = vx, I.forOwnRight = wx, I.get = tu, I.gt = Uw, I.gte = Lw, I.has = bx, I.hasIn = nu, I.head = Ud, I.identity = jn, I.includes = ow, I.indexOf = nv, I.inRange = Px, I.invoke = Mx, I.isArguments = Ja, I.isArray = Ue, I.isArrayBuffer = Pw, I.isArrayLike = Dn, I.isArrayLikeObject = Ft, I.isBoolean = zw, I.isBuffer = sa, I.isDate = Yw, I.isElement = Fw, I.isEmpty = Zw, I.isEqual = Gw, I.isEqualWith = Kw, I.isError = $c, I.isFinite = Xw, I.isFunction = Tr, I.isInteger = _d, I.isLength = Tl, I.isMap = $d, I.isMatch = Ww, I.isMatchWith = qw, I.isNaN = Vw, I.isNative = _w, I.isNil = ex, I.isNull = $w, I.isNumber = eh, I.isObject = Rt, I.isObjectLike = Nt, I.isPlainObject = Ti, I.isRegExp = eu, I.isSafeInteger = tx, I.isSet = th, I.isString = Cl, I.isSymbol = Un, I.isTypedArray = vs, I.isUndefined = nx, I.isWeakMap = rx, I.isWeakSet = ax, I.join = ov, I.kebabCase = Kx, I.last = Kn, I.lastIndexOf = lv, I.lowerCase = Xx, I.lowerFirst = Wx, I.lt = sx, I.lte = ix, I.max = Y1, I.maxBy = F1, I.mean = Z1, I.meanBy = G1, I.min = K1, I.minBy = X1, I.stubArray = lu, I.stubFalse = Au, I.stubObject = j1, I.stubString = O1, I.stubTrue = Q1, I.multiply = W1, I.nth = Av, I.noConflict = M1, I.noop = ou, I.now = Sl, I.pad = qx, I.padEnd = Vx, I.padStart = _x, I.parseInt = $x, I.random = zx, I.reduce = fw, I.reduceRight = dw, I.repeat = e1, I.replace = t1, I.result = Rx, I.round = q1, I.runInContext = U, I.sample = pw, I.size = vw, I.snakeCase = n1, I.some = ww, I.sortedIndex = mv, I.sortedIndexBy = gv, I.sortedIndexOf = vv, I.sortedLastIndex = wv, I.sortedLastIndexBy = xv, I.sortedLastIndexOf = kv, I.startCase = a1, I.startsWith = s1, I.subtract = V1, I.sum = _1, I.sumBy = $1, I.template = i1, I.times = N1, I.toFinite = Cr, I.toInteger = ze, I.toLength = rh, I.toLower = o1, I.toNumber = Xn, I.toSafeInteger = ox, I.toString = pt, I.toUpper = l1, I.trim = A1, I.trimEnd = c1, I.trimStart = u1, I.truncate = f1, I.unescape = d1, I.uniqueId = B1, I.upperCase = h1, I.upperFirst = ru, I.each = Yd, I.eachRight = Fd, I.first = Ud, iu(I, function() {
        var r = {};
        return cr(I, function(i, c) {
          ut.call(I.prototype, c) || (r[c] = i);
        }), r;
      }(), { chain: !1 }), I.VERSION = a, vn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
        I[r].placeholder = I;
      }), vn(["drop", "take"], function(r, i) {
        Ke.prototype[r] = function(c) {
          c = c === t ? 1 : Yt(ze(c), 0);
          var x = this.__filtered__ && !i ? new Ke(this) : this.clone();
          return x.__filtered__ ? x.__takeCount__ = rn(c, x.__takeCount__) : x.__views__.push({
            size: rn(c, Ie),
            type: r + (x.__dir__ < 0 ? "Right" : "")
          }), x;
        }, Ke.prototype[r + "Right"] = function(c) {
          return this.reverse()[r](c).reverse();
        };
      }), vn(["filter", "map", "takeWhile"], function(r, i) {
        var c = i + 1, x = c == Y || c == H;
        Ke.prototype[r] = function(M) {
          var J = this.clone();
          return J.__iteratees__.push({
            iteratee: Re(M, 3),
            type: c
          }), J.__filtered__ = J.__filtered__ || x, J;
        };
      }), vn(["head", "last"], function(r, i) {
        var c = "take" + (i ? "Right" : "");
        Ke.prototype[r] = function() {
          return this[c](1).value()[0];
        };
      }), vn(["initial", "tail"], function(r, i) {
        var c = "drop" + (i ? "" : "Right");
        Ke.prototype[r] = function() {
          return this.__filtered__ ? new Ke(this) : this[c](1);
        };
      }), Ke.prototype.compact = function() {
        return this.filter(jn);
      }, Ke.prototype.find = function(r) {
        return this.filter(r).head();
      }, Ke.prototype.findLast = function(r) {
        return this.reverse().find(r);
      }, Ke.prototype.invokeMap = Ze(function(r, i) {
        return typeof r == "function" ? new Ke(this) : this.map(function(c) {
          return yi(c, r, i);
        });
      }), Ke.prototype.reject = function(r) {
        return this.filter(Jl(Re(r)));
      }, Ke.prototype.slice = function(r, i) {
        r = ze(r);
        var c = this;
        return c.__filtered__ && (r > 0 || i < 0) ? new Ke(c) : (r < 0 ? c = c.takeRight(-r) : r && (c = c.drop(r)), i !== t && (i = ze(i), c = i < 0 ? c.dropRight(-i) : c.take(i - r)), c);
      }, Ke.prototype.takeRightWhile = function(r) {
        return this.reverse().takeWhile(r).reverse();
      }, Ke.prototype.toArray = function() {
        return this.take(Ie);
      }, cr(Ke.prototype, function(r, i) {
        var c = /^(?:filter|find|map|reject)|While$/.test(i), x = /^(?:head|last)$/.test(i), M = I[x ? "take" + (i == "last" ? "Right" : "") : i], J = x || /^find/.test(i);
        M && (I.prototype[i] = function() {
          var D = this.__wrapped__, Q = x ? [1] : arguments, P = D instanceof Ke, se = Q[0], ie = P || Ue(D), Ae = function(We) {
            var _e = M.apply(I, er([We], Q));
            return x && me ? _e[0] : _e;
          };
          ie && c && typeof se == "function" && se.length != 1 && (P = ie = !1);
          var me = this.__chain__, Se = !!this.__actions__.length, Oe = J && !me, Fe = P && !Se;
          if (!J && ie) {
            D = Fe ? D : new Ke(this);
            var Qe = r.apply(D, Q);
            return Qe.__actions__.push({ func: El, args: [Ae], thisArg: t }), new qt(Qe, me);
          }
          return Oe && Fe ? r.apply(this, Q) : (Qe = this.thru(Ae), Oe ? x ? Qe.value()[0] : Qe.value() : Qe);
        });
      }), vn(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
        var i = as[r], c = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", x = /^(?:pop|shift)$/.test(r);
        I.prototype[r] = function() {
          var M = arguments;
          if (x && !this.__chain__) {
            var J = this.value();
            return i.apply(Ue(J) ? J : [], M);
          }
          return this[c](function(D) {
            return i.apply(Ue(D) ? D : [], M);
          });
        };
      }), cr(Ke.prototype, function(r, i) {
        var c = I[i];
        if (c) {
          var x = c.name + "";
          ut.call(fe, x) || (fe[x] = []), fe[x].push({ name: i, func: c });
        }
      }), fe[gl(t, T).name] = [{
        name: "wrapper",
        func: t
      }], Ke.prototype.clone = xi, Ke.prototype.reverse = ka, Ke.prototype.value = pg, I.prototype.at = Fv, I.prototype.chain = Zv, I.prototype.commit = Gv, I.prototype.next = Kv, I.prototype.plant = Wv, I.prototype.reverse = qv, I.prototype.toJSON = I.prototype.valueOf = I.prototype.value = Vv, I.prototype.first = I.prototype.head, wa && (I.prototype[wa] = Xv), I;
    }, $r = tl();
    mn ? ((mn.exports = $r)._ = $r, Wr._ = $r) : $t._ = $r;
  }).call(Es);
})($l, $l.exports);
var Cf = $l.exports, Nu = { exports: {} }, vu, rp;
function x5() {
  if (rp)
    return vu;
  rp = 1;
  var e = 1e3, n = e * 60, t = n * 60, a = t * 24, s = a * 7, l = a * 365.25;
  vu = function(h, m) {
    m = m || {};
    var v = typeof h;
    if (v === "string" && h.length > 0)
      return A(h);
    if (v === "number" && isFinite(h))
      return m.long ? u(h) : f(h);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(h)
    );
  };
  function A(h) {
    if (h = String(h), !(h.length > 100)) {
      var m = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        h
      );
      if (m) {
        var v = parseFloat(m[1]), k = (m[2] || "ms").toLowerCase();
        switch (k) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return v * l;
          case "weeks":
          case "week":
          case "w":
            return v * s;
          case "days":
          case "day":
          case "d":
            return v * a;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return v * t;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return v * n;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return v * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return v;
          default:
            return;
        }
      }
    }
  }
  function f(h) {
    var m = Math.abs(h);
    return m >= a ? Math.round(h / a) + "d" : m >= t ? Math.round(h / t) + "h" : m >= n ? Math.round(h / n) + "m" : m >= e ? Math.round(h / e) + "s" : h + "ms";
  }
  function u(h) {
    var m = Math.abs(h);
    return m >= a ? d(h, m, a, "day") : m >= t ? d(h, m, t, "hour") : m >= n ? d(h, m, n, "minute") : m >= e ? d(h, m, e, "second") : h + " ms";
  }
  function d(h, m, v, k) {
    var b = m >= v * 1.5;
    return Math.round(h / v) + " " + k + (b ? "s" : "");
  }
  return vu;
}
function k5(e) {
  t.debug = t, t.default = t, t.coerce = u, t.disable = l, t.enable = s, t.enabled = A, t.humanize = x5(), t.destroy = d, Object.keys(e).forEach((h) => {
    t[h] = e[h];
  }), t.names = [], t.skips = [], t.formatters = {};
  function n(h) {
    let m = 0;
    for (let v = 0; v < h.length; v++)
      m = (m << 5) - m + h.charCodeAt(v), m |= 0;
    return t.colors[Math.abs(m) % t.colors.length];
  }
  t.selectColor = n;
  function t(h) {
    let m, v = null, k, b;
    function y(...S) {
      if (!y.enabled)
        return;
      const T = y, O = Number(/* @__PURE__ */ new Date()), B = O - (m || O);
      T.diff = B, T.prev = m, T.curr = O, m = O, S[0] = t.coerce(S[0]), typeof S[0] != "string" && S.unshift("%O");
      let K = 0;
      S[0] = S[0].replace(/%([a-zA-Z%])/g, (F, ee) => {
        if (F === "%%")
          return "%";
        K++;
        const oe = t.formatters[ee];
        if (typeof oe == "function") {
          const re = S[K];
          F = oe.call(T, re), S.splice(K, 1), K--;
        }
        return F;
      }), t.formatArgs.call(T, S), (T.log || t.log).apply(T, S);
    }
    return y.namespace = h, y.useColors = t.useColors(), y.color = t.selectColor(h), y.extend = a, y.destroy = t.destroy, Object.defineProperty(y, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => v !== null ? v : (k !== t.namespaces && (k = t.namespaces, b = t.enabled(h)), b),
      set: (S) => {
        v = S;
      }
    }), typeof t.init == "function" && t.init(y), y;
  }
  function a(h, m) {
    const v = t(this.namespace + (typeof m > "u" ? ":" : m) + h);
    return v.log = this.log, v;
  }
  function s(h) {
    t.save(h), t.namespaces = h, t.names = [], t.skips = [];
    let m;
    const v = (typeof h == "string" ? h : "").split(/[\s,]+/), k = v.length;
    for (m = 0; m < k; m++)
      v[m] && (h = v[m].replace(/\*/g, ".*?"), h[0] === "-" ? t.skips.push(new RegExp("^" + h.slice(1) + "$")) : t.names.push(new RegExp("^" + h + "$")));
  }
  function l() {
    const h = [
      ...t.names.map(f),
      ...t.skips.map(f).map((m) => "-" + m)
    ].join(",");
    return t.enable(""), h;
  }
  function A(h) {
    if (h[h.length - 1] === "*")
      return !0;
    let m, v;
    for (m = 0, v = t.skips.length; m < v; m++)
      if (t.skips[m].test(h))
        return !1;
    for (m = 0, v = t.names.length; m < v; m++)
      if (t.names[m].test(h))
        return !0;
    return !1;
  }
  function f(h) {
    return h.toString().substring(2, h.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function u(h) {
    return h instanceof Error ? h.stack || h.message : h;
  }
  function d() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return t.enable(t.load()), t;
}
var b5 = k5;
(function(e, n) {
  n.formatArgs = a, n.save = s, n.load = l, n.useColors = t, n.storage = A(), n.destroy = (() => {
    let u = !1;
    return () => {
      u || (u = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), n.colors = [
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
  function t() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function a(u) {
    if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
      return;
    const d = "color: " + this.color;
    u.splice(1, 0, d, "color: inherit");
    let h = 0, m = 0;
    u[0].replace(/%[a-zA-Z%]/g, (v) => {
      v !== "%%" && (h++, v === "%c" && (m = h));
    }), u.splice(m, 0, d);
  }
  n.log = console.debug || console.log || (() => {
  });
  function s(u) {
    try {
      u ? n.storage.setItem("debug", u) : n.storage.removeItem("debug");
    } catch {
    }
  }
  function l() {
    let u;
    try {
      u = n.storage.getItem("debug");
    } catch {
    }
    return !u && typeof process < "u" && "env" in process && (u = !1), u;
  }
  function A() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = b5(n);
  const { formatters: f } = e.exports;
  f.j = function(u) {
    try {
      return JSON.stringify(u);
    } catch (d) {
      return "[UnexpectedJSONParseError]: " + d.message;
    }
  };
})(Nu, Nu.exports);
var sg = Nu.exports;
const Mt = Cf, Vt = sg("mongo-knex:converter"), yn = sg("mongo-knex:converter-extended"), y5 = [
  "$and",
  "$or"
], hn = {
  $eq: "=",
  $ne: "!=",
  $gt: ">",
  $gte: ">=",
  $lt: "<",
  $lte: "<=",
  $in: "in",
  $nin: "not in",
  $regex: "like",
  $not: "not like"
}, Ra = "*", Df = (e) => e.charAt(0) === "$", E5 = (e) => Df(e) && Mt.includes(y5, e), wu = (e) => Df(e) && Mt.includes(Mt.keys(hn), e), Qi = (e) => Df(e) && Mt.includes(["$ne", "$nin"], e), ap = (e) => Mt.includes([hn.$in, hn.$nin], e), ys = (e) => JSON.stringify(e, function(n, t) {
  return t instanceof RegExp ? t.toString() : t;
}), M5 = ({ source: e, ignoreCase: n }) => (e = e.replace(/\\([.*+?^${}()|[\]\\/])/g, "$1"), n && (e = e.toLowerCase()), e = e.replace(new RegExp(Mt.escapeRegExp(Ra), "g"), Ra + Ra), e = e.replace(/%/g, Ra + "%"), e = e.replace(/_/g, Ra + "_"), e.startsWith("^") ? e = e.substring(1) + "%" : e.endsWith("$") ? e = "%" + e.substring(0, e.length - 1) : e = "%" + e + "%", { source: e, ignoreCase: n });
class S5 {
  /**
   *
   * @param {Object} options
   * @param {String} options.tableName
   *
   * @param {Object} config
   * @param {Object} config.relations structure:
   *  {[relation-name]}: {
   *      tableName: String (e.g. tags)
   *      tableNameAs: String (e.g. t, optional)
   *      type: String (e.g. manyToMany)
   *      joinTable: String (e.g.  posts_tags)
   *      joinFrom: String (e.g. post_id)
   *      joinTo: String (e.g. tag_id)
   *  }
   */
  constructor(n = {}, t = {}) {
    this.tableName = n.tableName, this.config = {}, Object.assign(this.config, { relations: {} }, t);
  }
  processWhereType(n, t, a) {
    return a === null ? (n === "$or" ? "orWhere" : "where") + (t === "$ne" ? "NotNull" : "Null") : n === "$or" ? "orWhere" : "andWhere";
  }
  /**
   * Determine if statement lives on parent table or if statement refers to a relation.
   */
  processStatement(n, t, a) {
    const [s, l] = n.split(".");
    if (l) {
      Vt(s, l);
      const A = s;
      let f = this.config.relations[A];
      return f ? {
        table: s,
        column: l,
        operator: t,
        value: a,
        config: f,
        isRelation: !0
      } : (f = Mt.find(this.config.relations, (u) => u.joinTable === A), f ? {
        joinTable: f.joinTable,
        table: f.tableName,
        column: l,
        operator: t,
        value: a,
        config: f,
        isRelation: !0
      } : {
        column: n,
        operator: t,
        value: a,
        isRelation: !1
      });
    }
    return {
      column: `${this.tableName}.${n}`,
      operator: t,
      value: a,
      isRelation: !1
    };
  }
  /**
   * We group the relations by a unique key.
   * Each grouping will create a sub query.
   *
   * Returns a group structure of following format:
   *  {
   *      "groupKey": {
   *          innerWhereStatements: [],
   *          joinFilterStatements: []
   *      }
   *  }
   */
  groupRelationStatements(n, t) {
    const a = {}, s = t === "$and" ? n.filter((l) => !l.joinTable) : n;
    if (Mt.each(s, (l, A) => {
      let f = Qi(l.operator);
      !f && a[l.table] && (f = Mt.find(a[l.table].innerWhereStatements, (d) => {
        if (d.column === l.column)
          return !0;
      }));
      let u = l.table;
      if (f && (u = `${l.table}_${A})}`, a[u]))
        throw new Error("Key collision detected");
      a[u] || (a[u] = {}, a[u].innerWhereStatements = []), a[u].innerWhereStatements.push(l);
    }), t === "$and") {
      const l = n.filter((A) => A.joinTable);
      Mt.each(Object.keys(a), (A) => {
        a[A].joinFilterStatements = l;
      });
    }
    return a;
  }
  /**
   * Build queries for relations.
   */
  buildRelationQuery(n, t, a) {
    Vt("(buildRelationQuery)"), yn.enabled && yn(`(buildRelationQuery) ${ys(t)}`);
    const s = this.groupRelationStatements(t, a);
    yn.enabled && yn(`(buildRelationQuery) grouped: ${ys(s)}`), Mt.each(Object.keys(s), (l) => {
      Vt(`(buildRelationQuery) build relation for ${l}`);
      const A = s[l].innerWhereStatements, f = A[0];
      if (f.config.type === "manyToMany")
        if (Mt.every(A.map((u) => u.operator), wu)) {
          const u = Mt.every(A.map((m) => m.operator), (m) => Qi(m)), d = u ? hn.$nin : hn.$in, h = ["whereNull", "whereNotNull"].includes(f.whereType) ? "andWhere" : ["orWhereNull", "orWhereNotNull"].includes(f.whereType) ? "orWhere" : f.whereType;
          n[h](`${this.tableName}.id`, d, function() {
            const m = s[l].joinFilterStatements;
            let v = f.config.tableName, k = `${f.config.tableName}.${f.config.joinToForeign || "id"}`;
            f.config.tableNameAs && (v = `${f.config.tableName} as ${f.config.tableNameAs}`, k = `${f.config.tableNameAs}.${f.config.joinToForeign || "id"}`);
            const b = f.config.joinType || "innerJoin", y = this.select(`${f.config.joinTable}.${f.config.joinFrom}`).from(`${f.config.joinTable}`)[b](v, function() {
              this.on(k, "=", `${f.config.joinTable}.${f.config.joinTo}`), Mt.each(m, (S) => {
                this.andOn(`${S.joinTable}.${S.column}`, hn[S.operator], S.value);
              });
            });
            return yn.enabled && Vt(`(buildRelationQuery) innerQB sql-pre: ${y.toSQL().sql}`), Mt.each(A, (S, T) => {
              Vt(`(buildRelationQuery) build relation where statements for ${T}`);
              const O = `${S.joinTable || S.table}.${S.column}`;
              let B;
              u ? B = hn.$in : Qi(S.operator) ? B = hn.$nin : B = hn[S.operator];
              let K = S.value;
              ap(B) && (K = Mt.isArray(S.value) ? S.value : [S.value]), y[S.whereType](O, B, K);
            }), yn.enabled && Vt(`(buildRelationQuery) innerQB sql-post: ${y.toSQL().sql}`), y;
          });
        } else
          Vt(`one of ${l} group statements contains unknown operator`);
      else if (f.config.type === "oneToOne")
        if (Mt.every(A.map((u) => u.operator), wu)) {
          const u = Mt.every(A.map((v) => v.operator), (v) => Qi(v)), d = u ? hn.$nin : hn.$in, h = this.tableName, m = f.whereType === "orWhere" ? "orWhere" : "where";
          n[m](`${this.tableName}.id`, d, function() {
            const v = s[l].joinFilterStatements;
            let k = f.config.tableName, b = `${f.config.tableName}.${f.config.joinFrom}`;
            f.config.tableNameAs && (k = `${f.config.tableName} as ${f.config.tableNameAs}`, b = `${f.config.tableNameAs}.${f.config.joinFrom}`);
            const y = this.select(`${h}.id`).from(`${h}`).leftJoin(k, function() {
              this.on(b, "=", `${h}.id`), Mt.each(v, (S) => {
                this.andOn(`${S.joinTable}.${S.column}`, hn[S.operator], S.value);
              });
            });
            return Mt.each(A, (S, T) => {
              Vt(`(buildRelationQuery) build relation where statements for ${T}`);
              const O = `${S.table}.${S.column}`;
              let B;
              u ? (B = hn.$in, S.value === null && (S.whereType = S.whereType === "whereNotNull" ? "whereNull" : "whereNotNull")) : Qi(S.operator) ? B = hn.$nin : B = hn[S.operator];
              let K = S.value;
              ap(B) && (K = Mt.isArray(S.value) ? S.value : [S.value]), y[S.whereType](O, B, K);
            }), yn.enabled && Vt(`(buildRelationQuery) innerQB sql-pre: ${y.toSQL().sql}`), y;
          });
        } else
          Vt(`one of ${l} group statements contains unknown operator`);
    });
  }
  /**
   * Determines if statement is a simple where comparison on the parent table or if the statement is a relation query.
   *
   * e.g.
   *
   * `where column = value`
   * `where column != value`
   * `where column > value`
   */
  buildComparison(n, t, a, s, l, A) {
    const f = hn[s] || "=", u = this.processStatement(a, s, l);
    let d = this.processWhereType(t, s, l);
    if (Vt(`(buildComparison) mode: ${t}, op: ${s}, isRelation: ${u.isRelation}, group: ${A}`), u.isRelation) {
      if (u.whereType = d, !A) {
        this.buildRelationQuery(n, [u], t);
        return;
      }
      Object.prototype.hasOwnProperty.call(n, "relations") || (n.relations = []), n.relations.push(u);
      return;
    }
    const h = u.column;
    if (s = u.operator, l = u.value, s === "$regex" || s === "$not") {
      const { source: m, ignoreCase: v } = M5(l);
      if (l = m, v) {
        d += "Raw", Vt(`(buildComparison) whereType: ${d}, statement: ${a}, op: ${s}, comp: ${f}, value: ${l} (REGEX/i)`), n[d](`lower(??) ${f} ? ESCAPE ?`, [h, l, Ra]);
        return;
      }
      d += "Raw", Vt(`(buildComparison) whereType: ${d}, statement: ${a}, op: ${s}, comp: ${f}, value: ${l} (REGEX)`), n[d](`?? ${f} ? ESCAPE ?`, [h, l, Ra]);
      return;
    }
    Vt(`(buildComparison) whereType: ${d}, statement: ${a}, op: ${s}, comp: ${f}, value: ${l}`), n[d](h, f, l);
  }
  /**
   * {author: 'carl'}
   */
  buildWhereClause(n, t, a, s, l) {
    if (Vt(`(buildWhereClause) mode: ${t}, statement: ${a}`), yn.enabled && yn(`(buildWhereClause) ${ys(s)}`), !Mt.isObject(s))
      return this.buildComparison(n, t, a, "$eq", s, l);
    Mt.forIn(s, (A, f) => {
      wu(f) ? this.buildComparison(n, t, a, f, A, l) : Vt("unknown operator");
    });
  }
  /**
   * {$and: [{author: 'carl'}, {status: 'draft'}]}}
   * {$and: {author: 'carl'}}
   * {$and: {author: { $in: [...] }}}
   */
  buildWhereGroup(n, t, a, s) {
    const l = this.processWhereType(t);
    Vt(`(buildWhereGroup) mode: ${a}, whereType: ${l}`), yn.enabled && yn(`(buildWhereGroup) ${ys(s)}`), n[l]((A) => {
      Mt.isArray(s) ? s.forEach((f) => this.buildQuery(A, a, f, !0)) : Mt.isObject(s) && this.buildQuery(A, a, s, !0), Object.prototype.hasOwnProperty.call(A, "relations") && (this.buildRelationQuery(A, A.relations, a), delete A.relations);
    });
  }
  buildQuery(n, t, a, s) {
    Vt(`(buildQuery) mode: ${t}`), yn.enabled && yn(`(buildQuery) ${ys(a)}`), Mt.forIn(a, (l, A) => {
      Vt(`(buildQuery) key: ${A}`), E5(A) ? this.buildWhereGroup(n, t, A, l) : this.buildWhereClause(n, t, A, l, s);
    });
  }
  /**
   * The converter receives sub query objects e.g. `qb.where('..', (qb) => {})`, which
   * we then pass around to our class methods. That's why we pass the parent `qb` object
   * around instead of remembering it as `this.qb`. There are multiple `qb` objects.
   */
  processJSON(n, t) {
    Vt("(processJSON)"), yn.enabled && yn(`(processJSON) ${ys(t)}`), this.buildQuery(n, "$and", t);
  }
}
var I5 = function(n, t, a) {
  return new S5({
    tableName: n._single.table
  }, a).processJSON(n, t), n;
}, J5 = I5;
const gr = Cf, T5 = ["$and", "$or"], la = (e, n) => Array.isArray(e) ? e.map((t) => la(t, n)).filter((t) => !gr.isEmpty(t)) : gr.reduce(e, (t, a, s) => {
  let l;
  if (T5.includes(s)) {
    const A = la(a, n);
    l = gr.isEmpty(A) ? null : {
      [s]: A
    };
  } else
    s === "yg" ? l = {
      [s]: la(a, n)
    } : l = n(a, s);
  return gr.assign({}, t, l);
}, {}), ig = (e, n) => gr.isEmpty(e) ? n : gr.isEmpty(n) ? e : {
  $and: [e, n]
}, Yi = (e, n) => gr.some(e, (t, a, s) => a === "$and" ? Yi(s.$and, n) : a === "$or" ? Yi(s.$or, n) : a !== n && gr.isObject(t) ? Yi(t, n) : a === n), og = (e, n) => e && la(e, function(t, a) {
  if (!n(a))
    return {
      [a]: t
    };
}), C5 = (...e) => {
  let n = {};
  return e.filter((t) => !!t).forEach((t) => {
    t && Object.keys(t).length > 0 && (t = og(t, (a) => Yi(n, a)), t && (n = Object.keys(n).length > 0 ? ig(n, t) : t));
  }), n;
}, D5 = (e, n) => {
  const t = (a, s) => s.$and ? { $and: [
    a,
    ...s.$and
  ] } : { $and: [
    a,
    s
  ] };
  return la(e, function(a, s) {
    const l = gr.find(n, { key: s });
    if (!l)
      return {
        [s]: a
      };
    let A = {
      [l.replacement]: a
    };
    return l.expansion ? t(A, l.expansion) : A;
  });
};
function sp(e, n) {
  const t = n.find(({ from: a }) => a === e);
  return t ? t.to : e;
}
function R5(e, n) {
  return Array.isArray(e) ? e.map(n) : n(e);
}
function lg(e) {
  return function(t) {
    return la(t, function(a, s) {
      return s !== e.key.from ? {
        [s]: a
      } : typeof a != "object" ? {
        [e.key.to]: sp(a, e.values)
      } : {
        [e.key.to]: gr.reduce(a, (l, A, f) => Object.assign(l, {
          [f]: R5(A, (u) => sp(u, e.values))
        }), {})
      };
    });
  };
}
const j5 = (e, n) => la(e, function(t, a) {
  return Object.keys(n).includes(a) ? n[a] ?? {} : {
    [a]: t
  };
});
function O5(...e) {
  return function(n) {
    for (const t of e)
      n = t(n);
    return n;
  };
}
function Ts(e) {
  if (!e)
    return [];
  const n = [];
  if (e.$and)
    for (const t of e.$and)
      for (const a of Ts(t))
        n.includes(a) || n.push(a);
  else if (e.$or)
    for (const t of e.$or)
      for (const a of Ts(t))
        n.includes(a) || n.push(a);
  else
    e.yg ? n.push(...Ts(e.yg)) : n.push(...Object.keys(e));
  return n;
}
function Q5(e, n) {
  let t, a;
  if (typeof e != "object")
    return [t, a];
  if (e.$and) {
    for (const s of e.$and) {
      const l = Ts(s);
      let A = !1;
      for (const f of l)
        if (n.includes(f))
          A = !0;
        else if (A)
          throw new Error(`This filter is not supported because you cannot combine ${n.join(", ")} filters with other filters except at the root level in an AND.`);
      A ? t ? t.$and.push(s) : t = { $and: [s] } : a ? a.$and.push(s) : a = { $and: [s] };
    }
    t && t.$and.length === 1 && (t = t.$and[0]), a && a.$and.length === 1 && (a = a.$and[0]);
  } else if (e.$or) {
    let s = !1;
    for (const l of e.$or) {
      const A = Ts(l);
      for (const f of A)
        if (n.includes(f)) {
          s = !0;
          continue;
        } else if (s)
          throw new Error(`This filter is not supported because you cannot combine ${n.join(", ")} filters with other filters in an OR.`);
    }
    s ? t = e : a = e;
  } else {
    if (e.yg)
      return this.splitFilter(e.yg, n);
    {
      const s = Object.keys(e);
      for (const l of s)
        n.includes(l) ? t ? t[l] = e[l] : t = { [l]: e[l] } : a ? a[l] = e[l] : a = { [l]: e[l] };
    }
  }
  return [t, a];
}
function N5(e) {
  const n = [];
  for (const t of Object.keys(e))
    e[t] && n.push({
      key: {
        from: t,
        to: e[t]
      },
      values: []
      // No mapping in values
    });
  return n.map((t) => lg(t));
}
var H5 = {
  mapKeyValues: lg,
  combineFilters: ig,
  findStatement: Yi,
  rejectStatements: og,
  mergeFilters: C5,
  expandFilters: D5,
  mapQuery: la,
  replaceFilters: j5,
  chainTransformers: O5,
  getUsedKeys: Ts,
  splitFilter: Q5,
  mapKeys: N5
}, Hu = H5;
const eA = Hu, B5 = ag, U5 = Cf, Ag = (e) => !e || Object.keys(e).length === 0 ? e : e.map((n) => {
  const t = Object.assign({}, n);
  return t.expansion && (t.expansion = B5.parse(n.expansion)), t;
}), L5 = (e, n) => {
  const t = Ag(n);
  return eA.expandFilters(e, t);
}, cg = (e) => {
  if (e.$and && eA.findStatement(e, "$ne")) {
    const n = e.$and, t = n.filter((A) => eA.findStatement(A, "$ne")), a = U5.groupBy(t, (A) => Object.keys(A)[0]);
    Object.keys(a).filter((A) => a[A].length > 1).forEach((A) => {
      const f = a[A].map((u) => u[A].$ne);
      e[A] = { $nin: f }, a[A].forEach((u) => {
        n.splice(n.indexOf(u), 1);
      });
    }), n.length === 0 && delete e.$and;
  }
  for (const n in e)
    n === "$and" && (e[n] = e[n].map((t) => cg(t)));
  return e;
};
var P5 = {
  mergeFilters: eA.mergeFilters,
  parseExpansions: Ag,
  expandFilters: L5,
  combineNeFilters: cg
};
const z5 = UE, Nl = ag, Y5 = J5, xu = P5;
of.exports = (e, n = {}) => {
  const t = {};
  return t.lex = () => Nl.lex(e), t.parse = function() {
    !this.filter && e && (this.filter = Nl.parse(e), n.transformer && (this.filter = n.transformer(this.filter)));
    let a, s;
    n.overrides && (a = Nl.parse(n.overrides)), n.defaults && (s = Nl.parse(n.defaults));
    let l = xu.mergeFilters(a, this.filter, s);
    return l = xu.combineNeFilters(l), n.expansions && (l = xu.expandFilters(l, n.expansions)), l;
  }, t.queryJSON = function(a) {
    return this.query = this.query || new z5.Query(t.parse()), this.query.test(a);
  }, t.querySQL = (a) => Y5(a, t.parse(), n), t.toString = () => e, t.toJSON = t.parse, t;
};
of.exports.utils = {
  mapQuery: Hu.mapQuery,
  mapKeyValues: Hu.mapKeyValues
};
var F5 = of.exports, Z5 = F5;
const G5 = /* @__PURE__ */ mp(Z5);
function ug(e, n) {
  return e.visibility ? G5(e.visibility).queryJSON(n) : !0;
}
function K5({
  description: e,
  accentColor: n,
  icon: t,
  logo: a,
  coverImage: s,
  themeSettings: l
}) {
  if (!l)
    return;
  const A = l.reduce((d, { key: h, value: m }) => ({ ...d, [h]: m }), {}), f = new URLSearchParams();
  f.append("c", n), f.append("d", e), f.append("icon", t), f.append("logo", a), f.append("cover", s);
  const u = {};
  return l.forEach((d) => {
    u[d.key] = ug(d, A) ? d.value : Yy;
  }), f.append("custom", JSON.stringify(u)), f.toString();
}
const X5 = ({ settings: e, url: n }) => {
  const t = K5({ ...e }), a = sn((s) => {
    !n || !t || fetch(n, {
      method: "POST",
      headers: {
        "Content-Type": "text/html;charset=utf-8",
        "x-ghost-preview": t,
        Accept: "text/plain"
      },
      mode: "cors",
      credentials: "include"
    }).then((l) => l.text()).then((l) => {
      var k, b, y;
      const A = "html { pointer-events: none; }", u = new DOMParser().parseFromString(l, "text/html"), d = u.querySelector("style"), h = d == null ? void 0 : d.innerHTML;
      h ? d.innerHTML = `${h}

${A}` : u.head.innerHTML += `<style>${A}</style>`;
      let v = (u.doctype ? new XMLSerializer().serializeToString(u.doctype) : "") + u.documentElement.outerHTML;
      (k = s.contentDocument) == null || k.open(), (b = s.contentDocument) == null || b.write(v), (y = s.contentDocument) == null || y.close();
    });
  }, [t, n]);
  return /* @__PURE__ */ o.jsx(
    $u,
    {
      addDelay: !1,
      className: "absolute h-[110%] w-[110%] origin-top-left scale-[.90909] bg-white max-[1600px]:h-[130%] max-[1600px]:w-[130%] max-[1600px]:scale-[.76923]",
      generateContent: a,
      height: "100%",
      parentClassName: "relative h-full w-full",
      testId: "theme-preview",
      width: "100%"
    }
  );
}, W5 = ({ setting: e, setSetting: n }) => {
  const [t, a] = ue({});
  Te(() => {
    const d = e.value === null ? "" : String(e.value);
    a((h) => ({ ...h, [e.key]: d }));
  }, [e]);
  const s = (d) => {
    t[d] !== void 0 && n(t[d]);
  }, l = (d, h) => {
    a((m) => ({ ...m, [d]: h }));
  }, { mutateAsync: A } = Qs(), f = dt(), u = async (d) => {
    try {
      const h = Or(await A({ file: d }));
      n(h);
    } catch (h) {
      f(h);
    }
  };
  switch (e.type) {
    case "text":
      return /* @__PURE__ */ o.jsx(
        je,
        {
          hint: e.description,
          title: Ci(e.key),
          value: t[e.key] || "",
          onBlur: () => s(e.key),
          onChange: (d) => l(e.key, d.target.value)
        }
      );
    case "boolean":
      return /* @__PURE__ */ o.jsx(
        ft,
        {
          checked: e.value,
          direction: "rtl",
          hint: e.description,
          label: Ci(e.key),
          onChange: (d) => n(d.target.checked)
        }
      );
    case "select":
      return /* @__PURE__ */ o.jsx(
        En,
        {
          hint: e.description,
          options: e.options.map((d) => ({ label: d, value: d })),
          selectedOption: { label: e.value, value: e.value },
          testId: `setting-select-${e.key}`,
          title: Ci(e.key),
          onSelect: (d) => n((d == null ? void 0 : d.value) || null)
        }
      );
    case "color":
      return /* @__PURE__ */ o.jsx(
        Li,
        {
          debounceMs: 200,
          direction: "rtl",
          hint: e.description,
          title: Ci(e.key),
          value: e.value || "",
          onChange: (d) => n(d)
        }
      );
    case "image":
      return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(st, { useLabelTag: !0, children: Ci(e.key) }),
        /* @__PURE__ */ o.jsx(
          Hr,
          {
            height: e.value ? "100px" : "32px",
            id: `custom-${e.key}`,
            imageURL: e.value || "",
            onDelete: () => n(null),
            onUpload: (d) => u(d),
            children: "Upload image"
          }
        ),
        e.description && /* @__PURE__ */ o.jsx(Aa, { children: e.description })
      ] });
  }
}, q5 = ({ settings: e, updateSetting: n }) => {
  const t = e.reduce((s, { key: l, value: A }) => ({ ...s, [l]: A }), {}), a = e.filter((s) => ug(s, t));
  return /* @__PURE__ */ o.jsx(_i, { className: "mt-7", children: a.map((s) => /* @__PURE__ */ o.jsx(W5, { setSetting: (l) => n({ ...s, value: l }), setting: s }, s.key)) });
}, V5 = ({
  brandSettings: e,
  themeSettingSections: n,
  updateBrandSetting: t,
  updateThemeSetting: a,
  onTabChange: s,
  handleSave: l
}) => {
  const { updateRoute: A } = nt(), [f, u] = ue("brand"), { data: { themes: d } = {} } = _p(), h = Vi().getParam("ref"), m = d == null ? void 0 : d.find((b) => b.active), v = [
    {
      id: "brand",
      title: "Brand",
      contents: /* @__PURE__ */ o.jsx(BE, { updateSetting: t, values: e })
    },
    ...n.map(({ id: b, title: y, settings: S }) => ({
      id: b,
      title: y,
      contents: /* @__PURE__ */ o.jsx(q5, { settings: S, updateSetting: a })
    }))
  ], k = (b) => {
    u(b), s(b);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "flex h-full flex-col justify-between", children: [
    /* @__PURE__ */ o.jsx("div", { className: "p-7", "data-testid": "design-setting-tabs", children: /* @__PURE__ */ o.jsx(Oa, { selectedTab: f, tabs: v, onTabChange: k }) }),
    /* @__PURE__ */ o.jsx(Sp, { height: 74, children: /* @__PURE__ */ o.jsx("div", { className: "w-full px-7", children: /* @__PURE__ */ o.jsxs("button", { className: "group flex w-full items-center justify-between text-sm font-medium opacity-80 transition-all hover:opacity-100", "data-testid": "change-theme", type: "button", onClick: async () => {
      await l(), A(h ? `design/change-theme?ref=${h}` : "design/change-theme");
    }, children: [
      /* @__PURE__ */ o.jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ o.jsx("div", { className: "font-semibold", children: "Change theme" }),
        /* @__PURE__ */ o.jsxs("div", { className: "font-sm text-grey-700", children: [
          "Current theme: ",
          m == null ? void 0 : m.name,
          " - v",
          m == null ? void 0 : m.package.version
        ] })
      ] }),
      /* @__PURE__ */ o.jsx(Qt, { className: "mr-2 transition-all group-hover:translate-x-2 dark:text-white", name: "chevron-right", size: "sm" })
    ] }) }) })
  ] });
}, _5 = () => {
  const { settings: e, siteData: n } = ct(), { mutateAsync: t } = ua(), { data: { posts: [a] } = { posts: [] } } = bp({
    searchParams: {
      filter: "status:published",
      order: "published_at DESC",
      limit: "1",
      fields: "id,url"
    }
  }), { data: s } = Zy(), { mutateAsync: l } = Gy(), A = dt(), [f, u] = ue("homepage"), { updateRoute: d } = nt(), h = Vi().getParam("ref"), {
    formState: m,
    saveState: v,
    handleSave: k,
    updateForm: b,
    setFormState: y,
    okProps: S
  } = qn({
    initialState: {
      settings: e,
      themeSettings: s ? s.custom_theme_settings : void 0
    },
    savingDelay: 500,
    onSave: async () => {
      var H;
      if ((H = m.themeSettings) != null && H.some((G) => G.dirty)) {
        const G = await l(m.themeSettings);
        y((pe) => ({ ...pe, themeSettings: G.custom_theme_settings }));
      }
      if (m.settings.some((G) => G.dirty)) {
        const { settings: G } = await t(m.settings.filter((pe) => pe.dirty));
        y((pe) => ({ ...pe, settings: G }));
      }
    },
    onSaveError: A
  });
  Te(() => {
    s && y((H) => ({ ...H, themeSettings: s.custom_theme_settings }));
  }, [y, s]);
  const T = (H, G) => {
    b((pe) => ({ ...pe, settings: pe.settings.map((ke) => ke.key === H ? { ...ke, value: G, dirty: !0 } : ke) }));
  }, O = (H) => {
    b((G) => {
      var pe;
      return { ...G, themeSettings: (pe = G.themeSettings) == null ? void 0 : pe.map((ke) => ke.key === H.key ? { ...H, dirty: !0 } : ke) };
    });
  }, [B, K, _, F, ee] = yt(m.settings, ["description", "accent_color", "icon", "logo", "cover_image"]), oe = (m.themeSettings || []).reduce((H, G) => {
    const pe = G.group === "homepage" || G.group === "post" ? G.group : "site-wide";
    return {
      ...H,
      [pe]: (H[pe] || []).concat(G)
    };
  }, {}), re = Object.entries(oe).map(([H, G]) => ({
    id: H,
    settings: G || [],
    title: H === "site-wide" ? "Site wide" : H === "homepage" ? "Homepage" : "Post"
  }));
  let $ = [];
  a && ($ = [
    { id: "homepage", title: "Homepage" },
    { id: "post", title: "Post" }
  ]);
  const ae = (H) => {
    $.length && u(H);
  }, Z = (H) => {
    u(H === "post" && a ? "post" : "homepage");
  };
  let N = Qr(n);
  switch (f) {
    case "homepage":
      N = Qr(n);
      break;
    case "post":
      N = a.url;
      break;
  }
  const Y = /* @__PURE__ */ o.jsx(
    X5,
    {
      settings: {
        description: B,
        accentColor: K,
        icon: _,
        logo: F,
        coverImage: ee,
        themeSettings: m.themeSettings
      },
      url: N
    }
  ), W = /* @__PURE__ */ o.jsx(
    V5,
    {
      brandSettings: { description: B, accentColor: K, icon: _, logo: F, coverImage: ee },
      handleSave: k,
      themeSettingSections: re,
      updateBrandSetting: T,
      updateThemeSetting: O,
      onTabChange: Z
    }
  );
  return /* @__PURE__ */ o.jsx(
    Hs,
    {
      afterClose: () => {
        h === "setup" ? window.location.hash = "/dashboard/" : d("design");
      },
      buttonsDisabled: S.disabled,
      cancelLabel: "Close",
      defaultTab: "homepage",
      dirty: v === "unsaved",
      okColor: S.color,
      okLabel: S.label || "Save",
      preview: Y,
      previewToolbarTabs: $,
      selectedURL: f,
      sidebar: W,
      sidebarPadding: !1,
      siteLink: Qr(n),
      size: "full",
      testId: "design-modal",
      title: "Design",
      onOk: async () => {
        await k({ fakeWhenUnchanged: !0 });
      },
      onSelectURL: ae
    }
  );
}, $5 = ({ pathName: e }) => {
  const n = Sn();
  if (e === "design/edit")
    return /* @__PURE__ */ o.jsx(_5, {});
  if (e === "design/change-theme")
    return /* @__PURE__ */ o.jsx(Yh, {});
  if (e === "design/change-theme/install") {
    const s = window.location.href.split("#")[1].split("?")[1], l = new URLSearchParams(s), A = l.get("ref") || null, f = l.get("source") || null;
    return /* @__PURE__ */ o.jsx(Yh, { source: f, themeRef: A });
  } else
    n.remove();
}, e4 = xe.create($5), t4 = ({ html: e, style: n }) => {
  const t = (a) => {
    var A;
    const s = a.contentDocument || ((A = a.contentWindow) == null ? void 0 : A.document);
    if (!s)
      return;
    const l = `
            <html>
                <head>
                    <style>body, html {padding: 0; margin: 0; overflow: hidden;}</style>
                    <style>${n}</style>
                </head>
                <body>${e}</body>
            </html>
        `;
    s.open(), s.write(l), s.close();
  };
  return /* @__PURE__ */ o.jsx(
    $u,
    {
      className: "absolute h-full w-full overflow-hidden transition-opacity duration-500",
      generateContent: t,
      height: "100%",
      parentClassName: "relative h-full w-full",
      width: "100%"
    }
  );
}, n4 = ({
  selectedLayout: e,
  accentColor: n,
  handleColorToggle: t,
  selectedColor: a,
  selectedLabels: s,
  handleLabelClick: l,
  embedScript: A,
  handleLayoutSelect: f,
  handleCopyClick: u,
  customColor: d,
  setCustomColor: h,
  isCopied: m
}) => {
  const { loadData: v } = Ip({ path: "/labels/", filterKey: "name", responseKey: "labels" }), k = async (b, y) => {
    const S = await v(b);
    y(S.map((T) => ({ label: T.name, value: T.name })));
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "flex h-[calc(100vh-16vmin)] max-h-[645px] flex-col justify-between overflow-y-scroll border-l border-grey-200 p-6 pb-0 dark:border-grey-900", children: [
    /* @__PURE__ */ o.jsxs("div", { children: [
      /* @__PURE__ */ o.jsx(st, { className: "mb-4", level: 4, children: "Embed signup form" }),
      /* @__PURE__ */ o.jsxs(bt, { children: [
        /* @__PURE__ */ o.jsx(
          qu,
          {
            id: "embed-layout",
            options: [
              {
                label: "Branded",
                value: "all-in-one"
              },
              {
                label: "Minimal",
                value: "minimal"
              }
            ],
            selectedOption: e,
            title: "Layout",
            onSelect: (b) => {
              f(b);
            }
          }
        ),
        e === "all-in-one" && /* @__PURE__ */ o.jsx(
          Ku,
          {
            isExpanded: !1,
            swatches: [
              {
                hex: "#08090c",
                title: "Dark"
              },
              {
                hex: "#ffffff",
                title: "Light"
              },
              {
                hex: n || "#d74780",
                title: "Accent"
              }
            ],
            swatchSize: "lg",
            title: "Background color",
            value: a,
            onSwatchChange: (b) => {
              b && h && (t(b), h({ active: !1 }));
            },
            onTogglePicker: () => {
              h && h({ active: !0 });
            }
          }
        ),
        e === "all-in-one" && (d == null ? void 0 : d.active) && /* @__PURE__ */ o.jsx(
          Pp,
          {
            containerClassName: "!-mt-4",
            eyedropper: !1,
            hexValue: a || "#d74780",
            onChange: (b) => {
              h && b && (h({ active: !0 }), t(b));
            }
          }
        ),
        /* @__PURE__ */ o.jsx(
          jk,
          {
            hint: "Will be applied to all members signing up via this form",
            loadOptions: qi(k, 500),
            placeholder: "Pick one or more labels (optional)",
            title: "Labels at signup",
            values: s || [],
            async: !0,
            canCreate: !0,
            defaultOptions: !0,
            onChange: l
          }
        ),
        /* @__PURE__ */ o.jsx(
          Ha,
          {
            className: "text-grey-800",
            clearBg: !1,
            fontStyle: "mono",
            hint: "Paste this code onto any website where you'd like your signup to appear.",
            title: "Embed code",
            value: `${A}`,
            onChange: () => {
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(Sp, { height: 74, children: /* @__PURE__ */ o.jsx("div", { className: "flex w-full justify-end", children: /* @__PURE__ */ o.jsx(Ye, { color: m ? "green" : "black", label: m ? "Copied!" : "Copy code", onClick: u }) }) })
  ] });
};
function ip(e) {
  return e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : "";
}
function Rf(e, n) {
  return n = { exports: {} }, e(n, n.exports), n.exports;
}
var Ni = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, r4 = function(n) {
  return !n || typeof n == "string" ? !1 : n instanceof Array || Array.isArray(n) || n.length >= 0 && (n.splice instanceof Function || Object.getOwnPropertyDescriptor(n, n.length - 1) && n.constructor.name !== "String");
}, Hi = Rf(function(e) {
  var n = Array.prototype.concat, t = Array.prototype.slice, a = e.exports = function(l) {
    for (var A = [], f = 0, u = l.length; f < u; f++) {
      var d = l[f];
      r4(d) ? A = n.call(A, t.call(d)) : A.push(d);
    }
    return A;
  };
  a.wrap = function(s) {
    return function() {
      return s(a(arguments));
    };
  };
}), ja = Rf(function(e) {
  var n = Object.hasOwnProperty, t = /* @__PURE__ */ Object.create(null);
  for (var a in Ni)
    n.call(Ni, a) && (t[Ni[a]] = a);
  var s = e.exports = {
    to: {},
    get: {}
  };
  s.get = function(f) {
    var u = f.substring(0, 3).toLowerCase(), d, h;
    switch (u) {
      case "hsl":
        d = s.get.hsl(f), h = "hsl";
        break;
      case "hwb":
        d = s.get.hwb(f), h = "hwb";
        break;
      default:
        d = s.get.rgb(f), h = "rgb";
        break;
    }
    return d ? { model: h, value: d } : null;
  }, s.get.rgb = function(f) {
    if (!f)
      return null;
    var u = /^#([a-f0-9]{3,4})$/i, d = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i, h = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, m = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, v = /^(\w+)$/, k = [0, 0, 0, 1], b, y, S;
    if (b = f.match(d)) {
      for (S = b[2], b = b[1], y = 0; y < 3; y++) {
        var T = y * 2;
        k[y] = parseInt(b.slice(T, T + 2), 16);
      }
      S && (k[3] = parseInt(S, 16) / 255);
    } else if (b = f.match(u)) {
      for (b = b[1], S = b[3], y = 0; y < 3; y++)
        k[y] = parseInt(b[y] + b[y], 16);
      S && (k[3] = parseInt(S + S, 16) / 255);
    } else if (b = f.match(h)) {
      for (y = 0; y < 3; y++)
        k[y] = parseInt(b[y + 1], 0);
      b[4] && (b[5] ? k[3] = parseFloat(b[4]) * 0.01 : k[3] = parseFloat(b[4]));
    } else if (b = f.match(m)) {
      for (y = 0; y < 3; y++)
        k[y] = Math.round(parseFloat(b[y + 1]) * 2.55);
      b[4] && (b[5] ? k[3] = parseFloat(b[4]) * 0.01 : k[3] = parseFloat(b[4]));
    } else
      return (b = f.match(v)) ? b[1] === "transparent" ? [0, 0, 0, 0] : n.call(Ni, b[1]) ? (k = Ni[b[1]], k[3] = 1, k) : null : null;
    for (y = 0; y < 3; y++)
      k[y] = l(k[y], 0, 255);
    return k[3] = l(k[3], 0, 1), k;
  }, s.get.hsl = function(f) {
    if (!f)
      return null;
    var u = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, d = f.match(u);
    if (d) {
      var h = parseFloat(d[4]), m = (parseFloat(d[1]) % 360 + 360) % 360, v = l(parseFloat(d[2]), 0, 100), k = l(parseFloat(d[3]), 0, 100), b = l(isNaN(h) ? 1 : h, 0, 1);
      return [m, v, k, b];
    }
    return null;
  }, s.get.hwb = function(f) {
    if (!f)
      return null;
    var u = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, d = f.match(u);
    if (d) {
      var h = parseFloat(d[4]), m = (parseFloat(d[1]) % 360 + 360) % 360, v = l(parseFloat(d[2]), 0, 100), k = l(parseFloat(d[3]), 0, 100), b = l(isNaN(h) ? 1 : h, 0, 1);
      return [m, v, k, b];
    }
    return null;
  }, s.to.hex = function() {
    var f = Hi(arguments);
    return "#" + A(f[0]) + A(f[1]) + A(f[2]) + (f[3] < 1 ? A(Math.round(f[3] * 255)) : "");
  }, s.to.rgb = function() {
    var f = Hi(arguments);
    return f.length < 4 || f[3] === 1 ? "rgb(" + Math.round(f[0]) + ", " + Math.round(f[1]) + ", " + Math.round(f[2]) + ")" : "rgba(" + Math.round(f[0]) + ", " + Math.round(f[1]) + ", " + Math.round(f[2]) + ", " + f[3] + ")";
  }, s.to.rgb.percent = function() {
    var f = Hi(arguments), u = Math.round(f[0] / 255 * 100), d = Math.round(f[1] / 255 * 100), h = Math.round(f[2] / 255 * 100);
    return f.length < 4 || f[3] === 1 ? "rgb(" + u + "%, " + d + "%, " + h + "%)" : "rgba(" + u + "%, " + d + "%, " + h + "%, " + f[3] + ")";
  }, s.to.hsl = function() {
    var f = Hi(arguments);
    return f.length < 4 || f[3] === 1 ? "hsl(" + f[0] + ", " + f[1] + "%, " + f[2] + "%)" : "hsla(" + f[0] + ", " + f[1] + "%, " + f[2] + "%, " + f[3] + ")";
  }, s.to.hwb = function() {
    var f = Hi(arguments), u = "";
    return f.length >= 4 && f[3] !== 1 && (u = ", " + f[3]), "hwb(" + f[0] + ", " + f[1] + "%, " + f[2] + "%" + u + ")";
  }, s.to.keyword = function(f) {
    return t[f.slice(0, 3)];
  };
  function l(f, u, d) {
    return Math.min(Math.max(u, f), d);
  }
  function A(f) {
    var u = Math.round(f).toString(16).toUpperCase();
    return u.length < 2 ? "0" + u : u;
  }
});
ja.to;
ja.get;
var Ta = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, Lt = Rf(function(e) {
  var n = {};
  for (var t in Ta)
    Ta.hasOwnProperty(t) && (n[Ta[t]] = t);
  var a = e.exports = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] }
  };
  for (var s in a)
    if (a.hasOwnProperty(s)) {
      if (!("channels" in a[s]))
        throw new Error("missing channels property: " + s);
      if (!("labels" in a[s]))
        throw new Error("missing channel labels property: " + s);
      if (a[s].labels.length !== a[s].channels)
        throw new Error("channel and label counts mismatch: " + s);
      var l = a[s].channels, A = a[s].labels;
      delete a[s].channels, delete a[s].labels, Object.defineProperty(a[s], "channels", { value: l }), Object.defineProperty(a[s], "labels", { value: A });
    }
  a.rgb.hsl = function(u) {
    var d = u[0] / 255, h = u[1] / 255, m = u[2] / 255, v = Math.min(d, h, m), k = Math.max(d, h, m), b = k - v, y, S, T;
    return k === v ? y = 0 : d === k ? y = (h - m) / b : h === k ? y = 2 + (m - d) / b : m === k && (y = 4 + (d - h) / b), y = Math.min(y * 60, 360), y < 0 && (y += 360), T = (v + k) / 2, k === v ? S = 0 : T <= 0.5 ? S = b / (k + v) : S = b / (2 - k - v), [y, S * 100, T * 100];
  }, a.rgb.hsv = function(u) {
    var d, h, m, v, k, b = u[0] / 255, y = u[1] / 255, S = u[2] / 255, T = Math.max(b, y, S), O = T - Math.min(b, y, S), B = function(K) {
      return (T - K) / 6 / O + 1 / 2;
    };
    return O === 0 ? v = k = 0 : (k = O / T, d = B(b), h = B(y), m = B(S), b === T ? v = m - h : y === T ? v = 1 / 3 + d - m : S === T && (v = 2 / 3 + h - d), v < 0 ? v += 1 : v > 1 && (v -= 1)), [
      v * 360,
      k * 100,
      T * 100
    ];
  }, a.rgb.hwb = function(u) {
    var d = u[0], h = u[1], m = u[2], v = a.rgb.hsl(u)[0], k = 1 / 255 * Math.min(d, Math.min(h, m));
    return m = 1 - 1 / 255 * Math.max(d, Math.max(h, m)), [v, k * 100, m * 100];
  }, a.rgb.cmyk = function(u) {
    var d = u[0] / 255, h = u[1] / 255, m = u[2] / 255, v, k, b, y;
    return y = Math.min(1 - d, 1 - h, 1 - m), v = (1 - d - y) / (1 - y) || 0, k = (1 - h - y) / (1 - y) || 0, b = (1 - m - y) / (1 - y) || 0, [v * 100, k * 100, b * 100, y * 100];
  };
  function f(u, d) {
    return Math.pow(u[0] - d[0], 2) + Math.pow(u[1] - d[1], 2) + Math.pow(u[2] - d[2], 2);
  }
  a.rgb.keyword = function(u) {
    var d = n[u];
    if (d)
      return d;
    var h = 1 / 0, m;
    for (var v in Ta)
      if (Ta.hasOwnProperty(v)) {
        var k = Ta[v], b = f(u, k);
        b < h && (h = b, m = v);
      }
    return m;
  }, a.keyword.rgb = function(u) {
    return Ta[u];
  }, a.rgb.xyz = function(u) {
    var d = u[0] / 255, h = u[1] / 255, m = u[2] / 255;
    d = d > 0.04045 ? Math.pow((d + 0.055) / 1.055, 2.4) : d / 12.92, h = h > 0.04045 ? Math.pow((h + 0.055) / 1.055, 2.4) : h / 12.92, m = m > 0.04045 ? Math.pow((m + 0.055) / 1.055, 2.4) : m / 12.92;
    var v = d * 0.4124 + h * 0.3576 + m * 0.1805, k = d * 0.2126 + h * 0.7152 + m * 0.0722, b = d * 0.0193 + h * 0.1192 + m * 0.9505;
    return [v * 100, k * 100, b * 100];
  }, a.rgb.lab = function(u) {
    var d = a.rgb.xyz(u), h = d[0], m = d[1], v = d[2], k, b, y;
    return h /= 95.047, m /= 100, v /= 108.883, h = h > 8856e-6 ? Math.pow(h, 1 / 3) : 7.787 * h + 16 / 116, m = m > 8856e-6 ? Math.pow(m, 1 / 3) : 7.787 * m + 16 / 116, v = v > 8856e-6 ? Math.pow(v, 1 / 3) : 7.787 * v + 16 / 116, k = 116 * m - 16, b = 500 * (h - m), y = 200 * (m - v), [k, b, y];
  }, a.hsl.rgb = function(u) {
    var d = u[0] / 360, h = u[1] / 100, m = u[2] / 100, v, k, b, y, S;
    if (h === 0)
      return S = m * 255, [S, S, S];
    m < 0.5 ? k = m * (1 + h) : k = m + h - m * h, v = 2 * m - k, y = [0, 0, 0];
    for (var T = 0; T < 3; T++)
      b = d + 1 / 3 * -(T - 1), b < 0 && b++, b > 1 && b--, 6 * b < 1 ? S = v + (k - v) * 6 * b : 2 * b < 1 ? S = k : 3 * b < 2 ? S = v + (k - v) * (2 / 3 - b) * 6 : S = v, y[T] = S * 255;
    return y;
  }, a.hsl.hsv = function(u) {
    var d = u[0], h = u[1] / 100, m = u[2] / 100, v = h, k = Math.max(m, 0.01), b, y;
    return m *= 2, h *= m <= 1 ? m : 2 - m, v *= k <= 1 ? k : 2 - k, y = (m + h) / 2, b = m === 0 ? 2 * v / (k + v) : 2 * h / (m + h), [d, b * 100, y * 100];
  }, a.hsv.rgb = function(u) {
    var d = u[0] / 60, h = u[1] / 100, m = u[2] / 100, v = Math.floor(d) % 6, k = d - Math.floor(d), b = 255 * m * (1 - h), y = 255 * m * (1 - h * k), S = 255 * m * (1 - h * (1 - k));
    switch (m *= 255, v) {
      case 0:
        return [m, S, b];
      case 1:
        return [y, m, b];
      case 2:
        return [b, m, S];
      case 3:
        return [b, y, m];
      case 4:
        return [S, b, m];
      case 5:
        return [m, b, y];
    }
  }, a.hsv.hsl = function(u) {
    var d = u[0], h = u[1] / 100, m = u[2] / 100, v = Math.max(m, 0.01), k, b, y;
    return y = (2 - h) * m, k = (2 - h) * v, b = h * v, b /= k <= 1 ? k : 2 - k, b = b || 0, y /= 2, [d, b * 100, y * 100];
  }, a.hwb.rgb = function(u) {
    var d = u[0] / 360, h = u[1] / 100, m = u[2] / 100, v = h + m, k, b, y, S;
    v > 1 && (h /= v, m /= v), k = Math.floor(6 * d), b = 1 - m, y = 6 * d - k, k & 1 && (y = 1 - y), S = h + y * (b - h);
    var T, O, B;
    switch (k) {
      default:
      case 6:
      case 0:
        T = b, O = S, B = h;
        break;
      case 1:
        T = S, O = b, B = h;
        break;
      case 2:
        T = h, O = b, B = S;
        break;
      case 3:
        T = h, O = S, B = b;
        break;
      case 4:
        T = S, O = h, B = b;
        break;
      case 5:
        T = b, O = h, B = S;
        break;
    }
    return [T * 255, O * 255, B * 255];
  }, a.cmyk.rgb = function(u) {
    var d = u[0] / 100, h = u[1] / 100, m = u[2] / 100, v = u[3] / 100, k, b, y;
    return k = 1 - Math.min(1, d * (1 - v) + v), b = 1 - Math.min(1, h * (1 - v) + v), y = 1 - Math.min(1, m * (1 - v) + v), [k * 255, b * 255, y * 255];
  }, a.xyz.rgb = function(u) {
    var d = u[0] / 100, h = u[1] / 100, m = u[2] / 100, v, k, b;
    return v = d * 3.2406 + h * -1.5372 + m * -0.4986, k = d * -0.9689 + h * 1.8758 + m * 0.0415, b = d * 0.0557 + h * -0.204 + m * 1.057, v = v > 31308e-7 ? 1.055 * Math.pow(v, 1 / 2.4) - 0.055 : v * 12.92, k = k > 31308e-7 ? 1.055 * Math.pow(k, 1 / 2.4) - 0.055 : k * 12.92, b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92, v = Math.min(Math.max(0, v), 1), k = Math.min(Math.max(0, k), 1), b = Math.min(Math.max(0, b), 1), [v * 255, k * 255, b * 255];
  }, a.xyz.lab = function(u) {
    var d = u[0], h = u[1], m = u[2], v, k, b;
    return d /= 95.047, h /= 100, m /= 108.883, d = d > 8856e-6 ? Math.pow(d, 1 / 3) : 7.787 * d + 16 / 116, h = h > 8856e-6 ? Math.pow(h, 1 / 3) : 7.787 * h + 16 / 116, m = m > 8856e-6 ? Math.pow(m, 1 / 3) : 7.787 * m + 16 / 116, v = 116 * h - 16, k = 500 * (d - h), b = 200 * (h - m), [v, k, b];
  }, a.lab.xyz = function(u) {
    var d = u[0], h = u[1], m = u[2], v, k, b;
    k = (d + 16) / 116, v = h / 500 + k, b = k - m / 200;
    var y = Math.pow(k, 3), S = Math.pow(v, 3), T = Math.pow(b, 3);
    return k = y > 8856e-6 ? y : (k - 16 / 116) / 7.787, v = S > 8856e-6 ? S : (v - 16 / 116) / 7.787, b = T > 8856e-6 ? T : (b - 16 / 116) / 7.787, v *= 95.047, k *= 100, b *= 108.883, [v, k, b];
  }, a.lab.lch = function(u) {
    var d = u[0], h = u[1], m = u[2], v, k, b;
    return v = Math.atan2(m, h), k = v * 360 / 2 / Math.PI, k < 0 && (k += 360), b = Math.sqrt(h * h + m * m), [d, b, k];
  }, a.lch.lab = function(u) {
    var d = u[0], h = u[1], m = u[2], v, k, b;
    return b = m / 360 * 2 * Math.PI, v = h * Math.cos(b), k = h * Math.sin(b), [d, v, k];
  }, a.rgb.ansi16 = function(u) {
    var d = u[0], h = u[1], m = u[2], v = 1 in arguments ? arguments[1] : a.rgb.hsv(u)[2];
    if (v = Math.round(v / 50), v === 0)
      return 30;
    var k = 30 + (Math.round(m / 255) << 2 | Math.round(h / 255) << 1 | Math.round(d / 255));
    return v === 2 && (k += 60), k;
  }, a.hsv.ansi16 = function(u) {
    return a.rgb.ansi16(a.hsv.rgb(u), u[2]);
  }, a.rgb.ansi256 = function(u) {
    var d = u[0], h = u[1], m = u[2];
    if (d === h && h === m)
      return d < 8 ? 16 : d > 248 ? 231 : Math.round((d - 8) / 247 * 24) + 232;
    var v = 16 + 36 * Math.round(d / 255 * 5) + 6 * Math.round(h / 255 * 5) + Math.round(m / 255 * 5);
    return v;
  }, a.ansi16.rgb = function(u) {
    var d = u % 10;
    if (d === 0 || d === 7)
      return u > 50 && (d += 3.5), d = d / 10.5 * 255, [d, d, d];
    var h = (~~(u > 50) + 1) * 0.5, m = (d & 1) * h * 255, v = (d >> 1 & 1) * h * 255, k = (d >> 2 & 1) * h * 255;
    return [m, v, k];
  }, a.ansi256.rgb = function(u) {
    if (u >= 232) {
      var d = (u - 232) * 10 + 8;
      return [d, d, d];
    }
    u -= 16;
    var h, m = Math.floor(u / 36) / 5 * 255, v = Math.floor((h = u % 36) / 6) / 5 * 255, k = h % 6 / 5 * 255;
    return [m, v, k];
  }, a.rgb.hex = function(u) {
    var d = ((Math.round(u[0]) & 255) << 16) + ((Math.round(u[1]) & 255) << 8) + (Math.round(u[2]) & 255), h = d.toString(16).toUpperCase();
    return "000000".substring(h.length) + h;
  }, a.hex.rgb = function(u) {
    var d = u.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!d)
      return [0, 0, 0];
    var h = d[0];
    d[0].length === 3 && (h = h.split("").map(function(y) {
      return y + y;
    }).join(""));
    var m = parseInt(h, 16), v = m >> 16 & 255, k = m >> 8 & 255, b = m & 255;
    return [v, k, b];
  }, a.rgb.hcg = function(u) {
    var d = u[0] / 255, h = u[1] / 255, m = u[2] / 255, v = Math.max(Math.max(d, h), m), k = Math.min(Math.min(d, h), m), b = v - k, y, S;
    return b < 1 ? y = k / (1 - b) : y = 0, b <= 0 ? S = 0 : v === d ? S = (h - m) / b % 6 : v === h ? S = 2 + (m - d) / b : S = 4 + (d - h) / b + 4, S /= 6, S %= 1, [S * 360, b * 100, y * 100];
  }, a.hsl.hcg = function(u) {
    var d = u[1] / 100, h = u[2] / 100, m = 1, v = 0;
    return h < 0.5 ? m = 2 * d * h : m = 2 * d * (1 - h), m < 1 && (v = (h - 0.5 * m) / (1 - m)), [u[0], m * 100, v * 100];
  }, a.hsv.hcg = function(u) {
    var d = u[1] / 100, h = u[2] / 100, m = d * h, v = 0;
    return m < 1 && (v = (h - m) / (1 - m)), [u[0], m * 100, v * 100];
  }, a.hcg.rgb = function(u) {
    var d = u[0] / 360, h = u[1] / 100, m = u[2] / 100;
    if (h === 0)
      return [m * 255, m * 255, m * 255];
    var v = [0, 0, 0], k = d % 1 * 6, b = k % 1, y = 1 - b, S = 0;
    switch (Math.floor(k)) {
      case 0:
        v[0] = 1, v[1] = b, v[2] = 0;
        break;
      case 1:
        v[0] = y, v[1] = 1, v[2] = 0;
        break;
      case 2:
        v[0] = 0, v[1] = 1, v[2] = b;
        break;
      case 3:
        v[0] = 0, v[1] = y, v[2] = 1;
        break;
      case 4:
        v[0] = b, v[1] = 0, v[2] = 1;
        break;
      default:
        v[0] = 1, v[1] = 0, v[2] = y;
    }
    return S = (1 - h) * m, [
      (h * v[0] + S) * 255,
      (h * v[1] + S) * 255,
      (h * v[2] + S) * 255
    ];
  }, a.hcg.hsv = function(u) {
    var d = u[1] / 100, h = u[2] / 100, m = d + h * (1 - d), v = 0;
    return m > 0 && (v = d / m), [u[0], v * 100, m * 100];
  }, a.hcg.hsl = function(u) {
    var d = u[1] / 100, h = u[2] / 100, m = h * (1 - d) + 0.5 * d, v = 0;
    return m > 0 && m < 0.5 ? v = d / (2 * m) : m >= 0.5 && m < 1 && (v = d / (2 * (1 - m))), [u[0], v * 100, m * 100];
  }, a.hcg.hwb = function(u) {
    var d = u[1] / 100, h = u[2] / 100, m = d + h * (1 - d);
    return [u[0], (m - d) * 100, (1 - m) * 100];
  }, a.hwb.hcg = function(u) {
    var d = u[1] / 100, h = u[2] / 100, m = 1 - h, v = m - d, k = 0;
    return v < 1 && (k = (m - v) / (1 - v)), [u[0], v * 100, k * 100];
  }, a.apple.rgb = function(u) {
    return [u[0] / 65535 * 255, u[1] / 65535 * 255, u[2] / 65535 * 255];
  }, a.rgb.apple = function(u) {
    return [u[0] / 255 * 65535, u[1] / 255 * 65535, u[2] / 255 * 65535];
  }, a.gray.rgb = function(u) {
    return [u[0] / 100 * 255, u[0] / 100 * 255, u[0] / 100 * 255];
  }, a.gray.hsl = a.gray.hsv = function(u) {
    return [0, 0, u[0]];
  }, a.gray.hwb = function(u) {
    return [0, 100, u[0]];
  }, a.gray.cmyk = function(u) {
    return [0, 0, 0, u[0]];
  }, a.gray.lab = function(u) {
    return [u[0], 0, 0];
  }, a.gray.hex = function(u) {
    var d = Math.round(u[0] / 100 * 255) & 255, h = (d << 16) + (d << 8) + d, m = h.toString(16).toUpperCase();
    return "000000".substring(m.length) + m;
  }, a.rgb.gray = function(u) {
    var d = (u[0] + u[1] + u[2]) / 3;
    return [d / 255 * 100];
  };
});
Lt.rgb;
Lt.hsl;
Lt.hsv;
Lt.hwb;
Lt.cmyk;
Lt.xyz;
Lt.lab;
Lt.lch;
Lt.hex;
Lt.keyword;
Lt.ansi16;
Lt.ansi256;
Lt.hcg;
Lt.apple;
Lt.gray;
function a4() {
  for (var e = {}, n = Object.keys(Lt), t = n.length, a = 0; a < t; a++)
    e[n[a]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  return e;
}
function s4(e) {
  var n = a4(), t = [e];
  for (n[e].distance = 0; t.length; )
    for (var a = t.pop(), s = Object.keys(Lt[a]), l = s.length, A = 0; A < l; A++) {
      var f = s[A], u = n[f];
      u.distance === -1 && (u.distance = n[a].distance + 1, u.parent = a, t.unshift(f));
    }
  return n;
}
function i4(e, n) {
  return function(t) {
    return n(e(t));
  };
}
function o4(e, n) {
  for (var t = [n[e].parent, e], a = Lt[n[e].parent][e], s = n[e].parent; n[s].parent; )
    t.unshift(n[s].parent), a = i4(Lt[n[s].parent][s], a), s = n[s].parent;
  return a.conversion = t, a;
}
var l4 = function(e) {
  for (var n = s4(e), t = {}, a = Object.keys(n), s = a.length, l = 0; l < s; l++) {
    var A = a[l], f = n[A];
    f.parent !== null && (t[A] = o4(A, n));
  }
  return t;
}, Ss = {}, A4 = Object.keys(Lt);
function c4(e) {
  var n = function(t) {
    return t == null ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t));
  };
  return "conversion" in e && (n.conversion = e.conversion), n;
}
function u4(e) {
  var n = function(t) {
    if (t == null)
      return t;
    arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
    var a = e(t);
    if (typeof a == "object")
      for (var s = a.length, l = 0; l < s; l++)
        a[l] = Math.round(a[l]);
    return a;
  };
  return "conversion" in e && (n.conversion = e.conversion), n;
}
A4.forEach(function(e) {
  Ss[e] = {}, Object.defineProperty(Ss[e], "channels", { value: Lt[e].channels }), Object.defineProperty(Ss[e], "labels", { value: Lt[e].labels });
  var n = l4(e), t = Object.keys(n);
  t.forEach(function(a) {
    var s = n[a];
    Ss[e][a] = u4(s), Ss[e][a].raw = c4(s);
  });
});
var Yn = Ss, jf = [].slice, fg = [
  // to be honest, I don't really feel like keyword belongs in color convert, but eh.
  "keyword",
  // gray conflicts with some method names, and has its own method defined.
  "gray",
  // shouldn't really be in color-convert either...
  "hex"
], Bu = {};
Object.keys(Yn).forEach(function(e) {
  Bu[jf.call(Yn[e].labels).sort().join("")] = e;
});
var tA = {};
function An(e, n) {
  if (!(this instanceof An))
    return new An(e, n);
  if (n && n in fg && (n = null), n && !(n in Yn))
    throw new Error("Unknown model: " + n);
  var t, a;
  if (e == null)
    this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (e instanceof An)
    this.model = e.model, this.color = e.color.slice(), this.valpha = e.valpha;
  else if (typeof e == "string") {
    var s = ja.get(e);
    if (s === null)
      throw new Error("Unable to parse color from string: " + e);
    this.model = s.model, a = Yn[this.model].channels, this.color = s.value.slice(0, a), this.valpha = typeof s.value[a] == "number" ? s.value[a] : 1;
  } else if (e.length) {
    this.model = n || "rgb", a = Yn[this.model].channels;
    var l = jf.call(e, 0, a);
    this.color = Uu(l, a), this.valpha = typeof e[a] == "number" ? e[a] : 1;
  } else if (typeof e == "number")
    e &= 16777215, this.model = "rgb", this.color = [
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255
    ], this.valpha = 1;
  else {
    this.valpha = 1;
    var A = Object.keys(e);
    "alpha" in e && (A.splice(A.indexOf("alpha"), 1), this.valpha = typeof e.alpha == "number" ? e.alpha : 0);
    var f = A.sort().join("");
    if (!(f in Bu))
      throw new Error("Unable to parse color from object: " + JSON.stringify(e));
    this.model = Bu[f];
    var u = Yn[this.model].labels, d = [];
    for (t = 0; t < u.length; t++)
      d.push(e[u[t]]);
    this.color = Uu(d);
  }
  if (tA[this.model])
    for (a = Yn[this.model].channels, t = 0; t < a; t++) {
      var h = tA[this.model][t];
      h && (this.color[t] = h(this.color[t]));
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
An.prototype = {
  toString: function() {
    return this.string();
  },
  toJSON: function() {
    return this[this.model]();
  },
  string: function(e) {
    var n = this.model in ja.to ? this : this.rgb();
    n = n.round(typeof e == "number" ? e : 1);
    var t = n.valpha === 1 ? n.color : n.color.concat(this.valpha);
    return ja.to[n.model](t);
  },
  percentString: function(e) {
    var n = this.rgb().round(typeof e == "number" ? e : 1), t = n.valpha === 1 ? n.color : n.color.concat(this.valpha);
    return ja.to.rgb.percent(t);
  },
  array: function() {
    return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
  },
  object: function() {
    for (var e = {}, n = Yn[this.model].channels, t = Yn[this.model].labels, a = 0; a < n; a++)
      e[t[a]] = this.color[a];
    return this.valpha !== 1 && (e.alpha = this.valpha), e;
  },
  unitArray: function() {
    var e = this.rgb().color;
    return e[0] /= 255, e[1] /= 255, e[2] /= 255, this.valpha !== 1 && e.push(this.valpha), e;
  },
  unitObject: function() {
    var e = this.rgb().object();
    return e.r /= 255, e.g /= 255, e.b /= 255, this.valpha !== 1 && (e.alpha = this.valpha), e;
  },
  round: function(e) {
    return e = Math.max(e || 0, 0), new An(this.color.map(d4(e)).concat(this.valpha), this.model);
  },
  alpha: function(e) {
    return arguments.length ? new An(this.color.concat(Math.max(0, Math.min(1, e))), this.model) : this.valpha;
  },
  // rgb
  red: Ht("rgb", 0, en(255)),
  green: Ht("rgb", 1, en(255)),
  blue: Ht("rgb", 2, en(255)),
  hue: Ht(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function(e) {
    return (e % 360 + 360) % 360;
  }),
  // eslint-disable-line brace-style
  saturationl: Ht("hsl", 1, en(100)),
  lightness: Ht("hsl", 2, en(100)),
  saturationv: Ht("hsv", 1, en(100)),
  value: Ht("hsv", 2, en(100)),
  chroma: Ht("hcg", 1, en(100)),
  gray: Ht("hcg", 2, en(100)),
  white: Ht("hwb", 1, en(100)),
  wblack: Ht("hwb", 2, en(100)),
  cyan: Ht("cmyk", 0, en(100)),
  magenta: Ht("cmyk", 1, en(100)),
  yellow: Ht("cmyk", 2, en(100)),
  black: Ht("cmyk", 3, en(100)),
  x: Ht("xyz", 0, en(100)),
  y: Ht("xyz", 1, en(100)),
  z: Ht("xyz", 2, en(100)),
  l: Ht("lab", 0, en(100)),
  a: Ht("lab", 1),
  b: Ht("lab", 2),
  keyword: function(e) {
    return arguments.length ? new An(e) : Yn[this.model].keyword(this.color);
  },
  hex: function(e) {
    return arguments.length ? new An(e) : ja.to.hex(this.rgb().round().color);
  },
  rgbNumber: function() {
    var e = this.rgb().color;
    return (e[0] & 255) << 16 | (e[1] & 255) << 8 | e[2] & 255;
  },
  luminosity: function() {
    for (var e = this.rgb().color, n = [], t = 0; t < e.length; t++) {
      var a = e[t] / 255;
      n[t] = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2];
  },
  contrast: function(e) {
    var n = this.luminosity(), t = e.luminosity();
    return n > t ? (n + 0.05) / (t + 0.05) : (t + 0.05) / (n + 0.05);
  },
  level: function(e) {
    var n = this.contrast(e);
    return n >= 7.1 ? "AAA" : n >= 4.5 ? "AA" : "";
  },
  isDark: function() {
    var e = this.rgb().color, n = (e[0] * 299 + e[1] * 587 + e[2] * 114) / 1e3;
    return n < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  negate: function() {
    for (var e = this.rgb(), n = 0; n < 3; n++)
      e.color[n] = 255 - e.color[n];
    return e;
  },
  lighten: function(e) {
    var n = this.hsl();
    return n.color[2] += n.color[2] * e, n;
  },
  darken: function(e) {
    var n = this.hsl();
    return n.color[2] -= n.color[2] * e, n;
  },
  saturate: function(e) {
    var n = this.hsl();
    return n.color[1] += n.color[1] * e, n;
  },
  desaturate: function(e) {
    var n = this.hsl();
    return n.color[1] -= n.color[1] * e, n;
  },
  whiten: function(e) {
    var n = this.hwb();
    return n.color[1] += n.color[1] * e, n;
  },
  blacken: function(e) {
    var n = this.hwb();
    return n.color[2] += n.color[2] * e, n;
  },
  grayscale: function() {
    var e = this.rgb().color, n = e[0] * 0.3 + e[1] * 0.59 + e[2] * 0.11;
    return An.rgb(n, n, n);
  },
  fade: function(e) {
    return this.alpha(this.valpha - this.valpha * e);
  },
  opaquer: function(e) {
    return this.alpha(this.valpha + this.valpha * e);
  },
  rotate: function(e) {
    var n = this.hsl(), t = n.color[0];
    return t = (t + e) % 360, t = t < 0 ? 360 + t : t, n.color[0] = t, n;
  },
  mix: function(e, n) {
    if (!e || !e.rgb)
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof e);
    var t = e.rgb(), a = this.rgb(), s = n === void 0 ? 0.5 : n, l = 2 * s - 1, A = t.alpha() - a.alpha(), f = ((l * A === -1 ? l : (l + A) / (1 + l * A)) + 1) / 2, u = 1 - f;
    return An.rgb(
      f * t.red() + u * a.red(),
      f * t.green() + u * a.green(),
      f * t.blue() + u * a.blue(),
      t.alpha() * s + a.alpha() * (1 - s)
    );
  }
};
Object.keys(Yn).forEach(function(e) {
  if (fg.indexOf(e) === -1) {
    var n = Yn[e].channels;
    An.prototype[e] = function() {
      if (this.model === e)
        return new An(this);
      if (arguments.length)
        return new An(arguments, e);
      var t = typeof arguments[n] == "number" ? n : this.valpha;
      return new An(h4(Yn[this.model][e].raw(this.color)).concat(t), e);
    }, An[e] = function(t) {
      return typeof t == "number" && (t = Uu(jf.call(arguments), n)), new An(t, e);
    };
  }
});
function f4(e, n) {
  return Number(e.toFixed(n));
}
function d4(e) {
  return function(n) {
    return f4(n, e);
  };
}
function Ht(e, n, t) {
  return e = Array.isArray(e) ? e : [e], e.forEach(function(a) {
    (tA[a] || (tA[a] = []))[n] = t;
  }), e = e[0], function(a) {
    var s;
    return arguments.length ? (t && (a = t(a)), s = this[e](), s.color[n] = a, s) : (s = this[e]().color[n], t && (s = t(s)), s);
  };
}
function en(e) {
  return function(n) {
    return Math.max(0, Math.min(e, n));
  };
}
function h4(e) {
  return Array.isArray(e) ? e : [e];
}
function Uu(e, n) {
  for (var t = 0; t < n; t++)
    typeof e[t] != "number" && (e[t] = 0);
  return e;
}
var ku = An;
function jr(e) {
  const n = ku(e), t = ku({ r: 255, g: 255, b: 255 }), a = ku({ r: 0, g: 0, b: 0 });
  return n.red() * 0.299 + n.green() * 0.587 + n.b() * 0.114 >= 186 ? a : t;
}
const p4 = ({
  preview: e,
  config: n,
  settings: t,
  labels: a,
  backgroundColor: s,
  layout: l,
  i18nEnabled: A
}) => {
  const f = n.blogUrl, u = n.signupForm.url.replace("{version}", n.signupForm.version);
  let d = {
    site: f,
    "button-color": t.accentColor,
    "button-text-color": jr(t.accentColor).hex()
  };
  A && t.locale && (d.locale = t.locale);
  for (const [y, S] of a.entries())
    d[`label-${y + 1}`] = S.name;
  let h = "min-height: 58px;max-width: 440px;margin: 0 auto;width: 100%";
  l === "all-in-one" && (t.icon && t.icon !== "" && (d.icon = t.icon.replace(/\/content\/images\//, "/content/images/size/w192h192/")), d.title = t.title, d.description = t.description, d["background-color"] = s, d["text-color"] = jr(s).hex(), h = "height: 40vmin;min-height: 360px"), e && (l === "minimal" ? h = "min-height: 58px; max-width: 440px;width: 100%;position: absolute; left: 50%; top:50%; transform: translate(-50%, -50%);" : h = "height: 100vh");
  let m = "";
  const v = [
    "background-color",
    "text-color",
    "button-color",
    "button-text-color",
    "title",
    "description",
    "icon",
    "site",
    "locale"
  ], k = Object.keys(d).sort((y, S) => v.indexOf(y) - v.indexOf(S));
  for (const y of k) {
    const S = d[y];
    m += ` data-${y}="${ip(S)}"`;
  }
  const b = `<div style="${ip(h)}"><script src="${encodeURI(u)}"${m} async><\/script></div>`;
  return e && h === "minimal" ? `<div style="position: absolute; z-index: -1; top: 0; left: 0; width: 100%; height: 100%; background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%), linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);background-size: 16px 16px;background-position: 0 0, 8px 8px;;"></div>${b}` : b;
}, m4 = xe.create(() => {
  let e = !1;
  const [n, t] = ue("#08090c"), [a, s] = ue([]), [l, A] = ue("all-in-one"), [f, u] = ue(""), [d, h] = ue(!1), { updateRoute: m } = nt(), { config: v } = ct(), { localSettings: k, siteData: b } = Ba(), [y, S, T, O, B, K] = yt(k, ["accent_color", "title", "description", "locale", "labs", "icon"]), [_, F] = ue({ active: !1 });
  B && (e = JSON.parse(B).i18n), Te(() => {
    var ae, Z;
    if (!b)
      return;
    const $ = p4({
      preview: !0,
      config: {
        blogUrl: b.url,
        signupForm: {
          url: (ae = v == null ? void 0 : v.signupForm) == null ? void 0 : ae.url,
          version: (Z = v == null ? void 0 : v.signupForm) == null ? void 0 : Z.version
        }
      },
      settings: {
        accentColor: y || "#d74780",
        title: S || "",
        locale: O || "en",
        icon: K || "",
        description: T || ""
      },
      labels: a.map(({ label: N }) => ({ name: N })),
      backgroundColor: n || "#08090c",
      layout: l,
      i18nEnabled: e
    });
    u($);
  }, [b, y, a, v, S, n, l, O, e, K, T]);
  const ee = async () => {
    try {
      await navigator.clipboard.writeText(f), h(!0), setTimeout(() => h(!1), 2e3);
    } catch ($) {
      console.error("Failed to copy text: ", $);
    }
  }, oe = ($) => {
    t($);
  }, re = ($) => {
    if ($ != null && $.length) {
      const ae = $ == null ? void 0 : $.map(({ value: Z }) => ({ label: Z, value: Z }));
      s(ae);
    } else
      s([]);
  };
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        m("embed-signup-form");
      },
      cancelLabel: "",
      footer: !1,
      height: 645,
      padding: !1,
      testId: "embed-signup-form",
      title: "",
      topRightContent: "close",
      width: 1120,
      children: /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-[5.2fr_2.8fr]", children: [
        /* @__PURE__ */ o.jsx(
          t4,
          {
            html: f,
            style: l
          }
        ),
        /* @__PURE__ */ o.jsx(
          n4,
          {
            accentColor: y,
            customColor: _,
            embedScript: f,
            handleColorToggle: oe,
            handleCopyClick: ee,
            handleLabelClick: re,
            handleLayoutSelect: A,
            isCopied: d,
            selectedColor: n,
            selectedLabels: a,
            selectedLayout: l,
            setCustomColor: F
          }
        )
      ] })
    }
  );
}), g4 = xe.create(() => {
  const { updateRoute: e } = nt(), n = xe.useModal(), { settings: t } = ct(), { mutateAsync: a } = ua(), s = dt(), [l, A] = ue(""), [f, u] = ue(!1), [d] = yt(t, ["firstpromoter"]), [h] = yt(t, ["firstpromoter_id"]);
  Te(() => {
    u(d || !1), A(h || null);
  }, [d, h]);
  const m = async () => {
    await a([
      {
        key: "firstpromoter",
        value: f
      },
      {
        key: "firstpromoter_id",
        value: l
      }
    ]);
  };
  return /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        e("integrations");
      },
      dirty: f !== d || l !== h,
      okColor: "black",
      okLabel: "Save & close",
      testId: "firstpromoter-modal",
      title: "",
      onOk: async () => {
        try {
          await m(), e("integrations"), n.remove();
        } catch (v) {
          s(v);
        }
      },
      children: [
        /* @__PURE__ */ o.jsx(
          Us,
          {
            detail: "Launch your own member referral program",
            icon: /* @__PURE__ */ o.jsx(Ok, { className: "-mt-2 h-14 w-14" }),
            title: "FirstPromoter"
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsxs(bt, { marginBottom: !1, title: "FirstPromoter configuration", grouped: !0, children: [
          /* @__PURE__ */ o.jsx(
            ft,
            {
              checked: f,
              direction: "rtl",
              hint: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                "Enable ",
                /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://firstpromoter.com/?fpr=ghost&fp_sid=admin", rel: "noopener noreferrer", target: "_blank", children: "FirstPromoter" }),
                " for tracking referrals"
              ] }),
              label: "Enable FirstPromoter",
              onChange: (v) => {
                u(v.target.checked);
              }
            }
          ),
          f && /* @__PURE__ */ o.jsx(
            je,
            {
              hint: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                "Affiliate and referral tracking, find your ID  ",
                /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://ghost.org/help/firstpromoter-id/", rel: "noopener noreferrer", target: "_blank", children: "here" })
              ] }),
              placeholder: "XXXXXXXX",
              title: "FirstPromoter account ID",
              value: l || "",
              onChange: (v) => {
                A(v.target.value);
              }
            }
          )
        ] }) })
      ]
    }
  );
}), v4 = "ActionsResponseType", w4 = Qk({
  dataType: v4,
  path: "/actions/",
  returnData: (e) => {
    const { pages: n } = e;
    let t = n.flatMap((l) => l.actions.map(
      ({ context: A, ...f }) => ({ ...f, context: JSON.parse(A) })
    ));
    t = t.reverse();
    let a = 1;
    t.forEach((l, A) => {
      const f = t[A + 1];
      f && l.resource_id === f.resource_id && l.event === f.event ? (l.skip = !0, a += 1) : a > 1 && (l.count = a, a = 1);
    });
    const s = n[n.length - 1].meta;
    return {
      actions: t.reverse(),
      meta: s,
      isEnd: s ? s.pagination.pages === s.pagination.page : !0
    };
  }
}), x4 = (e) => {
  var n, t;
  let a = e.resource_type;
  if (e.event !== "deleted")
    switch (e.resource_type) {
      case "page":
      case "post":
        return !e.resource || !e.resource.id ? void 0 : (a === "post" && (n = e.context) != null && n.type && (a = (t = e.context) == null ? void 0 : t.type), {
          isExternal: !0,
          route: `editor/${a}/${e.resource.id}`,
          models: [a, e.resource.id]
        });
      case "integration":
        return !e.resource || !e.resource.id ? void 0 : { route: `integrations/${e.resource.id}` };
      case "offer":
        return !e.resource || !e.resource.id ? void 0 : {
          isExternal: !0,
          route: `offers/${e.resource.id}`,
          models: [e.resource.id]
        };
      case "tag":
        return !e.resource || !e.resource.slug ? void 0 : {
          isExternal: !0,
          route: "tag",
          models: [e.resource.slug]
        };
      case "product":
        return { route: "tiers" };
      case "user":
        return !e.resource || !e.resource.slug ? void 0 : { route: `staff/${e.resource.slug}` };
    }
}, k4 = (e) => {
  var n, t, a, s, l, A, f;
  let u = e.resource_type;
  u === "api_key" ? u = "API key" : u === "setting" ? u = "settings" : u === "product" && (u = "tier"), u === "post" && (n = e.context) != null && n.type && (u = (t = e.context) == null ? void 0 : t.type);
  let d = e.event;
  return e.event === "edited" && (a = e.context) != null && a.action_name && (d = (s = e.context) == null ? void 0 : s.action_name), (l = e.context) != null && l.count && ((A = e.context) == null ? void 0 : A.count) > 1 ? `${(f = e.context) == null ? void 0 : f.count} ${u}s ${d}` : `${u.slice(0, 1).toUpperCase()}${u.slice(1)} ${d}`;
}, b4 = (e) => {
  var n, t, a, s;
  if (e.resource_type === "setting" && (n = e.context) != null && n.group && (t = e.context) != null && t.key)
    return {
      group: (a = e.context) == null ? void 0 : a.group,
      key: (s = e.context) == null ? void 0 : s.key
    };
}, op = (e) => {
  var n, t;
  return typeof ((n = e.context) == null ? void 0 : n.count) == "number" && ((t = e.context) == null ? void 0 : t.count) > 1;
}, y4 = ({ action: e }) => {
  let n = "pen";
  switch (e.event) {
    case "added":
      n = "add";
      break;
    case "deleted":
      n = "trash";
      break;
  }
  return /* @__PURE__ */ o.jsx(Qt, { name: n, size: "xs" });
}, E4 = ({ action: e }) => {
  var n, t, a, s, l;
  return /* @__PURE__ */ o.jsxs("div", { className: "relative shrink-0", children: [
    /* @__PURE__ */ o.jsx(
      Hk,
      {
        bgColor: Bk(((n = e.actor) == null ? void 0 : n.name) || ((t = e.actor) == null ? void 0 : t.slug) || ""),
        image: ((a = e.actor) == null ? void 0 : a.image) ?? void 0,
        label: Uk(((s = e.actor) == null ? void 0 : s.name) || ((l = e.actor) == null ? void 0 : l.slug)),
        labelColor: "white",
        size: "md"
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "absolute -bottom-1 -right-1 flex items-center justify-center rounded-full border border-grey-100 bg-white p-1 shadow-sm dark:border-grey-900 dark:bg-black", children: /* @__PURE__ */ o.jsx(y4, { action: e }) })
  ] });
}, ia = ({ label: e, item: n, excludedItems: t, toggleItem: a }) => /* @__PURE__ */ o.jsx(
  ft,
  {
    checked: !t.includes(n),
    direction: "rtl",
    label: e,
    labelClasses: "text-sm",
    onChange: (s) => a(n, s.target.checked)
  }
), M4 = ({ excludedEvents: e, excludedResources: n, toggleEventType: t, toggleResourceType: a }) => {
  const { updateRoute: s } = nt(), l = Ip({ path: "/users/", filterKey: "name", responseKey: "users" }), A = async (h, m) => {
    const v = await l.loadData(h);
    m(v.map((k) => ({ label: k.name, value: k.id })));
  }, [f, u] = ue(), d = () => {
    u(null);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ o.jsx(pp, { position: "right", trigger: /* @__PURE__ */ o.jsx(Ye, { color: "outline", label: "Filter", size: "sm" }), children: /* @__PURE__ */ o.jsxs("div", { className: "flex w-[220px] flex-col gap-8 p-5", children: [
      /* @__PURE__ */ o.jsxs(Pi, { children: [
        /* @__PURE__ */ o.jsx(ia, { excludedItems: e, item: "added", label: "Added", toggleItem: t }),
        /* @__PURE__ */ o.jsx(ia, { excludedItems: e, item: "edited", label: "Edited", toggleItem: t }),
        /* @__PURE__ */ o.jsx(ia, { excludedItems: e, item: "deleted", label: "Deleted", toggleItem: t })
      ] }),
      /* @__PURE__ */ o.jsxs(Pi, { children: [
        /* @__PURE__ */ o.jsx(ia, { excludedItems: n, item: "post", label: "Posts", toggleItem: a }),
        /* @__PURE__ */ o.jsx(ia, { excludedItems: n, item: "page", label: "Pages", toggleItem: a }),
        /* @__PURE__ */ o.jsx(ia, { excludedItems: n, item: "tag", label: "Tags", toggleItem: a }),
        /* @__PURE__ */ o.jsx(ia, { excludedItems: n, item: "offer,product", label: "Tiers & offers", toggleItem: a }),
        /* @__PURE__ */ o.jsx(ia, { excludedItems: n, item: "api_key,integration,setting,user,webhook", label: "Settings & staff", toggleItem: a })
      ] })
    ] }) }),
    /* @__PURE__ */ o.jsx("div", { className: "w-[200px]", children: /* @__PURE__ */ o.jsx(
      En,
      {
        loadOptions: qi(A, 500),
        placeholder: "Search staff",
        value: f,
        async: !0,
        defaultOptions: !0,
        isClearable: !0,
        onSelect: (h) => {
          h ? (u(h), s(`history/view/${h.value}`)) : (d(), s("history/view"));
        }
      }
    ) })
  ] });
}, S4 = ({ action: e }) => {
  var a, s, l, A, f, u, d, h;
  const { updateRoute: n } = nt(), t = b4(e);
  if (t) {
    const { group: m, key: v } = t;
    return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      m.slice(0, 1).toUpperCase(),
      m.slice(1),
      m !== v && /* @__PURE__ */ o.jsxs("span", { className: "text-xs", children: [
        " ",
        /* @__PURE__ */ o.jsxs("code", { className: "mb-1 bg-white text-grey-800 dark:bg-grey-900 dark:text-white", children: [
          "(",
          v,
          ")"
        ] })
      ] })
    ] });
  } else if ((a = e.resource) != null && a.title || (s = e.resource) != null && s.name || (l = e.context) != null && l.primary_name) {
    const m = x4(e);
    return m ? /* @__PURE__ */ o.jsx("a", { className: "cursor-pointer font-bold", onClick: (v) => {
      v.preventDefault(), n(m);
    }, children: ((A = e.resource) == null ? void 0 : A.title) || ((f = e.resource) == null ? void 0 : f.name) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: ((u = e.resource) == null ? void 0 : u.title) || ((d = e.resource) == null ? void 0 : d.name) || ((h = e.context) == null ? void 0 : h.primary_name) });
  } else
    return /* @__PURE__ */ o.jsx("span", { className: "text-grey-500", children: "(unknown)" });
}, I4 = (e) => {
  const t = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).formatToParts(e).reduce((a, { type: s, value: l }) => ({ ...a, [s]: l }), {});
  return `${t.year}-${t.month}-${t.day} ${t.hour}:${t.minute}:${t.second}`;
}, J4 = 200, T4 = xe.create(({ params: e }) => {
  const n = Sn(), { updateRoute: t } = nt(), [a, s] = ue([]), [l, A] = ue(["label"]), { data: f, fetchNextPage: u } = w4({
    searchParams: {
      include: "actor,resource",
      limit: J4.toString(),
      filter: [
        a.length && `event:-[${a.join(",")}]`,
        l.length && `resource_type:-[${l.join(",")}]`,
        (e == null ? void 0 : e.user) && `actor_id:'${e.user}'`
      ].filter(Boolean).join("+")
    },
    getNextPageParams: (m, v) => ({
      ...v,
      filter: [v.filter, m.actions.length && `created_at:<'${I4(new Date(m.actions[m.actions.length - 1].created_at))}'`].join("+")
    }),
    keepPreviousData: !0
  }), d = sn(() => {
    f != null && f.isEnd || u();
  }, [f == null ? void 0 : f.isEnd, u]), h = (m, v, k) => {
    m((b) => k ? b.concat(v) : b.filter((y) => y !== v));
  };
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        t("history");
      },
      cancelLabel: "",
      okLabel: "Close",
      scrolling: !0,
      size: "md",
      stickyFooter: !0,
      stickyHeader: !0,
      testId: "history-modal",
      title: "History",
      topRightContent: /* @__PURE__ */ o.jsx(
        M4,
        {
          excludedEvents: a,
          excludedResources: l,
          toggleEventType: (m, v) => h(s, m, !v),
          toggleResourceType: (m, v) => h(A, m, !v),
          userId: e == null ? void 0 : e.user
        }
      ),
      onOk: () => {
        n.remove(), t("history");
      },
      children: /* @__PURE__ */ o.jsx("div", { className: "relative -mb-8 mt-6", children: /* @__PURE__ */ o.jsx(Br, { hint: f != null && f.isEnd ? "End of history log" : void 0, children: f != null && f.actions ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(Kb, { offset: 250, onTrigger: d }),
        f == null ? void 0 : f.actions.map((m) => {
          var v, k;
          return !m.skip && /* @__PURE__ */ o.jsx(
            fa,
            {
              avatar: /* @__PURE__ */ o.jsx(E4, { action: m }),
              detail: [
                new Date(m.created_at).toLocaleDateString("default", { year: "numeric", month: "short", day: "2-digit" }),
                new Date(m.created_at).toLocaleTimeString("default", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
              ].join(" | "),
              title: /* @__PURE__ */ o.jsxs("div", { className: "text-sm", children: [
                k4(m),
                op(m) ? "" : ": ",
                !op(m) && /* @__PURE__ */ o.jsx(S4, { action: m }),
                m.count ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                  " ",
                  m.count,
                  " times"
                ] }) : null,
                /* @__PURE__ */ o.jsxs("span", { children: [
                  " — by ",
                  ((v = m.actor) == null ? void 0 : v.name) || ((k = m.actor) == null ? void 0 : k.slug)
                ] })
              ] }),
              separator: !0
            }
          );
        })
      ] }) : /* @__PURE__ */ o.jsx(Nk, { children: "No entries found." }) }) })
    }
  );
}), C4 = xe.create(() => {
  var oe, re;
  const e = xe.useModal(), n = yu(), t = yu({
    searchParams: { limit: "all", permissions: "assign" }
  }), a = Bs(), { updateRoute: s } = nt(), l = Ct(null), [A, f] = ue(""), [u, d] = ue(""), [h, m] = ue("contributor"), [v, k] = ue({}), { data: { users: b } = {} } = Lk(), { data: { invites: y } = {} } = Pk(), { mutateAsync: S } = zk(), T = dt();
  if (Te(() => {
    l.current && l.current.focus();
  }, []), Te(() => {
    u === "saved" && setTimeout(() => {
      d("");
    }, 2e3);
  }, [u]), Te(() => {
    h !== "contributor" && (a != null && a.isLimited("staff")) ? a.errorIfWouldGoOverLimit("staff").then(() => {
      k(($) => ({ ...$, role: void 0 }));
    }).catch(($) => {
      if ($ instanceof Ua) {
        k((ae) => ({ ...ae, role: $.message }));
        return;
      } else
        throw $;
    }) : k(($) => ({ ...$, role: void 0 }));
  }, [a, h]), !((oe = n.data) != null && oe.roles) || !((re = t.data) != null && re.roles))
    return null;
  const O = n.data.roles, B = t.data.roles;
  let K = "Send invitation";
  u === "saving" ? K = "Sending..." : u === "saved" ? K = "Invite sent!" : u === "error" && (K = "Retry");
  const _ = async () => {
    var $, ae;
    if (u !== "saving") {
      if (!Nr.isEmail(A)) {
        k({
          email: "Please enter a valid email address."
        });
        return;
      }
      if (b != null && b.some(({ email: Z }) => Z === A)) {
        k({
          email: "A user with that email address already exists."
        });
        return;
      }
      if (y != null && y.some(({ email: Z }) => Z === A)) {
        k({
          email: "A user with that email address was already invited."
        });
        return;
      }
      if (!v.role) {
        d("saving");
        try {
          await S({
            email: A,
            roleId: O.find(({ name: Z }) => Z.toLowerCase() === h.toLowerCase()).id
          }), d("saved"), St({
            title: "Invitation sent",
            message: `${A}`,
            type: "success"
          }), e.remove(), s("staff?tab=invited");
        } catch (Z) {
          d("error");
          let N = "Failed to send invitation", Y = /* @__PURE__ */ o.jsxs("span", { children: [
            "If the problem persists, ",
            /* @__PURE__ */ o.jsxs("a", { href: "https://ghost.org/contact", children: [
              /* @__PURE__ */ o.jsx("u", { children: "contact support" }),
              "."
            ] }),
            "."
          ] });
          if (Z instanceof Yk) {
            let W = Z.data;
            ((ae = ($ = W == null ? void 0 : W.errors) == null ? void 0 : $[0]) == null ? void 0 : ae.type) === "EmailError" && (Y = /* @__PURE__ */ o.jsx("span", { children: "Check your Mailgun configuration." }));
          }
          St({
            title: N,
            message: Y,
            type: "error"
          }), T(Z, { withToast: !1 });
          return;
        }
      }
    }
  }, ee = [
    {
      hint: "Can create and edit their own posts, but cannot publish. An Editor needs to approve and publish for them.",
      label: "Contributor",
      value: "contributor"
    },
    {
      hint: "A trusted user who can create, edit and publish their own posts, but can’t modify others.",
      label: "Author",
      value: "author"
    },
    {
      hint: "Can invite and manage other Authors and Contributors, as well as edit and publish any posts on the site.",
      label: "Editor",
      value: "editor"
    },
    {
      hint: "Trusted staff user who should be able to manage all content and users, as well as site settings and options.",
      label: "Administrator",
      value: "administrator"
    }
  ].filter(($) => B.some((ae) => ae.name === $.label));
  return v.email && (K = "Retry"), /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        s("staff");
      },
      cancelLabel: "",
      okColor: u === "error" || v.email ? "red" : "black",
      okLabel: K,
      testId: "invite-user-modal",
      title: "Invite a new staff user",
      width: 540,
      onOk: _,
      children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-6 py-4", children: [
        /* @__PURE__ */ o.jsx("p", { children: "Send an invitation for a new person to create a staff account on your site, and select a role that matches what you’d like them to be able to do." }),
        /* @__PURE__ */ o.jsx(
          je,
          {
            error: !!v.email,
            hint: v.email,
            inputRef: l,
            placeholder: "jamie@example.com",
            title: "Email address",
            value: A,
            onChange: ($) => {
              f($.target.value);
            },
            onKeyDown: () => k(($) => ({ ...$, email: void 0 }))
          }
        ),
        /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx(
          qu,
          {
            error: !!v.role,
            hint: v.role,
            id: "role",
            options: ee,
            selectedOption: h,
            separator: !0,
            title: "Role",
            onSelect: ($) => {
              m($);
            }
          }
        ) })
      ] })
    }
  );
}), lp = ({ baseUrl: e, item: n, updateItem: t, clearError: a, labelPlaceholder: s, unstyled: l, textFieldClasses: A, action: f, className: u, ...d }) => /* @__PURE__ */ o.jsxs("div", { className: qe("flex w-full items-start gap-3", u), "data-testid": "navigation-item-editor", ...d, children: [
  /* @__PURE__ */ o.jsx("div", { className: "flex flex-1 pt-1", children: /* @__PURE__ */ o.jsx(
    je,
    {
      className: A,
      containerClassName: "grow",
      error: !!n.errors.label,
      hint: n.errors.label,
      placeholder: s,
      title: "Label",
      unstyled: l,
      value: n.label,
      hideTitle: !0,
      onChange: (h) => t == null ? void 0 : t({ label: h.target.value }),
      onKeyDown: () => a == null ? void 0 : a("label")
    }
  ) }),
  /* @__PURE__ */ o.jsx("div", { className: "flex flex-1 pt-1", children: /* @__PURE__ */ o.jsx(
    Jp,
    {
      baseUrl: e,
      className: A,
      containerClassName: "grow",
      error: !!n.errors.url,
      hint: n.errors.url,
      title: "URL",
      unstyled: l,
      value: n.url,
      hideTitle: !0,
      onChange: (h) => t == null ? void 0 : t({ url: h || "" }),
      onKeyDown: () => a == null ? void 0 : a("url")
    }
  ) }),
  f
] }), Ap = ({ baseUrl: e, navigation: n }) => /* @__PURE__ */ o.jsxs("div", { className: "w-full pt-2", children: [
  /* @__PURE__ */ o.jsx(
    Tp,
    {
      items: n.items,
      itemSeparator: !1,
      renderItem: (t) => /* @__PURE__ */ o.jsx(
        lp,
        {
          action: /* @__PURE__ */ o.jsx(Ye, { className: "mt-1 self-center", icon: "trash", iconColorClass: "dark:text-white", size: "sm", onClick: () => n.removeItem(t.id) }),
          baseUrl: e,
          clearError: (a) => n.clearError(t.id, a),
          item: t,
          updateItem: (a) => n.updateItem(t.id, a)
        }
      ),
      onMove: n.moveItem
    }
  ),
  /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-grey-300 dark:text-grey-900 mt-1", name: "add", size: "sm" }),
    /* @__PURE__ */ o.jsx(
      lp,
      {
        action: /* @__PURE__ */ o.jsx(Ye, { className: "mx-2 mt-1 self-center rounded bg-green p-1", "data-testid": "add-button", icon: "add", iconColorClass: "text-white", size: "sm", unstyled: !0, onClick: n.addItem }),
        baseUrl: e,
        className: "mt-1",
        clearError: (t) => n.clearError(n.newItem.id, t),
        "data-testid": "new-navigation-item",
        item: n.newItem,
        labelPlaceholder: "New item label",
        updateItem: n.setNewItem
      }
    )
  ] })
] }), cp = ({ items: e, setItems: n }) => {
  const t = (v) => !!(v.label && !v.label.match(/^\s*$/) || v.url !== "/"), a = Fp({
    items: e.map((v) => ({ ...v, errors: {} })),
    setItems: (v) => n(v.map(({ url: k, label: b }) => ({ url: k, label: b }))),
    blank: { label: "", url: "/", errors: {} },
    canAddNewItem: t
  }), s = new RegExp(/^(\/|#|[a-zA-Z0-9-]+:)/), l = (v) => {
    const k = {};
    return (!v.label || v.label.match(/^\s*$/)) && (k.label = "You must specify a label"), (!v.url || v.url.match(/\s/) || !Nr.isURL(v.url, { require_protocol: !0 }) && !v.url.match(s)) && (k.url = "You must specify a valid URL or relative path"), k;
  }, A = (v, k) => {
    const b = a.items.find((y) => y.id === v);
    a.updateItem(v, { ...b.item, ...k });
  }, f = () => {
    const v = l(a.newItem);
    Object.values(v).some((k) => k) ? a.setNewItem({ ...a.newItem, errors: v }) : a.addItem();
  }, u = (v) => {
    a.removeItem(v);
  }, d = (v, k) => {
    a.moveItem(v, k);
  }, h = "new", m = (v, k) => {
    if (v === h)
      a.setNewItem({ ...a.newItem, errors: { ...a.newItem.errors, [k]: void 0 } });
    else {
      const b = a.items.find((y) => y.id === v).item;
      a.updateItem(v, { ...b, errors: { ...b.errors, [k]: void 0 } });
    }
  };
  return {
    items: a.items.map(({ item: v, id: k }) => ({ ...v, id: k })),
    updateItem: A,
    addItem: f,
    removeItem: u,
    moveItem: d,
    newItem: { ...a.newItem, id: h },
    setNewItem: (v) => a.setNewItem({ ...a.newItem, ...v }),
    clearError: m,
    validate: () => {
      let v = !0;
      if (a.items.forEach(({ item: k, id: b }) => {
        let y = l(k);
        Object.values(y).some((S) => S) && (v = !1, a.updateItem(b, { ...k, errors: y }));
      }), t(a.newItem)) {
        const k = l(a.newItem);
        Object.values(k).some((b) => b) && (v = !1, a.setNewItem({ ...a.newItem, errors: k }));
      }
      return v;
    }
  };
}, D4 = xe.create(() => {
  const e = Sn(), { updateRoute: n } = nt(), {
    localSettings: t,
    updateSetting: a,
    saveState: s,
    handleSave: l,
    siteData: A
  } = Ba(), [f, u] = yt(
    t,
    ["navigation", "secondary_navigation"]
  ).map((k) => JSON.parse(k || "[]")), d = cp({
    items: f,
    setItems: (k) => {
      a("navigation", JSON.stringify(k));
    }
  }), h = cp({
    items: u,
    setItems: (k) => a("secondary_navigation", JSON.stringify(k))
  }), [m, v] = ue("primary-nav");
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        n("navigation");
      },
      buttonsDisabled: s === "saving",
      dirty: t.some((k) => k.dirty),
      okLabel: s === "saving" ? "Saving..." : "OK",
      scrolling: !0,
      size: "lg",
      stickyFooter: !0,
      testId: "navigation-modal",
      title: "Navigation",
      onOk: async () => {
        d.validate() && h.validate() && (await l(), e.remove(), n("navigation"));
      },
      children: /* @__PURE__ */ o.jsx("div", { className: "mb-1 mt-6", children: /* @__PURE__ */ o.jsx(
        Oa,
        {
          selectedTab: m,
          tabs: [
            {
              id: "primary-nav",
              title: "Primary",
              contents: /* @__PURE__ */ o.jsx(Ap, { baseUrl: A.url, navigation: d })
            },
            {
              id: "secondary-nav",
              title: "Secondary",
              contents: /* @__PURE__ */ o.jsx(Ap, { baseUrl: A.url, navigation: h })
            }
          ],
          onTabChange: v
        }
      ) })
    }
  );
  senderName: e,
  senderEmail: n,
  senderReplyTo: t,
  headerImage: a,
  headerIcon: s,
  headerTitle: l,
  headerSubtitle: A,
  showPostTitleSection: f,
  showExcerpt: u,
  titleAlignment: d,
  titleFontCategory: h,
  bodyFontCategory: m,
  authorPlaceholder: v,
  showCommentCta: k,
  showFeatureImage: b,
  showFeedback: y,
  showLatestPosts: S,
  showSubscriptionDetails: T,
  siteTitle: O,
  footerContent: B,
  showBadge: K,
  backgroundColor: _,
  borderColor: F,
  secondaryBorderColor: ee,
  accentColor: oe,
  textColor: re,
  secondaryTextColor: $,
  titleColor: ae
}) => {
  const Z = s || l;
  ct();
  const N = wr("newEmailAddresses"), Y = wr("newsletterExcerpt"), W = (/* @__PURE__ */ new Date()).toLocaleDateString("default", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }), H = (/* @__PURE__ */ new Date()).getFullYear(), G = _ && jr(_).hex().toLowerCase() === "#ffffff";
  let pe;
  pe = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("p", { className: "leading-normal", children: [
      /* @__PURE__ */ o.jsx("span", { className: "font-semibold text-grey-900", children: "From: " }),
      /* @__PURE__ */ o.jsxs("span", { children: [
        e,
        " (",
        n,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("p", { className: "leading-normal", children: [
      /* @__PURE__ */ o.jsx("span", { className: "font-semibold text-grey-900", children: "Reply-to: " }),
      t || n
    ] })
  ] });
  let ke = "mb-5 text-pretty leading-[1.7] text-black";
  return h === "serif" && m === "serif" ? ke = qe(ke, "font-serif text-[1.8rem]") : h !== "serif" && m === "serif" ? ke = qe(ke, "text-[1.7rem] tracking-tight") : h === "serif" && m !== "serif" ? ke = qe(ke, "font-serif text-[1.8rem]") : ke = qe(ke, "text-[1.7rem] tracking-tight"), /* @__PURE__ */ o.jsx("div", { className: "relative flex grow flex-col", children: /* @__PURE__ */ o.jsx("div", { className: "absolute inset-0 m-5 flex items-center justify-center", children: /* @__PURE__ */ o.jsxs("div", { className: "mx-auto my-0 flex max-h-full w-full max-w-[700px] flex-col overflow-hidden rounded-[4px] text-black shadow-sm", children: [
    /* @__PURE__ */ o.jsx("div", { className: "flex-column flex min-h-[77px] justify-center rounded-t-sm border-b border-grey-200 bg-white px-6 text-sm text-grey-700", children: pe }),
    /* @__PURE__ */ o.jsx("div", { className: "overflow-y-auto p-4 text-sm", style: { backgroundColor: _ }, children: /* @__PURE__ */ o.jsxs("div", { className: "border border-transparent px-16", style: { borderColor: F }, children: [
      a && /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx("img", { alt: "", className: "mb-4 mt-6 block", src: a }) }),
      Z && /* @__PURE__ */ o.jsxs("div", { className: "py-3", style: { borderColor: ee }, children: [
        s && /* @__PURE__ */ o.jsx("img", { alt: "", className: "mx-auto mb-2 h-10 w-10", role: "presentation", src: s }),
        l && /* @__PURE__ */ o.jsx("h4", { className: "mb-1 text-center text-[1.6rem] font-bold uppercase leading-tight tracking-tight text-grey-900", style: { color: re }, children: l }),
        A && /* @__PURE__ */ o.jsx("h5", { className: "mb-1 text-center text-[1.3rem] font-normal text-grey-700", style: { color: $ }, children: A })
      ] }),
      f && /* @__PURE__ */ o.jsxs("div", { className: qe("flex flex-col py-8", d === "center" ? "items-center" : "items-start"), children: [
        /* @__PURE__ */ o.jsx("h2", { className: qe(
          "pb-4 text-4xl font-bold leading-supertight text-black",
          h === "serif" && "font-serif",
          d === "center" ? "text-center" : "text-left"
        ), style: { color: ae }, children: "Your email newsletter" }),
        Y && u && /* @__PURE__ */ o.jsx("p", { className: ke, children: "A subtitle to highlight key points and engage your readers" }),
        /* @__PURE__ */ o.jsxs("div", { className: qe(
          "flex w-full justify-between text-center text-md leading-none text-grey-700",
          d === "center" ? "flex-col gap-1" : "flex-row"
        ), children: [
          /* @__PURE__ */ o.jsxs("p", { className: "pb-1 text-[1.3rem]", style: { color: $ }, children: [
            "By ",
            v,
            /* @__PURE__ */ o.jsx("span", { className: "before:pl-0.5 before:pr-1 before:content-['•']", children: W })
          ] }),
          /* @__PURE__ */ o.jsx("p", { className: "pb-1 text-[1.3rem] underline", style: { color: $ }, children: /* @__PURE__ */ o.jsx("span", { children: "View in browser" }) })
        ] })
      ] }),
      b && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("div", { className: qe(
          "h-[300px] w-full max-w-[600px] bg-cover bg-no-repeat",
          f ? "" : "pt-6"
        ), children: /* @__PURE__ */ o.jsx("img", { alt: "Feature", className: "min-h-full min-w-full shrink-0", src: R4 }) }),
        /* @__PURE__ */ o.jsx("div", { className: "mt-1 w-full max-w-[600px] pb-8 text-center text-[1.3rem] text-grey-700", style: { color: $ }, children: "Feature image caption" })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: qe(
        "max-w-[600px] border-b border-grey-200 pb-5 leading-[1.7] text-black",
        m === "serif" ? "font-serif text-[1.8rem]" : "text-[1.7rem] tracking-tight",
        b || f ? "" : "pt-8"
      ), style: { borderColor: ee }, children: [
        /* @__PURE__ */ o.jsx("p", { className: "mb-5", style: { color: re }, children: "This is what your content will look like when you send one of your posts as an email newsletter to your subscribers." }),
        /* @__PURE__ */ o.jsx("p", { className: "mb-5", style: { color: re }, children: "Over there on the right you'll see some settings that allow you to customize the look and feel of this template to make it perfectly suited to your brand. Email templates are exceptionally finnicky to make, but we've spent a long time optimising this one to make it work beautifully across devices, email clients and content types." }),
        /* @__PURE__ */ o.jsx("p", { className: "mb-5", style: { color: re }, children: "So, you can trust that every email you send with Ghost will look great and work well. Just like the rest of your site." })
      ] }),
      (y || k) && /* @__PURE__ */ o.jsx("div", { className: "grid gap-5 border-b border-grey-200 px-6 py-5", style: { borderColor: ee }, children: /* @__PURE__ */ o.jsxs("div", { className: "flex justify-center gap-3", children: [
        y && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("button", { className: "pointer-events-none cursor-default whitespace-nowrap rounded-[2.2rem] bg-transparent font-semibold", type: "button", children: /* @__PURE__ */ o.jsxs("span", { className: "inline-flex items-center gap-2 px-[18px] py-[7px]", style: { color: re }, children: [
            /* @__PURE__ */ o.jsx(Qt, { colorClass: "", name: "thumbs-up", size: "md" }),
            /* @__PURE__ */ o.jsx("span", { children: "More like this" })
          ] }) }),
          /* @__PURE__ */ o.jsx("button", { className: "pointer-events-none cursor-default whitespace-nowrap rounded-[2.2rem] bg-transparent font-semibold", type: "button", children: /* @__PURE__ */ o.jsxs("span", { className: "inline-flex items-center gap-2 px-[18px] py-[7px]", style: { color: re }, children: [
            /* @__PURE__ */ o.jsx(Qt, { colorClass: "", name: "thumbs-down" }),
            /* @__PURE__ */ o.jsx("span", { children: "Less like this" })
          ] }) })
        ] }),
        k && /* @__PURE__ */ o.jsx("button", { className: "pointer-events-none cursor-default whitespace-nowrap rounded-[2.2rem] bg-transparent font-semibold", type: "button", children: /* @__PURE__ */ o.jsxs("span", { className: "inline-flex items-center gap-2 px-[18px] py-[7px]", style: { color: re }, children: [
          /* @__PURE__ */ o.jsx(Qt, { colorClass: "", name: "comment" }),
          /* @__PURE__ */ o.jsx("span", { children: "Comment" })
        ] }) })
      ] }) }),
      S && /* @__PURE__ */ o.jsxs("div", { className: "border-b border-grey-200 py-6", style: { borderColor: ee }, children: [
        /* @__PURE__ */ o.jsx("h3", { className: "mb-4 mt-2 pb-1 text-[1.2rem] font-semibold uppercase tracking-wide", style: { color: ae }, children: "Keep reading" }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between gap-4 py-2", children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("h4", { className: "mb-1 mt-0.5 text-[1.9rem]", style: { color: re }, children: "The three latest posts published on your site" }),
            /* @__PURE__ */ o.jsx("p", { className: "m-0 text-base text-grey-700", style: { color: $ }, children: "Posts sent as an email only will never be shown here." })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "aspect-square h-auto w-full max-w-[100px] bg-grey-200 bg-cover bg-no-repeat", children: /* @__PURE__ */ o.jsx("img", { alt: "Latest post", src: j4 }) })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between gap-4 py-2", children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("h4", { className: "mb-1 mt-0.5 text-[1.9rem]", style: { color: re }, children: "Displayed at the bottom of each newsletter" }),
            /* @__PURE__ */ o.jsx("p", { className: "m-0 text-base text-grey-700", style: { color: $ }, children: "Giving your readers one more place to discover your stories." })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "aspect-square h-auto w-full max-w-[100px] bg-grey-200 bg-cover bg-no-repeat", children: /* @__PURE__ */ o.jsx("img", { alt: "Latest post", src: O4 }) })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between gap-4 py-2", children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("h4", { className: "mb-1 mt-0.5 text-[1.9rem]", style: { color: re }, children: "To keep your work front and center" }),
            /* @__PURE__ */ o.jsx("p", { className: "m-0 text-base text-grey-700", style: { color: $ }, children: "Making sure that your audience stays engaged." })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "aspect-square h-auto w-full max-w-[100px] bg-grey-200 bg-cover bg-no-repeat", children: /* @__PURE__ */ o.jsx("img", { alt: "Latest post", src: Q4 }) })
        ] })
      ] }),
      T && /* @__PURE__ */ o.jsxs("div", { className: "border-b border-grey-200 py-8", style: { borderColor: ee }, children: [
        /* @__PURE__ */ o.jsx("h4", { className: "mb-3 text-[1.2rem] uppercase tracking-wide", style: { color: ae }, children: "Subscription details" }),
        /* @__PURE__ */ o.jsxs("p", { className: "m-0 mb-4 text-base", style: { color: re }, children: [
          "You are receiving this because you are a paid subscriber to ",
          O,
          ". Your subscription will renew on 17 Jul 2024."
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "shrink-0 text-base", children: [
            /* @__PURE__ */ o.jsx("p", { style: { color: re }, children: "Name: Jamie Larson" }),
            /* @__PURE__ */ o.jsx("p", { style: { color: re }, children: "Email: jamie@example.com" }),
            /* @__PURE__ */ o.jsx("p", { style: { color: re }, children: "Member since: 17 July 2023" })
          ] }),
          /* @__PURE__ */ o.jsx("span", { className: qe("w-full self-end whitespace-nowrap text-right text-base font-semibold", G && "text-white underline"), style: { color: oe }, children: "Manage subscription →" })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col items-center pt-10", children: [
        /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: B || "" }, className: "text break-words px-8 py-3 text-center text-[1.3rem] leading-base text-grey-700", style: { color: $ } }),
        /* @__PURE__ */ o.jsxs("div", { className: "px-8 pb-14 pt-3 text-center text-[1.3rem] text-grey-700", children: [
          /* @__PURE__ */ o.jsxs("span", { style: { color: $ }, children: [
            O,
            " © ",
            H,
            " — "
          ] }),
          /* @__PURE__ */ o.jsx("span", { className: "pointer-events-none cursor-auto underline", style: { color: $ }, children: "Unsubscribe" })
        ] }),
        K && /* @__PURE__ */ o.jsx("div", { className: "flex flex-col items-center pb-[40px] pt-[10px]", children: /* @__PURE__ */ o.jsxs("a", { className: "pointer-events-none inline-flex cursor-auto items-center px-2 py-1 text-[1.25rem] font-semibold tracking-tight text-grey-900", href: "https://ghost.org", children: [
          /* @__PURE__ */ o.jsx(Fk, { className: "mr-[6px] h-4 w-4" }),
          /* @__PURE__ */ o.jsx("span", { children: "Powered by Ghost" })
        ] }) })
      ] })
    ] }) })
  ] }) }) });
}, gA = (e, n, t) => Zi(n) && !Fu(n) && t ? t : e.sender_email || t || "", Lu = (e, n, t, a) => e.sender_reply_to === "newsletter" ? Zi(n) || n.labs.newEmailAddresses ? "" : gA(e, n, a) : e.sender_reply_to === "support" ? t || a || "" : e.sender_reply_to, H4 = ({ newsletter: e }) => {
  const n = wr("emailCustomization"), { currentUser: t, settings: a, siteData: s, config: l } = ct(), [A, f, u, d, h] = yt(a, ["title", "icon", "comments_enabled", "support_email_address", "default_email_address"]);
  let m = null;
  e.show_header_title ? m = A || null : e.show_header_name && (m = e.name);
  const v = e.show_header_title && e.show_header_name ? e.name : void 0, k = e.show_comment_cta && u !== "off", b = e.feedback_enabled && l.labs.audienceFeedback, y = () => {
    const F = e.background_color;
    return /#([0-9a-f]{3}){1,2}$/i.test(F) ? F : F === "dark" ? "#15212a" : "#ffffff";
  }, S = () => {
    const F = e.border_color;
    return /#([0-9a-f]{3}){1,2}$/i.test(F || "") ? F : F === "auto" ? jr(y()).hex() : F === "accent" ? s.accent_color : null;
  }, T = jr(y()).alpha(0.12).toString(), O = () => {
    const F = e.title_color;
    return /#([0-9a-f]{3}){1,2}$/i.test(F || "") ? F : F === "accent" ? s.accent_color : jr(y()).hex();
  }, B = jr(y()).hex(), K = jr(y()).alpha(0.5).toString(), _ = n ? {
    backgroundColor: y(),
    borderColor: S() || void 0,
    secondaryBorderColor: T,
    titleColor: O() || void 0,
    textColor: B,
    secondaryTextColor: K
  } : {};
  return /* @__PURE__ */ o.jsx(
    N4,
    {
      accentColor: s.accent_color,
      authorPlaceholder: t.name || t.email,
      backgroundColor: _.backgroundColor || "#ffffff",
      bodyFontCategory: e.body_font_category,
      footerContent: e.footer_content,
      headerIcon: e.show_header_icon ? f : void 0,
      headerImage: e.header_image,
      headerSubtitle: v,
      headerTitle: m,
      senderEmail: gA(e, l, h),
      senderName: e.sender_name || A,
      senderReplyTo: Lu(e, l, d, h),
      showBadge: e.show_badge,
      showCommentCta: k,
      showExcerpt: e.show_excerpt,
      showFeatureImage: e.show_feature_image,
      showFeedback: b,
      showLatestPosts: e.show_latest_posts,
      showPostTitleSection: e.show_post_title_section,
      showSubscriptionDetails: e.show_subscription_details,
      siteTitle: A,
      titleAlignment: e.title_alignment,
      titleFontCategory: e.title_font_category,
      ..._
    }
  );
}, B4 = ({ newsletter: e, updateNewsletter: n, errors: t, clearError: a }) => {
  const { settings: s, config: l } = ct(), [A, f] = yt(s, ["default_email_address", "support_email_address"]), u = wr("newEmailAddresses"), [d, h] = ue(Lu(e, l, f, A) || "");
  let m = gA(e, l, A);
  const v = On(() => [
    { label: `Newsletter address (${m})`, value: "newsletter" },
    { label: `Support address (${f})`, value: "support" }
  ], [m, f]);
  Te(() => {
    !Zi(l) && !u && (v.find((S) => S.value === e.sender_reply_to) || n({ sender_reply_to: "newsletter" }));
  }, [l, v, n, e.sender_reply_to, u]);
  const k = sn((y) => {
    h(y.target.value), n({ sender_reply_to: y.target.value || "newsletter" });
  }, [n, h]);
  if (!Zi(l) && !u)
    return /* @__PURE__ */ o.jsx(
      En,
      {
        options: v,
        selectedOption: v.find((y) => y.value === e.sender_reply_to),
        title: "Reply-to email",
        onSelect: (y) => n({ sender_reply_to: y == null ? void 0 : y.value })
      }
    );
  const b = () => {
    const y = Lu(e, l, f, A) || "";
    h(y);
  };
  return /* @__PURE__ */ o.jsx(
    je,
    {
      error: !!t.sender_reply_to,
      hint: t.sender_reply_to,
      maxLength: 191,
      placeholder: m || "",
      title: "Reply-to email",
      value: d,
      onBlur: b,
      onChange: k,
      onKeyDown: () => a("sender_reply_to")
    }
  );
}, U4 = ({ newsletter: e, onlyOne: n, updateNewsletter: t, validate: a, errors: s, clearError: l }) => {
  const { updateRoute: A } = nt(), { mutateAsync: f } = Cp(), u = Bs(), { settings: d, siteData: h, config: m } = ct(), [v, k] = yt(d, ["icon", "default_email_address", "support_email_address"]), { mutateAsync: b } = Qs(), [y, S] = ue("generalSettings"), T = wr("emailCustomization"), O = wr("newsletterExcerpt"), { localSettings: B } = Ba(), [K] = yt(B, ["title"]), _ = dt();
  let F = gA(e, m, k);
  const ee = [
    { value: "serif", label: "Elegant serif", className: "font-serif" },
    { value: "sans_serif", label: "Clean sans-serif" }
  ], oe = () => e.background_color === "dark" ? !0 : e.background_color === "light" ? !1 : jr(e.background_color).hex().toLowerCase() === "#ffffff", re = async () => {
    if (e.status === "active")
      xe.show(Bt, {
        title: "Archive newsletter",
        prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsxs("p", { children: [
            "Your newsletter ",
            /* @__PURE__ */ o.jsx("strong", { children: e.name }),
            " will no longer be visible to members or available as an option when publishing new posts."
          ] }),
          /* @__PURE__ */ o.jsx("p", { children: "Existing posts previously sent as this newsletter will remain unchanged." })
        ] }),
        okLabel: "Archive",
        okColor: "red",
        onOk: async (N) => {
          try {
            await f({ ...e, status: "archived" }), N == null || N.remove(), St({
              type: "success",
              message: "Newsletter archived"
            });
          } catch (Y) {
            _(Y);
          }
        }
      });
    else {
      try {
        await (u == null ? void 0 : u.errorIfWouldGoOverLimit("newsletters"));
      } catch (N) {
        if (N instanceof Ua) {
          xe.show(eo, {
            prompt: N.message || "Your current plan doesn't support more newsletters.",
            onOk: () => A({ route: "/pro", isExternal: !0 })
          });
          return;
        } else
          throw N;
      }
      xe.show(Bt, {
        title: "Reactivate newsletter",
        prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          "Reactivating ",
          /* @__PURE__ */ o.jsx("strong", { children: e.name }),
          " will immediately make it visible to members and re-enable it as an option when publishing new posts."
        ] }),
        okLabel: "Reactivate",
        onOk: async (N) => {
          await f({ ...e, status: "active" }), N == null || N.remove(), St({
            type: "success",
            message: "Newsletter reactivated"
          });
        }
      });
    }
  }, $ = () => {
    if (!Zi(m))
      return /* @__PURE__ */ o.jsx(
        je,
        {
          error: !!s.sender_email,
          hint: s.sender_email,
          placeholder: F || "",
          title: "Sender email address",
          value: e.sender_email || "",
          onChange: (N) => t({ sender_email: N.target.value }),
          onKeyDown: () => l("sender_email")
        }
      );
    if (Fu(m))
      return /* @__PURE__ */ o.jsx(
        je,
        {
          error: !!s.sender_email,
          hint: s.sender_email,
          maxLength: 191,
          placeholder: k,
          title: "Sender email address",
          value: e.sender_email || "",
          onChange: (N) => {
            t({ sender_email: N.target.value });
          },
          onKeyDown: () => l("sender_email")
        }
      );
  }, ae = [
    {
      id: "generalSettings",
      title: "General",
      contents: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs(bt, { className: "mt-6", gap: "sm", margins: "lg", title: "Name and description", children: [
          /* @__PURE__ */ o.jsx(
            je,
            {
              error: !!s.name,
              hint: s.name,
              maxLength: 191,
              placeholder: "Weekly Roundup",
              title: "Name",
              value: e.name || "",
              onChange: (N) => t({ name: N.target.value }),
              onKeyDown: () => l("name")
            }
          ),
          /* @__PURE__ */ o.jsx(Ha, { maxLength: 2e3, rows: 2, title: "Description", value: e.description || "", onChange: (N) => t({ description: N.target.value }) })
        ] }),
        /* @__PURE__ */ o.jsxs(bt, { className: "mt-6", gap: "sm", margins: "lg", title: "Email info", children: [
          /* @__PURE__ */ o.jsx(je, { maxLength: 191, placeholder: K, title: "Sender name", value: e.sender_name || "", onChange: (N) => t({ sender_name: N.target.value }) }),
          $(),
          /* @__PURE__ */ o.jsx(B4, { clearError: l, errors: s, newsletter: e, updateNewsletter: t, validate: a })
        ] }),
        /* @__PURE__ */ o.jsx(bt, { className: "mt-6", gap: "sm", margins: "lg", title: "Member settings", children: /* @__PURE__ */ o.jsx(
          ft,
          {
            checked: e.subscribe_on_signup,
            direction: "rtl",
            label: "Subscribe new members on signup",
            labelStyle: "value",
            onChange: (N) => t({ subscribe_on_signup: N.target.checked })
          }
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: "mb-5 mt-10", children: e.status === "active" ? !n && /* @__PURE__ */ o.jsx(Ye, { color: "red", label: "Archive newsletter", link: !0, onClick: re }) : /* @__PURE__ */ o.jsx(Ye, { color: "green", label: "Reactivate newsletter", link: !0, onClick: re }) })
      ] })
    },
    {
      id: "design",
      title: "Design",
      contents: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs(bt, { className: "mt-6", gap: "sm", margins: "lg", title: "Header", children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx(st, { className: "mb-2", level: 6, children: "Header image" }) }),
            /* @__PURE__ */ o.jsxs("div", { className: "flex-column flex gap-1", children: [
              /* @__PURE__ */ o.jsx(
                Hr,
                {
                  deleteButtonClassName: "!top-1 !right-1",
                  height: e.header_image ? "66px" : "64px",
                  id: "logo",
                  imageURL: e.header_image || void 0,
                  onDelete: () => {
                    t({ header_image: null });
                  },
                  onUpload: async (N) => {
                    try {
                      const Y = Or(await b({ file: N }));
                      t({ header_image: Y });
                    } catch (Y) {
                      _(Y);
                    }
                  },
                  children: /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-grey-700 dark:text-grey-300", name: "picture" })
                }
              ),
              /* @__PURE__ */ o.jsx(Aa, { children: "1200x600, optional" })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs(Pi, { children: [
            v && /* @__PURE__ */ o.jsx(
              ft,
              {
                checked: e.show_header_icon,
                direction: "rtl",
                label: "Publication icon",
                onChange: (N) => t({ show_header_icon: N.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(
              ft,
              {
                checked: e.show_header_title,
                direction: "rtl",
                label: "Publication title",
                onChange: (N) => t({ show_header_title: N.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(
              ft,
              {
                checked: e.show_header_name,
                direction: "rtl",
                label: "Newsletter name",
                onChange: (N) => t({ show_header_name: N.target.checked })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs(bt, { className: "mt-6", gap: "sm", margins: "lg", title: "Body", children: [
          T && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            /* @__PURE__ */ o.jsx(
              Li,
              {
                direction: "rtl",
                swatches: [
                  {
                    hex: "#f0f0f0",
                    title: "Light grey"
                  },
                  {
                    hex: "#ffffff",
                    value: "light",
                    title: "White"
                  }
                ],
                title: "Background color",
                value: e.background_color || "light",
                onChange: (N) => t({ background_color: N })
              }
            ),
            /* @__PURE__ */ o.jsx(
              Li,
              {
                clearButtonValue: null,
                direction: "rtl",
                swatches: [
                  {
                    hex: h.accent_color,
                    value: "accent",
                    title: "Accent"
                  },
                  {
                    hex: oe() ? "#ffffff" : "#000000",
                    value: "auto",
                    title: "Auto"
                  },
                  {
                    value: null,
                    title: "Transparent",
                    hex: "#00000000"
                  }
                ],
                title: "Border color",
                value: e.border_color,
                onChange: (N) => t({ border_color: N })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx(
            ft,
            {
              checked: e.show_post_title_section,
              direction: "rtl",
              label: "Post title",
              labelStyle: "heading",
              onChange: (N) => t({ show_post_title_section: N.target.checked })
            }
          ),
          /* @__PURE__ */ o.jsxs("div", { className: e.show_post_title_section ? "mt-[-16px] flex items-end" : "hidden", children: [
            /* @__PURE__ */ o.jsx("div", { className: "w-full pr-4", children: /* @__PURE__ */ o.jsx(
              En,
              {
                disabled: !e.show_post_title_section,
                options: ee,
                selectedOption: ee.find((N) => N.value === e.title_font_category),
                onSelect: (N) => t({ title_font_category: N == null ? void 0 : N.value })
              }
            ) }),
            /* @__PURE__ */ o.jsx(
              Ul,
              {
                buttons: [
                  {
                    icon: "align-left",
                    label: "Align left",
                    hideLabel: !0,
                    link: !1,
                    size: "sm",
                    color: (e.title_alignment === "left", "clear"),
                    iconColorClass: e.title_alignment === "left" ? "text-grey-900" : "text-grey-500",
                    onClick: () => t({ title_alignment: "left" }),
                    disabled: !e.show_post_title_section
                  },
                  {
                    icon: "align-center",
                    label: "Align center",
                    hideLabel: !0,
                    link: !1,
                    size: "sm",
                    color: (e.title_alignment === "center", "clear"),
                    iconColorClass: e.title_alignment === "center" ? "text-grey-900" : "text-grey-500",
                    onClick: () => t({ title_alignment: "center" }),
                    disabled: !e.show_post_title_section
                  }
                ],
                className: "mb-1 !gap-0"
              }
            )
          ] }),
          T && /* @__PURE__ */ o.jsx(
            Li,
            {
              direction: "rtl",
              swatches: [
                {
                  value: "accent",
                  title: "Accent",
                  hex: h.accent_color
                },
                {
                  value: null,
                  title: "Auto",
                  hex: oe() ? "#ffffff" : "#000000"
                }
              ],
              title: "Heading color",
              value: e.title_color,
              onChange: (N) => t({ title_color: N })
            }
          ),
          /* @__PURE__ */ o.jsxs(Pi, { gap: "lg", children: [
            O && e.show_post_title_section && /* @__PURE__ */ o.jsx(
              ft,
              {
                checked: e.show_excerpt,
                direction: "rtl",
                label: "Post excerpt",
                onChange: (N) => t({ show_excerpt: N.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(
              ft,
              {
                checked: e.show_feature_image,
                direction: "rtl",
                label: "Feature image",
                onChange: (N) => t({ show_feature_image: N.target.checked })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx(
            En,
            {
              options: ee,
              selectedOption: ee.find((N) => N.value === e.body_font_category),
              testId: "body-font-select",
              title: "Body style",
              onSelect: (N) => t({ body_font_category: N == null ? void 0 : N.value })
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs(bt, { className: "mt-6", gap: "sm", margins: "lg", title: "Footer", children: [
          /* @__PURE__ */ o.jsxs(Pi, { gap: "lg", children: [
            /* @__PURE__ */ o.jsx(
              ft,
              {
                checked: e.feedback_enabled,
                direction: "rtl",
                label: "Ask your readers for feedback",
                onChange: (N) => t({ feedback_enabled: N.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(
              ft,
              {
                checked: e.show_comment_cta,
                direction: "rtl",
                label: "Add a link to your comments",
                onChange: (N) => t({ show_comment_cta: N.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(
              ft,
              {
                checked: e.show_latest_posts,
                direction: "rtl",
                label: "Share your latest posts",
                onChange: (N) => t({ show_latest_posts: N.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(
              ft,
              {
                checked: e.show_subscription_details,
                direction: "rtl",
                label: "Show subscription details",
                onChange: (N) => t({ show_subscription_details: N.target.checked })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx(
            Wu,
            {
              hint: "Any extra information or legal text",
              nodes: "MINIMAL_NODES",
              placeholder: " ",
              title: "Email footer",
              value: e.footer_content || "",
              onChange: (N) => t({ footer_content: N })
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx(Fi, {}),
        /* @__PURE__ */ o.jsxs("div", { className: "my-5 flex w-full items-start", children: [
          /* @__PURE__ */ o.jsx("span", { children: /* @__PURE__ */ o.jsx(Qt, { className: "mr-2 mt-[-1px]", colorClass: "text-red", name: "heart" }) }),
          /* @__PURE__ */ o.jsx(bt, { marginBottom: !1, children: /* @__PURE__ */ o.jsx(
            ft,
            {
              checked: e.show_badge,
              direction: "rtl",
              label: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-0.5", children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm md:text-base", children: "Promote independent publishing" }),
                /* @__PURE__ */ o.jsx("span", { className: "text-[11px] leading-tight text-grey-700 md:text-xs md:leading-tight", children: "Show you’re a part of the indie publishing movement with a small badge in the footer" })
              ] }),
              labelStyle: "value",
              onChange: (N) => t({ show_badge: N.target.checked })
            }
          ) })
        ] })
      ] })
    }
  ], Z = (N) => {
    S(N);
  };
  return /* @__PURE__ */ o.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ o.jsx("div", { className: "px-7 pb-7 pt-5", children: /* @__PURE__ */ o.jsx(Oa, { selectedTab: y, tabs: ae, onTabChange: Z }) }) });
}, L4 = ({ newsletter: e, onlyOne: n }) => {
  const { config: t } = ct(), { mutateAsync: a } = Cp(), { updateRoute: s } = nt(), l = dt(), { formState: A, saveState: f, updateForm: u, setFormState: d, handleSave: h, validate: m, errors: v, clearError: k, okProps: b } = qn({
    initialState: e,
    savingDelay: 500,
    onSave: async () => {
      const { meta: { sent_email_verification: [O] = [] } = {} } = await a(A);
      let B;
      O && O === "sender_email" ? B = /* @__PURE__ */ o.jsx("div", { children: "We‘ve sent a confirmation email to the new address." }) : O && O === "sender_reply_to" && (B = /* @__PURE__ */ o.jsx("div", { children: "We‘ve sent a confirmation email to the new address." })), B && St({
        icon: "email",
        message: B,
        type: "info"
      });
    },
    onSaveError: l,
    onValidate: () => {
      const O = {};
      return A.name || (O.name = "Name is required"), A.sender_email && !Nr.isEmail(A.sender_email) ? O.sender_email = "Invalid email" : A.sender_email && Fu(t) && A.sender_email.split("@")[1] !== wh(t) && (O.sender_email = `Email must end with @${wh(t)}`), A.sender_reply_to && !Nr.isEmail(A.sender_reply_to) && !["newsletter", "support"].includes(A.sender_reply_to) && (O.sender_reply_to = "Invalid email"), O;
    }
  }), y = (O) => {
    u((B) => ({ ...B, ...O }));
  };
  Te(() => {
    d(() => e);
  }, [d, e]);
  const S = /* @__PURE__ */ o.jsx(H4, { newsletter: A }), T = /* @__PURE__ */ o.jsx(U4, { clearError: k, errors: v, newsletter: A, onlyOne: n, updateNewsletter: y, validate: m });
  return /* @__PURE__ */ o.jsx(
    Hs,
    {
      afterClose: () => s("newsletters"),
      buttonsDisabled: b.disabled,
      cancelLabel: "Close",
      deviceSelector: !1,
      dirty: f === "unsaved",
      okColor: b.color,
      okLabel: b.label || "Save",
      preview: S,
      previewBgColor: "grey",
      previewToolbar: !1,
      sidebar: T,
      sidebarPadding: !1,
      testId: "newsletter-modal",
      title: "Newsletter",
      onOk: async () => {
        await h({ fakeWhenUnchanged: !0 });
      }
    }
  );
}, P4 = ({ params: e }) => {
  const { data: { newsletters: n, isEnd: t } = {}, fetchNextPage: a } = gp(), s = n == null ? void 0 : n.find(({ id: l }) => l === (e == null ? void 0 : e.id));
  return Te(() => {
    !s && !t && a();
  }, [a, t, s]), s ? /* @__PURE__ */ o.jsx(L4, { newsletter: s, onlyOne: n.length === 1 }) : null;
}, z4 = xe.create(P4), dg = ({ id: e }) => {
  const { updateRoute: n } = nt(), { data: { offers: t = [] } = {} } = Dp(e || ""), [a, s] = ue(), [l, A] = ue(""), { siteData: f } = ct();
  Te(() => {
    if (t.length > 0) {
      const y = t[0], S = `${Qr(f)}${y == null ? void 0 : y.code}`;
      A(S), s(y);
    }
  }, [t, f]);
  const [u, d] = ue(!1), h = () => {
    let y = "";
    switch (a == null ? void 0 : a.type) {
      case "percent":
        y = (a == null ? void 0 : a.amount) + "% discount";
        break;
      case "fixed":
        y = vp(Zk(a == null ? void 0 : a.amount)) + " " + (a == null ? void 0 : a.currency) + " discount";
        break;
      case "trial":
        y = (a == null ? void 0 : a.amount) + " days free trial";
        break;
    }
    return `${encodeURIComponent((a == null ? void 0 : a.name) || "")} — Check out ${encodeURIComponent(y)} on:`;
  }, m = async () => {
    await navigator.clipboard.writeText(l), d(!0), setTimeout(() => d(!1), 2e3);
  }, v = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURI(l)}&text=${h()}`, "_blank");
  }, k = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(l)}`, "_blank");
  }, b = () => {
    window.open(`http://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(l)}&title=${h()}`, "_blank");
  };
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        n("offers");
      },
      animate: !1,
      backDropClick: !1,
      footer: !1,
      height: "full",
      size: "lg",
      testId: "offer-success-modal",
      topRightContent: "close",
      width: 1140,
      children: /* @__PURE__ */ o.jsxs("div", { className: "-mt-6 flex h-full flex-col items-center justify-center text-center", children: [
        /* @__PURE__ */ o.jsx("div", { className: "absolute left-6 top-5", children: /* @__PURE__ */ o.jsx(
          oA,
          {
            activeItemClassName: "hidden md:!block md:!visible",
            containerClassName: "whitespace-nowrap",
            itemClassName: "hidden md:!block md:!visible",
            items: [{ label: "Offers", onClick: () => {
              n("offers/edit");
            } }, { label: (a == null ? void 0 : a.name) || "" }],
            separatorClassName: "hidden md:!block md:!visible",
            backIcon: !0,
            onBack: () => {
              n("offers/edit");
            }
          }
        ) }),
        /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-grey-700 -mt-4", name: "tags-check", size: "xl" }),
        /* @__PURE__ */ o.jsx("h1", { className: "mt-6 text-4xl", children: "Your new offer is live!" }),
        /* @__PURE__ */ o.jsx("p", { className: "mt-3 max-w-[510px] text-[1.6rem]", children: "You can share the link anywhere. In your newsletter, social media, a podcast, or in-person. It all just works." }),
        /* @__PURE__ */ o.jsxs("div", { className: "mt-8 flex w-full max-w-md flex-col gap-8", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col-reverse gap-2", children: [
            /* @__PURE__ */ o.jsx(je, { name: "offer-url", type: "url", value: l, disabled: !0 }),
            /* @__PURE__ */ o.jsx(Ye, { color: "green", label: u ? "Copied!" : "Copy link", fullWidth: !0, onClick: m })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: 'flex items-center gap-4 text-xs font-medium before:h-px before:grow before:bg-grey-300 before:content-[""] after:h-px after:grow after:bg-grey-300 after:content-[""] dark:before:bg-grey-800 dark:after:bg-grey-800', children: "OR" }),
          /* @__PURE__ */ o.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ o.jsx(Ye, { className: "h-8 border border-grey-300 dark:border-grey-800", icon: "twitter-x", iconColorClass: "w-[14px] h-[14px]", size: "sm", fullWidth: !0, onClick: v }),
            /* @__PURE__ */ o.jsx(Ye, { className: "h-8 border border-grey-300 dark:border-grey-800", icon: "facebook", size: "sm", fullWidth: !0, onClick: k }),
            /* @__PURE__ */ o.jsx(Ye, { className: "h-8 border border-grey-300 dark:border-grey-800", icon: "linkedin", size: "sm", fullWidth: !0, onClick: b })
          ] })
        ] })
      ] })
    }
  );
}, nA = ({ href: e, onDestroyed: n, selectedTab: t, portalParent: a }) => {
  t || (t = "signup");
  const s = Ct(null), [l, A] = ue(!1), [f, u] = ue(!0), d = sn(() => {
    setTimeout(() => {
      s.current && u(!1);
    }, 300);
  }, [s]);
  if (Te(() => {
    const v = (k) => {
      var y;
      if (!e)
        return;
      new URL(k.origin).origin === new URL(e).origin && ((y = k == null ? void 0 : k.data) == null ? void 0 : y.type) === "portal-preview-ready" && d();
    };
    return window.addEventListener("message", v, !0), () => {
      window.removeEventListener("message", v, !0), n == null || n();
    };
  }, [e, n, d, l]), !e)
    return null;
  let h = "mt-[-7%] flex h-screen items-center justify-center", m = "hidden";
  return a === "preview" ? (h = "absolute z-50 mt-[-7%] flex h-screen items-center justify-center", m = "invisible") : a === "offers" && (h = "absolute z-50 flex w-full h-full items-center justify-center", m = "invisible"), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    f && /* @__PURE__ */ o.jsx("div", { className: h, children: /* @__PURE__ */ o.jsx("span", { children: /* @__PURE__ */ o.jsx(kp, {}) }) }),
    /* @__PURE__ */ o.jsx(
      "iframe",
      {
        ref: s,
        className: !f && l ? "" : m,
        "data-testid": "portal-preview",
        height: "100%",
        src: e,
        title: "Portal Preview",
        width: "100%",
        onLoad: () => {
          A(!0);
        }
      }
    )
  ] });
}, hg = (e, n) => {
  const {
    disableBackground: t = !1,
    name: a,
    code: s,
    displayTitle: l = "",
    displayDescription: A = "",
    type: f,
    cadence: u,
    amount: d = 0,
    duration: h,
    durationInMonths: m,
    currency: v = "usd",
    status: k,
    tierId: b
  } = e;
  n = n.replace(/\/$/, "");
  const y = "/?v=modal-portal-offer#/portal/preview/offer", S = new URLSearchParams();
  return S.append("disableBackground", "false"), S.append("name", encodeURIComponent(a)), S.append("code", encodeURIComponent(s)), S.append("display_title", encodeURIComponent(l)), S.append("display_description", encodeURIComponent(A)), S.append("type", encodeURIComponent(f)), S.append("cadence", encodeURIComponent(u)), S.append("amount", encodeURIComponent(d)), S.append("duration", encodeURIComponent(h)), S.append("duration_in_months", encodeURIComponent(m)), S.append("currency", encodeURIComponent(v)), S.append("status", encodeURIComponent(k)), S.append("tier_id", encodeURIComponent(b)), t && S.append("disableBackground", "true"), `${n}${y}?${S.toString()}`;
}, Y4 = (e) => {
  const n = [];
  return e.forEach((t) => {
    n.push({
      label: `${t.name} - Monthly`,
      value: `${t.id}-month-${t.currency}`
    }), n.push({
      label: `${t.name} - Yearly`,
      value: `${t.id}-year-${t.currency}`
    });
  }), n;
};
function F4(e) {
  return e.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-");
}
const up = ({ type: e, checked: n, onClick: t }) => {
  const a = n ? "bg-black text-white dark:bg-white dark:text-black" : "border border-grey-300 dark:border-grey-800";
  return /* @__PURE__ */ o.jsx("button", { className: "text-left", type: "button", onClick: t, children: /* @__PURE__ */ o.jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ o.jsx("div", { className: `mt-0.5 flex h-4 w-4 items-center justify-center rounded-full ${a}`, children: n ? /* @__PURE__ */ o.jsx(Qt, { className: "w-[7px] stroke-[4]", name: "check", size: "custom" }) : null }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ o.jsx("span", { children: e.title }),
      /* @__PURE__ */ o.jsx("span", { className: "text-sm", children: e.description })
    ] })
  ] }) });
}, fp = (e) => {
  const { fixedAmount: n = 0, percentAmount: t = 0, trialAmount: a = 0, amount: s = 0 } = e;
  switch (e.type) {
    case "fixed":
      return n * 100;
    case "percent":
      return t;
    case "trial":
      return a;
    default:
      return s;
  }
}, Z4 = ({
  tierOptions: e,
  handleTierChange: n,
  selectedTier: t,
  // handleTextInput,
  typeOptions: a,
  durationOptions: s,
  handleTypeChange: l,
  handleDurationChange: A,
  overrides: f,
  handleAmountTypeChange: u,
  handleNameInput: d,
  handleTextAreaInput: h,
  handleDisplayTitleInput: m,
  handleDurationInMonthsInput: v,
  handleAmountInput: k,
  handleCodeInput: b,
  clearError: y,
  errors: S,
  testId: T,
  handleTrialAmountInput: O,
  amountOptions: B
}) => {
  var W, H, G;
  const _ = (() => {
    var pe;
    return (pe = t == null ? void 0 : t.label) != null && pe.includes("Yearly") ? s.filter((ke) => ke.value !== "repeating") : s;
  })(), [F, ee] = ue(0), oe = F > 40 ? "text-red" : "text-green", { siteData: re } = ct(), [$, ae] = ue(!1), Z = Qr(re), N = `${Z}${f.code.value}`, Y = async () => {
    await navigator.clipboard.writeText(N), ae(!0), setTimeout(() => ae(!1), 2e3);
  };
  return /* @__PURE__ */ o.jsx("div", { className: "pt-7", "data-testId": T, children: /* @__PURE__ */ o.jsxs(bt, { children: [
    /* @__PURE__ */ o.jsxs("section", { children: [
      /* @__PURE__ */ o.jsx("h2", { className: "mb-4 text-lg", children: "General" }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ o.jsx(
          je,
          {
            error: !!S.name,
            hint: S.name || /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ o.jsx("span", { children: "Visible to members on Stripe Checkout page" }),
              /* @__PURE__ */ o.jsxs("strong", { children: [
                /* @__PURE__ */ o.jsx("span", { className: `${oe}`, children: F }),
                " / 40"
              ] })
            ] }),
            maxLength: 40,
            placeholder: "Black Friday",
            title: "Offer name",
            onChange: (pe) => {
              d(pe), ee(pe.target.value.length);
            },
            onKeyDown: () => y("name")
          }
        ),
        /* @__PURE__ */ o.jsx(
          je,
          {
            error: !!S.displayTitle,
            hint: S.displayTitle,
            placeholder: "Black Friday Special",
            title: "Display title",
            value: f.displayTitle.value,
            onChange: (pe) => {
              m(pe);
            },
            onKeyDown: () => y("displayTitle")
          }
        ),
        /* @__PURE__ */ o.jsx(
          Ha,
          {
            placeholder: "Take advantage of this limited-time offer.",
            title: "Display description",
            value: f.displayDescription,
            onChange: (pe) => {
              h(pe);
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("section", { className: "mt-4", children: [
      /* @__PURE__ */ o.jsx("h2", { className: "mb-4 text-lg", children: "Details" }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-4 rounded-md border border-grey-200 p-4 dark:border-grey-800", children: [
          /* @__PURE__ */ o.jsx(up, { checked: f.type !== "trial", type: a[0], onClick: () => {
            l("percent");
          } }),
          /* @__PURE__ */ o.jsx(up, { checked: f.type === "trial", type: a[1], onClick: () => {
            l("trial");
          } })
        ] }),
        /* @__PURE__ */ o.jsx(
          En,
          {
            options: e,
            selectedOption: t,
            testId: "tier-cadence-select-offers",
            title: "Tier — Cadence",
            onSelect: (pe) => {
              pe && n(pe);
            }
          }
        ),
        f.type !== "trial" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          " ",
          /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ o.jsx(
              je,
              {
                error: !!S.amount,
                hint: S.amount,
                title: "Amount off",
                type: "number",
                value: f.type === "fixed" ? f.fixedAmount === 0 ? "" : (W = f.fixedAmount) == null ? void 0 : W.toString() : f.percentAmount === 0 ? "" : (H = f.percentAmount) == null ? void 0 : H.toString(),
                onChange: (pe) => {
                  k(pe);
                },
                onKeyDown: () => y("amount")
              }
            ),
            /* @__PURE__ */ o.jsx("div", { className: "absolute right-1.5 top-6 z-10", children: /* @__PURE__ */ o.jsx(
              En,
              {
                clearBg: !0,
                controlClasses: { menu: "w-20 right-0" },
                options: B,
                selectedOption: f.type === "percent" ? B[0] : B[1],
                testId: "amount-type-select-offers",
                onSelect: (pe) => {
                  u((pe == null ? void 0 : pe.value) || "");
                }
              }
            ) })
          ] }),
          /* @__PURE__ */ o.jsx(
            En,
            {
              options: _,
              selectedOption: _.find((pe) => pe.value === f.duration),
              testId: "duration-select-offers",
              title: "Duration",
              onSelect: (pe) => A((pe == null ? void 0 : pe.value) || "")
            }
          ),
          f.duration === "repeating" && /* @__PURE__ */ o.jsx(je, { title: "Duration in months", type: "number", onChange: (pe) => {
            v(pe);
          } })
        ] }),
        f.type === "trial" && /* @__PURE__ */ o.jsx(
          je,
          {
            error: !!S.amount,
            hint: S.amount,
            title: "Trial duration",
            type: "number",
            value: (G = f.trialAmount) == null ? void 0 : G.toString(),
            onChange: (pe) => {
              O(pe);
            },
            onKeyDown: () => y("amount")
          }
        ),
        /* @__PURE__ */ o.jsx(
          je,
          {
            error: !!S.code,
            hint: S.code || (f.code.value !== "" ? /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ o.jsxs("div", { children: [
                Z,
                /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: f.code.value })
              ] }),
              /* @__PURE__ */ o.jsx("span", {}),
              /* @__PURE__ */ o.jsx(Ye, { className: "text-xs", color: "green", label: `${$ ? "Copied" : "Copy"}`, size: "sm", link: !0, onClick: Y })
            ] }) : null),
            placeholder: "black-friday",
            title: "Offer code",
            value: f.code.value,
            onChange: (pe) => {
              b(pe);
            },
            onKeyDown: () => y("code")
          }
        )
      ] })
    ] })
  ] }) });
}, Ca = (e) => {
  const [n, t, a] = e.split("-");
  if (!n || !t || !a)
    throw new Error("Invalid input format. Expected format is: id-period-currency");
  return { id: n, period: t, currency: a };
}, G4 = () => {
  var Ie, Me, ye, de, Ne, Et, Xt, Ve, Le;
  const { siteData: e } = ct(), n = [
    { title: "Discount", description: "Offer a special reduced price", value: "percent" },
    { title: "Free trial", description: "Give free access for a limited time", value: "trial" }
  ], t = [
    { value: "once", label: "First-payment" },
    { value: "repeating", label: "Multiple-months" },
    { value: "forever", label: "Forever" }
  ], [a, s] = ue(""), { updateRoute: l } = nt(), { data: { tiers: A } = {} } = $i(), f = Zu(A || []), u = Y4(f), { mutateAsync: d } = Gk(), [h, m] = ue({
    tier: u[0] || {},
    dataset: {
      id: (Ie = u[0]) != null && Ie.value ? Ca((Me = u[0]) == null ? void 0 : Me.value).id : "",
      period: (ye = u[0]) != null && ye.value ? Ca((de = u[0]) == null ? void 0 : de.value).period : "",
      currency: (Ne = u[0]) != null && Ne.value ? Ca((Et = u[0]) == null ? void 0 : Et.value).currency : ""
    }
  }), { data: { offers: v = [] } = {} } = Kk(), { formState: k, updateForm: b, handleSave: y, saveState: S, okProps: T, validate: O, errors: B, clearError: K } = qn({
    initialState: {
      disableBackground: !1,
      name: "",
      code: {
        isDirty: !1,
        value: ""
      },
      displayTitle: {
        isDirty: !1,
        value: ""
      },
      displayDescription: "",
      type: "percent",
      cadence: ((Xt = h == null ? void 0 : h.dataset) == null ? void 0 : Xt.period) || "",
      amount: 0,
      duration: "once",
      durationInMonths: 0,
      currency: ((Ve = h == null ? void 0 : h.dataset) == null ? void 0 : Ve.currency) || "USD",
      status: "active",
      tierId: ((Le = h == null ? void 0 : h.dataset) == null ? void 0 : Le.id) || "",
      trialAmount: 7,
      fixedAmount: 0,
      percentAmount: 0
    },
    onSave: async () => {
      const te = {
        name: k.name,
        code: k.code.value,
        display_title: k.displayTitle.value,
        display_description: k.displayDescription,
        cadence: k.cadence,
        amount: fp(k) || 0,
        duration: k.type === "trial" ? "trial" : k.duration,
        duration_in_months: Number(k.durationInMonths),
        currency: k.currency,
        status: k.status,
        tier: {
          id: k.tierId
        },
        type: k.type,
        currency_restriction: !1
      }, Ee = await d(te);
      Ee && Ee.offers && Ee.offers.length > 0 && l(`offers/success/${Ee.offers[0].id}`);
    },
    onSaveError: () => {
    },
    onValidate: () => {
      const te = {};
      return !k.name && k.name.length === 0 && (te.name = "Name is required"), !k.code.value && k.code.value.length === 0 && (te.code = "Code is required"), !k.displayTitle.value && k.displayTitle.value.length === 0 && (te.displayTitle = "Display title is required"), k.type === "percent" && k.percentAmount === 0 && (te.amount = "Enter an amount greater than 0."), k.type === "percent" && (k.percentAmount < 0 || k.percentAmount > 100) && (te.amount = "Amount must be between 0 and 100%."), (k.type === "fixed" && k.fixedAmount === 0 || k.type === "fixed" && k.fixedAmount < 1) && (te.amount = "Enter an amount greater than 0."), k.type === "trial" && k.trialAmount === 0 && (te.amount = "Enter an amount greater than 0."), k.type === "trial" && k.trialAmount < 1 && (te.amount = "Free trial must be at least 1 day."), te;
    },
    savingDelay: 500
  }), _ = [
    { value: "percent", label: "%" },
    { value: "fixed", label: k.currency }
  ], F = (te) => {
    m({
      tier: te,
      dataset: Ca(te.value)
    }), b((Ee) => ({
      ...Ee,
      cadence: Ca(te.value).period,
      currency: Ca(te.value).currency,
      tierId: Ca(te.value).id
    }));
  }, ee = (te) => {
    b((Ee) => ({
      ...Ee,
      type: te
    }));
  }, oe = (te) => {
    b((Ee) => ({
      ...Ee,
      type: te === "percent" ? "percent" : "fixed"
    }));
  }, re = (te) => {
    const Ee = te.target;
    k.type === "fixed" ? b((Ce) => ({
      ...Ce,
      fixedAmount: Number(Ee.value)
    })) : k.type === "percent" ? b((Ce) => ({
      ...Ce,
      percentAmount: Number(Ee.value)
    })) : b((Ce) => ({
      ...Ce,
      amount: Number(Ee.value)
    }));
  }, $ = (te) => {
    const Ee = te.target;
    b((Ce) => ({
      ...Ce,
      durationInMonths: Number(Ee.value)
    }));
  }, ae = (te) => {
    const Ee = te.target.value;
    b((Ce) => {
      let Xe = { ...Ce };
      return Xe.name = Ee, Ce.code.isDirty || (K("code"), Xe.code = {
        ...Ce.code,
        value: F4(Ee)
      }), Ce.displayTitle.isDirty || (K("displayTitle"), Xe.displayTitle = {
        ...Ce.displayTitle,
        value: Ee
      }), Xe;
    });
  }, Z = (te) => {
    const Ee = te.target;
    b((Ce) => ({
      ...Ce,
      displayTitle: {
        ...Ce.displayTitle,
        isDirty: !0,
        value: Ee.value
      }
    }));
  }, N = (te) => {
    const Ee = te.target;
    b((Ce) => ({
      ...Ce,
      displayDescription: Ee.value
    }));
  }, Y = (te) => {
    const Ee = te.target;
    b((Ce) => ({
      ...Ce,
      trialAmount: Number(Ee.value)
    }));
  }, W = (te) => {
    b((Ee) => ({
      ...Ee,
      duration: te
    }));
  }, H = (te) => {
    const Ee = te.target;
    b((Ce) => ({
      ...Ce,
      code: {
        ...Ce.code,
        isDirty: !0,
        value: Ee.value
      }
    }));
  }, G = () => {
    v.length > 0 ? l("offers/edit") : l("offers");
  }, pe = On(() => {
    var te;
    return {
      name: k.name || "",
      code: k.code.value || "",
      displayTitle: k.displayTitle.value || "",
      displayDescription: k.displayDescription || "",
      type: k.type || "percent",
      cadence: k.cadence || "month",
      amount: fp(k) || 0,
      duration: k.type === "trial" ? "trial" : k.duration || "once",
      durationInMonths: k.durationInMonths || 0,
      currency: k.currency || "USD",
      status: k.status || "active",
      tierId: k.tierId || ((te = f[0]) == null ? void 0 : te.id)
    };
  }, [k, f]);
  Te(() => {
    const te = hg(pe, e.url);
    s(te);
  }, [k, e.url, k.type, pe]);
  const ke = /* @__PURE__ */ o.jsx(
    Z4,
    {
      amountOptions: _,
      clearError: K,
      durationOptions: t,
      errors: B,
      handleAmountInput: re,
      handleAmountTypeChange: oe,
      handleCodeInput: H,
      handleDisplayTitleInput: Z,
      handleDurationChange: W,
      handleDurationInMonthsInput: $,
      handleNameInput: ae,
      handleTextAreaInput: N,
      handleTierChange: F,
      handleTrialAmountInput: Y,
      handleTypeChange: ee,
      overrides: k,
      selectedTier: h.tier,
      testId: "add-offer-sidebar",
      tierOptions: u,
      typeOptions: n,
      validate: O
    }
  ), X = /* @__PURE__ */ o.jsx(
    nA,
    {
      href: a || "",
      portalParent: "offers"
    }
  );
  return /* @__PURE__ */ o.jsx(
    Hs,
    {
      afterClose: () => {
        l("offers");
      },
      backDropClick: !1,
      cancelLabel: "Close",
      deviceSelector: !1,
      dirty: S === "unsaved",
      height: "full",
      okColor: T.color,
      okLabel: "Publish",
      preview: X,
      previewToolbar: !1,
      sidebar: ke,
      size: "lg",
      testId: "add-offer-modal",
      title: "Offer",
      width: 1140,
      onCancel: G,
      onOk: async () => {
        if (O(), !Object.values(B).every((Ee) => !Ee)) {
          Gi.remove(), St({
            title: "Can't save offer",
            type: "info",
            message: "Make sure you filled all required fields"
          });
          return;
        }
        try {
          if (await y({ force: !0 }))
            return;
        } catch (Ee) {
          let Ce;
          Ee instanceof Ds && Ee.data && Ee.data.errors[0] && (Ce = Ee.data.errors[0].context || Ee.data.errors[0].message), Gi.remove(), Ce && St({
            title: "Can't save offer",
            type: "error",
            message: Ce || "Please try again later"
          });
        }
      }
    }
  );
};
function dp(e) {
  return new Date(e).toLocaleDateString("default", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
}
const K4 = ({ clearError: e, errors: n, offer: t, updateOffer: a }) => {
  const { siteData: s } = ct(), [l, A] = ue(!1), f = dt(), { mutateAsync: u } = Rp(), [d, h] = ue((t == null ? void 0 : t.name.length) || 0), m = d > 40 ? "text-red" : "text-green", { updateRoute: v } = nt();
  Te(() => {
    t != null && t.name && h(t == null ? void 0 : t.name.length);
  }, [t == null ? void 0 : t.name]);
  const k = Qr(s), b = `${k}${t == null ? void 0 : t.code}`, y = async () => {
    await navigator.clipboard.writeText(b), A(!0), setTimeout(() => A(!1), 2e3);
  }, S = async () => {
    (t == null ? void 0 : t.status) === "active" ? xe.show(Bt, {
      title: "Archive offer",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("p", { children: "New members will no longer be able to subscribe using this offer." }),
        /* @__PURE__ */ o.jsxs("p", { children: [
          "All members that previously redeemed ",
          /* @__PURE__ */ o.jsx("strong", { children: t == null ? void 0 : t.name }),
          " will remain unchanged."
        ] })
      ] }),
      okLabel: "Archive",
      okColor: "red",
      onOk: async (T) => {
        try {
          await u({ ...t, status: "archived" }), T == null || T.remove(), St({
            type: "success",
            title: "Offer archived"
          }), v("offers/edit");
        } catch (O) {
          f(O);
        }
      }
    }) : xe.show(Bt, {
      title: "Reactivate offer",
      prompt: /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsxs("p", { children: [
        "Reactivating ",
        /* @__PURE__ */ o.jsx("strong", { children: t == null ? void 0 : t.name }),
        " will allow new members to subscribe using this offer. Existing members will remain unchanged."
      ] }) }),
      okLabel: "Reactivate",
      onOk: async (T) => {
        try {
          await u({ ...t, status: "active" }), T == null || T.remove(), St({
            type: "success",
            title: "Offer reactivated"
          }), v("offers/edit");
        } catch (O) {
          f(O);
        }
      }
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "flex grow flex-col pt-2", children: [
    /* @__PURE__ */ o.jsxs(bt, { className: " grow", children: [
      /* @__PURE__ */ o.jsx("section", { children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-5 rounded-md border border-grey-300 p-4 pb-3.5 dark:border-grey-800", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ o.jsx("span", { className: "text-xs font-semibold leading-none text-grey-700", children: "Created on" }),
          /* @__PURE__ */ o.jsx("span", { children: dp(t != null && t.created_at ? t.created_at : "") })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-end justify-between", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ o.jsx("span", { className: "text-xs font-semibold leading-none text-grey-700", children: "Performance" }),
              /* @__PURE__ */ o.jsxs("span", { children: [
                t == null ? void 0 : t.redemption_count,
                " ",
                (t == null ? void 0 : t.redemption_count) === 1 ? "redemption" : "redemptions"
              ] })
            ] }),
            (t == null ? void 0 : t.redemption_count) > 0 && (t != null && t.last_redeemed) ? /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ o.jsx("span", { className: "text-xs font-semibold leading-none text-grey-700", children: "Last redemption" }),
              /* @__PURE__ */ o.jsx("span", { children: dp(t == null ? void 0 : t.last_redeemed) })
            ] }) : null
          ] }),
          (t == null ? void 0 : t.redemption_count) > 0 ? /* @__PURE__ */ o.jsx("a", { className: "font-semibold text-green", href: Xk(t == null ? void 0 : t.id), children: "See members →" }) : null
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsxs("section", { className: "mt-4", children: [
        /* @__PURE__ */ o.jsx("h2", { className: "mb-4 text-lg", children: "General" }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ o.jsx(
            je,
            {
              error: !!n.name,
              hint: n.name || /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ o.jsx("span", { children: "Visible to members on Stripe Checkout page" }),
                /* @__PURE__ */ o.jsxs("strong", { children: [
                  /* @__PURE__ */ o.jsx("span", { className: `${m}`, children: d }),
                  " / 40"
                ] })
              ] }),
              maxLength: 40,
              placeholder: "Black Friday",
              title: "Offer name",
              value: t == null ? void 0 : t.name,
              onChange: (T) => {
                h(T.target.value.length), a({ name: T.target.value });
              },
              onKeyDown: () => e("name")
            }
          ),
          /* @__PURE__ */ o.jsx(
            je,
            {
              error: !!n.displayTitle,
              hint: n.displayTitle,
              placeholder: "Black Friday Special",
              title: "Display title",
              value: t == null ? void 0 : t.display_title,
              onChange: (T) => a({ display_title: T.target.value }),
              onKeyDown: () => e("displayTitle")
            }
          ),
          /* @__PURE__ */ o.jsx(
            Ha,
            {
              placeholder: "Take advantage of this limited-time offer.",
              title: "Display description",
              value: t == null ? void 0 : t.display_description,
              onChange: (T) => a({ display_description: T.target.value })
            }
          ),
          /* @__PURE__ */ o.jsx(
            je,
            {
              error: !!n.code,
              hint: n.code || ((t == null ? void 0 : t.code) !== "" ? /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ o.jsxs("div", { children: [
                  k,
                  /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: t == null ? void 0 : t.code })
                ] }),
                /* @__PURE__ */ o.jsx("span", {}),
                /* @__PURE__ */ o.jsx(Ye, { className: "text-xs", color: "green", label: `${l ? "Copied" : "Copy"}`, size: "sm", link: !0, onClick: y })
              ] }) : null),
              placeholder: "black-friday",
              title: "Offer code",
              value: t == null ? void 0 : t.code,
              onChange: (T) => a({ code: T.target.value }),
              onKeyDown: () => e("code")
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "mb-2", children: (t == null ? void 0 : t.status) === "active" ? /* @__PURE__ */ o.jsx(Ye, { color: "red", label: "Archive offer", link: !0, onClick: S }) : /* @__PURE__ */ o.jsx(Ye, { color: "green", label: "Reactivate offer", link: !0, onClick: S }) })
  ] });
}, X4 = ({ id: e }) => {
  const { siteData: n } = ct(), { updateRoute: t } = nt(), a = dt(), { mutateAsync: s } = Rp(), [l, A] = ue(""), { data: { offers: f = [] } = {} } = Dp(e || ""), { formState: u, saveState: d, updateForm: h, setFormState: m, handleSave: v, validate: k, errors: b, clearError: y, okProps: S } = qn({
    initialState: f[0],
    savingDelay: 500,
    onSave: async () => {
      await s(u);
    },
    onSaveError: a,
    onValidate: () => {
      const K = {};
      return u != null && u.name || (K.name = "Name is required"), u != null && u.display_title || (K.displayTitle = "Display title is required"), u != null && u.code || (K.code = "Please enter a code"), K;
    }
  });
  Te(() => {
    m(() => f[0]);
  }, [m, f]);
  const T = (K) => {
    h((_) => ({ ..._, ...K }));
  }, O = /* @__PURE__ */ o.jsx(
    K4,
    {
      clearError: y,
      errors: b,
      offer: u,
      updateOffer: T,
      validate: k
    }
  );
  Te(() => {
    const K = {
      name: (u == null ? void 0 : u.name) || "",
      code: (u == null ? void 0 : u.code) || "",
      displayTitle: (u == null ? void 0 : u.display_title) || "",
      displayDescription: (u == null ? void 0 : u.display_description) || "",
      type: (u == null ? void 0 : u.type) || "",
      cadence: (u == null ? void 0 : u.cadence) || "",
      amount: u == null ? void 0 : u.amount,
      duration: (u == null ? void 0 : u.duration) || "",
      durationInMonths: (u == null ? void 0 : u.duration_in_months) || 0,
      currency: (u == null ? void 0 : u.currency) || "",
      status: (u == null ? void 0 : u.status) || "",
      tierId: (u == null ? void 0 : u.tier.id) || ""
    }, _ = hg(K, n.url);
    A(_);
  }, [u, n]);
  const B = /* @__PURE__ */ o.jsx(
    nA,
    {
      href: l || "",
      portalParent: "offers"
    }
  );
  return f ? /* @__PURE__ */ o.jsx(
    Hs,
    {
      afterClose: () => {
        t("offers");
      },
      backDropClick: !1,
      cancelLabel: "Close",
      deviceSelector: !1,
      dirty: d === "unsaved",
      height: "full",
      okColor: S.color,
      okLabel: S.label || "Save",
      preview: B,
      previewToolbar: !1,
      sidebar: O,
      size: "lg",
      testId: "offer-update-modal",
      title: "Offer",
      width: 1140,
      onCancel: () => {
        sessionStorage.getItem("editOfferPageSource") === "offers" ? (sessionStorage.removeItem("editOfferPageSource"), t("offers")) : (sessionStorage.removeItem("editOfferPageSource"), t("offers/edit"));
      },
      onOk: async () => {
        try {
          if (await v({ force: !0 }))
            return;
        } catch (K) {
          let _;
          K instanceof Ds && K.data && K.data.errors[0] && (_ = K.data.errors[0].context || K.data.errors[0].message), Gi.remove(), _ && St({
            title: "Can't save offer",
            type: "error",
            message: "Please try again later"
          });
        }
      }
    }
  ) : null;
}, W4 = ({ route: e }) => {
  if (e === "offers/new")
    return /* @__PURE__ */ o.jsx(G4, {});
  if (e.startsWith("offers/edit/") && e.length > 12) {
    const n = e.split("/").pop();
    return /* @__PURE__ */ o.jsx(X4, { id: n || "" });
  } else if (e.startsWith("offers/success/") && e.length > 15) {
    const n = e.split("/").pop();
    return /* @__PURE__ */ o.jsx(dg, { id: n || "" });
  } else if (e === "offers/edit")
    return /* @__PURE__ */ o.jsx(Wk, {});
}, q4 = () => {
  const { route: e } = nt();
  return /* @__PURE__ */ o.jsx(W4, { route: e });
  method: "POST",
  path: () => "/files/upload/",
  body: ({ file: e }) => {
    const n = new FormData();
    return n.append("file", e), n;
  }
}), eJ = xe.create(() => {
  const { updateRoute: e } = nt(), n = xe.useModal(), [t, a] = ue(!1), [s, l] = ue({
    js: !1,
    css: !1
  }), { settings: A, config: f } = ct(), [u] = yt(A, ["pintura"]), { mutateAsync: d } = ua(), { mutateAsync: h } = $4(), m = dt();
  Te(() => {
    a(u || !1);
  }, [u]);
  const v = Ct(null), k = Ct(null), b = (S) => {
    var T, O;
    S === "js" && ((T = v.current) == null || T.click()), S === "css" && ((O = k.current) == null || O.click());
  }, y = async (S, T) => {
    var O, B;
    try {
      l((oe) => ({ ...oe, [T]: !0 }));
      const K = (B = (O = S.target) == null ? void 0 : O.files) == null ? void 0 : B[0];
      if (!K)
        return;
      const { files: _ } = await h({ file: K }), F = _[0].url, ee = [
        { key: `pintura_${T}_url`, value: F }
      ];
      await d(ee), l((oe) => ({ ...oe, [T]: !1 })), St({
        type: "success",
        title: `Pintura ${T} uploaded`
      });
    } catch (K) {
      l({ js: !1, css: !1 }), m(K);
    }
  };
  return /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        e("integrations");
      },
      cancelLabel: "",
      okColor: "black",
      okLabel: "Save",
      testId: "pintura-modal",
      title: "",
      onOk: async () => {
        n.remove(), e("integrations"), await d([
          { key: "pintura", value: t }
        ]);
      },
      children: [
        /* @__PURE__ */ o.jsx(
          Us,
          {
            detail: "Advanced image editing",
            icon: /* @__PURE__ */ o.jsx(qk, { className: "h-12 w-12" }),
            title: "Pintura"
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: "mt-7", children: [
          !f.pintura && /* @__PURE__ */ o.jsxs("div", { className: "mb-7 flex flex-col items-stretch justify-between gap-4 rounded-sm bg-grey-75 p-4 dark:bg-grey-950 md:flex-row md:p-7", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "md:basis-1/2", children: [
              /* @__PURE__ */ o.jsx("p", { className: "mb-4 font-bold", children: "Add advanced image editing to Ghost, with Pintura" }),
              /* @__PURE__ */ o.jsx("p", { className: "mb-4 text-sm", children: "Pintura is a powerful JavaScript image editor that allows you to crop, rotate, annotate and modify images directly inside Ghost." }),
              /* @__PURE__ */ o.jsx("p", { className: "text-sm", children: "Try a demo, purchase a license, and download the required CSS/JS files from pqina.nl/pintura/ to activate this feature." })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "flex grow flex-col items-end justify-between gap-2 md:basis-1/2 md:gap-0", children: [
              /* @__PURE__ */ o.jsx("img", { alt: "Pintura screenshot", src: _4 }),
              /* @__PURE__ */ o.jsx("a", { className: "-mb-1 text-sm font-bold text-green", href: "https://pqina.nl/pintura/?ref=ghost.org", rel: "noopener noreferrer", target: "_blank", children: "Find out more →" })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs(bt, { marginBottom: !1, title: "Pintura configuration", grouped: !0, children: [
            /* @__PURE__ */ o.jsx(
              ft,
              {
                checked: t,
                direction: "rtl",
                hint: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                  "Enable ",
                  /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://pqina.nl/pintura/?ref=ghost.org", rel: "noopener noreferrer", target: "_blank", children: "Pintura" }),
                  " for editing your images in Ghost"
                ] }),
                label: "Enable Pintura",
                onChange: (S) => {
                  a(S.target.checked);
                }
              }
            ),
            t && !f.pintura && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col justify-between gap-1 md:flex-row md:items-center", children: [
                /* @__PURE__ */ o.jsxs("div", { children: [
                  /* @__PURE__ */ o.jsx("div", { children: "Upload Pintura script" }),
                  /* @__PURE__ */ o.jsxs("div", { className: "text-xs text-grey-600", children: [
                    "Upload the ",
                    /* @__PURE__ */ o.jsx("code", { children: "pintura-umd.js" }),
                    " file from the Pintura package"
                  ] })
                ] }),
                /* @__PURE__ */ o.jsx("input", { ref: v, accept: ".js", type: "file", hidden: !0, onChange: async (S) => {
                  await y(S, "js");
                } }),
                /* @__PURE__ */ o.jsx(Ye, { color: "outline", disabled: s.js, label: "Upload", onClick: () => {
                  b("js");
                } })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col justify-between gap-1 md:flex-row md:items-center", children: [
                /* @__PURE__ */ o.jsxs("div", { children: [
                  /* @__PURE__ */ o.jsx("div", { children: "Upload Pintura styles" }),
                  /* @__PURE__ */ o.jsxs("div", { className: "text-xs text-grey-600", children: [
                    "Upload the ",
                    /* @__PURE__ */ o.jsx("code", { children: "pintura.css" }),
                    " file from the Pintura package"
                  ] })
                ] }),
                /* @__PURE__ */ o.jsx("input", { ref: k, accept: ".css", type: "file", hidden: !0, onChange: async (S) => {
                  await y(S, "css");
                } }),
                /* @__PURE__ */ o.jsx(Ye, { color: "outline", disabled: s.css, label: "Upload", onClick: () => {
                  b("css");
                } })
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}), tJ = ({ updateSetting: e, errors: n, setError: t }) => {
  const { siteData: a, settings: s, config: l } = ct(), [A, f] = yt(s, ["members_support_address", "support_email_address"]), u = (f == null ? void 0 : f.toString()) || Eu((A == null ? void 0 : A.toString()) || "", a, l), d = Vk(a, l), [h, m] = ue(u), v = (k) => {
    let b = k.target.value;
    if (b)
      t("members_support_address", "");
    else {
      t("members_support_address", "Please enter an email address");
      return;
    }
    let y = d && b === `noreply@${d}` ? "noreply" : b;
    e("members_support_address", y), m(Eu(y, a, l));
  };
  return Te(() => {
    m(u);
  }, [u]), /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsx(bt, { children: /* @__PURE__ */ o.jsx(
    je,
    {
      error: !!n.members_support_address,
      hint: n.members_support_address,
      title: "Support email address",
      value: h,
      onBlur: v,
      onChange: (k) => m(k.target.value)
    }
  ) }) });
}, nJ = (e) => /* @__PURE__ */ it("svg", { width: 21, height: 24, viewBox: "0 0 21 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ it("title", null, "portal-icon-1"), /* @__PURE__ */ it("path", { d: "M10.533 11.267a5.135 5.135 0 1 0-.001-10.27 5.135 5.135 0 0 0 .001 10.27zM1 23a9.531 9.531 0 0 1 16.274-6.741 9.532 9.532 0 0 1 2.793 6.74", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), rJ = (e) => /* @__PURE__ */ it("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ it("title", null, "portal-icon-2"), /* @__PURE__ */ it("path", { stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", d: "M12.5 2v20M2 12.5h20", fill: "none" })), aJ = (e) => /* @__PURE__ */ it("svg", { width: 25, height: 24, viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ it("title", null, "portal-icon-3"), /* @__PURE__ */ it("path", { d: "M23.5 6v14.25a2.25 2.25 0 1 1-4.5 0V3c0-.398-.158-.78-.44-1.06a1.494 1.494 0 0 0-1.06-.44h-15c-.398 0-.78.158-1.06.44C1.157 2.22 1 2.601 1 3v17.25a2.25 2.25 0 0 0 2.25 2.25h18M4.75 15h10.5m-10.5 3h6", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ it("path", { d: "M14.5 5.25h-9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75z", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), sJ = (e) => /* @__PURE__ */ it("svg", { width: 24, height: 18, viewBox: "0 0 24 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ it("title", null, "portal-icon-4"), /* @__PURE__ */ it("path", { d: "M21.75 1.5H2.25A1.5 1.5 0 0 0 .75 3v12a1.5 1.5 0 0 0 1.5 1.5h19.5a1.5 1.5 0 0 0 1.5-1.5V3a1.5 1.5 0 0 0-1.5-1.5zm-6.063 5.475L19.5 10.5M8.313 6.975 4.5 10.5", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ it("path", { d: "m22.88 2.014-9.513 6.56a2.41 2.41 0 0 1-2.734 0L1.12 2.014", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), iJ = (e) => /* @__PURE__ */ it("svg", { width: 26, height: 26, viewBox: "0 0 26 26", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ it("title", null, "portal-icon-5"), /* @__PURE__ */ it("path", { d: "M17.903 12.016a5.007 5.007 0 0 0-3.031-3.654m-3.835.038a5.002 5.002 0 0 0-2.879 5.85m2.282 3.046A4.975 4.975 0 0 0 13 18a4.99 4.99 0 0 0 4.12-2.167m-1.949 5.387a8.504 8.504 0 0 0 5.756-11.295m-2.316-3.31A8.474 8.474 0 0 0 13 4.5a8.461 8.461 0 0 0-5.608 2.113m-2.28 3.213a8.503 8.503 0 0 0 5.914 11.444", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ it("path", { d: "M8.924 24.29c1.273.46 2.645.71 4.076.71 5.52 0 10.17-3.727 11.57-8.803M6.712 2.777A11.994 11.994 0 0 0 1 13c0 3.545 1.537 6.731 3.982 8.928m19.867-10.839C23.933 5.369 18.977 1 13 1c-.69 0-1.367.058-2.025.17", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" })), bu = [
  {
    Component: nJ,
    value: "icon-1"
  },
  {
    Component: rJ,
    value: "icon-2"
  },
  {
    Component: aJ,
    value: "icon-3"
  },
  {
    Component: sJ,
    value: "icon-4"
  },
  {
    Component: iJ,
    value: "icon-5"
  }
], oJ = ({ localSettings: e, updateSetting: n }) => {
  var y, S;
  const { mutateAsync: t } = Qs(), a = dt(), [s, l, A, f] = yt(e, ["portal_button", "portal_button_style", "portal_button_icon", "portal_button_signup_text"]), u = A || bu[0].value, d = bu.map(({ value: T }) => T).includes(u), [h, m] = ue(d ? void 0 : u), v = async (T) => {
    try {
      const O = Or(await t({ file: T }));
      n("portal_button_icon", O), m(O);
    } catch (O) {
      const B = O;
      B.response.status === 415 && (B.message = "Unsupported file type"), a(B);
    }
  }, k = () => {
    n("portal_button_icon", null), m(void 0);
  }, b = [
    { value: "icon-and-text", label: "Icon and text" },
    { value: "icon-only", label: "Icon only" },
    { value: "text-only", label: "Text only" }
  ];
  return /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsxs(bt, { children: [
    /* @__PURE__ */ o.jsx(
      ft,
      {
        checked: !!s,
        label: "Show portal button",
        labelStyle: "heading",
        onChange: (T) => n("portal_button", T.target.checked)
      }
    ),
    /* @__PURE__ */ o.jsx(
      En,
      {
        options: b,
        selectedOption: b.find((T) => T.value === l),
        title: "Portal button style",
        onSelect: (T) => n("portal_button_style", (T == null ? void 0 : T.value) || null)
      }
    ),
    ((y = l == null ? void 0 : l.toString()) == null ? void 0 : y.includes("icon")) && /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ o.jsx(st, { level: 6, grey: !0, children: "Icon" }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
        bu.map((T) => /* @__PURE__ */ o.jsx("button", { className: qe("border p-3", u === T.value ? "border-green" : "border-transparent"), type: "button", onClick: () => n("portal_button_icon", T.value), children: /* @__PURE__ */ o.jsx(T.Component, { className: `h-5 w-5 ${u === T.value ? "text-green" : "text-black opacity-70 transition-all hover:opacity-100 dark:text-white"}` }) })),
        /* @__PURE__ */ o.jsx("div", { className: qe("relative w-[46px] border", u === h ? "border-green" : "border-transparent"), children: /* @__PURE__ */ o.jsx(
          Hr,
          {
            deleteButtonClassName: "invisible absolute -right-2 -top-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.75)] text-white hover:bg-black group-hover:!visible",
            deleteButtonContent: /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-white", name: "trash", size: "sm" }),
            height: "46px",
            id: "test",
            imageClassName: "cursor-pointer",
            imageURL: h,
            width: "46px",
            deleteButtonUnstyled: !0,
            onDelete: k,
            onImageClick: () => h && n("portal_button_icon", h),
            onUpload: v,
            children: /* @__PURE__ */ o.jsx(Qt, { className: "dark:text-white", name: "upload", size: "md" })
          }
        ) })
      ] })
    ] }),
    ((S = l == null ? void 0 : l.toString()) == null ? void 0 : S.includes("text")) && /* @__PURE__ */ o.jsx(
      je,
      {
        title: "Signup button text",
        value: f,
        onChange: (T) => n("portal_button_signup_text", T.target.value)
      }
    )
  ] }) });
}, dr = ({ name: e, value: n }) => {
  const t = zu();
  return /* @__PURE__ */ o.jsx(
    fa,
    {
      action: /* @__PURE__ */ o.jsx(Ye, { color: "black", label: "Copy", link: !0, onClick: (a) => {
        navigator.clipboard.writeText(n);
        const s = a == null ? void 0 : a.target;
        s.innerText = "Copied", setTimeout(() => {
          s.innerText = "Copy";
        }, 1e3);
      } }),
      separator: !0,
      children: /* @__PURE__ */ o.jsxs("div", { className: "flex w-full grow flex-col py-3 lg:flex-row lg:items-center lg:gap-2", children: [
        /* @__PURE__ */ o.jsxs("label", { className: "inline-block whitespace-nowrap lg:w-[180px] lg:min-w-[180px]", htmlFor: t, children: [
          e,
          ":"
        ] }),
        /* @__PURE__ */ o.jsx(je, { className: "border-b-500 grow bg-transparent py-1 text-grey-700 lg:p-1", id: t, value: n, disabled: !0, unstyled: !0 })
      ] })
    }
  );
}, lJ = () => {
  const [e, n] = ue(!1), [t, a] = ue(""), { siteData: s } = ct(), { data: { tiers: l } = {} } = $i(), A = Zu(l || []), f = () => {
    n(!e);
  };
  Te(() => {
    A != null && A.length && !t && a(A[0].id);
  }, [A, t]);
  const u = A == null ? void 0 : A.map((h) => ({
    label: h.name,
    value: h.id
  })), d = Qr(s);
  return /* @__PURE__ */ o.jsxs(Vu, { className: "max-w-[920px] text-base text-black dark:text-white", heading: "Links", children: [
    /* @__PURE__ */ o.jsxs("p", { className: "-mt-6 mb-16", children: [
      "Use these ",
      e ? "data attributes" : "links",
      " in your theme to show pages of Portal."
    ] }),
    /* @__PURE__ */ o.jsxs(Br, { actions: /* @__PURE__ */ o.jsx(Ye, { color: "green", label: e ? "Links" : "Data attributes", link: !0, onClick: f }), title: "Generic", titleSize: "lg", children: [
      /* @__PURE__ */ o.jsx(dr, { name: "Default", value: e ? "data-portal" : `${d}#/portal` }),
      /* @__PURE__ */ o.jsx(dr, { name: "Sign in", value: e ? 'data-portal="signin"' : `${d}#/portal/signin` }),
      /* @__PURE__ */ o.jsx(dr, { name: "Sign up", value: e ? 'data-portal="signup"' : `${d}#/portal/signup` })
    ] }),
    /* @__PURE__ */ o.jsxs(Br, { className: "mt-14", title: "Tiers", titleSize: "lg", children: [
      /* @__PURE__ */ o.jsx(
        fa,
        {
          hideActions: !0,
          separator: !0,
          children: /* @__PURE__ */ o.jsxs("div", { className: "flex w-full items-center gap-2 py-2", children: [
            /* @__PURE__ */ o.jsx("span", { className: "inline-block w-[180px] min-w-[180px] shrink-0", children: "Tier:" }),
            /* @__PURE__ */ o.jsx(
              En,
              {
                options: u,
                selectedOption: u.find((h) => h.value === t),
                onSelect: (h) => {
                  h && a(h == null ? void 0 : h.value);
                }
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ o.jsx(dr, { name: "Signup / Monthly", value: e ? `data-portal="signup/${t}/monthly"` : `${d}#/portal/signup/${t}/monthly` }),
      /* @__PURE__ */ o.jsx(dr, { name: "Signup / Yearly", value: e ? `data-portal="signup/${t}/yearly"` : `${d}#/portal/signup/${t}/yearly` }),
      /* @__PURE__ */ o.jsx(dr, { name: "Signup / Free", value: e ? 'data-portal="signup/free"' : `${d}#/portal/signup/free` })
    ] }),
    /* @__PURE__ */ o.jsxs(Br, { className: "mt-14", title: "Account", titleSize: "lg", children: [
      /* @__PURE__ */ o.jsx(dr, { name: "Account", value: e ? 'data-portal="account"' : `${d}#/portal/account` }),
      /* @__PURE__ */ o.jsx(dr, { name: "Account / Plans", value: e ? 'data-portal="account/plans"' : `${d}#/portal/account/plans` }),
      /* @__PURE__ */ o.jsx(dr, { name: "Account / Profile", value: e ? 'data-portal="account/profile"' : `${d}#/portal/account/profile` }),
      /* @__PURE__ */ o.jsx(dr, { name: "Account / Newsletters", value: e ? 'data-portal="account/newsletters"' : `${d}#/portal/account/newsletters` })
    ] })
  ] });
}, AJ = ({ settings: e, config: n, tiers: t, siteData: a, selectedTab: s }) => {
  if (!(a != null && a.url))
    return null;
  let l = t.filter((y) => y.visibility === "public" && y.type === "paid").map((y) => y.id);
  const A = a.url.replace(/\/$/, ""), f = "/?v=modal-portal-settings#/portal/preview", u = JSON.parse(zn(e, "portal_plans") || ""), h = zn(e, "members_signup_access") === "all" && (!Bi(e, n) || u.includes("free")), m = new URLSearchParams();
  m.append("button", zn(e, "portal_button") ? "true" : "false"), m.append("name", zn(e, "portal_name") ? "true" : "false"), m.append("isFree", u.includes("free") ? "true" : "false"), m.append("isMonthly", Bi(e, n) && u.includes("monthly") ? "true" : "false"), m.append("isYearly", Bi(e, n) && u.includes("yearly") ? "true" : "false"), m.append("page", s === "account" ? "accountHome" : "signup"), m.append("buttonIcon", encodeURIComponent(zn(e, "portal_button_icon") || "icon-1")), m.append("signupButtonText", encodeURIComponent(zn(e, "portal_button_signup_text") || "")), m.append("membersSignupAccess", zn(e, "members_signup_access") || "all"), m.append("allowSelfSignup", h ? "true" : "false"), m.append("signupTermsHtml", zn(e, "portal_signup_terms_html") || ""), m.append("signupCheckboxRequired", zn(e, "portal_signup_checkbox_required") ? "true" : "false"), m.append("portalProducts", l.join(","));
  const v = zn(e, "portal_default_plan");
  v && m.append("portalDefaultPlan", v), u && u.length && m.append("portalPrices", encodeURIComponent(u.join(",")));
  const k = zn(e, "accent_color");
  k != null && m.append("accentColor", encodeURIComponent(k));
  const b = zn(e, "portal_button_style");
  return b && m.append("buttonStyle", encodeURIComponent(b)), m.append("disableBackground", "false"), `${A}${f}?${m.toString()}`;
}, cJ = ({
  selectedTab: e = "signup",
  localSettings: n,
  localTiers: t
}) => {
  const {
    siteData: a,
    config: s
  } = ct(), l = AJ({
    settings: n,
    tiers: t,
    selectedTab: e,
    siteData: a,
    config: s
  });
  let A = /* @__PURE__ */ o.jsx(o.Fragment, {});
  switch (e) {
    case "account":
      A = /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(nA, { href: l || "", portalParent: "preview", selectedTab: e }) });
      break;
    case "links":
      A = /* @__PURE__ */ o.jsx(lJ, {});
      break;
    default:
      A = /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(nA, { href: l || "", portalParent: "preview", selectedTab: e }) });
      break;
  }
  return A;
}, uJ = ({ localSettings: e, updateSetting: n, localTiers: t, updateTier: a, errors: s, setError: l }) => {
  const { config: A } = ct(), f = wr("portalImprovements"), [u, d, h, m, v, k] = yt(
    e,
    ["members_signup_access", "portal_name", "portal_signup_terms_html", "portal_signup_checkbox_required", "portal_plans", "portal_default_plan"]
  ), b = JSON.parse((v == null ? void 0 : v.toString()) || "[]"), y = 115, S = On(() => {
    const re = document.createElement("div");
    return re.innerHTML = (h == null ? void 0 : h.toString()) || "", re.innerText.length;
  }, [h]), T = sn((re, $) => {
    l(re, $);
  }, []);
  Te(() => {
    S > y ? T("portal_signup_terms_html", "Signup notice is too long") : T("portal_signup_terms_html", void 0);
  }, [S, T]);
  const O = (re) => {
    const $ = b.indexOf(re);
    $ === -1 ? b.push(re) : b.splice($, 1), n("portal_plans", JSON.stringify(b)), f && (k === "yearly" ? !b.includes("yearly") && b.includes("monthly") && n("portal_default_plan", "monthly") : k === "monthly" && (b.includes("monthly") || n("portal_default_plan", "yearly")));
  }, B = u !== "all", K = Bi(e, A);
  let _ = [];
  t && t.forEach((re) => {
    re.type === "free" && _.push({
      checked: b.includes("free"),
      disabled: B,
      label: f ? re.name : "Free",
      value: "free",
      onChange: ($) => {
        b.includes("free") && !$ && b.splice(b.indexOf("free"), 1), !b.includes("free") && $ && b.push("free"), n("portal_plans", JSON.stringify(b)), a({ ...re, visibility: $ ? "public" : "none" });
      }
    });
  });
  const F = Zu(t) || [], ee = [
    { value: "yearly", label: "Yearly" },
    { value: "monthly", label: "Monthly" }
  ];
  K && F.length > 0 && F.forEach((re) => {
    _.push({
      checked: re.visibility === "public",
      label: re.name,
      value: re.id,
      onChange: ($) => a({ ...re, visibility: $ ? "public" : "none" })
    });
  });
  const oe = K && F.length > 0 && F.some((re) => re.visibility === "public");
  return /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsxs(bt, { children: [
    /* @__PURE__ */ o.jsx(
      ft,
      {
        checked: !!d,
        disabled: B,
        label: "Display name in signup form",
        labelStyle: "heading",
        onChange: (re) => n("portal_name", re.target.checked)
      }
    ),
    /* @__PURE__ */ o.jsx(
      Su,
      {
        checkboxes: _,
        title: "Tiers available at signup"
      }
    ),
    oe && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        Su,
        {
          checkboxes: [
            {
              checked: b.includes("monthly"),
              disabled: B,
              label: "Monthly",
              value: "monthly",
              onChange: () => {
                O("monthly");
              }
            },
            {
              checked: b.includes("yearly"),
              disabled: B,
              label: "Yearly",
              value: "yearly",
              onChange: () => {
                O("yearly");
              }
            }
          ],
          title: "Prices available at signup"
        }
      ),
      f && b.includes("yearly") && b.includes("monthly") && /* @__PURE__ */ o.jsx(
        En,
        {
          options: ee,
          selectedOption: ee.find((re) => re.value === k),
          title: "Default price at signup",
          onSelect: (re) => {
            n("portal_default_plan", (re == null ? void 0 : re.value) ?? "yearly");
          }
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(
      Wu,
      {
        error: !!s.portal_signup_terms_html,
        hint: s.portal_signup_terms_html || /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          "Recommended: ",
          /* @__PURE__ */ o.jsx("strong", { children: "115" }),
          " characters. You've used ",
          /* @__PURE__ */ o.jsx("strong", { className: "text-green", children: S })
        ] }),
        nodes: "MINIMAL_NODES",
        placeholder: "By signing up, I agree to receive emails from ...",
        title: "Display notice at signup",
        value: h == null ? void 0 : h.toString(),
        onChange: (re) => n("portal_signup_terms_html", re)
      }
    ),
    (h == null ? void 0 : h.toString()) && /* @__PURE__ */ o.jsx(
      ft,
      {
        checked: !!m,
        disabled: B,
        label: "Require agreement",
        labelStyle: "heading",
        onChange: (re) => n("portal_signup_checkbox_required", re.target.checked)
      }
    )
  ] }) });
}, fJ = "SettingsResponseType", dJ = Vn({
  path: () => "/settings/verifications",
  method: "PUT",
  body: ({ token: e }) => ({ token: e }),
  updateQueries: {
    dataType: fJ,
    emberUpdateType: "createOrUpdate",
    update: (e) => ({
      ...e,
      settings: e.settings
    })
  }
}), hJ = ({ localSettings: e, updateSetting: n, localTiers: t, updateTier: a, errors: s, setError: l }) => {
  const [A, f] = ue("signupOptions"), u = [
    {
      id: "signupOptions",
      title: "Signup options",
      contents: /* @__PURE__ */ o.jsx(
        uJ,
        {
          errors: s,
          localSettings: e,
          localTiers: t,
          setError: l,
          updateSetting: n,
          updateTier: a
        }
      )
    },
    {
      id: "lookAndFeel",
      title: "Look & feel",
      contents: /* @__PURE__ */ o.jsx(oJ, { localSettings: e, updateSetting: n })
    },
    {
      id: "accountPage",
      title: "Account page",
      contents: /* @__PURE__ */ o.jsx(tJ, { errors: s, setError: l, updateSetting: n })
    }
  ], d = (h) => {
    f(h);
  };
  return /* @__PURE__ */ o.jsx("div", { className: "pt-4", children: /* @__PURE__ */ o.jsx(Oa, { selectedTab: A, tabs: u, onTabChange: d }) });
}, pJ = () => {
  const { updateRoute: e } = nt(), [n, t] = ue("signup"), a = dt(), { settings: s, siteData: l, config: A } = ct(), { mutateAsync: f } = ua(), { data: { tiers: u } = {} } = $i(), { mutateAsync: d } = Gu(), { mutateAsync: h } = dJ(), { getParam: m } = Vi(), v = m("verifyEmail");
  Te(() => {
    v && (async ({ token: N }) => {
      try {
        let { settings: Y } = await h({ token: N });
        const [W] = yt(Y, ["members_support_address"]);
        xe.show(Bt, {
          title: "Support address verified",
          prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            "Your support email address has been changed to ",
            /* @__PURE__ */ o.jsx("strong", { children: W }),
            "."
          ] }),
          okLabel: "Close",
          cancelLabel: "",
          onOk: (H) => H == null ? void 0 : H.remove()
        });
      } catch (Y) {
        let W = "There was an error verifying your email address. Please try again.";
        (Y == null ? void 0 : Y.message) === "Token expired" && (W = "Verification link has expired."), xe.show(Bt, {
          title: "Error verifying support address",
          prompt: W,
          okLabel: "Close",
          cancelLabel: "",
          onOk: (H) => H == null ? void 0 : H.remove()
        }), a(Y, { withToast: !1 });
      }
    })({ token: v });
  }, [a, v, h]);
  const { formState: k, setFormState: b, saveState: y, handleSave: S, updateForm: T, okProps: O } = qn({
    initialState: {
      settings: s,
      tiers: u || []
    },
    savingDelay: 500,
    onSave: async () => {
      var W, H, G, pe;
      await Promise.all(k.tiers.filter(({ dirty: ke }) => ke).map((ke) => d(ke))), b((ke) => ({ ...ke, tiers: k.tiers.map((X) => ({ ...X, dirty: !1 })) }));
      const Z = k.settings.filter((ke) => ke.dirty);
      if (!Z.length)
        return;
      const { meta: N, settings: Y } = await f(Z);
      if (b((ke) => ({ ...ke, settings: k.settings.map((X) => ({ ...X, dirty: !1 })) })), N != null && N.sent_email_verification) {
        const ke = (W = k.settings.find((Ie) => Ie.key === "members_support_address")) == null ? void 0 : W.value, X = ((H = Y.find((Ie) => Ie.key === "support_email_address")) == null ? void 0 : H.value) || Eu(((pe = (G = Y.find((Ie) => Ie.key === "members_support_address")) == null ? void 0 : G.value) == null ? void 0 : pe.toString()) || "noreply", l, A);
        xe.show(Bt, {
          title: "Confirm email address",
          prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            "We've sent a confirmation email to ",
            /* @__PURE__ */ o.jsx("strong", { children: ke }),
            ". Until verified, your support email address will remain ",
            X,
            "."
          ] }),
          okLabel: "Close",
          cancelLabel: "",
          onOk: (Ie) => Ie == null ? void 0 : Ie.remove()
        });
      }
    },
    onSaveError: a
  });
  Te(() => {
    !k.tiers.length && (u != null && u.length) && b((Z) => ({ ...Z, tiers: u }));
  }, [u, k.tiers, b]);
  const [B, K] = ue({}), _ = (Z, N) => {
    T((Y) => ({
      ...Y,
      settings: Y.settings.map((W) => W.key === Z ? { ...W, value: N, dirty: !0 } : W)
    }));
  }, F = (Z, N) => {
    K((Y) => ({
      ...Y,
      [Z]: N
    }));
  }, ee = (Z) => {
    T((N) => ({
      ...N,
      tiers: N.tiers.map((Y) => Y.id === Z.id ? { ...Z, dirty: !0 } : Y)
    }));
  }, oe = (Z) => {
    t(Z);
  }, re = /* @__PURE__ */ o.jsx(
    hJ,
    {
      errors: B,
      localSettings: k.settings,
      localTiers: k.tiers,
      setError: F,
      updateSetting: _,
      updateTier: ee
    }
  ), $ = /* @__PURE__ */ o.jsx(
    cJ,
    {
      localSettings: k.settings,
      localTiers: k.tiers,
      selectedTab: n
    }
  );
  let ae = [
    { id: "signup", title: "Signup" },
    { id: "account", title: "Account page" },
    { id: "links", title: "Links" }
  ];
  return /* @__PURE__ */ o.jsx(
    Hs,
    {
      afterClose: () => {
        e("portal");
      },
      buttonsDisabled: O.disabled,
      cancelLabel: "Close",
      deviceSelector: !1,
      dirty: y === "unsaved",
      okColor: O.color,
      okLabel: O.label || "Save",
      preview: $,
      previewBgColor: n === "links" ? "white" : "greygradient",
      previewToolbarTabs: ae,
      selectedURL: n,
      sidebar: re,
      testId: "portal-modal",
      title: "Portal",
      onOk: async () => {
        Object.values(B).filter(Boolean).length || await S({ force: !0 });
      },
      onSelectURL: oe
    }
  );
}, mJ = xe.create(pJ), gJ = xe.create(() => {
  const { updateRoute: e } = nt(), n = xe.useModal(), { localSettings: t, updateSetting: a, handleSave: s, validate: l, errors: A, clearError: f } = Ba({
    onValidate: () => {
      const v = {};
      return u && !Nr.isURL(u, { require_protocol: !0 }) && (v.slackUrl = "The URL must be in a format like https://hooks.slack.com/services/<your personal key>"), v;
    }
  }), [u, d] = yt(t, ["slack_url", "slack_username"]), { mutateAsync: h } = _k(), m = async () => {
    Gi.remove(), await s() && (await h(null), St({
      title: "Check your Slack channel for the test message",
      type: "info"
    }));
  };
  return /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        e("integrations");
      },
      dirty: t.some((v) => v.dirty),
      okColor: "black",
      okLabel: "Save & close",
      testId: "slack-modal",
      title: "",
      onOk: async () => {
        Gi.remove(), await s() && (n.remove(), e("integrations"));
      },
      children: [
        /* @__PURE__ */ o.jsx(
          Us,
          {
            detail: "A messaging app for teams",
            icon: /* @__PURE__ */ o.jsx($k, { className: "h-14 w-14" }),
            title: "Slack"
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsxs(bt, { marginBottom: !1, title: "Slack configuration", grouped: !0, children: [
          /* @__PURE__ */ o.jsx(
            je,
            {
              error: !!A.slackUrl,
              hint: A.slackUrl || /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                "Automatically send newly published posts to a channel in Slack or any Slack-compatible service like Discord or Mattermost. Set up a new incoming webhook ",
                /* @__PURE__ */ o.jsx("a", { href: "https://my.slack.com/apps/new/A0F7XDUAZ-incoming-webhooks", children: "here" }),
                ", and grab the URL."
              ] }),
              placeholder: "https://hooks.slack.com/services/...",
              title: "Webhook URL",
              value: u,
              onBlur: l,
              onChange: (v) => a("slack_url", v.target.value),
              onKeyDown: () => f("slackUrl")
            }
          ),
          /* @__PURE__ */ o.jsxs("div", { className: "flex w-full flex-col gap-2 md:flex-row md:items-center", children: [
            /* @__PURE__ */ o.jsx(
              je,
              {
                containerClassName: "flex-grow",
                hint: "The username to display messages from",
                title: "Username",
                value: d,
                onChange: (v) => a("slack_username", v.target.value)
              }
            ),
            /* @__PURE__ */ o.jsx(Ye, { color: "outline", label: "Send test notification", onClick: m })
          ] })
        ] }) })
      ]
    }
  );
  /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ o.jsx(st, { level: 3, children: "Getting paid" }),
    /* @__PURE__ */ o.jsx(kJ, {})
  ] }),
  /* @__PURE__ */ o.jsxs("div", { className: "mb-7 mt-6", children: [
    "Stripe is our exclusive direct payments partner. Ghost collects ",
    /* @__PURE__ */ o.jsx("strong", { children: "no fees" }),
    " on any payments! If you don’t have a Stripe account yet, you can ",
    /* @__PURE__ */ o.jsx("a", { className: "underline", href: "https://stripe.com", rel: "noopener noreferrer", target: "_blank", children: "sign up here" }),
    "."
  ] }),
  /* @__PURE__ */ o.jsx(jp, { label: /* @__PURE__ */ o.jsx(o.Fragment, { children: "I have a Stripe account, let's go →" }), onClick: e })
] }), EJ = () => {
  const [e, n] = ue(!1), [t, a] = ue(""), [s, l] = ue(!1), [A, f] = ue(""), { refetch: u } = $i({
    searchParams: { filter: "type:paid+active:true" },
    enabled: !1
  }), { mutateAsync: d } = Gu(), { mutateAsync: h } = ua(), m = dt(), v = (T) => {
    a(T.target.value), n(!!T.target.value);
  }, k = async () => {
    var B, K;
    const { data: T } = await u(), O = T == null ? void 0 : T.pages[0].tiers[0];
    if (O) {
      O.monthly_price = 500, O.yearly_price = 5e3, O.currency = "USD";
      let _ = 0;
      for (; _ < bJ; ) {
        await new Promise((F) => {
          setTimeout(F, Pu);
        });
        try {
          await d(O);
          break;
        } catch (F) {
          if (F instanceof Ds && ((K = (B = F.data) == null ? void 0 : B.errors) == null ? void 0 : K[0].code) === "STRIPE_NOT_CONFIGURED") {
            _ += Pu;
            continue;
          } else {
            m(F);
            return;
          }
        }
      }
    }
  }, b = async () => {
    var T;
    if (f(""), t)
      try {
        await h([
          { key: "stripe_connect_integration_token", value: t }
        ]), await k(), await h([
          { key: "portal_plans", value: JSON.stringify(["free", "monthly", "yearly"]) }
        ]);
      } catch (O) {
        if (O instanceof Ds && ((T = O.data) != null && T.errors)) {
          f("Invalid secure key");
          return;
        } else {
          m(O);
          return;
        }
      }
    else
      f("Please enter a secure key");
  }, { apiRoot: y } = Cs(), S = `${y}/members/stripe_connect?mode=${s ? "test" : "live"}`;
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ o.jsx(st, { level: 3, children: "Connect with Stripe" }),
      /* @__PURE__ */ o.jsx(
        ft,
        {
          direction: "rtl",
          label: "Test mode",
          labelClasses: `text-sm translate-y-[1px] ${s ? "text-[#EC6803]" : "text-grey-800"}`,
          toggleBg: "stripetest",
          onChange: (T) => l(T.target.checked)
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs(st, { level: 6, grey: !0, children: [
      "Step 1 — ",
      /* @__PURE__ */ o.jsx("span", { className: "text-black dark:text-white", children: "Generate secure key" })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "mb-4 mt-2", children: [
      "Click on the ",
      /* @__PURE__ */ o.jsx("strong", { children: "“Connect with Stripe”" }),
      " button to generate a secure key that connects your Ghost site with Stripe."
    ] }),
    /* @__PURE__ */ o.jsx(jp, { href: S, tag: "a", target: "_blank" }),
    /* @__PURE__ */ o.jsxs(st, { className: "mb-2 mt-8", level: 6, grey: !0, children: [
      "Step 2 — ",
      /* @__PURE__ */ o.jsx("span", { className: "text-black dark:text-white", children: "Paste secure key" })
    ] }),
    /* @__PURE__ */ o.jsx(Ha, { clearBg: !1, error: !!A, hint: A || void 0, placeholder: "Paste your secure key here", onChange: v }),
    e && /* @__PURE__ */ o.jsx(Ye, { className: "mt-5", color: "green", label: "Save Stripe settings", onClick: b })
  ] });
}, MJ = ({ onClose: e }) => {
  const { settings: n } = ct(), [t, a] = yt(n, ["stripe_connect_display_name", "stripe_connect_livemode"]), { refetch: s, isFetching: l } = _u({
    searchParams: { filter: "status:paid", limit: "0" },
    enabled: !1
  }), { mutateAsync: A } = eb(), f = dt(), u = async () => {
    var m;
    const { data: d } = await s(), h = !!((m = d == null ? void 0 : d.meta) != null && m.pagination.total);
    xe.show(Bt, {
      title: "Disconnect Stripe",
      prompt: h ? "Cannot disconnect while there are members with active Stripe subscriptions." : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "You‘re about to disconnect your Stripe account ",
        t,
        "from this site. This will automatically turn off paid memberships on this site."
      ] }),
      okLabel: h ? "" : "Disconnect",
      onOk: async (v) => {
        try {
          await A(null), v == null || v.remove(), e == null || e();
        } catch (k) {
          f(k);
        }
      }
    });
  };
  return /* @__PURE__ */ o.jsxs("section", { children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ o.jsx(Ye, { color: "red", disabled: l, icon: "link-broken", iconColorClass: "text-red", label: "Disconnect", link: !0, onClick: u }),
      /* @__PURE__ */ o.jsx(Ye, { icon: "close", iconColorClass: "dark:text-white", label: "Close", size: "sm", hideLabel: !0, link: !0, onClick: e })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "my-20 flex flex-col items-center", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "relative h-20 w-[200px]", children: [
        /* @__PURE__ */ o.jsx("img", { alt: "Ghost Logo", className: "absolute left-10 h-16 w-16", src: wJ }),
        /* @__PURE__ */ o.jsx("img", { alt: "Stripe Logo", className: "absolute right-10 h-16 w-16 rounded-2xl shadow-[-1.5px_0_0_1.5px_#fff] dark:shadow-[-1.5px_0_0_1.5px_black]", src: xJ })
      ] }),
      /* @__PURE__ */ o.jsxs(st, { className: "text-center", level: 3, children: [
        "You are connected with Stripe!",
        a ? null : " (Test mode)"
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "mt-1", children: [
        "Connected to ",
        /* @__PURE__ */ o.jsx("strong", { children: t || "Test mode" })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ o.jsx(st, { level: 6, children: "Read next" }),
      /* @__PURE__ */ o.jsxs("a", { className: "w-100 mt-5 flex flex-col items-stretch justify-between rounded-sm border border-grey-200 transition-all hover:border-grey-400 dark:border-grey-900 md:flex-row", href: "https://ghost.org/resources/managing-your-stripe-account/?ref=admin", rel: "noopener noreferrer", target: "_blank", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "order-2 p-4 md:order-1", children: [
          /* @__PURE__ */ o.jsx("div", { className: "font-bold", children: "How to setup and manage your Stripe account" }),
          /* @__PURE__ */ o.jsx("div", { className: "mt-1 text-sm text-grey-800 dark:text-grey-500", children: "Learn how to configure your Stripe account to work with Ghost, from custom branding to payment receipt emails." }),
          /* @__PURE__ */ o.jsxs("div", { className: "mt-3 flex items-center gap-1 text-sm text-grey-800 dark:text-grey-500", children: [
            /* @__PURE__ */ o.jsx("img", { alt: "Ghost Logo", className: "h-4 w-4", src: tb }),
            /* @__PURE__ */ o.jsx("strong", { children: "Ghost Resources" }),
            /* @__PURE__ */ o.jsx("span", { children: "·" }),
            /* @__PURE__ */ o.jsx("span", { children: "by Kym Ellis" })
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "order-1 hidden w-[200px] shrink-0 items-center justify-center overflow-hidden md:!visible md:order-2 md:!flex", children: /* @__PURE__ */ o.jsx("img", { alt: "Bookmark Thumb", className: "min-h-full min-w-full shrink-0", src: vJ }) })
      ] })
    ] })
  ] });
}, SJ = ({ onClose: e }) => {
  const { localSettings: n, updateSetting: t, handleSave: a, saveState: s } = Ba(), [l, A] = yt(n, ["stripe_publishable_key", "stripe_secret_key"]), f = async () => {
    try {
      nb.remove(), await a(), e();
    } catch (u) {
      if (u instanceof Ds) {
        St({
          title: "Failed to save settings",
          type: "error",
          message: "Check you copied both keys correctly"
        });
        return;
      }
      throw u;
    }
  };
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx(st, { level: 3, children: "Connect Stripe" }),
    /* @__PURE__ */ o.jsxs(bt, { marginBottom: !1, marginTop: !0, children: [
      /* @__PURE__ */ o.jsx(je, { title: "Publishable key", value: l == null ? void 0 : l.toString(), onChange: (u) => t("stripe_publishable_key", u.target.value) }),
      /* @__PURE__ */ o.jsx(je, { title: "Secure key", value: A == null ? void 0 : A.toString(), onChange: (u) => t("stripe_secret_key", u.target.value) }),
      /* @__PURE__ */ o.jsx(Ye, { className: "mt-5", color: "green", disabled: s === "saving", label: "Save Stripe settings", onClick: f })
    ] })
  ] });
}, IJ = () => {
  const { config: e, settings: n } = ct(), t = zn(n, "stripe_connect_account_id"), { updateRoute: a } = nt(), [s, l] = ue("start"), A = Sn(), f = () => {
    l("connect");
  }, u = () => {
    A.remove(), a("tiers");
  };
  let d;
  return e != null && e.stripeDirect || // Still show Stripe Direct to allow disabling the keys if the config was turned off but stripe direct is still set up
  Bi(n || [], e || {}) && !t ? d = /* @__PURE__ */ o.jsx(SJ, { onClose: u }) : t ? d = /* @__PURE__ */ o.jsx(MJ, { onClose: u }) : s === "start" ? d = /* @__PURE__ */ o.jsx(yJ, { onNext: f }) : d = /* @__PURE__ */ o.jsx(EJ, {}), /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        a("tiers");
      },
      cancelLabel: "",
      footer: /* @__PURE__ */ o.jsx("div", { className: "mt-8" }),
      testId: "stripe-modal",
      title: "",
      width: t ? 740 : 520,
      hideXOnMobile: !0,
      children: d
    }
  );
}, JJ = xe.create(IJ), TJ = ({ tier: e }) => {
  var N;
  const n = (e == null ? void 0 : e.type) === "free", t = Sn(), { updateRoute: a } = nt(), { mutateAsync: s } = Gu(), { mutateAsync: l } = rb(), { mutateAsync: A } = ua(), [f, u] = At.useState(!!(e != null && e.trial_days)), d = dt(), { localSettings: h, siteData: m } = Ba(), [v] = yt(h, ["portal_plans"]), k = wr("portalImprovements"), b = !n || k, y = JSON.parse((v == null ? void 0 : v.toString()) || "[]"), S = {
    name: () => T.name ? void 0 : "Enter a name for the tier",
    monthly_price: () => T.type !== "free" ? bh(T.monthly_price || 0, T.currency, { allowZero: !1 }) : void 0,
    yearly_price: () => T.type !== "free" ? bh(T.yearly_price || 0, T.currency, { allowZero: !1 }) : void 0
  }, { formState: T, saveState: O, updateForm: B, handleSave: K, errors: _, clearError: F, okProps: ee } = qn({
    initialState: {
      ...e || {},
      trial_days: ((N = e == null ? void 0 : e.trial_days) == null ? void 0 : N.toString()) || "",
      currency: (e == null ? void 0 : e.currency) || ab[0].isoCode,
      visibility: (e == null ? void 0 : e.visibility) || "none",
      welcome_page_url: (e == null ? void 0 : e.welcome_page_url) || null
    },
    savingDelay: 500,
    savedDelay: 500,
    onValidate: () => {
      const Y = {};
      return Object.entries(S).forEach(([W, H]) => {
        Y[W] = H == null ? void 0 : H();
      }), Y;
    },
    onSave: async () => {
      var pe;
      const { trial_days: Y, currency: W, ...H } = T, G = H;
      if (G.benefits = (pe = G.benefits) == null ? void 0 : pe.filter((ke) => ke), n || (G.currency = W, G.trial_days = parseInt(Y)), e != null && e.id ? await s({ ...e, ...G }) : await l(G), n && k) {
        const ke = T.visibility === "public";
        let X = !1;
        y.includes("free") && !ke && (y.splice(y.indexOf("free"), 1), X = !0), !y.includes("free") && ke && (y.push("free"), X = !0), X && await A([
          {
            key: "portal_plans",
            value: JSON.stringify(y)
          }
        ]);
      }
    },
    onSavedStateReset: () => {
      t.remove(), a("tiers");
    },
    onSaveError: d
  }), oe = Fp({
    items: T.benefits || [],
    setItems: (Y) => B((W) => ({ ...W, benefits: Y })),
    blank: "",
    canAddNewItem: (Y) => !!Y
  }), re = (Y) => {
    Y.target.checked ? (u(!0), B((W) => ({ ...W, trial_days: e != null && e.trial_days ? e == null ? void 0 : e.trial_days.toString() : "7" }))) : (u(!1), B((W) => ({ ...W, trial_days: "0" })));
  }, $ = Ct(!1);
  Te(() => {
    var Y, W;
    $.current && ((Y = S.monthly_price) == null || Y.call(S), (W = S.yearly_price) == null || W.call(S)), $.current = !0;
  }, [T.currency]);
  const ae = () => {
    if (e) {
      const Y = e.active ? "Archive tier" : "Reactivate tier", W = e.active ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("div", { className: "mb-6", children: [
          "Members will no longer be able to subscribe to ",
          /* @__PURE__ */ o.jsx("strong", { children: e.name }),
          " and it will be removed from the list of available tiers in portal."
        ] }),
        /* @__PURE__ */ o.jsx("div", { children: "Existing members on this tier will remain unchanged. Offers using this tier will be disabled." })
      ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("div", { className: "mb-6", children: [
          "Reactivating ",
          /* @__PURE__ */ o.jsx("strong", { children: e.name }),
          " will re-enable it as an option in portal and allow new members to subscribe to this tier."
        ] }),
        /* @__PURE__ */ o.jsx("div", { children: "Existing members will remain unchanged." })
      ] }), H = e.active ? "Archive" : "Reactivate";
      xe.show(Bt, {
        title: Y,
        prompt: W,
        okLabel: H,
        cancelLabel: "Cancel",
        okColor: e.active ? "red" : "black",
        onOk: (G) => {
          s({ ...e, active: !e.active }), G == null || G.remove(), St({
            type: "success",
            title: `Tier ${e.active ? "archived" : "reactivated"}`
          });
        }
      });
    }
  };
  let Z = {};
  return e && (e.active && e.type !== "free" ? Z = {
    label: "Archive tier",
    color: "red",
    link: !0,
    onClick: ae
  } : e.active || (Z = {
    label: "Reactivate tier",
    color: "green",
    link: !0,
    onClick: ae
  })), /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        a("tiers");
      },
      buttonsDisabled: ee.disabled,
      dirty: O === "unsaved",
      leftButtonProps: Z,
      okColor: ee.color,
      okLabel: ee.label || "Save & close",
      size: "lg",
      testId: "tier-detail-modal",
      title: e ? e.active ? "Edit tier" : "Edit archived tier" : "New tier",
      stickyFooter: !0,
      onOk: async () => {
        await K({ fakeWhenUnchanged: !0 });
      },
      children: /* @__PURE__ */ o.jsxs("div", { className: "-mb-8 mt-8 flex items-start gap-8", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex grow flex-col gap-8", children: [
          /* @__PURE__ */ o.jsxs(bt, { marginBottom: !1, title: "Basic", grouped: !0, children: [
            b && /* @__PURE__ */ o.jsx(
              je,
              {
                autoComplete: "off",
                error: !!_.name,
                hint: _.name,
                maxLength: 191,
                placeholder: n ? "Free" : "Bronze",
                title: "Name",
                value: T.name || "",
                autoFocus: !0,
                onChange: (Y) => B((W) => ({ ...W, name: Y.target.value })),
                onKeyDown: () => F("name")
              }
            ),
            /* @__PURE__ */ o.jsx(
              je,
              {
                autoComplete: "off",
                autoFocus: n,
                maxLength: 191,
                placeholder: n ? "Free preview" : "Full access to premium content",
                title: "Description",
                value: T.description || "",
                onChange: (Y) => B((W) => ({ ...W, description: Y.target.value }))
              }
            ),
            !n && /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-10 md:flex-row", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "basis-1/2", children: [
                /* @__PURE__ */ o.jsxs("div", { className: "mb-1 flex h-6 items-center justify-between", children: [
                  /* @__PURE__ */ o.jsx(st, { level: 6, children: "Prices" }),
                  /* @__PURE__ */ o.jsx("div", { className: "-mr-2 w-[50px]", children: /* @__PURE__ */ o.jsx(
                    En,
                    {
                      border: !1,
                      containerClassName: "font-medium",
                      controlClasses: { menu: "w-18" },
                      options: xh(),
                      selectedOption: xh().flatMap((Y) => Y.options).find((Y) => Y.value === T.currency),
                      size: "xs",
                      clearBg: !0,
                      isSearchable: !0,
                      onSelect: (Y) => B((W) => ({ ...W, currency: Y == null ? void 0 : Y.value }))
                    }
                  ) })
                ] }),
                /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ o.jsx(
                    kh,
                    {
                      error: !!_.monthly_price,
                      hint: _.monthly_price,
                      placeholder: "5",
                      rightPlaceholder: `${T.currency}/month`,
                      title: "Monthly price",
                      valueInCents: T.monthly_price || "",
                      hideTitle: !0,
                      onBlur: (Y) => Y.target.value === "" ? B((W) => ({ ...W, monthly_price: 0 })) : null,
                      onChange: (Y) => B((W) => ({ ...W, monthly_price: Y })),
                      onKeyDown: () => F("monthly_price")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    kh,
                    {
                      error: !!_.yearly_price,
                      hint: _.yearly_price,
                      placeholder: "50",
                      rightPlaceholder: `${T.currency}/year`,
                      title: "Yearly price",
                      valueInCents: T.yearly_price || "",
                      hideTitle: !0,
                      onBlur: (Y) => Y.target.value === "" ? B((W) => ({ ...W, yearly_price: 0 })) : null,
                      onChange: (Y) => B((W) => ({ ...W, yearly_price: Y })),
                      onKeyDown: () => F("yearly_price")
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "basis-1/2", children: [
                /* @__PURE__ */ o.jsx("div", { className: "mb-1 flex h-6 flex-col justify-center", children: /* @__PURE__ */ o.jsx(ft, { checked: f, label: "Add a free trial", labelStyle: "heading", onChange: re }) }),
                /* @__PURE__ */ o.jsx(
                  je,
                  {
                    disabled: !f,
                    hint: /* @__PURE__ */ o.jsxs("div", { className: "mt-1", children: [
                      "Members will be subscribed at full price once the trial ends. ",
                      /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://ghost.org/", rel: "noreferrer", target: "_blank", children: "Learn more" })
                    ] }),
                    placeholder: "0",
                    rightPlaceholder: "days",
                    title: "Trial days",
                    value: T.trial_days,
                    hideTitle: !0,
                    onChange: (Y) => B((W) => ({ ...W, trial_days: Y.target.value.replace(/[^\d]/, "") }))
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ o.jsx(
              Jp,
              {
                baseUrl: m == null ? void 0 : m.url,
                hint: `Redirect to this URL after signup ${n ? "" : " for premium membership"}`,
                maxLength: 2e3,
                placeholder: m == null ? void 0 : m.url,
                title: "Welcome page",
                value: T.welcome_page_url || null,
                nullable: !0,
                transformPathWithoutSlash: !0,
                onChange: (Y) => B((W) => ({ ...W, welcome_page_url: Y || null }))
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs(bt, { gap: "none", title: "Benefits", grouped: !0, children: [
            /* @__PURE__ */ o.jsx("div", { className: "-mt-3", children: /* @__PURE__ */ o.jsx(
              Tp,
              {
                items: oe.items,
                itemSeparator: !1,
                renderItem: ({ id: Y, item: W }) => /* @__PURE__ */ o.jsxs("div", { className: "relative flex w-full items-center gap-5", children: [
                  /* @__PURE__ */ o.jsx("div", { className: "absolute left-[-32px] top-[7px] flex h-6 w-6 items-center justify-center bg-white group-hover:hidden dark:bg-black", children: /* @__PURE__ */ o.jsx(Qt, { name: "check", size: "sm" }) }),
                  /* @__PURE__ */ o.jsx(
                    je,
                    {
                      maxLength: 191,
                      value: W,
                      onChange: (H) => oe.updateItem(Y, H.target.value)
                    }
                  ),
                  /* @__PURE__ */ o.jsx(Ye, { className: "absolute right-1 top-1 z-10 opacity-0 group-hover:opacity-100", color: "grey", icon: "trash", size: "sm", onClick: () => oe.removeItem(Y) })
                ] }),
                onMove: oe.moveItem
              }
            ) }),
            /* @__PURE__ */ o.jsxs("div", { className: "relative mt-1 flex items-center gap-3", children: [
              /* @__PURE__ */ o.jsx(Qt, { className: "dark:text-white", name: "check", size: "sm" }),
              /* @__PURE__ */ o.jsx(
                je,
                {
                  className: "grow",
                  containerClassName: "w-100",
                  maxLength: 191,
                  placeholder: "Expert analysis",
                  title: "New benefit",
                  value: oe.newItem,
                  hideTitle: !0,
                  onChange: (Y) => oe.setNewItem(Y.target.value),
                  onKeyDown: (Y) => {
                    Y.key === "Enter" && oe.addItem();
                  }
                }
              ),
              /* @__PURE__ */ o.jsx(
                Ye,
                {
                  className: "absolute right-[5px] top-[5px] z-10",
                  color: "green",
                  icon: "add",
                  iconColorClass: "text-white",
                  label: "Add",
                  size: "sm",
                  hideLabel: !0,
                  onClick: () => oe.addItem()
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "sticky top-[96px] hidden shrink-0 basis-[380px] min-[920px]:!visible min-[920px]:!block", children: /* @__PURE__ */ o.jsx(sb, { isFreeTier: n, tier: T }) })
      ] })
    }
  );
}, CJ = ({ params: e }) => {
  const { data: { tiers: n, isEnd: t } = {}, fetchNextPage: a } = $i();
  let s;
  return Te(() => {
    e != null && e.id && !s && !t && a();
  }, [a, t, e == null ? void 0 : e.id, s]), e != null && e.id && (s = n == null ? void 0 : n.find(({ id: l }) => l === (e == null ? void 0 : e.id)), !s) ? null : /* @__PURE__ */ o.jsx(TJ, { tier: s });
}, DJ = xe.create(CJ), RJ = xe.create(() => {
  const { updateRoute: e } = nt(), n = xe.useModal(), { settings: t } = ct(), [a] = yt(t, ["unsplash"]), { mutateAsync: s } = ua(), l = dt(), A = async (f) => {
    const u = [
      { key: "unsplash", value: f.target.checked }
    ];
    try {
      await s(u);
    } catch (d) {
      l(d);
    }
  };
  return /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        e("integrations");
      },
      okColor: "black",
      okLabel: "Save & close",
      testId: "unsplash-modal",
      title: "",
      onOk: () => {
        n.remove(), e("integrations");
      },
      children: [
        /* @__PURE__ */ o.jsx(
          Us,
          {
            detail: "Beautiful, free photos",
            icon: /* @__PURE__ */ o.jsx(ib, { className: "h-12 w-12" }),
            title: "Unsplash"
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsx(bt, { marginBottom: !1, grouped: !0, children: /* @__PURE__ */ o.jsx(
          ft,
          {
            checked: a,
            direction: "rtl",
            hint: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              "Enable ",
              /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://unsplash.com", rel: "noopener noreferrer", target: "_blank", children: "Unsplash" }),
              " image integration for your posts"
            ] }),
            label: "Enable Unsplash",
            onChange: A
          }
        ) }) })
      ]
    }
  );
}), jJ = [
  "1234567890",
  "qwertyuiop",
  "qwertzuiop",
  "asdfghjkl;",
  "abcdefghij",
  "0987654321",
  "1q2w3e4r5t",
  "12345asdfg"
], OJ = ["ghost", "password", "passw0rd"], QJ = (e) => {
  let n = {}, t, a = !0;
  t = e.length / 2;
  for (let s = 0; s < e.length; s += 1)
    n[e[s]] ? n[e[s]] += 1 : n[e[s]] = 1;
  for (let s in n)
    if (n[s] >= t)
      return a = !1, a;
  return a;
}, NJ = ({ user: e }) => {
  const { currentUser: n, config: t, siteData: a } = ct(), [s, l] = ue(!1), [A, f] = ue(""), [u, d] = ue(""), [h, m] = ue(""), [v, k] = ue(""), [b, y] = ue({}), S = Ct(null), T = Ct(null), { mutateAsync: O } = ob(), B = dt(), K = e.id === n.id, _ = ({ password: $, confirmPassword: ae }) => {
    if (K && !A)
      return { oldPassword: "Your current password is required to set a new one" };
    if ($ !== ae)
      return {
        newPassword: "Your new passwords do not match",
        confirmNewPassword: "Your new passwords do not match"
      };
    let Z = t.blogUrl || window.location.host, N = a.title, Y;
    if (Z = Z.replace(/^http(s?):\/\//, ""), Y = Z.match(/\/$/) ? Z : `${Z}/`, N = N && N.trim().toLowerCase(), $.length < 10)
      return { newPassword: "Password must be at least 10 characters long." };
    $ = $.toString();
    for (const W of jJ)
      if (W === $)
        return { newPassword: "Sorry, you cannot use an insecure password." };
    if ($.toLowerCase() === e.email.toLowerCase())
      return { newPassword: "Sorry, you cannot use an insecure password." };
    for (const W of OJ)
      if ($.toLowerCase().indexOf(W) >= 0)
        return { newPassword: "Sorry, you cannot use an insecure password." };
    return $.toLowerCase() === N ? { newPassword: "Sorry, you cannot use an insecure password." } : $.toLowerCase() === Z || $.toLowerCase() === Y ? { newPassword: "Sorry, you cannot use an insecure password." } : QJ($) ? {} : { newPassword: "Sorry, you cannot use an insecure password." };
  };
  Te(() => {
    v === "saved" && setTimeout(() => {
      k(""), l(!1);
    }, 2500);
  }, [v]);
  const F = () => {
    l(!0);
  }, ee = /* @__PURE__ */ o.jsx(
    Ye,
    {
      color: "grey",
      label: "Change password",
      onClick: F
    }
  );
  let oe = "Change password";
  v === "saving" ? oe = "Updating..." : v === "saved" && (oe = "Updated");
  const re = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    K && /* @__PURE__ */ o.jsx(
      je,
      {
        error: !!b.oldPassword,
        hint: b.oldPassword,
        title: "Old password",
        type: "password",
        value: A,
        onChange: ($) => {
          f($.target.value);
        }
      }
    ),
    /* @__PURE__ */ o.jsx(
      je,
      {
        error: !!b.newPassword,
        hint: b.newPassword,
        inputRef: S,
        title: "New password",
        type: "password",
        value: u,
        onChange: ($) => {
          d($.target.value);
        }
      }
    ),
    /* @__PURE__ */ o.jsx(
      je,
      {
        error: !!b.confirmNewPassword,
        hint: b.confirmNewPassword,
        inputRef: T,
        title: "Verify password",
        type: "password",
        value: h,
        onChange: ($) => {
          m($.target.value);
        }
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        color: "red",
        label: oe,
        onClick: async () => {
          k("saving");
          const $ = _({ password: u, confirmPassword: h });
          if (y($), Object.keys($).length > 0) {
            f(""), d(""), m(""), k("");
            return;
          }
          try {
            await O({
              newPassword: u,
              confirmNewPassword: h,
              oldPassword: A,
              userId: e == null ? void 0 : e.id
            }), k("saved");
          } catch (ae) {
            k(""), St({
              type: "error",
              title: ae instanceof lb ? ae.message : "Couldn't update password. Please try again."
            }), B(ae, { withToast: !1 });
          }
        }
      }
    )
  ] });
  return /* @__PURE__ */ o.jsx(
    sA,
    {
      border: !1,
      customHeader: /* @__PURE__ */ o.jsx(st, { level: 4, children: "Password" }),
      title: "Password",
      children: s ? re : ee
    }
  );
}, Of = ({ children: e }) => /* @__PURE__ */ o.jsx(st, { level: 4, children: e }), HJ = ({ user: e, setUserData: n }) => {
  const t = wr("webmentions"), a = wr("recommendations");
  return /* @__PURE__ */ o.jsxs(_i, { children: [
    /* @__PURE__ */ o.jsx(
      ft,
      {
        checked: e.comment_notifications,
        direction: "rtl",
        hint: "Every time a member comments on one of your posts",
        label: "Comments",
        onChange: (s) => {
          n == null || n({ ...e, comment_notifications: s.target.checked });
        }
      }
    ),
    Pl(e) && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      t && /* @__PURE__ */ o.jsx(
        ft,
        {
          checked: e.mention_notifications,
          direction: "rtl",
          hint: "Every time another site links to your work",
          label: "Mentions",
          onChange: (s) => {
            n == null || n({ ...e, mention_notifications: s.target.checked });
          }
        }
      ),
      a && /* @__PURE__ */ o.jsx(
        ft,
        {
          checked: e.recommendation_notifications,
          direction: "rtl",
          hint: "Every time another publisher recommends you to their audience",
          label: "Recommendations",
          onChange: (s) => {
            n == null || n({ ...e, recommendation_notifications: s.target.checked });
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        ft,
        {
          checked: e.free_member_signup_notification,
          direction: "rtl",
          hint: "Every time a new free member signs up",
          label: "New signups",
          onChange: (s) => {
            n == null || n({ ...e, free_member_signup_notification: s.target.checked });
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        ft,
        {
          checked: e.paid_subscription_started_notification,
          direction: "rtl",
          hint: "Every time a member starts a new paid subscription",
          label: "New paid members",
          onChange: (s) => {
            n == null || n({ ...e, paid_subscription_started_notification: s.target.checked });
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        ft,
        {
          checked: e.paid_subscription_canceled_notification,
          direction: "rtl",
          hint: "Every time a member cancels their paid subscription",
          label: "Paid member cancellations",
          onChange: (s) => {
            n == null || n({ ...e, paid_subscription_canceled_notification: s.target.checked });
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        ft,
        {
          checked: e.milestone_notifications,
          direction: "rtl",
          hint: "Occasional summaries of your audience & revenue growth",
          label: "Milestones",
          onChange: (s) => {
            n == null || n({ ...e, milestone_notifications: s.target.checked });
          }
        }
      )
    ] })
  ] });
}, BJ = ({ user: e, setUserData: n }) => /* @__PURE__ */ o.jsx(
  sA,
  {
    border: !1,
    customHeader: /* @__PURE__ */ o.jsx(Of, { children: "Email notifications" }),
    title: "Email notifications",
    children: /* @__PURE__ */ o.jsx(HJ, { setUserData: n, user: e })
  }
), UJ = ({ user: e, setUserData: n }) => {
  const { data: { roles: t } = {} } = yu();
  return Mu(e) ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(st, { level: 6, children: "Role" }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex h-[295px] flex-col items-center justify-center gap-3 bg-grey-75 px-10 py-20 text-center text-sm text-grey-800 dark:bg-grey-950 dark:text-white", children: [
      /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-grey-800 dark:text-white", name: "crown", size: "lg" }),
      "This user is the owner of the site. To change their role, you need to transfer the ownership first."
    ] })
  ] }) : /* @__PURE__ */ o.jsx(
    qu,
    {
      id: "role",
      options: [
        {
          hint: "Can create and edit their own posts, but cannot publish. An Editor needs to approve and publish for them.",
          label: "Contributor",
          value: "contributor"
        },
        {
          hint: "A trusted user who can create, edit and publish their own posts, but can’t modify others.",
          label: "Author",
          value: "author"
        },
        {
          hint: "Can invite and manage other Authors and Contributors, as well as edit and publish any posts on the site.",
          label: "Editor",
          value: "editor"
        },
        {
          hint: "Trusted staff user who should be able to manage all content and users, as well as site settings and options.",
          label: "Administrator",
          value: "administrator"
        }
      ],
      selectedOption: e.roles[0].name.toLowerCase(),
      title: "Role",
      onSelect: (a) => {
        const s = t == null ? void 0 : t.find((l) => l.name.toLowerCase() === a.toLowerCase());
        s && (n == null || n({ ...e, roles: [s] }));
      }
    }
  );
}, LJ = ({ errors: e, clearError: n, user: t, setUserData: a }) => {
  const { currentUser: s } = ct();
  return /* @__PURE__ */ o.jsxs(_i, { children: [
    /* @__PURE__ */ o.jsx(
      je,
      {
        error: !!(e != null && e.name),
        hint: (e == null ? void 0 : e.name) || "Use real name so people can recognize you",
        maxLength: 191,
        title: "Full name",
        value: t.name,
        onChange: (l) => {
          a({ ...t, name: l.target.value });
        },
        onKeyDown: () => n("name")
      }
    ),
    /* @__PURE__ */ o.jsx(
      je,
      {
        error: !!(e != null && e.email),
        hint: (e == null ? void 0 : e.email) || "Used for notifications",
        maxLength: 191,
        title: "Email",
        value: t.email,
        onChange: (l) => {
          a({ ...t, email: l.target.value });
        },
        onKeyDown: () => n("email")
      }
    ),
    /* @__PURE__ */ o.jsx(
      je,
      {
        hint: "https://example.com/author",
        maxLength: 191,
        title: "Slug",
        value: t.slug,
        onChange: (l) => {
          a({ ...t, slug: l.target.value });
        }
      }
    ),
    Pl(s) && /* @__PURE__ */ o.jsx(UJ, { setUserData: a, user: t })
  ] });
}, PJ = (e) => /* @__PURE__ */ o.jsx(
  sA,
  {
    border: !1,
    customHeader: /* @__PURE__ */ o.jsx(Of, { children: "Basic info" }),
    title: "Basic",
    children: /* @__PURE__ */ o.jsx(LJ, { ...e })
  }
), zJ = ({ errors: e, clearError: n, validateField: t, user: a, setUserData: s }) => {
  var d;
  const [l, A] = ue(a.facebook ? Ab(a.facebook) : ""), [f, u] = ue(a.twitter ? cb(a.twitter) : "");
  return /* @__PURE__ */ o.jsxs(_i, { children: [
    /* @__PURE__ */ o.jsx(
      je,
      {
        error: !!(e != null && e.location),
        hint: (e == null ? void 0 : e.location) || "Where in the world do you live?",
        maxLength: 65535,
        title: "Location",
        value: a.location || "",
        onChange: (h) => {
          s({ ...a, location: h.target.value });
        },
        onKeyDown: () => n("location")
      }
    ),
    /* @__PURE__ */ o.jsx(
      je,
      {
        error: !!(e != null && e.website),
        hint: (e == null ? void 0 : e.website) || "Have a website or blog other than this one? Link it!",
        maxLength: 2e3,
        title: "Website",
        value: a.website || "",
        onChange: (h) => {
          s({ ...a, website: h.target.value });
        },
        onKeyDown: () => n("url")
      }
    ),
    /* @__PURE__ */ o.jsx(
      je,
      {
        error: !!(e != null && e.facebook),
        hint: (e == null ? void 0 : e.facebook) || "URL of your personal Facebook Profile",
        maxLength: 2e3,
        title: "Facebook profile",
        value: l,
        onBlur: (h) => {
          if (t("facebook", h.target.value)) {
            const m = Op(h.target.value);
            A(m), s({ ...a, facebook: ub(m) });
          }
        },
        onChange: (h) => {
          A(h.target.value);
        },
        onKeyDown: () => n("facebook")
      }
    ),
    /* @__PURE__ */ o.jsx(
      je,
      {
        error: !!(e != null && e.twitter),
        hint: (e == null ? void 0 : e.twitter) || "URL of your X profile",
        maxLength: 2e3,
        title: "X (formerly Twitter) profile",
        value: f,
        onBlur: (h) => {
          if (t("twitter", h.target.value)) {
            const m = Qp(h.target.value);
            u(m), s({ ...a, twitter: fb(m) });
          }
        },
        onChange: (h) => {
          u(h.target.value);
        },
        onKeyDown: () => n("twitter")
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ha,
      {
        error: !!(e != null && e.bio),
        hint: (e == null ? void 0 : e.bio) || /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          "Recommended: 200 characters. You‘ve used ",
          /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((d = a.bio) == null ? void 0 : d.length) || 0 })
        ] }),
        maxLength: 65535,
        title: "Bio",
        value: a.bio || "",
        onChange: (h) => {
          s({ ...a, bio: h.target.value });
        },
        onKeyDown: () => n("bio")
      }
    )
  ] });
}, YJ = (e) => /* @__PURE__ */ o.jsx(
  sA,
  {
    border: !1,
    customHeader: /* @__PURE__ */ o.jsx(Of, { children: "Details" }),
    title: "Details",
    children: /* @__PURE__ */ o.jsx(zJ, { ...e })
  }
), FJ = "StaffTokenResponseType", ZJ = rA({
  dataType: FJ,
  path: "/users/me/token/"
}), GJ = Vn({
  path: () => "/users/me/token/",
  method: "PUT"
}), KJ = () => {
  const { refetch: e } = ZJ({
    enabled: !1
  }), n = dt(), [t, a] = ue(""), { mutateAsync: s } = GJ();
  Te(() => {
    (async () => {
      var u;
      const f = await e();
      (u = f == null ? void 0 : f.data) != null && u.apiKey && a(`${f.data.apiKey.id}:${f.data.apiKey.secret}`);
    })();
  }, [e]);
  const l = () => {
    xe.show(Bt, {
      title: "Regenerate your Staff Access Token",
      prompt: "You can regenerate your Staff Access Token any time, but any scripts or applications using it will need to be updated.",
      okLabel: "Regenerate your Staff Access Token",
      okColor: "red",
      onOk: async (A) => {
        try {
          const f = await s([]);
          a(`${f.apiKey.id}:${f.apiKey.secret}`), A == null || A.remove();
        } catch (f) {
          n(f);
        }
      }
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx(st, { className: "mb-2", level: 6, grey: !0, children: "Staff access token" }),
    /* @__PURE__ */ o.jsx(ef, { hasLabel: !1, keys: [
      {
        text: t || "",
        onRegenerate: l
      }
    ] })
  ] });
}, Hl = {
  name: ({ name: e }) => {
    let n = "";
    return e || (n = "Name is required"), e && e.length > 191 && (n = "Name is too long"), n;
  },
  email: ({ email: e }) => Nr.isEmail(e || "") ? "" : "Enter a valid email address",
  url: ({ url: e }) => !e || Nr.isURL(e) ? "" : "Enter a valid URL",
  bio: ({ bio: e }) => !e || e.length <= 200 ? "" : "Bio is too long",
  location: ({ location: e }) => !e || e.length <= 150 ? "" : "Location is too long",
  website: ({ website: e }) => !e || Nr.isURL(e) && e.length <= 2e3 ? "" : "Enter a valid URL",
  facebook: ({ facebook: e }) => {
    try {
      return Op(e || ""), "";
    } catch (n) {
      return n instanceof Error ? n.message : "";
    }
  },
  twitter: ({ twitter: e }) => {
    try {
      return Qp(e || ""), "";
    } catch (n) {
      return n instanceof Error ? n.message : "";
    }
  }
}, XJ = () => /* @__PURE__ */ o.jsxs("button", { className: "flex h-8 cursor-pointer items-center justify-center rounded bg-[rgba(0,0,0,0.75)] px-3 opacity-80 hover:opacity-100", type: "button", children: [
  /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "Actions" }),
  /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-white", name: "ellipsis", size: "md" })
] }), WJ = ({ user: e }) => {
  const { updateRoute: n } = nt(), { ownerUser: t } = Yu(), { currentUser: a } = ct(), s = dt(), { formState: l, setFormState: A, saveState: f, handleSave: u, updateForm: d, errors: h, setErrors: m, clearError: v, okProps: k } = qn({
    initialState: e,
    savingDelay: 500,
    savedDelay: 500,
    onValidate: (X) => Object.entries(Hl).reduce((Ie, [Me, ye]) => {
      const de = ye(X);
      return de && (Ie[Me] = de), Ie;
    }, {}),
    onSave: async (X) => {
      await (O == null ? void 0 : O(X));
    },
    onSavedStateReset: () => {
      S.remove(), ee();
    },
    onSaveError: s
  }), b = (X) => d(() => X), y = (X, Ie) => {
    var ye;
    const Me = (ye = Hl[X]) == null ? void 0 : ye.call(Hl, { [X]: Ie });
    return Me ? (m({ ...h, [X]: Me }), !1) : (v(X), !0);
  }, S = Sn(), { mutateAsync: T } = Qs(), { mutateAsync: O } = db(), { mutateAsync: B } = hb(), { mutateAsync: K } = pb(), _ = Bs(), F = Mp(), ee = sn(() => {
    xs(a) ? n("staff") : n({ isExternal: !0, route: "dashboard" });
  }, [a, n]), oe = async (X) => {
    if (X.status === "inactive" && X.roles[0].name !== "Contributor")
      try {
        await (_ == null ? void 0 : _.errorIfWouldGoOverLimit("staff"));
      } catch (Me) {
        if (Me instanceof Ua) {
          xe.show(eo, {
            formSheet: !0,
            prompt: Me.message || "Your current plan doesn't support more users.",
            onOk: () => n({ route: "/pro", isExternal: !0 })
          });
          return;
        } else
          throw Me;
      }
    let Ie = "This user will no longer be able to log in but their posts will be kept.";
    X.status === "inactive" && (Ie = "This user will be able to log in again and will have the same permissions they had previously."), xe.show(Bt, {
      title: "Are you sure you want to suspend this user?",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("strong", { children: "WARNING:" }),
        " ",
        Ie
      ] }),
      okLabel: X.status === "inactive" ? "Un-suspend" : "Suspend",
      okRunningLabel: X.status === "inactive" ? "Un-suspending..." : "Suspending...",
      okColor: "red",
      onOk: async (Me) => {
        const ye = {
          ...X,
          status: X.status === "inactive" ? "active" : "inactive"
        };
        try {
          await O(ye), A(() => ye), Me == null || Me.remove(), St({
            title: X.status === "inactive" ? "User un-suspended" : "User suspended",
            type: "success"
          });
        } catch (de) {
          s(de);
        }
      }
    });
  }, re = (X, { owner: Ie }) => {
    xe.show(Bt, {
      title: "Are you sure you want to delete this user?",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("p", { className: "mb-3", children: [
          /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: X.name || X.email }),
          " will be permanently deleted and all their posts will be automatically assigned to the ",
          /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: Ie.name }),
          "."
        ] }),
        /* @__PURE__ */ o.jsxs("p", { children: [
          "To make these easy to find in the future, each post will be given an internal tag of ",
          /* @__PURE__ */ o.jsxs("span", { className: "font-bold", children: [
            "#",
            e.slug
          ] })
        ] })
      ] }),
      okLabel: "Delete user",
      okColor: "red",
      onOk: async (Me) => {
        try {
          await B(X == null ? void 0 : X.id), Me == null || Me.remove(), S == null || S.remove(), ee(), St({
            title: "User deleted",
            type: "success"
          });
        } catch (ye) {
          s(ye);
        }
      }
    });
  }, $ = () => {
    xe.show(Bt, {
      title: "Transfer Ownership",
      prompt: "Are you sure you want to transfer the ownership of this blog? You will not be able to undo this action.",
      okLabel: "Yep — I'm sure",
      okColor: "red",
      onOk: async (X) => {
        try {
          await K(e.id), X == null || X.remove(), St({
            title: "Ownership transferred",
            type: "success"
          });
        } catch (Ie) {
          s(Ie);
        }
      }
    });
  }, ae = async (X, Ie) => {
    try {
      const Me = Or(await T({ file: Ie }));
      switch (X) {
        case "cover_image":
          d((ye) => ({ ...ye, cover_image: Me }));
          break;
        case "profile_image":
          d((ye) => ({ ...ye, profile_image: Me }));
          break;
      }
    } catch (Me) {
      const ye = Me;
      ye.response.status === 415 && (ye.message = "Unsupported file type"), s(ye);
    }
  }, Z = (X) => {
    switch (X) {
      case "cover_image":
        d((Ie) => ({ ...Ie, cover_image: "" }));
        break;
      case "profile_image":
        d((Ie) => ({ ...Ie, profile_image: "" }));
        break;
    }
  }, N = Pl(a) || yh(a) && Eh(e);
  let Y = [];
  if (Mu(a) && mb(l) && l.status !== "inactive" && Y.push({
    id: "make-owner",
    label: "Make owner",
    onClick: $
  }), l.id !== a.id && (Pl(a) && !Mu(e) || yh(a) && Eh(e))) {
    let X = l.status === "inactive" ? "Un-suspend user" : "Suspend user";
    Y.push({
      id: "delete-user",
      label: "Delete user",
      onClick: () => {
        re(e, { owner: t });
      }
    }, {
      id: "suspend-user",
      label: X,
      onClick: () => {
        oe(l);
      }
    });
  }
  Y.push({
    id: "view-user-activity",
    label: "View user activity",
    onClick: () => {
      S.remove(), n(`history/view/${l.id}`);
    }
  });
  const W = "bg-[rgba(0,0,0,0.75)] rounded text-sm text-white flex items-center justify-center px-3 h-8 opacity-80 hover:opacity-100 transition-all cursor-pointer font-medium nowrap", H = qe(
    W
  ), G = qe(
    W
  ), pe = qe(
    W
  ), ke = l.status === "inactive" ? " (Suspended)" : "";
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: ee,
      animate: xs(a),
      backDrop: xs(a),
      buttonsDisabled: k.disabled,
      dirty: f === "unsaved",
      okColor: k.color,
      okLabel: k.label || "Save & close",
      size: xs(a) ? "lg" : "bleed",
      stickyFooter: !0,
      testId: "user-detail-modal",
      onOk: async () => {
        await u({ fakeWhenUnchanged: !0 });
      },
      children: /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: `relative ${xs(a) ? "-mx-8 -mt-8 rounded-t" : "-mx-10 -mt-10"} bg-gradient-to-tr from-grey-900 to-black`, children: /* @__PURE__ */ o.jsxs("div", { className: "flex min-h-[40vmin] flex-wrap items-end justify-between bg-cover bg-center", style: {
          backgroundImage: `url(${l.cover_image})`
        }, children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex w-full max-w-[620px] flex-col gap-5 p-8 md:max-w-[auto] md:flex-row md:items-center", children: [
            /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx(
              Hr,
              {
                deleteButtonClassName: "md:invisible absolute pr-3 -right-2 -top-2 flex h-8 w-10 cursor-pointer items-center justify-end rounded-full bg-[rgba(0,0,0,0.75)] text-white group-hover:!visible",
                deleteButtonContent: /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-white", name: "trash", size: "sm" }),
                editButtonClassName: "md:invisible absolute right-[22px] -top-2 flex h-8 w-8 cursor-pointer items-center justify-center text-white group-hover:!visible z-20",
                fileUploadClassName: "rounded-full bg-black flex items-center justify-center opacity-80 transition hover:opacity-100 -ml-2 cursor-pointer h-[80px] w-[80px]",
                fileUploadProps: { dragIndicatorClassName: "rounded-full" },
                id: "avatar",
                imageClassName: "w-full h-full object-cover rounded-full shrink-0",
                imageContainerClassName: "relative group bg-cover bg-center -ml-2 h-[80px] w-[80px] shrink-0",
                imageURL: l.profile_image ?? void 0,
                pintura: {
                  isEnabled: F.isEnabled,
                  openEditor: async () => F.openEditor({
                    image: l.profile_image || "",
                    handleSave: async (X) => {
                      ae("profile_image", X);
                    }
                  })
                },
                unstyled: !0,
                width: "80px",
                onDelete: () => {
                  Z("profile_image");
                },
                onUpload: (X) => {
                  ae("profile_image", X);
                },
                children: /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-white", name: "user-add", size: "lg" })
              }
            ) }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsxs(st, { styles: "break-words md:break-normal text-white", children: [
                e.name,
                ke
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "text-md font-semibold capitalize text-white", children: e.roles[0].name.toLowerCase() })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "flex flex-nowrap items-end gap-4 p-8", children: [
            /* @__PURE__ */ o.jsx(
              Hr,
              {
                buttonContainerClassName: "flex items-end gap-4 justify-end flex-nowrap",
                deleteButtonClassName: G,
                deleteButtonContent: "Delete cover image",
                editButtonClassName: pe,
                fileUploadClassName: H,
                id: "cover-image",
                imageClassName: "hidden",
                imageURL: l.cover_image || "",
                pintura: {
                  isEnabled: F.isEnabled,
                  openEditor: async () => F.openEditor({
                    image: l.cover_image || "",
                    handleSave: async (X) => {
                      ae("cover_image", X);
                    }
                  })
                },
                unstyled: !0,
                onDelete: () => {
                  Z("cover_image");
                },
                onUpload: (X) => {
                  ae("cover_image", X);
                },
                children: "Upload cover image"
              }
            ),
            N && /* @__PURE__ */ o.jsx("div", { className: "z-10", children: /* @__PURE__ */ o.jsx(zp, { items: Y, position: "right", trigger: /* @__PURE__ */ o.jsx(XJ, {}) }) })
          ] })
        ] }) }),
        /* @__PURE__ */ o.jsxs("div", { className: `${!xs(a) && "mx-auto max-w-4xl"} mt-10 grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2`, children: [
          /* @__PURE__ */ o.jsx(PJ, { clearError: v, errors: h, setUserData: b, user: l, validateField: y }),
          /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col justify-between gap-10", children: [
            /* @__PURE__ */ o.jsx(YJ, { clearError: v, errors: h, setUserData: b, user: l, validateField: y }),
            e.id === a.id && /* @__PURE__ */ o.jsx(KJ, {})
          ] }),
          /* @__PURE__ */ o.jsx(BJ, { setUserData: b, user: l }),
          /* @__PURE__ */ o.jsx(NJ, { user: l })
        ] })
      ] })
    }
  );
}, qJ = ({ params: e }) => {
  const { users: n, hasNextPage: t, fetchNextPage: a } = Yu(), { currentUser: s } = ct(), l = s.slug === (e == null ? void 0 : e.slug) ? s : n.find(({ slug: A }) => A === (e == null ? void 0 : e.slug));
  return Te(() => {
    !l && t && a();
  }, [a, t, l]), l ? /* @__PURE__ */ o.jsx(WJ, { user: l }) : null;
}, VJ = xe.create(qJ), _J = (e) => /* @__PURE__ */ it("svg", { width: 42, height: 37, viewBox: "0 0 80 37", xmlns: "http://www.w3.org/2000/svg", className: "css-1oudp6l-ZapierLogo--red500", ...e }, /* @__PURE__ */ it("title", null, "zapier-logo"), /* @__PURE__ */ it("path", { fill: "#ff4a00", fillRule: "evenodd", clipRule: "evenodd", d: "M53.934 4.185h-2.94l2.079-2.073A5.053 5.053 0 0 0 51.886.928l-2.078 2.073V.07a5.129 5.129 0 0 0-.836-.07h-.006c-.285 0-.564.024-.836.07V3L46.052.929c-.23.163-.444.344-.642.543h-.002c-.198.198-.38.412-.543.641l2.078 2.073h-2.938s-.07.55-.07.835v.003c0 .284.024.564.07.836h2.938l-2.078 2.07a5.05 5.05 0 0 0 1.187 1.183l2.078-2.072v2.93c.272.046.55.07.835.07h.007c.285 0 .565-.024.836-.07v-2.93l2.078 2.072a5.098 5.098 0 0 0 1.186-1.184L50.995 5.86h2.94c.045-.272.07-.55.07-.834v-.007a5.08 5.08 0 0 0-.07-.833ZM58.85 25.53c-.84-.786-1.279-2.026-1.32-3.72h10.585c.02-.222.04-.488.06-.802.02-.312.031-.61.031-.892a9.263 9.263 0 0 0-.425-2.859c-.283-.877-.698-1.633-1.243-2.268a5.736 5.736 0 0 0-2.032-1.497c-.809-.364-1.75-.545-2.82-.545-1.254 0-2.341.217-3.261.65a6.532 6.532 0 0 0-2.29 1.755c-.606.736-1.056 1.603-1.349 2.6-.293 1-.44 2.073-.44 3.222 0 1.17.152 2.244.455 3.222a6.59 6.59 0 0 0 1.44 2.541c.657.716 1.492 1.27 2.503 1.664 1.01.393 2.223.59 3.64.59.97 0 1.854-.071 2.653-.212a10.191 10.191 0 0 0 2.198-.635 7.18 7.18 0 0 0-.181-1.286 4.54 4.54 0 0 0-.395-1.104 11.178 11.178 0 0 1-4.094.757c-1.638 0-2.876-.394-3.715-1.18ZM30.51 13.31a6.378 6.378 0 0 1 1.273-.121 7.115 7.115 0 0 1 1.274.12c.02.042.045.167.075.38.03.21.06.438.091.68.03.242.06.474.091.696.03.222.045.363.045.423.203-.323.445-.635.728-.938a4.85 4.85 0 0 1 1.016-.816 5.298 5.298 0 0 1 1.335-.575 6.016 6.016 0 0 1 1.653-.212c.91 0 1.753.152 2.532.454a5.068 5.068 0 0 1 2.001 1.406c.556.636.99 1.442 1.305 2.42.313.979.47 2.133.47 3.464 0 2.662-.723 4.744-2.169 6.246-1.446 1.503-3.492 2.254-6.141 2.254-.445 0-.9-.03-1.365-.09a8.095 8.095 0 0 1-1.213-.243v7.109a10.389 10.389 0 0 1-1.517.12c-.222 0-.47-.01-.742-.03-.273-.02-.52-.05-.743-.09V13.31Zm-6.218 5.294c0-1.19-.304-2.017-.91-2.481-.607-.463-1.486-.695-2.639-.695-.708 0-1.37.055-1.986.166-.617.111-1.219.257-1.804.438-.385-.665-.576-1.461-.576-2.39a14.015 14.015 0 0 1 2.274-.514 16.555 16.555 0 0 1 2.396-.181c2.021 0 3.558.46 4.61 1.376 1.05.918 1.576 2.385 1.576 4.401v9.71a47.6 47.6 0 0 1-2.577.5 18.55 18.55 0 0 1-3.094.256c-.99 0-1.885-.09-2.684-.272-.799-.181-1.476-.473-2.032-.877a4.061 4.061 0 0 1-1.289-1.543c-.303-.625-.454-1.38-.454-2.269 0-.866.176-1.628.53-2.283a4.77 4.77 0 0 1 1.44-1.634 6.427 6.427 0 0 1 2.093-.967 9.538 9.538 0 0 1 2.487-.318c.647 0 1.178.015 1.592.045.415.031.763.066 1.047.106v-.574Zm-23.625 9.8L8.855 15.7H1.637a7.356 7.356 0 0 1-.09-1.21c0-.424.03-.818.09-1.18h11.677l.15.393-8.248 12.735h7.734c.06.404.09.817.09 1.24 0 .404-.03.787-.09 1.15H.819l-.152-.424Zm22.472-6.987c.466.04.85.08 1.153.12v4.931a8.642 8.642 0 0 1-1.32.227 14.05 14.05 0 0 1-1.44.076c-.364 0-.748-.02-1.152-.06a2.9 2.9 0 0 1-1.107-.333 2.293 2.293 0 0 1-.834-.787c-.223-.342-.334-.817-.334-1.422 0-.947.328-1.653.986-2.117.656-.464 1.612-.696 2.866-.696.323 0 .717.02 1.182.061Zm11.555 5.172a5.87 5.87 0 0 1-1.183-.302v-6.292c0-.767.111-1.426.334-1.981.223-.555.515-1.014.88-1.377a3.58 3.58 0 0 1 1.243-.816c.464-.182.95-.273 1.455-.273 1.355 0 2.33.475 2.927 1.422.596.948.895 2.229.895 3.842 0 1.008-.127 1.88-.38 2.616-.253.736-.596 1.346-1.03 1.83a3.965 3.965 0 0 1-1.562 1.074 5.558 5.558 0 0 1-2.002.348c-.647 0-1.173-.03-1.577-.09Zm13.435-10.92h-1.972a3.793 3.793 0 0 1-.09-.56 6.432 6.432 0 0 1 0-1.24c.02-.211.05-.398.09-.56h4.914v15.52c-.223.039-.47.069-.743.09-.273.019-.521.03-.743.03-.203 0-.44-.011-.713-.03a7.367 7.367 0 0 1-.743-.09v-13.16Zm17.105 3.903a5.71 5.71 0 0 0-.227-1.62 4.113 4.113 0 0 0-.668-1.345 3.246 3.246 0 0 0-1.122-.922c-.455-.232-.996-.349-1.623-.349-1.233 0-2.178.374-2.836 1.12-.656.746-1.056 1.785-1.197 3.116h7.673Zm6.916-6.353a8.11 8.11 0 0 0-.637.09v15.519a10.308 10.308 0 0 0 1.517.12c.221 0 .47-.01.742-.03.273-.02.52-.05.743-.09v-7.714c0-1.048.117-1.905.35-2.57.231-.666.545-1.19.939-1.574a3.26 3.26 0 0 1 1.335-.801 5.33 5.33 0 0 1 1.562-.227h.409c.172 0 .338.02.5.06.04-.242.076-.494.107-.756a6.694 6.694 0 0 0 .014-1.392 4.99 4.99 0 0 0-.09-.575 4.641 4.641 0 0 0-.44-.045 8.203 8.203 0 0 0-.5-.015c-1.092 0-1.987.253-2.684.756a6.273 6.273 0 0 0-1.683 1.785c0-.343-.031-.76-.091-1.255a17.208 17.208 0 0 0-.182-1.195 5.019 5.019 0 0 0-.607-.09 7.54 7.54 0 0 0-.667-.031c-.223 0-.435.01-.637.03ZM50.034 6.084c.125-.33.194-.687.194-1.06v-.005c0-.373-.07-.73-.194-1.06a3.013 3.013 0 0 0-1.063-.193h-.004a3.03 3.03 0 0 0-1.064.193 3.03 3.03 0 0 0-.193 1.06v.005c0 .373.07.73.194 1.06.33.124.689.193 1.063.193h.005c.373 0 .732-.069 1.062-.193Z" })), $J = xe.create(() => {
  var b, y, S, T;
  const e = xe.useModal(), { updateRoute: n } = nt(), { zapierTemplates: t } = gb(), { data: { integrations: a } = { integrations: [] } } = yp(), { config: s } = ct(), { adminRoot: l } = Cs(), { mutateAsync: A } = Vp(), f = dt(), [u, d] = ue(!1), h = (S = (y = (b = s.hostSettings) == null ? void 0 : b.limits) == null ? void 0 : y.customIntegrations) == null ? void 0 : S.disabled, m = a.find(({ slug: O }) => O === "zapier"), v = (T = m == null ? void 0 : m.api_keys) == null ? void 0 : T.find((O) => O.type === "admin");
  Te(() => {
    h && n("integrations");
  }, [h, n]);
  const k = () => {
    !m || !v || (d(!1), xe.show(Bt, {
      title: "Regenerate Admin API Key",
      prompt: 'You will need to locate the Ghost App within your Zapier account and click on "Reconnect" to enter the new Admin API Key.',
      okLabel: "Regenerate Admin API Key",
      onOk: async (O) => {
        try {
          await A({ integrationId: m.id, apiKeyId: v.id }), d(!0), O == null || O.remove();
        } catch (B) {
          f(B);
        }
      }
    }));
  };
  return /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        n("integrations");
      },
      cancelLabel: "",
      footer: /* @__PURE__ */ o.jsxs("div", { className: "mx-8 flex w-full items-center justify-between", children: [
        /* @__PURE__ */ o.jsxs(
          "a",
          {
            className: "mt-1 self-baseline text-sm font-bold",
            href: "https://zapier.com/apps/ghost/integrations?utm_medium=partner_api&utm_source=widget&utm_campaign=Widget",
            rel: "noopener noreferrer",
            target: "_blank",
            children: [
              "View more Ghost integrations powered by ",
              /* @__PURE__ */ o.jsx("span", { children: /* @__PURE__ */ o.jsx(_J, { className: "relative top-[-2px] inline-block h-6" }) })
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(Ye, { color: "black", label: "Close", onClick: () => {
          e.remove();
        } })
      ] }),
      okColor: "black",
      okLabel: "Close",
      testId: "zapier-modal",
      title: "",
      stickyFooter: !0,
      onOk: () => {
        n("integrations"), e.remove();
      },
      children: [
        /* @__PURE__ */ o.jsx(
          Us,
          {
            detail: "Automation for your favorite apps",
            extra: /* @__PURE__ */ o.jsx("div", { className: "-mb-4 mt-1", children: /* @__PURE__ */ o.jsx(ef, { keys: [
              {
                label: "Admin API key",
                text: v == null ? void 0 : v.secret,
                hint: u ? /* @__PURE__ */ o.jsx("div", { className: "text-green", children: "Admin API Key was successfully regenerated" }) : void 0,
                onRegenerate: k
              },
              { label: "API URL", text: window.location.origin + Cs().subdir }
            ] }) }),
            icon: /* @__PURE__ */ o.jsx(vb, { className: "h-14 w-14" }),
            title: "Zapier"
          }
        ),
        /* @__PURE__ */ o.jsx(Br, { children: t.map((O) => /* @__PURE__ */ o.jsx(
          fa,
          {
            action: /* @__PURE__ */ o.jsx(Ye, { className: "whitespace-nowrap text-sm font-semibold text-[#FF4A00]", href: O.url, label: "Use this Zap", tag: "a", target: "_blank", link: !0, unstyled: !0 }),
            bgOnHover: !1,
            className: "flex items-center gap-3 py-2 pl-3",
            title: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:items-center", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex shrink-0 flex-nowrap items-center gap-2", children: [
                /* @__PURE__ */ o.jsx("img", { className: "h-8 w-8 object-contain dark:invert", role: "presentation", src: Ll(O.ghostImage, l) }),
                /* @__PURE__ */ o.jsx(Qt, { name: "arrow-right", size: "xs" }),
                /* @__PURE__ */ o.jsx("img", { className: "h-8 w-8 object-contain", role: "presentation", src: Ll(O.appImage, l) })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "text-sm", children: O.title })
            ] }),
            hideActions: !0
          }
        )) })
      ]
    }
  );
}), n8 = {
  AddIntegrationModal: wy,
  AddNewsletterModal: ky,
  AddRecommendationModal: qp,
  AmpModal: Sy,
  CustomIntegrationModal: zy,
  DesignAndThemeModal: e4,
  EditRecommendationModal: wb,
  FirstpromoterModal: g4,
  HistoryModal: T4,
  InviteUserModal: C4,
  NavigationModal: D4,
  NewsletterDetailModal: z4,
  PinturaModal: eJ,
  PortalModal: mJ,
  SlackModal: gJ,
  StripeConnectModal: JJ,
  TierDetailModal: DJ,
  UnsplashModal: RJ,
  UserDetailModal: VJ,
  ZapierModal: $J,
  AnnouncementBarModal: Ry,
  EmbedSignupFormModal: m4,
  OffersContainerModal: V4,
  // OffersModal,
  // AddOfferModal,
  // EditOfferModal,
  AboutModal: hy,
  OfferSuccess: dg
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
};
export {
  n8 as default
};
//# sourceMappingURL=modals-8fb51a51.mjs.map