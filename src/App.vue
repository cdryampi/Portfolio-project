<template>
  <div class="min-h-screen overflow-hidden">
    <!-- Wrap components in Suspense to handle loading -->
    <Suspense>
      <template #default>
        <div class="bg-primary2">
          <HeroSection />
          <Skills class="hidden sm:hidden lg:block md:hidden" />
          <Services />
          <Projects />
          <Contact />
          <Footer />
          <BackToTop />
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <LoadingSpinnerComponent />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

import LoadingSpinnerComponent from "./components/LoadingSpinnerComponent.vue";

AOS.init({
  duration: 2000,
  delay: 200,
});
const HeroSection = defineAsyncComponent(() =>
  import("./components/HeroSectionComponent.vue")
);
const Skills = defineAsyncComponent(() =>
  import("./components/SkillsComponent.vue")
);
const Services = defineAsyncComponent(() =>
  import("./components/ServicesComponent.vue")
);
const Projects = defineAsyncComponent(() =>
  import("./components/ProjectsComponent.vue")
);
const Contact = defineAsyncComponent(() =>
  import("./components/ContactComponent.vue")
);
const Footer = defineAsyncComponent(() =>
  import("./components/FooterComponent.vue")
);
const BackToTop = defineAsyncComponent(() =>
  import("./components/BackToTopComponent.vue")
);
</script>
