module.exports = {
  siteMetadata: {
    title: `Quarantined Customer`,
    titleTemplate: "%s · Quarantined Customer",
    description: `Your local business needs you, make a difference by keep remaining a customer`,
    url: "https://quarantinedcustomer.com", // No trailing slash allowed!
    image: "/og/qc-screen-og-image-1.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@quarantinedcustomer",
    facebookAppId: "",
  },
  plugins: [
    `gatsby-plugin-react-native-web`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Quarantined Customer",
        short_name: "Quarantined Customer",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "assets/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
