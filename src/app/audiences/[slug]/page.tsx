import { Metadata } from "next";
import { notFound } from "next/navigation";
import { audiences } from "@/data/audiences";
import { AudiencePageTemplate } from "../_components/audience-page-template";

type AudiencePageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return audiences.map((audience) => ({ slug: audience.slug }));
}

export async function generateMetadata({
  params,
}: AudiencePageProps): Promise<Metadata> {
  const audience = audiences.find((item) => item.slug === params.slug);

  if (!audience) {
    return {};
  }

  return {
    title: audience.name,
    description: audience.description,
  };
}

export default function AudiencePage({ params }: AudiencePageProps) {
  const { slug } = params;
  const audience = audiences.find((item) => item.slug === slug);

  if (!audience) {
    notFound();
  }

  return <AudiencePageTemplate audience={audience} />;
}
