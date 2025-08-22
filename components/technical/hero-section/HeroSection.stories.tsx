import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from './HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'Technical/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ctaText: 'Get Started',
    heroText: 'Transform articles into social media posts with AI',
    heroDescriptionHeading: 'AI-POWERED CONTENT',
    heroDescription:
      'Automatically extract key insights from any article and generate platform-optimized social media posts in seconds.',
    secondaryCtaText: 'Docs',
    secondaryHref: '#docs',
    product: true,
  },
};

export const WithCustomCTA: Story = {
  args: {
    ctaText: 'Try Free',
    heroText: 'Build faster with technical precision',
    heroDescriptionHeading: 'DEVELOPER TOOLS',
    heroDescription:
      'Advanced tooling designed for developers who value efficiency and code quality.',
    secondaryCtaText: 'View Examples',
    secondaryHref: '#examples',
    product: false,
  },
};
