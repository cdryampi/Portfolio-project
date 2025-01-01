<template>
  <section>
    <div
      class="w-full bg-white border-b-5 border-y-4 border-primary2 flex flex-wrap justify-center items-center p-2 gap-0 lg:gap-5"
    >
      <div
        data-aos="zoom-in-up"
        v-for="element in Skills"
        :key="element.id"
        class="w-1/2 lg:w-1/12 p-4"
      >
        <div class="flex justify-center items-center"></div>
        <figure
          class="w-20 h-20 flex justify items-center rounded-full ml-2 mt-2"
        >
          <img
            :src="element.icono"
            :alt="element.habilidad"
            class="w-10 h-12 absolute z-10"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const Skills = ref([
  {
    id: 1,
    habilidad: "Programación en Python",
    icono: "https://img.icons8.com/color/48/python.png",
  },
  {
    id: 2,
    habilidad: "Desarrollo web con Django",
    icono: "https://img.icons8.com/color/48/django.png",
  },
  {
    id: 3,
    habilidad: "Desarrollo mobile con Kotlin",
    icono: "https://img.icons8.com/color/48/kotlin.png",
  },
  {
    id: 4,
    habilidad: "Administración de sistemas",
    icono: "https://img.icons8.com/color/48/server.png",
  },
  {
    id: 5,
    habilidad: "Programación en JavaScript",
    icono: "https://img.icons8.com/color/48/javascript.png",
  },
  {
    id: 6,
    habilidad: "Desarrollo de aplicaciones web (HTML, CSS)",
    icono: "https://img.icons8.com/color/48/html-5.png",
  },
  {
    id: 7,
    habilidad: "Desarrollo con WordPress",
    icono: "https://img.icons8.com/color/48/wordpress.png",
  },
  {
    id: 8,
    habilidad: "Gestión de incidencias en plataformas",
    icono: "https://img.icons8.com/color/48/bug.png",
  },
  {
    id: 9,
    habilidad: "Control de versiones con GitHub",
    icono: "https://img.icons8.com/color/48/github.png",
  },
]);
</script>

<style></style>
