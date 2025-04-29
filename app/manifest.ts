import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Bridge Co.",
    short_name: "The Bridge",
    description: "Your Bridge to Growth — Where brands meet results, and influencers drive impact.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0DCCC1",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
