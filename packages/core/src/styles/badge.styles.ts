import { cva, type VariantProps } from "class-variance-authority";

// Styles
export const badgeVariants = cva(
  "[--color:var(--color-transparent)] px-2 py-px shadow-md/5 cursor-pointer inline-flex border border-foreground/10 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:-mx-1",
  {
    variants: {
      filled: {
        true: "bg-(--color) [--tw-shadow-color:var(--color)]/10 border-transparent text-white",
        false:
          "bg-(--color)/20 [--tw-shadow-color:var(--color)]/10 border-(--color)/10 text-(--color)",
      },
      variant: {
        default: "bg-background dark:bg-foreground/5 border-foreground/10",
        primary: "[--color:var(--color-primary)]",
        secondary: "[--color:var(--color-foreground)]",
        success: "[--color:var(--color-success)]",
        danger: "[--color:var(--color-danger)]",
        pending: "[--color:var(--color-pending)]",
        warning: "[--color:var(--color-warning)]",
      },
    },
    compoundVariants: [
      {
        filled: true,
        variant: "default",
        class: "bg-foreground/20 border-transparent text-foreground",
      },
      {
        filled: true,
        variant: "secondary",
        class: "text-background",
      },
    ],
    defaultVariants: {
      filled: false,
      variant: "default",
    },
  }
);

// Types
export type BadgeVariants = {
  filled?: VariantProps<typeof badgeVariants>["filled"];
  variant?: VariantProps<typeof badgeVariants>["variant"];
};
