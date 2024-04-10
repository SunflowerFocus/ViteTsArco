import { createApp } from 'vue'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import Router from './router'

const app = createApp(App);
app.use(Router);
app.use(ArcoVue);

app.mount('#app')
