'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, MessageCircle, Lightbulb } from 'lucide-react';

export type FaqSectionProps = {
  badge?: string;
  title?: string;
  subtitle?: string;
  items?: Array<{
    question: string;
    answer: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
};

const FaqSection: React.FC<FaqSectionProps> = ({
  badge = 'FAQ',
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our platform.',
  items = [],
  faqs = [],
}) => {
  // Use either items or faqs prop
  const faqData = items.length > 0 ? items : faqs;

  return (
    <section
      id='faq'
      className='from-muted/20 to-card/20 relative overflow-hidden bg-gradient-to-br py-20'
    >
      {/* Background decorations */}
      <div className='absolute inset-0 opacity-30'>
        <div className='bg-primary/10 absolute top-20 left-20 h-64 w-64 animate-pulse rounded-full blur-3xl' />
        <div className='bg-accent/10 animate-bounce-gentle absolute right-20 bottom-20 h-96 w-96 rounded-full blur-3xl' />
        <div className='bg-secondary/20 absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl' />
      </div>

      <div className='relative z-10 container mx-auto'>
        <div className='mb-16 text-center'>
          <div className='from-primary to-accent hover-scale mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-6 py-3 text-white shadow-lg'>
            <HelpCircle className='h-5 w-5' />
            <span className='text-sm font-bold tracking-wide uppercase'>
              {badge}
            </span>
          </div>
          <h2 className='mb-6 text-4xl font-bold md:text-5xl'>
            <span className='from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent'>
              {title}
            </span>
          </h2>
          <p className='text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed'>
            {subtitle}
          </p>
        </div>

        <div className='mx-auto max-w-4xl'>
          <div className='border-primary/20 bg-card/60 rounded-3xl border-2 p-8 shadow-2xl backdrop-blur-sm'>
            <Accordion type='single' collapsible className='space-y-4'>
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className='group border-muted/20 bg-card/40 hover:border-primary/30 data-[state=open]:border-primary/50 rounded-2xl border-2 px-6 py-2 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl data-[state=open]:shadow-2xl'
                >
                  <AccordionTrigger className='group-hover:text-primary py-6 text-left text-lg font-semibold transition-colors duration-200 hover:no-underline'>
                    <div className='flex items-center gap-3'>
                      <div className='bg-primary/20 text-primary flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110 group-hover:rotate-12'>
                        <MessageCircle className='h-4 w-4' />
                      </div>
                      <span className='flex-1'>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className='text-muted-foreground pt-2 pb-6 pl-11 text-base leading-relaxed'>
                    <div className='relative'>
                      <div className='flex items-start gap-3'>
                        <Lightbulb className='text-accent mt-1 h-5 w-5 flex-shrink-0' />
                        <div>{faq.answer}</div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Decorative elements */}
            <div className='mt-8 text-center'>
              <div className='text-muted-foreground inline-flex items-center gap-2 text-sm'>
                <span>Still have questions?</span>
                <span className='text-primary cursor-pointer font-medium hover:underline'>
                  Get in touch! 💬
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
