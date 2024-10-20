<script setup>
import FeatureBox from "./FeatureBox.vue";
</script>

<template>
  <div
    class="max-w-[1280px] mx-auto gap-4 grid grid-cols-1 xl:grid-cols-3 mt-20"
  >
    <FeatureBox>
      <div class="text-lg font-bold">Desktop Application</div>
      <div class="py-2">
        The application is developed using PHP and runs using PHP desktop which
        enables this to run on your desktop
      </div>
    </FeatureBox>
    <FeatureBox>
      <div class="text-lg font-bold">Functionality</div>
      <div class="py-2">
        Different types of tasks to chose from, each with their own respective
        purposes
      </div>
    </FeatureBox>
    <FeatureBox>
      <div class="text-lg font-bold">Customization:</div>
      <div class="py-2">
        Customize the app with a variety of themes and custom tags to categorize
        your tasks
      </div>
    </FeatureBox>
  </div>
</template>
