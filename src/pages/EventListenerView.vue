<script setup>
import { ref } from 'vue';

const count = ref(0)

</script>

<template>
    <BasicPageComponent title="Attribute Bindings">
        <template #explicacao >
        </template>

        <template #prototipo>
            <button class="border px-6 py-2 bg-slate-300 rounded-full" @click="count++"> clieque: {{ count }}</button>
        </template>
    </BasicPageComponent>
</template>


<style scoped>

.title{
    color: red;
}

</style>