import cta4 from "./CTA4.vue";
export default {
  title: "CTA-sections/CTA4",
  component: cta4,
  argTypes: {
    title: {
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
const template = (args, { argTypes }) => <cta4 {...args} />;
export const Normal = template.bind({});
Normal.args = {
  title: "Boost your productivity.",

  description: "Ac euismod vel sit maecenas id pellentesque eu sed consectetur",
  signUp: "Sign up for free",
};
