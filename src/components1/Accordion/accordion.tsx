import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}
type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
type AccordionBodyPropsType = {
    // collapsed: () => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle is rendering")
    return <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
}

export function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            <li>css</li>
            <li>HTML</li>
            <li>JS</li>
            <li>TS</li>
        </ul>)
}
