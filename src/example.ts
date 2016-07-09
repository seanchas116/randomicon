import IconGenerator = require("./index")

for (const name of ["poe", "nyan", "hoge", "seanchas116"]) {
  const generator = new IconGenerator()
  generator.generate(name)
  const img = document.createElement("img")
  img.src = generator.toDataURL()
  document.body.appendChild(img)
}
