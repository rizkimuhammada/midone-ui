export const paginationRoot = "flex gap-1";
export const paginationItem = [
  "h-10 px-4 py-2 inline-flex items-center justify-center rounded-xl cursor-pointer hover:bg-foreground/5",
  "data-[selected]:border data-[selected]:bg-background data-[selected]:border-(--color-foreground)/20 data-[selected]:font-medium data-[selected]:shadow-sm",
  "data-[disabled]:opacity-70",
];
export const paginationPrevTrigger = paginationItem;
export const paginationNextTrigger = paginationItem;
export const paginationEllipsis = paginationItem;
