export type ClientFlowQuizStatus = "draft" | "preview" | "active" | "archived";

export type ClientFlowQuestionType = "single_choice" | "multiple_choice" | "text" | "textarea";

export type ClientFlowScoreKey =
  | "intentScore"
  | "budgetScore"
  | "urgencyScore"
  | "fitScore"
  | "trustScore"
  | "complexityScore";

export type ClientFlowScoreMap = Record<ClientFlowScoreKey, number>;

export type ClientFlowOption = {
  id: string;
  label: string;
  description?: string;
  score?: Partial<ClientFlowScoreMap>;
};

export type ClientFlowQuestion = {
  id: string;
  type: ClientFlowQuestionType;
  title: string;
  description?: string;
  required: boolean;
  options?: ClientFlowOption[];
  placeholder?: string;
  maxLength?: number;
};

export type ClientFlowAnswerValue = string | string[];

export type ClientFlowAnswers = Record<string, ClientFlowAnswerValue>;

export type ClientFlowContact = {
  name: string;
  contact: string;
  company?: string;
};

export type ClientFlowConsent = {
  personalData: boolean;
  marketing: boolean;
  consentVersion: string;
};

export type ClientFlowSegmentId = "hot" | "warm" | "cold" | "unqualified";

export type ClientFlowSegment = {
  id: ClientFlowSegmentId;
  title: string;
  minLeadValue: number;
  description: string;
};

export type ClientFlowOfferRoute = {
  id: string;
  title: string;
  cta: string;
  salesAngle: string;
  leadMagnet?: string;
  minLeadValue: number;
};

export type ClientFlowQuizConfig = {
  slug: string;
  version: string;
  status: ClientFlowQuizStatus;
  meta: {
    title: string;
    description: string;
    language: "ru" | "en";
  };
  brand: {
    name: string;
    domain?: string;
  };
  designPack: {
    theme: string;
    accent: string;
  };
  startScreen: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
  };
  questions: ClientFlowQuestion[];
  scoring: {
    weights: ClientFlowScoreMap;
  };
  segmentation: {
    segments: ClientFlowSegment[];
  };
  offerRouting: {
    routes: ClientFlowOfferRoute[];
  };
  contactGate: {
    title: string;
    description: string;
    submitLabel: string;
  };
  legal: {
    privacyPolicyUrl: string;
    consentUrl: string;
    consentText: string;
    marketingConsentText: string;
    consentVersion: string;
    cookieMode: "notice" | "opt_in";
  };
};

export type ClientFlowSubmissionResult = {
  submissionId: string;
  scores: ClientFlowScoreMap & { leadValue: number };
  segment: ClientFlowSegment;
  offerRoute: ClientFlowOfferRoute;
};
