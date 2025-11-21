import { Frame } from "@/components/ui/frame";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  [
    "group font-bold mb-2 relative px-8 py-2 cursor-pointer transition-all [&:hover_svg]:drop-shadow-xl outline-none",
    "[&>span]:relative [&>span]:flex [&>span]:items-center [&>span]:justify-center [&>span]:group-hover:text-shadow-lg",
  ],
  {
    variants: {
      variant: {
        default:
          "[--color-frame-1-stroke:var(--color-foreground)] [--color-frame-1-fill:var(--color-foreground)]/22 [--color-frame-2-stroke:var(--color-foreground)] [--color-frame-2-fill:var(--color-foreground)]/10 text-foreground-foreground [&:hover_svg]:drop-shadow-foreground/50 [&>span]:group-hover:text-shadow-foreground/50",
      },
      shape: {
        default: "",
        flat: "[--color-frame-2-stroke:transparent] [--color-frame-2-fill:transparent]",
        simple: "ps-8 pe-6",
        "tab-left": "",
        "tab-center": "",
        "tab-right": "",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "default",
    },
  }
);

export function CosmicButton({
  className,
  children,
  variant = "default",
  shape = "default",
  enableBackdropBlur = false,
  enableViewBox = false,
  customPaths,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    customPaths?: string[];
    enableBackdropBlur?: boolean;
    enableViewBox?: boolean;
  }) {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ variant, shape, className }))}
    >
      <div className="absolute inset-0 -mb-2">
        {!customPaths && (shape == "default" || shape == "flat") && (
          <Frame
            enableBackdropBlur={enableBackdropBlur}
            enableViewBox={enableViewBox}
            paths={JSON.parse(
              '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","17","0"],["L","100% - 7","0"],["L","100% + 0","0% + 9.5"],["L","100% - 18","100% - 6"],["L","4","100% - 6"],["L","0","100% - 15"],["L","17","0"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","9","100% - 6"],["L","100% - 22","100% - 6"],["L","100% - 25","100% + 0"],["L","12","100% + 0"],["L","9","100% - 6"]]}]'
            )}
          />
        )}
        {!customPaths && shape == "simple" && (
          <Frame
            enableBackdropBlur={enableBackdropBlur}
            enableViewBox={enableViewBox}
            paths={JSON.parse(
              '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","17","0"],["L","100% - 0","0"],["L","100% - 0","100% - 6"],["L","0% + 3","100% - 6"],["L","0% - 0","100% - 16"],["L","17","0"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","8","100% - 6"],["L","100% - 5","100% - 6"],["L","100% - 7","100% - 0"],["L","10","100% - 0"],["L","8","100% - 6"]]}]'
            )}
          />
        )}
        {customPaths?.map((customPath, customPathKey) => {
          return <Frame key={customPathKey} paths={JSON.parse(customPath)} />;
        })}
      </div>
      <span>{children}</span>
    </button>
  );
}
