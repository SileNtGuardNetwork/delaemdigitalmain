"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/lib/navigation";

export function HeaderControls() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("dd-theme") as "dark" | "light" | null;
    const nextTheme = saved ?? "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("dd-theme", nextTheme);
  }

  return (
    <>
      <div className="header-actions">
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Переключить тему">
          {theme === "dark" ? "☾" : "☼"}
        </button>
        <a className="button button-secondary" href="#contacts">Связаться</a>
        <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Открыть меню">
          {open ? "×" : "☰"}
        </button>
      </div>

      <div className={`mobile-panel ${open ? "open" : ""}`}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
        ))}
        <a href="#contacts" onClick={() => setOpen(false)}>Связаться</a>
      </div>
    </>
  );
}
