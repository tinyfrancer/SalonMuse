"use client";

import { useState } from "react";
import Image from "next/image";
import { gallery, type GalleryImage } from "@/lib/data/gallery";
import { categoryLabels, type ServiceCategory } from "@/lib/data/services";
import { Badge } from "@/components/ui/badge";

type Filter = ServiceCategory | "all";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "cuts", label: categoryLabels.cuts },
  { value: "color", label: categoryLabels.color },
  { value: "treatments", label: categoryLabels.treatments },
];

function GalleryCard({ image }: { image: GalleryImage }) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-muted aspect-square">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-3 opacity-0 group-hover:opacity-100">
        <div>
          <p className="text-white text-sm font-medium leading-tight">{image.alt}</p>
          {image.stylist && (
            <p className="text-white/80 text-xs mt-0.5">{image.stylist}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = active === "all" ? gallery : gallery.filter((img) => img.category === active);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Gallery</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          A look at the transformations and styles created right here at SalonMuse.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {filters.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className="px-4 py-1.5 rounded-full text-sm transition-colors"
            style={{
              background: active === value ? "var(--color-foreground)" : "var(--color-secondary)",
              color: active === value ? "var(--color-background)" : "var(--color-muted-foreground)",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((image) => (
            <GalleryCard key={image.src} image={image} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-muted-foreground">
          <p>No images in this category yet — check back soon.</p>
        </div>
      )}

      <p className="text-center text-xs text-muted-foreground mt-10">
        Photos shown are placeholders. Replace images in{" "}
        <Badge variant="outline" className="font-mono text-xs">public/images/gallery/</Badge>{" "}
        to display your own work.
      </p>
    </div>
  );
}
