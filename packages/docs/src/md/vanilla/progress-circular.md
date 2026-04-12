# Progress Circular

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div data-component="progress-circular-root" data-default-value="42" data-label="Progress Circular" data-circle-class="max-w-48" data-show-value-text="true"></div>
```

## Dependency

No external dependencies.

## Component

### progress-circular.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import {
    progressRoot,
    progressLabel,
    progressValueText,
    progressCircle,
    progressCircleTrack,
    progressCircleRange,
} from "@midoneui/core/src/styles/progress-circular.styles";
import { label } from "@midoneui/core/src/styles/label.styles";

const VIEW_BOX = 100;
const STROKE_WIDTH = 6;
const RADIUS = (VIEW_BOX - STROKE_WIDTH) / 2; // 47
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function initProgressCircular() {
    document.querySelectorAll<HTMLElement>('[data-component="progress-circular-root"]').forEach((root) => {
        const min = parseFloat(root.getAttribute("data-min") ?? "0");
        const max = parseFloat(root.getAttribute("data-max") ?? "100");
        const value = parseFloat(root.getAttribute("data-default-value") ?? root.getAttribute("data-value") ?? "0");
        const percent = (value - min) / (max - min);

        root.className = cn(progressRoot, root.className);
        root.setAttribute("data-scope", "progress");
        root.setAttribute("data-part", "root");
        root.setAttribute("aria-valuemin", String(min));
        root.setAttribute("aria-valuemax", String(max));
        root.setAttribute("aria-valuenow", String(value));

        let labelEl = root.querySelector<HTMLElement>('[data-component="progress-circular-label"]');
        const dataLabel = root.getAttribute("data-label");
        if (!labelEl && dataLabel) {
            labelEl = document.createElement("label");
            labelEl.setAttribute("data-component", "progress-circular-label");
            labelEl.textContent = dataLabel;
            root.appendChild(labelEl);
        }

        if (labelEl) {
            labelEl.className = cn(label, progressLabel, labelEl.className);
            labelEl.setAttribute("data-scope", "progress");
            labelEl.setAttribute("data-part", "label");
        }

        let svgEl = root.querySelector<SVGSVGElement>('[data-component="progress-circular-circle"]');
        if (!svgEl) {
            svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgEl.setAttribute("data-component", "progress-circular-circle");
            const circleClass = root.getAttribute("data-circle-class");
            if (circleClass) svgEl.setAttribute("class", circleClass);

            const track = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            track.setAttribute("data-component", "progress-circular-circle-track");
            svgEl.appendChild(track);

            const range = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            range.setAttribute("data-component", "progress-circular-circle-range");
            svgEl.appendChild(range);

            root.appendChild(svgEl);
        }

        let valueTextEl = root.querySelector<HTMLElement>(
            '[data-component="progress-circular-value-text"]'
        );
        const dataShowValueText =
            root.getAttribute("data-show-value-text") === "true";

        if (!valueTextEl && dataShowValueText) {
            valueTextEl = document.createElement("div");
            valueTextEl.setAttribute(
                "data-component",
                "progress-circular-value-text"
            );
            root.appendChild(valueTextEl);
        }

        if (valueTextEl) {
            valueTextEl.className = cn(progressValueText, valueTextEl.className);
            valueTextEl.setAttribute("data-scope", "progress");
            valueTextEl.setAttribute("data-part", "value-text");
            valueTextEl.textContent = `${Math.round(value)}%`;
        }

        svgEl = root.querySelector<SVGSVGElement>('[data-component="progress-circular-circle"]');
        if (!svgEl) return;

        // Hide until attributes are set, then fade in
        svgEl.style.visibility = "hidden";
        svgEl.style.opacity = "0";

        // SVG element — must use setAttribute for class
        svgEl.setAttribute("class", cn(progressCircle, svgEl.getAttribute("class") ?? ""));
        svgEl.setAttribute("data-scope", "progress");
        svgEl.setAttribute("data-part", "circle");
        svgEl.setAttribute("viewBox", `0 0 ${VIEW_BOX} ${VIEW_BOX}`);
        svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgEl.style.cssText = "width:100%;height:100%;";

        const cx = String(VIEW_BOX / 2);
        const cy = String(VIEW_BOX / 2);
        const r = String(RADIUS);
        const sw = String(STROKE_WIDTH);

        let trackEl = root.querySelector<SVGCircleElement>('[data-component="progress-circular-circle-track"]');
        if (trackEl) {
            trackEl.setAttribute("class", cn(progressCircleTrack, trackEl.getAttribute("class") ?? ""));
            trackEl.setAttribute("data-scope", "progress");
            trackEl.setAttribute("data-part", "circle-track");
            trackEl.setAttribute("cx", cx);
            trackEl.setAttribute("cy", cy);
            trackEl.setAttribute("r", r);
            trackEl.setAttribute("fill", "none");
            trackEl.setAttribute("stroke-width", sw);
        }

        let rangeEl = root.querySelector<SVGCircleElement>('[data-component="progress-circular-circle-range"]');
        if (rangeEl) {
            const dashOffset = CIRCUMFERENCE * (1 - percent);
            rangeEl.setAttribute("class", cn(progressCircleRange, rangeEl.getAttribute("class") ?? ""));
            // Disable CSS transition during initial attribute setup
            rangeEl.style.transition = "none";
            rangeEl.setAttribute("data-scope", "progress");
            rangeEl.setAttribute("data-part", "circle-range");
            rangeEl.setAttribute("cx", cx);
            rangeEl.setAttribute("cy", cy);
            rangeEl.setAttribute("r", r);
            rangeEl.setAttribute("fill", "none");
            rangeEl.setAttribute("stroke-width", sw);
            rangeEl.setAttribute("stroke-dasharray", String(CIRCUMFERENCE));
            rangeEl.setAttribute("stroke-dashoffset", String(dashOffset));
            rangeEl.setAttribute("transform", `rotate(-90 ${VIEW_BOX / 2} ${VIEW_BOX / 2})`);
        }

        // Make visible + fade in, then re-enable range transition
        requestAnimationFrame(() => {
            svgEl.style.visibility = "";
            svgEl.style.transition = "opacity 0.4s ease";
            if (rangeEl) rangeEl.style.transition = "";
            requestAnimationFrame(() => {
                svgEl.style.opacity = "1";
            });
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProgressCircular);
} else {
    initProgressCircular();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div data-component="progress-circular-root" data-default-value="42" data-label="Progress Circular" data-circle-class="max-w-48" data-show-value-text="true"></div>
```

