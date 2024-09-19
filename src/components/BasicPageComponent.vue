<script setup>
    defineProps({
        title:String
    })
</script>

<template>
    <div class="grid grid-cols-2">
        <h1 class="col-span-2 text-4xl p-4">{{ title }}</h1>
        <div class="p-4">
            <slot name="explicacao" > Adicione seu texto de explicação. </slot>
        </div>
        <div class="p-4">
            <slot name="prototipo">Adicione seu prototipo.</slot>
        </div>
    </div>
</template>