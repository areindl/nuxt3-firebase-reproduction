import { getAuth } from 'firebase-admin/auth'
import formatUser from '~/helpers/format-user'
import app from '../config/firebase-admin.config'

// Acts like nuxtServerInit.
// Checks if token is valid on first load.

export default defineNuxtPlugin(async () => {
    const token = useCookie('token', {
        path: '/',
    })
    const user = useUser()

    try {
        if (token.value === undefined) return
        const result = await getAuth(app).verifyIdToken(token.value)
        user.value = formatUser(result)
    } catch (e) {
        console.log('AuthError: ' + e)
        // Not authenticated or invalid token
        token.value = null
    }
})
