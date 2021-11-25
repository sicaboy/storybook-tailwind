import Banner1 from "./Banner1.vue";
import Banner2 from "./Banner2.vue";
import Banner3 from "./Banner3.vue";
import Banner4 from "./Banner4.vue";
import Banner5 from "./Banner5.vue";

export default {
  title: "Elements/Banners",
};
//
export const BannerNo1 = () => ({
  render() {
    return <Banner1 />;
  },
});

export const BannerNo2 = () => ({
  render() {
    return <Banner2 />;
  },
});
export const BannerNo3 = () => ({
  render() {
    return <Banner3 />;
  },
});
export const BannerNo4 = () => ({
  render() {
    return <Banner4 />;
  },
});
export const BannerNo5 = () => ({
  render() {
    return <Banner5 />;
  },
});
