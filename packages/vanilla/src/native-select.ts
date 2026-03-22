import { cn } from "@midoneui/core/src/utils/cn";
import { input } from "@midoneui/core/src/styles/input.styles";
import { nativeSelect } from "@midoneui/core/src/styles/native-select.styles";

function initNativeSelect() {
    document.querySelectorAll<HTMLSelectElement>("select.native-select").forEach((el) => {
        const userClasses = Array.from(el.classList).filter(c => c !== "native-select");
        el.className = cn(input, nativeSelect, "native-select", ...userClasses);
        el.setAttribute("data-scope", "native-select");
        el.setAttribute("data-part", "root");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNativeSelect);
} else {
    initNativeSelect();
}
