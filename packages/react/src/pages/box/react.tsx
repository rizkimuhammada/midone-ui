import { CircleGauge } from "lucide-react";
import { Box } from "@/components/ui/box";
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
                <Box className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Box className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
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
        <PreviewCode title="components/ui/box/index.tsx">
          {`
import { cn } from "@midoneui/core/utils/cn";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";

export function Box({
  children,
  className,
  filled,
  variant,
  raised,
  ...props
}: React.ComponentProps<"div"> & BoxVariants) {
  return (
    <div
      className={cn(
        boxVariants({ filled, variant, raised, className }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
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
import { Box } from "@/components/ui/box";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<Box className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
              `}
        </PreviewCode>
      </div>
      <div id="variants">
        <SectionTitle>Variants</SectionTitle>
        <SectionContent>A collection of components you can use.</SectionContent>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <Box className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="primary" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="secondary" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="success" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="danger" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="pending" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="warning" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Box className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="primary" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="secondary" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="success" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="danger" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="pending" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="warning" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <Box raised="single" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="primary" raised="single" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="secondary" raised="single" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="success" raised="single" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="danger" raised="single" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="pending" raised="single" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="warning" raised="single" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Box raised="single" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="primary" raised="single" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="secondary" raised="single" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="success" raised="single" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="danger" raised="single" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="pending" raised="single" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="warning" raised="single" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <Box raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="primary" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="secondary" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="success" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="danger" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="pending" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="warning" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Box raised="double" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="primary" raised="double" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="secondary" raised="double" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="success" raised="double" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="danger" raised="double" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="pending" raised="double" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="warning" raised="double" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <Box filled raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box filled variant="primary" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box
                  filled
                  variant="secondary"
                  raised="double"
                  className="w-70"
                >
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box filled variant="success" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box filled variant="danger" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box filled variant="pending" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box filled variant="warning" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Box filled raised="double" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box filled variant="primary" raised="double" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box filled variant="secondary" raised="double" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box filled variant="success" raised="double" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box filled variant="danger" raised="double" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box filled variant="pending" raised="double" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box filled variant="warning" raised="double" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div className="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
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
