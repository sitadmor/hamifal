"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MonoLabel } from "@/components/shared/mono-label";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-border p-8 md:p-10">
        <MonoLabel className="mb-4 block text-foreground">Received</MonoLabel>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground">
          Thank you. This form is a front-end placeholder for now. Please email
          hello@hamifal.com directly and we will respond.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border p-6 md:p-10">
      <div className="space-y-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="label-mono text-muted-foreground">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              required
              className="h-11 rounded-none border-border bg-transparent px-0 shadow-none focus-visible:border-accent focus-visible:ring-0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="label-mono text-muted-foreground">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="h-11 rounded-none border-border bg-transparent px-0 shadow-none focus-visible:border-accent focus-visible:ring-0"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="organization"
            className="label-mono text-muted-foreground"
          >
            Organization / Venture
          </Label>
          <Input
            id="organization"
            name="organization"
            className="h-11 rounded-none border-border bg-transparent px-0 shadow-none focus-visible:border-accent focus-visible:ring-0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="label-mono text-muted-foreground">
            What should we build?
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={6}
            className="rounded-none border-border bg-transparent px-0 shadow-none focus-visible:border-accent focus-visible:ring-0"
          />
        </div>

        <Button
          type="submit"
          variant="outline"
          className="h-11 rounded-none border-foreground bg-transparent px-6 label-mono text-foreground hover:bg-foreground hover:text-background"
        >
          Send message →
        </Button>
      </div>
    </form>
  );
}
