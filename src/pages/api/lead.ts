import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createDownloadToken } from '../../lib/downloadToken';
import { sendDownloadEmail } from '../../lib/sendDownloadEmail';

export const prerender = false;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TTL_SECONDS = 86400; // 24 horas

export const POST: APIRoute = async ({ request, url }) => {
  try {
    const { name, email, materialSlug } = await request.json();
    const cleanEmail = String(email || '').trim().toLowerCase();
    const cleanName = String(name || '').trim();

    if (!EMAIL_REGEX.test(cleanEmail) || !materialSlug) {
      return new Response(JSON.stringify({ error: 'Informe um nome e um e-mail válido.' }), {
        status: 400,
      });
    }

    const material = await getEntry('materiais', materialSlug);
    if (!material) {
      return new Response(JSON.stringify({ error: 'Material não encontrado.' }), { status: 404 });
    }

    const dataDir = path.resolve('./data');
    await fs.mkdir(dataDir, { recursive: true });
    const line = `${new Date().toISOString()},"${cleanName.replace(/"/g, '""')}","${cleanEmail}","${materialSlug}"\n`;
    await fs.appendFile(path.join(dataDir, 'leads.csv'), line, 'utf-8');

    if (process.env.LEAD_WEBHOOK_URL) {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          materialSlug,
          date: new Date().toISOString(),
        }),
      }).catch(() => {});
    }

    const baseUrl = (process.env.SITE_URL || url.origin).replace(/\/+$/, '');
    const token = createDownloadToken(materialSlug, TTL_SECONDS);
    const downloadUrl = `${baseUrl}/api/download?token=${encodeURIComponent(token)}`;

    const mailResult = await sendDownloadEmail({
      to: cleanEmail,
      name: cleanName || undefined,
      materialTitle: material.data.title,
      downloadUrl,
      expiresHours: Math.round(TTL_SECONDS / 3600),
    });

    if (!mailResult.ok) {
      return new Response(
        JSON.stringify({ error: 'Não foi possível enviar o e-mail agora. Tente novamente em instantes.' }),
        { status: 502 }
      );
    }

    return new Response(
      JSON.stringify({
        ok: true,
        message: 'Enviamos o link de download para o seu e-mail. Confira também a caixa de spam.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch {
    return new Response(JSON.stringify({ error: 'Erro interno no servidor.' }), { status: 500 });
  }
};