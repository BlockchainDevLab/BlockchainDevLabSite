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

export const services: Service[] = [
  {
    key: "identity",
    title: "Arquitetura de Smart Contracts",
    summary: "Design modular, upgradeable e auditável de protocolos descentralizados.",
    description:
      "Começamos com os requisitos de negócio e terminamos com código que funciona: padrões de proxy, separação de concerns, e storage layouts que sobrevivem a upgrades. Cada arquitetura vem com diagramas, decisões documentadas e testes de integração.",
    deliverables: [
      "Design de arquitetura",
      "Padrões de proxy e upgrade",
      "Separação de módulos",
      "Diagramas de fluxo",
      "Documentação técnica",
      "Testes de integração",
    ],
    project: "halden",
  },
  {
    key: "digital",
    title: "Auditoria de Segurança",
    summary: "Revisão profunda de código, fuzzing e análise estática automatizada.",
    description:
      "Auditamos linha por linha, testamos com Foundry e Echidna, rodamos Slither e Aderyn. Entregamos um relatório com severidade classificada, proof of concept para cada issue e recomendações priorizadas. Você não precisa confiar: cada finding vem com um teste que falha.",
    deliverables: [
      "Revisão manual de código",
      "Fuzzing com Echidna",
      "Análise estática (Slither, Aderyn)",
      "Relatório de vulnerabilidades",
      "Proof of concept",
      "Recomendações priorizadas",
    ],
    project: "lumio",
  },
  {
    key: "packaging",
    title: "Testes e Fuzzing",
    summary: "Suítes completas de testes unitários, invariantes e fuzzing property-based.",
    description:
      "Escrevemos os testes que você não teve tempo de escrever: cobertura de branches, invariantes de protocolo e fuzzing campaigns que rodam milhões de inputs. Cada teste documenta uma propriedade crítica e falha se ela quebrar.",
    deliverables: [
      "Testes unitários",
      "Testes de invariantes",
      "Fuzzing campaigns",
      "Cobertura de branches",
      "Documentação de propriedades",
    ],
    project: "kitebird",
  },
  {
    key: "campaign",
    title: "Mentoria Individual",
    summary: "Acompanhamento direto para tirar projetos técnicos do papel.",
    description:
      "Quatro sessões ao vivo, revisão assíncrona de código e arquitetura, acesso direto via Slack. Desenhamos a arquitetura juntos, revisamos as decisões críticas e garantimos que você entenda cada tradeoff antes de fazer o deploy.",
    deliverables: [
      "4 sessões ao vivo",
      "Revisão de código assíncrona",
      "Acesso via Slack",
      "Review de arquitetura",
      "Documentação de decisões",
    ],
    project: "veldt",
  },
];
