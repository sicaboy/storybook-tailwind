import Stats4 from './4Stats.vue'

export default {
	title: 'Stats/Stats4',
	component: Stats4,
	argTypes: {
		imageSrc: {
			control: 'file'
		},
		title: {
			control: 'text'
		},
		subtitle: {
			control: 'text'
		},
		description: {
			control: 'text'
		},
		metrics: {
			control: 'object'
		}
	}
}

const Template = (args, { argTypes }) => <Stats4 {...args} />

export const Normal = Template.bind({});
Normal.args = {
	imageSrc: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100',
	title: 'Valuable Metrics',
	subtitle: 'Get actionable data that will help grow your business',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet aspernatur assumenda beatae debitis dicta eos ipsa ipsum, laudantium necessitatibus, officiis placeat porro quisquam rem, sapiente veritatis voluptatem. Ab beatae, consectetur consequatur ea earum exercitationem impedit in ipsum iusto labore minus molestias necessitatibus non omnis quos repellat sit voluptatum.',
	metrics: [
		{
			id: 1,
			stat: '8K+',
			emphasis: 'Companies',
			rest: 'use laoreet amet lacus nibh integer quis.',
		},
		{
			id: 2,
			stat: '25K+',
			emphasis: 'Countries around the globe',
			rest: 'lacus nibh integer quis.',
		},
		{
			id: 3,
			stat: '98%',
			emphasis: 'Customer satisfaction',
			rest: 'laoreet amet lacus nibh integer quis.',
		},
		{
			id: 4,
			stat: '12M+',
			emphasis: 'Issues resolved',
			rest: 'lacus nibh integer quis.',
		},
	]
}
