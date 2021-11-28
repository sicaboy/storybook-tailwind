// import "storybook-zeplin/register";
module.exports = {
  stories: [
    "../../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../src/Pages/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "storybook-zeplin/register",
    "@storybook/addon-viewport",
    "@storybook/addon-ally",
    "storybook-addon-preview/register",
  ],
};
