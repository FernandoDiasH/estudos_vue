import './assets/main.css'
import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter} from 'vue-router'

import HomeView from './pages/HomeView.vue'
import BasicView from './pages/DeclarativeRenderingView.vue'
import AttributeBindingsView from './pages/AttributeBindingsView.vue'
import EventListenerView from './pages/EventListenerView.vue'

import BasicPageComponent from './components/BasicPageComponent.vue'
import CustomLinkComponent from './components/menu/CustomLinkComponent.vue'
import TodasFeatureView from './pages/TodasFeatureView.vue'

const routes = [
    {path: '/', name:'home', component: HomeView},
    {path: '/declarative-rendering', name:'declarative-rendering', component: BasicView},
    {path: '/attribute-bindings', name:'attribute-bindings', component: AttributeBindingsView},
    {path: '/event-listeners', name:'event-listeners', component: EventListenerView},
    {path: '/todas-as-features', name:'todas-as-features', component: TodasFeatureView},


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
    .component('CustomLinkComponent', CustomLinkComponent)
    .mount('#app')
