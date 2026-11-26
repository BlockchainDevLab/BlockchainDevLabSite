import { services } from "@/config/services";

export const siteConfig = {
  name: "Blockchain Dev Lab",
  legalName: "Blockchain Dev Lab",
  tagline: "Aprenda • Desenvolva • Conquiste",
  summary:
    "Ecossistema de educação, desenvolvimento e inovação Web3. Formação técnica, consultoria empresarial e laboratórios práticos para transformar desenvolvedores em especialistas blockchain.",
  title: "Blockchain Dev Lab — Ecossistema Web3",
  description:
    "Plataforma completa de educação e desenvolvimento blockchain. Cursos, mentoria, consultoria B2B, materiais gratuitos, biblioteca premium e laboratórios práticos.",
  siteUrl: "https://blockchaindevlab.dev",
  language: "pt-BR",
  locale: "pt_BR",
  dateLocale: "pt-BR",
  socialImage: "/og-image.png",
  email: "contato@blockchaindevlab.dev",
  action: { label: "Começar Agora", href: "/contact/" },
  availability: "Vagas abertas para mentoria e consultoria 2027",
  contact: {
    enabled: false,
    action: "",
    method: "post",
  },
  studios: [
    {
      city: "Online",
      address: ["Ecossistema Global", "Atendimento Remoto"],
      phone: "",
      timeZone: "America/Sao_Paulo",
    },
  ],
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "RSS", href: "/rss.xml" },
  ],
};

export interface NavLink {
  label: string;
  href: string;
  submenu?: NavLink[];
}

/** 
 * NAVEGAÇÃO PRINCIPAL — 6 PILARES
 * 
 * 01. Educação & Mentoria → /educacao/ (Work collection)
 * 02. Consultoria → /consultoria/ (Services)
 * 03. Recursos (Materiais + Biblioteca + Blog) → /recursos/
 * 04. Laboratórios → /laboratorios/
 * 05. Ecossistema Web3 → /ecossistema/
 * 06. Sobre → /sobre/ (Studio)
 */
export const navigation: NavLink[] = [
  { label: "Início", href: "/" },
  { 
    label: "Educação & Mentoria", 
    href: "/educacao/",
    submenu: [
      { label: "Cursos", href: "/educacao/cursos/" },
      { label: "Trilhas de Aprendizado", href: "/educacao/trilhas/" },
      { label: "Mentoria Individual", href: "/educacao/mentoria/" },
      { label: "Nossos Mentores", href: "/educacao/mentores/" },
    ]
  },
  { 
    label: "Consultoria", 
    href: "/consultoria/",
  },
  { 
    label: "Recursos", 
    href: "/recursos/",
    submenu: [
      { label: "Materiais Gratuitos", href: "/recursos/materiais/" },
      { label: "Biblioteca Premium", href: "/recursos/biblioteca/" },
      { label: "Blog Técnico", href: "/recursos/blog/" },
    ]
  },
  { 
    label: "Laboratórios", 
    href: "/laboratorios/",
  },
  { 
    label: "Ecossistema Web3", 
    href: "/ecossistema/",
  },
  { 
    label: "Sobre", 
    href: "/sobre/",
    submenu: [
      { label: "Nossa Missão", href: "/sobre/missao/" },
      { label: "Equipe", href: "/sobre/equipe/" },
      { label: "Parceiros", href: "/sobre/parceiros/" },
      { label: "FAQ", href: "/sobre/faq/" },
    ]
  },
  { label: "Contato", href: "/contact/" },
];

export interface NavColumn {
  title: string;
  links: NavLink[];
}

/** FOOTER — Organizado por pilares */
export const footerNavigation: NavColumn[] = [
  {
    title: "Educação",
    links: [
      { label: "Cursos", href: "/educacao/cursos/" },
      { label: "Trilhas", href: "/educacao/trilhas/" },
      { label: "Mentoria", href: "/educacao/mentoria/" },
      { label: "Mentores", href: "/educacao/mentores/" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Consultoria B2B", href: "/consultoria/" },
      { label: "Laboratórios", href: "/laboratorios/" },
      { label: "Ecossistema Web3", href: "/ecossistema/" },
      { label: "Sobre Nós", href: "/sobre/" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Materiais Gratuitos", href: "/recursos/materiais/" },
      { label: "Biblioteca Premium", href: "/recursos/biblioteca/" },
      { label: "Blog Técnico", href: "/recursos/blog/" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Contato", href: "/contact/" },
      { label: "FAQ", href: "/sobre/faq/" },
      { label: "Parceiros", href: "/sobre/parceiros/" },
    ],
  },
];

/** Links legais (privacidade, termos) */
export const legalNavigation: NavLink[] = [
  { label: "Privacidade", href: "/legal/privacy/" },
  { label: "Termos de Uso", href: "/legal/terms/" },
];
