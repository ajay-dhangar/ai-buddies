import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "AIBuddies",
  tagline: "AIBuddies is a community of AI enthusiasts",
  favicon: "img/logo.jpg",

  // Set the production url of your site here
  url: "https://ai-buddies.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ai-buddies",
  projectName: "AIBuddies", //

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl:
            "https://github.com/ai-buddies/ai-buddies.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl:
            "https://github.com/ai-buddies/ai-buddies.github.io/tree/main/",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    tailwindPlugin,
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   /** @type {import('@docusaurus/plugin-content-docs').Options} */
    //   {
    //     id: "community",
    //     path: "community",
    //     routeBasePath: "community",
    //     // editUrl: "#",
    //     sidebarPath: require.resolve("./sidebars.js"),
    //     // remarkPlugins: [remarkMath.default],
    //     // rehypePlugins: [rehypeKatex.default],
    //     showLastUpdateAuthor: true,
    //     showLastUpdateTime: true,
    //   },
    // ],
  ],

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "AIBuddies",
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/logo.jpg",
      // },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          to: "/about",
          label: "About",
          position: "left",
        },
        {
          label: "Learning Paths",
          to: "/learning-paths",
          position: "left",
        },
        {
          label: "Projects",
          to: "/projects",
          position: "left",
        },
        // {
        //   label: "Resources",
        //   to: "/resources",
        //   position: "left",
        // },
        {
          label: "Community",
          to: "/community",
          position: "left",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          type: "search",
          position: "right",
        },
        // {
        //   href: "https://github.com/ai-buddies/ai-buddies.github.io",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },

    // Algoia search is disabled by default. To enable it, you need to provide your own Algolia API key and index name. You can get these from Algolia's website.

    algolia: {
      apiKey: "df0689777503472173176fc8ff5d0ed4",
      indexName: "ai-buddiesio",
      appId: "LXSR7Q6DQ8",
      contextualSearch: false,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ai-buddies/ai-buddies.github.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "java",
        "latex",
        "haskell",
        "matlab",
        "PHp",
        "powershell",
        "bash",
        "diff",
        "json",
        "scss",
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
