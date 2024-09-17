<script setup>
    import { useRoute, useRouter } from 'vue-router';
    const routes = useRouter()
    const teste = ()=>{
        routes.push({name: 'basico'})
    }
</script>

<template>
    <BasicPageComponent title="Tutorial">
        <p :class="titleClass">Troque minha cor</p>
    </BasicPageComponent>
</template>