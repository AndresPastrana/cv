"use client";
import { useContext } from "react";

import {
  Projects,
  Header,
  Skills,
  WhoAmI,
  Experience,
} from "@/components/home";
import { ThemeContext, themes } from "@/providers/Theme";

export default function Component() {
  const context = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col min-h-[100dvh] bg-background text-foreground ${
        context.theme === themes.DARK ? "dark" : ""
      }`}
    >
      <Header />
      <main className="flex-1">
        {/* Who am i */}
        <WhoAmI />
        {/* Skills */}
        <Skills />

        {/* Experinece */}
        <Experience />
        {/* Projects */}
        <Projects />
      </main>
    </div>
  );
}
