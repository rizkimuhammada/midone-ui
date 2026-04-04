import { cn } from "@midoneui/core/src/utils/cn";
import {
    progressRoot,
    progressLabel,
    progressValueText,
    progressTrack,
    progressRange,
} from "@midoneui/core/src/styles/progress-linear.styles";
import { label } from "@midoneui/core/src/styles/label.styles";

function initProgressLinear() {
    document.querySelectorAll<HTMLElement>('[data-component="progress-linear-root"]').forEach((root) => {
        const min = parseFloat(root.getAttribute("data-min") ?? "0");
        const max = parseFloat(root.getAttribute("data-max") ?? "100");
        const value = parseFloat(root.getAttribute("data-default-value") ?? root.getAttribute("data-value") ?? "0");
        const percent = ((value - min) / (max - min)) * 100;

        root.className = cn(progressRoot, root.className);
        root.setAttribute("data-scope", "progress");
        root.setAttribute("data-part", "root");
        root.setAttribute("role", "progressbar");
        root.setAttribute("aria-valuemin", String(min));
        root.setAttribute("aria-valuemax", String(max));
        root.setAttribute("aria-valuenow", String(value));

        let labelEl = root.querySelector<HTMLElement>('[data-component="progress-linear-label"]');
        const dataLabel = root.getAttribute("data-label");
        if (!labelEl && dataLabel) {
            labelEl = document.createElement("label");
            labelEl.setAttribute("data-component", "progress-linear-label");
            labelEl.textContent = dataLabel;
            root.appendChild(labelEl);
        }

        if (labelEl) {
            labelEl.className = cn(label, progressLabel, labelEl.className);
            labelEl.setAttribute("data-scope", "progress");
            labelEl.setAttribute("data-part", "label");
        }

        let trackEl = root.querySelector<HTMLElement>('[data-component="progress-linear-track"]');
        let rangeEl = root.querySelector<HTMLElement>('[data-component="progress-linear-range"]');
        if (!trackEl) {
            trackEl = document.createElement("div");
            trackEl.setAttribute("data-component", "progress-linear-track");
            const trackClass = root.getAttribute("data-track-class");
            if (trackClass) trackEl.setAttribute("class", trackClass);

            rangeEl = document.createElement("div");
            rangeEl.setAttribute("data-component", "progress-linear-range");
            trackEl.appendChild(rangeEl);
            root.appendChild(trackEl);
        }

        if (trackEl) {
            trackEl.className = cn(progressTrack, trackEl.className);
            trackEl.setAttribute("data-scope", "progress");
            trackEl.setAttribute("data-part", "track");
            trackEl.style.position = "relative";
        }

        if (rangeEl) {
            rangeEl.className = cn(progressRange, rangeEl.className);
            rangeEl.setAttribute("data-scope", "progress");
            rangeEl.setAttribute("data-part", "range");
            rangeEl.style.width = `${percent}%`;
        }

        let valueTextEl = root.querySelector<HTMLElement>(
            '[data-component="progress-linear-value-text"]'
        );
        const dataShowValueText =
            root.getAttribute("data-show-value-text") === "true";

        if (!valueTextEl && dataShowValueText) {
            valueTextEl = document.createElement("div");
            valueTextEl.setAttribute(
                "data-component",
                "progress-linear-value-text"
            );
            root.appendChild(valueTextEl);
        }

        if (valueTextEl) {
            valueTextEl.className = cn(progressValueText, valueTextEl.className);
            valueTextEl.setAttribute("data-scope", "progress");
            valueTextEl.setAttribute("data-part", "value-text");
            valueTextEl.textContent = `${Math.round(value)}%`;
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProgressLinear);
} else {
    initProgressLinear();
}
