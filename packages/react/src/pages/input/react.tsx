import { Input } from "@/components/ui/input";
import {
  Preview,
  SectionTitle,
  SectionContent,
  PreviewCode,
} from "@/components/docs";

function Main() {
  return (
    <>
      <div id="preview" className="-mt-20">
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
    </>
  );
}

export default Main;
