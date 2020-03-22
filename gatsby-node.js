exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const existingConfig = getConfig();
  const { plugins } = existingConfig;

  // Remove conflicting expo definitions entry which sets process.env.NODE_ENV to "development" always
  if (process.env.NODE_ENV === "production") {
    const filteredPlugins = plugins.filter((plugin) => {
      return !(plugin.definitions && plugin.definitions.__DEV__);
    });
    actions.replaceWebpackConfig({
      ...existingConfig,
      plugins: filteredPlugins,
    });
  }
};
