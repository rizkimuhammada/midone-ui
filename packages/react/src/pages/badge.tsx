import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <Badge>12%</Badge>
          <Badge variant="primary">12%</Badge>
          <Badge variant="secondary">12%</Badge>
          <Badge variant="success">12%</Badge>
          <Badge variant="danger">12%</Badge>
          <Badge variant="pending">12%</Badge>
          <Badge variant="warning">12%</Badge>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <Badge>
            12% <ChevronDown />
          </Badge>
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
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <Badge filled>12%</Badge>
          <Badge filled variant="primary">
            12%
          </Badge>
          <Badge filled variant="secondary">
            12%
          </Badge>
          <Badge filled variant="success">
            12%
          </Badge>
          <Badge filled variant="danger">
            12%
          </Badge>
          <Badge filled variant="pending">
            12%
          </Badge>
          <Badge filled variant="warning">
            12%
          </Badge>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <Badge filled>
            12% <ChevronDown />
          </Badge>
          <Badge filled variant="primary">
            12% <ChevronDown />
          </Badge>
          <Badge filled variant="secondary">
            12% <ChevronDown />
          </Badge>
          <Badge filled variant="success">
            12% <ChevronDown />
          </Badge>
          <Badge filled variant="danger">
            12% <ChevronDown />
          </Badge>
          <Badge filled variant="pending">
            12% <ChevronDown />
          </Badge>
          <Badge filled variant="warning">
            12% <ChevronDown />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Main;
