# Vue Modal

Vue Modal is a simple modal written in vuejs.

## Table of Contents

- [Installing](#installing)
- [Options](#options)
- [Todo](#todo)

## Installing

`npm install @ajutoare/vue-modal`

```javascript
import Vue from 'vue';
import Modal from '@ajutoare/vue-modal';
Vue.use(Modal);

new Vue({
  el: '#app',
});
```

```html
<button class="Button" @click="showModal('modal-reference-name')">Show Modal</button>
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
  componentName: 'component-name'
});
```

## TODO

- update `README.md`
