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
    document.querySelectorAll(".table-container").forEach((el) => {
        const userClasses = Array.from(el.classList).filter(c => c !== "table-container");
        el.className = cn(tableContainer, "table-container", ...userClasses);
        el.setAttribute("data-scope", "table");
        el.setAttribute("data-part", "container");
    });

    // Init each table — process children from within table context so
    // .table-cell can inherit the table's variant/raised (replicating Vue's inject)
    document.querySelectorAll(".table").forEach((table) => {
        const variant = table.getAttribute("data-variant") as any || "default";
        const raised = table.getAttribute("data-raised") as any || undefined;

        const tableUserClasses = Array.from(table.classList).filter(c => c !== "table");
        table.className = cn(tableVariants({ variant, raised }), "table", ...tableUserClasses);
        table.setAttribute("data-scope", "table");
        table.setAttribute("data-part", "root");

        table.querySelectorAll(".table-header").forEach((el) => {
            const userClasses = Array.from(el.classList).filter(c => c !== "table-header");
            el.className = cn(tableHeader, "table-header", ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "header");
        });

        table.querySelectorAll(".table-body").forEach((el) => {
            const userClasses = Array.from(el.classList).filter(c => c !== "table-body");
            el.className = cn(tableBody, "table-body", ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "body");
        });

        table.querySelectorAll(".table-footer").forEach((el) => {
            const userClasses = Array.from(el.classList).filter(c => c !== "table-footer");
            el.className = cn(tableFooter, "table-footer", ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "footer");
        });

        table.querySelectorAll(".table-row").forEach((el) => {
            const userClasses = Array.from(el.classList).filter(c => c !== "table-row");
            el.className = cn(tableRow, "table-row", ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "row");
        });

        table.querySelectorAll(".table-head").forEach((el) => {
            const userClasses = Array.from(el.classList).filter(c => c !== "table-head");
            el.className = cn(tableHead, "table-head", ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "head");
        });

        // tableCellVariants gets variant+raised from parent table (inject equivalent)
        table.querySelectorAll(".table-cell").forEach((el) => {
            const userClasses = Array.from(el.classList).filter(c => c !== "table-cell");
            el.className = cn(tableCellVariants({ variant, raised }), "table-cell", ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "cell");
        });

        table.querySelectorAll(".table-caption").forEach((el) => {
            const userClasses = Array.from(el.classList).filter(c => c !== "table-caption");
            el.className = cn(tableCaption, "table-caption", ...userClasses);
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
