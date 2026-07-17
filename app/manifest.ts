import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sekolah Tunas Teladan Palembang",

    short_name: "Tunas Teladan",

    description:
      "Website resmi Sekolah Tunas Teladan Palembang yang menyelenggarakan pendidikan TK, SD, dan SMP dengan pembelajaran berkualitas, karakter, prestasi, dan kreativitas.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#0F4C81",

    orientation: "portrait",

    lang: "id",

    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}