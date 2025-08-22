import type { Meta, StoryObj } from '@storybook/react';
import BenefitsSection from './BenefitsSection';

const meta: Meta<typeof BenefitsSection> = {
  title: 'Playful/BenefitsSection',
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
    badge: '🎯 BENEFITS',
    title: 'Why creators love our platform',
    description:
      'Discover how our AI-powered solution transforms your content creation workflow',
    cards: [
      {
        title: 'Save Time',
        description: 'Reduce content creation time by 90%',
        icon: 'Timer',
        benefits: [
          'Instant article analysis',
          'Automated post generation',
          'Bulk processing',
          'Quick edits and tweaks',
        ],
      },
      {
        title: 'Increase Engagement',
        description: 'AI-optimized content performs better',
        icon: 'TrendingUp',
        benefits: [
          'Platform-specific optimization',
          'Engagement-focused writing',
          'Hashtag suggestions',
          'Timing recommendations',
        ],
      },
      {
        title: 'Stay Consistent',
        description: 'Never run out of content ideas',
        icon: 'Target',
        benefits: [
          'Daily content suggestions',
          'Brand voice consistency',
          'Content calendar integration',
          'Performance tracking',
        ],
      },
    ],
    bottomSection: {
      title: 'Ready to transform your content strategy?',
      description:
        'Join thousands of creators who have already streamlined their workflow',
    },
  },
};
