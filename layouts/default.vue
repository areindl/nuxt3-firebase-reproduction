<script setup lang="ts">
    import useIDTokenChange from '~~/composables/useIDTokenChange'
    useIDTokenChange()
</script>

<template>
    <div class="mb-5">
        <slot />
    </div>
</template>
