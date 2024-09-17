<script setup>
</script>

<template>
    <main>
        <nav>
            <RouterLink :to="{name:'home'}">Go to Home</RouterLink>
            <RouterLink :to="{name:'declarative-rendering'}">Declarative Rendering </RouterLink>
        </nav>
        <RouterView />
    </main>
</template>

