<template>
  <div data-aos="fade-up" data-aos-duration="2000" class="w-full">
    <Vue3Marquee
      style="width: 100%"
      :vertical="false"
      :pause-on-hover="false"
      :clone="false"
      :duration="25"
    >
      <div class="w-full flex gap-[24px]">
        <div class="img-card size-[450px] rounded-[32px] overflow-clip">
          <img
            class="size-full object-cover"
            src="/images/components/marquee/slider1.webp"
            alt="Slider img"
          />
        </div>
        <div class="img-card size-[450px] rounded-[32px] overflow-clip">
          <img
            class="size-full object-cover"
            src="/images/components/marquee/slider2.webp"
            alt="Slider img"
          />
        </div>
        <div class="img-card size-[450px] rounded-[32px] overflow-clip">
          <img
            class="size-full object-cover"
            src="/images/components/marquee/slider3.webp"
            alt="Slider img"
          />
        </div>
        <div class="img-card size-[450px] rounded-[32px] overflow-clip">
          <img
            class="size-full object-cover"
            src="/images/components/marquee/slider4.webp"
            alt="Slider img"
          />
        </div>
        <div
          class="img-card size-[450px] rounded-[32px] overflow-clip mr-[24px]"
        >
          <img
            class="size-full object-cover"
            src="/images/components/marquee/slider5.webp"
            alt="Slider img"
          />
        </div>
      </div>
    </Vue3Marquee>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";

export default {
  name: "ImageMarquee",
  components: {
    Vue3Marquee,
  },
};
</script>

<style>
.img-card{
  position: relative;
}

.img-card::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, #000 100%);
}

</style>
