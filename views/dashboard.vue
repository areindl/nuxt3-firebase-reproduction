<template>
    <div>
        <div class="mx-auto px-5">
            <ClientOnly>
                    <LoadingSkeletonTable v-if="pending" />
                    <p  v-else>Dashboard</p>
                  
            </ClientOnly>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Tenant } from 'firebase-admin/auth'
    import useUser from '~~/composables/useUser'

    const { $firebaseAuth } = useNuxtApp()
    const { pending, data: users } = await useLazyAsyncData<Tenant[]>('users', () => $fetch('/api/users'))

    const router = useRouter()
    const user = useUser()
    const tenantList = ref(tenants)

    const signOut = async () => {
        await $firebaseAuth.signOut()
        router.push('/')
    }

    const goToSwitchTenant = () => router.push('/switchtenant')
</script>
