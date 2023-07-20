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
    href: "https://hellodun.com",
  },
  {
    Icon: <GitPullRequest size={24} />,
    label: "Projects",
    href: "https://github.com/hellodun",
  },
  {
    Icon: <Newspaper size={24} />,
    label: "Blog",
    href: "https://blog.hellodun.com",
  },
  {
    Icon: <User size={24} />,
    label: "About me",
    href: "https://hellodun.com/about",
  },
];

export const socialIcons = [
  {
    Icon: <Linkedin size={24} />,
    label: `Reach me on LinkedIn`,
    href: "https://linkedin.com/in/duncan-gatuthu",
  },
  {
    Icon: <Github size={24} />,
    label: `Check out my Github`,
    href: "https://github.com/hellodun",
  },
  {
    Icon: <Mail size={24} />,
    label: `Email me`,
    href: "https://iamdun254@gmail.com",
  },
];
