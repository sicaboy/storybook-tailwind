import Stats2 from './2Stats.vue'

export default {
	title: 'Stats/Stats2',
	component: Stats2,
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

const Template = (args, { argTypes }) => <Stats2 {...args} />

export const Normal = Template.bind({});
Normal.args = {
	title: 'Deliver what your customers want every time',
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
