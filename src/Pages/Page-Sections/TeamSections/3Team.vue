<!-- This example requires Tailwind CSS v2.0+ -->
<template>
	<div class="bg-white">
		<div
			class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24"
		>
			<div class="space-y-8 sm:space-y-12">
				<div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
					<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
						The People
					</h2>
					<p class="text-xl text-gray-500">
						Risus velit condimentum vitae tincidunt tincidunt. Mauris ridiculus
						fusce amet urna nunc. Ut nisl ornare diam in.
					</p>
				</div>
				<ul
					class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
				>
					<li v-for="person in people" :key="person.name">
						<div class="space-y-4">
							<img
								class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
								:src="person.imageURL"
								alt=""
							/>
							<div class="space-y-2">
								<div class="text-xs font-medium lg:text-sm">
									<h3>{{ person.name }}</h3>
									<p class="text-indigo-600">{{ person.role }}</p>
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
		name: 'Yap Yee Qiang',
		role: 'Role 1',
		imageURL:
			'https://media-exp1.licdn.com/dms/image/C4D03AQEDN8ZfGRCGRw/profile-displayphoto-shrink_800_800/0/1618431771538?e=1633564800&v=beta&t=j3NlHvS39B53Pw8ApKErv3aiZJ8ZbXrBKVe2BX692OU',
	},
	{
		name: 'Michael Foster',
		role: 'Co-Founder / CTO',
		imageURL:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
];

export default {
	setup() {
		return {
			people,
		};
	},
};
</script>
