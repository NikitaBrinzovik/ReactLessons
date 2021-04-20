import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {

    console.log("Accordion is rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody collapsed={props.collapsed}/>
        </div>
    );
}

export default Accordion;