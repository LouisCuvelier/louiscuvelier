import { ReactNode } from "react";
import { ObjectValues } from "@/types/utils.types";

export type Children = { children: ReactNode };

export const SIZES = ["3xs", "2xs", "xs", "sm", "md", "lg", "xl"] as const;
export type Sizes = (typeof SIZES)[number];

export const COMMON_VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  GHOST: "ghost",
  OUTLINE: "outline",
  NEUTRAL: "neutral",
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  DESTRUCTIVE: "destructive",
} as const;
export type CommonVariants = ObjectValues<typeof COMMON_VARIANTS>;

export type SearchParams = Record<string, string>;
