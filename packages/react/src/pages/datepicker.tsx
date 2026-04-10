import { DatePickerRoot } from "@/components/ui/datepicker";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <DatePickerRoot label="Basic" className="w-84" />
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <DatePickerRoot
            label="Range Selection"
            selectionMode="range"
            className="w-140"
            withPresets="thisWeek|lastWeek|thisMonth"
          />
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <DatePickerRoot label="Multiple Months" numOfMonths={2} className="w-84" />
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <DatePickerRoot withTrigger label="With Trigger" className="w-84" />
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <DatePickerRoot open label="Inline" className="w-84" />
        </div>
      </div>
    </div>
  );
}

export default Main;
