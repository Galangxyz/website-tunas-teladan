import {
  SITE_NAME,
  SITE_URL,
} from "./config";

interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  publishedTime: string;
}

export function articleSchema({
  title,
  description,
  image,
  slug,
  publishedTime,
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",

    "@type": "NewsArticle",

    headline: title,

    description,

    image: [`${SITE_URL}${image}`],

    datePublished: publishedTime,

    dateModified: publishedTime,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/berita/${slug}`,
    },

    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },

    publisher: {
      "@type": "Organization",

      name: SITE_NAME,

      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}