<script>
const COCOMATERIAL_API_URL = 'https://cocomaterial.com/api'
const cache = new Map();


export default {
  name: 'CocomaterialImage',
  data: function () {
    return {
      paths: []
    }
  },
  created () {
    this.viewBox = '0 0 0 0'
  },
  props: {
    imageId: {
      type: Number,
      required: true
    },
    foreground: {
      type: String,
      default: 'black'
    },
    background: {
      type: String,
      default: 'white'
    }
  },
  mounted: function () {
    if (!cache.has(this.imageId)) {
      cache.set(
        this.imageId,
        fetch(`${COCOMATERIAL_API_URL}/vectors/${this.imageId}/`).then(r => r.json())
      )
    }
    if (cache.has(this.imageId)) {
      cache.get(this.imageId).then(data => {
        const doc = new DOMParser().parseFromString(data.svg_content, 'image/svg+xml');
        this.viewBox = doc.firstElementChild.getAttribute('viewBox')
        this.paths = doc.getElementsByTagName('path')
      }).catch(e => console.log(e))
    }
  },
  render: function (createElement) {
    if (this.paths.length > 0) {
      const pathElements = []
      for (let i = 0 ; i < this.paths.length ; i++) {
        pathElements[i] = createElement(
            'path',
            {
              attrs: Object.assign({},
                {d: this.paths[i].attributes.d.value},
                this.paths[i].attributes.color && {color: this.paths[i].attributes.color.value},
                this.paths[i].attributes.overflow && {overflow: this.paths[i].attributes.overflow.value},
                this.paths[i].attributes.transform && {transform: this.paths[i].attributes.transform.value},
                this.paths[i].attributes['paint-order'] && {'paint-order': this.paths[i].attributes['paint-order'].value},
                {fill: i == 0 && this.paths.length > 1 ? this.background : this.foreground}
              )
            })
      }
      return createElement(
        'svg',
        {
          on: this.$listeners,
          attrs: {
            viewBox: this.viewBox,
            xmlns: "http://www.w3.org/2000/svg"
          }
        }, pathElements)
    } else {
      return null
    }
  }
}
</script>
