import workerHandler from '@/handlers'

addEventListener("message", ({data}) => {
  workerHandler(data)
    .then(data => {
      postMessage(data);
    })
    .catch(e => {console.log(e)})
});
