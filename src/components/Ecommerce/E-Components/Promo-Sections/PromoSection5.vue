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
  <div class="relative bg-white">
    <!-- Background image and overlap -->
    <div aria-hidden="true" class="hidden absolute inset-0 sm:flex sm:flex-col">
      <div class="flex-1 relative w-full bg-gray-800">
        <div class="absolute inset-0 overflow-hidden">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
            alt=""
            class="w-full h-full object-center object-cover"
          />
        </div>
        <div class="absolute inset-0 bg-gray-900 opacity-50" />
      </div>
      <div class="w-full bg-white h-32 md:h-40 lg:h-48" />
    </div>

    <div
      class="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8"
    >
      <!-- Background image and overlap -->
      <div aria-hidden="true" class="absolute inset-0 flex flex-col sm:hidden">
        <div class="flex-1 relative w-full bg-gray-800">
          <div class="absolute inset-0 overflow-hidden">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
              alt=""
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div class="absolute inset-0 bg-gray-900 opacity-50" />
        </div>
        <div class="w-full bg-white h-48" />
      </div>
      <div class="relative py-32">
        <h1
          class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Mid-Season Sale
        </h1>
        <div class="mt-4 sm:mt-6">
          <a
            href="#"
            class="inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
            >Shop Collection</a
          >
        </div>
      </div>
    </div>

    <section
      aria-labelledby="collection-heading"
      class="-mt-96 relative sm:mt-0"
    >
      <h2 id="collection-heading" class="sr-only">Collections</h2>
      <div
        class="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8"
      >
        <div
          v-for="collection in collections"
          :key="collection.name"
          class="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5"
        >
          <div>
            <div
              aria-hidden="true"
              class="absolute inset-0 rounded-lg overflow-hidden"
            >
              <div
                class="absolute inset-0 overflow-hidden group-hover:opacity-75"
              >
                <img
                  :src="collection.imageSrc"
                  :alt="collection.imageAlt"
                  class="w-full h-full object-center object-cover"
                />
              </div>
              <div
                class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
              />
            </div>
            <div class="absolute inset-0 rounded-lg p-6 flex items-end">
              <div>
                <p aria-hidden="true" class="text-sm text-white">
                  Shop the collection
                </p>
                <h3 class="mt-1 font-semibold text-white">
                  <a :href="collection.href">
                    <span class="absolute inset-0" />
                    {{ collection.name }}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const collections = [
  {
    name: "Women's",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg",
    imageAlt: "Woman wearing an off-white cotton t-shirt.",
  },
  {
    name: "Men's",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg",
    imageAlt: "Man wearing a charcoal gray cotton t-shirt.",
  },
  {
    name: "Desk Accessories",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg",
    imageAlt:
      "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
  },
];

export default {
  setup() {
    return {
      collections,
    };
  },
};
</script>
