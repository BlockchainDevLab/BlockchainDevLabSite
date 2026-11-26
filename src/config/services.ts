import type { Discipline } from "@/config/work";

export interface Service {
  /** Matches a discipline, so the service can link to the work it produced. */
  key: Discipline;
  title: string;
  /** One line on the homepage list. */
  summary: string;
  /** A paragraph on the services page. */
  description: string;
  deliverables: string[];
  /** The project whose cover floats beside this service on hover. */
  project: string;
}

/**
 * 6 PILARES DO BLOCKCHAIN DEV LAB
 * 
 * Mapeamento de disciplines para os pilares estratégicos
 */
export const services: Service[] = [
  {
    key: "identity",
    title: "01. Educação & Mentoria",
    summary: "Formação técnica completa + acompanhamento especializado 1:1",
    description:
      "Do zero ao avançado: cursos estruturados, trilhas de aprendizado personalizadas e mentoria individual com especialistas. Aprenda Solidity, auditoria de segurança, arquitetura de protocolos e padrões da indústria. Cada aluno tem acesso a projetos práticos, code reviews e sessões ao vivo.",
    deliverables: [
      "Cursos gravados (do básico ao avançado)",
      "Trilhas de aprendizado personalizadas",
      "Mentoria individual (4-12 sessões)",
      "Revisão de código assíncrona",
      "Projetos práticos guiados",
      "Certificados de conclusão",
    ],
    project: "halden",
  },
  {
    key: "digital",
    title: "02. Consultoria B2B",
    summary: "Soluções técnicas sob demanda para empresas e startups Web3",
    description:
      "Auditoria de smart contracts, arquitetura de protocolos, otimização de gas, integração de oracles e bridges. Trabalhamos com startups DeFi, NFT marketplaces, DAOs e tokenização de ativos. Entregas em sprints curtos com relatórios técnicos detalhados.",
    deliverables: [
      "Auditoria de segurança (manual + automatizada)",
      "Design de arquitetura modular",
      "Otimização de gas e performance",
      "Integração de oracles (Chainlink, Pyth)",
      "Implementação de upgradability patterns",
      "Suporte pós-deploy (3-12 meses)",
    ],
    project: "lumio",
  },
  {
    key: "packaging",
    title: "03. Materiais Gratuitos",
    summary: "E-books, checklists e guias de entrada para aquisição de leads",
    description:
      "Conteúdo introdutório gratuito para desenvolvedores iniciantes: checklists de segurança, guias de setup de ambiente, glossários de terminologia blockchain e introduções a Solidity. Cada material é uma porta de entrada para o ecossistema completo.",
    deliverables: [
      "E-books introdutórios (PDF)",
      "Checklists de segurança",
      "Templates de código (GitHub)",
      "Guias de setup (Foundry, Hardhat)",
      "Glossários e cheatsheets",
      "Newsletter semanal",
    ],
    project: "kitebird",
  },
  {
    key: "campaign",
    title: "04. Biblioteca Premium",
    summary: "E-books técnicos aprofundados e publicações especializadas",
    description:
      "Conteúdo avançado para desenvolvedores intermediários e sêniores: deep dives em EVM internals, padrões de upgradability, MEV protection, cross-chain architecture e case studies de auditorias reais. Cada publicação vem com código-fonte completo e diagramas técnicos.",
    deliverables: [
      "E-books técnicos (100-300 páginas)",
      "Case studies de auditorias reais",
      "Código-fonte completo (GitHub privado)",
      "Diagramas de arquitetura (Mermaid, Excalidraw)",
      "Atualizações mensais",
      "Acesso vitalício",
    ],
    project: "veldt",
  },
  {
    key: "spatial",
    title: "05. Laboratórios",
    summary: "Projetos práticos open-source e desenvolvimento colaborativo",
    description:
      "Repositórios públicos de referência: templates de projetos DeFi, implementações de padrões (ERC-4626, ERC-6909), ferramentas de desenvolvimento e bibliotecas reutilizáveis. Contribua, aprenda com código real e construa seu portfólio trabalhando com a comunidade.",
    deliverables: [
      "Templates de projetos (Foundry + Hardhat)",
      "Implementações de padrões ERC",
      "Ferramentas de desenvolvimento (CLI, scripts)",
      "Bibliotecas de contratos auditados",
      "Documentação técnica completa",
      "Issues e PRs aceitos da comunidade",
    ],
    project: "ostra",
  },
  {
    key: "ecosystem",
    title: "06. Ecossistema Web3",
    summary: "Networking, eventos presenciais e comunidade colaborativa",
    description:
      "Hackathons, meetups mensais, workshops práticos e parcerias com protocolos DeFi. Conecte-se com outros desenvolvedores, founders e investidores. Participe de projetos reais, encontre co-founders e acelere sua carreira Web3.",
    deliverables: [
      "Hackathons trimestrais (online + presencial)",
      "Meetups mensais (SP, RJ, BH)",
      "Workshops práticos com protocolos parceiros",
      "Acesso a comunidade privada (Discord)",
      "Job board exclusivo",
      "Introduções a VCs e founders",
    ],
    project: "juniper",
  },
];
