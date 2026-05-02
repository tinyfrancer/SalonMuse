import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { team } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the talented stylists behind SalonMuse.",
};

export default function TeamPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Our Team</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Every stylist at SalonMuse brings passion, precision, and a genuine love for their craft.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {team.map((stylist) => (
          <div key={stylist.name} className="flex gap-5">
            {/* Avatar placeholder — replace with next/image when photos are ready */}
            <div className="w-20 h-20 shrink-0 rounded-full bg-muted flex items-center justify-center text-2xl font-medium text-muted-foreground">
              {stylist.name[0]}
            </div>
            <div>
              <p className="font-semibold text-lg leading-tight">{stylist.name}</p>
              <p className="text-sm text-muted-foreground mb-2">{stylist.title}</p>
              <p className="text-sm leading-relaxed mb-3">{stylist.bio}</p>
              <div className="flex flex-wrap gap-1">
                {stylist.specialties.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-xl font-semibold mb-3">Ready to book with one of us?</h2>
        <p className="text-muted-foreground mb-6">Pick your stylist and schedule online in seconds.</p>
        <Button render={<Link href="/booking" />}>
          Book an Appointment
        </Button>
      </div>
    </div>
  );
}
