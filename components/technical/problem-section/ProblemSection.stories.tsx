import type { Meta, StoryObj } from '@storybook/react';
import ProblemSection from './ProblemSection';

const meta: Meta<typeof ProblemSection> = {
  title: 'Technical/ProblemSection',
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
    title: 'The Current Problem',
    subtitle:
      'Creating social media content from articles is time-consuming and inconsistent',
    result: 'Low engagement, wasted time, missed opportunities',
    resultSubtitle: 'Most content creators struggle with this',
    cards: [
      {
        title: 'Time Consuming',
        description:
          'Hours spent manually reading, summarizing, and crafting posts for each platform',
        icon: 'Hourglass',
      },
      {
        title: 'Manual Process',
        description:
          'Copy-paste workflows that are prone to errors and inconsistencies',
        icon: 'Hand',
      },
      {
        title: 'Platform Differences',
        description:
          'Each social platform has different requirements and best practices',
        icon: 'Shuffle',
      },
    ],
  },
};

export const CustomIcons: Story = {
  args: {
    title: 'Development Challenges',
    subtitle: 'Building modern applications comes with complexity',
    result: 'Slower delivery, technical debt, maintenance burden',
    resultSubtitle: 'Every development team faces these issues',
    cards: [
      {
        title: 'Configuration Overhead',
        description:
          'Setting up tooling and environments takes valuable development time',
        icon: 'Settings',
      },
      {
        title: 'Code Quality',
        description:
          'Maintaining consistent standards across teams and projects',
        icon: 'Code',
      },
      {
        title: 'Scalability Issues',
        description:
          'Architecture decisions that seemed right initially become bottlenecks',
        icon: 'TrendingUp',
      },
    ],
  },
};
