<!-- This example requires Tailwind CSS v2.0+ -->
<template>
	<div class="bg-gray-50">
		<div
			class="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8"
		>
			<h2 class="text-3xl font-extrabold text-gray-900">
				Frequently asked questions
			</h2>
			<div class="mt-8">
				<dl class="divide-y divide-gray-200">
					<div
						v-for="faq in faqs"
						:key="faq.id"
						class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
					>
						<dt class="text-base font-medium text-gray-900 md:col-span-5">
							{{ faq.question }}
						</dt>
						<dd class="mt-2 md:mt-0 md:col-span-7">
							<p class="text-base text-gray-500">
								{{ faq.answer }}
							</p>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
const faqs = [
	{
		id: 1,
		question: "What's the best thing about Switzerland?",
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	// More questions...
];

export default {
	setup() {
		return {
			faqs,
		};
	},
};
</script>
