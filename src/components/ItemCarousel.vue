<script setup>
import { bannerContent } from "../assets/data/banner-content";
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";

const [emblaRef] = emblaCarouselVue({ loop: true }, [
  Autoplay({ stopOnInteraction: false }),
]);
</script>

<template>
  <div class="embla overflow-hidden w-[800px] xl:w-[500px]" ref="emblaRef">
    <div class="embla__container flex">
      <template v-for="item in bannerContent">
        <div class="embla__slide min-w-0 flex-grow-0 flex-shrink-0 basis-full">
          <img
            :src="item.imgURL"
            class="w-[800px] xl:w-[500px] xl:[transform:perspective(1000px)rotateY(-20deg)translateX(-7px)] xl:py-5"
          />
        </div>
      </template>
    </div>
  </div>
</template>
