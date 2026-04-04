import { cva, type VariantProps } from "class-variance-authority";

// Styles
export const fileIconRoot = "";

export const fileIconIcon = cva(
  [
    "relative block bg-center bg-no-repeat bg-contain",
    "before:content-[''] before:pt-[100%] before:w-full before:block",
  ],
  {
    variants: {
      variant: {
        "empty-directory": "bg-[image:var(--background-image-empty-directory)]",
        directory: "bg-[image:var(--background-image-directory)]",
        file: "bg-[image:var(--background-image-file)]",
        image: "",
      },
    },
  }
);

export const fileIconLabel = "absolute bottom-0 left-0 right-0 top-0 m-auto flex items-center justify-center text-white";

export const fileIconImage = "image-fit absolute left-0 top-0 size-full";

export const fileIconImg = "rounded-lg";

// Types
export type FileIconVariants = {
  variant?: VariantProps<typeof fileIconIcon>["variant"];
};
