(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
    369: function (e, t, o) {
    }, 382: function (e, t, o) {
        "use strict";
        var r = o(369);
        o.n(r).a
    }, 400: function (e, t, o) {
        "use strict";
        o.r(t);
        var r = {
            name: "blogFooter", computed: {
                footer: function () {
                    return this.$themeConfig.footer
                }
            }
        }, n = (o(382), o(0)), s = Object(n.a)(r, (function () {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("div", {staticClass: "blog-footer"}, [e.footer.beian ? o("div", {staticClass: "beian"}, [o("a", {
                attrs: {
                    href: e.footer.beian.link,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [e._v("\n      " + e._s(e.footer.beian.context) + "\n    ")])]) : e._e(), e._v(" "), o("p", [e._v("Copyright © " + e._s(e.footer.createYear) + "-" + e._s(e.footer.currentYear || "Present") + " " + e._s(e.$themeConfig.author) + " | Theme By Zero")]), e._v(" "), o("div", {
                staticClass: "support",
                domProps: {innerHTML: e._s(e.footer.support)}
            })])
        }), [], !1, null, "3b91efad", null);
        t.default = s.exports
    }
}]);