<template>
	<div class="bg-white">
		<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
			<div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
				<div class="space-y-5 sm:space-y-4">
					<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
						Our Team
					</h2>
					<p class="text-xl text-gray-500">
						Nulla quam felis, enim faucibus proin velit, ornare id pretium.
						Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat
						eu faucibus vivamus eget bibendum cras.
					</p>
				</div>
				<div class="lg:col-span-2">
					<ul
						class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
					>
						<li v-for="person in people" :key="person.name">
							<div class="space-y-4">
								<div class="aspect-w-3 aspect-h-2">
									<img
										class="object-cover shadow-lg rounded-lg"
										:src="person.imageUrl"
										alt=""
									/>
								</div>
								<div class="text-lg leading-6 font-medium space-y-1">
									<h3>{{ person.name }}</h3>
									<p class="text-indigo-600">{{ person.role }}</p>
								</div>
								<div class="text-lg">
									<p class="text-gray-500">{{ person.bio }}</p>
								</div>

								<ul class="flex space-x-5">
									<li>
										<a
											:href="person.twitterUrl"
											class="text-gray-400 hover:text-gray-500"
										>
											<span class="sr-only">Twitter</span>
											<svg
												class="w-5 h-5"
												aria-hidden="true"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
												/>
											</svg>
										</a>
									</li>
									<li>
										<a
											:href="person.linkedinUrl"
											class="text-gray-400 hover:text-gray-500"
										>
											<span class="sr-only">LinkedIn</span>
											<svg
												class="w-5 h-5"
												aria-hidden="true"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fill-rule="evenodd"
													d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
													clip-rule="evenodd"
												/>
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const people = [
	{
		name: 'Emma Dorsey',
		role: 'Senior Front-end Developer',
		imageUrl:
			'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
		bio:
			'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
		twitterUrl: '#',
		linkedinUrl: '#',
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
