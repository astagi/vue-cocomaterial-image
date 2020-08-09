<script>
const COCOMATERIAL_API_URL = 'https://cocomaterial.com/api'

export default {
  name: 'CocoMaterialImage',
  data: function () {
    return {
      viewBox: '0 0 0 0',
      paths: []
    }
  },
  props: {
    imageId: {
      type: String,
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
          this.paths = Array.from(doc.getElementsByTagName('path')).map(path => {
            return Array.from(path.attributes).reduce((obj, attr) => {
              return {...obj, [attr.name] : attr.value }
            }, {})
          })
        }).catch( error => { console.log(error); });
    }
  },
  render: function (createElement) {
    return createElement(
      'svg',
      {
        attrs: {
          viewBox: this.viewBox,
          xmlns: "http://www.w3.org/2000/svg"
        }
      }, this.paths.map(path => {
        return createElement(
          'path',
          {
            attrs: {...path, fill: path.fill == '#fff' ? this.background : this.foreground}
          })
      }))
  }
}
</script>
