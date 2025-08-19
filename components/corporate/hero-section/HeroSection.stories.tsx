import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeroSection from './HeroSection';

export default {
  title: 'Corporate/HeroSection',
  component: HeroSection,
} as Meta;

const Template: StoryFn<typeof HeroSection> = (args) => (
  <HeroSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ctaText: 'Generate Your First Post Free',
  heroText:
    'AI Blog Content That Ranks & Resonates, Powered by Real-Time Data.',
  heroDescriptionHeading: 'Your Expert AI Content Partner',
  heroDescription:
    'CurrentSage AI empowers digital marketing agencies and e-commerce businesses to create high-quality, SEO-optimised blog posts by integrating real-time trends, consumer behavior, and local events.',
  product: false,
  steps: [
    {
      number: 1,
      title: 'Define Your Focus',
      description:
        'Simply tell CurrentSage AI your topic, target keywords, and audience.',
    },
    {
      number: 2,
      title: 'Generate & Enhance',
      description:
        'Our AI drafts your post, integrating real-time insights and applying predictive SEO guidance.',
    },
    {
      number: 3,
      title: 'Review & Customize',
      description:
        'Easily review the draft, incorporate suggested real-time events, and refine to match your brand voice.',
    },
    {
      number: 4,
      title: 'Sync & Publish',
      description:
        'Push your finished, optimized post directly to your CMS (like WordPress) with one click.',
    },
  ],
};
