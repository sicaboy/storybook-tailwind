import CP1 from "./CP1.vue";
import CP2 from "./CP2.vue";
import CP3 from "./CP3.vue";
import CP4 from "./CP4.vue";
import CP5 from "./CP5.vue";
export default {
  title: "E-Components/CategoryPages",
};
//
export const CategoryPagesNo1 = () => ({
  render() {
    return <CP1 />;
  },
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
