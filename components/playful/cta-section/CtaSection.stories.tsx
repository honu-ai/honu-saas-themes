import type { Meta, StoryObj } from '@storybook/react';
import CtaSection from './CtaSection';

const meta: Meta<typeof CtaSection> = {
  title: 'Playful/CtaSection',
  component: CtaSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Ready to transform your content creation?',
    description:
      'Join thousands of creators who have already streamlined their workflow with our AI-powered platform. Start creating magic today!',
    primaryButtonText: 'Start Creating Magic ✨',
    secondaryButtonText: 'Learn More',
    secondaryHref: '#features',
    product: true,
  },
};

export const WithoutSecondaryButton: Story = {
  args: {
    title: 'Transform your articles into viral social content',
    description:
      'Experience the power of AI-driven content creation and watch your engagement soar.',
    primaryButtonText: 'Get Started Free 🚀',
    product: true,
  },
};
