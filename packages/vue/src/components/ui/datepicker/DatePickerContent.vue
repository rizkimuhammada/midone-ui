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
