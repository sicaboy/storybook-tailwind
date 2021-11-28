import Header from "./Header.vue";
import Header2 from "./Header2.vue";
import Header3 from "./Header3.vue";
import Header4 from "./Header4.vue";
import Header5 from "./Header5.vue";

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
export const vueHeader3 = () => ({
  render() {
    return <Header3 />;
  },
});
export const vueHeader4 = () => ({
  render() {
    return <Header4 />;
  },
});

export const vueHeader5 = () => ({
  render() {
    return <Header5 />;
  },
});
