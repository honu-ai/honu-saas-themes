import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSectionProps = {
  title?: string;
  subtitle?: string;
  faqs?: FaqItem[];
};

const FaqSection: React.FC<FaqSectionProps> = ({
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our platform.',
  faqs = [],
}) => {
  return (
    <section id='faq' className='px-4 py-10 sm:py-16 md:px-6'>
      <div className='container mx-auto text-center'>
        <span className='bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium md:text-lg'>
          FAQs
        </span>
        <h2 className='mt-3 text-3xl font-bold'>{title}</h2>
        <p className='text-muted-foreground mt-2'>{subtitle}</p>
      </div>
      <div className='mx-auto mt-8 max-w-2xl'>
        <Accordion type='single' collapsible>
          {faqs.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className='text-left'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='text-muted-foreground'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
