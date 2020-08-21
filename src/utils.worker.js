import workerHandler from './handlers'

self.addEventListener("message", ({data}) => {
  workerHandler(data)
    .then(data => {
      self.postMessage(data);
    })
    .catch(e => {console.log(e)})
});
