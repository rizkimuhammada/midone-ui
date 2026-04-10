import { ChevronDown, CheckSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
                <Badge variant="primary">12%</Badge>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Badge variant="primary">12%</Badge>
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
        <PreviewCode title="components/ui/badge/index.tsx">
          {`
import { cn } from "@midoneui/core/utils/cn";
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  badgeVariants,
  type BadgeVariants,
} from "@midoneui/core/styles/badge.styles";

function Badge({
  className,
  children,
  look,
  variant,
  content,
  ...props
}: React.ComponentProps<"span"> &
  BadgeVariants & {
    content?: string;
  }) {
  return (
    <TooltipRoot disabled={!content}>
      <TooltipTrigger asChild>
        <span
          {...props}
          className={cn(badgeVariants({ look, variant, className }))}
        >
          {children}
        </span>
      </TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </TooltipRoot>
  );
}

export { Badge };
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
import { Badge } from "@/components/ui/badge";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<Badge>12%</Badge>
              `}
        </PreviewCode>
      </div>
      <div id="variants">
        <SectionTitle>Variants</SectionTitle>
        <SectionContent>A collection of components you can use.</SectionContent>
        <Preview>
          {() => ({
            preview: (
              <>
                <Badge variant="primary">12%</Badge>
                <Badge variant="secondary">12%</Badge>
                <Badge variant="success">12%</Badge>
                <Badge variant="danger">12%</Badge>
                <Badge variant="pending">12%</Badge>
                <Badge variant="warning">12%</Badge>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Badge variant="primary">12%</Badge>
<Badge variant="secondary">12%</Badge>
<Badge variant="success">12%</Badge>
<Badge variant="danger">12%</Badge>
<Badge variant="pending">12%</Badge>
<Badge variant="warning">12%</Badge>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <Badge variant="primary">
                  12% <ChevronDown />
                </Badge>
                <Badge variant="secondary">
                  12% <ChevronDown />
                </Badge>
                <Badge variant="success">
                  12% <ChevronDown />
                </Badge>
                <Badge variant="danger">
                  12% <ChevronDown />
                </Badge>
                <Badge variant="pending">
                  12% <ChevronDown />
                </Badge>
                <Badge variant="warning">
                  12% <ChevronDown />
                </Badge>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Badge variant="primary"> 12% <ChevronDown /> </Badge>
<Badge variant="secondary"> 12% <ChevronDown /> </Badge>
<Badge variant="success"> 12% <ChevronDown /> </Badge>
<Badge variant="danger"> 12% <ChevronDown /> </Badge>
<Badge variant="pending"> 12% <ChevronDown /> </Badge>
<Badge variant="warning"> 12% <ChevronDown /> </Badge>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <Badge look="outline" variant="primary">
                  12%
                </Badge>
                <Badge look="outline" variant="secondary">
                  12%
                </Badge>
                <Badge look="outline" variant="success">
                  12%
                </Badge>
                <Badge look="outline" variant="danger">
                  12%
                </Badge>
                <Badge look="outline" variant="pending">
                  12%
                </Badge>
                <Badge look="outline" variant="warning">
                  12%
                </Badge>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Badge look="outline" variant="primary"> 12% </Badge>
<Badge look="outline" variant="secondary"> 12% </Badge>
<Badge look="outline" variant="success"> 12% </Badge>
<Badge look="outline" variant="danger"> 12% </Badge>
<Badge look="outline" variant="pending"> 12% </Badge>
<Badge look="outline" variant="warning"> 12% </Badge>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <Badge look="outline" variant="primary">
                  12% <ChevronDown />
                </Badge>
                <Badge look="outline" variant="secondary">
                  12% <ChevronDown />
                </Badge>
                <Badge look="outline" variant="success">
                  12% <ChevronDown />
                </Badge>
                <Badge look="outline" variant="danger">
                  12% <ChevronDown />
                </Badge>
                <Badge look="outline" variant="pending">
                  12% <ChevronDown />
                </Badge>
                <Badge look="outline" variant="warning">
                  12% <ChevronDown />
                </Badge>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Badge look="outline" variant="primary"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="secondary"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="success"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="danger"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="pending"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="warning"> 12% <ChevronDown /> </Badge>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <Badge look="filled" variant="primary">
                  12%
                </Badge>
                <Badge look="filled" variant="secondary">
                  12%
                </Badge>
                <Badge look="filled" variant="success">
                  12%
                </Badge>
                <Badge look="filled" variant="danger">
                  12%
                </Badge>
                <Badge look="filled" variant="pending">
                  12%
                </Badge>
                <Badge look="filled" variant="warning">
                  12%
                </Badge>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Badge look="filled" variant="primary"> 12% </Badge>
<Badge look="filled" variant="secondary"> 12% </Badge>
<Badge look="filled" variant="success"> 12% </Badge>
<Badge look="filled" variant="danger"> 12% </Badge>
<Badge look="filled" variant="pending"> 12% </Badge>
<Badge look="filled" variant="warning"> 12% </Badge>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <Badge look="filled" variant="primary">
                  12% <ChevronDown />
                </Badge>
                <Badge look="filled" variant="secondary">
                  12% <ChevronDown />
                </Badge>
                <Badge look="filled" variant="success">
                  12% <ChevronDown />
                </Badge>
                <Badge look="filled" variant="danger">
                  12% <ChevronDown />
                </Badge>
                <Badge look="filled" variant="pending">
                  12% <ChevronDown />
                </Badge>
                <Badge look="filled" variant="warning">
                  12% <ChevronDown />
                </Badge>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Badge look="filled" variant="primary"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="secondary"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="success"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="danger"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="pending"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="warning"> 12% <ChevronDown /> </Badge>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <Badge
                  look="outline"
                  variant="primary"
                  content="12% Higher than last month"
                >
                  <CheckSquare /> 12%
                </Badge>
                <Badge
                  look="outline"
                  variant="secondary"
                  content="12% Higher than last month"
                >
                  <CheckSquare /> 12%
                </Badge>
                <Badge
                  look="outline"
                  variant="success"
                  content="12% Higher than last month"
                >
                  <CheckSquare /> 12%
                </Badge>
                <Badge
                  look="outline"
                  variant="danger"
                  content="12% Higher than last month"
                >
                  <CheckSquare /> 12%
                </Badge>
                <Badge
                  look="outline"
                  variant="pending"
                  content="12% Higher than last month"
                >
                  <CheckSquare /> 12%
                </Badge>
                <Badge
                  look="outline"
                  variant="warning"
                  content="12% Higher than last month"
                >
                  <CheckSquare /> 12%
                </Badge>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Badge look="outline" variant="primary" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
<Badge look="outline" variant="secondary" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
<Badge look="outline" variant="success" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
<Badge look="outline" variant="danger" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
<Badge look="outline" variant="pending" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
<Badge look="outline" variant="warning" content="12% Higher than last month">
  <CheckSquare /> 12%
</Badge>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
    </>
  );
}

export default Main;
