import LandingPage1 from "./1LandingPage.vue";
import LandingPage2 from "./2LandingPage.vue";
import LandingPage3 from "./3LandingPage.vue";

export default {
  title: "Landing-Pages/LandingPage",
};
//
export const LandingPageNo1 = () => ({
  render() {
    return <LandingPage1 />;
  },
});
export const LandingPageNo2 = () => ({
  render() {
    return <LandingPage2 />;
  },
});
export const LandingPageNo3 = () => ({
  render() {
    return <LandingPage3 />;
  },
});
