import './assets/app.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import BaseComponents from '@/components/Base';

const app = createApp(App);

app.use(createPinia());

BaseComponents.forEach((component) => {
	app.component(component.__name!, component);
});

app.mount('#app');
