import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold">Choose a HomePage Variation</h1>
        <p className="mt-2 text-muted-foreground">Preview five distinct styles built with the same content.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/v/corporate" className="rounded-lg border bg-card p-6 hover:bg-accent/30">Professional / Corporate</Link>
          <Link to="/v/friendly" className="rounded-lg border bg-card p-6 hover:bg-accent/30">Friendly / Approachable</Link>
          <Link to="/v/technical" className="rounded-lg border bg-card p-6 hover:bg-accent/30">Technical / Developer-Focused</Link>
          <Link to="/v/playful" className="rounded-lg border bg-card p-6 hover:bg-accent/30">Playful / Creative</Link>
          <Link to="/v/minimal" className="rounded-lg border bg-card p-6 hover:bg-accent/30">Minimalist / Elegant</Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
