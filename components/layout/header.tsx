import { HeaderControls } from "@/components/layout/header-controls";
import { navigation } from "@/lib/navigation";

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="header-brand">
          <a className="wordmark" href="#top" aria-label="Делаем Диджитал">
            Делаем Диджитал
          </a>
        </div>

        <nav className="nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <HeaderControls />
      </div>
    </header>
  );
}
