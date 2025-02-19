<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <!-- Background color split screen for large screens -->
    <div
      class="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white"
      aria-hidden="true"
    />
    <div
      class="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-gray-50"
      aria-hidden="true"
    />

    <div
      class="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48"
    >
      <h1 class="sr-only">Order information</h1>

      <section
        aria-labelledby="summary-heading"
        class="bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
      >
        <div class="max-w-lg mx-auto lg:max-w-none">
          <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
            Order summary
          </h2>

          <ul
            role="list"
            class="text-sm font-medium text-gray-900 divide-y divide-gray-200"
          >
            <li
              v-for="product in products"
              :key="product.id"
              class="flex items-start py-6 space-x-4"
            >
              <img
                :src="product.imageSrc"
                :alt="product.imageAlt"
                class="flex-none w-20 h-20 rounded-md object-center object-cover"
              />
              <div class="flex-auto space-y-1">
                <h3>{{ product.name }}</h3>
                <p class="text-gray-500">{{ product.color }}</p>
                <p class="text-gray-500">{{ product.size }}</p>
              </div>
              <p class="flex-none text-base font-medium">{{ product.price }}</p>
            </li>
          </ul>

          <dl
            class="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block"
          >
            <div class="flex items-center justify-between">
              <dt class="text-gray-600">Subtotal</dt>
              <dd>$320.00</dd>
            </div>

            <div class="flex items-center justify-between">
              <dt class="text-gray-600">Shipping</dt>
              <dd>$15.00</dd>
            </div>

            <div class="flex items-center justify-between">
              <dt class="text-gray-600">Taxes</dt>
              <dd>$26.80</dd>
            </div>

            <div
              class="flex items-center justify-between border-t border-gray-200 pt-6"
            >
              <dt class="text-base">Total</dt>
              <dd class="text-base">$361.80</dd>
            </div>
          </dl>

          <Popover
            class="fixed bottom-0 inset-x-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden"
            v-slot="{ open }"
          >
            <div
              class="relative z-10 bg-white border-t border-gray-200 px-4 sm:px-6"
            >
              <div class="max-w-lg mx-auto">
                <PopoverButton
                  class="w-full flex items-center py-6 font-medium"
                >
                  <span class="text-base mr-auto">Total</span>
                  <span class="text-base mr-2">$361.80</span>
                  <ChevronUpIcon
                    class="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                  />
                </PopoverButton>
              </div>
            </div>

            <TransitionRoot as="template" :show="open">
              <div>
                <TransitionChild
                  as="template"
                  enter="transition-opacity ease-linear duration-300"
                  enter-from="opacity-0"
                  enter-to="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                >
                  <PopoverOverlay
                    class="fixed inset-0 bg-black bg-opacity-25"
                  />
                </TransitionChild>

                <TransitionChild
                  as="template"
                  enter="transition ease-in-out duration-300 transform"
                  enter-from="translate-y-full"
                  enter-to="translate-y-0"
                  leave="transition ease-in-out duration-300 transform"
                  leave-from="translate-y-0"
                  leave-to="translate-y-full"
                >
                  <PopoverPanel class="relative bg-white px-4 py-6 sm:px-6">
                    <dl class="max-w-lg mx-auto space-y-6">
                      <div class="flex items-center justify-between">
                        <dt class="text-gray-600">Subtotal</dt>
                        <dd>$320.00</dd>
                      </div>

                      <div class="flex items-center justify-between">
                        <dt class="text-gray-600">Shipping</dt>
                        <dd>$15.00</dd>
                      </div>

                      <div class="flex items-center justify-between">
                        <dt class="text-gray-600">Taxes</dt>
                        <dd>$26.80</dd>
                      </div>
                    </dl>
                  </PopoverPanel>
                </TransitionChild>
              </div>
            </TransitionRoot>
          </Popover>
        </div>
      </section>

      <form
        class="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1"
      >
        <div class="max-w-lg mx-auto lg:max-w-none">
          <section aria-labelledby="contact-info-heading">
            <h2
              id="contact-info-heading"
              class="text-lg font-medium text-gray-900"
            >
              Contact information
            </h2>

            <div class="mt-6">
              <label
                for="email-address"
                class="block text-sm font-medium text-gray-700"
                >Email address</label
              >
              <div class="mt-1">
                <input
                  type="email"
                  id="email-address"
                  name="email-address"
                  autocomplete="email"
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </section>

          <section aria-labelledby="payment-heading" class="mt-10">
            <h2 id="payment-heading" class="text-lg font-medium text-gray-900">
              Payment details
            </h2>

            <div class="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
              <div class="col-span-3 sm:col-span-4">
                <label
                  for="name-on-card"
                  class="block text-sm font-medium text-gray-700"
                  >Name on card</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="name-on-card"
                    name="name-on-card"
                    autocomplete="cc-name"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-3 sm:col-span-4">
                <label
                  for="card-number"
                  class="block text-sm font-medium text-gray-700"
                  >Card number</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    autocomplete="cc-number"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-2 sm:col-span-3">
                <label
                  for="expiration-date"
                  class="block text-sm font-medium text-gray-700"
                  >Expiration date (MM/YY)</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="expiration-date"
                    id="expiration-date"
                    autocomplete="cc-exp"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="cvc" class="block text-sm font-medium text-gray-700"
                  >CVC</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="cvc"
                    id="cvc"
                    autocomplete="csc"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="shipping-heading" class="mt-10">
            <h2 id="shipping-heading" class="text-lg font-medium text-gray-900">
              Shipping address
            </h2>

            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
              <div class="sm:col-span-3">
                <label
                  for="company"
                  class="block text-sm font-medium text-gray-700"
                  >Company</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="address"
                  class="block text-sm font-medium text-gray-700"
                  >Address</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    autocomplete="street-address"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="apartment"
                  class="block text-sm font-medium text-gray-700"
                  >Apartment, suite, etc.</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="city"
                  class="block text-sm font-medium text-gray-700"
                  >City</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    autocomplete="address-level2"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="region"
                  class="block text-sm font-medium text-gray-700"
                  >State / Province</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="region"
                    name="region"
                    autocomplete="address-level1"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="postal-code"
                  class="block text-sm font-medium text-gray-700"
                  >Postal code</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="postal-code"
                    name="postal-code"
                    autocomplete="postal-code"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="billing-heading" class="mt-10">
            <h2 id="billing-heading" class="text-lg font-medium text-gray-900">
              Billing information
            </h2>

            <div class="mt-6 flex items-center">
              <input
                id="same-as-shipping"
                name="same-as-shipping"
                type="checkbox"
                checked=""
                class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
              />
              <div class="ml-2">
                <label
                  for="same-as-shipping"
                  class="text-sm font-medium text-gray-900"
                  >Same as shipping information</label
                >
              </div>
            </div>
          </section>

          <div
            class="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between"
          >
            <button
              type="submit"
              class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:ml-6 sm:order-last sm:w-auto"
            >
              Continue
            </button>
            <p
              class="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left"
            >
              You won't be charged until the next step.
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";

const products = [
  {
    id: 1,
    name: "Micro Backpack",
    href: "#",
    price: "$70.00",
    color: "Moss",
    size: "5L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg",
    imageAlt:
      "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
  },
  // More products...
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
    ChevronUpIcon,
  },
  setup() {
    return {
      products,
    };
  },
};
</script>
