import { ParagraphProps } from "./Paragraph.types";
import { cn, cv } from "@/utils/classNames.utils";

export const paragraphClasses = cv({
  base: "text-foreground-body",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    isBalanced: {
      true: "text-balance",
      false: "text-pretty",
    },
  },
});

function Paragraph({
  className = "",
  id,
  nativeProps,
  size = "md",
  children,
  as: Tag = "p",
  isBalanced,
}: ParagraphProps) {
  return (
    <Tag
      {...nativeProps}
      {...(id && { id })}
      className={cn(
        paragraphClasses({
          size,
          isBalanced,
        }),
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export default Paragraph;
