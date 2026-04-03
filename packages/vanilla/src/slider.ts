import { cn } from "@midoneui/core/src/utils/cn";
import {
    sliderRoot,
    sliderLabel,
    sliderValueText,
    sliderControl,
    sliderTrack,
    sliderRange,
    sliderThumb,
    sliderHiddenInput,
    sliderMarkerGroup,
    sliderMarker,
} from "@midoneui/core/src/styles/slider.styles";
import { label } from "@midoneui/core/src/styles/label.styles";

function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

function initSlider() {
    document.querySelectorAll<HTMLElement>('[data-component="slider-root"]').forEach((root) => {
        const min = parseFloat(root.getAttribute("data-min") ?? "0");
        const max = parseFloat(root.getAttribute("data-max") ?? "100");
        const step = parseFloat(root.getAttribute("data-step") ?? "1");
        const valueAttr = root.getAttribute("data-default-value") ?? root.getAttribute("data-value") ?? "[0]";
        const values: number[] = JSON.parse(valueAttr);

        root.className = cn(sliderRoot, root.className);
        root.setAttribute("data-scope", "slider");
        root.setAttribute("data-part", "root");

        let labelEl = root.querySelector<HTMLElement>('[data-component="slider-label"]');
        const dataLabel = root.getAttribute("data-label");
        const type = root.getAttribute("data-type") ?? "single";

        if (!labelEl && dataLabel) {
            labelEl = document.createElement("div");
            labelEl.setAttribute("data-component", "slider-label");
            labelEl.textContent = dataLabel;
            root.insertBefore(labelEl, root.firstChild);
        }

        if (labelEl) labelEl.className = cn(label, sliderLabel, labelEl.className);

        const valueTextEl = root.querySelector<HTMLElement>('[data-component="slider-value-text"]');
        if (valueTextEl) valueTextEl.className = cn(sliderValueText, valueTextEl.className);

        let controlEl = root.querySelector<HTMLElement>('[data-component="slider-control"]');
        let trackEl = root.querySelector<HTMLElement>('[data-component="slider-track"]');
        let rangeEl = root.querySelector<HTMLElement>('[data-component="slider-range"]');
        let thumbEls = Array.from(root.querySelectorAll<HTMLElement>('[data-component="slider-thumb"]'));
        const markerGroupEl = root.querySelector<HTMLElement>('[data-component="slider-marker-group"]');

        if (!controlEl) {
            controlEl = document.createElement("div");
            controlEl.setAttribute("data-component", "slider-control");
            
            if (!trackEl) {
                trackEl = document.createElement("div");
                trackEl.setAttribute("data-component", "slider-track");
                rangeEl = document.createElement("div");
                rangeEl.setAttribute("data-component", "slider-range");
                trackEl.appendChild(rangeEl);
                controlEl.appendChild(trackEl);
            } else {
                controlEl.appendChild(trackEl);
            }

            if (thumbEls.length === 0) {
                const thumbCount = type === "range" ? 2 : 1;
                for (let i = 0; i < thumbCount; i++) {
                    const thumb = document.createElement("div");
                    thumb.setAttribute("data-component", "slider-thumb");
                    controlEl.appendChild(thumb);
                }
                thumbEls = Array.from(controlEl.querySelectorAll<HTMLElement>('[data-component="slider-thumb"]'));
            }

            const firstSlotChild = Array.from(root.children).find(
                (el) => !["slider-label", "slider-control"].includes(el.getAttribute("data-component") ?? "")
            ) as HTMLElement | undefined;
            if (firstSlotChild) {
                root.insertBefore(controlEl, firstSlotChild);
            } else {
                root.appendChild(controlEl);
            }
        }

        if (!controlEl || !trackEl || !rangeEl) return;

        controlEl.className = cn(sliderControl, controlEl.className);
        controlEl.style.cssText = "position:relative;min-height:1rem;display:flex;align-items:center;";
        controlEl.setAttribute("data-scope", "slider");
        controlEl.setAttribute("data-part", "control");

        trackEl.className = cn(sliderTrack, trackEl.className);
        trackEl.style.position = "relative";
        trackEl.setAttribute("data-scope", "slider");
        trackEl.setAttribute("data-part", "track");

        rangeEl.className = cn(sliderRange, rangeEl.className);
        rangeEl.setAttribute("data-scope", "slider");
        rangeEl.setAttribute("data-part", "range");

        thumbEls.forEach((thumb, i) => {
            thumb.className = cn(sliderThumb, thumb.className);
            thumb.style.cssText = "position:absolute;top:0;bottom:0;margin-top:auto;margin-bottom:auto;";
            thumb.setAttribute("data-scope", "slider");
            thumb.setAttribute("data-part", "thumb");
            thumb.setAttribute("data-index", String(i));
            thumb.setAttribute("tabindex", "0");

            // Inject hidden range input
            const hiddenInput = document.createElement("input");
            hiddenInput.type = "range";
            hiddenInput.className = cn(sliderHiddenInput);
            hiddenInput.style.display = "none";
            hiddenInput.min = String(min);
            hiddenInput.max = String(max);
            hiddenInput.step = String(step);
            hiddenInput.value = String(values[i] ?? 0);
            thumb.appendChild(hiddenInput);
        });

        if (markerGroupEl) {
            markerGroupEl.className = cn(sliderMarkerGroup, markerGroupEl.className);
            markerGroupEl.style.position = "relative";
            markerGroupEl.setAttribute("data-scope", "slider");
            markerGroupEl.setAttribute("data-part", "marker-group");
            markerGroupEl.querySelectorAll<HTMLElement>('[data-component="slider-marker"]').forEach((marker) => {
                marker.className = cn(sliderMarker, marker.className);
                const val = parseFloat(marker.getAttribute("data-value") ?? "0");
                const pct = ((val - min) / (max - min)) * 100;
                marker.style.cssText = `position:absolute;left:${pct}%;transform:translateX(-50%);`;
                marker.setAttribute("data-scope", "slider");
                marker.setAttribute("data-part", "marker");
            });
        }

        function percentOf(value: number) {
            return (value - min) / (max - min);
        }

        function updateUI() {
            if (valueTextEl) {
                valueTextEl.textContent = values.length === 1 ? String(values[0]) : values.join(" – ");
            }
            thumbEls.forEach((thumb, i) => {
                const pct = percentOf(values[i] ?? 0) * 100;
                thumb.style.left = `${pct}%`;
                thumb.style.transform = "translateX(-50%)";
                const hiddenInput = thumb.querySelector<HTMLInputElement>("input");
                if (hiddenInput) hiddenInput.value = String(values[i]);
            });
            if (values.length === 1) {
                rangeEl!.style.left = "0";
                rangeEl!.style.width = `${percentOf(values[0]) * 100}%`;
            } else {
                const percents = values.map(percentOf);
                const lo = Math.min(...percents) * 100;
                const hi = Math.max(...percents) * 100;
                rangeEl!.style.left = `${lo}%`;
                rangeEl!.style.width = `${hi - lo}%`;
            }
        }

        function valueFromClientX(clientX: number, thumbIndex: number) {
            const rect = trackEl!.getBoundingClientRect();
            const ratio = (clientX - rect.left) / rect.width;
            const raw = ratio * (max - min) + min;
            const stepped = Math.round(raw / step) * step;
            let clamped = clamp(stepped, min, max);
            if (values.length > 1) {
                if (thumbIndex === 0) clamped = clamp(clamped, min, values[1]);
                else if (thumbIndex === 1) clamped = clamp(clamped, values[0], max);
            }
            return clamped;
        }

        thumbEls.forEach((thumb, i) => {
            thumb.addEventListener("mousedown", (e) => {
                e.preventDefault();
                const onMove = (e: MouseEvent) => {
                    values[i] = valueFromClientX(e.clientX, i);
                    updateUI();
                };
                const onUp = () => {
                    document.removeEventListener("mousemove", onMove);
                    document.removeEventListener("mouseup", onUp);
                };
                document.addEventListener("mousemove", onMove);
                document.addEventListener("mouseup", onUp);
            });

            thumb.addEventListener("keydown", (e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowUp") {
                    values[i] = clamp(values[i] + step, min, max);
                    updateUI();
                } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
                    values[i] = clamp(values[i] - step, min, max);
                    updateUI();
                }
            });
        });

        trackEl.addEventListener("click", (e) => {
            let targetIndex = 0;
            if (values.length > 1) {
                const rect = trackEl.getBoundingClientRect();
                const clickVal = ((e.clientX - rect.left) / rect.width) * (max - min) + min;
                let nearestDist = Infinity;
                values.forEach((v, i) => {
                    const dist = Math.abs(v - clickVal);
                    if (dist < nearestDist) { nearestDist = dist; targetIndex = i; }
                });
            }
            values[targetIndex] = valueFromClientX(e.clientX, targetIndex);
            updateUI();
        });

        updateUI();
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSlider);
} else {
    initSlider();
}
