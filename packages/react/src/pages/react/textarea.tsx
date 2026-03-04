import { Textarea } from "@/components/ui/textarea";
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
                <Textarea
                  className="w-86"
                  placeholder="Type your message here."
                />
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Textarea className="w-86" placeholder="Type your message here." />
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
        <PreviewCode title="components/ui/textarea/index.tsx">
          {`
import { cn } from "@midoneui/core/utils/cn";
import { textarea } from "@midoneui/core/styles/textarea.styles";

function Textarea({
  className,
  children,
  ...props
}: React.ComponentProps<"textarea">) {
  return <textarea className={cn(textarea, className)} {...props} />;
}

export { Textarea };
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
import { Textarea } from "@/components/ui/textarea";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<Textarea
  className="w-86"
  placeholder="Type your message here."
/>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
