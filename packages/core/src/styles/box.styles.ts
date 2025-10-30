import { cva, type VariantProps } from "class-variance-authority";

export const boxVariants = cva(
  "[--color:var(--color-transparent)] shadow-sm border border-foreground/20 rounded-xl p-5 outline-none relative before:absolute after:absolute",
  {
    variants: {
      filled: {
        true: "bg-(--color) [--tw-shadow-color:var(--color)]/20 border-transparent text-white",
        false:
          "bg-(--color)/20 [--tw-shadow-color:var(--color)]/20 border-(--color)/60 text-(--color)",
      },
      variant: {
        default: "bg-background border-(--color-foreground)/20",
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
          "before:inset-x-2 before:h-2.5 before:bg-(--color)/20 before:-bottom-2.5 before:rounded-b-xl before:border-x before:border-b before:border-(--color)/40 before:z-[-1] before:shadow-sm before:opacity-60",
        ],
        double: [
          "mb-4",
          "before:inset-x-2 before:h-2.5 before:bg-(--color)/20 before:-bottom-2.5 before:rounded-b-xl before:border-x before:border-b before:border-(--color)/40 before:z-[-1] before:shadow-sm before:opacity-60",
          "after:inset-x-4.5 after:h-[0.5rem] after:bg-(--color)/20 after:-bottom-[1.1rem] after:rounded-b-xl after:border-x after:border-b after:border-(--color)/40 after:z-[-1] after:shadow-sm after:opacity-40",
        ],
      },
    },
    compoundVariants: [
      {
        filled: false,
        variant: "default",
        class:
          "before:border-(--color-foreground)/20 after:border-(--color-foreground)/20",
      },
      {
        filled: true,
        variant: "default",
        class:
          "bg-(--color-foreground)/25 before:bg-(--color-foreground)/10 before:border-(--color-foreground)/30 after:bg-(--color-foreground)/10 after:border-(--color-foreground)/30 border-transparent text-foreground",
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
