'use client';

import { icons } from 'lucide-react';
import HeroSection from '@/components/playful/hero-section';
import ProblemSection from '@/components/playful/problem-section';
import SolutionSection from '@/components/playful/solution-section';
import BenefitsSection from '@/components/playful/benefits-section';
import FaqSection from '@/components/playful/faq-section';
import CtaSection from '@/components/playful/cta-section';
import Footer from '@/components/playful/footer';
import content from '../../content.json';

export default function PlayfulHomePage() {
  return (
    <>
      <section id='hero'>
        <HeroSection
          heroDescriptionHeading={content.hero.heroDescriptionHeading}
          heroText={content.hero.heroText}
          heroDescription={content.hero.heroDescription}
          ctaText={content.hero.ctaText}
          product={content.metadata.product}
          steps={content.solution.steps}
        />
      </section>

      <section id='problem'>
        <ProblemSection
          title={content.problem.title}
          subtitle={content.problem.subtitle}
          result={content.problem.result}
          resultSubtitle={content.problem.resultSubtitle}
          cards={content.problem.cards.map((card) => ({
            title: card.title,
            description: card.description,
            icon: card.icon as keyof typeof icons,
          }))}
        />
      </section>

      <section id='solution'>
        <SolutionSection
          badge={content.solution.badge}
          title={content.solution.title}
          subtitle={content.solution.subtitle}
          cta={content.solution.cta}
          steps={content.solution.steps}
          product={content.metadata.product}
        />
      </section>

      <section id='benefits'>
        <BenefitsSection
          badge={content.benefits.badge}
          title={content.benefits.title}
          description={content.benefits.description}
          cards={content.benefits.cards.map((card) => ({
            ...card,
            icon: card.icon as keyof typeof icons,
          }))}
          bottomSection={content.benefits.bottomSection}
        />
      </section>

      <section id='faq'>
        <FaqSection
          badge={content.faq.badge}
          title={content.faq.title}
          subtitle={content.faq.subtitle}
          items={content.faq.items}
        />
      </section>

      <section id='cta'>
        <CtaSection
          title={content.cta.title}
          description={content.cta.description}
          primaryButtonText={content.cta.primaryButtonText}
          secondaryButtonText={content.cta.secondaryButtonText}
          product={content.metadata.product}
        />
      </section>

      <section>
        <Footer
          companyName={content.footer.companyName}
          description={content.footer.description}
        />
      </section>
    </>
  );
}
