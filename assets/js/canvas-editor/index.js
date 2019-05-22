import Canvas from './Canvas'
import { loadImage } from '../utils'

export default class CanvasEditor {
  constructor (container) {
    this.canvas = new Canvas(container)
  }

  drawSketch (imageSource) {
    loadImage(imageSource)
      .then(imageElement => {
        this.canvas.context.drawImage(imageElement, 0, 0)
      })
  }
}
