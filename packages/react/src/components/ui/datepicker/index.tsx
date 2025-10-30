import { Input } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { input } from "@midoneui/core/styles/input.styles";
import { Label } from "@/components/ui/label";
import { cn } from "@midoneui/core/utils/cn";
import { createContext, useContext, useId } from "react";
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
} from "@midoneui/core/styles/datepicker.styles";

const ApiContext = createContext<Api | null>(null);
const ViewContext = createContext<ViewProps | null>(null);
const CellContext = createContext<DayTableCellProps | TableCellProps | null>(
  null
);

export function DatePickerRoot({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(datepicker.machine, {
    ...props,
    id: useId(),
  });
  const api = datepicker.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot
        className={cn(datePickerRoot, className)}
        {...api.getRootProps()}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
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

  return (
    <Slot
      className={cn(datePickerControl, className)}
      {...api?.getControlProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function DatePickerInput({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"input"> & InputProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getInputProps(props)} {...props}>
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
        <Button className={cn(datePickerTrigger, className)}>
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
        <Button className={cn(datePickerClearTrigger, className)}>
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
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

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
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getContentProps()} {...props}>
      {asChild ? (
        children
      ) : (
        <Box raised="single" className={cn(datePickerContent, className)}>
          <div>{children}</div>
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
    <select
      className={cn(input, datePickerYearSelect, className)}
      {...api?.getYearSelectProps()}
      {...props}
    >
      {api?.getYears().map((year, i) => (
        <option key={i} value={year.value}>
          {year.label}
        </option>
      ))}
    </select>
  );
}

export function DatePickerMonthSelect({
  children,
  className,
  ...props
}: React.ComponentProps<"select">) {
  const api = useContext(ApiContext);

  return (
    <select
      className={cn(input, datePickerMonthSelect, className)}
      {...api?.getMonthSelectProps()}
      {...props}
    >
      {api?.getMonths().map((month, i) => (
        <option key={i} value={month.value}>
          {month.label}
        </option>
      ))}
    </select>
  );
}

export function DatePickerView({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<"div"> & ViewProps & { asChild?: boolean }) {
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
        <Button className={cn(datePickerPresetTrigger, className)}>
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
      {...api?.getTableProps()}
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
      {...api?.getTableHeadProps()}
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
