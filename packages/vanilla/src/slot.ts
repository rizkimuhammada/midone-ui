import { cn } from "@midoneui/core/src/utils/cn";

export function handleAsChild(element: HTMLElement) {
    const asChild =
        element.hasAttribute("as-child") ||
        element.hasAttribute("data-as-child");

    if (asChild) {
        const firstChild = element.firstElementChild as HTMLElement;
        if (firstChild) {
            // Copy all attributes from parent to firstChild (part, scope, etc)
            // Skip data-component if child already has its own identity
            Array.from(element.attributes).forEach((attr) => {
                if (
                    attr.name !== "class" &&
                    attr.name !== "as-child" &&
                    attr.name !== "data-as-child" &&
                    !(attr.name === "data-component" && firstChild.hasAttribute("data-component"))
                ) {
                    firstChild.setAttribute(attr.name, attr.value);
                }
            });
            // Merge classes: parent's custom classes + child's classes
            // We strip 'as-child' from the parent classes
            const parentClasses = element.getAttribute("class")?.replace("data-as-child", "").replace("as-child", "") || "";
            const childClasses = firstChild.getAttribute("class") || "";
            firstChild.setAttribute("class", cn(parentClasses, childClasses));
            element.replaceWith(firstChild);
            return firstChild;
        }
    }
    return element;
}
