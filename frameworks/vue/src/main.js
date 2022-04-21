import { createApp } from 'vue/dist/vue.esm-bundler';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const app = createApp({})



const routes = [
    { path: '/:slug', component: App },
  ]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

app.use(router)

app.mount('#app')
