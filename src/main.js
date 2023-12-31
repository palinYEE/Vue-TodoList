// import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.json';
import 'bootstrap/dist/js/bootstrap.js';

const vuetify = createVuetify({
	components,
	directives,
});

createApp(App).use(vuetify).mount('#app');
