import {
  DatePickerRoot,
  DatePickerLabel,
  DatePickerControl,
  DatePickerInput,
  DatePickerTrigger,
  DatePickerClearTrigger,
  DatePickerPositioner,
  DatePickerContent,
  DatePickerYearSelect,
  DatePickerMonthSelect,
  DatePickerView,
  DatePickerContext,
  DatePickerViewControl,
  DatePickerPresetTrigger,
  DatePickerPrevTrigger,
  DatePickerViewTrigger,
  DatePickerNextTrigger,
  DatePickerRangeText,
  DatePickerTable,
  DatePickerTableHead,
  DatePickerTableRow,
  DatePickerTableHeader,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
} from "@/components/ui/datepicker";
import { Badge } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";

function Main() {
  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <DatePickerRoot className="w-84">
                  <DatePickerLabel>Basic</DatePickerLabel>
                  <DatePickerControl>
                    <DatePickerInput />
                    <DatePickerTrigger />
                    <DatePickerClearTrigger>Clear</DatePickerClearTrigger>
                  </DatePickerControl>
                  <DatePickerPositioner>
                    <DatePickerContent>
                      <DatePickerYearSelect />
                      <DatePickerMonthSelect />
                      <DatePickerView view="day">
                        <DatePickerContext>
                          {(datePicker) => (
                            <>
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
                                    {datePicker.weekDays.map((weekDay, id) => (
                                      <DatePickerTableHeader key={id}>
                                        {weekDay.short}
                                      </DatePickerTableHeader>
                                    ))}
                                  </DatePickerTableRow>
                                </DatePickerTableHead>
                                <DatePickerTableBody>
                                  {datePicker.weeks.map((week, id) => (
                                    <DatePickerTableRow key={id}>
                                      {week.map((day, id) => (
                                        <DatePickerTableCell
                                          key={id}
                                          value={day}
                                        >
                                          <DatePickerTableCellTrigger>
                                            {day.day}
                                          </DatePickerTableCellTrigger>
                                        </DatePickerTableCell>
                                      ))}
                                    </DatePickerTableRow>
                                  ))}
                                </DatePickerTableBody>
                              </DatePickerTable>
                            </>
                          )}
                        </DatePickerContext>
                      </DatePickerView>
                      <DatePickerView view="month">
                        <DatePickerContext>
                          {(datePicker) => (
                            <>
                              <DatePickerViewControl>
                                <DatePickerPrevTrigger />
                                <DatePickerViewTrigger>
                                  <DatePickerRangeText />
                                </DatePickerViewTrigger>
                                <DatePickerNextTrigger />
                              </DatePickerViewControl>
                              <DatePickerTable>
                                <DatePickerTableBody>
                                  {datePicker
                                    .getMonthsGrid({
                                      columns: 4,
                                      format: "short",
                                    })
                                    .map((months, id) => (
                                      <DatePickerTableRow key={id}>
                                        {months.map((month, id) => (
                                          <DatePickerTableCell
                                            key={id}
                                            value={month.value}
                                          >
                                            <DatePickerTableCellTrigger>
                                              {month.label}
                                            </DatePickerTableCellTrigger>
                                          </DatePickerTableCell>
                                        ))}
                                      </DatePickerTableRow>
                                    ))}
                                </DatePickerTableBody>
                              </DatePickerTable>
                            </>
                          )}
                        </DatePickerContext>
                      </DatePickerView>
                      <DatePickerView view="year">
                        <DatePickerContext>
                          {(datePicker) => (
                            <>
                              <DatePickerViewControl>
                                <DatePickerPrevTrigger />
                                <DatePickerViewTrigger>
                                  <DatePickerRangeText />
                                </DatePickerViewTrigger>
                                <DatePickerNextTrigger />
                              </DatePickerViewControl>
                              <DatePickerTable>
                                <DatePickerTableBody>
                                  {datePicker
                                    .getYearsGrid({ columns: 4 })
                                    .map((years, id) => (
                                      <DatePickerTableRow key={id}>
                                        {years.map((year, id) => (
                                          <DatePickerTableCell
                                            key={id}
                                            value={year.value}
                                          >
                                            <DatePickerTableCellTrigger>
                                              {year.label}
                                            </DatePickerTableCellTrigger>
                                          </DatePickerTableCell>
                                        ))}
                                      </DatePickerTableRow>
                                    ))}
                                </DatePickerTableBody>
                              </DatePickerTable>
                            </>
                          )}
                        </DatePickerContext>
                      </DatePickerView>
                    </DatePickerContent>
                  </DatePickerPositioner>
                </DatePickerRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<DatePickerRoot class="w-84">
  <DatePickerLabel>Basic</DatePickerLabel>
  <DatePickerControl>
    <DatePickerInput />
    <DatePickerTrigger />
    <DatePickerClearTrigger>Clear</DatePickerClearTrigger>
  </DatePickerControl>
  <Teleport to="body">
    <DatePickerPositioner>
      <DatePickerContent>
        <DatePickerYearSelect />
        <DatePickerMonthSelect />
        <DatePickerView view="day">
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
                  <DatePickerTableHeader
                    v-for="(weekDay, id) in datePicker?.weekDays"
                    :key="id"
                  >
                    {{ weekDay.short }}
                  </DatePickerTableHeader>
                </DatePickerTableRow>
              </DatePickerTableHead>
              <DatePickerTableBody>
                <DatePickerTableRow
                  v-for="(week, id) in datePicker?.weeks"
                  :key="id"
                >
                  <DatePickerTableCell
                    v-for="(day, id) in week"
                    :key="id"
                    :value="day"
                  >
                    <DatePickerTableCellTrigger>
                      {{ day.day }}
                    </DatePickerTableCellTrigger>
                  </DatePickerTableCell>
                </DatePickerTableRow>
              </DatePickerTableBody>
            </DatePickerTable>
          </DatePickerContext>
        </DatePickerView>
        <DatePickerView view="month">
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
                  v-for="(months, id) in datePicker?.getMonthsGrid({
                    columns: 4,
                    format: 'short',
                  })"
                  :key="id"
                >
                  <DatePickerTableCell
                    v-for="(month, id) in months"
                    :key="id"
                    :value="month.value"
                  >
                    <DatePickerTableCellTrigger>{{
                      month.label
                    }}</DatePickerTableCellTrigger>
                  </DatePickerTableCell>
                </DatePickerTableRow>
              </DatePickerTableBody>
            </DatePickerTable>
          </DatePickerContext>
        </DatePickerView>
        <DatePickerView view="year">
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
                  v-for="(years, id) in datePicker?.getYearsGrid({
                    columns: 4,
                  })"
                  :key="id"
                >
                  <DatePickerTableCell
                    v-for="(year, id) in years"
                    :key="id"
                    :value="year.value"
                  >
                    <DatePickerTableCellTrigger>{{
                      year.label
                    }}</DatePickerTableCellTrigger>
                  </DatePickerTableCell>
                </DatePickerTableRow>
              </DatePickerTableBody>
            </DatePickerTable>
          </DatePickerContext>
        </DatePickerView>
      </DatePickerContent>
    </DatePickerPositioner>
  </Teleport>
</DatePickerRoot>
                        `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/datepicker</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/datepicker/DatePickerRoot.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { datePickerRoot } from "@midoneui/core/styles/datepicker.styles";
import { provide, computed } from "vue";
import * as datepicker from "@zag-js/date-picker";
import type { Props } from "@zag-js/date-picker";
import { useMachine, normalizeProps } from "@zag-js/vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  open = undefined,
  ...props
} = defineProps<
  Partial<Props> & {
    class?: string;
    asChild?: boolean;
  }
>();

const service = useMachine(datepicker.machine, {
  ...props,
  open,
  id: crypto.randomUUID(),
});

const api = computed(() => datepicker.connect(service, normalizeProps));

provide("datepickerApi", api);
</script>

<template>
  <Slot
    :class="cn(datePickerRoot, className)"
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
        <PreviewCode title="components/ui/datepicker/DatePickerLabel.vue">
          {`
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
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerControl.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerControl } from "@midoneui/core/styles/datepicker.styles";
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
    :class="cn(datePickerControl, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getControlProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerInput.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerInput } from "@midoneui/core/styles/datepicker.styles";
import { Input } from "@/components/ui/input";
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
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getInputProps() }">
    <slot v-if="asChild" />
    <Input v-else :class="cn(datePickerInput, className)" />
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerTrigger.vue">
          {`
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
    <Button v-if="!asChild" :class="cn(datePickerTrigger, className)">
      <Calendar v-if="!$slots.default" />
      <slot v-else />
    </Button>
    <slot v-else />
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerClearTrigger.vue">
          {`
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
    <Button v-if="!asChild" :class="cn(datePickerClearTrigger, className)">
      <X v-if="!$slots.default" />
      <slot v-else />
    </Button>
    <slot v-else />
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerPositioner.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerPositioner } from "@midoneui/core/styles/datepicker.styles";
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
  <Teleport to="body">
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
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerContent.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { datePickerContent } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { Box } from "@/components/ui/box";
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

const api = inject<Api>("datepickerApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getContentProps() }">
    <slot v-if="asChild" />
    <Box v-else raised="single" :class="cn(datePickerContent, className)">
      <div><slot /></div>
    </Box>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerYearSelect.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";
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
  <select
    :class="cn(input, datePickerYearSelect, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getYearSelectProps() }"
  >
    <option v-for="(year, i) in api?.getYears()" :key="i" :value="year.value">
      {{ year.label }}
    </option>
  </select>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerMonthSelect.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";
import { datePickerMonthSelect } from "@midoneui/core/styles/datepicker.styles";
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
  <select
    :class="cn(input, datePickerMonthSelect, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getMonthSelectProps() }"
  >
    <option
      v-for="(month, i) in api?.getMonths()"
      :key="i"
      :value="month.value"
    >
      {{ month.label }}
    </option>
  </select>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerView.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerView } from "@midoneui/core/styles/datepicker.styles";
import type { Api, ViewProps } from "@zag-js/date-picker";
import { provide, inject } from "vue";

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

provide("datepickerView", props);
</script>

<template>
  <Slot
    :class="cn(datePickerView, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getViewProps(props) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerViewControl.vue">
          {`
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
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerPresetTrigger.vue">
          {`
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
    <Button v-if="!asChild" :class="cn(datePickerPresetTrigger, className)">
      <slot />
    </Button>
    <slot v-else />
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerPrevTrigger.vue">
          {`
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
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerViewTrigger.vue">
          {`
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
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerNextTrigger.vue">
          {`
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
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerRangeText.vue">
          {`
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
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerTable.vue">
          {`
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
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerTableHead.vue">
          {`
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
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerTableRow.vue">
          {`
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
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerTableHeader.vue">
          {`
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
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerTableBody.vue">
          {`
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
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerTableCell.vue">
          {`
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
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerTableCellTrigger.vue">
          {`
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
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/DatePickerContext.vue">
          {`
<script setup lang="ts">
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const api = inject<Api>("datepickerApi");
</script>

<template>
  <slot :datePicker="api"></slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/datepicker/index.ts">
          {`
export { default as DatePickerRoot } from "./DatePickerRoot.vue";
export { default as DatePickerLabel } from "./DatePickerLabel.vue";
export { default as DatePickerControl } from "./DatePickerControl.vue";
export { default as DatePickerInput } from "./DatePickerInput.vue";
export { default as DatePickerTrigger } from "./DatePickerTrigger.vue";
export { default as DatePickerClearTrigger } from "./DatePickerClearTrigger.vue";
export { default as DatePickerPositioner } from "./DatePickerPositioner.vue";
export { default as DatePickerContent } from "./DatePickerContent.vue";
export { default as DatePickerYearSelect } from "./DatePickerYearSelect.vue";
export { default as DatePickerMonthSelect } from "./DatePickerMonthSelect.vue";
export { default as DatePickerView } from "./DatePickerView.vue";
export { default as DatePickerViewControl } from "./DatePickerViewControl.vue";
export { default as DatePickerPresetTrigger } from "./DatePickerPresetTrigger.vue";
export { default as DatePickerPrevTrigger } from "./DatePickerPrevTrigger.vue";
export { default as DatePickerViewTrigger } from "./DatePickerViewTrigger.vue";
export { default as DatePickerNextTrigger } from "./DatePickerNextTrigger.vue";
export { default as DatePickerRangeText } from "./DatePickerRangeText.vue";
export { default as DatePickerTable } from "./DatePickerTable.vue";
export { default as DatePickerTableHead } from "./DatePickerTableHead.vue";
export { default as DatePickerTableRow } from "./DatePickerTableRow.vue";
export { default as DatePickerTableHeader } from "./DatePickerTableHeader.vue";
export { default as DatePickerTableBody } from "./DatePickerTableBody.vue";
export { default as DatePickerTableCell } from "./DatePickerTableCell.vue";
export { default as DatePickerTableCellTrigger } from "./DatePickerTableCellTrigger.vue";
export { default as DatePickerContext } from "./DatePickerContext.vue";
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
  DatePickerRoot,
  DatePickerLabel,
  DatePickerControl,
  DatePickerInput,
  DatePickerTrigger,
  DatePickerClearTrigger,
  DatePickerPositioner,
  DatePickerContent,
  DatePickerYearSelect,
  DatePickerMonthSelect,
  DatePickerView,
  DatePickerContext,
  DatePickerViewControl,
  DatePickerPresetTrigger,
  DatePickerPrevTrigger,
  DatePickerViewTrigger,
  DatePickerNextTrigger,
  DatePickerRangeText,
  DatePickerTable,
  DatePickerTableHead,
  DatePickerTableRow,
  DatePickerTableHeader,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
} from "@/components/ui/datepicker";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<DatePickerRoot class="w-84">
  <DatePickerLabel>Basic</DatePickerLabel>
  <DatePickerControl>
    <DatePickerInput />
    <DatePickerTrigger />
    <DatePickerClearTrigger>Clear</DatePickerClearTrigger>
  </DatePickerControl>
  <Teleport to="body">
    <DatePickerPositioner>
      <DatePickerContent>
        <DatePickerYearSelect />
        <DatePickerMonthSelect />
        <DatePickerView view="day">
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
                  <DatePickerTableHeader
                    v-for="(weekDay, id) in datePicker?.weekDays"
                    :key="id"
                  >
                    {{ weekDay.short }}
                  </DatePickerTableHeader>
                </DatePickerTableRow>
              </DatePickerTableHead>
              <DatePickerTableBody>
                <DatePickerTableRow
                  v-for="(week, id) in datePicker?.weeks"
                  :key="id"
                >
                  <DatePickerTableCell
                    v-for="(day, id) in week"
                    :key="id"
                    :value="day"
                  >
                    <DatePickerTableCellTrigger>
                      {{ day.day }}
                    </DatePickerTableCellTrigger>
                  </DatePickerTableCell>
                </DatePickerTableRow>
              </DatePickerTableBody>
            </DatePickerTable>
          </DatePickerContext>
        </DatePickerView>
        <DatePickerView view="month">
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
                  v-for="(months, id) in datePicker?.getMonthsGrid({
                    columns: 4,
                    format: 'short',
                  })"
                  :key="id"
                >
                  <DatePickerTableCell
                    v-for="(month, id) in months"
                    :key="id"
                    :value="month.value"
                  >
                    <DatePickerTableCellTrigger>{{
                      month.label
                    }}</DatePickerTableCellTrigger>
                  </DatePickerTableCell>
                </DatePickerTableRow>
              </DatePickerTableBody>
            </DatePickerTable>
          </DatePickerContext>
        </DatePickerView>
        <DatePickerView view="year">
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
                  v-for="(years, id) in datePicker?.getYearsGrid({
                    columns: 4,
                  })"
                  :key="id"
                >
                  <DatePickerTableCell
                    v-for="(year, id) in years"
                    :key="id"
                    :value="year.value"
                  >
                    <DatePickerTableCellTrigger>{{
                      year.label
                    }}</DatePickerTableCellTrigger>
                  </DatePickerTableCell>
                </DatePickerTableRow>
              </DatePickerTableBody>
            </DatePickerTable>
          </DatePickerContext>
        </DatePickerView>
      </DatePickerContent>
    </DatePickerPositioner>
  </Teleport>
</DatePickerRoot>
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
                <DatePickerRoot selectionMode="range" className="w-140">
                  <DatePickerLabel>Range Selection</DatePickerLabel>
                  <DatePickerControl>
                    <DatePickerInput index={0} />
                    <DatePickerInput index={1} />
                    <DatePickerTrigger />
                    <DatePickerClearTrigger>Clear</DatePickerClearTrigger>
                  </DatePickerControl>
                  <div className="flex gap-1">
                    <DatePickerPresetTrigger value="thisWeek" asChild>
                      <Badge>This Week</Badge>
                    </DatePickerPresetTrigger>
                    <DatePickerPresetTrigger value="lastWeek" asChild>
                      <Badge>Last Week</Badge>
                    </DatePickerPresetTrigger>
                    <DatePickerPresetTrigger value="thisMonth" asChild>
                      <Badge>This Month</Badge>
                    </DatePickerPresetTrigger>
                  </div>
                  <DatePickerPositioner>
                    <DatePickerContent>
                      <DatePickerYearSelect />
                      <DatePickerMonthSelect />
                      <DatePickerView view="day">
                        <DatePickerContext>
                          {(datePicker) => (
                            <>
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
                                    {datePicker.weekDays.map((weekDay, id) => (
                                      <DatePickerTableHeader key={id}>
                                        {weekDay.short}
                                      </DatePickerTableHeader>
                                    ))}
                                  </DatePickerTableRow>
                                </DatePickerTableHead>
                                <DatePickerTableBody>
                                  {datePicker.weeks.map((week, id) => (
                                    <DatePickerTableRow key={id}>
                                      {week.map((day, id) => (
                                        <DatePickerTableCell
                                          key={id}
                                          value={day}
                                        >
                                          <DatePickerTableCellTrigger>
                                            {day.day}
                                          </DatePickerTableCellTrigger>
                                        </DatePickerTableCell>
                                      ))}
                                    </DatePickerTableRow>
                                  ))}
                                </DatePickerTableBody>
                              </DatePickerTable>
                            </>
                          )}
                        </DatePickerContext>
                      </DatePickerView>
                      <DatePickerView view="month">
                        <DatePickerContext>
                          {(datePicker) => (
                            <>
                              <DatePickerViewControl>
                                <DatePickerPrevTrigger />
                                <DatePickerViewTrigger>
                                  <DatePickerRangeText />
                                </DatePickerViewTrigger>
                                <DatePickerNextTrigger />
                              </DatePickerViewControl>
                              <DatePickerTable>
                                <DatePickerTableBody>
                                  {datePicker
                                    .getMonthsGrid({
                                      columns: 4,
                                      format: "short",
                                    })
                                    .map((months, id) => (
                                      <DatePickerTableRow key={id}>
                                        {months.map((month, id) => (
                                          <DatePickerTableCell
                                            key={id}
                                            value={month.value}
                                          >
                                            <DatePickerTableCellTrigger>
                                              {month.label}
                                            </DatePickerTableCellTrigger>
                                          </DatePickerTableCell>
                                        ))}
                                      </DatePickerTableRow>
                                    ))}
                                </DatePickerTableBody>
                              </DatePickerTable>
                            </>
                          )}
                        </DatePickerContext>
                      </DatePickerView>
                      <DatePickerView view="year">
                        <DatePickerContext>
                          {(datePicker) => (
                            <>
                              <DatePickerViewControl>
                                <DatePickerPrevTrigger />
                                <DatePickerViewTrigger>
                                  <DatePickerRangeText />
                                </DatePickerViewTrigger>
                                <DatePickerNextTrigger />
                              </DatePickerViewControl>
                              <DatePickerTable>
                                <DatePickerTableBody>
                                  {datePicker
                                    .getYearsGrid({ columns: 4 })
                                    .map((years, id) => (
                                      <DatePickerTableRow key={id}>
                                        {years.map((year, id) => (
                                          <DatePickerTableCell
                                            key={id}
                                            value={year.value}
                                          >
                                            <DatePickerTableCellTrigger>
                                              {year.label}
                                            </DatePickerTableCellTrigger>
                                          </DatePickerTableCell>
                                        ))}
                                      </DatePickerTableRow>
                                    ))}
                                </DatePickerTableBody>
                              </DatePickerTable>
                            </>
                          )}
                        </DatePickerContext>
                      </DatePickerView>
                    </DatePickerContent>
                  </DatePickerPositioner>
                </DatePickerRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<DatePickerRoot selection-mode="range" class="w-140">
  <DatePickerLabel>Range Selection</DatePickerLabel>
  <DatePickerControl>
    <DatePickerInput :index="0" />
    <DatePickerInput :index="1" />
    <DatePickerTrigger />
    <DatePickerClearTrigger>Clear</DatePickerClearTrigger>
  </DatePickerControl>
  <div class="flex gap-1">
    <DatePickerPresetTrigger value="thisWeek" as-child>
      <Badge>This Week</Badge>
    </DatePickerPresetTrigger>
    <DatePickerPresetTrigger value="lastWeek" as-child>
      <Badge>Last Week</Badge>
    </DatePickerPresetTrigger>
    <DatePickerPresetTrigger value="thisMonth" as-child>
      <Badge>This Month</Badge>
    </DatePickerPresetTrigger>
  </div>
  <DatePickerPositioner>
    <DatePickerContent>
      <DatePickerYearSelect />
      <DatePickerMonthSelect />
      <DatePickerView view="day">
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
                <DatePickerTableHeader
                  v-for="(weekDay, id) in datePicker?.weekDays"
                  :key="id"
                >
                  {{ weekDay.short }}
                </DatePickerTableHeader>
              </DatePickerTableRow>
            </DatePickerTableHead>
            <DatePickerTableBody>
              <DatePickerTableRow
                v-for="(week, id) in datePicker?.weeks"
                :key="id"
              >
                <DatePickerTableCell
                  v-for="(day, id) in week"
                  :key="id"
                  :value="day"
                >
                  <DatePickerTableCellTrigger>
                    {{ day.day }}
                  </DatePickerTableCellTrigger>
                </DatePickerTableCell>
              </DatePickerTableRow>
            </DatePickerTableBody>
          </DatePickerTable>
        </DatePickerContext>
      </DatePickerView>
      <DatePickerView view="month">
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
                v-for="(months, id) in datePicker?.getMonthsGrid({
                  columns: 4,
                  format: 'short',
                })"
                :key="id"
              >
                <DatePickerTableCell
                  v-for="(month, id) in months"
                  :key="id"
                  :value="month.value"
                >
                  <DatePickerTableCellTrigger>{{
                    month.label
                  }}</DatePickerTableCellTrigger>
                </DatePickerTableCell>
              </DatePickerTableRow>
            </DatePickerTableBody>
          </DatePickerTable>
        </DatePickerContext>
      </DatePickerView>
      <DatePickerView view="year">
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
                v-for="(years, id) in datePicker?.getYearsGrid({
                  columns: 4,
                })"
                :key="id"
              >
                <DatePickerTableCell
                  v-for="(year, id) in years"
                  :key="id"
                  :value="year.value"
                >
                  <DatePickerTableCellTrigger>{{
                    year.label
                  }}</DatePickerTableCellTrigger>
                </DatePickerTableCell>
              </DatePickerTableRow>
            </DatePickerTableBody>
          </DatePickerTable>
        </DatePickerContext>
      </DatePickerView>
    </DatePickerContent>
  </DatePickerPositioner>
</DatePickerRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <DatePickerRoot numOfMonths={2} className="w-84">
                  <DatePickerLabel>Multiple Months</DatePickerLabel>
                  <DatePickerControl>
                    <DatePickerInput index={0} />
                    <DatePickerTrigger />
                    <DatePickerClearTrigger>Clear</DatePickerClearTrigger>
                  </DatePickerControl>
                  <DatePickerPositioner>
                    <DatePickerContent>
                      <DatePickerYearSelect />
                      <DatePickerMonthSelect />
                      <DatePickerViewControl>
                        <DatePickerPrevTrigger />
                        <DatePickerRangeText />
                        <DatePickerNextTrigger />
                      </DatePickerViewControl>
                      <DatePickerView view="day" className="flex-row">
                        {/* First month */}
                        <DatePickerContext>
                          {(datePicker) => (
                            <DatePickerTable>
                              <DatePickerTableHead>
                                <DatePickerTableRow>
                                  {datePicker.weekDays.map((weekDay, id) => (
                                    <DatePickerTableHeader key={id}>
                                      {weekDay.short}
                                    </DatePickerTableHeader>
                                  ))}
                                </DatePickerTableRow>
                              </DatePickerTableHead>
                              <DatePickerTableBody>
                                {datePicker.weeks.map((week, id) => (
                                  <DatePickerTableRow key={id}>
                                    {week.map((day, id) => (
                                      <DatePickerTableCell key={id} value={day}>
                                        <DatePickerTableCellTrigger>
                                          {day.day}
                                        </DatePickerTableCellTrigger>
                                      </DatePickerTableCell>
                                    ))}
                                  </DatePickerTableRow>
                                ))}
                              </DatePickerTableBody>
                            </DatePickerTable>
                          )}
                        </DatePickerContext>
                        {/* Second month */}
                        <DatePickerContext>
                          {(datePicker) => {
                            const offset = datePicker.getOffset({
                              months: 1,
                            });
                            return (
                              <DatePickerTable>
                                <DatePickerTableHead>
                                  <DatePickerTableRow>
                                    {datePicker.weekDays.map((weekDay, id) => (
                                      <DatePickerTableHeader key={id}>
                                        {weekDay.short}
                                      </DatePickerTableHeader>
                                    ))}
                                  </DatePickerTableRow>
                                </DatePickerTableHead>
                                <DatePickerTableBody>
                                  {offset.weeks.map((week, id) => (
                                    <DatePickerTableRow key={id}>
                                      {week.map((day, id) => (
                                        <DatePickerTableCell
                                          key={id}
                                          value={day}
                                          visibleRange={offset.visibleRange}
                                        >
                                          <DatePickerTableCellTrigger>
                                            {day.day}
                                          </DatePickerTableCellTrigger>
                                        </DatePickerTableCell>
                                      ))}
                                    </DatePickerTableRow>
                                  ))}
                                </DatePickerTableBody>
                              </DatePickerTable>
                            );
                          }}
                        </DatePickerContext>
                      </DatePickerView>
                    </DatePickerContent>
                  </DatePickerPositioner>
                </DatePickerRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<DatePickerRoot :num-of-months="2" class="w-84">
  <DatePickerLabel>Multiple Months</DatePickerLabel>
  <DatePickerControl>
    <DatePickerInput :index="0" />
    <DatePickerTrigger />
    <DatePickerClearTrigger>Clear</DatePickerClearTrigger>
  </DatePickerControl>
  <DatePickerPositioner>
    <DatePickerContent>
      <DatePickerYearSelect />
      <DatePickerMonthSelect />
      <DatePickerViewControl>
        <DatePickerPrevTrigger />
        <DatePickerRangeText />
        <DatePickerNextTrigger />
      </DatePickerViewControl>
      <DatePickerView view="day" class="flex-row">
        <DatePickerContext v-slot="{ datePicker }">
          <DatePickerTable>
            <DatePickerTableHead>
              <DatePickerTableRow>
                <DatePickerTableHeader
                  v-for="(weekDay, id) in datePicker?.weekDays"
                  :key="id"
                >
                  {{ weekDay.short }}
                </DatePickerTableHeader>
              </DatePickerTableRow>
            </DatePickerTableHead>
            <DatePickerTableBody>
              <DatePickerTableRow
                v-for="(week, id) in datePicker?.weeks"
                :key="id"
              >
                <DatePickerTableCell
                  v-for="(day, id) in week"
                  :key="id"
                  :value="day"
                >
                  <DatePickerTableCellTrigger>
                    {{ day.day }}
                  </DatePickerTableCellTrigger>
                </DatePickerTableCell>
              </DatePickerTableRow>
            </DatePickerTableBody>
          </DatePickerTable>
        </DatePickerContext>
        <DatePickerContext v-slot="{ datePicker }">
          <DatePickerTable>
            <DatePickerTableHead>
              <DatePickerTableRow>
                <DatePickerTableHeader
                  v-for="(weekDay, id) in datePicker?.weekDays"
                  :key="id"
                >
                  {{ weekDay.short }}
                </DatePickerTableHeader>
              </DatePickerTableRow>
            </DatePickerTableHead>
            <DatePickerTableBody>
              <DatePickerTableRow
                v-for="(week, id) in datePicker?.getOffset({
                  months: 1,
                }).weeks"
                :key="id"
              >
                <DatePickerTableCell
                  v-for="(day, id) in week"
                  :key="id"
                  :value="day"
                  :visible-range="
                    datePicker?.getOffset({ months: 1 }).visibleRange
                  "
                >
                  <DatePickerTableCellTrigger>
                    {{ day.day }}
                  </DatePickerTableCellTrigger>
                </DatePickerTableCell>
              </DatePickerTableRow>
            </DatePickerTableBody>
          </DatePickerTable>
        </DatePickerContext>
      </DatePickerView>
    </DatePickerContent>
  </DatePickerPositioner>
</DatePickerRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <DatePickerRoot open>
                  <DatePickerInput className="w-84 mx-auto" />
                  <Box raised="single" className="mx-auto">
                    <DatePickerView view="day">
                      <DatePickerContext>
                        {(datePicker) => (
                          <>
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
                                  {datePicker.weekDays.map((weekDay, id) => (
                                    <DatePickerTableHeader key={id}>
                                      {weekDay.short}
                                    </DatePickerTableHeader>
                                  ))}
                                </DatePickerTableRow>
                              </DatePickerTableHead>
                              <DatePickerTableBody>
                                {datePicker.weeks.map((week, id) => (
                                  <DatePickerTableRow key={id}>
                                    {week.map((day, id) => (
                                      <DatePickerTableCell key={id} value={day}>
                                        <DatePickerTableCellTrigger>
                                          {day.day}
                                        </DatePickerTableCellTrigger>
                                      </DatePickerTableCell>
                                    ))}
                                  </DatePickerTableRow>
                                ))}
                              </DatePickerTableBody>
                            </DatePickerTable>
                          </>
                        )}
                      </DatePickerContext>
                    </DatePickerView>
                    <DatePickerView view="month">
                      <DatePickerContext>
                        {(datePicker) => (
                          <>
                            <DatePickerViewControl>
                              <DatePickerPrevTrigger />
                              <DatePickerViewTrigger>
                                <DatePickerRangeText />
                              </DatePickerViewTrigger>
                              <DatePickerNextTrigger />
                            </DatePickerViewControl>
                            <DatePickerTable>
                              <DatePickerTableBody>
                                {datePicker
                                  .getMonthsGrid({
                                    columns: 4,
                                    format: "short",
                                  })
                                  .map((months, id) => (
                                    <DatePickerTableRow key={id}>
                                      {months.map((month, id) => (
                                        <DatePickerTableCell
                                          key={id}
                                          value={month.value}
                                        >
                                          <DatePickerTableCellTrigger>
                                            {month.label}
                                          </DatePickerTableCellTrigger>
                                        </DatePickerTableCell>
                                      ))}
                                    </DatePickerTableRow>
                                  ))}
                              </DatePickerTableBody>
                            </DatePickerTable>
                          </>
                        )}
                      </DatePickerContext>
                    </DatePickerView>
                    <DatePickerView view="year">
                      <DatePickerContext>
                        {(datePicker) => (
                          <>
                            <DatePickerViewControl>
                              <DatePickerPrevTrigger />
                              <DatePickerViewTrigger>
                                <DatePickerRangeText />
                              </DatePickerViewTrigger>
                              <DatePickerNextTrigger />
                            </DatePickerViewControl>
                            <DatePickerTable>
                              <DatePickerTableBody>
                                {datePicker
                                  .getYearsGrid({ columns: 4 })
                                  .map((years, id) => (
                                    <DatePickerTableRow key={id}>
                                      {years.map((year, id) => (
                                        <DatePickerTableCell
                                          key={id}
                                          value={year.value}
                                        >
                                          <DatePickerTableCellTrigger>
                                            {year.label}
                                          </DatePickerTableCellTrigger>
                                        </DatePickerTableCell>
                                      ))}
                                    </DatePickerTableRow>
                                  ))}
                              </DatePickerTableBody>
                            </DatePickerTable>
                          </>
                        )}
                      </DatePickerContext>
                    </DatePickerView>
                  </Box>
                </DatePickerRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<DatePickerRoot open>
  <DatePickerInput class="w-84 mx-auto" />
  <Box raised="single" class="mx-auto">
    <DatePickerView view="day">
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
              <DatePickerTableHeader
                v-for="(weekDay, id) in datePicker?.weekDays"
                :key="id"
              >
                {{ weekDay.short }}
              </DatePickerTableHeader>
            </DatePickerTableRow>
          </DatePickerTableHead>
          <DatePickerTableBody>
            <DatePickerTableRow
              v-for="(week, id) in datePicker?.weeks"
              :key="id"
            >
              <DatePickerTableCell
                v-for="(day, id) in week"
                :key="id"
                :value="day"
              >
                <DatePickerTableCellTrigger>
                  {{ day.day }}
                </DatePickerTableCellTrigger>
              </DatePickerTableCell>
            </DatePickerTableRow>
          </DatePickerTableBody>
        </DatePickerTable>
      </DatePickerContext>
    </DatePickerView>
    <DatePickerView view="month">
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
              v-for="(months, id) in datePicker?.getMonthsGrid({
                columns: 4,
                format: 'short',
              })"
              :key="id"
            >
              <DatePickerTableCell
                v-for="(month, id) in months"
                :key="id"
                :value="month.value"
              >
                <DatePickerTableCellTrigger>{{
                  month.label
                }}</DatePickerTableCellTrigger>
              </DatePickerTableCell>
            </DatePickerTableRow>
          </DatePickerTableBody>
        </DatePickerTable>
      </DatePickerContext>
    </DatePickerView>
    <DatePickerView view="year">
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
              v-for="(years, id) in datePicker?.getYearsGrid({
                columns: 4,
              })"
              :key="id"
            >
              <DatePickerTableCell
                v-for="(year, id) in years"
                :key="id"
                :value="year.value"
              >
                <DatePickerTableCellTrigger>{{
                  year.label
                }}</DatePickerTableCellTrigger>
              </DatePickerTableCell>
            </DatePickerTableRow>
          </DatePickerTableBody>
        </DatePickerTable>
      </DatePickerContext>
    </DatePickerView>
  </Box>
</DatePickerRoot>
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
