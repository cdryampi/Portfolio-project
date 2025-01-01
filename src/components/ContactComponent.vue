<template>
  <section id="contact">
    <h2 class="text-4xl font-bold mb-4 text-center" data-aos="fade-up">
      contáctame
    </h2>
    <div class="mx-auto relative rounded-lg py-6">
      <div class="grid lg:grid-cols-1 items-center">
        <div
          class="grid sm:grid-cols-1 gap-4 z-20 relative lg:left-16 max-lg:px-4"
        >
          <div
            v-for="element in Data"
            :key="element.id"
            class="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white"
            data-aos="fade-up"
          >
            <img :src="element.icono" alt="icono" height="30" width="30" />
            <h4 class="text-lg font-bold mt-0 text-gray-800">
              {{ element.titulo }}
            </h4>
            <p class="text-sm text-gray-500">{{ element.dato }}</p>
          </div>
        </div>
        <!-- <div
          class="lg:col-span-2 bg-primary rounded-lg sm:p-10 p-4 z-10 max-lg:order-1 max-lg:mb-8"
          data-aos="fade-up"
        >
          <form>
            <div class="max-w-md mx-auto space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                class="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
              />
              <input
                type="email"
                name="_replyto"
                placeholder="Correo Electrónico"
                class="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
              />
              <textarea
                name="message"
                placeholder="Mensaje"
                class="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                rows="6"
              ></textarea>
              <button
                class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
                type="submit"
              >
                <span
                  class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-white border-2 border-transparent"
                >
                </span>
                <span class="relative flex items-center justify-center">
                  Enviar
                </span>
              </button>
            </div>
          </form>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const Data = ref([
  {
    titulo: "Correo Electrónico",
    dato: "yampiersanchezgastelu@gmail.com",
    icono: "https://img.icons8.com/color/48/email.png",
  },
  {
    titulo: "Teléfono",
    dato: "654 19 47 88",
    icono: "https://img.icons8.com/color/48/phone.png",
  },
  {
    titulo: "Github",
    dato: "cdryampi",
    icono: "https://img.icons8.com/color/48/github.png",
  },
  {
    titulo: "Udemy",
    dato: "yampi1515",
    icono: "https://img.icons8.com/color/48/udemy.png",
  },
]);
</script>

<style></style>
