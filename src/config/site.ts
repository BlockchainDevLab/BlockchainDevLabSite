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
 * NAVEGAÇÃO PRINCIPAL — NOVO MENU 2025
 * 
 * 1. Início → Apresentação
 * 2. Cursos & Mentoria → Aprender (Monetização: Cursos + Mentoria)
 * 3. Laboratório & Consultoria → Implementar (Monetização: Consultoria B2B)
 * 4. E-books & Artigos → Atrair + Aprofundar (Monetização: E-books pagos)
 * 5. Ecossistema Web3 → Conectar (Monetização: Assinatura comunidade)
 * 6. Sobre → Institucional
 */
export const navigation: NavLink[] = [
  { label: "Início", href: "/" },
  { 
    label: "Cursos & Mentoria", 
    href: "/educacao-mentoria/",
    submenu: [
      { label: "Cursos", href: "/educacao-mentoria/cursos/" },
      { label: "Trilhas de Aprendizado", href: "/educacao-mentoria/trilhas/" },
      { label: "Mentoria Individual", href: "/educacao-mentoria/mentoria-individual/" },
      { label: "Mentoria em Grupo", href: "/educacao-mentoria/mentoria-grupo/" },
      { label: "Nossos Mentores", href: "/educacao-mentoria/mentores/" },
    ]
  },
  { 
    label: "Laboratório & Consultoria", 
    href: "/laboratorio-consultoria/",
    submenu: [
      { label: "Arquitetura Blockchain", href: "/laboratorio-consultoria/consultoria/arquitetura/" },
      { label: "Smart Contracts", href: "/laboratorio-consultoria/consultoria/smart-contracts/" },
      { label: "Auditoria Técnica", href: "/laboratorio-consultoria/consultoria/auditoria/" },
      { label: "Cases de Sucesso", href: "/laboratorio-consultoria/consultoria/cases/" },
      { label: "Solicitar Orçamento", href: "/laboratorio-consultoria/consultoria/orcamento/" },
      { label: "—", href: "#" },
      { label: "Projetos para Iniciantes", href: "/laboratorio-consultoria/laboratorios/iniciantes/" },
      { label: "Projetos Avançados", href: "/laboratorio-consultoria/laboratorios/avancados/" },
      { label: "Galeria de Projetos", href: "/laboratorio-consultoria/laboratorios/galeria/" },
      { label: "Open Source", href: "/laboratorio-consultoria/laboratorios/open-source/" },
    ]
  },
  { 
    label: "E-books & Artigos", 
    href: "/recursos/",
    submenu: [
      { label: "E-books Premium", href: "/recursos/ebooks/" },
      { label: "Artigos Técnicos", href: "/recursos/artigos/" },
      { label: "Guias Gratuitos", href: "/recursos/guias/" },
      { label: "Blog", href: "/blog/" },
    ]
  },
  { 
    label: "Ecossistema Web3", 
    href: "/ecossistema-web3/",
    submenu: [
      { label: "Networking", href: "/ecossistema-web3/networking/" },
      { label: "Eventos", href: "/ecossistema-web3/eventos/" },
      { label: "Grupos de Estudo", href: "/ecossistema-web3/grupos-estudo/" },
      { label: "Oportunidades", href: "/ecossistema-web3/oportunidades/" },
      { label: "Parceiros", href: "/ecossistema-web3/parceiros/" },
    ]
  },
  { 
    label: "Sobre", 
    href: "/sobre/",
    submenu: [
      { label: "Quem Somos", href: "/sobre/" },
      { label: "Nossa Missão", href: "/sobre/missao/" },
      { label: "Equipe", href: "/sobre/equipe/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Contato", href: "/contato/" },
    ]
  },
];

export interface NavColumn {
  title: string;
  links: NavLink[];
}

/** FOOTER — Organizado pelo novo menu */
export const footerNavigation: NavColumn[] = [
  {
    title: "Aprender",
    links: [
      { label: "Cursos", href: "/educacao-mentoria/cursos/" },
      { label: "Trilhas", href: "/educacao-mentoria/trilhas/" },
      { label: "Mentoria", href: "/educacao-mentoria/mentoria-individual/" },
      { label: "Mentores", href: "/educacao-mentoria/mentores/" },
    ],
  },
  {
    title: "Implementar",
    links: [
      { label: "Consultoria B2B", href: "/consultoria/" },
      { label: "Laboratórios", href: "/laboratorio-consultoria/laboratorios/" },
      { label: "Cases", href: "/consultoria/cases/" },
      { label: "Processo", href: "/consultoria/processo/" },
    ],
  },
  {
    title: "Conhecimento",
    links: [
      { label: "E-books Premium", href: "/recursos/ebooks/" },
      { label: "Artigos", href: "/recursos/artigos/" },
      { label: "Guias Gratuitos", href: "/recursos/guias/" },
      { label: "Blog", href: "/blog/" },
    ],
  },
  {
    title: "Comunidade",
    links: [
      { label: "Ecossistema Web3", href: "/ecossistema/" },
      { label: "Eventos", href: "/ecossistema/eventos/" },
      { label: "Parceiros", href: "/ecossistema/parceiros/" },
      { label: "Contato", href: "/contato/" },
    ],
  },
];

/** Links legais (privacidade, termos) */
export const legalNavigation: NavLink[] = [
  { label: "Termos de Uso", href: "/termos-de-uso/" },
  { label: "Política de Privacidade", href: "/politica-de-privacidade/" },
  { label: "Política de Cookies", href: "/politica-de-cookies/" },
];
