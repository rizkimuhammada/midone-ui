import {
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

function Main() {
  return (
    <TooltipRoot>
      <TooltipTrigger>Hover Me</TooltipTrigger>
      <TooltipContent>I am a tooltip!</TooltipContent>
    </TooltipRoot>
  );
}

export default Main;
