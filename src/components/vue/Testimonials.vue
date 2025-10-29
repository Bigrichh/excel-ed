<template>
  <section class="w-full flex flex-col items-center gap-[80px]">
    <div class="w-full flex flex-col gap-[48px] items-center">
      <Carousel
        :opts="{
          align: 'start',
          loop: true,
        }"
      >
        <CarouselContent class="flex items-center">
          <CarouselItem
            v-for="review in reviews"
            class="basis-1/1 md:basis-1/2 2xl:basis-1/3"
          >
            <div
              class="p-[32px] flex flex-col items-start justify-start gap-[32px] h-fit rounded-[32px] text-black bg-white hover:text-white hover:bg-black transition-colors duration-300"
            >
              <div class="flex gap-[8px] items-center">
                <!-- <div class="size-[64px] rounded-[8px] overflow-hidden">
                  <img
                    class="size-full object-cover"
                    :src="getreviewerImageUrl(review.image)"
                    alt="reviewer image"
                  />
                </div> -->
                <p class="font-cg text-[18px] font-black leading-[90%]">
                  {{ review.name }} heloooo
                </p>
              </div>
              <p
                class="font-rd opacity-70 text-[16px] leading-[110%] font-semibold text-left"
              >
                {{ review.review }}
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <!-- Carousel Navigation -->
        <div
          class="!absolute !flex !gap-[8px] !bottom-[113%] md:!bottom-[116%] lg:!bottom-[125%] 2xl:!bottom-[128%] right-0"
        >
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  </section>
</template>

<script>
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default {
  name: "Success-Stories",
  components: {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  },
  data() {
    return {
      reviews: [
        {
          review:
            "Before working with Excel Ed, I had no idea how to turn my experiences into a compelling college application. They helped me uncover my story, refine my personal statement, and confidently present my strengths. Getting accepted into Drexel University felt like a dream come true, and I know I couldn’t have done it without their guidance.",
          name: " Asantewaa – Drexel University, USA",
          image: "TirathGinday",
        },
        {
          review:
            "I was completely lost trying to transfer from community college. The process felt overwhelming, especially figuring out scholarships and financial aid. Excel Ed walked me through every step, helped me build my application, and guided me in writing essays that reflected who I truly am. Not only did I get into Virginia Tech, but I also received scholarship support that made it financially possible.",
          name: " Dilys Owusu – Virginia Tech, USA",
          image: "ValandiKotorri",
        },
        {
          review:
            "As a high school student, I had passion but no real direction. I was interested in computer science, but I didn’t know how it connected to my purpose. Through the Passion Discovery Workshop, I identified my superpower and realized I could use my skills to solve real problems. With Excel Ed’s guidance, I launched a passion project focused on using technology to help combat youth drug addiction in my community. This experience didn’t just change my mindset, it helped me find my mission.",
          name: "Jaydon Stanley Owusu – Martinique",
          image: "AliAwan",
        },
        {
          review:
            "After graduating from college, I felt stuck in a job that didn’t excite me. I had big dreams, but I didn’t know how to reach them. Excel Ed helped me refine my resume, position my skills, and regain confidence in my purpose. Today, I’m working in my dream job and I finally feel like I’m walking in alignment with my passion",
          name: " Aaliyah Eghan – USA",
          image: "IliasMihalis",
        },
        {
          review:
            "I joined the Passion Discovery Workshop not knowing how to turn my interests into something impactful. Through their guidance, I not only discovered my passion but also built it into a real initiative. I have now launched a cybersecurity awareness program on my campus, and I am already seeing the difference it’s making.",
          name: "Cham Niteka – Rwanda",
          image: "BrunoRibeiro",
        },
      ],
    };
  },
  methods: {
    getreviewerImageUrl(name) {
      return new URL(
        `../../../assets/images/home/reviewers/${name}.webp`,
        import.meta.url
      ).href;
    },
  },
};
</script>
