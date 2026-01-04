import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "[--color:var(--color-transparent)] shadow-md/5 cursor-pointer backdrop-blur inline-flex border border-foreground/15 items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:stroke-2 [&_svg]:shrink-0",
  {
    variants: {
      filled: {
        true: "bg-(--color) [--tw-shadow-color:var(--color)]/10 border-transparent text-white hover:bg-(--color)/90",
        false:
          "bg-(--color)/20 [--tw-shadow-color:var(--color)]/10 border-(--color)/10 text-(--color) hover:bg-(--color)/5",
      },
      variant: {
        default:
          "bg-background dark:bg-foreground/10 border-(--color-foreground)/10 hover:bg-foreground/5",
        primary: "[--color:var(--color-primary)]",
        secondary: "[--color:var(--color-foreground)]",
        success: "[--color:var(--color-success)]",
        danger: "[--color:var(--color-danger)]",
        pending: "[--color:var(--color-pending)]",
        warning: "[--color:var(--color-warning)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-xl px-3",
        lg: "h-11 rounded-xl px-5 text-base",
        xl: "h-13 rounded-xl px-6 text-base",
      },
    },
    compoundVariants: [
      {
        filled: true,
        variant: "default",
        class: "bg-(--color-foreground)/20 border-transparent text-foreground",
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
      size: "default",
    },
  }
);

export type ButtonVariants = {
  filled?: VariantProps<typeof buttonVariants>["filled"];
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
};
