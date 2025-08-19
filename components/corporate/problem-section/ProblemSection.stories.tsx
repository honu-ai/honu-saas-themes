import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProblemSection from './ProblemSection';

export default {
  title: 'Corporate/ProblemSection',
  component: ProblemSection,
} as Meta;

const Template: StoryFn<typeof ProblemSection> = (args) => (
  <ProblemSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'The Content Creation Challenge',
  subtitle:
    'Struggling to consistently produce high-quality, SEO-optimised blog content that actually performs?',
  result: 'The Result: Missed Opportunities & Stagnant Growth',
  resultSubtitle:
    'Without a reliable content engine, businesses lose out on organic traffic, customer engagement, and establishing online authority.',
  cards: [
    {
      title: 'Time & Resource Drain',
      description:
        'Content creation is time-consuming, requiring significant effort for research, writing, and optimization.',
      icon: 'Timer',
    },
    {
      title: 'Lack of Specialized Expertise',
      description:
        'Effective content demands SEO knowledge, dynamic strategy, and data analysis skills often missing in-house.',
      icon: 'LightbulbOff',
    },
    {
      title: 'Difficulty Leveraging Real-Time Data',
      description:
        'Translating trends, consumer behavior, and events into timely, relevant articles is complex and slow.',
      icon: 'Database',
    },
  ],
};
