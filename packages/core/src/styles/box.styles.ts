import { cva, type VariantProps } from "class-variance-authority";

export const boxVariants = cva(
  "[--color:var(--color-transparent)] shadow-md/5 border backdrop-blur-lg border-foreground/10 rounded-xl p-5 outline-none relative before:absolute after:absolute",
  {
    variants: {
      filled: {
        true: "bg-(--color) [--tw-shadow-color:var(--color)]/10 border-transparent text-white",
        false:
          "bg-(--color)/20 [--tw-shadow-color:var(--color)]/10 border-(--color)/10 text-(--color)",
      },
      variant: {
        default: "bg-background dark:bg-foreground/10 border-foreground/10",
        primary: "[--color:var(--color-primary)]",
        secondary: "[--color:var(--color-foreground)]",
        success: "[--color:var(--color-success)]",
        danger: "[--color:var(--color-danger)]",
        pending: "[--color:var(--color-pending)]",
        warning: "[--color:var(--color-warning)]",
      },
      raised: {
        single: [
          "mb-2.5",
          "before:inset-x-2.5 before:h-[10px] before:bg-(--color)/20 before:-bottom-[11px] before:rounded-b-xl before:border-x before:border-b before:border-(--color)/10 before:z-[-1] before:shadow-md/5 before:opacity-60",
        ],
        double: [
          "mb-4",
          "before:inset-x-2.5 before:h-[10px] before:bg-(--color)/20 before:-bottom-[11px] before:rounded-b-xl before:border-x before:border-b before:border-(--color)/10 before:z-[-1] before:shadow-md/5 before:opacity-60",
          "after:inset-x-5 after:h-[8px] after:bg-(--color)/20 after:-bottom-[19px] after:rounded-b-xl after:border-x after:border-b after:border-(--color)/10 after:z-[-1] after:shadow-md/5 after:opacity-40",
        ],
      },
    },
    compoundVariants: [
      {
        filled: false,
        variant: "default",
        class:
          "before:border-foreground/10 dark:before:bg-foreground/10 after:border-foreground/10 dark:after:bg-foreground/10",
      },
      {
        filled: true,
        variant: "default",
        class:
          "bg-foreground/25 dark:bg-foreground/30 before:bg-foreground/10 before:border-foreground/20 after:bg-foreground/10 after:border-foreground/20 border-transparent text-foreground",
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

export type BoxVariants = {
  filled?: VariantProps<typeof boxVariants>["filled"];
  variant?: VariantProps<typeof boxVariants>["variant"];
  raised?: VariantProps<typeof boxVariants>["raised"];
};
