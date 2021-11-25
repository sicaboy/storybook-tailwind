import Header2 from "./2Header.vue";
import Header3 from "./3Header.vue";
import Header4 from "./4Header.vue";
import Header5 from "./5Header.vue";
import Header6 from "./6Header.vue";
export default {
  title: "Page-Headings/Headings",
};

export const vueHeading2 = () => ({
  render() {
    return <Header2 />;
  },
});
export const vueHeading3 = () => ({
  render() {
    return <Header3 />;
  },
});
export const vueHeading4 = () => ({
  render() {
    return <Header4 />;
  },
});
export const vueHeading5 = () => ({
  render() {
    return <Header5 />;
  },
});
export const vueHeading6 = () => ({
  render() {
    return <Header6 />;
  },
});
