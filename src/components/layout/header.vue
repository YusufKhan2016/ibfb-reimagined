<script setup>
import { LifeBuoy, Search } from '@lucide/vue';
import { watch } from 'vue';

</script>

<template>
    <header class="relative -mt-6">
        <div class="bg-blue-100 pb-3">
            <div class="flex justify-between items-end container mx-auto px-10">
                <div class="flex items-end gap-4">
                    <img class="h-24" src="@/assets/logo.jpg" alt="">
                    <h1 class="text-xl font-bold text-[#0B1050]">International Business Forum of Bangladesh</h1>
                </div>

                <div class="flex gap-4 items-center">
                    <search />

                    <button class="bg-[#0B1050] hover:bg-white hover:border hover:border-solid hover:border-[#0B1050] py-1 px-2 hover:text-[#0B1050] text-white flex items-center transition-all gap-1">
                        <life-buoy size="14" />
                        Support IBFB
                    </button>
                </div>
            </div>
        </div>

    </header>
</template>