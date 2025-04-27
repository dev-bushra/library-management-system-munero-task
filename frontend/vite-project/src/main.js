import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Router
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(router)  // 👈 add router
  .use(vuetify)
  .mount('#app')
