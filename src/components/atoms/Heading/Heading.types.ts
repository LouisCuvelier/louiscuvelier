import { ElementType } from "react";
import { Children } from "@/types/core.types";

export type HeadingProps = Children & {
  className?: string;
  id?: string;
  nativeProps?: object;
  as?: ElementType;
  size?: "1" | "2" | "3" | "4" | "5" | "6";
  isBalanced?: boolean;
  slot?: string;
};
