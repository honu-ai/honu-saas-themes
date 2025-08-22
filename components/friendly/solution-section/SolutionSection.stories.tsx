import type { Meta, StoryObj } from '@storybook/react';
import SolutionSection from './SolutionSection';

const meta: Meta<typeof SolutionSection> = {
  title: 'Friendly/SolutionSection',
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
    badge: 'Our Solution',
    title: 'Transform Your Content Creation Process',
    subtitle:
      'Our intelligent platform streamlines your content creation workflow, helping you produce high-quality content that resonates with your audience.',
    cta: 'Get Started',
    steps: [
      {
        number: 1,
        title: 'Input Your Article',
        description:
          'Simply paste your blog article or URL into our intelligent platform.',
      },
      {
        number: 2,
        title: 'AI Analysis',
        description:
          'Our AI analyzes your content to identify key themes and engagement points.',
      },
      {
        number: 3,
        title: 'Generate Posts',
        description:
          'Receive perfectly formatted social media posts optimized for each platform.',
      },
      {
        number: 4,
        title: 'Publish & Engage',
        description:
          'Schedule or publish instantly and watch your engagement soar.',
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

export const WithCallback: Story = {
  args: {
    ...Default.args,
    onCtaClick: () => console.log('Solution CTA clicked'),
  },
  decorators: Default.decorators,
};
