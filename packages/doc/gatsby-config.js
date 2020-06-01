const { version, repository, homepage } = require('./package.json');

module.exports = {
  plugins: [
    {
      resolve: '@antv/gatsby-theme-antv',
      options: {
        theme: {
          'primary-color': '#ff5454',
        },
        pwa: true,
      }
    },
    'gatsby-plugin-styled-components',
  ],
  siteMetadata: {
    logoUrl: 'https://www.pinclipart.com/picdir/middle/49-494635_lego-svg-png-icon-free-download-onlinewebfonts-icon.png',
    title: 'Lego.ds',
    description: 'Lego.ds documentation',
    siteUrl: homepage,
    githubUrl: 'https://github.com/victormath12/lego-ds',
    navs: [
      {
        slug: 'docs/pages/getting-started',
        title: {
          en: 'Getting Started'
        }
      },
      {
        slug: 'docs/tokens',
        title: {
          en: 'Design Tokens'
        }
      },
      {
        slug: 'examples',
        title: {
          en: 'Components'
        }
      },
    ],
    docs: [
      {
        slug: 'specification/category',
        title: {
          en: 'category1'
        },
        order: 4
      },
      {
        slug: 'specification/category/three',
        title: {
          en: 'three level'
        },
        order: 2
      }
    ],
    examples: [
      {
        slug: 'category',
        icon: 'pie',
        title: {
          en: 'Components'
        }
      }
    ],
    showSearch: false,
    showChinaMirror: false,
    showAntVProductsCard: false,
    showLanguageSwitcher: false, 
    showGithubCorner: true,
    playground: {
      container: '<div id="container" />',
      playgroundDidMount: 'console.log("playgroundDidMount");',
      playgroundWillUnmount: 'console.log("playgroundWillUnmount");'
    },
    versions: {
      [version]: homepage,
    },
    redirects: [
      {
        from: "/zh",
        to: "/en"
      }
    ]
  }
};
