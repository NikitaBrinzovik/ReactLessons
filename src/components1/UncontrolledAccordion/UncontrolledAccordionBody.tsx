import React from "react";

type AccordionBodyPropsType = {
    collapsed: boolean
}

export function UncontrolledAccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody is rendering")

    if (!props.collapsed ) {
        return (
            <ul>
                <li>css</li>
                <li>HTML</li>
                <li>JS</li>
                <li>TS</li>
            </ul>)
    } else { return <></>
    }
}