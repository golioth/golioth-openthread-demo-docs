// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Golioth Thread Demo',
  tagline: 'Get a Golioth-managed Thread network up and running, including border router',
  url: 'https://golioth.github.io',
  baseUrl: '/thread-full-demo/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'golioth', // Usually your GitHub org/user name.
  projectName: 'thread-full-demo', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl: 'https://github.com/golioth/thread-full-demo',
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
      navbar: {
        title: 'Thread Demo',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Start Here',
          },
          {
            href: 'https://github.com/golioth/thread-full-demo',
            label: 'Document Repo',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Golioth Company',
            items: [
              {
                label: 'Main Site',
                href: 'https://golioth.io',
              },
              {
                label: 'Docs Site',
                href: 'https://docs.golioth.io',
              },
              {
                label: 'Console',
                href: 'https://console.golioth.io',
              }
            ],
          },
          {
            title: 'Golioth Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.golioth.io',
              },
              {
                label: 'Discord',
                href: 'https://golioth.io/discord',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/golioth_iot',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Golioth Blog',
                href: 'https://blog.golioth.io',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/golioth',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Golioth, Inc.<br />Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
