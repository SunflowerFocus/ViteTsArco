import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import Router from './router'

const pinia = createPinia()
const app = createApp(App);

app.use(Router);
app.use(ArcoVue);
app.use(pinia)

app.mount('#app')
