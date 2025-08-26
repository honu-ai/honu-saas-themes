import { icons } from 'lucide-react';
import HeroSection from '@/components/minimal/hero-section';
import ProblemSection from '@/components/minimal/problem-section';
import SolutionSection from '@/components/minimal/solution-section';
import BenefitsSection from '@/components/minimal/benefits-section';
import FaqSection from '@/components/minimal/faq-section';
import CtaSection from '@/components/minimal/cta-section';
import Footer from '@/components/minimal/footer';
import { parsePageContent, type SearchParams } from '@/lib/page-content';
import content from '../../content.json';

type PageProps = {
  searchParams: SearchParams;
};

export default async function MinimalHomePage({ searchParams }: PageProps) {
  const pageData = await parsePageContent(searchParams, content);
  return (
    <>
      <section id='hero'>
        <HeroSection
          heroDescriptionHeading={pageData.hero.heroDescriptionHeading}
          heroText={pageData.hero.heroText}
          heroDescription={pageData.hero.heroDescription}
          ctaText={pageData.hero.ctaText}
          href={pageData.hero.href}
          product={pageData.metadata.product}
        />
      </section>

      <section id='problem'>
        <ProblemSection
          title={pageData.problem.title}
          subtitle={pageData.problem.subtitle}
          resultSubtitle={pageData.problem.resultSubtitle}
          cards={pageData.problem.cards.map((card) => ({
            title: card.title,
            description: card.description,
            icon: card.icon as keyof typeof icons,
          }))}
          result={pageData.problem.result}
        />
      </section>

      <section id='solution'>
        <SolutionSection
          title={pageData.solution.title}
          subtitle={pageData.solution.subtitle}
          ctaText={pageData.solution.cta}
          steps={pageData.solution.steps}
          href={pageData.hero.href}
          product={pageData.metadata.product}
        />
      </section>

      <section id='benefits'>
        <BenefitsSection
          title={pageData.benefits.title}
          description={pageData.benefits.description}
          cards={pageData.benefits.cards}
          bottomSection={pageData.benefits.bottomSection}
        />
      </section>

      <section id='faq'>
        <FaqSection
          title={pageData.faq.title}
          subtitle={pageData.faq.subtitle}
          faqs={pageData.faq.items}
        />
      </section>

      <section id='cta'>
        <CtaSection
          title={pageData.cta.title}
          description={pageData.cta.description}
          primaryButtonText={pageData.cta.primaryButtonText}
          secondaryButtonText={pageData.cta.secondaryButtonText}
          primaryHref={pageData.hero.href}
          product={pageData.metadata.product}
          secondaryCtaText={pageData.cta.secondaryButtonText}
        />
      </section>

      <section>
        <Footer
          companyName={pageData.footer.companyName}
          description={pageData.footer.description}
        />
      </section>
    </>
  );
}
