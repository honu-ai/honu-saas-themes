import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Playful/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    companyName: 'ContentMagic',
    description:
      'Transform your articles into engaging social media posts with the power of AI. Join thousands of creators who trust our platform.',
  },
};

export const CustomCompany: Story = {
  args: {
    companyName: 'CreativeAI',
    description:
      'Empowering creators with AI-driven tools that make content creation fun and effortless.',
  },
};
