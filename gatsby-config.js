module.exports = {
  siteMetadata: {
    title: "Gatsby Bootstrap Wordpress Sourced",
    description: "This is the description of our website",
    keywords: "keyword 1, keyword 2",
    image: "./static/gatsby.png",
    url: "https://www.gatsbyjs.org",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `practice.codingsrc.com`,
        protocol: `http`,
        hostingWPCOM: false,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
  ],
};
