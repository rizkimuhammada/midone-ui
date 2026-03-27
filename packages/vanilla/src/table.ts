import { cn } from "@midoneui/core/src/utils/cn";
import {
    tableVariants,
    tableContainer,
    tableHeader,
    tableBody,
    tableFooter,
    tableRow,
    tableHead,
    tableCellVariants,
    tableCaption,
} from "@midoneui/core/src/styles/table.styles";

function initTables() {
    // Init container
    document.querySelectorAll('[data-component="table-container"]').forEach((el) => {
        const userClasses = Array.from(el.classList);
        el.className = cn(tableContainer, ...userClasses);
        el.setAttribute("data-scope", "table");
        el.setAttribute("data-part", "container");
    });

    // Init each table — process children from within table context so
    // .table-cell can inherit the table's variant/raised (replicating Vue's inject)
    document.querySelectorAll('[data-component="table"]').forEach((table) => {
        const variant = table.getAttribute("data-variant") as any || "default";
        const raised = table.getAttribute("data-raised") as any || undefined;

        const tableUserClasses = Array.from(table.classList);
        table.className = cn(tableVariants({ variant, raised }), ...tableUserClasses);
        table.setAttribute("data-scope", "table");
        table.setAttribute("data-part", "root");

        table.querySelectorAll('[data-component="table-header"]').forEach((el) => {
            const userClasses = Array.from(el.classList);
            el.className = cn(tableHeader, ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "header");
        });

        table.querySelectorAll('[data-component="table-body"]').forEach((el) => {
            const userClasses = Array.from(el.classList);
            el.className = cn(tableBody, ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "body");
        });

        table.querySelectorAll('[data-component="table-footer"]').forEach((el) => {
            const userClasses = Array.from(el.classList);
            el.className = cn(tableFooter, ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "footer");
        });

        table.querySelectorAll('[data-component="table-row"]').forEach((el) => {
            const userClasses = Array.from(el.classList);
            el.className = cn(tableRow, ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "row");
        });

        table.querySelectorAll('[data-component="table-head"]').forEach((el) => {
            const userClasses = Array.from(el.classList);
            el.className = cn(tableHead, ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "head");
        });

        // tableCellVariants gets variant+raised from parent table (inject equivalent)
        table.querySelectorAll('[data-component="table-cell"]').forEach((el) => {
            const userClasses = Array.from(el.classList);
            el.className = cn(tableCellVariants({ variant, raised }), ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "cell");
        });

        table.querySelectorAll('[data-component="table-caption"]').forEach((el) => {
            const userClasses = Array.from(el.classList);
            el.className = cn(tableCaption, ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "caption");
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTables);
} else {
    initTables();
}
