module.exports = {
  siteMetadata: {
    title: `Debuxing`,
    description: `Debuxing: The answer to your programming problems`,
    author: `@escapemanuele`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MT5H5NL",
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/debuxing-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "debuxing.com",
        protocol: "http",
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        useACF: true,
        // Include specific ACF Option Pages that have a set post ID
        // Regardless if an ID is set, the default options route will still be retrieved
        // Must be using V3 of ACF to REST to include these routes
        // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // routes with the ID option_page_1 and option_page_2
        // The IDs provided to this array should correspond to the `post_id` value when defining your
        // options page using the provided `acf_add_options_page` method, in your WordPress setup
        // Dashes in IDs will be converted to underscores for use in GraphQL
        acfOptionPageIds: [],
        auth: {
          // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.

          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
          // If two-factor authentication is enabled then you need to create an Application-Specific Password,
          // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: "54793",
          wpcom_user: "gatsbyjswpexample@gmail.com",
          wpcom_pass: process.env.WORDPRESS_PASSWORD,

          // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
          // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in wordpress wp-api.
          // plugin, you can specify user and password to obtain access token and use authenticated requests against wordpress REST API.
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
          jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        },
        // Set cookies that should be send with requests to wordpress as key value pairs
        cookies: {},
        verboseOutput: false,
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        searchAndReplaceContentUrls: {
          sourceUrl: "https://debugin.com",
          replacementUrl: "https://localhost:8000",
        },
        concurrentRequests: 10,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        // Blacklisted routes using glob patterns
        excludedRoutes: [],
        // Set this to keep media sizes.
        // This option is particularly useful in case you need access to
        // URLs for thumbnails, or any other media detail.
        // Defaults to false
        keepMediaSizes: false,
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
