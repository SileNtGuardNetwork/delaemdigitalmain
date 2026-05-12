"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem("dd-cookie-accepted") !== "yes");
  }, []);

  if (!visible) return null;

  return (
    <div className="cookie-banner card" role="dialog" aria-label="Cookie">
      <p>
        Мы используем cookie и localStorage для корректной работы сайта, сохранения настроек и анализа посещений, если аналитика включена. <a href="/cookies" data-analytics-event="legal_link_click" data-analytics-label="cookie_notice_more" data-analytics-value="/cookies">Подробнее</a>.
      </p>
      <button
        className="button button-primary"
        type="button"
        data-analytics-event="cookie_accept"
        data-analytics-label="cookie_banner_accept"
        data-analytics-value="accepted"
        onClick={() => {
          window.localStorage.setItem("dd-cookie-accepted", "yes");
          setVisible(false);
        }}
      >
        Понятно
      </button>
    </div>
  );
}
