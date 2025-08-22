import type { Meta, StoryObj } from '@storybook/react';
import SolutionSection from './SolutionSection';

const meta: Meta<typeof SolutionSection> = {
  title: 'Technical/SolutionSection',
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
    badge: 'SOLUTION',
    title: 'How it works',
    subtitle:
      'Our AI-powered platform automates the entire process from article to social posts',
    cta: 'Start Creating',
    product: true,
    steps: [
      {
        number: 1,
        title: 'Paste Article URL',
        description:
          'Simply paste any article URL or content you want to transform',
      },
      {
        number: 2,
        title: 'AI Analysis',
        description:
          'Our AI extracts key insights, main points, and engaging angles',
      },
      {
        number: 3,
        title: 'Generate Posts',
        description:
          'Creates platform-optimized posts for LinkedIn, Twitter, Facebook, etc.',
      },
      {
        number: 4,
        title: 'Copy & Publish',
        description:
          'Review, customize, and publish your content across all platforms',
      },
    ],
  },
};

export const Development: Story = {
  args: {
    badge: 'WORKFLOW',
    title: 'Streamlined Development',
    subtitle:
      'Our technical framework reduces complexity and accelerates development',
    cta: 'Get Started',
    product: false,
    steps: [
      {
        number: 1,
        title: 'Initialize Project',
        description:
          'Scaffold your project with best practices and modern tooling',
      },
      {
        number: 2,
        title: 'Write Code',
        description:
          'Focus on business logic while we handle the infrastructure',
      },
      {
        number: 3,
        title: 'Test & Deploy',
        description:
          'Automated testing and deployment pipelines ensure quality',
      },
      {
        number: 4,
        title: 'Monitor & Scale',
        description:
          'Built-in monitoring and auto-scaling keep your app running smoothly',
      },
    ],
  },
};
