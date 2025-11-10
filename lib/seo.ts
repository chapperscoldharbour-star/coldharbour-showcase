import type { Metadata } from "next";
import defaultSeo from "@/next-seo.config";

type SeoConfig = typeof defaultSeo;

type MetaTag = {
  content: string;
  name?: string;
  property?: string;
  httpEquiv?: string;
};

type LinkTag = {
  rel: string;
  href: string;
  hrefLang?: string;
  media?: string;
  sizes?: string;
  type?: string;
  as?: string;
  crossOrigin?: string;
};

type SeoMerged = SeoConfig & {
  title?: string;
  facebook?: {
    appId?: string;
  };
  additionalMetaTags?: MetaTag[];
  additionalLinkTags?: LinkTag[];
};
type SeoOverrides = Partial<SeoMerged>;

const FALLBACK_CANONICAL = defaultSeo.canonical ?? "https://coldharbour.studio";

function toUrl(value?: string) {
  try {
    if (value) return new URL(value);
  } catch {
    // fall through to fallback
  }
  return new URL(FALLBACK_CANONICAL);
}

function mergeSeo(overrides?: SeoOverrides): SeoMerged {
  if (!overrides) {
    return { ...defaultSeo };
  }

  return {
    ...defaultSeo,
    ...overrides,
    openGraph: {
      ...(defaultSeo.openGraph ?? {}),
      ...(overrides.openGraph ?? {}),
    },
    twitter: {
      ...(defaultSeo.twitter ?? {}),
      ...(overrides.twitter ?? {}),
    },
    facebook:
      defaultSeo.facebook || overrides.facebook
        ? {
            ...(defaultSeo.facebook ?? {}),
            ...(overrides.facebook ?? {}),
          }
        : undefined,
    additionalMetaTags:
      overrides.additionalMetaTags ?? defaultSeo.additionalMetaTags,
    additionalLinkTags:
      overrides.additionalLinkTags ?? defaultSeo.additionalLinkTags,
  };
}

type OpenGraphImage = NonNullable<
  NonNullable<SeoMerged["openGraph"]>["images"]
>[number];

function metaTagsToOther(metaTags?: SeoMerged["additionalMetaTags"]) {
  if (!metaTags?.length) return undefined;

  return metaTags.reduce<Record<string, string>>(
    (acc: Record<string, string>, tag: MetaTag) => {
      const key = tag.name ?? tag.property ?? tag.httpEquiv;
      if (key) {
        acc[key] = tag.content;
      }
      return acc;
    },
    {}
  );
}

function resolveCanonical(canonical?: string, path?: string) {
  if (canonical) return canonical;
  if (path) {
    try {
      return new URL(path, FALLBACK_CANONICAL).toString();
    } catch {
      return new URL(path, FALLBACK_CANONICAL).toString();
    }
  }
  return FALLBACK_CANONICAL;
}

export function buildMetadata(
  overrides?: SeoOverrides,
  path?: string
): Metadata {
  const seo = mergeSeo(overrides);
  const canonical = resolveCanonical(seo.canonical, path);
  const metadataBaseUrl = toUrl(canonical);
  const origin = new URL(metadataBaseUrl.origin);

  return {
    title: seo.title ?? seo.defaultTitle,
    description: seo.description,
    metadataBase: origin,
    alternates: canonical
      ? {
          canonical,
        }
      : undefined,
    openGraph: seo.openGraph
      ? {
          title: seo.openGraph.title ?? seo.title ?? seo.defaultTitle,
          description: seo.openGraph.description ?? seo.description,
          url: seo.openGraph.url ?? canonical,
          siteName:
            seo.openGraph.siteName ??
            seo.openGraph.site_name ??
            metadataBaseUrl.hostname,
          images: seo.openGraph.images?.map((image: OpenGraphImage) => ({
            url: image.url,
            width: image.width,
            height: image.height,
            alt: image.alt,
            type: image.type,
          })),
          type: seo.openGraph.type ?? "website",
        }
      : undefined,
    twitter: seo.twitter
      ? {
          card:
            (seo.twitter.cardType as
              | "summary"
              | "summary_large_image"
              | "app"
              | "player") ?? "summary_large_image",
          site: seo.twitter.site,
          creator: seo.twitter.handle,
          title: seo.title ?? seo.defaultTitle,
          description: seo.description,
        }
      : undefined,
    other: metaTagsToOther(seo.additionalMetaTags),
  };
}
