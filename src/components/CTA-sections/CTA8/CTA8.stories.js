import cta8 from "./CTA8.vue";
export default {
  title: "CTA-sections/CTA8",
  component: cta8,
  argTypes: {
    imgSrc: {
      control: "file",
    },
    title: {
      control: "text",
    },

    description: {
      control: "text",
    },
    signUpBtn: {
      control: "text",
    },
  },
};
const template = (args, { argTypes }) => <cta8 {...args} />;
export const Normal = template.bind({});
Normal.args = {
  imgSrc:
    "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply",
  title: "Join our team",

  description: "Ac euismod vel sit maecenas id pellentesque eu sed consectetur",
  signUpBtn: "Visit the help center",
};
