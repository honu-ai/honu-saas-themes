import type { Meta, StoryObj } from '@storybook/react';
import CtaSection from './CtaSection';

const meta: Meta<typeof CtaSection> = {
  title: 'Technical/CtaSection',
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
    title: 'Ready to get started?',
    description:
      'Join thousands of developers who trust our platform for their critical applications.',
    primaryButtonText: 'Start Building',
    secondaryButtonText: 'View Documentation',
    product: true,
  },
};

export const ProductLaunch: Story = {
  args: {
    title: 'Launch faster with confidence',
    description:
      'Everything you need to build, deploy, and scale modern applications with enterprise-grade reliability.',
    primaryButtonText: 'Get Started Free',
    secondaryButtonText: 'Schedule Demo',
    product: false,
  },
};

export const Enterprise: Story = {
  args: {
    title: 'Ready for enterprise deployment?',
    description:
      'Contact our team to learn about enterprise features, custom integrations, and dedicated support.',
    primaryButtonText: 'Contact Sales',
    secondaryButtonText: 'Enterprise Features',
    product: true,
  },
};
