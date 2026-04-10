import { PaginationRoot } from "@/components/ui/pagination";

function Main() {
  return <PaginationRoot count={5000} pageSize={10} siblingCount={2} />;
}

export default Main;
