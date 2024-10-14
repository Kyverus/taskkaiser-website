<script setup>
import { useDark, useToggle } from "@vueuse/core";
import Banner from "./components/Banner.vue";
import Navbar from "./components/Navbar.vue";

const isDark = useDark({
  selector: "body",
  attribute: "theme",
  valueDark: "dark",
  valueLight: "light",
});

const toggleDark = useToggle(isDark);
</script>

<template>
  <div id="app">
    <Navbar @darkmode="toggleDark" :isDark="isDark" />
    <Banner />
  </div>
</template>

<style>
:root {
  --black-primary: #101010;
  --white-primary: #efefef;
  --black-secondary: #202020;
  --white-secondary: #dfdfdf;
  --yellow: #ffc75e;
  --blue: #00b8b8;
}

* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(239, 239, 239, 1) 50%,
    rgba(223, 223, 223, 1) 100%
  );
  font-family: Arial, Helvetica, sans-serif;
  color: var(--black-primary);
}

body[theme="dark"] {
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(16, 16, 16, 1) 50%,
    rgba(32, 32, 32, 1) 100%
  );
  color: var(--white-primary);
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    width: 1280px;
  }
}
</style>
