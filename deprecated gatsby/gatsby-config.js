/**
 * Gatsby configuration file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

module.exports = {
  pathPrefix: "/SJP", // Prefix for all paths on the site

  siteMetadata: {
    title: `My Custom Website`, // Site title
    description: `Welcome to my custom Gatsby website.`, // Site description
    author: `@shashw4t`, // Site author
    siteUrl: `https://www.shashw4t.com`, // Site URL
  },

  plugins: [
    `gatsby-plugin-image`, // Optimized images
    `gatsby-plugin-react-helmet`, // Manage document head data
    `gatsby-plugin-sitemap`, // Generate sitemap
    {
      resolve: `gatsby-source-filesystem`, // Source data from filesystem
      options: {
        name: `images`, // Source instance name
        path: `${__dirname}/src/images`, // Directory path
      },
    },
    `gatsby-transformer-sharp`, // Image transformation
    `gatsby-plugin-sharp`, // Image processing
    {
      resolve: `gatsby-plugin-manifest`, // Generate web app manifest
      options: {
        name: `My Custom Website`, // Web app name
        short_name: `starter`, // Short name
        start_url: `/SJP/`, // Start URL
        background_color: `#663399`, // Background color
        theme_color: `#663399`, // Theme color
        display: `minimal-ui`, // Display mode
        icon: `src/images/gatsby-icon.png`, // Icon path
      },
    },
    `gatsby-plugin-offline`, // Offline functionality
  ],
}