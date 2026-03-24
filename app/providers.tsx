"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type ReactProps = {
  children: ReactNode;
};

const Providers = ({ children }: ReactProps) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
