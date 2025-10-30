import {
  defineComponent,
  h,
  cloneVNode,
  Fragment,
  type VNode,
  type VNodeProps,
  type PropType,
} from "vue";

/* -------------------------------------------------------------------------------------------------
 * Helpers
 * -----------------------------------------------------------------------------------------------*/

function flatten(children: any): VNode[] {
  if (Array.isArray(children)) {
    return children.flatMap(flatten);
  }
  if (children && typeof children === "object" && children.type === Fragment) {
    return flatten(children.children);
  }
  return children ? [children] : [];
}

function mergeProps(slotProps: VNodeProps, childProps: VNodeProps) {
  const overrideProps: any = { ...childProps };

  for (const propName in childProps) {
    const slotValue = (slotProps as any)[propName];
    const childValue = (childProps as any)[propName];

    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotValue && childValue) {
        overrideProps[propName] = (...args: any[]) => {
          (childValue as Function)(...args);
          (slotValue as Function)(...args);
        };
      } else if (slotValue) {
        overrideProps[propName] = slotValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotValue, ...childValue };
    } else if (propName === "class") {
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

const SLOTTABLE_IDENTIFIER = Symbol("vue.slottable");

export const Slottable = defineComponent({
  name: "Slottable",
  setup(_, { slots }) {
    return () => slots.default?.();
  },
}) as any;

(Slottable as any).__radixId = SLOTTABLE_IDENTIFIER;

function isSlottable(vnode: VNode) {
  return (
    vnode &&
    typeof vnode.type === "object" &&
    (vnode.type as any).__radixId === SLOTTABLE_IDENTIFIER
  );
}

/* -------------------------------------------------------------------------------------------------
 * SlotClone
 * -----------------------------------------------------------------------------------------------*/

const SlotClone = defineComponent({
  name: "SlotClone",
  props: {
    children: {
      type: null as unknown as PropType<any>,
      required: true,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const child = props.children;

      if (child && typeof child === "object" && "type" in child) {
        const merged = mergeProps(attrs, child.props ?? {});
        return cloneVNode(child, merged, true);
      }

      return null;
    };
  },
});

/* -------------------------------------------------------------------------------------------------
 * Slot
 * -----------------------------------------------------------------------------------------------*/

export const Slot = defineComponent({
  name: "Slot",
  inheritAttrs: false,
  props: {
    children: {
      type: null as unknown as PropType<any>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const raw = props.children ?? slots.default?.();
      const array = flatten(raw);
      const slottable = array.find(isSlottable);

      if (slottable) {
        const newElement = flatten((slottable.children as any)?.default?.())[0];

        const newChildren = array.map((child) => {
          if (child === slottable) {
            return newElement?.children ?? null;
          }
          return child;
        });

        return h(
          SlotClone,
          { ...attrs, children: newElement },
          { default: () => newChildren }
        );
      }

      return h(
        SlotClone,
        { ...attrs, children: array[0] },
        { default: () => raw }
      );
    };
  },
});

export { Slot as Root };
