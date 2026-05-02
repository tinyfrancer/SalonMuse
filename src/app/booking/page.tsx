import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Schedule your next appointment at SalonMuse.",
};

// TODO: Replace CALENDLY_URL with your real Calendly (or Acuity) scheduling link.
// e.g. "https://calendly.com/your-salon/appointment"
const CALENDLY_URL = "";

export default function BookingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Book an Appointment</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          We&apos;d love to see you. Choose a time that works for you below, or reach out directly.
        </p>
      </div>

      {CALENDLY_URL ? (
        /* Inline Calendly widget — rendered once CALENDLY_URL is set */
        <div
          className="calendly-inline-widget w-full rounded-xl overflow-hidden border border-border"
          data-url={CALENDLY_URL}
          style={{ minWidth: 320, height: 700 }}
        />
      ) : (
        /* Placeholder shown until a booking link is configured */
        <div className="rounded-xl border border-dashed border-border bg-secondary p-10 text-center space-y-3">
          <p className="font-medium">Online Booking Coming Soon</p>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Set <code className="bg-muted px-1 rounded text-xs">CALENDLY_URL</code> in{" "}
            <code className="bg-muted px-1 rounded text-xs">src/app/booking/page.tsx</code> to
            enable inline scheduling via Calendly or Acuity.
          </p>
          <Button
            variant="outline"
            className="mt-2"
            render={<a href="https://calendly.com" target="_blank" rel="noopener noreferrer" />}
          >
            Set Up Calendly (free)
          </Button>
        </div>
      )}

      <Separator className="my-12" />

      {/* Contact fallback */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <p className="text-sm font-medium mb-1">Call Us</p>
          <a
            href="tel:+15550000000"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            (555) 000-0000
          </a>
        </div>
        <div>
          <p className="text-sm font-medium mb-1">Email Us</p>
          <a
            href="mailto:hello@salonmuse.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            hello@salonmuse.com
          </a>
        </div>
        <div>
          <p className="text-sm font-medium mb-1">Hours</p>
          <p className="text-sm text-muted-foreground">Tue–Sat, 9am–7pm</p>
        </div>
      </div>
    </div>
  );
}
