const path = require(`path`)

module.exports = {
  flags: {
    PARTIAL_HYDRATION: true,
  },
  graphqlTypegen: true,
  polyfill: false,
  siteMetadata: {
    title: 'Escape room - Spišská Nová Ves | Mission Imposible | timetoescape.sk',
    siteUrl: 'https://timetoescape.sk',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-emotion`,
    'gatsby-plugin-typescript',
    `gatsby-plugin-offline`,
    'gatsby-plugin-sitemap',
    // {
    //   resolve: `gatsby-plugin-hotjar-tracking`,
    //   options: {
    //     includeInDevelopment: false,
    //     id: 1837182,
    //     sv: 6,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-173979954-1',
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
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-subfont`,
      options: {
        silent: true,
        fallback: false,
        inlineFonts: true,
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Fonts`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&family=Teko:wght@500&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        ignore: ['react-image-lightbox/style.css', 'leaflet/dist/leaflet.css'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: ['safelist'], // Don't remove this selector
        },
        // More options defined here https://purgecss.com/configuration.html#options
      },
    },
  ],
}
