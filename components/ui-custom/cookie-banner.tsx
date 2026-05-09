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
        Мы используем cookie для корректной работы сайта и улучшения пользовательского опыта. <a href="/cookies">Подробнее</a>.
      </p>
      <button
        className="button button-primary"
        type="button"
        onClick={() => {
          window.localStorage.setItem("dd-cookie-accepted", "yes");
          setVisible(false);
        }}
      >
        Принять
      </button>
    </div>
  );
}
