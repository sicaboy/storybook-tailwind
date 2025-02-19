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
    <header
      class="flex items-center justify-between px-4 py-10 sm:px-6 sm:py-8 lg:px-8"
    >
      <a href="#">
        <span class="sr-only">Workflow</span>
        <img
          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&amp;shade=600"
          alt=""
          class="h-8 w-auto"
        />
      </a>
      <div class="hidden sm:flex sm:items-center sm:space-x-8">
        <a href="#" class="text-sm font-medium text-gray-700"
          >Contact support</a
        >
        <a href="#" class="p-2 -m-2 text-gray-400 hover:text-gray-500">
          <span class="sr-only">Account</span>
          <UserIcon class="w-6 h-6" aria-hidden="true" />
        </a>
      </div>
    </header>

    <main
      class="max-w-7xl mx-auto px-4 pt-4 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14"
    >
      <h1 class="sr-only">Checkout</h1>

      <div
        class="max-w-lg mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
      >
        <div class="max-w-lg mx-auto w-full">
          <h2 class="sr-only">Order summary</h2>

          <div class="flow-root">
            <ul role="list" class="-my-6 divide-y divide-gray-200">
              <li
                v-for="product in products"
                :key="product.id"
                class="py-6 flex space-x-6"
              >
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="flex-none w-24 h-24 object-center object-cover bg-gray-100 rounded-md"
                />
                <div class="flex-auto">
                  <div
                    class="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6"
                  >
                    <div class="flex-auto text-sm font-medium space-y-1">
                      <h3 class="text-gray-900">
                        <a :href="product.href">{{ product.name }}</a>
                      </h3>
                      <p class="text-gray-900">{{ product.price }}</p>
                      <p class="hidden text-gray-500 sm:block">
                        {{ product.color }}
                      </p>
                      <p class="hidden text-gray-500 sm:block">
                        {{ product.size }}
                      </p>
                    </div>
                    <div class="flex-none flex space-x-4">
                      <button
                        type="button"
                        class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Edit
                      </button>
                      <div class="flex border-l border-gray-300 pl-4">
                        <button
                          type="button"
                          class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <dl class="text-sm font-medium text-gray-500 mt-10 space-y-6">
            <div class="flex justify-between">
              <dt>Subtotal</dt>
              <dd class="text-gray-900">$104.00</dd>
            </div>
            <div class="flex justify-between">
              <dt>Taxes</dt>
              <dd class="text-gray-900">$8.32</dd>
            </div>
            <div class="flex justify-between">
              <dt>Shipping</dt>
              <dd class="text-gray-900">$14.00</dd>
            </div>
            <div
              class="flex justify-between border-t border-gray-200 text-gray-900 pt-6"
            >
              <dt class="text-base">Total</dt>
              <dd class="text-base">$126.32</dd>
            </div>
          </dl>
        </div>

        <div class="max-w-lg mx-auto w-full">
          <button
            type="button"
            class="w-full flex items-center justify-center bg-black border border-transparent text-white rounded-md py-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            <span class="sr-only">Pay with Apple Pay</span>
            <svg
              class="h-5 w-auto"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 20"
            >
              <path
                d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z"
              />
            </svg>
          </button>

          <div class="relative mt-8">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-200" />
            </div>
            <div class="relative flex justify-center">
              <span class="px-4 bg-white text-sm font-medium text-gray-500">
                or
              </span>
            </div>
          </div>

          <form class="mt-6">
            <h2 class="text-lg font-medium text-gray-900">
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

            <div class="mt-6">
              <label for="phone" class="block text-sm font-medium text-gray-700"
                >Phone number</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autocomplete="tel"
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="mt-6 flex space-x-2">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <label for="terms" class="text-sm text-gray-500"
                >I have read the terms and conditions and agree to the sale of
                my personal information to the highest bidder.</label
              >
            </div>

            <button
              type="submit"
              disabled=""
              class="mt-6 w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </form>

          <div
            class="mt-10 border-t border-b border-gray-200 divide-y divide-gray-200"
          >
            <button
              type="button"
              disabled=""
              class="w-full py-6 text-left text-lg font-medium text-gray-500 cursor-auto"
            >
              Payment details
            </button>
            <button
              type="button"
              disabled=""
              class="w-full py-6 text-left text-lg font-medium text-gray-500 cursor-auto"
            >
              Shipping address
            </button>
            <button
              type="button"
              disabled=""
              class="w-full py-6 text-left text-lg font-medium text-gray-500 cursor-auto"
            >
              Billing address
            </button>
            <button
              type="button"
              disabled=""
              class="w-full py-6 text-left text-lg font-medium text-gray-500 cursor-auto"
            >
              Review
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { UserIcon } from "@heroicons/vue/outline";

const products = [
  {
    id: 1,
    name: "Women's Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Gray",
    size: "S",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-05-product-01.jpg",
    imageAlt: "Front of women's basic tee in heather gray.",
  },
  // More products...
];

export default {
  components: {
    UserIcon,
  },
  setup() {
    return {
      products,
    };
  },
};
</script>
