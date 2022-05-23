import { defineNuxtPlugin } from '#app'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


const config = useRuntimeConfig().public


export default defineNuxtPlugin(() => {
    try {
      
        const firebaseConfig = {
            apiKey: config.firebaseApiKey,
            authDomain: config.firebaseAuthDomain,
            databaseURL: config.firebaseDatabaseURL,
          }
  
          


        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app)


        return {
            provide: {
                firebaseApp: app,
                firebaseAuth: auth,
            },
        }
    } catch (error) {
        throw new Error(`Error initializing firebase: ${error}`)
    }
})


