<template>
  <h2 class="text-4xl font-bold mb-4 text-center" data-aos="fade-rigth">
    Experiencia
  </h2>
  <div class="space-y-16 py-14">
    <div
      v-for="(element, index) in Experience"
      :key="element.id"
      :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
      class="flex items-center rounded-xl bg-white/75"
    >
      <div :class="index % 2 === 0 ? 'order-1 w-1/4' : 'order-2 w-1/4'">
        <img
          src="https://img.icons8.com/ios-filled/100/lawyer.png"
          alt="lawyer"
        />
      </div>
      <div
        :class="index % 2 === 0 ? 'order-2 w-3/4 pl-4' : 'order-1 w-3/4 pr-4'"
      >
        <h3 class="uppercase font-semibold text-primary text-base">
          {{ element.titulo }}
        </h3>
        <p class="text-gray-500 text-sm font-bold">
          {{ element.compania }}
        </p>
        <p class="text-gray-500 text-sm">
          {{ element.tiempo }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const Experience = ref([
  {
    id: 1,
    titulo: "Desarrollador Web full Stack Mid level",
    tiempo: "abril 2023 – abril 2024",
    compania: "Ayuntamiento de Cabrera de Mar",
  },
  {
    id: 2,
    titulo: "Desarrollador Web – Mobile Developer",
    tiempo: "febrero 2023 – marzo 2023",
    compania: "Inqbarna",
  },
  {
    id: 3,
    titulo: "Desarrollador Web",
    tiempo: "septiembre 2022 – octubre 2022",
    compania: "Maneko",
  },
  {
    id: 4,
    titulo: "Desarrollador Web",
    tiempo: "noviembre 2020 – marzo 2021",
    compania: "Epinium",
  },
  {
    id: 5,
    titulo: "Técnico informático",
    tiempo: "septiembre 2019 – septiembre 2020",
    compania: "Güell Consulting",
  },
]);
</script>

<style></style>
