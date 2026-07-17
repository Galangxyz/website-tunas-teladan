import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_LOGO,
  SITE_OG_IMAGE,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  ADDRESS,
} from "./config";

export const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",

  name: SITE_NAME,

  url: SITE_URL,

  logo: SITE_LOGO,

  image: SITE_OG_IMAGE,

  description: SITE_DESCRIPTION,

  email: CONTACT_EMAIL,

  telephone: CONTACT_PHONE,

  address: {
    "@type": "PostalAddress",
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.province,
    addressCountry: ADDRESS.country,
  },

  sameAs: [
    "https://www.facebook.com/SD.Tunas.Teladan",
    "https://www.facebook.com/share/1YKkjWm7JV/",
    "https://www.facebook.com/smptunasteladan.smptunasteladan",
    "https://www.instagram.com/tktunasteladan",
    "https://www.instagram.com/sdtunasteladan",
    "https://www.instagram.com/smp.tunasteladan",
  ],
};