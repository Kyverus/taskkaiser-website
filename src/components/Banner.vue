<script setup>
import ItemCarousel from "./ItemCarousel.vue";
import { BiGithub } from "oh-vue-icons/icons";
import { addIcons } from "oh-vue-icons";

addIcons(BiGithub);
</script>

<template>
  <div id="banner" class="container mx-auto mt-12 py-2">
    <div
      class="text-ct-black-primary dark:text-ct-white-primary xl:flex xl:justify-center"
    >
      <div
        class="flex flex-col space-y-2 items-center xl:items-start xl:justify-center px-5 xl:px-0"
      >
        <div class="banner-text text-ct-yellow text-7xl drop-shadow-xl">
          TASKKAISER
        </div>
        <p class="font-bold text-xl indent-10 w-auto xl:w-[500px]">
          Manage and monitor your daily, weekly tasks in one Desktop Application
        </p>
        <div class="py-10 space-x-2 font-bold">
          <button
            class="w-32 border-2 rounded-full p-2 border-ct-yellow bg-ct-yellow dark:bg-transparent"
          >
            Download
          </button>
          <button
            class="w-32 border-2 rounded-full p-2 border-ct-yellow bg-ct-yellow dark:bg-transparent"
          >
            <span>Github</span>
            <a>
              <v-icon name="bi-github" class="size-5 mx-1" />
            </a>
          </button>
        </div>
      </div>
      <div class="flex justify-center xl:block">
        <ItemCarousel />
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-text {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bolder;
}
</style>
