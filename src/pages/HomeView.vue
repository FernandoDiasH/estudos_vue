<script setup>
    import { useRoute, useRouter } from 'vue-router';
    const routes = useRouter()
    const teste = ()=>{
        routes.push({name: 'basico'})
    }
</script>

<template>
    <h1>Tutorial</h1>
</template>