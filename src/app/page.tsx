import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data/services";
import { team } from "@/lib/data/team";

const featuredServices = services.slice(0, 4);
const featuredTeam = team.slice(0, 3);

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-secondary py-24 sm:py-36 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Boutique Hair Salon
          </p>
          <h1 className="text-5xl sm:text-6xl font-semibold italic leading-tight mb-4">
            Where Darkness<br />Becomes Art
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Precision cuts, transformative color, and bold styling for those who refuse the ordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" render={<Link href="/booking" />}>
              Book an Appointment
            </Button>
            <Button variant="outline" size="lg" render={<Link href="/services" />}>
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Our Services</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            From everyday cuts to transformative color — we do it all.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <Card key={service.name} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{service.price}</span>
                  <span className="text-muted-foreground">{service.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" render={<Link href="/services" />}>
            See All Services &amp; Pricing
          </Button>
        </div>
      </section>

      {/* Team teaser */}
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Meet the Team</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Passionate stylists dedicated to making you look and feel your best.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {featuredTeam.map((stylist) => (
              <div key={stylist.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center text-2xl font-medium text-muted-foreground">
                  {stylist.name[0]}
                </div>
                <p className="font-medium">{stylist.name}</p>
                <p className="text-sm text-muted-foreground mb-3">{stylist.title}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {stylist.specialties.slice(0, 2).map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" render={<Link href="/team" />}>
              Meet the Full Team
            </Button>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Ready for a New Look?</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Book your appointment online — it only takes a minute.
        </p>
        <Button size="lg" render={<Link href="/booking" />}>
          Book Now
        </Button>
      </section>
    </div>
  );
}
