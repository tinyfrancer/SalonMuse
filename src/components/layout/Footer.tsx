import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-secondary mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-lg font-semibold mb-2">SalonMuse</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where artistry meets community. Crafting looks you&apos;ll love.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-medium mb-3">Explore</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-foreground transition-colors">Services & Pricing</Link></li>
              <li><Link href="/gallery" className="hover:text-foreground transition-colors">Gallery</Link></li>
              <li><Link href="/team" className="hover:text-foreground transition-colors">Our Team</Link></li>
              <li><Link href="/booking" className="hover:text-foreground transition-colors">Book an Appointment</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium mb-3">Find Us</p>
            <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p>123 Main Street</p>
              <p>Your City, ST 00000</p>
              <p className="mt-2">
                <a href="tel:+15550000000" className="hover:text-foreground transition-colors">(555) 000-0000</a>
              </p>
              <p>
                <a href="mailto:hello@salonmuse.com" className="hover:text-foreground transition-colors">hello@salonmuse.com</a>
              </p>
            </address>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} SalonMuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
