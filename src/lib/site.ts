// Single place for business details and page content.
export const site = {
  name: "Pryme Hire",
  url: "https://prymehire.com.au",
  tagline: "Your Multi-Trade Construction Partner",
  headline: ["Building Better.", "Delivering Across Trades"],
  supportLine:
    "Delivering and managing construction works with defined scopes, accountable delivery, and a commitment to safety, quality and performance.",
  // TODO: add real details. Empty values are hidden on the page, and the
  // enquiry form stays disabled until `email` is set.
  contact: {
    email: "",
    phone: "",
    address: "",
    abn: "",
  },
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How we deliver", href: "#delivery" },
  { label: "Contact", href: "#contact" },
];

export const serviceGroups = [
  {
    title: "Structure",
    services: [
      { name: "Formwork", detail: "Formwork for cast-in-place concrete." },
      { name: "Concreting", detail: "Placing and finishing concrete works." },
      { name: "Steel fixing", detail: "Reinforcement fixed ready for pour." },
      { name: "Scaffolding", detail: "Safe access for work at height." },
    ],
  },
  {
    title: "Services and finishes",
    services: [
      { name: "Electrical", detail: "Electrical works across the build." },
      { name: "Plumbing", detail: "Plumbing works across the build." },
      { name: "Painting", detail: "Surface preparation and painting." },
      { name: "Carpentry", detail: "Structural and fit-out carpentry." },
    ],
  },
  {
    title: "Delivery",
    services: [
      { name: "Engineering", detail: "Engineering input for the works." },
      { name: "Project management", detail: "Programme, trades and scope." },
      { name: "Site supervision", detail: "Day-to-day control on site." },
      { name: "Inspections", detail: "Checks against the agreed scope." },
    ],
  },
];

export const sectors = [
  { name: "Office complexes", icon: "building" },
  { name: "Retail", icon: "store" },
  { name: "Industrial", icon: "factory" },
  { name: "Institutional", icon: "landmark" },
] as const;

export const commitments = [
  {
    title: "Defined scopes",
    body: "Work is set out clearly before it starts, so each trade knows what is included and what is expected.",
  },
  {
    title: "Accountable delivery",
    body: "One partner across the trades, with project management and site supervision keeping responsibility clear.",
  },
  {
    title: "Work, health and safety",
    body: "Safety is part of how work is planned and carried out on site, not a step added at the end.",
  },
  {
    title: "Quality and performance",
    body: "Projects are built to your specifications, with a focus on how the finished space performs over the long term.",
  },
];
