import { Slot } from "@/components/ui/slot";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import {
  Preview,
  SectionTitle,
  SectionContent,
  PreviewCode,
} from "@/components/docs";

// Helper to simulate the Lucide component for the demo
const Lucide = ({ icon, className }: { icon: string, className?: string }) => {
  if (icon === "ChevronLeft") return <ChevronLeft className={className} />;
  if (icon === "ChevronRight") return <ChevronRight className={className} />;
  return null;
};

function Main() {
  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <div className="flex items-center">
                <Box asChild>
                  <Button variant="ghost" className="box me-2 px-2">
                    <Lucide icon="ChevronLeft" />
                  </Button>
                </Box>
                <Box asChild>
                  <Button variant="ghost" className="box px-2">
                    <Lucide icon="ChevronRight" />
                  </Button>
                </Box>
              </div>
            ),
            code: (
              <PreviewCode>
                {`
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Lucide } from "@/components/ui/lucide";

<Box asChild>
  <Button variant="ghost" className="box me-2 px-2">
    <Lucide icon="ChevronLeft" />
  </Button>
</Box>
<Box asChild>
  <Button variant="ghost" className="box px-2">
    <Lucide icon="ChevronRight" />
  </Button>
</Box>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>

      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>
          Update your <code>Box</code> component to match the Vue implementation.
          By using <code>Slot</code> at the root, you ensure that props are correctly merged whether
          you're using it as a direct wrapper or an <code>asChild</code> bridge.
        </SectionContent>

        <PreviewCode title="components/ui/box/index.tsx">
          {`
import React, {
  cloneElement,
  Fragment,
  isValidElement,
  type ReactNode,
  type ReactElement,
  forwardRef,
} from "react";

import { calculateSlot, flattenItems, type AnyProps } from "./slot";

/* -------------------------------------------------------------------------------------------------
 * React Implementation (Component Shell)
 * -----------------------------------------------------------------------------------------------*/

export type SlotProps = {
  children?: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

/**
 * Slot: Merges its props onto its immediate child.
 * If zero or multiple children are provided, it defaults to a <div> wrapper.
 */
export const Slot = forwardRef<any, SlotProps>(({ children, ...props }, ref) => {
  // Use generic flatten logic with React-specific adapter
  const items = flattenItems<ReactNode>(
    children,
    (item) => isValidElement(item) && item.type === Fragment,
    (item) => (isValidElement(item) ? (item.props as any).children : [])
  ).filter(isValidElement) as ReactElement[];

  // Use our vanilla logic to determine the transform
  const result = calculateSlot<ReactElement>({
    props,
    items,
    isValid: isValidElement,
    getProps: (item) => (item.props as AnyProps) || {},
    getChildren: (item) => (item.props as any)?.children,
  });

  // If it's a wrapper, we render a real div
  if (result.type === "wrapper") {
    return (
      <div {...result.props} ref={ref}>
        {result.children as ReactNode}
      </div>
    );
  }

  // If it's slotted, we clone the target element with merged props
  const target = result.target;
  if (!isValidElement(target)) return null;

  return cloneElement(target, {
    ...(result.props as any),
    ref: ref as any,
  }, result.children as ReactNode);
});

Slot.displayName = "Slot";

export { Slot as Root };
          `}
        </PreviewCode>
      </div>

      <div id="usage">
        <SectionTitle>Multiple Children Handling</SectionTitle>
        <SectionContent>
          If <code>Slot</code> contains multiple children, it automatically renders a <code>div</code> wrapper to prevent layout breakage. Props from the Slot are applied to this wrapper.
        </SectionContent>
        <Preview>
          {() => ({
            preview: (
              <Slot className="text-primary font-bold bg-secondary/20 p-4 rounded border border-dashed border-primary">
                <div className="flex items-center gap-2">
                  <Info className="size-4" />
                  <span>Item 1</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Info className="size-4" />
                  <span>Item 2</span>
                </div>
              </Slot>
            ),
            code: (
              <PreviewCode>
                {`
import { Slot } from "@/components/ui/slot";
import { Info } from "lucide-react";

{/* Since there are 2 children, Slot renders as a <div> wrapping them */}
<Slot className="text-primary font-bold bg-secondary/20 p-4 rounded border border-dashed border-primary">
  <div className="flex items-center gap-2">
    <Info className="size-4" />
    <span>Item 1</span>
  </div>
  <div className="flex items-center gap-2 mt-2">
    <Info className="size-4" />
    <span>Item 2</span>
  </div>
</Slot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>

      <div id="variants">
        <SectionTitle>Single Child (asChild pattern)</SectionTitle>
        <SectionContent>
          When provided with exactly one valid element, <code>Slot</code> will merge its props directly onto that element.
        </SectionContent>
        <Preview>
          {() => ({
            preview: (
              <Slot className="bg-success text-white px-4 py-2 rounded-full shadow-lg">
                <button onClick={() => alert("Action triggered!")}>
                  Success Action
                </button>
              </Slot>
            ),
            code: (
              <PreviewCode>
                {`
{/* Renders as a <button> with success styles and merged event handlers */}
<Slot className="bg-success text-white px-4 py-2 rounded-full shadow-lg">
  <button onClick={() => alert("Action triggered!")}>
    Success Action
  </button>
</Slot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
    </>
  );
}

export default Main;
