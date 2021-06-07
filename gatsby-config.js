/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
    siteMetadata: {
    title: `Giraffe Phd's Website`,
    description: `Catherine Yang's personal blog`,
    author: `Catherine`,
    /*siteUrl: `https://arnaudvalensi.github.io`, // No trailing slash allowed.
    social: {
      twitter: `ArnaudValensi`,
    },*/ 
  },

  plugins: [

{
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    `gatsby-transformer-remark`,

  ],
}