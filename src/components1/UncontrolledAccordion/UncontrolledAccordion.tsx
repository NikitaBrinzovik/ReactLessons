import React from "react";
import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {

    console.log("Accordion is rendering")
    return (
        <div>
            <UncontrolledAccordionTitle title={props.titleValue}/>
            <UncontrolledAccordionBody />
            {/*collapsed={props.collapsed}*/}
        </div>
    );
}

export default UncontrolledAccordion;