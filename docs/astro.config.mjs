// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  base: process.env.ASTRO_BASE || '/docs',
  site: 'https://poaster.app',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Poaster API Docs',
      description:
        'API documentation for Poaster — AI-powered social media automation for writers',
      logo: {
        src: './src/assets/poaster.svg',
        replacesTitle: true,
      },
      head: [],
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/poaster',
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Overview', slug: 'getting-started/overview' },
            { label: 'Quick Start', slug: 'getting-started/quickstart' },
            { label: 'Authentication', slug: 'getting-started/authentication' },
          ],
        },
        {
          label: 'API Reference',
          items: [
            { label: 'Websites', slug: 'api/websites' },
            { label: 'Webpages', slug: 'api/webpages' },
            { label: 'Posts', slug: 'api/posts' },
            { label: 'Share Accounts', slug: 'api/share-accounts' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Bulk Operations', slug: 'guides/bulk-operations' },
            { label: 'API Versioning', slug: 'guides/api-versioning' },
            { label: 'Rate Limits', slug: 'guides/rate-limits' },
            { label: 'Errors', slug: 'guides/errors' },
          ],
        },
        {
          label: 'For AI Agents',
          items: [
            { label: 'LLMs.txt', slug: 'ai-agents/llms-txt' },
            { label: 'Structured Data Guide', slug: 'ai-agents/structured-data-guide' },
          ],
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/decaxyz/poaster-website/edit/master/docs/',
      },
    }),
  ],
});
