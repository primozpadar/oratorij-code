module.exports = {
  siteMetadata: {
    title: 'Oratorij Code',
    description: 'Spletna stran za enostavno učenje programiranja na oratorijskih delavnicah.',
    keywords: 'oratorij, programiranje, oratorijska delavnica',
    siteUrl: 'https://code.oratorijzelimlje.si',
    author: {
      name: 'Primož Padar',
      url: 'https://github.com/primozpadar',
      email: 'primoz.padar1@gmail.com',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1500,
              withWebp: true,
              quality: 100,
              linkImagesToOriginal: false,
              wrapperStyle: (fluid) => `max-width:${(fluid.aspectRatio * 40).toFixed(2)}vh !important;`,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://code.oratorijzelimlje.si/',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans\:400`, `Poppins\:400,700`, `Inconsolata\:400`],
        display: 'swap',
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oratorij Code`,
        short_name: `Oratorij Code`,
        start_url: `/`,
        background_color: `#051325`,
        theme_color: `#0fd990`,
        display: `standalone`,
        icons: [
          {
            src: 'static/maskable_icon_128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'static/favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'static/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ['/*'],
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com/,
              handler: 'CacheFirst',
            },
          ],
        },
      },
    },
  ],
};
