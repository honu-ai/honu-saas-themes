import { icons } from 'lucide-react';
import HeroSection from '@/components/friendly/hero-section';
import ProblemSection from '@/components/friendly/problem-section';
import SolutionSection from '@/components/friendly/solution-section';
import BenefitsSection from '@/components/friendly/benefits-section';
import FaqSection from '@/components/friendly/faq-section';
import CtaSection from '@/components/friendly/cta-section';
import Footer from '@/components/friendly/footer';
import { parsePageContent, type SearchParams } from '@/lib/page-content';
import content from '../../content.json';

type PageProps = {
  searchParams: SearchParams;
};

export default async function FriendlyHomePage({ searchParams }: PageProps) {
  const pageData = parsePageContent(searchParams, content);
  return (
    <>
      <section id='hero'>
        <HeroSection
          heroDescriptionHeading={pageData.hero.heroDescriptionHeading}
          heroText={pageData.hero.heroText}
          heroDescription={pageData.hero.heroDescription}
          ctaText={pageData.hero.ctaText}
          product={pageData.metadata.product}
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
          cards={pageData.benefits.cards.map((card) => ({
            ...card,
            icon: card.icon as keyof typeof icons,
          }))}
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
