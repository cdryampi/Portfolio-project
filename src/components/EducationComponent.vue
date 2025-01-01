<template>
  <div class="w-full">
    <h2 class="text-4xl font-bold mb-4 text-center" data-aos="fade-left">
      Formación
    </h2>
    <div class="space-y-16 py-14">
      <div
        v-for="(element, index) in Education"
        :key="element.id"
        :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
        class="flex items-center rounded-xlbg-white/75"
      >
        <div :class="index % 2 === 0 ? 'order-1 w-1/4' : 'order-2 w-1/4'">
          <img
            src="https://img.icons8.com/ios-glyphs/60/graduation-cap--v1.png"
            alt="graduation"
          />
        </div>
        <div
          :class="index % 2 === 0 ? 'order-2 w-3/4 pl-4' : 'order-1 w-3/4 pr-4'"
        >
          <h3 class="uppercase font-semibold text-primary text-base">
            {{ element.titulo }}
          </h3>
          <p class="text-gray-500 text-sm font-bold">
            {{ element.centro }}
          </p>
          <p class="text-gray-500 text-sm">
            {{ element.tiempo }}
          </p>
          <p class="text-gray-500 text-sm">
            {{ element.descripcion }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const Education = ref([
  {
    id: 1,
    titulo: "PCEP - Certified Entry-Level Python Programmer",
    tiempo: "diciembre 2024",
    centro: "Python Institute",
    descripcion:
      "Certificación oficial de Python que cubre los fundamentos del lenguaje de programación Python y sus aplicaciones",
  },
  {
    id: 2,
    titulo: "ANDROID MOBILE DEVELOPER (IFCD61)",
    tiempo: "octubre 2022 – marzo 2023",
    centro: "Inkor | Barcelona (España)",
    descripcion: "Programación en Java, Kotlin, Jetpack Compose y vistas XML",
  },
  {
    id: 3,
    titulo: "CONFECCIÓN Y PUBLICACIÓN DE PÁGINAS WEB (IFCD0110)",
    tiempo: "febrero 2021 – junio 2022",
    centro: "Exist | Barcelona (España)",
    descripcion: "Programación en JavaScript, HTML y CSS",
  },
  {
    id: 4,
    titulo: "Técnico Superior en D.A.W: Desarrollo de Aplicaciones Web",
    tiempo: "septiembre 2019 – junio 2021",
    centro: "INS Thos I Codina | Barcelona (España)",
    descripcion: "Programación en Java, PHP y Python",
  },
  {
    id: 5,
    titulo:
      "Técnico Superior en A.S.I.X: Administración de Sistemas Informáticos en Red",
    tiempo: "septiembre 2017 – junio 2019",
    centro: "INS Thos I Codina | Barcelona (España)",
    descripcion:
      "Gestión de servicios en LDAP, Apache2, Bind9, Citrix y Proxmox",
  },
  {
    id: 6,
    titulo: "Grado Medio - Informática",
    tiempo: "septiembre 2014 – junio 2016",
    centro: "INS Thos I Codina | Barcelona (España)",
    descripcion: "Conocimiento de informática en términos generales",
  },
]);
</script>

<style></style>
