import SCart1 from "./SCarts1.vue";
import SCart2 from "./SCarts2.vue";
import SCart3 from "./SCarts3.vue";
import SCart4 from "./SCarts4.vue";
import SCart5 from "./SCarts5.vue";
import SCart6 from "./SCarts6.vue";

export default {
  title: "E-Components/Shopping-Carts",
};
//
export const SCartNo1 = () => ({
  render() {
    return <SCart1 />;
  },
});
export const SCartNo2 = () => ({
  render() {
    return <SCart2 />;
  },
});
export const SCartNo3 = () => ({
  render() {
    return <SCart3 />;
  },
});
export const SCartNo4 = () => ({
  render() {
    return <SCart4 />;
  },
});
export const SCartNo5 = () => ({
  render() {
    return <SCart5 />;
  },
});
export const SCartNo6 = () => ({
  render() {
    return <SCart6 />;
  },
});
