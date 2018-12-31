import Button from '../packages/button';
import Toast from '../packages/toast';
// import Modal from '../packages/modal';


const install = (Vue, config = {}) => {
  if (install.installed) return;

  Vue.component(Button.name, Button);

  Vue.prototype.$toast = Toast;
};

if (typeof window !== 'undefined' && window.vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
};
