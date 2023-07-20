"use client";

import { ThemeProvider } from "next-themes";

type ReactProps = {
  children: JSX.Element;
};

const Providers = ({ children }: ReactProps) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
