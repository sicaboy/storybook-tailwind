import Newsletter1 from "./Newsletter1.vue";
import Newsletter2 from "./Newsletter2.vue";
import Newsletter3 from "./Newsletter3.vue";
import Newsletter4 from "./Newsletter4.vue";
import Newsletter5 from "./Newsletter5.vue";
import Newsletter6 from "./Newsletter6.vue";

export default {
  title: "Newsletts-sections/Newsletter",
};
//
export const NewsletterNo1 = () => ({
  render() {
    return <Newsletter1 />;
  },
});

export const NewsletterNo2 = () => ({
  render() {
    return <Newsletter2 />;
  },
});
export const NewsletterNo3 = () => ({
  render() {
    return <Newsletter3 />;
  },
});
export const NewsletterNo4 = () => ({
  render() {
    return <Newsletter4 />;
  },
});
export const NewsletterNo5 = () => ({
  render() {
    return <Newsletter5 />;
  },
});
export const NewsletterNo6 = () => ({
  render() {
    return <Newsletter6 />;
  },
});
