import Image from "next/image";
import { ArrowRightIcon, Building2Icon, FactoryIcon, LandmarkIcon, StoreIcon } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SiteHeader } from "@/components/site-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { commitments, sectors, serviceGroups, site } from "@/lib/site";

const sectorIcons = {
  building: Building2Icon,
  store: StoreIcon,
  factory: FactoryIcon,
  landmark: LandmarkIcon,
};

const serviceNumbers = new Map(serviceGroups.flatMap((group) => group.services).map((service, index) => [service.name, index + 1]));

const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const heading =
  "font-heading text-4xl leading-none font-bold tracking-tight uppercase text-balance sm:text-5xl lg:text-6xl";

export default function Home() {
  const { email, phone, address, abn } = site.contact;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.name,
    url: site.url,
    description: site.supportLine,
  };

  return (
    <>
      <SiteHeader />
      <main id="top" className="flex-1">
        <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-primary text-primary-foreground">
          <Image src="/images/hero-tower.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/85 to-primary/40" />
          <div className={`${container} pt-24 pb-14 sm:pb-20`}>
            <Badge className="mb-6 h-auto rounded-none bg-signal px-3 py-1.5 text-sm font-semibold whitespace-normal text-signal-foreground">
              {site.tagline}
            </Badge>
            <h1 className="font-heading text-6xl leading-[0.92] font-bold tracking-tight uppercase sm:text-7xl lg:text-8xl xl:text-[7.5rem]">
              {site.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 sm:text-xl">
              {site.supportLine}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="#contact" />}
                nativeButton={false}
                className="h-12 bg-signal px-6 text-base font-semibold text-signal-foreground hover:bg-signal/85"
              >
                Discuss your project
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
              <Button
                render={<a href="#services" />}
                nativeButton={false}
                variant="outline"
                className="h-12 border-white/40 bg-transparent px-6 text-base font-semibold text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                View services
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 sm:py-28">
          <div className={container}>
            <div className="grid gap-5 lg:grid-cols-2 lg:items-end">
              <h2 className={heading}>Every trade, one point of delivery</h2>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
                From structure through to supervision and inspections, we bring the work together under one partner.
              </p>
            </div>

            <div className="mt-14 space-y-12">
              {serviceGroups.map((group) => (
                <div key={group.title} className="grid gap-4 lg:grid-cols-[14rem_1fr] lg:gap-8">
                  <h3 className="border-t-2 border-primary pt-3 font-heading text-xl font-bold uppercase">
                    {group.title}
                  </h3>
                  <ul className="grid border-t sm:grid-cols-2 xl:grid-cols-3">
                    {group.services.map((service) => (
                        <li key={service.name} className="flex gap-4 border-b p-5">
                          <span className="pt-1 text-sm font-semibold text-muted-foreground tabular-nums">
                            {String(serviceNumbers.get(service.name)).padStart(2, "0")}
                          </span>
                          <div>
                            <p className="font-heading text-2xl font-semibold">{service.name}</p>
                            <p className="mt-1 text-muted-foreground">{service.detail}</p>
                          </div>
                        </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 text-muted-foreground lg:pl-[16rem]">And associated construction services.</p>
          </div>
        </section>

        <section id="about" className="border-y bg-card py-20 sm:py-28">
          <div className={`${container} grid gap-12 lg:grid-cols-2 lg:gap-16`}>
            <div className="relative min-h-80 overflow-hidden lg:min-h-full">
              <Image
                src="/images/site-survey.jpg"
                alt="Surveyor in a high-visibility vest using a total station on site"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className={heading}>Your projects, completed to your exact specifications</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  We specialise in high-quality, non-residential construction that meets the demands of modern business.
                  From industrial facilities to commercial spaces, we deliver precision, performance, and projects built
                  to last.
                </p>
                <p>
                  At the core of our work is a commitment to delivering commercial spaces that reflect the highest
                  standards of quality, functionality, and design. Each project is managed with precision and purpose.
                </p>
                <p>
                  Our approach is grounded in collaboration, efficiency, and an unwavering focus on safety and long-term
                  performance.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {sectors.map((sector) => {
                  const Icon = sectorIcons[sector.icon];
                  return (
                    <Card key={sector.name} size="sm" className="bg-background">
                      <CardHeader>
                        <Icon aria-hidden className="size-6 text-primary" />
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="font-heading text-xl! font-semibold">{sector.name}</CardTitle>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="delivery" className="bg-primary py-20 text-primary-foreground sm:py-28">
          <div className={`${container} grid gap-10 lg:grid-cols-2 lg:gap-16`}>
            <h2 className={heading}>How we deliver</h2>
            <Accordion defaultValue={[commitments[0].title]}>
              {commitments.map((item) => (
                <AccordionItem key={item.title} value={item.title} className="border-white/20 not-last:border-b">
                  <AccordionTrigger className="py-5 font-heading text-2xl font-semibold hover:no-underline **:data-[slot=accordion-trigger-icon]:text-signal">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-primary-foreground/80">
                    {item.body}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact" className="py-20 sm:py-28">
          <div className={`${container} grid gap-10 lg:grid-cols-2 lg:gap-16`}>
            <div>
              <h2 className={heading}>Talk to us about your next project</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Tell us what you are building and which trades you need.
              </p>
              {(email || phone || address) && (
                <ul className="mt-8 space-y-2 text-lg">
                  {phone && (
                    <li>
                      <a href={`tel:${phone.replace(/\s/g, "")}`} className="font-medium underline-offset-4 hover:underline">
                        {phone}
                      </a>
                    </li>
                  )}
                  {email && (
                    <li>
                      <a href={`mailto:${email}`} className="font-medium underline-offset-4 hover:underline">
                        {email}
                      </a>
                    </li>
                  )}
                  {address && <li>{address}</li>}
                </ul>
              )}
            </div>
            <Card>
              <CardContent className="p-2 sm:p-4">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-8 text-sm text-primary-foreground/75">
        <div className={container}>
          <p className="font-heading text-xl font-bold tracking-wide text-primary-foreground uppercase">{site.name}</p>
          <Separator className="my-4 bg-white/15" />
          <p>
            {site.name} © {new Date().getFullYear()}. All rights reserved.
            {abn && ` ABN ${abn}`}
          </p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
