import React, {
  cloneElement,
  Fragment,
  isValidElement,
  type ReactNode,
  type ReactElement,
  forwardRef,
} from "react";

/* -------------------------------------------------------------------------------------------------
 * Helpers
 * -----------------------------------------------------------------------------------------------*/

function flatten(children: ReactNode): ReactElement[] {
  const result: ReactElement[] = [];

  React.Children.forEach(children, (child) => {
    if (Array.isArray(child)) {
      result.push(...flatten(child));
    } else if (
      isValidElement(child) &&
      child.type === Fragment &&
      child.props &&
      typeof child.props === "object" &&
      "children" in child.props
    ) {
      result.push(...flatten((child.props as any).children));
    } else if (isValidElement(child)) {
      result.push(child);
    }
  });

  return result;
}

function mergeProps(slotProps: any, childProps: any) {
  const overrideProps: any = { ...childProps };

  for (const propName in childProps) {
    const slotValue = slotProps[propName];
    const childValue = childProps[propName];

    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotValue && childValue) {
        overrideProps[propName] = (...args: any[]) => {
          childValue(...args);
          slotValue(...args);
        };
      } else if (slotValue) {
        overrideProps[propName] = slotValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotValue, ...childValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotValue, childValue]
        .filter(Boolean)
        .join(" ");
    }
  }

  return { ...slotProps, ...overrideProps };
}

/* -------------------------------------------------------------------------------------------------
 * Slottable
 * -----------------------------------------------------------------------------------------------*/

const SLOTTABLE_IDENTIFIER = Symbol("react.slottable");

export const Slottable: React.FC<{ children?: ReactNode }> & {
  __radixId?: symbol;
} = ({ children }) => {
  return <>{children}</>;
};

Slottable.__radixId = SLOTTABLE_IDENTIFIER;

function isSlottable(node: ReactElement) {
  return (
    isValidElement(node) &&
    typeof node.type === "function" &&
    (node.type as any).__radixId === SLOTTABLE_IDENTIFIER
  );
}

/* -------------------------------------------------------------------------------------------------
 * SlotClone
 * -----------------------------------------------------------------------------------------------*/

const SlotClone = forwardRef<
  any,
  { child: ReactElement; children?: ReactNode; [key: string]: any }
>(({ child, children, ...props }, ref) => {
  if (!isValidElement(child)) return null;
  const merged = mergeProps(props, child.props ?? {});
  return cloneElement(child, { ...merged, ref }, children);
});

/* -------------------------------------------------------------------------------------------------
 * Slot
 * -----------------------------------------------------------------------------------------------*/

type SlotProps = {
  children?: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Slot = forwardRef<any, SlotProps>(
  ({ children, ...props }, ref) => {
    const array = flatten(children);
    const slottable = array.find(isSlottable);

    if (slottable) {
      const newElement = flatten((slottable.props as any).children)[0];

      const newChildren = array.map((child) => {
        if (child === slottable) {
          return (newElement?.props as any)?.children ?? null;
        }
        return child;
      });

      return (
        <SlotClone {...props} ref={ref} child={newElement}>
          {newChildren}
        </SlotClone>
      );
    }

    if (array.length === 1) {
      return cloneElement(array[0], props);
    }

    return (
      <SlotClone {...props} ref={ref} child={array[0]}>
        {children}
      </SlotClone>
    );
  }
);

export { Slot as Root };
