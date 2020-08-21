<script>

import Worker from './utils.worker'
const worker = new Worker();


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
  methods: {
    $_worker_message_handler: function ({data}) {
      if (data.imageId != this.imageId)
        return
      this.viewBox = data.viewBox;
      this.paths = data.paths;
      worker.removeEventListener('message', this.$_worker_message_handler)
    }
  },
  mounted() {
    worker.addEventListener('message', this.$_worker_message_handler);
    worker.postMessage(this.imageId);
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
  render: function (createElement) {
    if (this.paths.length > 0) {
      const pathElements = []
      for (let i = 0 ; i < this.paths.length ; i++) {
        this.paths[i].properties.fill = i == 0 && this.paths.length > 1 ? this.background : this.foreground
        pathElements[i] = createElement(
          'path', {attrs: this.paths[i].properties}
        )
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
