module.exports = {
  siteMetadata: {
    title: `HOME | pewriebontal`,
    description: `pewriebontal's landing page`,
    image: './static/img/logo.png',
    siteUrl: `https://pewriebontal.ml`,
    twitterUsername: '@pewriebontal',
    keywords: 'pewrie bontal, Min Thu Khine, pewriebontal',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://pewriebontal.ml/',
          site_name: 'Pewriebontal',
        },
        twitter: {
          handle: '@pewriebontal',
          site: '@pewriebontal',
          cardType: 'summary_large_image',
        },
      },
    },
    //  `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-6B7Z9MNJKN`,
      },
    },
    {
      resolve: `gatsby-plugin-clarity`,
      options: {
        clarity_project_id: '6s9un0f33s',
        enable_on_dev_env: false,
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
        name: `HOME | pewriebontal`,
        short_name: `PB`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#1a1919`,
        display: `standalone`,
        icon: `src/images/logo.svg`,
      },
    },
  ],
};
