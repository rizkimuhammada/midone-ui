import { cn } from "./cn";

/**
 * Utility to sync variants and classes from a host element to its first child
 * if 'as-child' attribute is present.
 */
export function syncSlot(host: HTMLElement, variantsClass: string, initialClass: string, extraAttrs: Record<string, string> = {}) {
    const asChild = host.hasAttribute('as-child') || host.tagName.toLowerCase() === 'm-alert-icon';

    if (asChild) {
        const child = host.firstElementChild as HTMLElement;
        if (child) {
            host.style.display = 'contents';
            host.className = initialClass;

            const childInitialClass = child.getAttribute('data-initial-class') || child.getAttribute('class') || '';
            if (!child.hasAttribute('data-initial-class')) {
                child.setAttribute('data-initial-class', childInitialClass);
            }

            child.className = cn(variantsClass, initialClass, childInitialClass);

            Object.entries(extraAttrs).forEach(([key, val]) => {
                child.setAttribute(key, val);
            });
        }
    } else {
        host.style.display = '';
        host.className = cn(variantsClass, initialClass);
        Object.entries(extraAttrs).forEach(([key, val]) => {
            host.setAttribute(key, val);
        });
    }
}
