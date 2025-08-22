'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ContactDialog } from '@/components/contact-form';
import Link from 'next/link';

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
  title,
  description,
  primaryButtonText = 'Get Started',
  secondaryButtonText,
  secondaryHref,
  product,
}) => {
  return (
    <section id='cta' className='py-16'>
      <div className='from-primary/10 container mx-auto rounded-xl border bg-gradient-to-br to-transparent p-10 text-center'>
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <p className='text-muted-foreground mx-auto mt-2 max-w-2xl'>
          {description}
        </p>
        <div className='mt-6 flex justify-center gap-3'>
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
    </section>
  );
};

export default CtaSection;
