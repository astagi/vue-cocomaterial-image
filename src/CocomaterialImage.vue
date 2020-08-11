<script>
const COCOMATERIAL_API_URL = 'https://cocomaterial.com/api'

export default {
  name: 'CocomaterialImage',
  data: function () {
    return {
      viewBox: '0 0 0 0',
      paths: []
    }
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
    this.fetchImage()
  },
  methods: {
    fetchImage: function () {
      fetch(`${COCOMATERIAL_API_URL}/vectors/${this.imageId}/`)
        .then((response) => { return response.json() })
        .then((data) => {
          const doc = new DOMParser().parseFromString(data.svg_content, 'image/svg+xml');
          this.viewBox = doc.firstElementChild.getAttribute('viewBox')
          this.paths = doc.getElementsByTagName('path')
        }).catch( error => { console.log(error); });
    }
  },
  render: function (createElement) {
    if (this.paths.length > 1) {
      const pathElements = []
      for (let i = 0 ; i < this.paths.length ; i++) {
        pathElements[i] = createElement(
            'path',
            {
              attrs: {
                d: this.paths[i].attributes.d == undefined ? 'none' : this.paths[i].attributes.d.value,
                transform: this.paths[i].attributes.transform  == undefined ? 'translate(0, 0)' : this.paths[i].attributes.transform.value,
                color: this.paths[i].attributes.color  == undefined ? 'none' : this.paths[i].attributes.color.value,
                overflow: this.paths[i].attributes.overflow  == undefined ? 'none' : this.paths[i].attributes.overflow.value,
                'paint-order': this.paths[i].attributes['paint-order']  == undefined ? 'none' : this.paths[i].attributes['paint-order'].value,
                fill: i == 0 && this.paths.length > 1 ? this.background : this.foreground
              }
            })
      }
      return createElement(
        'svg',
        {
          attrs: {
            viewBox: this.viewBox,
            xmlns: "http://www.w3.org/2000/svg"
          }
        }, pathElements)
    } else {
      return createElement('svg')
    }
  }
}
</script>
