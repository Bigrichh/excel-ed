<template>
  <section class="w-full flex flex-col items-center overflow-clip">
    <!-- Faqs container -->
    <div class="w-full flex flex-col gap-[24px]">
      <div
        @click="handleAccordion(index)"
        v-for="(faq, index) in faqs"
        class="faq-item w-full h-fit flex items-center justify-between gap-[16px] md:gap-[120px] p-[24px] rounded-[8px] border-[1px] border-[#353535] hover:border-white"
        :class="{ 'active-item': activeAccordion === index }"
      >
        <div class="flex gap-[12px]">
          <div class="flex flex-col gap-[8px]">
            <p
              class="text-black text-[16px] md:text-[20px] font-cg leading-[90%] font-extrabold"
            >
              {{ faq.question }}
            </p>

            <transition name="fade">
              <p
                key="longdesc"
                v-show="activeAccordion === index"
                class="text-black/70 font-rd font-semibold text-[16px] leading-[110%]"
              >
                {{ faq.answer }}
              </p>
            </transition>
          </div>
        </div>
        <img
          class="size-[20px] icon self-start"
          src="/svgs/chevron-down.svg"
          alt="chevron-down-icon"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FAQs",
  data() {
    return {
      activeAccordion: null, // Track which accordion is active
      faqs: [
        {
          question:
            "1. Can I participate if I’m not sure of my career path yet?",
          answer:
            "Absolutely. You don’t need to have it figured out before you start. Our Passion Discovery Workshops are specifically designed to help you uncover your interests, identify your core strengths (your “superpower”), and begin building a career path from there.",
        },
        {
          question:
            "2. How long does each workshop or counseling session last?",
          answer:
            "Workshops typically run for 2–3 hours, and college counseling sessions are packaged based on your needs. We offer flexible counseling plans depending on where you are in the application process.",
        },
        {
          question: "3. Are the workshops in-person, online, or hybrid?",
          answer:
            "Workshops are primarily held in-person for maximum engagement, but we offer online or hybrid options for international or remote students.",
        },
        {
          question: "4. How do students choose their mentors?",
          answer:
            "Students can select mentors from seven major industries, based on their interests and the passion project they want to build. Our matching system helps align students with mentors who best support their goals.",
        },
        {
          question: "5. What kinds of passion projects can I build?",
          answer:
            "Students can design projects in areas across 4 categories: Research Project, Creative Project, Tech Prototype, Community Initiative. If you're unsure, we guide you step-by-step to transform your passion into a real-world initiative or portfolio project.",
        },
        {
          question:
            "6. What happens if I'm not satisfied with my mentor match?",
          answer:
            "Your growth matters to us. If you feel your mentor is not the right fit, you can request a rematch at any time during your active subscription, no questions asked",
        },
      ],
    };
  },
  methods: {
    handleAccordion(index) {
      // Toggle the clicked accordion or collapse if clicked again
      this.activeAccordion = this.activeAccordion === index ? null : index;
    },
  },
};
</script>

<style scoped>
/* Styles to hande faq */
.faq-item {
  position: relative;
  overflow: hidden;
}

.faq-item:hover {
  cursor: pointer;
}

.faq-item.active-item {
  border: 1px solid white;
}

.faq-item.active-item .icon {
  transform: rotate(180deg);
}

.faq-item .icon {
  transform: rotate(0deg);
  transition: all 0.5s ease-out;
  transform-origin: center center;
  display: block;
}

/* Transition classes for the "fade" animation */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active {
  transition: all 0.5s linear;
}
</style>
