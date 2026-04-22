import { cva, type VariantProps } from "class-variance-authority";

export const textareaVariants = cva([
  'placeholder:text-foreground/70 selection:bg-foreground/80 selection:text-background flex field-sizing-content w-full rounded-xl backdrop-blur-lg border border-foreground/15 bg-background px-3 py-2 text-base shadow-sm/5 transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
  'focus-visible:border-ring focus-visible:ring-foreground/10',
  'aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 aria-invalid:border-danger',
], {
  variants: {
    size: {
      sm: "text-xs min-h-12",
      default: "text-sm min-h-16"
    },
  },
  defaultVariants: {
    size: "default",
  },
});

// Types
export type TextareaVariants = {
  size?: VariantProps<typeof textareaVariants>["size"];
};