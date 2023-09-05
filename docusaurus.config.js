// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentación Gestión de Incentivos',
  tagline: 'Nos transformamos porque tu felicidad es nuestra prioridad!',
  favicon: 'img/favicon_io/favicon.ico',

  // Set the production url of your site here
  url: 'https://cea-comfamiliar.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/im-user_guide',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cea-comfamiliar', // Usually your GitHub org/user name.
  projectName: 'im-user_guide', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      'en': {
        label: 'English'
      },
      'es': {
        label: 'Español'
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',      
      navbar: {
        title: 'Gestion de Incentivos',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
          href: 'https://im.comfamiliar.com',
          target: "_self",
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentacion',
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },

          // {to: '/blog', label: 'Blog', position: 'left'},

          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Documentacion',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Comunidad',
        //     items: [
        //       // {
        //       //   label: 'Stack Overflow',
        //       //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       // },
        //       // {
        //       //   label: 'Discord',
        //       //   href: 'https://discordapp.com/invite/docusaurus',
        //       // },
        //       // {
        //       //   label: 'Twitter',
        //       //   href: 'https://twitter.com/docusaurus',
        //       // },
        //     ],
        //   },
        //   {
        //     title: 'Más',
        //     items: [
        //       // {
        //       //   label: 'Blog',
        //       //   to: '/blog',
        //       // },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Gestion de Incentivos.<br> Powered by Centro de Excelencia Analítica - CEA.<br>Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['dart'],
      },
    }),
};

module.exports = config;
