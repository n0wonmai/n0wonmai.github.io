/*! For license information please see service-worker.js.LICENSE.txt from template */
!function() {
    var e = {
        752: function(e, t, r) {
            "use strict";
            var n, o = r(628), i = r(313), a = ((n = {})["no-app"] = "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",
            n["bad-app-name"] = "Illegal App name: '{$name}",
            n["duplicate-app"] = "Firebase App named '{$name}' already exists",
            n["app-deleted"] = "Firebase App named '{$name}' already deleted",
            n["duplicate-service"] = "Firebase service named '{$name}' already registered",
            n["invalid-app-argument"] = "firebase.{$name}() takes either no argument or a Firebase App instance.",
            n), s = new i.ErrorFactory("app","Firebase",a);
            function c(e, t) {
                throw s.create(e, t)
            }
            var u = "[DEFAULT]"
              , f = []
              , l = function() {
                function e(e, t, r) {
                    this.firebase_ = r,
                    this.isDeleted_ = !1,
                    this.services_ = {},
                    this.name_ = t.name,
                    this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || !1,
                    this.options_ = i.deepCopy(e),
                    this.INTERNAL = {
                        getUid: function() {
                            return null
                        },
                        getToken: function() {
                            return Promise.resolve(null)
                        },
                        addAuthTokenListener: function(e) {
                            f.push(e),
                            setTimeout((function() {
                                return e(null)
                            }
                            ), 0)
                        },
                        removeAuthTokenListener: function(e) {
                            f = f.filter((function(t) {
                                return t !== e
                            }
                            ))
                        }
                    }
                }
                return Object.defineProperty(e.prototype, "automaticDataCollectionEnabled", {
                    get: function() {
                        return this.checkDestroyed_(),
                        this.automaticDataCollectionEnabled_
                    },
                    set: function(e) {
                        this.checkDestroyed_(),
                        this.automaticDataCollectionEnabled_ = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "name", {
                    get: function() {
                        return this.checkDestroyed_(),
                        this.name_
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "options", {
                    get: function() {
                        return this.checkDestroyed_(),
                        this.options_
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e.prototype.delete = function() {
                    var e = this;
                    return new Promise((function(t) {
                        e.checkDestroyed_(),
                        t()
                    }
                    )).then((function() {
                        e.firebase_.INTERNAL.removeApp(e.name_);
                        for (var t = [], r = 0, n = Object.keys(e.services_); r < n.length; r++)
                            for (var o = n[r], i = 0, a = Object.keys(e.services_[o]); i < a.length; i++) {
                                var s = a[i];
                                t.push(e.services_[o][s])
                            }
                        return Promise.all(t.map((function(e) {
                            return e.INTERNAL.delete()
                        }
                        )))
                    }
                    )).then((function() {
                        e.isDeleted_ = !0,
                        e.services_ = {}
                    }
                    ))
                }
                ,
                e.prototype._getService = function(e, t) {
                    if (void 0 === t && (t = u),
                    this.checkDestroyed_(),
                    this.services_[e] || (this.services_[e] = {}),
                    !this.services_[e][t]) {
                        var r = t !== u ? t : void 0
                          , n = this.firebase_.INTERNAL.factories[e](this, this.extendApp.bind(this), r);
                        this.services_[e][t] = n
                    }
                    return this.services_[e][t]
                }
                ,
                e.prototype.extendApp = function(e) {
                    var t = this;
                    i.deepExtend(this, e),
                    e.INTERNAL && e.INTERNAL.addAuthTokenListener && (f.forEach((function(e) {
                        t.INTERNAL.addAuthTokenListener(e)
                    }
                    )),
                    f = [])
                }
                ,
                e.prototype.checkDestroyed_ = function() {
                    this.isDeleted_ && c("app-deleted", {
                        name: this.name_
                    })
                }
                ,
                e
            }();
            function d(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            l.prototype.name && l.prototype.options || l.prototype.delete || console.log("dc");
            var h = !1;
            try {
                h = "[object process]" === Object.prototype.toString.call(r.g.process)
            } catch (e) {}
            if (h && console.warn('\nWarning: This is a browser-targeted Firebase bundle but it appears it is being\nrun in a Node environment.  If running in a Node environment, make sure you\nare using the bundle specified by the "main" field in package.json.\n\nIf you are using Webpack, you can specify "main" as the first item in\n"resolve.mainFields":\nhttps://webpack.js.org/configuration/resolve/#resolvemainfields\n\nIf using Rollup, use the rollup-plugin-node-resolve plugin and set "module"\nto false and "main" to true:\nhttps://github.com/rollup/rollup-plugin-node-resolve\n'),
            self && "firebase"in self) {
                console.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
                var p = self.firebase.SDK_VERSION;
                p && p.indexOf("LITE") >= 0 && console.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")
            }
            var v = function e() {
                var t = function(e) {
                    var t = {}
                      , r = {}
                      , n = {}
                      , o = {
                        __esModule: !0,
                        initializeApp: function(r, n) {
                            void 0 === n && (n = {}),
                            "object" == typeof n && null !== n || (n = {
                                name: n
                            });
                            var i = n;
                            void 0 === i.name && (i.name = u);
                            var a = i.name;
                            "string" == typeof a && a || c("bad-app-name", {
                                name: String(a)
                            }),
                            d(t, a) && c("duplicate-app", {
                                name: a
                            });
                            var s = new e(r,i,o);
                            return t[a] = s,
                            f(s, "create"),
                            s
                        },
                        app: a,
                        apps: null,
                        Promise,
                        SDK_VERSION: "5.11.0",
                        INTERNAL: {
                            registerService: function(t, u, f, l, d) {
                                function h(e) {
                                    return void 0 === e && (e = a()),
                                    "function" != typeof e[t] && c("invalid-app-argument", {
                                        name: t
                                    }),
                                    e[t]()
                                }
                                return void 0 === d && (d = !1),
                                r[t] && c("duplicate-service", {
                                    name: t
                                }),
                                r[t] = u,
                                l && (n[t] = l,
                                s().forEach((function(e) {
                                    l("create", e)
                                }
                                ))),
                                void 0 !== f && i.deepExtend(h, f),
                                o[t] = h,
                                e.prototype[t] = function() {
                                    for (var e = [], r = 0; r < arguments.length; r++)
                                        e[r] = arguments[r];
                                    return this._getService.bind(this, t).apply(this, d ? e : [])
                                }
                                ,
                                h
                            },
                            removeApp: function(e) {
                                f(t[e], "delete"),
                                delete t[e]
                            },
                            factories: r,
                            useAsService: l
                        }
                    };
                    function a(e) {
                        return d(t, e = e || u) || c("no-app", {
                            name: e
                        }),
                        t[e]
                    }
                    function s() {
                        return Object.keys(t).map((function(e) {
                            return t[e]
                        }
                        ))
                    }
                    function f(e, t) {
                        for (var o = 0, i = Object.keys(r); o < i.length; o++) {
                            var a = l(e, i[o]);
                            if (null === a)
                                return;
                            n[a] && n[a](t, e)
                        }
                    }
                    function l(e, t) {
                        if ("serverAuth" === t)
                            return null;
                        var r = t;
                        return e.options,
                        r
                    }
                    return i.patchProperty(o, "default", o),
                    Object.defineProperty(o, "apps", {
                        get: s
                    }),
                    i.patchProperty(a, "App", e),
                    o
                }(l);
                return t.INTERNAL = o.__assign({}, t.INTERNAL, {
                    createFirebaseNamespace: e,
                    extendNamespace: function(e) {
                        i.deepExtend(t, e)
                    },
                    createSubscribe: i.createSubscribe,
                    ErrorFactory: i.ErrorFactory,
                    deepExtend: i.deepExtend
                }),
                t
            }();
            t.ZP = v
        },
        628: function(e, t, r) {
            "use strict";
            r.r(t),
            r.d(t, {
                __assign: function() {
                    return i
                },
                __asyncDelegator: function() {
                    return g
                },
                __asyncGenerator: function() {
                    return y
                },
                __asyncValues: function() {
                    return m
                },
                __await: function() {
                    return b
                },
                __awaiter: function() {
                    return f
                },
                __decorate: function() {
                    return s
                },
                __exportStar: function() {
                    return d
                },
                __extends: function() {
                    return o
                },
                __generator: function() {
                    return l
                },
                __importDefault: function() {
                    return S
                },
                __importStar: function() {
                    return w
                },
                __makeTemplateObject: function() {
                    return _
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return p
                },
                __rest: function() {
                    return a
                },
                __spread: function() {
                    return v
                },
                __values: function() {
                    return h
                }
            });
            var n = function(e, t) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var r in t)
                        t.hasOwnProperty(r) && (e[r] = t[r])
                }
                ,
                n(e, t)
            };
            function o(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
                new r)
            }
            var i = function() {
                return i = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r])
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }
                ,
                i.apply(this, arguments)
            };
            function a(e, t) {
                var r = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                        t.indexOf(n[o]) < 0 && (r[n[o]] = e[n[o]])
                }
                return r
            }
            function s(e, t, r, n) {
                var o, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)
                        (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a),
                a
            }
            function c(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }
            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                    return Reflect.metadata(e, t)
            }
            function f(e, t, r, n) {
                return new (r || (r = Promise))((function(o, i) {
                    function a(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        e.done ? o(e.value) : new r((function(t) {
                            t(e.value)
                        }
                        )).then(a, s)
                    }
                    c((n = n.apply(e, t || [])).next())
                }
                ))
            }
            function l(e, t) {
                var r, n, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
                ),
                i;
                function s(e) {
                    return function(t) {
                        return c([e, t])
                    }
                }
                function c(i) {
                    if (r)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (r = 1,
                            n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                            0) : n.next) && !(o = o.call(n, i[1])).done)
                                return o;
                            switch (n = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                n = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            n = 0
                        } finally {
                            r = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            }
            function d(e, t) {
                for (var r in e)
                    t.hasOwnProperty(r) || (t[r] = e[r])
            }
            function h(e) {
                var t = "function" == typeof Symbol && e[Symbol.iterator]
                  , r = 0;
                return t ? t.call(e) : {
                    next: function() {
                        return e && r >= e.length && (e = void 0),
                        {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                }
            }
            function p(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r)
                    return e;
                var n, o, i = r.call(e), a = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
                        a.push(n.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = i.return) && r.call(i)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
                return a
            }
            function v() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(p(arguments[t]));
                return e
            }
            function b(e) {
                return this instanceof b ? (this.v = e,
                this) : new b(e)
            }
            function y(e, t, r) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, o = r.apply(e, t || []), i = [];
                return n = {},
                a("next"),
                a("throw"),
                a("return"),
                n[Symbol.asyncIterator] = function() {
                    return this
                }
                ,
                n;
                function a(e) {
                    o[e] && (n[e] = function(t) {
                        return new Promise((function(r, n) {
                            i.push([e, t, r, n]) > 1 || s(e, t)
                        }
                        ))
                    }
                    )
                }
                function s(e, t) {
                    try {
                        !function(e) {
                            e.value instanceof b ? Promise.resolve(e.value.v).then(c, u) : f(i[0][2], e)
                        }(o[e](t))
                    } catch (e) {
                        f(i[0][3], e)
                    }
                }
                function c(e) {
                    s("next", e)
                }
                function u(e) {
                    s("throw", e)
                }
                function f(e, t) {
                    e(t),
                    i.shift(),
                    i.length && s(i[0][0], i[0][1])
                }
            }
            function g(e) {
                var t, r;
                return t = {},
                n("next"),
                n("throw", (function(e) {
                    throw e
                }
                )),
                n("return"),
                t[Symbol.iterator] = function() {
                    return this
                }
                ,
                t;
                function n(n, o) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: b(e[n](t)),
                            done: "return" === n
                        } : o ? o(t) : t
                    }
                    : o
                }
            }
            function m(e) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = h(e),
                t = {},
                n("next"),
                n("throw"),
                n("return"),
                t[Symbol.asyncIterator] = function() {
                    return this
                }
                ,
                t);
                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise((function(n, o) {
                            (function(e, t, r, n) {
                                Promise.resolve(n).then((function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }
                                ), t)
                            }
                            )(n, o, (t = e[r](t)).done, t.value)
                        }
                        ))
                    }
                }
            }
            function _(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }
            function w(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r in e)
                        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e,
                t
            }
            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        685: function(e, t, r) {
            "use strict";
            var n = r(264)
              , o = {
                NODE_CLIENT: !1,
                NODE_ADMIN: !1,
                SDK_VERSION: "${JSCORE_VERSION}"
            }
              , i = function(e, t) {
                if (!e)
                    throw a(t)
            }
              , a = function(e) {
                return new Error("Firebase Database (" + o.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + e)
            }
              , s = function(e) {
                for (var t = [], r = 0, n = 0; n < e.length; n++) {
                    var o = e.charCodeAt(n);
                    o < 128 ? t[r++] = o : o < 2048 ? (t[r++] = o >> 6 | 192,
                    t[r++] = 63 & o | 128) : 55296 == (64512 & o) && n + 1 < e.length && 56320 == (64512 & e.charCodeAt(n + 1)) ? (o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n)),
                    t[r++] = o >> 18 | 240,
                    t[r++] = o >> 12 & 63 | 128,
                    t[r++] = o >> 6 & 63 | 128,
                    t[r++] = 63 & o | 128) : (t[r++] = o >> 12 | 224,
                    t[r++] = o >> 6 & 63 | 128,
                    t[r++] = 63 & o | 128)
                }
                return t
            }
              , c = {
                byteToCharMap_: null,
                charToByteMap_: null,
                byteToCharMapWebSafe_: null,
                charToByteMapWebSafe_: null,
                ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                get ENCODED_VALS() {
                    return this.ENCODED_VALS_BASE + "+/="
                },
                get ENCODED_VALS_WEBSAFE() {
                    return this.ENCODED_VALS_BASE + "-_."
                },
                HAS_NATIVE_SUPPORT: "function" == typeof atob,
                encodeByteArray: function(e, t) {
                    if (!Array.isArray(e))
                        throw Error("encodeByteArray takes an array as a parameter");
                    this.init_();
                    for (var r = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, n = [], o = 0; o < e.length; o += 3) {
                        var i = e[o]
                          , a = o + 1 < e.length
                          , s = a ? e[o + 1] : 0
                          , c = o + 2 < e.length
                          , u = c ? e[o + 2] : 0
                          , f = i >> 2
                          , l = (3 & i) << 4 | s >> 4
                          , d = (15 & s) << 2 | u >> 6
                          , h = 63 & u;
                        c || (h = 64,
                        a || (d = 64)),
                        n.push(r[f], r[l], r[d], r[h])
                    }
                    return n.join("")
                },
                encodeString: function(e, t) {
                    return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(s(e), t)
                },
                decodeString: function(e, t) {
                    return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function(e) {
                        for (var t = [], r = 0, n = 0; r < e.length; ) {
                            var o = e[r++];
                            if (o < 128)
                                t[n++] = String.fromCharCode(o);
                            else if (o > 191 && o < 224) {
                                var i = e[r++];
                                t[n++] = String.fromCharCode((31 & o) << 6 | 63 & i)
                            } else if (o > 239 && o < 365) {
                                var a = ((7 & o) << 18 | (63 & (i = e[r++])) << 12 | (63 & (s = e[r++])) << 6 | 63 & e[r++]) - 65536;
                                t[n++] = String.fromCharCode(55296 + (a >> 10)),
                                t[n++] = String.fromCharCode(56320 + (1023 & a))
                            } else {
                                i = e[r++];
                                var s = e[r++];
                                t[n++] = String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | 63 & s)
                            }
                        }
                        return t.join("")
                    }(this.decodeStringToByteArray(e, t))
                },
                decodeStringToByteArray: function(e, t) {
                    this.init_();
                    for (var r = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, n = [], o = 0; o < e.length; ) {
                        var i = r[e.charAt(o++)]
                          , a = o < e.length ? r[e.charAt(o)] : 0
                          , s = ++o < e.length ? r[e.charAt(o)] : 64
                          , c = ++o < e.length ? r[e.charAt(o)] : 64;
                        if (++o,
                        null == i || null == a || null == s || null == c)
                            throw Error();
                        var u = i << 2 | a >> 4;
                        if (n.push(u),
                        64 != s) {
                            var f = a << 4 & 240 | s >> 2;
                            if (n.push(f),
                            64 != c) {
                                var l = s << 6 & 192 | c;
                                n.push(l)
                            }
                        }
                    }
                    return n
                },
                init_: function() {
                    if (!this.byteToCharMap_) {
                        this.byteToCharMap_ = {},
                        this.charToByteMap_ = {},
                        this.byteToCharMapWebSafe_ = {},
                        this.charToByteMapWebSafe_ = {};
                        for (var e = 0; e < this.ENCODED_VALS.length; e++)
                            this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e),
                            this.charToByteMap_[this.byteToCharMap_[e]] = e,
                            this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e),
                            this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e,
                            e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e,
                            this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                    }
                }
            }
              , u = function(e) {
                try {
                    return c.decodeString(e, !0)
                } catch (e) {
                    console.error("base64Decode failed: ", e)
                }
                return null
            };
            function f(e, t) {
                if (!(t instanceof Object))
                    return t;
                switch (t.constructor) {
                case Date:
                    return new Date(t.getTime());
                case Object:
                    void 0 === e && {};
                    break;
                case Array:
                    [];
                    break;
                default:
                    return t
                }
                for (var r in t)
                    t.hasOwnProperty(r) && (e[r] = f(e[r], t[r]));
                return e
            }
            var l = function() {
                function e() {
                    var e = this;
                    this.promise = new Promise((function(t, r) {
                        e.resolve = t,
                        e.reject = r
                    }
                    ))
                }
                return e.prototype.wrapCallback = function(e) {
                    var t = this;
                    return function(r, n) {
                        r ? t.reject(r) : t.resolve(n),
                        "function" == typeof e && (t.promise.catch((function() {}
                        )),
                        1 === e.length ? e(r) : e(r, n))
                    }
                }
                ,
                e
            }();
            function d() {
                return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
            }
            var h = function(e) {
                function t(r, n) {
                    var o = e.call(this, n) || this;
                    return o.code = r,
                    o.name = "FirebaseError",
                    Object.setPrototypeOf(o, t.prototype),
                    Error.captureStackTrace && Error.captureStackTrace(o, p.prototype.create),
                    o
                }
                return n.__extends(t, e),
                t
            }(Error)
              , p = function() {
                function e(e, t, r) {
                    this.service = e,
                    this.serviceName = t,
                    this.errors = r
                }
                return e.prototype.create = function(e) {
                    for (var t = [], r = 1; r < arguments.length; r++)
                        t[r - 1] = arguments[r];
                    for (var n = t[0] || {}, o = this.service + "/" + e, i = this.errors[e], a = i ? function(e, t) {
                        return e.replace(v, (function(e, r) {
                            var n = t[r];
                            return null != n ? n.toString() : "<" + r + "?>"
                        }
                        ))
                    }(i, n) : "Error", s = this.serviceName + ": " + a + " (" + o + ").", c = new h(o,s), u = 0, f = Object.keys(n); u < f.length; u++) {
                        var l = f[u];
                        "_" !== l.slice(-1) && (l in c && console.warn('Overwriting FirebaseError base field "' + l + '" can cause unexpected behavior.'),
                        c[l] = n[l])
                    }
                    return c
                }
                ,
                e
            }();
            var v = /\{\$([^}]+)}/g;
            function b(e) {
                return JSON.parse(e)
            }
            var y = function(e) {
                var t = {}
                  , r = {}
                  , n = {}
                  , o = "";
                try {
                    var i = e.split(".");
                    t = b(u(i[0]) || ""),
                    r = b(u(i[1]) || ""),
                    o = i[2],
                    n = r.d || {},
                    delete r.d
                } catch (e) {}
                return {
                    header: t,
                    claims: r,
                    data: n,
                    signature: o
                }
            }
              , g = function(e, t) {
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && t(r, e[r])
            }
              , m = function(e, t) {
                return g(t, (function(t, r) {
                    e[t] = r
                }
                )),
                e
            }
              , _ = function(e, t, r) {
                for (var n in e)
                    if (t.call(r, e[n], n, e))
                        return n
            }
              , w = function() {
                function e() {
                    this.chain_ = [],
                    this.buf_ = [],
                    this.W_ = [],
                    this.pad_ = [],
                    this.inbuf_ = 0,
                    this.total_ = 0,
                    this.blockSize = 64,
                    this.pad_[0] = 128;
                    for (var e = 1; e < this.blockSize; ++e)
                        this.pad_[e] = 0;
                    this.reset()
                }
                return e.prototype.reset = function() {
                    this.chain_[0] = 1732584193,
                    this.chain_[1] = 4023233417,
                    this.chain_[2] = 2562383102,
                    this.chain_[3] = 271733878,
                    this.chain_[4] = 3285377520,
                    this.inbuf_ = 0,
                    this.total_ = 0
                }
                ,
                e.prototype.compress_ = function(e, t) {
                    t || (t = 0);
                    var r = this.W_;
                    if ("string" == typeof e)
                        for (var n = 0; n < 16; n++)
                            r[n] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3),
                            t += 4;
                    else
                        for (n = 0; n < 16; n++)
                            r[n] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3],
                            t += 4;
                    for (n = 16; n < 80; n++) {
                        var o = r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16];
                        r[n] = 4294967295 & (o << 1 | o >>> 31)
                    }
                    var i, a, s = this.chain_[0], c = this.chain_[1], u = this.chain_[2], f = this.chain_[3], l = this.chain_[4];
                    for (n = 0; n < 80; n++) {
                        n < 40 ? n < 20 ? (i = f ^ c & (u ^ f),
                        a = 1518500249) : (i = c ^ u ^ f,
                        a = 1859775393) : n < 60 ? (i = c & u | f & (c | u),
                        a = 2400959708) : (i = c ^ u ^ f,
                        a = 3395469782);
                        o = (s << 5 | s >>> 27) + i + l + a + r[n] & 4294967295;
                        l = f,
                        f = u,
                        u = 4294967295 & (c << 30 | c >>> 2),
                        c = s,
                        s = o
                    }
                    this.chain_[0] = this.chain_[0] + s & 4294967295,
                    this.chain_[1] = this.chain_[1] + c & 4294967295,
                    this.chain_[2] = this.chain_[2] + u & 4294967295,
                    this.chain_[3] = this.chain_[3] + f & 4294967295,
                    this.chain_[4] = this.chain_[4] + l & 4294967295
                }
                ,
                e.prototype.update = function(e, t) {
                    if (null != e) {
                        void 0 === t && (t = e.length);
                        for (var r = t - this.blockSize, n = 0, o = this.buf_, i = this.inbuf_; n < t; ) {
                            if (0 == i)
                                for (; n <= r; )
                                    this.compress_(e, n),
                                    n += this.blockSize;
                            if ("string" == typeof e) {
                                for (; n < t; )
                                    if (o[i] = e.charCodeAt(n),
                                    ++n,
                                    ++i == this.blockSize) {
                                        this.compress_(o),
                                        i = 0;
                                        break
                                    }
                            } else
                                for (; n < t; )
                                    if (o[i] = e[n],
                                    ++n,
                                    ++i == this.blockSize) {
                                        this.compress_(o),
                                        i = 0;
                                        break
                                    }
                        }
                        this.inbuf_ = i,
                        this.total_ += t
                    }
                }
                ,
                e.prototype.digest = function() {
                    var e = []
                      , t = 8 * this.total_;
                    this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                    for (var r = this.blockSize - 1; r >= 56; r--)
                        this.buf_[r] = 255 & t,
                        t /= 256;
                    this.compress_(this.buf_);
                    var n = 0;
                    for (r = 0; r < 5; r++)
                        for (var o = 24; o >= 0; o -= 8)
                            e[n] = this.chain_[r] >> o & 255,
                            ++n;
                    return e
                }
                ,
                e
            }();
            var S = function() {
                function e(e, t) {
                    var r = this;
                    this.observers = [],
                    this.unsubscribes = [],
                    this.observerCount = 0,
                    this.task = Promise.resolve(),
                    this.finalized = !1,
                    this.onNoObservers = t,
                    this.task.then((function() {
                        e(r)
                    }
                    )).catch((function(e) {
                        r.error(e)
                    }
                    ))
                }
                return e.prototype.next = function(e) {
                    this.forEachObserver((function(t) {
                        t.next(e)
                    }
                    ))
                }
                ,
                e.prototype.error = function(e) {
                    this.forEachObserver((function(t) {
                        t.error(e)
                    }
                    )),
                    this.close(e)
                }
                ,
                e.prototype.complete = function() {
                    this.forEachObserver((function(e) {
                        e.complete()
                    }
                    )),
                    this.close()
                }
                ,
                e.prototype.subscribe = function(e, t, r) {
                    var n, o = this;
                    if (void 0 === e && void 0 === t && void 0 === r)
                        throw new Error("Missing Observer.");
                    n = function(e, t) {
                        if ("object" != typeof e || null === e)
                            return !1;
                        for (var r = 0, n = t; r < n.length; r++) {
                            var o = n[r];
                            if (o in e && "function" == typeof e[o])
                                return !0
                        }
                        return !1
                    }(e, ["next", "error", "complete"]) ? e : {
                        next: e,
                        error: t,
                        complete: r
                    },
                    void 0 === n.next && (n.next = k),
                    void 0 === n.error && (n.error = k),
                    void 0 === n.complete && (n.complete = k);
                    var i = this.unsubscribeOne.bind(this, this.observers.length);
                    return this.finalized && this.task.then((function() {
                        try {
                            o.finalError ? n.error(o.finalError) : n.complete()
                        } catch (e) {}
                    }
                    )),
                    this.observers.push(n),
                    i
                }
                ,
                e.prototype.unsubscribeOne = function(e) {
                    void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e],
                    this.observerCount -= 1,
                    0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
                }
                ,
                e.prototype.forEachObserver = function(e) {
                    if (!this.finalized)
                        for (var t = 0; t < this.observers.length; t++)
                            this.sendOne(t, e)
                }
                ,
                e.prototype.sendOne = function(e, t) {
                    var r = this;
                    this.task.then((function() {
                        if (void 0 !== r.observers && void 0 !== r.observers[e])
                            try {
                                t(r.observers[e])
                            } catch (e) {
                                "undefined" != typeof console && console.error && console.error(e)
                            }
                    }
                    ))
                }
                ,
                e.prototype.close = function(e) {
                    var t = this;
                    this.finalized || (this.finalized = !0,
                    void 0 !== e && (this.finalError = e),
                    this.task.then((function() {
                        t.observers = void 0,
                        t.onNoObservers = void 0
                    }
                    )))
                }
                ,
                e
            }();
            function k() {}
            function O(e, t, r) {
                var n = "";
                switch (t) {
                case 1:
                    r ? "first" : "First";
                    break;
                case 2:
                    r ? "second" : "Second";
                    break;
                case 3:
                    r ? "third" : "Third";
                    break;
                case 4:
                    r ? "fourth" : "Fourth";
                    break;
                default:
                    throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")
                }
                var o = e + " failed: ";
                return o += n + " argument "
            }
            t.LL = p,
            t.ne = function(e, t) {
                var r = new S(e,t);
                return r.subscribe.bind(r)
            }
        },
        264: function(e, t, r) {
            "use strict";
            r.r(t),
            r.d(t, {
                __assign: function() {
                    return i
                },
                __asyncDelegator: function() {
                    return g
                },
                __asyncGenerator: function() {
                    return y
                },
                __asyncValues: function() {
                    return m
                },
                __await: function() {
                    return b
                },
                __awaiter: function() {
                    return f
                },
                __decorate: function() {
                    return s
                },
                __exportStar: function() {
                    return d
                },
                __extends: function() {
                    return o
                },
                __generator: function() {
                    return l
                },
                __importDefault: function() {
                    return S
                },
                __importStar: function() {
                    return w
                },
                __makeTemplateObject: function() {
                    return _
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return p
                },
                __rest: function() {
                    return a
                },
                __spread: function() {
                    return v
                },
                __values: function() {
                    return h
                }
            });
            var n = function(e, t) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var r in t)
                        t.hasOwnProperty(r) && (e[r] = t[r])
                }
                ,
                n(e, t)
            };
            function o(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
                new r)
            }
            var i = function() {
                return i = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r])
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }
                ,
                i.apply(this, arguments)
            };
            function a(e, t) {
                var r = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                        t.indexOf(n[o]) < 0 && (r[n[o]] = e[n[o]])
                }
                return r
            }
            function s(e, t, r, n) {
                var o, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)
                        (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a),
                a
            }
            function c(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }
            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                    return Reflect.metadata(e, t)
            }
            function f(e, t, r, n) {
                return new (r || (r = Promise))((function(o, i) {
                    function a(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        e.done ? o(e.value) : new r((function(t) {
                            t(e.value)
                        }
                        )).then(a, s)
                    }
                    c((n = n.apply(e, t || [])).next())
                }
                ))
            }
            function l(e, t) {
                var r, n, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
                ),
                i;
                function s(e) {
                    return function(t) {
                        return c([e, t])
                    }
                }
                function c(i) {
                    if (r)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (r = 1,
                            n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                            0) : n.next) && !(o = o.call(n, i[1])).done)
                                return o;
                            switch (n = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                n = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            n = 0
                        } finally {
                            r = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            }
            function d(e, t) {
                for (var r in e)
                    t.hasOwnProperty(r) || (t[r] = e[r])
            }
            function h(e) {
                var t = "function" == typeof Symbol && e[Symbol.iterator]
                  , r = 0;
                return t ? t.call(e) : {
                    next: function() {
                        return e && r >= e.length && (e = void 0),
                        {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                }
            }
            function p(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r)
                    return e;
                var n, o, i = r.call(e), a = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
                        a.push(n.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = i.return) && r.call(i)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
                return a
            }
            function v() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(p(arguments[t]));
                return e
            }
            function b(e) {
                return this instanceof b ? (this.v = e,
                this) : new b(e)
            }
            function y(e, t, r) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, o = r.apply(e, t || []), i = [];
                return n = {},
                a("next"),
                a("throw"),
                a("return"),
                n[Symbol.asyncIterator] = function() {
                    return this
                }
                ,
                n;
                function a(e) {
                    o[e] && (n[e] = function(t) {
                        return new Promise((function(r, n) {
                            i.push([e, t, r, n]) > 1 || s(e, t)
                        }
                        ))
                    }
                    )
                }
                function s(e, t) {
                    try {
                        !function(e) {
                            e.value instanceof b ? Promise.resolve(e.value.v).then(c, u) : f(i[0][2], e)
                        }(o[e](t))
                    } catch (e) {
                        f(i[0][3], e)
                    }
                }
                function c(e) {
                    s("next", e)
                }
                function u(e) {
                    s("throw", e)
                }
                function f(e, t) {
                    e(t),
                    i.shift(),
                    i.length && s(i[0][0], i[0][1])
                }
            }
            function g(e) {
                var t, r;
                return t = {},
                n("next"),
                n("throw", (function(e) {
                    throw e
                }
                )),
                n("return"),
                t[Symbol.iterator] = function() {
                    return this
                }
                ,
                t;
                function n(n, o) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: b(e[n](t)),
                            done: "return" === n
                        } : o ? o(t) : t
                    }
                    : o
                }
            }
            function m(e) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = h(e),
                t = {},
                n("next"),
                n("throw"),
                n("return"),
                t[Symbol.asyncIterator] = function() {
                    return this
                }
                ,
                t);
                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise((function(n, o) {
                            (function(e, t, r, n) {
                                Promise.resolve(n).then((function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }
                                ), t)
                            }
                            )(n, o, (t = e[r](t)).done, t.value)
                        }
                        ))
                    }
                }
            }
            function _(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }
            function w(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r in e)
                        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e,
                t
            }
            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        313: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(713)
              , o = {
                NODE_CLIENT: !1,
                NODE_ADMIN: !1,
                SDK_VERSION: "${JSCORE_VERSION}"
            }
              , i = function(e, t) {
                if (!e)
                    throw a(t)
            }
              , a = function(e) {
                return new Error("Firebase Database (" + o.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + e)
            }
              , s = function(e) {
                for (var t = [], r = 0, n = 0; n < e.length; n++) {
                    var o = e.charCodeAt(n);
                    o < 128 ? t[r++] = o : o < 2048 ? (t[r++] = o >> 6 | 192,
                    t[r++] = 63 & o | 128) : 55296 == (64512 & o) && n + 1 < e.length && 56320 == (64512 & e.charCodeAt(n + 1)) ? (o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n)),
                    t[r++] = o >> 18 | 240,
                    t[r++] = o >> 12 & 63 | 128,
                    t[r++] = o >> 6 & 63 | 128,
                    t[r++] = 63 & o | 128) : (t[r++] = o >> 12 | 224,
                    t[r++] = o >> 6 & 63 | 128,
                    t[r++] = 63 & o | 128)
                }
                return t
            }
              , c = {
                byteToCharMap_: null,
                charToByteMap_: null,
                byteToCharMapWebSafe_: null,
                charToByteMapWebSafe_: null,
                ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                get ENCODED_VALS() {
                    return this.ENCODED_VALS_BASE + "+/="
                },
                get ENCODED_VALS_WEBSAFE() {
                    return this.ENCODED_VALS_BASE + "-_."
                },
                HAS_NATIVE_SUPPORT: "function" == typeof atob,
                encodeByteArray: function(e, t) {
                    if (!Array.isArray(e))
                        throw Error("encodeByteArray takes an array as a parameter");
                    this.init_();
                    for (var r = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, n = [], o = 0; o < e.length; o += 3) {
                        var i = e[o]
                          , a = o + 1 < e.length
                          , s = a ? e[o + 1] : 0
                          , c = o + 2 < e.length
                          , u = c ? e[o + 2] : 0
                          , f = i >> 2
                          , l = (3 & i) << 4 | s >> 4
                          , d = (15 & s) << 2 | u >> 6
                          , h = 63 & u;
                        c || (h = 64,
                        a || (d = 64)),
                        n.push(r[f], r[l], r[d], r[h])
                    }
                    return n.join("")
                },
                encodeString: function(e, t) {
                    return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(s(e), t)
                },
                decodeString: function(e, t) {
                    return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function(e) {
                        for (var t = [], r = 0, n = 0; r < e.length; ) {
                            var o = e[r++];
                            if (o < 128)
                                t[n++] = String.fromCharCode(o);
                            else if (o > 191 && o < 224) {
                                var i = e[r++];
                                t[n++] = String.fromCharCode((31 & o) << 6 | 63 & i)
                            } else if (o > 239 && o < 365) {
                                var a = ((7 & o) << 18 | (63 & (i = e[r++])) << 12 | (63 & (s = e[r++])) << 6 | 63 & e[r++]) - 65536;
                                t[n++] = String.fromCharCode(55296 + (a >> 10)),
                                t[n++] = String.fromCharCode(56320 + (1023 & a))
                            } else {
                                i = e[r++];
                                var s = e[r++];
                                t[n++] = String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | 63 & s)
                            }
                        }
                        return t.join("")
                    }(this.decodeStringToByteArray(e, t))
                },
                decodeStringToByteArray: function(e, t) {
                    this.init_();
                    for (var r = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, n = [], o = 0; o < e.length; ) {
                        var i = r[e.charAt(o++)]
                          , a = o < e.length ? r[e.charAt(o)] : 0
                          , s = ++o < e.length ? r[e.charAt(o)] : 64
                          , c = ++o < e.length ? r[e.charAt(o)] : 64;
                        if (++o,
                        null == i || null == a || null == s || null == c)
                            throw Error();
                        var u = i << 2 | a >> 4;
                        if (n.push(u),
                        64 != s) {
                            var f = a << 4 & 240 | s >> 2;
                            if (n.push(f),
                            64 != c) {
                                var l = s << 6 & 192 | c;
                                n.push(l)
                            }
                        }
                    }
                    return n
                },
                init_: function() {
                    if (!this.byteToCharMap_) {
                        this.byteToCharMap_ = {},
                        this.charToByteMap_ = {},
                        this.byteToCharMapWebSafe_ = {},
                        this.charToByteMapWebSafe_ = {};
                        for (var e = 0; e < this.ENCODED_VALS.length; e++)
                            this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e),
                            this.charToByteMap_[this.byteToCharMap_[e]] = e,
                            this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e),
                            this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e,
                            e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e,
                            this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                    }
                }
            }
              , u = function(e) {
                try {
                    return c.decodeString(e, !0)
                } catch (e) {
                    console.error("base64Decode failed: ", e)
                }
                return null
            };
            function f(e, t) {
                if (!(t instanceof Object))
                    return t;
                switch (t.constructor) {
                case Date:
                    return new Date(t.getTime());
                case Object:
                    void 0 === e && (e = {});
                    break;
                case Array:
                    e = [];
                    break;
                default:
                    return t
                }
                for (var r in t)
                    t.hasOwnProperty(r) && (e[r] = f(e[r], t[r]));
                return e
            }
            var l = function() {
                function e() {
                    var e = this;
                    this.promise = new Promise((function(t, r) {
                        e.resolve = t,
                        e.reject = r
                    }
                    ))
                }
                return e.prototype.wrapCallback = function(e) {
                    var t = this;
                    return function(r, n) {
                        r ? t.reject(r) : t.resolve(n),
                        "function" == typeof e && (t.promise.catch((function() {}
                        )),
                        1 === e.length ? e(r) : e(r, n))
                    }
                }
                ,
                e
            }()
              , d = function() {
                return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
            }
              , h = function(e) {
                function t(r, n) {
                    var o = e.call(this, n) || this;
                    return o.code = r,
                    o.name = "FirebaseError",
                    Object.setPrototypeOf(o, t.prototype),
                    Error.captureStackTrace && Error.captureStackTrace(o, p.prototype.create),
                    o
                }
                return n.__extends(t, e),
                t
            }(Error)
              , p = function() {
                function e(e, t, r) {
                    this.service = e,
                    this.serviceName = t,
                    this.errors = r
                }
                return e.prototype.create = function(e, t) {
                    void 0 === t && (t = {});
                    for (var r = this.service + "/" + e, n = this.errors[e], o = n ? function(e, t) {
                        return e.replace(v, (function(e, r) {
                            var n = t[r];
                            return null != n ? n.toString() : "<" + r + "?>"
                        }
                        ))
                    }(n, t) : "Error", i = this.serviceName + ": " + o + " (" + r + ").", a = new h(r,i), s = 0, c = Object.keys(t); s < c.length; s++) {
                        var u = c[s];
                        "_" !== u.slice(-1) && (u in a && console.warn('Overwriting FirebaseError base field "' + u + '" can cause unexpected behavior.'),
                        a[u] = t[u])
                    }
                    return a
                }
                ,
                e
            }();
            var v = /\{\$([^}]+)}/g;
            function b(e) {
                return JSON.parse(e)
            }
            var y = function(e) {
                var t = {}
                  , r = {}
                  , n = {}
                  , o = "";
                try {
                    var i = e.split(".");
                    t = b(u(i[0]) || ""),
                    r = b(u(i[1]) || ""),
                    o = i[2],
                    n = r.d || {},
                    delete r.d
                } catch (e) {}
                return {
                    header: t,
                    claims: r,
                    data: n,
                    signature: o
                }
            }
              , g = function(e, t) {
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && t(r, e[r])
            }
              , m = function(e, t) {
                return g(t, (function(t, r) {
                    e[t] = r
                }
                )),
                e
            }
              , _ = function(e, t, r) {
                for (var n in e)
                    if (t.call(r, e[n], n, e))
                        return n
            }
              , w = function() {
                function e() {
                    this.chain_ = [],
                    this.buf_ = [],
                    this.W_ = [],
                    this.pad_ = [],
                    this.inbuf_ = 0,
                    this.total_ = 0,
                    this.blockSize = 64,
                    this.pad_[0] = 128;
                    for (var e = 1; e < this.blockSize; ++e)
                        this.pad_[e] = 0;
                    this.reset()
                }
                return e.prototype.reset = function() {
                    this.chain_[0] = 1732584193,
                    this.chain_[1] = 4023233417,
                    this.chain_[2] = 2562383102,
                    this.chain_[3] = 271733878,
                    this.chain_[4] = 3285377520,
                    this.inbuf_ = 0,
                    this.total_ = 0
                }
                ,
                e.prototype.compress_ = function(e, t) {
                    t || (t = 0);
                    var r = this.W_;
                    if ("string" == typeof e)
                        for (var n = 0; n < 16; n++)
                            r[n] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3),
                            t += 4;
                    else
                        for (n = 0; n < 16; n++)
                            r[n] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3],
                            t += 4;
                    for (n = 16; n < 80; n++) {
                        var o = r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16];
                        r[n] = 4294967295 & (o << 1 | o >>> 31)
                    }
                    var i, a, s = this.chain_[0], c = this.chain_[1], u = this.chain_[2], f = this.chain_[3], l = this.chain_[4];
                    for (n = 0; n < 80; n++) {
                        n < 40 ? n < 20 ? (i = f ^ c & (u ^ f),
                        a = 1518500249) : (i = c ^ u ^ f,
                        a = 1859775393) : n < 60 ? (i = c & u | f & (c | u),
                        a = 2400959708) : (i = c ^ u ^ f,
                        a = 3395469782);
                        o = (s << 5 | s >>> 27) + i + l + a + r[n] & 4294967295;
                        l = f,
                        f = u,
                        u = 4294967295 & (c << 30 | c >>> 2),
                        c = s,
                        s = o
                    }
                    this.chain_[0] = this.chain_[0] + s & 4294967295,
                    this.chain_[1] = this.chain_[1] + c & 4294967295,
                    this.chain_[2] = this.chain_[2] + u & 4294967295,
                    this.chain_[3] = this.chain_[3] + f & 4294967295,
                    this.chain_[4] = this.chain_[4] + l & 4294967295
                }
                ,
                e.prototype.update = function(e, t) {
                    if (null != e) {
                        void 0 === t && (t = e.length);
                        for (var r = t - this.blockSize, n = 0, o = this.buf_, i = this.inbuf_; n < t; ) {
                            if (0 == i)
                                for (; n <= r; )
                                    this.compress_(e, n),
                                    n += this.blockSize;
                            if ("string" == typeof e) {
                                for (; n < t; )
                                    if (o[i] = e.charCodeAt(n),
                                    ++n,
                                    ++i == this.blockSize) {
                                        this.compress_(o),
                                        i = 0;
                                        break
                                    }
                            } else
                                for (; n < t; )
                                    if (o[i] = e[n],
                                    ++n,
                                    ++i == this.blockSize) {
                                        this.compress_(o),
                                        i = 0;
                                        break
                                    }
                        }
                        this.inbuf_ = i,
                        this.total_ += t
                    }
                }
                ,
                e.prototype.digest = function() {
                    var e = []
                      , t = 8 * this.total_;
                    this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                    for (var r = this.blockSize - 1; r >= 56; r--)
                        this.buf_[r] = 255 & t,
                        t /= 256;
                    this.compress_(this.buf_);
                    var n = 0;
                    for (r = 0; r < 5; r++)
                        for (var o = 24; o >= 0; o -= 8)
                            e[n] = this.chain_[r] >> o & 255,
                            ++n;
                    return e
                }
                ,
                e
            }();
            var S = function() {
                function e(e, t) {
                    var r = this;
                    this.observers = [],
                    this.unsubscribes = [],
                    this.observerCount = 0,
                    this.task = Promise.resolve(),
                    this.finalized = !1,
                    this.onNoObservers = t,
                    this.task.then((function() {
                        e(r)
                    }
                    )).catch((function(e) {
                        r.error(e)
                    }
                    ))
                }
                return e.prototype.next = function(e) {
                    this.forEachObserver((function(t) {
                        t.next(e)
                    }
                    ))
                }
                ,
                e.prototype.error = function(e) {
                    this.forEachObserver((function(t) {
                        t.error(e)
                    }
                    )),
                    this.close(e)
                }
                ,
                e.prototype.complete = function() {
                    this.forEachObserver((function(e) {
                        e.complete()
                    }
                    )),
                    this.close()
                }
                ,
                e.prototype.subscribe = function(e, t, r) {
                    var n, o = this;
                    if (void 0 === e && void 0 === t && void 0 === r)
                        throw new Error("Missing Observer.");
                    n = function(e, t) {
                        if ("object" != typeof e || null === e)
                            return !1;
                        for (var r = 0, n = t; r < n.length; r++) {
                            var o = n[r];
                            if (o in e && "function" == typeof e[o])
                                return !0
                        }
                        return !1
                    }(e, ["next", "error", "complete"]) ? e : {
                        next: e,
                        error: t,
                        complete: r
                    },
                    void 0 === n.next && (n.next = k),
                    void 0 === n.error && (n.error = k),
                    void 0 === n.complete && (n.complete = k);
                    var i = this.unsubscribeOne.bind(this, this.observers.length);
                    return this.finalized && this.task.then((function() {
                        try {
                            o.finalError ? n.error(o.finalError) : n.complete()
                        } catch (e) {}
                    }
                    )),
                    this.observers.push(n),
                    i
                }
                ,
                e.prototype.unsubscribeOne = function(e) {
                    void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e],
                    this.observerCount -= 1,
                    0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
                }
                ,
                e.prototype.forEachObserver = function(e) {
                    if (!this.finalized)
                        for (var t = 0; t < this.observers.length; t++)
                            this.sendOne(t, e)
                }
                ,
                e.prototype.sendOne = function(e, t) {
                    var r = this;
                    this.task.then((function() {
                        if (void 0 !== r.observers && void 0 !== r.observers[e])
                            try {
                                t(r.observers[e])
                            } catch (e) {
                                "undefined" != typeof console && console.error && console.error(e)
                            }
                    }
                    ))
                }
                ,
                e.prototype.close = function(e) {
                    var t = this;
                    this.finalized || (this.finalized = !0,
                    void 0 !== e && (this.finalError = e),
                    this.task.then((function() {
                        t.observers = void 0,
                        t.onNoObservers = void 0
                    }
                    )))
                }
                ,
                e
            }();
            function k() {}
            function O(e, t, r) {
                var n = "";
                switch (t) {
                case 1:
                    n = r ? "first" : "First";
                    break;
                case 2:
                    n = r ? "second" : "Second";
                    break;
                case 3:
                    n = r ? "third" : "Third";
                    break;
                case 4:
                    n = r ? "fourth" : "Fourth";
                    break;
                default:
                    throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")
                }
                var o = e + " failed: ";
                return o += n + " argument "
            }
            t.CONSTANTS = o,
            t.Deferred = l,
            t.ErrorFactory = p,
            t.FirebaseError = h,
            t.Sha1 = w,
            t.assert = i,
            t.assertionError = a,
            t.async = function(e, t) {
                return function() {
                    for (var r = [], n = 0; n < arguments.length; n++)
                        r[n] = arguments[n];
                    Promise.resolve(!0).then((function() {
                        e.apply(void 0, r)
                    }
                    )).catch((function(e) {
                        t && t(e)
                    }
                    ))
                }
            }
            ,
            t.base64 = c,
            t.base64Decode = u,
            t.base64Encode = function(e) {
                var t = s(e);
                return c.encodeByteArray(t, !0)
            }
            ,
            t.clone = function(e) {
                return m({}, e)
            }
            ,
            t.contains = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            t.createSubscribe = function(e, t) {
                var r = new S(e,t);
                return r.subscribe.bind(r)
            }
            ,
            t.decode = y,
            t.deepCopy = function(e) {
                return f(void 0, e)
            }
            ,
            t.deepExtend = f,
            t.errorPrefix = O,
            t.every = function(e, t) {
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r) && !t(r, e[r]))
                        return !1;
                return !0
            }
            ,
            t.extend = m,
            t.findKey = _,
            t.findValue = function(e, t, r) {
                var n = _(e, t, r);
                return n && e[n]
            }
            ,
            t.forEach = g,
            t.getAnyKey = function(e) {
                for (var t in e)
                    return t
            }
            ,
            t.getCount = function(e) {
                var t = 0;
                for (var r in e)
                    t++;
                return t
            }
            ,
            t.getUA = d,
            t.getValues = function(e) {
                var t = []
                  , r = 0;
                for (var n in e)
                    t[r++] = e[n];
                return t
            }
            ,
            t.isAdmin = function(e) {
                var t = y(e).claims;
                return "object" == typeof t && !0 === t.admin
            }
            ,
            t.isEmpty = function(e) {
                for (var t in e)
                    return !1;
                return !0
            }
            ,
            t.isMobileCordova = function() {
                return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())
            }
            ,
            t.isNodeSdk = function() {
                return !0 === o.NODE_CLIENT || !0 === o.NODE_ADMIN
            }
            ,
            t.isNonNullObject = function(e) {
                return "object" == typeof e && null !== e
            }
            ,
            t.isReactNative = function() {
                return "object" == typeof navigator && "ReactNative" === navigator.product
            }
            ,
            t.isValidFormat = function(e) {
                var t = y(e).claims;
                return !!t && "object" == typeof t && t.hasOwnProperty("iat")
            }
            ,
            t.isValidTimestamp = function(e) {
                var t, r, n = y(e).claims, o = Math.floor((new Date).getTime() / 1e3);
                return "object" == typeof n && (n.hasOwnProperty("nbf") ? t = n.nbf : n.hasOwnProperty("iat") && (t = n.iat),
                r = n.hasOwnProperty("exp") ? n.exp : t + 86400),
                o && t && r && o >= t && o <= r
            }
            ,
            t.issuedAtTime = function(e) {
                var t = y(e).claims;
                return "object" == typeof t && t.hasOwnProperty("iat") ? t.iat : null
            }
            ,
            t.jsonEval = b,
            t.map = function(e, t, r) {
                var n = {};
                for (var o in e)
                    n[o] = t.call(r, e[o], o, e);
                return n
            }
            ,
            t.patchProperty = function(e, t, r) {
                e[t] = r
            }
            ,
            t.querystring = function(e) {
                var t = [];
                return g(e, (function(e, r) {
                    Array.isArray(r) ? r.forEach((function(r) {
                        t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r))
                    }
                    )) : t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r))
                }
                )),
                t.length ? "&" + t.join("&") : ""
            }
            ,
            t.querystringDecode = function(e) {
                var t = {};
                return e.replace(/^\?/, "").split("&").forEach((function(e) {
                    if (e) {
                        var r = e.split("=");
                        t[r[0]] = r[1]
                    }
                }
                )),
                t
            }
            ,
            t.safeGet = function(e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t))
                    return e[t]
            }
            ,
            t.stringLength = function(e) {
                for (var t = 0, r = 0; r < e.length; r++) {
                    var n = e.charCodeAt(r);
                    n < 128 ? t++ : n < 2048 ? t += 2 : n >= 55296 && n <= 56319 ? (t += 4,
                    r++) : t += 3
                }
                return t
            }
            ,
            t.stringToByteArray = function(e) {
                for (var t = [], r = 0, n = 0; n < e.length; n++) {
                    var o = e.charCodeAt(n);
                    if (o >= 55296 && o <= 56319) {
                        var a = o - 55296;
                        n++,
                        i(n < e.length, "Surrogate pair missing trail surrogate."),
                        o = 65536 + (a << 10) + (e.charCodeAt(n) - 56320)
                    }
                    o < 128 ? t[r++] = o : o < 2048 ? (t[r++] = o >> 6 | 192,
                    t[r++] = 63 & o | 128) : o < 65536 ? (t[r++] = o >> 12 | 224,
                    t[r++] = o >> 6 & 63 | 128,
                    t[r++] = 63 & o | 128) : (t[r++] = o >> 18 | 240,
                    t[r++] = o >> 12 & 63 | 128,
                    t[r++] = o >> 6 & 63 | 128,
                    t[r++] = 63 & o | 128)
                }
                return t
            }
            ,
            t.stringify = function(e) {
                return JSON.stringify(e)
            }
            ,
            t.validateArgCount = function(e, t, r, n) {
                var o;
                if (n < t ? o = "at least " + t : n > r && (o = 0 === r ? "none" : "no more than " + r),
                o)
                    throw new Error(e + " failed: Was called with " + n + (1 === n ? " argument." : " arguments.") + " Expects " + o + ".")
            }
            ,
            t.validateCallback = function(e, t, r, n) {
                if ((!n || r) && "function" != typeof r)
                    throw new Error(O(e, t, n) + "must be a valid function.")
            }
            ,
            t.validateContextObject = function(e, t, r, n) {
                if ((!n || r) && ("object" != typeof r || null === r))
                    throw new Error(O(e, t, n) + "must be a valid context object.")
            }
            ,
            t.validateNamespace = function(e, t, r, n) {
                if ((!n || r) && "string" != typeof r)
                    throw new Error(O(e, t, n) + "must be a valid firebase namespace.")
            }
        },
        713: function(e, t, r) {
            "use strict";
            r.r(t),
            r.d(t, {
                __assign: function() {
                    return i
                },
                __asyncDelegator: function() {
                    return g
                },
                __asyncGenerator: function() {
                    return y
                },
                __asyncValues: function() {
                    return m
                },
                __await: function() {
                    return b
                },
                __awaiter: function() {
                    return f
                },
                __decorate: function() {
                    return s
                },
                __exportStar: function() {
                    return d
                },
                __extends: function() {
                    return o
                },
                __generator: function() {
                    return l
                },
                __importDefault: function() {
                    return S
                },
                __importStar: function() {
                    return w
                },
                __makeTemplateObject: function() {
                    return _
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return p
                },
                __rest: function() {
                    return a
                },
                __spread: function() {
                    return v
                },
                __values: function() {
                    return h
                }
            });
            var n = function(e, t) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var r in t)
                        t.hasOwnProperty(r) && (e[r] = t[r])
                }
                ,
                n(e, t)
            };
            function o(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
                new r)
            }
            var i = function() {
                return i = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r])
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }
                ,
                i.apply(this, arguments)
            };
            function a(e, t) {
                var r = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                        t.indexOf(n[o]) < 0 && (r[n[o]] = e[n[o]])
                }
                return r
            }
            function s(e, t, r, n) {
                var o, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)
                        (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a),
                a
            }
            function c(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }
            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                    return Reflect.metadata(e, t)
            }
            function f(e, t, r, n) {
                return new (r || (r = Promise))((function(o, i) {
                    function a(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        e.done ? o(e.value) : new r((function(t) {
                            t(e.value)
                        }
                        )).then(a, s)
                    }
                    c((n = n.apply(e, t || [])).next())
                }
                ))
            }
            function l(e, t) {
                var r, n, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
                ),
                i;
                function s(e) {
                    return function(t) {
                        return c([e, t])
                    }
                }
                function c(i) {
                    if (r)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (r = 1,
                            n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                            0) : n.next) && !(o = o.call(n, i[1])).done)
                                return o;
                            switch (n = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                n = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            n = 0
                        } finally {
                            r = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            }
            function d(e, t) {
                for (var r in e)
                    t.hasOwnProperty(r) || (t[r] = e[r])
            }
            function h(e) {
                var t = "function" == typeof Symbol && e[Symbol.iterator]
                  , r = 0;
                return t ? t.call(e) : {
                    next: function() {
                        return e && r >= e.length && (e = void 0),
                        {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                }
            }
            function p(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r)
                    return e;
                var n, o, i = r.call(e), a = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
                        a.push(n.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = i.return) && r.call(i)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
                return a
            }
            function v() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(p(arguments[t]));
                return e
            }
            function b(e) {
                return this instanceof b ? (this.v = e,
                this) : new b(e)
            }
            function y(e, t, r) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, o = r.apply(e, t || []), i = [];
                return n = {},
                a("next"),
                a("throw"),
                a("return"),
                n[Symbol.asyncIterator] = function() {
                    return this
                }
                ,
                n;
                function a(e) {
                    o[e] && (n[e] = function(t) {
                        return new Promise((function(r, n) {
                            i.push([e, t, r, n]) > 1 || s(e, t)
                        }
                        ))
                    }
                    )
                }
                function s(e, t) {
                    try {
                        !function(e) {
                            e.value instanceof b ? Promise.resolve(e.value.v).then(c, u) : f(i[0][2], e)
                        }(o[e](t))
                    } catch (e) {
                        f(i[0][3], e)
                    }
                }
                function c(e) {
                    s("next", e)
                }
                function u(e) {
                    s("throw", e)
                }
                function f(e, t) {
                    e(t),
                    i.shift(),
                    i.length && s(i[0][0], i[0][1])
                }
            }
            function g(e) {
                var t, r;
                return t = {},
                n("next"),
                n("throw", (function(e) {
                    throw e
                }
                )),
                n("return"),
                t[Symbol.iterator] = function() {
                    return this
                }
                ,
                t;
                function n(n, o) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: b(e[n](t)),
                            done: "return" === n
                        } : o ? o(t) : t
                    }
                    : o
                }
            }
            function m(e) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = h(e),
                t = {},
                n("next"),
                n("throw"),
                n("return"),
                t[Symbol.asyncIterator] = function() {
                    return this
                }
                ,
                t);
                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise((function(n, o) {
                            (function(e, t, r, n) {
                                Promise.resolve(n).then((function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }
                                ), t)
                            }
                            )(n, o, (t = e[r](t)).done, t.value)
                        }
                        ))
                    }
                }
            }
            function _(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }
            function w(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r in e)
                        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e,
                t
            }
            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        206: function(e) {
            e.exports = function(e) {
                var t = {};
                function r(n) {
                    if (t[n])
                        return t[n].exports;
                    var o = t[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return e[n].call(o.exports, o, o.exports, r),
                    o.l = !0,
                    o.exports
                }
                return r.m = e,
                r.c = t,
                r.d = function(e, t, n) {
                    r.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n
                    })
                }
                ,
                r.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                r.t = function(e, t) {
                    if (1 & t && (e = r(e)),
                    8 & t)
                        return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var n = Object.create(null);
                    if (r.r(n),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                    }),
                    2 & t && "string" != typeof e)
                        for (var o in e)
                            r.d(n, o, function(t) {
                                return e[t]
                            }
                            .bind(null, o));
                    return n
                }
                ,
                r.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                    ;
                    return r.d(t, "a", t),
                    t
                }
                ,
                r.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                r.p = "",
                r(r.s = 90)
            }({
                17: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0,
                    t.default = void 0;
                    var n = r(18)
                      , o = function() {
                        function e() {}
                        return e.getFirstMatch = function(e, t) {
                            var r = t.match(e);
                            return r && r.length > 0 && r[1] || ""
                        }
                        ,
                        e.getSecondMatch = function(e, t) {
                            var r = t.match(e);
                            return r && r.length > 1 && r[2] || ""
                        }
                        ,
                        e.matchAndReturnConst = function(e, t, r) {
                            if (e.test(t))
                                return r
                        }
                        ,
                        e.getWindowsVersionName = function(e) {
                            switch (e) {
                            case "NT":
                                return "NT";
                            case "XP":
                            case "NT 5.1":
                                return "XP";
                            case "NT 5.0":
                                return "2000";
                            case "NT 5.2":
                                return "2003";
                            case "NT 6.0":
                                return "Vista";
                            case "NT 6.1":
                                return "7";
                            case "NT 6.2":
                                return "8";
                            case "NT 6.3":
                                return "8.1";
                            case "NT 10.0":
                                return "10";
                            default:
                                return
                            }
                        }
                        ,
                        e.getMacOSVersionName = function(e) {
                            var t = e.split(".").splice(0, 2).map((function(e) {
                                return parseInt(e, 10) || 0
                            }
                            ));
                            if (t.push(0),
                            10 === t[0])
                                switch (t[1]) {
                                case 5:
                                    return "Leopard";
                                case 6:
                                    return "Snow Leopard";
                                case 7:
                                    return "Lion";
                                case 8:
                                    return "Mountain Lion";
                                case 9:
                                    return "Mavericks";
                                case 10:
                                    return "Yosemite";
                                case 11:
                                    return "El Capitan";
                                case 12:
                                    return "Sierra";
                                case 13:
                                    return "High Sierra";
                                case 14:
                                    return "Mojave";
                                case 15:
                                    return "Catalina";
                                default:
                                    return
                                }
                        }
                        ,
                        e.getAndroidVersionName = function(e) {
                            var t = e.split(".").splice(0, 2).map((function(e) {
                                return parseInt(e, 10) || 0
                            }
                            ));
                            if (t.push(0),
                            !(1 === t[0] && t[1] < 5))
                                return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
                        }
                        ,
                        e.getVersionPrecision = function(e) {
                            return e.split(".").length
                        }
                        ,
                        e.compareVersions = function(t, r, n) {
                            void 0 === n && (n = !1);
                            var o = e.getVersionPrecision(t)
                              , i = e.getVersionPrecision(r)
                              , a = Math.max(o, i)
                              , s = 0
                              , c = e.map([t, r], (function(t) {
                                var r = a - e.getVersionPrecision(t)
                                  , n = t + new Array(r + 1).join(".0");
                                return e.map(n.split("."), (function(e) {
                                    return new Array(20 - e.length).join("0") + e
                                }
                                )).reverse()
                            }
                            ));
                            for (n && (s = a - Math.min(o, i)),
                            a -= 1; a >= s; ) {
                                if (c[0][a] > c[1][a])
                                    return 1;
                                if (c[0][a] === c[1][a]) {
                                    if (a === s)
                                        return 0;
                                    a -= 1
                                } else if (c[0][a] < c[1][a])
                                    return -1
                            }
                        }
                        ,
                        e.map = function(e, t) {
                            var r, n = [];
                            if (Array.prototype.map)
                                return Array.prototype.map.call(e, t);
                            for (r = 0; r < e.length; r += 1)
                                n.push(t(e[r]));
                            return n
                        }
                        ,
                        e.find = function(e, t) {
                            var r, n;
                            if (Array.prototype.find)
                                return Array.prototype.find.call(e, t);
                            for (r = 0,
                            n = e.length; r < n; r += 1) {
                                var o = e[r];
                                if (t(o, r))
                                    return o
                            }
                        }
                        ,
                        e.assign = function(e) {
                            for (var t, r, n = e, o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
                                i[a - 1] = arguments[a];
                            if (Object.assign)
                                return Object.assign.apply(Object, [e].concat(i));
                            var s = function() {
                                var e = i[t];
                                "object" == typeof e && null !== e && Object.keys(e).forEach((function(t) {
                                    n[t] = e[t]
                                }
                                ))
                            };
                            for (t = 0,
                            r = i.length; t < r; t += 1)
                                s();
                            return e
                        }
                        ,
                        e.getBrowserAlias = function(e) {
                            return n.BROWSER_ALIASES_MAP[e]
                        }
                        ,
                        e.getBrowserTypeByAlias = function(e) {
                            return n.BROWSER_MAP[e] || ""
                        }
                        ,
                        e
                    }();
                    t.default = o,
                    e.exports = t.default
                },
                18: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0,
                    t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0,
                    t.BROWSER_ALIASES_MAP = {
                        "Amazon Silk": "amazon_silk",
                        "Android Browser": "android",
                        Bada: "bada",
                        BlackBerry: "blackberry",
                        Chrome: "chrome",
                        Chromium: "chromium",
                        Electron: "electron",
                        Epiphany: "epiphany",
                        Firefox: "firefox",
                        Focus: "focus",
                        Generic: "generic",
                        "Google Search": "google_search",
                        Googlebot: "googlebot",
                        "Internet Explorer": "ie",
                        "K-Meleon": "k_meleon",
                        Maxthon: "maxthon",
                        "Microsoft Edge": "edge",
                        "MZ Browser": "mz",
                        "NAVER Whale Browser": "naver",
                        Opera: "opera",
                        "Opera Coast": "opera_coast",
                        PhantomJS: "phantomjs",
                        Puffin: "puffin",
                        QupZilla: "qupzilla",
                        QQ: "qq",
                        QQLite: "qqlite",
                        Safari: "safari",
                        Sailfish: "sailfish",
                        "Samsung Internet for Android": "samsung_internet",
                        SeaMonkey: "seamonkey",
                        Sleipnir: "sleipnir",
                        Swing: "swing",
                        Tizen: "tizen",
                        "UC Browser": "uc",
                        Vivaldi: "vivaldi",
                        "WebOS Browser": "webos",
                        WeChat: "wechat",
                        "Yandex Browser": "yandex",
                        Roku: "roku"
                    },
                    t.BROWSER_MAP = {
                        amazon_silk: "Amazon Silk",
                        android: "Android Browser",
                        bada: "Bada",
                        blackberry: "BlackBerry",
                        chrome: "Chrome",
                        chromium: "Chromium",
                        electron: "Electron",
                        epiphany: "Epiphany",
                        firefox: "Firefox",
                        focus: "Focus",
                        generic: "Generic",
                        googlebot: "Googlebot",
                        google_search: "Google Search",
                        ie: "Internet Explorer",
                        k_meleon: "K-Meleon",
                        maxthon: "Maxthon",
                        edge: "Microsoft Edge",
                        mz: "MZ Browser",
                        naver: "NAVER Whale Browser",
                        opera: "Opera",
                        opera_coast: "Opera Coast",
                        phantomjs: "PhantomJS",
                        puffin: "Puffin",
                        qupzilla: "QupZilla",
                        qq: "QQ Browser",
                        qqlite: "QQ Browser Lite",
                        safari: "Safari",
                        sailfish: "Sailfish",
                        samsung_internet: "Samsung Internet for Android",
                        seamonkey: "SeaMonkey",
                        sleipnir: "Sleipnir",
                        swing: "Swing",
                        tizen: "Tizen",
                        uc: "UC Browser",
                        vivaldi: "Vivaldi",
                        webos: "WebOS Browser",
                        wechat: "WeChat",
                        yandex: "Yandex Browser"
                    },
                    t.PLATFORMS_MAP = {
                        tablet: "tablet",
                        mobile: "mobile",
                        desktop: "desktop",
                        tv: "tv"
                    },
                    t.OS_MAP = {
                        WindowsPhone: "Windows Phone",
                        Windows: "Windows",
                        MacOS: "macOS",
                        iOS: "iOS",
                        Android: "Android",
                        WebOS: "WebOS",
                        BlackBerry: "BlackBerry",
                        Bada: "Bada",
                        Tizen: "Tizen",
                        Linux: "Linux",
                        ChromeOS: "Chrome OS",
                        PlayStation4: "PlayStation 4",
                        Roku: "Roku"
                    },
                    t.ENGINE_MAP = {
                        EdgeHTML: "EdgeHTML",
                        Blink: "Blink",
                        Trident: "Trident",
                        Presto: "Presto",
                        Gecko: "Gecko",
                        WebKit: "WebKit"
                    }
                },
                90: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0,
                    t.default = void 0;
                    var n, o = (n = r(91)) && n.__esModule ? n : {
                        default: n
                    }, i = r(18);
                    function a(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value"in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                        }
                    }
                    var s = function() {
                        function e() {}
                        var t, r, n;
                        return e.getParser = function(e, t) {
                            if (void 0 === t && (t = !1),
                            "string" != typeof e)
                                throw new Error("UserAgent should be a string");
                            return new o.default(e,t)
                        }
                        ,
                        e.parse = function(e) {
                            return new o.default(e).getResult()
                        }
                        ,
                        t = e,
                        n = [{
                            key: "BROWSER_MAP",
                            get: function() {
                                return i.BROWSER_MAP
                            }
                        }, {
                            key: "ENGINE_MAP",
                            get: function() {
                                return i.ENGINE_MAP
                            }
                        }, {
                            key: "OS_MAP",
                            get: function() {
                                return i.OS_MAP
                            }
                        }, {
                            key: "PLATFORMS_MAP",
                            get: function() {
                                return i.PLATFORMS_MAP
                            }
                        }],
                        (r = null) && a(t.prototype, r),
                        n && a(t, n),
                        e
                    }();
                    t.default = s,
                    e.exports = t.default
                },
                91: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0,
                    t.default = void 0;
                    var n = c(r(92))
                      , o = c(r(93))
                      , i = c(r(94))
                      , a = c(r(95))
                      , s = c(r(17));
                    function c(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var u = function() {
                        function e(e, t) {
                            if (void 0 === t && (t = !1),
                            null == e || "" === e)
                                throw new Error("UserAgent parameter can't be empty");
                            this._ua = e,
                            this.parsedResult = {},
                            !0 !== t && this.parse()
                        }
                        var t = e.prototype;
                        return t.getUA = function() {
                            return this._ua
                        }
                        ,
                        t.test = function(e) {
                            return e.test(this._ua)
                        }
                        ,
                        t.parseBrowser = function() {
                            var e = this;
                            this.parsedResult.browser = {};
                            var t = s.default.find(n.default, (function(t) {
                                if ("function" == typeof t.test)
                                    return t.test(e);
                                if (t.test instanceof Array)
                                    return t.test.some((function(t) {
                                        return e.test(t)
                                    }
                                    ));
                                throw new Error("Browser's test function is not valid")
                            }
                            ));
                            return t && (this.parsedResult.browser = t.describe(this.getUA())),
                            this.parsedResult.browser
                        }
                        ,
                        t.getBrowser = function() {
                            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                        }
                        ,
                        t.getBrowserName = function(e) {
                            return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                        }
                        ,
                        t.getBrowserVersion = function() {
                            return this.getBrowser().version
                        }
                        ,
                        t.getOS = function() {
                            return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                        }
                        ,
                        t.parseOS = function() {
                            var e = this;
                            this.parsedResult.os = {};
                            var t = s.default.find(o.default, (function(t) {
                                if ("function" == typeof t.test)
                                    return t.test(e);
                                if (t.test instanceof Array)
                                    return t.test.some((function(t) {
                                        return e.test(t)
                                    }
                                    ));
                                throw new Error("Browser's test function is not valid")
                            }
                            ));
                            return t && (this.parsedResult.os = t.describe(this.getUA())),
                            this.parsedResult.os
                        }
                        ,
                        t.getOSName = function(e) {
                            var t = this.getOS().name;
                            return e ? String(t).toLowerCase() || "" : t || ""
                        }
                        ,
                        t.getOSVersion = function() {
                            return this.getOS().version
                        }
                        ,
                        t.getPlatform = function() {
                            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                        }
                        ,
                        t.getPlatformType = function(e) {
                            void 0 === e && (e = !1);
                            var t = this.getPlatform().type;
                            return e ? String(t).toLowerCase() || "" : t || ""
                        }
                        ,
                        t.parsePlatform = function() {
                            var e = this;
                            this.parsedResult.platform = {};
                            var t = s.default.find(i.default, (function(t) {
                                if ("function" == typeof t.test)
                                    return t.test(e);
                                if (t.test instanceof Array)
                                    return t.test.some((function(t) {
                                        return e.test(t)
                                    }
                                    ));
                                throw new Error("Browser's test function is not valid")
                            }
                            ));
                            return t && (this.parsedResult.platform = t.describe(this.getUA())),
                            this.parsedResult.platform
                        }
                        ,
                        t.getEngine = function() {
                            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                        }
                        ,
                        t.getEngineName = function(e) {
                            return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                        }
                        ,
                        t.parseEngine = function() {
                            var e = this;
                            this.parsedResult.engine = {};
                            var t = s.default.find(a.default, (function(t) {
                                if ("function" == typeof t.test)
                                    return t.test(e);
                                if (t.test instanceof Array)
                                    return t.test.some((function(t) {
                                        return e.test(t)
                                    }
                                    ));
                                throw new Error("Browser's test function is not valid")
                            }
                            ));
                            return t && (this.parsedResult.engine = t.describe(this.getUA())),
                            this.parsedResult.engine
                        }
                        ,
                        t.parse = function() {
                            return this.parseBrowser(),
                            this.parseOS(),
                            this.parsePlatform(),
                            this.parseEngine(),
                            this
                        }
                        ,
                        t.getResult = function() {
                            return s.default.assign({}, this.parsedResult)
                        }
                        ,
                        t.satisfies = function(e) {
                            var t = this
                              , r = {}
                              , n = 0
                              , o = {}
                              , i = 0;
                            if (Object.keys(e).forEach((function(t) {
                                var a = e[t];
                                "string" == typeof a ? (o[t] = a,
                                i += 1) : "object" == typeof a && (r[t] = a,
                                n += 1)
                            }
                            )),
                            n > 0) {
                                var a = Object.keys(r)
                                  , c = s.default.find(a, (function(e) {
                                    return t.isOS(e)
                                }
                                ));
                                if (c) {
                                    var u = this.satisfies(r[c]);
                                    if (void 0 !== u)
                                        return u
                                }
                                var f = s.default.find(a, (function(e) {
                                    return t.isPlatform(e)
                                }
                                ));
                                if (f) {
                                    var l = this.satisfies(r[f]);
                                    if (void 0 !== l)
                                        return l
                                }
                            }
                            if (i > 0) {
                                var d = Object.keys(o)
                                  , h = s.default.find(d, (function(e) {
                                    return t.isBrowser(e, !0)
                                }
                                ));
                                if (void 0 !== h)
                                    return this.compareVersion(o[h])
                            }
                        }
                        ,
                        t.isBrowser = function(e, t) {
                            void 0 === t && (t = !1);
                            var r = this.getBrowserName().toLowerCase()
                              , n = e.toLowerCase()
                              , o = s.default.getBrowserTypeByAlias(n);
                            return t && o && (n = o.toLowerCase()),
                            n === r
                        }
                        ,
                        t.compareVersion = function(e) {
                            var t = [0]
                              , r = e
                              , n = !1
                              , o = this.getBrowserVersion();
                            if ("string" == typeof o)
                                return ">" === e[0] || "<" === e[0] ? (r = e.substr(1),
                                "=" === e[1] ? (n = !0,
                                r = e.substr(2)) : t = [],
                                ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (n = !0,
                                r = e.substr(1)),
                                t.indexOf(s.default.compareVersions(o, r, n)) > -1
                        }
                        ,
                        t.isOS = function(e) {
                            return this.getOSName(!0) === String(e).toLowerCase()
                        }
                        ,
                        t.isPlatform = function(e) {
                            return this.getPlatformType(!0) === String(e).toLowerCase()
                        }
                        ,
                        t.isEngine = function(e) {
                            return this.getEngineName(!0) === String(e).toLowerCase()
                        }
                        ,
                        t.is = function(e, t) {
                            return void 0 === t && (t = !1),
                            this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                        }
                        ,
                        t.some = function(e) {
                            var t = this;
                            return void 0 === e && (e = []),
                            e.some((function(e) {
                                return t.is(e)
                            }
                            ))
                        }
                        ,
                        e
                    }();
                    t.default = u,
                    e.exports = t.default
                },
                92: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0,
                    t.default = void 0;
                    var n, o = (n = r(17)) && n.__esModule ? n : {
                        default: n
                    }, i = /version\/(\d+(\.?_?\d+)+)/i, a = [{
                        test: [/googlebot/i],
                        describe: function(e) {
                            var t = {
                                name: "Googlebot"
                            }
                              , r = o.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || o.default.getFirstMatch(i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/opera/i],
                        describe: function(e) {
                            var t = {
                                name: "Opera"
                            }
                              , r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/opr\/|opios/i],
                        describe: function(e) {
                            var t = {
                                name: "Opera"
                            }
                              , r = o.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || o.default.getFirstMatch(i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/SamsungBrowser/i],
                        describe: function(e) {
                            var t = {
                                name: "Samsung Internet for Android"
                            }
                              , r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/Whale/i],
                        describe: function(e) {
                            var t = {
                                name: "NAVER Whale Browser"
                            }
                              , r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/MZBrowser/i],
                        describe: function(e) {
                            var t = {
                                name: "MZ Browser"
                            }
                              , r = o.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/focus/i],
                        describe: function(e) {
                            var t = {
                                name: "Focus"
                            }
                              , r = o.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/swing/i],
                        describe: function(e) {
                            var t = {
                                name: "Swing"
                            }
                              , r = o.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/coast/i],
                        describe: function(e) {
                            var t = {
                                name: "Opera Coast"
                            }
                              , r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/opt\/\d+(?:.?_?\d+)+/i],
                        describe: function(e) {
                            var t = {
                                name: "Opera Touch"
                            }
                              , r = o.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/yabrowser/i],
                        describe: function(e) {
                            var t = {
                                name: "Yandex Browser"
                            }
                              , r = o.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/ucbrowser/i],
                        describe: function(e) {
                            var t = {
                                name: "UC Browser"
                            }
                              , r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/Maxthon|mxios/i],
                        describe: function(e) {
                            var t = {
                                name: "Maxthon"
                            }
                              , r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/epiphany/i],
                        describe: function(e) {
                            var t = {
                                name: "Epiphany"
                            }
                              , r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/puffin/i],
                        describe: function(e) {
                            var t = {
                                name: "Puffin"
                            }
                              , r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/sleipnir/i],
                        describe: function(e) {
                            var t = {
                                name: "Sleipnir"
                            }
                              , r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/k-meleon/i],
                        describe: function(e) {
                            var t = {
                                name: "K-Meleon"
                            }
                              , r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/micromessenger/i],
                        describe: function(e) {
                            var t = {
                                name: "WeChat"
                            }
                              , r = o.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/qqbrowser/i],
                        describe: function(e) {
                            var t = {
                                name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                            }
                              , r = o.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/msie|trident/i],
                        describe: function(e) {
                            var t = {
                                name: "Internet Explorer"
                            }
                              , r = o.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/\sedg\//i],
                        describe: function(e) {
                            var t = {
                                name: "Microsoft Edge"
                            }
                              , r = o.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/edg([ea]|ios)/i],
                        describe: function(e) {
                            var t = {
                                name: "Microsoft Edge"
                            }
                              , r = o.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/vivaldi/i],
                        describe: function(e) {
                            var t = {
                                name: "Vivaldi"
                            }
                              , r = o.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/seamonkey/i],
                        describe: function(e) {
                            var t = {
                                name: "SeaMonkey"
                            }
                              , r = o.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/sailfish/i],
                        describe: function(e) {
                            var t = {
                                name: "Sailfish"
                            }
                              , r = o.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/silk/i],
                        describe: function(e) {
                            var t = {
                                name: "Amazon Silk"
                            }
                              , r = o.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/phantom/i],
                        describe: function(e) {
                            var t = {
                                name: "PhantomJS"
                            }
                              , r = o.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/slimerjs/i],
                        describe: function(e) {
                            var t = {
                                name: "SlimerJS"
                            }
                              , r = o.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                        describe: function(e) {
                            var t = {
                                name: "BlackBerry"
                            }
                              , r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/(web|hpw)[o0]s/i],
                        describe: function(e) {
                            var t = {
                                name: "WebOS Browser"
                            }
                              , r = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/bada/i],
                        describe: function(e) {
                            var t = {
                                name: "Bada"
                            }
                              , r = o.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/tizen/i],
                        describe: function(e) {
                            var t = {
                                name: "Tizen"
                            }
                              , r = o.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/qupzilla/i],
                        describe: function(e) {
                            var t = {
                                name: "QupZilla"
                            }
                              , r = o.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/firefox|iceweasel|fxios/i],
                        describe: function(e) {
                            var t = {
                                name: "Firefox"
                            }
                              , r = o.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/electron/i],
                        describe: function(e) {
                            var t = {
                                name: "Electron"
                            }
                              , r = o.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/MiuiBrowser/i],
                        describe: function(e) {
                            var t = {
                                name: "Miui"
                            }
                              , r = o.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/chromium/i],
                        describe: function(e) {
                            var t = {
                                name: "Chromium"
                            }
                              , r = o.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/chrome|crios|crmo/i],
                        describe: function(e) {
                            var t = {
                                name: "Chrome"
                            }
                              , r = o.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/GSA/i],
                        describe: function(e) {
                            var t = {
                                name: "Google Search"
                            }
                              , r = o.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: function(e) {
                            var t = !e.test(/like android/i)
                              , r = e.test(/android/i);
                            return t && r
                        },
                        describe: function(e) {
                            var t = {
                                name: "Android Browser"
                            }
                              , r = o.default.getFirstMatch(i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/playstation 4/i],
                        describe: function(e) {
                            var t = {
                                name: "PlayStation 4"
                            }
                              , r = o.default.getFirstMatch(i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/safari|applewebkit/i],
                        describe: function(e) {
                            var t = {
                                name: "Safari"
                            }
                              , r = o.default.getFirstMatch(i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/.*/i],
                        describe: function(e) {
                            var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                            return {
                                name: o.default.getFirstMatch(t, e),
                                version: o.default.getSecondMatch(t, e)
                            }
                        }
                    }];
                    t.default = a,
                    e.exports = t.default
                },
                93: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0,
                    t.default = void 0;
                    var n, o = (n = r(17)) && n.__esModule ? n : {
                        default: n
                    }, i = r(18), a = [{
                        test: [/Roku\/DVP/],
                        describe: function(e) {
                            var t = o.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                            return {
                                name: i.OS_MAP.Roku,
                                version: t
                            }
                        }
                    }, {
                        test: [/windows phone/i],
                        describe: function(e) {
                            var t = o.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                            return {
                                name: i.OS_MAP.WindowsPhone,
                                version: t
                            }
                        }
                    }, {
                        test: [/windows /i],
                        describe: function(e) {
                            var t = o.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e)
                              , r = o.default.getWindowsVersionName(t);
                            return {
                                name: i.OS_MAP.Windows,
                                version: t,
                                versionName: r
                            }
                        }
                    }, {
                        test: [/Macintosh(.*?) FxiOS(.*?)\//],
                        describe: function(e) {
                            var t = {
                                name: i.OS_MAP.iOS
                            }
                              , r = o.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/macintosh/i],
                        describe: function(e) {
                            var t = o.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, ".")
                              , r = o.default.getMacOSVersionName(t)
                              , n = {
                                name: i.OS_MAP.MacOS,
                                version: t
                            };
                            return r && (n.versionName = r),
                            n
                        }
                    }, {
                        test: [/(ipod|iphone|ipad)/i],
                        describe: function(e) {
                            var t = o.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                            return {
                                name: i.OS_MAP.iOS,
                                version: t
                            }
                        }
                    }, {
                        test: function(e) {
                            var t = !e.test(/like android/i)
                              , r = e.test(/android/i);
                            return t && r
                        },
                        describe: function(e) {
                            var t = o.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e)
                              , r = o.default.getAndroidVersionName(t)
                              , n = {
                                name: i.OS_MAP.Android,
                                version: t
                            };
                            return r && (n.versionName = r),
                            n
                        }
                    }, {
                        test: [/(web|hpw)[o0]s/i],
                        describe: function(e) {
                            var t = o.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e)
                              , r = {
                                name: i.OS_MAP.WebOS
                            };
                            return t && t.length && (r.version = t),
                            r
                        }
                    }, {
                        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                        describe: function(e) {
                            var t = o.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || o.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || o.default.getFirstMatch(/\bbb(\d+)/i, e);
                            return {
                                name: i.OS_MAP.BlackBerry,
                                version: t
                            }
                        }
                    }, {
                        test: [/bada/i],
                        describe: function(e) {
                            var t = o.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                            return {
                                name: i.OS_MAP.Bada,
                                version: t
                            }
                        }
                    }, {
                        test: [/tizen/i],
                        describe: function(e) {
                            var t = o.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                            return {
                                name: i.OS_MAP.Tizen,
                                version: t
                            }
                        }
                    }, {
                        test: [/linux/i],
                        describe: function() {
                            return {
                                name: i.OS_MAP.Linux
                            }
                        }
                    }, {
                        test: [/CrOS/],
                        describe: function() {
                            return {
                                name: i.OS_MAP.ChromeOS
                            }
                        }
                    }, {
                        test: [/PlayStation 4/],
                        describe: function(e) {
                            var t = o.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                            return {
                                name: i.OS_MAP.PlayStation4,
                                version: t
                            }
                        }
                    }];
                    t.default = a,
                    e.exports = t.default
                },
                94: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0,
                    t.default = void 0;
                    var n, o = (n = r(17)) && n.__esModule ? n : {
                        default: n
                    }, i = r(18), a = [{
                        test: [/googlebot/i],
                        describe: function() {
                            return {
                                type: "bot",
                                vendor: "Google"
                            }
                        }
                    }, {
                        test: [/huawei/i],
                        describe: function(e) {
                            var t = o.default.getFirstMatch(/(can-l01)/i, e) && "Nova"
                              , r = {
                                type: i.PLATFORMS_MAP.mobile,
                                vendor: "Huawei"
                            };
                            return t && (r.model = t),
                            r
                        }
                    }, {
                        test: [/nexus\s*(?:7|8|9|10).*/i],
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.tablet,
                                vendor: "Nexus"
                            }
                        }
                    }, {
                        test: [/ipad/i],
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.tablet,
                                vendor: "Apple",
                                model: "iPad"
                            }
                        }
                    }, {
                        test: [/Macintosh(.*?) FxiOS(.*?)\//],
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.tablet,
                                vendor: "Apple",
                                model: "iPad"
                            }
                        }
                    }, {
                        test: [/kftt build/i],
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.tablet,
                                vendor: "Amazon",
                                model: "Kindle Fire HD 7"
                            }
                        }
                    }, {
                        test: [/silk/i],
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.tablet,
                                vendor: "Amazon"
                            }
                        }
                    }, {
                        test: [/tablet(?! pc)/i],
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.tablet
                            }
                        }
                    }, {
                        test: function(e) {
                            var t = e.test(/ipod|iphone/i)
                              , r = e.test(/like (ipod|iphone)/i);
                            return t && !r
                        },
                        describe: function(e) {
                            var t = o.default.getFirstMatch(/(ipod|iphone)/i, e);
                            return {
                                type: i.PLATFORMS_MAP.mobile,
                                vendor: "Apple",
                                model: t
                            }
                        }
                    }, {
                        test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.mobile,
                                vendor: "Nexus"
                            }
                        }
                    }, {
                        test: [/[^-]mobi/i],
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.mobile
                            }
                        }
                    }, {
                        test: function(e) {
                            return "blackberry" === e.getBrowserName(!0)
                        },
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.mobile,
                                vendor: "BlackBerry"
                            }
                        }
                    }, {
                        test: function(e) {
                            return "bada" === e.getBrowserName(!0)
                        },
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.mobile
                            }
                        }
                    }, {
                        test: function(e) {
                            return "windows phone" === e.getBrowserName()
                        },
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.mobile,
                                vendor: "Microsoft"
                            }
                        }
                    }, {
                        test: function(e) {
                            var t = Number(String(e.getOSVersion()).split(".")[0]);
                            return "android" === e.getOSName(!0) && t >= 3
                        },
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.tablet
                            }
                        }
                    }, {
                        test: function(e) {
                            return "android" === e.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.mobile
                            }
                        }
                    }, {
                        test: function(e) {
                            return "macos" === e.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.desktop,
                                vendor: "Apple"
                            }
                        }
                    }, {
                        test: function(e) {
                            return "windows" === e.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.desktop
                            }
                        }
                    }, {
                        test: function(e) {
                            return "linux" === e.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.desktop
                            }
                        }
                    }, {
                        test: function(e) {
                            return "playstation 4" === e.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.tv
                            }
                        }
                    }, {
                        test: function(e) {
                            return "roku" === e.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: i.PLATFORMS_MAP.tv
                            }
                        }
                    }];
                    t.default = a,
                    e.exports = t.default
                },
                95: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0,
                    t.default = void 0;
                    var n, o = (n = r(17)) && n.__esModule ? n : {
                        default: n
                    }, i = r(18), a = [{
                        test: function(e) {
                            return "microsoft edge" === e.getBrowserName(!0)
                        },
                        describe: function(e) {
                            if (/\sedg\//i.test(e))
                                return {
                                    name: i.ENGINE_MAP.Blink
                                };
                            var t = o.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                            return {
                                name: i.ENGINE_MAP.EdgeHTML,
                                version: t
                            }
                        }
                    }, {
                        test: [/trident/i],
                        describe: function(e) {
                            var t = {
                                name: i.ENGINE_MAP.Trident
                            }
                              , r = o.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: function(e) {
                            return e.test(/presto/i)
                        },
                        describe: function(e) {
                            var t = {
                                name: i.ENGINE_MAP.Presto
                            }
                              , r = o.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: function(e) {
                            var t = e.test(/gecko/i)
                              , r = e.test(/like gecko/i);
                            return t && !r
                        },
                        describe: function(e) {
                            var t = {
                                name: i.ENGINE_MAP.Gecko
                            }
                              , r = o.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }, {
                        test: [/(apple)?webkit\/537\.36/i],
                        describe: function() {
                            return {
                                name: i.ENGINE_MAP.Blink
                            }
                        }
                    }, {
                        test: [/(apple)?webkit/i],
                        describe: function(e) {
                            var t = {
                                name: i.ENGINE_MAP.WebKit
                            }
                              , r = o.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r),
                            t
                        }
                    }];
                    t.default = a,
                    e.exports = t.default
                }
            })
        },
        558: function(e, t, r) {
            e.exports = r(71).default
        },
        71: function(e, t) {
            "use strict";
            function r(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map
                  , o = n.get(e);
                if (o)
                    return o;
                if (Array.isArray(e)) {
                    var i = [];
                    n.set(e, i);
                    for (var a = 0; a < e.length; a++)
                        i[a] = r(e[a], t, n);
                    return i
                }
                if (e instanceof Date)
                    return new Date(e.valueOf());
                if (!(e instanceof Object))
                    return e;
                var s = {};
                n.set(e, s);
                for (var c = Object.keys(e), u = 0; u < c.length; u++) {
                    s[t ? t(c[u]) : c[u]] = r(e[c[u]], t, n)
                }
                return s
            }
            function n(e) {
                return function(t) {
                    return r(t, e)
                }
            }
            t.default = r,
            r.formatKeys = n
        },
        483: function(e, t, r) {
            !function(t) {
                e.exports = t()
            }((function() {
                return function e(t, r, n) {
                    function o(a, s) {
                        if (!r[a]) {
                            if (!t[a]) {
                                if (i)
                                    return i(a, !0);
                                var c = new Error("Cannot find module '" + a + "'");
                                throw c.code = "MODULE_NOT_FOUND",
                                c
                            }
                            var u = r[a] = {
                                exports: {}
                            };
                            t[a][0].call(u.exports, (function(e) {
                                var r = t[a][1][e];
                                return o(r || e)
                            }
                            ), u, u.exports, e, t, r, n)
                        }
                        return r[a].exports
                    }
                    for (var i = void 0, a = 0; a < n.length; a++)
                        o(n[a]);
                    return o
                }({
                    1: [function(e, t, n) {
                        (function(e) {
                            "use strict";
                            var r, n, o = e.MutationObserver || e.WebKitMutationObserver;
                            if (o) {
                                var i = 0
                                  , a = new o(f)
                                  , s = e.document.createTextNode("");
                                a.observe(s, {
                                    characterData: !0
                                }),
                                r = function() {
                                    s.data = i = ++i % 2
                                }
                            } else if (e.setImmediate || void 0 === e.MessageChannel)
                                r = "document"in e && "onreadystatechange"in e.document.createElement("script") ? function() {
                                    var t = e.document.createElement("script");
                                    t.onreadystatechange = function() {
                                        f(),
                                        t.onreadystatechange = null,
                                        t.parentNode.removeChild(t),
                                        t = null
                                    }
                                    ,
                                    e.document.documentElement.appendChild(t)
                                }
                                : function() {
                                    setTimeout(f, 0)
                                }
                                ;
                            else {
                                var c = new e.MessageChannel;
                                c.port1.onmessage = f,
                                r = function() {
                                    c.port2.postMessage(0)
                                }
                            }
                            var u = [];
                            function f() {
                                var e, t;
                                n = !0;
                                for (var r = u.length; r; ) {
                                    for (t = u,
                                    u = [],
                                    e = -1; ++e < r; )
                                        t[e]();
                                    r = u.length
                                }
                                n = !1
                            }
                            t.exports = function(e) {
                                1 !== u.push(e) || n || r()
                            }
                        }
                        ).call(this, void 0 !== r.g ? r.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {}],
                    2: [function(e, t, r) {
                        "use strict";
                        var n = e(1);
                        function o() {}
                        var i = {}
                          , a = ["REJECTED"]
                          , s = ["FULFILLED"]
                          , c = ["PENDING"];
                        function u(e) {
                            if ("function" != typeof e)
                                throw new TypeError("resolver must be a function");
                            this.state = c,
                            this.queue = [],
                            this.outcome = void 0,
                            e !== o && h(this, e)
                        }
                        function f(e, t, r) {
                            this.promise = e,
                            "function" == typeof t && (this.onFulfilled = t,
                            this.callFulfilled = this.otherCallFulfilled),
                            "function" == typeof r && (this.onRejected = r,
                            this.callRejected = this.otherCallRejected)
                        }
                        function l(e, t, r) {
                            n((function() {
                                var n;
                                try {
                                    n = t(r)
                                } catch (t) {
                                    return i.reject(e, t)
                                }
                                n === e ? i.reject(e, new TypeError("Cannot resolve promise with itself")) : i.resolve(e, n)
                            }
                            ))
                        }
                        function d(e) {
                            var t = e && e.then;
                            if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t)
                                return function() {
                                    t.apply(e, arguments)
                                }
                        }
                        function h(e, t) {
                            var r = !1;
                            function n(t) {
                                r || (r = !0,
                                i.reject(e, t))
                            }
                            function o(t) {
                                r || (r = !0,
                                i.resolve(e, t))
                            }
                            var a = p((function() {
                                t(o, n)
                            }
                            ));
                            "error" === a.status && n(a.value)
                        }
                        function p(e, t) {
                            var r = {};
                            try {
                                r.value = e(t),
                                r.status = "success"
                            } catch (e) {
                                r.status = "error",
                                r.value = e
                            }
                            return r
                        }
                        t.exports = u,
                        u.prototype.catch = function(e) {
                            return this.then(null, e)
                        }
                        ,
                        u.prototype.then = function(e, t) {
                            if ("function" != typeof e && this.state === s || "function" != typeof t && this.state === a)
                                return this;
                            var r = new this.constructor(o);
                            this.state !== c ? l(r, this.state === s ? e : t, this.outcome) : this.queue.push(new f(r,e,t));
                            return r
                        }
                        ,
                        f.prototype.callFulfilled = function(e) {
                            i.resolve(this.promise, e)
                        }
                        ,
                        f.prototype.otherCallFulfilled = function(e) {
                            l(this.promise, this.onFulfilled, e)
                        }
                        ,
                        f.prototype.callRejected = function(e) {
                            i.reject(this.promise, e)
                        }
                        ,
                        f.prototype.otherCallRejected = function(e) {
                            l(this.promise, this.onRejected, e)
                        }
                        ,
                        i.resolve = function(e, t) {
                            var r = p(d, t);
                            if ("error" === r.status)
                                return i.reject(e, r.value);
                            var n = r.value;
                            if (n)
                                h(e, n);
                            else {
                                e.state = s,
                                e.outcome = t;
                                for (var o = -1, a = e.queue.length; ++o < a; )
                                    e.queue[o].callFulfilled(t)
                            }
                            return e
                        }
                        ,
                        i.reject = function(e, t) {
                            e.state = a,
                            e.outcome = t;
                            for (var r = -1, n = e.queue.length; ++r < n; )
                                e.queue[r].callRejected(t);
                            return e
                        }
                        ,
                        u.resolve = function(e) {
                            if (e instanceof this)
                                return e;
                            return i.resolve(new this(o), e)
                        }
                        ,
                        u.reject = function(e) {
                            var t = new this(o);
                            return i.reject(t, e)
                        }
                        ,
                        u.all = function(e) {
                            var t = this;
                            if ("[object Array]" !== Object.prototype.toString.call(e))
                                return this.reject(new TypeError("must be an array"));
                            var r = e.length
                              , n = !1;
                            if (!r)
                                return this.resolve([]);
                            var a = new Array(r)
                              , s = 0
                              , c = -1
                              , u = new this(o);
                            for (; ++c < r; )
                                f(e[c], c);
                            return u;
                            function f(e, o) {
                                t.resolve(e).then((function(e) {
                                    a[o] = e,
                                    ++s !== r || n || (n = !0,
                                    i.resolve(u, a))
                                }
                                ), (function(e) {
                                    n || (n = !0,
                                    i.reject(u, e))
                                }
                                ))
                            }
                        }
                        ,
                        u.race = function(e) {
                            var t = this;
                            if ("[object Array]" !== Object.prototype.toString.call(e))
                                return this.reject(new TypeError("must be an array"));
                            var r = e.length
                              , n = !1;
                            if (!r)
                                return this.resolve([]);
                            var a = -1
                              , s = new this(o);
                            for (; ++a < r; )
                                c(e[a]);
                            return s;
                            function c(e) {
                                t.resolve(e).then((function(e) {
                                    n || (n = !0,
                                    i.resolve(s, e))
                                }
                                ), (function(e) {
                                    n || (n = !0,
                                    i.reject(s, e))
                                }
                                ))
                            }
                        }
                    }
                    , {
                        1: 1
                    }],
                    3: [function(e, t, n) {
                        (function(t) {
                            "use strict";
                            "function" != typeof t.Promise && (t.Promise = e(2))
                        }
                        ).call(this, void 0 !== r.g ? r.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {
                        2: 2
                    }],
                    4: [function(e, t, r) {
                        "use strict";
                        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        }
                        : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                        ;
                        var o = function() {
                            try {
                                if ("undefined" != typeof indexedDB)
                                    return indexedDB;
                                if ("undefined" != typeof webkitIndexedDB)
                                    return webkitIndexedDB;
                                if ("undefined" != typeof mozIndexedDB)
                                    return mozIndexedDB;
                                if ("undefined" != typeof OIndexedDB)
                                    return OIndexedDB;
                                if ("undefined" != typeof msIndexedDB)
                                    return msIndexedDB
                            } catch (e) {
                                return
                            }
                        }();
                        function i(e, t) {
                            e = e || [],
                            t = t || {};
                            try {
                                return new Blob(e,t)
                            } catch (o) {
                                if ("TypeError" !== o.name)
                                    throw o;
                                for (var r = new ("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), n = 0; n < e.length; n += 1)
                                    r.append(e[n]);
                                return r.getBlob(t.type)
                            }
                        }
                        "undefined" == typeof Promise && e(3);
                        var a = Promise;
                        function s(e, t) {
                            t && e.then((function(e) {
                                t(null, e)
                            }
                            ), (function(e) {
                                t(e)
                            }
                            ))
                        }
                        function c(e, t, r) {
                            "function" == typeof t && e.then(t),
                            "function" == typeof r && e.catch(r)
                        }
                        function u(e) {
                            return "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."),
                            e = String(e)),
                            e
                        }
                        function f() {
                            if (arguments.length && "function" == typeof arguments[arguments.length - 1])
                                return arguments[arguments.length - 1]
                        }
                        var l = "local-forage-detect-blob-support"
                          , d = void 0
                          , h = {}
                          , p = Object.prototype.toString
                          , v = "readonly"
                          , b = "readwrite";
                        function y(e) {
                            return "boolean" == typeof d ? a.resolve(d) : function(e) {
                                return new a((function(t) {
                                    var r = e.transaction(l, b)
                                      , n = i([""]);
                                    r.objectStore(l).put(n, "key"),
                                    r.onabort = function(e) {
                                        e.preventDefault(),
                                        e.stopPropagation(),
                                        t(!1)
                                    }
                                    ,
                                    r.oncomplete = function() {
                                        var e = navigator.userAgent.match(/Chrome\/(\d+)/)
                                          , r = navigator.userAgent.match(/Edge\//);
                                        t(r || !e || parseInt(e[1], 10) >= 43)
                                    }
                                }
                                )).catch((function() {
                                    return !1
                                }
                                ))
                            }(e).then((function(e) {
                                return d = e
                            }
                            ))
                        }
                        function g(e) {
                            var t = h[e.name]
                              , r = {};
                            r.promise = new a((function(e, t) {
                                r.resolve = e,
                                r.reject = t
                            }
                            )),
                            t.deferredOperations.push(r),
                            t.dbReady ? t.dbReady = t.dbReady.then((function() {
                                return r.promise
                            }
                            )) : t.dbReady = r.promise
                        }
                        function m(e) {
                            var t = h[e.name].deferredOperations.pop();
                            if (t)
                                return t.resolve(),
                                t.promise
                        }
                        function _(e, t) {
                            var r = h[e.name].deferredOperations.pop();
                            if (r)
                                return r.reject(t),
                                r.promise
                        }
                        function w(e, t) {
                            return new a((function(r, n) {
                                if (h[e.name] = h[e.name] || {
                                    forages: [],
                                    db: null,
                                    dbReady: null,
                                    deferredOperations: []
                                },
                                e.db) {
                                    if (!t)
                                        return r(e.db);
                                    g(e),
                                    e.db.close()
                                }
                                var i = [e.name];
                                t && i.push(e.version);
                                var a = o.open.apply(o, i);
                                t && (a.onupgradeneeded = function(t) {
                                    var r = a.result;
                                    try {
                                        r.createObjectStore(e.storeName),
                                        t.oldVersion <= 1 && r.createObjectStore(l)
                                    } catch (r) {
                                        if ("ConstraintError" !== r.name)
                                            throw r;
                                        console.warn('The database "' + e.name + '" has been upgraded from version ' + t.oldVersion + " to version " + t.newVersion + ', but the storage "' + e.storeName + '" already exists.')
                                    }
                                }
                                ),
                                a.onerror = function(e) {
                                    e.preventDefault(),
                                    n(a.error)
                                }
                                ,
                                a.onsuccess = function() {
                                    var t = a.result;
                                    t.onversionchange = function(e) {
                                        e.target.close()
                                    }
                                    ,
                                    r(t),
                                    m(e)
                                }
                            }
                            ))
                        }
                        function S(e) {
                            return w(e, !1)
                        }
                        function k(e) {
                            return w(e, !0)
                        }
                        function O(e, t) {
                            if (!e.db)
                                return !0;
                            var r = !e.db.objectStoreNames.contains(e.storeName)
                              , n = e.version < e.db.version
                              , o = e.version > e.db.version;
                            if (n && (e.version !== t && console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."),
                            e.version = e.db.version),
                            o || r) {
                                if (r) {
                                    var i = e.db.version + 1;
                                    i > e.version && (e.version = i)
                                }
                                return !0
                            }
                            return !1
                        }
                        function A(e) {
                            var t = function(e) {
                                for (var t = e.length, r = new ArrayBuffer(t), n = new Uint8Array(r), o = 0; o < t; o++)
                                    n[o] = e.charCodeAt(o);
                                return r
                            }(atob(e.data));
                            return i([t], {
                                type: e.type
                            })
                        }
                        function M(e) {
                            return e && e.__local_forage_encoded_blob
                        }
                        function E(e) {
                            var t = this
                              , r = t._initReady().then((function() {
                                var e = h[t._dbInfo.name];
                                if (e && e.dbReady)
                                    return e.dbReady
                            }
                            ));
                            return c(r, e, e),
                            r
                        }
                        function P(e, t, r, n) {
                            void 0 === n && (n = 1);
                            try {
                                var o = e.db.transaction(e.storeName, t);
                                r(null, o)
                            } catch (o) {
                                if (n > 0 && (!e.db || "InvalidStateError" === o.name || "NotFoundError" === o.name))
                                    return a.resolve().then((function() {
                                        if (!e.db || "NotFoundError" === o.name && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version)
                                            return e.db && (e.version = e.db.version + 1),
                                            k(e)
                                    }
                                    )).then((function() {
                                        return function(e) {
                                            g(e);
                                            for (var t = h[e.name], r = t.forages, n = 0; n < r.length; n++) {
                                                var o = r[n];
                                                o._dbInfo.db && (o._dbInfo.db.close(),
                                                o._dbInfo.db = null)
                                            }
                                            return e.db = null,
                                            S(e).then((function(t) {
                                                return e.db = t,
                                                O(e) ? k(e) : t
                                            }
                                            )).then((function(n) {
                                                e.db = t.db = n;
                                                for (var o = 0; o < r.length; o++)
                                                    r[o]._dbInfo.db = n
                                            }
                                            )).catch((function(t) {
                                                throw _(e, t),
                                                t
                                            }
                                            ))
                                        }(e).then((function() {
                                            P(e, t, r, n - 1)
                                        }
                                        ))
                                    }
                                    )).catch(r);
                                r(o)
                            }
                        }
                        var T = {
                            _driver: "asyncStorage",
                            _initStorage: function(e) {
                                var t = this
                                  , r = {
                                    db: null
                                };
                                if (e)
                                    for (var n in e)
                                        r[n] = e[n];
                                var o = h[r.name];
                                o || (o = {
                                    forages: [],
                                    db: null,
                                    dbReady: null,
                                    deferredOperations: []
                                },
                                h[r.name] = o),
                                o.forages.push(t),
                                t._initReady || (t._initReady = t.ready,
                                t.ready = E);
                                var i = [];
                                function s() {
                                    return a.resolve()
                                }
                                for (var c = 0; c < o.forages.length; c++) {
                                    var u = o.forages[c];
                                    u !== t && i.push(u._initReady().catch(s))
                                }
                                var f = o.forages.slice(0);
                                return a.all(i).then((function() {
                                    return r.db = o.db,
                                    S(r)
                                }
                                )).then((function(e) {
                                    return r.db = e,
                                    O(r, t._defaultConfig.version) ? k(r) : e
                                }
                                )).then((function(e) {
                                    r.db = o.db = e,
                                    t._dbInfo = r;
                                    for (var n = 0; n < f.length; n++) {
                                        var i = f[n];
                                        i !== t && (i._dbInfo.db = r.db,
                                        i._dbInfo.version = r.version)
                                    }
                                }
                                ))
                            },
                            _support: function() {
                                try {
                                    if (!o || !o.open)
                                        return !1;
                                    var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform)
                                      , t = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                                    return (!e || t) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
                                } catch (e) {
                                    return !1
                                }
                            }(),
                            iterate: function(e, t) {
                                var r = this
                                  , n = new a((function(t, n) {
                                    r.ready().then((function() {
                                        P(r._dbInfo, v, (function(o, i) {
                                            if (o)
                                                return n(o);
                                            try {
                                                var a = i.objectStore(r._dbInfo.storeName).openCursor()
                                                  , s = 1;
                                                a.onsuccess = function() {
                                                    var r = a.result;
                                                    if (r) {
                                                        var n = r.value;
                                                        M(n) && (n = A(n));
                                                        var o = e(n, r.key, s++);
                                                        void 0 !== o ? t(o) : r.continue()
                                                    } else
                                                        t()
                                                }
                                                ,
                                                a.onerror = function() {
                                                    n(a.error)
                                                }
                                            } catch (e) {
                                                n(e)
                                            }
                                        }
                                        ))
                                    }
                                    )).catch(n)
                                }
                                ));
                                return s(n, t),
                                n
                            },
                            getItem: function(e, t) {
                                var r = this;
                                e = u(e);
                                var n = new a((function(t, n) {
                                    r.ready().then((function() {
                                        P(r._dbInfo, v, (function(o, i) {
                                            if (o)
                                                return n(o);
                                            try {
                                                var a = i.objectStore(r._dbInfo.storeName).get(e);
                                                a.onsuccess = function() {
                                                    var e = a.result;
                                                    void 0 === e && (e = null),
                                                    M(e) && (e = A(e)),
                                                    t(e)
                                                }
                                                ,
                                                a.onerror = function() {
                                                    n(a.error)
                                                }
                                            } catch (e) {
                                                n(e)
                                            }
                                        }
                                        ))
                                    }
                                    )).catch(n)
                                }
                                ));
                                return s(n, t),
                                n
                            },
                            setItem: function(e, t, r) {
                                var n = this;
                                e = u(e);
                                var o = new a((function(r, o) {
                                    var i;
                                    n.ready().then((function() {
                                        return i = n._dbInfo,
                                        "[object Blob]" === p.call(t) ? y(i.db).then((function(e) {
                                            return e ? t : function(e) {
                                                return new a((function(t, r) {
                                                    var n = new FileReader;
                                                    n.onerror = r,
                                                    n.onloadend = function(r) {
                                                        var n = btoa(r.target.result || "");
                                                        t({
                                                            __local_forage_encoded_blob: !0,
                                                            data: n,
                                                            type: e.type
                                                        })
                                                    }
                                                    ,
                                                    n.readAsBinaryString(e)
                                                }
                                                ))
                                            }(t)
                                        }
                                        )) : t
                                    }
                                    )).then((function(t) {
                                        P(n._dbInfo, b, (function(i, a) {
                                            if (i)
                                                return o(i);
                                            try {
                                                var s = a.objectStore(n._dbInfo.storeName);
                                                null === t && (t = void 0);
                                                var c = s.put(t, e);
                                                a.oncomplete = function() {
                                                    void 0 === t && (t = null),
                                                    r(t)
                                                }
                                                ,
                                                a.onabort = a.onerror = function() {
                                                    var e = c.error ? c.error : c.transaction.error;
                                                    o(e)
                                                }
                                            } catch (e) {
                                                o(e)
                                            }
                                        }
                                        ))
                                    }
                                    )).catch(o)
                                }
                                ));
                                return s(o, r),
                                o
                            },
                            removeItem: function(e, t) {
                                var r = this;
                                e = u(e);
                                var n = new a((function(t, n) {
                                    r.ready().then((function() {
                                        P(r._dbInfo, b, (function(o, i) {
                                            if (o)
                                                return n(o);
                                            try {
                                                var a = i.objectStore(r._dbInfo.storeName).delete(e);
                                                i.oncomplete = function() {
                                                    t()
                                                }
                                                ,
                                                i.onerror = function() {
                                                    n(a.error)
                                                }
                                                ,
                                                i.onabort = function() {
                                                    var e = a.error ? a.error : a.transaction.error;
                                                    n(e)
                                                }
                                            } catch (e) {
                                                n(e)
                                            }
                                        }
                                        ))
                                    }
                                    )).catch(n)
                                }
                                ));
                                return s(n, t),
                                n
                            },
                            clear: function(e) {
                                var t = this
                                  , r = new a((function(e, r) {
                                    t.ready().then((function() {
                                        P(t._dbInfo, b, (function(n, o) {
                                            if (n)
                                                return r(n);
                                            try {
                                                var i = o.objectStore(t._dbInfo.storeName).clear();
                                                o.oncomplete = function() {
                                                    e()
                                                }
                                                ,
                                                o.onabort = o.onerror = function() {
                                                    var e = i.error ? i.error : i.transaction.error;
                                                    r(e)
                                                }
                                            } catch (e) {
                                                r(e)
                                            }
                                        }
                                        ))
                                    }
                                    )).catch(r)
                                }
                                ));
                                return s(r, e),
                                r
                            },
                            length: function(e) {
                                var t = this
                                  , r = new a((function(e, r) {
                                    t.ready().then((function() {
                                        P(t._dbInfo, v, (function(n, o) {
                                            if (n)
                                                return r(n);
                                            try {
                                                var i = o.objectStore(t._dbInfo.storeName).count();
                                                i.onsuccess = function() {
                                                    e(i.result)
                                                }
                                                ,
                                                i.onerror = function() {
                                                    r(i.error)
                                                }
                                            } catch (e) {
                                                r(e)
                                            }
                                        }
                                        ))
                                    }
                                    )).catch(r)
                                }
                                ));
                                return s(r, e),
                                r
                            },
                            key: function(e, t) {
                                var r = this
                                  , n = new a((function(t, n) {
                                    e < 0 ? t(null) : r.ready().then((function() {
                                        P(r._dbInfo, v, (function(o, i) {
                                            if (o)
                                                return n(o);
                                            try {
                                                var a = i.objectStore(r._dbInfo.storeName)
                                                  , s = !1
                                                  , c = a.openKeyCursor();
                                                c.onsuccess = function() {
                                                    var r = c.result;
                                                    r ? 0 === e || s ? t(r.key) : (s = !0,
                                                    r.advance(e)) : t(null)
                                                }
                                                ,
                                                c.onerror = function() {
                                                    n(c.error)
                                                }
                                            } catch (e) {
                                                n(e)
                                            }
                                        }
                                        ))
                                    }
                                    )).catch(n)
                                }
                                ));
                                return s(n, t),
                                n
                            },
                            keys: function(e) {
                                var t = this
                                  , r = new a((function(e, r) {
                                    t.ready().then((function() {
                                        P(t._dbInfo, v, (function(n, o) {
                                            if (n)
                                                return r(n);
                                            try {
                                                var i = o.objectStore(t._dbInfo.storeName).openKeyCursor()
                                                  , a = [];
                                                i.onsuccess = function() {
                                                    var t = i.result;
                                                    t ? (a.push(t.key),
                                                    t.continue()) : e(a)
                                                }
                                                ,
                                                i.onerror = function() {
                                                    r(i.error)
                                                }
                                            } catch (e) {
                                                r(e)
                                            }
                                        }
                                        ))
                                    }
                                    )).catch(r)
                                }
                                ));
                                return s(r, e),
                                r
                            },
                            dropInstance: function(e, t) {
                                t = f.apply(this, arguments);
                                var r, n = this.config();
                                if ((e = "function" != typeof e && e || {}).name || (e.name = e.name || n.name,
                                e.storeName = e.storeName || n.storeName),
                                e.name) {
                                    var i = e.name === n.name && this._dbInfo.db ? a.resolve(this._dbInfo.db) : S(e).then((function(t) {
                                        var r = h[e.name]
                                          , n = r.forages;
                                        r.db = t;
                                        for (var o = 0; o < n.length; o++)
                                            n[o]._dbInfo.db = t;
                                        return t
                                    }
                                    ));
                                    r = e.storeName ? i.then((function(t) {
                                        if (t.objectStoreNames.contains(e.storeName)) {
                                            var r = t.version + 1;
                                            g(e);
                                            var n = h[e.name]
                                              , i = n.forages;
                                            t.close();
                                            for (var s = 0; s < i.length; s++) {
                                                var c = i[s];
                                                c._dbInfo.db = null,
                                                c._dbInfo.version = r
                                            }
                                            var u = new a((function(t, n) {
                                                var i = o.open(e.name, r);
                                                i.onerror = function(e) {
                                                    i.result.close(),
                                                    n(e)
                                                }
                                                ,
                                                i.onupgradeneeded = function() {
                                                    i.result.deleteObjectStore(e.storeName)
                                                }
                                                ,
                                                i.onsuccess = function() {
                                                    var e = i.result;
                                                    e.close(),
                                                    t(e)
                                                }
                                            }
                                            ));
                                            return u.then((function(e) {
                                                n.db = e;
                                                for (var t = 0; t < i.length; t++) {
                                                    var r = i[t];
                                                    r._dbInfo.db = e,
                                                    m(r._dbInfo)
                                                }
                                            }
                                            )).catch((function(t) {
                                                throw (_(e, t) || a.resolve()).catch((function() {}
                                                )),
                                                t
                                            }
                                            ))
                                        }
                                    }
                                    )) : i.then((function(t) {
                                        g(e);
                                        var r = h[e.name]
                                          , n = r.forages;
                                        t.close();
                                        for (var i = 0; i < n.length; i++) {
                                            n[i]._dbInfo.db = null
                                        }
                                        var s = new a((function(t, r) {
                                            var n = o.deleteDatabase(e.name);
                                            n.onerror = function() {
                                                var e = n.result;
                                                e && e.close(),
                                                r(n.error)
                                            }
                                            ,
                                            n.onblocked = function() {
                                                console.warn('dropInstance blocked for database "' + e.name + '" until all open connections are closed')
                                            }
                                            ,
                                            n.onsuccess = function() {
                                                var e = n.result;
                                                e && e.close(),
                                                t(e)
                                            }
                                        }
                                        ));
                                        return s.then((function(e) {
                                            r.db = e;
                                            for (var t = 0; t < n.length; t++) {
                                                m(n[t]._dbInfo)
                                            }
                                        }
                                        )).catch((function(t) {
                                            throw (_(e, t) || a.resolve()).catch((function() {}
                                            )),
                                            t
                                        }
                                        ))
                                    }
                                    ))
                                } else
                                    r = a.reject("Invalid arguments");
                                return s(r, t),
                                r
                            }
                        };
                        var N = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                          , I = /^~~local_forage_type~([^~]+)~/
                          , C = "__lfsc__:"
                          , x = "arbf"
                          , j = "blob"
                          , F = "si08"
                          , R = "ui08"
                          , D = "uic8"
                          , B = "si16"
                          , L = "si32"
                          , W = "ur16"
                          , V = "ui32"
                          , U = "fl32"
                          , z = "fl64"
                          , K = Object.prototype.toString;
                        function q(e) {
                            var t, r, n, o, i, a = .75 * e.length, s = e.length, c = 0;
                            "=" === e[e.length - 1] && (a--,
                            "=" === e[e.length - 2] && a--);
                            var u = new ArrayBuffer(a)
                              , f = new Uint8Array(u);
                            for (t = 0; t < s; t += 4)
                                r = N.indexOf(e[t]),
                                n = N.indexOf(e[t + 1]),
                                o = N.indexOf(e[t + 2]),
                                i = N.indexOf(e[t + 3]),
                                f[c++] = r << 2 | n >> 4,
                                f[c++] = (15 & n) << 4 | o >> 2,
                                f[c++] = (3 & o) << 6 | 63 & i;
                            return u
                        }
                        function G(e) {
                            var t, r = new Uint8Array(e), n = "";
                            for (t = 0; t < r.length; t += 3)
                                n += N[r[t] >> 2],
                                n += N[(3 & r[t]) << 4 | r[t + 1] >> 4],
                                n += N[(15 & r[t + 1]) << 2 | r[t + 2] >> 6],
                                n += N[63 & r[t + 2]];
                            return r.length % 3 == 2 ? n = n.substring(0, n.length - 1) + "=" : r.length % 3 == 1 && (n = n.substring(0, n.length - 2) + "=="),
                            n
                        }
                        var H = {
                            serialize: function(e, t) {
                                var r = "";
                                if (e && (r = K.call(e)),
                                e && ("[object ArrayBuffer]" === r || e.buffer && "[object ArrayBuffer]" === K.call(e.buffer))) {
                                    var n, o = C;
                                    e instanceof ArrayBuffer ? (n = e,
                                    o += x) : (n = e.buffer,
                                    "[object Int8Array]" === r ? o += F : "[object Uint8Array]" === r ? o += R : "[object Uint8ClampedArray]" === r ? o += D : "[object Int16Array]" === r ? o += B : "[object Uint16Array]" === r ? o += W : "[object Int32Array]" === r ? o += L : "[object Uint32Array]" === r ? o += V : "[object Float32Array]" === r ? o += U : "[object Float64Array]" === r ? o += z : t(new Error("Failed to get type for BinaryArray"))),
                                    t(o + G(n))
                                } else if ("[object Blob]" === r) {
                                    var i = new FileReader;
                                    i.onload = function() {
                                        var r = "~~local_forage_type~" + e.type + "~" + G(this.result);
                                        t(C + j + r)
                                    }
                                    ,
                                    i.readAsArrayBuffer(e)
                                } else
                                    try {
                                        t(JSON.stringify(e))
                                    } catch (r) {
                                        console.error("Couldn't convert value into a JSON string: ", e),
                                        t(null, r)
                                    }
                            },
                            deserialize: function(e) {
                                if (e.substring(0, 9) !== C)
                                    return JSON.parse(e);
                                var t, r = e.substring(13), n = e.substring(9, 13);
                                if (n === j && I.test(r)) {
                                    var o = r.match(I);
                                    t = o[1],
                                    r = r.substring(o[0].length)
                                }
                                var a = q(r);
                                switch (n) {
                                case x:
                                    return a;
                                case j:
                                    return i([a], {
                                        type: t
                                    });
                                case F:
                                    return new Int8Array(a);
                                case R:
                                    return new Uint8Array(a);
                                case D:
                                    return new Uint8ClampedArray(a);
                                case B:
                                    return new Int16Array(a);
                                case W:
                                    return new Uint16Array(a);
                                case L:
                                    return new Int32Array(a);
                                case V:
                                    return new Uint32Array(a);
                                case U:
                                    return new Float32Array(a);
                                case z:
                                    return new Float64Array(a);
                                default:
                                    throw new Error("Unkown type: " + n)
                                }
                            },
                            stringToBuffer: q,
                            bufferToString: G
                        };
                        function Q(e, t, r, n) {
                            e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], r, n)
                        }
                        function J(e, t, r, n, o, i) {
                            e.executeSql(r, n, o, (function(e, a) {
                                a.code === a.SYNTAX_ERR ? e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], (function(e, s) {
                                    s.rows.length ? i(e, a) : Q(e, t, (function() {
                                        e.executeSql(r, n, o, i)
                                    }
                                    ), i)
                                }
                                ), i) : i(e, a)
                            }
                            ), i)
                        }
                        function Y(e, t, r, n) {
                            var o = this;
                            e = u(e);
                            var i = new a((function(i, a) {
                                o.ready().then((function() {
                                    void 0 === t && (t = null);
                                    var s = t
                                      , c = o._dbInfo;
                                    c.serializer.serialize(t, (function(t, u) {
                                        u ? a(u) : c.db.transaction((function(r) {
                                            J(r, c, "INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [e, t], (function() {
                                                i(s)
                                            }
                                            ), (function(e, t) {
                                                a(t)
                                            }
                                            ))
                                        }
                                        ), (function(t) {
                                            if (t.code === t.QUOTA_ERR) {
                                                if (n > 0)
                                                    return void i(Y.apply(o, [e, s, r, n - 1]));
                                                a(t)
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }
                                )).catch(a)
                            }
                            ));
                            return s(i, r),
                            i
                        }
                        var Z = {
                            _driver: "webSQLStorage",
                            _initStorage: function(e) {
                                var t = this
                                  , r = {
                                    db: null
                                };
                                if (e)
                                    for (var n in e)
                                        r[n] = "string" != typeof e[n] ? e[n].toString() : e[n];
                                var o = new a((function(e, n) {
                                    try {
                                        r.db = openDatabase(r.name, String(r.version), r.description, r.size)
                                    } catch (e) {
                                        return n(e)
                                    }
                                    r.db.transaction((function(o) {
                                        Q(o, r, (function() {
                                            t._dbInfo = r,
                                            e()
                                        }
                                        ), (function(e, t) {
                                            n(t)
                                        }
                                        ))
                                    }
                                    ), n)
                                }
                                ));
                                return r.serializer = H,
                                o
                            },
                            _support: "function" == typeof openDatabase,
                            iterate: function(e, t) {
                                var r = this
                                  , n = new a((function(t, n) {
                                    r.ready().then((function() {
                                        var o = r._dbInfo;
                                        o.db.transaction((function(r) {
                                            J(r, o, "SELECT * FROM " + o.storeName, [], (function(r, n) {
                                                for (var i = n.rows, a = i.length, s = 0; s < a; s++) {
                                                    var c = i.item(s)
                                                      , u = c.value;
                                                    if (u && (u = o.serializer.deserialize(u)),
                                                    void 0 !== (u = e(u, c.key, s + 1)))
                                                        return void t(u)
                                                }
                                                t()
                                            }
                                            ), (function(e, t) {
                                                n(t)
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    )).catch(n)
                                }
                                ));
                                return s(n, t),
                                n
                            },
                            getItem: function(e, t) {
                                var r = this;
                                e = u(e);
                                var n = new a((function(t, n) {
                                    r.ready().then((function() {
                                        var o = r._dbInfo;
                                        o.db.transaction((function(r) {
                                            J(r, o, "SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [e], (function(e, r) {
                                                var n = r.rows.length ? r.rows.item(0).value : null;
                                                n && (n = o.serializer.deserialize(n)),
                                                t(n)
                                            }
                                            ), (function(e, t) {
                                                n(t)
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    )).catch(n)
                                }
                                ));
                                return s(n, t),
                                n
                            },
                            setItem: function(e, t, r) {
                                return Y.apply(this, [e, t, r, 1])
                            },
                            removeItem: function(e, t) {
                                var r = this;
                                e = u(e);
                                var n = new a((function(t, n) {
                                    r.ready().then((function() {
                                        var o = r._dbInfo;
                                        o.db.transaction((function(r) {
                                            J(r, o, "DELETE FROM " + o.storeName + " WHERE key = ?", [e], (function() {
                                                t()
                                            }
                                            ), (function(e, t) {
                                                n(t)
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    )).catch(n)
                                }
                                ));
                                return s(n, t),
                                n
                            },
                            clear: function(e) {
                                var t = this
                                  , r = new a((function(e, r) {
                                    t.ready().then((function() {
                                        var n = t._dbInfo;
                                        n.db.transaction((function(t) {
                                            J(t, n, "DELETE FROM " + n.storeName, [], (function() {
                                                e()
                                            }
                                            ), (function(e, t) {
                                                r(t)
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    )).catch(r)
                                }
                                ));
                                return s(r, e),
                                r
                            },
                            length: function(e) {
                                var t = this
                                  , r = new a((function(e, r) {
                                    t.ready().then((function() {
                                        var n = t._dbInfo;
                                        n.db.transaction((function(t) {
                                            J(t, n, "SELECT COUNT(key) as c FROM " + n.storeName, [], (function(t, r) {
                                                var n = r.rows.item(0).c;
                                                e(n)
                                            }
                                            ), (function(e, t) {
                                                r(t)
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    )).catch(r)
                                }
                                ));
                                return s(r, e),
                                r
                            },
                            key: function(e, t) {
                                var r = this
                                  , n = new a((function(t, n) {
                                    r.ready().then((function() {
                                        var o = r._dbInfo;
                                        o.db.transaction((function(r) {
                                            J(r, o, "SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [e + 1], (function(e, r) {
                                                var n = r.rows.length ? r.rows.item(0).key : null;
                                                t(n)
                                            }
                                            ), (function(e, t) {
                                                n(t)
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    )).catch(n)
                                }
                                ));
                                return s(n, t),
                                n
                            },
                            keys: function(e) {
                                var t = this
                                  , r = new a((function(e, r) {
                                    t.ready().then((function() {
                                        var n = t._dbInfo;
                                        n.db.transaction((function(t) {
                                            J(t, n, "SELECT key FROM " + n.storeName, [], (function(t, r) {
                                                for (var n = [], o = 0; o < r.rows.length; o++)
                                                    n.push(r.rows.item(o).key);
                                                e(n)
                                            }
                                            ), (function(e, t) {
                                                r(t)
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    )).catch(r)
                                }
                                ));
                                return s(r, e),
                                r
                            },
                            dropInstance: function(e, t) {
                                t = f.apply(this, arguments);
                                var r = this.config();
                                (e = "function" != typeof e && e || {}).name || (e.name = e.name || r.name,
                                e.storeName = e.storeName || r.storeName);
                                var n, o = this;
                                return n = e.name ? new a((function(t) {
                                    var n;
                                    n = e.name === r.name ? o._dbInfo.db : openDatabase(e.name, "", "", 0),
                                    e.storeName ? t({
                                        db: n,
                                        storeNames: [e.storeName]
                                    }) : t(function(e) {
                                        return new a((function(t, r) {
                                            e.transaction((function(n) {
                                                n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], (function(r, n) {
                                                    for (var o = [], i = 0; i < n.rows.length; i++)
                                                        o.push(n.rows.item(i).name);
                                                    t({
                                                        db: e,
                                                        storeNames: o
                                                    })
                                                }
                                                ), (function(e, t) {
                                                    r(t)
                                                }
                                                ))
                                            }
                                            ), (function(e) {
                                                r(e)
                                            }
                                            ))
                                        }
                                        ))
                                    }(n))
                                }
                                )).then((function(e) {
                                    return new a((function(t, r) {
                                        e.db.transaction((function(n) {
                                            function o(e) {
                                                return new a((function(t, r) {
                                                    n.executeSql("DROP TABLE IF EXISTS " + e, [], (function() {
                                                        t()
                                                    }
                                                    ), (function(e, t) {
                                                        r(t)
                                                    }
                                                    ))
                                                }
                                                ))
                                            }
                                            for (var i = [], s = 0, c = e.storeNames.length; s < c; s++)
                                                i.push(o(e.storeNames[s]));
                                            a.all(i).then((function() {
                                                t()
                                            }
                                            )).catch((function(e) {
                                                r(e)
                                            }
                                            ))
                                        }
                                        ), (function(e) {
                                            r(e)
                                        }
                                        ))
                                    }
                                    ))
                                }
                                )) : a.reject("Invalid arguments"),
                                s(n, t),
                                n
                            }
                        };
                        function $(e, t) {
                            var r = e.name + "/";
                            return e.storeName !== t.storeName && (r += e.storeName + "/"),
                            r
                        }
                        function X() {
                            return !function() {
                                var e = "_localforage_support_test";
                                try {
                                    return localStorage.setItem(e, !0),
                                    localStorage.removeItem(e),
                                    !1
                                } catch (e) {
                                    return !0
                                }
                            }() || localStorage.length > 0
                        }
                        var ee = {
                            _driver: "localStorageWrapper",
                            _initStorage: function(e) {
                                var t = {};
                                if (e)
                                    for (var r in e)
                                        t[r] = e[r];
                                return t.keyPrefix = $(e, this._defaultConfig),
                                X() ? (this._dbInfo = t,
                                t.serializer = H,
                                a.resolve()) : a.reject()
                            },
                            _support: function() {
                                try {
                                    return "undefined" != typeof localStorage && "setItem"in localStorage && !!localStorage.setItem
                                } catch (e) {
                                    return !1
                                }
                            }(),
                            iterate: function(e, t) {
                                var r = this
                                  , n = r.ready().then((function() {
                                    for (var t = r._dbInfo, n = t.keyPrefix, o = n.length, i = localStorage.length, a = 1, s = 0; s < i; s++) {
                                        var c = localStorage.key(s);
                                        if (0 === c.indexOf(n)) {
                                            var u = localStorage.getItem(c);
                                            if (u && (u = t.serializer.deserialize(u)),
                                            void 0 !== (u = e(u, c.substring(o), a++)))
                                                return u
                                        }
                                    }
                                }
                                ));
                                return s(n, t),
                                n
                            },
                            getItem: function(e, t) {
                                var r = this;
                                e = u(e);
                                var n = r.ready().then((function() {
                                    var t = r._dbInfo
                                      , n = localStorage.getItem(t.keyPrefix + e);
                                    return n && (n = t.serializer.deserialize(n)),
                                    n
                                }
                                ));
                                return s(n, t),
                                n
                            },
                            setItem: function(e, t, r) {
                                var n = this;
                                e = u(e);
                                var o = n.ready().then((function() {
                                    void 0 === t && (t = null);
                                    var r = t;
                                    return new a((function(o, i) {
                                        var a = n._dbInfo;
                                        a.serializer.serialize(t, (function(t, n) {
                                            if (n)
                                                i(n);
                                            else
                                                try {
                                                    localStorage.setItem(a.keyPrefix + e, t),
                                                    o(r)
                                                } catch (e) {
                                                    "QuotaExceededError" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name || i(e),
                                                    i(e)
                                                }
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ));
                                return s(o, r),
                                o
                            },
                            removeItem: function(e, t) {
                                var r = this;
                                e = u(e);
                                var n = r.ready().then((function() {
                                    var t = r._dbInfo;
                                    localStorage.removeItem(t.keyPrefix + e)
                                }
                                ));
                                return s(n, t),
                                n
                            },
                            clear: function(e) {
                                var t = this
                                  , r = t.ready().then((function() {
                                    for (var e = t._dbInfo.keyPrefix, r = localStorage.length - 1; r >= 0; r--) {
                                        var n = localStorage.key(r);
                                        0 === n.indexOf(e) && localStorage.removeItem(n)
                                    }
                                }
                                ));
                                return s(r, e),
                                r
                            },
                            length: function(e) {
                                var t = this.keys().then((function(e) {
                                    return e.length
                                }
                                ));
                                return s(t, e),
                                t
                            },
                            key: function(e, t) {
                                var r = this
                                  , n = r.ready().then((function() {
                                    var t, n = r._dbInfo;
                                    try {
                                        t = localStorage.key(e)
                                    } catch (e) {
                                        t = null
                                    }
                                    return t && (t = t.substring(n.keyPrefix.length)),
                                    t
                                }
                                ));
                                return s(n, t),
                                n
                            },
                            keys: function(e) {
                                var t = this
                                  , r = t.ready().then((function() {
                                    for (var e = t._dbInfo, r = localStorage.length, n = [], o = 0; o < r; o++) {
                                        var i = localStorage.key(o);
                                        0 === i.indexOf(e.keyPrefix) && n.push(i.substring(e.keyPrefix.length))
                                    }
                                    return n
                                }
                                ));
                                return s(r, e),
                                r
                            },
                            dropInstance: function(e, t) {
                                if (t = f.apply(this, arguments),
                                !(e = "function" != typeof e && e || {}).name) {
                                    var r = this.config();
                                    e.name = e.name || r.name,
                                    e.storeName = e.storeName || r.storeName
                                }
                                var n, o = this;
                                return n = e.name ? new a((function(t) {
                                    e.storeName ? t($(e, o._defaultConfig)) : t(e.name + "/")
                                }
                                )).then((function(e) {
                                    for (var t = localStorage.length - 1; t >= 0; t--) {
                                        var r = localStorage.key(t);
                                        0 === r.indexOf(e) && localStorage.removeItem(r)
                                    }
                                }
                                )) : a.reject("Invalid arguments"),
                                s(n, t),
                                n
                            }
                        }
                          , te = function(e, t) {
                            return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
                        }
                          , re = function(e, t) {
                            for (var r = e.length, n = 0; n < r; ) {
                                if (te(e[n], t))
                                    return !0;
                                n++
                            }
                            return !1
                        }
                          , ne = Array.isArray || function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        }
                          , oe = {}
                          , ie = {}
                          , ae = {
                            INDEXEDDB: T,
                            WEBSQL: Z,
                            LOCALSTORAGE: ee
                        }
                          , se = [ae.INDEXEDDB._driver, ae.WEBSQL._driver, ae.LOCALSTORAGE._driver]
                          , ce = ["dropInstance"]
                          , ue = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(ce)
                          , fe = {
                            description: "",
                            driver: se.slice(),
                            name: "localforage",
                            size: 4980736,
                            storeName: "keyvaluepairs",
                            version: 1
                        };
                        function le(e, t) {
                            e[t] = function() {
                                var r = arguments;
                                return e.ready().then((function() {
                                    return e[t].apply(e, r)
                                }
                                ))
                            }
                        }
                        function de() {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = arguments[e];
                                if (t)
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (ne(t[r]) ? arguments[0][r] = t[r].slice() : arguments[0][r] = t[r])
                            }
                            return arguments[0]
                        }
                        var he = function() {
                            function e(t) {
                                for (var r in function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                ae)
                                    if (ae.hasOwnProperty(r)) {
                                        var n = ae[r]
                                          , o = n._driver;
                                        this[r] = o,
                                        oe[o] || this.defineDriver(n)
                                    }
                                this._defaultConfig = de({}, fe),
                                this._config = de({}, this._defaultConfig, t),
                                this._driverSet = null,
                                this._initDriver = null,
                                this._ready = !1,
                                this._dbInfo = null,
                                this._wrapLibraryMethodsWithReady(),
                                this.setDriver(this._config.driver).catch((function() {}
                                ))
                            }
                            return e.prototype.config = function(e) {
                                if ("object" === (void 0 === e ? "undefined" : n(e))) {
                                    if (this._ready)
                                        return new Error("Can't call config() after localforage has been used.");
                                    for (var t in e) {
                                        if ("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")),
                                        "version" === t && "number" != typeof e[t])
                                            return new Error("Database version must be a number.");
                                        this._config[t] = e[t]
                                    }
                                    return !("driver"in e) || !e.driver || this.setDriver(this._config.driver)
                                }
                                return "string" == typeof e ? this._config[e] : this._config
                            }
                            ,
                            e.prototype.defineDriver = function(e, t, r) {
                                var n = new a((function(t, r) {
                                    try {
                                        var n = e._driver
                                          , o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                        if (!e._driver)
                                            return void r(o);
                                        for (var i = ue.concat("_initStorage"), c = 0, u = i.length; c < u; c++) {
                                            var f = i[c];
                                            if ((!re(ce, f) || e[f]) && "function" != typeof e[f])
                                                return void r(o)
                                        }
                                        !function() {
                                            for (var t = function(e) {
                                                return function() {
                                                    var t = new Error("Method " + e + " is not implemented by the current driver")
                                                      , r = a.reject(t);
                                                    return s(r, arguments[arguments.length - 1]),
                                                    r
                                                }
                                            }, r = 0, n = ce.length; r < n; r++) {
                                                var o = ce[r];
                                                e[o] || (e[o] = t(o))
                                            }
                                        }();
                                        var l = function(r) {
                                            oe[n] && console.info("Redefining LocalForage driver: " + n),
                                            oe[n] = e,
                                            ie[n] = r,
                                            t()
                                        };
                                        "_support"in e ? e._support && "function" == typeof e._support ? e._support().then(l, r) : l(!!e._support) : l(!0)
                                    } catch (t) {
                                        r(t)
                                    }
                                }
                                ));
                                return c(n, t, r),
                                n
                            }
                            ,
                            e.prototype.driver = function() {
                                return this._driver || null
                            }
                            ,
                            e.prototype.getDriver = function(e, t, r) {
                                var n = oe[e] ? a.resolve(oe[e]) : a.reject(new Error("Driver not found."));
                                return c(n, t, r),
                                n
                            }
                            ,
                            e.prototype.getSerializer = function(e) {
                                var t = a.resolve(H);
                                return c(t, e),
                                t
                            }
                            ,
                            e.prototype.ready = function(e) {
                                var t = this
                                  , r = t._driverSet.then((function() {
                                    return null === t._ready && (t._ready = t._initDriver()),
                                    t._ready
                                }
                                ));
                                return c(r, e, e),
                                r
                            }
                            ,
                            e.prototype.setDriver = function(e, t, r) {
                                var n = this;
                                ne(e) || (e = [e]);
                                var o = this._getSupportedDrivers(e);
                                function i() {
                                    n._config.driver = n.driver()
                                }
                                function s(e) {
                                    return n._extend(e),
                                    i(),
                                    n._ready = n._initStorage(n._config),
                                    n._ready
                                }
                                var u = null !== this._driverSet ? this._driverSet.catch((function() {
                                    return a.resolve()
                                }
                                )) : a.resolve();
                                return this._driverSet = u.then((function() {
                                    var e = o[0];
                                    return n._dbInfo = null,
                                    n._ready = null,
                                    n.getDriver(e).then((function(e) {
                                        n._driver = e._driver,
                                        i(),
                                        n._wrapLibraryMethodsWithReady(),
                                        n._initDriver = function(e) {
                                            return function() {
                                                var t = 0;
                                                return function r() {
                                                    for (; t < e.length; ) {
                                                        var o = e[t];
                                                        return t++,
                                                        n._dbInfo = null,
                                                        n._ready = null,
                                                        n.getDriver(o).then(s).catch(r)
                                                    }
                                                    i();
                                                    var c = new Error("No available storage method found.");
                                                    return n._driverSet = a.reject(c),
                                                    n._driverSet
                                                }()
                                            }
                                        }(o)
                                    }
                                    ))
                                }
                                )).catch((function() {
                                    i();
                                    var e = new Error("No available storage method found.");
                                    return n._driverSet = a.reject(e),
                                    n._driverSet
                                }
                                )),
                                c(this._driverSet, t, r),
                                this._driverSet
                            }
                            ,
                            e.prototype.supports = function(e) {
                                return !!ie[e]
                            }
                            ,
                            e.prototype._extend = function(e) {
                                de(this, e)
                            }
                            ,
                            e.prototype._getSupportedDrivers = function(e) {
                                for (var t = [], r = 0, n = e.length; r < n; r++) {
                                    var o = e[r];
                                    this.supports(o) && t.push(o)
                                }
                                return t
                            }
                            ,
                            e.prototype._wrapLibraryMethodsWithReady = function() {
                                for (var e = 0, t = ue.length; e < t; e++)
                                    le(this, ue[e])
                            }
                            ,
                            e.prototype.createInstance = function(t) {
                                return new e(t)
                            }
                            ,
                            e
                        }()
                          , pe = new he;
                        t.exports = pe
                    }
                    , {
                        3: 3
                    }]
                }, {}, [4])(4)
            }
            ))
        },
        129: function(e, t) {
            "use strict";
            var r = Object.prototype.hasOwnProperty;
            function n(e) {
                try {
                    return decodeURIComponent(e.replace(/\+/g, " "))
                } catch (e) {
                    return null
                }
            }
            function o(e) {
                try {
                    return encodeURIComponent(e)
                } catch (e) {
                    return null
                }
            }
            t.stringify = function(e, t) {
                t = t || "";
                var n, i, a = [];
                for (i in "string" != typeof t && (t = "?"),
                e)
                    if (r.call(e, i)) {
                        if ((n = e[i]) || null != n && !isNaN(n) || (n = ""),
                        i = o(i),
                        n = o(n),
                        null === i || null === n)
                            continue;
                        a.push(i + "=" + n)
                    }
                return a.length ? t + a.join("&") : ""
            }
            ,
            t.parse = function(e) {
                for (var t, r = /([^=?#&]+)=?([^&]*)/g, o = {}; t = r.exec(e); ) {
                    var i = n(t[1])
                      , a = n(t[2]);
                    null === i || null === a || i in o || (o[i] = a)
                }
                return o
            }
        },
        418: function(e) {
            "use strict";
            e.exports = function(e, t) {
                if (t = t.split(":")[0],
                !(e = +e))
                    return !1;
                switch (t) {
                case "http":
                case "ws":
                    return 80 !== e;
                case "https":
                case "wss":
                    return 443 !== e;
                case "ftp":
                    return 21 !== e;
                case "gopher":
                    return 70 !== e;
                case "file":
                    return !1
                }
                return 0 !== e
            }
        },
        564: function(e, t, r) {
            "use strict";
            var n = r(418)
              , o = r(129)
              , i = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/
              , a = /[\n\r\t]/g
              , s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
              , c = /:\d+$/
              , u = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i
              , f = /^[a-zA-Z]:/;
            function l(e) {
                return (e || "").toString().replace(i, "")
            }
            var d = [["#", "hash"], ["?", "query"], function(e, t) {
                return v(t.protocol) ? e.replace(/\\/g, "/") : e
            }
            , ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]]
              , h = {
                hash: 1,
                query: 1
            };
            function p(e) {
                var t, n = ("undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {}).location || {}, o = {}, i = typeof (e = e || n);
                if ("blob:" === e.protocol)
                    o = new y(unescape(e.pathname),{});
                else if ("string" === i)
                    for (t in o = new y(e,{}),
                    h)
                        delete o[t];
                else if ("object" === i) {
                    for (t in e)
                        t in h || (o[t] = e[t]);
                    void 0 === o.slashes && (o.slashes = s.test(e.href))
                }
                return o
            }
            function v(e) {
                return "file:" === e || "ftp:" === e || "http:" === e || "https:" === e || "ws:" === e || "wss:" === e
            }
            function b(e, t) {
                e = (e = l(e)).replace(a, ""),
                t = t || {};
                var r, n = u.exec(e), o = n[1] ? n[1].toLowerCase() : "", i = !!n[2], s = !!n[3], c = 0;
                return i ? s ? (r = n[2] + n[3] + n[4],
                c = n[2].length + n[3].length) : (r = n[2] + n[4],
                c = n[2].length) : s ? (r = n[3] + n[4],
                c = n[3].length) : r = n[4],
                "file:" === o ? c >= 2 && (r = r.slice(2)) : v(o) ? r = n[4] : o ? i && (r = r.slice(2)) : c >= 2 && v(t.protocol) && (r = n[4]),
                {
                    protocol: o,
                    slashes: i || v(o),
                    slashesCount: c,
                    rest: r
                }
            }
            function y(e, t, r) {
                if (e = (e = l(e)).replace(a, ""),
                !(this instanceof y))
                    return new y(e,t,r);
                var i, s, c, u, h, g, m = d.slice(), _ = typeof t, w = this, S = 0;
                for ("object" !== _ && "string" !== _ && (r = t,
                t = null),
                r && "function" != typeof r && (r = o.parse),
                i = !(s = b(e || "", t = p(t))).protocol && !s.slashes,
                w.slashes = s.slashes || i && t.slashes,
                w.protocol = s.protocol || t.protocol || "",
                e = s.rest,
                ("file:" === s.protocol && (2 !== s.slashesCount || f.test(e)) || !s.slashes && (s.protocol || s.slashesCount < 2 || !v(w.protocol))) && (m[3] = [/(.*)/, "pathname"]); S < m.length; S++)
                    "function" != typeof (u = m[S]) ? (c = u[0],
                    g = u[1],
                    c != c ? w[g] = e : "string" == typeof c ? ~(h = "@" === c ? e.lastIndexOf(c) : e.indexOf(c)) && ("number" == typeof u[2] ? (w[g] = e.slice(0, h),
                    e = e.slice(h + u[2])) : (w[g] = e.slice(h),
                    e = e.slice(0, h))) : (h = c.exec(e)) && (w[g] = h[1],
                    e = e.slice(0, h.index)),
                    w[g] = w[g] || i && u[3] && t[g] || "",
                    u[4] && (w[g] = w[g].toLowerCase())) : e = u(e, w);
                r && (w.query = r(w.query)),
                i && t.slashes && "/" !== w.pathname.charAt(0) && ("" !== w.pathname || "" !== t.pathname) && (w.pathname = function(e, t) {
                    if ("" === e)
                        return t;
                    for (var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")), n = r.length, o = r[n - 1], i = !1, a = 0; n--; )
                        "." === r[n] ? r.splice(n, 1) : ".." === r[n] ? (r.splice(n, 1),
                        a++) : a && (0 === n && (i = !0),
                        r.splice(n, 1),
                        a--);
                    return i && r.unshift(""),
                    "." !== o && ".." !== o || r.push(""),
                    r.join("/")
                }(w.pathname, t.pathname)),
                "/" !== w.pathname.charAt(0) && v(w.protocol) && (w.pathname = "/" + w.pathname),
                n(w.port, w.protocol) || (w.host = w.hostname,
                w.port = ""),
                w.username = w.password = "",
                w.auth && (~(h = w.auth.indexOf(":")) ? (w.username = w.auth.slice(0, h),
                w.username = encodeURIComponent(decodeURIComponent(w.username)),
                w.password = w.auth.slice(h + 1),
                w.password = encodeURIComponent(decodeURIComponent(w.password))) : w.username = encodeURIComponent(decodeURIComponent(w.auth)),
                w.auth = w.password ? w.username + ":" + w.password : w.username),
                w.origin = "file:" !== w.protocol && v(w.protocol) && w.host ? w.protocol + "//" + w.host : "null",
                w.href = w.toString()
            }
            y.prototype = {
                set: function(e, t, r) {
                    var i = this;
                    switch (e) {
                    case "query":
                        "string" == typeof t && t.length && (t = (r || o.parse)(t)),
                        i[e] = t;
                        break;
                    case "port":
                        i[e] = t,
                        n(t, i.protocol) ? t && (i.host = i.hostname + ":" + t) : (i.host = i.hostname,
                        i[e] = "");
                        break;
                    case "hostname":
                        i[e] = t,
                        i.port && (t += ":" + i.port),
                        i.host = t;
                        break;
                    case "host":
                        i[e] = t,
                        c.test(t) ? (t = t.split(":"),
                        i.port = t.pop(),
                        i.hostname = t.join(":")) : (i.hostname = t,
                        i.port = "");
                        break;
                    case "protocol":
                        i.protocol = t.toLowerCase(),
                        i.slashes = !r;
                        break;
                    case "pathname":
                    case "hash":
                        if (t) {
                            var a = "pathname" === e ? "/" : "#";
                            i[e] = t.charAt(0) !== a ? a + t : t
                        } else
                            i[e] = t;
                        break;
                    case "username":
                    case "password":
                        i[e] = encodeURIComponent(t);
                        break;
                    case "auth":
                        var s = t.indexOf(":");
                        ~s ? (i.username = t.slice(0, s),
                        i.username = encodeURIComponent(decodeURIComponent(i.username)),
                        i.password = t.slice(s + 1),
                        i.password = encodeURIComponent(decodeURIComponent(i.password))) : i.username = encodeURIComponent(decodeURIComponent(t))
                    }
                    for (var u = 0; u < d.length; u++) {
                        var f = d[u];
                        f[4] && (i[f[1]] = i[f[1]].toLowerCase())
                    }
                    return i.auth = i.password ? i.username + ":" + i.password : i.username,
                    i.origin = "file:" !== i.protocol && v(i.protocol) && i.host ? i.protocol + "//" + i.host : "null",
                    i.href = i.toString(),
                    i
                },
                toString: function(e) {
                    e && "function" == typeof e || (e = o.stringify);
                    var t, r = this, n = r.host, i = r.protocol;
                    i && ":" !== i.charAt(i.length - 1) && (i += ":");
                    var a = i + (r.protocol && r.slashes || v(r.protocol) ? "//" : "");
                    return r.username ? (a += r.username,
                    r.password && (a += ":" + r.password),
                    a += "@") : r.password ? (a += ":" + r.password,
                    a += "@") : "file:" !== r.protocol && v(r.protocol) && !n && "/" !== r.pathname && (a += "@"),
                    (":" === n[n.length - 1] || c.test(r.hostname) && !r.port) && (n += ":"),
                    a += n + r.pathname,
                    (t = "object" == typeof r.query ? e(r.query) : r.query) && (a += "?" !== t.charAt(0) ? "?" + t : t),
                    r.hash && (a += r.hash),
                    a
                }
            },
            y.extractProtocol = b,
            y.location = p,
            y.trimLeft = l,
            y.qs = o,
            e.exports = y
        }
    }
      , t = {};
    function r(n) {
        var o = t[n];
        if (void 0 !== o)
            return o.exports;
        var i = t[n] = {
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r),
        i.exports
    }
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, {
            a: t
        }),
        t
    }
    ,
    r.d = function(e, t) {
        for (var n in t)
            r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    function() {
        "use strict";
        var e, t, n, o = r(558), i = r.n(o), a = r(752), s = r(264), c = r(685), u = ((e = {})["only-available-in-window"] = "This method is available in a Window context.",
        e["only-available-in-sw"] = "This method is available in a service worker context.",
        e["should-be-overriden"] = "This method should be overriden by extended classes.",
        e["bad-sender-id"] = "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",
        e["permission-default"] = "The required permissions were not granted and dismissed instead.",
        e["permission-blocked"] = "The required permissions were not granted and blocked instead.",
        e["unsupported-browser"] = "This browser doesn't support the API's required to use the firebase SDK.",
        e["notifications-blocked"] = "Notifications have been blocked.",
        e["failed-serviceworker-registration"] = "We are unable to register the default service worker. {$browserErrorMessage}",
        e["sw-registration-expected"] = "A service worker registration was the expected input.",
        e["get-subscription-failed"] = "There was an error when trying to get any existing Push Subscriptions.",
        e["invalid-saved-token"] = "Unable to access details of the saved token.",
        e["sw-reg-redundant"] = "The service worker being used for push was made redundant.",
        e["token-subscribe-failed"] = "A problem occured while subscribing the user to FCM: {$errorInfo}",
        e["token-subscribe-no-token"] = "FCM returned no token when subscribing the user to push.",
        e["token-subscribe-no-push-set"] = "FCM returned an invalid response when getting an FCM token.",
        e["token-unsubscribe-failed"] = "A problem occured while unsubscribing the user from FCM: {$errorInfo}",
        e["token-update-failed"] = "A problem occured while updating the user from FCM: {$errorInfo}",
        e["token-update-no-token"] = "FCM returned no token when updating the user to push.",
        e["use-sw-before-get-token"] = "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
        e["invalid-delete-token"] = "You must pass a valid token into deleteToken(), i.e. the token from getToken().",
        e["delete-token-not-found"] = "The deletion attempt for token could not be performed as the token was not found.",
        e["delete-scope-not-found"] = "The deletion attempt for service worker scope could not be performed as the scope was not found.",
        e["bg-handler-function-expected"] = "The input to setBackgroundMessageHandler() must be a function.",
        e["no-window-client-to-msg"] = "An attempt was made to message a non-existant window client.",
        e["unable-to-resubscribe"] = "There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$errorInfo}",
        e["no-fcm-token-for-resubscribe"] = "Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",
        e["failed-to-delete-token"] = "Unable to delete the currently saved token.",
        e["no-sw-in-reg"] = "Even though the service worker registration was successful, there was a problem accessing the service worker itself.",
        e["incorrect-gcm-sender-id"] = "Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",
        e["bad-scope"] = "The service worker scope must be a string with at least one character.",
        e["bad-vapid-key"] = "The public VAPID key is not a Uint8Array with 65 bytes.",
        e["bad-subscription"] = "The subscription must be a valid PushSubscription.",
        e["bad-token"] = "The FCM Token used for storage / lookup was not a valid token string.",
        e["bad-push-set"] = "The FCM push set used for storage / lookup was not not a valid push set string.",
        e["failed-delete-vapid-key"] = "The VAPID key could not be deleted.",
        e["invalid-public-vapid-key"] = "The public VAPID key must be a string.",
        e["use-public-key-before-get-token"] = "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",
        e["public-vapid-key-decryption-failed"] = "The public VAPID key did not equal 65 bytes when decrypted.",
        e), f = new c.LL("messaging","Messaging",u), l = new Uint8Array([4, 51, 148, 247, 223, 161, 235, 177, 220, 3, 162, 94, 21, 113, 219, 72, 211, 46, 237, 237, 178, 52, 219, 183, 71, 58, 12, 143, 196, 204, 225, 111, 60, 140, 132, 223, 171, 182, 102, 62, 242, 12, 212, 139, 254, 227, 249, 118, 47, 20, 28, 99, 8, 106, 111, 45, 177, 26, 149, 176, 206, 55, 192, 156, 110]), d = "https://fcm.googleapis.com";
        function h(e, t) {
            if (null == e || null == t)
                return !1;
            if (e === t)
                return !0;
            if (e.byteLength !== t.byteLength)
                return !1;
            for (var r = new DataView(e), n = new DataView(t), o = 0; o < e.byteLength; o++)
                if (r.getUint8(o) !== n.getUint8(o))
                    return !1;
            return !0
        }
        function p(e) {
            var t = function(e) {
                var t = new Uint8Array(e);
                return btoa(String.fromCharCode.apply(String, (0,
                s.__spread)(t)))
            }(e);
            return t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
        }
        !function(e) {
            e.TYPE_OF_MSG = "firebase-messaging-msg-type",
            e.DATA = "firebase-messaging-msg-data"
        }(t || (t = {})),
        function(e) {
            e.PUSH_MSG_RECEIVED = "push-msg-received",
            e.NOTIFICATION_CLICKED = "notification-clicked"
        }(n || (n = {}));
        var v = function() {
            function e() {}
            return e.prototype.getToken = function(e, t, r) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var n, o, i, a, c, u, v, b, y;
                    return (0,
                    s.__generator)(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            n = p(t.getKey("p256dh")),
                            o = p(t.getKey("auth")),
                            i = "authorized_entity=" + e + "&endpoint=" + t.endpoint + "&encryption_key=" + n + "&encryption_auth=" + o,
                            h(r.buffer, l.buffer) || (a = p(r),
                            i += "&application_pub_key=" + a),
                            (c = new Headers).append("Content-Type", "application/x-www-form-urlencoded"),
                            u = {
                                method: "POST",
                                headers: c,
                                body: i
                            },
                            s.label = 1;
                        case 1:
                            return s.trys.push([1, 4, , 5]),
                            [4, fetch(d + "/fcm/connect/subscribe", u)];
                        case 2:
                            return [4, s.sent().json()];
                        case 3:
                            return v = s.sent(),
                            [3, 5];
                        case 4:
                            throw b = s.sent(),
                            f.create("token-subscribe-failed", {
                                errorInfo: b
                            });
                        case 5:
                            if (v.error)
                                throw y = v.error.message,
                                f.create("token-subscribe-failed", {
                                    errorInfo: y
                                });
                            if (!v.token)
                                throw f.create("token-subscribe-no-token");
                            if (!v.pushSet)
                                throw f.create("token-subscribe-no-push-set");
                            return [2, {
                                token: v.token,
                                pushSet: v.pushSet
                            }]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.updateToken = function(e, t, r, n, o) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var i, a, c, u, v, b, y, g, m;
                    return (0,
                    s.__generator)(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            i = p(n.getKey("p256dh")),
                            a = p(n.getKey("auth")),
                            c = "push_set=" + r + "&token=" + t + "&authorized_entity=" + e + "&endpoint=" + n.endpoint + "&encryption_key=" + i + "&encryption_auth=" + a,
                            h(o.buffer, l.buffer) || (u = p(o),
                            c += "&application_pub_key=" + u),
                            (v = new Headers).append("Content-Type", "application/x-www-form-urlencoded"),
                            b = {
                                method: "POST",
                                headers: v,
                                body: c
                            },
                            s.label = 1;
                        case 1:
                            return s.trys.push([1, 4, , 5]),
                            [4, fetch(d + "/fcm/connect/subscribe", b)];
                        case 2:
                            return [4, s.sent().json()];
                        case 3:
                            return y = s.sent(),
                            [3, 5];
                        case 4:
                            throw g = s.sent(),
                            f.create("token-update-failed", {
                                errorInfo: g
                            });
                        case 5:
                            if (y.error)
                                throw m = y.error.message,
                                f.create("token-update-failed", {
                                    errorInfo: m
                                });
                            if (!y.token)
                                throw f.create("token-update-no-token");
                            return [2, y.token]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.deleteToken = function(e, t, r) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var n, o, i, a, c, u;
                    return (0,
                    s.__generator)(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            n = "authorized_entity=" + e + "&token=" + t + "&pushSet=" + r,
                            (o = new Headers).append("Content-Type", "application/x-www-form-urlencoded"),
                            i = {
                                method: "POST",
                                headers: o,
                                body: n
                            },
                            s.label = 1;
                        case 1:
                            return s.trys.push([1, 4, , 5]),
                            [4, fetch(d + "/fcm/connect/unsubscribe", i)];
                        case 2:
                            return [4, s.sent().json()];
                        case 3:
                            if ((a = s.sent()).error)
                                throw c = a.error.message,
                                f.create("token-unsubscribe-failed", {
                                    errorInfo: c
                                });
                            return [3, 5];
                        case 4:
                            throw u = s.sent(),
                            f.create("token-unsubscribe-failed", {
                                errorInfo: u
                            });
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e
        }();
        function b(e) {
            for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), r = atob(t), n = new Uint8Array(r.length), o = 0; o < r.length; ++o)
                n[o] = r.charCodeAt(o);
            return n
        }
        var y = "undefined"
          , g = "fcm_token_object_Store";
        function m() {
            var e = indexedDB.open(y);
            e.onerror = function(e) {}
            ,
            e.onsuccess = function(t) {
                !function(e) {
                    if (e.objectStoreNames.contains(g)) {
                        var t = e.transaction(g).objectStore(g)
                          , r = new v
                          , n = t.openCursor();
                        n.onerror = function(e) {
                            console.warn("Unable to cleanup old IDB.", e)
                        }
                        ,
                        n.onsuccess = function() {
                            var t = n.result;
                            if (t) {
                                var o = t.value;
                                r.deleteToken(o.fcmSenderId, o.fcmToken, o.fcmPushSet),
                                t.continue()
                            } else
                                e.close(),
                                indexedDB.deleteDatabase(y)
                        }
                    }
                }(e.result)
            }
        }
        var _ = function() {
            function e() {
                this.dbPromise = null
            }
            return e.prototype.get = function(e) {
                return this.createTransaction((function(t) {
                    return t.get(e)
                }
                ))
            }
            ,
            e.prototype.getIndex = function(e, t) {
                return this.createTransaction((function(r) {
                    return r.index(e).get(t)
                }
                ))
            }
            ,
            e.prototype.put = function(e) {
                return this.createTransaction((function(t) {
                    return t.put(e)
                }
                ), "readwrite")
            }
            ,
            e.prototype.delete = function(e) {
                return this.createTransaction((function(t) {
                    return t.delete(e)
                }
                ), "readwrite")
            }
            ,
            e.prototype.closeDatabase = function() {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    s.__generator)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return this.dbPromise ? [4, this.dbPromise] : [3, 2];
                        case 1:
                            e.sent().close(),
                            this.dbPromise = null,
                            e.label = 2;
                        case 2:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.createTransaction = function(e, t) {
                return void 0 === t && (t = "readonly"),
                (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var r, n, o, i;
                    return (0,
                    s.__generator)(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return [4, this.getDb()];
                        case 1:
                            return r = a.sent(),
                            n = r.transaction(this.objectStoreName, t),
                            o = n.objectStore(this.objectStoreName),
                            [4, w(e(o))];
                        case 2:
                            return i = a.sent(),
                            [2, new Promise((function(e, t) {
                                n.oncomplete = function() {
                                    e(i)
                                }
                                ,
                                n.onerror = function() {
                                    t(n.error)
                                }
                            }
                            ))]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.getDb = function() {
                var e = this;
                return this.dbPromise || (this.dbPromise = new Promise((function(t, r) {
                    var n = indexedDB.open(e.dbName, e.dbVersion);
                    n.onsuccess = function() {
                        t(n.result)
                    }
                    ,
                    n.onerror = function() {
                        e.dbPromise = null,
                        r(n.error)
                    }
                    ,
                    n.onupgradeneeded = function(t) {
                        return e.onDbUpgrade(n, t)
                    }
                }
                ))),
                this.dbPromise
            }
            ,
            e
        }();
        function w(e) {
            return new Promise((function(t, r) {
                e.onsuccess = function() {
                    t(e.result)
                }
                ,
                e.onerror = function() {
                    r(e.error)
                }
            }
            ))
        }
        var S = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.dbName = "fcm_token_details_db",
                t.dbVersion = 3,
                t.objectStoreName = "fcm_token_object_Store",
                t
            }
            return (0,
            s.__extends)(t, e),
            t.prototype.onDbUpgrade = function(e, t) {
                var r = e.result;
                switch (t.oldVersion) {
                case 0:
                    (n = r.createObjectStore(this.objectStoreName, {
                        keyPath: "swScope"
                    })).createIndex("fcmSenderId", "fcmSenderId", {
                        unique: !1
                    }),
                    n.createIndex("fcmToken", "fcmToken", {
                        unique: !0
                    });
                case 1:
                    m();
                case 2:
                    var n, o = (n = e.transaction.objectStore(this.objectStoreName)).openCursor();
                    o.onsuccess = function() {
                        var e = o.result;
                        if (e) {
                            var t = e.value
                              , r = (0,
                            s.__assign)({}, t);
                            t.createTime || (r.createTime = Date.now()),
                            "string" == typeof t.vapidKey && (r.vapidKey = b(t.vapidKey)),
                            "string" == typeof t.auth && (r.auth = b(t.auth).buffer),
                            "string" == typeof t.auth && (r.p256dh = b(t.p256dh).buffer),
                            e.update(r),
                            e.continue()
                        }
                    }
                }
            }
            ,
            t.prototype.getTokenDetailsFromToken = function(e) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    s.__generator)(this, (function(t) {
                        if (!e)
                            throw f.create("bad-token");
                        return k({
                            fcmToken: e
                        }),
                        [2, this.getIndex("fcmToken", e)]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.getTokenDetailsFromSWScope = function(e) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    s.__generator)(this, (function(t) {
                        if (!e)
                            throw f.create("bad-scope");
                        return k({
                            swScope: e
                        }),
                        [2, this.get(e)]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.saveTokenDetails = function(e) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    s.__generator)(this, (function(t) {
                        if (!e.swScope)
                            throw f.create("bad-scope");
                        if (!e.vapidKey)
                            throw f.create("bad-vapid-key");
                        if (!e.endpoint || !e.auth || !e.p256dh)
                            throw f.create("bad-subscription");
                        if (!e.fcmSenderId)
                            throw f.create("bad-sender-id");
                        if (!e.fcmToken)
                            throw f.create("bad-token");
                        if (!e.fcmPushSet)
                            throw f.create("bad-push-set");
                        return k(e),
                        [2, this.put(e)]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.deleteToken = function(e) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var t;
                    return (0,
                    s.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return "string" != typeof e || 0 === e.length ? [2, Promise.reject(f.create("invalid-delete-token"))] : [4, this.getTokenDetailsFromToken(e)];
                        case 1:
                            if (!(t = r.sent()))
                                throw f.create("delete-token-not-found");
                            return [4, this.delete(t.swScope)];
                        case 2:
                            return r.sent(),
                            [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t
        }(_);
        function k(e) {
            if (e.fcmToken && ("string" != typeof e.fcmToken || 0 === e.fcmToken.length))
                throw f.create("bad-token");
            if (e.swScope && ("string" != typeof e.swScope || 0 === e.swScope.length))
                throw f.create("bad-scope");
            if (e.vapidKey && (!(e.vapidKey instanceof Uint8Array) || 65 !== e.vapidKey.length))
                throw f.create("bad-vapid-key");
            if (e.endpoint && ("string" != typeof e.endpoint || 0 === e.endpoint.length))
                throw f.create("bad-subscription");
            if (e.auth && !(e.auth instanceof ArrayBuffer))
                throw f.create("bad-subscription");
            if (e.p256dh && !(e.p256dh instanceof ArrayBuffer))
                throw f.create("bad-subscription");
            if (e.fcmSenderId && ("string" != typeof e.fcmSenderId || 0 === e.fcmSenderId.length))
                throw f.create("bad-sender-id");
            if (e.fcmPushSet && ("string" != typeof e.fcmPushSet || 0 === e.fcmPushSet.length))
                throw f.create("bad-push-set")
        }
        var O = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.dbName = "fcm_vapid_details_db",
                t.dbVersion = 1,
                t.objectStoreName = "fcm_vapid_object_Store",
                t
            }
            return (0,
            s.__extends)(t, e),
            t.prototype.onDbUpgrade = function(e) {
                e.result.createObjectStore(this.objectStoreName, {
                    keyPath: "swScope"
                })
            }
            ,
            t.prototype.getVapidFromSWScope = function(e) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var t;
                    return (0,
                    s.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            if ("string" != typeof e || 0 === e.length)
                                throw f.create("bad-scope");
                            return [4, this.get(e)];
                        case 1:
                            return [2, (t = r.sent()) ? t.vapidKey : void 0]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.saveVapidDetails = function(e, t) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var r;
                    return (0,
                    s.__generator)(this, (function(n) {
                        if ("string" != typeof e || 0 === e.length)
                            throw f.create("bad-scope");
                        if (null === t || 65 !== t.length)
                            throw f.create("bad-vapid-key");
                        return r = {
                            swScope: e,
                            vapidKey: t
                        },
                        [2, this.put(r)]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.deleteVapidDetails = function(e) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var t;
                    return (0,
                    s.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.getVapidFromSWScope(e)];
                        case 1:
                            if (!(t = r.sent()))
                                throw f.create("delete-scope-not-found");
                            return [4, this.delete(e)];
                        case 2:
                            return r.sent(),
                            [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t
        }(_)
          , A = "messagingSenderId"
          , M = function() {
            function e(e) {
                var t = this;
                if (!e.options[A] || "string" != typeof e.options[A])
                    throw f.create("bad-sender-id");
                this.messagingSenderId = e.options[A],
                this.tokenDetailsModel = new S,
                this.vapidDetailsModel = new O,
                this.iidModel = new v,
                this.app = e,
                this.INTERNAL = {
                    delete: function() {
                        return t.delete()
                    }
                }
            }
            return e.prototype.getToken = function() {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var e, t, r, n, o;
                    return (0,
                    s.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            if ("denied" === (e = this.getNotificationPermission_()))
                                throw f.create("notifications-blocked");
                            return "granted" !== e ? [2, null] : [4, this.getSWRegistration_()];
                        case 1:
                            return t = i.sent(),
                            [4, this.getPublicVapidKey_()];
                        case 2:
                            return r = i.sent(),
                            [4, this.getPushSubscription(t, r)];
                        case 3:
                            return n = i.sent(),
                            [4, this.tokenDetailsModel.getTokenDetailsFromSWScope(t.scope)];
                        case 4:
                            return (o = i.sent()) ? [2, this.manageExistingToken(t, n, r, o)] : [2, this.getNewToken(t, n, r)]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.manageExistingToken = function(e, t, r, n) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var o;
                    return (0,
                    s.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return o = function(e, t, r) {
                                if (!r.vapidKey || !h(t.buffer, r.vapidKey.buffer))
                                    return !1;
                                var n = e.endpoint === r.endpoint
                                  , o = h(e.getKey("auth"), r.auth)
                                  , i = h(e.getKey("p256dh"), r.p256dh);
                                return n && o && i
                            }(t, r, n),
                            o ? Date.now() < n.createTime + 6048e5 ? [2, n.fcmToken] : [2, this.updateToken(e, t, r, n)] : [4, this.deleteTokenFromDB(n.fcmToken)];
                        case 1:
                            return i.sent(),
                            [2, this.getNewToken(e, t, r)]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.updateToken = function(e, t, r, n) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var o, i, a;
                    return (0,
                    s.__generator)(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return s.trys.push([0, 4, , 6]),
                            [4, this.iidModel.updateToken(this.messagingSenderId, n.fcmToken, n.fcmPushSet, t, r)];
                        case 1:
                            return o = s.sent(),
                            i = {
                                swScope: e.scope,
                                vapidKey: r,
                                fcmSenderId: this.messagingSenderId,
                                fcmToken: o,
                                fcmPushSet: n.fcmPushSet,
                                createTime: Date.now(),
                                endpoint: t.endpoint,
                                auth: t.getKey("auth"),
                                p256dh: t.getKey("p256dh")
                            },
                            [4, this.tokenDetailsModel.saveTokenDetails(i)];
                        case 2:
                            return s.sent(),
                            [4, this.vapidDetailsModel.saveVapidDetails(e.scope, r)];
                        case 3:
                            return s.sent(),
                            [2, o];
                        case 4:
                            return a = s.sent(),
                            [4, this.deleteToken(n.fcmToken)];
                        case 5:
                            throw s.sent(),
                            a;
                        case 6:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.getNewToken = function(e, t, r) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var n, o;
                    return (0,
                    s.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, this.iidModel.getToken(this.messagingSenderId, t, r)];
                        case 1:
                            return n = i.sent(),
                            o = {
                                swScope: e.scope,
                                vapidKey: r,
                                fcmSenderId: this.messagingSenderId,
                                fcmToken: n.token,
                                fcmPushSet: n.pushSet,
                                createTime: Date.now(),
                                endpoint: t.endpoint,
                                auth: t.getKey("auth"),
                                p256dh: t.getKey("p256dh")
                            },
                            [4, this.tokenDetailsModel.saveTokenDetails(o)];
                        case 2:
                            return i.sent(),
                            [4, this.vapidDetailsModel.saveVapidDetails(e.scope, r)];
                        case 3:
                            return i.sent(),
                            [2, n.token]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.deleteToken = function(e) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var t, r;
                    return (0,
                    s.__generator)(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, this.deleteTokenFromDB(e)];
                        case 1:
                            return n.sent(),
                            [4, this.getSWRegistration_()];
                        case 2:
                            return (t = n.sent()) ? [4, t.pushManager.getSubscription()] : [3, 4];
                        case 3:
                            if (r = n.sent())
                                return [2, r.unsubscribe()];
                            n.label = 4;
                        case 4:
                            return [2, !0]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.deleteTokenFromDB = function(e) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var t;
                    return (0,
                    s.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.tokenDetailsModel.deleteToken(e)];
                        case 1:
                            return t = r.sent(),
                            [4, this.iidModel.deleteToken(t.fcmSenderId, t.fcmToken, t.fcmPushSet)];
                        case 2:
                            return r.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.getPushSubscription = function(e, t) {
                return e.pushManager.getSubscription().then((function(r) {
                    return r || e.pushManager.subscribe({
                        userVisibleOnly: !0,
                        applicationServerKey: t
                    })
                }
                ))
            }
            ,
            e.prototype.requestPermission = function() {
                throw f.create("only-available-in-window")
            }
            ,
            e.prototype.useServiceWorker = function(e) {
                throw f.create("only-available-in-window")
            }
            ,
            e.prototype.usePublicVapidKey = function(e) {
                throw f.create("only-available-in-window")
            }
            ,
            e.prototype.onMessage = function(e, t, r) {
                throw f.create("only-available-in-window")
            }
            ,
            e.prototype.onTokenRefresh = function(e, t, r) {
                throw f.create("only-available-in-window")
            }
            ,
            e.prototype.setBackgroundMessageHandler = function(e) {
                throw f.create("only-available-in-sw")
            }
            ,
            e.prototype.delete = function() {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    s.__generator)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, Promise.all([this.tokenDetailsModel.closeDatabase(), this.vapidDetailsModel.closeDatabase()])];
                        case 1:
                            return e.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.getNotificationPermission_ = function() {
                return Notification.permission
            }
            ,
            e.prototype.getTokenDetailsModel = function() {
                return this.tokenDetailsModel
            }
            ,
            e.prototype.getVapidDetailsModel = function() {
                return this.vapidDetailsModel
            }
            ,
            e.prototype.getIidModel = function() {
                return this.iidModel
            }
            ,
            e
        }();
        var E = "FCM_MSG"
          , P = function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.bgMessageHandler = null,
                self.addEventListener("push", (function(e) {
                    r.onPush(e)
                }
                )),
                self.addEventListener("pushsubscriptionchange", (function(e) {
                    r.onSubChange(e)
                }
                )),
                self.addEventListener("notificationclick", (function(e) {
                    r.onNotificationClick(e)
                }
                )),
                r
            }
            return (0,
            s.__extends)(t, e),
            t.prototype.onPush = function(e) {
                e.waitUntil(this.onPush_(e))
            }
            ,
            t.prototype.onSubChange = function(e) {
                e.waitUntil(this.onSubChange_(e))
            }
            ,
            t.prototype.onNotificationClick = function(e) {
                e.waitUntil(this.onNotificationClick_(e))
            }
            ,
            t.prototype.onPush_ = function(e) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var t, r, n, o, i, a;
                    return (0,
                    s.__generator)(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            if (!e.data)
                                return [2];
                            try {
                                t = e.data.json()
                            } catch (e) {
                                return [2]
                            }
                            return [4, this.hasVisibleClients_()];
                        case 1:
                            return s.sent() ? [2, this.sendMessageToWindowClients_(t)] : (r = this.getNotificationData_(t)) ? (n = r.title || "",
                            [4, this.getSWRegistration_()]) : [3, 3];
                        case 2:
                            return o = s.sent(),
                            i = r.actions,
                            a = Notification.maxActions,
                            i && a && i.length > a && console.warn("This browser only supports " + a + " actions.The remaining actions will not be displayed."),
                            [2, o.showNotification(n, r)];
                        case 3:
                            return this.bgMessageHandler ? [4, this.bgMessageHandler(t)] : [3, 5];
                        case 4:
                            return s.sent(),
                            [2];
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.onSubChange_ = function(e) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var e, t, r, n;
                    return (0,
                    s.__generator)(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]),
                            [4, this.getSWRegistration_()];
                        case 1:
                            return e = o.sent(),
                            [3, 3];
                        case 2:
                            throw t = o.sent(),
                            f.create("unable-to-resubscribe", {
                                errorInfo: t
                            });
                        case 3:
                            return o.trys.push([3, 5, , 8]),
                            [4, e.pushManager.getSubscription()];
                        case 4:
                            return o.sent(),
                            [3, 8];
                        case 5:
                            return r = o.sent(),
                            [4, this.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope)];
                        case 6:
                            if (!(n = o.sent()))
                                throw r;
                            return [4, this.deleteToken(n.fcmToken)];
                        case 7:
                            throw o.sent(),
                            r;
                        case 8:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.onNotificationClick_ = function(e) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var t, r, o, i;
                    return (0,
                    s.__generator)(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return e.notification && e.notification.data && e.notification.data[E] ? e.action ? [2] : (e.stopImmediatePropagation(),
                            e.notification.close(),
                            (t = e.notification.data[E]).notification && (r = t.fcmOptions && t.fcmOptions.link || t.notification.click_action) ? [4, this.getWindowClient_(r)] : [2]) : [2];
                        case 1:
                            return (o = a.sent()) ? [3, 3] : [4, self.clients.openWindow(r)];
                        case 2:
                            return o = a.sent(),
                            [3, 5];
                        case 3:
                            return [4, o.focus()];
                        case 4:
                            o = a.sent(),
                            a.label = 5;
                        case 5:
                            return o ? (delete t.notification,
                            delete t.fcmOptions,
                            i = N(n.NOTIFICATION_CLICKED, t),
                            [2, this.attemptToMessageClient_(o, i)]) : [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.getNotificationData_ = function(e) {
                var t;
                if (e && "object" == typeof e.notification) {
                    var r = (0,
                    s.__assign)({}, e.notification);
                    return r.data = (0,
                    s.__assign)({}, e.notification.data, ((t = {})[E] = e,
                    t)),
                    r
                }
            }
            ,
            t.prototype.setBackgroundMessageHandler = function(e) {
                if (!e || "function" != typeof e)
                    throw f.create("bg-handler-function-expected");
                this.bgMessageHandler = e
            }
            ,
            t.prototype.getWindowClient_ = function(e) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var t, r, n, o;
                    return (0,
                    s.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return t = new URL(e,self.location.href).href,
                            [4, T()];
                        case 1:
                            for (r = i.sent(),
                            n = null,
                            o = 0; o < r.length; o++)
                                if (new URL(r[o].url,self.location.href).href === t) {
                                    n = r[o];
                                    break
                                }
                            return [2, n]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.attemptToMessageClient_ = function(e, t) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    s.__generator)(this, (function(r) {
                        if (!e)
                            throw f.create("no-window-client-to-msg");
                        return e.postMessage(t),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.hasVisibleClients_ = function() {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    s.__generator)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, T()];
                        case 1:
                            return [2, e.sent().some((function(e) {
                                return "visible" === e.visibilityState && !e.url.startsWith("chrome-extension://")
                            }
                            ))]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.sendMessageToWindowClients_ = function(e) {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var t, r, o = this;
                    return (0,
                    s.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, T()];
                        case 1:
                            return t = i.sent(),
                            r = N(n.PUSH_MSG_RECEIVED, e),
                            [4, Promise.all(t.map((function(e) {
                                return o.attemptToMessageClient_(e, r)
                            }
                            )))];
                        case 2:
                            return i.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.getSWRegistration_ = function() {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    s.__generator)(this, (function(e) {
                        return [2, self.registration]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.getPublicVapidKey_ = function() {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var e, t;
                    return (0,
                    s.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.getSWRegistration_()];
                        case 1:
                            if (!(e = r.sent()))
                                throw f.create("sw-registration-expected");
                            return [4, this.getVapidDetailsModel().getVapidFromSWScope(e.scope)];
                        case 2:
                            return null == (t = r.sent()) ? [2, l] : [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t
        }(M);
        function T() {
            return self.clients.matchAll({
                type: "window",
                includeUncontrolled: !0
            })
        }
        function N(e, r) {
            var n;
            return (n = {})[t.TYPE_OF_MSG] = e,
            n[t.DATA] = r,
            n
        }
        var I = function(e) {
            function r(t) {
                var r = e.call(this, t) || this;
                return r.registrationToUse = null,
                r.publicVapidKeyToUse = null,
                r.manifestCheckPromise = null,
                r.messageObserver = null,
                r.tokenRefreshObserver = null,
                r.onMessageInternal = (0,
                c.ne)((function(e) {
                    r.messageObserver = e
                }
                )),
                r.onTokenRefreshInternal = (0,
                c.ne)((function(e) {
                    r.tokenRefreshObserver = e
                }
                )),
                r.setupSWMessageListener_(),
                r
            }
            return (0,
            s.__extends)(r, e),
            r.prototype.getToken = function() {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    s.__generator)(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return this.manifestCheckPromise || (this.manifestCheckPromise = function() {
                                return (0,
                                s.__awaiter)(this, void 0, void 0, (function() {
                                    var e, t;
                                    return (0,
                                    s.__generator)(this, (function(r) {
                                        switch (r.label) {
                                        case 0:
                                            if (!(e = document.querySelector('link[rel="manifest"]')))
                                                return [2];
                                            r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 4, , 5]),
                                            [4, fetch(e.href)];
                                        case 2:
                                            return [4, r.sent().json()];
                                        case 3:
                                            return t = r.sent(),
                                            [3, 5];
                                        case 4:
                                            return r.sent(),
                                            [2];
                                        case 5:
                                            if (!t || !t.gcm_sender_id)
                                                return [2];
                                            if ("103953800507" !== t.gcm_sender_id)
                                                throw f.create("incorrect-gcm-sender-id");
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }()),
                            [4, this.manifestCheckPromise];
                        case 1:
                            return t.sent(),
                            [2, e.prototype.getToken.call(this)]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            r.prototype.requestPermission = function() {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    var e;
                    return (0,
                    s.__generator)(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return "granted" === this.getNotificationPermission_() ? [2] : [4, Notification.requestPermission()];
                        case 1:
                            if ("granted" === (e = t.sent()))
                                return [2];
                            throw "denied" === e ? f.create("permission-blocked") : f.create("permission-default")
                        }
                    }
                    ))
                }
                ))
            }
            ,
            r.prototype.useServiceWorker = function(e) {
                if (!(e instanceof ServiceWorkerRegistration))
                    throw f.create("sw-registration-expected");
                if (null != this.registrationToUse)
                    throw f.create("use-sw-before-get-token");
                this.registrationToUse = e
            }
            ,
            r.prototype.usePublicVapidKey = function(e) {
                if ("string" != typeof e)
                    throw f.create("invalid-public-vapid-key");
                if (null != this.publicVapidKeyToUse)
                    throw f.create("use-public-key-before-get-token");
                var t = b(e);
                if (65 !== t.length)
                    throw f.create("public-vapid-key-decryption-failed");
                this.publicVapidKeyToUse = t
            }
            ,
            r.prototype.onMessage = function(e, t, r) {
                return "function" == typeof e ? this.onMessageInternal(e, t, r) : this.onMessageInternal(e)
            }
            ,
            r.prototype.onTokenRefresh = function(e, t, r) {
                return "function" == typeof e ? this.onTokenRefreshInternal(e, t, r) : this.onTokenRefreshInternal(e)
            }
            ,
            r.prototype.waitForRegistrationToActivate_ = function(e) {
                var t = e.installing || e.waiting || e.active;
                return new Promise((function(r, n) {
                    if (t)
                        if ("activated" !== t.state)
                            if ("redundant" !== t.state) {
                                var o = function() {
                                    if ("activated" === t.state)
                                        r(e);
                                    else {
                                        if ("redundant" !== t.state)
                                            return;
                                        n(f.create("sw-reg-redundant"))
                                    }
                                    t.removeEventListener("statechange", o)
                                };
                                t.addEventListener("statechange", o)
                            } else
                                n(f.create("sw-reg-redundant"));
                        else
                            r(e);
                    else
                        n(f.create("no-sw-in-reg"))
                }
                ))
            }
            ,
            r.prototype.getSWRegistration_ = function() {
                var e = this;
                return this.registrationToUse ? this.waitForRegistrationToActivate_(this.registrationToUse) : (this.registrationToUse = null,
                navigator.serviceWorker.register("/firebase-messaging-sw.js", {
                    scope: "/firebase-cloud-messaging-push-scope"
                }).catch((function(e) {
                    throw f.create("failed-serviceworker-registration", {
                        browserErrorMessage: e.message
                    })
                }
                )).then((function(t) {
                    return e.waitForRegistrationToActivate_(t).then((function() {
                        return e.registrationToUse = t,
                        t.update(),
                        t
                    }
                    ))
                }
                )))
            }
            ,
            r.prototype.getPublicVapidKey_ = function() {
                return (0,
                s.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    s.__generator)(this, (function(e) {
                        return this.publicVapidKeyToUse ? [2, this.publicVapidKeyToUse] : [2, l]
                    }
                    ))
                }
                ))
            }
            ,
            r.prototype.setupSWMessageListener_ = function() {
                var e = this;
                navigator.serviceWorker.addEventListener("message", (function(r) {
                    if (r.data && r.data[t.TYPE_OF_MSG]) {
                        var o = r.data;
                        switch (o[t.TYPE_OF_MSG]) {
                        case n.PUSH_MSG_RECEIVED:
                        case n.NOTIFICATION_CLICKED:
                            var i = o[t.DATA];
                            e.messageObserver && e.messageObserver.next(i)
                        }
                    }
                }
                ), !1)
            }
            ,
            r
        }(M);
        function C() {
            return self && "ServiceWorkerGlobalScope"in self ? "PushManager"in self && "Notification"in self && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey") : navigator.cookieEnabled && "serviceWorker"in navigator && "PushManager"in window && "Notification"in window && "fetch"in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
        }
        !function(e) {
            var t = {
                isSupported: C
            };
            e.INTERNAL.registerService("messaging", (function(e) {
                if (!C())
                    throw f.create("unsupported-browser");
                return self && "ServiceWorkerGlobalScope"in self ? new P(e) : new I(e)
            }
            ), t)
        }(a.ZP);
        var x, j = function() {
            return j = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ,
            j.apply(this, arguments)
        }, F = "https://", R = {
            debug: !0,
            isTest: !0,
            resourceToken: "28PnoSirQ8aG-b4df7d12d765c95e",
            apiServerHost: "pxl.my.club",
            swPath: "/assets/service-worker.js",
            vapidKey: "BDR6md8JDoD4qUMGtjAekvPynm4E-nSA55bEjEreIzVWUOOhNJrnOzo0t1d8zmNn9WNxbvSvD12ZsQUVeVuGvHc",
            firebase: {
                apiKey: "AIzaSyA2MbbPoIaq4MRvndY3fOFMl0KUD5_20Ks",
                projectId: "myclub-7e228",
                messagingSenderId: "72699857219"
            },
            browsers: {
                Chrome: {
                    isFirebase: !0
                },
                Firefox: {
                    isFirebase: !0
                },
                Opera: {
                    isFirebase: !0
                },
                "Yandex Browser": {
                    isFirebase: !0
                },
                "Samsung Internet for Android": {
                    isFirebase: !0
                },
                Safari: {
                    websitePushID: "web.my.club",
                    websitePushAPI: "https://pxl.my.club/ap"
                }
            },
            expirationSWChrome: "900"
        }, D = {
            randomPrefix: "Shahkoop2aeleiv8Ierief_",
            serverPrefix: F,
            serverSavePath: "/pixel?_push_pix=/push/subscription/save",
            serverDeletePath: "/pixel?_push_pix=/push/subscription/delete",
            serverUpdatePath: "/pixel?_push_pix=/push/subscription/update",
            serverCookiePath: "/pixel?_push_pix=/set_cookie_only",
            serverPushContentPath: "/pixel?_push_pix=/push/content/get",
            serverURL: (F + R.apiServerHost).replace(/\/+$/, ""),
            swPath: "/assets/service-worker.js",
            isTest: !1,
            cookieID: "",
            browser: void 0,
            firebase: {
                authSubdomain: "firebaseapp.com",
                bucketSubdomain: "appspot.com",
                dbSubdomain: "firebaseio.com"
            },
            allFirebase: void 0
        }, B = j(j(j({}, D), R), {
            firebase: j(j({}, D.firebase), R.firebase),
            expirationSWChrome: parseInt(R.expirationSWChrome) || 0
        }), L = r(564), W = r.n(L);
        r(206),
        r(483);
        !function(e) {
            e.subscribe = "subscribe",
            e.updateSubscription = "update_subscription"
        }(x || (x = {}));
        var V = Object.prototype.hasOwnProperty;
        var U = function(e) {
            return function() {
                for (var t = [], r = 0; r < arguments.length; r++)
                    t[r] = arguments[r];
                e && console.info.apply(null, t)
            }
        }(B.debug);
        function z(e) {
            return e.split(" ").join("")
        }
        function K(e) {
            if (e.allFirebase)
                return !0;
            var t = e.browser;
            if (t) {
                var r = e.browsers[t];
                return !!function(e, t) {
                    return "object" == typeof e && V.call(e, t)
                }(r, "isFirebase") && r.isFirebase
            }
            throw new Error("Invalid config")
        }
        var q = function(e, t, r, n) {
            function o(e) {
                return e instanceof r ? e : new r((function(t) {
                    t(e)
                }
                ))
            }
            return new (r || (r = Promise))((function(r, i) {
                function a(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    e.done ? r(e.value) : o(e.value).then(a, s)
                }
                c((n = n.apply(e, t || [])).next())
            }
            ))
        }
          , G = function(e, t) {
            var r, n, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(e) {
                return function(t) {
                    return c([e, t])
                }
            }
            function c(s) {
                if (r)
                    throw new TypeError("Generator is already executing.");
                for (; i && (i = 0,
                s[0] && (a = 0)),
                a; )
                    try {
                        if (r = 1,
                        n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n),
                        0) : n.next) && !(o = o.call(n, s[1])).done)
                            return o;
                        switch (n = 0,
                        o && (s = [2 & s[0], o.value]),
                        s[0]) {
                        case 0:
                        case 1:
                            o = s;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: s[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            n = s[1],
                            s = [0];
                            continue;
                        case 7:
                            s = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(o = a.trys,
                            (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                a.label = s[1];
                                break
                            }
                            if (6 === s[0] && a.label < o[1]) {
                                a.label = o[1],
                                o = s;
                                break
                            }
                            if (o && a.label < o[2]) {
                                a.label = o[2],
                                a.ops.push(s);
                                break
                            }
                            o[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        s = t.call(e, a)
                    } catch (e) {
                        s = [6, e],
                        n = 0
                    } finally {
                        r = o = 0
                    }
                if (5 & s[0])
                    throw s[1];
                return {
                    value: s[0] ? s[1] : void 0,
                    done: !0
                }
            }
        };
        !function(e) {
            var t = i()(B);
            function r(r) {
                U("SW Click: ", r),
                "user_visible_auto_notification" === r.notification.tag || !r.notification.data && "" === r.action || (r.notification.close(),
                r.waitUntil(e.clients.matchAll({
                    type: "window"
                }).then((function() {
                    var n = r.notification.data;
                    if ("" !== r.action && "string" == typeof r.action && (n = r.action),
                    -1 === n.indexOf("?provider=") && (n = K(t) ? "".concat(n, "?provider=").concat(z(t.browser || ""), "Firebase") : "".concat(n, "?provider=").concat(z(t.browser || ""))),
                    e.clients.openWindow)
                        return e.clients.openWindow(n)
                }
                ))))
            }
            try {
                if (U("sw: start install handlers"),
                e.addEventListener("install", (function(t) {
                    e.skipWaiting()
                }
                )),
                t.browser = function(e) {
                    return new (W())(e,!0).query.browser
                }(e.location.href),
                !t.browser)
                    throw new Error("No browser submitted");
                if (K(t))
                    U("sw: should use firebase"),
                    e.addEventListener("push", (function(e) {
                        var t = e.data ? JSON.parse(e.data.json().data.hub_link).open : ""
                          , r = e.data ? JSON.parse(e.data.json().data.hub_link).ack : "";
                        fetch(t, {
                            method: "get",
                            mode: "no-cors",
                            credentials: "include"
                        }).catch((function(e) {
                            return U("Can't send open action ", e)
                        }
                        )),
                        fetch(r, {
                            method: "get",
                            mode: "no-cors",
                            credentials: "include"
                        }).catch((function(e) {
                            return U("Can't send deliv action ", e)
                        }
                        ))
                    }
                    )),
                    a.ZP.initializeApp({
                        apiKey: t.firebase.apiKey,
                        projectId: t.firebase.projectId,
                        messagingSenderId: t.firebase.messagingSenderId,
                        storageBucket: [t.firebase.projectId, t.firebase.bucketSubdomain].join("."),
                        authDomain: [t.firebase.projectId, t.firebase.authSubdomain].join("."),
                        databaseURL: [t.firebase.projectId, t.firebase.dbSubdomain].join(".")
                    }),
                    a.ZP.messaging().setBackgroundMessageHandler((function(t) {
                        U("push handler firebase"),
                        U("SW Received push: "),
                        U(t);
                        var r = t.data.title
                          , n = {
                            body: t.data.message,
                            icon: t.data.icon,
                            image: t.data.image,
                            click_action: t.data.action,
                            actions: t.data.actions
                        };
                        return e.registration.showNotification(r, n)
                    }
                    )),
                    e.addEventListener("notificationclick", r);
                else
                    "Safari" === t.browser ? (U("sw: setup safari ios handlers"),
                    e.addEventListener("push", (function(t) {
                        var r, n = this;
                        U("push safari ios handler");
                        var o = null === (r = t.data) || void 0 === r ? void 0 : r.json();
                        if (o) {
                            var i = o.title
                              , a = o.body
                              , s = o.icon
                              , c = o.tag
                              , u = o.data
                              , f = JSON.parse(u)
                              , l = f.hub_link.open
                              , d = f.hub_link.ack;
                            U("event data: ", o),
                            t.waitUntil(q(n, void 0, void 0, (function() {
                                var t, r;
                                return G(this, (function(n) {
                                    switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]),
                                        [4, fetch(l, {
                                            method: "get",
                                            mode: "no-cors",
                                            credentials: "include"
                                        })];
                                    case 1:
                                        return n.sent(),
                                        [3, 3];
                                    case 2:
                                        return t = n.sent(),
                                        U("Can't send deliv action ", t),
                                        [3, 3];
                                    case 3:
                                        return n.trys.push([3, 5, , 6]),
                                        [4, fetch(d, {
                                            method: "get",
                                            mode: "no-cors",
                                            credentials: "include"
                                        })];
                                    case 4:
                                        return n.sent(),
                                        [3, 6];
                                    case 5:
                                        return r = n.sent(),
                                        U("Can't send deliv action ", r),
                                        [3, 6];
                                    case 6:
                                        return [4, e.registration.showNotification(i, {
                                            body: a,
                                            icon: s,
                                            tag: c,
                                            data: f
                                        })];
                                    case 7:
                                        return n.sent(),
                                        [2]
                                    }
                                }
                                ))
                            }
                            )))
                        }
                    }
                    )),
                    e.addEventListener("notificationclick", (function(t) {
                        return q(this, void 0, void 0, (function() {
                            var r = this;
                            return G(this, (function(n) {
                                return U("SW Click: ", t),
                                t.notification.close(),
                                t.waitUntil(q(r, void 0, void 0, (function() {
                                    var r;
                                    return G(this, (function(n) {
                                        switch (n.label) {
                                        case 0:
                                            return r = t.notification.data.url,
                                            [4, e.clients.matchAll({
                                                type: "window"
                                            })];
                                        case 1:
                                            return n.sent(),
                                            r ? [4, e.clients.openWindow(r)] : [3, 3];
                                        case 2:
                                            n.sent(),
                                            n.label = 3;
                                        case 3:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ))),
                                [2]
                            }
                            ))
                        }
                        ))
                    }
                    ))) : (U("sw: setup default handlers"),
                    e.addEventListener("push", (function(r) {
                        U("push basic handler"),
                        U("SW Received push: "),
                        U(r),
                        r.waitUntil(e.registration.pushManager.getSubscription().then((function(r) {
                            return U("fetch request"),
                            fetch(t.serverURL + t.serverPushContentPath, {
                                method: "post",
                                credentials: "include",
                                body: JSON.stringify({
                                    provider: z(t.browser || ""),
                                    endpoint: (null == r ? void 0 : r.endpoint) || "",
                                    resource_token: t.resourceToken
                                })
                            }).then((function(t) {
                                if (U("fetch response: ", t),
                                200 !== t.status)
                                    throw new Error("Error on getting push content: ".concat(t.status));
                                return t.json().then((function(t) {
                                    if (U("fetch parse json: ", t),
                                    t.error)
                                        throw new Error("The server returns an error: ".concat(t.error));
                                    var r = t.data.title
                                      , n = t.data.body
                                      , o = t.data.icon
                                      , i = t.data.tag
                                      , a = t.data.data;
                                    return e.registration.showNotification(r, {
                                        body: n,
                                        icon: o,
                                        tag: i,
                                        data: a
                                    })
                                }
                                ))
                            }
                            )).catch((function(e) {
                                console.error("Unable to receive data from server", e)
                            }
                            ))
                        }
                        )))
                    }
                    )),
                    e.addEventListener("notificationclick", r))
            } catch (e) {
                U("SW setup error", e)
            }
        }(self)
    }()
}();
