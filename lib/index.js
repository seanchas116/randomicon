"use strict";
var seedrandom = require("seedrandom");
var tinycolor = require("tinycolor2");
function rngRange(rng, min, max) {
    return min + (max - min) * rng();
}
var RandomIcon = (function () {
    function RandomIcon(opts) {
        if (opts === void 0) { opts = {}; }
        this.opts = opts;
        this.size = this.opts.size || 512;
        this.saturation = this.opts.saturation || 1;
        this.alpha = this.opts.alpha || 0.75;
        this.repeat = this.opts.repeat || 50;
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.canvas.height = this.size;
        this.context = this.canvas.getContext("2d");
    }
    RandomIcon.prototype.generate = function (seed) {
        var _a = this, context = _a.context, size = _a.size;
        var rng = seedrandom(seed);
        context.clearRect(0, 0, size, size);
        for (var i = 0; i < this.repeat; ++i) {
            var x = rngRange(rng, -0.25, 1.25) * size;
            var y = rngRange(rng, -0.25, 1.25) * size;
            var radius = size / 2 * (1 + rng());
            var color = tinycolor({ h: rng() * 360, s: this.saturation, v: 1, a: this.alpha }).toRgbString();
            context.fillStyle = color;
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI);
            context.fill();
        }
    };
    RandomIcon.prototype.toDataURL = function () {
        return this.canvas.toDataURL();
    };
    return RandomIcon;
}());
module.exports = RandomIcon;
