import { useContext } from "react";
import { FrameworkContext } from "../App";
import { Wrapper, Title, Subtitle, Menu } from "@/components/docs";
import React from "./react/map";
import Vue from "./vue/map";

function Main() {
    const { framework } = useContext(FrameworkContext);

    return (
        <>
            <Wrapper>
                <div className="flex flex-col gap-20">
                    <div>
                        <Title>Map</Title>
                        <Subtitle>
                            An interactive map component powered by MapLibre GL, featuring
                            clustering, markers, and custom controls.
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
            </Menu>
        </>
    );
}

export default Main;
