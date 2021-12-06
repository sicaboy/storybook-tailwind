<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-gray-800">
    <div
      class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
    >
      <img class="w-full h-full object-cover" :src="imgSrc" alt="" />
    </div>
    <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2
          class="text-base font-semibold uppercase tracking-wider text-gray-300"
        >
          {{ title1 }}
        </h2>
        <p
          class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          {{ title2 }}
        </p>
        <p class="mt-3 text-lg text-gray-300">
          {{ description }}
        </p>
        <div class="mt-8">
          <div class="inline-flex rounded-md shadow">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
            >
              {{ signUpBtn }}
              <ExternalLinkIcon
                class="-mr-1 ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from "@heroicons/vue/solid";

export default {
  components: {
    ExternalLinkIcon,
  },
  props: ["title1", "title2", "description", "signUpBtn", "imgSrc"],
};
</script>
