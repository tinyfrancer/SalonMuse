export interface Stylist {
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
}

export const team: Stylist[] = [
  {
    name: "Mia Russo",
    title: "Founder & Creative Director",
    bio: "With over 15 years behind the chair, Mia founded SalonMuse to create a space where artistry meets community. Her signature balayage and lived-in color work have been featured in regional style publications.",
    image: "/images/team/mia.jpg",
    specialties: ["Balayage", "Color Correction", "Precision Cuts"],
  },
  {
    name: "Jordan Lee",
    title: "Senior Stylist",
    bio: "Jordan brings a modern edge to every look, specializing in textured cuts and bold color transformations. Trained in New York and London, Jordan loves collaborating with clients to push creative boundaries.",
    image: "/images/team/jordan.jpg",
    specialties: ["Textured Cuts", "Vivid Color", "Blowouts"],
  },
  {
    name: "Sofia Tran",
    title: "Color Specialist",
    bio: "Sofia's passion for color science makes her the go-to stylist for complex corrections and multi-dimensional looks. She stays at the cutting edge of color trends through continuous education.",
    image: "/images/team/sofia.jpg",
    specialties: ["Highlights", "Color Correction", "Keratin Treatments"],
  },
  {
    name: "Eli Park",
    title: "Stylist",
    bio: "Eli's calm chairside manner and meticulous attention to detail have earned a devoted clientele. Specializing in classic cuts and scalp health, Eli believes great hair starts with a healthy foundation.",
    image: "/images/team/eli.jpg",
    specialties: ["Men's Cuts", "Scalp Treatments", "Women's Cuts"],
  },
];
