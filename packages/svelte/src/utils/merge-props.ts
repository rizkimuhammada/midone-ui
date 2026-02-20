import { cn } from "@midoneui/core/utils/cn";

type Props = Record<string, any>;

/**
 * Merges two sets of props, handling special cases for class, style, and event handlers.
 * - `class` or `className`: Concatenates values using `cn` (tailwind-merge logic).
 * - `style`: Merges style objects or concatenates style strings.
 * - `on*` (events): Chains event handlers so both are called.
 * - Other props: Child props override parent props.
 * 
 * @param parentProps Props from the parent (e.g., passed to Slot)
 * @param childProps Props from the child (e.g., local to the snippet)
 * @returns Merged props object
 */
export function mergeProps(parentProps: Props, childProps: Props): Props {
    // Start with child props as base for overrides
    const merged: Props = { ...parentProps };

    for (const propName in childProps) {
        const slotValue = parentProps[propName];
        const childValue = childProps[propName];

        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotValue && childValue) {
                merged[propName] = (...args: any[]) => {
                    childValue(...args);
                    slotValue(...args);
                };
            } else if (slotValue) {
                merged[propName] = slotValue;
            } else {
                merged[propName] = childValue;
            }
        } else if (propName === "style") {
            if (slotValue && childValue) {
                if (typeof slotValue === "object" && typeof childValue === "object") {
                    merged[propName] = { ...slotValue, ...childValue };
                } else {
                    // Concatenate strings, handling potential mix
                    const slotStyle = typeof slotValue === 'string' ? slotValue : ''; // Simplification: assume if mixed, we might need more complex parsing but usually strings or objects
                    const childStyle = typeof childValue === 'string' ? childValue : '';

                    if (slotStyle && childStyle) {
                        merged[propName] = `${slotStyle}; ${childStyle}`;
                    } else {
                        merged[propName] = slotStyle || childStyle || slotValue || childValue;
                    }
                }
            } else {
                merged[propName] = childValue || slotValue;
            }
        } else if (propName === "class" || propName === "className") {
            if (slotValue && childValue) {
                merged[propName] = cn(slotValue, childValue);
            } else {
                merged[propName] = slotValue || childValue;
            }
        } else {
            // Default: child overrides parent
            merged[propName] = childValue;
        }
    }

    return merged;
}
