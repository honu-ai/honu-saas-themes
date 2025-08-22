import type { Meta, StoryObj } from '@storybook/react';
import FaqSection from './FaqSection';

const meta: Meta<typeof FaqSection> = {
  title: 'Playful/FaqSection',
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
    badge: '❓ FAQ',
    title: 'Frequently Asked Questions',
    subtitle:
      'Everything you need to know about our magical content creation platform',
    items: [
      {
        question: 'How does the AI article analysis work?',
        answer:
          'Our AI reads through your article, identifies key themes, extracts important quotes, and understands the main message to create engaging social media posts.',
      },
      {
        question: 'Can I customize the generated posts?',
        answer:
          'Absolutely! All generated posts are fully editable. You can adjust the tone, add emojis, modify hashtags, and make any changes to match your brand voice.',
      },
      {
        question: 'Which social media platforms are supported?',
        answer:
          'We support all major platforms including Twitter, LinkedIn, Facebook, Instagram, and TikTok. Each post is optimized for the specific platform requirements.',
      },
      {
        question: 'Is there a limit to how many articles I can process?',
        answer:
          'It depends on your plan. Our starter plan includes 50 articles per month, while our pro plans offer unlimited processing.',
      },
    ],
  },
};
