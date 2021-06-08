import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * Так можно оставлять комменты, которые видны в storybook
     */
    onAccordionTitleChange: () => void
}
export type AccordionTitlePropsType = {
    title: string
    onAccordionTitleChange: () => void
}
export type AccordionBodyPropsType = {
    // collapsed: () => void
    /**
     * Так можно оставлять комменты, которые видны в storybook
     */
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onAccordionTitleChange={props.onAccordionTitleChange}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle is rendering")
    return <h3 onClick={(e) => props.onAccordionTitleChange()}>{props.title}</h3>
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
