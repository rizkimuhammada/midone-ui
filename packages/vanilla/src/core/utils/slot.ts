import { cn } from "./cn";

/**
 * Utility to sync variants and classes from a host element to its first child
 * if 'as-child' attribute is present. Also handles Zag.js props like event listeners.
 */
export function syncSlot(host: HTMLElement, variantsClass: string, initialClass: string, extraAttrs: Record<string, any> = {}, manualTarget?: HTMLElement) {
    const asChild = host.hasAttribute('as-child');
    const target = manualTarget || (asChild ? host.firstElementChild : host) as HTMLElement;

    if (!target) return;

    if (asChild) {
        host.style.display = 'contents';
        host.className = initialClass;

        const childInitialClass = target.getAttribute('data-initial-class') || target.getAttribute('class') || '';
        if (!target.hasAttribute('data-initial-class')) {
            target.setAttribute('data-initial-class', childInitialClass);
        }

        target.className = cn(variantsClass, initialClass, childInitialClass);
    } else {
        host.style.display = '';
        host.className = cn(variantsClass, initialClass);
    }

    // Apply props (Robust logic for event listeners and attributes)
    Object.entries(extraAttrs).forEach(([key, val]) => {
        if (key === 'class' || key === 'className') return;

        // Handle Event Listeners (Zag.js onLoad, onClick, etc.)
        if (key.startsWith('on')) {
            const eventName = key.slice(2).toLowerCase();
            const listenerKey = `_zag_${eventName}`;
            const targetEl = target as any;

            // Remove old listener to avoid duplicates
            if (targetEl[listenerKey]) {
                target.removeEventListener(eventName, targetEl[listenerKey]);
            }

            // Add new listener if it's a function
            if (typeof val === 'function') {
                targetEl[listenerKey] = val;
                target.addEventListener(eventName, val as any);
            }
            return;
        }

        // Handle Attributes
        if (val === undefined || val === null || val === false) {
            target.removeAttribute(key);
        } else if (typeof val === 'boolean') {
            // Boolean attributes in HTML should be present without value if true, removed if false
            // Except for aria/data attributes which should be "true"/"false" strings
            if (key.startsWith('aria-') || key.startsWith('data-')) {
                target.setAttribute(key, String(val));
            } else if (val) {
                target.setAttribute(key, '');
            }
        } else {
            target.setAttribute(key, String(val));
        }
    });
}
