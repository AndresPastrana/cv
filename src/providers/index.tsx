"use client";

import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "./Theme";

export const ProviderWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
