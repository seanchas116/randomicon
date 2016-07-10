import seedrandom = require("seedrandom")
import tinycolor = require("tinycolor2")

function rngRange(rng: () => number, min: number, max: number) {
  return min + (max - min) * rng()
}

class RandomIcon {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  size = this.opts.size || 512
  saturation = this.opts.saturation || 1
  alpha = this.opts.alpha || 0.75
  repeat = this.opts.repeat || 50

  constructor(protected opts: {
    size?: number,
    saturation?: number,
    alpha?: number,
    repeat?: number
  } = {}) {
    this.canvas = document.createElement("canvas")
    this.canvas.width = this.canvas.height = this.size
    this.context = this.canvas.getContext("2d")
  }

  generate(seed: string) {
    const {context, size} = this
    const rng = seedrandom(seed)
    context.clearRect(0, 0, size, size)
    for (let i = 0; i < this.repeat; ++i) {
      const x = rngRange(rng, -0.25, 1.25) * size
      const y = rngRange(rng, -0.25, 1.25) * size
      const radius = size / 2 * (1 + rng())
      const color = tinycolor({h: rng() * 360, s: this.saturation, v: 1, a: this.alpha}).toRgbString()
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

export = RandomIcon
