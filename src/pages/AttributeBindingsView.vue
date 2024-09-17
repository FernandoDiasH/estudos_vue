<script setup>

import {ref, reactive} from 'vue'
const titleClass = ref('title')

</script>

<template>
    <BasicPageComponent title="Attribute Bindings">
        <p :class="titleClass">Troque minha cor</p>
    </BasicPageComponent>
</template>


<style scoped>

.title{
    color: red;
}

</style>