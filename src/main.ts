
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue/dist/vue.esm-bundler';

import App from './App.vue';

const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };


const routes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
];

const router = createRouter({
	history: createWebHistory(),
	routes, 
});




createApp(App)
	.use(router)
	.mount('#app');