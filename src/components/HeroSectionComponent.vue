<template>
  <div class="relative w-full p-3 bg-primary">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        class="col-span-1 order-2 md:order-1 lg:order-1 rounded-3xl p-5 bg-white"
      >
        <Experience />
      </div>
      <div
        class="col-span-1 order-1 md:col-span-1 lg:col-span-2 rounded-3xl p-5 bg-white"
      >
        <MainHero />
      </div>
      <div
        class="col-span-1 order-3 md:order-1 lg:order-3 flex justify-center rounded-3xl p-4 bg-white"
      >
        <Education />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const MainHero = defineAsyncComponent(() => import("./MainHeroComponent.vue"));

const Experience = defineAsyncComponent(() =>
  import("./ExperienceComponent.vue")
);

const Education = defineAsyncComponent(() =>
  import("./EducationComponent.vue")
);
</script>

<style></style>
