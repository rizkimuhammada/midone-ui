import { cva, type VariantProps } from "class-variance-authority";

export const switchRoot = "flex items-center gap-3";
export const switchControlVariants = cva("relative block rounded-full bg-foreground/5 dark:bg-foreground/10 transition border border-foreground/10 data-[state=checked]:bg-foreground/30", {
  variants: {
    size: {
      sm: "w-10 h-5",
      default: "h-6 w-12"
    },
  },
  defaultVariants: {
    size: "default",
  },
});
export const switchThumb =
  "data-[state=checked]:start-1/2 transition-all block absolute inset-y-0 start-0 w-1/2 before:absolute before:inset-0.5 before:rounded-full before:bg-background dark:before:bg-foreground/40 before:shadow-md";
export const switchLabel = "";
export const switchHiddenInput = "";

// Types
export type SwitchControlVariants = {
  size?: VariantProps<typeof switchControlVariants>["size"];
};