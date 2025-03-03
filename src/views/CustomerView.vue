<script setup>
    import RouterLink from '../components/ui/RouterLink.vue';
    import Heading from '../components/ui/Heading.vue';
    defineProps({
        title: String
    })
</script>
<template>
    <div>
        <div>
            <RouterLink to="agregar-cliente">Agregar cliente</RouterLink>
        </div>
        <Heading>{{ title }}</Heading>
    </div>
</template>

