import type { Meta, StoryObj } from '@storybook/react';
import SolutionSection from './SolutionSection';

const meta: Meta<typeof SolutionSection> = {
  title: 'Minimal/SolutionSection',
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
    title: 'Your AI Partner for High-Impact Content',
    subtitle:
      'CurrentSage AI simplifies and supercharges your blog content creation process, turning challenges into opportunities.',
    cta: 'Generate Your First Post Free',
    href: '#',
    steps: [
      {
        number: 1,
        title: 'Define Your Focus',
        description:
          'Simply tell CurrentSage AI your topic, target keywords, and audience.',
      },
      {
        number: 2,
        title: 'Generate & Enhance',
        description:
          'Our AI drafts your post, integrating real-time insights and applying predictive SEO guidance.',
      },
      {
        number: 3,
        title: 'Review & Customize',
        description:
          'Easily review the draft, incorporate suggested real-time events, and refine to match your brand voice.',
      },
      {
        number: 4,
        title: 'Sync & Publish',
        description:
          'Push your finished, optimized post directly to your CMS (like WordPress) with one click.',
      },
    ],
  },
};
