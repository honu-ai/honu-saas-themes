import React from 'react';
import { Meta, StoryObj } from '@storybook/nextjs';
import CtaSection, { CtaSectionProps } from './CtaSection';
import content from '../../content.json';

const meta: Meta<typeof CtaSection> = {
  title: 'Landing Page/Sections/CtaSection',
  component: CtaSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CtaSection>;

export const Default: Story = {
  args: {
    title: content.cta.title,
    description: content.cta.description,
    primaryButtonText: content.cta.primaryButtonText,
    secondaryButtonText: content.cta.secondaryButtonText,
    product: content.metadata.product,
  },
};

export const CustomContent: Story = {
  args: {
    title: 'Ready to Transform Your Business Today',
    description:
      'Join thousands of businesses already growing with our platform. Start your journey now.',
    primaryButtonText: 'Get Started Now',
    secondaryButtonText: 'Talk to Sales',
  },
};
