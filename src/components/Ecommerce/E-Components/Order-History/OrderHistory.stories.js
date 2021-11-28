import OH1 from "./OH1.vue";
import OH2 from "./OH2.vue";
import OH3 from "./OH3.vue";
import OH4 from "./OH4.vue";
export default {
  title: "E-Components/Order-History",
};
//
export const OrderHistoryNo1 = () => ({
  render() {
    return <OH1 />;
  },
});
export const OrderHistoryNo2 = () => ({
  render() {
    return <OH2 />;
  },
});
export const OrderHistoryNo3 = () => ({
  render() {
    return <OH3 />;
  },
});
export const OrderHistoryNo4 = () => ({
  render() {
    return <OH4 />;
  },
});
