import { cn } from "@midoneui/core/src/utils/cn";

export function handleAsChild(element: HTMLElement) {
    const asChild =
        element.hasAttribute("as-child") ||
        element.hasAttribute("data-as-child");

    if (asChild) {
        const firstChild = element.firstElementChild as HTMLElement;
        if (firstChild) {
            // Copy all attributes from parent to firstChild (part, scope, etc)
            Array.from(element.attributes).forEach((attr) => {
                if (
                    attr.name !== "class" &&
                    attr.name !== "as-child" &&
                    attr.name !== "data-as-child"
                ) {
                    firstChild.setAttribute(attr.name, attr.value);
                }
            });
            // Merge classes: parent's custom classes + child's classes
            // We strip 'as-child' from the parent classes
            const parentClasses = element.className
                .replace("as-child", "")
                .replace("data-as-child", "");
            firstChild.className = cn(parentClasses, firstChild.className);
            element.replaceWith(firstChild);
            return firstChild;
        }
    }
    return element;
}
