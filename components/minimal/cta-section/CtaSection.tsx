'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ContactDialog } from '@/components/contact-form';
import Link from 'next/link';

export type CtaSectionProps = {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryHref?: string;
  secondaryHref?: string;
  product?: boolean;
  secondaryCtaText?: string;
};

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  description,
  primaryButtonText,
  secondaryHref,
  product,
  secondaryCtaText,
}) => {
  return (
    <section id='cta' className='relative border-t py-16'>
      <div className='via-accent/5 absolute inset-0 bg-gradient-to-r from-transparent to-transparent' />
      <div className='relative container mx-auto max-w-4xl px-4 text-center'>
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <p className='text-muted-foreground mx-auto mt-2 max-w-2xl'>
          {description}
        </p>
        <div className='mt-6 flex justify-center gap-3'>
          <ContactDialog
            triggerText={primaryButtonText}
            className='animate-slide-up hover-scale w-full rounded-md border-none px-2! py-1! text-sm! sm:w-auto'
            product={product}
            showIcon={true}
          />

          {secondaryHref && (
            <Link href={secondaryHref}>
              <Button
                variant='outline'
                className='hover-scale w-full rounded-full sm:w-auto'
              >
                {secondaryCtaText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
