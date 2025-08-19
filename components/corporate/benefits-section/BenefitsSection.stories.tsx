import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BenefitsSection from './BenefitsSection';

export default {
  title: 'Corporate/BenefitsSection',
  component: BenefitsSection,
} as Meta;

const Template: StoryFn<typeof BenefitsSection> = (args) => (
  <BenefitsSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  badge: 'Unlock Your Content Potential',
  title: "Go Beyond Basic AI: Content That's Smart, Timely, and Optimized",
  description:
    "CurrentSage AI isn't just another AI writer. We're built to give you a competitive edge with content that leverages dynamic market insights and predictive SEO.",
  cards: [
    {
      icon: 'Clock',
      title: 'Real-Time Relevance Engine',
      description:
        'Automatically integrate current trends, consumer behavior, and local/global events into your content.',
      benefits: [
        'Capitalize on emerging opportunities',
        'Create timely, engaging articles',
        'Stay ahead of the curve',
      ],
    },
    {
      icon: 'TrendingUp',
      title: 'Predictive AI SEO Optimization',
      description:
        'Leverage AI that analyzes SERP data and search intent to guide content structure and keywords for higher ranking potential.',
      benefits: [
        'Improve organic search performance',
        'Target high-value keywords effectively',
        'Reduce manual SEO effort',
      ],
    },
    {
      icon: 'LayoutDashboard',
      title: 'Seamless Workflow & CMS Sync',
      description:
        'Push content directly to your CMS (like WordPress) with two-way sync, drastically reducing publishing friction.',
      benefits: [
        'Streamline content production',
        'Save hours on publishing',
        'Integrate with your existing tools',
      ],
    },
  ],
  bottomSection: {
    title: 'Ready to transform your content strategy?',
    description:
      'Experience the power of real-time, optimized content generation. Get started today.',
  },
};
