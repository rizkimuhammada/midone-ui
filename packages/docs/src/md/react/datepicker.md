# Datepicker

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
<DatePickerRoot label="Basic" className="w-84" />
```

## Dependency

```bash
npm install @zag-js/date-picker @zag-js/react lucide-react
```

## Component

```tsx
import { Input } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { cn } from "@midoneui/core/utils/cn";
import { createContext, useContext, useEffect, useId, useState } from "react";
import * as datepicker from "@zag-js/date-picker";
import type {
  Api,
  Props,
  PresetTriggerProps,
  DayTableCellProps,
  TableCellProps,
  ViewProps,
  InputProps,
} from "@zag-js/date-picker";
import { Slot } from "@/components/ui/slot";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import { Calendar, MoveLeft, MoveRight, X } from "lucide-react";
import {
  datePickerRoot,
  datePickerLabel,
  datePickerControl,
  datePickerInput,
  datePickerTrigger,
  datePickerClearTrigger,
  datePickerPositioner,
  datePickerContent,
  datePickerYearSelect,
  datePickerMonthSelect,
  datePickerView,
  datePickerViewControl,
  datePickerPresetTrigger,
  datePickerPrevTrigger,
  datePickerViewTrigger,
  datePickerNextTrigger,
  datePickerRangeText,
  datePickerTable,
  datePickerTableHead,
  datePickerTableRow,
  datePickerTableHeader,
  datePickerTableBody,
  datePickerTableCell,
  datePickerTableCellTrigger,
  datePickerPresets,
} from "@midoneui/core/styles/datepicker.styles";

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

const ApiContext = createContext<Api | null>(null);
const ViewContext = createContext<ViewProps | null>(null);
const InlineContext = createContext<boolean>(false);
const SelectionModeContext = createContext<string>("single");
const WithTriggerContext = createContext<boolean>(true);
const NumOfMonthsContext = createContext<number>(1);
const CellContext = createContext<DayTableCellProps | TableCellProps | null>(
  null
);
const RegistrationContext = createContext<((isManual: boolean) => void) | null>(
  null
);

export function DatePickerRoot({
  children,
  className,
  asChild = false,
  label,
  open: openProp,
  withPresets,
  withTrigger = false,
  numOfMonths = 1,
  selectionMode = "single",
  ...props
}: React.ComponentProps<"div"> &
  Partial<Props> & {
    asChild?: boolean;
    label?: string;
    withPresets?: string;
    withTrigger?: boolean;
  }) {
  const inline = openProp === true;

  const presets = withPresets
    ? withPresets.split("|").map((v) => {
        const key = v.trim();
        return { value: key, label: PRESET_LABELS[key] ?? key };
      })
    : [];

  const service = useMachine(datepicker.machine, {
    ...props,
    numOfMonths,
    selectionMode,
    inline,
    open: inline ? true : openProp,
    id: useId(),
  });
  const api = datepicker.connect(service, normalizeProps);
  const [hasManualContent, setHasManualContent] = useState(false);

  const registerContent = (isManual: boolean) => {
    if (isManual) {
      setHasManualContent(true);
    }
  };

  return (
    <ApiContext.Provider value={api}>
      <InlineContext.Provider value={inline}>
        <SelectionModeContext.Provider value={selectionMode}>
          <WithTriggerContext.Provider value={withTrigger}>
            <NumOfMonthsContext.Provider value={numOfMonths}>
              <RegistrationContext.Provider value={registerContent}>
                <Slot
                  className={cn(datePickerRoot, className)}
                  {...api.getRootProps()}
                  {...props}
                >
                  {asChild ? (
                    children
                  ) : (
                    <div>
                      {!children ? (
                        <>
                          {label && <DatePickerLabel>{label}</DatePickerLabel>}
                          <DatePickerControl />
                          {presets.length > 0 && (
                            <div className={cn(datePickerPresets)}>
                              {presets.map((preset) => (
                                <DatePickerPresetTrigger
                                  key={preset.value}
                                  value={preset.value as any}
                                  asChild
                                >
                                  <Badge variant="secondary" look="outline">
                                    {preset.label}
                                  </Badge>
                                </DatePickerPresetTrigger>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        children
                      )}
                      {!hasManualContent && (
                        <>
                          {inline ? (
                            <DatePickerContent isManual={false} />
                          ) : (
                            <DatePickerPositioner isManual={false}>
                              <DatePickerContent isManual={false} />
                            </DatePickerPositioner>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </Slot>
              </RegistrationContext.Provider>
            </NumOfMonthsContext.Provider>
          </WithTriggerContext.Provider>
        </SelectionModeContext.Provider>
      </InlineContext.Provider>
    </ApiContext.Provider>
  );
}

export function DatePickerContext({
  children,
}: {
  children: (api: Api) => React.ReactNode;
}) {
  const api = useContext(ApiContext);

  return children(api!);
}

export function DatePickerLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"label"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getLabelProps()} {...props}>
      {asChild ? (
        children
      ) : (
        <Label className={cn(datePickerLabel, className)}>{children}</Label>
      )}
    </Slot>
  );
}

export function DatePickerControl({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const inline = useContext(InlineContext);
  const selectionMode = useContext(SelectionModeContext);
  const withTrigger = useContext(WithTriggerContext);

  return (
    <Slot
      className={cn(datePickerControl, className)}
      {...api?.getControlProps()}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <div>
          {!children ? (
            <>
              {selectionMode === "range" ? (
                <>
                  <DatePickerInput index={0} />
                  <DatePickerInput index={1} />
                </>
              ) : (
                <DatePickerInput />
              )}
              {!inline && withTrigger && <DatePickerTrigger />}
              <DatePickerClearTrigger />
            </>
          ) : (
            children
          )}
        </div>
      )}
    </Slot>
  );
}

export function DatePickerInput({
  children,
  className,
  asChild = false,
  index,
  ...props
}: React.ComponentProps<"input"> & InputProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const inline = useContext(InlineContext);
  const withTrigger = useContext(WithTriggerContext);

  const handleClick = () => {
    if (!withTrigger && !inline && api) {
      api.setOpen(true);
    }
  };

  return (
    <Slot
      {...api?.getInputProps({ ...props, index })}
      {...props}
      onClick={handleClick}
    >
      {asChild ? (
        children
      ) : (
        <Input className={cn(datePickerInput, className)} />
      )}
    </Slot>
  );
}

export function DatePickerTrigger({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getTriggerProps()} {...props}>
      {!asChild ? (
        <Button variant="ghost" className={cn(datePickerTrigger, className)}>
          {!children ? <Calendar /> : children}
        </Button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function DatePickerClearTrigger({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getClearTriggerProps()} {...props}>
      {!asChild ? (
        <Button
          variant="ghost"
          className={cn(datePickerClearTrigger, className)}
        >
          {!children ? <X /> : children}
        </Button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function DatePickerPositioner({
  children,
  asChild,
  className,
  isManual = true,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
  isManual?: boolean;
}) {
  const api = useContext(ApiContext);
  const register = useContext(RegistrationContext);

  useEffect(() => {
    if (isManual && register) {
      register(true);
    }
  }, [isManual, register]);

  if (!api?.open) return null;

  return (
    <Portal>
      <Slot
        className={cn(datePickerPositioner, className)}
        {...api?.getPositionerProps()}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </Portal>
  );
}

export function DatePickerContent({
  children,
  asChild,
  className,
  isManual = true,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
  isManual?: boolean;
}) {
  const api = useContext(ApiContext);
  const register = useContext(RegistrationContext);
  const numOfMonths = useContext(NumOfMonthsContext);

  useEffect(() => {
    if (isManual && register) {
      register(true);
    }
  }, [isManual, register]);

  return (
    <Slot {...api?.getContentProps()} {...props}>
      {asChild ? (
        children
      ) : (
        <Box raised="single" className={cn(datePickerContent, className)}>
          <div>
            {!children ? (
              <>
                {numOfMonths > 1 ? (
                  <>
                    <DatePickerYearSelect />
                    <DatePickerMonthSelect />
                    <DatePickerViewControl>
                      <DatePickerPrevTrigger />
                      <DatePickerRangeText />
                      <DatePickerNextTrigger />
                    </DatePickerViewControl>
                    <DatePickerView view="day" className="flex-row">
                      <DatePickerContext>
                        {(api) => (
                          <DatePickerTable>
                            <DatePickerTableHead>
                              <DatePickerTableRow>
                                {api.weekDays.map((weekDay, id) => (
                                  <DatePickerTableHeader key={id}>
                                    {weekDay.short}
                                  </DatePickerTableHeader>
                                ))}
                              </DatePickerTableRow>
                            </DatePickerTableHead>
                            <DatePickerTableBody>
                              {api.weeks.map((week, id) => (
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
                      <DatePickerContext>
                        {(api) => (
                          <DatePickerTable>
                            <DatePickerTableHead>
                              <DatePickerTableRow>
                                {api.weekDays.map((weekDay, id) => (
                                  <DatePickerTableHeader key={id}>
                                    {weekDay.short}
                                  </DatePickerTableHeader>
                                ))}
                              </DatePickerTableRow>
                            </DatePickerTableHead>
                            <DatePickerTableBody>
                              {api
                                .getOffset({ months: 1 })
                                .weeks.map((week, id) => (
                                  <DatePickerTableRow key={id}>
                                    {week.map((day, id) => (
                                      <DatePickerTableCell
                                        key={id}
                                        value={day}
                                        visibleRange={
                                          api.getOffset({ months: 1 })
                                            .visibleRange
                                        }
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
                        )}
                      </DatePickerContext>
                    </DatePickerView>
                  </>
                ) : (
                  <>
                    <DatePickerYearSelect />
                    <DatePickerMonthSelect />
                    <DatePickerView view="day">
                      <DatePickerContext>
                        {(api) => (
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
                                  {api.weekDays.map((weekDay, id) => (
                                    <DatePickerTableHeader key={id}>
                                      {weekDay.short}
                                    </DatePickerTableHeader>
                                  ))}
                                </DatePickerTableRow>
                              </DatePickerTableHead>
                              <DatePickerTableBody>
                                {api.weeks.map((week, id) => (
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
                        {(api) => (
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
                                {api
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
                        {(api) => (
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
                                {api
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
                  </>
                )}
              </>
            ) : (
              children
            )}
          </div>
        </Box>
      )}
    </Slot>
  );
}

export function DatePickerYearSelect({
  children,
  className,
  ...props
}: React.ComponentProps<"select">) {
  const api = useContext(ApiContext);

  return (
    <NativeSelect
      className={cn(datePickerYearSelect, className)}
      {...api?.getYearSelectProps()}
      {...props}
    >
      {api?.getYears().map((year, i) => (
        <NativeSelectOption key={i} value={year.value}>
          {year.label}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  );
}

export function DatePickerMonthSelect({
  children,
  className,
  ...props
}: React.ComponentProps<"select">) {
  const api = useContext(ApiContext);

  return (
    <NativeSelect
      className={cn(datePickerMonthSelect, className)}
      {...api?.getMonthSelectProps()}
      {...props}
    >
      {api?.getMonths().map((month, i) => (
        <NativeSelectOption key={i} value={month.value}>
          {month.label}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  );
}

export function DatePickerView({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"div"> &
  ViewProps & {
    asChild?: boolean;
  }) {
  const api = useContext(ApiContext);

  return (
    <ViewContext.Provider value={props}>
      <Slot
        className={cn(datePickerView, className)}
        {...api?.getViewProps(props)}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ViewContext.Provider>
  );
}

export function DatePickerViewControl({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(datePickerViewControl, className)}
      {...api?.getViewControlProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function DatePickerPresetTrigger({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"button"> &
  PresetTriggerProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getPresetTriggerProps(props)} {...props}>
      {!asChild ? (
        <Button
          variant="ghost"
          className={cn(datePickerPresetTrigger, className)}
        >
          {children}
        </Button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function DatePickerPrevTrigger({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getPrevTriggerProps()} {...props}>
      {!asChild ? (
        <button className={cn(datePickerPrevTrigger, className)}>
          {!children ? <MoveLeft /> : children}
        </button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function DatePickerViewTrigger({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getViewTriggerProps()} {...props}>
      {!asChild ? (
        <button className={cn(datePickerViewTrigger, className)}>
          {children}
        </button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function DatePickerNextTrigger({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getNextTriggerProps()} {...props}>
      {!asChild ? (
        <button className={cn(datePickerNextTrigger, className)}>
          {!children ? <MoveRight /> : children}
        </button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function DatePickerRangeText({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  const api = useContext(ApiContext);

  return (
    <div
      className={cn(datePickerRangeText, className)}
      {...api?.getRangeTextProps()}
      {...props}
    >
      {api?.visibleRangeText.start}
    </div>
  );
}

export function DatePickerTable({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"table"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(datePickerTable, className)}
      {...api?.getTableProps()}
      {...props}
    >
      {asChild ? children : <table>{children}</table>}
    </Slot>
  );
}

export function DatePickerTableHead({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"thead"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(datePickerTableHead, className)}
      {...api?.getTableHeadProps()}
      {...props}
    >
      {asChild ? children : <thead>{children}</thead>}
    </Slot>
  );
}

export function DatePickerTableRow({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"tr"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(datePickerTableRow, className)}
      {...api?.getTableRowProps()}
      {...props}
    >
      {asChild ? children : <tr>{children}</tr>}
    </Slot>
  );
}

export function DatePickerTableHeader({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"th"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(datePickerTableHeader, className)}
      {...api?.getTableHeaderProps()}
      {...props}
    >
      {asChild ? children : <th>{children}</th>}
    </Slot>
  );
}

export function DatePickerTableBody({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"tbody"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(datePickerTableBody, className)}
      {...api?.getTableHeadProps()}
      {...props}
    >
      {asChild ? children : <tbody>{children}</tbody>}
    </Slot>
  );
}

export function DatePickerTableCell({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"td"> &
  (DayTableCellProps | TableCellProps) & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const viewContext = useContext(ViewContext);

  return (
    <CellContext.Provider value={props}>
      <Slot
        className={cn(datePickerTableCell, className)}
        {...(viewContext?.view === "day"
          ? api?.getDayTableCellProps(props as DayTableCellProps)
          : viewContext?.view === "month"
          ? api?.getMonthTableCellProps(props as TableCellProps)
          : viewContext?.view === "year"
          ? api?.getYearTableCellProps(props as TableCellProps)
          : undefined)}
        {...props}
      >
        {asChild ? children : <td>{children}</td>}
      </Slot>
    </CellContext.Provider>
  );
}

export function DatePickerTableCellTrigger({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"td"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const viewContext = useContext(ViewContext);
  const cellContext = useContext(CellContext);

  return (
    <Slot
      className={cn(datePickerTableCellTrigger, className)}
      {...(viewContext?.view === "day"
        ? api?.getDayTableCellTriggerProps(cellContext as DayTableCellProps)
        : viewContext?.view === "month"
        ? api?.getMonthTableCellTriggerProps(cellContext as TableCellProps)
        : viewContext?.view === "year"
        ? api?.getYearTableCellTriggerProps(cellContext as TableCellProps)
        : undefined)}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}
```

## Usage

```tsx
import { DatePickerRoot, DatePickerInput } from "@/components/ui/datepicker";
```

```tsx
<DatePickerRoot label="Basic" className="w-84" />
```

## Examples

### Example 1

```tsx
<DatePickerRoot
  label="Range Selection"
  selectionMode="range"
  className="w-140"
  withPresets="thisWeek|lastWeek|thisMonth"
/>
```

### Example 2

```tsx
<DatePickerRoot label="Multiple Months" numOfMonths={2} className="w-84" />
```

### Example 3

```tsx
<DatePickerRoot withTrigger label="With Trigger" className="w-84" />
```

### Example 4

```tsx
<DatePickerRoot open label="Inline" className="w-84" />
```

