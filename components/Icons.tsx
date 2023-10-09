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
    Icon: <LayoutGrid className="2xl:h-[40px] 2xl:w-[40px]" />,
    label: "Home",
    href: "/",
  },
  {
    Icon: <GitPullRequest className="2xl:h-[40px] 2xl:w-[40px]" />,
    label: "Projects",
    href: "/projects",
  },
  {
    Icon: <Newspaper className="2xl:h-[40px] 2xl:w-[40px]" />,
    label: "Blog",
    href: "/blogs",
  },
  {
    Icon: <User className="2xl:h-[40px] 2xl:w-[40px]" />,
    label: "About me",
    href: "/about",
  },
];

export const socialIcons = [
  {
    Icon: <Linkedin className="2xl:h-[40px] 2xl:w-[40px]" />,
    label: `Reach me on LinkedIn`,
    href: "https://linkedin.com/in/duncan-gatuthu",
  },
  {
    Icon: <Github className="2xl:h-[40px] 2xl:w-[40px]" />,
    label: `Check out my Github`,
    href: "https://github.com/hellodun",
  },
  {
    Icon: <Mail className="2xl:h-[40px] 2xl:w-[40px]" />,
    label: `Email me`,
    href: "mailto:duncodes@gmail.com",
  },
];
