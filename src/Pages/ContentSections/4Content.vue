<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ]
  }
  ```
-->
<template>
	<div class="py-16 bg-gray-50 overflow-hidden">
		<div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
			<div class="text-base max-w-prose mx-auto lg:max-w-none">
				<h2
					class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
				>
					Transactions
				</h2>
				<p
					class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
				>
					What makes us different
				</p>
			</div>
			<div
				class="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72"
			>
				<p class="text-lg text-gray-500">
					Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
					urna sed consectetur neque tristique pellentesque. Blandit amet, sed
					aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel
					porttitor vitae ut. Amet vitae fames senectus vitae.
				</p>
			</div>
			<div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
				<div class="relative z-10">
					<div class="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
						<p>
							Sollicitudin tristique eros erat odio sed vitae, consequat turpis
							elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu
							viverra donec ut volutpat donec laoreet quam urna.
						</p>
						<ul>
							<li>Quis elit egestas venenatis mattis dignissim.</li>
							<li>
								Cras cras lobortis vitae vivamus ultricies facilisis tempus.
							</li>
							<li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
						</ul>
						<p>
							Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt
							vel ultricies. Vulputate aliquet velit faucibus semper.
							Pellentesque in venenatis vestibulum consectetur nibh id. In id ut
							tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum
							lacus in. Viverra.
						</p>
						<h3>We’re here to help</h3>
						<p>
							Tincidunt integer commodo, cursus etiam aliquam neque, et.
							Consectetur pretium in volutpat, diam. Montes, magna cursus nulla
							feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu
							proin massa, lectus. Diam rutrum posuere donec ultricies non
							morbi. Mi a platea auctor mi.
						</p>
					</div>
					<div class="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
						<div class="rounded-md shadow">
							<a
								href="#"
								class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
							>
								Contact sales
							</a>
						</div>
						<div class="rounded-md shadow ml-4">
							<a
								href="#"
								class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
							>
								Learn more
							</a>
						</div>
					</div>
				</div>
				<div
					class="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none"
				>
					<svg
						class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
						width="404"
						height="384"
						fill="none"
						viewBox="0 0 404 384"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
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
							height="384"
							fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
						/>
					</svg>
					<blockquote class="relative bg-white rounded-lg shadow-lg">
						<div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
							<img
								src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
								alt="Workcation"
								class="h-8"
							/>
							<div class="relative text-lg text-gray-700 font-medium mt-8">
								<svg
									class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
									fill="currentColor"
									viewBox="0 0 32 32"
									aria-hidden="true"
								>
									<path
										d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
									/>
								</svg>
								<p class="relative">
									Tincidunt integer commodo, cursus etiam aliquam neque, et.
									Consectetur pretium in volutpat, diam. Montes, magna cursus
									nulla feugiat dignissim id lobortis amet. Laoreet sem est
									phasellus eu proin massa, lectus.
								</p>
							</div>
						</div>
						<cite
							class="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10"
						>
							<div
								class="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2"
							>
								<img
									class="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
									src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
									alt=""
								/>
							</div>
							<span
								class="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1"
							>
								<p class="text-white font-semibold sm:inline">Judith Black</p>
								{{ ' ' }}
								<p class="sm:inline">CEO at Workcation</p>
							</span>
						</cite>
					</blockquote>
				</div>
			</div>
		</div>
	</div>
</template>
