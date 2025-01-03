<template>
  <section id="services" class="text-white mt-20">
    <h2
      class="text-4xl font-bold text-black mb-4 text-center"
      data-aos="fade-up"
    >
      Mis Servicios
    </h2>
    <div
      class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
    >
      <div
        class="px-[12px] mb-[24px]"
        data-aos="fade-up"
        v-for="element in Services"
        :key="element.id"
      >
        <div
          class="mt-[30px] relative flex flex-col justify-center text-center items-center rounded-[30px] bg-white"
        >
          <div class="mt-[-30px] flex justify-center relative">
            <div class="mt-[-7px] p-[20px] relative bg-[#fff] rounded-[50%]">
              <span
                class="h-[60px] w-[60px] m-auto border-[1px] border-solid border-[#111a24] absolute top-[8px] left-[8px]"
              ></span>
              <img
                :src="element.icono"
                :alt="element.titulo"
                class="w-[35px] h-[35px] relative z-[1]"
              />
            </div>
          </div>

          <div class="p-[30px]">
            <h3 class="uppercase font-semibold text-primary text-base">
              {{ element.titulo }}
            </h3>
            <p
              class="text-[14px] leading-[20px] text-gray-500 tracking-[0.03rem]"
            >
              {{ element.descripcion }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const Services = ref([
  {
    id: 1,
    titulo: "Desarrollo Web Full Stack",
    descripcion:
      "Creación de aplicaciones web completas utilizando tecnologías como Django, Python, JavaScript, HTML y CSS. Esto incluye el diseño de interfaces atractivas, la implementación de funcionalidades del lado del cliente y del servidor, así como la integración de bases de datos para garantizar que las aplicaciones sean rápidas, seguras y fáciles de usar.",
    icono: "https://img.icons8.com/color/48/code.png",
  },
  {
    id: 2,
    titulo: "Desarrollo Móvil",
    descripcion:
      "Diseño y desarrollo de aplicaciones móviles nativas en Kotlin para el sistema operativo Android. Incluye la creación de interfaces de usuario intuitivas, la integración de APIs y el desarrollo de funcionalidades personalizadas que cumplen con las necesidades del cliente, asegurando alto rendimiento y compatibilidad con múltiples dispositivos.",
    icono: "https://img.icons8.com/color/48/android-os.png",
  },
  {
    id: 3,
    titulo: "Mantenimiento de Sitios Web",
    descripcion:
      "Gestión continua de sitios web construidos en WordPress y Django. Esto incluye la actualización de contenidos, optimización de rendimiento, implementación de medidas de seguridad y resolución de problemas técnicos para garantizar que los sitios permanezcan operativos, actualizados y alineados con las necesidades del negocio.",
    icono: "https://img.icons8.com/color/48/maintenance.png",
  },
  {
    id: 4,
    titulo: "Optimización de Código",
    descripcion:
      "Análisis y mejora del código fuente de aplicaciones existentes para garantizar un mejor rendimiento, legibilidad y mantenibilidad. Incluye la refactorización de código redundante, la implementación de mejores prácticas y la identificación de cuellos de botella que podrían afectar el funcionamiento del sistema.",
    icono: "https://img.icons8.com/color/48/source-code.png",
  },
  {
    id: 5,
    titulo: "Gestión de Servidores",
    descripcion:
      "Configuración, administración y monitoreo de servidores web y sistemas backend, utilizando herramientas como Apache2, Nginx y Proxmox. Esto incluye la implementación de medidas de seguridad, la gestión de redes, el monitoreo de rendimiento y la resolución de problemas para garantizar un tiempo de actividad continuo y eficiente.",
    icono: "https://img.icons8.com/color/48/server.png",
  },
  {
    id: 7,
    titulo: "Soporte Técnico",
    descripcion:
      "Resolución de incidencias técnicas relacionadas con hardware, software y redes. Provisión de soporte Helpdesk para empresas, ayudando a los equipos a solucionar problemas rápidamente y asegurando que los sistemas funcionen de manera óptima para maximizar la productividad.",
    icono: "https://img.icons8.com/color/48/technical-support.png",
  },
  {
    id: 10,
    titulo: "Gestión de Tiendas Online",
    descripcion:
      "Configuración, mantenimiento y optimización de plataformas de comercio electrónico, como WordPress y Amazon. Esto incluye la integración de pasarelas de pago, la gestión de inventarios y la implementación de estrategias para mejorar la experiencia de compra y aumentar las conversiones.",
    icono: "https://img.icons8.com/color/48/online-store.png",
  },
  {
    id: 12,
    titulo: "Traducción y Localización",
    descripcion:
      "Adaptación lingüística y cultural de contenido web o aplicaciones al español, catalán e inglés. Garantizando que el contenido sea relevante, claro y adecuado para el público objetivo en diferentes regiones.",
    icono: "https://img.icons8.com/color/48/language.png",
  },
]);
</script>

<style></style>
