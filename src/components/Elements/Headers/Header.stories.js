import Header from "./Header.vue";
import Header2 from "./Header2.vue";

export default {
  title: "Elements/Headers",
};

// First header
export const vueHeader = () => ({
  render() {
    return <Header />;
  },
});

// second header (Header2.vue)

export const vueHeader2 = () => ({
  render() {
    return <Header2 />;
  },
});
