import { Unsubscribe } from 'firebase/auth'
import formatUser from '../helpers/format-user'
import useUser from './useUser'
import { useMetaUserStore } from '~~/store/metaUserStore'
import { CustomClaims } from '~~/models/Claim'
import { boolean } from 'yup'

/**
 * Sets user composable and token cookie value
 * based on sign-in, sign-out, and token refresh events.
 */
export default function () {
    const { $firebaseAuth } = useNuxtApp()
    const metaUserStore = useMetaUserStore()
    const token = useCookie('token', {
        path: '/',
    })

    const firebaseUser = useUser()

    let unsubscribe: Unsubscribe

    onMounted(() => {
        unsubscribe = $firebaseAuth.onIdTokenChanged(async (user) => {
            if (user) {        
                firebaseUser.value = formatUser(user)
            } else {
                token.value = null
                firebaseUser.value = null
            }
        })
    })

    onUnmounted(() => {
        unsubscribe?.()
    })
}
