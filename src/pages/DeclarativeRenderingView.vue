<script setup>
import {ref, reactive} from 'vue'

const counter = reactive({count:0})
const message = ref('Hello World!')
counter.count++

</script>

<template>
    <BasicPageComponent title="Declarative Rendering">
        <template #explicacao >
            <p>
                Nesse tutorial vamos aprender como funciona o 'reactive' e 'ref'.
            </p>
        </template>

        <template #prototipo>
            <p>{{ message }}</p>
            <p>Total é: {{ counter.count }}</p>
        </template>
    </BasicPageComponent>
</template>