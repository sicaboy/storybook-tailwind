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
      class="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-indigo-900"
      aria-hidden="true"
    />

    <header
      class="relative max-w-7xl mx-auto bg-indigo-900 py-6 lg:bg-transparent lg:grid lg:grid-cols-2 lg:gap-x-16 lg:px-8 lg:pt-16 lg:pb-10"
    >
      <div class="max-w-2xl mx-auto flex px-4 lg:max-w-lg lg:w-full lg:px-0">
        <a href="#">
          <span class="sr-only">Workflow</span>
          <img
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&amp;shade=300"
            alt=""
            class="h-8 w-auto lg:hidden"
          />
          <img
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&amp;shade=600"
            alt=""
            class="hidden lg:block h-8 w-auto"
          />
        </a>
      </div>
    </header>

    <main
      class="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2"
    >
      <h1 class="sr-only">Checkout</h1>

      <section
        aria-labelledby="summary-heading"
        class="bg-indigo-900 text-indigo-300 pt-6 pb-12 md:px-10 lg:max-w-lg lg:w-full lg:mx-auto lg:px-0 lg:pt-0 lg:pb-24 lg:bg-transparent lg:row-start-1 lg:col-start-2"
      >
        <div class="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
          <h2 id="summary-heading" class="sr-only">Order summary</h2>

          <dl>
            <dt class="text-sm font-medium">Amount due</dt>
            <dd class="mt-1 text-3xl font-extrabold text-white">$232.00</dd>
          </dl>

          <ul
            role="list"
            class="text-sm font-medium divide-y divide-white divide-opacity-10"
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
                <h3 class="text-white">{{ product.name }}</h3>
                <p>{{ product.color }}</p>
                <p>{{ product.size }}</p>
              </div>
              <p class="flex-none text-base font-medium text-white">
                {{ product.price }}
              </p>
            </li>
          </ul>

          <dl
            class="text-sm font-medium space-y-6 border-t border-white border-opacity-10 pt-6"
          >
            <div class="flex items-center justify-between">
              <dt>Subtotal</dt>
              <dd>$570.00</dd>
            </div>

            <div class="flex items-center justify-between">
              <dt>Shipping</dt>
              <dd>$25.00</dd>
            </div>

            <div class="flex items-center justify-between">
              <dt>Taxes</dt>
              <dd>$47.60</dd>
            </div>

            <div
              class="flex items-center justify-between border-t border-white border-opacity-10 text-white pt-6"
            >
              <dt class="text-base">Total</dt>
              <dd class="text-base">$642.60</dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        aria-labelledby="payment-and-shipping-heading"
        class="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1"
      >
        <h2 id="payment-and-shipping-heading" class="sr-only">
          Payment and shipping details
        </h2>

        <form>
          <div class="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
            <div>
              <h3
                id="contact-info-heading"
                class="text-lg font-medium text-gray-900"
              >
                Contact information
              </h3>

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
            </div>

            <div class="mt-10">
              <h3
                id="payment-heading"
                class="text-lg font-medium text-gray-900"
              >
                Payment details
              </h3>

              <div class="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
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
                  <label
                    for="cvc"
                    class="block text-sm font-medium text-gray-700"
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
            </div>

            <div class="mt-10">
              <h3
                id="shipping-heading"
                class="text-lg font-medium text-gray-900"
              >
                Shipping address
              </h3>

              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
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
            </div>

            <div class="mt-10">
              <h3 class="text-lg font-medium text-gray-900">
                Billing information
              </h3>

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
            </div>

            <div class="mt-10 flex justify-end pt-6 border-t border-gray-200">
              <button
                type="submit"
                class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Pay now
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
const products = [
  {
    id: 1,
    name: "High Wall Tote",
    href: "#",
    price: "$210.00",
    color: "White and black",
    size: "15L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-07-product-01.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, white handles, and black drawstring top.",
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
