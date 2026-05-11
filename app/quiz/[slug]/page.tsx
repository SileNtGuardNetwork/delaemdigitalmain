import type { Metadata } from "next";
import { QuizRuntime } from "@/components/clientflow-quiz/quiz-runtime";
import {
  getClientFlowQuizSlugs,
  requireClientFlowQuizConfig
} from "@/lib/clientflow-quiz/config/registry";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getClientFlowQuizSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = requireClientFlowQuizConfig(slug);

  return {
    title: config.meta.title,
    description: config.meta.description,
    robots: {
      index: config.status === "active",
      follow: config.status === "active"
    }
  };
}

export default async function QuizPage({ params }: PageProps) {
  const { slug } = await params;
  const config = requireClientFlowQuizConfig(slug);

  return <QuizRuntime config={config} />;
}
