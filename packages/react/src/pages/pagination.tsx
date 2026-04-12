import { PaginationRoot } from "@/components/ui/pagination";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid sm:grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <PaginationRoot count={5000} pageSize={10} siblingCount={2} />
        </div>
      </div>
    </div>
  );
}

export default Main;
