import React from 'react';
import { Button } from '@/components/ui/button';
import { ContactDialog } from '@/components/contact-form';

export type CtaSectionProps = {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  disclaimerText?: string;
  product?: boolean;
  companyLogos?: Array<{
    src: string;
    alt: string;
  }>;
};

const CtaSection: React.FC<CtaSectionProps> = ({
  title = 'Ready to Get Started?',
  description = 'Take the next step towards transforming your business.',
  primaryButtonText = 'Get Started',
  product,
}) => {
  return (
    <section
      id='cta'
      className='relative overflow-hidden px-4 py-12 sm:py-16 md:py-20'
    >
      <div className='from-primary/10 to-primary/0 absolute inset-0 bg-gradient-to-r' />
      <div className='relative container mx-auto text-center'>
        <h2 className='text-xl font-semibold sm:text-2xl md:text-3xl'>
          {title}
        </h2>
        <p className='text-muted-foreground mx-auto mt-2 max-w-2xl text-sm sm:text-base'>
          {description}
        </p>
        <div className='mt-6 flex justify-center'>
          <ContactDialog
            triggerText={primaryButtonText}
            className='border-primary/30'
            product={product}
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
