import { writable } from "svelte/store";

export const currentRoute = writable(
    window.location.hash.slice(1) || "/button"
);

window.addEventListener("hashchange", () => {
    currentRoute.set(window.location.hash.slice(1) || "/button");
});

export function navigate(path: string) {
    window.location.hash = path;
}
