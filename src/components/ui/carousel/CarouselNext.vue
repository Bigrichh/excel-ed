<script setup>
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCarousel } from "./useCarousel";

const props = defineProps({
  variant: { type: null, required: false, default: "outline" },
  size: { type: null, required: false, default: "icon" },
  class: { type: null, required: false },
});

const { orientation, canScrollNext, scrollNext } = useCarousel();
</script>

<template>
  <Button
    data-slot="carousel-next"
    :disabled="!canScrollNext"
    @click="scrollNext"
    class="size-fit bg-transparent p-[8px] md:p-[16px] rounded-full border-[1px] text-black border-black/100 hover:bg-white hover:border-none"
  >
    <div class="size-[22px] md:size-[26px]">
      <img
        class="size-full object-cover"
        src="/svgs/arrow-right.svg"
        alt="arrow"
      />
    </div>
  </Button>
</template>
