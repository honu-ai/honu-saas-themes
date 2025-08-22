'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export type FaqSectionProps = {
  badge: string;
  title: string;
  subtitle: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

const FaqSection: React.FC<FaqSectionProps> = ({
  badge,
  title,
  subtitle,
  faqs,
}) => {
  return (
    <section id='faq' className='container mx-auto py-16'>
      <span className='bg-secondary rounded px-2 py-1 font-mono text-[10px]'>
        {badge}
      </span>
      <h2 className='mt-3 text-3xl font-semibold'>{title}</h2>
      <p className='text-muted-foreground mt-1'>{subtitle}</p>
      <div className='mt-6'>
        <Accordion type='single' collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`t-${i}`}>
              <AccordionTrigger className='text-left font-mono'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className='text-muted-foreground'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
