import SNav1 from "./SNav1.vue";
import SNav2 from "./SNav2.vue";
import SNav3 from "./SNav3.vue";
import SNav4 from "./SNav4.vue";
import SNav5 from "./SNav5.vue";
export default {
  title: "E-Components/Store-navigation",
};
//
export const SNavNo1 = () => ({
  render() {
    return <SNav1 />;
  },
});
export const SNavNo2 = () => ({
  render() {
    return <SNav2 />;
  },
});
export const SNavNo3 = () => ({
  render() {
    return <SNav3 />;
  },
});
export const SNavNo4 = () => ({
  render() {
    return <SNav4 />;
  },
});
export const SNavNo5 = () => ({
  render() {
    return <SNav5 />;
  },
});
