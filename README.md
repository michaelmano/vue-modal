# Vue Modal

Vue Modal is a simple modal written in vuejs.

## Table of Contents

- [Installing](#installing)
- [Options](#options)
- [Todo](#todo)

## Installing

`npm install @mmano/vue-modal`

```javascript
import Vue from 'vue';
import Modal from '@mmano/vue-modal';
Vue.use(Modal);

new Vue({
  el: '#app',
});
```

```html
<button @click="showModal('modal-reference-name')">Show Modal</button>
<vue-modal ref="modal-reference-name" @close="hideModal">
  <template slot="title">Modal Title</template>
  <template slot="body">
    <p>Modal Body Content</p>
  </template>
  <p slot="footer">Footer Content</p>
</vue-modal>
```

## Options

| Name            | Description                                                                   | Default                                                                        |
|-----------------|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| componentName   | This option will change the default element name.                             | `<vue-modal></vue-modal>`                                                      |
| closeIcon       | Pass an svg icon to change the default close icon.                            | [FontAwesome 5 Times](https://fontawesome.com/icons/times?style=solid&from=io) |
| animatedOverlay | You can pass any css class you wish and it will add it to the modal overlay.  | `animated fadeIn`                                                              |
| animationIn     | The animation that is used when opening the modal.                            | `animated bounceInLeft`                                                        |
| animationOut    | The animation that is used when closing the modal                             | `animated bounceOutRight`                                                      |
  
Although the default animations are set, There is no animation styles added, If you wish you can install Animate.css and the defaults will kick in.

Example use Below:

```javascript
Vue.use(Modal, {
  componentName: 'vue-modal',
  closeIcon:
    '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>',
  animatedOverlay: 'animated fadeIn',
  animationIn: 'animated bounceInLeft',
  animationOut: '',
});
```

## TODO

- update `README.md`
