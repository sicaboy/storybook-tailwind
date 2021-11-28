import R1 from "./R1.vue";
import R2 from "./R2.vue";
import R3 from "./R3.vue";
import R4 from "./R4.vue";
export default {
  title: "E-Components/Reviews-Section",
};
//
export const ReviewNo1 = () => ({
  render() {
    return <R1 />;
  },
});
export const ReviewNo2 = () => ({
  render() {
    return <R2 />;
  },
});
export const ReviewNo3 = () => ({
  render() {
    return <R3 />;
  },
});
export const ReviewNo4 = () => ({
  render() {
    return <R4 />;
  },
});
