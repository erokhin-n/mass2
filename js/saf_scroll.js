! function () {"use strict"; function o () {var o = window, t = document; if (! ("scrollBehavior" в t.documentElement.style &&! 0! == o .__ forceSmoothScrollPolyfill __)) {var l , e = o.HTMLElement || o.Element, r = 468, i = {scroll: o.scroll || o.scrollTo, scrollBy: o.scrollBy, elementScroll: e.prototype.scroll || n, scrollIntoView: e .prototype.scrollIntoView}, s = o.performance && o.performance.now? o.performance.now.bind (o.performance): Date.now, c = (l = o.navigator.userAgent, new RegExp (["MSIE "," Трезубец / "," Край / "]. Join (" | ")). Test (l)? 1: 0); o.scroll = o.scrollTo = function () {void 0! == arguments [ 0] && (! 0! == f (arguments [0])? H.call (o, t.body, void 0! == arguments [0] .left? ~~ arguments [0] .left: o. scrollX || o.pageXOffset, void 0! == arguments [0] .top? ~~ arguments [0] .top: o.scrollY || o.pageYOffset): i.scroll.call (o, void 0! = = аргументы [0].left? arguments [0] .left: "объект"! = typeof arguments [0]? arguments [0]: o.scrollX || o.pageXOffset, void 0! == arguments [0] .top? arguments [0] .top: void 0! == arguments [1]? arguments [1]: o.scrollY || o.pageYOffset))}, o.scrollBy = function () {void 0! == arguments [0] && (f (arguments [0])? i.scrollBy.call (o, void 0! == arguments [0] .left? arguments [0] .left: "объект"! = typeof arguments [0]? arguments [0]: 0, void 0! == arguments [0] .top? Arguments [0] .top: void 0! == arguments [1]? Arguments [1]: 0): h.call (o, t.body, ~ ~ arguments [0] .left + (o.scrollX || o.pageXOffset), ~~ arguments [0] .top + (o.scrollY || o.pageYOffset)))}, e.prototype.scroll = e.prototype. scrollTo = function () {if (void 0! == arguments [0]) if (! 0! == f (arguments [0])) {var o = arguments [0] .left, t = arguments [0] .top; h.call (this, this, void 0 === o? this.scrollLeft: ~~ o, void 0 === t? this.scrollTop: ~~ t)} else {if ("число"== typeof arguments [0] && void 0 === arguments [1]) throw new SyntaxError («Значение не может быть преобразовано»); ielementScroll.call (this, void 0! == arguments [0] .left? ~~ arguments [0] .left: "объект"! = typeof arguments [0]? ~~ arguments [0]: this.scrollLeft, void 0! == arguments [0] .top? ~~ arguments [0]. top: void 0! == arguments [1]? ~~ arguments [1]: this.scrollTop)}}, e.prototype.scrollBy = function () {void 0! == arguments [0] && (! 0! == f (arguments [0])? this.scroll ({left: ~~ arguments [0] .left + this.scrollLeft, top: ~~ arguments [0] .top + this.scrollTop, behavior: arguments [0] ] .behavior}): ielementScroll.call (this, void 0! == arguments [0] .left? ~~ arguments [0] .left + this.scrollLeft: ~~ arguments [0] + this.scrollLeft, void 0! == arguments [0] .top? ~~ arguments [0] .top + this.scrollTop: ~~ arguments [1] + this.scrollTop))}, e.prototype.scrollIntoView = function () {если (! 0!== f (arguments [0])) {var l = function (o) {for (; o! == t.body &&! 1 === (e = p (l = o, "Y") && a (l , "Y"), r = p (l, "X") && a (l, "X"), e || r);) o = o.parentNode || o.host; var l, e, r; return o} (this), e = l.getBoundingClientRect (), r = this.getBoundingClientRect (); l! == t.body? (h.call (this, l, l.scrollLeft + r.left-e. left, l.scrollTop + r.top-e.top), "fixed"! == o.getComputedStyle (l) .position && o.scrollBy ({left: e.left, top: e.top, поведение: "smooth" })): o.scrollBy ({left: r.left, top: r.top, behavior: "smooth"})} else i.scrollIntoView.call (this, void 0 === arguments [0] || arguments [0])}} function n (o, t) {this.scrollLeft = o, this.scrollTop = t} function f (o) {if (null === o || "объект"! = Typeof o || void 0 === o.behavior || "auto" === o.behavior || "Instant" === o.behavior) return! 0; if ("object" == typeof o && "smooth" === o.behavior) return! 1; throw new TypeError ("член поведения ScrollOptions" + o.behavior + "не является допустимым значением для перечисления ScrollBehavior.")} function p (o, t) { return "Y" === t? o.clientHeight + c <o.scrollHeight: "X" === t? o.clientWidth + c <o.scrollWidth: void 0} function a (t, l) {var e = o.getComputedStyle (t, null) ["overflow" + l]; вернуть "auto" === e || "scroll" === e} function d (t) {var l, e, i, c, n = (s () - t.startTime) / r; c = n = n> 1? 1: n, l = 0,5 * (1-Math.cos (Math.PI * c)), e = t. startX + (tx-t.startX) * l, i = t.startY + (ty-t.startY) * l, t.method.call (t.scrollable, e, i), e === tx && i === ty || o.requestAnimationFrame (d.bind (o, t))} function h (l, e, r) {var c, f, p, a, h = s (); l === t.body? ( c = o, f = o.scrollX || o.pageXOffset, p = o.scrollY || o.pageYOffset, a = i.scroll) :( c = l, f = l.scrollLeft, p = l.scrollTop, а = п),d ({scrollable: c, method: a, startTime: h, startX: f, startY: p, x: e, y: r})}} "object" == typeof exports && "undefined"! = typeof module? module .exports = {polyfill: o}: o ()} ();