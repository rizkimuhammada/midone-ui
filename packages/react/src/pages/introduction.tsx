import {
  Wrapper,
  Title,
  Subtitle,
  Menu,
  SectionTitle,
  SectionContent,
} from "@/components/docs";

function Main() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Introduction</Title>
            <Subtitle>
              A thoughtfully designed collection of UI components for React and
              Vue, built on top of modern primitives and Tailwind CSS.
            </Subtitle>
          </div>

          <div id="what-is-midone-ui">
            <SectionTitle>What is Midone UI?</SectionTitle>
            <SectionContent>
              Midone UI is not just another component library. It&apos;s a
              curated set of high-performance, accessible, and highly
              customizable UI components designed to help developers build
              beautiful, production-ready interfaces without the friction of
              starting from scratch.
            </SectionContent>
            <SectionContent>
              Our philosophy is simple: provide the bones and the initial
              premium skin, but let the developer own the code. By following the
              copy-and-paste pattern, you integrate the source directly into
              your project, making customization as easy as editing any other
              component in your tree.
            </SectionContent>
          </div>

          <div id="design-philosophy">
            <SectionTitle>Design Philosophy</SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 mt-6">
              <div>
                <h4 className="font-medium">Modern Aesthetics</h4>
                <SectionContent className="text-sm">
                  We believe enterprise software shouldn&apos;t look boring. Midone
                  UI brings a clean, modern aesthetic that feels premium out of
                  the box.
                </SectionContent>
              </div>
              <div>
                <h4 className="font-medium">Accessibility First</h4>
                <SectionContent className="text-sm">
                  By leveraging Zag.js, we ensure that complex components like
                  comboboxes, datepickers, and dialogs follow WAI-ARIA
                  standards.
                </SectionContent>
              </div>
              <div>
                <h4 className="font-medium">Tailwind Native</h4>
                <SectionContent className="text-sm">
                  No CSS-in-JS overhead. All styling is done with Tailwind CSS,
                  making it easy to extend and maintain.
                </SectionContent>
              </div>
              <div>
                <h4 className="font-medium">Dual Support</h4>
                <SectionContent className="text-sm">
                  Whether you are working with React or Vue, Midone UI has you
                  covered with consistent patterns across both ecosystems.
                </SectionContent>
              </div>
            </div>
          </div>

          <div id="key-features">
            <SectionTitle>Key Features</SectionTitle>
            <ul className="mt-5 space-y-3 list-disc list-inside opacity-80">
              <li>**30+ Components**: From basic buttons to complex charts and maps.</li>
              <li>**Dark Mode**: Native support with consistent color tokens.</li>
              <li>**Type Safe**: Built with TypeScript for a better developer experience.</li>
              <li>**Zero Configuration**: No complex build steps or CLI required.</li>
            </ul>
          </div>
        </div>
      </Wrapper>
      <Menu>
        <a className="hover:text-foreground py-1.5" href="#what-is-midone-ui">
          What is Midone UI?
        </a>
        <a className="hover:text-foreground py-1.5" href="#design-philosophy">
          Design Philosophy
        </a>
        <a className="hover:text-foreground py-1.5" href="#key-features">
          Key Features
        </a>
      </Menu>
    </>
  );
}

export default Main;
