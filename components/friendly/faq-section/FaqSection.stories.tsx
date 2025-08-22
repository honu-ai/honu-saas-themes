import type { Meta, StoryObj } from '@storybook/react';
import FaqSection from './FaqSection';

const meta: Meta<typeof FaqSection> = {
  title: 'Friendly/FaqSection',
  component: FaqSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badge: 'FAQ',
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions about our platform.',
    items: [
      {
        question: 'How does the AI content generation work?',
        answer:
          'Our AI analyzes your input content using advanced natural language processing to understand context, tone, and key messages. It then generates optimized social media posts that maintain your brand voice while being tailored for each platform.',
      },
      {
        question: 'Can I customize the generated content?',
        answer:
          'Absolutely! All generated content can be edited and customized to match your preferences. You can adjust tone, add hashtags, modify text, and make any changes before publishing.',
      },
      {
        question: 'Which social media platforms are supported?',
        answer:
          "We support all major social media platforms including Twitter, LinkedIn, Facebook, Instagram, and more. Each post is optimized for the specific platform's character limits and best practices.",
      },
      {
        question: 'Is there a limit to how much content I can generate?',
        answer:
          'Plans vary based on your subscription tier. Our basic plan includes 50 posts per month, while premium plans offer unlimited content generation with additional features.',
      },
      {
        question: 'How do I get started?',
        answer:
          'Getting started is easy! Simply sign up for an account, choose your plan, and start by pasting your first article. Our intuitive interface will guide you through the process.',
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
