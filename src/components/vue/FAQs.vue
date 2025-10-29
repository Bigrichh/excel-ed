<template>
  <section
    class="w-full flex flex-col items-center overflow-clip"
  >
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
          question: "1. Question?",
          answer:
            "Answer",
        },
        {
          question: "2. Question?",
          answer:
            "Answer",
        },
        {
          question: "3. Question?",
          answer:
            "Answer",
        },
        {
          question: "4. Question?",
          answer:
            "Answer",
        },
        {
          question: "5. Question?",
          answer:
            "Answer",
        },
        {
          question: "6. Question?",
          answer:
            "Answer",
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
