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
  title: string;
  subtitle: string;
  faqs?: FaqItem[];
  badge?: string;
};

const FaqSection: React.FC<FaqSectionProps> = ({
  faqs,
  title,
  subtitle,
  badge = 'FAQs',
}) => {
  return (
    <section
      id='faq'
      className='container mx-auto px-4 py-12 sm:py-16 md:py-20'
    >
      <div className='max-w-2xl'>
        <span className='bg-secondary rounded-full px-2 py-1 text-xs'>
          {badge}
        </span>
        <h2 className='mt-3 text-xl font-semibold sm:text-2xl md:text-3xl'>
          {title}
        </h2>
        <p className='text-muted-foreground mt-2 text-sm sm:text-base'>
          {subtitle}
        </p>
      </div>

      <div className='mt-8'>
        <Accordion type='single' collapsible className='w-full'>
          {faqs?.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
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
