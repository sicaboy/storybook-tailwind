import CheckoutPage1 from "./COP1.vue";
import CheckoutPage2 from "./COP2.vue";
import CheckoutPage3 from "./COP3.vue";
import CheckoutPage4 from "./COP4.vue";
import CheckoutPage5 from "./COP5.vue";
export default {
  title: "E-Pages/Checkout-Pages",
};
//
export const CheckoutPageNo1 = () => ({
  render() {
    return <CheckoutPage1 />;
  },
});
export const CheckoutPageNo2 = () => ({
  render() {
    return <CheckoutPage2 />;
  },
});

export const CheckoutPageNo3 = () => ({
  render() {
    return <CheckoutPage3 />;
  },
});

export const CheckoutPageNo4 = () => ({
  render() {
    return <CheckoutPage4 />;
  },
});
export const CheckoutPageNo5 = () => ({
  render() {
    return <CheckoutPage5 />;
  },
});
