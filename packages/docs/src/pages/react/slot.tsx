
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Preview,
  SectionTitle,
  SectionContent,
  PreviewCode,
} from "@/components/docs";

function Main() {
  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <div className="justify-center items-center flex gap-2">
                <Box asChild>
                  <Button variant="ghost" className="me-2 px-2">
                    <ChevronLeft className="size-5" />
                  </Button>
                </Box>
                <Box asChild>
                  <Button variant="ghost" className="px-2">
                    <ChevronRight className="size-5" />
                  </Button>
                </Box>
              </div>
            ),
            code: (
              <PreviewCode>
                {`import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";

<div className="justify-center items-center flex gap-2">
  <Box asChild>
    <Button variant="ghost" className="me-2 px-2">
      <ChevronLeft className="size-5" />
    </Button>
  </Box>
  <Box asChild>
    <Button variant="ghost" className="px-2">
      <ChevronRight className="size-5" />
    </Button>
  </Box>
</div>`}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>
          By using <code>Slot</code> at the root, you ensure that props are correctly merged whether
          you're using it as a direct wrapper or an <code>asChild</code> bridge.
        </SectionContent>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>

        <PreviewCode title="components/ui/slot/index.tsx">
          {`import React, {
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

export { Slot as Root };`}
        </PreviewCode>
        <PreviewCode title="components/ui/slot/slot.ts">
          {`export type AnyProps = Record<string, any>;

export interface SlotParams<T> {
  props: AnyProps;
  items: T[];
  isValid: (item: T) => boolean;
  getProps: (item: T) => AnyProps;
  getChildren: (item: T) => any;
}

export type SlotResult<T> =
  | { type: "slotted"; target: T; props: AnyProps; children: any }
  | { type: "wrapper"; target: "div"; props: AnyProps; children: T[] };

export function mergeProps(slotProps: AnyProps, childProps: AnyProps): AnyProps {
  const result: AnyProps = { ...childProps };
  for (const key in slotProps) {
    const slotValue = slotProps[key];
    const isHandler = /^on[A-Z]/.test(key);
    if (isHandler) {
      const childValue = childProps[key];
      if (typeof slotValue === "function" && typeof childValue === "function") {
        result[key] = (...args: any[]) => {
          childValue(...args);
          slotValue(...args);
        };
      } else if (slotValue) {
        result[key] = slotValue;
      }
      continue;
    }
    if (key === "class" || key === "className") {
      const slotClasses = (slotValue || "").split(/\\s+/);
      const childClasses = (childProps.class || childProps.className || "").split(/\\s+/);
      const combined = Array.from(new Set([...slotClasses, ...childClasses])).filter(Boolean).join(" ");
      result[key] = combined;
      continue;
    }
    if (key === "style") {
      result[key] = { ...slotValue, ...childProps.style };
      continue;
    }
    if (childProps[key] === undefined) {
      result[key] = slotValue;
    }
  }
  return result;
}

export function flattenItems<T>(items: T | T[], isFragment: (item: T) => boolean, getChildren: (item: T) => T | T[]): T[] {
  const result: T[] = [];
  const list = Array.isArray(items) ? items : [items];
  list.forEach((item) => {
    if (item === null || item === undefined) return;
    if (isFragment(item)) {
      const children = getChildren(item);
      result.push(...flattenItems(children, isFragment, getChildren));
    } else {
      result.push(item);
    }
  });
  return result;
}

export function calculateSlot<T>(params: SlotParams<T>): SlotResult<T> {
  const { props, items, isValid, getProps, getChildren } = params;
  if (items.length === 1) {
    const primary = items[0];
    if (isValid(primary)) {
      return {
        type: "slotted",
        target: primary,
        props: mergeProps(props, getProps(primary)),
        children: getChildren(primary),
      };
    }
  }
  return { type: "wrapper", target: "div", props: props, children: items };
}`}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
