import React, {useState} from "react";
import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";

type UncontrolledAccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}


function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)
    console.log("Accordion is rendering")
    return (
        <div>
            <UncontrolledAccordionTitle
                title={props.titleValue}
                onClick={() => {setCollapsed(!collapsed)}}
            />


            { !collapsed && <UncontrolledAccordionBody /> }

        </div>
    );
}


export default UncontrolledAccordion;