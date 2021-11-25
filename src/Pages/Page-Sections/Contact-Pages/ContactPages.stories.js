import ContactPage1 from "./1ContactPage.vue";
import ContactPage2 from "./2ContactPage.vue";
import ContactPage3 from "./3ContactPage.vue";
import ContactPage4 from "./4ContactPage.vue";

export default {
  title: "Contact-Pages/Contacts",
};

export const ContactPageNo1 = () => ({
  render() {
    return <ContactPage1 />;
  },
});
export const ContactPageNo2 = () => ({
  render() {
    return <ContactPage2 />;
  },
});
export const ContactPageNo3 = () => ({
  render() {
    return <ContactPage3 />;
  },
});
export const ContactPageNo4 = () => ({
  render() {
    return <ContactPage4 />;
  },
});
