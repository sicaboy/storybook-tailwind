<template>
	<div class="bg-white">
		<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
			<div class="space-y-12">
				<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
					Meet our leadership
				</h2>

				<ul
					class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
				>
					<li v-for="person in people" :key="person.name">
						<div
							class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8"
						>
							<div
								class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4"
							>
								<img
									class="object-cover shadow-lg rounded-lg"
									:src="person.imageUrl"
									alt=""
								/>
							</div>
							<div class="sm:col-span-2">
								<div class="space-y-4">
									<div class="text-lg leading-6 font-medium space-y-1">
										<h3>{{ person.name }}</h3>
										<p class="text-indigo-600">{{ person.role }}</p>
									</div>
									<div class="text-lg">
										<p class="text-gray-500">{{ person.bio }}</p>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
const people = [
	{
		name: 'Whitney Francis',
		role: 'Copywriter',
		imageUrl:
			'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
		bio:
			'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
	},
	// More people...
];

export default {
	setup() {
		return {
			people,
		};
	},
};
</script>
