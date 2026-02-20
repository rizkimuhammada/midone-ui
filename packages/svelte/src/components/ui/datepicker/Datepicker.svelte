<script lang="ts">
  import * as datePicker from "@zag-js/date-picker";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { cn } from "@midoneui/core/utils/cn";
  import {
    datePickerRoot,
    datePickerControl,
    datePickerInput,
    datePickerTrigger,
    datePickerPositioner,
    datePickerContent,
    datePickerViewControl,
    datePickerPrevTrigger,
    datePickerViewTrigger,
    datePickerNextTrigger,
    datePickerTable,
    datePickerTableHeader,
    datePickerTableRow,
    datePickerTableHead,
    datePickerTableBody,
    datePickerTableCell,
    datePickerTableCellTrigger,
  } from "@midoneui/core/styles/datepicker.styles";
  import { Box } from "@/components/ui/box";
  import { Calendar, ChevronLeft, ChevronRight } from "lucide-svelte";
  import { input } from "@midoneui/core/styles/input.styles";

  let {
    class: className,
    ...props
  }: { class?: string } & Record<string, any> = $props();

  const service = useMachine(datePicker.machine, () => ({
    ...props,
    id: crypto.randomUUID(),
    locale: "en",
  }));

  const api = $derived(datePicker.connect(service, normalizeProps));
</script>

<div class={cn(datePickerRoot, className)} {...api.getRootProps()}>
  <div class={cn(datePickerControl)} {...api.getControlProps()}>
    <input class={cn(input, datePickerInput)} {...api.getInputProps()} />
    <button class={cn(datePickerTrigger)} {...api.getTriggerProps()}>
      <Calendar class="size-4" />
    </button>
  </div>
  <div class={cn(datePickerPositioner)} {...api.getPositionerProps()}>
    <div {...api.getContentProps()}>
      <Box raised="double" class={cn(datePickerContent)}>
        <div>
          {#if api.view === "day"}
            <div class={cn(datePickerViewControl)}>
              <button class={cn(datePickerPrevTrigger)} {...api.getPrevTriggerProps()}>
                <ChevronLeft class="size-4" />
              </button>
              <button class={cn(datePickerViewTrigger)} {...api.getViewTriggerProps()}>
                {api.visibleRangeText.start}
              </button>
              <button class={cn(datePickerNextTrigger)} {...api.getNextTriggerProps()}>
                <ChevronRight class="size-4" />
              </button>
            </div>
            <table class={cn(datePickerTable)} {...api.getTableProps({ view: "day" })}>
              <thead class={cn(datePickerTableHeader)} {...api.getTableHeaderProps({ view: "day" })}>
                <tr class={cn(datePickerTableRow)}>
                  {#each api.weekDays as day}
                    <th class={cn(datePickerTableHead)}>{day.narrow}</th>
                  {/each}
                </tr>
              </thead>
              <tbody class={cn(datePickerTableBody)} {...api.getTableBodyProps({ view: "day" })}>
                {#each api.weeks as week}
                  <tr class={cn(datePickerTableRow)}>
                    {#each week as value}
                      <td class={cn(datePickerTableCell)} {...api.getDayTableCellProps({ value })}>
                        <div class={cn(datePickerTableCellTrigger)} {...api.getDayTableCellTriggerProps({ value })}>
                          {value.day}
                        </div>
                      </td>
                    {/each}
                  </tr>
                {/each}
              </tbody>
            </table>
          {:else if api.view === "month"}
            <div class={cn(datePickerViewControl)}>
              <button class={cn(datePickerPrevTrigger)} {...api.getPrevTriggerProps()}>
                <ChevronLeft class="size-4" />
              </button>
              <button class={cn(datePickerViewTrigger)} {...api.getViewTriggerProps()}>
                {api.visibleRange.start.year}
              </button>
              <button class={cn(datePickerNextTrigger)} {...api.getNextTriggerProps()}>
                <ChevronRight class="size-4" />
              </button>
            </div>
            <table class={cn(datePickerTable)} {...api.getTableProps({ view: "month", columns: 4 })}>
              <tbody class={cn(datePickerTableBody)} {...api.getTableBodyProps({ view: "month" })}>
                {#each api.getMonthsGrid({ columns: 4, format: "short" }) as months}
                  <tr class={cn(datePickerTableRow)}>
                    {#each months as month}
                      <td class={cn(datePickerTableCell)} {...api.getMonthTableCellProps({ ...month, columns: 4 })}>
                        <div class={cn(datePickerTableCellTrigger)} {...api.getMonthTableCellTriggerProps({ ...month, columns: 4 })}>
                          {month.label}
                        </div>
                      </td>
                    {/each}
                  </tr>
                {/each}
              </tbody>
            </table>
          {:else}
            <div class={cn(datePickerViewControl)}>
              <button class={cn(datePickerPrevTrigger)} {...api.getPrevTriggerProps()}>
                <ChevronLeft class="size-4" />
              </button>
              <button class={cn(datePickerViewTrigger)} {...api.getViewTriggerProps()}>
                {api.getDecade().start} - {api.getDecade().end}
              </button>
              <button class={cn(datePickerNextTrigger)} {...api.getNextTriggerProps()}>
                <ChevronRight class="size-4" />
              </button>
            </div>
            <table class={cn(datePickerTable)} {...api.getTableProps({ view: "year", columns: 4 })}>
              <tbody class={cn(datePickerTableBody)} {...api.getTableBodyProps({ view: "year" })}>
                {#each api.getYearsGrid({ columns: 4 }) as years}
                  <tr class={cn(datePickerTableRow)}>
                    {#each years as year}
                      <td class={cn(datePickerTableCell)} {...api.getYearTableCellProps({ ...year, columns: 4 })}>
                        <div class={cn(datePickerTableCellTrigger)} {...api.getYearTableCellTriggerProps({ ...year, columns: 4 })}>
                          {year.label}
                        </div>
                      </td>
                    {/each}
                  </tr>
                {/each}
              </tbody>
            </table>
          {/if}
        </div>
      </Box>
    </div>
  </div>
</div>
