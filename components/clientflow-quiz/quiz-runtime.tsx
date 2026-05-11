"use client";

import { useMemo, useState } from "react";
import styles from "@/components/clientflow-quiz/quiz-runtime.module.css";
import type {
  ClientFlowAnswerValue,
  ClientFlowAnswers,
  ClientFlowContact,
  ClientFlowQuizConfig,
  ClientFlowSubmissionResult
} from "@/lib/clientflow-quiz/types";

type QuizStep = "start" | "questions" | "contact" | "result";

type SubmitResponse =
  | ({ ok: true } & ClientFlowSubmissionResult)
  | { ok: false; error: { code: string; message: string } };

function getSessionId() {
  if (typeof window === "undefined") return "";
  const key = "cfq-session-id";
  const existing = window.sessionStorage.getItem(key);
  if (existing) return existing;
  const next = crypto.randomUUID();
  window.sessionStorage.setItem(key, next);
  return next;
}

function hasAnswer(value: ClientFlowAnswerValue | undefined) {
  if (Array.isArray(value)) return value.length > 0;
  return Boolean(value?.trim());
}

export function QuizRuntime({ config }: { config: ClientFlowQuizConfig }) {
  const [step, setStep] = useState<QuizStep>("start");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<ClientFlowAnswers>({});
  const [contact, setContact] = useState<ClientFlowContact>({ name: "", contact: "", company: "" });
  const [personalDataConsent, setPersonalDataConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<ClientFlowSubmissionResult | null>(null);

  const currentQuestion = config.questions[questionIndex];
  const progress = step === "start" ? 0 : Math.round(((questionIndex + 1) / config.questions.length) * 100);
  const sessionId = useMemo(() => getSessionId(), []);

  async function trackEvent(eventName: string, payload?: Record<string, unknown>) {
    try {
      await fetch(`/api/quiz/${config.slug}/event`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventName, sessionId, payload })
      });
    } catch {
      // Analytics must never block quiz interaction.
    }
  }

  function startQuiz() {
    setStep("questions");
    void trackEvent("quiz_started");
  }

  function setAnswer(questionId: string, value: ClientFlowAnswerValue) {
    setAnswers((current) => ({ ...current, [questionId]: value }));
    setError("");
    void trackEvent("question_answered", { questionId });
  }

  function toggleMultiple(questionId: string, optionId: string) {
    const current = answers[questionId];
    const values = Array.isArray(current) ? current : [];
    const next = values.includes(optionId) ? values.filter((value) => value !== optionId) : [...values, optionId];
    setAnswer(questionId, next);
  }

  function goNext() {
    if (currentQuestion.required && !hasAnswer(answers[currentQuestion.id])) {
      setError("Ответьте на вопрос, чтобы продолжить.");
      return;
    }

    if (questionIndex < config.questions.length - 1) {
      setQuestionIndex((current) => current + 1);
      setError("");
      return;
    }

    setStep("contact");
    setError("");
    void trackEvent("contact_gate_shown");
  }

  function goBack() {
    if (step === "contact") {
      setStep("questions");
      setQuestionIndex(config.questions.length - 1);
      void trackEvent("question_back_clicked");
      return;
    }

    if (questionIndex > 0) {
      setQuestionIndex((current) => current - 1);
      void trackEvent("question_back_clicked");
    } else {
      setStep("start");
    }
  }

  async function submitQuiz() {
    if (contact.name.trim().length < 2 || contact.contact.trim().length < 3) {
      setError("Укажите имя и способ связи.");
      return;
    }

    if (!personalDataConsent) {
      setError("Нужно согласие на обработку персональных данных.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    void trackEvent("contact_submitted");

    try {
      const response = await fetch(`/api/quiz/${config.slug}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers,
          contact,
          consent: {
            personalData: personalDataConsent,
            marketing: marketingConsent,
            consentVersion: config.legal.consentVersion
          },
          source: {
            path: window.location.pathname,
            sessionId
          }
        })
      });

      const payload = (await response.json()) as SubmitResponse;
      if (!response.ok || !payload.ok) {
        setError(payload.ok ? "Не удалось обработать результат." : payload.error.message);
        return;
      }

      setResult({
        submissionId: payload.submissionId,
        scores: payload.scores,
        segment: payload.segment,
        offerRoute: payload.offerRoute
      });
      setStep("result");
      void trackEvent("quiz_completed", { submissionId: payload.submissionId });
    } catch {
      setError("Не удалось отправить ответы. Попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={styles.cfqShell}>
      <div className={styles.cfqContainer}>
        <section className={styles.cfqPanel}>
          <div className={styles.cfqHeader}>
            <span>{config.brand.name}</span>
            <span>{config.meta.title}</span>
          </div>
          <div className={styles.cfqProgress}>
            <div className={styles.cfqProgressBar} style={{ width: `${progress}%` }} />
          </div>

          {step === "start" && (
            <div className={styles.cfqBody}>
              <div className={styles.cfqEyebrow}>{config.startScreen.eyebrow}</div>
              <h1 className={styles.cfqTitle}>{config.startScreen.title}</h1>
              <p className={styles.cfqText}>{config.startScreen.description}</p>
              <div className={styles.cfqActions}>
                <button className={styles.cfqButton} type="button" onClick={startQuiz}>
                  {config.startScreen.buttonLabel}
                </button>
              </div>
            </div>
          )}

          {step === "questions" && currentQuestion && (
            <div className={styles.cfqBody}>
              <div className={styles.cfqEyebrow}>
                Вопрос {questionIndex + 1} из {config.questions.length}
              </div>
              <h1 className={styles.cfqTitle}>{currentQuestion.title}</h1>
              {currentQuestion.description && <p className={styles.cfqText}>{currentQuestion.description}</p>}

              {(currentQuestion.type === "single_choice" || currentQuestion.type === "multiple_choice") && (
                <div className={styles.cfqOptions}>
                  {currentQuestion.options?.map((option) => {
                    const value = answers[currentQuestion.id];
                    const pressed = Array.isArray(value) ? value.includes(option.id) : value === option.id;
                    return (
                      <button
                        className={styles.cfqOption}
                        key={option.id}
                        type="button"
                        aria-pressed={pressed}
                        onClick={() => {
                          if (currentQuestion.type === "multiple_choice") {
                            toggleMultiple(currentQuestion.id, option.id);
                          } else {
                            setAnswer(currentQuestion.id, option.id);
                          }
                        }}
                      >
                        <strong>{option.label}</strong>
                        {option.description && <span className={styles.cfqOptionDescription}>{option.description}</span>}
                      </button>
                    );
                  })}
                </div>
              )}

              {currentQuestion.type === "text" && (
                <div className={styles.cfqFieldGrid}>
                  <input
                    className={styles.cfqInput}
                    value={(answers[currentQuestion.id] as string | undefined) ?? ""}
                    maxLength={currentQuestion.maxLength ?? 240}
                    placeholder={currentQuestion.placeholder}
                    onChange={(event) => setAnswer(currentQuestion.id, event.target.value)}
                  />
                </div>
              )}

              {currentQuestion.type === "textarea" && (
                <div className={styles.cfqFieldGrid}>
                  <textarea
                    className={styles.cfqTextarea}
                    value={(answers[currentQuestion.id] as string | undefined) ?? ""}
                    maxLength={currentQuestion.maxLength ?? 1000}
                    placeholder={currentQuestion.placeholder}
                    onChange={(event) => setAnswer(currentQuestion.id, event.target.value)}
                  />
                </div>
              )}

              {error && <div className={styles.cfqError}>{error}</div>}
              <div className={styles.cfqActions}>
                <button className={`${styles.cfqButton} ${styles.cfqButtonSecondary}`} type="button" onClick={goBack}>
                  Назад
                </button>
                <button className={styles.cfqButton} type="button" onClick={goNext}>
                  {questionIndex < config.questions.length - 1 ? "Дальше" : "К результату"}
                </button>
              </div>
            </div>
          )}

          {step === "contact" && (
            <div className={styles.cfqBody}>
              <div className={styles.cfqEyebrow}>Контакт</div>
              <h1 className={styles.cfqTitle}>{config.contactGate.title}</h1>
              <p className={styles.cfqText}>{config.contactGate.description}</p>
              <div className={styles.cfqFieldGrid}>
                <input
                  className={styles.cfqInput}
                  value={contact.name}
                  maxLength={80}
                  placeholder="Имя"
                  onChange={(event) => setContact((current) => ({ ...current, name: event.target.value }))}
                />
                <input
                  className={styles.cfqInput}
                  value={contact.contact}
                  maxLength={120}
                  placeholder="Telegram, телефон или email"
                  onChange={(event) => setContact((current) => ({ ...current, contact: event.target.value }))}
                />
                <input
                  className={styles.cfqInput}
                  value={contact.company ?? ""}
                  maxLength={120}
                  placeholder="Компания или проект"
                  onChange={(event) => setContact((current) => ({ ...current, company: event.target.value }))}
                />
              </div>
              <label className={styles.cfqConsent}>
                <input
                  type="checkbox"
                  checked={personalDataConsent}
                  onChange={(event) => setPersonalDataConsent(event.target.checked)}
                />
                <span>
                  {config.legal.consentText} <a href={config.legal.privacyPolicyUrl}>Политика</a> и{" "}
                  <a href={config.legal.consentUrl}>согласие</a>.
                </span>
              </label>
              <label className={styles.cfqConsent}>
                <input
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(event) => setMarketingConsent(event.target.checked)}
                />
                <span>{config.legal.marketingConsentText}</span>
              </label>
              {error && <div className={styles.cfqError}>{error}</div>}
              <div className={styles.cfqActions}>
                <button className={`${styles.cfqButton} ${styles.cfqButtonSecondary}`} type="button" onClick={goBack}>
                  Назад
                </button>
                <button className={styles.cfqButton} type="button" disabled={isSubmitting} onClick={submitQuiz}>
                  {isSubmitting ? "Считаю..." : config.contactGate.submitLabel}
                </button>
              </div>
            </div>
          )}

          {step === "result" && result && (
            <div className={styles.cfqBody}>
              <div className={styles.cfqEyebrow}>Результат Phase 1</div>
              <h1 className={styles.cfqTitle}>{result.segment.title}</h1>
              <p className={styles.cfqText}>{result.segment.description}</p>
              <div className={styles.cfqResultGrid}>
                <div className={styles.cfqResultCard}>
                  <span>Lead value</span>
                  <strong>{result.scores.leadValue}/100</strong>
                </div>
                <div className={styles.cfqResultCard}>
                  <span>Маршрут</span>
                  <strong>{result.offerRoute.title}</strong>
                </div>
                <div className={styles.cfqResultCard}>
                  <span>Следующий шаг</span>
                  <strong>{result.offerRoute.cta}</strong>
                </div>
              </div>
              <p className={styles.cfqText}>
                Интеграции Telegram, CRM, AI и PostHog в Phase 1 намеренно отключены. Результат рассчитан
                детерминированными правилами.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
