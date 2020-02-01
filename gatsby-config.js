module.exports = {
    siteMetadata: {
        title: `Champagne Chaléroux-Ghys`,
        description: `Champagne Chaléroux-Ghys, vignoble grand cru blanc de blanc situé à avize`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`, // @TODO: What is the purpose ?
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaultQuality: 75,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Champagne Chaléroux-Ghys`,
                short_name: `Champagne Chaléroux-Ghys`,
                start_url: `/`,
                background_color: `#8c572c`,
                theme_color: `#8c572c`,
                display: `minimal-ui`,
                icon: `src/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                // language JSON resource path
                path: `${__dirname}/src/intl`,
                // supported language
                languages: [`en`, `fr`],
                // language file path
                defaultLanguage: `fr`,
            },
        },
    ],
};
