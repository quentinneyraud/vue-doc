<template>
  <div id="root">
    <span class="bpDebug">
      breakpoint: {{ bp }}
    </span>
    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      bp: state => state.window.breakpoint
    })
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.$store.dispatch('window/DETECT_BREAKPOINTS')
    })
    this.$store.dispatch('window/DETECT_ALL')
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins'
.bpDebug
  position fixed
  top 0
  left 0
  font()
</style>
