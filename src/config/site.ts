import { services } from "@/config/services";

export const siteConfig = {
  name: "Blockchain Dev Lab",
  /** The company's full name, used in the footer and the legal line. */
  legalName: "Blockchain Dev Lab",
  tagline: "Blockchain Architecture & Security",
  /** A sentence under the logo in the footer. */
  summary:
    "Exploramos protocolos resilientes, auditoria prática e padrões modulares para construir sistemas descentralizados que funcionam.",
  title: "BlockchainDevLab — Arquitetura, Segurança e Smart Contracts",
  description:
    "Cursos, mentoria e artigos técnicos sobre arquitetura de smart contracts, segurança blockchain e padrões modulares.",
  siteUrl: "https://blockchaindevlab.dev",
  language: "pt-BR",
  locale: "pt_BR",
  dateLocale: "pt-BR",
  socialImage: "/og-image.png",
  email: "contato@blockchaindevlab.dev",
  /** The call to action in the header, the menu and the footer. */
  action: { label: "Começar agora", href: "/contact/" },
  /** The short line beside the status dot in the header and hero. Leave empty to hide both. */
  availability: "Vagas abertas para mentoria 2027",
  /** The contact form. It stays disabled until `enabled` is true and `action` is set. */
  contact: {
    enabled: false,
    action: "",
    method: "post",
  },
  studios: [
    {
      city: "Remote",
      address: ["Online", "Anywhere"],
      phone: "",
      timeZone: "America/Sao_Paulo",
    },
  ],
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "RSS", href: "/rss.xml" },
  ],
};

export interface NavLink {
  label: string;
  href: string;
}

export const navigation: NavLink[] = [
  { label: "Cursos", href: "/work/" },
  { label: "Mentoria", href: "/services/" },
  { label: "Artigos", href: "/journal/" },
  { label: "Contato", href: "/contact/" },
];

export interface NavColumn {
  title: string;
  links: NavLink[];
}

export const footerNavigation: NavColumn[] = [
  {
    title: "Studio",
    links: [
      { label: "Work", href: "/work/" },
      { label: "Studio", href: "/studio/" },
      { label: "Journal", href: "/journal/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    title: "Services",
    links: services.map((service) => ({ label: service.title, href: `/services/#${service.key}` })),
  },
];

/** The small links under the footer. */
export const legalNavigation: NavLink[] = [
  { label: "Privacy", href: "/legal/privacy/" },
  { label: "Terms", href: "/legal/terms/" },
];
