import { useContext } from "react";
import { FrameworkContext } from "../../App";
import { Wrapper, Title, Subtitle, Menu } from "@/components/docs";
import React from "./react";
import Vue from "./vue";

function Main() {
    const { framework } = useContext(FrameworkContext);

    return (
        <>
            <Wrapper>
                <div className="flex flex-col gap-20">
                    <div>
                        <Title>Field</Title>
                        <Subtitle>
                            A set of components for building accessible form layouts with
                            labels, descriptions, error messages, and field grouping.
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
