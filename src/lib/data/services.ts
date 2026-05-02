export type ServiceCategory = 'cuts' | 'color' | 'treatments';

export interface Service {
  name: string;
  description: string;
  price: string;
  duration: string;
  category: ServiceCategory;
}

export const services: Service[] = [
  // Cuts
  {
    name: "Women's Haircut",
    description: "Precision cut tailored to your face shape and lifestyle, includes shampoo and blow-dry.",
    price: "from $65",
    duration: "60 min",
    category: "cuts",
  },
  {
    name: "Men's Haircut",
    description: "Classic or modern cut with shampoo and style finish.",
    price: "from $45",
    duration: "45 min",
    category: "cuts",
  },
  {
    name: "Children's Cut",
    description: "Fun, fuss-free cuts for ages 12 and under.",
    price: "from $35",
    duration: "30 min",
    category: "cuts",
  },
  {
    name: "Blowout & Style",
    description: "Shampoo, blow-dry, and finish — no cut.",
    price: "from $45",
    duration: "45 min",
    category: "cuts",
  },

  // Color
  {
    name: "Full Color",
    description: "Single-process all-over color with premium salon color lines.",
    price: "from $85",
    duration: "90 min",
    category: "color",
  },
  {
    name: "Highlights",
    description: "Partial or full highlights to add dimension and brightness.",
    price: "from $110",
    duration: "120 min",
    category: "color",
  },
  {
    name: "Balayage",
    description: "Hand-painted, sun-kissed color for a natural, low-maintenance look.",
    price: "from $150",
    duration: "150 min",
    category: "color",
  },
  {
    name: "Color Correction",
    description: "Expert correction of previous color — consultation required.",
    price: "Consultation",
    duration: "Varies",
    category: "color",
  },

  // Treatments
  {
    name: "Deep Conditioning",
    description: "Intensive moisture treatment to restore shine and strength.",
    price: "from $30",
    duration: "30 min",
    category: "treatments",
  },
  {
    name: "Keratin Smoothing",
    description: "Professional smoothing treatment for frizz-free, manageable hair.",
    price: "from $200",
    duration: "180 min",
    category: "treatments",
  },
  {
    name: "Scalp Treatment",
    description: "Targeted treatment for dry scalp, dandruff, or scalp sensitivity.",
    price: "from $45",
    duration: "45 min",
    category: "treatments",
  },
];

export const categoryLabels: Record<ServiceCategory, string> = {
  cuts: "Cuts & Styling",
  color: "Color",
  treatments: "Treatments",
};
