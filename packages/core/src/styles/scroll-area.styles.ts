export const scrollAreaRoot = "relative overflow-hidden";
export const scrollAreaViewport = "h-full w-full rounded-[inherit]";
export const scrollAreaScrollbar = [
    "flex touch-none select-none transition-colors",
    "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5 data-[orientation=vertical]:border-l data-[orientation=vertical]:border-l-transparent data-[orientation=vertical]:p-[1px]",
    "data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:p-[1px]",
];
export const scrollAreaThumb = "relative flex-1 rounded-full bg-foreground/20 hover:bg-foreground/30 transition-colors";
export const scrollAreaCorner = "bg-black/10";
