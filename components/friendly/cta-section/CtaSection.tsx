import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ContactDialog } from '@/components/contact-form';

// Add interface to extend Window interface with dataLayer
declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export type CtaSectionProps = {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  secondaryHref?: string;
  disclaimerText?: string;
  product?: boolean;
};

const CtaSection: React.FC<CtaSectionProps> = ({
  title = 'Ready to Transform Your Content?',
  description = 'Join thousands of content creators who are already using our platform to streamline their workflow and boost engagement.',
  primaryButtonText = 'Get Started',
  secondaryButtonText,
  secondaryHref,
  product,
}) => {
  return (
    <section id='cta' className='px-4 py-10 sm:py-16 md:px-6'>
      <div className='container mx-auto'>
        <div className='from-primary/20 via-accent/20 to-secondary/20 rounded-3xl bg-gradient-to-r p-6 text-center sm:p-8 lg:p-10'>
          <h2 className='text-3xl font-bold'>{title}</h2>
          <p className='text-muted-foreground mx-auto mt-2 max-w-2xl'>
            {description}
          </p>
          <div className='mt-6 flex justify-center gap-4'>
            <ContactDialog
              triggerText={primaryButtonText}
              className='rounded-full px-6'
              product={product}
              showIcon={true}
            />
            {secondaryHref && (
              <Link href={secondaryHref}>
                <Button variant='secondary' className='rounded-full'>
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
