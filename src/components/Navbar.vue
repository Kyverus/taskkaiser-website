<script setup>
import { FaRegularMoon, FaRegularSun } from "oh-vue-icons/icons";
import { BiGithub } from "oh-vue-icons/icons";
import { addIcons } from "oh-vue-icons";
import TaskKaiserIcon from "./TaskKaiserIcon.vue";

addIcons(FaRegularMoon, FaRegularSun, BiGithub);

defineProps({
  isDark: Boolean,
});
</script>

<template>
  <div id="navbar">
    <div id="nav-content">
      <div id="nav-brand">
        <TaskKaiserIcon id="site-logo" />
      </div>

      <div id="nav-links">
        <button @click="$emit('darkmode')">
          <v-icon
            v-if="isDark"
            name="fa-regular-sun"
            fill="#e7e1d4"
            class="nav-icon"
          />
          <v-icon v-else name="fa-regular-moon" class="nav-icon" />
        </button>
        <a>
          <v-icon name="bi-github" class="nav-icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  padding: 0;
  background-color: transparent;
  border: none;
}
#navbar {
  display: flex;
  top: 0;
  width: 100%;
  justify-content: center;
  height: auto;
}

#nav-content {
  display: flex;
  justify-content: space-between;
  width: 1440px;
  padding: 5px 10px;
}

#nav-brand,
#nav-links {
  display: flex;
  align-items: center;
  padding: 0px 20px;
}

#site-logo {
  width: 64px;
  height: 64px;
  fill: var(--yellow);
}

.nav-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

[theme="dark"] .nav-icon {
  fill: var(--white-primary);
}

[theme="light"] .nav-icon {
  fill: var(--black-primary);
}
</style>
