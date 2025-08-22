import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from './HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'Playful/HeroSection',
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
    ctaText: 'Start Creating Magic ✨',
    heroText: 'Transform articles into social media posts with AI',
    heroDescriptionHeading: '🎨 AI-POWERED CREATIVITY',
    heroDescription:
      'Automatically extract key insights from any article and generate platform-optimized social media posts in seconds. Make your content sparkle!',
    secondaryCtaText: 'Explore Features',
    secondaryHref: '#features',
    product: true,
    steps: [
      {
        number: 1,
        title: 'Upload Article',
        description: 'Simply paste your article URL or upload text',
      },
      {
        number: 2,
        title: 'AI Analysis',
        description: 'Our AI extracts key insights and themes',
      },
      {
        number: 3,
        title: 'Generate Posts',
        description: 'Get optimized posts for all platforms',
      },
      {
        number: 4,
        title: 'Publish & Share',
        description: 'One-click publishing to your social accounts',
      },
    ],
  },
};

export const WithCustomCTA: Story = {
  args: {
    ctaText: 'Join the Fun! 🚀',
    heroText: 'Build amazing things with playful design',
    heroDescriptionHeading: '🌟 CREATIVE TOOLS',
    heroDescription:
      'Design tools that make work feel like play. Create beautiful, engaging content that your audience will love.',
    secondaryCtaText: 'See Examples',
    secondaryHref: '#examples',
    product: false,
    steps: [
      {
        number: 1,
        title: 'Design',
        description: 'Create beautiful layouts with ease',
      },
      {
        number: 2,
        title: 'Animate',
        description: 'Add delightful interactions',
      },
      {
        number: 3,
        title: 'Launch',
        description: 'Share your creation with the world',
      },
    ],
  },
};
