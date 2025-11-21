import { CosmicButton } from "@/components/cosmic-button";
import structure from "@/assets/images/structure.svg";
import layer from "@/assets/images/layer.svg";

function Main() {
  return (
    <>
      <div className="h-[50rem] grid grid-cols-2 relative before:bg-accent before:bg-size-[75%] before:bg-center before:bg-no-repeat before:absolute before:inset-0 before:blur-2xl dark:before:opacity-50">
        <div className="relative flex flex-col gap-5 h-full justify-center after:w-1 after:h-16 after:bg-foreground/20 after:absolute after:-start-17 after:-ms-px after:inset-y-0 after:my-auto">
          <div className="[&>span]:bg-foreground/15 [&>span]:px-1 text-5xl/15">
            Build <span>faster</span> with Midone UI. <br />
            An open-source collection <br />
            of UI components for <span>React</span>.
          </div>
          <div className="text-2xl/9 opacity-60">
            Beautiful UI components for React, lovingly crafted with <br />
            the Midone Design System, Zag.js, and Tailwind CSS.
          </div>
          <CosmicButton className="w-60 mt-10">Get Started</CosmicButton>
        </div>
        <div className="relative">
          <img className="absolute inset-0 mt-24" src={structure} />
        </div>
        <div className="w-1.5 absolute inset-x-0 mx-auto bottom-0 flex flex-col gap-1">
          <div className="shadow-md shadow-foreground/50 h-6 bg-foreground/30 border border-foreground/80 mb-1"></div>
          <div className="shadow-md shadow-foreground/50 size-1.5 bg-foreground/30 border border-foreground/80"></div>
          <div className="shadow-md shadow-foreground/50 size-1.5 bg-foreground/30 border border-foreground/80"></div>
          <div className="shadow-md shadow-foreground/50 size-1.5 bg-foreground/30 border border-foreground/80"></div>
          <div className="shadow-md shadow-foreground/50 size-1.5 bg-foreground/30 border border-foreground/80"></div>
        </div>
      </div>
      <div className="relative pt-20 pb-32 mt-24 after:w-1 after:h-16 after:bg-foreground/20 after:absolute after:-start-17 after:-ms-px after:inset-y-0 after:my-auto">
        <div className="-mx-[1000%] inset-x-0 top-0 border-t border-foreground/15 absolute"></div>
        <div className="flex items-center relative before:bg-accent before:bg-size-[40%] before:bg-center before:bg-no-repeat before:absolute before:inset-0 before:-mt-[10%] before:-ms-[80%] before:blur-2xl dark:before:opacity-45">
          <div>
            <div className="text-xl opacity-50">Meet Midone UI</div>
            <div className="text-4xl/13 mt-6">
              Simplify the process of building <br />
              beautiful user interfaces
            </div>
          </div>
          <div className="text-xl/7 opacity-70 ms-auto pt-20">
            Midone UI is a professionally designed design system for Figma{" "}
            <br />
            and an open-source React UI library that combines Zag.js UI <br />
            primitives and Tailwind CSS.
            <br />
            <br />
            Enjoy a growing collection of pre-built, easy-to-use, <br />
            customizable components that can be copied and pasted into <br />{" "}
            your React projects.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-40 relative before:bg-accent before:bg-size-[40%] before:bg-center before:bg-no-repeat before:absolute before:inset-0 before:-mt-[10%] before:-me-[80%] before:blur-2xl dark:before:opacity-40">
          <div className="border border-foreground/15 w-full p-10 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
            <div className="text-xl">Fast & Modern</div>
            <div className="opacity-60 text-base mt-2">
              Stop building from scratch and save time with a component library
            </div>
          </div>
          <div className="border border-foreground/15 w-full p-10 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
            <div className="text-xl">Accessible</div>
            <div className="opacity-60 text-base mt-2">
              Stop building from scratch and save time with a component library
            </div>
          </div>
          <div className="border border-foreground/15 w-full p-10 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
            <div className="text-xl">Customizable</div>
            <div className="opacity-60 text-base mt-2">
              Stop building from scratch and save time with a component library
            </div>
          </div>
          <div className="border border-foreground/15 w-full p-10 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
            <div className="text-xl">Dark Mode</div>
            <div className="opacity-60 text-base mt-2">
              Stop building from scratch and save time with a component library
            </div>
          </div>
          <div className="border border-foreground/15 w-full p-10 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
            <div className="text-xl">Typescript</div>
            <div className="opacity-60 text-base mt-2">
              Stop building from scratch and save time with a component library
            </div>
          </div>
          <div className="border border-foreground/15 w-full p-10 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
            <div className="text-xl">Expert Design</div>
            <div className="opacity-60 text-base mt-2">
              Stop building from scratch and save time with a component library
            </div>
          </div>
        </div>
        <div className="-mx-[1000%] inset-x-0 bottom-0 border-t border-foreground/15 absolute"></div>
      </div>
      <div className="pt-40 pb-44 relative before:bg-accent before:bg-size-[75%] before:bg-center before:bg-no-repeat before:absolute before:inset-0 before:blur-2xl dark:before:opacity-45 after:w-1 after:h-16 after:bg-foreground/20 after:absolute after:-start-17 after:-ms-px after:inset-y-0 after:my-auto">
        <div className="flex flex-col items-center relative">
          <img className="size-31" src={layer} />
          <div className="text-4xl mt-5">Start your Journey Today</div>
          <div className="opacity-60 text-xl/7 text-center mt-7">
            Unleash the power of UiPress, a lightning-fast, feature-rich builder
            designed for excellence. With <br />
            over 50 intuitive blocks, smart patterns for easy reuse, global
            styles for brand consistency, and <br />a user-friendly interface,
            crafting stunning dashboards has never been easier.
          </div>
          <CosmicButton className="w-60 mt-20">Get Started</CosmicButton>
        </div>
      </div>
    </>
  );
}

export default Main;
