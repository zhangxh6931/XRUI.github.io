<template lang="html">
  <transition name="modal-fade">
    <div class="modal open"  v-show="value" @click.self="$emit('input', false)">
      <transition name="modal-transform">
        <div class="modal-dialog" role="document" v-show="value" @click="handleBodyClick">
          <template v-if="$slots.body">
            <slot name="body"></slot>
          </template>
          <div v-else class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer" v-if="enableFooter">
            <template v-if="$slots.footer">
              <slot name="footer"></slot>
            </template>
            <template v-else>
              <button type="button" class="btn btn-secondary" @click="$emit('input', false)">{{cancelBtnText}}</button>
              <template v-if="$slots.primaryBtn">
                <slot name="primaryBtn"></slot>
              </template>
              <template v-else>
                <button type="button" class="btn btn-primary" @click="handleConfirm">{{confirmBtnText}}</button>
              </template>
            </template>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { without } from '@src/utils/util.js';

const $body = document.body;
export default {
  name: 'xr-modal',
  props: {
    value: Boolean,
    confirmBtnText: {
      type: String,
      default: '确定',
    },
    cancelBtnText: {
      type: String,
      default: '取消',
    },
    enableFooter: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    value(val) {
      if (val) {
        this.open();
      } else {
        this.close();
      }
    },
  },
  methods: {
    open() {
      const cls = $body.className;
      $body.className = '@{cls}@{cls ? \' \' : \'\'}modal-open';
    },
    close() {
      const clsArr = $body.className.split(/\s+/g);
      $body.className = without(clsArr, 'modal-open').join(' ');
    },
    handleConfirm() {
      this.$emit('confirm');
    },
    handleBodyClick() {
      if (this.enableFooter) {

      } else {
        this.$emit('input', false);
      }
    },
  },
};
</script>

<style lang="less">
@import "../../../src/style/var";

  .modal {
    background: rgba(0, 0, 0, .4);
  }

  .modal-fade-enter-active, .modal-fade-leave-active {
    transition: opacity .2s;
  }

  .modal-fade-enter, .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-transform-enter-active, .modal-transform-leave-active {
    transition: transform .15s ease-out;
    transform: translate3d(0, 0, 0);
  }

  .modal-transform-enter, .modal-transform-leave-active {
    transform: translate3d(0, -25%, 0);
  }

  .fade {
    opacity: 0;
    transition: opacity .15s linear;

    &.in {
      opacity: 1;
    }
  }

  .modal-open {
    overflow: hidden;
  }

  .modal,
  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .modal {
    z-index: @zindex-modal;
    display: none;
    overflow: hidden;
    outline: 0;
    -webkit-overflow-scrolling: touch;

    &.open {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &.fade .modal-dialog {
      transition: transform .15s ease-out;
      transform: translate3d(0, -25%, 0);
    }

    &.in .modal-dialog {
      transform: translate3d(0, 0, 0);
    }

    .modal-open & {
      overflow-x: hidden;
      overflow-y: auto;
    }

    .close(@modal-has-close) {
      position: absolute;
      top: -14px;
      right: -14px;
      z-index: 10;
      overflow: hidden;
      width: 28px;
      height: 28px;
      padding: 0;
      border: none;
      border-radius: 50%;
      background: #ccc;
      color: #fff;
      font: 200 32px/28px Arial, sans-serif;
    }
  }

  .modal-dialog {
    position: relative;
    width: @modal-dialog-width;
    border-radius: @modal-border-radius;
    background-color: @modal-dialog-bg;
    background-clip: padding-box;
  }

  .modal-body {
    position: relative;
    padding: @modal-inner-padding;
  }

  .modal-footer(@modal-has-footer) {
    display: flex;

    .btn {
      display: block;
      flex: 1;
      padding: 9px;
      border: none;
      border-radius: 0;
      font-size: 18px;

      &:first-child {
        border-bottom-left-radius: @modal-border-radius;
      }

      &:last-child {
        border-bottom-right-radius: @modal-border-radius;
      }
    }

    .btn-secondary {
      background: #666;
      color: #fff;
    }

    .btn-primary {
      background: #42a8d3;
    }
  }

  .modal-backdrop {
    z-index: @zindex-modal-bg;
    background-color: @modal-backdrop-bg;

    &.fade { opacity: 0; }

    &.in { opacity: @modal-backdrop-opacity; }
  }
</style>
