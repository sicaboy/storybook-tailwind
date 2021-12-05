import Stats3 from './3Stats.vue'

export default {
	title: 'Stats/Stats3',
	component: Stats3,
	argTypes: {
		imageSrc: {
			control: 'file'
		},
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

const Template = (args, { argTypes }) => <Stats3 {...args} />

export const Normal = Template.bind({});
Normal.args = {
	imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
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
