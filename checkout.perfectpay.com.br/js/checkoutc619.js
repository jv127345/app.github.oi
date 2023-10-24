/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [], r = e.document, i = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, u = n.indexOf, l = {},
        c = l.toString, f = l.hasOwnProperty, p = f.toString, d = p.call(Object), h = {}, g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }, y = function e(t) {
            return null != t && t === t.window
        }, v = {type: !0, src: !0, noModule: !0};
    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n) for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = "3.3.1", w = function (e, t) {
        return new w.fn.init(e, t)
    }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1", constructor: w, length: 0, toArray: function () {
            return o.call(this)
        }, get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return w.each(this, e)
        }, map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(o.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: s, sort: n.sort, splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e) {
            m(e)
        }, each: function (e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(T, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var r, i, o = 0, s = [];
            if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i); else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        }, guid: 1, support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    function C(e) {
        var t = !!e && "length" in e && e.length, n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function (e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0,
            C = 0, E = ae(), k = ae(), S = ae(), D = function (e, t) {
                return e === t && (f = !0), 0
            }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), X = new RegExp(W),
            U = new RegExp("^" + R + "$"), V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, re = function () {
                p()
            }, ie = me(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function (e, t) {
                    q.apply(e, H.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1
                }
            }
        }
        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
                    if (9 === T) {
                        if (!(l = t.getElementById(o))) return r;
                        if (l.id === o) return r.push(l), r
                    } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                } else {
                    if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r
                    } catch (e) {
                    } finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            return t
        }
        function se(e) {
            return e[b] = !0, e
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        function le(e, t) {
            var n = e.split("|"), i = n.length;
            while (i--) r.attrHandle[n[i]] = t
        }
        function ce(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }
        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function de(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }
        function he(e) {
            return se(function (t) {
                return t = +t, se(function (n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, p = oe.setDocument = function (e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ue(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }, D = t ? function (e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }, d) : d
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {
            }
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1)
            }
            return c = null, e
        }, i = oe.getText = function (e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else while (t = e[r++]) n += i(t);
            return n
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if (1 === p.nodeType && ++x && p === t) {
                                    c[e] = [T, d, x];
                                    break
                                }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        var r, o = i(e, t), a = o.length;
                        while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: se(function (e) {
                    var t = [], n = [], r = s(e.replace(B, "$1"));
                    return r[b] ? se(function (e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }), contains: se(function (e) {
                    return e = e.replace(Z, ee), function (t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }), lang: se(function (e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === h
                }, focus: function (e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: de(!1), disabled: de(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !r.pseudos.empty(e)
                }, header: function (e) {
                    return Y.test(e.nodeName)
                }, input: function (e) {
                    return G.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: he(function () {
                    return [0]
                }), last: he(function (e, t) {
                    return [t - 1]
                }), eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }), gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) r.pseudos[t] = fe(t);
        for (t in{submit: !0, reset: !0}) r.pseudos[t] = pe(t);
        function ye() {
        }
        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function (e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), s = s.slice(n.length));
                for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        };
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }
        function me(e, t, n) {
            var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r]) if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r]) if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else while (t = t[r]) if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                    if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                    if (c[o] = p, p[2] = e(t, n, u)) return !0
                }
                return !1
            }
        }
        function xe(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }
        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--) (f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
            })
        }
        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
                return e === t
            }, s, !0), f = me(function (e) {
                return O(t, e) > -1
            }, s, !0), p = [function (e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null, i
            }]; u < o; u++) if (n = r.relative[e[u].type]) p = [me(xe(p), n)]; else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                    for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                    return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({value: " " === e[u - 2].type ? "*" : ""})).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                }
                p.push(n)
            }
            return xe(p)
        }
        function Ee(e, t) {
            var n = t.length > 0, i = e.length > 0, o = function (o, a, s, u, c) {
                var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c),
                    E = T += null == w ? 1 : Math.random() || .1, k = C.length;
                for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                    if (i && f) {
                        h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                        while (y = e[h++]) if (y(f, a || d, s)) {
                            u.push(f);
                            break
                        }
                        c && (T = E)
                    }
                    n && ((f = !y && f) && v--, o && x.push(f))
                }
                if (v += m, n && m !== v) {
                    h = 0;
                    while (y = t[h++]) y(x, b, a, s);
                    if (o) {
                        if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
                        b = we(b)
                    }
                    L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                }
                return c && (T = E, l = w), x
            };
            return n ? se(o) : o
        }
        return s = oe.compile = function (e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }, u = oe.select = function (e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function (e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function (e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (i && w(e).is(n)) break;
            r.push(e)
        }
        return r
    }, S = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        }, is: function (e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/, O = {children: !0, contents: !0, next: !0, prev: !0};
    w.fn.extend({
        has: function (e) {
            var t = w(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
            if (!D.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e
    }
    w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return k(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return k(e, "parentNode", n)
        }, next: function (e) {
            return P(e, "nextSibling")
        }, prev: function (e) {
            return P(e, "previousSibling")
        }, nextAll: function (e) {
            return k(e, "nextSibling")
        }, prevAll: function (e) {
            return k(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return k(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return k(e, "previousSibling", n)
        }, siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return S(e.firstChild)
        }, contents: function (e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function (e, n) {
            t[n] = !0
        }), t
    }
    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function () {
            for (i = i || e.once, r = t = !0; a.length; s = -1) {
                n = a.shift();
                while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
            }
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
        }, l = {
            add: function () {
                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                    w.each(n, function (n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                    })
                }(arguments), n && !t && u()), this
            }, remove: function () {
                return w.each(arguments, function (e, t) {
                    var n;
                    while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                }), this
            }, has: function (e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return i = a = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return i = a = [], n || t || (o = n = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return l
    };
    function I(e) {
        return e
    }
    function W(e) {
        throw e
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
                r = "pending", i = {
                    state: function () {
                        return r
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, "catch": function (e) {
                        return i.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return w.Deferred(function (t) {
                            w.each(n, function (n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, r, i) {
                        var o = 0;
                        function a(t, n, r, i) {
                            return function () {
                                var s = this, u = arguments, l = function () {
                                    var e, l;
                                    if (!(t < o)) {
                                        if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                    }
                                }, c = i ? l : function () {
                                    try {
                                        l()
                                    } catch (e) {
                                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
                                    }
                                };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred(function (e) {
                            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? w.extend(e, i) : i
                    }
                }, o = {};
            return w.each(n, function (e, t) {
                var a = t[2], s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        }, when: function (e) {
            var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), a = w.Deferred(), s = function (e) {
                return function (n) {
                    r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                }
            };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var F = w.Deferred();
    w.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }), w.ready.then = F.then;
    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === x(n)) {
            i = !0;
            for (s in n) z(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
            return l.call(w(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, X = /^-ms-/, U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase()
    }
    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }
    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n; else for (r in t) i[G(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                    while (n--) delete r[t[n]]
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q, K = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;
    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = te(n)
            } catch (e) {
            }
            K.set(e, t, n)
        } else n = void 0;
        return n
    }
    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e)
        }, data: function (e, t, n) {
            return K.access(e, t, n)
        }, removeData: function (e, t) {
            K.remove(e, t)
        }, _data: function (e, t, n) {
            return J.access(e, t, n)
        }, _removeData: function (e, t) {
            J.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                K.set(this, e)
            }) : z(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n
                } else this.each(function () {
                    K.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                K.remove(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t), r = n.length, i = n.shift(), o = w._queueHooks(e, t), a = function () {
                w.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"], ae = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
        }, se = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };
    function ue(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return w.css(e, t, "")
            }, u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var le = {};
    function ce(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function () {
            return fe(this, !0)
        }, hide: function () {
            return fe(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++]) if (r && w.inArray(o, r) > -1) i && i.push(o); else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    !function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")), t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement, we = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0
    }
    function ke() {
        return !1
    }
    function Se() {
        try {
            return r.activeElement
        } catch (e) {
        }
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n)
        })
    }
    w.event = {
        global: {}, add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }), l = (t = (t || "").match(M) || [""]).length;
                while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
            }
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--) if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({elem: l, handlers: o})
            }
            return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
        }, addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return N(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function (e, t, n, r) {
            return De(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return De(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }
    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]); else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
        }, cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Y(n)) {
                if (t = n[J.expando]) {
                    if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                    n[J.expando] = void 0
                }
                n[K.expando] && (n[K.expando] = void 0)
            }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Ie(this, e, !0)
        }, remove: function (e) {
            return Ie(this, e)
        }, text: function (e) {
            return z(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        }, html: function (e) {
            return z(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return Re(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), $e = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, Be = new RegExp(oe.join("|"), "i");
    !function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function () {
                return t(), o
            }, pixelBoxStyles: function () {
                return t(), s
            }, pixelPosition: function () {
                return t(), i
            }, reliableMarginLeft: function () {
                return t(), u
            }, scrollboxSize: function () {
                return t(), a
            }
        }))
    }();
    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }
    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/,
        Ue = {position: "absolute", visibility: "hidden", display: "block"},
        Ve = {letterSpacing: "0", fontWeight: "400"}, Ge = ["Webkit", "Moz", "ms"], Ye = r.createElement("div").style;
    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
        while (n--) if ((e = Ge[n] + t) in Ye) return e
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }
    function et(e, t, n) {
        var r = $e(e), i = Fe(e, t, r), o = "border-box" === w.css(e, "boxSizing", !1, r), a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
                if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
                    return et(e, t, r)
                })
            }, set: function (e, n, r) {
                var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
            }
        }
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }), w.fn.extend({
        css: function (e, t) {
            return z(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i)
    }
    w.Tween = tt, tt.prototype = {
        constructor: tt, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
    }
    function st() {
        return e.setTimeout(function () {
            nt = void 0
        }), nt = Date.now()
    }
    function ut(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }
    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }
    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
            g = e.nodeType && ae(e), y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s()
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t) if (i = t[r], it.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                if ("show" !== i || !y || void 0 === y[r]) continue;
                g = !0
            }
            d[r] = y && y[r] || w.style(e, r)
        }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {display: l}), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
                g || fe([e]), J.remove(e, "fxshow");
                for (r in d) w.style(e, r, d[r])
            })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }
    function pt(e, t, n) {
        var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i) return !1;
            for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {specialEasing: {}, easing: w.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || st(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++) if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    w.Animation = w.extend(pt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ie.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
        }, prefilters: [ct], prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
        }
    }), w.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = w.isEmptyObject(e), o = w.speed(t, n, r), a = function () {
                var t = pt(this, w.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = w.timers, a = J.get(this);
                if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || w.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
        }
    }), w.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        w.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), w.timers = [], w.fx.tick = function () {
        var e, t = 0, n = w.timers;
        for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), nt = void 0
    }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        rt || (rt = !0, at())
    }, w.fx.stop = function () {
        rt = null
    }, w.fx.speeds = {slow: 600, fast: 200, _default: 400}, w.fn.delay = function (t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    }, function () {
        var e = r.createElement("input"), t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
    }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(M);
            if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
        }
    }), dt = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), h.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    });
    function vt(e) {
        return (e.match(M) || []).join(" ")
    }
    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }
    w.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, mt(this)))
            });
            if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = vt(r)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = t[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                i !== (s = vt(r)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function () {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = xt(e);
                    while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++]) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length) return r = g(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                        if (t = w(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                    while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function (e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r], m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        }, simulate: function (e, t, n) {
            var r = w.extend(new w.Event, n, {type: e, isSimulated: !0});
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
            }
        }
    });
    var Ct = e.location, Et = Date.now(), kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== x(t)) r(e, t); else for (i in t) jt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = g(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return {name: t.name, value: e.replace(Dt, "\r\n")}
                }) : {name: t.name, value: n.replace(Dt, "\r\n")}
            }).get()
        }
    });
    var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {},
        Wt = {}, $t = "*/".concat("*"), Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(M) || [];
            if (g(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function _t(e, t, n, r) {
        var i = {}, o = e === Wt;
        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }
    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }
    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents, u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }
    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                break
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                t = a(t)
            } catch (e) {
                return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(),
                m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
                            }
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return c ? a : null
                    }, setRequestHeader: function (e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (c) E.always(e[E.status]); else for (t in e) x[t] = [x[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this
                    }
                };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, k)
                } catch (e) {
                    if (c) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");
            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function (e) {
        return w.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var Vt = {0: 200, 1223: 204}, Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = w("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), r.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a,
            s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), h.createHTMLDocument = function () {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), w.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
    }, w.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"), f = w(e), p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {top: 0, left: 0}
        }, position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], i = {top: 0, left: 0};
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect(); else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                return e || be
            })
        }
    }), w.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
            return z(this, function (e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({Height: "height", Width: "width"}, function (e, t) {
        w.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function (t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }, i.guid = e.guid = e.guid || w.guid++, i
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var Jt = e.jQuery, Kt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
    }, t || (e.jQuery = e.$ = w), w
});
//# sourceMappingURL=popper.min.js.map
(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function () {
    'use strict';
    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = getComputedStyle(e, null);
        return t ? o[t] : o
    }
    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }
    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case'HTML':
            case'BODY':
                return e.ownerDocument.body;
            case'#document':
                return e.body;
        }
        var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    }
    function r(e) {
        return 11 === e ? re : 10 === e ? pe : re || pe
    }
    function p(e) {
        if (!e) return document.documentElement;
        for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function s(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
    }
    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode)
    }
    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t, i = o ? t : e,
            r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host)
    }
    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
            o = 'top' === t ? 'scrollTop' : 'scrollLeft', n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i;
            return r[o]
        }
        return e[o]
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l(t, 'top'), i = l(t, 'left'),
            r = o ? -1 : 1;
        return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
    }
    function m(e, t) {
        var o = 'x' === t ? 'Left' : 'Top', n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
    }
    function h(e, t, o, n) {
        return $(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
    }
    function c() {
        var e = document.body, t = document.documentElement, o = r(10) && getComputedStyle(t);
        return {height: h('Height', e, t, o), width: h('Width', e, t, o)}
    }
    function g(e) {
        return le({}, e, {right: e.left + e.width, bottom: e.top + e.height})
    }
    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, 'top'), i = l(e, 'left');
                o.top += n, o.left += i, o.bottom += n, o.right += i
            } else o = e.getBoundingClientRect()
        } catch (t) {
        }
        var p = {left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top},
            s = 'HTML' === e.nodeName ? c() : {}, d = s.width || e.clientWidth || p.right - p.left,
            a = s.height || e.clientHeight || p.bottom - p.top, f = e.offsetWidth - d, h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h
        }
        return g(p)
    }
    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = r(10), s = 'HTML' === o.nodeName,
            d = u(e), a = u(o), l = n(e), m = t(o), h = parseFloat(m.borderTopWidth, 10),
            c = parseFloat(m.borderLeftWidth, 10);
        i && 'HTML' === o.nodeName && (a.top = $(a.top, 0), a.left = $(a.left, 0));
        var b = g({top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height});
        if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
            var y = parseFloat(m.marginTop, 10), w = parseFloat(m.marginLeft, 10);
            b.top -= h - y, b.bottom -= h - y, b.left -= c - w, b.right -= c - w, b.marginTop = y, b.marginLeft = w
        }
        return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b
    }
    function y(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = e.ownerDocument.documentElement,
            n = b(e, o), i = $(o.clientWidth, window.innerWidth || 0), r = $(o.clientHeight, window.innerHeight || 0),
            p = t ? 0 : l(o), s = t ? 0 : l(o, 'left'),
            d = {top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r};
        return g(d)
    }
    function w(e) {
        var n = e.nodeName;
        return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || w(o(e))
    }
    function E(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement;
        return o || document.documentElement
    }
    function v(e, t, i, r) {
        var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], s = {top: 0, left: 0},
            d = p ? E(e) : a(e, t);
        if ('viewport' === r) s = y(d, p); else {
            var l;
            'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
            var f = b(l, d, p);
            if ('HTML' === l.nodeName && !w(d)) {
                var m = c(), h = m.height, g = m.width;
                s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left
            } else s = f
        }
        return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s
    }
    function x(e) {
        var t = e.width, o = e.height;
        return t * o
    }
    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto')) return e;
        var p = v(o, n, r, i), s = {
            top: {width: p.width, height: t.top - p.top},
            right: {width: p.right - t.right, height: p.height},
            bottom: {width: p.width, height: p.bottom - t.bottom},
            left: {width: t.left - p.left, height: p.height}
        }, d = Object.keys(s).map(function (e) {
            return le({key: e}, s[e], {area: x(s[e])})
        }).sort(function (e, t) {
            return t.area - e.area
        }), a = d.filter(function (e) {
            var t = e.width, n = e.height;
            return t >= o.clientWidth && n >= o.clientHeight
        }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }
    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, i = n ? E(t) : a(t, o);
        return b(o, i, n)
    }
    function S(e) {
        var t = getComputedStyle(e), o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            i = {width: e.offsetWidth + n, height: e.offsetHeight + o};
        return i
    }
    function T(e) {
        var t = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'};
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }
    function C(e, t, o) {
        o = o.split('-')[0];
        var n = S(e), i = {width: n.width, height: n.height}, r = -1 !== ['right', 'left'].indexOf(o),
            p = r ? 'top' : 'left', s = r ? 'left' : 'top', d = r ? 'height' : 'width', a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i
    }
    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function N(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function (e) {
            return e[t] === o
        });
        var n = D(e, function (e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }
    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
        return i.forEach(function (t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t))
        }), o
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }
    function W(e, t) {
        return e.some(function (e) {
            var o = e.name, n = e.enabled;
            return n && o === t
        })
    }
    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n], r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r]) return r
        }
        return null
    }
    function H() {
        return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }
    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function M(e, t, o, i) {
        var r = 'BODY' === e.nodeName, p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {passive: !0}), r || M(n(p.parentNode), t, o, i), i.push(p)
    }
    function I(e, t, o, i) {
        o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {passive: !0});
        var r = n(e);
        return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
    }
    function F() {
        this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function R(e, t) {
        return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener('scroll', t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }
    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state))
    }
    function Y(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function j(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n
        })
    }
    function K(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }
    function q(e, t, o) {
        var n = D(e, function (e) {
            var o = e.name;
            return o === t
        }), i = !!n && e.some(function (e) {
            return e.name === o && e.enabled && e.order < n.order
        });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return i
    }
    function G(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }
    function z(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = me.indexOf(e),
            n = me.slice(o + 1).concat(me.slice(0, o));
        return t ? n.reverse() : n
    }
    function V(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +i[1], p = i[2];
        if (!r) return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
                case'%p':
                    s = o;
                    break;
                case'%':
                case'%r':
                default:
                    s = n;
            }
            var d = g(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
        }
        return r
    }
    function _(e, t, o, n) {
        var i = [0, 0], r = -1 !== ['right', 'left'].indexOf(n), p = e.split(/(\+|\-)/).map(function (e) {
            return e.trim()
        }), s = p.indexOf(D(p, function (e) {
            return -1 !== e.search(/,|\s/)
        }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function (e, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width', p = !1;
            return e.reduce(function (e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
            }, []).map(function (e) {
                return V(e, i, t, o)
            })
        }), a.forEach(function (e, t) {
            e.forEach(function (o, n) {
                Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
            })
        }), i
    }
    function X(e, t) {
        var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0];
        return o = Y(+n) ? [+n, 0] : _(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
    }
    for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = 'undefined' != typeof window && 'undefined' != typeof document, te = ['Edge', 'Trident', 'Firefox'], oe = 0, ne = 0; ne < te.length; ne += 1) if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) {
        oe = 1;
        break
    }
    var i = ee && window.Promise, ie = i ? function (e) {
            var t = !1;
            return function () {
                t || (t = !0, window.Promise.resolve().then(function () {
                    t = !1, e()
                }))
            }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout(function () {
                    t = !1, e()
                }, oe))
            }
        }, re = ee && !!(window.MSInputMethodContext && document.documentMode),
        pe = ee && /MSIE 10/.test(navigator.userAgent), se = function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }, de = function () {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
            return function (t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t
            }
        }(), ae = function (e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e
        }, le = Object.assign || function (e) {
            for (var t, o = 1; o < arguments.length; o++) for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        },
        fe = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        me = fe.slice(3), he = {FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise'},
        ce = function () {
            function t(o, n) {
                var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                se(this, t), this.scheduleUpdate = function () {
                    return requestAnimationFrame(i.update)
                }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                    i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                    return le({name: e}, i.options.modifiers[e])
                }).sort(function (e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function (t) {
                    t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                }), this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), this.state.eventsEnabled = p
            }
            return de(t, [{
                key: 'update', value: function () {
                    return k.call(this)
                }
            }, {
                key: 'destroy', value: function () {
                    return H.call(this)
                }
            }, {
                key: 'enableEventListeners', value: function () {
                    return F.call(this)
                }
            }, {
                key: 'disableEventListeners', value: function () {
                    return U.call(this)
                }
            }]), t
        }();
    return ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ce.placements = fe, ce.Defaults = {
        placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (e) {
                    var t = e.placement, o = t.split('-')[0], n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets, r = i.reference, p = i.popper, s = -1 !== ['bottom', 'top'].indexOf(o),
                            d = s ? 'left' : 'top', a = s ? 'width' : 'height',
                            l = {start: ae({}, d, r[d]), end: ae({}, d, r[d] + r[a] - p[a])};
                        e.offsets.popper = le({}, p, l[n])
                    }
                    return e
                }
            },
            offset: {order: 200, enabled: !0, fn: X, offset: 0},
            preventOverflow: {
                order: 300, enabled: !0, fn: function (e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o));
                    var n = B('transform'), i = e.instance.popper.style, r = i.top, s = i.left, d = i[n];
                    i.top = '', i.left = '', i[n] = '';
                    var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r, i.left = s, i[n] = d, t.boundaries = a;
                    var l = t.priority, f = e.offsets.popper, m = {
                        primary: function (e) {
                            var o = f[e];
                            return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])), ae({}, e, o)
                        }, secondary: function (e) {
                            var o = 'right' === e ? 'left' : 'top', n = f[o];
                            return f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n)
                        }
                    };
                    return l.forEach(function (e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        f = le({}, f, m[t](e))
                    }), e.offsets.popper = f, e
                }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400, enabled: !0, fn: function (e) {
                    var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split('-')[0], r = Z,
                        p = -1 !== ['top', 'bottom'].indexOf(i), s = p ? 'right' : 'bottom', d = p ? 'left' : 'top',
                        a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e
                }
            },
            arrow: {
                order: 500, enabled: !0, fn: function (e, o) {
                    var n;
                    if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i), !i) return e;
                    } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                    var r = e.placement.split('-')[0], p = e.offsets, s = p.popper, d = p.reference,
                        a = -1 !== ['left', 'right'].indexOf(r), l = a ? 'height' : 'width', f = a ? 'Top' : 'Left',
                        m = f.toLowerCase(), h = a ? 'left' : 'top', c = a ? 'bottom' : 'right', u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2, y = t(e.instance.popper), w = parseFloat(y['margin' + f], 10),
                        E = parseFloat(y['border' + f + 'Width'], 10), v = b - e.offsets.popper[m] - w - E;
                    return v = $(J(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, Q(v)), ae(n, h, ''), n), e
                }, element: '[x-arrow]'
            },
            flip: {
                order: 600, enabled: !0, fn: function (e, t) {
                    if (W(e.instance.modifiers, 'inner')) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        n = e.placement.split('-')[0], i = T(n), r = e.placement.split('-')[1] || '', p = [];
                    switch (t.behavior) {
                        case he.FLIP:
                            p = [n, i];
                            break;
                        case he.CLOCKWISE:
                            p = z(n);
                            break;
                        case he.COUNTERCLOCKWISE:
                            p = z(n, !0);
                            break;
                        default:
                            p = t.behavior;
                    }
                    return p.forEach(function (s, d) {
                        if (n !== s || p.length === d + 1) return e;
                        n = e.placement.split('-')[0], i = T(n);
                        var a = e.offsets.popper, l = e.offsets.reference, f = Z,
                            m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                            h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top),
                            u = f(a.bottom) > f(o.bottom),
                            b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                            y = -1 !== ['top', 'bottom'].indexOf(n),
                            w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
                        (m || b || w) && (e.flipped = !0, (m || b) && (n = p[d + 1]), w && (r = G(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'))
                    }), e
                }, behavior: 'flip', padding: 5, boundariesElement: 'viewport'
            },
            inner: {
                order: 700, enabled: !1, fn: function (e) {
                    var t = e.placement, o = t.split('-')[0], n = e.offsets, i = n.popper, r = n.reference,
                        p = -1 !== ['left', 'right'].indexOf(o), s = -1 === ['top', 'left'].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e
                }
            },
            hide: {
                order: 800, enabled: !0, fn: function (e) {
                    if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
                    var t = e.offsets.reference, o = D(e.instance.modifiers, function (e) {
                        return 'preventOverflow' === e.name
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850, enabled: !0, fn: function (e, t) {
                    var o = t.x, n = t.y, i = e.offsets.popper, r = D(e.instance.modifiers, function (e) {
                        return 'applyStyle' === e.name
                    }).gpuAcceleration;
                    void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l),
                        m = {position: i.position},
                        h = {left: Z(i.left), top: Q(i.top), bottom: Q(i.bottom), right: Z(i.right)},
                        c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = B('transform');
                    if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == g ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform'; else {
                        var y = 'bottom' == c ? -1 : 1, w = 'right' == g ? -1 : 1;
                        m[c] = d * y, m[g] = s * w, m.willChange = c + ', ' + g
                    }
                    var E = {"x-placement": e.placement};
                    return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e
                }, gpuAcceleration: !0, x: 'bottom', y: 'right'
            },
            applyStyle: {
                order: 900, enabled: !0, fn: function (e) {
                    return j(e.instance.popper, e.styles), K(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e
                }, onLoad: function (e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed),
                        p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), j(t, {position: o.positionFixed ? 'fixed' : 'absolute'}), o
                }, gpuAcceleration: void 0
            }
        }
    }, ce
});
//# sourceMappingURL=bootstrap.min.js.map
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, e, h) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }
    function l(r) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {}, e = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function (t) {
                return Object.getOwnPropertyDescriptor(o, t).enumerable
            }))), e.forEach(function (t) {
                var e, n, i;
                e = r, i = o[n = t], n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            })
        }
        return r
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, h = h && h.hasOwnProperty("default") ? h.default : h;
    var r, n, o, a, c, u, f, d, g, _, m, p, v, y, E, C, T, b, S, I, A, D, w, N, O, k, P, j, H, L, R, x, W, U, q, F, K,
        M, Q, B, V, Y, z, J, Z, G, $, X, tt, et, nt, it, rt, ot, st, at, lt, ct, ht, ut, ft, dt, gt, _t, mt, pt, vt, yt,
        Et, Ct, Tt, bt, St, It, At, Dt, wt, Nt, Ot, kt, Pt, jt, Ht, Lt, Rt, xt, Wt, Ut, qt, Ft, Kt, Mt, Qt, Bt, Vt, Yt,
        zt, Jt, Zt, Gt, $t, Xt, te, ee, ne, ie, re, oe, se, ae, le, ce, he, ue, fe, de, ge, _e, me, pe, ve, ye, Ee, Ce,
        Te, be, Se, Ie, Ae, De, we, Ne, Oe, ke, Pe, je, He, Le, Re, xe, We, Ue, qe, Fe, Ke, Me, Qe, Be, Ve, Ye, ze, Je,
        Ze, Ge, $e, Xe, tn, en, nn, rn, on, sn, an, ln, cn, hn, un, fn, dn, gn, _n, mn, pn, vn, yn, En, Cn, Tn, bn, Sn,
        In, An, Dn, wn, Nn, On, kn, Pn, jn, Hn, Ln, Rn, xn, Wn, Un, qn, Fn = function (i) {
            var e = "transitionend";
            function t(t) {
                var e = this, n = !1;
                return i(this).one(l.TRANSITION_END, function () {
                    n = !0
                }), setTimeout(function () {
                    n || l.triggerTransitionEnd(e)
                }, t), this
            }
            var l = {
                TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
                    for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) ;
                    return t
                }, getSelectorFromElement: function (t) {
                    var e = t.getAttribute("data-target");
                    e && "#" !== e || (e = t.getAttribute("href") || "");
                    try {
                        return document.querySelector(e) ? e : null
                    } catch (t) {
                        return null
                    }
                }, getTransitionDurationFromElement: function (t) {
                    if (!t) return 0;
                    var e = i(t).css("transition-duration");
                    return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0
                }, reflow: function (t) {
                    return t.offsetHeight
                }, triggerTransitionEnd: function (t) {
                    i(t).trigger(e)
                }, supportsTransitionEnd: function () {
                    return Boolean(e)
                }, isElement: function (t) {
                    return (t[0] || t).nodeType
                }, typeCheckConfig: function (t, e, n) {
                    for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var r = n[i], o = e[i],
                            s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                    }
                    var a
                }
            };
            return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {
                bindType: e,
                delegateType: e,
                handle: function (t) {
                    if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }, l
        }(e), Kn = (n = "alert", a = "." + (o = "bs.alert"), c = (r = e).fn[n], u = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        }, f = "alert", d = "fade", g = "show", _ = function () {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.close = function (t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function () {
                r.removeData(this._element, o), this._element = null
            }, t._getRootElement = function (t) {
                var e = Fn.getSelectorFromElement(t), n = !1;
                return e && (n = document.querySelector(e)), n || (n = r(t).closest("." + f)[0]), n
            }, t._triggerCloseEvent = function (t) {
                var e = r.Event(u.CLOSE);
                return r(t).trigger(e), e
            }, t._removeElement = function (e) {
                var n = this;
                if (r(e).removeClass(g), r(e).hasClass(d)) {
                    var t = Fn.getTransitionDurationFromElement(e);
                    r(e).one(Fn.TRANSITION_END, function (t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function (t) {
                r(t).detach().trigger(u.CLOSED).remove()
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = r(this), e = t.data(o);
                    e || (e = new i(this), t.data(o, e)), "close" === n && e[n](this)
                })
            }, i._handleDismiss = function (e) {
                return function (t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, s(i, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }]), i
        }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _)), r.fn[n] = _._jQueryInterface, r.fn[n].Constructor = _, r.fn[n].noConflict = function () {
            return r.fn[n] = c, _._jQueryInterface
        }, _),
        Mn = (p = "button", y = "." + (v = "bs.button"), E = ".data-api", C = (m = e).fn[p], T = "active", b = "btn", I = '[data-toggle^="button"]', A = '[data-toggle="buttons"]', D = "input", w = ".active", N = ".btn", O = {
            CLICK_DATA_API: "click" + y + E,
            FOCUS_BLUR_DATA_API: (S = "focus") + y + E + " blur" + y + E
        }, k = function () {
            function n(t) {
                this._element = t
            }
            var t = n.prototype;
            return t.toggle = function () {
                var t = !0, e = !0, n = m(this._element).closest(A)[0];
                if (n) {
                    var i = this._element.querySelector(D);
                    if (i) {
                        if ("radio" === i.type) if (i.checked && this._element.classList.contains(T)) t = !1; else {
                            var r = n.querySelector(w);
                            r && m(r).removeClass(T)
                        }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(T), m(i).trigger("change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), t && m(this._element).toggleClass(T)
            }, t.dispose = function () {
                m.removeData(this._element, v), this._element = null
            }, n._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = m(this).data(v);
                    t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]()
                })
            }, s(n, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }]), n
        }(), m(document).on(O.CLICK_DATA_API, I, function (t) {
            t.preventDefault();
            var e = t.target;
            m(e).hasClass(b) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle")
        }).on(O.FOCUS_BLUR_DATA_API, I, function (t) {
            var e = m(t.target).closest(N)[0];
            m(e).toggleClass(S, /^focus(in)?$/.test(t.type))
        }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function () {
            return m.fn[p] = C, k._jQueryInterface
        }, k), Qn = (j = "carousel", L = "." + (H = "bs.carousel"), R = ".data-api", x = (P = e).fn[j], W = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, U = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, q = "next", F = "prev", K = "left", M = "right", Q = {
            SLIDE: "slide" + L,
            SLID: "slid" + L,
            KEYDOWN: "keydown" + L,
            MOUSEENTER: "mouseenter" + L,
            MOUSELEAVE: "mouseleave" + L,
            TOUCHEND: "touchend" + L,
            LOAD_DATA_API: "load" + L + R,
            CLICK_DATA_API: "click" + L + R
        }, B = "carousel", V = "active", Y = "slide", z = "carousel-item-right", J = "carousel-item-left", Z = "carousel-item-next", G = "carousel-item-prev", $ = ".active", X = ".active.carousel-item", tt = ".carousel-item", et = ".carousel-item-next, .carousel-item-prev", nt = ".carousel-indicators", it = "[data-slide], [data-slide-to]", rt = '[data-ride="carousel"]', ot = function () {
            function o(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = this._element.querySelector(nt), this._addEventListeners()
            }
            var t = o.prototype;
            return t.next = function () {
                this._isSliding || this._slide(q)
            }, t.nextWhenVisible = function () {
                !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next()
            }, t.prev = function () {
                this._isSliding || this._slide(F)
            }, t.pause = function (t) {
                t || (this._isPaused = !0), this._element.querySelector(et) && (Fn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function (t) {
                var e = this;
                this._activeElement = this._element.querySelector(X);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) P(this._element).one(Q.SLID, function () {
                    return e.to(t)
                }); else {
                    if (n === t) return this.pause(), void this.cycle();
                    var i = n < t ? q : F;
                    this._slide(i, this._items[t])
                }
            }, t.dispose = function () {
                P(this._element).off(L), P.removeData(this._element, H), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function (t) {
                return t = l({}, W, t), Fn.typeCheckConfig(j, t, U), t
            }, t._addEventListeners = function () {
                var e = this;
                this._config.keyboard && P(this._element).on(Q.KEYDOWN, function (t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function (t) {
                    return e.pause(t)
                }).on(Q.MOUSELEAVE, function (t) {
                    return e.cycle(t)
                }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function () {
                    e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval)
                }))
            }, t._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function (t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : [], this._items.indexOf(t)
            }, t._getItemByDirection = function (t, e) {
                var n = t === q, i = t === F, r = this._getItemIndex(e), o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
                var s = (r + (t === F ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, t._triggerSlideEvent = function (t, e) {
                var n = this._getItemIndex(t), i = this._getItemIndex(this._element.querySelector(X)),
                    r = P.Event(Q.SLIDE, {relatedTarget: t, direction: e, from: i, to: n});
                return P(this._element).trigger(r), r
            }, t._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll($));
                    P(e).removeClass(V);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && P(n).addClass(V)
                }
            }, t._slide = function (t, e) {
                var n, i, r, o = this, s = this._element.querySelector(X), a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval);
                if (t === q ? (n = J, i = Z, r = K) : (n = z, i = G, r = M), l && P(l).hasClass(V)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                    var u = P.Event(Q.SLID, {relatedTarget: l, direction: r, from: a, to: c});
                    if (P(this._element).hasClass(Y)) {
                        P(l).addClass(i), Fn.reflow(l), P(s).addClass(n), P(l).addClass(n);
                        var f = Fn.getTransitionDurationFromElement(s);
                        P(s).one(Fn.TRANSITION_END, function () {
                            P(l).removeClass(n + " " + i).addClass(V), P(s).removeClass(V + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
                                return P(o._element).trigger(u)
                            }, 0)
                        }).emulateTransitionEnd(f)
                    } else P(s).removeClass(V), P(l).addClass(V), this._isSliding = !1, P(this._element).trigger(u);
                    h && this.cycle()
                }
            }, o._jQueryInterface = function (i) {
                return this.each(function () {
                    var t = P(this).data(H), e = l({}, W, P(this).data());
                    "object" == typeof i && (e = l({}, e, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new o(this, e), P(this).data(H, t)), "number" == typeof i) t.to(i); else if ("string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    } else e.interval && (t.pause(), t.cycle())
                })
            }, o._dataApiClickHandler = function (t) {
                var e = Fn.getSelectorFromElement(this);
                if (e) {
                    var n = P(e)[0];
                    if (n && P(n).hasClass(B)) {
                        var i = l({}, P(n).data(), P(this).data()), r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), o._jQueryInterface.call(P(n), i), r && P(n).data(H).to(r), t.preventDefault()
                    }
                }
            }, s(o, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default", get: function () {
                    return W
                }
            }]), o
        }(), P(document).on(Q.CLICK_DATA_API, it, ot._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function () {
            for (var t = [].slice.call(document.querySelectorAll(rt)), e = 0, n = t.length; e < n; e++) {
                var i = P(t[e]);
                ot._jQueryInterface.call(i, i.data())
            }
        }), P.fn[j] = ot._jQueryInterface, P.fn[j].Constructor = ot, P.fn[j].noConflict = function () {
            return P.fn[j] = x, ot._jQueryInterface
        }, ot), Bn = (at = "collapse", ct = "." + (lt = "bs.collapse"), ht = (st = e).fn[at], ut = {
            toggle: !0,
            parent: ""
        }, ft = {toggle: "boolean", parent: "(string|element)"}, dt = {
            SHOW: "show" + ct,
            SHOWN: "shown" + ct,
            HIDE: "hide" + ct,
            HIDDEN: "hidden" + ct,
            CLICK_DATA_API: "click" + ct + ".data-api"
        }, gt = "show", _t = "collapse", mt = "collapsing", pt = "collapsed", vt = "width", yt = "height", Et = ".show, .collapsing", Ct = '[data-toggle="collapse"]', Tt = function () {
            function a(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(Ct)), i = 0, r = n.length; i < r; i++) {
                    var o = n[i], s = Fn.getSelectorFromElement(o),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
                            return t === e
                        });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function () {
                st(this._element).hasClass(gt) ? this.hide() : this.show()
            }, t.show = function () {
                var t, e, n = this;
                if (!this._isTransitioning && !st(this._element).hasClass(gt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Et)).filter(function (t) {
                    return t.getAttribute("data-parent") === n._config.parent
                })).length && (t = null), !(t && (e = st(t).not(this._selector).data(lt)) && e._isTransitioning))) {
                    var i = st.Event(dt.SHOW);
                    if (st(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(st(t).not(this._selector), "hide"), e || st(t).data(lt, null));
                        var r = this._getDimension();
                        st(this._element).removeClass(_t).addClass(mt), this._element.style[r] = 0, this._triggerArray.length && st(this._triggerArray).removeClass(pt).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            s = Fn.getTransitionDurationFromElement(this._element);
                        st(this._element).one(Fn.TRANSITION_END, function () {
                            st(n._element).removeClass(mt).addClass(_t).addClass(gt), n._element.style[r] = "", n.setTransitioning(!1), st(n._element).trigger(dt.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px"
                    }
                }
            }, t.hide = function () {
                var t = this;
                if (!this._isTransitioning && st(this._element).hasClass(gt)) {
                    var e = st.Event(dt.HIDE);
                    if (st(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Fn.reflow(this._element), st(this._element).addClass(mt).removeClass(_t).removeClass(gt);
                        var i = this._triggerArray.length;
                        if (0 < i) for (var r = 0; r < i; r++) {
                            var o = this._triggerArray[r], s = Fn.getSelectorFromElement(o);
                            if (null !== s) st([].slice.call(document.querySelectorAll(s))).hasClass(gt) || st(o).addClass(pt).attr("aria-expanded", !1)
                        }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = Fn.getTransitionDurationFromElement(this._element);
                        st(this._element).one(Fn.TRANSITION_END, function () {
                            t.setTransitioning(!1), st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }, t.setTransitioning = function (t) {
                this._isTransitioning = t
            }, t.dispose = function () {
                st.removeData(this._element, lt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function (t) {
                return (t = l({}, ut, t)).toggle = Boolean(t.toggle), Fn.typeCheckConfig(at, t, ft), t
            }, t._getDimension = function () {
                return st(this._element).hasClass(vt) ? vt : yt
            }, t._getParent = function () {
                var n = this, t = null;
                Fn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(t.querySelectorAll(e));
                return st(i).each(function (t, e) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                }), t
            }, t._addAriaAndCollapsedClass = function (t, e) {
                if (t) {
                    var n = st(t).hasClass(gt);
                    e.length && st(e).toggleClass(pt, !n).attr("aria-expanded", n)
                }
            }, a._getTargetFromElement = function (t) {
                var e = Fn.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }, a._jQueryInterface = function (i) {
                return this.each(function () {
                    var t = st(this), e = t.data(lt), n = l({}, ut, t.data(), "object" == typeof i && i ? i : {});
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(lt, e)), "string" == typeof i) {
                        if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, s(a, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default", get: function () {
                    return ut
                }
            }]), a
        }(), st(document).on(dt.CLICK_DATA_API, Ct, function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = st(this), e = Fn.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(e));
            st(i).each(function () {
                var t = st(this), e = t.data(lt) ? "toggle" : n.data();
                Tt._jQueryInterface.call(t, e)
            })
        }), st.fn[at] = Tt._jQueryInterface, st.fn[at].Constructor = Tt, st.fn[at].noConflict = function () {
            return st.fn[at] = ht, Tt._jQueryInterface
        }, Tt),
        Vn = (St = "dropdown", At = "." + (It = "bs.dropdown"), Dt = ".data-api", wt = (bt = e).fn[St], Nt = new RegExp("38|40|27"), Ot = {
            HIDE: "hide" + At,
            HIDDEN: "hidden" + At,
            SHOW: "show" + At,
            SHOWN: "shown" + At,
            CLICK: "click" + At,
            CLICK_DATA_API: "click" + At + Dt,
            KEYDOWN_DATA_API: "keydown" + At + Dt,
            KEYUP_DATA_API: "keyup" + At + Dt
        }, kt = "disabled", Pt = "show", jt = "dropup", Ht = "dropright", Lt = "dropleft", Rt = "dropdown-menu-right", xt = "position-static", Wt = '[data-toggle="dropdown"]', Ut = ".dropdown form", qt = ".dropdown-menu", Ft = ".navbar-nav", Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Mt = "top-start", Qt = "top-end", Bt = "bottom-start", Vt = "bottom-end", Yt = "right-start", zt = "left-start", Jt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, Zt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, Gt = function () {
            function c(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var t = c.prototype;
            return t.toggle = function () {
                if (!this._element.disabled && !bt(this._element).hasClass(kt)) {
                    var t = c._getParentFromElement(this._element), e = bt(this._menu).hasClass(Pt);
                    if (c._clearMenus(), !e) {
                        var n = {relatedTarget: this._element}, i = bt.Event(Ot.SHOW, n);
                        if (bt(t).trigger(i), !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof h) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var r = this._element;
                                "parent" === this._config.reference ? r = t : Fn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && bt(t).addClass(xt), this._popper = new h(r, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === bt(t).closest(Ft).length && bt(document.body).children().on("mouseover", null, bt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), bt(this._menu).toggleClass(Pt), bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN, n))
                        }
                    }
                }
            }, t.dispose = function () {
                bt.removeData(this._element, It), bt(this._element).off(At), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function () {
                var e = this;
                bt(this._element).on(Ot.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function (t) {
                return t = l({}, this.constructor.Default, bt(this._element).data(), t), Fn.typeCheckConfig(St, t, this.constructor.DefaultType), t
            }, t._getMenuElement = function () {
                if (!this._menu) {
                    var t = c._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(qt))
                }
                return this._menu
            }, t._getPlacement = function () {
                var t = bt(this._element.parentNode), e = Bt;
                return t.hasClass(jt) ? (e = Mt, bt(this._menu).hasClass(Rt) && (e = Qt)) : t.hasClass(Ht) ? e = Yt : t.hasClass(Lt) ? e = zt : bt(this._menu).hasClass(Rt) && (e = Vt), e
            }, t._detectNavbar = function () {
                return 0 < bt(this._element).closest(".navbar").length
            }, t._getPopperConfig = function () {
                var e = this, t = {};
                "function" == typeof this._config.offset ? t.fn = function (t) {
                    return t.offsets = l({}, t.offsets, e._config.offset(t.offsets) || {}), t
                } : t.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: t,
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {enabled: !1}), n
            }, c._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = bt(this).data(It);
                    if (t || (t = new c(this, "object" == typeof e ? e : null), bt(this).data(It, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, c._clearMenus = function (t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = e.length; n < i; n++) {
                    var r = c._getParentFromElement(e[n]), o = bt(e[n]).data(It), s = {relatedTarget: e[n]};
                    if (t && "click" === t.type && (s.clickEvent = t), o) {
                        var a = o._menu;
                        if (bt(r).hasClass(Pt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && bt.contains(r, t.target))) {
                            var l = bt.Event(Ot.HIDE, s);
                            bt(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && bt(document.body).children().off("mouseover", null, bt.noop), e[n].setAttribute("aria-expanded", "false"), bt(a).removeClass(Pt), bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN, s)))
                        }
                    }
                }
            }, c._getParentFromElement = function (t) {
                var e, n = Fn.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)), e || t.parentNode
            }, c._dataApiKeydownHandler = function (t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || bt(t.target).closest(qt).length)) : Nt.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !bt(this).hasClass(kt))) {
                    var e = c._getParentFromElement(this), n = bt(e).hasClass(Pt);
                    if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                        var i = [].slice.call(e.querySelectorAll(Kt));
                        if (0 !== i.length) {
                            var r = i.indexOf(t.target);
                            38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var o = e.querySelector(Wt);
                            bt(o).trigger("focus")
                        }
                        bt(this).trigger("click")
                    }
                }
            }, s(c, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default", get: function () {
                    return Jt
                }
            }, {
                key: "DefaultType", get: function () {
                    return Zt
                }
            }]), c
        }(), bt(document).on(Ot.KEYDOWN_DATA_API, Wt, Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API, qt, Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Gt._clearMenus).on(Ot.CLICK_DATA_API, Wt, function (t) {
            t.preventDefault(), t.stopPropagation(), Gt._jQueryInterface.call(bt(this), "toggle")
        }).on(Ot.CLICK_DATA_API, Ut, function (t) {
            t.stopPropagation()
        }), bt.fn[St] = Gt._jQueryInterface, bt.fn[St].Constructor = Gt, bt.fn[St].noConflict = function () {
            return bt.fn[St] = wt, Gt._jQueryInterface
        }, Gt), Yn = (Xt = "modal", ee = "." + (te = "bs.modal"), ne = ($t = e).fn[Xt], ie = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, re = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, oe = {
            HIDE: "hide" + ee,
            HIDDEN: "hidden" + ee,
            SHOW: "show" + ee,
            SHOWN: "shown" + ee,
            FOCUSIN: "focusin" + ee,
            RESIZE: "resize" + ee,
            CLICK_DISMISS: "click.dismiss" + ee,
            KEYDOWN_DISMISS: "keydown.dismiss" + ee,
            MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
            CLICK_DATA_API: "click" + ee + ".data-api"
        }, se = "modal-scrollbar-measure", ae = "modal-backdrop", le = "modal-open", ce = "fade", he = "show", ue = ".modal-dialog", fe = '[data-toggle="modal"]', de = '[data-dismiss="modal"]', ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _e = ".sticky-top", me = function () {
            function r(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(ue), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }
            var t = r.prototype;
            return t.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }, t.show = function (t) {
                var e = this;
                if (!this._isTransitioning && !this._isShown) {
                    $t(this._element).hasClass(ce) && (this._isTransitioning = !0);
                    var n = $t.Event(oe.SHOW, {relatedTarget: t});
                    $t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $t(document.body).addClass(le), this._setEscapeEvent(), this._setResizeEvent(), $t(this._element).on(oe.CLICK_DISMISS, de, function (t) {
                        return e.hide(t)
                    }), $t(this._dialog).on(oe.MOUSEDOWN_DISMISS, function () {
                        $t(e._element).one(oe.MOUSEUP_DISMISS, function (t) {
                            $t(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return e._showElement(t)
                    }))
                }
            }, t.hide = function (t) {
                var e = this;
                if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = $t.Event(oe.HIDE);
                    if ($t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = $t(this._element).hasClass(ce);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $t(document).off(oe.FOCUSIN), $t(this._element).removeClass(he), $t(this._element).off(oe.CLICK_DISMISS), $t(this._dialog).off(oe.MOUSEDOWN_DISMISS), i) {
                            var r = Fn.getTransitionDurationFromElement(this._element);
                            $t(this._element).one(Fn.TRANSITION_END, function (t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function () {
                $t.removeData(this._element, te), $t(window, document, this._element, this._backdrop).off(ee), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, t.handleUpdate = function () {
                this._adjustDialog()
            }, t._getConfig = function (t) {
                return t = l({}, ie, t), Fn.typeCheckConfig(Xt, t, re), t
            }, t._showElement = function (t) {
                var e = this, n = $t(this._element).hasClass(ce);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Fn.reflow(this._element), $t(this._element).addClass(he), this._config.focus && this._enforceFocus();
                var i = $t.Event(oe.SHOWN, {relatedTarget: t}), r = function () {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, $t(e._element).trigger(i)
                };
                if (n) {
                    var o = Fn.getTransitionDurationFromElement(this._element);
                    $t(this._dialog).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r()
            }, t._enforceFocus = function () {
                var e = this;
                $t(document).off(oe.FOCUSIN).on(oe.FOCUSIN, function (t) {
                    document !== t.target && e._element !== t.target && 0 === $t(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard ? $t(this._element).on(oe.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || $t(this._element).off(oe.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function () {
                var e = this;
                this._isShown ? $t(window).on(oe.RESIZE, function (t) {
                    return e.handleUpdate(t)
                }) : $t(window).off(oe.RESIZE)
            }, t._hideModal = function () {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    $t(document.body).removeClass(le), t._resetAdjustments(), t._resetScrollbar(), $t(t._element).trigger(oe.HIDDEN)
                })
            }, t._removeBackdrop = function () {
                this._backdrop && ($t(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function (t) {
                var e = this, n = $t(this._element).hasClass(ce) ? ce : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = ae, n && this._backdrop.classList.add(n), $t(this._backdrop).appendTo(document.body), $t(this._element).on(oe.CLICK_DISMISS, function (t) {
                        e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                    }), n && Fn.reflow(this._backdrop), $t(this._backdrop).addClass(he), !t) return;
                    if (!n) return void t();
                    var i = Fn.getTransitionDurationFromElement(this._backdrop);
                    $t(this._backdrop).one(Fn.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    $t(this._backdrop).removeClass(he);
                    var r = function () {
                        e._removeBackdrop(), t && t()
                    };
                    if ($t(this._element).hasClass(ce)) {
                        var o = Fn.getTransitionDurationFromElement(this._backdrop);
                        $t(this._backdrop).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r()
                } else t && t()
            }, t._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function () {
                var r = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(ge)), e = [].slice.call(document.querySelectorAll(_e));
                    $t(t).each(function (t, e) {
                        var n = e.style.paddingRight, i = $t(e).css("padding-right");
                        $t(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                    }), $t(e).each(function (t, e) {
                        var n = e.style.marginRight, i = $t(e).css("margin-right");
                        $t(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight, i = $t(document.body).css("padding-right");
                    $t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
            }, t._resetScrollbar = function () {
                var t = [].slice.call(document.querySelectorAll(ge));
                $t(t).each(function (t, e) {
                    var n = $t(e).data("padding-right");
                    $t(e).removeData("padding-right"), e.style.paddingRight = n || ""
                });
                var e = [].slice.call(document.querySelectorAll("" + _e));
                $t(e).each(function (t, e) {
                    var n = $t(e).data("margin-right");
                    "undefined" != typeof n && $t(e).css("margin-right", n).removeData("margin-right")
                });
                var n = $t(document.body).data("padding-right");
                $t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, t._getScrollbarWidth = function () {
                var t = document.createElement("div");
                t.className = se, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, r._jQueryInterface = function (n, i) {
                return this.each(function () {
                    var t = $t(this).data(te), e = l({}, ie, $t(this).data(), "object" == typeof n && n ? n : {});
                    if (t || (t = new r(this, e), $t(this).data(te, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i)
                    } else e.show && t.show(i)
                })
            }, s(r, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default", get: function () {
                    return ie
                }
            }]), r
        }(), $t(document).on(oe.CLICK_DATA_API, fe, function (t) {
            var e, n = this, i = Fn.getSelectorFromElement(this);
            i && (e = document.querySelector(i));
            var r = $t(e).data(te) ? "toggle" : l({}, $t(e).data(), $t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var o = $t(e).one(oe.SHOW, function (t) {
                t.isDefaultPrevented() || o.one(oe.HIDDEN, function () {
                    $t(n).is(":visible") && n.focus()
                })
            });
            me._jQueryInterface.call($t(e), r, this)
        }), $t.fn[Xt] = me._jQueryInterface, $t.fn[Xt].Constructor = me, $t.fn[Xt].noConflict = function () {
            return $t.fn[Xt] = ne, me._jQueryInterface
        }, me),
        zn = (ve = "tooltip", Ee = "." + (ye = "bs.tooltip"), Ce = (pe = e).fn[ve], Te = "bs-tooltip", be = new RegExp("(^|\\s)" + Te + "\\S+", "g"), Ae = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !(Ie = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}),
            selector: !(Se = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }),
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, we = "out", Ne = {
            HIDE: "hide" + Ee,
            HIDDEN: "hidden" + Ee,
            SHOW: (De = "show") + Ee,
            SHOWN: "shown" + Ee,
            INSERTED: "inserted" + Ee,
            CLICK: "click" + Ee,
            FOCUSIN: "focusin" + Ee,
            FOCUSOUT: "focusout" + Ee,
            MOUSEENTER: "mouseenter" + Ee,
            MOUSELEAVE: "mouseleave" + Ee
        }, Oe = "fade", ke = "show", Pe = ".tooltip-inner", je = ".arrow", He = "hover", Le = "focus", Re = "click", xe = "manual", We = function () {
            function i(t, e) {
                if ("undefined" == typeof h) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function () {
                this._isEnabled = !0
            }, t.disable = function () {
                this._isEnabled = !1
            }, t.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function (t) {
                if (this._isEnabled) if (t) {
                    var e = this.constructor.DATA_KEY, n = pe(t.currentTarget).data(e);
                    n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (pe(this.getTipElement()).hasClass(ke)) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, t.dispose = function () {
                clearTimeout(this._timeout), pe.removeData(this.element, this.constructor.DATA_KEY), pe(this.element).off(this.constructor.EVENT_KEY), pe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && pe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function () {
                var e = this;
                if ("none" === pe(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = pe.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    pe(this.element).trigger(t);
                    var n = pe.contains(this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !n) return;
                    var i = this.getTipElement(), r = Fn.getUID(this.constructor.NAME);
                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && pe(i).addClass(Oe);
                    var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        s = this._getAttachment(o);
                    this.addAttachmentClass(s);
                    var a = !1 === this.config.container ? document.body : pe(document).find(this.config.container);
                    pe(i).data(this.constructor.DATA_KEY, this), pe.contains(this.element.ownerDocument.documentElement, this.tip) || pe(i).appendTo(a), pe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new h(this.element, i, {
                        placement: s,
                        modifiers: {
                            offset: {offset: this.config.offset},
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: je},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function (t) {
                            e._handlePopperPlacementChange(t)
                        }
                    }), pe(i).addClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().on("mouseover", null, pe.noop);
                    var l = function () {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, pe(e.element).trigger(e.constructor.Event.SHOWN), t === we && e._leave(null, e)
                    };
                    if (pe(this.tip).hasClass(Oe)) {
                        var c = Fn.getTransitionDurationFromElement(this.tip);
                        pe(this.tip).one(Fn.TRANSITION_END, l).emulateTransitionEnd(c)
                    } else l()
                }
            }, t.hide = function (t) {
                var e = this, n = this.getTipElement(), i = pe.Event(this.constructor.Event.HIDE), r = function () {
                    e._hoverState !== De && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), pe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                };
                if (pe(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (pe(n).removeClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().off("mouseover", null, pe.noop), this._activeTrigger[Re] = !1, this._activeTrigger[Le] = !1, this._activeTrigger[He] = !1, pe(this.tip).hasClass(Oe)) {
                        var o = Fn.getTransitionDurationFromElement(n);
                        pe(n).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r();
                    this._hoverState = ""
                }
            }, t.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function () {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function (t) {
                pe(this.getTipElement()).addClass(Te + "-" + t)
            }, t.getTipElement = function () {
                return this.tip = this.tip || pe(this.config.template)[0], this.tip
            }, t.setContent = function () {
                var t = this.getTipElement();
                this.setElementContent(pe(t.querySelectorAll(Pe)), this.getTitle()), pe(t).removeClass(Oe + " " + ke)
            }, t.setElementContent = function (t, e) {
                var n = this.config.html;
                "object" == typeof e && (e.nodeType || e.jquery) ? n ? pe(e).parent().is(t) || t.empty().append(e) : t.text(pe(e).text()) : t[n ? "html" : "text"](e)
            }, t.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, t._getAttachment = function (t) {
                return Ie[t.toUpperCase()]
            }, t._setListeners = function () {
                var i = this;
                this.config.trigger.split(" ").forEach(function (t) {
                    if ("click" === t) pe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
                        return i.toggle(t)
                    }); else if (t !== xe) {
                        var e = t === He ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === He ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        pe(i.element).on(e, i.config.selector, function (t) {
                            return i._enter(t)
                        }).on(n, i.config.selector, function (t) {
                            return i._leave(t)
                        })
                    }
                    pe(i.element).closest(".modal").on("hide.bs.modal", function () {
                        return i.hide()
                    })
                }), this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function () {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function (t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || pe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Le : He] = !0), pe(e.getTipElement()).hasClass(ke) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout), e._hoverState = De, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
                    e._hoverState === De && e.show()
                }, e.config.delay.show) : e.show())
            }, t._leave = function (t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || pe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Le : He] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = we, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
                    e._hoverState === we && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function (t) {
                return "number" == typeof (t = l({}, this.constructor.Default, pe(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Fn.typeCheckConfig(ve, t, this.constructor.DefaultType), t
            }, t._getDelegateConfig = function () {
                var t = {};
                if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function () {
                var t = pe(this.getTipElement()), e = t.attr("class").match(be);
                null !== e && e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function (t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, t._fixTransition = function () {
                var t = this.getTipElement(), e = this.config.animation;
                null === t.getAttribute("x-placement") && (pe(t).removeClass(Oe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = pe(this).data(ye), e = "object" == typeof n && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), pe(this).data(ye, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default", get: function () {
                    return Ae
                }
            }, {
                key: "NAME", get: function () {
                    return ve
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return ye
                }
            }, {
                key: "Event", get: function () {
                    return Ne
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return Ee
                }
            }, {
                key: "DefaultType", get: function () {
                    return Se
                }
            }]), i
        }(), pe.fn[ve] = We._jQueryInterface, pe.fn[ve].Constructor = We, pe.fn[ve].noConflict = function () {
            return pe.fn[ve] = Ce, We._jQueryInterface
        }, We),
        Jn = (qe = "popover", Ke = "." + (Fe = "bs.popover"), Me = (Ue = e).fn[qe], Qe = "bs-popover", Be = new RegExp("(^|\\s)" + Qe + "\\S+", "g"), Ve = l({}, zn.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Ye = l({}, zn.DefaultType, {content: "(string|element|function)"}), ze = "fade", Ze = ".popover-header", Ge = ".popover-body", $e = {
            HIDE: "hide" + Ke,
            HIDDEN: "hidden" + Ke,
            SHOW: (Je = "show") + Ke,
            SHOWN: "shown" + Ke,
            INSERTED: "inserted" + Ke,
            CLICK: "click" + Ke,
            FOCUSIN: "focusin" + Ke,
            FOCUSOUT: "focusout" + Ke,
            MOUSEENTER: "mouseenter" + Ke,
            MOUSELEAVE: "mouseleave" + Ke
        }, Xe = function (t) {
            var e, n;
            function i() {
                return t.apply(this, arguments) || this
            }
            n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function (t) {
                Ue(this.getTipElement()).addClass(Qe + "-" + t)
            }, r.getTipElement = function () {
                return this.tip = this.tip || Ue(this.config.template)[0], this.tip
            }, r.setContent = function () {
                var t = Ue(this.getTipElement());
                this.setElementContent(t.find(Ze), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ge), e), t.removeClass(ze + " " + Je)
            }, r._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function () {
                var t = Ue(this.getTipElement()), e = t.attr("class").match(Be);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = Ue(this).data(Fe), e = "object" == typeof n ? n : null;
                    if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), Ue(this).data(Fe, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default", get: function () {
                    return Ve
                }
            }, {
                key: "NAME", get: function () {
                    return qe
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return Fe
                }
            }, {
                key: "Event", get: function () {
                    return $e
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return Ke
                }
            }, {
                key: "DefaultType", get: function () {
                    return Ye
                }
            }]), i
        }(zn), Ue.fn[qe] = Xe._jQueryInterface, Ue.fn[qe].Constructor = Xe, Ue.fn[qe].noConflict = function () {
            return Ue.fn[qe] = Me, Xe._jQueryInterface
        }, Xe), Zn = (en = "scrollspy", rn = "." + (nn = "bs.scrollspy"), on = (tn = e).fn[en], sn = {
            offset: 10,
            method: "auto",
            target: ""
        }, an = {offset: "number", method: "string", target: "(string|element)"}, ln = {
            ACTIVATE: "activate" + rn,
            SCROLL: "scroll" + rn,
            LOAD_DATA_API: "load" + rn + ".data-api"
        }, cn = "dropdown-item", hn = "active", un = '[data-spy="scroll"]', fn = ".active", dn = ".nav, .list-group", gn = ".nav-link", _n = ".nav-item", mn = ".list-group-item", pn = ".dropdown", vn = ".dropdown-item", yn = ".dropdown-toggle", En = "offset", Cn = "position", Tn = function () {
            function n(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + gn + "," + this._config.target + " " + mn + "," + this._config.target + " " + vn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, tn(this._scrollElement).on(ln.SCROLL, function (t) {
                    return n._process(t)
                }), this.refresh(), this._process()
            }
            var t = n.prototype;
            return t.refresh = function () {
                var e = this, t = this._scrollElement === this._scrollElement.window ? En : Cn,
                    r = "auto" === this._config.method ? t : this._config.method, o = r === Cn ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
                    var e, n = Fn.getSelectorFromElement(t);
                    if (n && (e = document.querySelector(n)), e) {
                        var i = e.getBoundingClientRect();
                        if (i.width || i.height) return [tn(e)[r]().top + o, n]
                    }
                    return null
                }).filter(function (t) {
                    return t
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function () {
                tn.removeData(this._element, nn), tn(this._scrollElement).off(rn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function (t) {
                if ("string" != typeof (t = l({}, sn, "object" == typeof t && t ? t : {})).target) {
                    var e = tn(t.target).attr("id");
                    e || (e = Fn.getUID(en), tn(t.target).attr("id", e)), t.target = "#" + e
                }
                return Fn.typeCheckConfig(en, t, an), t
            }, t._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function () {
                var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }, t._activate = function (e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",");
                t = t.map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var n = tn([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass(cn) ? (n.closest(pn).find(yn).addClass(hn), n.addClass(hn)) : (n.addClass(hn), n.parents(dn).prev(gn + ", " + mn).addClass(hn), n.parents(dn).prev(_n).children(gn).addClass(hn)), tn(this._scrollElement).trigger(ln.ACTIVATE, {relatedTarget: e})
            }, t._clear = function () {
                var t = [].slice.call(document.querySelectorAll(this._selector));
                tn(t).filter(fn).removeClass(hn)
            }, n._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = tn(this).data(nn);
                    if (t || (t = new n(this, "object" == typeof e && e), tn(this).data(nn, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default", get: function () {
                    return sn
                }
            }]), n
        }(), tn(window).on(ln.LOAD_DATA_API, function () {
            for (var t = [].slice.call(document.querySelectorAll(un)), e = t.length; e--;) {
                var n = tn(t[e]);
                Tn._jQueryInterface.call(n, n.data())
            }
        }), tn.fn[en] = Tn._jQueryInterface, tn.fn[en].Constructor = Tn, tn.fn[en].noConflict = function () {
            return tn.fn[en] = on, Tn._jQueryInterface
        }, Tn), Gn = (In = "." + (Sn = "bs.tab"), An = (bn = e).fn.tab, Dn = {
            HIDE: "hide" + In,
            HIDDEN: "hidden" + In,
            SHOW: "show" + In,
            SHOWN: "shown" + In,
            CLICK_DATA_API: "click" + In + ".data-api"
        }, wn = "dropdown-menu", Nn = "active", On = "disabled", kn = "fade", Pn = "show", jn = ".dropdown", Hn = ".nav, .list-group", Ln = ".active", Rn = "> li > .active", xn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Wn = ".dropdown-toggle", Un = "> .dropdown-menu .active", qn = function () {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.show = function () {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && bn(this._element).hasClass(Nn) || bn(this._element).hasClass(On))) {
                    var t, i, e = bn(this._element).closest(Hn)[0], r = Fn.getSelectorFromElement(this._element);
                    if (e) {
                        var o = "UL" === e.nodeName ? Rn : Ln;
                        i = (i = bn.makeArray(bn(e).find(o)))[i.length - 1]
                    }
                    var s = bn.Event(Dn.HIDE, {relatedTarget: this._element}), a = bn.Event(Dn.SHOW, {relatedTarget: i});
                    if (i && bn(i).trigger(s), bn(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (t = document.querySelector(r)), this._activate(this._element, e);
                        var l = function () {
                            var t = bn.Event(Dn.HIDDEN, {relatedTarget: n._element}),
                                e = bn.Event(Dn.SHOWN, {relatedTarget: i});
                            bn(i).trigger(t), bn(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function () {
                bn.removeData(this._element, Sn), this._element = null
            }, t._activate = function (t, e, n) {
                var i = this, r = ("UL" === e.nodeName ? bn(e).find(Rn) : bn(e).children(Ln))[0],
                    o = n && r && bn(r).hasClass(kn), s = function () {
                        return i._transitionComplete(t, r, n)
                    };
                if (r && o) {
                    var a = Fn.getTransitionDurationFromElement(r);
                    bn(r).one(Fn.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, t._transitionComplete = function (t, e, n) {
                if (e) {
                    bn(e).removeClass(Pn + " " + Nn);
                    var i = bn(e.parentNode).find(Un)[0];
                    i && bn(i).removeClass(Nn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (bn(t).addClass(Nn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Fn.reflow(t), bn(t).addClass(Pn), t.parentNode && bn(t.parentNode).hasClass(wn)) {
                    var r = bn(t).closest(jn)[0];
                    if (r) {
                        var o = [].slice.call(r.querySelectorAll(Wn));
                        bn(o).addClass(Nn)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = bn(this), e = t.data(Sn);
                    if (e || (e = new i(this), t.data(Sn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION", get: function () {
                    return "4.1.3"
                }
            }]), i
        }(), bn(document).on(Dn.CLICK_DATA_API, xn, function (t) {
            t.preventDefault(), qn._jQueryInterface.call(bn(this), "show")
        }), bn.fn.tab = qn._jQueryInterface, bn.fn.tab.Constructor = qn, bn.fn.tab.noConflict = function () {
            return bn.fn.tab = An, qn._jQueryInterface
        }, qn);
    !function (t) {
        if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e), t.Util = Fn, t.Alert = Kn, t.Button = Mn, t.Carousel = Qn, t.Collapse = Bn, t.Dropdown = Vn, t.Modal = Yn, t.Popover = Jn, t.Scrollspy = Zn, t.Tab = Gn, t.Tooltip = zn, Object.defineProperty(t, "__esModule", {value: !0})
});
/*card*/
var card = (function (modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
            return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {exports: {}, id: moduleId, loaded: false};
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.loaded = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(0);
})([(function (module, exports, __webpack_require__) {
    (function (global) {
        var Card, QJ, extend, payment, bind = function (fn, me) {
            return function () {
                return fn.apply(me, arguments);
            };
        };
        __webpack_require__(1);
        QJ = __webpack_require__(5);
        payment = __webpack_require__(6);
        extend = __webpack_require__(7);
        Card = (function () {
            var bindVal;
            Card.prototype.initializedDataAttr = "data-jp-card-initialized";
            Card.prototype.cardTemplate = '' + '<div class="jp-card-container">' + '<div class="jp-card">' + '<div class="jp-card-front">' + '<div class="jp-card-logo jp-card-elo">' + '<div class="e">e</div>' + '<div class="l">l</div>' + '<div class="o">o</div>' + '</div>' + '<div class="jp-card-logo jp-card-visa">Visa</div>' + '<div class="jp-card-logo jp-card-visaelectron">Visa<div class="elec">Electron</div></div>' + '<div class="jp-card-logo jp-card-mastercard">Mastercard</div>' + '<div class="jp-card-logo jp-card-maestro">Maestro</div>' + '<div class="jp-card-logo jp-card-amex"></div>' + '<div class="jp-card-logo jp-card-discover">discover</div>' + '<div class="jp-card-logo jp-card-dinersclub"></div>' + '<div class="jp-card-logo jp-card-dankort"><div class="dk"><div class="d"></div><div class="k"></div></div></div>' + '<div class="jp-card-logo jp-card-jcb">' + '<div class="j">J</div>' + '<div class="c">C</div>' + '<div class="b">B</div>' + '</div>' + '<div class="jp-card-lower">' + '<div class="jp-card-shiny"></div>' + '<div class="jp-card-cvc jp-card-display">{{cvc}}</div>' + '<div class="jp-card-number jp-card-display">{{number}}</div>' + '<div class="jp-card-name jp-card-display">{{name}}</div>' + '<div class="jp-card-expiry jp-card-display" data-before="{{monthYear}}" data-after="{{validDate}}">{{expiry}}</div>' + '</div>' + '</div>' + '<div class="jp-card-back">' + '<div class="jp-card-bar"></div>' + '<div class="jp-card-cvc jp-card-display">{{cvc}}</div>' + '<div class="jp-card-shiny"></div>' + '</div>' + '</div>' + '</div>';
            Card.prototype.template = function (tpl, data) {
                return tpl.replace(/\{\{(.*?)\}\}/g, function (match, key, str) {
                    return data[key];
                });
            };
            Card.prototype.cardTypes = ['jp-card-amex', 'jp-card-dankort', 'jp-card-dinersclub', 'jp-card-discover', 'jp-card-jcb', 'jp-card-laser', 'jp-card-maestro', 'jp-card-mastercard', 'jp-card-unionpay', 'jp-card-visa', 'jp-card-visaelectron', 'jp-card-elo'];
            Card.prototype.defaults = {
                formatting: true,
                formSelectors: {
                    numberInput: 'input[name="number"]',
                    expiryInput: 'input[name="expiry"]',
                    cvcInput: 'input[name="cvc"]',
                    nameInput: 'input[name="name"]'
                },
                cardSelectors: {
                    cardContainer: '.jp-card-container',
                    card: '.jp-card',
                    numberDisplay: '.jp-card-number',
                    expiryDisplay: '.jp-card-expiry',
                    cvcDisplay: '.jp-card-cvc',
                    nameDisplay: '.jp-card-name'
                },
                messages: {validDate: 'valid\nthru', monthYear: 'month/year'},
                placeholders: {
                    number: '&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;',
                    cvc: '&bull;&bull;&bull;',
                    expiry: '&bull;&bull;/&bull;&bull;',
                    name: 'Full Name'
                },
                masks: {cardNumber: false},
                classes: {valid: 'jp-card-valid', invalid: 'jp-card-invalid'},
                debug: false
            };
            function Card(opts) {
                this.maskCardNumber = bind(this.maskCardNumber, this);
                var toInitialize;
                this.options = extend(true, this.defaults, opts);
                if (!this.options.form) {
                    console.log("Please provide a form");
                    return;
                }
                this.$el = QJ(this.options.form);
                if (!this.options.container) {
                    console.log("Please provide a container");
                    return;
                }
                this.$container = QJ(this.options.container);
                toInitialize = QJ.isDOMElement(this.$container) ? this.$container : this.$container[0];
                if (toInitialize.getAttribute(this.initializedDataAttr)) {
                    return;
                }
                toInitialize.setAttribute(this.initializedDataAttr, true);
                this.render();
                this.attachHandlers();
                this.handleInitialPlaceholders();
            }
            Card.prototype.render = function () {
                var $cardContainer, baseWidth, name, obj, ref, ref1, selector, ua;
                QJ.append(this.$container, this.template(this.cardTemplate, extend({}, this.options.messages, this.options.placeholders)));
                ref = this.options.cardSelectors;
                for (name in ref) {
                    selector = ref[name];
                    this["$" + name] = QJ.find(this.$container, selector);
                }
                ref1 = this.options.formSelectors;
                for (name in ref1) {
                    selector = ref1[name];
                    selector = this.options[name] ? this.options[name] : selector;
                    obj = QJ.find(this.$el, selector);
                    if (!obj.length && this.options.debug) {
                        console.error("Card can't find a " + name + " in your form.");
                    }
                    this["$" + name] = obj;
                }
                if (this.options.formatting) {
                    Payment.formatCardNumber(this.$numberInput);
                    Payment.formatCardCVC(this.$cvcInput);
                    Payment.formatCardExpiry(this.$expiryInput);
                }
                if (this.options.width) {
                    $cardContainer = QJ(this.options.cardSelectors.cardContainer)[0];
                    baseWidth = parseInt($cardContainer.clientWidth || window.getComputedStyle($cardContainer).width);
                    $cardContainer.style.transform = "scale(" + (this.options.width / baseWidth) + ")";
                }
                if (typeof navigator !== "undefined" && navigator !== null ? navigator.userAgent : void 0) {
                    ua = navigator.userAgent.toLowerCase();
                    if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1) {
                        QJ.addClass(this.$card, 'jp-card-safari');
                    }
                }
                if (/MSIE 10\./i.test(navigator.userAgent)) {
                    QJ.addClass(this.$card, 'jp-card-ie-10');
                }
                if (/rv:11.0/i.test(navigator.userAgent)) {
                    return QJ.addClass(this.$card, 'jp-card-ie-11');
                }
            };
            Card.prototype.attachHandlers = function () {
                var expiryFilters, numberInputFilters;
                numberInputFilters = [this.validToggler('cardNumber')];
                if (this.options.masks.cardNumber) {
                    numberInputFilters.push(this.maskCardNumber);
                }
                bindVal(this.$numberInput, this.$numberDisplay, {fill: false, filters: numberInputFilters});
                QJ.on(this.$numberInput, 'payment.cardType', this.handle('setCardType'));
                expiryFilters = [function (val) {
                    return val.replace(/(\s+)/g, '');
                }];
                expiryFilters.push(this.validToggler('cardExpiry'));
                bindVal(this.$expiryInput, this.$expiryDisplay, {
                    join: function (text) {
                        if (text[0].length === 2 || text[1]) {
                            return "/";
                        } else {
                            return "";
                        }
                    }, filters: expiryFilters
                });
                bindVal(this.$cvcInput, this.$cvcDisplay, {filters: this.validToggler('cardCVC')});
                QJ.on(this.$cvcInput, 'focus', this.handle('flipCard'));
                QJ.on(this.$cvcInput, 'blur', this.handle('unflipCard'));
                return bindVal(this.$nameInput, this.$nameDisplay, {
                    fill: false,
                    filters: this.validToggler('cardHolderName'),
                    join: ' '
                });
            };
            Card.prototype.handleInitialPlaceholders = function () {
                var el, name, ref, results, selector;
                ref = this.options.formSelectors;
                results = [];
                for (name in ref) {
                    selector = ref[name];
                    el = this["$" + name];
                    if (QJ.val(el)) {
                        QJ.trigger(el, 'paste');
                        results.push(setTimeout(function () {
                            return QJ.trigger(el, 'keyup');
                        }));
                    } else {
                        results.push(void 0);
                    }
                }
                return results;
            };
            Card.prototype.handle = function (fn) {
                return (function (_this) {
                    return function (e) {
                        var args;
                        args = Array.prototype.slice.call(arguments);
                        args.unshift(e.target);
                        return _this.handlers[fn].apply(_this, args);
                    };
                })(this);
            };
            Card.prototype.validToggler = function (validatorName) {
                var isValid;
                if (validatorName === "cardExpiry") {
                    isValid = function (val) {
                        var objVal;
                        objVal = Payment.fns.cardExpiryVal(val);
                        return Payment.fns.validateCardExpiry(objVal.month, objVal.year);
                    };
                } else if (validatorName === "cardCVC") {
                    isValid = (function (_this) {
                        return function (val) {
                            return Payment.fns.validateCardCVC(val, _this.cardType);
                        };
                    })(this);
                } else if (validatorName === "cardNumber") {
                    isValid = function (val) {
                        return Payment.fns.validateCardNumber(val);
                    };
                } else if (validatorName === "cardHolderName") {
                    isValid = function (val) {
                        return val !== "";
                    };
                }
                return (function (_this) {
                    return function (val, $in, $out) {
                        var result;
                        result = isValid(val);
                        _this.toggleValidClass($in, result);
                        _this.toggleValidClass($out, result);
                        return val;
                    };
                })(this);
            };
            Card.prototype.toggleValidClass = function (el, test) {
                QJ.toggleClass(el, this.options.classes.valid, test);
                return QJ.toggleClass(el, this.options.classes.invalid, !test);
            };
            Card.prototype.maskCardNumber = function (val, el, out) {
                var mask, numbers;
                mask = this.options.masks.cardNumber;
                numbers = val.split(' ');
                if (numbers.length >= 3) {
                    numbers.forEach(function (item, idx) {
                        if (idx !== numbers.length - 1) {
                            return numbers[idx] = numbers[idx].replace(/\d/g, mask);
                        }
                    });
                    return numbers.join(' ');
                } else {
                    return val.replace(/\d/g, mask);
                }
            };
            Card.prototype.handlers = {
                setCardType: function ($el, e) {
                    var cardType;
                    cardType = e.data;
                    if (!QJ.hasClass(this.$card, cardType)) {
                        QJ.removeClass(this.$card, 'jp-card-unknown');
                        QJ.removeClass(this.$card, this.cardTypes.join(' '));
                        QJ.addClass(this.$card, "jp-card-" + cardType);
                        QJ.toggleClass(this.$card, 'jp-card-identified', cardType !== 'unknown');
                        return this.cardType = cardType;
                    }
                }, flipCard: function () {
                    return QJ.addClass(this.$card, 'jp-card-flipped');
                }, unflipCard: function () {
                    return QJ.removeClass(this.$card, 'jp-card-flipped');
                }
            };
            bindVal = function (el, out, opts) {
                var joiner, o, outDefaults;
                if (opts == null) {
                    opts = {};
                }
                opts.fill = opts.fill || false;
                opts.filters = opts.filters || [];
                if (!(opts.filters instanceof Array)) {
                    opts.filters = [opts.filters];
                }
                opts.join = opts.join || "";
                if (!(typeof opts.join === "function")) {
                    joiner = opts.join;
                    opts.join = function () {
                        return joiner;
                    };
                }
                outDefaults = (function () {
                    var j, len, results;
                    results = [];
                    for (j = 0, len = out.length; j < len; j++) {
                        o = out[j];
                        results.push(o.textContent);
                    }
                    return results;
                })();
                QJ.on(el, 'focus', function () {
                    return QJ.addClass(out, 'jp-card-focused');
                });
                QJ.on(el, 'blur', function () {
                    return QJ.removeClass(out, 'jp-card-focused');
                });
                QJ.on(el, 'keyup change paste', function (e) {
                    var elem, filter, i, j, join, k, len, len1, outEl, outVal, ref, results, val;
                    val = (function () {
                        var j, len, results;
                        results = [];
                        for (j = 0, len = el.length; j < len; j++) {
                            elem = el[j];
                            results.push(QJ.val(elem));
                        }
                        return results;
                    })();
                    join = opts.join(val);
                    val = val.join(join);
                    if (val === join) {
                        val = "";
                    }
                    ref = opts.filters;
                    for (j = 0, len = ref.length; j < len; j++) {
                        filter = ref[j];
                        val = filter(val, el, out);
                    }
                    results = [];
                    for (i = k = 0, len1 = out.length; k < len1; i = ++k) {
                        outEl = out[i];
                        if (opts.fill) {
                            outVal = val + outDefaults[i].substring(val.length);
                        } else {
                            outVal = val || outDefaults[i];
                        }
                        results.push(outEl.textContent = outVal);
                    }
                    return results;
                });
                return el;
            };
            return Card;
        })();
        module.exports = Card;
        global.Card = Card;
    }.call(exports, (function () {
        return this;
    }())))
}), (function (module, exports, __webpack_require__) {
    var content = __webpack_require__(2);
    if (typeof content === 'string') content = [[module.id, content, '']];
    var update = __webpack_require__(4)(content, {});
    if (content.locals) module.exports = content.locals;
    if (false) {
        if (!content.locals) {
            module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./card.scss", function () {
                var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./card.scss");
                if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                update(newContent);
            });
        }
        module.hot.dispose(function () {
            update();
        });
    }
}), (function (module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(3)();
    exports.push([module.id, ".jp-card.jp-card-safari.jp-card-identified .jp-card-front:before, .jp-card.jp-card-safari.jp-card-identified .jp-card-back:before {\n  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), -webkit-linear-gradient(-245deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);\n  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), linear-gradient(-25deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%); }\n\n.jp-card.jp-card-ie-10.jp-card-flipped, .jp-card.jp-card-ie-11.jp-card-flipped {\n  -webkit-transform: 0deg;\n  -moz-transform: 0deg;\n  -ms-transform: 0deg;\n  -o-transform: 0deg;\n  transform: 0deg; }\n  .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-front, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-front {\n    -webkit-transform: rotateY(0deg);\n    -moz-transform: rotateY(0deg);\n    -ms-transform: rotateY(0deg);\n    -o-transform: rotateY(0deg);\n    transform: rotateY(0deg); }\n  .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back {\n    -webkit-transform: rotateY(0deg);\n    -moz-transform: rotateY(0deg);\n    -ms-transform: rotateY(0deg);\n    -o-transform: rotateY(0deg);\n    transform: rotateY(0deg); }\n    .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back:after, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back:after {\n      left: 18%; }\n    .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back .jp-card-cvc, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back .jp-card-cvc {\n      -webkit-transform: rotateY(180deg);\n      -moz-transform: rotateY(180deg);\n      -ms-transform: rotateY(180deg);\n      -o-transform: rotateY(180deg);\n      transform: rotateY(180deg);\n      left: 5%; }\n    .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back .jp-card-shiny, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back .jp-card-shiny {\n      left: 84%; }\n      .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back .jp-card-shiny:after, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back .jp-card-shiny:after {\n        left: -480%;\n        -webkit-transform: rotateY(180deg);\n        -moz-transform: rotateY(180deg);\n        -ms-transform: rotateY(180deg);\n        -o-transform: rotateY(180deg);\n        transform: rotateY(180deg); }\n\n.jp-card.jp-card-ie-10.jp-card-amex .jp-card-back, .jp-card.jp-card-ie-11.jp-card-amex .jp-card-back {\n  display: none; }\n\n.jp-card-logo {\n  height: 36px;\n  width: 60px;\n  font-style: italic; }\n  .jp-card-logo, .jp-card-logo:before, .jp-card-logo:after {\n    box-sizing: border-box; }\n\n.jp-card-logo.jp-card-amex {\n  text-transform: uppercase;\n  font-size: 4px;\n  font-weight: bold;\n  color: white;\n  background-image: repeating-radial-gradient(circle at center, #FFF 1px, #999 2px);\n  background-image: repeating-radial-gradient(circle at center, #FFF 1px, #999 2px);\n  border: 1px solid #EEE; }\n  .jp-card-logo.jp-card-amex:before, .jp-card-logo.jp-card-amex:after {\n    width: 28px;\n    display: block;\n    position: absolute;\n    left: 16px; }\n  .jp-card-logo.jp-card-amex:before {\n    height: 28px;\n    content: \"american\";\n    top: 3px;\n    text-align: left;\n    padding-left: 2px;\n    padding-top: 11px;\n    background: #267AC3; }\n  .jp-card-logo.jp-card-amex:after {\n    content: \"express\";\n    bottom: 11px;\n    text-align: right;\n    padding-right: 2px; }\n\n.jp-card.jp-card-amex.jp-card-flipped {\n  -webkit-transform: none;\n  -moz-transform: none;\n  -ms-transform: none;\n  -o-transform: none;\n  transform: none; }\n\n.jp-card.jp-card-amex.jp-card-identified .jp-card-front:before, .jp-card.jp-card-amex.jp-card-identified .jp-card-back:before {\n  background-color: #108168; }\n\n.jp-card.jp-card-amex.jp-card-identified .jp-card-front .jp-card-logo.jp-card-amex {\n  opacity: 1; }\n\n.jp-card.jp-card-amex.jp-card-identified .jp-card-front .jp-card-cvc {\n  visibility: visible; }\n\n.jp-card.jp-card-amex.jp-card-identified .jp-card-front:after {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-discover {\n  background: #FF6600;\n  color: #111;\n  text-transform: uppercase;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 10px;\n  text-align: center;\n  overflow: hidden;\n  z-index: 1;\n  padding-top: 9px;\n  letter-spacing: .03em;\n  border: 1px solid #EEE; }\n  .jp-card-logo.jp-card-discover:before, .jp-card-logo.jp-card-discover:after {\n    content: \" \";\n    display: block;\n    position: absolute; }\n  .jp-card-logo.jp-card-discover:before {\n    background: white;\n    width: 200px;\n    height: 200px;\n    border-radius: 200px;\n    bottom: -5%;\n    right: -80%;\n    z-index: -1; }\n  .jp-card-logo.jp-card-discover:after {\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n    top: 10px;\n    left: 27px;\n    background-color: #FF6600;\n    background-image: -webkit-radial-gradient(#FF6600, #fff);\n    background-image: radial-gradient(  #FF6600, #fff);\n    content: \"network\";\n    font-size: 4px;\n    line-height: 24px;\n    text-indent: -7px; }\n\n.jp-card .jp-card-front .jp-card-logo.jp-card-discover {\n  right: 12%;\n  top: 18%; }\n\n.jp-card.jp-card-discover.jp-card-identified .jp-card-front:before, .jp-card.jp-card-discover.jp-card-identified .jp-card-back:before {\n  background-color: #86B8CF; }\n\n.jp-card.jp-card-discover.jp-card-identified .jp-card-logo.jp-card-discover {\n  opacity: 1; }\n\n.jp-card.jp-card-discover.jp-card-identified .jp-card-front:after {\n  -webkit-transition: 400ms;\n  -moz-transition: 400ms;\n  transition: 400ms;\n  content: \" \";\n  display: block;\n  background-color: #FF6600;\n  background-image: -webkit-linear-gradient(#FF6600, #ffa366, #FF6600);\n  background-image: linear-gradient(#FF6600, #ffa366, #FF6600);\n  height: 50px;\n  width: 50px;\n  border-radius: 25px;\n  position: absolute;\n  left: 100%;\n  top: 15%;\n  margin-left: -25px;\n  box-shadow: inset 1px 1px 3px 1px rgba(0, 0, 0, 0.5); }\n\n.jp-card-logo.jp-card-visa {\n  text-transform: uppercase;\n  color: white;\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 18px;\n  margin-top: 5px; }\n  .jp-card-logo.jp-card-visa:before, .jp-card-logo.jp-card-visa:after {\n    content: \" \";\n    display: block;\n    width: 100%;\n    height: 25%; }\n  .jp-card-logo.jp-card-visa:before {\n    position: absolute;\n    left: -4px;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 12px 6px 0;\n    border-color: transparent #ffffff transparent transparent; }\n\n.jp-card.jp-card-visa.jp-card-identified .jp-card-front:before, .jp-card.jp-card-visa.jp-card-identified .jp-card-back:before {\n  background-color: #191278; }\n\n.jp-card.jp-card-visa.jp-card-identified .jp-card-logo.jp-card-visa {\n  opacity: 1;\n  box-shadow: none; }\n\n.jp-card-logo.jp-card-visaelectron {\n  background: white;\n  text-transform: uppercase;\n  color: #1A1876;\n  text-align: center;\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 18px; }\n  .jp-card-logo.jp-card-visaelectron:before, .jp-card-logo.jp-card-visaelectron:after {\n    content: \" \";\n    display: block;\n    width: 100%;\n    height: 25%; }\n  .jp-card-logo.jp-card-visaelectron:before {\n    background: #1A1876; }\n  .jp-card-logo.jp-card-visaelectron:after {\n    background: #E79800; }\n  .jp-card-logo.jp-card-visaelectron .elec {\n    float: right;\n    font-family: arial;\n    font-size: 9px;\n    margin-right: 1px;\n    margin-top: -5px;\n    text-transform: none; }\n\n.jp-card.jp-card-visaelectron.jp-card-identified .jp-card-front:before, .jp-card.jp-card-visaelectron.jp-card-identified .jp-card-back:before {\n  background-color: #191278; }\n\n.jp-card.jp-card-visaelectron.jp-card-identified .jp-card-logo.jp-card-visaelectron {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-mastercard {\n  color: white;\n  font-style: normal;\n  text-transform: lowercase;\n  font-weight: bold;\n  text-align: center;\n  font-size: 9px;\n  line-height: 84px;\n  z-index: 1;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.6); }\n  .jp-card-logo.jp-card-mastercard:before, .jp-card-logo.jp-card-mastercard:after {\n    content: \" \";\n    display: block;\n    width: 36px;\n    top: 0;\n    position: absolute;\n    height: 36px;\n    border-radius: 18px; }\n  .jp-card-logo.jp-card-mastercard:before {\n    left: 0;\n    background: #EB001B;\n    z-index: -1;\n    opacity: 0.9; }\n  .jp-card-logo.jp-card-mastercard:after {\n    right: 0;\n    background: #FF5F00;\n    z-index: -2; }\n\n.jp-card.jp-card-mastercard.jp-card-identified .jp-card-front .jp-card-logo.jp-card-mastercard, .jp-card.jp-card-mastercard.jp-card-identified .jp-card-back .jp-card-logo.jp-card-mastercard {\n  box-shadow: none; }\n\n.jp-card.jp-card-mastercard.jp-card-identified .jp-card-front:before, .jp-card.jp-card-mastercard.jp-card-identified .jp-card-back:before {\n  background-color: #0061A8; }\n\n.jp-card.jp-card-mastercard.jp-card-identified .jp-card-logo.jp-card-mastercard {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-maestro {\n  color: white;\n  font-style: normal;\n  text-transform: lowercase;\n  font-weight: bold;\n  text-align: center;\n  font-size: 14px;\n  line-height: 84px;\n  z-index: 1;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.6); }\n  .jp-card-logo.jp-card-maestro:before, .jp-card-logo.jp-card-maestro:after {\n    content: \" \";\n    display: block;\n    width: 36px;\n    top: 0;\n    position: absolute;\n    height: 36px;\n    border-radius: 18px; }\n  .jp-card-logo.jp-card-maestro:before {\n    left: 0;\n    background: #EB001B;\n    z-index: -2; }\n  .jp-card-logo.jp-card-maestro:after {\n    right: 0;\n    background: #00A2E5;\n    z-index: -1;\n    opacity: 0.8; }\n\n.jp-card.jp-card-maestro.jp-card-identified .jp-card-front .jp-card-logo.jp-card-maestro, .jp-card.jp-card-maestro.jp-card-identified .jp-card-back .jp-card-logo.jp-card-maestro {\n  box-shadow: none; }\n\n.jp-card.jp-card-maestro.jp-card-identified .jp-card-front:before, .jp-card.jp-card-maestro.jp-card-identified .jp-card-back:before {\n  background-color: #0B2C5F; }\n\n.jp-card.jp-card-maestro.jp-card-identified .jp-card-logo.jp-card-maestro {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-dankort {\n  width: 60px;\n  height: 36px;\n  padding: 3px;\n  border-radius: 8px;\n  border: #000000 1px solid;\n  background-color: #FFFFFF; }\n  .jp-card-logo.jp-card-dankort .dk {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow: hidden; }\n    .jp-card-logo.jp-card-dankort .dk:before {\n      background-color: #ED1C24;\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      display: block;\n      border-radius: 6px; }\n    .jp-card-logo.jp-card-dankort .dk:after {\n      content: '';\n      position: absolute;\n      top: 50%;\n      margin-top: -7.7px;\n      right: 0;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 7px 7px 10px 0;\n      border-color: transparent #ED1C24 transparent transparent;\n      z-index: 1; }\n  .jp-card-logo.jp-card-dankort .d, .jp-card-logo.jp-card-dankort .k {\n    position: absolute;\n    top: 50%;\n    width: 50%;\n    display: block;\n    height: 15.4px;\n    margin-top: -7.7px;\n    background: white; }\n  .jp-card-logo.jp-card-dankort .d {\n    left: 0;\n    border-radius: 0 8px 10px 0; }\n    .jp-card-logo.jp-card-dankort .d:before {\n      content: '';\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      display: block;\n      background: #ED1C24;\n      border-radius: 2px 4px 6px 0px;\n      height: 5px;\n      width: 7px;\n      margin: -3px 0 0 -4px; }\n  .jp-card-logo.jp-card-dankort .k {\n    right: 0; }\n    .jp-card-logo.jp-card-dankort .k:before, .jp-card-logo.jp-card-dankort .k:after {\n      content: '';\n      position: absolute;\n      right: 50%;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      margin-right: -1px; }\n    .jp-card-logo.jp-card-dankort .k:before {\n      top: 0;\n      border-width: 8px 5px 0 0;\n      border-color: #ED1C24 transparent transparent transparent; }\n    .jp-card-logo.jp-card-dankort .k:after {\n      bottom: 0;\n      border-width: 0 5px 8px 0;\n      border-color: transparent transparent #ED1C24 transparent; }\n\n.jp-card.jp-card-dankort.jp-card-identified .jp-card-front:before, .jp-card.jp-card-dankort.jp-card-identified .jp-card-back:before {\n  background-color: #0055C7; }\n\n.jp-card.jp-card-dankort.jp-card-identified .jp-card-logo.jp-card-dankort {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-elo {\n  height: 50px;\n  width: 50px;\n  border-radius: 100%;\n  background: black;\n  color: white;\n  text-align: center;\n  text-transform: lowercase;\n  font-size: 21px;\n  font-style: normal;\n  letter-spacing: 1px;\n  font-weight: bold;\n  padding-top: 13px; }\n  .jp-card-logo.jp-card-elo .e, .jp-card-logo.jp-card-elo .l, .jp-card-logo.jp-card-elo .o {\n    display: inline-block;\n    position: relative; }\n  .jp-card-logo.jp-card-elo .e {\n    -webkit-transform: rotate(-15deg);\n    -moz-transform: rotate(-15deg);\n    -ms-transform: rotate(-15deg);\n    -o-transform: rotate(-15deg);\n    transform: rotate(-15deg); }\n  .jp-card-logo.jp-card-elo .o {\n    position: relative;\n    display: inline-block;\n    width: 12px;\n    height: 12px;\n    right: 0;\n    top: 7px;\n    border-radius: 100%;\n    background-image: -webkit-linear-gradient( yellow 50%, red 50%);\n    background-image: linear-gradient( yellow 50%, red 50%);\n    -webkit-transform: rotate(40deg);\n    -moz-transform: rotate(40deg);\n    -ms-transform: rotate(40deg);\n    -o-transform: rotate(40deg);\n    transform: rotate(40deg);\n    text-indent: -9999px; }\n    .jp-card-logo.jp-card-elo .o:before {\n      content: \"\";\n      position: absolute;\n      width: 49%;\n      height: 49%;\n      background: black;\n      border-radius: 100%;\n      text-indent: -99999px;\n      top: 25%;\n      left: 25%; }\n\n.jp-card.jp-card-elo.jp-card-identified .jp-card-front:before, .jp-card.jp-card-elo.jp-card-identified .jp-card-back:before {\n  background-color: #6F6969; }\n\n.jp-card.jp-card-elo.jp-card-identified .jp-card-logo.jp-card-elo {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-jcb {\n  border-radius: 5px 0px 5px 0px;\n  -moz-border-radius: 5px 0px 5px 0px;\n  -webkit-border-radius: 5px 0px 5px 0px;\n  background-color: white;\n  font-style: normal;\n  color: white;\n  width: 50px;\n  padding: 2px 0 0 2px; }\n  .jp-card-logo.jp-card-jcb > div {\n    width: 15px;\n    margin-right: 1px;\n    display: inline-block;\n    text-align: center;\n    text-shadow: 1px 1px rgba(0, 0, 0, 0.6);\n    border-radius: 5px 0px 5px 0px;\n    -moz-border-radius: 5px 0px 5px 0px;\n    -webkit-border-radius: 5px 0px 5px 0px; }\n    .jp-card-logo.jp-card-jcb > div:before, .jp-card-logo.jp-card-jcb > div:after {\n      content: \" \";\n      display: block;\n      height: 8px; }\n    .jp-card-logo.jp-card-jcb > div.j {\n      background-color: #000063;\n      background-image: -webkit-linear-gradient(left, #000063, #008cff);\n      background-image: linear-gradient(to right,#000063, #008cff); }\n    .jp-card-logo.jp-card-jcb > div.c {\n      background-color: #630000;\n      background-image: -webkit-linear-gradient(left, #630000, #ff008d);\n      background-image: linear-gradient(to right,#630000, #ff008d); }\n    .jp-card-logo.jp-card-jcb > div.b {\n      background-color: #006300;\n      background-image: -webkit-linear-gradient(left, #006300, #00ff00);\n      background-image: linear-gradient(to right,#006300, #00ff00); }\n\n.jp-card.jp-card-jcb.jp-card-identified .jp-card-front:before, .jp-card.jp-card-jcb.jp-card-identified .jp-card-back:before {\n  background-color: #CB8000; }\n\n.jp-card.jp-card-jcb.jp-card-identified .jp-card-logo.jp-card-jcb {\n  opacity: 1;\n  box-shadow: none; }\n\n.jp-card-logo.jp-card-dinersclub {\n  font-family: serif;\n  height: 40px;\n  width: 100px;\n  color: white;\n  font-size: 17px;\n  font-style: normal;\n  letter-spacing: 1px; }\n  .jp-card-logo.jp-card-dinersclub::before, .jp-card-logo.jp-card-dinersclub::after {\n    display: block;\n    position: relative; }\n  .jp-card-logo.jp-card-dinersclub::before {\n    content: 'Diners Club'; }\n  .jp-card-logo.jp-card-dinersclub::after {\n    content: 'International';\n    text-transform: uppercase;\n    font-size: 0.6em; }\n\n.jp-card.jp-card-dinersclub .jp-card-front .jp-card-logo {\n  box-shadow: none !important; }\n\n.jp-card.jp-card-dinersclub.jp-card-identified .jp-card-front:before, .jp-card.jp-card-dinersclub.jp-card-identified .jp-card-back:before {\n  background-color: #999; }\n\n.jp-card.jp-card-dinersclub.jp-card-identified .jp-card-logo.jp-card-dinersclub {\n  opacity: 1; }\n\n.jp-card-container {\n  -webkit-perspective: 1000px;\n  -moz-perspective: 1000px;\n  perspective: 1000px;\n  width: 350px;\n  max-width: 100%;\n  height: 200px;\n  margin: auto;\n  z-index: 1;\n  position: relative; }\n\n.jp-card {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 1;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-width: 315px;\n  border-radius: 10px;\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n  -o-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transition: all 400ms linear;\n  -moz-transition: all 400ms linear;\n  transition: all 400ms linear; }\n  .jp-card > *, .jp-card > *:before, .jp-card > *:after {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    font-family: inherit; }\n  .jp-card.jp-card-flipped {\n    -webkit-transform: rotateY(180deg);\n    -moz-transform: rotateY(180deg);\n    -ms-transform: rotateY(180deg);\n    -o-transform: rotateY(180deg);\n    transform: rotateY(180deg); }\n  .jp-card .jp-card-front, .jp-card .jp-card-back {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-transform-style: preserve-3d;\n    -moz-transform-style: preserve-3d;\n    -ms-transform-style: preserve-3d;\n    -o-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-transition: all 400ms linear;\n    -moz-transition: all 400ms linear;\n    transition: all 400ms linear;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    border-radius: 10px;\n    background: #DDD; }\n    .jp-card .jp-card-front:before, .jp-card .jp-card-back:before {\n      content: \" \";\n      display: block;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      opacity: 0;\n      border-radius: 10px;\n      -webkit-transition: all 400ms ease;\n      -moz-transition: all 400ms ease;\n      transition: all 400ms ease; }\n    .jp-card .jp-card-front:after, .jp-card .jp-card-back:after {\n      content: \" \";\n      display: block; }\n    .jp-card .jp-card-front .jp-card-display, .jp-card .jp-card-back .jp-card-display {\n      color: white;\n      font-weight: normal;\n      opacity: 0.5;\n      -webkit-transition: opacity 400ms linear;\n      -moz-transition: opacity 400ms linear;\n      transition: opacity 400ms linear; }\n      .jp-card .jp-card-front .jp-card-display.jp-card-focused, .jp-card .jp-card-back .jp-card-display.jp-card-focused {\n        opacity: 1;\n        font-weight: 700; }\n    .jp-card .jp-card-front .jp-card-cvc, .jp-card .jp-card-back .jp-card-cvc {\n      font-family: \"Bitstream Vera Sans Mono\", Consolas, Courier, monospace;\n      font-size: 14px; }\n    .jp-card .jp-card-front .jp-card-shiny, .jp-card .jp-card-back .jp-card-shiny {\n      width: 50px;\n      height: 35px;\n      border-radius: 5px;\n      background: #CCC;\n      position: relative; }\n      .jp-card .jp-card-front .jp-card-shiny:before, .jp-card .jp-card-back .jp-card-shiny:before {\n        content: \" \";\n        display: block;\n        width: 70%;\n        height: 60%;\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px;\n        background: #d9d9d9;\n        position: absolute;\n        top: 20%; }\n  .jp-card .jp-card-front .jp-card-logo {\n    position: absolute;\n    opacity: 0;\n    right: 5%;\n    top: 8%;\n    -webkit-transition: 400ms;\n    -moz-transition: 400ms;\n    transition: 400ms; }\n  .jp-card .jp-card-front .jp-card-lower {\n    width: 80%;\n    position: absolute;\n    left: 10%;\n    bottom: 30px; }\n    @media only screen and (max-width: 480px) {\n      .jp-card .jp-card-front .jp-card-lower {\n        width: 90%;\n        left: 5%; } }\n    .jp-card .jp-card-front .jp-card-lower .jp-card-cvc {\n      visibility: hidden;\n      float: right;\n      position: relative;\n      bottom: 5px; }\n    .jp-card .jp-card-front .jp-card-lower .jp-card-number {\n      font-family: \"Bitstream Vera Sans Mono\", Consolas, Courier, monospace;\n      font-size: 24px;\n      clear: both;\n      margin-bottom: 30px; }\n    .jp-card .jp-card-front .jp-card-lower .jp-card-expiry {\n      font-family: \"Bitstream Vera Sans Mono\", Consolas, Courier, monospace;\n      letter-spacing: 0em;\n      position: relative;\n      float: right;\n      width: 25%; }\n      .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:before, .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:after {\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        font-weight: bold;\n        font-size: 7px;\n        white-space: pre;\n        display: block;\n        opacity: .5; }\n      .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:before {\n        content: attr(data-before);\n        margin-bottom: 2px;\n        font-size: 7px;\n        text-transform: uppercase; }\n      .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:after {\n        position: absolute;\n        content: attr(data-after);\n        text-align: right;\n        right: 100%;\n        margin-right: 5px;\n        margin-top: 2px;\n        bottom: 0; }\n    .jp-card .jp-card-front .jp-card-lower .jp-card-name {\n      text-transform: uppercase;\n      font-family: \"Bitstream Vera Sans Mono\", Consolas, Courier, monospace;\n      font-size: 20px;\n      max-height: 45px;\n      position: absolute;\n      bottom: 0;\n      width: 190px;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: horizontal;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .jp-card .jp-card-back {\n    -webkit-transform: rotateY(180deg);\n    -moz-transform: rotateY(180deg);\n    -ms-transform: rotateY(180deg);\n    -o-transform: rotateY(180deg);\n    transform: rotateY(180deg); }\n    .jp-card .jp-card-back .jp-card-bar {\n      background-color: #444;\n      background-image: -webkit-linear-gradient(#444, #333);\n      background-image: linear-gradient(#444, #333);\n      width: 100%;\n      height: 20%;\n      position: absolute;\n      top: 10%; }\n    .jp-card .jp-card-back:after {\n      content: \" \";\n      display: block;\n      background-color: #FFF;\n      background-image: -webkit-linear-gradient(#FFF, #FFF);\n      background-image: linear-gradient(#FFF, #FFF);\n      width: 80%;\n      height: 16%;\n      position: absolute;\n      top: 40%;\n      left: 2%; }\n    .jp-card .jp-card-back .jp-card-cvc {\n      position: absolute;\n      top: 40%;\n      left: 85%;\n      -webkit-transition-delay: 600ms;\n      -moz-transition-delay: 600ms;\n      transition-delay: 600ms; }\n    .jp-card .jp-card-back .jp-card-shiny {\n      position: absolute;\n      top: 66%;\n      left: 2%; }\n      .jp-card .jp-card-back .jp-card-shiny:after {\n        content: \"This card has been issued by Jesse Pollak and is licensed for anyone to use anywhere for free. It comes with no warranty. For support issues, please visit: github.com/jessepollak/card.\";\n        position: absolute;\n        left: 120%;\n        top: 5%;\n        color: white;\n        font-size: 7px;\n        width: 230px;\n        opacity: .5; }\n  .jp-card.jp-card-identified {\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); }\n    .jp-card.jp-card-identified .jp-card-front, .jp-card.jp-card-identified .jp-card-back {\n      background-color: #000;\n      background-color: rgba(0, 0, 0, 0.5); }\n      .jp-card.jp-card-identified .jp-card-front:before, .jp-card.jp-card-identified .jp-card-back:before {\n        -webkit-transition: all 400ms ease;\n        -moz-transition: all 400ms ease;\n        transition: all 400ms ease;\n        background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 15% 80%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), -webkit-linear-gradient(-245deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);\n        background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 15% 80%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), linear-gradient(-25deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);\n        opacity: 1; }\n      .jp-card.jp-card-identified .jp-card-front .jp-card-logo, .jp-card.jp-card-identified .jp-card-back .jp-card-logo {\n        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3); }\n    .jp-card.jp-card-identified.no-radial-gradient .jp-card-front:before, .jp-card.jp-card-identified.no-radial-gradient .jp-card-back:before {\n      background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), -webkit-linear-gradient(-245deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);\n      background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), linear-gradient(-25deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%); }\n", ""]);
}), (function (module, exports) {
    module.exports = function () {
        var list = [];
        list.toString = function toString() {
            var result = [];
            for (var i = 0; i < this.length; i++) {
                var item = this[i];
                if (item[2]) {
                    result.push("@media " + item[2] + "{" + item[1] + "}");
                } else {
                    result.push(item[1]);
                }
            }
            return result.join("");
        };
        list.i = function (modules, mediaQuery) {
            if (typeof modules === "string")
                modules = [[null, modules, ""]];
            var alreadyImportedModules = {};
            for (var i = 0; i < this.length; i++) {
                var id = this[i][0];
                if (typeof id === "number")
                    alreadyImportedModules[id] = true;
            }
            for (i = 0; i < modules.length; i++) {
                var item = modules[i];
                if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                    if (mediaQuery && !item[2]) {
                        item[2] = mediaQuery;
                    } else if (mediaQuery) {
                        item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                    }
                    list.push(item);
                }
            }
        };
        return list;
    };
}), (function (module, exports, __webpack_require__) {
    var stylesInDom = {}, memoize = function (fn) {
        var memo;
        return function () {
            if (typeof memo === "undefined") memo = fn.apply(this, arguments);
            return memo;
        };
    }, isOldIE = memoize(function () {
        return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
    }), getHeadElement = memoize(function () {
        return document.head || document.getElementsByTagName("head")[0];
    }), singletonElement = null, singletonCounter = 0, styleElementsInsertedAtTop = [];
    module.exports = function (list, options) {
        if (false) {
            if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
        }
        options = options || {};
        if (typeof options.singleton === "undefined") options.singleton = isOldIE();
        if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
        var styles = listToStyles(list);
        addStylesToDom(styles, options);
        return function update(newList) {
            var mayRemove = [];
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];
                domStyle.refs--;
                mayRemove.push(domStyle);
            }
            if (newList) {
                var newStyles = listToStyles(newList);
                addStylesToDom(newStyles, options);
            }
            for (var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
                if (domStyle.refs === 0) {
                    for (var j = 0; j < domStyle.parts.length; j++)
                        domStyle.parts[j]();
                    delete stylesInDom[domStyle.id];
                }
            }
        };
    }
    function addStylesToDom(styles, options) {
        for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];
            if (domStyle) {
                domStyle.refs++;
                for (var j = 0; j < domStyle.parts.length; j++) {
                    domStyle.parts[j](item.parts[j]);
                }
                for (; j < item.parts.length; j++) {
                    domStyle.parts.push(addStyle(item.parts[j], options));
                }
            } else {
                var parts = [];
                for (var j = 0; j < item.parts.length; j++) {
                    parts.push(addStyle(item.parts[j], options));
                }
                stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
            }
        }
    }
    function listToStyles(list) {
        var styles = [];
        var newStyles = {};
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = item[0];
            var css = item[1];
            var media = item[2];
            var sourceMap = item[3];
            var part = {css: css, media: media, sourceMap: sourceMap};
            if (!newStyles[id])
                styles.push(newStyles[id] = {id: id, parts: [part]}); else
                newStyles[id].parts.push(part);
        }
        return styles;
    }
    function insertStyleElement(options, styleElement) {
        var head = getHeadElement();
        var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
        if (options.insertAt === "top") {
            if (!lastStyleElementInsertedAtTop) {
                head.insertBefore(styleElement, head.firstChild);
            } else if (lastStyleElementInsertedAtTop.nextSibling) {
                head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
            } else {
                head.appendChild(styleElement);
            }
            styleElementsInsertedAtTop.push(styleElement);
        } else if (options.insertAt === "bottom") {
            head.appendChild(styleElement);
        } else {
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        }
    }
    function removeStyleElement(styleElement) {
        styleElement.parentNode.removeChild(styleElement);
        var idx = styleElementsInsertedAtTop.indexOf(styleElement);
        if (idx >= 0) {
            styleElementsInsertedAtTop.splice(idx, 1);
        }
    }
    function createStyleElement(options) {
        var styleElement = document.createElement("style");
        styleElement.type = "text/css";
        insertStyleElement(options, styleElement);
        return styleElement;
    }
    function createLinkElement(options) {
        var linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        insertStyleElement(options, linkElement);
        return linkElement;
    }
    function addStyle(obj, options) {
        var styleElement, update, remove;
        if (options.singleton) {
            var styleIndex = singletonCounter++;
            styleElement = singletonElement || (singletonElement = createStyleElement(options));
            update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
            remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
        } else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
            styleElement = createLinkElement(options);
            update = updateLink.bind(null, styleElement);
            remove = function () {
                removeStyleElement(styleElement);
                if (styleElement.href)
                    URL.revokeObjectURL(styleElement.href);
            };
        } else {
            styleElement = createStyleElement(options);
            update = applyToTag.bind(null, styleElement);
            remove = function () {
                removeStyleElement(styleElement);
            };
        }
        update(obj);
        return function updateStyle(newObj) {
            if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
                    return;
                update(obj = newObj);
            } else {
                remove();
            }
        };
    }
    var replaceText = (function () {
        var textStore = [];
        return function (index, replacement) {
            textStore[index] = replacement;
            return textStore.filter(Boolean).join('\n');
        };
    })();
    function applyToSingletonTag(styleElement, index, remove, obj) {
        var css = remove ? "" : obj.css;
        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = replaceText(index, css);
        } else {
            var cssNode = document.createTextNode(css);
            var childNodes = styleElement.childNodes;
            if (childNodes[index]) styleElement.removeChild(childNodes[index]);
            if (childNodes.length) {
                styleElement.insertBefore(cssNode, childNodes[index]);
            } else {
                styleElement.appendChild(cssNode);
            }
        }
    }
    function applyToTag(styleElement, obj) {
        var css = obj.css;
        var media = obj.media;
        if (media) {
            styleElement.setAttribute("media", media)
        }
        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
        } else {
            while (styleElement.firstChild) {
                styleElement.removeChild(styleElement.firstChild);
            }
            styleElement.appendChild(document.createTextNode(css));
        }
    }
    function updateLink(linkElement, obj) {
        var css = obj.css;
        var sourceMap = obj.sourceMap;
        if (sourceMap) {
            css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }
        var blob = new Blob([css], {type: "text/css"});
        var oldSrc = linkElement.href;
        linkElement.href = URL.createObjectURL(blob);
        if (oldSrc)
            URL.revokeObjectURL(oldSrc);
    }
}), (function (module, exports) {
    (function () {
        var QJ, rreturn, rtrim;
        QJ = function (selector) {
            if (QJ.isDOMElement(selector)) {
                return selector;
            }
            return document.querySelectorAll(selector);
        };
        QJ.isDOMElement = function (el) {
            return el && (el.nodeName != null);
        };
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        QJ.trim = function (text) {
            if (text === null) {
                return "";
            } else {
                return (text + "").replace(rtrim, "");
            }
        };
        rreturn = /\r/g;
        QJ.val = function (el, val) {
            var ret;
            if (arguments.length > 1) {
                return el.value = val;
            } else {
                ret = el.value;
                if (typeof ret === "string") {
                    return ret.replace(rreturn, "");
                } else {
                    if (ret === null) {
                        return "";
                    } else {
                        return ret;
                    }
                }
            }
        };
        QJ.preventDefault = function (eventObject) {
            if (typeof eventObject.preventDefault === "function") {
                eventObject.preventDefault();
                return;
            }
            eventObject.returnValue = false;
            return false;
        };
        QJ.normalizeEvent = function (e) {
            var original;
            original = e;
            e = {
                which: original.which != null ? original.which : void 0,
                target: original.target || original.srcElement,
                preventDefault: function () {
                    return QJ.preventDefault(original);
                },
                originalEvent: original,
                data: original.data || original.detail
            };
            if (e.which == null) {
                e.which = original.charCode != null ? original.charCode : original.keyCode;
            }
            return e;
        };
        QJ.on = function (element, eventName, callback) {
            var el, i, j, len, len1, multEventName, originalCallback, ref;
            if (element.length) {
                for (i = 0, len = element.length; i < len; i++) {
                    el = element[i];
                    QJ.on(el, eventName, callback);
                }
                return;
            }
            if (eventName.match(" ")) {
                ref = eventName.split(" ");
                for (j = 0, len1 = ref.length; j < len1; j++) {
                    multEventName = ref[j];
                    QJ.on(element, multEventName, callback);
                }
                return;
            }
            originalCallback = callback;
            callback = function (e) {
                e = QJ.normalizeEvent(e);
                return originalCallback(e);
            };
            if (element.addEventListener) {
                return element.addEventListener(eventName, callback, false);
            }
            if (element.attachEvent) {
                eventName = "on" + eventName;
                return element.attachEvent(eventName, callback);
            }
            element['on' + eventName] = callback;
        };
        QJ.addClass = function (el, className) {
            var e;
            if (el.length) {
                return (function () {
                    var i, len, results;
                    results = [];
                    for (i = 0, len = el.length; i < len; i++) {
                        e = el[i];
                        results.push(QJ.addClass(e, className));
                    }
                    return results;
                })();
            }
            if (el.classList) {
                return el.classList.add(className);
            } else {
                return el.className += ' ' + className;
            }
        };
        QJ.hasClass = function (el, className) {
            var e, hasClass, i, len;
            if (el.length) {
                hasClass = true;
                for (i = 0, len = el.length; i < len; i++) {
                    e = el[i];
                    hasClass = hasClass && QJ.hasClass(e, className);
                }
                return hasClass;
            }
            if (el.classList) {
                return el.classList.contains(className);
            } else {
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
            }
        };
        QJ.removeClass = function (el, className) {
            var cls, e, i, len, ref, results;
            if (el.length) {
                return (function () {
                    var i, len, results;
                    results = [];
                    for (i = 0, len = el.length; i < len; i++) {
                        e = el[i];
                        results.push(QJ.removeClass(e, className));
                    }
                    return results;
                })();
            }
            if (el.classList) {
                ref = className.split(' ');
                results = [];
                for (i = 0, len = ref.length; i < len; i++) {
                    cls = ref[i];
                    results.push(el.classList.remove(cls));
                }
                return results;
            } else {
                return el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        };
        QJ.toggleClass = function (el, className, bool) {
            var e;
            if (el.length) {
                return (function () {
                    var i, len, results;
                    results = [];
                    for (i = 0, len = el.length; i < len; i++) {
                        e = el[i];
                        results.push(QJ.toggleClass(e, className, bool));
                    }
                    return results;
                })();
            }
            if (bool) {
                if (!QJ.hasClass(el, className)) {
                    return QJ.addClass(el, className);
                }
            } else {
                return QJ.removeClass(el, className);
            }
        };
        QJ.append = function (el, toAppend) {
            var e;
            if (el.length) {
                return (function () {
                    var i, len, results;
                    results = [];
                    for (i = 0, len = el.length; i < len; i++) {
                        e = el[i];
                        results.push(QJ.append(e, toAppend));
                    }
                    return results;
                })();
            }
            return el.insertAdjacentHTML('beforeend', toAppend);
        };
        QJ.find = function (el, selector) {
            if (el instanceof NodeList || el instanceof Array) {
                el = el[0];
            }
            return el.querySelectorAll(selector);
        };
        QJ.trigger = function (el, name, data) {
            var e, error, ev;
            try {
                ev = new CustomEvent(name, {detail: data});
            } catch (error) {
                e = error;
                ev = document.createEvent('CustomEvent');
                if (ev.initCustomEvent) {
                    ev.initCustomEvent(name, true, true, data);
                } else {
                    ev.initEvent(name, true, true, data);
                }
            }
            return el.dispatchEvent(ev);
        };
        module.exports = QJ;
    }).call(this);
}), (function (module, exports, __webpack_require__) {
    (function (global) {
        (function () {
            var Payment, QJ, cardFromNumber, cardFromType, cards, defaultFormat, formatBackCardNumber, formatBackExpiry,
                formatCardNumber, formatExpiry, formatForwardExpiry, formatForwardSlash, formatMonthExpiry,
                hasTextSelected, luhnCheck, reFormatCardNumber, restrictCVC, restrictCardNumber, restrictCombinedExpiry,
                restrictExpiry, restrictMonthExpiry, restrictNumeric, restrictYearExpiry, setCardType,
                indexOf = [].indexOf || function (item) {
                    for (var i = 0, l = this.length; i < l; i++) {
                        if (i in this && this[i] === item) return i;
                    }
                    return -1;
                };
            QJ = __webpack_require__(5);
            defaultFormat = /(\d{1,4})/g;
            cards = [{
                type: 'amex',
                pattern: /^3[47]/,
                format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
                length: [15],
                cvcLength: [4],
                luhn: true
            }, {
                type: 'dankort',
                pattern: /^5019/,
                format: defaultFormat,
                length: [16],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'hipercard',
                pattern: /^(384100|384140|384160|606282|637095|637568|60(?!11))/,
                format: defaultFormat,
                length: [14, 15, 16, 17, 18, 19],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'dinersclub',
                pattern: /^(36|38|30[0-5])/,
                format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
                length: [14],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'discover',
                pattern: /^(6011|65|64[4-9]|622)/,
                format: defaultFormat,
                length: [16],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'jcb',
                pattern: /^35/,
                format: defaultFormat,
                length: [16],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'laser',
                pattern: /^(6706|6771|6709)/,
                format: defaultFormat,
                length: [16, 17, 18, 19],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'maestro',
                pattern: /^(5018|5020|5038|6304|6703|6708|6759|676[1-3])/,
                format: defaultFormat,
                length: [12, 13, 14, 15, 16, 17, 18, 19],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'mastercard',
                pattern: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
                format: defaultFormat,
                length: [16],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'unionpay',
                pattern: /^62/,
                format: defaultFormat,
                length: [16, 17, 18, 19],
                cvcLength: [3],
                luhn: false
            }, {
                type: 'visaelectron',
                pattern: /^4(026|17500|405|508|844|91[37])/,
                format: defaultFormat,
                length: [16],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'elo',
                pattern: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/,
                format: defaultFormat,
                length: [16],
                cvcLength: [3],
                luhn: true
            }, {type: 'visa', pattern: /^4/, format: defaultFormat, length: [13, 16, 19], cvcLength: [3], luhn: true}];
            cardFromNumber = function (num) {
                var card, j, len;
                num = (num + '').replace(/\D/g, '');
                for (j = 0, len = cards.length; j < len; j++) {
                    card = cards[j];
                    if (card.pattern.test(num)) {
                        return card;
                    }
                }
            };
            cardFromType = function (type) {
                var card, j, len;
                for (j = 0, len = cards.length; j < len; j++) {
                    card = cards[j];
                    if (card.type === type) {
                        return card;
                    }
                }
            };
            luhnCheck = function (num) {
                var digit, digits, j, len, odd, sum;
                odd = true;
                sum = 0;
                digits = (num + '').split('').reverse();
                for (j = 0, len = digits.length; j < len; j++) {
                    digit = digits[j];
                    digit = parseInt(digit, 10);
                    if ((odd = !odd)) {
                        digit *= 2;
                    }
                    if (digit > 9) {
                        digit -= 9;
                    }
                    sum += digit;
                }
                return sum % 10 === 0;
            };
            hasTextSelected = function (target) {
                var e, error, ref;
                try {
                    if ((target.selectionStart != null) && target.selectionStart !== target.selectionEnd) {
                        return true;
                    }
                    if ((typeof document !== "undefined" && document !== null ? (ref = document.selection) != null ? ref.createRange : void 0 : void 0) != null) {
                        if (document.selection.createRange().text) {
                            return true;
                        }
                    }
                } catch (error) {
                    e = error;
                }
                return false;
            };
            reFormatCardNumber = function (e) {
                return setTimeout((function (_this) {
                    return function () {
                        var target, value;
                        target = e.target;
                        value = QJ.val(target);
                        value = Payment.fns.formatCardNumber(value);
                        QJ.val(target, value);
                        return QJ.trigger(target, 'change');
                    };
                })(this));
            };
            formatCardNumber = function (maxLength) {
                return function (e) {
                    var card, digit, i, j, len, length, re, target, upperLength, upperLengths, value;
                    digit = String.fromCharCode(e.which);
                    if (!/^\d+$/.test(digit)) {
                        return;
                    }
                    target = e.target;
                    value = QJ.val(target);
                    card = cardFromNumber(value + digit);
                    length = (value.replace(/\D/g, '') + digit).length;
                    upperLengths = [16];
                    if (card) {
                        upperLengths = card.length;
                    }
                    if (maxLength) {
                        upperLengths = upperLengths.filter(function (x) {
                            return x <= maxLength;
                        });
                    }
                    for (i = j = 0, len = upperLengths.length; j < len; i = ++j) {
                        upperLength = upperLengths[i];
                        if (length >= upperLength && upperLengths[i + 1]) {
                            continue;
                        }
                        if (length >= upperLength) {
                            return;
                        }
                    }
                    if (hasTextSelected(target)) {
                        return;
                    }
                    if (card && card.type === 'amex') {
                        re = /^(\d{4}|\d{4}\s\d{6})$/;
                    } else {
                        re = /(?:^|\s)(\d{4})$/;
                    }
                    if (re.test(value)) {
                        e.preventDefault();
                        QJ.val(target, value + ' ' + digit);
                        return QJ.trigger(target, 'change');
                    }
                };
            };
            formatBackCardNumber = function (e) {
                var target, value;
                target = e.target;
                value = QJ.val(target);
                if (e.meta) {
                    return;
                }
                if (e.which !== 8) {
                    return;
                }
                if (hasTextSelected(target)) {
                    return;
                }
                if (/\d\s$/.test(value)) {
                    e.preventDefault();
                    QJ.val(target, value.replace(/\d\s$/, ''));
                    return QJ.trigger(target, 'change');
                } else if (/\s\d?$/.test(value)) {
                    e.preventDefault();
                    QJ.val(target, value.replace(/\s\d?$/, ''));
                    return QJ.trigger(target, 'change');
                }
            };
            formatExpiry = function (e) {
                var digit, target, val;
                digit = String.fromCharCode(e.which);
                if (!/^\d+$/.test(digit)) {
                    return;
                }
                target = e.target;
                val = QJ.val(target) + digit;
                if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
                    e.preventDefault();
                    QJ.val(target, "0" + val + " / ");
                    return QJ.trigger(target, 'change');
                } else if (/^\d\d$/.test(val)) {
                    e.preventDefault();
                    QJ.val(target, val + " / ");
                    return QJ.trigger(target, 'change');
                }
            };
            formatMonthExpiry = function (e) {
                var digit, target, val;
                digit = String.fromCharCode(e.which);
                if (!/^\d+$/.test(digit)) {
                    return;
                }
                target = e.target;
                val = QJ.val(target) + digit;
                if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
                    e.preventDefault();
                    QJ.val(target, "0" + val);
                    return QJ.trigger(target, 'change');
                } else if (/^\d\d$/.test(val)) {
                    e.preventDefault();
                    QJ.val(target, "" + val);
                    return QJ.trigger(target, 'change');
                }
            };
            formatForwardExpiry = function (e) {
                var digit, target, val;
                digit = String.fromCharCode(e.which);
                if (!/^\d+$/.test(digit)) {
                    return;
                }
                target = e.target;
                val = QJ.val(target);
                if (/^\d\d$/.test(val)) {
                    QJ.val(target, val + " / ");
                    return QJ.trigger(target, 'change');
                }
            };
            formatForwardSlash = function (e) {
                var slash, target, val;
                slash = String.fromCharCode(e.which);
                if (slash !== '/') {
                    return;
                }
                target = e.target;
                val = QJ.val(target);
                if (/^\d$/.test(val) && val !== '0') {
                    QJ.val(target, "0" + val + " / ");
                    return QJ.trigger(target, 'change');
                }
            };
            formatBackExpiry = function (e) {
                var target, value;
                if (e.metaKey) {
                    return;
                }
                target = e.target;
                value = QJ.val(target);
                if (e.which !== 8) {
                    return;
                }
                if (hasTextSelected(target)) {
                    return;
                }
                if (/\d(\s|\/)+$/.test(value)) {
                    e.preventDefault();
                    QJ.val(target, value.replace(/\d(\s|\/)*$/, ''));
                    return QJ.trigger(target, 'change');
                } else if (/\s\/\s?\d?$/.test(value)) {
                    e.preventDefault();
                    QJ.val(target, value.replace(/\s\/\s?\d?$/, ''));
                    return QJ.trigger(target, 'change');
                }
            };
            restrictNumeric = function (e) {
                var input;
                if (e.metaKey || e.ctrlKey) {
                    return true;
                }
                if (e.which === 32) {
                    return e.preventDefault();
                }
                if (e.which === 0) {
                    return true;
                }
                if (e.which < 33) {
                    return true;
                }
                input = String.fromCharCode(e.which);
                if (!/[\d\s]/.test(input)) {
                    return e.preventDefault();
                }
            };
            restrictCardNumber = function (maxLength) {
                return function (e) {
                    var card, digit, length, target, value;
                    target = e.target;
                    digit = String.fromCharCode(e.which);
                    if (!/^\d+$/.test(digit)) {
                        return;
                    }
                    if (hasTextSelected(target)) {
                        return;
                    }
                    value = (QJ.val(target) + digit).replace(/\D/g, '');
                    card = cardFromNumber(value);
                    length = 16;
                    if (card) {
                        length = card.length[card.length.length - 1];
                    }
                    if (maxLength) {
                        length = Math.min(length, maxLength);
                    }
                    if (!(value.length <= length)) {
                        return e.preventDefault();
                    }
                };
            };
            restrictExpiry = function (e, length) {
                var digit, target, value;
                target = e.target;
                digit = String.fromCharCode(e.which);
                if (!/^\d+$/.test(digit)) {
                    return;
                }
                if (hasTextSelected(target)) {
                    return;
                }
                value = QJ.val(target) + digit;
                value = value.replace(/\D/g, '');
                if (value.length > length) {
                    return e.preventDefault();
                }
            };
            restrictCombinedExpiry = function (e) {
                return restrictExpiry(e, 6);
            };
            restrictMonthExpiry = function (e) {
                return restrictExpiry(e, 2);
            };
            restrictYearExpiry = function (e) {
                return restrictExpiry(e, 4);
            };
            restrictCVC = function (e) {
                var digit, target, val;
                target = e.target;
                digit = String.fromCharCode(e.which);
                if (!/^\d+$/.test(digit)) {
                    return;
                }
                if (hasTextSelected(target)) {
                    return;
                }
                val = QJ.val(target) + digit;
                if (!(val.length <= 4)) {
                    return e.preventDefault();
                }
            };
            setCardType = function (e) {
                var allTypes, card, cardType, target, val;
                target = e.target;
                val = QJ.val(target);
                cardType = Payment.fns.cardType(val) || 'unknown';
                if (!QJ.hasClass(target, cardType)) {
                    allTypes = (function () {
                        var j, len, results;
                        results = [];
                        for (j = 0, len = cards.length; j < len; j++) {
                            card = cards[j];
                            results.push(card.type);
                        }
                        return results;
                    })();
                    QJ.removeClass(target, 'unknown');
                    QJ.removeClass(target, allTypes.join(' '));
                    QJ.addClass(target, cardType);
                    QJ.toggleClass(target, 'identified', cardType !== 'unknown');
                    return QJ.trigger(target, 'payment.cardType', cardType);
                }
            };
            Payment = (function () {
                function Payment() {
                }
                Payment.fns = {
                    cardExpiryVal: function (value) {
                        var month, prefix, ref, year;
                        value = value.replace(/\s/g, '');
                        ref = value.split('/', 2), month = ref[0], year = ref[1];
                        if ((year != null ? year.length : void 0) === 2 && /^\d+$/.test(year)) {
                            prefix = (new Date).getFullYear();
                            prefix = prefix.toString().slice(0, 2);
                            year = prefix + year;
                        }
                        month = parseInt(month, 10);
                        year = parseInt(year, 10);
                        return {month: month, year: year};
                    }, validateCardNumber: function (num) {
                        var card, ref;
                        num = (num + '').replace(/\s+|-/g, '');
                        if (!/^\d+$/.test(num)) {
                            return false;
                        }
                        card = cardFromNumber(num);
                        if (!card) {
                            return false;
                        }
                        return (ref = num.length, indexOf.call(card.length, ref) >= 0) && (card.luhn === false || luhnCheck(num));
                    }, validateCardExpiry: function (month, year) {
                        var currentTime, expiry, prefix, ref, ref1;
                        if (typeof month === 'object' && 'month' in month) {
                            ref = month, month = ref.month, year = ref.year;
                        } else if (typeof month === 'string' && indexOf.call(month, '/') >= 0) {
                            ref1 = Payment.fns.cardExpiryVal(month), month = ref1.month, year = ref1.year;
                        }
                        if (!(month && year)) {
                            return false;
                        }
                        month = QJ.trim(month);
                        year = QJ.trim(year);
                        if (!/^\d+$/.test(month)) {
                            return false;
                        }
                        if (!/^\d+$/.test(year)) {
                            return false;
                        }
                        month = parseInt(month, 10);
                        if (!(month && month <= 12)) {
                            return false;
                        }
                        if (year.length === 2) {
                            prefix = (new Date).getFullYear();
                            prefix = prefix.toString().slice(0, 2);
                            year = prefix + year;
                        }
                        expiry = new Date(year, month);
                        currentTime = new Date;
                        expiry.setMonth(expiry.getMonth() - 1);
                        expiry.setMonth(expiry.getMonth() + 1, 1);
                        return expiry > currentTime;
                    }, validateCardCVC: function (cvc, type) {
                        var ref, ref1;
                        cvc = QJ.trim(cvc);
                        if (!/^\d+$/.test(cvc)) {
                            return false;
                        }
                        if (type && cardFromType(type)) {
                            return ref = cvc.length, indexOf.call((ref1 = cardFromType(type)) != null ? ref1.cvcLength : void 0, ref) >= 0;
                        } else {
                            return cvc.length >= 3 && cvc.length <= 4;
                        }
                    }, cardType: function (num) {
                        var ref;
                        if (!num) {
                            return null;
                        }
                        return ((ref = cardFromNumber(num)) != null ? ref.type : void 0) || null;
                    }, formatCardNumber: function (num) {
                        var card, groups, ref, upperLength;
                        card = cardFromNumber(num);
                        if (!card) {
                            return num;
                        }
                        upperLength = card.length[card.length.length - 1];
                        num = num.replace(/\D/g, '');
                        num = num.slice(0, upperLength);
                        if (card.format.global) {
                            return (ref = num.match(card.format)) != null ? ref.join(' ') : void 0;
                        } else {
                            groups = card.format.exec(num);
                            if (groups == null) {
                                return;
                            }
                            groups.shift();
                            groups = groups.filter(function (n) {
                                return n;
                            });
                            return groups.join(' ');
                        }
                    }
                };
                Payment.restrictNumeric = function (el) {
                    return QJ.on(el, 'keypress', restrictNumeric);
                };
                Payment.cardExpiryVal = function (el) {
                    return Payment.fns.cardExpiryVal(QJ.val(el));
                };
                Payment.formatCardCVC = function (el) {
                    Payment.restrictNumeric(el);
                    QJ.on(el, 'keypress', restrictCVC);
                    return el;
                };
                Payment.formatCardExpiry = function (el) {
                    var month, year;
                    Payment.restrictNumeric(el);
                    if (el.length && el.length === 2) {
                        month = el[0], year = el[1];
                        this.formatCardExpiryMultiple(month, year);
                    } else {
                        QJ.on(el, 'keypress', restrictCombinedExpiry);
                        QJ.on(el, 'keypress', formatExpiry);
                        QJ.on(el, 'keypress', formatForwardSlash);
                        QJ.on(el, 'keypress', formatForwardExpiry);
                        QJ.on(el, 'keydown', formatBackExpiry);
                    }
                    return el;
                };
                Payment.formatCardExpiryMultiple = function (month, year) {
                    QJ.on(month, 'keypress', restrictMonthExpiry);
                    QJ.on(month, 'keypress', formatMonthExpiry);
                    return QJ.on(year, 'keypress', restrictYearExpiry);
                };
                Payment.formatCardNumber = function (el, maxLength) {
                    Payment.restrictNumeric(el);
                    QJ.on(el, 'keypress', restrictCardNumber(maxLength));
                    QJ.on(el, 'keypress', formatCardNumber(maxLength));
                    QJ.on(el, 'keydown', formatBackCardNumber);
                    QJ.on(el, 'keyup blur', setCardType);
                    QJ.on(el, 'paste', reFormatCardNumber);
                    QJ.on(el, 'input', reFormatCardNumber);
                    return el;
                };
                Payment.getCardArray = function () {
                    return cards;
                };
                Payment.setCardArray = function (cardArray) {
                    cards = cardArray;
                    return true;
                };
                Payment.addToCardArray = function (cardObject) {
                    return cards.push(cardObject);
                };
                Payment.removeFromCardArray = function (type) {
                    var key, value;
                    for (key in cards) {
                        value = cards[key];
                        if (value.type === type) {
                            cards.splice(key, 1);
                        }
                    }
                    return true;
                };
                return Payment;
            })();
            module.exports = Payment;
            global.Payment = Payment;
        }).call(this);
    }.call(exports, (function () {
        return this;
    }())))
}), (function (module, exports, __webpack_require__) {
    'use strict';
    module.exports = __webpack_require__(8);
}), (function (module, exports, __webpack_require__) {
    'use strict';
    var is = __webpack_require__(9);
    var extend = function extend() {
        var target = arguments[0] || {};
        var i = 1;
        var length = arguments.length;
        var deep = false;
        var options, name, src, copy, copyIsArray, clone;
        if (typeof target === 'boolean') {
            deep = target;
            target = arguments[1] || {};
            i = 2;
        }
        if (typeof target !== 'object' && !is.fn(target)) {
            target = {};
        }
        for (; i < length; i++) {
            options = arguments[i];
            if (options != null) {
                if (typeof options === 'string') {
                    options = options.split('');
                }
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (is.hash(copy) || (copyIsArray = is.array(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && is.array(src) ? src : [];
                        } else {
                            clone = src && is.hash(src) ? src : {};
                        }
                        target[name] = extend(deep, clone, copy);
                    } else if (typeof copy !== 'undefined') {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };
    extend.version = '1.1.3';
    module.exports = extend;
}), (function (module, exports) {
    'use strict';
    var objProto = Object.prototype;
    var owns = objProto.hasOwnProperty;
    var toStr = objProto.toString;
    var symbolValueOf;
    if (typeof Symbol === 'function') {
        symbolValueOf = Symbol.prototype.valueOf;
    }
    var isActualNaN = function (value) {
        return value !== value;
    };
    var NON_HOST_TYPES = {'boolean': 1, number: 1, string: 1, undefined: 1};
    var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
    var hexRegex = /^[A-Fa-f0-9]+$/;
    var is = {};
    is.a = is.type = function (value, type) {
        return typeof value === type;
    };
    is.defined = function (value) {
        return typeof value !== 'undefined';
    };
    is.empty = function (value) {
        var type = toStr.call(value);
        var key;
        if (type === '[object Array]' || type === '[object Arguments]' || type === '[object String]') {
            return value.length === 0;
        }
        if (type === '[object Object]') {
            for (key in value) {
                if (owns.call(value, key)) {
                    return false;
                }
            }
            return true;
        }
        return !value;
    };
    is.equal = function equal(value, other) {
        if (value === other) {
            return true;
        }
        var type = toStr.call(value);
        var key;
        if (type !== toStr.call(other)) {
            return false;
        }
        if (type === '[object Object]') {
            for (key in value) {
                if (!is.equal(value[key], other[key]) || !(key in other)) {
                    return false;
                }
            }
            for (key in other) {
                if (!is.equal(value[key], other[key]) || !(key in value)) {
                    return false;
                }
            }
            return true;
        }
        if (type === '[object Array]') {
            key = value.length;
            if (key !== other.length) {
                return false;
            }
            while (key--) {
                if (!is.equal(value[key], other[key])) {
                    return false;
                }
            }
            return true;
        }
        if (type === '[object Function]') {
            return value.prototype === other.prototype;
        }
        if (type === '[object Date]') {
            return value.getTime() === other.getTime();
        }
        return false;
    };
    is.hosted = function (value, host) {
        var type = typeof host[value];
        return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
    };
    is.instance = is['instanceof'] = function (value, constructor) {
        return value instanceof constructor;
    };
    is.nil = is['null'] = function (value) {
        return value === null;
    };
    is.undef = is.undefined = function (value) {
        return typeof value === 'undefined';
    };
    is.args = is.arguments = function (value) {
        var isStandardArguments = toStr.call(value) === '[object Arguments]';
        var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
        return isStandardArguments || isOldArguments;
    };
    is.array = Array.isArray || function (value) {
        return toStr.call(value) === '[object Array]';
    };
    is.args.empty = function (value) {
        return is.args(value) && value.length === 0;
    };
    is.array.empty = function (value) {
        return is.array(value) && value.length === 0;
    };
    is.arraylike = function (value) {
        return !!value && !is.bool(value) && owns.call(value, 'length') && isFinite(value.length) && is.number(value.length) && value.length >= 0;
    };
    is.bool = is['boolean'] = function (value) {
        return toStr.call(value) === '[object Boolean]';
    };
    is['false'] = function (value) {
        return is.bool(value) && Boolean(Number(value)) === false;
    };
    is['true'] = function (value) {
        return is.bool(value) && Boolean(Number(value)) === true;
    };
    is.date = function (value) {
        return toStr.call(value) === '[object Date]';
    };
    is.date.valid = function (value) {
        return is.date(value) && !isNaN(Number(value));
    };
    is.element = function (value) {
        return value !== undefined && typeof HTMLElement !== 'undefined' && value instanceof HTMLElement && value.nodeType === 1;
    };
    is.error = function (value) {
        return toStr.call(value) === '[object Error]';
    };
    is.fn = is['function'] = function (value) {
        var isAlert = typeof window !== 'undefined' && value === window.alert;
        if (isAlert) {
            return true;
        }
        var str = toStr.call(value);
        return str === '[object Function]' || str === '[object GeneratorFunction]' || str === '[object AsyncFunction]';
    };
    is.number = function (value) {
        return toStr.call(value) === '[object Number]';
    };
    is.infinite = function (value) {
        return value === Infinity || value === -Infinity;
    };
    is.decimal = function (value) {
        return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
    };
    is.divisibleBy = function (value, n) {
        var isDividendInfinite = is.infinite(value);
        var isDivisorInfinite = is.infinite(n);
        var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
        return isDividendInfinite || isDivisorInfinite || (isNonZeroNumber && value % n === 0);
    };
    is.integer = is['int'] = function (value) {
        return is.number(value) && !isActualNaN(value) && value % 1 === 0;
    };
    is.maximum = function (value, others) {
        if (isActualNaN(value)) {
            throw new TypeError('NaN is not a valid value');
        } else if (!is.arraylike(others)) {
            throw new TypeError('second argument must be array-like');
        }
        var len = others.length;
        while (--len >= 0) {
            if (value < others[len]) {
                return false;
            }
        }
        return true;
    };
    is.minimum = function (value, others) {
        if (isActualNaN(value)) {
            throw new TypeError('NaN is not a valid value');
        } else if (!is.arraylike(others)) {
            throw new TypeError('second argument must be array-like');
        }
        var len = others.length;
        while (--len >= 0) {
            if (value > others[len]) {
                return false;
            }
        }
        return true;
    };
    is.nan = function (value) {
        return !is.number(value) || value !== value;
    };
    is.even = function (value) {
        return is.infinite(value) || (is.number(value) && value === value && value % 2 === 0);
    };
    is.odd = function (value) {
        return is.infinite(value) || (is.number(value) && value === value && value % 2 !== 0);
    };
    is.ge = function (value, other) {
        if (isActualNaN(value) || isActualNaN(other)) {
            throw new TypeError('NaN is not a valid value');
        }
        return !is.infinite(value) && !is.infinite(other) && value >= other;
    };
    is.gt = function (value, other) {
        if (isActualNaN(value) || isActualNaN(other)) {
            throw new TypeError('NaN is not a valid value');
        }
        return !is.infinite(value) && !is.infinite(other) && value > other;
    };
    is.le = function (value, other) {
        if (isActualNaN(value) || isActualNaN(other)) {
            throw new TypeError('NaN is not a valid value');
        }
        return !is.infinite(value) && !is.infinite(other) && value <= other;
    };
    is.lt = function (value, other) {
        if (isActualNaN(value) || isActualNaN(other)) {
            throw new TypeError('NaN is not a valid value');
        }
        return !is.infinite(value) && !is.infinite(other) && value < other;
    };
    is.within = function (value, start, finish) {
        if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
            throw new TypeError('NaN is not a valid value');
        } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
            throw new TypeError('all arguments must be numbers');
        }
        var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
        return isAnyInfinite || (value >= start && value <= finish);
    };
    is.object = function (value) {
        return toStr.call(value) === '[object Object]';
    };
    is.primitive = function isPrimitive(value) {
        if (!value) {
            return true;
        }
        if (typeof value === 'object' || is.object(value) || is.fn(value) || is.array(value)) {
            return false;
        }
        return true;
    };
    is.hash = function (value) {
        return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
    };
    is.regexp = function (value) {
        return toStr.call(value) === '[object RegExp]';
    };
    is.string = function (value) {
        return toStr.call(value) === '[object String]';
    };
    is.base64 = function (value) {
        return is.string(value) && (!value.length || base64Regex.test(value));
    };
    is.hex = function (value) {
        return is.string(value) && (!value.length || hexRegex.test(value));
    };
    is.symbol = function (value) {
        return typeof Symbol === 'function' && toStr.call(value) === '[object Symbol]' && typeof symbolValueOf.call(value) === 'symbol';
    };
    module.exports = is;
})]);
/* cleave.js - 1.4.4 */
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Cleave = t() : e.Cleave = t()
}(this, function () {
    return function (e) {
        function t(n) {
            if (r[n]) return r[n].exports;
            var i = r[n] = {exports: {}, id: n, loaded: !1};
            return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var r = {};
        return t.m = e, t.c = r, t.p = "", t(0)
    }([function (e, t, r) {
        (function (t) {
            "use strict";
            var n = function (e, t) {
                var r = this;
                if ("string" == typeof e ? r.element = document.querySelector(e) : r.element = "undefined" != typeof e.length && e.length > 0 ? e[0] : e, !r.element) throw new Error("[cleave.js] Please check the element");
                t.initValue = r.element.value, r.properties = n.DefaultProperties.assign({}, t), r.init()
            };
            n.prototype = {
                init: function () {
                    var e = this, t = e.properties;
                    return t.numeral || t.phone || t.creditCard || t.time || t.date || 0 !== t.blocksLength || t.prefix ? (t.maxLength = n.Util.getMaxLength(t.blocks), e.isAndroid = n.Util.isAndroid(), e.lastInputValue = "", e.onChangeListener = e.onChange.bind(e), e.onKeyDownListener = e.onKeyDown.bind(e), e.onFocusListener = e.onFocus.bind(e), e.onCutListener = e.onCut.bind(e), e.onCopyListener = e.onCopy.bind(e), e.element.addEventListener("input", e.onChangeListener), e.element.addEventListener("keydown", e.onKeyDownListener), e.element.addEventListener("focus", e.onFocusListener), e.element.addEventListener("cut", e.onCutListener), e.element.addEventListener("copy", e.onCopyListener), e.initPhoneFormatter(), e.initDateFormatter(), e.initTimeFormatter(), e.initNumeralFormatter(), void ((t.initValue || t.prefix && !t.noImmediatePrefix) && e.onInput(t.initValue))) : void e.onInput(t.initValue)
                }, initNumeralFormatter: function () {
                    var e = this, t = e.properties;
                    t.numeral && (t.numeralFormatter = new n.NumeralFormatter(t.numeralDecimalMark, t.numeralIntegerScale, t.numeralDecimalScale, t.numeralThousandsGroupStyle, t.numeralPositiveOnly, t.stripLeadingZeroes, t.delimiter))
                }, initTimeFormatter: function () {
                    var e = this, t = e.properties;
                    t.time && (t.timeFormatter = new n.TimeFormatter(t.timePattern), t.blocks = t.timeFormatter.getBlocks(), t.blocksLength = t.blocks.length, t.maxLength = n.Util.getMaxLength(t.blocks))
                }, initDateFormatter: function () {
                    var e = this, t = e.properties;
                    t.date && (t.dateFormatter = new n.DateFormatter(t.datePattern), t.blocks = t.dateFormatter.getBlocks(), t.blocksLength = t.blocks.length, t.maxLength = n.Util.getMaxLength(t.blocks))
                }, initPhoneFormatter: function () {
                    var e = this, t = e.properties;
                    if (t.phone) try {
                        t.phoneFormatter = new n.PhoneFormatter(new t.root.Cleave.AsYouTypeFormatter(t.phoneRegionCode), t.delimiter)
                    } catch (r) {
                        throw new Error("[cleave.js] Please include phone-type-formatter.{country}.js lib")
                    }
                }, onKeyDown: function (e) {
                    var t = this, r = t.properties, i = e.which || e.keyCode, a = n.Util, o = t.element.value;
                    return 229 === i && a.isAndroidBackspaceKeydown(t.lastInputValue, o) && (i = 8), t.lastInputValue = o, 8 === i && a.isDelimiter(o.slice(-r.delimiterLength), r.delimiter, r.delimiters) ? void (r.backspace = !0) : void (r.backspace = !1)
                }, onChange: function () {
                    this.onInput(this.element.value)
                }, onFocus: function () {
                    var e = this, t = e.properties;
                    n.Util.fixPrefixCursor(e.element, t.prefix, t.delimiter, t.delimiters)
                }, onCut: function (e) {
                    this.copyClipboardData(e), this.onInput("")
                }, onCopy: function (e) {
                    this.copyClipboardData(e)
                }, copyClipboardData: function (e) {
                    var t = this, r = t.properties, i = n.Util, a = t.element.value, o = "";
                    o = r.copyDelimiter ? a : i.stripDelimiters(a, r.delimiter, r.delimiters);
                    try {
                        e.clipboardData ? e.clipboardData.setData("Text", o) : window.clipboardData.setData("Text", o), e.preventDefault()
                    } catch (l) {
                    }
                }, onInput: function (e) {
                    var t = this, r = t.properties, i = n.Util;
                    return r.numeral || !r.backspace || i.isDelimiter(e.slice(-r.delimiterLength), r.delimiter, r.delimiters) || (e = i.headStr(e, e.length - r.delimiterLength)), r.phone ? (!r.prefix || r.noImmediatePrefix && !e.length ? r.result = r.phoneFormatter.format(e) : r.result = r.prefix + r.phoneFormatter.format(e).slice(r.prefix.length), void t.updateValueState()) : r.numeral ? (!r.prefix || r.noImmediatePrefix && !e.length ? r.result = r.numeralFormatter.format(e) : r.result = r.prefix + r.numeralFormatter.format(e), void t.updateValueState()) : (r.date && (e = r.dateFormatter.getValidatedDate(e)), r.time && (e = r.timeFormatter.getValidatedTime(e)), e = i.stripDelimiters(e, r.delimiter, r.delimiters), e = i.getPrefixStrippedValue(e, r.prefix, r.prefixLength, r.result), e = r.numericOnly ? i.strip(e, /[^\d]/g) : e, e = r.uppercase ? e.toUpperCase() : e, e = r.lowercase ? e.toLowerCase() : e, !r.prefix || r.noImmediatePrefix && !e.length || (e = r.prefix + e, 0 !== r.blocksLength) ? (r.creditCard && t.updateCreditCardPropsByValue(e), e = i.headStr(e, r.maxLength), r.result = i.getFormattedValue(e, r.blocks, r.blocksLength, r.delimiter, r.delimiters, r.delimiterLazyShow), void t.updateValueState()) : (r.result = e, void t.updateValueState()))
                }, updateCreditCardPropsByValue: function (e) {
                    var t, r = this, i = r.properties, a = n.Util;
                    a.headStr(i.result, 4) !== a.headStr(e, 4) && (t = n.CreditCardDetector.getInfo(e, i.creditCardStrictMode), i.blocks = t.blocks, i.blocksLength = i.blocks.length, i.maxLength = a.getMaxLength(i.blocks), i.creditCardType !== t.type && (i.creditCardType = t.type, i.onCreditCardTypeChanged.call(r, i.creditCardType)))
                }, updateValueState: function () {
                    var e = this, t = n.Util, r = e.properties;
                    if (e.element) {
                        var i = e.element.selectionEnd, a = e.element.value, o = r.result;
                        if (i = t.getNextCursorPosition(i, a, o, r.delimiter, r.delimiters), e.isAndroid) return void window.setTimeout(function () {
                            e.element.value = o, t.setSelection(e.element, i, r.document, !1), e.callOnValueChanged()
                        }, 1);
                        e.element.value = o, t.setSelection(e.element, i, r.document, !1), e.callOnValueChanged()
                    }
                }, callOnValueChanged: function () {
                    var e = this, t = e.properties;
                    t.onValueChanged.call(e, {target: {value: t.result, rawValue: e.getRawValue()}})
                }, setPhoneRegionCode: function (e) {
                    var t = this, r = t.properties;
                    r.phoneRegionCode = e, t.initPhoneFormatter(), t.onChange()
                }, setRawValue: function (e) {
                    var t = this, r = t.properties;
                    e = void 0 !== e && null !== e ? e.toString() : "", r.numeral && (e = e.replace(".", r.numeralDecimalMark)), r.backspace = !1, t.element.value = e, t.onInput(e)
                }, getRawValue: function () {
                    var e = this, t = e.properties, r = n.Util, i = e.element.value;
                    return t.rawValueTrimPrefix && (i = r.getPrefixStrippedValue(i, t.prefix, t.prefixLength, t.result)), i = t.numeral ? t.numeralFormatter.getRawValue(i) : r.stripDelimiters(i, t.delimiter, t.delimiters)
                }, getISOFormatDate: function () {
                    var e = this, t = e.properties;
                    return t.date ? t.dateFormatter.getISOFormatDate() : ""
                }, getFormattedValue: function () {
                    return this.element.value
                }, destroy: function () {
                    var e = this;
                    e.element.removeEventListener("input", e.onChangeListener), e.element.removeEventListener("keydown", e.onKeyDownListener), e.element.removeEventListener("focus", e.onFocusListener), e.element.removeEventListener("cut", e.onCutListener), e.element.removeEventListener("copy", e.onCopyListener)
                }, toString: function () {
                    return "[Cleave Object]"
                }
            }, n.NumeralFormatter = r(1), n.DateFormatter = r(2), n.TimeFormatter = r(3), n.PhoneFormatter = r(4), n.CreditCardDetector = r(5), n.Util = r(6), n.DefaultProperties = r(7), ("object" == typeof t && t ? t : window).Cleave = n, e.exports = n
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        "use strict";
        var r = function (e, t, n, i, a, o, l) {
            var s = this;
            s.numeralDecimalMark = e || ".", s.numeralIntegerScale = t > 0 ? t : 0, s.numeralDecimalScale = n >= 0 ? n : 2, s.numeralThousandsGroupStyle = i || r.groupStyle.thousand, s.numeralPositiveOnly = !!a, s.stripLeadingZeroes = o !== !1, s.delimiter = l || "" === l ? l : ",", s.delimiterRE = l ? new RegExp("\\" + l, "g") : ""
        };
        r.groupStyle = {
            thousand: "thousand",
            lakh: "lakh",
            wan: "wan",
            none: "none"
        }, r.prototype = {
            getRawValue: function (e) {
                return e.replace(this.delimiterRE, "").replace(this.numeralDecimalMark, ".")
            }, format: function (e) {
                var t, n, i = this, a = "";
                switch (e = e.replace(/[A-Za-z]/g, "").replace(i.numeralDecimalMark, "M").replace(/[^\dM-]/g, "").replace(/^\-/, "N").replace(/\-/g, "").replace("N", i.numeralPositiveOnly ? "" : "-").replace("M", i.numeralDecimalMark), i.stripLeadingZeroes && (e = e.replace(/^(-)?0+(?=\d)/, "$1")), n = e, e.indexOf(i.numeralDecimalMark) >= 0 && (t = e.split(i.numeralDecimalMark), n = t[0], a = i.numeralDecimalMark + t[1].slice(0, i.numeralDecimalScale)), i.numeralIntegerScale > 0 && (n = n.slice(0, i.numeralIntegerScale + ("-" === e.slice(0, 1) ? 1 : 0))), i.numeralThousandsGroupStyle) {
                    case r.groupStyle.lakh:
                        n = n.replace(/(\d)(?=(\d\d)+\d$)/g, "$1" + i.delimiter);
                        break;
                    case r.groupStyle.wan:
                        n = n.replace(/(\d)(?=(\d{4})+$)/g, "$1" + i.delimiter);
                        break;
                    case r.groupStyle.thousand:
                        n = n.replace(/(\d)(?=(\d{3})+$)/g, "$1" + i.delimiter)
                }
                return n.toString() + (i.numeralDecimalScale > 0 ? a.toString() : "")
            }
        }, e.exports = r
    }, function (e, t) {
        "use strict";
        var r = function (e) {
            var t = this;
            t.date = [], t.blocks = [], t.datePattern = e, t.initBlocks()
        };
        r.prototype = {
            initBlocks: function () {
                var e = this;
                e.datePattern.forEach(function (t) {
                    "Y" === t ? e.blocks.push(4) : e.blocks.push(2)
                })
            }, getISOFormatDate: function () {
                var e = this, t = e.date;
                return t[2] ? t[2] + "-" + e.addLeadingZero(t[1]) + "-" + e.addLeadingZero(t[0]) : ""
            }, getBlocks: function () {
                return this.blocks
            }, getValidatedDate: function (e) {
                var t = this, r = "";
                return e = e.replace(/[^\d]/g, ""), t.blocks.forEach(function (n, i) {
                    if (e.length > 0) {
                        var a = e.slice(0, n), o = a.slice(0, 1), l = e.slice(n);
                        switch (t.datePattern[i]) {
                            case"d":
                                "00" === a ? a = "01" : parseInt(o, 10) > 3 ? a = "0" + o : parseInt(a, 10) > 31 && (a = "31");
                                break;
                            case"m":
                                "00" === a ? a = "01" : parseInt(o, 10) > 1 ? a = "0" + o : parseInt(a, 10) > 12 && (a = "12")
                        }
                        r += a, e = l
                    }
                }), this.getFixedDateString(r)
            }, getFixedDateString: function (e) {
                var t, r, n, i = this, a = i.datePattern, o = [], l = 0, s = 0, c = 0, u = 0, d = 0, m = 0, p = !1;
                return 4 === e.length && "y" !== a[0].toLowerCase() && "y" !== a[1].toLowerCase() && (u = "d" === a[0] ? 0 : 2, d = 2 - u, t = parseInt(e.slice(u, u + 2), 10), r = parseInt(e.slice(d, d + 2), 10), o = this.getFixedDate(t, r, 0)), 8 === e.length && (a.forEach(function (e, t) {
                    switch (e) {
                        case"d":
                            l = t;
                            break;
                        case"m":
                            s = t;
                            break;
                        default:
                            c = t
                    }
                }), m = 2 * c, u = l <= c ? 2 * l : 2 * l + 2, d = s <= c ? 2 * s : 2 * s + 2, t = parseInt(e.slice(u, u + 2), 10), r = parseInt(e.slice(d, d + 2), 10), n = parseInt(e.slice(m, m + 4), 10), p = 4 === e.slice(m, m + 4).length, o = this.getFixedDate(t, r, n)), i.date = o, 0 === o.length ? e : a.reduce(function (e, t) {
                    switch (t) {
                        case"d":
                            return e + i.addLeadingZero(o[0]);
                        case"m":
                            return e + i.addLeadingZero(o[1]);
                        default:
                            return e + (p ? i.addLeadingZeroForYear(o[2]) : "")
                    }
                }, "")
            }, getFixedDate: function (e, t, r) {
                return e = Math.min(e, 31), t = Math.min(t, 12), r = parseInt(r || 0, 10), (t < 7 && t % 2 === 0 || t > 8 && t % 2 === 1) && (e = Math.min(e, 2 === t ? this.isLeapYear(r) ? 29 : 28 : 30)), [e, t, r]
            }, isLeapYear: function (e) {
                return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
            }, addLeadingZero: function (e) {
                return (e < 10 ? "0" : "") + e
            }, addLeadingZeroForYear: function (e) {
                return (e < 10 ? "000" : e < 100 ? "00" : e < 1e3 ? "0" : "") + e
            }
        }, e.exports = r
    }, function (e, t) {
        "use strict";
        var r = function (e) {
            var t = this;
            t.time = [], t.blocks = [], t.timePattern = e, t.initBlocks()
        };
        r.prototype = {
            initBlocks: function () {
                var e = this;
                e.timePattern.forEach(function () {
                    e.blocks.push(2)
                })
            }, getISOFormatTime: function () {
                var e = this, t = e.time;
                return t[2] ? e.addLeadingZero(t[0]) + ":" + e.addLeadingZero(t[1]) + ":" + e.addLeadingZero(t[2]) : ""
            }, getBlocks: function () {
                return this.blocks
            }, getValidatedTime: function (e) {
                var t = this, r = "";
                return e = e.replace(/[^\d]/g, ""), t.blocks.forEach(function (n, i) {
                    if (e.length > 0) {
                        var a = e.slice(0, n), o = a.slice(0, 1), l = e.slice(n);
                        switch (t.timePattern[i]) {
                            case"h":
                                parseInt(o, 10) > 2 ? a = "0" + o : parseInt(a, 10) > 23 && (a = "23");
                                break;
                            case"m":
                            case"s":
                                parseInt(o, 10) > 5 ? a = "0" + o : parseInt(a, 10) > 60 && (a = "60")
                        }
                        r += a, e = l
                    }
                }), this.getFixedTimeString(r)
            }, getFixedTimeString: function (e) {
                var t, r, n, i = this, a = i.timePattern, o = [], l = 0, s = 0, c = 0, u = 0, d = 0, m = 0;
                return 6 === e.length && (a.forEach(function (e, t) {
                    switch (e) {
                        case"s":
                            l = 2 * t;
                            break;
                        case"m":
                            s = 2 * t;
                            break;
                        case"h":
                            c = 2 * t
                    }
                }), m = c, d = s, u = l, t = parseInt(e.slice(u, u + 2), 10), r = parseInt(e.slice(d, d + 2), 10), n = parseInt(e.slice(m, m + 2), 10), o = this.getFixedTime(n, r, t)), 4 === e.length && i.timePattern.indexOf("s") < 0 && (a.forEach(function (e, t) {
                    switch (e) {
                        case"m":
                            s = 2 * t;
                            break;
                        case"h":
                            c = 2 * t
                    }
                }), m = c, d = s, t = 0, r = parseInt(e.slice(d, d + 2), 10), n = parseInt(e.slice(m, m + 2), 10), o = this.getFixedTime(n, r, t)), i.time = o, 0 === o.length ? e : a.reduce(function (e, t) {
                    switch (t) {
                        case"s":
                            return e + i.addLeadingZero(o[2]);
                        case"m":
                            return e + i.addLeadingZero(o[1]);
                        case"h":
                            return e + i.addLeadingZero(o[0])
                    }
                }, "")
            }, getFixedTime: function (e, t, r) {
                return r = Math.min(parseInt(r || 0, 10), 60), t = Math.min(t, 60), e = Math.min(e, 60), [e, t, r]
            }, addLeadingZero: function (e) {
                return (e < 10 ? "0" : "") + e
            }
        }, e.exports = r
    }, function (e, t) {
        "use strict";
        var r = function (e, t) {
            var r = this;
            r.delimiter = t || "" === t ? t : " ", r.delimiterRE = t ? new RegExp("\\" + t, "g") : "", r.formatter = e
        };
        r.prototype = {
            setFormatter: function (e) {
                this.formatter = e
            }, format: function (e) {
                var t = this;
                t.formatter.clear(), e = e.replace(/[^\d+]/g, ""), e = e.replace(/^\+/, "B").replace(/\+/g, "").replace("B", "+"), e = e.replace(t.delimiterRE, "");
                for (var r, n = "", i = !1, a = 0, o = e.length; a < o; a++) r = t.formatter.inputDigit(e.charAt(a)), /[\s()-]/g.test(r) ? (n = r, i = !0) : i || (n = r);
                return n = n.replace(/[()]/g, ""), n = n.replace(/[\s-]/g, t.delimiter)
            }
        }, e.exports = r
    }, function (e, t) {
        "use strict";
        var r = {
            blocks: {
                uatp: [4, 5, 6],
                amex: [4, 6, 5],
                diners: [4, 6, 4],
                discover: [4, 4, 4, 4],
                mastercard: [4, 4, 4, 4],
                dankort: [4, 4, 4, 4],
                instapayment: [4, 4, 4, 4],
                jcb15: [4, 6, 5],
                jcb: [4, 4, 4, 4],
                maestro: [4, 4, 4, 4],
                visa: [4, 4, 4, 4],
                mir: [4, 4, 4, 4],
                unionPay: [4, 4, 4, 4],
                general: [4, 4, 4, 4],
                generalStrict: [4, 4, 4, 7]
            },
            re: {
                uatp: /^(?!1800)1\d{0,14}/,
                amex: /^3[47]\d{0,13}/,
                discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
                diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
                mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
                dankort: /^(5019|4175|4571)\d{0,12}/,
                instapayment: /^63[7-9]\d{0,13}/,
                jcb15: /^(?:2131|1800)\d{0,11}/,
                jcb: /^(?:35\d{0,2})\d{0,12}/,
                maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
                mir: /^220[0-4]\d{0,12}/,
                visa: /^4\d{0,15}/,
                unionPay: /^62\d{0,14}/
            },
            getInfo: function (e, t) {
                var n = r.blocks, i = r.re;
                t = !!t;
                for (var a in i) if (i[a].test(e)) {
                    var o;
                    return o = t ? n.generalStrict : n[a], {type: a, blocks: o}
                }
                return {type: "unknown", blocks: t ? n.generalStrict : n.general}
            }
        };
        e.exports = r
    }, function (e, t) {
        "use strict";
        var r = {
            noop: function () {
            }, strip: function (e, t) {
                return e.replace(t, "")
            }, isDelimiter: function (e, t, r) {
                return 0 === r.length ? e === t : r.some(function (t) {
                    if (e === t) return !0
                })
            }, getDelimiterREByDelimiter: function (e) {
                return new RegExp(e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g")
            }, getNextCursorPosition: function (e, t, r, n, i) {
                return t.length === e ? r.length : e + this.getPositionOffset(e, t, r, n, i)
            }, getPositionOffset: function (e, t, r, n, i) {
                var a, o, l;
                return a = this.stripDelimiters(t.slice(0, e), n, i), o = this.stripDelimiters(r.slice(0, e), n, i), l = a.length - o.length, 0 !== l ? l / Math.abs(l) : 0
            }, stripDelimiters: function (e, t, r) {
                var n = this;
                if (0 === r.length) {
                    var i = t ? n.getDelimiterREByDelimiter(t) : "";
                    return e.replace(i, "")
                }
                return r.forEach(function (t) {
                    e = e.replace(n.getDelimiterREByDelimiter(t), "")
                }), e
            }, headStr: function (e, t) {
                return e.slice(0, t)
            }, getMaxLength: function (e) {
                return e.reduce(function (e, t) {
                    return e + t
                }, 0)
            }, getPrefixStrippedValue: function (e, t, r, n) {
                if (e.slice(0, r) !== t) if (e.length < n.length) e = e.length > r ? n : t; else {
                    var i = this.getFirstDiffIndex(t, e.slice(0, r));
                    e = t + e.slice(i, i + 1) + e.slice(r + 1)
                }
                return e.slice(r)
            }, getFirstDiffIndex: function (e, t) {
                for (var r = 0; e.charAt(r) === t.charAt(r);) if ("" === e.charAt(r++)) return -1;
                return r
            }, getFormattedValue: function (e, t, r, n, i, a) {
                var o, l = "", s = i.length > 0;
                return 0 === r ? e : (t.forEach(function (t, c) {
                    if (e.length > 0) {
                        var u = e.slice(0, t), d = e.slice(t);
                        o = s ? i[a ? c - 1 : c] || o : n, a ? (c > 0 && (l += o), l += u) : (l += u, u.length === t && c < r - 1 && (l += o)), e = d
                    }
                }), l)
            }, fixPrefixCursor: function (e, t, r, n) {
                if (e) {
                    var i = e.value, a = r || n[0] || " ";
                    if (e.setSelectionRange && t && !(t.length + a.length < i.length)) {
                        var o = 2 * i.length;
                        setTimeout(function () {
                            e.setSelectionRange(o, o)
                        }, 1)
                    }
                }
            }, setSelection: function (e, t, r) {
                if (e === this.getActiveElement(r) && !(e && e.value.length <= t)) if (e.createTextRange) {
                    var n = e.createTextRange();
                    n.move("character", t), n.select()
                } else try {
                    e.setSelectionRange(t, t)
                } catch (i) {
                    console.warn("The input element type does not support selection")
                }
            }, getActiveElement: function (e) {
                var t = e.activeElement;
                return t && t.shadowRoot ? this.getActiveElement(t.shadowRoot) : t
            }, isAndroid: function () {
                return navigator && /android/i.test(navigator.userAgent)
            }, isAndroidBackspaceKeydown: function (e, t) {
                return !!(this.isAndroid() && e && t) && t === e.slice(0, -1)
            }
        };
        e.exports = r
    }, function (e, t) {
        (function (t) {
            "use strict";
            var r = {
                assign: function (e, r) {
                    return e = e || {}, r = r || {}, e.creditCard = !!r.creditCard, e.creditCardStrictMode = !!r.creditCardStrictMode, e.creditCardType = "", e.onCreditCardTypeChanged = r.onCreditCardTypeChanged || function () {
                    }, e.phone = !!r.phone, e.phoneRegionCode = r.phoneRegionCode || "AU", e.phoneFormatter = {}, e.time = !!r.time, e.timePattern = r.timePattern || ["h", "m", "s"], e.timeFormatter = {}, e.date = !!r.date, e.datePattern = r.datePattern || ["d", "m", "Y"], e.dateFormatter = {}, e.numeral = !!r.numeral, e.numeralIntegerScale = r.numeralIntegerScale > 0 ? r.numeralIntegerScale : 0, e.numeralDecimalScale = r.numeralDecimalScale >= 0 ? r.numeralDecimalScale : 2, e.numeralDecimalMark = r.numeralDecimalMark || ".", e.numeralThousandsGroupStyle = r.numeralThousandsGroupStyle || "thousand", e.numeralPositiveOnly = !!r.numeralPositiveOnly, e.stripLeadingZeroes = r.stripLeadingZeroes !== !1, e.numericOnly = e.creditCard || e.date || !!r.numericOnly, e.uppercase = !!r.uppercase, e.lowercase = !!r.lowercase, e.prefix = e.creditCard || e.date ? "" : r.prefix || "", e.noImmediatePrefix = !!r.noImmediatePrefix, e.prefixLength = e.prefix.length, e.rawValueTrimPrefix = !!r.rawValueTrimPrefix, e.copyDelimiter = !!r.copyDelimiter, e.initValue = void 0 !== r.initValue && null !== r.initValue ? r.initValue.toString() : "", e.delimiter = r.delimiter || "" === r.delimiter ? r.delimiter : r.date ? "/" : r.time ? ":" : r.numeral ? "," : (r.phone, " "), e.delimiterLength = e.delimiter.length, e.delimiterLazyShow = !!r.delimiterLazyShow, e.delimiters = r.delimiters || [], e.blocks = r.blocks || [], e.blocksLength = e.blocks.length, e.root = "object" == typeof t && t ? t : window, e.document = r.document || e.root.document, e.maxLength = 0, e.backspace = !1, e.result = "", e.onValueChanged = r.onValueChanged || function () {
                    }, e
                }
            };
            e.exports = r
        }).call(t, function () {
            return this
        }())
    }])
});
/* cleave-phone.br.js */
!function () {
    function t(t, n) {
        var e = t.split("."), r = T;
        e[0] in r || !r.execScript || r.execScript("var " + e[0]);
        for (var i; e.length && (i = e.shift());) e.length || void 0 === n ? r = r[i] ? r[i] : r[i] = {} : r[i] = n
    }
    function n(t, n) {
        function e() {
        }
        e.prototype = n.prototype, t.M = n.prototype, t.prototype = new e, t.prototype.constructor = t, t.N = function (t, e, r) {
            for (var i = Array(arguments.length - 2), a = 2; a < arguments.length; a++) i[a - 2] = arguments[a];
            return n.prototype[e].apply(t, i)
        }
    }
    function e(t, n) {
        null != t && this.a.apply(this, arguments)
    }
    function r(t) {
        t.b = ""
    }
    function i(t, n) {
        t.sort(n || a)
    }
    function a(t, n) {
        return t > n ? 1 : n > t ? -1 : 0
    }
    function l(t) {
        var n, e = [], r = 0;
        for (n in t) e[r++] = t[n];
        return e
    }
    function u(t, n) {
        this.b = t, this.a = {};
        for (var e = 0; e < n.length; e++) {
            var r = n[e];
            this.a[r.b] = r
        }
    }
    function o(t) {
        return t = l(t.a), i(t, function (t, n) {
            return t.b - n.b
        }), t
    }
    function s(t, n) {
        switch (this.b = t, this.g = !!n.G, this.a = n.c, this.j = n.type, this.h = !1, this.a) {
            case k:
            case J:
            case K:
            case L:
            case O:
            case Y:
            case U:
                this.h = !0
        }
        this.f = n.defaultValue
    }
    function f() {
        this.a = {}, this.f = this.i().a, this.b = this.g = null
    }
    function c(t, n) {
        for (var e = o(t.i()), r = 0; r < e.length; r++) {
            var i = e[r], a = i.b;
            if (null != n.a[a]) {
                t.b && delete t.b[i.b];
                var l = 11 == i.a || 10 == i.a;
                if (i.g) for (var i = p(n, a) || [], u = 0; u < i.length; u++) {
                    var s = t, f = a, h = l ? i[u].clone() : i[u];
                    s.a[f] || (s.a[f] = []), s.a[f].push(h), s.b && delete s.b[f]
                } else i = p(n, a), l ? (l = p(t, a)) ? c(l, i) : m(t, a, i.clone()) : m(t, a, i)
            }
        }
    }
    function p(t, n) {
        var e = t.a[n];
        if (null == e) return null;
        if (t.g) {
            if (!(n in t.b)) {
                var r = t.g, i = t.f[n];
                if (null != e) if (i.g) {
                    for (var a = [], l = 0; l < e.length; l++) a[l] = r.b(i, e[l]);
                    e = a
                } else e = r.b(i, e);
                return t.b[n] = e
            }
            return t.b[n]
        }
        return e
    }
    function h(t, n, e) {
        var r = p(t, n);
        return t.f[n].g ? r[e || 0] : r
    }
    function g(t, n) {
        var e;
        if (null != t.a[n]) e = h(t, n, void 0); else t:{
            if (e = t.f[n], void 0 === e.f) {
                var r = e.j;
                if (r === Boolean) e.f = !1; else if (r === Number) e.f = 0; else {
                    if (r !== String) {
                        e = new r;
                        break t
                    }
                    e.f = e.h ? "0" : ""
                }
            }
            e = e.f
        }
        return e
    }
    function b(t, n) {
        return t.f[n].g ? null != t.a[n] ? t.a[n].length : 0 : null != t.a[n] ? 1 : 0
    }
    function m(t, n, e) {
        t.a[n] = e, t.b && (t.b[n] = e)
    }
    function d(t, n) {
        var e, r = [];
        for (e in n) 0 != e && r.push(new s(e, n[e]));
        return new u(t, r)
    }
    function y() {
        f.call(this)
    }
    function v() {
        f.call(this)
    }
    function _() {
        f.call(this)
    }
    function $() {
    }
    function S() {
    }
    function w() {
    }
    function x() {
        this.a = {}
    }
    function A(t, n) {
        if (null == n) return null;
        n = n.toUpperCase();
        var e = t.a[n];
        if (null == e) {
            if (e = tt[n], null == e) return null;
            e = (new w).a(_.i(), e), t.a[n] = e
        }
        return e
    }
    function N(t) {
        return t = X[t], null == t ? "ZZ" : t[0]
    }
    function C(t) {
        this.H = RegExp(" "), this.B = "", this.m = new e, this.v = "", this.h = new e, this.u = new e, this.j = !0, this.w = this.o = this.D = !1, this.F = x.b(), this.s = 0, this.b = new e, this.A = !1, this.l = "", this.a = new e, this.f = [], this.C = t, this.J = this.g = j(this, this.C)
    }
    function j(t, n) {
        var e;
        if (null != n && isNaN(n) && n.toUpperCase() in tt) {
            if (e = A(t.F, n), null == e) throw"Invalid region code: " + n;
            e = g(e, 10)
        } else e = 0;
        return e = A(t.F, N(e)), null != e ? e : at
    }
    function R(t) {
        for (var n = t.f.length, e = 0; n > e; ++e) {
            var i = t.f[e], a = g(i, 1);
            if (t.v == a) return !1;
            var l;
            l = t;
            var u = i, o = g(u, 1);
            if (-1 != o.indexOf("|")) l = !1; else {
                o = o.replace(lt, "\\d"), o = o.replace(ut, "\\d"), r(l.m);
                var s;
                s = l;
                var u = g(u, 2), f = "999999999999999".match(o)[0];
                f.length < s.a.b.length ? s = "" : (s = f.replace(new RegExp(o, "g"), u), s = s.replace(RegExp("9", "g"), " ")), 0 < s.length ? (l.m.a(s), l = !0) : l = !1
            }
            if (l) return t.v = a, t.A = st.test(h(i, 4)), t.s = 0, !0
        }
        return t.j = !1
    }
    function B(t, n) {
        for (var e = [], r = n.length - 3, i = t.f.length, a = 0; i > a; ++a) {
            var l = t.f[a];
            0 == b(l, 3) ? e.push(t.f[a]) : (l = h(l, 3, Math.min(r, b(l, 3) - 1)), 0 == n.search(l) && e.push(t.f[a]))
        }
        t.f = e
    }
    function E(t, n) {
        t.h.a(n);
        var e = n;
        if (rt.test(e) || 1 == t.h.b.length && et.test(e)) {
            var i, e = n;
            "+" == e ? (i = e, t.u.a(e)) : (i = nt[e], t.u.a(i), t.a.a(i)), n = i
        } else t.j = !1, t.D = !0;
        if (!t.j) {
            if (!t.D) if (P(t)) {
                if (V(t)) return F(t)
            } else if (0 < t.l.length && (e = t.a.toString(), r(t.a), t.a.a(t.l), t.a.a(e), e = t.b.toString(), i = e.lastIndexOf(t.l), r(t.b), t.b.a(e.substring(0, i))), t.l != H(t)) return t.b.a(" "), F(t);
            return t.h.toString()
        }
        switch (t.u.b.length) {
            case 0:
            case 1:
            case 2:
                return t.h.toString();
            case 3:
                if (!P(t)) return t.l = H(t), M(t);
                t.w = !0;
            default:
                return t.w ? (V(t) && (t.w = !1), t.b.toString() + t.a.toString()) : 0 < t.f.length ? (e = q(t, n), i = I(t), 0 < i.length ? i : (B(t, t.a.toString()), R(t) ? G(t) : t.j ? D(t, e) : t.h.toString())) : M(t)
        }
    }
    function F(t) {
        return t.j = !0, t.w = !1, t.f = [], t.s = 0, r(t.m), t.v = "", M(t)
    }
    function I(t) {
        for (var n = t.a.toString(), e = t.f.length, r = 0; e > r; ++r) {
            var i = t.f[r], a = g(i, 1);
            if (new RegExp("^(?:" + a + ")$").test(n)) return t.A = st.test(h(i, 4)), n = n.replace(new RegExp(a, "g"), h(i, 2)), D(t, n)
        }
        return ""
    }
    function D(t, n) {
        var e = t.b.b.length;
        return t.A && e > 0 && " " != t.b.toString().charAt(e - 1) ? t.b + " " + n : t.b + n
    }
    function M(t) {
        var n = t.a.toString();
        if (3 <= n.length) {
            for (var e = t.o && 0 < b(t.g, 20) ? p(t.g, 20) || [] : p(t.g, 19) || [], r = e.length, i = 0; r > i; ++i) {
                var a, l = e[i];
                (a = null == t.g.a[12] || t.o || h(l, 6)) || (a = g(l, 4), a = 0 == a.length || it.test(a)), a && ot.test(g(l, 2)) && t.f.push(l)
            }
            return B(t, n), n = I(t), 0 < n.length ? n : R(t) ? G(t) : t.h.toString()
        }
        return D(t, n)
    }
    function G(t) {
        var n = t.a.toString(), e = n.length;
        if (e > 0) {
            for (var r = "", i = 0; e > i; i++) r = q(t, n.charAt(i));
            return t.j ? D(t, r) : t.h.toString()
        }
        return t.b.toString()
    }
    function H(t) {
        var n, e = t.a.toString(), i = 0;
        return 1 != h(t.g, 10) ? n = !1 : (n = t.a.toString(), n = "1" == n.charAt(0) && "0" != n.charAt(1) && "1" != n.charAt(1)), n ? (i = 1, t.b.a("1").a(" "), t.o = !0) : null != t.g.a[15] && (n = new RegExp("^(?:" + h(t.g, 15) + ")"), n = e.match(n), null != n && null != n[0] && 0 < n[0].length && (t.o = !0, i = n[0].length, t.b.a(e.substring(0, i)))), r(t.a), t.a.a(e.substring(i)), e.substring(0, i)
    }
    function P(t) {
        var n = t.u.toString(), e = new RegExp("^(?:\\+|" + h(t.g, 11) + ")"), e = n.match(e);
        return null != e && null != e[0] && 0 < e[0].length ? (t.o = !0, e = e[0].length, r(t.a), t.a.a(n.substring(e)), r(t.b), t.b.a(n.substring(0, e)), "+" != n.charAt(0) && t.b.a(" "), !0) : !1
    }
    function V(t) {
        if (0 == t.a.b.length) return !1;
        var n, i = new e;
        t:{
            if (n = t.a.toString(), 0 != n.length && "0" != n.charAt(0)) for (var a, l = n.length, u = 1; 3 >= u && l >= u; ++u) if (a = parseInt(n.substring(0, u), 10), a in X) {
                i.a(n.substring(u)), n = a;
                break t
            }
            n = 0
        }
        return 0 == n ? !1 : (r(t.a), t.a.a(i.toString()), i = N(n), "001" == i ? t.g = A(t.F, "" + n) : i != t.C && (t.g = j(t, i)), t.b.a("" + n).a(" "), t.l = "", !0)
    }
    function q(t, n) {
        var e = t.m.toString();
        if (0 <= e.substring(t.s).search(t.H)) {
            var i = e.search(t.H), e = e.replace(t.H, n);
            return r(t.m), t.m.a(e), t.s = i, e.substring(0, t.s + 1)
        }
        return 1 == t.f.length && (t.j = !1), t.v = "", t.h.toString()
    }
    var T = this;
    e.prototype.b = "", e.prototype.set = function (t) {
        this.b = "" + t
    }, e.prototype.a = function (t, n, e) {
        if (this.b += String(t), null != n) for (var r = 1; r < arguments.length; r++) this.b += arguments[r];
        return this
    }, e.prototype.toString = function () {
        return this.b
    };
    var U = 1, Y = 2, k = 3, J = 4, K = 6, L = 16, O = 18;
    f.prototype.set = function (t, n) {
        m(this, t.b, n)
    }, f.prototype.clone = function () {
        var t = new this.constructor;
        return t != this && (t.a = {}, t.b && (t.b = {}), c(t, this)), t
    };
    var Z;
    n(y, f);
    var z;
    n(v, f);
    var Q;
    n(_, f), y.prototype.i = function () {
        return Z || (Z = d(y, {
            0: {name: "NumberFormat", I: "i18n.phonenumbers.NumberFormat"},
            1: {name: "pattern", required: !0, c: 9, type: String},
            2: {name: "format", required: !0, c: 9, type: String},
            3: {name: "leading_digits_pattern", G: !0, c: 9, type: String},
            4: {name: "national_prefix_formatting_rule", c: 9, type: String},
            6: {name: "national_prefix_optional_when_formatting", c: 8, type: Boolean},
            5: {name: "domestic_carrier_code_formatting_rule", c: 9, type: String}
        })), Z
    }, y.ctor = y, y.ctor.i = y.prototype.i, v.prototype.i = function () {
        return z || (z = d(v, {
            0: {name: "PhoneNumberDesc", I: "i18n.phonenumbers.PhoneNumberDesc"},
            2: {name: "national_number_pattern", c: 9, type: String},
            3: {name: "possible_number_pattern", c: 9, type: String},
            6: {name: "example_number", c: 9, type: String},
            7: {name: "national_number_matcher_data", c: 12, type: String},
            8: {name: "possible_number_matcher_data", c: 12, type: String}
        })), z
    }, v.ctor = v, v.ctor.i = v.prototype.i, _.prototype.i = function () {
        return Q || (Q = d(_, {
            0: {name: "PhoneMetadata", I: "i18n.phonenumbers.PhoneMetadata"},
            1: {name: "general_desc", c: 11, type: v},
            2: {name: "fixed_line", c: 11, type: v},
            3: {name: "mobile", c: 11, type: v},
            4: {name: "toll_free", c: 11, type: v},
            5: {name: "premium_rate", c: 11, type: v},
            6: {name: "shared_cost", c: 11, type: v},
            7: {name: "personal_number", c: 11, type: v},
            8: {name: "voip", c: 11, type: v},
            21: {name: "pager", c: 11, type: v},
            25: {name: "uan", c: 11, type: v},
            27: {name: "emergency", c: 11, type: v},
            28: {name: "voicemail", c: 11, type: v},
            24: {name: "no_international_dialling", c: 11, type: v},
            9: {name: "id", required: !0, c: 9, type: String},
            10: {name: "country_code", c: 5, type: Number},
            11: {name: "international_prefix", c: 9, type: String},
            17: {name: "preferred_international_prefix", c: 9, type: String},
            12: {name: "national_prefix", c: 9, type: String},
            13: {name: "preferred_extn_prefix", c: 9, type: String},
            15: {name: "national_prefix_for_parsing", c: 9, type: String},
            16: {name: "national_prefix_transform_rule", c: 9, type: String},
            18: {name: "same_mobile_and_fixed_line_pattern", c: 8, defaultValue: !1, type: Boolean},
            19: {name: "number_format", G: !0, c: 11, type: y},
            20: {name: "intl_number_format", G: !0, c: 11, type: y},
            22: {name: "main_country_for_code", c: 8, defaultValue: !1, type: Boolean},
            23: {name: "leading_digits", c: 9, type: String},
            26: {name: "leading_zero_possible", c: 8, defaultValue: !1, type: Boolean}
        })), Q
    }, _.ctor = _, _.ctor.i = _.prototype.i, $.prototype.a = function (t) {
        throw new t.b, Error("Unimplemented")
    }, $.prototype.b = function (t, n) {
        if (11 == t.a || 10 == t.a) return n instanceof f ? n : this.a(t.j.prototype.i(), n);
        if (14 == t.a) {
            if ("string" == typeof n && W.test(n)) {
                var e = Number(n);
                if (e > 0) return e
            }
            return n
        }
        if (!t.h) return n;
        if (e = t.j, e === String) {
            if ("number" == typeof n) return String(n)
        } else if (e === Number && "string" == typeof n && ("Infinity" === n || "-Infinity" === n || "NaN" === n || W.test(n))) return Number(n);
        return n
    };
    var W = /^-?[0-9]+$/;
    n(S, $), S.prototype.a = function (t, n) {
        var e = new t.b;
        return e.g = this, e.a = n, e.b = {}, e
    }, n(w, S), w.prototype.b = function (t, n) {
        return 8 == t.a ? !!n : $.prototype.b.apply(this, arguments)
    }, w.prototype.a = function (t, n) {
        return w.M.a.call(this, t, n)
    };
    var X = {55: ["BR"]}, tt = {
        BR: [null, [null, null, "[1-46-9]\\d{7,10}|5\\d{8,9}", "\\d{8,11}"], [null, null, "(?:[14689][1-9]|2[12478]|3[1-578]|5[1-5]|7[13-579])[2-5]\\d{7}", "\\d{8,11}", null, null, "1123456789"], [null, null, "1[1-9](?:7|9\\d)\\d{7}|(?:2[12478]|3[1-578]|[689][1-9]|7[13-579])(?:[6-8]|9\\d?)\\d{7}|(?:4[1-9]|5[1-5])[6-9]\\d{7}", "\\d{10,11}", null, null, "11961234567"], [null, null, "800\\d{6,7}", "\\d{8,11}", null, null, "800123456"], [null, null, "(?:300|[59]00\\d?)\\d{6}", "\\d{8,11}", null, null, "300123456"], [null, null, "(?:300\\d(?:\\d{2})?|40(?:0\\d|20))\\d{4}", "\\d{8,10}", null, null, "40041234"], [null, null, "NA", "NA"], [null, null, "NA", "NA"], "BR", 55, "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "0", null, null, "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", null, null, [[null, "(\\d{4})(\\d{4})", "$1-$2", ["[2-9](?:[1-9]|0[1-9])"], "$1"], [null, "(\\d{5})(\\d{4})", "$1-$2", ["9(?:[1-9]|0[1-9])"], "$1"], [null, "(\\d{3,5})", "$1", ["1[125689]"], "$1"], [null, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["(?:[1689][1-9]|2[12478]|3[1-578]|7[13-579])9"], "($1)", "0 $CC ($1)"], [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)", "0 $CC ($1)"], [null, "(\\d{4})(\\d{4})", "$1-$2", ["(?:300|40(?:0|20))"]], [null, "([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"]], [[null, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["(?:[1689][1-9]|2[12478]|3[1-578]|7[13-579])9"], "($1)", "0 $CC ($1)"], [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)", "0 $CC ($1)"], [null, "(\\d{4})(\\d{4})", "$1-$2", ["(?:300|40(?:0|20))"]], [null, "([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"]], [null, null, "NA", "NA"], null, null, [null, null, "(?:300\\d|40(?:0\\d|20))\\d{4}", "\\d{8}", null, null, "40041234"], [null, null, "NA", "NA"], null, null, [null, null, "NA", "NA"]]
    };
    x.b = function () {
        return x.a ? x.a : x.a = new x
    };
    var nt = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        "０": "0",
        "１": "1",
        "２": "2",
        "３": "3",
        "４": "4",
        "５": "5",
        "６": "6",
        "７": "7",
        "８": "8",
        "９": "9",
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9"
    }, et = RegExp("[+＋]+"), rt = RegExp("([0-9０-９٠-٩۰-۹])"), it = /^\(?\$1\)?$/, at = new _;
    m(at, 11, "NA");
    var lt = /\[([^\[\]])*\]/g, ut = /\d(?=[^,}][^,}])/g,
        ot = RegExp("^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$"),
        st = /[- ]/;
    C.prototype.K = function () {
        this.B = "", r(this.h), r(this.u), r(this.m), this.s = 0, this.v = "", r(this.b), this.l = "", r(this.a), this.j = !0, this.w = this.o = this.D = !1, this.f = [], this.A = !1, this.g != this.J && (this.g = j(this, this.C))
    }, C.prototype.L = function (t) {
        return this.B = E(this, t)
    }, t("Cleave.AsYouTypeFormatter", C), t("Cleave.AsYouTypeFormatter.prototype.inputDigit", C.prototype.L), t("Cleave.AsYouTypeFormatter.prototype.clear", C.prototype.K)
}.call("object" == typeof global && global ? global : window);
/* boleto.min.js */
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Boleto = t() : e.Boleto = t()
}(window, function () {
    return function (e) {
        var t = {};
        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {i: n, l: !1, exports: {}};
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
        }, r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
                return e[t]
            }.bind(null, o));
            return n
        }, r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 0)
    }([function (e, t, r) {
        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var o = r(1), a = r(3), u = r(4).modulo11, i = function () {
            function e(t) {
                if (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.bankSlipNumber = t.replace(/[^\d]/g, ""), !this.valid()) throw new Error("Invalid bank slip number")
            }
            var t, r, i;
            return t = e, (r = [{
                key: "valid", value: function () {
                    if (47 !== this.bankSlipNumber.length) return !1;
                    var e = this.barcode().split(""), t = e.splice(4, 1);
                    return u(e).toString() === t.toString()
                }
            }, {
                key: "barcode", value: function () {
                    return this.bankSlipNumber.replace(/^(\d{4})(\d{5})\d{1}(\d{10})\d{1}(\d{10})\d{1}(\d{15})$/, "$1$5$2$3$4")
                }
            }, {
                key: "number", value: function () {
                    return this.bankSlipNumber
                }
            }, {
                key: "prettyNumber", value: function () {
                    return this.bankSlipNumber.replace(/^(\d{5})(\d{5})(\d{5})(\d{6})(\d{5})(\d{6})(\d{1})(\d{14})$/, "$1.$2 $3.$4 $5.$6 $7 $8")
                }
            }, {
                key: "bank", value: function () {
                    switch (this.barcode().substr(0, 3)) {
                        case"001":
                            return "Banco do Brasil";
                        case"007":
                            return "BNDES";
                        case"033":
                            return "Santander";
                        case"069":
                            return "Crefisa";
                        case"077":
                            return "Banco Inter";
                        case"102":
                            return "XP Investimentos";
                        case"104":
                            return "Caixa Econômica Federal";
                        case"140":
                            return "Easynvest";
                        case"197":
                            return "Stone";
                        case"208":
                            return "BTG Pactual";
                        case"212":
                            return "Banco Original";
                        case"237":
                            return "Bradesco";
                        case"260":
                            return "Nu Pagamentos";
                        case"341":
                            return "Itaú";
                        case"389":
                            return "Banco Mercantil do Brasil";
                        case"422":
                            return "Banco Safra";
                        case"505":
                            return "Credit Suisse";
                        case"633":
                            return "Banco Rendimento";
                        case"652":
                            return "Itaú Unibanco";
                        case"735":
                            return "Banco Neon";
                        case"739":
                            return "Banco Cetelem";
                        case"745":
                            return "Citibank";
                        default:
                            return "Unknown"
                    }
                }
            }, {
                key: "currency", value: function () {
                    switch (this.barcode()[3]) {
                        case"9":
                            return {code: "BRL", symbol: "R$", decimal: ","};
                        default:
                            return "Unknown"
                    }
                }
            }, {
                key: "checksum", value: function () {
                    return this.barcode()[4]
                }
            }, {
                key: "expirationDate", value: function () {
                    var e = new Date("1997-10-07"), t = this.barcode().substr(5, 4);
                    return new Date(e.getTime() + 864e5 * t)
                }
            }, {
                key: "amount", value: function () {
                    return (this.barcode().substr(9, 10) / 100).toFixed(2)
                }
            }, {
                key: "prettyAmount", value: function () {
                    var e = this.currency();
                    return "Unknown" === e ? this.amount() : "".concat(e.symbol, " ").concat(this.amount().replace(".", e.decimal))
                }
            }, {
                key: "toSVG", value: function (e) {
                    var t = a.encode(this.barcode());
                    return new o(t).render(e)
                }
            }]) && n(t.prototype, r), i && n(t, i), e
        }();
        e.exports = i
    }, function (e, t, r) {
        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var o = r(2), a = function () {
            function e(t, r) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.stripes = t.split("").map(function (e) {
                    return parseInt(e, 10)
                }), this.stripeWidth = r || 4
            }
            var t, r, a;
            return t = e, a = [{
                key: "color", value: function (e) {
                    return e % 2 ? "#ffffff" : "#000000"
                }
            }], (r = [{
                key: "render", value: function (t) {
                    for (var r = document.createElementNS("http://www.w3.org/2000/svg", "svg"), n = 0, a = 0, u = 0; u < this.stripes.length; u += 1, n += a) {
                        a = this.stripeWidth * this.stripes[u];
                        var i = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        i.setAttribute("width", a), i.setAttribute("height", 100), i.setAttribute("fill", e.color(u)), i.setAttribute("x", n), i.setAttribute("y", 0), r.appendChild(i)
                    }
                    return r.setAttribute("width", "100%"), r.setAttribute("height", "100%"), r.setAttribute("viewBox", "0 0 ".concat(this.viewBoxWidth(), " 100")), void 0 === t ? o.serializeToString(r) : (document.querySelector(t).appendChild(r), null)
                }
            }, {
                key: "viewBoxWidth", value: function () {
                    return this.stripes.reduce(function (e, t) {
                        return e + t
                    }, 0) * this.stripeWidth
                }
            }]) && n(t.prototype, r), a && n(t, a), e
        }();
        e.exports = a
    }, function (e, t, r) {
        var n, o, a;
        o = [], void 0 === (a = "function" == typeof (n = function () {
            var e = function (e) {
                var t = e.tagName;
                return "http://www.w3.org/1999/xhtml" === e.namespaceURI && (t = t.toLowerCase()), t
            }, t = function (e) {
                return Array.prototype.map.call(e.childNodes, function (e) {
                    return n(e)
                }).join("")
            }, r = function (r, n) {
                var o = "<" + e(r);
                return o += function (e, t) {
                    return Array.prototype.map.call(e.attributes || e.attrs, function (e) {
                        return e.name
                    }).indexOf("xmlns") >= 0 || !t && e.namespaceURI === e.parentNode.namespaceURI ? "" : ' xmlns="' + e.namespaceURI + '"'
                }(r, n), Array.prototype.forEach.call(r.attributes || r.attrs, function (e) {
                    o += function (e) {
                        var t = e.value;
                        return " " + e.name + '="' + function (e) {
                            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
                        }(t) + '"'
                    }(e)
                }), r.childNodes.length > 0 ? (o += ">", o += t(r), o += "</" + e(r) + ">") : o += "/>", o
            }, n = function (e, n) {
                var o = n && n.rootNode;
                return "#document" === e.nodeName || "#document-fragment" === e.nodeName ? t(e) : e.tagName ? r(e, o) : "#text" === e.nodeName ? function (e) {
                    var t = e.nodeValue || e.value || "";
                    return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }(e) : "#comment" === e.nodeName ? function (e) {
                    return "\x3c!--" + e.data.replace(/-/g, "&#45;") + "--\x3e"
                }(e) : "#cdata-section" === e.nodeName ? function (e) {
                    return "<![CDATA[" + e.nodeValue + "]]>"
                }(e) : void 0
            };
            return {
                serializeToString: function (e) {
                    return n(e, {rootNode: !0}).replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "")
                }
            }
        }) ? n.apply(t, o) : n) || (e.exports = a)
    }, function (e, t) {
        var r = ["11221", "21112", "12112", "22111", "11212", "21211", "12211", "11122", "21121", "12121"], n = "1111",
            o = "211";
        function a(e) {
            for (var t = r[Math.floor(e / 10)], n = r[e % 10], o = "", a = 0; a < 5; a += 1) o += t[a], o += n[a];
            return o
        }
        e.exports = {
            encode: function (e) {
                return n + e.match(/(..?)/g).map(a).join("") + o
            }
        }
    }, function (e, t) {
        e.exports = {
            modulo11: function (e) {
                var t = e;
                "string" == typeof t && (t = t.split("")), t.reverse();
                for (var r = 0, n = 0; n < t.length; n += 1) r += (n % 8 + 2) * t[n];
                return (11 - r % 11) % 10 || 1
            }
        }
    }])
});
/* flipclock.min.js */
var Base = function () {
};
Base.extend = function (a, b) {
    "use strict";
    var c = Base.prototype.extend;
    Base._prototyping = !0;
    var d = new this;
    c.call(d, a), d.base = function () {
    }, delete Base._prototyping;
    var e = d.constructor, f = d.constructor = function () {
        if (!Base._prototyping) if (this._constructing || this.constructor == f) this._constructing = !0, e.apply(this, arguments), delete this._constructing; else if (null !== arguments[0]) return (arguments[0].extend || c).call(arguments[0], d)
    };
    return f.ancestor = this, f.extend = this.extend, f.forEach = this.forEach, f.implement = this.implement, f.prototype = d, f.toString = this.toString, f.valueOf = function (a) {
        return "object" == a ? f : e.valueOf()
    }, c.call(f, b), "function" == typeof f.init && f.init(), f
}, Base.prototype = {
    extend: function (a, b) {
        if (arguments.length > 1) {
            var c = this[a];
            if (c && "function" == typeof b && (!c.valueOf || c.valueOf() != b.valueOf()) && /\bbase\b/.test(b)) {
                var d = b.valueOf();
                b = function () {
                    var a = this.base || Base.prototype.base;
                    this.base = c;
                    var b = d.apply(this, arguments);
                    return this.base = a, b
                }, b.valueOf = function (a) {
                    return "object" == a ? b : d
                }, b.toString = Base.toString
            }
            this[a] = b
        } else if (a) {
            var e = Base.prototype.extend;
            Base._prototyping || "function" == typeof this || (e = this.extend || e);
            for (var f = {toSource: null}, g = ["constructor", "toString", "valueOf"], h = Base._prototyping ? 0 : 1; i = g[h++];) a[i] != f[i] && e.call(this, i, a[i]);
            for (var i in a) f[i] || e.call(this, i, a[i])
        }
        return this
    }
}, Base = Base.extend({
    constructor: function () {
        this.extend(arguments[0])
    }
}, {
    ancestor: Object, version: "1.1", forEach: function (a, b, c) {
        for (var d in a) void 0 === this.prototype[d] && b.call(c, a[d], d, a)
    }, implement: function () {
        for (var a = 0; a < arguments.length; a++) "function" == typeof arguments[a] ? arguments[a](this.prototype) : this.prototype.extend(arguments[a]);
        return this
    }, toString: function () {
        return String(this.valueOf())
    }
});
var FlipClock;
!function (a) {
    "use strict";
    FlipClock = function (a, b, c) {
        return b instanceof Object && b instanceof Date == !1 && (c = b, b = 0), new FlipClock.Factory(a, b, c)
    }, FlipClock.Lang = {}, FlipClock.Base = Base.extend({
        buildDate: "2014-12-12",
        version: "0.7.7",
        constructor: function (b, c) {
            "object" != typeof b && (b = {}), "object" != typeof c && (c = {}), this.setOptions(a.extend(!0, {}, b, c))
        },
        callback: function (a) {
            if ("function" == typeof a) {
                for (var b = [], c = 1; c <= arguments.length; c++) arguments[c] && b.push(arguments[c]);
                a.apply(this, b)
            }
        },
        log: function (a) {
            window.console && console.log && console.log(a)
        },
        getOption: function (a) {
            return this[a] ? this[a] : !1
        },
        getOptions: function () {
            return this
        },
        setOption: function (a, b) {
            this[a] = b
        },
        setOptions: function (a) {
            for (var b in a) "undefined" != typeof a[b] && this.setOption(b, a[b])
        }
    })
}(jQuery), function (a) {
    "use strict";
    FlipClock.Face = FlipClock.Base.extend({
        autoStart: !0, dividers: [], factory: !1, lists: [], constructor: function (a, b) {
            this.dividers = [], this.lists = [], this.base(b), this.factory = a
        }, build: function () {
            this.autoStart && this.start()
        }, createDivider: function (b, c, d) {
            "boolean" != typeof c && c || (d = c, c = b);
            var e = ['<span class="' + this.factory.classes.dot + ' top"></span>', '<span class="' + this.factory.classes.dot + ' bottom"></span>'].join("");
            d && (e = ""), b = this.factory.localize(b);
            var f = ['<span class="' + this.factory.classes.divider + " " + (c ? c : "").toLowerCase() + '">', '<span class="' + this.factory.classes.label + '">' + (b ? b : "") + "</span>", e, "</span>"],
                g = a(f.join(""));
            return this.dividers.push(g), g
        }, createList: function (a, b) {
            "object" == typeof a && (b = a, a = 0);
            var c = new FlipClock.List(this.factory, a, b);
            return this.lists.push(c), c
        }, reset: function () {
            this.factory.time = new FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0, {minimumDigits: this.factory.minimumDigits}), this.flip(this.factory.original, !1)
        }, appendDigitToClock: function (a) {
            a.$el.append(!1)
        }, addDigit: function (a) {
            var b = this.createList(a, {
                classes: {
                    active: this.factory.classes.active,
                    before: this.factory.classes.before,
                    flip: this.factory.classes.flip
                }
            });
            this.appendDigitToClock(b)
        }, start: function () {
        }, stop: function () {
        }, autoIncrement: function () {
            this.factory.countdown ? this.decrement() : this.increment()
        }, increment: function () {
            this.factory.time.addSecond()
        }, decrement: function () {
            0 == this.factory.time.getTimeSeconds() ? this.factory.stop() : this.factory.time.subSecond()
        }, flip: function (b, c) {
            var d = this;
            a.each(b, function (a, b) {
                var e = d.lists[a];
                e ? (c || b == e.digit || e.play(), e.select(b)) : d.addDigit(b)
            })
        }
    })
}(jQuery), function (a) {
    "use strict";
    FlipClock.Factory = FlipClock.Base.extend({
        animationRate: 1e3,
        autoStart: !0,
        callbacks: {destroy: !1, create: !1, init: !1, interval: !1, start: !1, stop: !1, reset: !1},
        classes: {
            active: "flip-clock-active",
            before: "flip-clock-before",
            divider: "flip-clock-divider",
            dot: "flip-clock-dot",
            label: "flip-clock-label",
            flip: "flip",
            play: "play",
            wrapper: "flip-clock-wrapper"
        },
        clockFace: "HourlyCounter",
        countdown: !1,
        defaultClockFace: "HourlyCounter",
        defaultLanguage: "english",
        $el: !1,
        face: !0,
        lang: !1,
        language: "english",
        minimumDigits: 0,
        original: !1,
        running: !1,
        time: !1,
        timer: !1,
        $wrapper: !1,
        constructor: function (b, c, d) {
            d || (d = {}), this.lists = [], this.running = !1, this.base(d), this.$el = a(b).addClass(this.classes.wrapper), this.$wrapper = this.$el, this.original = c instanceof Date ? c : c ? Math.round(c) : 0, this.time = new FlipClock.Time(this, this.original, {
                minimumDigits: this.minimumDigits,
                animationRate: this.animationRate
            }), this.timer = new FlipClock.Timer(this, d), this.loadLanguage(this.language), this.loadClockFace(this.clockFace, d), this.autoStart && this.start()
        },
        loadClockFace: function (a, b) {
            var c, d = "Face", e = !1;
            return a = a.ucfirst() + d, this.face.stop && (this.stop(), e = !0), this.$el.html(""), this.time.minimumDigits = this.minimumDigits, c = FlipClock[a] ? new FlipClock[a](this, b) : new FlipClock[this.defaultClockFace + d](this, b), c.build(), this.face = c, e && this.start(), this.face
        },
        loadLanguage: function (a) {
            var b;
            return b = FlipClock.Lang[a.ucfirst()] ? FlipClock.Lang[a.ucfirst()] : FlipClock.Lang[a] ? FlipClock.Lang[a] : FlipClock.Lang[this.defaultLanguage], this.lang = b
        },
        localize: function (a, b) {
            var c = this.lang;
            if (!a) return null;
            var d = a.toLowerCase();
            return "object" == typeof b && (c = b), c && c[d] ? c[d] : a
        },
        start: function (a) {
            var b = this;
            b.running || b.countdown && !(b.countdown && b.time.time > 0) ? b.log("Trying to start timer when countdown already at 0") : (b.face.start(b.time), b.timer.start(function () {
                b.flip(), "function" == typeof a && a()
            }))
        },
        stop: function (a) {
            this.face.stop(), this.timer.stop(a);
            for (var b in this.lists) this.lists.hasOwnProperty(b) && this.lists[b].stop()
        },
        reset: function (a) {
            this.timer.reset(a), this.face.reset()
        },
        setTime: function (a) {
            this.time.time = a, this.flip(!0)
        },
        getTime: function () {
            return this.time
        },
        setCountdown: function (a) {
            var b = this.running;
            this.countdown = a ? !0 : !1, b && (this.stop(), this.start())
        },
        flip: function (a) {
            this.face.flip(!1, a)
        }
    })
}(jQuery), function (a) {
    "use strict";
    FlipClock.List = FlipClock.Base.extend({
        digit: 0,
        classes: {active: "flip-clock-active", before: "flip-clock-before", flip: "flip"},
        factory: !1,
        $el: !1,
        $obj: !1,
        items: [],
        lastDigit: 0,
        constructor: function (a, b) {
            this.factory = a, this.digit = b, this.lastDigit = b, this.$el = this.createList(), this.$obj = this.$el, b > 0 && this.select(b), this.factory.$el.append(this.$el)
        },
        select: function (a) {
            if ("undefined" == typeof a ? a = this.digit : this.digit = a, this.digit != this.lastDigit) {
                var b = this.$el.find("." + this.classes.before).removeClass(this.classes.before);
                this.$el.find("." + this.classes.active).removeClass(this.classes.active).addClass(this.classes.before), this.appendListItem(this.classes.active, this.digit), b.remove(), this.lastDigit = this.digit
            }
        },
        play: function () {
            this.$el.addClass(this.factory.classes.play)
        },
        stop: function () {
            var a = this;
            setTimeout(function () {
                a.$el.removeClass(a.factory.classes.play)
            }, this.factory.timer.interval)
        },
        createListItem: function (a, b) {
            return ['<li class="' + (a ? a : "") + '">', '<a href="#">', '<div class="up">', '<div class="shadow"></div>', '<div class="inn">' + (b ? b : "") + "</div>", "</div>", '<div class="down">', '<div class="shadow"></div>', '<div class="inn">' + (b ? b : "") + "</div>", "</div>", "</a>", "</li>"].join("")
        },
        appendListItem: function (a, b) {
            var c = this.createListItem(a, b);
            this.$el.append(c)
        },
        createList: function () {
            var b = this.getPrevDigit() ? this.getPrevDigit() : this.digit,
                c = a(['<ul class="' + this.classes.flip + " " + (this.factory.running ? this.factory.classes.play : "") + '">', this.createListItem(this.classes.before, b), this.createListItem(this.classes.active, this.digit), "</ul>"].join(""));
            return c
        },
        getNextDigit: function () {
            return 9 == this.digit ? 0 : this.digit + 1
        },
        getPrevDigit: function () {
            return 0 == this.digit ? 9 : this.digit - 1
        }
    })
}(jQuery), function (a) {
    "use strict";
    String.prototype.ucfirst = function () {
        return this.substr(0, 1).toUpperCase() + this.substr(1)
    }, a.fn.FlipClock = function (b, c) {
        return new FlipClock(a(this), b, c)
    }, a.fn.flipClock = function (b, c) {
        return a.fn.FlipClock(b, c)
    }
}(jQuery), function (a) {
    "use strict";
    FlipClock.Time = FlipClock.Base.extend({
        time: 0, factory: !1, minimumDigits: 0, constructor: function (a, b, c) {
            "object" != typeof c && (c = {}), c.minimumDigits || (c.minimumDigits = a.minimumDigits), this.base(c), this.factory = a, b && (this.time = b)
        }, convertDigitsToArray: function (a) {
            var b = [];
            a = a.toString();
            for (var c = 0; c < a.length; c++) a[c].match(/^\d*$/g) && b.push(a[c]);
            return b
        }, digit: function (a) {
            var b = this.toString(), c = b.length;
            return b[c - a] ? b[c - a] : !1
        }, digitize: function (b) {
            var c = [];
            if (a.each(b, function (a, b) {
                b = b.toString(), 1 == b.length && (b = "0" + b);
                for (var d = 0; d < b.length; d++) c.push(b.charAt(d))
            }), c.length > this.minimumDigits && (this.minimumDigits = c.length), this.minimumDigits > c.length) for (var d = c.length; d < this.minimumDigits; d++) c.unshift("0");
            return c
        }, getDateObject: function () {
            return this.time instanceof Date ? this.time : new Date((new Date).getTime() + 1e3 * this.getTimeSeconds())
        }, getDayCounter: function (a) {
            var b = [this.getDays(), this.getHours(!0), this.getMinutes(!0)];
            return a && b.push(this.getSeconds(!0)), this.digitize(b)
        }, getDays: function (a) {
            var b = this.getTimeSeconds() / 60 / 60 / 24;
            return a && (b %= 7), Math.floor(b)
        }, getHourCounter: function () {
            var a = this.digitize([this.getHours(), this.getMinutes(!0), this.getSeconds(!0)]);
            return a
        }, getHourly: function () {
            return this.getHourCounter()
        }, getHours: function (a) {
            var b = this.getTimeSeconds() / 60 / 60;
            return a && (b %= 24), Math.floor(b)
        }, getMilitaryTime: function (a, b) {
            "undefined" == typeof b && (b = !0), a || (a = this.getDateObject());
            var c = [a.getHours(), a.getMinutes()];
            return b === !0 && c.push(a.getSeconds()), this.digitize(c)
        }, getMinutes: function (a) {
            var b = this.getTimeSeconds() / 60;
            return a && (b %= 60), Math.floor(b)
        }, getMinuteCounter: function () {
            var a = this.digitize([this.getMinutes(), this.getSeconds(!0)]);
            return a
        }, getTimeSeconds: function (a) {
            return a || (a = new Date), this.time instanceof Date ? this.factory.countdown ? Math.max(this.time.getTime() / 1e3 - a.getTime() / 1e3, 0) : a.getTime() / 1e3 - this.time.getTime() / 1e3 : this.time
        }, getTime: function (a, b) {
            "undefined" == typeof b && (b = !0), a || (a = this.getDateObject()), console.log(a);
            var c = a.getHours(), d = [c > 12 ? c - 12 : 0 === c ? 12 : c, a.getMinutes()];
            return b === !0 && d.push(a.getSeconds()), this.digitize(d)
        }, getSeconds: function (a) {
            var b = this.getTimeSeconds();
            return a && (60 == b ? b = 0 : b %= 60), Math.ceil(b)
        }, getWeeks: function (a) {
            var b = this.getTimeSeconds() / 60 / 60 / 24 / 7;
            return a && (b %= 52), Math.floor(b)
        }, removeLeadingZeros: function (b, c) {
            var d = 0, e = [];
            return a.each(c, function (a) {
                b > a ? d += parseInt(c[a], 10) : e.push(c[a])
            }), 0 === d ? e : c
        }, addSeconds: function (a) {
            this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() + a) : this.time += a
        }, addSecond: function () {
            this.addSeconds(1)
        }, subSeconds: function (a) {
            this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() - a) : this.time -= a
        }, subSecond: function () {
            this.subSeconds(1)
        }, toString: function () {
            return this.getTimeSeconds().toString()
        }
    })
}(jQuery), function () {
    "use strict";
    FlipClock.Timer = FlipClock.Base.extend({
        callbacks: {destroy: !1, create: !1, init: !1, interval: !1, start: !1, stop: !1, reset: !1},
        count: 0,
        factory: !1,
        interval: 1e3,
        animationRate: 1e3,
        constructor: function (a, b) {
            this.base(b), this.factory = a, this.callback(this.callbacks.init), this.callback(this.callbacks.create)
        },
        getElapsed: function () {
            return this.count * this.interval
        },
        getElapsedTime: function () {
            return new Date(this.time + this.getElapsed())
        },
        reset: function (a) {
            clearInterval(this.timer), this.count = 0, this._setInterval(a), this.callback(this.callbacks.reset)
        },
        start: function (a) {
            this.factory.running = !0, this._createTimer(a), this.callback(this.callbacks.start)
        },
        stop: function (a) {
            this.factory.running = !1, this._clearInterval(a), this.callback(this.callbacks.stop), this.callback(a)
        },
        _clearInterval: function () {
            clearInterval(this.timer)
        },
        _createTimer: function (a) {
            this._setInterval(a)
        },
        _destroyTimer: function (a) {
            this._clearInterval(), this.timer = !1, this.callback(a), this.callback(this.callbacks.destroy)
        },
        _interval: function (a) {
            this.callback(this.callbacks.interval), this.callback(a), this.count++
        },
        _setInterval: function (a) {
            var b = this;
            b._interval(a), b.timer = setInterval(function () {
                b._interval(a)
            }, this.interval)
        }
    })
}(jQuery), function (a) {
    FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({
        constructor: function (a, b) {
            this.base(a, b)
        }, build: function (b) {
            var c = this, d = this.factory.$el.find("ul");
            this.factory.time.time || (this.factory.original = new Date, this.factory.time = new FlipClock.Time(this.factory, this.factory.original));
            var b = b ? b : this.factory.time.getMilitaryTime(!1, this.showSeconds);
            b.length > d.length && a.each(b, function (a, b) {
                c.createList(b)
            }), this.createDivider(), this.createDivider(), a(this.dividers[0]).insertBefore(this.lists[this.lists.length - 2].$el), a(this.dividers[1]).insertBefore(this.lists[this.lists.length - 4].$el), this.base()
        }, flip: function (a, b) {
            this.autoIncrement(), a = a ? a : this.factory.time.getMilitaryTime(!1, this.showSeconds), this.base(a, b)
        }
    })
}(jQuery), function (a) {
    FlipClock.CounterFace = FlipClock.Face.extend({
        shouldAutoIncrement: !1, constructor: function (a, b) {
            "object" != typeof b && (b = {}), a.autoStart = b.autoStart ? !0 : !1, b.autoStart && (this.shouldAutoIncrement = !0), a.increment = function () {
                a.countdown = !1, a.setTime(a.getTime().getTimeSeconds() + 1)
            }, a.decrement = function () {
                a.countdown = !0;
                var b = a.getTime().getTimeSeconds();
                b > 0 && a.setTime(b - 1)
            }, a.setValue = function (b) {
                a.setTime(b)
            }, a.setCounter = function (b) {
                a.setTime(b)
            }, this.base(a, b)
        }, build: function () {
            var b = this, c = this.factory.$el.find("ul"),
                d = this.factory.getTime().digitize([this.factory.getTime().time]);
            d.length > c.length && a.each(d, function (a, c) {
                var d = b.createList(c);
                d.select(c)
            }), a.each(this.lists, function (a, b) {
                b.play()
            }), this.base()
        }, flip: function (a, b) {
            this.shouldAutoIncrement && this.autoIncrement(), a || (a = this.factory.getTime().digitize([this.factory.getTime().time])), this.base(a, b)
        }, reset: function () {
            this.factory.time = new FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0), this.flip()
        }
    })
}(jQuery), function (a) {
    FlipClock.DailyCounterFace = FlipClock.Face.extend({
        showSeconds: !0, constructor: function (a, b) {
            this.base(a, b)
        }, build: function (b) {
            var c = this, d = this.factory.$el.find("ul"), e = 0;
            b = b ? b : this.factory.time.getDayCounter(this.showSeconds), b.length > d.length && a.each(b, function (a, b) {
                c.createList(b)
            }), this.showSeconds ? a(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length - 2].$el) : e = 2, a(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length - 4 + e].$el), a(this.createDivider("Hours")).insertBefore(this.lists[this.lists.length - 6 + e].$el), a(this.createDivider("Days", !0)).insertBefore(this.lists[0].$el), this.base()
        }, flip: function (a, b) {
            a || (a = this.factory.time.getDayCounter(this.showSeconds)), this.autoIncrement(), this.base(a, b)
        }
    })
}(jQuery), function (a) {
    FlipClock.HourlyCounterFace = FlipClock.Face.extend({
        constructor: function (a, b) {
            this.base(a, b)
        }, build: function (b, c) {
            var d = this, e = this.factory.$el.find("ul");
            c = c ? c : this.factory.time.getHourCounter(), c.length > e.length && a.each(c, function (a, b) {
                d.createList(b)
            }), a(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length - 2].$el), a(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length - 4].$el), b || a(this.createDivider("Hours", !0)).insertBefore(this.lists[0].$el), this.base()
        }, flip: function (a, b) {
            a || (a = this.factory.time.getHourCounter()), this.autoIncrement(), this.base(a, b)
        }, appendDigitToClock: function (a) {
            this.base(a), this.dividers[0].insertAfter(this.dividers[0].next())
        }
    })
}(jQuery), function () {
    FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({
        clearExcessDigits: !1,
        constructor: function (a, b) {
            this.base(a, b)
        },
        build: function () {
            this.base(!0, this.factory.time.getMinuteCounter())
        },
        flip: function (a, b) {
            a || (a = this.factory.time.getMinuteCounter()), this.base(a, b)
        }
    })
}(jQuery), function (a) {
    FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({
        meridium: !1,
        meridiumText: "AM",
        build: function () {
            var b = this.factory.time.getTime(!1, this.showSeconds);
            this.base(b), this.meridiumText = this.getMeridium(), this.meridium = a(['<ul class="flip-clock-meridium">', "<li>", '<a href="#">' + this.meridiumText + "</a>", "</li>", "</ul>"].join("")), this.meridium.insertAfter(this.lists[this.lists.length - 1].$el)
        },
        flip: function (a, b) {
            this.meridiumText != this.getMeridium() && (this.meridiumText = this.getMeridium(), this.meridium.find("a").html(this.meridiumText)), this.base(this.factory.time.getTime(!1, this.showSeconds), b)
        },
        getMeridium: function () {
            return (new Date).getHours() >= 12 ? "PM" : "AM"
        },
        isPM: function () {
            return "PM" == this.getMeridium() ? !0 : !1
        },
        isAM: function () {
            return "AM" == this.getMeridium() ? !0 : !1
        }
    })
}(jQuery), function () {
    FlipClock.Lang.Arabic = {
        years: "سنوات",
        months: "شهور",
        days: "أيام",
        hours: "ساعات",
        minutes: "دقائق",
        seconds: "ثواني"
    }, FlipClock.Lang.ar = FlipClock.Lang.Arabic, FlipClock.Lang["ar-ar"] = FlipClock.Lang.Arabic, FlipClock.Lang.arabic = FlipClock.Lang.Arabic
}(jQuery), function () {
    FlipClock.Lang.Danish = {
        years: "År",
        months: "Måneder",
        days: "Dage",
        hours: "Timer",
        minutes: "Minutter",
        seconds: "Sekunder"
    }, FlipClock.Lang.da = FlipClock.Lang.Danish, FlipClock.Lang["da-dk"] = FlipClock.Lang.Danish, FlipClock.Lang.danish = FlipClock.Lang.Danish
}(jQuery), function () {
    FlipClock.Lang.German = {
        years: "Jahre",
        months: "Monate",
        days: "Tage",
        hours: "Stunden",
        minutes: "Minuten",
        seconds: "Sekunden"
    }, FlipClock.Lang.de = FlipClock.Lang.German, FlipClock.Lang["de-de"] = FlipClock.Lang.German, FlipClock.Lang.german = FlipClock.Lang.German
}(jQuery), function () {
    FlipClock.Lang.English = {
        years: "Years",
        months: "Months",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds"
    }, FlipClock.Lang.en = FlipClock.Lang.English, FlipClock.Lang["en-us"] = FlipClock.Lang.English, FlipClock.Lang.english = FlipClock.Lang.English
}(jQuery), function () {
    FlipClock.Lang.Spanish = {
        years: "A&#241;os",
        months: "Meses",
        days: "D&#205;as",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundo"
    }, FlipClock.Lang.es = FlipClock.Lang.Spanish, FlipClock.Lang["es-es"] = FlipClock.Lang.Spanish, FlipClock.Lang.spanish = FlipClock.Lang.Spanish
}(jQuery), function () {
    FlipClock.Lang.Finnish = {
        years: "Vuotta",
        months: "Kuukautta",
        days: "Päivää",
        hours: "Tuntia",
        minutes: "Minuuttia",
        seconds: "Sekuntia"
    }, FlipClock.Lang.fi = FlipClock.Lang.Finnish, FlipClock.Lang["fi-fi"] = FlipClock.Lang.Finnish, FlipClock.Lang.finnish = FlipClock.Lang.Finnish
}(jQuery), function () {
    FlipClock.Lang.French = {
        years: "Ans",
        months: "Mois",
        days: "Jours",
        hours: "Heures",
        minutes: "Minutes",
        seconds: "Secondes"
    }, FlipClock.Lang.fr = FlipClock.Lang.French, FlipClock.Lang["fr-ca"] = FlipClock.Lang.French, FlipClock.Lang.french = FlipClock.Lang.French
}(jQuery), function () {
    FlipClock.Lang.Italian = {
        years: "Anni",
        months: "Mesi",
        days: "Giorni",
        hours: "Ore",
        minutes: "Minuti",
        seconds: "Secondi"
    }, FlipClock.Lang.it = FlipClock.Lang.Italian, FlipClock.Lang["it-it"] = FlipClock.Lang.Italian, FlipClock.Lang.italian = FlipClock.Lang.Italian
}(jQuery), function () {
    FlipClock.Lang.Latvian = {
        years: "Gadi",
        months: "Mēneši",
        days: "Dienas",
        hours: "Stundas",
        minutes: "Minūtes",
        seconds: "Sekundes"
    }, FlipClock.Lang.lv = FlipClock.Lang.Latvian, FlipClock.Lang["lv-lv"] = FlipClock.Lang.Latvian, FlipClock.Lang.latvian = FlipClock.Lang.Latvian
}(jQuery), function () {
    FlipClock.Lang.Dutch = {
        years: "Jaren",
        months: "Maanden",
        days: "Dagen",
        hours: "Uren",
        minutes: "Minuten",
        seconds: "Seconden"
    }, FlipClock.Lang.nl = FlipClock.Lang.Dutch, FlipClock.Lang["nl-be"] = FlipClock.Lang.Dutch, FlipClock.Lang.dutch = FlipClock.Lang.Dutch
}(jQuery), function () {
    FlipClock.Lang.Norwegian = {
        years: "År",
        months: "Måneder",
        days: "Dager",
        hours: "Timer",
        minutes: "Minutter",
        seconds: "Sekunder"
    }, FlipClock.Lang.no = FlipClock.Lang.Norwegian, FlipClock.Lang.nb = FlipClock.Lang.Norwegian, FlipClock.Lang["no-nb"] = FlipClock.Lang.Norwegian, FlipClock.Lang.norwegian = FlipClock.Lang.Norwegian
}(jQuery), function () {
    FlipClock.Lang.Portuguese = {
        years: "Anos",
        months: "Meses",
        days: "Dias",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos"
    }, FlipClock.Lang.pt = FlipClock.Lang.Portuguese, FlipClock.Lang["pt-br"] = FlipClock.Lang.Portuguese, FlipClock.Lang.portuguese = FlipClock.Lang.Portuguese
}(jQuery), function () {
    FlipClock.Lang.Russian = {
        years: "лет",
        months: "месяцев",
        days: "дней",
        hours: "часов",
        minutes: "минут",
        seconds: "секунд"
    }, FlipClock.Lang.ru = FlipClock.Lang.Russian, FlipClock.Lang["ru-ru"] = FlipClock.Lang.Russian, FlipClock.Lang.russian = FlipClock.Lang.Russian
}(jQuery), function () {
    FlipClock.Lang.Swedish = {
        years: "År",
        months: "Månader",
        days: "Dagar",
        hours: "Timmar",
        minutes: "Minuter",
        seconds: "Sekunder"
    }, FlipClock.Lang.sv = FlipClock.Lang.Swedish, FlipClock.Lang["sv-se"] = FlipClock.Lang.Swedish, FlipClock.Lang.swedish = FlipClock.Lang.Swedish
}(jQuery);
/* js.cookie.min.js */
!function (e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies, t = window.Cookies = e();
        t.noConflict = function () {
            return window.Cookies = o, t
        }
    }
}(function () {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o) n[t] = o[t]
        }
        return n
    }
    function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof (i = e({path: "/"}, t.defaults, i)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        /^[\{\[]/.test(c = JSON.stringify(r)) && (r = c)
                    } catch (e) {
                    }
                    r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var s = "";
                    for (var f in i) i[f] && (s += "; " + f, !0 !== i[f] && (s += "=" + i[f]));
                    return document.cookie = n + "=" + r + s
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                    var l = p[u].split("="), C = l.slice(1).join("=");
                    this.json || '"' !== C.charAt(0) || (C = C.slice(1, -1));
                    try {
                        var g = l[0].replace(d, decodeURIComponent);
                        if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
                            C = JSON.parse(C)
                        } catch (e) {
                        }
                        if (n === g) {
                            c = C;
                            break
                        }
                        n || (c[g] = C)
                    } catch (e) {
                    }
                }
                return c
            }
        }
        return t.set = t, t.get = function (e) {
            return t.call(t, e)
        }, t.getJSON = function () {
            return t.apply({json: !0}, [].slice.call(arguments))
        }, t.defaults = {}, t.remove = function (n, o) {
            t(n, "", e(o, {expires: -1}))
        }, t.withConverter = n, t
    }
    return n(function () {
    })
});
/* smooth-scroll.polyfills.min.js */
window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
    var t, n = (this.document || this.ownerDocument).querySelectorAll(e), o = this;
    do {
        for (t = n.length; --t >= 0 && n.item(t) !== o;) ;
    } while (t < 0 && (o = o.parentElement));
    return o
}), (function () {
    function e(e, t) {
        t = t || {bubbles: !1, cancelable: !1, detail: void 0};
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
    }
    if ("function" == typeof window.CustomEvent) return !1;
    e.prototype = window.Event.prototype, window.CustomEvent = e
})(), (function () {
    for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
        var o = (new Date).getTime(), i = Math.max(0, 16 - (o - e)), r = window.setTimeout((function () {
            t(o + i)
        }), i);
        return e = o + i, r
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
        clearTimeout(e)
    })
})(), (function (e, t) {
    "function" == typeof define && define.amd ? define([], (function () {
        return t(e)
    })) : "object" == typeof exports ? module.exports = t(e) : e.SmoothScroll = t(e)
})("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, (function (e) {
    "use strict";
    var t = {
        ignore: "[data-scroll-ignore]",
        header: null,
        topOnEmptyHash: !0,
        speed: 500,
        clip: !0,
        offset: 0,
        easing: "easeInOutCubic",
        customEasing: null,
        updateURL: !0,
        popstate: !0,
        emitEvents: !0
    }, n = function () {
        return "querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype
    }, o = function () {
        for (var e = {}, t = 0; t < arguments.length; t++) !(function (t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(arguments[t]);
        return e
    }, i = function (t) {
        return !!("matchMedia" in e && e.matchMedia("(prefers-reduced-motion)").matches)
    }, r = function (t) {
        return parseInt(e.getComputedStyle(t).height, 10)
    }, a = function (e) {
        var t;
        try {
            t = decodeURIComponent(e)
        } catch (n) {
            t = e
        }
        return t
    }, u = function (e) {
        "#" === e.charAt(0) && (e = e.substr(1));
        for (var t, n = String(e), o = n.length, i = -1, r = "", a = n.charCodeAt(0); ++i < o;) {
            if (0 === (t = n.charCodeAt(i))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
            t >= 1 && t <= 31 || 127 == t || 0 === i && t >= 48 && t <= 57 || 1 === i && t >= 48 && t <= 57 && 45 === a ? r += "\\" + t.toString(16) + " " : r += t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? n.charAt(i) : "\\" + n.charAt(i)
        }
        var u;
        try {
            u = decodeURIComponent("#" + r)
        } catch (e) {
            u = "#" + r
        }
        return u
    }, c = function (e, t) {
        var n;
        return "easeInQuad" === e.easing && (n = t * t), "easeOutQuad" === e.easing && (n = t * (2 - t)), "easeInOutQuad" === e.easing && (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e.easing && (n = t * t * t), "easeOutCubic" === e.easing && (n = --t * t * t + 1), "easeInOutCubic" === e.easing && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (n = t * t * t * t), "easeOutQuart" === e.easing && (n = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (n = t * t * t * t * t), "easeOutQuint" === e.easing && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (n = e.customEasing(t)), n || t
    }, s = function () {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
    }, l = function (t, n, o, i) {
        var r = 0;
        if (t.offsetParent) do {
            r += t.offsetTop, t = t.offsetParent
        } while (t);
        return r = Math.max(r - n - o, 0), i && (r = Math.min(r, s() - e.innerHeight)), r
    }, m = function (e) {
        return e ? r(e) + e.offsetTop : 0
    }, d = function (e, t, n) {
        t || history.pushState && n.updateURL && history.pushState({
            smoothScroll: JSON.stringify(n),
            anchor: e.id
        }, document.title, e === document.documentElement ? "#top" : "#" + e.id)
    }, f = function (t, n, o) {
        0 === t && document.body.focus(), o || (t.focus(), document.activeElement !== t && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, n))
    }, h = function (t, n, o, i) {
        if (n.emitEvents && "function" == typeof e.CustomEvent) {
            var r = new CustomEvent(t, {bubbles: !0, detail: {anchor: o, toggle: i}});
            document.dispatchEvent(r)
        }
    };
    return function (r, p) {
        var g, v, w, y, E, b, S, A = {};
        A.cancelScroll = function (e) {
            cancelAnimationFrame(S), S = null, e || h("scrollCancel", g)
        }, A.animateScroll = function (n, i, r) {
            var a = o(g || t, r || {}), u = "[object Number]" === Object.prototype.toString.call(n),
                p = u || !n.tagName ? null : n;
            if (u || p) {
                var v = e.pageYOffset;
                a.header && !y && (y = document.querySelector(a.header)), E || (E = m(y));
                var w, b, C,
                    O = u ? n : l(p, E, parseInt("function" == typeof a.offset ? a.offset(n, i) : a.offset, 10), a.clip),
                    I = O - v, q = s(), F = 0, L = function (t, o) {
                        var r = e.pageYOffset;
                        if (t == o || r == o || (v < o && e.innerHeight + r) >= q) return A.cancelScroll(!0), f(n, o, u), h("scrollStop", a, n, i), w = null, S = null, !0
                    }, H = function (t) {
                        w || (w = t), F += t - w, b = F / parseInt(a.speed, 10), b = b > 1 ? 1 : b, C = v + I * c(a, b), e.scrollTo(0, Math.floor(C)), L(C, O) || (S = e.requestAnimationFrame(H), w = t)
                    };
                0 === e.pageYOffset && e.scrollTo(0, 0), d(n, u, a), h("scrollStart", a, n, i), A.cancelScroll(!0), e.requestAnimationFrame(H)
            }
        };
        var C = function (t) {
            if (!i() && 0 === t.button && !t.metaKey && !t.ctrlKey && "closest" in t.target && (w = t.target.closest(r)) && "a" === w.tagName.toLowerCase() && !t.target.closest(g.ignore) && w.hostname === e.location.hostname && w.pathname === e.location.pathname && /#/.test(w.href)) {
                var n = u(a(w.hash)),
                    o = g.topOnEmptyHash && "#" === n ? document.documentElement : document.querySelector(n);
                o = o || "#top" !== n ? o : document.documentElement, o && (t.preventDefault(), A.animateScroll(o, w))
            }
        }, O = function (e) {
            if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(g) && history.state.anchor) {
                var t = document.querySelector(u(a(history.state.anchor)));
                t && A.animateScroll(t, null, {updateURL: !1})
            }
        }, I = function (e) {
            b || (b = setTimeout((function () {
                b = null, E = m(y)
            }), 66))
        };
        return A.destroy = function () {
            g && (document.removeEventListener("click", C, !1), e.removeEventListener("resize", I, !1), e.removeEventListener("popstate", O, !1), A.cancelScroll(), g = null, v = null, w = null, y = null, E = null, b = null, S = null)
        }, A.init = function (i) {
            if (!n()) throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
            A.destroy(), g = o(t, i || {}), y = g.header ? document.querySelector(g.header) : null, E = m(y), document.addEventListener("click", C, !1), y && e.addEventListener("resize", I, !1), g.updateURL && g.popstate && e.addEventListener("popstate", O, !1)
        }, A.init(p), A
    }
}));
/* toaster */
!function (e) {
    e(["jquery"], function (e) {
        return function () {
            function t(e, t, n) {
                return g({type: O.error, iconClass: m().iconClasses.error, message: e, optionsOverride: n, title: t})
            }
            function n(t, n) {
                return t || (t = m()), v = e("#" + t.containerId), v.length ? v : (n && (v = d(t)), v)
            }
            function o(e, t, n) {
                return g({type: O.info, iconClass: m().iconClasses.info, message: e, optionsOverride: n, title: t})
            }
            function s(e) {
                C = e
            }
            function i(e, t, n) {
                return g({
                    type: O.success,
                    iconClass: m().iconClasses.success,
                    message: e,
                    optionsOverride: n,
                    title: t
                })
            }
            function a(e, t, n) {
                return g({
                    type: O.warning,
                    iconClass: m().iconClasses.warning,
                    message: e,
                    optionsOverride: n,
                    title: t
                })
            }
            function r(e, t) {
                var o = m();
                v || n(o), u(e, o, t) || l(o)
            }
            function c(t) {
                var o = m();
                return v || n(o), t && 0 === e(":focus", t).length ? void h(t) : void (v.children().length && v.remove())
            }
            function l(t) {
                for (var n = v.children(), o = n.length - 1; o >= 0; o--) u(e(n[o]), t)
            }
            function u(t, n, o) {
                var s = !(!o || !o.force) && o.force;
                return !(!t || !s && 0 !== e(":focus", t).length) && (t[n.hideMethod]({
                    duration: n.hideDuration,
                    easing: n.hideEasing,
                    complete: function () {
                        h(t)
                    }
                }), !0)
            }
            function d(t) {
                return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v
            }
            function p() {
                return {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    closeMethod: !1,
                    closeDuration: !1,
                    closeEasing: !1,
                    closeOnHover: !0,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    escapeHtml: !1,
                    target: "body",
                    closeHtml: '<button type="button">&times;</button>',
                    closeClass: "toast-close-button",
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1,
                    progressClass: "toast-progress",
                    rtl: !1
                }
            }
            function f(e) {
                C && C(e)
            }
            function g(t) {
                function o(e) {
                    return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }
                function s() {
                    c(), u(), d(), p(), g(), C(), l(), i()
                }
                function i() {
                    var e = "";
                    switch (t.iconClass) {
                        case"toast-success":
                        case"toast-info":
                            e = "polite";
                            break;
                        default:
                            e = "assertive"
                    }
                    I.attr("aria-live", e)
                }
                function a() {
                    E.closeOnHover && I.hover(H, D), !E.onclick && E.tapToDismiss && I.click(b), E.closeButton && j && j.click(function (e) {
                        e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), E.onCloseClick && E.onCloseClick(e), b(!0)
                    }), E.onclick && I.click(function (e) {
                        E.onclick(e), b()
                    })
                }
                function r() {
                    I.hide(), I[E.showMethod]({
                        duration: E.showDuration,
                        easing: E.showEasing,
                        complete: E.onShown
                    }), E.timeOut > 0 && (k = setTimeout(b, E.timeOut), F.maxHideTime = parseFloat(E.timeOut), F.hideEta = (new Date).getTime() + F.maxHideTime, E.progressBar && (F.intervalId = setInterval(x, 10)))
                }
                function c() {
                    t.iconClass && I.addClass(E.toastClass).addClass(y)
                }
                function l() {
                    E.newestOnTop ? v.prepend(I) : v.append(I)
                }
                function u() {
                    if (t.title) {
                        var e = t.title;
                        E.escapeHtml && (e = o(t.title)), M.append(e).addClass(E.titleClass), I.append(M)
                    }
                }
                function d() {
                    if (t.message) {
                        var e = t.message;
                        E.escapeHtml && (e = o(t.message)), B.append(e).addClass(E.messageClass), I.append(B)
                    }
                }
                function p() {
                    E.closeButton && (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j))
                }
                function g() {
                    E.progressBar && (q.addClass(E.progressClass), I.prepend(q))
                }
                function C() {
                    E.rtl && I.addClass("rtl")
                }
                function O(e, t) {
                    if (e.preventDuplicates) {
                        if (t.message === w) return !0;
                        w = t.message
                    }
                    return !1
                }
                function b(t) {
                    var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
                        o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
                        s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;
                    if (!e(":focus", I).length || t) return clearTimeout(F.intervalId), I[n]({
                        duration: o,
                        easing: s,
                        complete: function () {
                            h(I), clearTimeout(k), E.onHidden && "hidden" !== P.state && E.onHidden(), P.state = "hidden", P.endTime = new Date, f(P)
                        }
                    })
                }
                function D() {
                    (E.timeOut > 0 || E.extendedTimeOut > 0) && (k = setTimeout(b, E.extendedTimeOut), F.maxHideTime = parseFloat(E.extendedTimeOut), F.hideEta = (new Date).getTime() + F.maxHideTime)
                }
                function H() {
                    clearTimeout(k), F.hideEta = 0, I.stop(!0, !0)[E.showMethod]({
                        duration: E.showDuration,
                        easing: E.showEasing
                    })
                }
                function x() {
                    var e = (F.hideEta - (new Date).getTime()) / F.maxHideTime * 100;
                    q.width(e + "%")
                }
                var E = m(), y = t.iconClass || E.iconClass;
                if ("undefined" != typeof t.optionsOverride && (E = e.extend(E, t.optionsOverride), y = t.optionsOverride.iconClass || y), !O(E, t)) {
                    T++, v = n(E, !0);
                    var k = null, I = e("<div/>"), M = e("<div/>"), B = e("<div/>"), q = e("<div/>"),
                        j = e(E.closeHtml), F = {intervalId: null, hideEta: null, maxHideTime: null},
                        P = {toastId: T, state: "visible", startTime: new Date, options: E, map: t};
                    return s(), r(), a(), f(P), E.debug && console && console.log(P), I
                }
            }
            function m() {
                return e.extend({}, p(), b.options)
            }
            function h(e) {
                v || (v = n()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), w = void 0))
            }
            var v, C, w, T = 0, O = {error: "error", info: "info", success: "success", warning: "warning"}, b = {
                clear: r,
                remove: c,
                error: t,
                getContainer: n,
                info: o,
                options: {},
                subscribe: s,
                success: i,
                version: "2.1.3",
                warning: a
            };
            return b
        }()
    })
}("function" == typeof define && define.amd ? define : function (e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
});
/* email-autocomplete */
"use strict";
(function ($, window, document, undefined) {
    var pluginName = "emailautocomplete";
    var defaults = {
        suggClass: "eac-sugg",
        domains: ["yahoo.com", "hotmail.com", "gmail.com", "me.com", "aol.com", "mac.com", "live.com", "comcast.net", "googlemail.com", "msn.com", "hotmail.co.uk", "yahoo.co.uk", "facebook.com", "verizon.net", "sbcglobal.net", "att.net", "gmx.com", "outlook.com", "icloud.com"]
    };
    function EmailAutocomplete(elem, options) {
        this.$field = $(elem);
        this.options = $.extend(true, {}, defaults, options);
        this._defaults = defaults;
        this._domains = this.options.domains;
        this.init();
    }
    EmailAutocomplete.prototype = {
        init: function () {
            if (!Array.prototype.indexOf) {
                this.doIndexOf();
            }
            this.fieldLeftOffset = null;
            var $wrap = $("<div class='eac-input-wrap' />").css({
                display: this.$field.css("display"),
                position: this.$field.css("position") === 'static' ? 'relative' : this.$field.css("position"),
                fontSize: this.$field.css("fontSize")
            });
            this.$field.wrap($wrap);
            this.$cval = $("<span class='eac-cval' />").css({
                visibility: "hidden",
                position: "absolute",
                display: "inline-block",
                fontFamily: this.$field.css("fontFamily"),
                fontWeight: this.$field.css("fontWeight"),
                letterSpacing: this.$field.css("letterSpacing")
            }).insertAfter(this.$field);
            var heightPad = (this.$field.outerHeight(true) - this.$field.height()) / 2;
            this.$suggOverlay = $("<span class='" + this.options.suggClass + "' />").css({
                display: "block",
                "box-sizing": "content-box",
                lineHeight: this.$field.css('lineHeight'),
                paddingTop: heightPad + "px",
                paddingBottom: heightPad + "px",
                fontFamily: this.$field.css("fontFamily"),
                fontWeight: this.$field.css("fontWeight"),
                letterSpacing: this.$field.css("letterSpacing"),
                position: "absolute",
                top: 0,
                left: 0
            }).insertAfter(this.$field);
            this.$field.on("keyup.eac", $.proxy(this.displaySuggestion, this));
            this.$field.on("blur.eac", $.proxy(this.autocomplete, this));
            this.$field.on("keydown.eac", $.proxy(function (e) {
                if (e.which === 39 || e.which === 9) {
                    this.autocomplete();
                }
            }, this));
            this.$suggOverlay.on("mousedown.eac touchstart.eac", $.proxy(this.autocomplete, this));
        }, suggest: function (str) {
            var str_arr = str.split("@");
            if (str_arr.length > 1) {
                str = str_arr.pop();
                if (!str.length) {
                    return "";
                }
            } else {
                return "";
            }
            var match = this._domains.filter(function (domain) {
                return domain.indexOf(str) === 0;
            }).shift() || "";
            return match.replace(str, "");
        }, autocomplete: function () {
            if (typeof this.suggestion === "undefined" || this.suggestion.length < 1) {
                return false;
            }
            this.$field.val(this.val + this.suggestion);
            this.$suggOverlay.text("");
            this.$cval.text("");
        }, displaySuggestion: function (e) {
            this.val = this.$field.val();
            this.suggestion = this.suggest(this.val);
            if (!this.suggestion.length) {
                this.$suggOverlay.text("");
            } else {
                e.preventDefault();
            }
            this.$suggOverlay.text(this.suggestion);
            this.$cval.text(this.val);
            if (this.fieldLeftOffset === null) {
                this.fieldLeftOffset = (this.$field.outerWidth(true) - this.$field.width()) / 2;
            }
            var cvalWidth = this.$cval.width();
            if (this.$field.outerWidth() > cvalWidth) {
                this.$suggOverlay.css('left', this.fieldLeftOffset + cvalWidth + "px");
            }
        }, doIndexOf: function () {
            Array.prototype.indexOf = function (searchElement, fromIndex) {
                if (this === undefined || this === null) {
                    throw new TypeError('"this" is null or not defined');
                }
                var length = this.length >>> 0;
                fromIndex = +fromIndex || 0;
                if (Math.abs(fromIndex) === Infinity) {
                    fromIndex = 0;
                }
                if (fromIndex < 0) {
                    fromIndex += length;
                    if (fromIndex < 0) {
                        fromIndex = 0;
                    }
                }
                for (; fromIndex < length; fromIndex++) {
                    if (this[fromIndex] === searchElement) {
                        return fromIndex;
                    }
                }
                return -1;
            };
        }
    };
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "yz_" + pluginName)) {
                $.data(this, "yz_" + pluginName, new EmailAutocomplete(this, options));
            }
        });
    };
})(jQuery, window, document);
/* mailcheck */
var Mailcheck = {
    domainThreshold: 2,
    secondLevelThreshold: 2,
    topLevelThreshold: 2,
    defaultDomains: ['msn.com', 'bellsouth.net', 'telus.net', 'comcast.net', 'optusnet.com.au', 'earthlink.net', 'qq.com', 'sky.com', 'icloud.com', 'mac.com', 'sympatico.ca', 'googlemail.com', 'att.net', 'xtra.co.nz', 'web.de', 'cox.net', 'gmail.com', 'ymail.com', 'aim.com', 'rogers.com', 'verizon.net', 'rocketmail.com', 'google.com', 'optonline.net', 'sbcglobal.net', 'aol.com', 'me.com', 'btinternet.com', 'charter.net', 'shaw.ca'],
    defaultSecondLevelDomains: ["yahoo", "hotmail", "live", "outlook"],
    defaultTopLevelDomains: ["com", "com.br", "net", "org", "edu", "gov"],
    run: function (opts) {
        opts.domains = opts.domains || Mailcheck.defaultDomains;
        opts.secondLevelDomains = opts.secondLevelDomains || Mailcheck.defaultSecondLevelDomains;
        opts.topLevelDomains = opts.topLevelDomains || Mailcheck.defaultTopLevelDomains;
        opts.distanceFunction = opts.distanceFunction || Mailcheck.sift4Distance;
        var defaultCallback = function (result) {
            return result;
        };
        var suggestedCallback = opts.suggested || defaultCallback;
        var emptyCallback = opts.empty || defaultCallback;
        var result = Mailcheck.suggest(Mailcheck.encodeEmail(opts.email), opts.domains, opts.secondLevelDomains, opts.topLevelDomains, opts.distanceFunction);
        return result ? suggestedCallback(result) : emptyCallback();
    },
    suggest: function (email, domains, secondLevelDomains, topLevelDomains, distanceFunction) {
        email = email.toLowerCase();
        var emailParts = this.splitEmail(email);
        if (secondLevelDomains && topLevelDomains) {
            if (secondLevelDomains.indexOf(emailParts.secondLevelDomain) !== -1 && topLevelDomains.indexOf(emailParts.topLevelDomain) !== -1) {
                return false;
            }
        }
        var closestDomain = this.findClosestDomain(emailParts.domain, domains, distanceFunction, this.domainThreshold);
        if (closestDomain) {
            if (closestDomain == emailParts.domain) {
                return false;
            } else {
                return {
                    address: emailParts.address,
                    domain: closestDomain,
                    full: emailParts.address + "@" + closestDomain
                };
            }
        }
        var closestSecondLevelDomain = this.findClosestDomain(emailParts.secondLevelDomain, secondLevelDomains, distanceFunction, this.secondLevelThreshold);
        var closestTopLevelDomain = this.findClosestDomain(emailParts.topLevelDomain, topLevelDomains, distanceFunction, this.topLevelThreshold);
        if (emailParts.domain) {
            closestDomain = emailParts.domain;
            var rtrn = false;
            if (closestSecondLevelDomain && closestSecondLevelDomain != emailParts.secondLevelDomain) {
                closestDomain = closestDomain.replace(emailParts.secondLevelDomain, closestSecondLevelDomain);
                rtrn = true;
            }
            if (closestTopLevelDomain && closestTopLevelDomain != emailParts.topLevelDomain && emailParts.secondLevelDomain !== '') {
                closestDomain = closestDomain.replace(new RegExp(emailParts.topLevelDomain + "$"), closestTopLevelDomain);
                rtrn = true;
            }
            if (rtrn) {
                return {
                    address: emailParts.address,
                    domain: closestDomain,
                    full: emailParts.address + "@" + closestDomain
                };
            }
        }
        return false;
    },
    findClosestDomain: function (domain, domains, distanceFunction, threshold) {
        threshold = threshold || this.topLevelThreshold;
        var dist;
        var minDist = Infinity;
        var closestDomain = null;
        if (!domain || !domains) {
            return false;
        }
        if (!distanceFunction) {
            distanceFunction = this.sift4Distance;
        }
        for (var i = 0; i < domains.length; i++) {
            if (domain === domains[i]) {
                return domain;
            }
            dist = distanceFunction(domain, domains[i]);
            if (dist < minDist) {
                minDist = dist;
                closestDomain = domains[i];
            }
        }
        if (minDist <= threshold && closestDomain !== null) {
            return closestDomain;
        } else {
            return false;
        }
    },
    sift4Distance: function (s1, s2, maxOffset) {
        if (maxOffset === undefined) {
            maxOffset = 5;
        }
        if (!s1 || !s1.length) {
            if (!s2) {
                return 0;
            }
            return s2.length;
        }
        if (!s2 || !s2.length) {
            return s1.length;
        }
        var l1 = s1.length;
        var l2 = s2.length;
        var c1 = 0;
        var c2 = 0;
        var lcss = 0;
        var local_cs = 0;
        var trans = 0;
        var offset_arr = [];
        while ((c1 < l1) && (c2 < l2)) {
            if (s1.charAt(c1) == s2.charAt(c2)) {
                local_cs++;
                var isTrans = false;
                var i = 0;
                while (i < offset_arr.length) {
                    var ofs = offset_arr[i];
                    if (c1 <= ofs.c1 || c2 <= ofs.c2) {
                        isTrans = Math.abs(c2 - c1) >= Math.abs(ofs.c2 - ofs.c1);
                        if (isTrans) {
                            trans++;
                        } else {
                            if (!ofs.trans) {
                                ofs.trans = true;
                                trans++;
                            }
                        }
                        break;
                    } else {
                        if (c1 > ofs.c2 && c2 > ofs.c1) {
                            offset_arr.splice(i, 1);
                        } else {
                            i++;
                        }
                    }
                }
                offset_arr.push({c1: c1, c2: c2, trans: isTrans});
            } else {
                lcss += local_cs;
                local_cs = 0;
                if (c1 != c2) {
                    c1 = c2 = Math.min(c1, c2);
                }
                for (var j = 0; j < maxOffset && (c1 + j < l1 || c2 + j < l2); j++) {
                    if ((c1 + j < l1) && (s1.charAt(c1 + j) == s2.charAt(c2))) {
                        c1 += j - 1;
                        c2--;
                        break;
                    }
                    if ((c2 + j < l2) && (s1.charAt(c1) == s2.charAt(c2 + j))) {
                        c1--;
                        c2 += j - 1;
                        break;
                    }
                }
            }
            c1++;
            c2++;
            if ((c1 >= l1) || (c2 >= l2)) {
                lcss += local_cs;
                local_cs = 0;
                c1 = c2 = Math.min(c1, c2);
            }
        }
        lcss += local_cs;
        return Math.round(Math.max(l1, l2) - lcss + trans);
    },
    splitEmail: function (email) {
        email = email !== null ? (email.replace(/^\s*/, '').replace(/\s*$/, '')) : null;
        var parts = email.split('@');
        if (parts.length < 2) {
            return false;
        }
        for (var i = 0; i < parts.length; i++) {
            if (parts[i] === '') {
                return false;
            }
        }
        var domain = parts.pop();
        var domainParts = domain.split('.');
        var sld = '';
        var tld = '';
        if (domainParts.length === 0) {
            return false;
        } else if (domainParts.length == 1) {
            tld = domainParts[0];
        } else {
            sld = domainParts[0];
            for (var j = 1; j < domainParts.length; j++) {
                tld += domainParts[j] + '.';
            }
            tld = tld.substring(0, tld.length - 1);
        }
        return {topLevelDomain: tld, secondLevelDomain: sld, domain: domain, address: parts.join('@')};
    },
    encodeEmail: function (email) {
        var result = encodeURI(email);
        result = result.replace('%20', ' ').replace('%25', '%').replace('%5E', '^').replace('%60', '`').replace('%7B', '{').replace('%7C', '|').replace('%7D', '}');
        return result;
    }
};
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Mailcheck;
}
if (typeof define === "function" && define.amd) {
    define("mailcheck", [], function () {
        return Mailcheck;
    });
}
if (typeof window !== 'undefined' && window.jQuery) {
    (function ($) {
        $.fn.mailcheck = function (opts) {
            var self = this;
            if (opts.suggested) {
                var oldSuggested = opts.suggested;
                opts.suggested = function (result) {
                    oldSuggested(self, result);
                };
            }
            if (opts.empty) {
                var oldEmpty = opts.empty;
                opts.empty = function () {
                    oldEmpty.call(null, self);
                };
            }
            opts.email = this.val();
            Mailcheck.run(opts);
        };
    })(jQuery);
}