<!-- This example requires Tailwind CSS v2.0+ -->
<template>
	<div class="bg-gray-100">
		<div class="pt-12 sm:pt-16 lg:pt-20">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2
						class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl"
					>
						Simple no-tricks pricing
					</h2>
					<p class="mt-4 text-xl text-gray-600">
						If you're not satisfied, contact us within the first 14 days and
						we'll send you a full refund.
					</p>
				</div>
			</div>
		</div>
		<div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
			<div class="relative">
				<div class="absolute inset-0 h-1/2 bg-gray-100" />
				<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div
						class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex"
					>
						<div class="flex-1 bg-white px-6 py-8 lg:p-12">
							<h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
								Lifetime Membership
							</h3>
							<p class="mt-6 text-base text-gray-500">
								Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
								amet indis perferendis blanditiis repellendus etur quidem
								assumenda.
							</p>
							<div class="mt-8">
								<div class="flex items-center">
									<h4
										class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600"
									>
										What's included
									</h4>
									<div class="flex-1 border-t-2 border-gray-200" />
								</div>
								<ul
									class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
								>
									<li
										v-for="feature in includedFeatures"
										:key="feature"
										class="flex items-start lg:col-span-1"
									>
										<div class="flex-shrink-0">
											<CheckCircleIcon
												class="h-5 w-5 text-green-400"
												aria-hidden="true"
											/>
										</div>
										<p class="ml-3 text-sm text-gray-700">
											{{ feature }}
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div
							class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"
						>
							<p class="text-lg leading-6 font-medium text-gray-900">
								Pay once, own it forever
							</p>
							<div
								class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900"
							>
								<span>
									$349
								</span>
								<span class="ml-3 text-xl font-medium text-gray-500">
									USD
								</span>
							</div>
							<p class="mt-4 text-sm">
								<a href="#" class="font-medium text-gray-500 underline">
									Learn about our membership policy
								</a>
							</p>
							<div class="mt-6">
								<div class="rounded-md shadow">
									<a
										href="#"
										class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
									>
										Get Access
									</a>
								</div>
							</div>
							<div class="mt-4 text-sm">
								<a href="#" class="font-medium text-gray-900">
									Get a free sample
									{{ ' ' }}
									<span class="font-normal text-gray-500">
										(20MB)
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { CheckCircleIcon } from '@heroicons/vue/solid';

const includedFeatures = [
	'Private forum access',
	'Member resources',
	'Entry to annual conference',
	'Official member t-shirt',
];

export default {
	components: {
		CheckCircleIcon,
	},
	setup() {
		return {
			includedFeatures,
		};
	},
};
</script>
