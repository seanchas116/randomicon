import IconGenerator = require("./index")

for (const name of ["poe", "nyan", "hoge", "seanchas116"]) {
  const generator = new IconGenerator()
  generator.generate(name)
  document.body.appendChild(generator.canvas)
}
