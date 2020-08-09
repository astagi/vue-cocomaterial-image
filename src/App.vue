<template>
  <div id="app">
    <div class="vector-container" v-for="vector in vectors" :key="vector.id" >
      <CocoMaterialImage :imageId="vector.id" :foreground='colorMain' :background='colorSecond' />
    </div>
    <button v-on:click="changeColors()">Change colors</button>
  </div>
</template>

<script>
import CocoMaterialImage from '@/CocoMaterialImage.vue'

export default {
  name: 'App',
  components: {
    CocoMaterialImage
  },
  data: function () {
    return {
      colorMain: 'black',
      colorSecond: 'yellow',
      vectors: []
    }
  },
  methods: {
    changeColors: function () {
      this.colorMain = 'green'
      this.colorSecond = 'blue'
    }
  },
  mounted: function () {
    fetch(`https://cocomaterial.com/api/vectors/`)
      .then((response) => { return response.json() })
      .then((data) => {
        this.vectors = data
      }).catch( error => { console.log(error); });
  }
}
</script>

<style>
.vector-container {
  width: 200px;
}
</style>
