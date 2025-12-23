module.exports = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  // stories: [
  //   "../../src/entitiesModule//Profile/ui/ProfileEditCard/ProfileEditCard.stories.tsx",
  // ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
