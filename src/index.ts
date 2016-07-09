import seedrandom = require("seedrandom")
import tinycolor = require("tinycolor2")

function rngRange(rng: () => number, min: number, max: number) {
  return min + (max - min) * rng()
}

class IconGenerator {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  size = this.opts.size || 512

  constructor(protected opts: {
    size?: number
  } = {}) {
    this.canvas = document.createElement("canvas")
    this.canvas.width = this.canvas.height = this.size
    this.context = this.canvas.getContext("2d")
  }

  generate(seed: string) {
    const {context, size} = this
    const rng = seedrandom(seed)
    for (let i = 0; i < 5; ++i) {
      const x = rngRange(rng, -0.25, 1.25) * size
      const y = rngRange(rng, -0.25, 1.25) * size
      const radius = size / 2 * (1 + rng())
      const color = tinycolor({h: rng() * 360, s: 1, v: 1, a: 0.75}).toRgbString()
      context.fillStyle = color
      context.beginPath()
      context.arc(x, y, radius, 0, 2 * Math.PI)
      context.fill()
    }
  }

  toDataURL() {
    return this.canvas.toDataURL()
  }
}

export = IconGenerator
