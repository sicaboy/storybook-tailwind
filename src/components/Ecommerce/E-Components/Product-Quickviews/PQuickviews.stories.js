import PQuickview1 from "./PQuickviews1.vue";
import PQuickview2 from "./PQuickviews2.vue";
import PQuickview3 from "./PQuickviews3.vue";
import PQuickview4 from "./PQuickviews4.vue";

export default {
  title: "E-Components/Quickviews",
};
//
export const PQuickviewNo1 = () => ({
  render() {
    return <PQuickview1 />;
  },
});
export const PQuickviewNo2 = () => ({
  render() {
    return <PQuickview2 />;
  },
});
export const PQuickviewNo3 = () => ({
  render() {
    return <PQuickview3 />;
  },
});
export const PQuickviewNo4 = () => ({
  render() {
    return <PQuickview4 />;
  },
});
// Not displaying
