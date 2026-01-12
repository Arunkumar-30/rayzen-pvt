import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rayzenpower.com";

  // Main routes
  const routes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/career",
  ];

  // Services subpages
  const serviceSubpages = [
    "solar-power-installation",
    "home-automation",
    "hybrid-systems",
    "lithium-ess",
    "cctv-security",
  ];

  // Combine main routes with service subpages
  const allRoutes = [
    ...routes,
    ...serviceSubpages.map((service) => `/services/${service}`),
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));
}
