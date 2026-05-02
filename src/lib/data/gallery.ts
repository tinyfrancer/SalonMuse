import type { ServiceCategory } from "./services";

export interface GalleryImage {
  src: string;
  alt: string;
  category: ServiceCategory;
  stylist?: string;
}

export const gallery: GalleryImage[] = [
  {
    src: "/images/gallery/balayage-1.jpg",
    alt: "Warm balayage on dark brown hair",
    category: "color",
    stylist: "Mia Russo",
  },
  {
    src: "/images/gallery/highlights-1.jpg",
    alt: "Subtle babylights on blonde hair",
    category: "color",
    stylist: "Sofia Tran",
  },
  {
    src: "/images/gallery/cut-1.jpg",
    alt: "Sleek bob with blunt ends",
    category: "cuts",
    stylist: "Jordan Lee",
  },
  {
    src: "/images/gallery/color-correction-1.jpg",
    alt: "Before and after color correction to platinum",
    category: "color",
    stylist: "Sofia Tran",
  },
  {
    src: "/images/gallery/cut-2.jpg",
    alt: "Textured layers on curly hair",
    category: "cuts",
    stylist: "Jordan Lee",
  },
  {
    src: "/images/gallery/treatment-1.jpg",
    alt: "Glossy finish after keratin smoothing treatment",
    category: "treatments",
    stylist: "Sofia Tran",
  },
  {
    src: "/images/gallery/balayage-2.jpg",
    alt: "Copper balayage on auburn base",
    category: "color",
    stylist: "Mia Russo",
  },
  {
    src: "/images/gallery/cut-3.jpg",
    alt: "Classic men's cut with fade",
    category: "cuts",
    stylist: "Eli Park",
  },
  {
    src: "/images/gallery/highlights-2.jpg",
    alt: "Full highlights brightening brunette hair",
    category: "color",
    stylist: "Sofia Tran",
  },
];
