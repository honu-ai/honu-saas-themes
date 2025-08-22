'use client';

import React from 'react';
import { ContactDialog } from '@/components/contact-form';
import { Lightbulb, Rocket, Zap, CheckCircle } from 'lucide-react';

export type SolutionSectionProps = {
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  product?: boolean;
  steps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
};

const SolutionSection: React.FC<SolutionSectionProps> = ({
  badge,
  title,
  subtitle,
  cta,
  product,
  steps,
}) => {
  const stepIcons = [Lightbulb, Zap, Rocket, CheckCircle];
  const stepColors = [
    'from-blue-400 to-blue-600',
    'from-green-400 to-green-600',
    'from-purple-400 to-purple-600',
    'from-pink-400 to-pink-600',
  ];

  return (
    <section
      id='solution'
      className='from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden bg-gradient-to-br py-20'
    >
      {/* Background decorations */}
      <div className='absolute top-0 left-0 h-full w-full opacity-30'>
        <div className='bg-primary/10 absolute top-20 left-10 h-64 w-64 animate-pulse rounded-full blur-3xl' />
        <div className='bg-accent/10 animate-bounce-gentle absolute right-10 bottom-20 h-96 w-96 rounded-full blur-3xl' />
      </div>

      <div className='relative z-10 container mx-auto'>
        <div className='mb-16 text-center'>
          <div className='from-primary to-accent hover-scale mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-6 py-3 text-white shadow-lg'>
            <Rocket className='h-5 w-5' />
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
            {subtitle}
          </p>
        </div>

        <div className='mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {steps.map((step, index) => {
            const StepIcon = stepIcons[index % stepIcons.length];
            const colorClass = stepColors[index % stepColors.length];

            return (
              <div
                key={step.number}
                className='group border-primary/20 bg-card/60 relative rounded-3xl border-2 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl'
              >
                {/* Step number with gradient */}
                <div
                  className={`absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r ${colorClass} text-sm font-bold text-white shadow-lg`}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className='mt-4 mb-6'>
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${colorClass} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
                  >
                    <StepIcon className='h-8 w-8' />
                  </div>
                </div>

                <h3 className='group-hover:text-primary mb-3 text-xl font-bold transition-colors'>
                  {step.title}
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  {step.description}
                </p>

                {/* Decorative elements */}
                <div className='bg-accent absolute right-4 bottom-4 h-2 w-2 animate-pulse rounded-full' />
                <div className='via-primary/20 absolute top-1/2 right-2 h-8 w-1 bg-gradient-to-b from-transparent to-transparent' />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className='text-center'>
          <div className='bg-card/80 border-primary/20 inline-block rounded-3xl border-2 p-8 shadow-2xl backdrop-blur-sm'>
            <ContactDialog
              triggerText={cta}
              className='group from-primary via-accent to-secondary animate-pulse-glow relative overflow-hidden rounded-full bg-gradient-to-r px-12 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl'
              product={product}
              showIcon={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
