import { Button } from "@/components/ui/button";
import { LoaderCircle, Copy, Scissors, Trash, SquarePlus } from "lucide-react";
import {
  Wrapper,
  Title,
  Subtitle,
  Menu,
  Preview,
  SectionTitle,
  SectionContent,
  PreviewCode,
} from "@/components/docs";

function Main() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Button</Title>
            <Subtitle>
              A clickable element that lets users take action, like submitting
              forms or navigating to another page.
            </Subtitle>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <Button size="sm">Button Small</Button>
                    <Button>Button Medium</Button>
                    <Button size="lg">Button Large</Button>
                    <Button size="xl">Button Extra Large</Button>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<Button size="sm">Button Small</Button>
<Button>Button Medium</Button>
<Button size="lg">Button Large</Button>
<Button size="xl">Button Extra Large</Button>
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
            <PreviewCode title="components/ui/button/index.tsx">
              {`
import { cn } from "@midoneui/core/utils/cn";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";

function Button({
  className,
  children,
  filled,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & ButtonVariants) {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({ filled, variant, size, className }),
        className
      )}
    >
      {children}
    </button>
  );
}

export { Button };
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
import { Button } from "@/components/ui/button";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
<Button>Button Medium</Button>
              `}
            </PreviewCode>
          </div>
          <div id="variants">
            <SectionTitle>Variants</SectionTitle>
            <SectionContent>
              A collection of components you can use.
            </SectionContent>
            <Preview className="!flex-col">
              {() => ({
                preview: (
                  <>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="primary" size="sm">
                        Button Small
                      </Button>
                      <Button variant="primary">Button Medium</Button>
                      <Button variant="primary" size="lg">
                        Button Large
                      </Button>
                      <Button variant="primary" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="secondary" size="sm">
                        Button Small
                      </Button>
                      <Button variant="secondary">Button Medium</Button>
                      <Button variant="secondary" size="lg">
                        Button Large
                      </Button>
                      <Button variant="secondary" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="success" size="sm">
                        Button Small
                      </Button>
                      <Button variant="success">Button Medium</Button>
                      <Button variant="success" size="lg">
                        Button Large
                      </Button>
                      <Button variant="success" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="danger" size="sm">
                        Button Small
                      </Button>
                      <Button variant="danger">Button Medium</Button>
                      <Button variant="danger" size="lg">
                        Button Large
                      </Button>
                      <Button variant="danger" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="pending" size="sm">
                        Button Small
                      </Button>
                      <Button variant="pending">Button Medium</Button>
                      <Button variant="pending" size="lg">
                        Button Large
                      </Button>
                      <Button variant="pending" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="warning" size="sm">
                        Button Small
                      </Button>
                      <Button variant="warning">Button Medium</Button>
                      <Button variant="warning" size="lg">
                        Button Large
                      </Button>
                      <Button variant="warning" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="primary" size="sm">
    Button Small
  </Button>
  <Button variant="primary">Button Medium</Button>
  <Button variant="primary" size="lg">
    Button Large
  </Button>
  <Button variant="primary" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="secondary" size="sm">
    Button Small
  </Button>
  <Button variant="secondary">Button Medium</Button>
  <Button variant="secondary" size="lg">
    Button Large
  </Button>
  <Button variant="secondary" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="success" size="sm">
    Button Small
  </Button>
  <Button variant="success">Button Medium</Button>
  <Button variant="success" size="lg">
    Button Large
  </Button>
  <Button variant="success" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="danger" size="sm">
    Button Small
  </Button>
  <Button variant="danger">Button Medium</Button>
  <Button variant="danger" size="lg">
    Button Large
  </Button>
  <Button variant="danger" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="pending" size="sm">
    Button Small
  </Button>
  <Button variant="pending">Button Medium</Button>
  <Button variant="pending" size="lg">
    Button Large
  </Button>
  <Button variant="pending" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="warning" size="sm">
    Button Small
  </Button>
  <Button variant="warning">Button Medium</Button>
  <Button variant="warning" size="lg">
    Button Large
  </Button>
  <Button variant="warning" size="xl">
    Button Extra Large
  </Button>
</div>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
            <Preview className="!flex-col">
              {() => ({
                preview: (
                  <>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button disabled size="sm">
                        Button Small
                      </Button>
                      <Button disabled>Button Medium</Button>
                      <Button disabled size="lg">
                        Button Large
                      </Button>
                      <Button disabled size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button disabled variant="primary" size="sm">
                        Button Small
                      </Button>
                      <Button disabled variant="primary">
                        Button Medium
                      </Button>
                      <Button disabled variant="primary" size="lg">
                        Button Large
                      </Button>
                      <Button disabled variant="primary" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button disabled variant="secondary" size="sm">
                        Button Small
                      </Button>
                      <Button disabled variant="secondary">
                        Button Medium
                      </Button>
                      <Button disabled variant="secondary" size="lg">
                        Button Large
                      </Button>
                      <Button disabled variant="secondary" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button disabled variant="success" size="sm">
                        Button Small
                      </Button>
                      <Button disabled variant="success">
                        Button Medium
                      </Button>
                      <Button disabled variant="success" size="lg">
                        Button Large
                      </Button>
                      <Button disabled variant="success" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button disabled variant="danger" size="sm">
                        Button Small
                      </Button>
                      <Button disabled variant="danger">
                        Button Medium
                      </Button>
                      <Button disabled variant="danger" size="lg">
                        Button Large
                      </Button>
                      <Button disabled variant="danger" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button disabled variant="pending" size="sm">
                        Button Small
                      </Button>
                      <Button disabled variant="pending">
                        Button Medium
                      </Button>
                      <Button disabled variant="pending" size="lg">
                        Button Large
                      </Button>
                      <Button disabled variant="pending" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button disabled variant="warning" size="sm">
                        Button Small
                      </Button>
                      <Button disabled variant="warning">
                        Button Medium
                      </Button>
                      <Button disabled variant="warning" size="lg">
                        Button Large
                      </Button>
                      <Button disabled variant="warning" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled size="sm">
    Button Small
  </Button>
  <Button disabled>Button Medium</Button>
  <Button disabled size="lg">
    Button Large
  </Button>
  <Button disabled size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled variant="primary" size="sm">
    Button Small
  </Button>
  <Button disabled variant="primary">
    Button Medium
  </Button>
  <Button disabled variant="primary" size="lg">
    Button Large
  </Button>
  <Button disabled variant="primary" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled variant="secondary" size="sm">
    Button Small
  </Button>
  <Button disabled variant="secondary">
    Button Medium
  </Button>
  <Button disabled variant="secondary" size="lg">
    Button Large
  </Button>
  <Button disabled variant="secondary" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled variant="success" size="sm">
    Button Small
  </Button>
  <Button disabled variant="success">
    Button Medium
  </Button>
  <Button disabled variant="success" size="lg">
    Button Large
  </Button>
  <Button disabled variant="success" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled variant="danger" size="sm">
    Button Small
  </Button>
  <Button disabled variant="danger">
    Button Medium
  </Button>
  <Button disabled variant="danger" size="lg">
    Button Large
  </Button>
  <Button disabled variant="danger" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled variant="pending" size="sm">
    Button Small
  </Button>
  <Button disabled variant="pending">
    Button Medium
  </Button>
  <Button disabled variant="pending" size="lg">
    Button Large
  </Button>
  <Button disabled variant="pending" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled variant="warning" size="sm">
    Button Small
  </Button>
  <Button disabled variant="warning">
    Button Medium
  </Button>
  <Button disabled variant="warning" size="lg">
    Button Large
  </Button>
  <Button disabled variant="warning" size="xl">
    Button Extra Large
  </Button>
</div>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
            <Preview className="!flex-col">
              {() => ({
                preview: (
                  <>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled size="sm">
                        Button Small
                      </Button>
                      <Button filled>Button Medium</Button>
                      <Button filled size="lg">
                        Button Large
                      </Button>
                      <Button filled size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="primary" size="sm">
                        Button Small
                      </Button>
                      <Button filled variant="primary">
                        Button Medium
                      </Button>
                      <Button filled variant="primary" size="lg">
                        Button Large
                      </Button>
                      <Button filled variant="primary" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="secondary" size="sm">
                        Button Small
                      </Button>
                      <Button filled variant="secondary">
                        Button Medium
                      </Button>
                      <Button filled variant="secondary" size="lg">
                        Button Large
                      </Button>
                      <Button filled variant="secondary" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="success" size="sm">
                        Button Small
                      </Button>
                      <Button filled variant="success">
                        Button Medium
                      </Button>
                      <Button filled variant="success" size="lg">
                        Button Large
                      </Button>
                      <Button filled variant="success" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="danger" size="sm">
                        Button Small
                      </Button>
                      <Button filled variant="danger">
                        Button Medium
                      </Button>
                      <Button filled variant="danger" size="lg">
                        Button Large
                      </Button>
                      <Button filled variant="danger" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="pending" size="sm">
                        Button Small
                      </Button>
                      <Button filled variant="pending">
                        Button Medium
                      </Button>
                      <Button filled variant="pending" size="lg">
                        Button Large
                      </Button>
                      <Button filled variant="pending" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="warning" size="sm">
                        Button Small
                      </Button>
                      <Button filled variant="warning">
                        Button Medium
                      </Button>
                      <Button filled variant="warning" size="lg">
                        Button Large
                      </Button>
                      <Button filled variant="warning" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled size="sm">
    Button Small
  </Button>
  <Button filled>Button Medium</Button>
  <Button filled size="lg">
    Button Large
  </Button>
  <Button filled size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="primary" size="sm">
    Button Small
  </Button>
  <Button filled variant="primary">
    Button Medium
  </Button>
  <Button filled variant="primary" size="lg">
    Button Large
  </Button>
  <Button filled variant="primary" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="secondary" size="sm">
    Button Small
  </Button>
  <Button filled variant="secondary">
    Button Medium
  </Button>
  <Button filled variant="secondary" size="lg">
    Button Large
  </Button>
  <Button filled variant="secondary" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="success" size="sm">
    Button Small
  </Button>
  <Button filled variant="success">
    Button Medium
  </Button>
  <Button filled variant="success" size="lg">
    Button Large
  </Button>
  <Button filled variant="success" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="danger" size="sm">
    Button Small
  </Button>
  <Button filled variant="danger">
    Button Medium
  </Button>
  <Button filled variant="danger" size="lg">
    Button Large
  </Button>
  <Button filled variant="danger" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="pending" size="sm">
    Button Small
  </Button>
  <Button filled variant="pending">
    Button Medium
  </Button>
  <Button filled variant="pending" size="lg">
    Button Large
  </Button>
  <Button filled variant="pending" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="warning" size="sm">
    Button Small
  </Button>
  <Button filled variant="warning">
    Button Medium
  </Button>
  <Button filled variant="warning" size="lg">
    Button Large
  </Button>
  <Button filled variant="warning" size="xl">
    Button Extra Large
  </Button>
</div>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
            <Preview className="!flex-col">
              {() => ({
                preview: (
                  <>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button disabled filled size="sm">
                        Button Small
                      </Button>
                      <Button disabled filled>
                        Button Medium
                      </Button>
                      <Button disabled filled size="lg">
                        Button Large
                      </Button>
                      <Button disabled filled size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button disabled filled variant="primary" size="sm">
                        Button Small
                      </Button>
                      <Button disabled filled variant="primary">
                        Button Medium
                      </Button>
                      <Button disabled filled variant="primary" size="lg">
                        Button Large
                      </Button>
                      <Button disabled filled variant="primary" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button disabled filled variant="secondary" size="sm">
                        Button Small
                      </Button>
                      <Button disabled filled variant="secondary">
                        Button Medium
                      </Button>
                      <Button disabled filled variant="secondary" size="lg">
                        Button Large
                      </Button>
                      <Button disabled filled variant="secondary" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button disabled filled variant="success" size="sm">
                        Button Small
                      </Button>
                      <Button disabled filled variant="success">
                        Button Medium
                      </Button>
                      <Button disabled filled variant="success" size="lg">
                        Button Large
                      </Button>
                      <Button disabled filled variant="success" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button disabled filled variant="danger" size="sm">
                        Button Small
                      </Button>
                      <Button disabled filled variant="danger">
                        Button Medium
                      </Button>
                      <Button disabled filled variant="danger" size="lg">
                        Button Large
                      </Button>
                      <Button disabled filled variant="danger" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button disabled filled variant="pending" size="sm">
                        Button Small
                      </Button>
                      <Button disabled filled variant="pending">
                        Button Medium
                      </Button>
                      <Button disabled filled variant="pending" size="lg">
                        Button Large
                      </Button>
                      <Button disabled filled variant="pending" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button disabled filled variant="warning" size="sm">
                        Button Small
                      </Button>
                      <Button disabled filled variant="warning">
                        Button Medium
                      </Button>
                      <Button disabled filled variant="warning" size="lg">
                        Button Large
                      </Button>
                      <Button disabled filled variant="warning" size="xl">
                        Button Extra Large
                      </Button>
                    </div>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled filled size="sm">
    Button Small
  </Button>
  <Button disabled filled>
    Button Medium
  </Button>
  <Button disabled filled size="lg">
    Button Large
  </Button>
  <Button disabled filled size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled filled variant="primary" size="sm">
    Button Small
  </Button>
  <Button disabled filled variant="primary">
    Button Medium
  </Button>
  <Button disabled filled variant="primary" size="lg">
    Button Large
  </Button>
  <Button disabled filled variant="primary" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled filled variant="secondary" size="sm">
    Button Small
  </Button>
  <Button disabled filled variant="secondary">
    Button Medium
  </Button>
  <Button disabled filled variant="secondary" size="lg">
    Button Large
  </Button>
  <Button disabled filled variant="secondary" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled filled variant="success" size="sm">
    Button Small
  </Button>
  <Button disabled filled variant="success">
    Button Medium
  </Button>
  <Button disabled filled variant="success" size="lg">
    Button Large
  </Button>
  <Button disabled filled variant="success" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled filled variant="danger" size="sm">
    Button Small
  </Button>
  <Button disabled filled variant="danger">
    Button Medium
  </Button>
  <Button disabled filled variant="danger" size="lg">
    Button Large
  </Button>
  <Button disabled filled variant="danger" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled filled variant="pending" size="sm">
    Button Small
  </Button>
  <Button disabled filled variant="pending">
    Button Medium
  </Button>
  <Button disabled filled variant="pending" size="lg">
    Button Large
  </Button>
  <Button disabled filled variant="pending" size="xl">
    Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled filled variant="warning" size="sm">
    Button Small
  </Button>
  <Button disabled filled variant="warning">
    Button Medium
  </Button>
  <Button disabled filled variant="warning" size="lg">
    Button Large
  </Button>
  <Button disabled filled variant="warning" size="xl">
    Button Extra Large
  </Button>
</div>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
            <Preview className="!flex-col">
              {() => ({
                preview: (
                  <>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button size="sm">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Small
                      </Button>
                      <Button>
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Medium
                      </Button>
                      <Button size="lg">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Large
                      </Button>
                      <Button size="xl">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="primary" size="sm">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Small
                      </Button>
                      <Button variant="primary">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Medium
                      </Button>
                      <Button variant="primary" size="lg">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Large
                      </Button>
                      <Button variant="primary" size="xl">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="secondary" size="sm">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Small
                      </Button>
                      <Button variant="secondary">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Medium
                      </Button>
                      <Button variant="secondary" size="lg">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Large
                      </Button>
                      <Button variant="secondary" size="xl">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="success" size="sm">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Small
                      </Button>
                      <Button variant="success">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Medium
                      </Button>
                      <Button variant="success" size="lg">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Large
                      </Button>
                      <Button variant="success" size="xl">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="danger" size="sm">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Small
                      </Button>
                      <Button variant="danger">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Medium
                      </Button>
                      <Button variant="danger" size="lg">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Large
                      </Button>
                      <Button variant="danger" size="xl">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="pending" size="sm">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Small
                      </Button>
                      <Button variant="pending">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Medium
                      </Button>
                      <Button variant="pending" size="lg">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Large
                      </Button>
                      <Button variant="pending" size="xl">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="warning" size="sm">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Small
                      </Button>
                      <Button variant="warning">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Medium
                      </Button>
                      <Button variant="warning" size="lg">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Large
                      </Button>
                      <Button variant="warning" size="xl">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Extra Large
                      </Button>
                    </div>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button size="sm">
    <LoaderCircle className="size-4 animate-spin" /> Button Small
  </Button>
  <Button>
    <LoaderCircle className="size-4 animate-spin" /> Button Medium
  </Button>
  <Button size="lg">
    <LoaderCircle className="size-4 animate-spin" /> Button Large
  </Button>
  <Button size="xl">
    <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="primary" size="sm">
    <LoaderCircle className="size-4 animate-spin" /> Button Small
  </Button>
  <Button variant="primary">
    <LoaderCircle className="size-4 animate-spin" /> Button Medium
  </Button>
  <Button variant="primary" size="lg">
    <LoaderCircle className="size-4 animate-spin" /> Button Large
  </Button>
  <Button variant="primary" size="xl">
    <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="secondary" size="sm">
    <LoaderCircle className="size-4 animate-spin" /> Button Small
  </Button>
  <Button variant="secondary">
    <LoaderCircle className="size-4 animate-spin" /> Button Medium
  </Button>
  <Button variant="secondary" size="lg">
    <LoaderCircle className="size-4 animate-spin" /> Button Large
  </Button>
  <Button variant="secondary" size="xl">
    <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="success" size="sm">
    <LoaderCircle className="size-4 animate-spin" /> Button Small
  </Button>
  <Button variant="success">
    <LoaderCircle className="size-4 animate-spin" /> Button Medium
  </Button>
  <Button variant="success" size="lg">
    <LoaderCircle className="size-4 animate-spin" /> Button Large
  </Button>
  <Button variant="success" size="xl">
    <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="danger" size="sm">
    <LoaderCircle className="size-4 animate-spin" /> Button Small
  </Button>
  <Button variant="danger">
    <LoaderCircle className="size-4 animate-spin" /> Button Medium
  </Button>
  <Button variant="danger" size="lg">
    <LoaderCircle className="size-4 animate-spin" /> Button Large
  </Button>
  <Button variant="danger" size="xl">
    <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="pending" size="sm">
    <LoaderCircle className="size-4 animate-spin" /> Button Small
  </Button>
  <Button variant="pending">
    <LoaderCircle className="size-4 animate-spin" /> Button Medium
  </Button>
  <Button variant="pending" size="lg">
    <LoaderCircle className="size-4 animate-spin" /> Button Large
  </Button>
  <Button variant="pending" size="xl">
    <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="warning" size="sm">
    <LoaderCircle className="size-4 animate-spin" /> Button Small
  </Button>
  <Button variant="warning">
    <LoaderCircle className="size-4 animate-spin" /> Button Medium
  </Button>
  <Button variant="warning" size="lg">
    <LoaderCircle className="size-4 animate-spin" /> Button Large
  </Button>
  <Button variant="warning" size="xl">
    <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
            <Preview className="!flex-col">
              {() => ({
                preview: (
                  <>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled size="sm">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Small
                      </Button>
                      <Button filled>
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Medium
                      </Button>
                      <Button filled size="lg">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Large
                      </Button>
                      <Button filled size="xl">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="primary" size="sm">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Small
                      </Button>
                      <Button filled variant="primary">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Medium
                      </Button>
                      <Button filled variant="primary" size="lg">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Large
                      </Button>
                      <Button filled variant="primary" size="xl">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="secondary" size="sm">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Small
                      </Button>
                      <Button filled variant="secondary">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Medium
                      </Button>
                      <Button filled variant="secondary" size="lg">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Large
                      </Button>
                      <Button filled variant="secondary" size="xl">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="success" size="sm">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Small
                      </Button>
                      <Button filled variant="success">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Medium
                      </Button>
                      <Button filled variant="success" size="lg">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Large
                      </Button>
                      <Button filled variant="success" size="xl">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="danger" size="sm">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Small
                      </Button>
                      <Button filled variant="danger">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Medium
                      </Button>
                      <Button filled variant="danger" size="lg">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Large
                      </Button>
                      <Button filled variant="danger" size="xl">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="pending" size="sm">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Small
                      </Button>
                      <Button filled variant="pending">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Medium
                      </Button>
                      <Button filled variant="pending" size="lg">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Large
                      </Button>
                      <Button filled variant="pending" size="xl">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Extra Large
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="warning" size="sm">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Small
                      </Button>
                      <Button filled variant="warning">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Medium
                      </Button>
                      <Button filled variant="warning" size="lg">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Large
                      </Button>
                      <Button filled variant="warning" size="xl">
                        <LoaderCircle className="size-4 animate-spin" /> Button
                        Extra Large
                      </Button>
                    </div>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled size="sm">
    <LoaderCircle className="size-4 animate-spin" /> Button Small
  </Button>
  <Button filled>
    <LoaderCircle className="size-4 animate-spin" /> Button Medium
  </Button>
  <Button filled size="lg">
    <LoaderCircle className="size-4 animate-spin" /> Button Large
  </Button>
  <Button filled size="xl">
    <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="primary" size="sm">
    <LoaderCircle className="size-4 animate-spin" /> Button Small
  </Button>
  <Button filled variant="primary">
    <LoaderCircle className="size-4 animate-spin" /> Button Medium
  </Button>
  <Button filled variant="primary" size="lg">
    <LoaderCircle className="size-4 animate-spin" /> Button Large
  </Button>
  <Button filled variant="primary" size="xl">
    <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="secondary" size="sm">
    <LoaderCircle className="size-4 animate-spin" /> Button Small
  </Button>
  <Button filled variant="secondary">
    <LoaderCircle className="size-4 animate-spin" /> Button Medium
  </Button>
  <Button filled variant="secondary" size="lg">
    <LoaderCircle className="size-4 animate-spin" /> Button Large
  </Button>
  <Button filled variant="secondary" size="xl">
    <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="success" size="sm">
    <LoaderCircle className="size-4 animate-spin" /> Button Small
  </Button>
  <Button filled variant="success">
    <LoaderCircle className="size-4 animate-spin" /> Button Medium
  </Button>
  <Button filled variant="success" size="lg">
    <LoaderCircle className="size-4 animate-spin" /> Button Large
  </Button>
  <Button filled variant="success" size="xl">
    <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="danger" size="sm">
    <LoaderCircle className="size-4 animate-spin" /> Button Small
  </Button>
  <Button filled variant="danger">
    <LoaderCircle className="size-4 animate-spin" /> Button Medium
  </Button>
  <Button filled variant="danger" size="lg">
    <LoaderCircle className="size-4 animate-spin" /> Button Large
  </Button>
  <Button filled variant="danger" size="xl">
    <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="pending" size="sm">
    <LoaderCircle className="size-4 animate-spin" /> Button Small
  </Button>
  <Button filled variant="pending">
    <LoaderCircle className="size-4 animate-spin" /> Button Medium
  </Button>
  <Button filled variant="pending" size="lg">
    <LoaderCircle className="size-4 animate-spin" /> Button Large
  </Button>
  <Button filled variant="pending" size="xl">
    <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="warning" size="sm">
    <LoaderCircle className="size-4 animate-spin" /> Button Small
  </Button>
  <Button filled variant="warning">
    <LoaderCircle className="size-4 animate-spin" /> Button Medium
  </Button>
  <Button filled variant="warning" size="lg">
    <LoaderCircle className="size-4 animate-spin" /> Button Large
  </Button>
  <Button filled variant="warning" size="xl">
    <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
            <Preview className="!flex-col">
              {() => ({
                preview: (
                  <>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button size="sm">
                        <Copy className="size-4" />
                      </Button>
                      <Button>
                        <Scissors className="size-4" />
                      </Button>
                      <Button size="lg">
                        <Trash className="size-4" />
                      </Button>
                      <Button size="xl">
                        <SquarePlus className="size-4" />
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="primary" size="sm">
                        <Copy className="size-4" />
                      </Button>
                      <Button variant="primary">
                        <Scissors className="size-4" />
                      </Button>
                      <Button variant="primary" size="lg">
                        <Trash className="size-4" />
                      </Button>
                      <Button variant="primary" size="xl">
                        <SquarePlus className="size-4" />
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="secondary" size="sm">
                        <Copy className="size-4" />
                      </Button>
                      <Button variant="secondary">
                        <Scissors className="size-4" />
                      </Button>
                      <Button variant="secondary" size="lg">
                        <Trash className="size-4" />
                      </Button>
                      <Button variant="secondary" size="xl">
                        <SquarePlus className="size-4" />
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="success" size="sm">
                        <Copy className="size-4" />
                      </Button>
                      <Button variant="success">
                        <Scissors className="size-4" />
                      </Button>
                      <Button variant="success" size="lg">
                        <Trash className="size-4" />
                      </Button>
                      <Button variant="success" size="xl">
                        <SquarePlus className="size-4" />
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="danger" size="sm">
                        <Copy className="size-4" />
                      </Button>
                      <Button variant="danger">
                        <Scissors className="size-4" />
                      </Button>
                      <Button variant="danger" size="lg">
                        <Trash className="size-4" />
                      </Button>
                      <Button variant="danger" size="xl">
                        <SquarePlus className="size-4" />
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="pending" size="sm">
                        <Copy className="size-4" />
                      </Button>
                      <Button variant="pending">
                        <Scissors className="size-4" />
                      </Button>
                      <Button variant="pending" size="lg">
                        <Trash className="size-4" />
                      </Button>
                      <Button variant="pending" size="xl">
                        <SquarePlus className="size-4" />
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button variant="warning" size="sm">
                        <Copy className="size-4" />
                      </Button>
                      <Button variant="warning">
                        <Scissors className="size-4" />
                      </Button>
                      <Button variant="warning" size="lg">
                        <Trash className="size-4" />
                      </Button>
                      <Button variant="warning" size="xl">
                        <SquarePlus className="size-4" />
                      </Button>
                    </div>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button size="sm">
    <Copy className="size-4" />
  </Button>
  <Button>
    <Scissors className="size-4" />
  </Button>
  <Button size="lg">
    <Trash className="size-4" />
  </Button>
  <Button size="xl">
    <SquarePlus className="size-4" />
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="primary" size="sm">
    <Copy className="size-4" />
  </Button>
  <Button variant="primary">
    <Scissors className="size-4" />
  </Button>
  <Button variant="primary" size="lg">
    <Trash className="size-4" />
  </Button>
  <Button variant="primary" size="xl">
    <SquarePlus className="size-4" />
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="secondary" size="sm">
    <Copy className="size-4" />
  </Button>
  <Button variant="secondary">
    <Scissors className="size-4" />
  </Button>
  <Button variant="secondary" size="lg">
    <Trash className="size-4" />
  </Button>
  <Button variant="secondary" size="xl">
    <SquarePlus className="size-4" />
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="success" size="sm">
    <Copy className="size-4" />
  </Button>
  <Button variant="success">
    <Scissors className="size-4" />
  </Button>
  <Button variant="success" size="lg">
    <Trash className="size-4" />
  </Button>
  <Button variant="success" size="xl">
    <SquarePlus className="size-4" />
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="danger" size="sm">
    <Copy className="size-4" />
  </Button>
  <Button variant="danger">
    <Scissors className="size-4" />
  </Button>
  <Button variant="danger" size="lg">
    <Trash className="size-4" />
  </Button>
  <Button variant="danger" size="xl">
    <SquarePlus className="size-4" />
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="pending" size="sm">
    <Copy className="size-4" />
  </Button>
  <Button variant="pending">
    <Scissors className="size-4" />
  </Button>
  <Button variant="pending" size="lg">
    <Trash className="size-4" />
  </Button>
  <Button variant="pending" size="xl">
    <SquarePlus className="size-4" />
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="warning" size="sm">
    <Copy className="size-4" />
  </Button>
  <Button variant="warning">
    <Scissors className="size-4" />
  </Button>
  <Button variant="warning" size="lg">
    <Trash className="size-4" />
  </Button>
  <Button variant="warning" size="xl">
    <SquarePlus className="size-4" />
  </Button>
</div>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
            <Preview className="!flex-col">
              {() => ({
                preview: (
                  <>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled size="sm">
                        <Copy className="size-4" />
                      </Button>
                      <Button filled>
                        <Scissors className="size-4" />
                      </Button>
                      <Button filled size="lg">
                        <Trash className="size-4" />
                      </Button>
                      <Button filled size="xl">
                        <SquarePlus className="size-4" />
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="primary" size="sm">
                        <Copy className="size-4" />
                      </Button>
                      <Button filled variant="primary">
                        <Scissors className="size-4" />
                      </Button>
                      <Button filled variant="primary" size="lg">
                        <Trash className="size-4" />
                      </Button>
                      <Button filled variant="primary" size="xl">
                        <SquarePlus className="size-4" />
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="secondary" size="sm">
                        <Copy className="size-4" />
                      </Button>
                      <Button filled variant="secondary">
                        <Scissors className="size-4" />
                      </Button>
                      <Button filled variant="secondary" size="lg">
                        <Trash className="size-4" />
                      </Button>
                      <Button filled variant="secondary" size="xl">
                        <SquarePlus className="size-4" />
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="success" size="sm">
                        <Copy className="size-4" />
                      </Button>
                      <Button filled variant="success">
                        <Scissors className="size-4" />
                      </Button>
                      <Button filled variant="success" size="lg">
                        <Trash className="size-4" />
                      </Button>
                      <Button filled variant="success" size="xl">
                        <SquarePlus className="size-4" />
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="danger" size="sm">
                        <Copy className="size-4" />
                      </Button>
                      <Button filled variant="danger">
                        <Scissors className="size-4" />
                      </Button>
                      <Button filled variant="danger" size="lg">
                        <Trash className="size-4" />
                      </Button>
                      <Button filled variant="danger" size="xl">
                        <SquarePlus className="size-4" />
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="pending" size="sm">
                        <Copy className="size-4" />
                      </Button>
                      <Button filled variant="pending">
                        <Scissors className="size-4" />
                      </Button>
                      <Button filled variant="pending" size="lg">
                        <Trash className="size-4" />
                      </Button>
                      <Button filled variant="pending" size="xl">
                        <SquarePlus className="size-4" />
                      </Button>
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                      <Button filled variant="warning" size="sm">
                        <Copy className="size-4" />
                      </Button>
                      <Button filled variant="warning">
                        <Scissors className="size-4" />
                      </Button>
                      <Button filled variant="warning" size="lg">
                        <Trash className="size-4" />
                      </Button>
                      <Button filled variant="warning" size="xl">
                        <SquarePlus className="size-4" />
                      </Button>
                    </div>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled size="sm">
    <Copy className="size-4" />
  </Button>
  <Button filled>
    <Scissors className="size-4" />
  </Button>
  <Button filled size="lg">
    <Trash className="size-4" />
  </Button>
  <Button filled size="xl">
    <SquarePlus className="size-4" />
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="primary" size="sm">
    <Copy className="size-4" />
  </Button>
  <Button filled variant="primary">
    <Scissors className="size-4" />
  </Button>
  <Button filled variant="primary" size="lg">
    <Trash className="size-4" />
  </Button>
  <Button filled variant="primary" size="xl">
    <SquarePlus className="size-4" />
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="secondary" size="sm">
    <Copy className="size-4" />
  </Button>
  <Button filled variant="secondary">
    <Scissors className="size-4" />
  </Button>
  <Button filled variant="secondary" size="lg">
    <Trash className="size-4" />
  </Button>
  <Button filled variant="secondary" size="xl">
    <SquarePlus className="size-4" />
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="success" size="sm">
    <Copy className="size-4" />
  </Button>
  <Button filled variant="success">
    <Scissors className="size-4" />
  </Button>
  <Button filled variant="success" size="lg">
    <Trash className="size-4" />
  </Button>
  <Button filled variant="success" size="xl">
    <SquarePlus className="size-4" />
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="danger" size="sm">
    <Copy className="size-4" />
  </Button>
  <Button filled variant="danger">
    <Scissors className="size-4" />
  </Button>
  <Button filled variant="danger" size="lg">
    <Trash className="size-4" />
  </Button>
  <Button filled variant="danger" size="xl">
    <SquarePlus className="size-4" />
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="pending" size="sm">
    <Copy className="size-4" />
  </Button>
  <Button filled variant="pending">
    <Scissors className="size-4" />
  </Button>
  <Button filled variant="pending" size="lg">
    <Trash className="size-4" />
  </Button>
  <Button filled variant="pending" size="xl">
    <SquarePlus className="size-4" />
  </Button>
</div>
<div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="warning" size="sm">
    <Copy className="size-4" />
  </Button>
  <Button filled variant="warning">
    <Scissors className="size-4" />
  </Button>
  <Button filled variant="warning" size="lg">
    <Trash className="size-4" />
  </Button>
  <Button filled variant="warning" size="xl">
    <SquarePlus className="size-4" />
  </Button>
</div>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
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
        <a className="hover:text-foreground py-1.5" href="#variants">
          Variants
        </a>
      </Menu>
    </>
  );
}

export default Main;
