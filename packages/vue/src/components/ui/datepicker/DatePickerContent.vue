<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { datePickerContent } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { Box } from "@/components/ui/box";
import { Slot } from "@/components/ui/slot";
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
import { inject, useSlots } from "vue";

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
const slots = useSlots();
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getContentProps() }">
    <slot v-if="asChild" />
    <Box v-else raised="single" :class="cn(datePickerContent, className)">
      <div v-if="!slots.default">
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
      </div>
      <div v-else><slot /></div>
    </Box>
  </Slot>
</template>
