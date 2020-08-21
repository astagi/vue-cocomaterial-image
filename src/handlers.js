import CocomaterialClient from './CocomaterialClient'


export default (imageId) => {
  return new CocomaterialClient().downloadAndProcessSVG(imageId)
}
