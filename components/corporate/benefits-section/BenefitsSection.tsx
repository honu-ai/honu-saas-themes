import React from 'react';
import { icons } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

// Define a type for the benefit card
type BenefitCard = {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
};

// Define a type for the bottom section
type BottomSection = {
  title: string;
  description: string;
};

// Update the props type to accept content from content.json
export type BenefitsSectionProps = {
  badge: string;
  title: string;
  description: string;
  cards: BenefitCard[];
  bottomSection: BottomSection;
};

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  badge,
  title,
  description,
  cards,
  bottomSection,
}) => {
  return (
    <section id='benefits' className='bg-muted/30 px-4 py-12 sm:py-16 md:py-20'>
      <div className='container mx-auto'>
        <span className='bg-secondary rounded-full px-2 py-1 text-xs'>
          {badge}
        </span>
        <h2 className='mt-3 text-xl font-semibold sm:text-2xl md:text-3xl'>
          {title}
        </h2>
        <p className='text-muted-foreground mt-2 max-w-2xl text-sm sm:text-base'>
          {description}
        </p>

        <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {cards.map((card, index) => {
            const Icon = icons[card.icon as keyof typeof icons];
            return (
              <article
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
                <ul className='mt-4 space-y-2'>
                  {card.benefits.map(
                    (benefit: string, benefitIndex: number) => (
                      <li
                        key={benefitIndex}
                        className='flex items-start gap-2 text-sm'
                      >
                        <CheckCircle2 className='text-primary mt-0.5 h-4 w-4' />
                        <span className='text-muted-foreground'>{benefit}</span>
                      </li>
                    ),
                  )}
                </ul>
              </article>
            );
          })}
        </div>

        <div className='bg-card mt-10 rounded-lg border p-6'>
          <h4 className='font-medium'>{bottomSection.title}</h4>
          <p className='text-muted-foreground mt-1 text-sm'>
            {bottomSection.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
