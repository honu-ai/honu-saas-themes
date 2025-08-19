import { useEffect } from "react";
import content from "@/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hourglass, Hand, Shuffle, Thermometer, Sparkles, Feather, Wand2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PlayfulHome() {
  useEffect(() => {
    document.title = `${content.metadata.title} — Playful`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', content.metadata.description);
  }, []);

  return (
    <div className="theme-playful min-h-screen bg-background text-foreground">
      <header className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/10 animate-fade-in"/>
        <div className="container mx-auto flex items-center justify-between py-5">
          <a href="/" className="font-semibold hover:text-primary transition-colors">snipmint</a>
          <nav className="flex gap-4 text-sm">
            <a href="/v/corporate" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm px-1">Corporate</a>
            <a href="/v/friendly" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm px-1">Friendly</a>
            <a href="/v/technical" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm px-1">Technical</a>
            <a href="/v/playful" className="font-medium text-primary">Playful</a>
            <a href="/v/minimal" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm px-1">Minimal</a>
          </nav>
          <Button className="animate-[pulse_2s_ease-in-out_infinite] rounded-full hover-scale">{content.hero.ctaText}</Button>
        </div>
      </header>
      <main>
        {/* Hero */}
        <section id="hero" className="relative">
          <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl"/>
          <div className="container mx-auto py-20 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow">
              <Wand2 className="h-4 w-4 text-primary"/> {content.hero.heroDescriptionHeading}
            </div>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight">{content.hero.heroText}</h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">{content.hero.heroDescription}</p>
            <div className="mt-8 flex justify-center gap-4 animate-slide-up">
              <Button variant="premium" className="rounded-full px-6">{content.hero.ctaText} <ArrowRight className="ml-2 h-4 w-4"/></Button>
              <Button variant="glass" className="rounded-full">Play Demo</Button>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold">{content.problem.title}</h2>
            <p className="mt-2 text-muted-foreground">{content.problem.subtitle}</p>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[{Icon:Hourglass, ...content.problem.cards[0]}, {Icon:Hand, ...content.problem.cards[1]}, {Icon:Shuffle, ...content.problem.cards[2]}].map((c, i) => (
                <div key={i} className="group rounded-3xl border bg-card p-6 shadow hover:-translate-y-1 transition-transform">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary group-hover:rotate-6 transition"><c.Icon className="h-6 w-6"/></div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-sm text-muted-foreground">{content.problem.resultSubtitle}</div>
          </div>
        </section>

        {/* Solution */}
        <section id="solution" className="bg-muted/40 py-16">
          <div className="container mx-auto text-center">
            <span className="text-xs rounded-full bg-secondary px-3 py-1">{content.solution.badge}</span>
            <h2 className="mt-3 text-3xl font-bold">{content.solution.title}</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{content.solution.subtitle}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {content.solution.steps.map((s)=> (
                <div key={s.number} className="rounded-3xl bg-card p-6 border">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary font-semibold">{s.number}</div>
                  <h3 className="mt-3 font-medium">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8"><Button className="rounded-full px-6">{content.solution.cta}</Button></div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="py-16">
          <div className="container mx-auto">
            <span className="text-xs rounded-full bg-secondary px-3 py-1">{content.benefits.badge}</span>
            <h2 className="mt-3 text-3xl font-bold">{content.benefits.title}</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">{content.benefits.description}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[{Icon:Thermometer, ...content.benefits.cards[0]},{Icon:Sparkles, ...content.benefits.cards[1]},{Icon:Feather, ...content.benefits.cards[2]}].map((c,i)=> (
                <div key={i} className="rounded-3xl border bg-card p-6 shadow hover:shadow-lg transition-shadow">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary"><c.Icon className="h-6 w-6"/></div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {c.benefits.map((b:string,bi:number)=> (<li key={bi}>• {b}</li>))}
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
        <section id="faq" className="bg-muted/40 py-16">
          <div className="container mx-auto">
            <div className="text-center">
              <span className="text-xs rounded-full bg-secondary px-3 py-1">{content.faq.badge}</span>
              <h2 className="mt-3 text-3xl font-bold">{content.faq.title}</h2>
              <p className="mt-2 text-muted-foreground">{content.faq.subtitle}</p>
            </div>
            <div className="mx-auto mt-8 max-w-2xl">
              <Accordion type="single" collapsible>
                {content.faq.items.map((f, i) => (
                  <AccordionItem key={i} value={`p-${i}`}>
                    <AccordionTrigger className="text-left">{f.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="relative overflow-hidden py-16">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/20 opacity-70"/>
          <div className="container mx-auto text-center">
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
