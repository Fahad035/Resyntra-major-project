import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { SiBluesky } from "react-icons/si";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Roadmap", href: "#" },
      { label: "API", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/Fahad035/Resyntra-major-project",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/md-fahad-71505a2b6",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/MdFahad1362761",
    label: "X",
  },
  {
    icon: SiBluesky,
    href: "#",
    label: "Bluesky",
  },
  {
    icon: FaDiscord,
    href: "#",
    label: "Discord",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FaFacebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@TechMorph-w3h",
    label: "YouTube",
  },
];

export default footerColumns;