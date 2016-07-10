import IconGenerator = require("./index")

const generator = new IconGenerator()

for (const name of ["poe", "nyan", "hoge", "seanchas116"]) {
  generator.generate(name)
  const img = document.createElement("img")
  img.src = generator.toDataURL()
  document.body.appendChild(img)
}
