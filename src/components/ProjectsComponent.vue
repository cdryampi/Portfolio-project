<template>
  <div id="projects">
    <h2
      class="text-4xl font-bold text-black mb-4 text-center"
      data-aos="fade-up"
    >
      Mis Proyectos
    </h2>
    <div class="py-8 xl:px-16 px-4 sm:py-16 space-y-12 grid grid-cols-1 pt-10">
      <div
        class="flex flex-col md:flex-row md:justify-between rounded-3xl bg-white mb-6 p-5"
        v-for="(element, index) in Projects"
        :key="element.id"
        :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
        data-aos="fade-up"
      >
        <img
          :src="element.imagen"
          alt="project img"
          class="rounded-lg object-cover w-full md:w-2/4"
        />
        <div class="flex flex-col justify-center p-6 space-y-12">
          <div class="flex justify-between items-center gap-2 flex-wrap">
            <span
              v-for="tec in element.tecnologias"
              :key="tec"
              class="bg-primary2 w-28 text-center p-2 rounded-3xl text-black"
              >{{ tec }}</span
            >
          </div>
          <h3 class="text-2xl font-bold text-primary font-serif">
            {{ element.nombre }}
          </h3>
          <p class="text-[14px] leadin-[20px] text-gray-500 tracking-[0.03rem]">
            {{ element.descripcion }}
          </p>
          <div
            class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0"
          >
            <button
              class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
            >
              <span
                class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent"
              >
              </span>
              <span class="relative flex items-center justify-center">
                <a :href="element.url" target="_blank">Ver Proyecto</a>
              </span>
            </button>
            <button
              class="border border-primary px-6 ,d:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
            >
              <div
                class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative"
              >
                <a
                  :href="element.github"
                  class="pl-2 text-primary"
                  target="_blank"
                >
                  ver código
                </a>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const Projects = ref([
  {
    nombre: "webGaudeix",
    descripcion:
      "Gaudeix CMS es un Sistema de Gestión de Contenidos (CMS) diseñado específicamente para municipios. Permite a los ayuntamientos gestionar noticias, eventos y servicios locales de manera eficiente. Es el proyecto más completo, desarrollado durante casi un año, y sigue en uso actualmente.",
    estado: "Completo y activo",
    url: "https://gaudeixcabrera.cat/",
    github: "https://github.com/cdryampi/webGaudeix",
    tecnologias: [
      "Django",
      "Bootstrap",
      "CKEditor",
      "PostgreSQL",
      "ModelTranslation",
      "Compressor",
      "AWS",
    ],
    imagen: "./gaudeix.png",
  },
  {
    nombre: "curriculum-frontend",
    descripcion:
      "Un frontend simple para Imprimir los datos del backend. Permite imprimir los datos del backend y presentar información profesional de manera estructurada.",
    estado: "Incompleto",
    url: "https://github.com/cdryampi/curriculum-frontend",
    github: "https://github.com/cdryampi/curriculum-frontend",
    tecnologias: ["React", "Javascript", "CSS", "Tailwind", "Axios"],
    imagen: "./front.jpeg",
  },
  {
    nombre: "curriculum-backend",
    descripcion:
      "Un CMS simple para gestionar un currículum en formato web. Permite agregar, editar y presentar información profesional de manera estructurada.",
    estado: "Incompleto",
    url: "https://github.com/cdryampi/curriculum-backend",
    github: "https://github.com/cdryampi/curriculum-backend",
    tecnologias: ["Django", "SQLite", "PSQL", "Trnaslations", "Session"],
    imagen: "./back_cv.jpeg",
  },
  {
    nombre: "LaSagradaFamilia",
    descripcion:
      "Proyecto en desarrollo enfocado en la creación de una plataforma informativa para gestionar datos relacionados con La Sagrada Familia. Aún está en una etapa inicial.",
    estado: "Incompleto",
    url: "https://github.com/cdryampi/LaSagradaFamilia",
    github: "https://github.com/cdryampi/LaSagradaFamilia",
    tecnologias: ["Kotlin", "Jetpack Compose", "Android Studio"],
    imagen: "./android.png",
  },
  {
    nombre: "web-empresa-django-2",
    descripcion:
      "Un sitio web desarrollado para una cafetería como parte de un curso de Django. Aunque está descontinuado, fue un ejercicio práctico para aprender sobre desarrollo web con Django.",
    estado: "Descontinuado",
    url: "https://cdryampi.github.io/web-empresa-django-2/index.html",
    github: "https://github.com/cdryampi/web-empresa-django-2",
    tecnologias: ["Django", "SQLite", "Bootstrap"],
    imagen: "./cafe.png",
  },
  {
    nombre: "roadmap-retos-programacion",
    descripcion:
      "Un fork de retos de programación que realizas semanalmente utilizando Python. Este repositorio refleja tu dedicación al aprendizaje continuo y la mejora de habilidades.",
    estado: "Activo (fork)",
    url: "https://github.com/cdryampi/roadmap-retos-programacion",
    github: "https://github.com/cdryampi/roadmap-retos-programacion",
    tecnologias: ["Python"],
    imagen: "./retos.png",
  },
]);
</script>

<style></style>
