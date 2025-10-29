'use client';

import React, { useState } from 'react';
import { icons, Rocket } from 'lucide-react';

// Define a type for the benefit tab
type BenefitTab = {
  icon: keyof typeof icons;
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
  cards: BenefitTab[];
  bottomSection: BottomSection;
};

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  badge,
  title,
  description,
  cards,
  bottomSection,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const activeCard = cards[activeTab];

  return (
    <section className='px-4 py-18' id='features'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {/* Left side - Navigation tabs */}
          <div className='space-y-4'>
            <div className='mb-8'>
              <span className='bg-primary/10 text-primary border-primary/30 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium'>
                <Rocket className='h-4 w-4' />
                {badge}
              </span>
              <h3 className='text-foreground mt-4 text-xl leading-tight font-medium tracking-wide sm:text-2xl md:text-3xl'>
                {title}
              </h3>
              <p className='text-muted-foreground text-md mx-auto max-w-2xl'>
                {description}
              </p>
            </div>

            <div className='space-y-2'>
              {cards.map((card, index) => {
                const IconComponent = icons[card.icon];
                const isActive = index === activeTab;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full rounded-lg p-4 text-left transition-all duration-200 ${
                      isActive
                        ? 'bg-primary/10 border-primary text-primary border-l-4'
                        : 'text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <div className='flex items-center gap-3'>
                      <IconComponent
                        className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                      />
                      <span
                        className={`font-medium ${isActive ? 'text-primary' : 'text-foreground'}`}
                      >
                        {card.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right side - Active card content */}
          <div className='flex items-center justify-center lg:justify-start'>
            <div className='h-full w-full'>
              {activeCard && (
                <div className='flex h-full flex-col justify-start rounded-xl border border-slate-100 bg-white p-8'>
                  <div className='mb-6'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-lg'>
                        {(() => {
                          const IconComponent = icons[activeCard.icon];
                          return <IconComponent className='h-6 w-6' />;
                        })()}
                      </div>
                      <h4 className='text-foreground text-xl font-semibold'>
                        {activeCard.title}
                      </h4>
                    </div>
                    <p className='text-muted-foreground text-lg leading-relaxed'>
                      {activeCard.description}
                    </p>
                  </div>

                  <div className='space-y-3'>
                    <h5 className='text-foreground font-medium'>
                      Key Benefits:
                    </h5>
                    <ul className='space-y-2'>
                      {activeCard.benefits.map((benefit, index) => (
                        <li key={index} className='flex items-start gap-3'>
                          <div className='bg-primary/10 text-primary mt-1 flex h-5 w-5 items-center justify-center rounded-full'>
                            <div className='bg-primary h-2 w-2 animate-pulse rounded-full'></div>
                          </div>
                          <span className='text-muted-foreground text-sm leading-relaxed'>
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
