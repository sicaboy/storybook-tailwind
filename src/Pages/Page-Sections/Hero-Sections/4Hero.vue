<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <div class="relative overflow-hidden">
      <div class="absolute inset-y-0 h-full w-full" aria-hidden="true">
        <div class="relative h-full">
          <svg
            class="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
            />
          </svg>
          <svg
            class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
            />
          </svg>
        </div>
      </div>

      <div class="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <nav
              class="relative flex items-center justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div
                class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span class="sr-only">Workflow</span>
                    <img
                      class="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <PopoverButton
                      class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:flex md:space-x-10">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="font-medium text-gray-500 hover:text-gray-900"
                  >{{ item.name }}</a
                >
              </div>
              <div
                class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
              >
                <span class="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500"
                  >
                    Log in
                  </a>
                </span>
              </div>
            </nav>
          </div>

          <transition
            enter-active-class="duration-150 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <PopoverPanel
              focus
              class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div
                class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
              >
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span class="sr-only">Close main menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</a
                  >
                </div>
                <a
                  href="#"
                  class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700"
                >
                  Log in
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div class="text-center">
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span class="block">Welcome to</span>
              <span class="block text-indigo-600">{{ title }}</span>
            </h1>
            <p
              class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              {{ description }}
            </p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="absolute inset-0 flex flex-col" aria-hidden="true">
          <div class="flex-1" />
          <div class="flex-1 w-full bg-gray-800" />
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <img
            class="relative rounded-lg shadow-lg"
            src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
            alt="App screenshot"
          />
        </div>
      </div>
    </div>
    <div class="bg-gray-800">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2
          class="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide"
        >
          Trusted by over 26,000 forward-thinking companies
        </h2>
        <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-12"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
              alt="Tuple"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-12"
              src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
              alt="Mirage"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-12"
              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
              alt="StaticKit"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1"
          >
            <img
              class="h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Transistor"
            />
          </div>
          <div
            class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1"
          >
            <img
              class="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { computed } from "vue";
// import { useStore } from 'vuex';

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    // const store = useStore();
    return {
      navigation,
      title: computed(() => "store.state.businessDetail.businessName"),
      description: computed(() => "store.state.hero.description"),
    };
  },
};
</script>
