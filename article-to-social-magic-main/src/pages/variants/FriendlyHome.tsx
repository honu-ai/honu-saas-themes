import { useEffect } from "react";
import content from "@/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hourglass, Hand, Shuffle, Thermometer, Sparkles, Feather, SmilePlus, Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FriendlyHome() {
  useEffect(() => {
    document.title = `${content.metadata.title} — Friendly`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', content.metadata.description);
  }, []);

  return (
    <div className="theme-friendly min-h-screen bg-background text-foreground">
      <header className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-b backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="/" className="font-semibold hover:text-primary transition-colors">snipmint</a>
          <nav className="flex gap-4 text-sm">
            <a href="/v/corporate" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm px-1">Corporate</a>
            <a href="/v/friendly" className="font-medium text-primary">Friendly</a>
            <a href="/v/technical" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm px-1">Technical</a>
            <a href="/v/playful" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm px-1">Playful</a>
            <a href="/v/minimal" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm px-1">Minimal</a>
          </nav>
          <Button className="rounded-full hover-scale">{content.hero.ctaText}</Button>
        </div>
      </header>
      <main>
        {/* Hero */}
        <section id="hero" className="relative overflow-hidden">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"/>
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"/>
          <div className="container mx-auto py-20 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow">
              <SmilePlus className="h-4 w-4 text-primary"/>
              <span className="text-sm">{content.hero.heroDescriptionHeading}</span>
            </div>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight">{content.hero.heroText}</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{content.hero.heroDescription}</p>
            <div className="mt-8 flex justify-center gap-4">
              <Button className="rounded-full px-6 animate-slide-up hover-scale">{content.hero.ctaText}<ArrowRight className="ml-2 h-4 w-4"/></Button>
              <Button variant="outline" className="rounded-full hover-scale">Learn More</Button>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="bg-muted/40 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold">{content.problem.title}</h2>
            <p className="mt-2 text-muted-foreground">{content.problem.subtitle}</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[{Icon:Hourglass, ...content.problem.cards[0]}, {Icon:Hand, ...content.problem.cards[1]}, {Icon:Shuffle, ...content.problem.cards[2]}].map((c, i) => (
                <div key={i} className="rounded-3xl bg-card p-6 shadow border">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary"><c.Icon className="h-5 w-5"/></div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">{content.problem.resultSubtitle}</p>
            <p className="text-center font-semibold">{content.problem.result}</p>
          </div>
        </section>

        {/* Solution */}
        <section id="solution" className="container mx-auto py-16">
          <div className="text-center">
            <span className="text-xs rounded-full bg-secondary px-3 py-1">{content.solution.badge}</span>
            <h2 className="mt-3 text-3xl font-bold">{content.solution.title}</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{content.solution.subtitle}</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.solution.steps.map((s)=> (
              <div key={s.number} className="rounded-2xl border bg-card p-5">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary font-semibold">{s.number}</div>
                <h3 className="mt-3 font-medium">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center"><Button className="rounded-full px-6">{content.solution.cta}</Button></div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="bg-muted/40 py-16">
          <div className="container mx-auto">
            <span className="text-xs rounded-full bg-secondary px-3 py-1">{content.benefits.badge}</span>
            <h2 className="mt-3 text-3xl font-bold">{content.benefits.title}</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">{content.benefits.description}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[{Icon:Thermometer, ...content.benefits.cards[0]},{Icon:Sparkles, ...content.benefits.cards[1]},{Icon:Feather, ...content.benefits.cards[2]}].map((c,i)=> (
                <div key={i} className="rounded-3xl bg-card p-6 border">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary"><c.Icon className="h-5 w-5"/></div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {c.benefits.map((b:string,bi:number)=> (
                      <li key={bi} className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary"/> {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-3xl bg-card p-6 border">
              <h4 className="font-semibold">{content.benefits.bottomSection.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{content.benefits.bottomSection.description}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container mx-auto py-16">
          <div className="text-center">
            <span className="text-xs rounded-full bg-secondary px-3 py-1">{content.faq.badge}</span>
            <h2 className="mt-3 text-3xl font-bold">{content.faq.title}</h2>
            <p className="mt-2 text-muted-foreground">{content.faq.subtitle}</p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl">
            <Accordion type="single" collapsible>
              {content.faq.items.map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`}>
                  <AccordionTrigger className="text-left">{f.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-16">
          <div className="container mx-auto text-center rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 p-10">
            <h2 className="text-3xl font-bold">{content.cta.title}</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{content.cta.description}</p>
            <div className="mt-6 flex justify-center gap-4">
              <Button className="rounded-full px-6">{content.cta.primaryButtonText}</Button>
              <Button variant="secondary" className="rounded-full">{content.cta.secondaryButtonText}</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container mx-auto py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {content.footer.companyName} — {content.footer.description}
        </div>
      </footer>
    </div>
  );
}
