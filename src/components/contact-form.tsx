"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { email } = site.contact;

  // No backend: the enquiry opens in the visitor's own email app.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Contact number: ${data.get("phone")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    const subject = `Website enquiry from ${data.get("name")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="name">Your name</Label>
        <Input id="name" name="name" autoComplete="name" required className="h-11 bg-background" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email address</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required className="h-11 bg-background" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Contact number</Label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" className="h-11 bg-background" />
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required className="bg-background" />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2">
        <Button type="submit" disabled={!email} className="h-12 px-6 text-base sm:w-fit">
          Send enquiry
        </Button>
        <p role="status" className="text-sm text-muted-foreground">
          {!email
            ? "Enquiries are not connected yet."
            : sent
              ? "Your email app should now be open with your enquiry ready to send."
              : "This opens your email app with your enquiry ready to send."}
        </p>
      </div>
    </form>
  );
}
