import type { Meta, StoryObj } from '@storybook/react';
import FaqSection from './FaqSection';

const meta: Meta<typeof FaqSection> = {
  title: 'Minimal/FaqSection',
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
    title: "Got Questions? We've Got Answers.",
    subtitle:
      'Find out more about how CurrentSage AI can transform your content strategy.',
    faqs: [
      {
        question: 'What makes CurrentSage AI different from other AI writers?',
        answer:
          'CurrentSage AI uniquely integrates automated real-time local/global event data and offers predictive AI SEO, going beyond basic content generation to create timely, highly optimized articles. We also provide deep, two-way CMS integration.',
      },
      {
        question: 'Who is CurrentSage AI for?',
        answer:
          'Our primary users are digital marketing agencies (10-50 employees) and mid-size e-commerce businesses ($1M-$5M revenue) who need to scale high-quality, SEO-optimized blog content efficiently.',
      },
      {
        question: 'How does the pricing work?',
        answer:
          'We use a transparent, value-driven pay-as-you-go model. You pay $22.99 for each AI-generated blog post. There are no monthly subscriptions required for core generation.',
      },
      {
        question: 'Can I integrate CurrentSage AI with my website?',
        answer:
          'Yes, we offer deep, two-way integration with popular CMS platforms like WordPress, allowing you to push drafts directly and streamline your publishing workflow.',
      },
    ],
  },
};
