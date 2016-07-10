"use strict";
var RandomIcon = require("./index");
var generator = new RandomIcon();
for (var _i = 0, _a = ["poe", "nyan", "hoge", "seanchas116"]; _i < _a.length; _i++) {
    var name_1 = _a[_i];
    generator.generate(name_1);
    var img = document.createElement("img");
    img.src = generator.toDataURL();
    document.body.appendChild(img);
}
