import ProductPage1 from "./ProductPage1.vue";
import ProductPage2 from "./ProductPage2.vue";
import ProductPage3 from "./ProductPage3.vue";
import ProductPage4 from "./ProductPage4.vue";
import ProductPage5 from "./ProductPage5.vue";
export default {
  title: "E-Components/StorePage",
};
//
export const ProductPageNo1 = () => ({
  render() {
    return <ProductPage1 />;
  },
});
export const ProductPageNo2 = () => ({
  render() {
    return <ProductPage2 />;
  },
});
export const ProductPageNo3 = () => ({
  render() {
    return <ProductPage3 />;
  },
});
export const ProductPageNo4 = () => ({
  render() {
    return <ProductPage4 />;
  },
});
export const ProductPageNo5 = () => ({
  render() {
    return <ProductPage5 />;
  },
});
