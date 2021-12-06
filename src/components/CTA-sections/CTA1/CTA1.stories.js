import cta1 from "./CTA1.vue";
export default {
  title: "CTA-sections/CTA1",
  component: cta1,
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

const template = (args, { argTypes }) => <cta1 {...args} />;

export const Normal = template.bind({});
Normal.args = {
  title: "Ready to dive in?",
  description: "Start your free trial today.",
  button1: " Get started",
  button2: "Learn more",
};
