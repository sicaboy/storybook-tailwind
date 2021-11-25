import Stats1 from "./1Stats.vue";
import Stats2 from "./2Stats.vue";
import Stats3 from "./3Stats.vue";
import Stats4 from "./4Stats.vue";

export default {
  title: "Stats",
};

export const StatsNo1 = () => ({
  render() {
    return <Stats1 />;
  },
});

export const StatsNo2 = () => ({
  render() {
    return <Stats2 />;
  },
});

export const StatsNo3 = () => ({
  render() {
    return <Stats3 />;
  },
});

export const StatsNo4 = () => ({
  render() {
    return <Stats4 />;
  },
});
