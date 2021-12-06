import cta6 from "./CTA6.vue";
export default {
  title: "CTA-sections/CTA6",
  component: cta6,
  argTypes: {
    title: {
      control: "text",
    },
    title: {
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
const template = (args, { argTypes }) => <cta6 {...args} />;
export const Normal = template.bind({});
Normal.args = {
  title: "Ready to dive in?",
  description: "Start your free trial today.",
  button1: "Sign up for free",
  button2: "Learn more",
};
