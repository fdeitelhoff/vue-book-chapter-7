const { createApp } = require('vue');
import App from './App.vue';

const vm = createApp(App).mount('#app');

// console.log('Data access:', vm.$data.name);
// console.log('Convenient data access:', vm.name);
