<template>
  <header class="max-w-full z-30">
    <nav
      class="flex border-b-2 border-b-primary2 items-center relative p-3 justify-between md:h-16 h-28 mx-auto md:px-4 container flex-wrap md:flex-nowrap"
    >
      <!-- Logo -->
      <div class="text-3xl font-bold text-primary">CV</div>
      <!-- Mobile Toggle Button -->
      <div class="md:hidden z-50">
        <button
          class="block focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span v-if="isMenuOpen">
            <img
              src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png"
              alt="delete-sign"
              width="50"
              height="50"
            />
          </span>
          <span v-else>
            <img
              src="https://img.icons8.com/ios-filled/100/000000/menu.png"
              alt="menu"
              width="50"
              height="50"
            />
          </span>
        </button>
      </div>

      <!-- Responsive menu -->
      <div
        :class="[
          'fixed inset-0 flex flex-col items-center justify-center bg-primary md:relative md:bg-transparent md:flex md:justify-between md:flex-row md:space-x-5 z-30',
          isMenuOpen ? 'block' : 'hidden',
        ]"
      >
        <ul
          class="flex flex-col justify-center items-center space-x-0 md:flex-row md:space-y-0 sm:space-x-5 font-medium"
        >
          <li
            class="flex justify-center items-center h-16 md:h-full"
            v-for="item in Menu"
            :key="item.name"
          >
            <a
              :href="item.link"
              class="block transition hover:text-primary ease-linear text-2xl md:text-sm lg:text-lg text-white md:text-black"
              @click="handleLinkClick(item.link)"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref } from "vue";
import { useHandleLinkClick } from "../composables/handleLinkClick";

const { handleLinkClick } = useHandleLinkClick();
const isMenuOpen = ref(false);

const Menu = ref([
  { name: "Servicios", link: "#services" },
  { name: "Proyectos", link: "#projects" },
  { name: "Contacto", link: "#contact" },
]);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
