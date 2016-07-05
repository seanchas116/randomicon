"use strict";
var IconGenerator = require("./index");
for (var _i = 0, _a = ["poe", "nyan", "hoge", "seanchas116"]; _i < _a.length; _i++) {
    var name_1 = _a[_i];
    var generator = new IconGenerator();
    generator.generate(name_1);
    document.body.appendChild(generator.canvas);
}
