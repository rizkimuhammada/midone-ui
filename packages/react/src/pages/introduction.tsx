import { Wrapper, Title, Subtitle, Menu } from "@/components/docs";

function Main() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Introduction</Title>
            <Subtitle>
              A brief overview of the component and how it fits into your
              workflow.
            </Subtitle>
          </div>
        </div>
      </Wrapper>
      <Menu>
        <a className="hover:text-foreground py-1.5" href="#installation">
          Installation
        </a>
        <a className="hover:text-foreground py-1.5" href="#usage">
          Usage
        </a>
      </Menu>
    </>
  );
}

export default Main;
