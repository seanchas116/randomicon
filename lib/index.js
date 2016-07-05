"use strict";
var seedrandom = require("seedrandom");
var tinycolor = require("tinycolor2");
function rngRange(rng, min, max) {
    return min + (max - min) * rng();
}
var IconGenerator = (function () {
    function IconGenerator(opts) {
        if (opts === void 0) { opts = {}; }
        this.opts = opts;
        this.size = this.opts.size || 512;
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.canvas.height = this.size;
        this.context = this.canvas.getContext("2d");
    }
    IconGenerator.prototype.generate = function (seed) {
        var _a = this, context = _a.context, size = _a.size;
        var rng = seedrandom(seed);
        for (var i = 0; i < 5; ++i) {
            var x = rngRange(rng, -0.25, 1.25) * size;
            var y = rngRange(rng, -0.25, 1.25) * size;
            var radius = size / 2 * (1 + rng());
            var color = tinycolor({ h: rng() * 360, s: 1, v: 1, a: 0.75 }).toRgbString();
            context.fillStyle = color;
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI);
            context.fill();
        }
    };
    return IconGenerator;
}());
module.exports = IconGenerator;
