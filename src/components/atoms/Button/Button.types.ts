import { LinkProps } from "next/link";
import { CommonVariants, Sizes } from "@/types/core.types";
import { AnchorHTMLAttributes, ReactElement, RefAttributes } from "react";

type BaseProps = {
  hideText?: boolean;
  className?: string;
  id?: string;
  nativeProps?: object;
  size?: Extract<Sizes, "2xs" | "xs" | "sm" | "md" | "lg">;
  variant?: Extract<
    CommonVariants,
    "primary" | "secondary" | "destructive" | "ghost" | "outline"
  >;
  iconBefore?: ReactElement;
  iconAfter?: ReactElement;
  isLoading?: boolean;
  isDisabled?: boolean;
  isActive?: boolean;
  children: string;
};

export type ButtonAsButtonProps = RefAttributes<HTMLButtonElement> &
  BaseProps & {
    as: "button";
  };

export type ButtonAsNextLinkProps = Omit<LinkProps, "children"> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseProps & {
    as: "nextLink";
  };

export type ButtonAsNativeLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseProps & {
    as: "nativeLink";
  };

export type ButtonProps =
  | ButtonAsButtonProps
  | ButtonAsNextLinkProps
  | ButtonAsNativeLinkProps;
