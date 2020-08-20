import { parse } from 'svg-parser';

const COCOMATERIAL_API_URL = 'https://cocomaterial.com/api'
const cache = new Map();


self.addEventListener("message", ({data}) => {
  const imageId = data
  if (!cache.has(imageId)) {
    cache.set(
      imageId,
      fetch(`${COCOMATERIAL_API_URL}/vectors/${imageId}/`).then(r => r.json())
    )
  }
  if (cache.has(imageId)) {
    cache.get(imageId).then(data => {
      const doc = parse(data.svg_content);
      self.postMessage({
        imageId: imageId,
        viewBox: doc.children[0].properties.viewBox,
        paths: doc.children[0].children
      });
    }).catch(e => console.log(e))
  }
});
