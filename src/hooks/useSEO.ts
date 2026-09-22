import { useEffect } from 'react';

export const SITE_URL = 'https://kanvaledirtbikes.com.au';

interface SEOInput {
  title: string;
  description: string;
  canonicalPath: string;
  image?: string;
  jsonLd?: object[];
  noindex?: boolean;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Client-side head manager. This is a Vite SPA (no SSR), so these tags are
 * only visible to crawlers that execute JS (Googlebot does). robots.txt +
 * sitemap.xml carry the canonical URL list for crawlers that don't.
 */
export function useSEO({ title, description, canonicalPath, image, jsonLd, noindex }: SEOInput) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', `${SITE_URL}${canonicalPath}`);
    upsertMeta('property', 'og:type', 'product');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    if (image) {
      upsertMeta('property', 'og:image', image);
      upsertMeta('name', 'twitter:image', image);
    }

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${canonicalPath}`);

    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (noindex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'noindex, follow');
    } else if (robotsMeta) {
      robotsMeta.remove();
    }

    const scripts: HTMLScriptElement[] = [];
    (jsonLd ?? []).forEach((block) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(block);
      script.setAttribute('data-seo-dynamic', 'true');
      document.head.appendChild(script);
      scripts.push(script);
    });

    return () => {
      document.title = prevTitle;
      scripts.forEach((s) => s.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, canonicalPath, image, JSON.stringify(jsonLd), noindex]);
}
