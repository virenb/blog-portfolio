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
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
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
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `yzwpq1epaq68`,
    //     accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://virenb.cc`,
      },
    },
  ],
}
