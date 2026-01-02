export const menuRoot = "w-full";
export const menuTrigger = "w-full";
export const menuIndicator = "ms-auto transition data-[state=open]:rotate-180";
export const menuPositioner = "!z-50";
export const menuContent =
  "min-w-46 w-(--reference-width) p-0 z-(--layer-index) [&>div]:flex [&>div]:flex-col [&>div]:gap-2.5 [&>div]:p-4 [&>div]:max-h-78 [&>div]:overflow-y-auto";
export const menuItem = [
  // Default
  "flex items-center py-1 px-2.5 -mx-1.5 -my-1 hover:bg-foreground/[.04] rounded-lg cursor-pointer",

  // Nested menu chevron
  "[&>svg]:size-4 [&>svg]:stroke-[1.3] [&>svg]:-me-1 [&>svg]:ms-auto",

  // Shortcut
  "[&>div:nth-of-type(2)]:text-foreground/50 [&>div:nth-of-type(2)]:text-xs [&>div:nth-of-type(2)]:ms-auto",

  // Disabled
  "data-disabled:opacity-50 data-disabled:hover:bg-background data-disabled:cursor-not-allowed",

  // Checkbox
  "[&[data-type=checkbox]>div:nth-of-type(1)]:ps-7 [&[data-type=checkbox]>div:nth-of-type(1)_svg]:stroke-3 [&[data-type=checkbox]>div:nth-of-type(1)]:before:absolute [&[data-type=checkbox]>div:nth-of-type(1)]:before:size-4 [&[data-type=checkbox]>div:nth-of-type(1)]:before:border [&[data-type=checkbox]>div:nth-of-type(1)]:before:shadow-md/5 [&[data-type=checkbox]>div:nth-of-type(1)]:before:border-foreground/10 [&[data-type=checkbox]>div:nth-of-type(1)]:before:rounded-md [&[data-type=checkbox]>div:nth-of-type(1)]:before:inset-y-0 [&[data-type=checkbox]>div:nth-of-type(1)]:before:my-auto [&[data-type=checkbox]>div:nth-of-type(1)]:before:start-0",

  // Radio
  "[&[data-type=radio]>div:nth-of-type(1)]:ps-7 [&[data-type=radio]>div:nth-of-type(1)_svg]:stroke-10 [&[data-type=radio]>div:nth-of-type(1)]:before:absolute [&[data-type=radio]>div:nth-of-type(1)]:before:size-4 [&[data-type=radio]>div:nth-of-type(1)]:before:border [&[data-type=radio]>div:nth-of-type(1)]:before:shadow-md/5 [&[data-type=radio]>div:nth-of-type(1)]:before:border-foreground/10 [&[data-type=radio]>div:nth-of-type(1)]:before:rounded-full [&[data-type=radio]>div:nth-of-type(1)]:before:inset-y-0 [&[data-type=radio]>div:nth-of-type(1)]:before:my-auto [&[data-type=radio]>div:nth-of-type(1)]:before:start-0",

  // Checkbox & radio svg
  "[&>div:nth-of-type(1)]:relative [&>div:nth-of-type(1)_svg]:absolute [&>div:nth-of-type(1)_svg]:start-0.5 [&>div:nth-of-type(1)_svg]:inset-y-0 [&>div:nth-of-type(1)_svg]:my-auto [&>div:nth-of-type(1)_svg]:size-3",
];
export const menuRadioItemGroup = "flex flex-col gap-3";
export const menuItemGroupLabel =
  "-mx-4 px-4 -mt-4 py-2.5 border-b border-foreground/10 text-foreground/70";
export const menuSeparator = "border-foreground/10 -mx-4 my-1";
