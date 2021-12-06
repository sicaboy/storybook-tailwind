<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <div
      class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <h2
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        <span class="block">{{ title }}</span>
        <span class="block text-indigo-600">{{ description }}</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 animate-pulse duration-1000"
          >
            {{ button1 }}
          </a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
          >
            {{ button2 }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cta1",
  props: ["title", "description", "button1", "button2"],
};
</script>
