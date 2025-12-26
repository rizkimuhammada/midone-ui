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
            <Title>Tooltip</Title>
            <Subtitle>
              A tiny message that appears when users hover or focus on an
              element to explain what it does.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/tooltip"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/tooltip#methods-and-properties"
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
