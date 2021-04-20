import React from "react";

type AccordionTitlePropsType = {
    title: string
}

export function UncontrolledAccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle is rendering")
    return <h3>{props.title}</h3>
}