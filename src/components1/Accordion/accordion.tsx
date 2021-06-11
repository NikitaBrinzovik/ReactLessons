import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * Так можно оставлять комменты, которые видны в storybook
     */
    onAccordionTitleChange: () => void
    items: ItemType[]
    //items: string[]//Array<string>
    onClick: (value: any) => void
    /**
     * Color of header text
     */
    color: string
}
export type AccordionTitlePropsType = {
    title: string
    onAccordionTitleChange: () => void
    color?: string
}
export type AccordionBodyPropsType = {
    // collapsed: () => void
    /**
     * Так можно оставлять комменты, которые видны в storybook
     */
    items: ItemType[]
    onClick: (value: any) => void
}
export type ItemType = {
    value: any
    name: string
}

export function SecretAccordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            color={props.color}
                            onAccordionTitleChange={props.onAccordionTitleChange}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

export function SecretAccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle is rendering")
    return <h3
        style={{color: props.color ? props.color : "orange"}}
        onClick={() => props.onAccordionTitleChange()
        }>
        {props.title}
    </h3>
}

export function SecretAccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {
                props.onClick(i.value + " eeee")
            }} key={index}>{i.name}</li>)}
        </ul>)
}

export const AccordionTitle = React.memo(SecretAccordionTitle)
export const Accordion = React.memo(SecretAccordion)
export const AccordionBody = React.memo(SecretAccordionBody)
