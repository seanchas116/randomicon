import * as seedrandom from "seedrandom"
import * as tinycolor from "tinycolor2"

const size = 512

function rngRange(rng: () => number, min: number, max: number) {
  return min + (max - min) * rng()
}

class IconGenerator {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D

  constructor() {
    this.canvas = document.createElement("canvas")
    this.canvas.width = this.canvas.height = size
    this.context = this.canvas.getContext("2d")
    //this.context.globalCompositeOperation = "color"
  }

  generate(seed: string) {
    const {context} = this
    const rng = seedrandom(seed)
    for (let i = 0; i < 5; ++i) {
      const x = rngRange(rng, -0.25, 1.25) * size
      const y = rngRange(rng, -0.25, 1.25) * size
      const radius = size / 2 * (1 + rng())
      const color = tinycolor({h: rng() * 360, s: 1, v: 1, a: 0.5}).toRgbString()
      context.fillStyle = color
      context.beginPath()
      context.arc(x, y, radius, 0, 2 * Math.PI)
      context.fill()
    }
  }
}

for (const name of ["poe", "nyan", "hoge"]) {
  const generator = new IconGenerator()
  generator.generate(name)
  document.body.appendChild(generator.canvas)
}
