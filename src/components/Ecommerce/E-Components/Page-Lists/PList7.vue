<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
          Our Favorites
        </h2>
        <a
          href="#"
          class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >Browse all favorites<span aria-hidden="true"> &rarr;</span></a
        >
      </div>

      <div
        class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative"
        >
          <div
            class="w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3"
          >
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="w-full h-full object-center object-cover"
            />
          </div>
          <h3 class="mt-4 text-base font-semibold text-gray-900">
            <a :href="product.href">
              <span class="absolute inset-0" />
              {{ product.name }}
            </a>
          </h3>
          <p class="mt-1 text-sm text-gray-500">{{ product.price }}</p>
        </div>
      </div>

      <div class="mt-6 sm:hidden">
        <a
          href="#"
          class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >Browse all favorites<span aria-hidden="true"> &rarr;</span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
const products = [
  {
    id: 1,
    name: "Black Basic Tee",
    price: "$32",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg",
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  // More products...
];

export default {
  setup() {
    return {
      products,
    };
  },
};
</script>
