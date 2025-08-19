import { useEffect } from "react";
import content from "@/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hourglass, Hand, Shuffle, Thermometer, Sparkles, Feather, TerminalSquare, Code2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function TechnicalHome() {
  useEffect(() => {
    document.title = `${content.metadata.title} — Technical`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', content.metadata.description);
  }, []);

  return (
    <div className="theme-technical min-h-screen bg-background text-foreground">
      <header className="border-b bg-card/60 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between py-3">
          <a href="/" className="font-mono text-sm hover:text-primary transition-colors">snipmint</a>
          <nav className="flex gap-4 text-xs font-mono">
            <a href="/v/corporate" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm px-1">Corporate</a>
            <a href="/v/friendly" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm px-1">Friendly</a>
            <a href="/v/technical" className="font-semibold text-primary">Technical</a>
            <a href="/v/playful" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm px-1">Playful</a>
            <a href="/v/minimal" className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm px-1">Minimal</a>
          </nav>
          <Button size="sm" className="font-mono hover-scale">{content.hero.ctaText}</Button>
        </div>
      </header>
      <main>
        {/* Hero */}
        <section id="hero" className="container mx-auto py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded border px-2 py-1 text-xs font-mono text-muted-foreground"><Code2 className="h-4 w-4"/> {content.hero.heroDescriptionHeading}</div>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">{content.hero.heroText}</h1>
              <p className="mt-3 text-muted-foreground max-w-xl">{content.hero.heroDescription}</p>
              <div className="mt-6 flex gap-3">
                <Button>{content.hero.ctaText} <ArrowRight className="ml-2 h-4 w-4"/></Button>
                <Button variant="secondary">Docs</Button>
              </div>
            </div>
            <pre className="rounded-xl border bg-card p-6 text-sm font-mono leading-relaxed shadow-lg hover:shadow-xl transition-shadow">
<span className="text-muted-foreground"># snipmint CLI</span>
<span className="text-primary">$ paste &lt;article-url&gt; | snipmint --platforms</span> <span className="text-accent">linkedin,x,facebook,bluesky</span>
<span className="text-green-400">✔</span> Parse article
<span className="text-green-400">✔</span> Extract insights  
<span className="text-green-400">✔</span> Generate posts
<span className="text-primary">➜</span> Ready to copy &amp; publish
            </pre>
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="bg-muted/20 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold">{content.problem.title}</h2>
            <p className="mt-2 text-muted-foreground">{content.problem.subtitle}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[{Icon:Hourglass, ...content.problem.cards[0]}, {Icon:Hand, ...content.problem.cards[1]}, {Icon:Shuffle, ...content.problem.cards[2]}].map((c, i) => (
                <div key={i} className="group rounded-xl border bg-card p-6 shadow-sm">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded bg-primary/10 text-primary"><c.Icon className="h-5 w-5"/></div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border bg-card p-6 text-center font-mono text-sm text-muted-foreground">{content.problem.result} — {content.problem.resultSubtitle}</div>
          </div>
        </section>

        {/* Solution */}
        <section id="solution" className="container mx-auto py-16">
          <div className="mb-8">
            <span className="text-[10px] font-mono rounded bg-secondary px-2 py-1">{content.solution.badge}</span>
            <h2 className="mt-3 text-3xl font-semibold">{content.solution.title}</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">{content.solution.subtitle}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
            {content.solution.steps.map((s)=> (
              <div key={s.number} className="rounded-xl border bg-card p-5">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded bg-primary/10 text-primary text-xs font-mono">{s.number}</div>
                <h3 className="mt-3 font-medium">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8"><Button>{content.solution.cta}</Button></div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="bg-muted/20 py-16">
          <div className="container mx-auto">
            <span className="text-[10px] font-mono rounded bg-secondary px-2 py-1">{content.benefits.badge}</span>
            <h2 className="mt-3 text-3xl font-semibold">{content.benefits.title}</h2>
            <p className="mt-1 text-muted-foreground max-w-2xl">{content.benefits.description}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[{Icon:Thermometer, ...content.benefits.cards[0]},{Icon:Sparkles, ...content.benefits.cards[1]},{Icon:Feather, ...content.benefits.cards[2]}].map((c,i)=> (
                <div key={i} className="rounded-xl border bg-card p-6">
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded bg-primary/10 text-primary"><c.Icon className="h-5 w-5"/></div>
                  <h3 className="font-medium">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                  <ul className="mt-4 space-y-1 text-sm font-mono text-muted-foreground">
                    {c.benefits.map((b:string,bi:number)=> (<li key={bi}>$ {b}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-xl border bg-card p-6">
              <h4 className="font-medium">{content.benefits.bottomSection.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{content.benefits.bottomSection.description}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container mx-auto py-16">
          <span className="text-[10px] font-mono rounded bg-secondary px-2 py-1">{content.faq.badge}</span>
          <h2 className="mt-3 text-3xl font-semibold">{content.faq.title}</h2>
          <p className="mt-1 text-muted-foreground">{content.faq.subtitle}</p>
          <div className="mt-6">
            <Accordion type="single" collapsible>
              {content.faq.items.map((f, i) => (
                <AccordionItem key={i} value={`t-${i}`}>
                  <AccordionTrigger className="text-left font-mono">{f.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-16">
          <div className="container mx-auto rounded-xl border bg-gradient-to-br from-primary/10 to-transparent p-10 text-center">
            <h2 className="text-3xl font-semibold">{content.cta.title}</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{content.cta.description}</p>
            <div className="mt-6 flex justify-center gap-3">
              <Button>{content.cta.primaryButtonText}</Button>
              <Button variant="secondary">{content.cta.secondaryButtonText}</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container mx-auto py-8 text-xs font-mono text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} {content.footer.companyName}</span>
          <span>{content.footer.description}</span>
        </div>
      </footer>
    </div>
  );
}
