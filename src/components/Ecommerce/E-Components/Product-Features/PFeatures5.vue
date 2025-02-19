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
    <section aria-labelledby="features-heading" class="relative">
      <div
        class="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16"
      >
        <img
          src="https://tailwindui.com/img/ecommerce-images/confirmation-page-01-hero.jpg"
          alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
          class="h-full w-full object-center object-cover lg:h-full lg:w-full"
        />
      </div>

      <div
        class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8"
      >
        <div class="lg:col-start-2">
          <h2 id="features-heading" class="font-medium text-gray-500">
            Leatherbound Daily Journal
          </h2>
          <p class="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">
            All in the Details
          </p>
          <p class="mt-4 text-gray-500">
            We've obsessed over every detail of this handcrafted journal to
            bring you the best materials for daily use.
          </p>

          <dl
            class="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2"
          >
            <div v-for="feature in features" :key="feature.name">
              <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
              <dd class="mt-2 text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const features = [
  {
    name: "Durable",
    description:
      "The leather cover and machined steel disc binding stand up to daily use for years to come.",
  },
  {
    name: "Refillable",
    description:
      "Buy it once and refill as often as you need. Subscribe and save on routine refills.",
  },
  {
    name: "Thoughtfully designed",
    description:
      "The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.",
  },
  {
    name: "Locally made",
    description:
      "Responsibly and sustainably made real close to wherever you are, somehow.",
  },
];

export default {
  setup() {
    return {
      features,
    };
  },
};
</script>
