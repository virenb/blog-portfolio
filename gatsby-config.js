require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Viren Bhagat`,
    description: `Viren Bhagat's portfolio and blog`,
    author: `@virengb`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Viren Bhagat Portfolio`,
        short_name: `virenb`,
        start_url: `/`,
        background_color: `#2e8b57`,
        theme_color: `#2e8b57`,
        display: `minimal-ui`,
        icon: `src/images/apple-touch-icon.png`,
        // icons: [
        //   {
        //     src: `src/images/android-chrome-192x192.png`,
        //     sizes: `192x192`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `src/images/android-chrome-512x512.png`,
        //     sizes: `512x512`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `src/images/apple-touch-icon.png`,
        //     sizes: `180x180`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `src/images/favicon-16x16.png`,
        //     sizes: `16x16`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `src/images/favicon-32x32.png`,
        //     sizes: `32x32`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `src/images/favicon.ico`,
        //     sizes: `48x48`,
        //     type: `image/ico`,
        //   },
        // ]
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `yzwpq1epaq68`,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
