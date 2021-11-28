import PricingPage1 from "./1PricingPage.vue";
import PricingPage2 from "./2PricingPage.vue";
import PricingPage3 from "./3PricingPage.vue";
import PricingPage4 from "./4PricingPage.vue";
import PricingPage5 from "./5PricingPage.vue";
import PricingPage6 from "./6PricingPage.vue";

export default {
  title: "PricingPage",
};
export const PricingPageNo1 = () => ({
  render() {
    return <PricingPage1 />;
  },
});

export const PricingPageNo2 = () => ({
  render() {
    return <PricingPage2 />;
  },
});

export const PricingPageNo3 = () => ({
  render() {
    return <PricingPage3 />;
  },
});

export const PricingPageNo4 = () => ({
  render() {
    return <PricingPage4 />;
  },
});

export const PricingPageNo5 = () => ({
  render() {
    return <PricingPage5 />;
  },
});

export const PricingPageNo6 = () => ({
  render() {
    return <PricingPage6 />;
  },
});
