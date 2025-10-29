import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import { PlusIcon, MinusIcon } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSectionProps = {
  title: string;
  subtitle: string;
  faqs?: FaqItem[];
};

// Custom AccordionTrigger with plus icon
function CustomAccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-xl py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:[&>div>svg:first-child]:rotate-90 data-[state=open]:[&>div>svg:first-child]:opacity-0 data-[state=open]:[&>div>svg:last-child]:rotate-0 data-[state=open]:[&>div>svg:last-child]:opacity-100',
          className,
        )}
        {...props}
      >
        {children}
        <div className='relative'>
          <PlusIcon className='pointer-events-none size-6 shrink-0 translate-y-0.5 transition-all duration-500' />
          <MinusIcon className='pointer-events-none absolute top-0 left-0 size-6 shrink-0 translate-y-0.5 rotate-90 opacity-0 transition-all duration-500' />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqs, title, subtitle }) => {
  return (
    <section className='px-4 py-16' id='faqs'>
      <div className='mx-auto max-w-3xl'>
        <div className='mb-12 text-center'>
          <span className='bg-primary/10 text-primary border-primary/20 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium'>
            FAQs
          </span>
          <h2 className='mt-4 mb-6 text-3xl leading-tight font-medium tracking-wide md:text-4xl'>
            {title}
          </h2>
          <p className='text-muted-foreground'>{subtitle}</p>
        </div>

        <Accordion
          type='single'
          collapsible
          defaultValue='item-0'
          className='mb-16'
        >
          {faqs?.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className='mb-4 rounded-xl border-2 border-slate-100 bg-white px-6 last:border-b'
            >
              <CustomAccordionTrigger className='py-6 hover:no-underline'>
                <div className='flex items-center gap-4 text-left'>
                  <div>
                    <h3 className='text-lg font-bold'>{faq.question}</h3>
                  </div>
                </div>
              </CustomAccordionTrigger>
              <AccordionContent className='pb-6'>
                <div className='border-t border-slate-100 py-4'>
                  <p className='text-muted-foreground'>{faq.answer}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
