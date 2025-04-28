import { createApp } from 'vue'
import App from '../src/App.vue'
import router from '../src/router'
import vuetify from 'vuetify'
import 'vuetify/styles'

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
