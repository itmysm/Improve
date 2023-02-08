// Components
import App from './App.vue'
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

//styles
import './assets/styles/sass/base.scss'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
