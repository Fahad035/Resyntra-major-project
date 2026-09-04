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
    href: "#",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "#",
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
    href: "#",
    label: "YouTube",
  },
];

export default footerColumns;