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
  cards,
}) => {
  return (
    <section id='problem' className='bg-muted/30 px-4 py-12 sm:py-16 md:py-20'>
      <div className='container mx-auto'>
        <h2 className='text-xl font-semibold sm:text-2xl md:text-3xl'>
          {title}
        </h2>
        <p className='text-muted-foreground mt-2 max-w-2xl text-sm sm:text-base'>
          {subtitle}
        </p>
        <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {cards?.map((card, index) => {
            const Icon = icons[card.icon];
            return (
              <div
                key={index}
                className='bg-card rounded-xl border p-6 shadow-sm'
              >
                <div className='bg-primary/10 text-primary mb-4 grid h-10 w-10 place-items-center rounded-md'>
                  <Icon className='h-5 w-5' />
                </div>
                <h3 className='font-medium'>{card.title}</h3>
                <p className='text-muted-foreground mt-2 text-sm'>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className='bg-card mt-8 rounded-lg border p-6 text-center'>
          <p className='text-muted-foreground text-sm'>{resultSubtitle}</p>
          <p className='mt-1 font-semibold'>{result}</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
