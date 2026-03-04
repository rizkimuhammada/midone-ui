import {
  Wrapper,
  Title,
  Subtitle,
  Menu,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";

function Main() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>How to Use</Title>
            <Subtitle>
              A step-by-step guide on setting up Midone UI in your project and
              integrating its components.
            </Subtitle>
          </div>

          <div id="prerequisites">
            <SectionTitle>Prerequisites</SectionTitle>
            <SectionContent>
              Midone UI is built upon several modern tools and libraries. Make
              sure your project has the following dependencies installed to
              ensure full compatibility:
            </SectionContent>
            <InstallPackage>
              add @midoneui/core lucide-react tailwind-merge clsx
              class-variance-authority
            </InstallPackage>
            <SectionContent>
              Additionally, you will need to have **Tailwind CSS** configured in
              your project. Midone UI uses Tailwind for all its styling and
              themering.
            </SectionContent>
          </div>

          <div id="framework-selection">
            <SectionTitle>Framework Selection</SectionTitle>
            <SectionContent>
              Our documentation provides code samples for both **React** and
              **Vue**. You can switch between these frameworks using the
              selector in the navigation bar. The installation snippets and
              usage examples will automatically update to reflect your choice.
            </SectionContent>
          </div>

          <div id="copy-paste-pattern">
            <SectionTitle>Copy & Paste Pattern</SectionTitle>
            <SectionContent>
              Inspired by the philosophy of modern UI libraries, Midone UI
              doesn&apos;t require a complex CLI or hidden configurations. You
              simply copy the component&apos;s source code directly into your
              project.
            </SectionContent>
            <ul className="mt-5 space-y-4 list-disc list-inside opacity-80 decoration-foreground/20">
              <li>
                Browse the component library and select the one you need.
              </li>
              <li>Navigate to the **Installation** section.</li>
              <li>
                Create the corresponding file in your local component directory
                (e.g., <code className="bg-foreground/10 px-1 rounded">components/ui/button/index.tsx</code>).
              </li>
              <li>Paste the provided source code into that file.</li>
            </ul>
          </div>

          <div id="integrating-primitives">
            <SectionTitle>Integrating Primitives</SectionTitle>
            <SectionContent>
              Most of our interactive components are powered by **Zag.js**, which
              handles the accessibility and logic. Each component page lists the
              specific Zag.js primitives you need to install.
            </SectionContent>
            <PreviewCode>
              {`
// Example installation for the Accordion component
npm install @zag-js/accordion @zag-js/react
              `}
            </PreviewCode>
          </div>

          <div id="customization">
            <SectionTitle>Customization</SectionTitle>
            <SectionContent>
              Because the components live in your own source tree, you have
              complete control. You can tweak the styles, adjust the logic, or
              extend the props as much as you need using standard Tailwind
              utility classes.
            </SectionContent>
          </div>
        </div>
      </Wrapper>
      <Menu>
        <a className="hover:text-foreground py-1.5" href="#prerequisites">
          Prerequisites
        </a>
        <a className="hover:text-foreground py-1.5" href="#framework-selection">
          Framework Selection
        </a>
        <a className="hover:text-foreground py-1.5" href="#copy-paste-pattern">
          Copy & Paste
        </a>
        <a className="hover:text-foreground py-1.5" href="#integrating-primitives">
          Primitives
        </a>
        <a className="hover:text-foreground py-1.5" href="#customization">
          Customization
        </a>
      </Menu>
    </>
  );
}

export default Main;
