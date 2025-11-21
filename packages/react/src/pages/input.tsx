import { MoveUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Wrapper,
  Title,
  Subtitle,
  Menu,
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
  ApiButton,
} from "@/components/docs";

function Main() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Input</Title>
            <Subtitle>
              A basic field where users can type information, like names,
              emails, or search queries.
            </Subtitle>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <Input className="w-84" type="email" placeholder="Email" />
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<Input className="w-84" type="email" placeholder="Email" />
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
          </div>
          <div id="installation">
            <SectionTitle>Installation</SectionTitle>
            <SectionContent>
              Copy and paste the following code into your project.
            </SectionContent>
            <PreviewCode title="components/ui/input/index.tsx">
              {`
import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";

function Input({
  className,
  children,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return <input type={type} className={cn(input, className)} {...props} />;
}

export { Input };
              `}
            </PreviewCode>
            <SectionContent>
              Update the import paths to match your project setup.
            </SectionContent>
          </div>
          <div id="usage">
            <SectionTitle>Usage</SectionTitle>
            <PreviewCode>
              {`
import { Input } from "@/components/ui/input";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
<Input className="w-84" type="email" placeholder="Email" />
              `}
            </PreviewCode>
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
