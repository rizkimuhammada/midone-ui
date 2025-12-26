import {
  SelectRoot,
  SelectLabel,
  SelectControl,
  SelectTrigger,
  SelectValueText,
  SelectContent,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItem,
  SelectItemText,
} from "@/components/ui/select";
import * as select from "@zag-js/select";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";

const comboboxData = [
  { label: "React", code: "react" },
  { label: "Solid", code: "solid" },
  { label: "Vue", code: "vue" },
  { label: "Svelte", code: "svelte" },
];

const timezoneData = [
  {
    label: "North America",
    items: [
      { value: "est", label: "Eastern Standard Time (EST)" },
      { value: "cst", label: "Central Standard Time (CST)" },
      { value: "mst", label: "Mountain Standard Time (MST)" },
      { value: "pst", label: "Pacific Standard Time (PST)" },
      { value: "akst", label: "Alaska Standard Time (AKST)" },
      { value: "hst", label: "Hawaii Standard Time (HST)" },
    ],
  },
  {
    label: "Europe & Africa",
    items: [
      { value: "gmt", label: "Greenwich Mean Time (GMT)" },
      { value: "cet", label: "Central European Time (CET)" },
      { value: "eet", label: "Eastern European Time (EET)" },
      { value: "west", label: "Western European Summer Time (WEST)" },
      { value: "cat", label: "Central Africa Time (CAT)" },
      { value: "eat", label: "East Africa Time (EAT)" },
    ],
  },
  {
    label: "Asia",
    items: [
      { value: "msk", label: "Moscow Time (MSK)" },
      { value: "ist", label: "India Standard Time (IST)" },
      { value: "cst_china", label: "China Standard Time (CST)" },
      { value: "jst", label: "Japan Standard Time (JST)" },
      { value: "kst", label: "Korea Standard Time (KST)" },
      {
        value: "ist_indonesia",
        label: "Indonesia Central Standard Time (WITA)",
      },
    ],
  },
  {
    label: "Australia & Pacific",
    items: [
      { value: "awst", label: "Australian Western Standard Time (AWST)" },
      { value: "acst", label: "Australian Central Standard Time (ACST)" },
      { value: "aest", label: "Australian Eastern Standard Time (AEST)" },
      { value: "nzst", label: "New Zealand Standard Time (NZST)" },
      { value: "fjt", label: "Fiji Time (FJT)" },
    ],
  },
  {
    label: "South America",
    items: [
      { value: "art", label: "Argentina Time (ART)" },
      { value: "bot", label: "Bolivia Time (BOT)" },
      { value: "brt", label: "Brasilia Time (BRT)" },
      { value: "clt", label: "Chile Standard Time (CLT)" },
    ],
  },
];

function Main() {
  const collection = select.collection({
    items: comboboxData,
    itemToValue: (item) => item.label,
  });

  const collectionTimezone = select.collection({
    items: timezoneData.flatMap((region) =>
      region.items.map((item) => ({
        region: region.label,
        value: item.value,
        label: item.label,
      }))
    ),
  });

  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <SelectRoot className="w-56" collection={collection}>
                  <SelectLabel>Single</SelectLabel>
                  <SelectControl>
                    <SelectTrigger>
                      <SelectValueText placeholder="Select a Framework" />
                    </SelectTrigger>
                  </SelectControl>
                  <SelectContent>
                    <SelectItemGroup>
                      <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
                      {collection.items.map((item) => (
                        <SelectItem key={item.code} item={item}>
                          <SelectItemText>{item.label}</SelectItemText>
                        </SelectItem>
                      ))}
                    </SelectItemGroup>
                  </SelectContent>
                </SelectRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<SelectRoot class="w-56" :collection="collection">
  <SelectLabel>Single</SelectLabel>
  <SelectControl>
    <SelectTrigger>
      <SelectValueText placeholder="Select a Framework" />
    </SelectTrigger>
  </SelectControl>
  <SelectContent>
    <SelectItemGroup>
      <SelectItemGroupLabel> Frameworks </SelectItemGroupLabel>
      <SelectItem
        v-for="item in collection.items"
        :key="item.code"
        :item="item"
      >
        <SelectItemText>{{ item.label }}</SelectItemText>
      </SelectItem>
    </SelectItemGroup>
  </SelectContent>
</SelectRoot>
                        `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/select</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/select/SelectClearTrigger.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectClearTrigger } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getClearTriggerProps(), ...props, ...$attrs }">
    <slot v-if="asChild" />
    <span v-else :class="cn(selectClearTrigger, className)"><slot /></span>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/select/SelectContent.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectContent } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import { Box } from "@/components/ui/box";
import { SelectPositioner } from ".";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <Teleport to="body">
    <SelectPositioner>
      <Slot v-bind="{ ...api?.getContentProps(), ...props, ...$attrs }">
        <slot v-if="asChild" />
        <Box v-else raised="single" :class="cn(selectContent, className)">
          <div><slot /></div>
        </Box>
      </Slot>
    </SelectPositioner>
  </Teleport>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/select/SelectControl.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectControl } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <Slot
    :class="cn(selectControl, className)"
    v-bind="{ ...api?.getControlProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else><slot /></div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/select/SelectHiddenSelect.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectHiddenSelect } from "@midoneui/core/styles/select.styles";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <select
    :class="cn(selectHiddenSelect, className)"
    v-bind="{ ...api?.getHiddenSelectProps(), ...props, ...$attrs }"
  />
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/select/SelectIndicator.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectIndicator } from "@midoneui/core/styles/select.styles";
import { ChevronDownIcon } from "lucide-vue-next";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <Slot
    :class="cn(selectIndicator, className)"
    v-bind="{ ...api?.getIndicatorProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot v-if="$slots.default" />
      <ChevronDownIcon v-else class="size-3.5" />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/select/SelectItem.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectItem } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import { SelectItemIndicator } from ".";
import type { Api, ItemProps } from "@zag-js/select";
import { provide, inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  ItemProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("selectApi");

provide("selectItem", props);
</script>

<template>
  <Slot
    :class="cn(selectItem, className)"
    v-bind="{ ...api?.getItemProps(props), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
      <SelectItemIndicator />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/select/SelectItemGroup.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectItemGroup } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/select";
import { provide, inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
const itemGroupId = { id: crypto.randomUUID() };

provide("selectItemGroup", props);
</script>

<template>
  <Slot
    :class="cn(selectItemGroup, className)"
    v-bind="{ ...api?.getItemGroupProps(itemGroupId), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else><slot /></div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/select/SelectItemGroupLabel.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectItemGroupLabel } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemGroupProps } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
const itemGroupId = inject<ItemGroupProps>("selectItemGroup");
</script>

<template>
  <Slot
    :class="cn(selectItemGroupLabel, className)"
    v-bind="{ ...api?.getItemGroupLabelProps({
        htmlFor: itemGroupId?.id!,
      }), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <label v-else><slot /></label>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/select/SelectItemIndicator.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectItemIndicator } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemProps } from "@zag-js/select";
import { Check } from "lucide-vue-next";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
const item = inject<ItemProps>("selectItem");
</script>

<template>
  <Slot
    :class="cn(selectItemIndicator, className)"
    v-bind="{ ...api?.getItemIndicatorProps(item!), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot v-if="$slots.default" />
      <Check v-else class="size-3.5" />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/select/SelectItemText.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectItemText } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemProps } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
const item = inject<ItemProps>("selectItem");
</script>

<template>
  <Slot
    :class="cn(selectItemText, className)"
    v-bind="{ ...api?.getItemTextProps(item!), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/select/SelectLabel.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectLabel } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import { Label } from "@/components/ui/label";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getLabelProps(), ...props, ...$attrs }">
    <slot v-if="asChild" />
    <Label v-else :class="cn(selectLabel, className)"><slot /></Label>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/select/SelectPositioner.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectPositioner } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <Slot
    :class="cn(selectPositioner, className)"
    v-bind="{ ...api?.getPositionerProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else><slot /></div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/select/SelectRoot.vue">
          {`
<script lang="ts" setup>
import * as select from "@zag-js/select";
import type { Props } from "@zag-js/select";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { selectRoot } from "@midoneui/core/styles/select.styles";
import { SelectHiddenSelect } from ".";

const {
  class: className,
  asChild = false,
  multiple = undefined,
  open = undefined,
  closeOnSelect = undefined,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(select.machine, {
  ...props,
  multiple,
  open,
  closeOnSelect,
  id: crypto.randomUUID(),
});
const api = computed(() => select.connect(service, normalizeProps));

provide("selectApi", api);
</script>

<template>
  <Slot
    :class="cn(selectRoot, className)"
    :data-multiple="multiple"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
      <SelectHiddenSelect />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/select/SelectTrigger.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectTrigger } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import { Button } from "@/components/ui/button";
import { SelectClearTrigger, SelectIndicator } from ".";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getTriggerProps(), ...props, ...$attrs }">
    <Button v-if="!asChild" :class="cn(selectTrigger, className)">
      <slot />
      <SelectClearTrigger>Clear</SelectClearTrigger>
      <SelectIndicator />
    </Button>
    <slot v-else />
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/select/SelectValueText.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectValueText } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
  placeholder?: string;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <Slot
    :class="cn(selectValueText, className)"
    v-bind="{ ...api?.getValueTextProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>{{ api?.valueAsString || props.placeholder }}</div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/select/index.ts">
          {`
export { default as SelectClearTrigger } from "./SelectClearTrigger.vue";
export { default as SelectContent } from "./SelectContent.vue";
export { default as SelectControl } from "./SelectControl.vue";
export { default as SelectHiddenSelect } from "./SelectHiddenSelect.vue";
export { default as SelectIndicator } from "./SelectIndicator.vue";
export { default as SelectItem } from "./SelectItem.vue";
export { default as SelectItemGroup } from "./SelectItemGroup.vue";
export { default as SelectItemGroupLabel } from "./SelectItemGroupLabel.vue";
export { default as SelectItemIndicator } from "./SelectItemIndicator.vue";
export { default as SelectItemText } from "./SelectItemText.vue";
export { default as SelectLabel } from "./SelectLabel.vue";
export { default as SelectPositioner } from "./SelectPositioner.vue";
export { default as SelectRoot } from "./SelectRoot.vue";
export { default as SelectTrigger } from "./SelectTrigger.vue";
export { default as SelectValueText } from "./SelectValueText.vue";
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
  SelectRoot,
  SelectLabel,
  SelectControl,
  SelectTrigger,
  SelectValueText,
  SelectContent,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItem,
  SelectItemText,
} from "@/components/ui/select";
                    `}
        </PreviewCode>
        <PreviewCode>
          {`
<SelectRoot class="w-56" :collection="collection">
  <SelectLabel>Single</SelectLabel>
  <SelectControl>
    <SelectTrigger>
      <SelectValueText placeholder="Select a Framework" />
    </SelectTrigger>
  </SelectControl>
  <SelectContent>
    <SelectItemGroup>
      <SelectItemGroupLabel> Frameworks </SelectItemGroupLabel>
      <SelectItem
        v-for="item in collection.items"
        :key="item.code"
        :item="item"
      >
        <SelectItemText>{{ item.label }}</SelectItemText>
      </SelectItem>
    </SelectItemGroup>
  </SelectContent>
</SelectRoot>
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
                <SelectRoot className="w-56" collection={collection} multiple>
                  <SelectLabel>Multiple</SelectLabel>
                  <SelectControl>
                    <SelectTrigger>
                      <SelectValueText placeholder="Select a Framework" />
                    </SelectTrigger>
                  </SelectControl>
                  <SelectContent>
                    <SelectItemGroup>
                      <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
                      {collection.items.map((item) => (
                        <SelectItem key={item.code} item={item}>
                          <SelectItemText>{item.label}</SelectItemText>
                        </SelectItem>
                      ))}
                    </SelectItemGroup>
                  </SelectContent>
                </SelectRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<SelectRoot class="w-56" :collection="collection" multiple>
  <SelectLabel>Multiple</SelectLabel>
  <SelectControl>
    <SelectTrigger>
      <SelectValueText placeholder="Select a Framework" />
    </SelectTrigger>
  </SelectControl>
  <SelectContent>
    <SelectItemGroup>
      <SelectItemGroupLabel> Frameworks </SelectItemGroupLabel>
      <SelectItem
        v-for="item in collection.items"
        :key="item.code"
        :item="item"
      >
        <SelectItemText>{{ item.label }}</SelectItemText>
      </SelectItem>
    </SelectItemGroup>
  </SelectContent>
</SelectRoot>
                      `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <SelectRoot
                  className="w-56"
                  collection={collectionTimezone}
                  multiple
                >
                  <SelectLabel>Scrollable</SelectLabel>
                  <SelectControl>
                    <SelectTrigger>
                      <SelectValueText placeholder="Select a Timezone" />
                    </SelectTrigger>
                  </SelectControl>
                  <SelectContent>
                    {timezoneData.map((item) => (
                      <SelectItemGroup key={item.label}>
                        <SelectItemGroupLabel>
                          {item.label}
                        </SelectItemGroupLabel>
                        {item.items.map((item) => (
                          <SelectItem key={item.value} item={item.value}>
                            <SelectItemText>{item.label}</SelectItemText>
                          </SelectItem>
                        ))}
                      </SelectItemGroup>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<SelectRoot class="w-56" :collection="collectionTimezone" multiple>
  <SelectLabel>Scrollable</SelectLabel>
  <SelectControl>
    <SelectTrigger>
      <SelectValueText placeholder="Select a Timezone" />
    </SelectTrigger>
  </SelectControl>
  <SelectContent>
    <SelectItemGroup v-for="item in timezoneData" :key="item.label">
      <SelectItemGroupLabel>{{ item.label }}</SelectItemGroupLabel>
      <SelectItem
        v-for="timezoneItem in item.items"
        :key="timezoneItem.value"
        :item="timezoneItem.value"
      >
        <SelectItemText>{{ timezoneItem.label }}</SelectItemText>
      </SelectItem>
    </SelectItemGroup>
  </SelectContent>
</SelectRoot>
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
