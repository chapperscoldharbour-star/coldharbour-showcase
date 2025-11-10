const defaultSeo = {
  titleTemplate: "%s | Coldharbour",
  defaultTitle: "Coldharbour Studio",
  description:
    "Immersive AI imagery, conversational agents, and narrative websites built with motion craft and care.",
  canonical: "https://coldharbour.studio",
  openGraph: {
    url: "https://coldharbour.studio",
    title: "Coldharbour Studio",
    description:
      "Immersive AI imagery, conversational agents, and narrative websites built with motion craft and care.",
    siteName: "Coldharbour",
    site_name: undefined as string | undefined,
    images: [
      {
        url: "https://coldharbour.studio/og.jpg",
        width: 1200,
        height: 630,
        alt: "Coldharbour Studio",
        type: undefined as string | undefined,
      },
    ],
  },
  twitter: {
    handle: "@coldharbour",
    site: "@coldharbour",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      property: "theme-color",
      content: "#05060a",
    },
  ],
  additionalLinkTags: undefined as
    | {
        rel: string;
        href: string;
        hrefLang?: string;
        media?: string;
        sizes?: string;
        type?: string;
      }[]
    | undefined,
  facebook: undefined as { appId?: string } | undefined,
};

export default defaultSeo;
