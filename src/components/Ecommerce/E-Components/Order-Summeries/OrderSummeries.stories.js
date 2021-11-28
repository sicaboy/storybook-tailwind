import OS1 from "./OS1.vue";
import OS2 from "./OS2.vue";
import OS3 from "./OS3.vue";
import OS4 from "./OS4.vue";
export default {
  title: "E-Components/Order-Summery",
};
//
export const OrderSummeryNo1 = () => ({
  render() {
    return <OS1 />;
  },
});
export const OrderSummeryNo2 = () => ({
  render() {
    return <OS2 />;
  },
});
export const OrderSummeryNo3 = () => ({
  render() {
    return <OS3 />;
  },
});
export const OrderSummeryNo4 = () => ({
  render() {
    return <OS4 />;
  },
});
