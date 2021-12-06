import cta2 from "./CTA2.vue";
export default {
  title: "CTA-sections/CTA2",
  component: cta2,
  argTypes: {
    title: {
      control: "text",
    },
    title2: {
      control: "text",
    },
    description: {
      control: "text",
    },
    signUp: {
      control: "text",
    },
  },
};
const template = (args, { argTypes }) => <cta2 {...args} />;
export const Normal = template.bind({});
Normal.args = {
  title: "Boost your productivity.",
  title2: "Start using Workflow today.",
  description: "Ac euismod vel sit maecenas id pellentesque eu sed consectetur",
  signUp: "Sign up for free",
};
