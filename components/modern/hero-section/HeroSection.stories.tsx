import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from './HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'Modern/HeroSection',
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
    heroText:
      'AI Blog Content That Ranks & Resonates, Powered by Real-Time Data.',
    heroDescription:
      'CurrentSage AI empowers digital marketing agencies and e-commerce businesses to create high-quality, SEO-optimised blog posts by integrating real-time trends, consumer behavior, and local events.',
    ctaText: 'Generate Your First Post Free',
    href: '#',
    secondaryCtaText: 'Learn More',
    secondaryHref: '#solution',
  },
};
