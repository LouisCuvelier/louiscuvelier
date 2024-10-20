"use client";

import {
  ButtonAsButtonProps,
  ButtonAsNativeLinkProps,
  ButtonAsNextLinkProps,
  ButtonProps,
} from "./Button.types";
import Link from "next/link";
import { cloneElement, ReactElement, useCallback } from "react";
import { LoaderCircle } from "lucide-react";
import { cn, cv } from "@/utils/classNames.utils";
import { COMMON_VARIANTS } from "@/types/core.types";
import { MinimumTouchTarget } from "@/components/atoms/MinimumTouchTarget";

// Almost same style as Toggle
const buttonClasses = cv({
  base: [
    "group/button font-heading relative grid grid-cols-[auto_1fr_auto] items-center justify-center gap-2 border-input-width text-center font-bold transition btn-text-shadow",
  ],
  variants: {
    isDisabled: {
      true: [
        // We also use "aria-disabled" to disable a classic link (<a>)
        "aria-disabled:pointer-events-none aria-disabled:bg-muted-background aria-disabled:text-muted-foreground aria-disabled:hover:bg-muted-background",
        "data-[disabled]:cursor-not-allowed data-[disabled]:bg-muted-background data-[disabled]:text-muted-foreground data-[disabled]:hover:bg-muted-background",
      ],
    },
    as: {
      nextLink: "focus-visible:focus-ring",
      nativeLink: "focus-visible:focus-ring",
      button: "outline-none data-[focus-visible]:focus-ring",
    },
    variant: {
      [COMMON_VARIANTS.PRIMARY]:
        "btn-radius border-transparent bg-hatch-primary text-primary-foreground hover:border-primary-background/80 data-[active]:border-primary-background/70 active:border-primary-background/70",
      [COMMON_VARIANTS.SECONDARY]:
        "btn-radius bg-secondary-background text-secondary-foreground border-transparent hover:bg-secondary-background/80 data-[active]:bg-secondary-background/70 active:bg-secondary-background/70",
      [COMMON_VARIANTS.OUTLINE]:
        "btn-radius border-input-border hover:border-transparent data-[active]:border-transparent active:border-transparent hover:bg-input-border/80 data-[active]:bg-input-border/70 active:bg-input-border/70 text-foreground-heading backdrop-blur-lg bg-background/20 data-[disabled]:hover:border-input-border",
      [COMMON_VARIANTS.GHOST]:
        "border-transparent hover:bg-input-border/80 data-[active]:bg-input-border/70 active:bg-input-border/70 text-foreground-heading backdrop-blur-lg data-[disabled]:bg-transparent data-[disabled]:hover:bg-transparent",
      [COMMON_VARIANTS.DESTRUCTIVE]:
        "btn-radius border-transparent bg-destructive-background text-destructive-foreground hover:bg-destructive-background/80 data-[active]:bg-destructive-background/70 active:bg-destructive-background/70",
    },
    size: {
      "2xs": "text-3xs rounded-[calc(var(--radius)*0.7)]",
      xs: "text-2xs rounded-[calc(var(--radius)*0.8)]",
      sm: "text-xs rounded-[calc(var(--radius)*0.9)]",
      md: "text-sm rounded-radius",
      lg: "text-base rounded-[calc(var(--radius)*1.1)]",
    },
    iconOnly: {
      true: "",
      false: "",
    },
    isLoading: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      size: "2xs",
      iconOnly: false,
      className: "px-3 py-1",
    },
    {
      size: "xs",
      iconOnly: false,
      className: "px-4 py-1.5",
    },
    {
      size: "sm",
      iconOnly: false,
      className: "px-5 py-2",
    },
    {
      size: "md",
      iconOnly: false,
      className: "px-6 py-2.5",
    },
    {
      size: "lg",
      iconOnly: false,
      className: "px-7 py-3",
    },
    {
      size: "2xs",
      iconOnly: true,
      className: "p-1",
    },
    {
      size: "xs",
      iconOnly: true,
      className: "p-1.5",
    },
    {
      size: "sm",
      iconOnly: true,
      className: "p-2",
    },
    {
      size: "md",
      iconOnly: true,
      className: "p-2.5",
    },
    {
      size: "lg",
      iconOnly: true,
      className: "p-3",
    },
  ],
});

const iconClasses = cv({
  variants: {
    size: {
      "2xs": "size-2.5",
      xs: "size-3",
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
    },
    variant: {
      [COMMON_VARIANTS.PRIMARY]: "",
      [COMMON_VARIANTS.SECONDARY]: "",
      [COMMON_VARIANTS.OUTLINE]: "",
      [COMMON_VARIANTS.DESTRUCTIVE]: "",
      [COMMON_VARIANTS.GHOST]: "transition-transform",
    },
  },
});

function Button({
  className = "",
  id,
  nativeProps,
  as,
  children,
  hideText = false,
  size = "sm",
  variant = "primary",
  iconAfter,
  iconBefore,
  isLoading = false,
  isDisabled = false,
  isActive = false,
  ...rest
}: ButtonProps) {
  const loading = isLoading;
  const iconOnly = hideText;

  iconAfter = loading ? (
    <LoaderCircle
      className={"col-span-full row-start-1 animate-spin justify-self-center"}
    />
  ) : (
    iconAfter
  );

  iconBefore = loading ? undefined : iconBefore;

  const renderIcon = useCallback(
    (icon: ReactElement, position: "before" | "after") => {
      return cloneElement(icon, {
        "aria-hidden": true,
        className: cn(
          iconClasses({ size, variant }),
          position === "before" && "col-start-1",
          position === "after" && !loading && "col-start-3",
          variant === "ghost" &&
            position === "before" &&
            "group-hover:-translate-x-1",
          variant === "ghost" &&
            position === "after" &&
            "group-hover:translate-x-1",
          iconOnly && "col-span-full col-start-1 justify-self-center",
          icon?.props?.className,
        ),
      });
    },
    [iconOnly, loading, size, variant],
  );

  const renderContent = useCallback(
    () => (
      <>
        {iconBefore && renderIcon(iconBefore, "before")}
        <span
          className={cn(
            loading && "invisible",
            hideText && "sr-only",
            !iconAfter && !iconBefore && "-mx-2",
            iconAfter && !iconBefore && "-ml-2",
            !iconAfter && iconBefore && "-mr-2",
            "col-start-2 row-start-1",
          )}
        >
          {children}
        </span>
        {iconAfter && renderIcon(iconAfter, "after")}
        <MinimumTouchTarget />
      </>
    ),
    [hideText, iconAfter, iconBefore, loading, renderIcon, children],
  );

  if (as === "button") {
    const { ...buttonRest } = rest as ButtonAsButtonProps;
    return (
      <button
        {...buttonRest}
        {...nativeProps}
        {...(id && { id })}
        {...(isActive && { "data-active": true, "aria-current": true })}
        {...(hideText && { "aria-label": children })}
        disabled={isDisabled || loading}
        className={cn(
          buttonClasses({ size, variant, iconOnly, as, isDisabled }),
          className,
        )}
      >
        {renderContent()}
      </button>
    );
  }

  if (as === "nextLink") {
    const { ...linkRest } = rest as ButtonAsNextLinkProps;

    return (
      <Link
        {...linkRest}
        {...nativeProps}
        {...(id && { id })}
        {...(isActive && { "data-active": true, "aria-current": true })}
        {...(loading && { disabled: true, "aria-disabled": true })}
        {...(isDisabled && { "aria-disabled": true })}
        {...(hideText && { "aria-label": children })}
        className={cn(
          buttonClasses({ size, variant, iconOnly, as, isDisabled }),
          className,
        )}
      >
        {renderContent()}
      </Link>
    );
  }

  if (as === "nativeLink") {
    const { ...linkRest } = rest as ButtonAsNativeLinkProps;

    return (
      <a
        {...linkRest}
        {...nativeProps}
        {...(id && { id })}
        {...(isActive && { "data-active": true, "aria-current": true })}
        {...(loading && { disabled: true, "aria-disabled": true })}
        {...(isDisabled && { "aria-disabled": true })}
        {...(hideText && { "aria-label": children })}
        className={cn(
          buttonClasses({ size, variant, iconOnly, as, isDisabled }),
          className,
        )}
      >
        {renderContent()}
      </a>
    );
  }
}

Button.displayName = "Button";

export default Button;
