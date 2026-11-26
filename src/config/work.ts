/** 
 * DISCIPLINES — 6 PILARES DO BLOCKCHAIN DEV LAB
 * 
 * Cada projeto (curso, laboratório, material) é taggeado com um ou mais pilares.
 * Isso permite filtrar o work grid por categoria.
 */
export const disciplines = {
  identity: { label: "Educação & Mentoria" },
  digital: { label: "Consultoria" },
  packaging: { label: "Materiais Gratuitos" },
  campaign: { label: "Biblioteca Premium" },
  spatial: { label: "Laboratórios" },
  ecosystem: { label: "Ecossistema Web3" },
} as const;

export type Discipline = keyof typeof disciplines;
export const disciplineKeys = Object.keys(disciplines) as [Discipline, ...Discipline[]];
