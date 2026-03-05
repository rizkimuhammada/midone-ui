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
            <Title>Introduction</Title>
            <Subtitle>
              A thoughtfully designed collection of UI components for React and
              Vue, built on top of modern primitives and Tailwind CSS.
            </Subtitle>
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
