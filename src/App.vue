<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "",
});

const toggleDark = useToggle(isDark);
</script>

<template>
  <div
    id="app"
    class="min-h-dvh bg-ct-white-primary dark:bg-ct-black-primary text-ct-black-primary dark:text-ct-white-primary"
  >
    <div class="min-h-dvh">
      <Navbar @darkmode="toggleDark" :isDark="isDark" />
      <RouterView />
    </div>
  </div>
</template>
