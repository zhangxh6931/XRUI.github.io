<template lang="html">
  <transition name="fade">
    <div v-show="visible">
      <b class="backdrop"></b>
      <div class="toast" :class="{'toast-none': type === 'none'}">
        <i :class="iconClass" v-if="type !=='none'"></i>
        <p>{{message}}</p >
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'xr-toast',
  data() {
    return {
      visible: false,
      message: '',
      duration: 1500,
      type: 'success',
      closed: false,
      timer: null,
      callback: null,
    };
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.remove);
      }
    },
  },
  computed: {
    iconClass() {
      return `icon-toast-${this.type}`;
    },
  },
  methods: {
    handleClose() {
      this.closed = true;
      if (typeof this.callback === 'function') {
        this.callback();
      }
      this.remove();
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.handleClose();
          }
        }, this.duration);
      }
    },
    remove() {
      this.$el.parentNode.removeChild(this.$el);
      this.$destroy(true);
    },
  },
  mounted() {
    this.startTimer();
  },
};
</script>

<style lang="less">
@import "../../../src/style/var";
@import '../../../src/style/backdrop';

.toast {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: @zindex-toast;
  width: 11rem;
  min-height: 11rem;
  padding: 8px;
  margin: -5.5rem 0 0 -5.5rem;
  border-radius: 8px;
  background: rgba(#000, .8);
  color: #fff;

  i {
    margin-bottom: 14px;
  }

  p {
    font-size: 14px;
    text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      white-space: pre-wrap;
  }

  &.toast-none {
    min-height: 0;
  }
}

.icon-toast-success {
  display: inline-block;
  width: 35px;
  height: 28px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA5CAQAAAAhU5UbAAACTUlEQVR4AcXOAxBcVxjH0f97W9u2BzUHbWPbTkaxOYxt2xzFtm03tm3nV7u93/LuGfsoXXiOLOSmIO8ovSjGbG7zu1205ymlA/fSl387yTfyjQjT+W/neUN+0Y3/N1Q+UQGXE/KHb7iOy2X5wsscw22h/OABVmPJJT8YiaWn/KARlvncIx/IyR3c9vGMfOB9zuN2mY/kA4/zA253KSQfCJmGpYn8oCOWcQTygTJYNvGIfOBLruF2mjflAy9yGLdbZJAP3M9yLFXlB0Ow9Jcf1MWymHvlA1m5jdsBnpMPvMNZ3K7wqXzgMbZhKSYfCJmMpaWiQcA35KUEBXlacaENlokEsvACrTjA7+6ynsKKESWwbOFRWfiOU/zbGB5X1PiMq7id4W1ZeJuL/LfVPKGo8BwHcbtNFtkYwf9bxeMycR9LsNRUNDiFy0oek4EBWAYpOlzGbbm7Qw0sy7hP0WE+lmU8qv9BJm7hdogXFC1yYFv63x3e4jRuV/lcsaAptiU8on/gETZjKaVY0RbbIh7WXxAwHktbxYP22Bb+tUNzLFMJFR86YlvAQ/oFhbmL23YeV/zojG0+D0l8zGXczvGeEkMXbHN5jf243Sa7EkdXbFex1FNy0J1EDVfy0JNErOR+JRO9idcRXlJyEdCHeFznayUfAf2IXTmlBgEDiE1HpQ4BA4neDCJKJQIGE52dPKFUI2QItgt8IB8IGYbbHXLLF0KG49JIPhEykv8zSr4RoR//ZRz3KR0oyU7+6hiVCJUuhHxJXTrRnfpkIKIk+xEv7gxYg0GoVgAAAABJRU5ErkJggg==) 0 0 no-repeat;
  background-size: cover;
}

.icon-toast-error {
  position: relative;
  top: 10px;
  display: inline-block;
  width: 35px;
  height: 36px;
  background: url("http://pubimg.xingren.com/12712517-3abb-45b2-b147-2272ebf9568c") 0 0 no-repeat;
  background-size: contain;
}
</style>
