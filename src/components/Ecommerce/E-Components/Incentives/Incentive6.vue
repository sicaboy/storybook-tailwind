<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <h2 class="sr-only">Our perks</h2>
    <div class="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
      <div
        class="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
      >
        <div v-for="perk in perks" :key="perk.name" class="sm:flex">
          <div class="sm:flex-shrink-0">
            <div class="flow-root">
              <img class="w-28 h-24" :src="perk.imageSrc" alt="" />
            </div>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <h3 class="text-sm font-medium text-gray-900">
              {{ perk.name }}
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              {{ perk.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const perks = [
  {
    name: "Unlimited free delivery, all year round",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
    description:
      "Name another place that offers year long free delivery? We’ll be waiting. Order now and you’ll get delivery absolutely free.",
  },
  {
    name: "10-year warranty",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg",
    description:
      "We have a 10 year warranty with every product that you purchase, whether thats a new pen or organizer you can be sure we’ll ",
  },
  {
    name: "Exchanges",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
    description:
      "We understand that when your product arrives you might not particularly like it, or you ordered the wrong thing. Conditions apply here.",
  },
  {
    name: "Unlimited free delivery, all year round",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
    description:
      "Name another place that offers year long free delivery? We’ll be waiting. Order now and you’ll get delivery absolutely free.",
  },
];

export default {
  setup() {
    return {
      perks,
    };
  },
};
</script>
