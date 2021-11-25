import Blog1 from "./1Blog.vue";
import Blog2 from "./2Blog.vue";
import Blog3 from "./3Blog.vue";
export default {
  title: "Blog-sections/Blogs",
};

export const BlogNo1 = () => ({
  render() {
    return <Blog1 />;
  },
});
export const BlogNo2 = () => ({
  render() {
    return <Blog2 />;
  },
});
export const BlogNo3 = () => ({
  render() {
    return <Blog3 />;
  },
});
