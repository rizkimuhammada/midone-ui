import { createContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Github, Zap } from "lucide-react";
import { Frame } from "@/components/ui/frame";
import { Outlet, Link } from "react-router";

export const MobileMenuContext = createContext<{
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  showMenu: true,
  setShowMenu: () => {},
});

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ showMenu, setShowMenu }}>
      <div className="min-h-screen w-screen overflow-hidden">
        <div className="before:fixed before:inset-x-0 before:top-0 before:h-80 before:bg-gradient-to-b before:from-black/50 before:to-transparent before:z-[-1]">
          <div className="h-20 flex fixed top-0 inset-x-0 z-70 [&_svg]:drop-shadow-xl [&_svg]:drop-shadow-foreground">
            <div className="size-full relative">
              <Frame
                className={twMerge([
                  "[--color-frame-1-stroke:--alpha(var(--color-foreground)/65%)]",
                  "[--color-frame-1-fill:transparent]",
                  "[--color-frame-2-stroke:--alpha(var(--color-foreground)/20%)]",
                  "[--color-frame-2-fill:transparent]",
                ])}
                paths={JSON.parse(
                  '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0","100% - 7"],["L","100% - 61","100% - 9"],["L","100% - 50","100% - 17"],["L","100% - 39","100% - 10"],["L","100% + 0","100% - 11"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","0","100% + 0"],["L","100% - 61","100% - 2"],["L","100% - 50","100% - 9"],["L","100% - 38","100% - 3"],["L","100% + 0","100% - 4"]]}]'
                )}
              />
              <Frame
                enableBackdropBlur
                className={twMerge([
                  "[--color-frame-1-stroke:transparent]",
                  "[--color-frame-1-fill:transparent]",
                ])}
                paths={JSON.parse(
                  '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0","0"],["L","100% + 0","0"],["L","100% + 0","100% - 5"],["L","100% - 39","100% - 4"],["L","100% - 49","100% - 11"],["L","100% - 58","100% - 3"],["L","0","100% + 0"],["L","0","0"]]}]'
                )}
              />
            </div>
            <div className="size-full container relative flex-none flex before:absolute before:w-px before:h-screen before:bg-foreground/20 before:-ms-12.5 before:top-18">
              <div className="size-full flex-none hidden lg:flex items-center w-48 relative ps-10 2xl:ps-5">
                <Frame
                  className={twMerge([
                    "[--color-frame-1-stroke:--alpha(var(--color-foreground)/65%)]",
                    "[--color-frame-1-fill:transparent]",
                    "[--color-frame-2-stroke:--alpha(var(--color-foreground)/20%)]",
                    "[--color-frame-2-fill:transparent]",
                  ])}
                  paths={JSON.parse(
                    '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0","100% - 11"],["L","100% - 14","100% - 18"],["L","100% + 0","100% - 65"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","0","100% - 4"],["L","100% - 34","100% - 10"],["L","100% - 20","100% - 57"],["L","100% + 0","100% - 58"]]}]'
                  )}
                />
                <Frame
                  enableBackdropBlur
                  className={twMerge([
                    "[--color-frame-1-stroke:transparent]",
                    "[--color-frame-1-fill:transparent]",
                  ])}
                  paths={JSON.parse(
                    '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0","0"],["L","100% + 0","0"],["L","100% - 0","100% - 60"],["L","100% - 14","100% - 18"],["L","100% - 32","100% - 18"],["L","100% - 34","100% - 11"],["L","0","100% - 4"],["L","0","0"]]}]'
                  )}
                />
                <Link
                  to="/"
                  className="-mt-4 text-shadow-md text-shadow-foreground/20 font-medium text-base relative"
                >
                  Midone UI.
                </Link>
              </div>
              <div className="size-full relative hidden lg:block">
                <Frame
                  className={twMerge([
                    "[--color-frame-1-stroke:--alpha(var(--color-foreground)/65%)]",
                    "[--color-frame-1-fill:transparent]",
                    "[--color-frame-2-stroke:--alpha(var(--color-foreground)/20%)]",
                    "[--color-frame-2-fill:transparent]",
                  ])}
                  paths={JSON.parse(
                    '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0","100% - 65"],["L","100% + 0","100% - 65"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","0","100% - 58"],["L","100% - 0","100% - 58"]]}]'
                  )}
                />
                <Frame
                  enableBackdropBlur
                  className={twMerge([
                    "[--color-frame-1-stroke:transparent]",
                    "[--color-frame-1-fill:transparent]",
                  ])}
                  paths={JSON.parse(
                    '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0","0"],["L","100% + 0","0"],["L","100% - 0","100% - 58"],["L","0","100% - 58"],["L","0","0"]]}]'
                  )}
                />
              </div>
              <div className="size-full relative bg-brown-500 flex items-center justify-center gap-10 px-18 lg:px-24 -ms-px">
                <Frame
                  className={twMerge([
                    "[--color-frame-1-stroke:--alpha(var(--color-foreground)/65%)]",
                    "[--color-frame-1-fill:transparent]",
                    "[--color-frame-2-stroke:--alpha(var(--color-foreground)/20%)]",
                    "[--color-frame-2-fill:transparent]",
                  ])}
                  paths={JSON.parse(
                    '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0","100% - 65"],["L","0% + 14.5","100% - 65"],["L","0% + 35.5","100% - 19"],["L","100% - 22","100% - 19"],["L","100% - 1","100% - 65"],["L","100% - 0","100% - 65"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","0","100% - 58"],["L","0% + 22.5","100% - 12"],["L","100% - 36.5","100% - 12"],["L","100% - 15","100% - 58"],["L","100% - 0","100% - 58"]]}]'
                  )}
                />
                <Frame
                  enableBackdropBlur
                  className={twMerge([
                    "[--color-frame-1-stroke:transparent]",
                    "[--color-frame-1-fill:transparent]",
                  ])}
                  paths={JSON.parse(
                    '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0","0"],["L","50% + 253","0"],["L","100% - 0","100% - 58"],["L","100% - 4","100% - 58"],["L","100% - 21","100% - 19"],["L","100% - 32","100% - 19"],["L","100% - 37","100% - 13"],["L","23","100% - 13"],["L","0","100% - 60"],["L","0","0"]]}]'
                  )}
                />
                <Link
                  to="/"
                  className="-mt-4 text-shadow-md text-shadow-foreground/20 font-medium text-base relative lg:hidden"
                >
                  Midone UI.
                </Link>
                <Link
                  to="/docs"
                  className="-mt-4 hidden lg:block opacity-70 [&.active]:opacity-100 [&.active]:font-medium"
                >
                  Docs
                </Link>
                <Link
                  to="/docs/accordion"
                  className="-mt-4 hidden lg:block opacity-70 [&.active]:opacity-100 [&.active]:font-medium"
                >
                  Components
                </Link>
                <Link
                  to="/templates"
                  className="-mt-4 hidden lg:block opacity-70 [&.active]:opacity-100 [&.active]:font-medium"
                >
                  Templates
                </Link>
                <div
                  onClick={() => setShowMenu(true)}
                  className="-mt-4 ms-auto flex items-center gap-2 lg:hidden relative cursor-pointer"
                >
                  <Zap className="size-4" />
                  Menu
                </div>
              </div>
              <div className="size-full relative hidden lg:block -me-px">
                <Frame
                  className={twMerge([
                    "[--color-frame-1-stroke:--alpha(var(--color-foreground)/65%)]",
                    "[--color-frame-1-fill:transparent]",
                    "[--color-frame-2-stroke:--alpha(var(--color-foreground)/20%)]",
                    "[--color-frame-2-fill:transparent]",
                  ])}
                  paths={JSON.parse(
                    '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0","100% - 65"],["L","100% + 0","100% - 65"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","0","100% - 58"],["L","100% - 0","100% - 58"]]}]'
                  )}
                />
                <Frame
                  enableBackdropBlur
                  className={twMerge([
                    "[--color-frame-1-stroke:transparent]",
                    "[--color-frame-1-fill:transparent]",
                  ])}
                  paths={JSON.parse(
                    '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0","0"],["L","100% + 0","0"],["L","100% - 0","100% - 58"],["L","0","100% - 58"],["L","0","0"]]}]'
                  )}
                />
              </div>
              <div className="justify-end w-44 h-full relative flex-none hidden lg:flex items-center gap-3 pe-10 2xl:pe-5">
                <Frame
                  className={twMerge([
                    "[--color-frame-1-stroke:--alpha(var(--color-foreground)/65%)]",
                    "[--color-frame-1-fill:transparent]",
                    "[--color-frame-2-stroke:--alpha(var(--color-foreground)/20%)]",
                    "[--color-frame-2-fill:transparent]",
                  ])}
                  paths={JSON.parse(
                    '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0","100% - 65"],["L","0% + 14","100% - 65"],["L","0% + 29","100% - 18"],["L","100% + 0","100% - 12"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","0","100% - 59"],["L","0% + 15","100% - 10"],["L","100% + 0","100% - 5"]]}]'
                  )}
                />
                <Frame
                  enableBackdropBlur
                  className={twMerge([
                    "[--color-frame-1-stroke:transparent]",
                    "[--color-frame-1-fill:transparent]",
                  ])}
                  paths={JSON.parse(
                    '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0","0"],["L","50% + 88","0"],["L","100% + 0","100% - 5"],["L","16","100% - 10"],["L","0","100% - 56"],["L","0","0"]]}]'
                  )}
                />
                <a
                  href="https://github.com/rizkimuhammada/midone-ui"
                  target="_blank"
                  className="flex items-center gap-2 -mt-4 relative"
                >
                  <Github className="size-4 !drop-shadow-none" /> Github
                </a>
              </div>
            </div>
            <div className="size-full relative">
              <Frame
                className={twMerge([
                  "[--color-frame-1-stroke:--alpha(var(--color-foreground)/65%)]",
                  "[--color-frame-1-fill:transparent]",
                  "[--color-frame-2-stroke:--alpha(var(--color-foreground)/20%)]",
                  "[--color-frame-2-fill:transparent]",
                ])}
                paths={JSON.parse(
                  '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0","100% - 12"],["L","100% + 0","100% - 7"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","0","100% - 5"],["L","100% + 0","100% + 0"]]}]'
                )}
              />
              <Frame
                enableBackdropBlur
                className={twMerge([
                  "[--color-frame-1-stroke:transparent]",
                  "[--color-frame-1-fill:transparent]",
                ])}
                paths={JSON.parse(
                  '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0","0"],["L","100% + 0","0"],["L","100% + 0","100% + 0"],["L","0","100% - 5"],["L","0","0"]]}]'
                )}
              />
            </div>
          </div>
          <div className="container mx-auto px-4 2xl:px-0 mt-20">
            <div className="mx-5">
              <Outlet />
              <div className="flex-col sm:flex-row gap-2 items-center flex py-8 relative before:bg-accent before:bg-size-[50%] before:bg-center before:bg-no-repeat before:absolute before:inset-0 before:mt-[2%] before:-ms-[80%] before:blur-2xl dark:before:opacity-65">
                <div className="-mx-[1000%] inset-x-0 top-0 border-t border-foreground/15 absolute"></div>
                <div className="relative">
                  <span className="opacity-70">A project by </span>
                  <a href="">Left4code</a>
                  <span className="opacity-70"> team</span>
                </div>
                <div className="sm:ms-auto flex gap-5 relative">
                  <a href="">Docs</a>
                  <a href="">Github</a>
                  <a href="">Twitter</a>
                  <a href="">Discord</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileMenuContext.Provider>
  );
}

export default App;
