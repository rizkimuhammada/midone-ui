import { useContext } from "react";
import { FrameworkContext } from "../App";
import { Wrapper, Title, Subtitle, Menu } from "@/components/docs";
import React from "./react/slot";
import Vue from "./vue/slot";

function Main() {
  const { framework } = useContext(FrameworkContext);

  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Slot</Title>
            <Subtitle>
              A utility component that merges its props onto its immediate child,
              commonly used for implementing an "asChild" pattern.
            </Subtitle>
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
