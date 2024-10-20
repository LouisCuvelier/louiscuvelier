import { cn } from "@/utils/classNames.utils";

/* Minimum touch target size to respect iOS accessibility guidelines*/
function MinimumTouchTarget() {
  return (
    <span
      className={cn(
        "absolute left-1/2 top-1/2 size-[max(100%,44px)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden",
      )}
    />
  );
}

MinimumTouchTarget.displayName = "MinimumTouchTarget";

export default MinimumTouchTarget;
