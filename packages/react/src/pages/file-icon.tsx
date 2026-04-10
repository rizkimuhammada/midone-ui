import { FileIcon } from "@/components/ui/file-icon";

function Main() {
  return (
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
  );
}

export default Main;
