<template>
    <div class="h-screen bg-slate-200">
        <div class="pt-12 sm:mx-auto sm:w-full sm:max-w-md">
            <MetaLogo class="mx-auto"></MetaLogo>
            <div class="pb-4 text-center text-lg font-semibold uppercase text-green-700">mindfuel meta</div>
            <div class="rounded-lg bg-white py-8 px-6 shadow sm:px-10">
                <form class="mb-0 space-y-6" @submit.prevent="signIn">
                    <div>
                        <label for="email"> Email address </label>
                        <Field name="email" type="email" />
                        <ErrorMessage class="error" name="email" />
                    </div>
                    <div>
                        <label for="password"> Password </label>
                        <Field name="password" type="password" />
                        <ErrorMessage name="password" class="error" />
                    </div>

                    <div>
                        <button type="submit" :disabled="disabled" class="primary flex w-full justify-center py-2 px-4">
                            {{ disabled ? 'Please wait...' : 'Sign in' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { signInWithEmailAndPassword } from 'firebase/auth'
    import { useForm, Field, ErrorMessage } from 'vee-validate'
    import { useToast } from 'vue-toastification'
    import { object, string } from 'yup'
    import MetaLogo from '~~/components/MetaLogo.vue'

    const { $firebaseAuth } = useNuxtApp()
    const router = useRouter()
    const toast = useToast()
    const disabled = ref(false)

    const { handleSubmit } = useForm({
        validationSchema: object({
            email: string().required().email(),
            password: string().required().min(3),
        }),
    })

    const signIn = handleSubmit(async (values) => {
        disabled.value = true
        try {
            await signInWithEmailAndPassword($firebaseAuth, values.email, values.password)
            router.push('/dashboard')
        } catch (e) {
            toast.error('Password Is Invalid or User Does Not Have a Password!')
        }
        disabled.value = false
    })
</script>
