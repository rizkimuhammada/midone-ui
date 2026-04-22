import { cva, type VariantProps } from "class-variance-authority";

export const nativeSelectVariants = cva([
    'appearance-none text-foreground/70',
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
export const nativeSelectOption = "";
export const NativeSelectOptGroup = "";

// Types
export type NativeSelectVariants = {
    size?: VariantProps<typeof nativeSelectVariants>["size"];
};
