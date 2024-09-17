<script setup>
import { ref } from 'vue';

    const prop = defineProps({
        name: String
    })
    const linkName = ref(prop.name.toLocaleLowerCase())
    if(prop.name.includes(' ')){
        linkName.value = prop.name.toLocaleLowerCase().split(' ').join('-')
    }
</script>

<template>
    <RouterLink :to="{name: linkName}">{{ name }}</RouterLink>
</template>