<script setup>
import {ref, reactive} from 'vue'

const counter = reactive({count:0})
const message = ref('Hello World!')
counter.count++

</script>

<template>
    <BasicPageComponent title="Declarative Rendering">
        <p>{{ message }}</p>
        <p>Total é: {{ counter.count }}</p>
    </BasicPageComponent>
</template>