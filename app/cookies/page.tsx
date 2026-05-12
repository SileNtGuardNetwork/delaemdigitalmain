import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { legalMeta } from "@/lib/legal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: legalMeta.cookiesTitle,
  description: "Как сайт Делаем Диджитал использует cookie и localStorage для корректной работы интерфейса."
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container">
          <h1>{legalMeta.cookiesTitle}</h1>
          <div className="legal-card card">
            <p>
              Сайт {siteConfig.domain} использует cookie и localStorage для корректной работы интерфейса, сохранения пользовательских настроек и факта ознакомления с cookie-уведомлением.
            </p>
            <h2>1. Что такое cookie</h2>
            <p>
              Cookie — это небольшие файлы, которые сохраняются на устройстве пользователя при посещении сайта.
            </p>
            <h2>2. Какие cookie могут использоваться</h2>
            <ul>
              <li>необходимые cookie для базовой работы сайта;</li>
              <li>функциональное localStorage для сохранения выбранных настроек, например темы сайта или отметки о cookie-уведомлении;</li>
              <li>аналитические данные Яндекс Метрики, если аналитика включена в настройках сайта;</li>
              <li>технические данные, которые помогают корректно отображать сайт и понимать контекст заявок.</li>
            </ul>
            <h2>3. Управление cookie</h2>
            <p>
              Пользователь может ограничить или отключить cookie в настройках браузера. В этом случае отдельные функции сайта могут работать некорректно.
            </p>
            <h2>4. Текущая версия сайта</h2>
            <p>
              В текущей версии cookie-баннер работает как уведомление: кнопка сохраняет отметку <code>dd-cookie-accepted=yes</code> в localStorage и скрывает баннер. Эта отметка не включает и не отключает аналитику.
            </p>
            <p>
              Яндекс Метрика может подключаться, если для сайта настроен идентификатор аналитики. При отправке заявки также могут сохраняться UTM-метки, referrer и посадочная страница, чтобы понимать источник обращения.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
