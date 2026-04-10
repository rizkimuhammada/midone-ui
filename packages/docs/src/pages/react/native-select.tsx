import {
    NativeSelect,
    NativeSelectOption,
    NativeSelectOptionGroup,
} from "@/components/ui/native-select";
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
                                <NativeSelect className="w-56">
                                    <NativeSelectOption value="">
                                        Select status
                                    </NativeSelectOption>
                                    <NativeSelectOption value="todo">Todo</NativeSelectOption>
                                    <NativeSelectOption value="in-progress">
                                        In Progress
                                    </NativeSelectOption>
                                    <NativeSelectOption value="done">Done</NativeSelectOption>
                                    <NativeSelectOption value="cancelled">
                                        Cancelled
                                    </NativeSelectOption>
                                </NativeSelect>
                            </>
                        ),
                        code: (
                            <PreviewCode>
                                {`
<NativeSelect className="w-56">
  <NativeSelectOption value="">Select status</NativeSelectOption>
  <NativeSelectOption value="todo">Todo</NativeSelectOption>
  <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
  <NativeSelectOption value="done">Done</NativeSelectOption>
  <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
</NativeSelect>
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
                <PreviewCode title="components/ui/native-select/index.tsx">
                    {`
import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";
import {
  nativeSelect,
  nativeSelectOption,
  NativeSelectOptGroup,
} from "@midoneui/core/styles/native-select.styles";

function NativeSelect({
  children,
  className,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <select className={cn(input, nativeSelect, className)} {...props}>
      {children}
    </select>
  );
}

function NativeSelectOption({
  children,
  className,
  ...props
}: React.ComponentProps<"option">) {
  return (
    <option className={cn(nativeSelectOption, className)} {...props}>
      {children}
    </option>
  );
}

function NativeSelectOptionGroup({
  children,
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup className={cn(NativeSelectOptGroup, className)} {...props}>
      {children}
    </optgroup>
  );
}

export { NativeSelect, NativeSelectOption, NativeSelectOptionGroup };
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
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptionGroup,
} from "@/components/ui/native-select";
                    `}
                </PreviewCode>
                <PreviewCode>
                    {`
<NativeSelect className="w-56">
  <NativeSelectOption value="">Select status</NativeSelectOption>
  <NativeSelectOption value="todo">Todo</NativeSelectOption>
  <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
  <NativeSelectOption value="done">Done</NativeSelectOption>
  <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
</NativeSelect>
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
                                <NativeSelect className="w-56">
                                    <NativeSelectOption value="">
                                        Select department
                                    </NativeSelectOption>
                                    <NativeSelectOptionGroup label="Engineering">
                                        <NativeSelectOption value="frontend">
                                            Frontend
                                        </NativeSelectOption>
                                        <NativeSelectOption value="backend">
                                            Backend
                                        </NativeSelectOption>
                                        <NativeSelectOption value="devops">
                                            DevOps
                                        </NativeSelectOption>
                                    </NativeSelectOptionGroup>
                                    <NativeSelectOptionGroup label="Sales">
                                        <NativeSelectOption value="sales-rep">
                                            Sales Rep
                                        </NativeSelectOption>
                                        <NativeSelectOption value="account-manager">
                                            Account Manager
                                        </NativeSelectOption>
                                        <NativeSelectOption value="sales-director">
                                            Sales Director
                                        </NativeSelectOption>
                                    </NativeSelectOptionGroup>
                                    <NativeSelectOptionGroup label="Operations">
                                        <NativeSelectOption value="support">
                                            Customer Support
                                        </NativeSelectOption>
                                        <NativeSelectOption value="product-manager">
                                            Product Manager
                                        </NativeSelectOption>
                                        <NativeSelectOption value="ops-manager">
                                            Operations Manager
                                        </NativeSelectOption>
                                    </NativeSelectOptionGroup>
                                </NativeSelect>
                            </>
                        ),
                        code: (
                            <PreviewCode>
                                {`
<NativeSelect className="w-56">
  <NativeSelectOption value="">Select department</NativeSelectOption>
  <NativeSelectOptionGroup label="Engineering">
    <NativeSelectOption value="frontend">Frontend</NativeSelectOption>
    <NativeSelectOption value="backend">Backend</NativeSelectOption>
    <NativeSelectOption value="devops">DevOps</NativeSelectOption>
  </NativeSelectOptionGroup>
  <NativeSelectOptionGroup label="Sales">
    <NativeSelectOption value="sales-rep">Sales Rep</NativeSelectOption>
    <NativeSelectOption value="account-manager">Account Manager</NativeSelectOption>
    <NativeSelectOption value="sales-director">Sales Director</NativeSelectOption>
  </NativeSelectOptionGroup>
  <NativeSelectOptionGroup label="Operations">
    <NativeSelectOption value="support">Customer Support</NativeSelectOption>
    <NativeSelectOption value="product-manager">Product Manager</NativeSelectOption>
    <NativeSelectOption value="ops-manager">Operations Manager</NativeSelectOption>
  </NativeSelectOptionGroup>
</NativeSelect>
                `}
                            </PreviewCode>
                        ),
                    })}
                </Preview>
                <Preview>
                    {() => ({
                        preview: (
                            <>
                                <NativeSelect className="w-56" disabled>
                                    <NativeSelectOption value="">
                                        Select status
                                    </NativeSelectOption>
                                    <NativeSelectOption value="todo">Todo</NativeSelectOption>
                                    <NativeSelectOption value="in-progress">
                                        In Progress
                                    </NativeSelectOption>
                                    <NativeSelectOption value="done">Done</NativeSelectOption>
                                    <NativeSelectOption value="cancelled">
                                        Cancelled
                                    </NativeSelectOption>
                                </NativeSelect>
                            </>
                        ),
                        code: (
                            <PreviewCode>
                                {`
<NativeSelect className="w-56" disabled>
  <NativeSelectOption value="">Select status</NativeSelectOption>
  <NativeSelectOption value="todo">Todo</NativeSelectOption>
  <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
  <NativeSelectOption value="done">Done</NativeSelectOption>
  <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
</NativeSelect>
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
