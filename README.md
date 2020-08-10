<p align="center">
<img src="https://github.com/astagi/vue-cocomaterial-image/blob/master/public/food_fruit_coconut.png?raw=true" width="200">
</p>

<p align="center">
  <i><a href="https://cocomaterial.com">Cocomaterial</a> Image component for Vue.js. <a href="">Try the demo!</a></i>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-cocomaterial-image"><img src="https://img.shields.io/npm/v/vue-cocomaterial-image.svg"></a>
  <a href="https://travis-ci.org/astagi/vue-cocomaterial-image"><img src="https://travis-ci.org/astagi/vue-cocomaterial-image.svg?branch=master"></a>
  <a href="https://codecov.io/gh/astagi/vue-cocomaterial-image"><img src="https://codecov.io/gh/astagi/vue-cocomaterial-image/branch/master/graph/badge.svg"></a>
  <a href=""><img src="https://img.shields.io/npm/l/express.svg"></a>
</p>

## Installation

```sh
yarn add vue-cocomaterial-image
```

## Usage

```js
import CocomaterialImage from 'vue-cocomaterial-image'

Vue.component(CocomaterialImage.name, CocomaterialImage)
```

Get the image id from [Cocomaterial website](https://cocomaterial.com) and use it in your component. You can also change `foreground` and `background` colors

```html
<template>
  <div id="app">
    <cocomaterial-image :imageId="151" foreground="#34495e" background="#41B883" />
  </div>
</template>
```

## Project setup

```sh
yarn install
```

### Compiles and minifies for production

```sh
yarn build
```

### Run your unit tests

```sh
yarn test:unit
```

### Lints and fixes files

```sh
yarn lint
```
