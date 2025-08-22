import type { Meta, StoryObj } from '@storybook/react';
import ProblemSection from './ProblemSection';

const meta: Meta<typeof ProblemSection> = {
  title: 'Playful/ProblemSection',
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
    title: 'Creating social media content is tedious',
    subtitle:
      'Content creators spend hours manually converting articles into engaging posts',
    result: 'Hours wasted daily on repetitive content creation tasks',
    resultSubtitle: 'Leading to burnout and reduced content quality',
    cards: [
      {
        title: 'Time-consuming manual work',
        description: 'Converting articles into social posts takes forever',
        icon: 'Clock',
      },
      {
        title: 'Inconsistent formatting',
        description: 'Each platform requires different post structures',
        icon: 'LayoutGrid',
      },
      {
        title: 'Loss of key insights',
        description: 'Important points get lost in manual summarization',
        icon: 'Lightbulb',
      },
    ],
  },
};
