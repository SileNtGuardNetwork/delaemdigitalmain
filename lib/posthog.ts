import posthog from "posthog-js";

let initialized = false;

export function initPostHog() {
  if (typeof window === "undefined" || initialized) return;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return;

  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    session_recording: {
      maskAllInputs: false,
      maskInputOptions: {
        password: true
      }
    },
    capture_pageview: true,
    capture_pageleave: true
  });

  initialized = true;
}

export { posthog };
