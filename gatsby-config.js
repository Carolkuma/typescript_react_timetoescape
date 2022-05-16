const path = require(`path`);

module.exports = {
  siteMetadata: {
    title:
      "Escape room - Spišská Nová Ves | Mission Imposible | timetoescape.sk",
    siteUrl: "https://timetoescape.sk",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-typescript",
    `gatsby-plugin-offline`,
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-hotjar-tracking`,
      options: {
        includeInDevelopment: false,
        id: 1837182,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-173979954-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 60,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: '1676263582538529',
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-subfont`,
      options: {
        silent: true,
        fallback: false,
        inlineFonts: false,
      },
    },
  ],
};
