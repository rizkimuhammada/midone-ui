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
        el.className = cn(tableContainer, el.className);
        el.setAttribute("data-scope", "table");
        el.setAttribute("data-part", "container");
    });

    // Init each table — process children from within table context so
    // .table-cell can inherit the table's variant/raised (replicating Vue's inject)
    document.querySelectorAll(".table").forEach((table) => {
        const variant = table.getAttribute("data-variant") as any || "default";
        const raised = table.getAttribute("data-raised") as any || undefined;

        table.className = cn(tableVariants({ variant, raised }), table.className);
        table.setAttribute("data-scope", "table");
        table.setAttribute("data-part", "root");

        table.querySelectorAll(".table-header").forEach((el) => {
            el.className = cn(tableHeader, el.className);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "header");
        });

        table.querySelectorAll(".table-body").forEach((el) => {
            el.className = cn(tableBody, el.className);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "body");
        });

        table.querySelectorAll(".table-footer").forEach((el) => {
            el.className = cn(tableFooter, el.className);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "footer");
        });

        table.querySelectorAll(".table-row").forEach((el) => {
            el.className = cn(tableRow, el.className);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "row");
        });

        table.querySelectorAll(".table-head").forEach((el) => {
            el.className = cn(tableHead, el.className);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "head");
        });

        // tableCellVariants gets variant+raised from parent table (inject equivalent)
        table.querySelectorAll(".table-cell").forEach((el) => {
            el.className = cn(tableCellVariants({ variant, raised }), el.className);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "cell");
        });

        table.querySelectorAll(".table-caption").forEach((el) => {
            el.className = cn(tableCaption, el.className);
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
