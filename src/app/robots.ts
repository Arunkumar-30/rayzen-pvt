// app/robots.ts
import { MetadataRoute } from "next";


export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://rayzenpower.com";
  return {
    rules: [{
      userAgent: "*",
      allow: "/",
    },
    {
        userAgent: "Googlebot",
        allow: "/special-google-only/",
        disallow: ["/terms-and-conditions/"],
    }],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}