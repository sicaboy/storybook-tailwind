import cta7 from "./CTA7.vue";
export default {
  title: "CTA-sections/CTA7",
  component: cta7,
  argTypes: {
    imgSrc: {
      control: "file",
    },
    title1: {
      control: "text",
    },
    title2: {
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
const template = (args, { argTypes }) => <cta7 {...args} />;
export const Normal = template.bind({});
Normal.args = {
  imgSrc:
    "https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
  title: "Award winning support",
  title2: "We’re here to help",
  description: "Ac euismod vel sit maecenas id pellentesque eu sed consectetur",
  signUpBtn: "Explore open positions",
};
