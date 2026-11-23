import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import fs from 'node:fs/promises';
import path from 'node:path';
import { verifyDownloadToken } from '../../lib/downloadToken';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const token = url.searchParams.get('token');
  if (!token) {
    return new Response('Token ausente.', { status: 401 });
  }

  const verification = verifyDownloadToken(token);
  if (!verification.valid || !verification.slug) {
    return new Response('Link expirado ou inválido. Preencha o formulário novamente.', { status: 403 });
  }

  const material = await getEntry('materiais', verification.slug);
  if (!material) {
    return new Response('Material não encontrado.', { status: 404 });
  }

  const safeFileName = path.basename(material.data.fileName);
  const filePath = path.resolve('./private-assets/materiais', safeFileName);

  try {
    const fileBuffer = await fs.readFile(filePath);
    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${safeFileName}"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch {
    return new Response('Arquivo indisponível no servidor.', { status: 404 });
  }
};