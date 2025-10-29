import React from 'react';
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
  title = 'Ready to Create Content That <span class="text-primary">Actually Ranks</span>?',
  description = 'Join 1,200+ marketing professionals who are saving time and driving more organic traffic with RankWell. Start your 14-day free trial today.',
  primaryButtonText = 'Start Your 14-Day Free Trial',
  secondaryButtonText = 'Schedule a Demo',
  product,
}) => {
  return (
    <section className='relative overflow-hidden px-4 py-20'>
      <div className='relative z-10 mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white p-10 shadow-sm'>
        {/* Abstract shapes */}
        <div className='pointer-events-none absolute top-0 left-0 z-[-1] h-full w-full overflow-hidden'>
          <div className='border-primary absolute top-[-450px] left-[-500px] h-[650px] w-[650px] rounded-full border-25 bg-white md:left-[-450px] md:border-50' />
          <div className='border-primary absolute right-[-450px] bottom-[-500px] h-[650px] w-[650px] rounded-full border-25 bg-white md:bottom-[-450px] md:border-50' />
        </div>
        <div className='px-8 py-14 text-center md:px-14 md:py-18'>
          <h2
            className='font-poppins mb-6 text-3xl leading-tight font-medium tracking-wide md:text-5xl'
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <p className='text-muted-foreground mx-auto mb-10 max-w-2xl text-lg'>
            {description}
          </p>

          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <ContactDialog
              triggerText={primaryButtonText}
              className='bg-primary hover:bg-primary-600 lg:px10 flex w-full items-center gap-2 rounded-2xl border-none px-6 py-6 sm:w-auto md:text-lg lg:h-16'
              product={product}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
