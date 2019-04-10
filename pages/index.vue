<template>
  <main>
    <span>{{ file.name }}</span>
    <form
      @submit.prevent="onFileSubmit"
      action=""
      method="post"
      enctype="multipart/form-data">
      <input
        ref="file"
        type="file"
        @change="onFileChange">
      <input type="submit">
    </form>

    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      alt="nop">
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      file: {}
    }
  },
  computed: {
    ...mapState({
      images: state => state.data.images
    })
  },
  methods: {
    onFileChange () {
      this.file = this.$refs.file.files[0]
    },
    onFileSubmit () {
      let formData = new FormData()
      formData.append('file', this.file)
      fetch('/api/image', {
        method: 'POST',
        body: formData
      })
        .then(() => {
          this.$store.dispatch('data/ADD_IMAGE', this.file.name)
        })
    }
  }
}
</script>
