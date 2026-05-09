"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics/client";

type ClickTarget = HTMLElement & {
  dataset: DOMStringMap & {
    analyticsEvent?: string;
    analyticsLabel?: string;
    analyticsValue?: string;
  };
};

export function AnalyticsClickListener() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const trackedElement = target?.closest<ClickTarget>("[data-analytics-event]");

      if (!trackedElement) return;

      const eventName = trackedElement.dataset.analyticsEvent;
      if (!eventName) return;

      trackEvent(eventName as Parameters<typeof trackEvent>[0], {
        label: trackedElement.dataset.analyticsLabel,
        value: trackedElement.dataset.analyticsValue,
        path: window.location.pathname
      });
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
