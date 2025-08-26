import { icons } from 'lucide-react';
import HeroSection from '@/components/corporate/hero-section';
import ProblemSection from '@/components/corporate/problem-section';
import SolutionSection from '@/components/corporate/solution-section';
import BenefitsSection from '@/components/corporate/benefits-section';
import FaqSection from '@/components/corporate/faq-section';
import CtaSection from '@/components/corporate/cta-section';
import Footer from '@/components/corporate/footer';
import { parsePageContent, type SearchParams } from '@/lib/page-content';
import content from '../../content.json';

type PageProps = {
  searchParams: SearchParams;
};

export default async function CorporateHomePage({ searchParams }: PageProps) {
  const pageData = await parsePageContent(searchParams, content);
  return (
    <>
      <section id='hero'>
        <HeroSection
          ctaText={pageData.hero.ctaText}
          heroText={pageData.hero.heroText}
          heroDescriptionHeading={pageData.hero.heroDescriptionHeading}
          heroDescription={pageData.hero.heroDescription}
          product={pageData.metadata.product}
          steps={pageData.solution.steps}
        />
      </section>

      <section id='problem'>
        <ProblemSection
          title={pageData.problem.title}
          subtitle={pageData.problem.subtitle}
          result={pageData.problem.result}
          resultSubtitle={pageData.problem.resultSubtitle}
          cards={pageData.problem.cards.map((card) => ({
            title: card.title,
            description: card.description,
            icon: card.icon as keyof typeof icons,
          }))}
        />
      </section>

      <section id='solution'>
        <SolutionSection
          badge={pageData.solution.badge}
          title={pageData.solution.title}
          subtitle={pageData.solution.subtitle}
          cta={pageData.solution.cta}
          steps={pageData.solution.steps}
          product={pageData.metadata.product}
        />
      </section>

      <section id='benefits'>
        <BenefitsSection
          badge={pageData.benefits.badge}
          title={pageData.benefits.title}
          description={pageData.benefits.description}
          cards={pageData.benefits.cards}
          bottomSection={pageData.benefits.bottomSection}
        />
      </section>

      <section id='faq'>
        <FaqSection
          faqs={pageData.faq.items}
          title={pageData.faq.title}
          subtitle={pageData.faq.subtitle}
          badge={pageData.faq.badge}
        />
      </section>

      <section id='cta'>
        <CtaSection
          title={pageData.cta.title}
          description={pageData.cta.description}
          primaryButtonText={pageData.cta.primaryButtonText}
          secondaryButtonText={pageData.cta.secondaryButtonText}
          product={pageData.metadata.product}
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
