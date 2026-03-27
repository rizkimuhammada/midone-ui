import { cn } from "@midoneui/core/src/utils/cn";
import {
    tableVariants,
    tableContainer,
    tableHeader,
    tableBody,
    tableRow,
    tableHead,
    tableCellVariants,
} from "@midoneui/core/src/styles/table.styles";
import { badgeVariants } from "@midoneui/core/src/styles/badge.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";
import { checkboxControl, checkboxIndicator } from "@midoneui/core/src/styles/checkbox.styles";
import { input } from "@midoneui/core/src/styles/input.styles";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";

type Payment = {
    id: string;
    amount: number;
    status: string;
    badge: "success" | "pending" | "danger";
    email: string;
};

const DATA: Payment[] = [
    { id: "m5gr84i9", amount: 316, status: "success", badge: "success", email: "ken99@example.com" },
    { id: "3u1reuv4", amount: 242, status: "success", badge: "success", email: "Abe45@example.com" },
    { id: "derv1ws0", amount: 837, status: "processing", badge: "pending", email: "Monserrat44@example.com" },
    { id: "5kma53ae", amount: 874, status: "success", badge: "success", email: "Silas22@example.com" },
    { id: "bhqecj4p", amount: 721, status: "failed", badge: "danger", email: "carmella@example.com" },
];

const HIDEABLE_COLS = ["status", "email", "amount"];

const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
const ARROWS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>`;
const MORE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>`;

function makeCheckbox(checked: boolean, indeterminate = false): HTMLElement {
    const ctrl = document.createElement("div");
    ctrl.setAttribute("role", "checkbox");
    ctrl.setAttribute("aria-checked", indeterminate ? "mixed" : String(checked));
    ctrl.className = cn(checkboxControl);
    ctrl.style.cursor = "pointer";

    const ind = document.createElement("div");
    ind.className = cn(checkboxIndicator);
    ind.innerHTML = CHECK_SVG;
    if (!checked && !indeterminate) ind.setAttribute("hidden", "");
    ctrl.appendChild(ind);
    return ctrl;
}

function initDataTable() {
    document.querySelectorAll<HTMLElement>('[data-component="datatable"]').forEach((root) => {
        let filterValue = "";
        let sortAsc = true;
        let sortActive = false;
        let selectedRows = new Set<string>();
        let currentPage = 0;
        const PAGE_SIZE = 10;
        let hiddenColumns = new Set<string>();

        // Shared action dropdown (one, repositioned per row)
        const actionDropdown = document.createElement("div");
        actionDropdown.className = cn(boxVariants({ raised: "single" }));
        actionDropdown.style.cssText = "position:fixed;z-index:100;display:none;min-width:160px;padding:4px 0;";
        document.body.appendChild(actionDropdown);

        let activePaymentId: string | null = null;

        function closeActionDropdown() {
            actionDropdown.style.display = "none";
            activePaymentId = null;
        }

        document.addEventListener("click", (e) => {
            if (!actionDropdown.contains(e.target as Node)) closeActionDropdown();
        });

        function openActionDropdown(btn: HTMLElement, payment: Payment) {
            if (activePaymentId === payment.id) { closeActionDropdown(); return; }
            activePaymentId = payment.id;

            actionDropdown.innerHTML = "";
            const items = [
                { label: "Copy payment ID", onClick: () => navigator.clipboard.writeText(payment.id) },
                { label: "View Customer", onClick: () => {} },
                { label: "View Payment", onClick: () => {} },
            ];
            items.forEach(({ label: lbl, onClick }) => {
                const item = document.createElement("div");
                item.className = "px-3 py-1.5 text-sm cursor-pointer hover:bg-foreground/5";
                item.textContent = lbl;
                item.addEventListener("click", (e) => { e.stopPropagation(); onClick(); closeActionDropdown(); });
                actionDropdown.appendChild(item);
            });

            actionDropdown.style.display = "block";
            const rect = btn.getBoundingClientRect();
            const dropRect = actionDropdown.getBoundingClientRect();
            actionDropdown.style.top = `${rect.bottom + 4}px`;
            actionDropdown.style.left = `${rect.right - dropRect.width}px`;
        }

        // Show columns dropdown
        const colDropdown = document.createElement("div");
        colDropdown.className = cn(boxVariants({ raised: "single" }));
        colDropdown.style.cssText = "position:fixed;z-index:100;display:none;min-width:160px;padding:4px 0;";
        document.body.appendChild(colDropdown);

        let colDropdownOpen = false;

        function closeColDropdown() { colDropdown.style.display = "none"; colDropdownOpen = false; }

        function getFilteredRows(): Payment[] {
            let rows = DATA.filter((r) =>
                r.email.toLowerCase().includes(filterValue.toLowerCase())
            );
            if (sortActive) {
                rows = [...rows].sort((a, b) =>
                    sortAsc
                        ? a.email.localeCompare(b.email)
                        : b.email.localeCompare(a.email)
                );
            }
            return rows;
        }

        function getPageRows(): Payment[] {
            const filtered = getFilteredRows();
            return filtered.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);
        }

        function render() {
            root.innerHTML = "";

            const filteredRows = getFilteredRows();
            const pageRows = getPageRows();

            // Toolbar
            const toolbar = document.createElement("div");
            toolbar.className = "flex items-center py-4 gap-3";

            const filterInput = document.createElement("input");
            filterInput.className = cn(input, "max-w-80");
            filterInput.placeholder = "Filter emails...";
            filterInput.value = filterValue;
            filterInput.addEventListener("input", (e) => {
                filterValue = (e.target as HTMLInputElement).value;
                currentPage = 0;
                render();
            });
            toolbar.appendChild(filterInput);

            // Show Columns button
            const colBtn = document.createElement("button");
            colBtn.className = cn(buttonVariants({ variant: "secondary" }), "ms-auto w-auto");
            colBtn.textContent = "Show Columns";
            colBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                if (colDropdownOpen) { closeColDropdown(); return; }
                colDropdownOpen = true;

                colDropdown.innerHTML = "";
                HIDEABLE_COLS.forEach((col) => {
                    const item = document.createElement("div");
                    item.className = "px-3 py-1.5 text-sm cursor-pointer hover:bg-foreground/5 flex items-center gap-2 capitalize";

                    const chk = makeCheckbox(!hiddenColumns.has(col));
                    item.appendChild(chk);
                    item.appendChild(document.createTextNode(col));

                    item.addEventListener("click", (ev) => {
                        ev.stopPropagation();
                        if (hiddenColumns.has(col)) hiddenColumns.delete(col);
                        else hiddenColumns.add(col);
                        closeColDropdown();
                        render();
                    });
                    colDropdown.appendChild(item);
                });

                colDropdown.style.display = "block";
                const rect = colBtn.getBoundingClientRect();
                colDropdown.style.top = `${rect.bottom + 4}px`;
                colDropdown.style.left = `${rect.right - colDropdown.offsetWidth}px`;
            });
            toolbar.appendChild(colBtn);
            root.appendChild(toolbar);

            document.addEventListener("click", (e) => {
                if (!colDropdown.contains(e.target as Node) && e.target !== colBtn) closeColDropdown();
            }, { once: true });

            // Table wrapper
            const tableWrap = document.createElement("div");
            tableWrap.className = cn(tableContainer, "relative -me-2");

            const table = document.createElement("table");
            table.className = cn(tableVariants({ variant: "boxed" }));
            table.setAttribute("data-variant", "boxed");

            // thead
            const thead = document.createElement("thead");
            thead.className = cn(tableHeader);

            const headerRow = document.createElement("tr");
            headerRow.className = cn(tableRow);

            // Select all checkbox
            const thSelect = document.createElement("th");
            thSelect.className = cn(tableHead);
            const allSelected = pageRows.length > 0 && pageRows.every((r) => selectedRows.has(r.id));
            const someSelected = pageRows.some((r) => selectedRows.has(r.id));
            const headerChk = makeCheckbox(allSelected, !allSelected && someSelected);
            headerChk.addEventListener("click", () => {
                if (allSelected) pageRows.forEach((r) => selectedRows.delete(r.id));
                else pageRows.forEach((r) => selectedRows.add(r.id));
                render();
            });
            thSelect.appendChild(headerChk);
            headerRow.appendChild(thSelect);

            // Status
            if (!hiddenColumns.has("status")) {
                const th = document.createElement("th");
                th.className = cn(tableHead);
                th.textContent = "Status";
                headerRow.appendChild(th);
            }

            // Email (sortable)
            if (!hiddenColumns.has("email")) {
                const th = document.createElement("th");
                th.className = cn(tableHead);
                const emailDiv = document.createElement("div");
                emailDiv.className = "flex gap-2 items-center cursor-pointer";
                emailDiv.innerHTML = `Email ${ARROWS_SVG}`;
                emailDiv.addEventListener("click", () => {
                    if (sortActive) sortAsc = !sortAsc;
                    else { sortActive = true; sortAsc = true; }
                    render();
                });
                th.appendChild(emailDiv);
                headerRow.appendChild(th);
            }

            // Amount
            if (!hiddenColumns.has("amount")) {
                const th = document.createElement("th");
                th.className = cn(tableHead);
                const amtDiv = document.createElement("div");
                amtDiv.className = "text-right";
                amtDiv.textContent = "Amount";
                th.appendChild(amtDiv);
                headerRow.appendChild(th);
            }

            // Actions
            const thActions = document.createElement("th");
            thActions.className = cn(tableHead);
            const actDiv = document.createElement("div");
            actDiv.className = "text-center";
            actDiv.textContent = "Actions";
            thActions.appendChild(actDiv);
            headerRow.appendChild(thActions);

            thead.appendChild(headerRow);
            table.appendChild(thead);

            // tbody
            const tbody = document.createElement("tbody");
            tbody.className = cn(tableBody);

            if (pageRows.length > 0) {
                pageRows.forEach((payment) => {
                    const tr = document.createElement("tr");
                    tr.className = cn(tableRow);
                    if (selectedRows.has(payment.id)) tr.setAttribute("data-state", "selected");

                    const cellClass = cn(tableCellVariants({ variant: "boxed" }));

                    // Select cell
                    const tdSelect = document.createElement("td");
                    tdSelect.className = cellClass;
                    const rowChk = makeCheckbox(selectedRows.has(payment.id));
                    rowChk.addEventListener("click", () => {
                        if (selectedRows.has(payment.id)) selectedRows.delete(payment.id);
                        else selectedRows.add(payment.id);
                        render();
                    });
                    tdSelect.appendChild(rowChk);
                    tr.appendChild(tdSelect);

                    // Status
                    if (!hiddenColumns.has("status")) {
                        const td = document.createElement("td");
                        td.className = cellClass;
                        const badge = document.createElement("span");
                        badge.className = cn(badgeVariants({ variant: payment.badge }), "capitalize");
                        badge.textContent = payment.status;
                        td.appendChild(badge);
                        tr.appendChild(td);
                    }

                    // Email
                    if (!hiddenColumns.has("email")) {
                        const td = document.createElement("td");
                        td.className = cellClass;
                        const div = document.createElement("div");
                        div.className = "lowercase";
                        div.textContent = payment.email;
                        td.appendChild(div);
                        tr.appendChild(td);
                    }

                    // Amount
                    if (!hiddenColumns.has("amount")) {
                        const td = document.createElement("td");
                        td.className = cellClass;
                        const div = document.createElement("div");
                        div.className = "text-right font-medium";
                        div.textContent = new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(payment.amount);
                        td.appendChild(div);
                        tr.appendChild(td);
                    }

                    // Actions
                    const tdActions = document.createElement("td");
                    tdActions.className = cellClass;
                    const actionsDiv = document.createElement("div");
                    actionsDiv.className = "cursor-pointer flex justify-center";
                    actionsDiv.innerHTML = MORE_SVG;
                    actionsDiv.addEventListener("click", (e) => {
                        e.stopPropagation();
                        openActionDropdown(actionsDiv, payment);
                    });
                    tdActions.appendChild(actionsDiv);
                    tr.appendChild(tdActions);

                    tbody.appendChild(tr);
                });
            } else {
                const tr = document.createElement("tr");
                tr.className = cn(tableRow);
                const td = document.createElement("td");
                td.className = cn(tableCellVariants({ variant: "boxed" }), "h-24 text-center");
                td.setAttribute("colspan", "5");
                td.textContent = "No results.";
                tr.appendChild(td);
                tbody.appendChild(tr);
            }

            table.appendChild(tbody);
            tableWrap.appendChild(table);
            root.appendChild(tableWrap);

            // Footer
            const footer = document.createElement("div");
            footer.className = "flex items-center justify-end space-x-2 py-4";

            const selInfo = document.createElement("div");
            selInfo.className = "text-muted-foreground flex-1 text-sm";
            const selCount = filteredRows.filter((r) => selectedRows.has(r.id)).length;
            selInfo.textContent = `${selCount} of ${filteredRows.length} row(s) selected.`;
            footer.appendChild(selInfo);

            const btnGroup = document.createElement("div");
            btnGroup.className = "space-x-2";

            const prevBtn = document.createElement("button");
            prevBtn.className = cn(buttonVariants({ size: "sm" }));
            prevBtn.textContent = "Previous";
            prevBtn.disabled = currentPage === 0;
            prevBtn.addEventListener("click", () => { currentPage--; render(); });
            btnGroup.appendChild(prevBtn);

            const nextBtn = document.createElement("button");
            nextBtn.className = cn(buttonVariants({ size: "sm" }));
            nextBtn.textContent = "Next";
            const totalPages = Math.ceil(filteredRows.length / PAGE_SIZE);
            nextBtn.disabled = currentPage >= totalPages - 1;
            nextBtn.addEventListener("click", () => { currentPage++; render(); });
            btnGroup.appendChild(nextBtn);

            footer.appendChild(btnGroup);
            root.appendChild(footer);
        }

        render();
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDataTable);
} else {
    initDataTable();
}
