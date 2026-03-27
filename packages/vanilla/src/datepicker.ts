import { cn } from "@midoneui/core/src/utils/cn";
import {
    datePickerRoot,
    datePickerLabel,
    datePickerControl,
    datePickerInput,
    datePickerTrigger,
    datePickerClearTrigger,
    datePickerContent,
    datePickerYearSelect,
    datePickerMonthSelect,
    datePickerView,
    datePickerViewControl,
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
} from "@midoneui/core/src/styles/datepicker.styles";
import { input as inputStyles } from "@midoneui/core/src/styles/input.styles";
import { nativeSelect } from "@midoneui/core/src/styles/native-select.styles";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";
import { label as labelStyles } from "@midoneui/core/src/styles/label.styles";
import { badgeVariants } from "@midoneui/core/src/styles/badge.styles";
import { computePosition, flip, shift, offset } from "@floating-ui/dom";

const MONTHS_LONG = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const WEEKDAYS_SHORT = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const CALENDAR_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>`;
const X_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
const MOVE_LEFT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8 2 12l4 4"/><path d="M2 12h20"/></svg>`;
const MOVE_RIGHT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8l4 4-4 4"/><path d="M2 12h20"/></svg>`;

function isSameDay(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function formatDate(d: Date) {
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${m}/${day}/${d.getFullYear()}`;
}

function getWeeks(year: number, month: number): { year: number; month: number; day: number; isOutside: boolean }[][] {
    const firstOfMonth = new Date(year, month, 1);
    const lastOfMonth = new Date(year, month + 1, 0);
    const startDate = new Date(firstOfMonth);
    startDate.setDate(startDate.getDate() - startDate.getDay()); // back to Sunday

    const weeks: { year: number; month: number; day: number; isOutside: boolean }[][] = [];
    const cur = new Date(startDate);
    do {
        const week: { year: number; month: number; day: number; isOutside: boolean }[] = [];
        for (let d = 0; d < 7; d++) {
            week.push({ year: cur.getFullYear(), month: cur.getMonth(), day: cur.getDate(), isOutside: cur.getMonth() !== month });
            cur.setDate(cur.getDate() + 1);
        }
        weeks.push(week);
    } while (cur <= lastOfMonth);
    return weeks;
}

function getMonthsGrid(columns = 4): { value: number; label: string }[][] {
    const grid: { value: number; label: string }[][] = [];
    for (let i = 0; i < 12; i += columns) {
        const row: { value: number; label: string }[] = [];
        for (let j = 0; j < columns && i + j < 12; j++) {
            row.push({ value: i + j, label: MONTHS_SHORT[i + j] });
        }
        grid.push(row);
    }
    return grid;
}

function getYearsGrid(centerYear: number, columns = 4): { value: number; label: string }[][] {
    const startYear = Math.floor(centerYear / 12) * 12;
    const grid: { value: number; label: string }[][] = [];
    for (let i = 0; i < 12; i += columns) {
        const row: { value: number; label: string }[] = [];
        for (let j = 0; j < columns; j++) {
            const y = startYear + i + j;
            row.push({ value: y, label: String(y) });
        }
        grid.push(row);
    }
    return grid;
}

function getPresetRange(preset: string): [Date, Date] {
    const today = new Date();
    if (preset === "thisWeek") {
        const start = new Date(today);
        start.setDate(today.getDate() - today.getDay());
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        return [start, end];
    }
    if (preset === "lastWeek") {
        const start = new Date(today);
        start.setDate(today.getDate() - today.getDay() - 7);
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        return [start, end];
    }
    if (preset === "thisMonth") {
        const start = new Date(today.getFullYear(), today.getMonth(), 1);
        const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        return [start, end];
    }
    return [today, today];
}

function initDatePickerRoot(root: HTMLElement) {
    const selectionMode = (root.getAttribute("data-selection-mode") ?? "single") as "single" | "range";
    const numOfMonths = parseInt(root.getAttribute("data-num-of-months") ?? "1");
    const isInline = root.hasAttribute("data-open");

    const state = {
        viewYear: new Date().getFullYear(),
        viewMonth: new Date().getMonth(),
        currentView: "day" as "day" | "month" | "year",
        selectedDates: [] as Date[],
    };

    const defaultValueAttr = root.getAttribute("data-value");
    if (defaultValueAttr) {
        try {
            const vals = JSON.parse(defaultValueAttr);
            if (Array.isArray(vals)) {
                state.selectedDates = vals.map((v: string) => new Date(v));
            } else {
                state.selectedDates = [new Date(vals)];
            }
            if (state.selectedDates.length > 0) {
                state.viewYear = state.selectedDates[0].getFullYear();
                state.viewMonth = state.selectedDates[0].getMonth();
            }
        } catch (e) {
            console.error("Invalid datepicker value", defaultValueAttr);
        }
    }

    // Apply root class
    root.className = cn(datePickerRoot, root.className);
    root.setAttribute("data-scope", "date-picker");
    root.setAttribute("data-part", "root");

    // Label
    const labelEl = root.querySelector<HTMLElement>(':scope > [data-component="datepicker-label"]');
    if (labelEl) {
        labelEl.className = cn(labelStyles, datePickerLabel, labelEl.className);
        labelEl.setAttribute("data-scope", "date-picker");
        labelEl.setAttribute("data-part", "label");
    }

    // Control
    const controlEl = root.querySelector<HTMLElement>(':scope > [data-component="datepicker-control"]');
    if (controlEl) {
        controlEl.className = cn(datePickerControl, controlEl.className);
        controlEl.setAttribute("data-scope", "date-picker");
        controlEl.setAttribute("data-part", "control");
    }

    // Inputs
    const inputs = Array.from(root.querySelectorAll<HTMLInputElement>('[data-component="datepicker-input"]'));
    inputs.forEach(inp => {
        inp.className = cn(inputStyles, datePickerInput, inp.className);
        inp.setAttribute("data-scope", "date-picker");
        inp.setAttribute("data-part", "input");
        inp.placeholder = "mm/dd/yyyy";
    });

    // Trigger button
    const triggerBtn = root.querySelector<HTMLButtonElement>('[data-component="datepicker-trigger"]');
    if (triggerBtn) {
        triggerBtn.className = cn(buttonVariants({ variant: "ghost" }), datePickerTrigger, triggerBtn.className);
        triggerBtn.setAttribute("data-scope", "date-picker");
        triggerBtn.setAttribute("data-part", "trigger");
        triggerBtn.innerHTML = CALENDAR_SVG;
    }

    // Clear trigger
    const clearBtn = root.querySelector<HTMLButtonElement>('[data-component="datepicker-clear-trigger"]');
    if (clearBtn) {
        clearBtn.className = cn(buttonVariants({ variant: "ghost" }), datePickerClearTrigger, clearBtn.className);
        clearBtn.setAttribute("data-scope", "date-picker");
        clearBtn.setAttribute("data-part", "clear-trigger");
        // Prepend X svg before text
        clearBtn.innerHTML = X_SVG + clearBtn.textContent;
        clearBtn.style.display = "none";
    }

    // Preset triggers (range example)
    root.querySelectorAll<HTMLButtonElement>('[data-component="datepicker-preset-trigger"]').forEach(btn => {
        const variant = (btn.getAttribute("data-variant") ?? "secondary") as any;
        const look = (btn.getAttribute("data-look") ?? "outline") as any;
        btn.className = cn(badgeVariants({ variant, look }), "datepicker-preset-trigger");
    });

    // Positioner (dropdown mode) — will teleport to body after all queries
    const positioner = root.querySelector<HTMLElement>(':scope > [data-component="datepicker-positioner"]');
    if (positioner && !isInline) {
        positioner.style.cssText = "position:fixed;z-index:50;min-width:max-content;display:none;";
    }

    // Content box (datepicker-content)
    const contentEl = root.querySelector<HTMLElement>('[data-component="datepicker-content"]');
    if (contentEl) {
        const boxClasses = boxVariants({ raised: "single" });
        contentEl.className = cn(boxClasses, datePickerContent, contentEl.className);
        contentEl.setAttribute("data-scope", "date-picker");
        contentEl.setAttribute("data-part", "content");

        // Vue DatePickerContent wraps slot in <div><slot /></div>
        // The [&>div] selectors in datePickerContent target this inner wrapper
        const innerWrapper = document.createElement("div");
        while (contentEl.firstChild) {
            innerWrapper.appendChild(contentEl.firstChild);
        }
        contentEl.appendChild(innerWrapper);
    }

    // Year select
    const yearSelect = root.querySelector<HTMLSelectElement>('[data-component="datepicker-year-select"]');
    if (yearSelect) {
        yearSelect.className = cn(inputStyles, nativeSelect, datePickerYearSelect, yearSelect.className);
        populateYearSelect(yearSelect, state.viewYear);
    }

    // Month select
    const monthSelect = root.querySelector<HTMLSelectElement>('[data-component="datepicker-month-select"]');
    if (monthSelect) {
        monthSelect.className = cn(inputStyles, nativeSelect, datePickerMonthSelect, monthSelect.className);
        populateMonthSelect(monthSelect);
        monthSelect.value = String(state.viewMonth);
    }

    // Views
    const viewEls = Array.from(root.querySelectorAll<HTMLElement>('[data-component="datepicker-view"]'));
    viewEls.forEach(v => {
        v.className = cn(datePickerView, v.className);
        v.setAttribute("data-scope", "date-picker");
        v.setAttribute("data-part", "view");
    });

    // View controls (standalone, e.g. multiple months)
    const standaloneViewControls = Array.from(root.querySelectorAll<HTMLElement>('[data-component="datepicker-view-control"]')).filter(el => !el.closest('[data-component="datepicker-view"]'));
    standaloneViewControls.forEach(vc => {
        vc.className = cn(datePickerViewControl, vc.className);
    });

    // View controls inside views
    viewEls.forEach(v => {
        const vc = v.querySelector<HTMLElement>(':scope > [data-component="datepicker-view-control"]');
        if (vc) vc.className = cn(datePickerViewControl, vc.className);
    });

    // Apply table/thead/tbody/tr/th classes to all tables
    root.querySelectorAll<HTMLElement>('[data-component="datepicker-table"]').forEach(t => {
        t.className = cn(datePickerTable, t.className);
    });
    root.querySelectorAll<HTMLElement>('[data-component="datepicker-table-head"]').forEach(el => {
        el.className = cn(datePickerTableHead, el.className);
    });
    root.querySelectorAll<HTMLElement>('[data-component="datepicker-table-body"]').forEach(el => {
        el.className = cn(datePickerTableBody, el.className);
    });
    root.querySelectorAll<HTMLElement>('[data-component="datepicker-table-row"]').forEach(el => {
        el.className = cn(datePickerTableRow, el.className);
    });

    // Setup view buttons (prev/view-trigger/next) inside all view-controls
    function setupViewControl(vc: HTMLElement, viewEl: HTMLElement | null) {
        const prev = vc.querySelector<HTMLButtonElement>(':scope > [data-component="datepicker-prev-trigger"]');
        const viewBtn = vc.querySelector<HTMLButtonElement>(':scope > [data-component="datepicker-view-trigger"]');
        const next = vc.querySelector<HTMLButtonElement>(':scope > [data-component="datepicker-next-trigger"]');
        const rangeText = vc.querySelector<HTMLElement>('[data-component="datepicker-range-text"]');

        if (prev) {
            prev.className = cn(datePickerPrevTrigger, prev.className);
            prev.innerHTML = MOVE_LEFT_SVG;
            prev.addEventListener("click", () => {
                navigatePrev(viewEl);
            });
        }
        if (viewBtn) {
            viewBtn.className = cn(datePickerViewTrigger, viewBtn.className);
            if (viewEl) {
                viewBtn.addEventListener("click", () => {
                    const current = viewEl.getAttribute("data-view") as "day" | "month" | "year";
                    if (current === "day") switchView("month");
                    else if (current === "month") switchView("year");
                    else switchView("day");
                });
            }
        }
        if (next) {
            next.className = cn(datePickerNextTrigger, next.className);
            next.innerHTML = MOVE_RIGHT_SVG;
            next.addEventListener("click", () => {
                navigateNext(viewEl);
            });
        }
        if (rangeText) {
            rangeText.className = cn(datePickerRangeText, rangeText.className);
        }
    }

    // Setup view controls in views
    viewEls.forEach(v => {
        const vc = v.querySelector<HTMLElement>(':scope > [data-component="datepicker-view-control"]');
        if (vc) setupViewControl(vc, v);
    });
    // Setup standalone view controls (multiple months)
    standaloneViewControls.forEach(vc => {
        const dayView = root.querySelector<HTMLElement>('[data-component="datepicker-view"][data-view="day"]');
        const prev = vc.querySelector<HTMLButtonElement>(':scope > [data-component="datepicker-prev-trigger"]');
        const next = vc.querySelector<HTMLButtonElement>(':scope > [data-component="datepicker-next-trigger"]');
        const rangeText = vc.querySelector<HTMLElement>(':scope > [data-component="datepicker-range-text"]');

        if (prev) {
            prev.className = cn(datePickerPrevTrigger, prev.className);
            prev.innerHTML = MOVE_LEFT_SVG;
            prev.addEventListener("click", () => navigatePrev(dayView));
        }
        if (next) {
            next.className = cn(datePickerNextTrigger, next.className);
            next.innerHTML = MOVE_RIGHT_SVG;
            next.addEventListener("click", () => navigateNext(dayView));
        }
        if (rangeText) {
            rangeText.className = cn(datePickerRangeText, rangeText.className);
        }
    });

    function navigatePrev(viewEl: HTMLElement | null) {
        const view = viewEl ? (viewEl.getAttribute("data-view") as "day" | "month" | "year") : state.currentView;
        if (view === "day") {
            state.viewMonth--;
            if (state.viewMonth < 0) { state.viewMonth = 11; state.viewYear--; }
        } else if (view === "month") {
            state.viewYear--;
        } else {
            state.viewYear -= 12;
        }
        render();
    }

    function navigateNext(viewEl: HTMLElement | null) {
        const view = viewEl ? (viewEl.getAttribute("data-view") as "day" | "month" | "year") : state.currentView;
        if (view === "day") {
            state.viewMonth++;
            if (state.viewMonth > 11) { state.viewMonth = 0; state.viewYear++; }
        } else if (view === "month") {
            state.viewYear++;
        } else {
            state.viewYear += 12;
        }
        render();
    }

    function switchView(v: "day" | "month" | "year") {
        state.currentView = v;
        viewEls.forEach(el => {
            const elView = el.getAttribute("data-view");
            if (elView === v) el.removeAttribute("hidden");
            else el.setAttribute("hidden", "");
        });
        render();
    }

    // Year/month selects change handlers
    if (yearSelect) {
        yearSelect.addEventListener("change", () => {
            state.viewYear = parseInt(yearSelect.value);
            render();
        });
    }
    if (monthSelect) {
        monthSelect.addEventListener("change", () => {
            state.viewMonth = parseInt(monthSelect.value);
            render();
        });
    }

    // Positioner toggle
    function updatePosition() {
        if (!positioner) return;
        const anchor = controlEl ?? root;
        computePosition(anchor, positioner, {
            placement: "bottom-start",
            middleware: [
                offset(8),
                flip(),
                shift({ padding: 8 }),
            ],
        }).then(({ x, y }) => {
            positioner.style.left = `${x}px`;
            positioner.style.top = `${y}px`;
        });
    }

    function openDropdown() {
        if (!positioner || isInline) return;
        const anchor = controlEl ?? root;
        positioner.style.setProperty("--reference-width", `${anchor.offsetWidth}px`);
        positioner.style.display = "block";
        updatePosition();
    }
    function closeDropdown() {
        if (!positioner || isInline) return;
        positioner.style.display = "none";
    }

    if (triggerBtn && !isInline) {
        triggerBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = positioner?.style.display !== "none";
            if (isOpen) closeDropdown(); else openDropdown();
        });
    }

    // Click outside
    if (!isInline) {
        document.addEventListener("click", (e) => {
            if (!root.contains(e.target as Node) && (!positioner || !positioner.contains(e.target as Node))) closeDropdown();
        });
    }

    // Clear trigger
    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            state.selectedDates = [];
            inputs.forEach(inp => inp.value = "");
            clearBtn.style.display = "none";
            render();
        });
    }

    // Preset triggers
    root.querySelectorAll<HTMLButtonElement>('[data-component="datepicker-preset-trigger"]').forEach(btn => {
        btn.addEventListener("click", () => {
            const preset = btn.getAttribute("data-value") ?? "";
            const [start, end] = getPresetRange(preset);
            state.selectedDates = [start, end];
            state.viewYear = start.getFullYear();
            state.viewMonth = start.getMonth();
            updateInputs();
            render();
        });
    });

    function updateInputs() {
        const [start, end] = state.selectedDates;
        if (inputs.length >= 2) {
            inputs[0].value = start ? formatDate(start) : "";
            inputs[1].value = end ? formatDate(end) : "";
        } else if (inputs.length === 1) {
            inputs[0].value = start ? formatDate(start) : "";
        }
        if (clearBtn) {
            clearBtn.style.display = state.selectedDates.length > 0 ? "" : "none";
        }
    }

    function selectDate(date: Date) {
        if (selectionMode === "single") {
            state.selectedDates = [date];
            updateInputs();
            closeDropdown();
        } else {
            if (state.selectedDates.length === 0 || state.selectedDates.length === 2) {
                state.selectedDates = [date];
            } else {
                const first = state.selectedDates[0];
                if (date < first) state.selectedDates = [date, first];
                else state.selectedDates = [first, date];
                updateInputs();
                closeDropdown();
            }
            updateInputs();
        }
        render();
    }

    function renderWeekdayHeaders(trEl: HTMLElement) {
        trEl.innerHTML = "";
        WEEKDAYS_SHORT.forEach(day => {
            const th = document.createElement("th");
            th.className = cn(datePickerTableHeader);
            th.textContent = day;
            trEl.appendChild(th);
        });
    }

    function renderDayTable(tbody: HTMLElement, theadRow: HTMLElement | null, year: number, month: number) {
        if (theadRow) renderWeekdayHeaders(theadRow);
        tbody.innerHTML = "";
        const weeks = getWeeks(year, month);
        const [sel0, sel1] = state.selectedDates;

        weeks.forEach(week => {
            const tr = document.createElement("tr");
            tr.className = cn(datePickerTableRow);
            week.forEach(dayInfo => {
                const td = document.createElement("td");
                td.className = cn(datePickerTableCell);
                const trigger = document.createElement("div");
                trigger.className = cn(datePickerTableCellTrigger);
                trigger.textContent = String(dayInfo.day);

                const date = new Date(dayInfo.year, dayInfo.month, dayInfo.day);

                // data-selected
                if (sel0 && isSameDay(date, sel0)) trigger.setAttribute("data-selected", "");
                if (sel1 && isSameDay(date, sel1)) trigger.setAttribute("data-selected", "");

                // data-in-range
                if (sel0 && sel1) {
                    if (date > sel0 && date < sel1) trigger.setAttribute("data-in-range", "");
                }

                // data-disabled + data-outside-range only for next-month overflow days
                const isNextMonth = dayInfo.isOutside && new Date(dayInfo.year, dayInfo.month, 1) > new Date(year, month, 1);
                if (isNextMonth) {
                    trigger.setAttribute("data-disabled", "");
                    trigger.setAttribute("data-outside-range", "");
                }

                trigger.addEventListener("click", () => selectDate(date));

                td.appendChild(trigger);
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
    }

    function renderMonthTable(tbody: HTMLElement) {
        tbody.innerHTML = "";
        const grid = getMonthsGrid(4);
        grid.forEach(row => {
            const tr = document.createElement("tr");
            tr.className = cn(datePickerTableRow);
            row.forEach(m => {
                const td = document.createElement("td");
                td.className = cn(datePickerTableCell);
                const trigger = document.createElement("div");
                trigger.className = cn(datePickerTableCellTrigger);
                trigger.textContent = m.label;
                if (m.value === state.viewMonth) trigger.setAttribute("data-selected", "");
                trigger.addEventListener("click", () => {
                    state.viewMonth = m.value;
                    if (monthSelect) monthSelect.value = String(m.value);
                    switchView("day");
                });
                td.appendChild(trigger);
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
    }

    function renderYearTable(tbody: HTMLElement) {
        tbody.innerHTML = "";
        const grid = getYearsGrid(state.viewYear, 4);
        grid.forEach(row => {
            const tr = document.createElement("tr");
            tr.className = cn(datePickerTableRow);
            row.forEach(y => {
                const td = document.createElement("td");
                td.className = cn(datePickerTableCell);
                const trigger = document.createElement("div");
                trigger.className = cn(datePickerTableCellTrigger);
                trigger.textContent = y.label;
                if (y.value === state.viewYear) trigger.setAttribute("data-selected", "");
                trigger.addEventListener("click", () => {
                    state.viewYear = y.value;
                    if (yearSelect) yearSelect.value = String(y.value);
                    switchView("month");
                });
                td.appendChild(trigger);
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
    }

    function updateRangeTexts() {
        const containers = positioner && !isInline ? [root, positioner] : [root];
        const rangeTextEls = containers.flatMap(c => Array.from(c.querySelectorAll<HTMLElement>('[data-component="datepicker-range-text"]')));
        rangeTextEls.forEach(el => {
            const viewEl = el.closest<HTMLElement>('[data-component="datepicker-view"]');
            const view = viewEl ? viewEl.getAttribute("data-view") : state.currentView;
            if (view === "day") {
                el.textContent = `${MONTHS_LONG[state.viewMonth]} ${state.viewYear}`;
            } else if (view === "month") {
                el.textContent = String(state.viewYear);
            } else {
                const startYear = Math.floor(state.viewYear / 12) * 12;
                el.textContent = `${startYear} - ${startYear + 11}`;
            }
        });
    }

    function render() {
        // Update year/month selects
        if (yearSelect) {
            populateYearSelect(yearSelect, state.viewYear);
            yearSelect.value = String(state.viewYear);
        }
        if (monthSelect) {
            monthSelect.value = String(state.viewMonth);
        }

        updateRangeTexts();

        // Render day views
        viewEls.forEach(v => {
            const view = v.getAttribute("data-view");
            if (view === "day") {
                if (numOfMonths > 1) {
                    // Multiple month tables
                    v.querySelectorAll<HTMLElement>('[data-component="datepicker-table"]').forEach(table => {
                        const offsetAttr = parseInt(table.getAttribute("data-month-offset") ?? "0");
                        const d = new Date(state.viewYear, state.viewMonth + offsetAttr, 1);
                        const tbody = table.querySelector<HTMLElement>('[data-component="datepicker-table-body"]');
                        const theadRow = table.querySelector<HTMLElement>('[data-component="datepicker-table-row"]');
                        if (tbody) renderDayTable(tbody, theadRow, d.getFullYear(), d.getMonth());
                    });
                } else {
                    const tbody = v.querySelector<HTMLElement>('[data-component="datepicker-table-body"]');
                    const theadRow = v.querySelector<HTMLElement>('[data-component="datepicker-table-row"]');
                    if (tbody) renderDayTable(tbody, theadRow, state.viewYear, state.viewMonth);
                }
            } else if (view === "month") {
                const tbody = v.querySelector<HTMLElement>('[data-component="datepicker-table-body"]');
                if (tbody) renderMonthTable(tbody);
            } else if (view === "year") {
                const tbody = v.querySelector<HTMLElement>('[data-component="datepicker-table-body"]');
                if (tbody) renderYearTable(tbody);
            }
        });

        // Initial view: show day, hide others
        if (numOfMonths === 1) {
            viewEls.forEach(v => {
                const view = v.getAttribute("data-view");
                if (view === state.currentView) v.removeAttribute("hidden");
                else v.setAttribute("hidden", "");
            });
        }
    }

    // Teleport positioner to body
    if (positioner && !isInline) {
        positioner.remove();
        document.body.appendChild(positioner);
    }

    updateInputs();
    render();
}

function populateYearSelect(sel: HTMLSelectElement, centerYear: number) {
    const currentVal = sel.value;
    sel.innerHTML = "";
    for (let y = centerYear - 50; y <= centerYear + 50; y++) {
        const opt = document.createElement("option");
        opt.value = String(y);
        opt.textContent = String(y);
        sel.appendChild(opt);
    }
    sel.value = currentVal || String(centerYear);
}

function populateMonthSelect(sel: HTMLSelectElement) {
    sel.innerHTML = "";
    MONTHS_LONG.forEach((name, i) => {
        const opt = document.createElement("option");
        opt.value = String(i);
        opt.textContent = name;
        sel.appendChild(opt);
    });
}

function initDatepickers() {
    document.querySelectorAll<HTMLElement>('[data-component="datepicker-root"]').forEach(root => initDatePickerRoot(root));
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDatepickers);
} else {
    initDatepickers();
}
