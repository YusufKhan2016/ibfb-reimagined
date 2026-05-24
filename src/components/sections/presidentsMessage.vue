<script setup>
import { onMounted, ref } from 'vue'
import gsap, { ScrollTrigger, SplitText } from 'gsap/all'
import Button from '../ui/button.vue'
import Header from '../ui/header.vue';

const messageText = ref(null)
const presidentImage = ref(null);
const sectionWrapper = ref(null);

gsap.registerPlugin(SplitText) 
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {

  let split = SplitText.create(messageText.value, { type: "words" });
  let tl = gsap.timeline({
    ScrollTrigger: {
      trigger: sectionWrapper.value,
        start: 'top 70%',
        toggleActions: 'play pause resume reset'
    }
  });

  tl.from(split.words, {
    filter: "blur(10px)",
    stagger: 0.01,
    ease: 'power3.out',
    duration: 0.5,
  })
    .from(presidentImage.value, {
    minWidth: '200px',
    duration: 2,
  })
  
})  

</script>

<template>
  <section class="m-4">
    <div class="relative w-full py-16 px-10 overflow-hidden">

      <div
        ref="sectionWrapper"
        class="relative z-10 container mx-auto"
      >

        <Header 
          first-part="President's"
          second-part="Message"
        />

        <div class="flex justify-between items-center gap-40 mt-12">
          <div 
            ref="messageText" 
            class="space-y-6"
          >
            <div class="text-lg text-black leading-relaxed">
              
              <div>Dear visitors,</div> 
              <div>
                Assalamualaikum and welcome to the website of International Business Forum of Bangladesh (IBFB).
                Please let me take the opportunity to provide some information on the International Business Forum of Bangladesh (IBFB).
    
                IIBFB is a research and advocacy based non-profit and non-partisan nationwide business forum of Bangladeshi and foreign business owners including resource and knowledge based individuals such as academia, civil society members, retired high govt. officials, journalists, lawyers etc. Working together, our goal is to identify common business and economic challenges, present solutions and advocate for changes in public policies which will help in establishing an enabling business environment and accelerating economic growth of Bangladesh
              </div>
              
            </div>
  
            <div class="flex mt-8">
              <Button>Read more</Button>
            </div>
          </div>

          <div 
            ref="presidentImage"
            class="relative overflow-hidden min-w-75"
          >
            <img 
              src="@/assets/presidentMessage/president.jpg" 
              alt=""
              class="h-full w-full bg-cover"
            >
          </div>
        </div>


      </div>
      
    </div>
  </section>
  <section class="text-4xl">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magni, suscipit similique nulla dolores voluptatibus nam id recusandae quaerat error iste autem tempore neque corrupti et quod in qui distinctio! Vel, cumque consectetur quidem tempora, libero voluptatibus, suscipit incidunt autem aspernatur amet nisi sunt. Corporis sed similique rerum ipsa. Ad, nemo voluptate velit consequuntur sunt voluptatum ipsum. Perferendis placeat eveniet accusamus molestiae dolor cum ab deserunt sequi labore optio tempore voluptatem illum aperiam quam laborum impedit dolorem dolores esse maxime commodi natus, perspiciatis, eos sapiente? Neque veniam vero at, itaque aperiam minus, corporis officiis eum, doloribus sint deleniti iure commodi hic necessitatibus quisquam laborum magni ab! Minima perspiciatis sapiente vel quae eligendi qui, suscipit perferendis. Voluptatem quas laudantium earum error, accusantium ipsum eaque animi aspernatur quia necessitatibus provident, voluptates cum nihil autem recusandae! Nemo voluptate amet iusto, eligendi pariatur, accusantium sunt eos autem ea dignissimos voluptas iure dicta eius! Culpa praesentium excepturi quaerat quae soluta incidunt dolore quas, veniam accusamus earum corrupti delectus necessitatibus ipsam laudantium vitae, nobis sit atque fugit repudiandae! Ipsum dignissimos in ullam praesentium, perferendis aliquid maiores omnis sapiente, inventore delectus animi ipsa. Suscipit molestias accusantium reprehenderit quas? Accusamus quasi odio harum cum qui quo nostrum eius, aspernatur culpa in atque. Esse, corrupti molestiae nostrum fugit voluptatibus doloribus fuga. Veritatis placeat quidem architecto a repellat aut vero nobis eum, incidunt provident quo corporis blanditiis illo iusto eveniet obcaecati, excepturi consequatur molestiae odit! Non possimus voluptas blanditiis repellat ex autem dolorum sunt! Iusto illo odio fugiat ullam odit. Voluptatum, illo earum ipsa facere sunt ad rerum modi temporibus nemo repellat iure fugit iste praesentium laudantium amet quibusdam quas? Placeat dolor et eos temporibus corrupti voluptates iure eligendi voluptatem voluptate doloremque asperiores quae voluptas laborum, obcaecati corporis facere iusto consectetur similique alias cupiditate enim ut commodi iste. Tempore, veritatis?
  </section>
</template>
