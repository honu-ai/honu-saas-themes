import type { Meta, StoryObj } from '@storybook/react';
import CtaSection from './CtaSection';

const meta: Meta<typeof CtaSection> = {
  title: 'Friendly/CtaSection',
  component: CtaSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Ready to Transform Your Content?',
    description:
      'Join thousands of content creators who are already using our platform to streamline their workflow and boost engagement.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn More',
  },
  decorators: [
    (Story) => (
      <div className='theme-friendly bg-background text-foreground min-h-screen'>
        <Story />
      </div>
    ),
  ],
};

export const WithLinks: Story = {
  args: {
    ...Default.args,
    primaryHref: '/sign-up',
    secondaryHref: '/about',
  },
  decorators: Default.decorators,
};

export const WithCallbacks: Story = {
  args: {
    ...Default.args,
    onPrimaryClick: () => console.log('Primary CTA clicked'),
    onSecondaryClick: () => console.log('Secondary CTA clicked'),
  },
  decorators: Default.decorators,
};
