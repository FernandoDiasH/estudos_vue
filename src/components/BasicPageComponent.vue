<script setup>
    defineProps({
        title:String
    })
</script>

<template>
    <h1>{{ title }}</h1>
    <slot> Adicione seu template aqui.</slot>
</template>