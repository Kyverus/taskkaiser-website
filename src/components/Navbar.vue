<script setup>
import TaskKaiserIcon from "./TaskKaiserIcon.vue";
import { FaRegularMoon, FaRegularSun } from "oh-vue-icons/icons";
import { addIcons } from "oh-vue-icons";
import { RouterLink } from "vue-router";

addIcons(FaRegularMoon, FaRegularSun);

defineProps({
  isDark: Boolean,
});
</script>

<template>
  <div
    id="navbar"
    class="w-full bg-ct-white-primary dark:bg-ct-black-primary flex top-0 justify-center h-auto"
  >
    <div id="nav-content" class="w-[1440px] flex justify-between px-3 py-1">
      <div class="flex items-center px-5">
        <RouterLink to="/">
          <TaskKaiserIcon
            id="site-logo"
            class="size-16 text-ct-yellow"
            iconFill="#ffc75e"
          />
        </RouterLink>
      </div>
      <div class="flex items-center px-5 space-x-4">
        <RouterLink to="/guides">Guides</RouterLink>
        <button @click="$emit('darkmode')">
          <v-icon
            v-if="isDark"
            name="fa-regular-sun"
            class="size-8 text-ct-yellow"
          />
          <v-icon v-else name="fa-regular-moon" class="size-8 text-ct-yellow" />
        </button>
      </div>
    </div>
  </div>
</template>
