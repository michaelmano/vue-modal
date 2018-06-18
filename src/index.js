import Modal from './components/Modal.vue';

const opts = {
    componentName: 'vue-modal',
};

export default {
    install(Vue, options = {}) {
        this.componentName = options.componentName || opts.componentName;
        Vue.mixin({
            data() {
                return {
                    activeModal: null,
                };
            },
            watch: {
                activeModal: function(val) {
                    if (null === this.activeModal) {
                        return window.removeEventListener(
                            'keyup',
                            this.listenForEscape,
                        );
                    } else {
                        return window.addEventListener(
                            'keyup',
                            this.listenForEscape,
                        );
                    }
                },
            },
            methods: {
                showModal(name) {
                    this.$refs[name].show = true;
                    this.activeModal = name;
                },
                hideModal() {
                    this.$refs[this.activeModal].show = false;
                    this.activeModal = null;
                },
                listenForEscape(event) {
                    if (event.keyCode === 27) {
                        this.hideModal();
                    }
                },
            },
        });

        Vue.component(this.componentName, Modal);
    },
};
