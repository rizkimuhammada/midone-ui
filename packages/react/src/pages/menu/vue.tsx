import {
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
  MenuCheckboxItem,
  MenuSeparator,
  MenuTriggerItem,
  MenuRadioItemGroup,
  MenuItemGroupLabel,
  MenuRadioItem,
} from "@/components/ui/menu";
import { useState } from "react";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";

function Main() {
  const [react, setReact] = useState(false);
  const [solid, setSolid] = useState(false);
  const [vue, setVue] = useState(false);
  const [svelte, setSvelte] = useState(false);
  const [value, setValue] = useState("react");

  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <MenuRoot className="w-56">
                  <MenuTrigger>Open menu</MenuTrigger>
                  <MenuPositioner>
                    <MenuContent>
                      <MenuItem value="react">React</MenuItem>
                      <MenuItem value="solid">Solid</MenuItem>
                      <MenuItem value="vue">Vue</MenuItem>
                      <MenuItem value="svelte">Svelte</MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<MenuRoot class="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuPositioner>
    <MenuContent>
      <MenuItem value="react">React</MenuItem>
      <MenuItem value="solid">Solid</MenuItem>
      <MenuItem value="vue">Vue</MenuItem>
      <MenuItem value="svelte">Svelte</MenuItem>
    </MenuContent>
  </MenuPositioner>
</MenuRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/menu</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/menu/MenuRoot.vue">
          {`
<script lang="ts" setup>
import * as menu from "@zag-js/menu";
import type { Props } from "@zag-js/menu";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { menuRoot } from "@midoneui/core/styles/menu.styles";

const {
  class: className,
  asChild = false,
  open = undefined,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(menu.machine, {
  ...props,
  open,
  id: crypto.randomUUID(),
});
const api = computed(() => menu.connect(service, normalizeProps));

provide("menuApi", api);
</script>

<template>
  <Slot :class="cn(menuRoot, className)" v-bind="{ ...props, ...$attrs }">
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/menu/MenuTrigger.vue">
          {`
<script lang="ts" setup>
import { type Api } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { Button } from "@/components/ui/button";
import { Slot } from "@/components/ui/slot";
import { menuTrigger } from "@midoneui/core/styles/menu.styles";
import { MenuIndicator } from ".";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("menuApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getTriggerProps(), ...props, ...$attrs }">
    <Button v-if="!asChild" :class="cn(menuTrigger, className)">
      <slot />
      <MenuIndicator />
    </Button>
    <slot v-else />
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/menu/MenuIndicator.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { ChevronDown } from "lucide-vue-next";
import { menuIndicator } from "@midoneui/core/styles/menu.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/menu";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("menuApi");
</script>

<template>
  <Slot
    :class="cn(menuIndicator, className)"
    v-bind="{ ...api?.getIndicatorProps(), ...props, ...$attrs }"
  >
    <slot v-if="$slots.default" />
    <ChevronDown v-else />
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/menu/MenuPositioner.vue">
          {`
<script lang="ts" setup>
import { type Api } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { menuPositioner } from "@midoneui/core/styles/menu.styles";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("menuApi");
</script>

<template>
  <Teleport to="body">
    <Slot
      :class="cn(menuPositioner, className)"
      v-bind="{ ...props, ...$attrs, ...api?.getPositionerProps() }"
    >
      <slot v-if="asChild" />
      <div v-else>
        <slot />
      </div>
    </Slot>
  </Teleport>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/menu/MenuContent.vue">
          {`
<script lang="ts" setup>
import { type Api } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { Box } from "@/components/ui/box";
import { Slot } from "@/components/ui/slot";
import { menuContent } from "@midoneui/core/styles/menu.styles";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("menuApi");
</script>

<template>
  <Slot
    :class="cn(menuContent, className)"
    v-bind="{ ...api?.getContentProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <Box v-else raised="single" :class="cn(menuContent, className)">
      <div><slot /></div>
    </Box>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/menu/MenuItem.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { type Api, type ItemProps } from "@zag-js/menu";
import { inject } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { menuItem } from "@midoneui/core/styles/menu.styles";

const {
  class: className,
  shortcut,
  asChild = false,
  ...props
} = defineProps<
  ItemProps & {
    class?: string;
    shortcut?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("menuApi");
</script>

<template>
  <Slot
    :class="cn(menuItem, className)"
    v-bind="{ ...api?.getItemProps(props), ...props, ...$attrs }"
  >
    <div><slot /></div>
    <div>{{ shortcut }}</div>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/menu/MenuTriggerItem.vue">
          {`
<script lang="ts" setup>
import { type Api } from "@zag-js/menu";
import { inject } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { ChevronRight } from "lucide-vue-next";
import { Slot } from "@/components/ui/slot";
import { menuItem } from "@midoneui/core/styles/menu.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("menuApi");
</script>

<template>
  <Slot
    :class="cn(menuItem, className)"
    v-bind="{ ...api?.getTriggerItemProps(api), ...props, ...$attrs }"
  >
    <div><slot /></div>
    <ChevronRight />
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/menu/MenuCheckboxItem.vue">
          {`
<script lang="ts" setup>
import type { Api, OptionItemProps } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { Check } from "lucide-vue-next";
import { menuItem } from "@midoneui/core/styles/menu.styles";
import { inject } from "vue";

const {
  shortcut,
  class: className,
  type = "checkbox",
  ...props
} = defineProps<
  Omit<OptionItemProps, "type"> & {
    class?: string;
    shortcut?: string;
    type?: OptionItemProps["type"];
  }
>();

const api = inject<Api>("menuApi");
</script>

<template>
  <div
    :class="cn(menuItem, className)"
    v-bind="{
      ...props,
      ...$attrs,
      ...api?.getOptionItemProps({
        ...props,
        type,
      }),
    }"
  >
    <div>
      <span v-bind="{ ...api?.getItemIndicatorProps(props) }">
        <Check />
      </span>
      <slot />
    </div>
    <div>{{ shortcut }}</div>
  </div>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/menu/MenuRadioItemGroup.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { menuRadioItemGroup } from "@midoneui/core/styles/menu.styles";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();
</script>

<template>
  <Slot
    :class="cn(menuRadioItemGroup, className)"
    v-bind="{
      ...props,
      ...$attrs,
    }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/menu/MenuItemGroupLabel.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { menuItemGroupLabel } from "@midoneui/core/styles/menu.styles";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();
</script>

<template>
  <Slot
    :class="cn(menuItemGroupLabel, className)"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <label v-else>
      <slot />
    </label>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/menu/MenuRadioItem.vue">
          {`
<script lang="ts" setup>
import type { Api, OptionItemProps } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { Dot } from "lucide-vue-next";
import { menuItem } from "@midoneui/core/styles/menu.styles";
import { inject } from "vue";

const {
  shortcut,
  class: className,
  asChild = false,
  type = "radio",
  ...props
} = defineProps<
  Omit<OptionItemProps, "type"> & {
    class?: string;
    asChild?: boolean;
    shortcut?: string;
    type?: OptionItemProps["type"];
  }
>();

const api = inject<Api>("menuApi");
</script>

<template>
  <div
    :class="cn(menuItem, className)"
    v-bind="{
      ...props,
      ...$attrs,
      ...api?.getOptionItemProps({
        ...props,
        type,
      }),
    }"
  >
    <div>
      <span v-bind="{ ...api?.getItemIndicatorProps(props) }">
        <Dot />
      </span>
      <slot />
    </div>
    <div>{{ shortcut }}</div>
  </div>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/menu/MenuSeparator.vue">
          {`
<script lang="ts" setup>
import type { Api } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { menuSeparator } from "@midoneui/core/styles/menu.styles";
import { Slot } from "@/components/ui/slot";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("menuApi");
</script>

<template>
  <Slot
    :class="cn(menuSeparator, className)"
    v-bind="{
      ...props,
      ...$attrs,
      ...api?.getSeparatorProps(),
    }"
  >
    <slot v-if="asChild" />
    <hr v-else>
      <slot />
    </hr>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/menu/index.ts">
          {`
export { default as MenuRoot } from "./MenuRoot.vue";
export { default as MenuTrigger } from "./MenuTrigger.vue";
export { default as MenuIndicator } from "./MenuIndicator.vue";
export { default as MenuPositioner } from "./MenuPositioner.vue";
export { default as MenuContent } from "./MenuContent.vue";
export { default as MenuItem } from "./MenuItem.vue";
export { default as MenuTriggerItem } from "./MenuTriggerItem.vue";
export { default as MenuCheckboxItem } from "./MenuCheckboxItem.vue";
export { default as MenuRadioItemGroup } from "./MenuRadioItemGroup.vue";
export { default as MenuItemGroupLabel } from "./MenuItemGroupLabel.vue";
export { default as MenuRadioItem } from "./MenuRadioItem.vue";
export { default as MenuSeparator } from "./MenuSeparator.vue";
              `}
        </PreviewCode>
        <SectionContent>
          Update the import paths to match your project setup.
        </SectionContent>
      </div>
      <div id="usage">
        <SectionTitle>Usage</SectionTitle>
        <PreviewCode>
          {`
import {
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
  MenuCheckboxItem,
  MenuSeparator,
  MenuTriggerItem,
  MenuRadioItemGroup,
  MenuItemGroupLabel,
  MenuRadioItem,
} from "@/components/ui/menu";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<MenuRoot class="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuPositioner>
    <MenuContent>
      <MenuItem value="react">React</MenuItem>
      <MenuItem value="solid">Solid</MenuItem>
      <MenuItem value="vue">Vue</MenuItem>
      <MenuItem value="svelte">Svelte</MenuItem>
    </MenuContent>
  </MenuPositioner>
</MenuRoot>
              `}
        </PreviewCode>
      </div>
      <div id="variants">
        <SectionTitle>Variants</SectionTitle>
        <SectionContent>A collection of components you can use.</SectionContent>
        <Preview>
          {() => ({
            preview: (
              <>
                <MenuRoot className="w-56">
                  <MenuTrigger>Open menu</MenuTrigger>
                  <MenuPositioner>
                    <MenuContent>
                      <MenuItem value="react">React</MenuItem>
                      <MenuItem value="solid">Solid</MenuItem>
                      <MenuItem value="vue">Vue</MenuItem>
                      <MenuItem value="svelte">Svelte</MenuItem>
                      <MenuSeparator />
                      <MenuItem value="react">React</MenuItem>
                      <MenuItem value="solid">Solid</MenuItem>
                      <MenuItem value="vue">Vue</MenuItem>
                      <MenuItem value="svelte">Svelte</MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<MenuRoot class="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuPositioner>
    <MenuContent>
      <MenuItem value="react">React</MenuItem>
      <MenuItem value="solid">Solid</MenuItem>
      <MenuItem value="vue">Vue</MenuItem>
      <MenuItem value="svelte">Svelte</MenuItem>
      <MenuSeparator />
      <MenuItem value="react">React</MenuItem>
      <MenuItem value="solid">Solid</MenuItem>
      <MenuItem value="vue">Vue</MenuItem>
      <MenuItem value="svelte">Svelte</MenuItem>
    </MenuContent>
  </MenuPositioner>
</MenuRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <MenuRoot className="w-56">
                  <MenuTrigger>Open menu</MenuTrigger>
                  <MenuPositioner>
                    <MenuContent>
                      <MenuItem shortcut="⇧⌘P" value="react">
                        React
                      </MenuItem>
                      <MenuItem shortcut="⌘B" value="solid">
                        Solid
                      </MenuItem>
                      <MenuItem shortcut="⌘S" value="vue">
                        Vue
                      </MenuItem>
                      <MenuItem shortcut="⌘K" value="svelte">
                        Svelte
                      </MenuItem>
                      <MenuSeparator />
                      <MenuItem value="react">React</MenuItem>
                      <MenuItem value="solid">Solid</MenuItem>
                      <MenuItem value="vue">Vue</MenuItem>
                      <MenuItem shortcut="⇧⌘Q" value="svelte">
                        Svelte
                      </MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<MenuRoot class="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuPositioner>
    <MenuContent>
      <MenuItem shortcut="⇧⌘P" value="react">
        React
      </MenuItem>
      <MenuItem shortcut="⌘B" value="solid">
        Solid
      </MenuItem>
      <MenuItem shortcut="⌘S" value="vue">
        Vue
      </MenuItem>
      <MenuItem shortcut="⌘K" value="svelte">
        Svelte
      </MenuItem>
      <MenuSeparator />
      <MenuItem value="react">React</MenuItem>
      <MenuItem value="solid">Solid</MenuItem>
      <MenuItem value="vue">Vue</MenuItem>
      <MenuItem shortcut="⇧⌘Q" value="svelte">
        Svelte
      </MenuItem>
    </MenuContent>
  </MenuPositioner>
</MenuRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <MenuRoot className="w-56">
                  <MenuTrigger>Open menu</MenuTrigger>
                  <MenuPositioner>
                    <MenuContent>
                      <MenuItem shortcut="⇧⌘P" value="react">
                        React
                      </MenuItem>
                      <MenuItem shortcut="⌘B" value="solid">
                        Solid
                      </MenuItem>
                      <MenuItem shortcut="⌘S" value="vue">
                        Vue
                      </MenuItem>
                      <MenuItem shortcut="⌘K" value="svelte">
                        Svelte
                      </MenuItem>
                      <MenuRoot
                        positioning={{
                          placement: "right-start",
                          gutter: 12,
                        }}
                      >
                        <MenuTriggerItem>Frameworks</MenuTriggerItem>
                        <MenuPositioner>
                          <MenuContent>
                            <MenuItem value="react">React</MenuItem>
                            <MenuItem value="solid">Solid</MenuItem>
                            <MenuItem value="vue">Vue</MenuItem>
                            <MenuItem value="svelte">Svelte</MenuItem>
                          </MenuContent>
                        </MenuPositioner>
                      </MenuRoot>
                      <MenuSeparator />
                      <MenuItem disabled value="react">
                        React
                      </MenuItem>
                      <MenuItem value="solid">Solid</MenuItem>
                      <MenuItem value="vue">Vue</MenuItem>
                      <MenuItem shortcut="⇧⌘Q" value="svelte">
                        Svelte
                      </MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<MenuRoot class="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuPositioner>
    <MenuContent>
      <MenuItem shortcut="⇧⌘P" value="react">
        React
      </MenuItem>
      <MenuItem shortcut="⌘B" value="solid">
        Solid
      </MenuItem>
      <MenuItem shortcut="⌘S" value="vue">
        Vue
      </MenuItem>
      <MenuItem shortcut="⌘K" value="svelte">
        Svelte
      </MenuItem>
      <MenuRoot
        :positioning="{ placement: 'right-start', gutter: 12 }"
      >
        <MenuTriggerItem>Frameworks</MenuTriggerItem>
        <MenuPositioner>
          <MenuContent>
            <MenuItem value="react">React</MenuItem>
            <MenuItem value="solid">Solid</MenuItem>
            <MenuItem value="vue">Vue</MenuItem>
            <MenuItem value="svelte">Svelte</MenuItem>
          </MenuContent>
        </MenuPositioner>
      </MenuRoot>
      <MenuSeparator />
      <MenuItem disabled value="react">
        React
      </MenuItem>
      <MenuItem value="solid">Solid</MenuItem>
      <MenuItem value="vue">Vue</MenuItem>
      <MenuItem shortcut="⇧⌘Q" value="svelte">
        Svelte
      </MenuItem>
    </MenuContent>
  </MenuPositioner>
</MenuRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <MenuRoot className="w-56">
                  <MenuTrigger>Open menu</MenuTrigger>
                  <MenuPositioner>
                    <MenuContent>
                      <MenuCheckboxItem
                        checked={react}
                        onCheckedChange={setReact}
                        value="checked"
                      >
                        React
                      </MenuCheckboxItem>
                      <MenuCheckboxItem
                        checked={solid}
                        onCheckedChange={setSolid}
                        value="checked"
                      >
                        Solid
                      </MenuCheckboxItem>
                      <MenuCheckboxItem
                        checked={vue}
                        onCheckedChange={setVue}
                        value="checked"
                      >
                        Vue
                      </MenuCheckboxItem>
                      <MenuCheckboxItem
                        checked={svelte}
                        onCheckedChange={setSvelte}
                        value="checked"
                      >
                        Svelte
                      </MenuCheckboxItem>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<MenuRoot class="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuPositioner>
    <MenuContent>
      <MenuCheckboxItem
        :checked="react"
        :onCheckedChange="(checked) => (react = checked)"
        value="checked"
      >
        React
      </MenuCheckboxItem>
      <MenuCheckboxItem
        :checked="solid"
        :onCheckedChange="(checked) => (solid = checked)"
        value="checked"
      >
        Solid
      </MenuCheckboxItem>
      <MenuCheckboxItem
        :checked="vue"
        :onCheckedChange="(checked) => (vue = checked)"
        value="checked"
      >
        Vue
      </MenuCheckboxItem>
      <MenuCheckboxItem
        :checked="svelte"
        :onCheckedChange="(checked) => (svelte = checked)"
        value="checked"
      >
        Svelte
      </MenuCheckboxItem>
    </MenuContent>
  </MenuPositioner>
</MenuRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <MenuRoot className="w-56">
                  <MenuTrigger>Open menu</MenuTrigger>
                  <MenuPositioner>
                    <MenuContent>
                      <MenuRadioItemGroup>
                        <MenuItemGroupLabel>Frameworks</MenuItemGroupLabel>
                        {["React", "Solid", "Vue", "Svelte"].map(
                          (framework) => (
                            <MenuRadioItem
                              key={framework}
                              value={framework}
                              checked={framework == value}
                              onCheckedChange={(checked) =>
                                checked ? setValue(framework) : ""
                              }
                            >
                              {framework}
                            </MenuRadioItem>
                          )
                        )}
                      </MenuRadioItemGroup>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<MenuRoot class="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuPositioner>
    <MenuContent>
      <MenuRadioItemGroup>
        <MenuItemGroupLabel>Frameworks</MenuItemGroupLabel>
        <MenuRadioItem
          v-for="framework in ['React', 'Solid', 'Vue', 'Svelte']"
          :key="framework"
          :value="framework"
          :checked="framework == value"
          :onCheckedChange="
            (checked) => (checked ? (value = framework) : '')
          "
        >
          {{ framework }}
        </MenuRadioItem>
      </MenuRadioItemGroup>
    </MenuContent>
  </MenuPositioner>
</MenuRoot>
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
