import { useEffect } from "react";
import content from "@/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hourglass, Hand, Shuffle, Thermometer, Sparkles, Feather, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CorporateHome() {
  useEffect(() => {
    document.title = `${content.metadata.title} — Professional`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', content.metadata.description);
  }, []);

  return (
    <div className="theme-corporate min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-card/60 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="/" className="font-semibold">snipmint</a>
          <nav className="flex gap-4 text-sm">
            <a href="/v/corporate" className="text-muted-foreground hover:text-foreground">Corporate</a>
            <a href="/v/friendly" className="text-muted-foreground hover:text-foreground">Friendly</a>
            <a href="/v/technical" className="text-muted-foreground hover:text-foreground">Technical</a>
            <a href="/v/playful" className="text-muted-foreground hover:text-foreground">Playful</a>
            <a href="/v/minimal" className="text-muted-foreground hover:text-foreground">Minimal</a>
          </nav>
          <Button>{content.hero.ctaText}</Button>
        </div>
      </header>
      <main>
        {/* Hero */}
        <section id="hero" className="container mx-auto grid lg:grid-cols-2 gap-10 items-center py-16">
          <div>
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">{content.hero.heroDescriptionHeading}</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">{content.hero.heroText}</h1>
            <p className="mt-4 text-muted-foreground max-w-xl">{content.hero.heroDescription}</p>
            <div className="mt-6 flex items-center gap-3">
              <Button>{content.hero.ctaText} <ArrowRight className="ml-2 h-4 w-4" /></Button>
              <a href="#solution" className="text-sm text-primary underline underline-offset-4">Learn how it works</a>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <ol className="space-y-4 text-sm">
              {content.solution.steps.map((s) => (
                <li key={s.number} className="flex gap-3">
                  <span className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">{s.number}</span>
                  <div>
                    <p className="font-medium">{s.title}</p>
                    <p className="text-muted-foreground">{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="bg-muted/30 py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold">{content.problem.title}</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">{content.problem.subtitle}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[{Icon:Hourglass, ...content.problem.cards[0]}, {Icon:Hand, ...content.problem.cards[1]}, {Icon:Shuffle, ...content.problem.cards[2]}].map((c, i) => (
                <div key={i} className="rounded-xl border bg-card p-6 shadow-sm">
                  <div className="mb-4 h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center">
                    <c.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-medium">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-lg border bg-card p-6 text-center">
              <p className="text-sm text-muted-foreground">{content.problem.resultSubtitle}</p>
              <p className="mt-1 font-semibold">{content.problem.result}</p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section id="solution" className="container mx-auto py-16">
          <div className="mb-8">
            <span className="text-xs rounded-full bg-secondary px-2 py-1">{content.solution.badge}</span>
            <h2 className="mt-3 text-3xl font-semibold">{content.solution.title}</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">{content.solution.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 h-full">
            <div className="space-y-6 flex flex-col">
              {content.solution.steps.slice(0, 2).map((s) => (
                <div key={s.number} className="rounded-xl border bg-card p-6 flex-1">
                  <div className="flex gap-3 h-full">
                    <span className="mt-1 h-6 w-6 rounded-full bg-primary/10 text-primary text-xs grid place-items-center flex-shrink-0">{s.number}</span>
                    <div className="flex flex-col">
                      <p className="font-medium">{s.title}</p>
                      <p className="text-sm text-muted-foreground flex-1">{s.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6 flex flex-col">
              {content.solution.steps.slice(2).map((s) => (
                <div key={s.number} className="rounded-xl border bg-card p-6 flex-1">
                  <div className="flex gap-3 h-full">
                    <span className="mt-1 h-6 w-6 rounded-full bg-primary/10 text-primary text-xs grid place-items-center flex-shrink-0">{s.number}</span>
                    <div className="flex flex-col">
                      <p className="font-medium">{s.title}</p>
                      <p className="text-sm text-muted-foreground flex-1">{s.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8"><Button>{content.solution.cta} <ArrowRight className="ml-2 h-4 w-4"/></Button></div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="bg-muted/30 py-16">
          <div className="container mx-auto">
            <span className="text-xs rounded-full bg-secondary px-2 py-1">{content.benefits.badge}</span>
            <h2 className="mt-3 text-3xl font-semibold">{content.benefits.title}</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">{content.benefits.description}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[{Icon:Thermometer, ...content.benefits.cards[0]},{Icon:Sparkles, ...content.benefits.cards[1]},{Icon:Feather, ...content.benefits.cards[2]}].map((c,i)=> (
                <article key={i} className="rounded-xl border bg-card p-6 shadow-sm">
                  <div className="mb-4 h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center"><c.Icon className="h-5 w-5"/></div>
                  <h3 className="font-medium">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                  <ul className="mt-4 space-y-2">
                    {c.benefits.map((b:string,bi:number)=> (
                      <li key={bi} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary"/> <span className="text-muted-foreground">{b}</span></li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-lg border bg-card p-6">
              <h4 className="font-medium">{content.benefits.bottomSection.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{content.benefits.bottomSection.description}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container mx-auto py-16">
          <div className="max-w-2xl">
            <span className="text-xs rounded-full bg-secondary px-2 py-1">{content.faq.badge}</span>
            <h2 className="mt-3 text-3xl font-semibold">{content.faq.title}</h2>
            <p className="mt-2 text-muted-foreground">{content.faq.subtitle}</p>
          </div>
          <div className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              {content.faq.items.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{f.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="relative overflow-hidden py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/0"/>
          <div className="container relative mx-auto text-center">
            <h2 className="text-3xl font-semibold">{content.cta.title}</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{content.cta.description}</p>
            <div className="mt-6 flex justify-center gap-3">
              <Button>{content.cta.primaryButtonText}</Button>
              <Button variant="secondary">{content.cta.secondaryButtonText}</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/60">
        <div className="container mx-auto py-8 text-sm text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} {content.footer.companyName}</p>
          <p>{content.footer.description}</p>
        </div>
      </footer>
    </div>
  );
}
