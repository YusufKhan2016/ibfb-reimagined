<script setup lang="ts">
import Footer from './footer.vue';
import Header from './header.vue';

</script>

<template>
    <Header />
    <main>
        <router-view />
    </main>
    <Footer />
</template>