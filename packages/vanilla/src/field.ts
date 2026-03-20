import { cn } from "@midoneui/core/src/utils/cn";
import {
    fieldVariants,
    fieldGroup,
    fieldSet,
    fieldLegend,
    fieldLabel,
    fieldDescription,
    fieldTitle,
    fieldContent,
    fieldSeparator,
} from "@midoneui/core/src/styles/field.styles";
import { label } from "@midoneui/core/src/styles/label.styles";
import { separator } from "@midoneui/core/src/styles/separator.styles";

function initField() {
    document.querySelectorAll<HTMLElement>(".field-group").forEach((el) => {
        el.className = cn(fieldGroup, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-group");
    });

    document.querySelectorAll<HTMLElement>(".field-set").forEach((el) => {
        el.className = cn(fieldSet, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-set");
    });

    document.querySelectorAll<HTMLElement>(".field-legend").forEach((el) => {
        if (!el.getAttribute("data-variant")) el.setAttribute("data-variant", "legend");
        el.className = cn(fieldLegend, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-legend");
    });

    document.querySelectorAll<HTMLElement>(".field-content").forEach((el) => {
        el.className = cn(fieldContent, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-content");
    });

    document.querySelectorAll<HTMLElement>(".field-title").forEach((el) => {
        el.className = cn(fieldTitle, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-label");
    });

    document.querySelectorAll<HTMLElement>(".field-description").forEach((el) => {
        el.className = cn(fieldDescription, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-description");
    });

    document.querySelectorAll<HTMLElement>(".field-label").forEach((el) => {
        el.className = cn(label, fieldLabel, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-label");
    });

    document.querySelectorAll<HTMLElement>(".field").forEach((el) => {
        const orientation = (el.getAttribute("data-orientation") as any) ?? "vertical";
        el.setAttribute("data-orientation", orientation);
        el.setAttribute("role", "group");
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field");
        el.className = cn(fieldVariants({ orientation }), el.className);
    });

    document.querySelectorAll<HTMLElement>(".field-separator").forEach((el) => {
        el.className = cn(fieldSeparator, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-separator");

        // Collect existing children (separator content)
        const existingChildren = Array.from(el.childNodes);

        // Inject separator line
        const sepLine = document.createElement("div");
        sepLine.setAttribute("data-part", "separator");
        sepLine.setAttribute("role", "separator");
        sepLine.setAttribute("data-orientation", "horizontal");
        sepLine.setAttribute("data-decorative", "true");
        sepLine.className = cn(separator);
        el.insertBefore(sepLine, el.firstChild);

        // Wrap existing children in content span if any
        if (existingChildren.length > 0) {
            const span = document.createElement("span");
            span.setAttribute("data-part", "field-separator-content");
            existingChildren.forEach((n) => span.appendChild(n));
            el.appendChild(span);
            el.setAttribute("data-content", "true");
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initField);
} else {
    initField();
}
