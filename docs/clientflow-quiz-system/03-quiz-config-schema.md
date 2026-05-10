# Quiz Config Schema

## Goal

Every quiz must be described by config, not hardcoded business logic.

## Top-level shape

```ts
export type ClientFlowQuizConfig = {
  slug: string;
  version: string;
  status: 'draft' | 'preview' | 'active' | 'archived';
  meta: QuizMeta;
  brand: BrandConfig;
  designPack: DesignPack;
  nichePack: NichePack;
  startScreen: StartScreen;
  questions: QuizQuestion[];
  branching: BranchingRule[];
  scoring: ScoringConfig;
  segmentation: SegmentationConfig;
  offerRouting: OfferRoutingConfig;
  resultScreens: ResultScreenConfig[];
  contactGate: ContactGateConfig;
  rewards: RewardConfig[];
  notifications: NotificationConfig;
  integrations: IntegrationConfig;
  analytics: AnalyticsConfig;
  legal: LegalConfig;
  experiments?: ExperimentConfig[];
};
```

## Question types

- single_choice
- multiple_choice
- text
- textarea
- number
- budget_range
- timeline
- contact
- consent

## Multi-score model

Each answer may affect:

- intentScore
- budgetScore
- urgencyScore
- fitScore
- trustScore
- complexityScore

Total lead value is calculated after weighted normalization.

## Segments

Segments must be deterministic. AI can explain a segment, but must not invent it.

## Offer routing

Offer routing selects:

- recommended product
- next CTA
- sales angle
- lead magnet
- follow-up path

## Design pack

Design pack defines visual language:

- palette
- typography
- background style
- card style
- icon style
- motion style
- result dashboard style

## Legal config

Legal config defines:

- privacy policy URL
- cookie policy URL
- consent text
- marketing consent text
- consent version
- cookie mode

## Config quality rule

A quiz config is not valid until it passes typecheck, content QA, design QA, conversion QA and launch QA.
