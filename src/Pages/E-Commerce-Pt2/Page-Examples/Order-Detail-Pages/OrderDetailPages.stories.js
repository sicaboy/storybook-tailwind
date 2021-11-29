import ODP1 from "./ODP1.vue";
import ODP2 from "./ODP2.vue";
import ODP3 from "./ODP3.vue";
export default {
  title: "E-Pages/Oder-Detail-Pages",
};
//
export const ODPNo1 = () => ({
  render() {
    return <ODP1 />;
  },
});
export const ODPNo2 = () => ({
  render() {
    return <ODP2 />;
  },
});
export const ODPNo3 = () => ({
  render() {
    return <ODP3 />;
  },
});
