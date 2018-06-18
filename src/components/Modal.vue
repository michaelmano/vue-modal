<template>
    <div class="Modal">
        <transition :enter-active-class="animatedOverlay" leave-active-class="animated fadeOut">
            <div class="Modal__overlay" v-show="show"></div>
        </transition>
        <transition :enter-active-class="animationIn" :leave-active-class="animationOut">
            <div class="Modal__container" v-show="show">
                <div class="Modal__content">
                    <header class="Modal__header">
                        <h4 class="Modal__title"><slot name="title"></slot></h4>
                        <button class="Modal__close" @click="hideModal">
                            <svg aria-hidden="true" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                                <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
                            </svg>
                        </button>
                    </header>
                    <div class="Modal__body">
                        <div class="Modal__body-content">
                            <slot name="body"></slot>
                        </div>
                    </div>
                    <footer class="Modal__footer">
                        <slot name="footer"></slot>
                    </footer>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
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
  data() {
    return {
      show: false,
    };
  },
  methods: {
    hideModal() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
$v-modal-colors: (
  alpha: #ffffff,
  bravo: #37474f,
  charlie: #00bf9a
) !default;

.Modal {
  position: absolute;
}

.Modal__overlay {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.86);
}

.Modal__container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: left;
}

.Modal__content {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 762px) {
    margin: 0 20px;
    width: 640px;
    height: auto;
    max-height: calc(100vh - 160px);
  }
}

.Modal__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: map-get($v-modal-colors, bravo);
  padding: 0.875rem 1.25rem;
}

.Modal__title {
  margin: 0;
  padding: 0;
  color: map-get($v-modal-colors, alpha);
}

.Modal__close {
  flex-shrink: 0;
  flex-grow: 0;
  cursor: pointer;
  text-align: center;
  background-color: map-get($v-modal-colors, charlie);
  outline: none;
  border: none;
  border-radius: 50%;
  width: 1.75rem;
  height: 1.75rem;
  color: map-get($v-modal-colors, alpha);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  &:hover {
    transform: perspective(1px) scale(1.1);
  }
  &:active,
  &:hover,
  &:link {
    outline: none;
    border: none;
  }
  & svg {
    width: 1rem;
    height: 1rem;
    margin: 0 auto;
    display: block;
  }
}

.Modal__body {
  position: relative;
  background-color: map-get($v-modal-colors, alpha);
  padding: 1.25rem;
  overflow: auto;
  color: map-get($v-modal-colors, bravo);
  height: 100vh;
  @media screen and (min-width: 762px) {
    height: auto;
  }
}

.Modal__body-content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: center;
  min-height: 100%;

  & p:last-of-type {
    margin-bottom: 0;
  }
  @media screen and (min-width: 762px) {
    height: auto;
    height: auto;
    display: block;
    text-align: left;
  }
}

.Modal__footer {
  background-color: map-get($v-modal-colors, bravo);
  padding: 0.875rem 1.25rem;
  color: map-get($v-modal-colors, alpha);
  & p {
    font-size: 0.75rem;
    margin: 0;
    padding: 0;
  }
}
</style>
