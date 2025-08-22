'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export type FaqSectionProps = {
  title: string;
  subtitle: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

const FaqSection: React.FC<FaqSectionProps> = ({ title, subtitle, faqs }) => {
  return (
    <section id='faq' className='container mx-auto max-w-4xl px-4 py-16'>
      <h2 className='text-3xl font-semibold'>{title}</h2>
      <p className='text-muted-foreground mt-2'>{subtitle}</p>
      <div className='mx-auto mt-6 max-w-2xl'>
        <Accordion type='single' collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`m-${i}`}>
              <AccordionTrigger className='text-left'>
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
