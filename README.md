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

The default element name for the modal is `<vue-modal></vue-modal>`, You can override this with the following options.

```javascript
Vue.use(Modal, {
  componentName: 'component-name',
});
```

If you wish to add an animation to the modal you can use the following props, There is no animation library included with the modal
but you can pass your own or even use Animate.css

```javascript
...
  props: {
    animatedOverlay: {
      default: 'animated fadeIn',
      type: String,
    },
    animationIn: {
      default: 'animated bounceInLeft',
      type: String,
    },
    animationOut: {
      default: 'animated bounceOutRight',
      type: String,
    },
  },
...
```

```html
<vue-modal
  ref="modal-reference-name"
  @close="hideModal"

  animated-overlay="animated fadeIn"
  animation-in="animated bounceInDown"
  animation-out="animated bounceOutUp"
  >
  ...
</vue-modal>
```

## TODO

- update `README.md`
