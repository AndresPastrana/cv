import { DM_Sans } from "next/font/google";
import { Space_Mono } from "next/font/google";

const fontHeading = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: "400",
});

export { fontHeading, fontBody };
