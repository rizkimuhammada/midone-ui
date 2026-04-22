import { cva, type VariantProps } from "class-variance-authority";

export const inputVariants = cva([
  'file:text-foreground placeholder:text-foreground/80 selection:bg-foreground/70 selection:text-background flex w-full min-w-0 rounded-xl border border-foreground/15 backdrop-blur-lg bg-background px-3 py-1 text-base shadow-sm/5 transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  'focus-visible:border-ring focus-visible:ring-foreground/10 focus-visible:ring-[3px]',
  'aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 aria-invalid:border-danger',
], {
  variants: {
    size: {
      sm: "h-8 text-xs",
      default: "h-9 text-sm",
      lg: "h-10 text-base",
      xl: "h-12 text-lg"
    },
  },
  defaultVariants: {
    size: "default",
  },
});

// Types
export type InputVariants = {
  size?: VariantProps<typeof inputVariants>["size"];
};