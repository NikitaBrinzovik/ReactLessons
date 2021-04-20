import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {

    console.log("Accordion is rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody />}
        </div>
    );
}
