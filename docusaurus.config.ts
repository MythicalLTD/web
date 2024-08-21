import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from "./plugins/tailwind-config.js";
import remarkgfm from "remark-gfm";


const config: Config = {
  markdown: {
    mermaid: true,
  },
  title: 'MythicalSystems LTD',
  tagline: 'We code the future.',
  favicon: 'https://avatars.githubusercontent.com/u/117385445',
  url: 'https://mythicalsystems.xyz',
  baseUrl: '/',
  organizationName: 'mythicalltd',
  projectName: 'web', 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: ["@docusaurus/theme-mermaid"],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkgfm],
        },
        blog: {
          showReadingTime: true,
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss'),
            require.resolve('./src/css/tailwind.css'),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
      metadata: [
      { name: 'keywords', content: 'mythicalsystems, mythicaldash, mythicalclient, mythicalbilling, mythicalsystems ltd, mythicalsystems info , mythicalsystems projects, mythicalsystems github, pterodactyl, stopabuse, nayskutuz, cassian gherman, nayskutzuftw, mythicaldoggo, mythicalsystems website, mythicalsystems info, mythicalsystems.xyz, oldmythicalsystems, mythicaldoggo, nayskutzu, nayskutzuftw, polartoflex, multyplay,noxlcraft,mythic-romania,mythic-craft, mysticcraft,mythicaldash, mythicalclient, mythicalframework, mythicalframework api, api, mythicalframework docs, mythicalframework github, mythicalframework info, mythicalframework projects, mythicalframework website, documenation mythical, mythicaldocs, mythical website, hurawatch, testing, mythic, holaclient, hellactyl, pterodactyl, hosting, cms' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@mythicalsystems' },
      { name: 'og:image', content: 'https://avatars.githubusercontent.com/u/117385445' },
      { name: 'og:image:width', content: '200' },
      { name: 'twitter:image', content: 'https://avatars.githubusercontent.com/u/117385445' },
      { name: 'theme-color', content: '#953aa1' },
    ],
    image: 'https://avatars.githubusercontent.com/u/117385445',
    navbar: {
      title: 'MythicalSystems',
      logo: {
        alt: 'MythicalSystems',
        src: 'https://avatars.githubusercontent.com/u/117385445',
      },
      items: [
        { to: '/docs', label: 'Docs', position: 'left' },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/donate", label: "Donate", position: "left" },
        { to: "https://status.mythicalsystems.xyz", label: "Status", position: "left" },
        { to: "https://discord.mythicalsystems.xyz", label: "Discord", position: "left" },
        { href: "https://github.com/mythicalltd", position: "right", className: "github-link", },
      ],
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    footer: {
      logo: {
        src: "https://avatars.githubusercontent.com/u/117385445",
        height: "64px",
        width: "64px",
      },
      style: 'dark',
      links: [
        {
          title: 'INFORMATION',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/mythicalltd',
            },
            {
              label: 'Discord',
              href: 'https://discord.mythicalsystems.xyz',
            }
          ],
        },
        {
          title: 'SPONSORS',
          items: [
            {
              label: 'AdSlice',
              href: 'https://addslice.com/?crew=FgQTfkSz',
            },
            {
              label: 'DeinServerHost',
              href: 'https://deinserverhost.de/store/aff.php?aff=5361',
            }
          ],
        },
        {
          title: 'SUPPORT US',
          items: [
            {
              label: 'Github Sponsor',
              href: 'https://github.com/sponsors/nayskutzu',
            },
            {
              label: 'PayPal',
              href: 'https://paypal.me/nayskutzu',
            },
          ],
        },
        {
          title: 'LEGAL',
          items: [
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
            {
              label: 'Terms of Service',
              to: '/terms',
            },
          ],

        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MythicalSystems LTD`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    "docusaurus-plugin-sass",
    tailwindPlugin,
  ],
};

export default config;
