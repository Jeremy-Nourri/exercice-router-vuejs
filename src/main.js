import './assets/main.css'
import data from '../src/data/customers.json'
import { createApp, ref } from 'vue'

// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.use(createPinia())
app.use(router)

app.mount('#app')


const contacts = ref(data);

app.provide("contacts",{
    contacts
});