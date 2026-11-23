import crypto from 'node:crypto';

const SECRET = process.env.DOWNLOAD_SECRET || 'troque-esta-chave-no-env-em-producao';

export function createDownloadToken(slug: string, ttlSeconds = 900): string {
  const expires = Math.floor(Date.now() / 1000) + ttlSeconds; // 15 minutos por padrão
  const payload = `${slug}:${expires}`;
  const signature = crypto
    .createHmac('sha256', SECRET)
    .update(payload)
    .digest('hex');

  return Buffer.from(`${payload}:${signature}`).toString('base64url');
}

export function verifyDownloadToken(token: string): { valid: boolean; slug?: string } {
  try {
    const decoded = Buffer.from(token, 'base64url').toString('utf-8');
    const [slug, expiresStr, signature] = decoded.split(':');

    if (!slug || !expiresStr || !signature) return { valid: false };

    const expires = Number(expiresStr);
    if (Number.isNaN(expires) || Math.floor(Date.now() / 1000) > expires) {
      return { valid: false };
    }

    const expectedSig = crypto
      .createHmac('sha256', SECRET)
      .update(`${slug}:${expiresStr}`)
      .digest('hex');

    const sigBuffer = Buffer.from(signature, 'hex');
    const expectedBuffer = Buffer.from(expectedSig, 'hex');

    if (sigBuffer.length !== expectedBuffer.length) return { valid: false };
    if (!crypto.timingSafeEqual(sigBuffer, expectedBuffer)) return { valid: false };

    return { valid: true, slug };
  } catch {
    return { valid: false };
  }
}