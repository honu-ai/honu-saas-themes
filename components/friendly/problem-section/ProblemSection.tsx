import React from 'react';
import { icons } from 'lucide-react';

export type ProblemSectionProps = {
  title?: string;
  subtitle?: string;
  result?: string;
  resultSubtitle?: string;
  cards?: Array<{
    icon: keyof typeof icons;
    title: string;
    description: string;
  }>;
};

const ProblemSection: React.FC<ProblemSectionProps> = ({
  title = 'The Content Creation Challenge',
  subtitle = 'Struggling to consistently produce high-quality, SEO-optimised blog content that actually performs?',
  result = 'The Result: Missed Opportunities & Stagnant Growth',
  resultSubtitle = 'Without a reliable content engine, businesses lose out on organic traffic, customer engagement, and establishing online authority.',
  cards = [],
}) => {
  return (
    <section id='problem' className='bg-muted/40 px-4 py-10 sm:py-16 md:px-6'>
      <div className='container mx-auto max-w-6xl'>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className='text-muted-foreground mt-2'>{subtitle}</p>
        <div className='mt-8 grid gap-5 md:grid-cols-3'>
          {cards.map((card, index) => {
            const Icon = icons[card.icon];
            return (
              <div
                key={index}
                className='bg-card rounded-3xl border p-6 shadow'
              >
                <div className='bg-primary/15 text-primary mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full'>
                  <Icon className='h-5 w-5' />
                </div>
                <h3 className='font-semibold'>{card.title}</h3>
                <p className='text-muted-foreground mt-1 text-sm'>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
        <p className='text-muted-foreground mt-6 text-center text-sm'>
          {resultSubtitle}
        </p>
        <p className='text-center font-semibold'>{result}</p>
      </div>
    </section>
  );
};

export default ProblemSection;
