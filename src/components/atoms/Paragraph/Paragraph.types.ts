import { Children, Sizes } from "@/types/core.types";
import { ElementType } from "react";

export type ParagraphProps = Children & {
  className?: string;
  id?: string;
  nativeProps?: object;
  as?: ElementType;
  size?: Extract<Sizes, "xs" | "sm" | "md" | "lg">;
  isBalanced?: boolean;
};
