<script setup>

import {ref, reactive} from 'vue'
const titleClass = ref('title')

</script>

<template>
    <BasicPageComponent title="Attribute Bindings">
        <template #explicacao >
        </template>

        <template #prototipo>
            <h1 :class="titleClass">Pinte-me esse titulo</h1>
        </template>
    </BasicPageComponent>
</template>


<style scoped>

.title{
    color: red;
}

</style>