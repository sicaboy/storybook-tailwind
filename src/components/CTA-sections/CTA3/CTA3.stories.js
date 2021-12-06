import cta3 from "./CTA3.vue";
export default {
  title: "CTA-sections/CTA3",
  component: cta3,
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    button1: {
      control: "text",
    },
    button2: {
      control: "text",
    },
  },
};
const template = (args, { argTypes }) => <cta3 {...args} />;

export const Normal = template.bind({});
Normal.args = {
  title: "Ready to dive in?",
  description: "Start your free trial today.",
  button1: " Get started",
  button2: "Learn more",
};
