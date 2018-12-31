import Vue from 'vue';

const ToastConstructor = Vue.extend(require('./toast.vue').default);

let instance;

const Toast = function Toast(options = {}) {
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }

  instance = new ToastConstructor({
    data: options,
    el: document.createElement('div'),
  });
  instance.visible = true;
  
  document.body.appendChild(instance.$el);
};

export default Toast;