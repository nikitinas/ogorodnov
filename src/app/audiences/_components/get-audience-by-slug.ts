import { audiences, type Audience } from "@/data/audiences";

export function getAudienceBySlug(slug: string): Audience | undefined {
  return audiences.find((audience) => audience.slug === slug);
}
