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
                <div class="size-[64px] rounded-[8px] overflow-hidden">
                  <img
                    class="size-full object-cover"
                    :src="getreviewerImageUrl(review.image)"
                    alt="reviewer image"
                  />
                </div>
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
        <div class="!absolute !flex !gap-[8px] !bottom-[113%] md:!bottom-[116%] lg:!bottom-[125%] 2xl:!bottom-[128%] right-0">
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
            "I started with no experience at all in electrics. Everything was new to me, from using tools to understanding wiring diagrams. But with each level I completed, my confidence grew. I worked hard, asked questions, and passed every stage. Now, I’m working full-time as an electrician on both domestic and commercial sites, and I’m proud of how far I’ve come.",
          name: " Tirath Ginday",
          image: "TirathGinday",
        },
        {
          review:
            "I used to work in a completely different industry and knew I needed a change. Starting this course felt like a big step, but I took it seriously and pushed myself every day. I went from knowing nothing to completing my Level 3 diploma, and not long after, I got a full-time job. I now work independently on full rewires and enjoy what I do.",
          name: " Valandi Kotorri",
          image: "ValandiKotorri",
        },
        {
          review:
            "I completed my Level 3 in electrical installations and knew I wanted to keep going. The course helped me develop a solid understanding of installation techniques, fault finding, and regulations. I’m now working on-site, building up real experience, and planning to get my inspection and testing qualification next.",
          name: "Ali Awan",
          image: "AliAwan",
        },
        {
          review:
            "The training was proper hands-on and focused on real-world stuff that no one else really covers. It wasn’t just about ticking boxes — it was about actually knowing how to do the job properly. Now I’ve got my own small electrical business, and I still go back to the course materials now and then when I need a reminder",
          name: " Ilias Mihalis",
          image: "IliasMihalis",
        },
        {
          review:
            "Before I joined, I only had a bit of DIY knowledge — nothing formal. But this course gave me the skills and confidence I needed to go professional. I now work full-time installing consumer units, lighting systems, and doing maintenance. It feels good to be trusted on the job and to know I’ve earned it.",
          name: "Bruno Ribeiro",
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
