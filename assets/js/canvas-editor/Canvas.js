import { addListener, removeListener } from '../utils'

export default class Canvas {
  constructor (container) {
    this.container = container
    this.canvas = document.createElement('canvas')
    this.context = this.canvas.getContext('2d')

    this.bindMethods()
    this.initEvents()
    this.setSize()
  }

  beforeDestroy () {
    this.removeEvents()
  }

  bindMethods () {
    this.onResize = this.onResize.bind(this)
  }

  initEvents () {
    addListener(window, 'resize', this.onResize)
  }

  removeEvents () {
    removeListener(window, 'resize', this.onResize)
  }

  appendToDom () {
    console.log(this)
    this.container.appendChild(this.canvas)
  }

  onResize () {
    this.setSize()
  }

  setSize () {
    this.canvas.width = this.container.clientWidth
    this.canvas.height = this.container.clientHeight
  }
}
