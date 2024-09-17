import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter} from 'vue-router'

import HomeView from './pages/HomeView.vue'
import BasicView from './pages/DeclarativeRenderingView.vue'
import BasicPageComponent from './components/BasicPageComponent.vue'

const routes = [
    {path: '/', name:'home', component: HomeView},
    {path: '/declarative-rendering', name:'declarative-rendering', component: BasicView},
    // {path: '', component: ''},
    // {path: '', component: ''},
    // {path: '', component: ''},
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App)
    .use(router)
    .component('BasicPageComponent', BasicPageComponent)
    .mount('#app')
