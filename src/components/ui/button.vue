<script setup>

defineProps({
    bgColor: {
        type: String,
        default: '#0B1050'
    },
    textColor: {
        type: String,
        default: '#fff'
    }
})

</script>

<template>
    <button
    class="group relative overflow-hidden px-5 py-3 font-semibold text-sm hover:shadow-[0_0_28px_rgba(103,232,249,0.35)] transition-all duration-300"
    :style="{
        backgroundColor: bgColor,
        color: textColor
    }"
    >
        <span class="relative block leading-none overflow-hidden">
            
            <span
            class="flex gap-2 transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)]
            group-hover:translate-y-[-150%]"
            >
                <slot/>
            </span>

            <span
            class="absolute flex gap-2 left-0 top-0 translate-y-[150%]
            transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)]
            group-hover:translate-y-0"
            >
                <slot/>
            </span>

        </span>
    </button>
</template>