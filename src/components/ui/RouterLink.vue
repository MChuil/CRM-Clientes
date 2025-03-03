<script setup>
    import { RouterLink } from 'vue-router';

    defineProps({
        to: {
            type: String,
        }
    });

</script>

<template>
    <RouterLink 
        :to = "{ name: to }"
        class="block md:inline-block rounded bg-blue-500 text-white py-1 px-3">
        <slot></slot>
    </RouterLink>
</template>
