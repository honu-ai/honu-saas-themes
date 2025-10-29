import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  docs: {
    defaultName: 'Documentation',
  },
  stories: [
    '../components/benefits-section/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/contact-form/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/cta-section/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/faq-section/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/feature-card/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/footer/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/hero-section/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/logo/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/nav-bar/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/pricing-card/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/pricing-feature/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/pricing-header/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/pricing-submit-button/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/problem-section/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/solution-section/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/user-avatar-menu/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    // Add other specific folders you want to include
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
};
export default config;
