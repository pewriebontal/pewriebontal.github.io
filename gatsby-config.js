module.exports = {
  siteMetadata: {
    title: `HOME | pewriebontal`,
    description: `pewriebontal's landing page`,
    image: './src/images/profile.jpg',
    url: `https://pewriebontal.github.io`,
    twitterUsername: '@pewriebontal',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    //  `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-25BM3S78Y3`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'pewriebontal`s Landing Page',
        short_name: `pewriebontal`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: `src/images/logo.svg`,
      },
    },
  ],
};
