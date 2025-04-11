import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Create Chronicles Series',
  tagline: 'Automation • Exploration • Magic • Quests • Bosses.',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

  // Set the production url of your site here
  url:'https://rodrigo816.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/chronicles-wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Rodrigo816', // Usually your GitHub org/user name.
  projectName: 'chronicles-wiki', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag:{
          trackingID: 'G-T0Z0WPHKVG',
          anonymizeIP: true,
        }
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/create_chronicles_series_social_card.jpg',
    colorMode:{
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Create Chronicles',
      logo: {
        alt: 'Create Chronicles Series',
        src: 'img/dragon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {
          href: 'https://www.bisecthosting.com/CHRONICLES',
          position: 'right',
          html: '<img src="https://i.imgur.com/psc32z8.png" alt="Need a server?" style="height: 28px; vertical-align: middle;" />',
        },
        {
          href: 'https://discord.gg/yRAmua5keG',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wiki',
          items: [
            {
              label: 'Server Setup Guide',
              to: '/docs/server-setup',
            },
            {
              label: 'Bosses and Beyond',
              to: '/docs/category/bosses-and-beyond/',
            },
          ],
        },
        {
          title: 'CurseForge',
          items: [
            {
              label: 'Create Chronicles Bosses and Beyond',
              href: 'https://www.curseforge.com/minecraft/modpacks/create-chronicles-bosses-and-beyond',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Rodrigo816/chronicles-wiki/',
            },
            {
              label: 'Patreon',
              href: 'https://www.patreon.com/CreateChronicles',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Create Chronicles Team. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
