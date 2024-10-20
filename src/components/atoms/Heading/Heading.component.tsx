import { HeadingProps } from "./Heading.types";
import { cn, cv } from "@/utils/classNames.utils";
import { getHeadingSize } from "@/utils/sizes.utils";

export const headingClasses = cv({
  base: "scroll-m-20 text-foreground-heading font-heading",
  variants: {
    size: {
      "1": "font-bold tracking-tight text-7xl",
      "2": "font-bold text-5xl tracking-tight",
      "3": "font-bold text-3xl tracking-normal",
      "4": "font-bold text-xl tracking-wide",
      "5": "font-bold text-base tracking-wide",
      "6": "font-bold text-xs tracking-wide",
    },
  },
});

function Heading({
  className = "",
  id,
  nativeProps,
  as: Tag = "h1",
  children,
  size,
  isBalanced = false,
  slot,
}: HeadingProps) {
  return (
    <Tag
      {...nativeProps}
      {...(id && { id })}
      {...(slot && { slot })}
      className={cn(
        headingClasses({
          size: size ? size : getHeadingSize(Tag),
        }),
        isBalanced ? "text-balance" : "text-pretty",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export default Heading;
