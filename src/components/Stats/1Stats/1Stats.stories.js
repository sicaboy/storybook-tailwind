import Stats1 from './1Stats.vue'

export default {
	title: 'Stats/Stats1',
	component: Stats1,
	argTypes: {
		title: {
			control: 'text'
		},
		description: {
			control: 'text'
		},
		stats: {
			control: 'object'
		}
	}
}

const Template = (args, { argTypes }) => <Stats1 {...args} />

export const Normal = Template.bind({});
Normal.args = {
	title: 'Trusted by developers from over 80 planets',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet aspernatur assumenda beatae debitis dicta eos ipsa ipsum, laudantium necessitatibus, officiis placeat porro quisquam rem, sapiente veritatis voluptatem. Ab beatae, consectetur consequatur ea earum exercitationem impedit in ipsum iusto labore minus molestias necessitatibus non omnis quos repellat sit voluptatum.',
	stats: [
		{
			title: 'Delivery',
			data: '24/7',
		},
		{
			title: 'Pepperoni',
			data: '99.9%',
		},
		{
			title: 'Calories',
			data: '100k+',
		},
	]
}
