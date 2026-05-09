"use client";

import Script from "next/script";

const DEFAULT_OPTIONS = {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: false
} as const;

export function YandexMetrica() {
  const id = Number(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID);
  const flag = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED;

  if (!Number.isFinite(id) || flag === "0" || flag === "false") {
    return null;
  }

  const initScript = `
(function(m,e,t,r,i,k,a){
m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {
  if (document.scripts[j].src === r) return;
}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(${id}, "init", ${JSON.stringify(DEFAULT_OPTIONS)});
  `.trim();

  return <Script id="yandex-metrica" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: initScript }} />;
}
