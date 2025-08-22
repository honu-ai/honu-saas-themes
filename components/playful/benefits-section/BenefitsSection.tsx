'use client';

import React from 'react';
import { icons } from 'lucide-react';
import { Gift, Trophy, Star } from 'lucide-react';

export type BenefitsSectionProps = {
  badge: string;
  title: string;
  description: string;
  cards: Array<{
    title: string;
    description: string;
    icon: keyof typeof icons;
    benefits: string[];
  }>;
  bottomSection: {
    title: string;
    description: string;
  };
};

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  badge,
  title,
  description,
  cards,
  bottomSection,
}) => {
  const cardColors = [
    {
      bg: 'from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20',
      border: 'border-emerald-200 dark:border-emerald-800',
      icon: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
    },
    {
      bg: 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20',
      border: 'border-blue-200 dark:border-blue-800',
      icon: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
      bg: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20',
      border: 'border-purple-200 dark:border-purple-800',
      icon: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    },
  ];

  return (
    <section id='benefits' className='relative overflow-hidden py-20'>
      {/* Background decorations */}
      <div className='absolute inset-0 opacity-40'>
        <div className='from-primary/20 to-accent/20 absolute top-10 left-1/4 h-72 w-72 animate-pulse rounded-full bg-gradient-to-r blur-3xl' />
        <div className='from-secondary/20 to-primary/20 animate-bounce-gentle absolute right-1/4 bottom-10 h-96 w-96 rounded-full bg-gradient-to-r blur-3xl' />
      </div>

      <div className='relative z-10 container mx-auto'>
        <div className='mb-16 text-center'>
          <div className='from-accent to-secondary hover-scale mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-6 py-3 text-white shadow-lg'>
            <Trophy className='h-5 w-5' />
            <span className='text-sm font-bold tracking-wide uppercase'>
              {badge}
            </span>
          </div>
          <h2 className='mb-6 text-4xl font-bold md:text-5xl'>
            <span className='from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent'>
              {title}
            </span>
          </h2>
          <p className='text-muted-foreground mx-auto max-w-4xl text-xl leading-relaxed'>
            {description}
          </p>
        </div>

        <div className='mb-16 grid gap-8 md:grid-cols-3'>
          {cards.map((card, i) => {
            const Icon = icons[card.icon];
            const colors = cardColors[i % cardColors.length];

            return (
              <div
                key={i}
                className={`group relative rounded-3xl border-2 bg-gradient-to-br p-8 shadow-xl transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl ${colors.bg} ${colors.border}`}
              >
                {/* Floating decorative element */}
                <div className='absolute -top-3 -right-3'>
                  <div className='from-accent to-primary flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r text-xs font-bold text-white'>
                    {i + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className='mb-6'>
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${colors.icon}`}
                  >
                    <Icon className='h-8 w-8' />
                  </div>
                </div>

                <h3 className='group-hover:text-primary mb-3 text-xl font-bold transition-colors'>
                  {card.title}
                </h3>
                <p className='text-muted-foreground mb-6 leading-relaxed'>
                  {card.description}
                </p>

                {/* Benefits list with fun styling */}
                <div className='space-y-3'>
                  {card.benefits.map((benefit, bi) => (
                    <div
                      key={bi}
                      className='group/item flex items-center gap-3'
                    >
                      <div className='bg-primary/20 text-primary flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 group-hover/item:scale-110 group-hover/item:rotate-12'>
                        <Star className='h-3 w-3 fill-current' />
                      </div>
                      <span className='text-muted-foreground group-hover/item:text-foreground text-sm font-medium transition-colors'>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Subtle background pattern */}
                <div className='absolute inset-0 overflow-hidden rounded-3xl opacity-5'>
                  <div
                    className='h-full w-full'
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom section with special styling */}
        <div className='relative mx-auto max-w-4xl'>
          <div className='border-primary/20 from-primary/10 via-accent/10 to-secondary/10 rounded-3xl border-2 bg-gradient-to-r p-8 shadow-2xl backdrop-blur-sm'>
            <div className='text-center'>
              <div className='mb-4'>
                <Gift className='text-primary animate-bounce-gentle mx-auto h-12 w-12' />
              </div>
              <h4 className='from-primary to-primary/70 mb-4 bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent'>
                {bottomSection.title}
              </h4>
              <p className='text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed'>
                {bottomSection.description}
              </p>
            </div>

            {/* Decorative sparkles */}
            <div className='text-accent absolute top-4 left-4 animate-pulse'>
              <Star className='h-4 w-4 fill-current' />
            </div>
            <div className='text-primary animate-bounce-gentle absolute top-6 right-8'>
              <Star className='h-3 w-3 fill-current' />
            </div>
            <div className='text-secondary absolute bottom-4 left-8 animate-pulse'>
              <Star className='h-5 w-5 fill-current' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
