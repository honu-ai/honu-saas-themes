import { useEffect } from "react";
import content from "@/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hourglass, Hand, Shuffle, Thermometer, Sparkles, Feather } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function MinimalHome() {
  useEffect(() => {
    document.title = `${content.metadata.title} — Minimalist`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', content.metadata.description);
  }, []);

  return (
    <div className="theme-minimal min-h-screen bg-background text-foreground">
      <header className="border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="/" className="font-semibold tracking-tight hover:text-primary transition-colors">snipmint</a>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <a href="/v/corporate" className="hover:text-foreground transition-colors focus-ring rounded-sm px-1">Corporate</a>
            <a href="/v/friendly" className="hover:text-foreground transition-colors focus-ring rounded-sm px-1">Friendly</a>
            <a href="/v/technical" className="hover:text-foreground transition-colors focus-ring rounded-sm px-1">Technical</a>
            <a href="/v/playful" className="hover:text-foreground transition-colors focus-ring rounded-sm px-1">Playful</a>
            <a href="/v/minimal" className="text-foreground font-medium">Minimal</a>
          </nav>
          <Button size="sm" className="hover-scale">{content.hero.ctaText}</Button>
        </div>
      </header>
      <main>
        {/* Hero */}
        <section id="hero" className="container mx-auto py-20">
          <h1 className="text-5xl font-semibold tracking-tight max-w-3xl">{content.hero.heroText}</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">{content.hero.heroDescription}</p>
          <div className="mt-6 flex gap-3">
            <Button>{content.hero.ctaText} <ArrowRight className="ml-2 h-4 w-4"/></Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="border-t border-b bg-muted/20 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold">{content.problem.title}</h2>
            <p className="mt-2 text-muted-foreground">{content.problem.subtitle}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[{Icon:Hourglass, ...content.problem.cards[0]}, {Icon:Hand, ...content.problem.cards[1]}, {Icon:Shuffle, ...content.problem.cards[2]}].map((c, i) => (
                <div key={i} className="rounded-lg border bg-card p-6">
                  <div className="mb-3 h-8 w-8 grid place-items-center rounded bg-secondary text-secondary-foreground"><c.Icon className="h-4 w-4"/></div>
                  <h3 className="font-medium">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">{content.problem.resultSubtitle}</p>
          </div>
        </section>

        {/* Solution */}
        <section id="solution" className="container mx-auto py-16">
          <h2 className="text-3xl font-semibold">{content.solution.title}</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">{content.solution.subtitle}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.solution.steps.map((s)=> (
              <div key={s.number} className="rounded-lg border bg-card p-6">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded bg-secondary text-secondary-foreground text-sm">{s.number}</div>
                <h3 className="mt-3 font-medium">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8"><Button>{content.solution.cta}</Button></div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="border-t bg-muted/20 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold">{content.benefits.title}</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">{content.benefits.description}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[{Icon:Thermometer, ...content.benefits.cards[0]},{Icon:Sparkles, ...content.benefits.cards[1]},{Icon:Feather, ...content.benefits.cards[2]}].map((c,i)=> (
                <div key={i} className="rounded-lg border bg-card p-6">
                  <div className="mb-3 h-8 w-8 grid place-items-center rounded bg-secondary text-secondary-foreground"><c.Icon className="h-4 w-4"/></div>
                  <h3 className="font-medium">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                  <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground">
                    {c.benefits.map((b:string,bi:number)=> (<li key={bi}>{b}</li>))}
                  </ul>
                </div>
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
          <h2 className="text-3xl font-semibold">{content.faq.title}</h2>
          <p className="mt-2 text-muted-foreground">{content.faq.subtitle}</p>
          <div className="mt-6 max-w-2xl">
            <Accordion type="single" collapsible>
              {content.faq.items.map((f, i) => (
                <AccordionItem key={i} value={`m-${i}`}>
                  <AccordionTrigger className="text-left">{f.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="border-t py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent"/>
          <div className="container mx-auto text-center relative">
            <h2 className="text-3xl font-semibold">{content.cta.title}</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{content.cta.description}</p>
            <div className="mt-6 flex justify-center gap-3">
              <Button className="hover-scale">{content.cta.primaryButtonText}</Button>
              <Button variant="outline" className="hover-scale">{content.cta.secondaryButtonText}</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container mx-auto py-8 text-sm text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} {content.footer.companyName}</p>
          <p>{content.footer.description}</p>
        </div>
      </footer>
    </div>
  );
}
