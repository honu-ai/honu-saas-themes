'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ContactDialog } from '@/components/contact-form';
import Link from 'next/link';
import { Rocket, Sparkles, Heart, Star } from 'lucide-react';

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
    <section id='cta' className='relative overflow-hidden py-20'>
      {/* Dynamic background with multiple gradients */}
      <div className='absolute inset-0'>
        <div className='from-primary/20 via-accent/20 to-secondary/20 absolute inset-0 bg-gradient-to-br' />
        <div className='absolute top-0 left-0 h-full w-full'>
          <div className='bg-primary/30 absolute top-20 left-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl' />
          <div className='bg-accent/30 animate-bounce-gentle absolute right-1/4 bottom-20 h-96 w-96 rounded-full blur-3xl' />
          <div className='bg-secondary/30 absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full blur-2xl' />
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className='animate-wiggle absolute top-10 left-10'>
        <Star className='text-accent h-8 w-8 fill-current opacity-60' />
      </div>
      <div className='animate-bounce-gentle absolute top-20 right-20'>
        <Heart className='text-primary h-10 w-10 fill-current opacity-60' />
      </div>
      <div className='absolute bottom-20 left-20 animate-pulse'>
        <Sparkles className='text-secondary h-9 w-9 opacity-60' />
      </div>
      <div className='animate-wiggle absolute right-10 bottom-10'>
        <Rocket className='text-accent h-12 w-12 opacity-60' />
      </div>

      <div className='relative z-10 container mx-auto'>
        <div className='mx-auto max-w-5xl'>
          <div className='border-primary/30 bg-card/80 relative rounded-3xl border-2 p-12 shadow-2xl backdrop-blur-xl md:p-16'>
            {/* Decorative corner elements */}
            <div className='bg-primary absolute -top-3 -left-3 h-6 w-6 animate-pulse rounded-full' />
            <div className='bg-accent animate-bounce-gentle absolute -top-3 -right-3 h-6 w-6 rounded-full' />
            <div className='bg-secondary animate-wiggle absolute -bottom-3 -left-3 h-6 w-6 rounded-full' />
            <div className='bg-primary absolute -right-3 -bottom-3 h-6 w-6 animate-pulse rounded-full' />

            <div className='text-center'>
              {/* Badge */}
              <div className='from-primary to-accent hover-scale mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-6 py-3 text-white shadow-lg'>
                <Rocket className='h-5 w-5' />
                <span className='text-sm font-bold tracking-wide uppercase'>
                  Ready to Start?
                </span>
              </div>

              {/* Title */}
              <h2 className='mb-6 text-4xl font-bold md:text-5xl lg:text-6xl'>
                <span className='from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent'>
                  {title}
                </span>
              </h2>

              {/* Description */}
              <p className='text-muted-foreground mx-auto mb-10 max-w-3xl text-xl leading-relaxed'>
                {description}
              </p>

              {/* CTA Buttons */}
              <div className='mb-8 flex flex-col justify-center gap-6 sm:flex-row'>
                <ContactDialog
                  triggerText={primaryButtonText}
                  className='group from-primary via-accent to-secondary animate-pulse-glow relative overflow-hidden rounded-full bg-gradient-to-r px-12 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl'
                  product={product}
                  showIcon={true}
                />
                {secondaryHref && (
                  <Link href={secondaryHref}>
                    <Button
                      variant='outline'
                      className='border-primary/40 bg-card/60 hover:bg-primary/10 hover:border-primary/60 hover-wiggle rounded-full border-2 px-12 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105'
                    >
                      {secondaryButtonText}
                    </Button>
                  </Link>
                )}
              </div>

              {/* Fun call-to-action elements */}
              <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3'>
                <div className='text-muted-foreground flex items-center justify-center gap-2 text-sm'>
                  <Star className='text-accent h-4 w-4 fill-current' />
                  <span>30-day free trial</span>
                </div>
                <div className='text-muted-foreground flex items-center justify-center gap-2 text-sm'>
                  <Heart className='text-primary h-4 w-4 fill-current' />
                  <span>Cancel anytime</span>
                </div>
                <div className='text-muted-foreground flex items-center justify-center gap-2 text-sm'>
                  <Sparkles className='text-secondary h-4 w-4' />
                  <span>No setup fees</span>
                </div>
              </div>
            </div>

            {/* Background pattern */}
            <div className='absolute inset-0 overflow-hidden rounded-3xl opacity-5'>
              <div
                className='h-full w-full'
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 40%, currentColor 2px, transparent 2px)',
                  backgroundSize: '32px 32px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
