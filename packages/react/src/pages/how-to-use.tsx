import {
  Wrapper,
  Title,
  Subtitle,
  Menu,
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
