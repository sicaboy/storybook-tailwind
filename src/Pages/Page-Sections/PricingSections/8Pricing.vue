<!-- This example requires Tailwind CSS v2.0+ -->
<template>
	<div class="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
		<h2
			class="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl"
		>
			Pricing plans for teams of all sizes
		</h2>
		<p class="mt-6 max-w-2xl text-xl text-gray-500">
			Choose an affordable plan that's packed with the best features for
			engaging your audience, creating customer loyalty, and driving sales.
		</p>

		<!-- Tiers -->
		<div
			class="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8"
		>
			<div
				v-for="tier in pricing.tiers"
				:key="tier.title"
				class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
			>
				<div class="flex-1">
					<h3 class="text-xl font-semibold text-gray-900">{{ tier.title }}</h3>
					<p
						v-if="tier.mostPopular"
						class="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2"
					>
						Most popular
					</p>
					<p class="mt-4 flex items-baseline text-gray-900">
						<span class="text-5xl font-extrabold tracking-tight"
							>${{ tier.price }}</span
						>
						<span class="ml-1 text-xl font-semibold">{{ tier.frequency }}</span>
					</p>
					<p class="mt-6 text-gray-500">{{ tier.description }}</p>

					<!-- Feature list -->
					<ul role="list" class="mt-6 space-y-6">
						<li v-for="feature in tier.features" :key="feature" class="flex">
							<CheckIcon
								class="flex-shrink-0 w-6 h-6 text-indigo-500"
								aria-hidden="true"
							/>
							<span class="ml-3 text-gray-500">{{ feature }}</span>
						</li>
					</ul>
				</div>

				<a
					href="#"
					:class="[
						tier.mostPopular
							? 'bg-indigo-500 text-white hover:bg-indigo-600'
							: 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
						'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium',
					]"
					>{{ tier.cta }}</a
				>
			</div>
		</div>
	</div>
</template>

<script>
import { CheckIcon } from '@heroicons/vue/outline';

const pricing = {
	tiers: [
		{
			title: 'Freelancer',
			price: 24,
			frequency: '/month',
			description: 'The essentials to provide your best work for clients.',
			features: [
				'5 products',
				'Up to 1,000 subscribers',
				'Basic analytics',
				'48-hour support response time',
			],
			cta: 'Monthly billing',
			mostPopular: false,
		},
		{
			title: 'Startup',
			price: 32,
			frequency: '/month',
			description: 'A plan that scales with your rapidly growing business.',
			features: [
				'25 products',
				'Up to 10,000 subscribers',
				'Advanced analytics',
				'24-hour support response time',
				'Marketing automations',
			],
			cta: 'Monthly billing',
			mostPopular: true,
		},
		{
			title: 'Enterprise',
			price: 48,
			frequency: '/month',
			description: 'Dedicated support and infrastructure for your company.',
			features: [
				'Unlimited products',
				'Unlimited subscribers',
				'Advanced analytics',
				'1-hour, dedicated support response time',
				'Marketing automations',
				'Custom integrations',
			],
			cta: 'Monthly billing',
			mostPopular: false,
		},
	],
};

export default {
	components: {
		CheckIcon,
	},
	setup() {
		return {
			pricing,
		};
	},
};
</script>
