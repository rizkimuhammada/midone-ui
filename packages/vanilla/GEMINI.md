# Midone UI: Vanilla JavaScript Implementation Blueprint

This document records the architectural standards and implementation details for the Vanilla JavaScript components, ensuring 1:1 parity with the Vue counterpart.

---

## 🏗️ General Architectural Standards

1.  **Naming Convention**: Must use **kebab-case** for class names (e.g., `.button`, `.accordion-item`, `.accordion-content`).
2.  **Property Mapping (Props)**: Use **`data-*` attributes** to define component variations instead of reactive props (e.g., `data-variant`, `data-look`, `data-size`, `data-state`).
3.  **Core Styles Dependency**: All components must fetch their base styles from `@midoneui/core/src/styles` using CVA functions (e.g., `buttonVariants`).
4.  **Class Conflict Resolution**: Use the **`cn`** utility function (wrapping `twMerge`) from core to combine dynamic classes and resolve Tailwind utility class conflicts (crucial for backgrounds and borders).

---

## 📦 Component Implementation Records

### 1. Button
*   **Implementation Strategy**: Two-step synchronization (Verbatim Raw Copy -> Vanilla Transformation Script).
*   **Parity**: 100% identical with `Button.vue`.
*   **Attributes**:
    *   `data-variant`: `primary`, `secondary`, `success`, `danger`, `pending`, `warning`.
    *   `data-size`: `sm`, `default`, `lg`, `xl`.
    *   `data-look`: `flat`, `outline`, `filled`, `text`.
    *   `data-loading`: Auto-injects spinner and disables interaction.
*   **SVG Icons**: Direct SVG injection for native browser rendering.

### 2. Accordion
*   **Parity**: Matches the complex Vue shadow rendering using pseudo-elements (`before` and `after`).
*   **Attributes**:
    *   `data-state`: `open` or `closed` to control content visibility.
    *   `data-expanded`: Optional attribute on `.accordion-item` to force an item to be open by default on load.
*   **Visual Logic**: Combines `shadow-md/5`, `bg-gradient-to-b`, and `border-foreground/10` for a premium glassmorphism effect.

### 3. Alert
*   **Implementation Strategy**: Two-step synchronization (Raw Copy -> Vanilla Sync).
*   **Structure**: 1:1 match with `Alert.vue`.
*   **Attributes**:
    *   `data-variant`: Matches core variants.
    *   `data-look`: `flat`, `outline`, `filled`, `text`.
*   **Logic (`alert.ts`)**:
    *   **Auto-part detection**: Internally sets `data-part="icon"` for correct padding.
    *   **Dismissable**: Opacity transition + DOM removal on click.
    *   **Auto Icon**: Injects Lucide 'X' if the trigger is empty.

### 4. Box
*   **Implementation Strategy**: Two-step synchronization (Raw Copy -> Vanilla Sync).
*   **Structure**: Uses `.box` as root.
*   **Attributes**:
    *   `data-raised`: `single`, `double`.
*   **Logic (`box.ts`)**: Simple application of `boxVariants({ raised })` using `cn()` to preserve custom classes like `w-70`.

---

## 🛠️ Implementation Logic Example (JS/TS)

Each component is initialized via a helper script (such as `button.ts` or `accordion.ts`) following this pattern:

```typescript
import { cn } from "@midoneui/core/src/utils/cn";
import { buttonVariants } from "@midoneui/core/styles/button.styles";

function init() {
    document.querySelectorAll(".button").forEach((btn) => {
        const variant = btn.getAttribute("data-variant") || "primary";
        const look = btn.getAttribute("data-look") || "flat";
        
        // Use cn to resolve conflicts; instance classes (from HTML) override variant classes
        const variantClasses = buttonVariants({ variant, look });
        btn.className = cn(variantClasses, btn.className);
    });
}
```

---

## 📚 List of Related Files
*   `packages/vanilla/GEMINI.md` (This document)
*   `packages/vanilla/src/button.ts` (Button Logic)
*   `packages/vanilla/src/accordion.ts` (Accordion Logic)
*   `packages/vanilla/src/alert.ts` (Alert Logic)
*   `packages/vanilla/src/box.ts` (Box Logic)
*   `packages/vanilla/Button.html` (Button Showcase)
*   `packages/vanilla/Accordion.html` (Accordion Showcase)
*   `packages/vanilla/Alert.html` (Alert Showcase)
*   `packages/vanilla/Box.html` (Box Showcase)
