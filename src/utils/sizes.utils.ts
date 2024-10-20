import { SIZES, Sizes } from "@/types/core.types";
import { ElementType } from "react";

export function scaleSize(
  size: Sizes,
  direction: "up" | "down",
  step: number = 1,
) {
  const indexChange = direction === "up" ? step : -step;
  const sizeCount = SIZES.length;
  const currentIndex = SIZES.findIndex((el) => el === size);

  const newIndex = currentIndex + indexChange;

  if (newIndex >= sizeCount) {
    return SIZES[sizeCount - 1];
  } else if (newIndex < 0) {
    return SIZES[0];
  } else {
    return SIZES[newIndex];
  }
}

export function getHeadingSize(tag: ElementType) {
  return tag === "h1"
    ? "1"
    : tag === "h2"
      ? "2"
      : tag === "h3"
        ? "3"
        : tag === "h4"
          ? "4"
          : tag === "h5"
            ? "5"
            : tag === "h6"
              ? "6"
              : undefined;
}
