import React from 'react';
import { icons } from 'lucide-react';
import { Check } from 'lucide-react';

export type BenefitsSectionProps = {
  badge?: string;
  title?: string;
  description?: string;
  cards?: Array<{
    icon: keyof typeof icons;
    title: string;
    description: string;
    benefits: string[];
  }>;
  bottomSection?: {
    title: string;
    description: string;
  };
};

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  badge = 'Benefits',
  title = 'Why Choose Our Platform',
  description = 'Discover the advantages of using our intelligent content creation platform.',
  cards = [],
  bottomSection,
}) => {
  return (
    <section id='benefits' className='bg-muted/40 px-4 py-10 sm:py-16 md:px-6'>
      <div className='container mx-auto max-w-6xl'>
        <span className='bg-secondary rounded-full px-3 py-1 text-xs'>
          {badge}
        </span>
        <h2 className='mt-3 text-3xl font-bold'>{title}</h2>
        <p className='text-muted-foreground mt-2 max-w-2xl'>{description}</p>
        <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {cards.map((card, index) => {
            const Icon = icons[card.icon];
            return (
              <div key={index} className='bg-card rounded-3xl border p-6'>
                <div className='bg-primary/15 text-primary mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full'>
                  <Icon className='h-5 w-5' />
                </div>
                <h3 className='font-semibold'>{card.title}</h3>
                <p className='text-muted-foreground mt-1 text-sm'>
                  {card.description}
                </p>
                <ul className='mt-4 space-y-2 text-sm'>
                  {card.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className='text-muted-foreground flex items-center gap-2'
                    >
                      <Check className='text-primary h-4 w-4' /> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        {bottomSection && (
          <div className='bg-card mt-10 rounded-3xl border p-6'>
            <h4 className='font-semibold'>{bottomSection.title}</h4>
            <p className='text-muted-foreground mt-1 text-sm'>
              {bottomSection.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BenefitsSection;
