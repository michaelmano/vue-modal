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
                        <button class="Modal__close" @click="hideModal" v-html="closeIcon"></button>
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
    closeIcon: {
      default: null,
      type: String
    },
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

.Modal__header {
  background-color: map-get($v-modal-colors, bravo);
}

.Modal__title {
  color: map-get($v-modal-colors, alpha);
}

.Modal__close {
  background-color: map-get($v-modal-colors, charlie);
  color: map-get($v-modal-colors, alpha);
}

.Modal__body {
  background-color: map-get($v-modal-colors, alpha);
  color: map-get($v-modal-colors, bravo);
}

.Modal__footer {
  background-color: map-get($v-modal-colors, bravo);
  color: map-get($v-modal-colors, alpha);
}

.Modal {
  position: absolute;
  & * {
    box-sizing: border-box;
  }
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
  padding: 0.875rem 1.25rem;
}

.Modal__title {
  margin: 0;
  padding: 0;
}

.Modal__close {
  flex-shrink: 0;
  flex-grow: 0;
  cursor: pointer;
  text-align: center;
  outline: none;
  border: none;
  border-radius: 50%;
  width: 1.75rem;
  height: 1.75rem;
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
  padding: 1.25rem;
  overflow: auto;
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
  padding: 0.875rem 1.25rem;
  & p {
    font-size: 0.75rem;
    margin: 0;
    padding: 0;
  }
}
</style>
