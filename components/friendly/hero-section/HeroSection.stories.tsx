import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from './HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'Friendly/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heroDescriptionHeading: 'Transform Your Content',
    heroText: 'Turn Articles into Engaging Social Media Posts',
    heroDescription:
      'Effortlessly convert your blog articles into perfectly optimized social media content that drives engagement and grows your audience.',
    ctaText: 'Start Creating',
    secondaryCtaText: 'Learn More',
    secondaryHref: '#solution',
  },
  decorators: [
    (Story) => (
      <div className='theme-friendly bg-background text-foreground min-h-screen'>
        <Story />
      </div>
    ),
  ],
};

export const WithCallbacks: Story = {
  args: {
    ...Default.args,
    onCtaClick: () => console.log('CTA clicked'),
    onSecondaryCtaClick: () => console.log('Secondary CTA clicked'),
  },
  decorators: Default.decorators,
};
