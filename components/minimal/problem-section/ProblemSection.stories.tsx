import type { Meta, StoryObj } from '@storybook/react';
import ProblemSection from './ProblemSection';

const meta: Meta<typeof ProblemSection> = {
  title: 'Minimal/ProblemSection',
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
    resultSubtitle:
      'Without a reliable content engine, businesses lose out on organic traffic, customer engagement, and establishing online authority.',
    cards: [
      {
        title: 'Time & Resource Drain',
        description:
          'Content creation is time-consuming, requiring significant effort for research, writing, and optimization.',
        icon: 'Timer',
      },
      {
        title: 'Lack of Specialized Expertise',
        description:
          'Effective content demands SEO knowledge, dynamic strategy, and data analysis skills often missing in-house.',
        icon: 'LightbulbOff',
      },
      {
        title: 'Difficulty Leveraging Real-Time Data',
        description:
          'Translating trends, consumer behavior, and events into timely, relevant articles is complex and slow.',
        icon: 'Database',
      },
    ],
  },
};
