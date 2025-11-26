import Menu from "@/components/menu";
import { CosmicButton } from "@/components/cosmic-button";
import structure from "@/assets/images/structure.svg";
import layer from "@/assets/images/layer.svg";
import { Link } from "react-router";

function Main() {
  return (
    <>
      <div className="lg:h-[50rem] pt-20 lg:pt-0 flex flex-col-reverse lg:grid grid-cols-2 gap-12 lg:gap-16 xl:gap-20 relative before:bg-accent before:bg-size-[75%] before:bg-center before:bg-no-repeat before:absolute before:inset-0 before:blur-2xl dark:before:opacity-50">
        <div className="relative flex flex-col items-center lg:items-start gap-5 h-full justify-center after:hidden 2xl:after:block after:w-1 after:h-16 after:bg-foreground/20 after:absolute after:-start-17 after:-ms-px after:inset-y-0 after:my-auto">
          <div className="text-3xl/9 md:text-3xl/12 lg:text-[2.6rem]/14 2xl:text-5xl/15 text-center lg:text-start">
            <span className="2xl:block">
              Build <span className="bg-foreground/15 px-1">faster</span> with
              Midone UI.{" "}
            </span>
            <span className="2xl:block">An open-source collection </span>
            <span className="2xl:block">
              of UI components for{" "}
              <span className="bg-foreground/15 px-1">React</span>.
            </span>
          </div>
          <div className="text-lg 2xl:text-2xl/9 opacity-60 text-center lg:text-start">
            <span className="2xl:block">
              Beautiful UI components for React, lovingly crafted with{" "}
            </span>
            <span className="2xl:block">
              the Midone Design System, Zag.js, and Tailwind CSS.
            </span>
          </div>
          <Link to="/docs">
            <CosmicButton className="w-60 mt-5 sm:mt-10">
              Get Started
            </CosmicButton>
          </Link>
        </div>
        <div className="relative mx-auto lg:mx-0">
          <img
            className="w-90 sm:w-100 md:w-120 lg:w-auto lg:absolute inset-0 my-auto"
            src={structure}
          />
        </div>
        <div className="w-1.5 hidden absolute inset-x-0 mx-auto bottom-0 lg:flex flex-col gap-1">
          <div className="shadow-md shadow-foreground/50 h-6 bg-foreground/30 border border-foreground/80 mb-1"></div>
          <div className="shadow-md shadow-foreground/50 size-1.5 bg-foreground/30 border border-foreground/80"></div>
          <div className="shadow-md shadow-foreground/50 size-1.5 bg-foreground/30 border border-foreground/80"></div>
          <div className="shadow-md shadow-foreground/50 size-1.5 bg-foreground/30 border border-foreground/80"></div>
          <div className="shadow-md shadow-foreground/50 size-1.5 bg-foreground/30 border border-foreground/80"></div>
        </div>
      </div>
      <div className="relative pt-20 pb-32 mt-24 after:hidden 2xl:after:block after:w-1 after:h-16 after:bg-foreground/20 after:absolute after:-start-17 after:-ms-px after:inset-y-0 after:my-auto">
        <div className="-mx-[1000%] inset-x-0 top-0 border-t border-foreground/15 absolute"></div>
        <div className="text-center xl:gap-10 lg:text-start flex flex-col lg:flex-row items-center relative before:bg-accent before:bg-size-[40%] before:bg-center before:bg-no-repeat before:absolute before:inset-0 before:-mt-[10%] before:-ms-[80%] before:blur-2xl dark:before:opacity-45">
          <div className="lg:w-1/2 flex-none">
            <div className="text-xl opacity-50">Meet Midone UI</div>
            <div className="text-3xl lg:text-4xl/13 mt-6">
              <span className="2xl:block">
                Simplify the process of building{" "}
              </span>
              <span>beautiful user interfaces</span>
            </div>
          </div>
          <div className="text-lg 2xl:text-xl/7 opacity-70 lg:ms-auto pt-5 lg:pt-20">
            <span className="2xl:block">
              Midone UI is a professionally designed design system for Figma{" "}
            </span>
            <span className="2xl:block">
              and an open-source React UI library that combines Zag.js UI{" "}
            </span>
            <span className="2xl:block">primitives and Tailwind CSS. </span>
            <span className="2xl:block">
              Enjoy a growing collection of pre-built, easy-to-use,{" "}
            </span>
            <span className="2xl:block">
              customizable components that can be copied and pasted into{" "}
            </span>
            <span className="2xl:block">your React projects. </span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-10 mt-20 xl:mt-40 relative before:bg-accent before:bg-size-[40%] before:bg-center before:bg-no-repeat before:absolute before:inset-0 before:-mt-[10%] before:-me-[80%] before:blur-2xl dark:before:opacity-40">
          <div className="border border-foreground/15 w-full p-7 lg:p-10 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
            <div className="text-xl">Fast & Modern</div>
            <div className="opacity-60 text-base mt-2">
              Stop building from scratch and save time with a component library
            </div>
          </div>
          <div className="border border-foreground/15 w-full p-7 lg:p-10 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
            <div className="text-xl">Accessible</div>
            <div className="opacity-60 text-base mt-2">
              Stop building from scratch and save time with a component library
            </div>
          </div>
          <div className="border border-foreground/15 w-full p-7 lg:p-10 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
            <div className="text-xl">Customizable</div>
            <div className="opacity-60 text-base mt-2">
              Stop building from scratch and save time with a component library
            </div>
          </div>
          <div className="border border-foreground/15 w-full p-7 lg:p-10 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
            <div className="text-xl">Dark Mode</div>
            <div className="opacity-60 text-base mt-2">
              Stop building from scratch and save time with a component library
            </div>
          </div>
          <div className="border border-foreground/15 w-full p-7 lg:p-10 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
            <div className="text-xl">Typescript</div>
            <div className="opacity-60 text-base mt-2">
              Stop building from scratch and save time with a component library
            </div>
          </div>
          <div className="border border-foreground/15 w-full p-7 lg:p-10 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
            <div className="text-xl">Expert Design</div>
            <div className="opacity-60 text-base mt-2">
              Stop building from scratch and save time with a component library
            </div>
          </div>
        </div>
        <div className="-mx-[1000%] inset-x-0 bottom-0 border-t border-foreground/15 absolute"></div>
      </div>
      <div className="pt-20 lg:pt-38 pb-30 lg:pb-46 relative before:bg-accent before:bg-size-[75%] before:bg-center before:bg-no-repeat before:absolute before:inset-0 before:blur-2xl dark:before:opacity-45 after:hidden 2xl:after:block after:w-1 after:h-16 after:bg-foreground/20 after:absolute after:-start-17 after:-ms-px after:inset-y-0 after:my-auto">
        <div className="flex flex-col items-center relative">
          <img className="size-31" src={layer} />
          <div className="text-3xl lg:text-4xl/13 mt-5">
            Start your Journey Today
          </div>
          <div className="opacity-60 text-lg 2xl:text-xl/7 text-center mt-7">
            <span className="2xl:block">
              Unleash the power of UiPress, a lightning-fast, feature-rich
              builder designed for excellence. With{" "}
            </span>
            <span className="2xl:block">
              over 50 intuitive blocks, smart patterns for easy reuse, global
              styles for brand consistency, and{" "}
            </span>
            <span className="2xl:block">
              a user-friendly interface, crafting stunning dashboards has never
              been easier.
            </span>
          </div>
          <Link to="/docs">
            <CosmicButton className="w-60 mt-10">Get Started</CosmicButton>
          </Link>
        </div>
      </div>
      <div className="lg:hidden">
        <Menu />
      </div>
    </>
  );
}

export default Main;
