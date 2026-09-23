// Generates public/sitemap.xml and public/robots.txt from the product catalog.
// Run via `npm run seo:generate` (also wired into `prebuild`).
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { PRODUCTS } from '../src/data/products';

const __dirname = dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://kanvaledirtbikes.com.au';
const today = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/shop', priority: '0.9', changefreq: 'daily' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/faq', priority: '0.6', changefreq: 'monthly' },
];

const productRoutes = PRODUCTS.map((p) => ({
  path: `/product/${p.slug}`,
  priority: '0.8',
  changefreq: 'weekly',
}));

const allRoutes = [...staticRoutes, ...productRoutes];

const urlEntries = allRoutes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const robots = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), sitemap);
writeFileSync(resolve(__dirname, '../public/robots.txt'), robots);

console.log(`Generated sitemap.xml with ${allRoutes.length} URLs (${productRoutes.length} products) and robots.txt`);
