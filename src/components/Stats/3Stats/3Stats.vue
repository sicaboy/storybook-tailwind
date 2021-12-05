<script>
import { UsersIcon } from '@heroicons/vue/outline';

export default {
  props: ['imageSrc', 'title', 'description', 'stats'],
  components: {
    UsersIcon,
  },
};
</script>

<template>
	<div class="relative bg-white">
		<div
			class="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2"
		>
			<img
				class="w-full h-full object-cover"
				:src="imageSrc"
				alt="Support team"
			/>
		</div>
		<div class="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
			<div
				class="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10"
			>
				<div>
					<div
						class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
					>
						<UsersIcon class="h-6 w-6" aria-hidden="true" />
					</div>
				</div>
				<h2 class="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
					{{ title }}
				</h2>
				<p class="mt-6 text-lg text-gray-500">
          {{ description }}
        </p>
				<div class="mt-8 overflow-hidden">
					<dl class="-mx-8 -mt-8 flex flex-wrap">
						<div :key="i" v-for="(stat, i) in stats" class="flex flex-col px-8 pt-8">
							<dt class="order-2 text-base font-medium text-gray-500">
								{{ stat.title }}
							</dt>
							<dd
								class="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl"
							>
								{{ stat.data }}
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	</div>
</template>