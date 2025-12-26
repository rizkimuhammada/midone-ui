import { useContext } from "react";
import { FrameworkContext } from "../../App";
import { MoveUpRight } from "lucide-react";
import { Wrapper, Title, Subtitle, Menu, ApiButton } from "@/components/docs";
import React from "./react";
import Vue from "./vue";

function Main() {
  const { framework } = useContext(FrameworkContext);

  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Checkbox</Title>
            <Subtitle>
              A small box users can tick on or off to select options or confirm
              choices.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/checkbox"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/checkbox#methods-and-properties"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
            </div>
          </div>
          {framework[0] == "React" && <React />}
          {framework[0] == "Vue" && <Vue />}
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
