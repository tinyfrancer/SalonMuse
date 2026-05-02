import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { services, categoryLabels, type ServiceCategory } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Browse our full menu of haircuts, color services, and treatments with transparent pricing.",
};

const categories: ServiceCategory[] = ["cuts", "color", "treatments"];

export default function ServicesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Services &amp; Pricing</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Every service includes a consultation. Prices shown are starting rates — your stylist
          will confirm the final quote based on hair length and complexity.
        </p>
      </div>

      <div className="space-y-14">
        {categories.map((category) => {
          const categoryServices = services.filter((s) => s.category === category);
          return (
            <section key={category}>
              <h2 className="text-xl font-semibold mb-6">{categoryLabels[category]}</h2>
              <div className="space-y-0">
                {categoryServices.map((service, i) => (
                  <div key={service.name}>
                    <div className="flex items-start justify-between py-5 gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{service.name}</p>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                          {service.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{service.duration}</p>
                      </div>
                      <p className="font-medium text-sm shrink-0 pt-0.5">{service.price}</p>
                    </div>
                    {i < categoryServices.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-16 text-center bg-secondary rounded-xl py-10 px-6">
        <h2 className="text-xl font-semibold mb-3">Not sure what you need?</h2>
        <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
          Book a complimentary consultation and we&apos;ll help you find the perfect service.
        </p>
        <Button render={<Link href="/booking" />}>
          Book a Consultation
        </Button>
      </div>
    </div>
  );
}
