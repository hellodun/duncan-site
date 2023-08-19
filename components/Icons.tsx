import {
  LayoutGrid,
  GitPullRequest,
  Newspaper,
  User,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

export const myName = "helloDun";

export const navIcons = [
  {
    Icon: <LayoutGrid size={24} />,
    label: "Home",
    href: "/",
  },
  {
    Icon: <GitPullRequest size={24} />,
    label: "Projects",
    href: "#",
  },
  {
    Icon: <Newspaper size={24} />,
    label: "Blog",
    href: "#",
  },
  {
    Icon: <User size={24} />,
    label: "About me",
    href: "/about",
  },
];

export const socialIcons = [
  {
    Icon: <Linkedin size={24} />,
    label: `Reach me on LinkedIn`,
    // href: "https://linkedin.com/in/duncan-gatuthu",
    href: "#",
  },
  {
    Icon: <Github size={24} />,
    label: `Check out my Github`,
    // href: "https://github.com/hellodun",
    href: "#",
  },
  {
    Icon: <Mail size={24} />,
    label: `Email me`,
    // href: "https://iamdun254@gmail.com",
    href: "#",
  },
];
