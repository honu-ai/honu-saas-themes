import HeroSection from '@/components/minimal/hero-section';
import ProblemSection from '@/components/minimal/problem-section';
import SolutionSection from '@/components/minimal/solution-section';
import BenefitsSection from '@/components/minimal/benefits-section';
import FaqSection from '@/components/minimal/faq-section';
import CtaSection from '@/components/minimal/cta-section';
import Footer from '@/components/minimal/footer';
import content from '../../content.json';
import { icons } from 'lucide-react';

export default async function MinimalHomePage() {
  return (
    <>
      <section id='hero'>
        <HeroSection
          heroDescriptionHeading={content.hero.heroDescriptionHeading}
          heroText={content.hero.heroText}
          heroDescription={content.hero.heroDescription}
          ctaText={content.hero.ctaText}
          href={content.hero.href}
          product={content.metadata.product}
        />
      </section>

      <section id='problem'>
        <ProblemSection
          title={content.problem.title}
          subtitle={content.problem.subtitle}
          resultSubtitle={content.problem.resultSubtitle}
          cards={content.problem.cards.map((card) => ({
            title: card.title,
            description: card.description,
            icon: card.icon as keyof typeof icons,
          }))}
          result={content.problem.result}
        />
      </section>

      <section id='solution'>
        <SolutionSection
          title={content.solution.title}
          subtitle={content.solution.subtitle}
          ctaText={content.solution.cta}
          steps={content.solution.steps}
          href={content.hero.href}
          product={content.metadata.product}
        />
      </section>

      <section id='benefits'>
        <BenefitsSection
          title={content.benefits.title}
          description={content.benefits.description}
          cards={content.benefits.cards}
          bottomSection={content.benefits.bottomSection}
        />
      </section>

      <section id='faq'>
        <FaqSection
          title={content.faq.title}
          subtitle={content.faq.subtitle}
          faqs={content.faq.items}
        />
      </section>

      <section id='cta'>
        <CtaSection
          title={content.cta.title}
          description={content.cta.description}
          primaryButtonText={content.cta.primaryButtonText}
          secondaryButtonText={content.cta.secondaryButtonText}
          primaryHref={content.hero.href}
          product={content.metadata.product}
          secondaryCtaText={content.cta.secondaryButtonText}
          secondaryHref={content.hero.href}
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
