# Datepicker

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<DatePickerRoot label="Basic" class="w-84" />
```

## Dependency

```bash
npm install @zag-js/date-picker lucide-vue-next . @zag-js/vue
```

## Component

### DatePickerClearTrigger.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerClearTrigger } from "@midoneui/core/styles/datepicker.styles";
import { Button } from "@/components/ui/button";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";
import { X } from "lucide-vue-next";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getClearTriggerProps() }">
    <Button
      variant="ghost"
      v-if="!asChild"
      :class="cn(datePickerClearTrigger, className)"
    >
      <X v-if="!$slots.default" />
      <slot v-else />
    </Button>
    <slot v-else />
  </Slot>
</template>
```

### DatePickerContent.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { datePickerContent } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { Box } from "@/components/ui/box";
import {
  DatePickerYearSelect,
  DatePickerMonthSelect,
  DatePickerView,
  DatePickerContext,
  DatePickerViewControl,
  DatePickerPrevTrigger,
  DatePickerViewTrigger,
  DatePickerRangeText,
  DatePickerNextTrigger,
  DatePickerTable,
  DatePickerTableHead,
  DatePickerTableRow,
  DatePickerTableHeader,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
} from ".";
import { inject } from "vue";

const { class: className, isManual = true } = defineProps<{
  class?: string;
  isManual?: boolean;
}>();

const api = inject<Api>("datepickerApi");
const numOfMonths = inject<number>("datepickerNumOfMonths", 1);
const registerContent = inject<(() => void) | undefined>("registerDatePickerContent", undefined);

if (isManual && registerContent) {
  registerContent();
}
</script>

<template>
  <Box raised="single" :class="cn(datePickerContent, className)" v-bind="api?.getContentProps()">
    <!-- Multi-month layout -->
    <template v-if="numOfMonths > 1">
      <div>
        <DatePickerYearSelect />
        <DatePickerMonthSelect />
        <DatePickerViewControl>
          <DatePickerPrevTrigger />
          <DatePickerRangeText />
          <DatePickerNextTrigger />
        </DatePickerViewControl>
        <DatePickerView view="day" :is-manual="false" class="flex-row">
          <DatePickerContext v-slot="{ datePicker }">
            <DatePickerTable>
              <DatePickerTableHead>
                <DatePickerTableRow>
                  <DatePickerTableHeader v-for="(weekDay, id) in datePicker?.weekDays" :key="id">
                    {{ weekDay.short }}
                  </DatePickerTableHeader>
                </DatePickerTableRow>
              </DatePickerTableHead>
              <DatePickerTableBody>
                <DatePickerTableRow v-for="(week, id) in datePicker?.weeks" :key="id">
                  <DatePickerTableCell v-for="(day, id) in week" :key="id" :value="day">
                    <DatePickerTableCellTrigger>{{ day.day }}</DatePickerTableCellTrigger>
                  </DatePickerTableCell>
                </DatePickerTableRow>
              </DatePickerTableBody>
            </DatePickerTable>
          </DatePickerContext>
          <DatePickerContext v-slot="{ datePicker }">
            <DatePickerTable>
              <DatePickerTableHead>
                <DatePickerTableRow>
                  <DatePickerTableHeader v-for="(weekDay, id) in datePicker?.weekDays" :key="id">
                    {{ weekDay.short }}
                  </DatePickerTableHeader>
                </DatePickerTableRow>
              </DatePickerTableHead>
              <DatePickerTableBody>
                <DatePickerTableRow
                  v-for="(week, id) in datePicker?.getOffset({ months: 1 }).weeks"
                  :key="id"
                >
                  <DatePickerTableCell
                    v-for="(day, id) in week"
                    :key="id"
                    :value="day"
                    :visible-range="datePicker?.getOffset({ months: 1 }).visibleRange"
                  >
                    <DatePickerTableCellTrigger>{{ day.day }}</DatePickerTableCellTrigger>
                  </DatePickerTableCell>
                </DatePickerTableRow>
              </DatePickerTableBody>
            </DatePickerTable>
          </DatePickerContext>
        </DatePickerView>
      </div>
    </template>

    <!-- Standard single-month layout -->
    <template v-else>
      <div>
        <DatePickerYearSelect />
        <DatePickerMonthSelect />
        <DatePickerView view="day" :is-manual="false">
          <DatePickerContext v-slot="{ datePicker }">
            <DatePickerViewControl>
              <DatePickerPrevTrigger />
              <DatePickerViewTrigger>
                <DatePickerRangeText />
              </DatePickerViewTrigger>
              <DatePickerNextTrigger />
            </DatePickerViewControl>
            <DatePickerTable>
              <DatePickerTableHead>
                <DatePickerTableRow>
                  <DatePickerTableHeader v-for="(weekDay, id) in datePicker?.weekDays" :key="id">
                    {{ weekDay.short }}
                  </DatePickerTableHeader>
                </DatePickerTableRow>
              </DatePickerTableHead>
              <DatePickerTableBody>
                <DatePickerTableRow v-for="(week, id) in datePicker?.weeks" :key="id">
                  <DatePickerTableCell v-for="(day, id) in week" :key="id" :value="day">
                    <DatePickerTableCellTrigger>{{ day.day }}</DatePickerTableCellTrigger>
                  </DatePickerTableCell>
                </DatePickerTableRow>
              </DatePickerTableBody>
            </DatePickerTable>
          </DatePickerContext>
        </DatePickerView>
        <DatePickerView view="month" :is-manual="false">
          <DatePickerContext v-slot="{ datePicker }">
            <DatePickerViewControl>
              <DatePickerPrevTrigger />
              <DatePickerViewTrigger>
                <DatePickerRangeText />
              </DatePickerViewTrigger>
              <DatePickerNextTrigger />
            </DatePickerViewControl>
            <DatePickerTable>
              <DatePickerTableBody>
                <DatePickerTableRow
                  v-for="(months, id) in datePicker?.getMonthsGrid({ columns: 4, format: 'short' })"
                  :key="id"
                >
                  <DatePickerTableCell v-for="(month, id) in months" :key="id" :value="month.value">
                    <DatePickerTableCellTrigger>{{ month.label }}</DatePickerTableCellTrigger>
                  </DatePickerTableCell>
                </DatePickerTableRow>
              </DatePickerTableBody>
            </DatePickerTable>
          </DatePickerContext>
        </DatePickerView>
        <DatePickerView view="year" :is-manual="false">
          <DatePickerContext v-slot="{ datePicker }">
            <DatePickerViewControl>
              <DatePickerPrevTrigger />
              <DatePickerViewTrigger>
                <DatePickerRangeText />
              </DatePickerViewTrigger>
              <DatePickerNextTrigger />
            </DatePickerViewControl>
            <DatePickerTable>
              <DatePickerTableBody>
                <DatePickerTableRow
                  v-for="(years, id) in datePicker?.getYearsGrid({ columns: 4 })"
                  :key="id"
                >
                  <DatePickerTableCell v-for="(year, id) in years" :key="id" :value="year.value">
                    <DatePickerTableCellTrigger>{{ year.label }}</DatePickerTableCellTrigger>
                  </DatePickerTableCell>
                </DatePickerTableRow>
              </DatePickerTableBody>
            </DatePickerTable>
          </DatePickerContext>
        </DatePickerView>
      </div>
    </template>
  </Box>
</template>
```

### DatePickerContext.vue

```vue
<script setup lang="ts">
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const api = inject<Api>("datepickerApi");
</script>

<template>
  <slot :datePicker="api"></slot>
</template>
```

### DatePickerControl.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { datePickerControl } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { DatePickerInput, DatePickerTrigger, DatePickerClearTrigger } from ".";
import { inject } from "vue";
import type { ComputedRef } from "vue";

const { class: className } = defineProps<{ class?: string }>();

const api = inject<ComputedRef<Api>>("datepickerApi");
const selectionMode = inject<string>("datepickerSelectionMode", "single");
const inline = inject<boolean>("datepickerInline", false);
const withTrigger = inject<boolean>("datepickerWithTrigger", true);
</script>

<template>
  <div :class="cn(datePickerControl, className)" v-bind="(api as any)?.getControlProps()">
    <template v-if="selectionMode === 'range'">
      <DatePickerInput :index="0" />
      <DatePickerInput :index="1" />
    </template>
    <DatePickerInput v-else />
    <DatePickerTrigger v-if="!inline && withTrigger" />
    <DatePickerClearTrigger />
  </div>
</template>
```

### DatePickerInput.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { datePickerInput } from "@midoneui/core/styles/datepicker.styles";
import { Input } from "@/components/ui/input";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";
import type { ComputedRef } from "vue";

const { class: className, index } = defineProps<{
  class?: string;
  index?: number;
}>();

const api = inject<ComputedRef<Api>>("datepickerApi");
const withTrigger = inject<boolean>("datepickerWithTrigger", true);
const inline = inject<boolean>("datepickerInline", false);

const handleClick = () => {
  if (!withTrigger && !inline && api?.value) {
    api.value.setOpen(true);
  }
};
</script>

<template>
  <Input
    :class="cn(datePickerInput, className)"
    v-bind="{ ...$attrs, ...(api as any)?.getInputProps({ index }) }"
    @click="handleClick"
  />
</template>
```

### DatePickerLabel.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { datePickerLabel } from "@midoneui/core/styles/datepicker.styles";
import { Label } from "@/components/ui/label";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getLabelProps() }">
    <slot v-if="asChild" />
    <Label v-else :class="cn(datePickerLabel, className)">
      <slot />
    </Label>
  </Slot>
</template>
```

### DatePickerMonthSelect.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { datePickerMonthSelect } from "@midoneui/core/styles/datepicker.styles";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <NativeSelect
    :class="cn(datePickerMonthSelect, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getMonthSelectProps() }"
  >
    <NativeSelectOption
      v-for="(month, i) in api?.getMonths()"
      :key="i"
      :value="month.value"
    >
      {{ month.label }}
    </NativeSelectOption>
  </NativeSelect>
</template>
```

### DatePickerNextTrigger.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerNextTrigger } from "@midoneui/core/styles/datepicker.styles";
import { MoveRight } from "lucide-vue-next";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getNextTriggerProps() }">
    <button v-if="!asChild" :class="cn(datePickerNextTrigger, className)">
      <MoveRight v-if="!$slots.default" />
      <slot v-else />
    </button>
    <slot v-else />
  </Slot>
</template>
```

### DatePickerPositioner.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerPositioner } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  isManual = true,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
  isManual?: boolean;
}>();

const api = inject<Api>("datepickerApi");
const registerContent = inject<(() => void) | undefined>("registerDatePickerContent", undefined);

if (isManual && registerContent) {
  registerContent();
}
</script>

<template>
  <Teleport to="body" v-if="api?.open">
    <Slot
      :class="cn(datePickerPositioner, className)"
      v-bind="{ ...props, ...$attrs, ...api?.getPositionerProps() }"
    >
      <slot v-if="asChild" />
      <div v-else>
        <slot />
      </div>
    </Slot>
  </Teleport>
</template>
```

### DatePickerPresetTrigger.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { datePickerPresetTrigger } from "@midoneui/core/styles/datepicker.styles";
import { Button } from "@/components/ui/button";
import type { Api, PresetTriggerProps } from "@zag-js/date-picker";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  PresetTriggerProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getPresetTriggerProps(props) }">
    <Button
      variant="ghost"
      v-if="!asChild"
      :class="cn(datePickerPresetTrigger, className)"
    >
      <slot />
    </Button>
    <slot v-else />
  </Slot>
</template>
```

### DatePickerPrevTrigger.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerPrevTrigger } from "@midoneui/core/styles/datepicker.styles";
import { MoveLeft } from "lucide-vue-next";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getPrevTriggerProps() }">
    <button v-if="!asChild" :class="cn(datePickerPrevTrigger, className)">
      <MoveLeft v-if="!$slots.default" />
      <slot v-else />
    </button>
    <slot v-else />
  </Slot>
</template>
```

### DatePickerRangeText.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { datePickerRangeText } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <div
    :class="cn(datePickerRangeText, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getRangeTextProps() }"
  >
    {{ api?.visibleRangeText.start }}
  </div>
</template>
```

### DatePickerRoot.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { datePickerRoot, datePickerPresets } from "@midoneui/core/styles/datepicker.styles";
import { DatePickerPositioner, DatePickerContent, DatePickerLabel, DatePickerControl } from ".";
import { provide, computed, ref } from "vue";
import * as datepicker from "@zag-js/date-picker";
import type { Props } from "@zag-js/date-picker";
import { useMachine, normalizeProps } from "@zag-js/vue";
import { Slot } from "@/components/ui/slot";
import { Badge } from "@/components/ui/badge";
import DatePickerPresetTrigger from "./DatePickerPresetTrigger.vue";
const PRESET_LABELS: Record<string, string> = {
  today: "Today",
  yesterday: "Yesterday",
  thisWeek: "This Week",
  lastWeek: "Last Week",
  thisMonth: "This Month",
  lastMonth: "Last Month",
  thisYear: "This Year",
  lastYear: "Last Year",
};

const {
  class: className,
  asChild = false,
  open = undefined,
  label = undefined,
  withPresets = undefined,
  withTrigger = false,
  numOfMonths = undefined,
  selectionMode = "single",
  ...props
} = defineProps<
  Partial<Props> & {
    class?: string;
    asChild?: boolean;
    label?: string;
    withPresets?: string;
    withTrigger?: boolean;
  }
>();

const inline = open === true;

const presets = withPresets
  ? withPresets.split("|").map((v) => {
      const key = v.trim();
      return { value: key, label: PRESET_LABELS[key] ?? key };
    })
  : [];

const service = useMachine(datepicker.machine, {
  ...props,
  ...(numOfMonths !== undefined ? { numOfMonths } : {}),
  inline,
  selectionMode,
  open: inline ? true : open,
  id: crypto.randomUUID(),
});

const api = computed(() => datepicker.connect(service, normalizeProps));

const hasManualContent = ref(false);

provide("datepickerApi", api);
provide("datepickerNumOfMonths", numOfMonths ?? 1);
provide("datepickerInline", inline);
provide("datepickerSelectionMode", selectionMode);
provide("datepickerWithTrigger", withTrigger);
provide("registerDatePickerContent", () => {
  hasManualContent.value = true;
});
</script>

<template>
  <Slot
    :class="cn(datePickerRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <DatePickerLabel v-if="label">{{ label }}</DatePickerLabel>
      <DatePickerControl />
      <div v-if="presets.length" :class="datePickerPresets">
        <DatePickerPresetTrigger
          v-for="preset in presets"
          :key="preset.value"
          :value="(preset.value as any)"
          as-child
        >
          <Badge variant="secondary" look="outline">
            {{ preset.label }}
          </Badge>
        </DatePickerPresetTrigger>
      </div>
      <slot />
      <template v-if="!hasManualContent">
        <template v-if="inline">
          <DatePickerContent :is-manual="false" />
        </template>
        <template v-else>
          <DatePickerPositioner :is-manual="false">
            <DatePickerContent :is-manual="false" />
          </DatePickerPositioner>
        </template>
      </template>
    </div>
  </Slot>
</template>
```

### DatePickerTable.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTable } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <Slot
    :class="cn(datePickerTable, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getTableProps() }"
  >
    <slot v-if="asChild" />
    <table v-else>
      <slot />
    </table>
  </Slot>
</template>
```

### DatePickerTableBody.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTableBody } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <Slot
    :class="cn(datePickerTableBody, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getTableHeadProps() }"
  >
    <slot v-if="asChild" />
    <tbody v-else>
      <slot />
    </tbody>
  </Slot>
</template>
```

### DatePickerTableCell.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTableCell } from "@midoneui/core/styles/datepicker.styles";
import type {
  Api,
  ViewProps,
  DayTableCellProps,
  TableCellProps,
} from "@zag-js/date-picker";
import { provide, inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  (DayTableCellProps | TableCellProps) & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("datepickerApi");
const viewContext = inject<ViewProps>("datepickerView");

provide("datepickerCell", props);
</script>

<template>
  <Slot
    :class="cn(datePickerTableCell, className)"
    v-bind="{ ...props, ...$attrs, ...(viewContext?.view === 'day'
          ? api?.getDayTableCellProps(props as DayTableCellProps)
          : viewContext?.view === 'month'
          ? api?.getMonthTableCellProps(props as TableCellProps)
          : viewContext?.view === 'year'
          ? api?.getYearTableCellProps(props as TableCellProps)
          : undefined) }"
  >
    <slot v-if="asChild" />
    <td v-else>
      <slot />
    </td>
  </Slot>
</template>
```

### DatePickerTableCellTrigger.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTableCellTrigger } from "@midoneui/core/styles/datepicker.styles";
import type {
  Api,
  ViewProps,
  DayTableCellProps,
  TableCellProps,
} from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
const viewContext = inject<ViewProps>("datepickerView");
const cellContext = inject<DayTableCellProps | TableCellProps>(
  "datepickerCell"
);
</script>

<template>
  <Slot
    :class="cn(datePickerTableCellTrigger, className)"
    v-bind="{ ...props, ...$attrs, ...(viewContext?.view === 'day'
        ? api?.getDayTableCellTriggerProps(cellContext as DayTableCellProps)
        : viewContext?.view === 'month'
        ? api?.getMonthTableCellTriggerProps(cellContext as TableCellProps)
        : viewContext?.view === 'year'
        ? api?.getYearTableCellTriggerProps(cellContext as TableCellProps)
        : undefined) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### DatePickerTableHead.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTableHead } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <Slot
    :class="cn(datePickerTableHead, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getTableHeadProps() }"
  >
    <slot v-if="asChild" />
    <thead v-else>
      <slot />
    </thead>
  </Slot>
</template>
```

### DatePickerTableHeader.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTableHeader } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <Slot
    :class="cn(datePickerTableHeader, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getTableHeaderProps() }"
  >
    <slot v-if="asChild" />
    <th v-else>
      <slot />
    </th>
  </Slot>
</template>
```

### DatePickerTableRow.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTableRow } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <Slot
    :class="cn(datePickerTableRow, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getTableRowProps() }"
  >
    <slot v-if="asChild" />
    <tr v-else>
      <slot />
    </tr>
  </Slot>
</template>
```

### DatePickerTrigger.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTrigger } from "@midoneui/core/styles/datepicker.styles";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-vue-next";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getTriggerProps() }">
    <Button
      variant="ghost"
      v-if="!asChild"
      :class="cn(datePickerTrigger, className)"
    >
      <Calendar v-if="!$slots.default" />
      <slot v-else />
    </Button>
    <slot v-else />
  </Slot>
</template>
```

### DatePickerView.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerView } from "@midoneui/core/styles/datepicker.styles";
import type { Api, ViewProps } from "@zag-js/date-picker";
import { provide, inject, type ComputedRef } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  ViewProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<ComputedRef<Api>>("datepickerApi");

provide("datepickerView", props);
</script>

<template>
  <Slot
    :class="cn(datePickerView, className)"
    v-bind="{ ...props, ...$attrs, ...(api as any)?.getViewProps(props) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### DatePickerViewControl.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerViewControl } from "@midoneui/core/styles/datepicker.styles";
import type { Api, ViewProps } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  ViewProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <Slot
    :class="cn(datePickerViewControl, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getViewControlProps(props) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### DatePickerViewTrigger.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerViewTrigger } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <Slot
    :class="cn(datePickerViewTrigger, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getViewTriggerProps(props) }"
  >
    <button v-if="!asChild" :class="cn(datePickerViewTrigger, className)">
      <slot />
    </button>
    <slot v-else />
  </Slot>
</template>
```

### DatePickerYearSelect.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { datePickerYearSelect } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <NativeSelect
    :class="cn(datePickerYearSelect, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getYearSelectProps() }"
  >
    <NativeSelectOption
      v-for="(year, i) in api?.getYears()"
      :key="i"
      :value="year.value"
    >
      {{ year.label }}
    </NativeSelectOption>
  </NativeSelect>
</template>
```

## Usage

```vue
import { DatePickerRoot } from "@/components/ui/datepicker";
```

```vue
<DatePickerRoot label="Basic" class="w-84" />
```

## Examples

### Example 1

```vue
<DatePickerRoot
  label="Range Selection"
  selection-mode="range"
  class="w-140"
  with-presets="thisWeek|lastWeek|thisMonth"
/>
```

### Example 2

```vue
<DatePickerRoot label="Multiple Months" :num-of-months="2" class="w-84" />
```

### Example 3

```vue
<DatePickerRoot with-trigger label="With Trigger" class="w-84" />
```

### Example 4

```vue
<DatePickerRoot open label="Inline" class="w-84" />
```

