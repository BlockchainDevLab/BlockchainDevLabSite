/** Homepage copy — Blockchain Dev Lab */

export const hero = {
  lines: ["Aprenda", "Desenvolva", "Conquiste"],
  /** The line that ends in the capsule of cycling project covers. */
  capsuleLine: 2,
  intro:
    "Ecossistema completo de educação, desenvolvimento e inovação Web3. Transformamos desenvolvedores em especialistas blockchain através de cursos práticos, mentoria personalizada e projetos reais.",
};

export const selectedWork = {
  title: "Projetos em Destaque",
  /** How many featured projects the homepage shows. */
  limit: 6,
};

/** The paragraph that lights up word by word as it scrolls past. */
export const manifesto = {
  /** Read out by screen readers; the section has no visible heading. */
  label: "Nossa Missão",
  text: "A maioria dos cursos de blockchain ensina teoria. Nós acreditamos que expertise vem da prática: código real, auditorias reais, arquiteturas que vão para produção. Um desenvolvedor que entende cada linha, cada decisão, cada tradeoff.",
  link: { label: "Conheça o Ecossistema", href: "/sobre/" },
};

export const servicesBlock = {
  title: "Seis Pilares Estratégicos",
  link: { label: "Ver todos os serviços", href: "/consultoria/" },
};

export const figures = [
  { value: 150, suffix: "+", label: "Alunos formados" },
  { value: 30, suffix: "+", label: "Projetos auditados" },
  { value: 95, suffix: "%", label: "Taxa de aprovação" },
  { value: 24, suffix: "h", label: "Suporte ativo" },
];

export const testimonial = {
  quote:
    "O curso de arquitetura de smart contracts foi decisivo. Aprendi padrões que nenhum tutorial ensina e consegui minha primeira vaga como engenheiro blockchain sênior em 3 meses.",
  name: "Carlos Silva",
  role: "Blockchain Engineer, DeFi Protocol",
};

export const journalBlock = {
  title: "Insights Técnicos",
  link: { label: "Ler o blog", href: "/recursos/blog/" },
};
