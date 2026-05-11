import { z } from "zod";

export const scoreKeySchema = z.enum([
  "intentScore",
  "budgetScore",
  "urgencyScore",
  "fitScore",
  "trustScore",
  "complexityScore"
]);

export const scoreMapSchema = z.object({
  intentScore: z.number().min(0).max(100),
  budgetScore: z.number().min(0).max(100),
  urgencyScore: z.number().min(0).max(100),
  fitScore: z.number().min(0).max(100),
  trustScore: z.number().min(0).max(100),
  complexityScore: z.number().min(0).max(100)
});

export const answerValueSchema = z.union([
  z.string().trim().min(1).max(2000),
  z.array(z.string().trim().min(1).max(120)).min(1).max(12)
]);

export const answersSchema = z.record(z.string().min(1).max(80), answerValueSchema);

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  contact: z.string().trim().min(3).max(120),
  company: z.string().trim().max(120).optional()
});

export const consentSchema = z.object({
  personalData: z.literal(true),
  marketing: z.boolean().default(false),
  consentVersion: z.string().trim().min(1).max(40)
});

const optionSchema = z.object({
  id: z.string().trim().min(1).max(80),
  label: z.string().trim().min(1).max(180),
  description: z.string().trim().max(320).optional(),
  score: scoreMapSchema.partial().optional()
});

const questionSchema = z
  .object({
    id: z.string().trim().min(1).max(80),
    type: z.enum(["single_choice", "multiple_choice", "text", "textarea"]),
    title: z.string().trim().min(1).max(220),
    description: z.string().trim().max(420).optional(),
    required: z.boolean(),
    options: z.array(optionSchema).optional(),
    placeholder: z.string().trim().max(180).optional(),
    maxLength: z.number().int().min(20).max(2000).optional()
  })
  .superRefine((question, ctx) => {
    if ((question.type === "single_choice" || question.type === "multiple_choice") && !question.options?.length) {
      ctx.addIssue({
        code: "custom",
        message: "Choice questions require options.",
        path: ["options"]
      });
    }
  });

export const quizConfigSchema = z.object({
  slug: z.string().trim().min(1).max(100),
  version: z.string().trim().min(1).max(40),
  status: z.enum(["draft", "preview", "active", "archived"]),
  meta: z.object({
    title: z.string().trim().min(1).max(160),
    description: z.string().trim().min(1).max(320),
    language: z.enum(["ru", "en"])
  }),
  brand: z.object({
    name: z.string().trim().min(1).max(120),
    domain: z.string().trim().max(160).optional()
  }),
  designPack: z.object({
    theme: z.string().trim().min(1).max(80),
    accent: z.string().trim().min(1).max(40)
  }),
  startScreen: z.object({
    eyebrow: z.string().trim().min(1).max(80),
    title: z.string().trim().min(1).max(180),
    description: z.string().trim().min(1).max(420),
    buttonLabel: z.string().trim().min(1).max(80)
  }),
  questions: z.array(questionSchema).min(1).max(24),
  scoring: z.object({
    weights: scoreMapSchema
  }),
  segmentation: z.object({
    segments: z.array(
      z.object({
        id: z.enum(["hot", "warm", "cold", "unqualified"]),
        title: z.string().trim().min(1).max(120),
        minLeadValue: z.number().min(0).max(100),
        description: z.string().trim().min(1).max(320)
      })
    )
  }),
  offerRouting: z.object({
    routes: z.array(
      z.object({
        id: z.string().trim().min(1).max(80),
        title: z.string().trim().min(1).max(140),
        cta: z.string().trim().min(1).max(120),
        salesAngle: z.string().trim().min(1).max(260),
        leadMagnet: z.string().trim().max(160).optional(),
        minLeadValue: z.number().min(0).max(100)
      })
    )
  }),
  contactGate: z.object({
    title: z.string().trim().min(1).max(180),
    description: z.string().trim().min(1).max(420),
    submitLabel: z.string().trim().min(1).max(80)
  }),
  legal: z.object({
    privacyPolicyUrl: z.string().trim().min(1).max(180),
    consentUrl: z.string().trim().min(1).max(180),
    consentText: z.string().trim().min(1).max(320),
    marketingConsentText: z.string().trim().min(1).max(320),
    consentVersion: z.string().trim().min(1).max(40),
    cookieMode: z.enum(["notice", "opt_in"])
  })
});

export const quizSubmitRequestSchema = z.object({
  answers: answersSchema,
  contact: contactSchema,
  consent: consentSchema,
  source: z
    .object({
      path: z.string().trim().max(260).optional(),
      sessionId: z.string().trim().max(120).optional(),
      utm: z.record(z.string().max(40), z.string().max(180)).optional()
    })
    .optional()
});

export const quizEventRequestSchema = z.object({
  eventName: z.string().trim().min(1).max(80),
  sessionId: z.string().trim().max(120).optional(),
  submissionId: z.string().trim().max(120).optional(),
  payload: z.record(z.string().max(80), z.unknown()).optional()
});
