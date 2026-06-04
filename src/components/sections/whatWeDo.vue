<script setup>
import Header from '@/components/ui/header.vue';
import {
  FlaskConical,
  Megaphone,
  GraduationCap,
  UsersRound,
  Rocket,
  BadgeCheck
} from '@lucide/vue';

const services = [
  {
    icon: FlaskConical,
    title: 'Business Research',
    description: 'In-depth market analysis and data-driven insights to guide strategic decisions.',
  },
  {
    icon: Megaphone,
    title: 'Policy Advocacy',
    description: 'Championing business-friendly policies and representing member interests.',
  },
  {
    icon: GraduationCap,
    title: 'Training',
    description: 'Skill-building programs and capacity development for professionals.',
  },
  {
    icon: UsersRound,
    title: 'Workshop & Seminars',
    description: 'Collaborative forums and expert-led sessions that spark ideas and connections.',
  },
  {
    icon: Rocket,
    title: 'Business Promotion',
    description: 'Amplifying your brand and expanding market reach through targeted exposure.',
  },
  {
    icon: BadgeCheck,
    title: 'Services to Members',
    description: 'Exclusive resources, tools, and support tailored for our valued members.',
  },
];
</script>

<template>
  <section class="m-4">
    <div class="relative w-full py-16 px-10 overflow-hidden">
      <div class="relative z-10 container mx-auto">

        <div class="flex justify-between mb-12">
          <Header
            first-part="What"
            second-part="We Do"
            wrapper-class="text-start"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group flex flex-col gap-4 border border-solid border-black/10 p-6 cursor-pointer transition-all duration-300 shadow-lg bg-white"
          >
            <div class="w-12 h-12 flex bg-[#0B1050] text-white items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <component :is="service.icon" :size="24" class="stroke-current" />
            </div>

            <div>
              <h3 class="text-base font-semibold tracking-wide uppercase mb-1">
                {{ service.title }}
              </h3>
              <p class="text-sm leading-relaxed opacity-75">
                {{ service.description }}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>