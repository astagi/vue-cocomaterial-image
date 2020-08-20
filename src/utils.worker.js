import CocomaterialClient from './CocomaterialClient'


self.addEventListener("message", ({data}) => {
  const imageId = data
  new CocomaterialClient().downloadAndProcessSVG(imageId).then(data => {
    self.postMessage(data);
  })
});
