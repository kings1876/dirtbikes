import React, { useEffect, useRef } from 'react';
import { TRUSTPILOT } from '../config/trustpilot';

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (el: Element, force?: boolean) => void;
    };
  }
}

const SCRIPT_SRC = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';

/**
 * Renders Trustpilot's official widget. Returns null until a real
 * businessUnitId is configured in src/config/trustpilot.ts — never shows a
 * placeholder or fabricated reviews.
 */
export const TrustpilotWidget: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!TRUSTPILOT.businessUnitId) return;

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);

    const load = () => {
      if (ref.current && window.Trustpilot) {
        window.Trustpilot.loadFromElement(ref.current, true);
      }
    };

    if (existing) {
      load();
    } else {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = load;
      document.body.appendChild(script);
    }
  }, []);

  if (!TRUSTPILOT.businessUnitId) return null;

  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale={TRUSTPILOT.locale}
      data-template-id={TRUSTPILOT.templateId}
      data-businessunit-id={TRUSTPILOT.businessUnitId}
      data-style-height="240px"
      data-style-width="100%"
      data-theme="dark"
    >
      <a href="https://www.trustpilot.com/review/kanvaledirtbikes.com.au" target="_blank" rel="noopener noreferrer">
        Trustpilot
      </a>
    </div>
  );
};
