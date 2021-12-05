import CP1 from "./CP1.vue";
import CP2 from "./CP2.vue";
import CP3 from "./CP3.vue";
import CP4 from "./CP4.vue";
import CP5 from "./CP5.vue";
import { story } from "../../../../../config/storybook/story";
export default {
  title: "E-Components/CategoryPages",
};
//
// export const CategoryPagesNo1 = () => ({
//   render() {
//     return <CP1 />;
//   },
// });
const template = (args) => ({
  components: { Button },
  setup() {
    ``;
    return { args };
  },
  template: "<CP1/>",
});
export const CategoryPagesNo1 = () => ({
  components: { CP1 },
  template: "<CP1/>",
});

export const CategoryPagesNo2 = () => ({
  render() {
    return <CP2 />;
  },
});
export const CategoryPagesNo3 = () => ({
  render() {
    return <CP3 />;
  },
});
export const CategoryPagesNo4 = () => ({
  render() {
    return <CP4 />;
  },
});
export const CategoryPagesNo5 = () => ({
  render() {
    return <CP5 />;
  },
});
export const Primary = Template.bind({});
CPreview2.args = {
  primary: true,
  label: "Button",
  label2: "test",
  buttonText: "Buttonss",
};
