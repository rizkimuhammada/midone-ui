import { cn } from "@midoneui/core/src/utils/cn";
import {
  fileIconRoot,
  fileIconIcon,
  fileIconLabel,
  fileIconImage,
  fileIconImg,
} from "@midoneui/core/src/styles/file-icon.styles";

export function initFileIcon() {
  document
    .querySelectorAll<HTMLElement>('[data-component="file-icon"]')
    .forEach((root) => {
      const variant = (root.getAttribute("data-variant") as any) || "file";
      const type = root.getAttribute("data-type") || "";
      const src = root.getAttribute("data-src") || "";

      root.className = cn(fileIconRoot, root.className);
      root.setAttribute("data-scope", "file-icon");
      root.setAttribute("data-part", "root");

      if (root.children.length === 0) {
        const iconEl = document.createElement("div");
        iconEl.className = cn(fileIconIcon({ variant }));
        iconEl.setAttribute("data-scope", "file-icon");
        iconEl.setAttribute("data-part", "icon");

        if (variant === "file") {
          const labelEl = document.createElement("div");
          labelEl.className = cn(fileIconLabel);
          labelEl.setAttribute("data-scope", "file-icon");
          labelEl.setAttribute("data-part", "label");
          labelEl.textContent = type;
          iconEl.appendChild(labelEl);
        } else if (variant === "image") {
          const imageWrapper = document.createElement("div");
          imageWrapper.className = cn(fileIconImage);
          imageWrapper.setAttribute("data-scope", "file-icon");
          imageWrapper.setAttribute("data-part", "image");

          const imgEl = document.createElement("img");
          imgEl.className = cn(fileIconImg);
          imgEl.src = src;
          imgEl.alt = variant;
          imgEl.setAttribute("data-scope", "file-icon");
          imgEl.setAttribute("data-part", "img");

          imageWrapper.appendChild(imgEl);
          iconEl.appendChild(imageWrapper);
        }

        root.appendChild(iconEl);
      }
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFileIcon);
} else {
  initFileIcon();
}
