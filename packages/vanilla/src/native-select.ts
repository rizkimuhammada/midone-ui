import { cn } from "@midoneui/core/src/utils/cn";
import { input } from "@midoneui/core/src/styles/input.styles";
import { nativeSelect } from "@midoneui/core/src/styles/native-select.styles";

function initNativeSelect() {
    document.querySelectorAll<HTMLSelectElement>('[data-component="native-select"]').forEach((el) => {
        el.className = cn(input, nativeSelect, el.className);
        el.setAttribute("data-scope", "native-select");
        el.setAttribute("data-part", "root");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNativeSelect);
} else {
    initNativeSelect();
}
