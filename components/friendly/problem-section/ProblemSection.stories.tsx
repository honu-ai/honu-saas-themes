import type { Meta, StoryObj } from '@storybook/react';
import ProblemSection from './ProblemSection';

const meta: Meta<typeof ProblemSection> = {
  title: 'Friendly/ProblemSection',
  component: ProblemSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'The Content Creation Challenge',
    subtitle:
      'Struggling to consistently produce high-quality, SEO-optimised blog content that actually performs?',
    result: 'The Result: Missed Opportunities & Stagnant Growth',
    resultSubtitle:
      'Without a reliable content engine, businesses lose out on organic traffic, customer engagement, and establishing online authority.',
    cards: [
      {
        icon: 'Hourglass',
        title: 'Time-Consuming Process',
        description:
          'Hours spent brainstorming, writing, and editing content that may not resonate with your audience.',
      },
      {
        icon: 'Hand',
        title: 'Inconsistent Quality',
        description:
          'Struggling to maintain a consistent voice and quality across all your content pieces.',
      },
      {
        icon: 'Shuffle',
        title: 'Poor Engagement',
        description:
          'Content that fails to engage your audience and drive meaningful interactions.',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className='theme-friendly bg-background text-foreground min-h-screen'>
        <Story />
      </div>
    ),
  ],
};
