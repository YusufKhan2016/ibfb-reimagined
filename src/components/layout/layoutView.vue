<script setup lang="ts">
import Footer from './footer.vue';
import Header from './header.vue';

</script>

<template>
    <Header/>

    <div class="bg-[#0B1050] sticky top-0 border-b border-b-solid border-white">
        <ul class="flex justify-between container mx-auto px-10 py-1 text-white ">
            
            <li>Home</li>
            <li>About IBFB</li> 
            <li>What we do</li>
            <li>Membership</li>
            <li>News & Events</li>
            <li>Resources</li>
            <li>Gallery</li>
            <li>Archive</li>
            <li>Bangladesh</li>
            <li>Career</li>
            <li>Contact us</li>
            
        </ul>
    </div>

    <main class="overflow-x-hidden">
        <router-view />
    </main>

    <Footer />
</template>