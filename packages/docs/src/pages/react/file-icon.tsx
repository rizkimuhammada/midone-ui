import { FileIcon } from "@/components/ui/file-icon";
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
                <div className="flex flex-col gap-20">
                  <div className="grid grid-cols-2">
                    <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
                      <FileIcon variant="empty-directory" className="w-16" />
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
                      <FileIcon variant="directory" className="w-16" />
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
                      <FileIcon variant="file" type="PDF" className="w-16" />
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
                      <FileIcon variant="file" type="TXT" className="w-16" />
                    </div>
                  </div>
                </div>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<FileIcon variant="empty-directory" className="w-16" />
<FileIcon variant="directory" className="w-16" />
<FileIcon variant="file" type="PDF" className="w-16" />
<FileIcon variant="file" type="TXT" className="w-16" />
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
        <PreviewCode title="components/ui/file-icon/index.tsx">
          {`
import { cn } from "@midoneui/core/utils/cn";
import {
  fileIconRoot,
  fileIconIcon,
  fileIconLabel,
  fileIconImage,
  fileIconImg,
  type FileIconVariants,
} from "@midoneui/core/styles/file-icon.styles";
import { Slot } from "@/components/ui/slot";

export interface FileIconProps
  extends React.ComponentPropsWithoutRef<"div">,
    FileIconVariants {
  asChild?: boolean;
  type?: string;
  src?: string;
}

export function FileIcon({
  className,
  variant,
  type,
  src,
  asChild = false,
  ...props
}: FileIconProps) {
  return (
    <Slot
      className={cn(fileIconRoot, className)}
      data-scope="file-icon"
      data-part="root"
      {...props}
    >
      {asChild ? (
        props.children
      ) : (
        <div>
          <div
            className={cn(fileIconIcon({ variant }))}
            data-scope="file-icon"
            data-part="icon"
          >
            {variant === "file" && (
              <div
                className={cn(fileIconLabel)}
                data-scope="file-icon"
                data-part="label"
              >
                {type}
              </div>
            )}
            {variant === "image" && (
              <div
                className={cn(fileIconImage)}
                data-scope="file-icon"
                data-part="image"
              >
                <img
                  className={cn(fileIconImg)}
                  src={src}
                  alt={variant}
                  data-scope="file-icon"
                  data-part="img"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </Slot>
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
import { FileIcon } from "@/components/ui/file-icon";
          `}
        </PreviewCode>
        <PreviewCode>
          {`
<FileIcon variant="empty-directory" className="w-16" />
<FileIcon variant="directory" className="w-16" />
<FileIcon variant="file" type="PDF" className="w-16" />
          `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
