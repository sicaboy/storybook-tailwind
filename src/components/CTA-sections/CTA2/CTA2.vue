<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-indigo-700">
    <div
      class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
    >
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="block">{{ title }}</span>
        <span class="block">{{ title2 }}</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-indigo-200">
        {{ description }}
      </p>
      <a
        href="#"
        class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
      >
        {{ signUp }}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "title2", "description", "signUp"],
};
</script>
