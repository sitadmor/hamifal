import { Container } from "@/components/layout/container";
import { MonoLabel } from "@/components/shared/mono-label";
import { Reveal } from "@/components/shared/reveal";

const steps = [
  "Get close to the problem",
  "Understand the customer",
  "Build the smallest useful product",
  "Put it in real hands",
  "Learn and iterate",
  "Build the operating system",
  "Form the company",
];

export function HowWeBuild() {
  return (
    <section className="border-b border-border bg-surface/40">
      <Container className="py-20 md:py-28">
        <Reveal>
          <div className="site-grid gap-y-10">
            <div className="col-span-12 md:col-span-7">
              <MonoLabel className="mb-4 block">How We Build</MonoLabel>
              <h2 className="font-display text-4xl tracking-tight text-balance md:text-6xl">
                Close to the problem. Fast to the market.
              </h2>
            </div>

            <div className="col-span-12 max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8 md:self-end md:text-lg">
              <p>
                We start with a real problem, get close to the people who live
                it, and build something useful for real users early.
              </p>
              <p className="text-foreground">
                Customers shape the product. The product shapes the company.
              </p>
            </div>

            <div className="col-span-12 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="border-b border-border py-6 sm:px-5 sm:[&:not(:nth-child(2n))]:border-r lg:[&:not(:nth-child(2n))]:border-r-0 lg:[&:not(:nth-child(4n))]:border-r xl:[&:not(:nth-child(4n))]:border-r-0 xl:[&:not(:nth-child(7n))]:border-r"
                >
                  <MonoLabel className="mb-4 block text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </MonoLabel>
                  <p className="font-display text-xl tracking-tight text-balance md:text-2xl">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
