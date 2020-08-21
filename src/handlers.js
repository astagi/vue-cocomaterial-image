import CocomaterialClient from './CocomaterialClient'


export default ({data}) => {
  const imageId = data
  return new CocomaterialClient().downloadAndProcessSVG(imageId)
}
