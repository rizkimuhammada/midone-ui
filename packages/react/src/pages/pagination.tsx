import {
  PaginationContext,
  PaginationRoot,
  PaginationItem,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationEllipsis,
} from "@/components/ui/pagination";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <PaginationRoot count={5000} pageSize={10} siblingCount={2}>
            <PaginationPrevTrigger>Previous</PaginationPrevTrigger>
            <PaginationContext>
              {(pagination) =>
                pagination.pages.map((page, index) =>
                  page.type === "page" ? (
                    <PaginationItem key={index} {...page}>
                      {page.value}
                    </PaginationItem>
                  ) : (
                    <PaginationEllipsis key={index} index={index} />
                  )
                )
              }
            </PaginationContext>
            <PaginationNextTrigger>Next</PaginationNextTrigger>
          </PaginationRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
