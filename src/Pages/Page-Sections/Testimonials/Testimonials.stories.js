import Testimonial1 from "./1Testimonial.vue";
import Testimonial2 from "./2Testimonial.vue";
import Testimonial3 from "./3Testimonial.vue";
import Testimonial4 from "./4Testimonial.vue";
import Testimonial5 from "./5Testimonial.vue";

export default {
  title: "Testimonials",
};

export const TestimonialNo1 = () => ({
  render() {
    return <Testimonial1 />;
  },
});
export const TestimonialNo2 = () => ({
  render() {
    return <Testimonial2 />;
  },
});
export const TestimonialNo3 = () => ({
  render() {
    return <Testimonial3 />;
  },
});
export const TestimonialNo4 = () => ({
  render() {
    return <Testimonial4 />;
  },
});
export const TestimonialNo5 = () => ({
  render() {
    return <Testimonial5 />;
  },
});
