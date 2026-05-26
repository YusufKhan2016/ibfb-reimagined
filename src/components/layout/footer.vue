<script setup>
import { footerLinks } from '@/staticDatas/footer'
import { onUnmounted, ref } from 'vue'
import Button from '@/components/ui/button.vue'
import { ChevronUp } from '@lucide/vue'
import { onMounted } from 'vue'

const newsletter = ref({
  fullName: '',
  email: '',
})

const subscribeLoading = ref(false)

const handleNewsletterSubmit = async () => {
  if (!newsletter.value.fullName || !newsletter.value.email) {
    alert('Please fill all fields')
    return
  }
  subscribeLoading.value = true
  setTimeout(() => {
    alert('Thank you for subscribing!')
    newsletter.value = { fullName: '', email: '' }
    subscribeLoading.value = false
  }, 1000)
}

const bringToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <footer class="bg-linear-to-b from-[#0B1050] to-black text-gray-300 pt-16 pb-8">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 pb-12 border-b border-blue-900">

        <div class="lg:col-span-1">
          <h3 class="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact</h3>
          <div class="space-y-3 text-sm">
            <div>
              <p class="font-semibold text-white mb-1">
                International Business Forum of Bangladesh (IBFB)
              </p>
              <p>138/1, Tejgaon Industrial Area (2nd Floor),</p>
              <p>Dhaka-1208, Bangladesh</p>
            </div>
            <div>
              <p>
                <span class="text-gray-400">Phone: </span>
                <a href="tel:+880288878791" class="text-cyan-400 hover:text-cyan-300 transition"
                  >88-02-8878791</a
                >,
                <a href="tel:+880288878792" class="text-cyan-400 hover:text-cyan-300 transition"
                  >8878792</a
                >
              </p>
              <p>
                <span class="text-gray-400">Fax: </span>
                <a href="tel:+880288878793" class="text-cyan-400 hover:text-cyan-300 transition"
                  >88-02-8878793</a
                >
              </p>
              <p>
                <span class="text-gray-400">Email: </span>
                <a href="mailto:info@ibfb.org" class="text-cyan-400 hover:text-cyan-300 transition"
                  >info@ibfb.org</a
                >
              </p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2">
          <h3 class="text-white font-bold text-lg mb-6 uppercase tracking-wider">
            Subscribe to Newsletter
          </h3>

          <p class="text-gray-400 text-sm mb-4">
            Stay updated with our latest news, events, and insights.
          </p>

          <form @submit.prevent="handleNewsletterSubmit" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                v-model="newsletter.fullName"
                type="text"
                placeholder="Full Name"
                class="w-full px-4 py-3 bg-blue-900/40 border border-blue-700  text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                required
              />

              <input
                v-model="newsletter.email"
                type="email"
                placeholder="Email Address"
                class="w-full px-4 py-3 bg-blue-900/40 border border-blue-700  text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                required
              />
            </div>

            <Button
              type="submit"
              :disabled="subscribeLoading"
              class="px-8 py-3 uppercase text-sm tracking-wide"
              bg-color="cyan"
              text-color="black"
            >
              {{ subscribeLoading ? 'Subscribing...' : 'Subscribe' }}
            </Button>
          </form>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">

        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-5">About IBFB</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.about" :key="link.label">
              <a :href="link.href" class="text-gray-400 hover:text-cyan-400 transition text-sm">{{
                link.label
              }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-5">What We Do</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.whatWeDo" :key="link.label">
              <a :href="link.href" class="text-gray-400 hover:text-cyan-400 transition text-sm">{{
                link.label
              }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-5">News & Events</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.newsEvents" :key="link.label">
              <a :href="link.href" class="text-gray-400 hover:text-cyan-400 transition text-sm">{{
                link.label
              }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-5">Membership</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.membership" :key="link.label">
              <a :href="link.href" class="text-gray-400 hover:text-cyan-400 transition text-sm">{{
                link.label
              }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-5">Resources</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.resources" :key="link.label">
              <a :href="link.href" class="text-gray-400 hover:text-cyan-400 transition text-sm">{{
                link.label
              }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-5">Bangladesh</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.bangladesh" :key="link.label">
              <a :href="link.href" class="text-gray-400 hover:text-cyan-400 transition text-sm">{{
                link.label
              }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-blue-900 pt-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <p class="text-gray-500 text-xs">Copyright © 2010 - 2026 IBFB. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="[
        'fixed bottom-8 right-8 z-1001 hidden lg:flex transition-all duration-300 border border-white',
        showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      ]"
    >
      <Button
        @click="bringToTop"
      >
        <ChevronUp />
      </Button>
    </div>
  </footer> 
</template>
