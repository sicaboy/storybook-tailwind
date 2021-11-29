import StorefrontPage1 from "./StorefrontPage1.vue";
import StorefrontPage2 from "./StorefrontPage2.vue";
import StorefrontPage3 from "./StorefrontPage3.vue";
import StorefrontPage4 from "./StorefrontPage4.vue";
export default {
  title: "E-Pages/Storefront",
};
//
export const StorefrontPageNo1 = () => ({
  render() {
    return <StorefrontPage1 />;
  },
});
export const StorefrontPageNo2 = () => ({
  render() {
    return <StorefrontPage2 />;
  },
});
export const StorefrontPageNo3 = () => ({
  render() {
    return <StorefrontPage3 />;
  },
});
export const StorefrontPageNo4 = () => ({
  render() {
    return <StorefrontPage4 />;
  },
});
