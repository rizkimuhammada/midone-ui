import {
  ComboboxRoot,
  ComboboxLabel,
  ComboboxControl,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItem,
  ComboboxItemText,
} from "@/components/ui/combobox";
import * as combobox from "@zag-js/combobox";
import { useState } from "react";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";

function Main() {
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

  const [stateSingle, setStateSingle] = useState([""]);
  const [stateMultiple, setStateMultiple] = useState([""]);
  const [stateTimezone, setStateTimezone] = useState([""]);
  const [options, setOptions] = useState(comboboxData);
  const [timezoneOptions, setTimezoneOptions] = useState(timezoneData);

  const collection = combobox.collection({
    items: options,
    itemToValue: (item) => item.label,
  });

  const collectionTimezone = combobox.collection({
    items: timezoneOptions.flatMap((region) =>
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
                <ComboboxRoot
                  collection={collection}
                  value={stateSingle}
                  onValueChange={(details) => {
                    setStateSingle(details.value);
                  }}
                  onOpenChange={() => {
                    setOptions(comboboxData);
                  }}
                  onInputValueChange={({ inputValue }) => {
                    const filtered = comboboxData.filter((item) =>
                      item.label
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    );
                    setOptions(filtered.length > 0 ? filtered : comboboxData);
                  }}
                  className="w-56"
                >
                  <ComboboxLabel>Single</ComboboxLabel>
                  <ComboboxControl>
                    <ComboboxTrigger />
                  </ComboboxControl>
                  <ComboboxContent>
                    <ComboboxInput placeholder="Search frameworks..." />
                    <ComboboxItemGroup>
                      <ComboboxItemGroupLabel>
                        Frameworks
                      </ComboboxItemGroupLabel>
                      {collection.items.map((item) => (
                        <ComboboxItem key={item.code} item={item}>
                          <ComboboxItemText>{item.label}</ComboboxItemText>
                        </ComboboxItem>
                      ))}
                    </ComboboxItemGroup>
                  </ComboboxContent>
                </ComboboxRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
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

const stateSingle = ref([""]);
const stateMultiple = ref([""]);
const stateTimezone = ref([""]);

const options = ref(comboboxData);
const timezoneOptions = ref(timezoneData);

const collection = computed(() =>
  combobox.collection({
    items: options.value,
    itemToValue: (item) => item.label,
  })
);

const collectionTimezone = computed(() =>
  combobox.collection({
    items: timezoneOptions.value.flatMap((region) =>
      region.items.map((item) => ({
        region: region.label,
        value: item.value,
        label: item.label,
      }))
    ),
  })
);

<ComboboxRoot
  :collection="collection"
  :value="stateSingle"
  @value-change="(details) => (stateSingle = details.value)"
  @input-value-change="
    ({ inputValue }) => {
      const filtered = comboboxData.filter((item) =>
        item.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      options = filtered.length > 0 ? filtered : comboboxData;
    }
  "
  class="w-56"
>
  <ComboboxLabel>Single</ComboboxLabel>
  <ComboboxControl>
    <ComboboxTrigger />
  </ComboboxControl>
  <ComboboxContent>
    <ComboboxInput placeholder="Search frameworks..." />
    <ComboboxItemGroup>
      <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
      <ComboboxItem
        v-for="item in collection.items"
        :key="item.code"
        :item="item"
      >
        <ComboboxItemText>{{ item.label }}</ComboboxItemText>
      </ComboboxItem>
    </ComboboxItemGroup>
  </ComboboxContent>
</ComboboxRoot>
                        `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/combobox</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/combobox/ComboboxRoot.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { comboboxRoot } from "@midoneui/core/styles/combobox.styles";
import { provide, computed } from "vue";
import * as combobox from "@zag-js/combobox";
import { useMachine, normalizeProps } from "@zag-js/vue";
import type { Props } from "@zag-js/combobox";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  multiple = false,
  selectionBehavior = "clear",
  value,
  asChild = false,
  onOpenChange,
  onInputValueChange,
  onValueChange,
  open = undefined,
  ...props
} = defineProps<Partial<Props> & { asChild?: boolean; class?: string }>();

const service = useMachine(combobox.machine, {
  multiple,
  selectionBehavior,
  onOpenChange,
  onInputValueChange,
  onValueChange,
  open,
  ...props,
  id: crypto.randomUUID(),
});

const api = computed(() => combobox.connect(service, normalizeProps));

provide("comboboxApi", api);
</script>

<template>
  <Slot
    :class="cn(comboboxRoot, className)"
    :data-multiple="multiple"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
                    `}
        </PreviewCode>
        <PreviewCode title="components/ui/combobox/ComboboxLabel.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxLabel } from "@midoneui/core/styles/combobox.styles";
import { Label } from "@/components/ui/label";
import type { Api } from "@zag-js/combobox";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("comboboxApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getLabelProps() }">
    <slot v-if="asChild" />
    <Label v-else :class="cn(comboboxLabel, className)"><slot /></Label>
  </Slot>
</template>
                    `}
        </PreviewCode>
        <PreviewCode title="components/ui/combobox/ComboboxControl.vue">
          {`
<script lang="ts" setup>
import type { Api } from "@zag-js/combobox";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxControl } from "@midoneui/core/styles/combobox.styles";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("comboboxApi");
</script>

<template>
  <Slot
    :class="cn(comboboxControl, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getLabelProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
                    `}
        </PreviewCode>
        <PreviewCode title="components/ui/combobox/ComboboxInput.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { comboboxInput } from "@midoneui/core/styles/combobox.styles";
import { Input } from "@/components/ui/input";
import type { Api } from "@zag-js/combobox";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("comboboxApi");
</script>

<template>
  <Input
    :class="cn(comboboxInput, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getInputProps() }"
  />
</template>
                    `}
        </PreviewCode>
        <PreviewCode title="components/ui/combobox/ComboboxTrigger.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { Button } from "@/components/ui/button";
import { ChevronsUpDownIcon } from "lucide-vue-next";
import { comboboxTrigger } from "@midoneui/core/styles/combobox.styles";
import { ComboboxClearTrigger } from ".";
import type { Api } from "@zag-js/combobox";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("comboboxApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getTriggerProps() }">
    <Button v-if="!asChild" :class="cn(comboboxTrigger, className)">
      <div>{{ api?.valueAsString || "Select Options..." }}</div>
      <ComboboxClearTrigger>Clear</ComboboxClearTrigger>
      <ChevronsUpDownIcon />
    </Button>
    <slot v-else />
  </Slot>
</template>
                    `}
        </PreviewCode>
        <PreviewCode title="components/ui/combobox/ComboboxClearTrigger.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxClearTrigger } from "@midoneui/core/styles/combobox.styles";
import type { Api } from "@zag-js/combobox";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("comboboxApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getClearTriggerProps() }">
    <slot v-if="asChild" />
    <span :class="cn(comboboxClearTrigger, className)" v-else>
      <slot />
    </span>
  </Slot>
</template>
                    `}
        </PreviewCode>
        <PreviewCode title="components/ui/combobox/ComboboxPositioner.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { comboboxPositioner } from "@midoneui/core/styles/combobox.styles";
import type { Api } from "@zag-js/combobox";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("comboboxApi");
</script>

<template>
  <Slot
    :class="cn(comboboxPositioner, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getPositionerProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
                    `}
        </PreviewCode>
        <PreviewCode title="components/ui/combobox/ComboboxContent.vue">
          {`
<script lang="ts" setup>
import type { Api } from "@zag-js/combobox";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxControl } from "@midoneui/core/styles/combobox.styles";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("comboboxApi");
</script>

<template>
  <Slot
    :class="cn(comboboxControl, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getLabelProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
                    `}
        </PreviewCode>
        <PreviewCode title="components/ui/combobox/ComboboxItemGroup.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItemGroup } from "@midoneui/core/styles/combobox.styles";
import type { Api } from "@zag-js/combobox";
import { provide, inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("comboboxApi");
const itemGroupId = { id: crypto.randomUUID() };

provide("comboboxItemGroupId", itemGroupId);
</script>

<template>
  <Slot
    :class="cn(comboboxItemGroup, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getItemGroupProps(itemGroupId) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
                    `}
        </PreviewCode>
        <PreviewCode title="components/ui/combobox/ComboboxItemGroupLabel.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItemGroupLabel } from "@midoneui/core/styles/combobox.styles";
import type { Api, ItemGroupProps } from "@zag-js/combobox";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("comboboxApi");
const itemGroupId = inject<ItemGroupProps>("comboboxItemGroupId");
</script>

<template>
  <Slot
    :class="cn(comboboxItemGroupLabel, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getItemGroupLabelProps({
        htmlFor: itemGroupId?.id!,
      }) }"
  >
    <slot v-if="asChild" />
    <label v-else>
      <slot />
    </label>
  </Slot>
</template>
                    `}
        </PreviewCode>
        <PreviewCode title="components/ui/combobox/ComboboxItem.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItem } from "@midoneui/core/styles/combobox.styles";
import type { ItemProps } from "@zag-js/combobox";
import type { Api } from "@zag-js/combobox";
import { provide, inject } from "vue";
import { ComboboxItemIndicator } from ".";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<ItemProps & { class?: string; asChild?: boolean }>();

const api = inject<Api>("comboboxApi");

provide("comboboxItem", props);
</script>

<template>
  <Slot
    :class="cn(comboboxItem, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getItemProps(props) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
      <ComboboxItemIndicator />
    </div>
  </Slot>
</template>
                    `}
        </PreviewCode>
        <PreviewCode title="components/ui/combobox/ComboboxItemText.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItemText } from "@midoneui/core/styles/combobox.styles";
import type { Api, ItemProps } from "@zag-js/combobox";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("comboboxApi");
const item = inject<ItemProps>("comboboxItem");
</script>

<template>
  <Slot
    :class="cn(comboboxItemText, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getItemTextProps(item!) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
                    `}
        </PreviewCode>
        <PreviewCode title="components/ui/combobox/ComboboxItemIndicator.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItemIndicator } from "@midoneui/core/styles/combobox.styles";
import { Check } from "lucide-vue-next";
import type { Api, ItemProps } from "@zag-js/combobox";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("comboboxApi");
const item = inject<ItemProps>("comboboxItem");
</script>

<template>
  <Slot
    :class="cn(comboboxItemIndicator, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getItemIndicatorProps(item!) }"
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
        <PreviewCode title="components/ui/combobox/index.ts">
          {`
export { default as ComboboxRoot } from "./ComboboxRoot.vue";
export { default as ComboboxLabel } from "./ComboboxLabel.vue";
export { default as ComboboxControl } from "./ComboboxControl.vue";
export { default as ComboboxInput } from "./ComboboxInput.vue";
export { default as ComboboxTrigger } from "./ComboboxTrigger.vue";
export { default as ComboboxClearTrigger } from "./ComboboxClearTrigger.vue";
export { default as ComboboxPositioner } from "./ComboboxPositioner.vue";
export { default as ComboboxContent } from "./ComboboxContent.vue";
export { default as ComboboxItemGroup } from "./ComboboxItemGroup.vue";
export { default as ComboboxItemGroupLabel } from "./ComboboxItemGroupLabel.vue";
export { default as ComboboxItem } from "./ComboboxItem.vue";
export { default as ComboboxItemText } from "./ComboboxItemText.vue";
export { default as ComboboxItemIndicator } from "./ComboboxItemIndicator.vue";
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
  ComboboxRoot,
  ComboboxLabel,
  ComboboxControl,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItem,
  ComboboxItemText,
} from "@/components/ui/combobox";
                    `}
        </PreviewCode>
        <PreviewCode>
          {`
<ComboboxRoot
  :collection="collection"
  :value="stateSingle"
  @value-change="(details) => (stateSingle = details.value)"
  @input-value-change="
    ({ inputValue }) => {
      const filtered = comboboxData.filter((item) =>
        item.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      options = filtered.length > 0 ? filtered : comboboxData;
    }
  "
  class="w-56"
>
  <ComboboxLabel>Single</ComboboxLabel>
  <ComboboxControl>
    <ComboboxTrigger />
  </ComboboxControl>
  <ComboboxContent>
    <ComboboxInput placeholder="Search frameworks..." />
    <ComboboxItemGroup>
      <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
      <ComboboxItem
        v-for="item in collection.items"
        :key="item.code"
        :item="item"
      >
        <ComboboxItemText>{{ item.label }}</ComboboxItemText>
      </ComboboxItem>
    </ComboboxItemGroup>
  </ComboboxContent>
</ComboboxRoot>
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
                <ComboboxRoot
                  collection={collection}
                  value={stateMultiple}
                  onValueChange={(details) => {
                    setStateMultiple(details.value);
                  }}
                  onOpenChange={() => {
                    setOptions(comboboxData);
                  }}
                  onInputValueChange={({ inputValue }) => {
                    const filtered = comboboxData.filter((item) =>
                      item.label
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    );
                    setOptions(filtered.length > 0 ? filtered : comboboxData);
                  }}
                  className="w-56"
                  multiple
                >
                  <ComboboxLabel>Multiple</ComboboxLabel>
                  <ComboboxControl>
                    <ComboboxTrigger />
                  </ComboboxControl>
                  <ComboboxContent>
                    <ComboboxInput placeholder="Search frameworks..." />
                    <ComboboxItemGroup>
                      <ComboboxItemGroupLabel>
                        Frameworks
                      </ComboboxItemGroupLabel>
                      {collection.items.map((item) => (
                        <ComboboxItem key={item.code} item={item}>
                          <ComboboxItemText>{item.label}</ComboboxItemText>
                        </ComboboxItem>
                      ))}
                    </ComboboxItemGroup>
                  </ComboboxContent>
                </ComboboxRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
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

const stateSingle = ref([""]);
const stateMultiple = ref([""]);
const stateTimezone = ref([""]);

const options = ref(comboboxData);
const timezoneOptions = ref(timezoneData);

const collection = computed(() =>
  combobox.collection({
    items: options.value,
    itemToValue: (item) => item.label,
  })
);

const collectionTimezone = computed(() =>
  combobox.collection({
    items: timezoneOptions.value.flatMap((region) =>
      region.items.map((item) => ({
        region: region.label,
        value: item.value,
        label: item.label,
      }))
    ),
  })
);

<ComboboxRoot
    :collection="collection"
    :value="stateMultiple"
    @value-change="(details) => (stateMultiple = details.value)"
    @input-value-change="
      ({ inputValue }) => {
        const filtered = comboboxData.filter((item) =>
          item.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        options = filtered.length > 0 ? filtered : comboboxData;
      }
    "
    class="w-56"
    multiple
  >
    <ComboboxLabel>Multiple</ComboboxLabel>
    <ComboboxControl>
      <ComboboxTrigger />
    </ComboboxControl>
    <ComboboxContent>
      <ComboboxInput placeholder="Search frameworks..." />
      <ComboboxItemGroup>
        <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
        <ComboboxItem
          v-for="item in collection.items"
          :key="item.code"
          :item="item"
        >
          <ComboboxItemText>{{ item.label }}</ComboboxItemText>
        </ComboboxItem>
      </ComboboxItemGroup>
    </ComboboxContent>
  </ComboboxRoot>
                      `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <ComboboxRoot
                  collection={collectionTimezone}
                  value={stateTimezone}
                  onValueChange={(details) => {
                    setStateTimezone(details.value);
                  }}
                  onOpenChange={() => {
                    setTimezoneOptions(timezoneData);
                  }}
                  onInputValueChange={({ inputValue }) => {
                    const filtered = timezoneData
                      .map((group) => {
                        const matchedItems = group.items.filter((item) =>
                          item.label
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                        );

                        return {
                          ...group,
                          items: matchedItems,
                        };
                      })
                      .filter((group) => group.items.length > 0);

                    setTimezoneOptions(
                      filtered.length > 0 ? filtered : timezoneData
                    );
                  }}
                  className="w-56"
                  multiple
                >
                  <ComboboxLabel>Scrollable</ComboboxLabel>
                  <ComboboxControl>
                    <ComboboxTrigger />
                  </ComboboxControl>
                  <ComboboxContent>
                    <ComboboxInput placeholder="Search region..." />
                    {timezoneData
                      .map((region) => ({
                        ...region,
                        items: region.items.filter((item) =>
                          collectionTimezone.items.some(
                            (c) => c.value === item.value
                          )
                        ),
                      }))
                      .filter((region) => region.items.length > 0)
                      .map((item) => (
                        <ComboboxItemGroup key={item.label}>
                          <ComboboxItemGroupLabel>
                            {item.label}
                          </ComboboxItemGroupLabel>
                          {item.items.map((timezoneItem) => (
                            <ComboboxItem
                              key={timezoneItem.value}
                              item={timezoneItem.value}
                            >
                              <ComboboxItemText>
                                {timezoneItem.label}
                              </ComboboxItemText>
                            </ComboboxItem>
                          ))}
                        </ComboboxItemGroup>
                      ))}
                  </ComboboxContent>
                </ComboboxRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
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

const stateSingle = ref([""]);
const stateMultiple = ref([""]);
const stateTimezone = ref([""]);

const options = ref(comboboxData);
const timezoneOptions = ref(timezoneData);

const collection = computed(() =>
  combobox.collection({
    items: options.value,
    itemToValue: (item) => item.label,
  })
);

const collectionTimezone = computed(() =>
  combobox.collection({
    items: timezoneOptions.value.flatMap((region) =>
      region.items.map((item) => ({
        region: region.label,
        value: item.value,
        label: item.label,
      }))
    ),
  })
);

<ComboboxRoot
  :collection="collection"
  @input-value-change="
    ({ inputValue }) => {
      const filtered = timezoneData
        .map((group) => {
          const matchedItems = group.items.filter((item) =>
            item.label.toLowerCase().includes(inputValue.toLowerCase())
          );

          return {
            ...group,
            items: matchedItems,
          };
        })
        .filter((group) => group.items.length > 0);

      timezoneOptions = filtered.length > 0 ? filtered : timezoneData;
    }
  "
  :value="stateTimezone"
  @value-change="(details) => (stateTimezone = details.value)"
  class="w-56"
  multiple
>
  <ComboboxLabel>Scrollable</ComboboxLabel>
  <ComboboxControl>
    <ComboboxTrigger />
  </ComboboxControl>
  <ComboboxContent>
    <ComboboxInput placeholder="Search region..." />
    <ComboboxItemGroup
      v-for="item in timezoneData
        .map((region) => ({
          ...region,
          items: region.items.filter((item) =>
            collectionTimezone.items.some((c) => c.value === item.value)
          ),
        }))
        .filter((region) => region.items.length > 0)"
      :key="item.label"
    >
      <ComboboxItemGroupLabel>{{ item.label }}</ComboboxItemGroupLabel>
      <ComboboxItem
        v-for="timezoneItem in item.items"
        :key="timezoneItem.value"
        :item="timezoneItem.value"
      >
        <ComboboxItemText>{{ timezoneItem.label }}</ComboboxItemText>
      </ComboboxItem>
    </ComboboxItemGroup>
  </ComboboxContent>
</ComboboxRoot>
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
