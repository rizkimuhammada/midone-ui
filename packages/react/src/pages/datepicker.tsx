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
import { Portal } from "@ark-ui/react/portal";
import { Box } from "@/components/ui/box";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <DatePickerRoot className="w-84">
            <DatePickerLabel>Basic</DatePickerLabel>
            <DatePickerControl>
              <DatePickerInput />
              <DatePickerTrigger />
              <DatePickerClearTrigger>Clear</DatePickerClearTrigger>
            </DatePickerControl>
            <Portal>
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
                </DatePickerContent>
              </DatePickerPositioner>
            </Portal>
          </DatePickerRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
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
                              .getMonthsGrid({ columns: 4, format: "short" })
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
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
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
                <div style={{ display: "flex", gap: "10px" }}>
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
                      const offset = datePicker.getOffset({ months: 1 });
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
                </div>
              </DatePickerContent>
            </DatePickerPositioner>
          </DatePickerRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
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
                            .getMonthsGrid({ columns: 4, format: "short" })
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
        </div>
      </div>
    </div>
  );
}

export default Main;
