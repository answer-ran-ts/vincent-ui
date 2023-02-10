<template>
  <button
    class="v-button"
    :disabled="disabled"
    @click="handleClick"
    :class="[
      type ? `v-button--${type}` : '',
      buttonSize ? `v-button--${buttonSize}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-ripple': ripple,
      },
    ]"
  >
    <i class="iconfont" :class="icon" v-if="icon"></i>
    <!-- 如果没有传入插槽的时候才显示 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'VButton',
  props: {
    buttonSize: String,
    type: {
      type: String,
      default: 'default',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    ripple: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>
<style lang="scss">
.v-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  // 全局样式
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  &:active {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}
.is-ripple {
  overflow: hidden;
  position: relative;
  transition: background-color 0.3s linear, border 0.3s linear;
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 10%, rgba(0, 0, 0, 0) 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }
  &:active:after {
    transform: scale(0);
    opacity: 0.2;
    transition: 0s;
  }
}
.is-plain {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.is-round {
  border-radius: 20px;
}
.v-button--small {
  font-size: 12px;
  padding: 7px 15px;
}
.v-button--mini {
  font-size: 12px;
  padding: 4px 15px;
}
.v-button--big {
  font-size: 14px;
  padding: 12px 15px;
}
</style>
