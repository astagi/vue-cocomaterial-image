<template>
  <div id="app">
    <CocoMaterialImage imageId="151" :foreground='colorMain' :background='colorSecond' />
    <button v-on:click="changeColors()">Change colors</button>
  </div>
</template>

<script>
import CocoMaterialImage from '@/components/CocoMaterialImage.vue'

export default {
  name: 'App',
  components: {
    CocoMaterialImage
  },
  data: function () {
    return {
      colorMain: 'black',
      colorSecond: 'yellow'
    }
  },
  methods: {
    changeColors: function () {
      this.colorMain = 'green'
      this.colorSecond = 'blue'
    }
  },
}
</script>

<style>
#app {
  width: 200px;
  heigth: 200px;
}
</style>
