import Toast, { PluginOptions, POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
    const options: PluginOptions = {
        position: POSITION.TOP_CENTER,
    }
    nuxtApp.vueApp.use(Toast, options)
})
