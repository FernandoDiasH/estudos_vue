<script setup>
const emit = defineEmits(['response'])

emit('response', 'Mensagem do componente filho')
</script>

<template>
    <h2>Child component</h2>
</template>