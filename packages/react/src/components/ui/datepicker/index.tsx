import { DatePicker } from "@ark-ui/react/date-picker";
import { Input } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { input } from "@midoneui/core/styles/input.styles";
import { Label } from "@/components/ui/label";
import { cn } from "@midoneui/core/utils/cn";
import { Calendar, MoveLeft, MoveRight } from "lucide-react";
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

export function DatePickerRoot({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.Root>) {
  return (
    <DatePicker.Root className={cn(datePickerRoot, className)} {...props}>
      {children}
    </DatePicker.Root>
  );
}

export function DatePickerLabel({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.Label>) {
  return (
    <DatePicker.Label asChild {...props}>
      <Label className={cn(datePickerLabel, className)}>{children}</Label>
    </DatePicker.Label>
  );
}

export function DatePickerControl({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.Control>) {
  return (
    <DatePicker.Control className={cn(datePickerControl, className)} {...props}>
      {children}
    </DatePicker.Control>
  );
}

export function DatePickerInput({
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.Input>) {
  return (
    <DatePicker.Input asChild {...props}>
      <Input className={cn(datePickerInput, className)} />
    </DatePicker.Input>
  );
}

export function DatePickerTrigger({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.Trigger>) {
  return (
    <DatePicker.Trigger asChild {...props}>
      {asChild ? (
        children
      ) : (
        <Button className={cn(datePickerTrigger, className)}>
          {!children ? <Calendar /> : children}
        </Button>
      )}
    </DatePicker.Trigger>
  );
}

export function DatePickerClearTrigger({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.ClearTrigger>) {
  return (
    <DatePicker.ClearTrigger asChild {...props}>
      {asChild ? (
        children
      ) : (
        <Button className={cn(datePickerClearTrigger, className)}>
          {!children ? <Calendar /> : children}
        </Button>
      )}
    </DatePicker.ClearTrigger>
  );
}

export function DatePickerPositioner({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.Positioner>) {
  return (
    <DatePicker.Positioner
      className={cn(datePickerPositioner, className)}
      {...props}
    >
      {children}
    </DatePicker.Positioner>
  );
}

export function DatePickerContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.Content>) {
  return (
    <DatePicker.Content asChild {...props}>
      <Box
        raised="single"
        className={cn(datePickerContent, className)}
        {...props}
      >
        <div>{children}</div>
      </Box>
    </DatePicker.Content>
  );
}

export function DatePickerYearSelect({
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.YearSelect>) {
  return (
    <DatePicker.YearSelect
      className={cn(input, datePickerYearSelect, className)}
      {...props}
    />
  );
}

export function DatePickerMonthSelect({
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.MonthSelect>) {
  return (
    <DatePicker.MonthSelect
      className={cn(input, datePickerMonthSelect, className)}
      {...props}
    />
  );
}

export function DatePickerView({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.View>) {
  return (
    <DatePicker.View className={cn(datePickerView, className)} {...props}>
      {children}
    </DatePicker.View>
  );
}

export function DatePickerViewControl({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.ViewControl>) {
  return (
    <DatePicker.ViewControl
      className={cn(datePickerViewControl, className)}
      {...props}
    >
      {children}
    </DatePicker.ViewControl>
  );
}

export function DatePickerPresetTrigger({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.PresetTrigger>) {
  return (
    <DatePicker.PresetTrigger asChild {...props}>
      {asChild ? (
        children
      ) : (
        <Button className={cn(datePickerPresetTrigger, className)}>
          {children}
        </Button>
      )}
    </DatePicker.PresetTrigger>
  );
}

export function DatePickerPrevTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.PrevTrigger>) {
  return (
    <DatePicker.PrevTrigger
      className={cn(datePickerPrevTrigger, className)}
      {...props}
    >
      {!children ? <MoveLeft /> : children}
    </DatePicker.PrevTrigger>
  );
}

export function DatePickerViewTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.ViewTrigger>) {
  return (
    <DatePicker.ViewTrigger
      className={cn(datePickerViewTrigger, className)}
      {...props}
    >
      {children}
    </DatePicker.ViewTrigger>
  );
}

export function DatePickerNextTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.NextTrigger>) {
  return (
    <DatePicker.NextTrigger
      className={cn(datePickerNextTrigger, className)}
      {...props}
    >
      {!children ? <MoveRight /> : children}
    </DatePicker.NextTrigger>
  );
}

export function DatePickerRangeText({
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.RangeText>) {
  return (
    <DatePicker.RangeText
      className={cn(datePickerRangeText, className)}
      {...props}
    />
  );
}

export function DatePickerTable({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.Table>) {
  return (
    <DatePicker.Table className={cn(datePickerTable, className)} {...props}>
      {children}
    </DatePicker.Table>
  );
}

export function DatePickerTableHead({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.TableHead>) {
  return (
    <DatePicker.TableHead
      className={cn(datePickerTableHead, className)}
      {...props}
    >
      {children}
    </DatePicker.TableHead>
  );
}

export function DatePickerTableRow({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.TableRow>) {
  return (
    <DatePicker.TableRow
      className={cn(datePickerTableRow, className)}
      {...props}
    >
      {children}
    </DatePicker.TableRow>
  );
}

export function DatePickerTableHeader({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.TableHeader>) {
  return (
    <DatePicker.TableHeader
      className={cn(datePickerTableHeader, className)}
      {...props}
    >
      {children}
    </DatePicker.TableHeader>
  );
}

export function DatePickerTableBody({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.TableBody>) {
  return (
    <DatePicker.TableBody
      className={cn(datePickerTableBody, className)}
      {...props}
    >
      {children}
    </DatePicker.TableBody>
  );
}

export function DatePickerTableCell({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.TableCell>) {
  return (
    <DatePicker.TableCell
      className={cn(datePickerTableCell, className)}
      {...props}
    >
      {children}
    </DatePicker.TableCell>
  );
}

export function DatePickerTableCellTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DatePicker.TableCellTrigger>) {
  return (
    <DatePicker.TableCellTrigger
      className={cn(datePickerTableCellTrigger, className)}
      {...props}
    >
      {children}
    </DatePicker.TableCellTrigger>
  );
}

export const DatePickerContext = DatePicker.Context;
