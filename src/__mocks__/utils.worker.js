import workerHandler from '../handlers'

const DEFAULT_NAME = 'message'

export default class Worker {

  constructor() {
    this._eventListeners = {}
  }

  addEventListener(name, handler) {
    if (!this._eventListeners[name]) {
      this._eventListeners[name] = []
    }
    this._eventListeners[name].push(handler)
  }

  removeEventListener(name, handler) {
    this._eventListeners[name].filter((eventListener) => {
      if (handler != eventListener) {
        return handler
      }
    })
  }

  postMessage (data) {
    this._eventListeners[DEFAULT_NAME].map((eventListener) => {
      workerHandler({data})
        .then(data => {
          eventListener({data})
        })
        .catch(e => {console.log(e)})
    })
  }

}
