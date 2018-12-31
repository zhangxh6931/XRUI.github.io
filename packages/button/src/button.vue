<template>
  <button
    :type="nativeType"
    class="xr-button"
    :class="['xr-button--' + type, 'xr-button--' + size, {
      'is-disabled': disabled,
      'is-plain': plain,
      'is-round': round
    }]"
    @click="handleClick"
    :disabled="disabled">
    <span class="xr-button-icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <i v-if="icon" class="xrui" :class="'xrui-' + icon"></i>
      </slot>
    </span>
    <label class="xr-button-text"><slot></slot></label>
  </button>
</template>

<script>
export default {
  name: 'xr-button',
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
  },
  props: {
    icon: String,
    disabled: Boolean,
    nativeType: String,
    plain: Boolean,
    round: Boolean,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'danger',
          'primary',
        ].indexOf(value) > -1;
      },
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'small',
          'normal',
          'large',
        ].indexOf(value) > -1;
      },
    },
  },
};
</script>

<style lang="less">
@import "../../../src/style/var";

.xr-button {
  appearance: none;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  color: inherit;
  display: block;
  font-size: 18px;
  height: 49px;
  outline: 0;
  overflow: hidden;
  position: relative;
  // text-align: center;

  &::after {
    position: absolute;
    background-color: #000;
    content: "";
    opacity: 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

  &:not(.is-disabled):active::after {
    opacity: .4;
  }

  &.is-disabled {
    opacity: .6;
  }

  &.is-round {
    border-radius: 50px;
  }
}

.xrui-icon {
  vertical-align: middle;
  display: inline-block;
}

.xr-button--default {
  color: @button-default-color;
  background-color: @button-default-background-color;
  box-shadow: @button-default-box-shadow;

  &.is-plain {
    border: 1px solid @button-default-plain-color;
    background-color: transparent;
    color: @button-default-plain-color;
  }
}

.xr-button--primary {
  color: @button-primary-color;
  background-color: @button-primary-background-color;

  &.is-plain {
    border: 1px solid @button-primary-background-color;
    background-color: transparent;
    color: @button-primary-background-color;
  }
}

.xr-button--danger {
  color: @button-danger-color;
  background-color: @button-danger-background-color;
  &.is-plain {
    border: 1px solid @button-danger-background-color;
    background-color: transparent;
    color: @button-danger-background-color;
  }
}

.xr-button--large {
  display: block;
  width: 100%;
}
.xr-button--normal {
  display: inline-block;
  padding: 0 12px;
}
.xr-button--small {
  display: inline-block;
  font-size: 14px;
  padding: 0 12px;
  height: 33px;
}
</style>
