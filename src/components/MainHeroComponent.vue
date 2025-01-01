<template>
  <section class="relative w-full" data-aos="zoom-in-up">
    <navBar :handleLinkClick="handleLinkClick" />
    <div
      class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative"
    >
      <div
        class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-2 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto"
      >
        <div class="lg:py-6">
          <div class="text-center lg:text-left">
            <h1 class="pt-4 font-bold text-4xl md:text-5xl lg:text-6xl">
              Hola, Me llamo
              <span class="text-primary">Yampi</span>
            </h1>
          </div>
          <p
            class="text-gray-500 pt-8 text-center lg:text-left mx-auto max-w-xl"
          >
            Soy un desarrollador de software con experiencia en el desarrollo de
            aplicaciones web y administración de sistemas.
          </p>
          <div
            class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0"
          >
            <a
              href="#contact"
              class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
              @click="handleLinkClick('#contact')"
            >
              <span
                class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent"
              >
              </span>
              <span class="relative flex items-center justify-center">
                Contactame
              </span>
            </a>

            <button
              class="border border-primary px-6 ,d:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
            >
              <div
                class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative"
              >
                <div class="svg-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="download-icon"
                    fill="none"
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                  >
                    <path
                      class="download-arrow"
                      stroke="#5D356D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 9L9 13M9 13L5 9M9 13V1"
                    />
                    <path
                      class="download-box"
                      stroke="#5D356D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                    />
                  </svg>
                  <div class="download-loader hidden"></div>
                </div>
                <a href="/cv.pdf" download="cv.pdf" class="pl-2 text-primary">
                  Descargar CV
                </a>
              </div>
            </button>
          </div>
        </div>
        <div class="lg:h-full md:flex">
          <figure class="relative overflow-hidden rounded-lg">
            <img
              src="../assets/images/yampi.png"
              alt="Yampi"
              class="w-full h-auto object-cover"
            />
            <div
              class="absolute top-0 left-0 w-14 h-14 bg-white clip-top-left rounded-br-[20px]"
            ></div>
            <div
              class="absolute bottom-0 right-0 w-14 h-14 bg-white clip-bottom-right rounded-tl-[20px]"
            ></div>
            <figcaption
              class="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-1/4 justify-between rounded-xl border border-primary2 bg-white/75 py-1 px-2 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm"
            >
              <div>
                <h5
                  class="uppercase font-semibold text-primary text-sm text-center tracking-wider"
                >
                  Desarrollador FullStack
                </h5>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHandleLinkClick } from "../composables/handleLinkClick";
import { ref, defineAsyncComponent } from "vue";

const { handleLinkClick } = useHandleLinkClick();
const isMenuOpen = ref(false);
// import NavBar from './NavBarComponent.vue' for synchronous loading of component
const navBar = defineAsyncComponent(() => import("./NavBarComponent.vue"));
</script>

<style scoped>
.click-top-left {
  clip-path: polygon(0 0, 100% 0, 100%);
}
.clip-bottom-right {
  clip-path: polygon(100% 100%, 100% 0, 100%);
}
</style>
