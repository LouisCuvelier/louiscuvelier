import { extendTailwindMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";
import { TV, tv } from "tailwind-variants";

const twMergeConfig = {
  extend: {
    classGroups: {
      "border-width": ["border-input-width"],
      "border-radius": ["rounded-radius"],
      "ring-width": ["ring-input-width"],
      "font-size": [
        {
          "fluid-text": [
            "3xs",
            "2xs",
            "xs",
            "sm",
            "base",
            "lg",
            "xl",
            "2xl",
            "3xl",
            "4xl",
            "5xl",
            "6xl",
            "7xl",
            "8xl",
            "9xl",
          ],
        },
      ],
    },
  },
};

const twMerge = extendTailwindMerge(twMergeConfig);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cv: TV = (options, config) =>
  tv(options, { twMergeConfig: twMergeConfig, ...config });
