import POverview1 from "./POverview1.vue";
import POverview2 from "./POverview2.vue";
import POverview3 from "./POverview3.vue";
import POverview4 from "./POverview4.vue";
import POverview5 from "./POverview5.vue";

export default {
  title: "E-Components/Page-Overviews",
};
//
export const POverviewNo1 = () => ({
  render() {
    return <POverview1 />;
  },
});
export const POverviewNo2 = () => ({
  render() {
    return <POverview2 />;
  },
});
export const POverviewNo3 = () => ({
  render() {
    return <POverview3 />;
  },
});
export const POverviewNo4 = () => ({
  render() {
    return <POverview4 />;
  },
});
export const POverviewNo5 = () => ({
  render() {
    return <POverview5 />;
  },
});
