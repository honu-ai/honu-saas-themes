import React from 'react';
import { icons, AlertTriangleIcon } from 'lucide-react';

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
    <section id='problem' className='px-4 py-12 sm:py-16 md:py-20'>
      <div className='container mx-auto max-w-6xl'>
        {/* Header Section */}
        <div className='text-center'>
          <h2 className='mb-4 text-3xl leading-tight font-medium tracking-wide sm:text-4xl md:text-5xl'>
            {title}
          </h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg'>
            {subtitle}
          </p>
        </div>

        {/* Cards Section */}
        <div className='mt-12 grid gap-8 lg:grid-cols-3'>
          {cards?.map((card, index) => {
            const Icon = icons[card.icon];
            return (
              <div
                key={index}
                className='flex flex-col justify-between rounded-xl border border-gray-50 bg-white p-6'
              >
                {/* Icon */}
                <div className='mb-4'>
                  <div className='from-primary to-primary/80 w-fit rounded-lg bg-linear-to-b p-3'>
                    <Icon className='h-6 w-6 text-white' />
                  </div>
                </div>

                <h3 className='mb-3 text-lg font-semibold text-gray-900'>
                  {card.title}
                </h3>

                <p className='text-sm leading-relaxed text-gray-600'>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
