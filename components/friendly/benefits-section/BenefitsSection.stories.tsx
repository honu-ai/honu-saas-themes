import type { Meta, StoryObj } from '@storybook/react';
import BenefitsSection from './BenefitsSection';

const meta: Meta<typeof BenefitsSection> = {
  title: 'Friendly/BenefitsSection',
  component: BenefitsSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badge: 'Benefits',
    title: 'Why Choose Our Platform',
    description:
      'Discover the advantages of using our intelligent content creation platform.',
    cards: [
      {
        icon: 'Thermometer',
        title: 'Save Time',
        description:
          'Reduce content creation time by up to 80% with our AI-powered automation.',
        benefits: [
          'Automated content generation',
          'Bulk processing capabilities',
          'Template-based workflows',
        ],
      },
      {
        icon: 'Sparkles',
        title: 'Boost Engagement',
        description:
          'Create content that resonates with your audience and drives meaningful interactions.',
        benefits: [
          'Platform-optimized formats',
          'Engagement analytics',
          'A/B testing capabilities',
        ],
      },
      {
        icon: 'Feather',
        title: 'Maintain Quality',
        description:
          'Ensure consistent brand voice and high-quality content across all platforms.',
        benefits: [
          'Brand voice consistency',
          'Quality assurance checks',
          'Editorial guidelines',
        ],
      },
    ],
    bottomSection: {
      title: 'Enterprise Features',
      description:
        'Access advanced features designed for teams and large organizations.',
    },
  },
  decorators: [
    (Story) => (
      <div className='theme-friendly bg-background text-foreground min-h-screen'>
        <Story />
      </div>
    ),
  ],
};
