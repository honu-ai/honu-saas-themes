'use client';

import React from 'react';
import { icons } from 'lucide-react';
import { Frown, AlertCircle } from 'lucide-react';

export type ProblemSectionProps = {
  title: string;
  subtitle: string;
  result: string;
  resultSubtitle: string;
  cards: Array<{
    title: string;
    description: string;
    icon: keyof typeof icons;
  }>;
};

const ProblemSection: React.FC<ProblemSectionProps> = ({
  title,
  subtitle,
  result,
  resultSubtitle,
  cards,
}) => {
  return (
    <section id='problem' className='relative overflow-hidden py-20'>
      {/* Background decoration */}
      <div className='absolute top-0 left-0 h-full w-full opacity-50'>
        <div className='bg-destructive/10 absolute top-10 left-10 h-32 w-32 animate-pulse rounded-full blur-xl' />
        <div className='bg-muted/20 absolute right-10 bottom-10 h-48 w-48 rounded-full blur-2xl' />
      </div>

      <div className='relative z-10 container mx-auto'>
        <div className='mb-12 text-center'>
          <div className='bg-destructive/10 mb-6 inline-flex items-center gap-2 rounded-full px-6 py-3'>
            <Frown className='text-destructive h-5 w-5' />
            <span className='text-destructive text-sm font-medium'>
              Problems We Solve
            </span>
          </div>
          <h2 className='mb-4 text-4xl font-bold md:text-5xl'>{title}</h2>
          <p className='text-muted-foreground mx-auto max-w-3xl text-xl'>
            {subtitle}
          </p>
        </div>

        <div className='mb-12 grid gap-8 md:grid-cols-3'>
          {cards.map((card, i) => {
            const Icon = icons[card.icon];
            const colors = [
              'border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20',
              'border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/20',
              'border-yellow-200 bg-yellow-50/50 dark:border-yellow-800 dark:bg-yellow-950/20',
            ];
            const iconColors = [
              'text-red-500 bg-red-100 dark:text-red-400 dark:bg-red-900/30',
              'text-orange-500 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30',
              'text-yellow-500 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30',
            ];

            return (
              <div
                key={i}
                className={`group relative rounded-3xl border-2 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl ${colors[i % 3]}`}
              >
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-12 ${iconColors[i % 3]}`}
                >
                  <Icon className='h-8 w-8' />
                </div>
                <h3 className='group-hover:text-destructive mb-3 text-xl font-bold transition-colors'>
                  {card.title}
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  {card.description}
                </p>

                {/* Decorative corner accent */}
                <div className='bg-destructive/20 absolute top-4 right-4 h-3 w-3 animate-pulse rounded-full' />
              </div>
            );
          })}
        </div>

        {/* Result section with dramatic styling */}
        <div className='border-destructive/20 from-destructive/5 to-destructive/10 relative rounded-3xl border-2 bg-gradient-to-br p-8 text-center shadow-xl'>
          <div className='absolute -top-6 left-1/2 -translate-x-1/2'>
            <div className='bg-destructive flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg'>
              <AlertCircle className='h-6 w-6' />
            </div>
          </div>
          <div className='pt-4'>
            <h4 className='text-destructive mb-2 text-2xl font-bold'>
              {result}
            </h4>
            <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
              {resultSubtitle}
            </p>
          </div>

          {/* Background pattern */}
          <div className='absolute inset-0 opacity-5'>
            <div
              className='h-full w-full'
              style={{
                backgroundImage:
                  'radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px)',
                backgroundSize: '24px 24px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
