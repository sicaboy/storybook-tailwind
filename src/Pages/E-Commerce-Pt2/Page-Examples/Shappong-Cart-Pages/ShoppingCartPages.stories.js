import SCP1 from "./SCP1.vue";
import SCP2 from "./SCP2.vue";
import SCP3 from "./SCP3.vue";
export default {
  title: "E-Pages/Shopping-Carts",
};
//
export const SCPNo1 = () => ({
  render() {
    return <SCP1 />;
  },
});
export const SCPNo2 = () => ({
  render() {
    return <SCP2 />;
  },
});
export const SCPNo3 = () => ({
  render() {
    return <SCP3 />;
  },
});
