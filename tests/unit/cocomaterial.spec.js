console.log(global.fetch)
import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import './jsdom-worker'
import CocomaterialImage from '@/CocomaterialImage.vue'


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
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });
  it('caches different results for different images', async() => {
    shallowMount(CocomaterialImage, {
      propsData: {imageId : 152}
    })
    shallowMount(CocomaterialImage, {
      propsData: {imageId : 153}
    })
    await flushPromises()
    expect(global.fetch).toHaveBeenCalledTimes(3);
  });
  it('renders null on failure', async() => {
    global.fetch.mockImplementationOnce(() => Promise.reject("API is down"));
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
