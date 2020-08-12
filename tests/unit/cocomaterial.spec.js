import { shallowMount } from '@vue/test-utils'
import CocomaterialImage from '@/CocomaterialImage.vue'
import flushPromises from 'flush-promises'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(
      {
        "id": 152,
        "url": "https://cocomaterial.com/api/vectors/152/",
        "name": "face_woman-1.svg",
        "tags": "emojis, face, woman",
        "svg": "https://cocomaterial.com/media/face_woman-1.svg",
        "svg_content": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 85.486977 75.987373\" height=\"75.987373mm\" width=\"85.486977mm\">\n    <path d=\"m 21951.128,3828.8223 a 80.320607,91.253907 22.945738 0 1 -106.678,60.4388 80.320607,91.253907 22.945738 0 1 -45.747,-111.4965 80.320607,91.253907 22.945738 0 1 106.68,-60.4388 80.320607,91.253907 22.945738 0 1 45.745,111.4965 z\" color=\"#000\" overflow=\"visible\" fill=\"#fff\" paint-order=\"fill markers stroke\" transform=\"translate(-86.009704,20.738097) matrix(0.26458333,0,0,0.26458333,-5666.0794,-976.23108)\"/>\n    <path d=\"m 21784.166,3817.3368 c -4.846,-1.3466 -12.462,-1.4502 -17.113,-3.7361 -7.66,-4.6999 -3.799,-9.19 2.255,-10.3253 2.703,-0.4938 4.626,-0.5122 5.839,-0.055 4.224,0.8097 10.661,0.3517 10.661,0.3517 2.053,-8.4283 6.91,-18.8846 11.103,-24.8221 -0.494,-0.495 -5.684,1.1481 -8.279,2.6218 -7.567,2.723 -13.092,1.302 -19.347,-0.026 -13.556,-0.2095 -13.459,-11.6393 -5.409,-16.4854 3.108,0 5.866,-0.8698 5.866,-1.8495 0,-0.6217 -0.447,-0.8577 -1.202,-0.6337 -3.746,1.1132 -4.963,1.0937 -8.109,-0.1288 -4.971,-1.9899 -6.424,-6.9991 -3.887,-10.9539 1.854,-1.4506 -0.289,-0.9525 -3.697,0.8589 -13.34,3.9524 -14.759,-4.0082 -10.587,-12.3516 3.336,-7.007 9.008,-12.5836 13.605,-16.9188 1.261,-1.1936 6.169,-2.0746 8.362,-1.5008 2.289,2.1042 3.541,2.8701 6.163,2.2864 1.131,-0.6059 1.014,-0.913 -1.315,-3.4354 -1.702,-1.8435 -2.578,-3.4595 -2.617,-4.83 0.638,-2.84 1.895,-3.5535 -0.665,-4.8175 -1.039,0 -3.125,-0.4291 -4.637,-0.9411 -4.927,-1.6693 -6.431,-7.4919 -2.839,-11.009 5.55,-10.7338 16.16,-16.0785 22.838,-18.601 5.942,-2.2079 18.107,0.42 21.096,1.782 4.603,4.9077 3.275,9.6594 -1.91,13.0894 -2.055,0.4258 -1.431,1.594 1.334,2.4997 3.818,1.2508 5.031,2.5838 5.559,6.1077 0.312,4.2597 -1.783,5.0388 -3.833,8.3173 0,1.0104 1.528,1.0843 2.492,0.1212 8.834,-3.0351 15.346,3.1628 7.238,-4.9575 -4.52,-4.6096 -2.126,-7.6043 -1.456,-12.1968 -0.343,0 -1.321,-0.9772 -2.171,-2.1716 -1.941,-2.7254 -2.774,-7.5366 -1.509,-8.7173 0.495,-0.4635 0.902,-1.7089 0.902,-2.7674 0,-1.6655 -0.389,-2.0414 -2.882,-2.788 -12.825,-0.3291 -10.346,-10.0597 -9.374,-15.8398 0.43,-2.4028 1.186,-3.6448 3.386,-5.577 2.82,-2.4737 2.826,-2.4909 1.356,-3.5205 -2.818,-1.9739 -4.931,-8.0751 -2.797,-8.0751 0.293,0 0.684,-0.5756 0.868,-1.2791 4.477,-4.591 9.832,-4.506 15.28,-6.9188 1.578,-1.3613 6.621,-2.9453 7.999,-2.5124 0.513,0.1618 1.779,0.478 2.816,0.7051 3.193,0.699 4.717,6.9076 2.411,9.8247 -0.114,3.1658 4.113,4.1972 7.421,5.6688 3.808,1.2657 5.54,6.9947 4.157,11.169 -1.809,5.7438 3.562,6.0339 6.722,6.1557 4.294,0.182 7.503,-0.6051 2.711,-1.9147 -1.805,-0.2703 -3.629,-0.8396 -4.053,-1.2644 -3.005,-3.0057 -2.881,-7.9635 0.243,-9.6333 7.111,-6.5168 15.405,-10.9843 18.504,-18.9254 3.066,-5.0881 9.272,-3.9424 14.076,-2.2769 3.902,1.8125 4.777,-0.6863 6.955,-3.0837 3.247,-3.5716 3.287,-3.6706 2.178,-5.3631 -1.906,-2.9081 -1.132,-5.1855 2.388,-7.0358 12.075,-6.3457 13.971,-7.115 18.041,-7.324 6.742,-0.3459 11.343,3.729 8.634,9.0335 -2.768,5.4201 -8.665,7.7051 -13.795,10.2756 -1.239,0.4481 -1.625,1.992 -0.651,2.5953 0.802,0.4952 7.02,0.5346 10.095,-2.5824 9.227,-9.352 17.39,-7.6809 24.324,-7.9813 9.124,0 13.019,12.4329 17.921,14.3454 5.276,1.6532 6.15,2.262 6.842,4.7675 0.134,3.9788 1.151,4.6522 2.088,0.8435 0,-2.2284 2.553,-4.638 5.398,-5.0929 3.219,-0.5146 6.504,0.4436 9.187,3.1267 5.802,6.5083 -4.612,16.8828 -0.303,11.8034 1.4,-1.5587 4.147,-3.9415 6.106,-5.2951 3.415,-2.3618 3.707,-2.4371 7.212,-1.8625 2.009,0.3289 4.503,0.8134 5.543,1.0763 2.632,0.6664 4.996,-0.066 6.925,-2.1455 10.782,-7.282 15.794,4.0428 5.438,13.3776 -3.364,3.6647 -10.965,5.2759 -19.137,4.0557 -2.616,-0.3907 -3.056,-0.2072 -5.981,2.4775 -4.995,3.9412 -1.333,6.6931 2.291,4.3232 4.595,-2.318 10.969,-4.7445 14.486,-2.2485 6.547,4.6438 4.175,0.6708 4.949,-0.3859 4.756,-5.7401 13.999,-1.6391 14.211,4.9315 -0.351,7.5902 -6.249,11.8498 -11.33,12.1995 -4.597,-0.1288 -14.502,7.5724 -6.207,5.3443 4.437,-1.5061 9.644,-1.4104 11.262,0.2071 2.877,2.2413 5.555,1.7933 7.772,0.5433 7.303,-5.2674 14.487,1.0017 11.999,7.9656 -0.622,1.6308 -1.132,3.1468 -1.132,3.3693 0,1.0826 5.663,1.1937 8.678,0.1693 5.107,-1.0365 12.097,-1.6559 15.468,1.8955 13.288,20.9918 -6.31,21.8263 -17.546,27.4671 -1.349,1.2574 -1.35,1.2838 -0.04,2.304 0.734,0.5677 2.415,0.9782 3.737,0.9123 8.481,1.9819 12.752,1.8077 14.194,9.6079 0.864,7.2892 -2.5,11.5475 -10.952,13.8649 -6.99,-1.1303 -6.305,13.2222 -4.175,20.071 1.424,4.5788 12.378,-3.4874 16.589,-1.7144 11.623,1.9334 2.001,14.241 4.363,23.6216 -6.215,7.1524 -18.226,19.1798 -25.658,10.9729 -2.022,-2.9871 -3.181,-1.6623 -6.217,-0.447 -4.094,1.6374 -4.424,1.6677 -7.315,0.6715 -3.713,-1.2796 -5.686,-2.3061 -6.587,-3.4282 -0.848,-1.0548 -3.621,-0.1287 -4.211,1.4066 -4.007,3.03 -5,1.1909 -11.161,10.4746 -2.623,1.5663 -10.65,-0.2424 -9.675,0.4718 0.616,0.4501 9.649,2.8188 10.557,2.6449 1.851,-0.3537 7.615,2.6929 8.61,4.551 0.338,0.6316 0.697,2.9552 0.799,5.1637 1.569,8.079 5.336,15.636 -8.456,23.076 -0.334,0 -1.437,0.8299 -2.451,1.8443 -8.197,5.3348 -14.783,3.9597 -18.037,-4.1833 0,-0.7914 -0.611,-2.1453 -1.333,-3.0083 -1.368,-2.1164 -1.908,-1.2474 -3.915,-0.1719 -4.594,2.4623 -13.013,1.2601 -15.939,-2.2761 -0.857,-1.0347 -1.435,-0.6672 -6.037,3.8408 -4.715,6.3724 -11.449,11.6748 -16.649,16.3967 -17.758,15.7666 -35.225,26.5012 -57.408,30.4169 -71.112,12.5515 -95.767,-57.578 -96.524,-79.6782 z m 112.162,59.397 c 16.778,-8.1676 31.414,-20.8793 43.766,-33.528 3.641,-4.5522 10.302,-9.7802 10.706,-15.0684 0.198,-4.3921 -2.647,-4.6018 -5.577,-7.0978 -4.424,-6.9086 7.024,-9.2357 1.013,-16.3809 -1.433,-4.1549 0.162,-6.6432 2.003,-9.7115 1.596,-2.8825 2.01,-2.5309 -4.711,-4.0109 -6.47,-1.4252 -8.389,-4.604 -6.496,-10.7621 0.844,-4.7823 6.04,-14.6066 -0.05,-14.6281 -5.839,-0.8904 -12.388,-5.0747 -12.537,-9.7727 -0.08,-8.1527 0.212,-14.1579 -3.583,-20.4507 -1.493,-2.6677 -2.01,-3.0254 -4.465,-2.6353 -6.461,1.7642 -12.56,0.5523 -13.858,-6.1228 0.336,-1.9069 -0.07,-1.9189 -8.122,-0.2375 -53.929,2.3179 -79.375,34.2579 -93.401,75.0416 l -1.503,4.5693 c 11.144,3.6662 11.197,14.6274 1.141,14.4298 -2.463,-0.1718 -3.043,0 -2.853,0.8161 0.131,0.5668 0.687,3.1941 1.238,5.8386 13.703,52.5073 57.871,68.8983 97.29,49.7102 z m -66.536,-86.2798 c -2.242,-1.946 -2.521,-5.0672 -0.827,-9.2469 1.984,-4.8972 3.075,-5.8733 6.165,-5.5127 4.031,0.4705 6.824,4.9908 6.609,10.697 -0.124,3.2768 -1.641,4.3807 -6.754,4.912 -3.027,0.3143 -4.044,0.1489 -5.193,-0.8494 z m 47.865,-0.7883 c -2.255,-7.7184 -3.395,-16.6281 6.798,-17.9856 2.563,-0.2858 6.41,1.652 7.383,3.7197 2.658,5.6427 2.621,5.0716 0.581,8.9707 -1.557,2.9766 -2.517,3.9311 -5.158,5.1243 -3.965,1.7917 -7.416,1.8532 -9.604,0.1717 z m 85.287,-122.4747 c 1.041,-1.4625 2.663,-2.9511 3.603,-3.3088 0.94,-0.3574 1.709,-0.9041 1.709,-1.2151 0,-0.311 1.072,-1.6322 2.382,-2.9363 1.311,-1.3041 2.392,-2.8182 2.404,-3.3645 0,-0.6063 -0.89,-0.1087 -2.318,1.2745 -2.041,1.9785 -2.983,2.3386 -7.377,2.8209 -2.771,0.3043 -5.194,0.4562 -5.387,0.3381 -0.193,-0.1188 -0.424,0.7896 -0.514,2.0175 -0.09,1.2278 -0.637,3.3688 -1.217,4.7577 -1.018,2.434 -1.003,2.5445 0.442,3.0792 2.07,0.7654 4.034,-0.3197 6.273,-3.4632 z m -78.561,-4.6795 c 0.657,-0.4903 4.495,-6.7857 5.811,-9.5327 0.632,-1.3193 0.933,-3.0318 0.699,-3.9701 -0.387,-1.5408 -0.695,-1.6402 -4.629,-1.4976 -4.051,0.366 -7.554,-2.6076 -9.861,-0.8019 -2.675,1.879 -5.653,3.3941 -8.299,5.1169 -3.027,2.4889 -0.51,2.6249 2.053,3.1397 3.937,0.026 7.141,4.5099 6.332,8.8649 3.521,5.7418 5.728,2.4909 7.894,-1.3192 z\" fill=\"#030303\" transform=\"translate(-86.009704,20.738097) matrix(0.26458333,0,0,0.26458333,-5666.0794,-976.23108)\"/>\n</svg>\n"
      }
    ),
  })
);


describe('CocomaterialImage component', () => {
  it('renders svg', async() => {
    const imageId = 152
    const foreground = 'green'
    const background = 'red'
    const wrapper = shallowMount(CocomaterialImage, {
      propsData: { imageId, foreground, background }
    })
    await flushPromises()
    const paths = wrapper.findAll('path')
    expect(paths.length).toBe(2)
    expect(paths.at(0).attributes().fill).toBe('red')
    expect(paths.at(1).attributes().fill).toBe('green')
  });
  it('renders svg with default colors', async() => {
    const imageId = 152
    const wrapper = shallowMount(CocomaterialImage, {
      propsData: {imageId}
    })
    await flushPromises()
    const paths = wrapper.findAll('path')
    expect(paths.length).toBe(2)
    expect(paths.at(0).attributes().fill).toBe('white')
    expect(paths.at(1).attributes().fill).toBe('black')
  });
  it('caches results for the same image', async() => {
    const imageId = 152
    shallowMount(CocomaterialImage, {
      propsData: {imageId}
    })
    shallowMount(CocomaterialImage, {
      propsData: {imageId}
    })
    await new Promise(resolve => setTimeout(resolve, 1000));
    shallowMount(CocomaterialImage, {
      propsData: {imageId}
    })
    await flushPromises()
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('caches different results for different images', async() => {
    shallowMount(CocomaterialImage, {
      propsData: {imageId : 152}
    })
    shallowMount(CocomaterialImage, {
      propsData: {imageId : 153}
    })
    await flushPromises()
    expect(fetch).toHaveBeenCalledTimes(2);
  });
  it('renders null on failure', async() => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));
    const imageId = 15209
    const wrapper = shallowMount(CocomaterialImage, {
      propsData: {imageId}
    })
    await flushPromises()
    const svg = wrapper.findAll('svg')
    expect(svg.length).toBe(0)
    const paths = wrapper.findAll('path')
    expect(paths.length).toBe(0)
  });
})
