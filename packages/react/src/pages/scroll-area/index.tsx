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
                        <Title>Scroll Area</Title>
                        <Subtitle>
                            A custom scrollbar component that provides a consistent look and
                            feel across different browsers and platforms.
                        </Subtitle>
                    </div>
                    {framework[0] === "React" && <React />}
                    {framework[0] === "Vue" && <Vue />}
                </div>
            </Wrapper>
            <Menu>
                <a className="hover:text-foreground py-1.5" href="#preview">
                    Preview
                </a>
                <a className="hover:text-foreground py-1.5" href="#installation">
                    Installation
                </a>
                <a className="hover:text-foreground py-1.5" href="#usage">
                    Usage
                </a>
            </Menu>
        </>
    );
}

export default Main;
