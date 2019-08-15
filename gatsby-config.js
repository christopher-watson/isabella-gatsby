
module.exports = {
  siteMetadata: {
    title: `Isabella Fitness`,
    description: `For all of your fitness needs`,
    author: `Ben Isabella`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-modal-routing`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Isabella Fitness`,
        short_name: `Isabella`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logoSmall.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-drift',
      options: {
        appId: 'is28brf37seh',
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1090029134478904',
      },
    },



    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
