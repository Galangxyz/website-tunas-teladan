import {
  SITE_NAME,
  SITE_URL,
} from "./config";

export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  name: SITE_NAME,

  url: SITE_URL,

  inLanguage: "id-ID",
};