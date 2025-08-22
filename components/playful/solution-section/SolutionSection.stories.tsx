import type { Meta, StoryObj } from '@storybook/react';
import SolutionSection from './SolutionSection';

const meta: Meta<typeof SolutionSection> = {
  title: 'Playful/SolutionSection',
  component: SolutionSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badge: '✨ OUR SOLUTION',
    title: 'AI-powered article transformation',
    subtitle:
      'Transform any article into engaging social media posts with just one click',
    cta: 'Start Creating Magic',
    product: true,
    steps: [
      {
        number: 1,
        title: 'Upload Article',
        description: 'Simply paste your article URL or upload text',
      },
      {
        number: 2,
        title: 'AI Analysis',
        description: 'Our AI extracts key insights and themes',
      },
      {
        number: 3,
        title: 'Generate Posts',
        description: 'Get optimized posts for all platforms',
      },
      {
        number: 4,
        title: 'Publish & Share',
        description: 'One-click publishing to your social accounts',
      },
    ],
  },
};
