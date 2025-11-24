import React from 'react';
import { Meta, StoryFn } from '@storybook/nextjs';
import CtaSection from './CtaSection';

export default {
  title: 'Corporate/CtaSection',
  component: CtaSection,
} as Meta;

const Template: StoryFn<typeof CtaSection> = (args) => <CtaSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Ready to Generate High-Ranking, Relevant Content?',
  description:
    'Stop struggling with content creation. Start leveraging real-time insights and predictive SEO to accelerate your organic growth.',
  primaryButtonText: 'Generate Your First Post Free',
  product: false,
};
