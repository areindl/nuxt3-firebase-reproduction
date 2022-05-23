import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

    // See: https://github.com/nuxt/framework/issues/4584
    experimental: {
      viteNode: true
    },

    //https://v3.nuxtjs.org/api/configuration/nuxt.config#head
    meta: {
        title: 'Mindfuel Meta',
        meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
        style: [],
        script: [],
    },

    dir: {
        pages: 'views',
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // SCSS file in the project
        '@/assets/sass/app.scss',
    ],
    build: { transpile: ['@headlessui/vue', 'vee-validate', 'firebase'],  },
    buildModules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

    /** Configuration
     *
     *  Usage:  config.FIRE_ENV }
     *  */



    runtimeConfig: {
        public: {
            FIRE_ENV: process.env.FIRE_ENV || 'dev',
        }
    }
})
