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
            <Title>Combobox</Title>
            <Subtitle>
              A dropdown that lets users pick an option, with search support to
              help them find it quickly.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <ApiButton
                target="_blank"
                href="https://zzgjsom/nreact/react/react/combobox"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
              <ApiButton
                target="_blank"
                href="https://zzgjsom/nreact/react/react/combobox#api-reference"
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
