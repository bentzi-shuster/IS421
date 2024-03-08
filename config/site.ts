export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "The Explorer Apparel",
  description: "Experience the World in Style.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "#about-card",
    },
    {
      label: "Where to Buy",
      href: "#retailer-banner",
    },
    {
      label: "Login",
      href: "/api/auth/login",
      loggedIn: false,
    },
    {
      label: "Logout",
      href: "/api/auth/logout",
      loggedIn: true,
    },
    { label: "Cal", href: "/cal" },
    { label: "Cal2", href: "/cal2" },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "About Us",
      href: "#about-card",
    },
    {
      label: "Where to Buy",
      href: "#retailer-banner",
    },
    {
      label: "Login",
      href: "/api/auth/login",
      loggedIn: false,
    },
    {
      label: "Logout",
      href: "/api/auth/logout",
      loggedIn: true,
    },
    { label: "Cal", href: "/cal" },
    { label: "Cal2", href: "/cal2" },
  ],
  links: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com/",
    tiktok: "https://tiktok.com",
  },
};
