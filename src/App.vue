<script setup>
</script>

<template>
    <main class="grid grid-cols-5">
        <nav class="flex gap-6 p-4 col-span-5">
            <CustomLinkComponent name="Home" />
            <CustomLinkComponent name="Declarative Rendering" />
            <CustomLinkComponent name="Attribute Bindings" />
        </nav>
        <div class="col-span-5">
            <RouterView />
        </div>
    </main>
</template>

