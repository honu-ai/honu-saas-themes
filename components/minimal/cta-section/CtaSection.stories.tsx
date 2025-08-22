import type { Meta, StoryObj } from '@storybook/react';
import CtaSection from './CtaSection';

const meta: Meta<typeof CtaSection> = {
  title: 'Minimal/CtaSection',
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
    title: 'Ready to Generate High-Ranking, Relevant Content?',
    description:
      'Stop struggling with content creation. Start leveraging real-time insights and predictive SEO to accelerate your organic growth.',
    primaryButtonText: 'Generate Your First Post Free',
    secondaryButtonText: 'Learn More',
    primaryHref: '#',
    secondaryHref: '#',
  },
};
