module.exports = {
  pathPrefix: `/escape_room`,
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`,
      },
    },
    "gatsby-plugin-typescript",
  ],
};
