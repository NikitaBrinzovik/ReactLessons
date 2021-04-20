import React from "react";

type UncontrolledAccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    console.log("AccordionTitle is rendering")
    return <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
}