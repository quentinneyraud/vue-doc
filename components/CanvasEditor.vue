<template>
  <div>
    <h1>test</h1>
    <div
      id="canvas-container"
      ref="canvas" />
  </div>
</template>

<script>
import home from 'assets/images/home.jpg'

import CanvasEditor from 'assets/js/canvas-editor'

export default {
  mounted () {
    let canvasEditor = new CanvasEditor(this.$refs.canvas)
    canvasEditor.canvas.appendToDom()
    canvasEditor.drawSketch(home)
  }
}
</script>


<style lang="stylus" scoped>
  #canvas-container
    width 100vw
    height 100vh
    border 1px solid #000
</style>
