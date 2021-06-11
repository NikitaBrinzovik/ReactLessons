import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}
type UncontrolledAccordionTitlePropsType = {
    title: string
    onClick: () => void
}
type AccordionBodyPropsType = {
    // collapsed: boolean
}


export function SecretUncontrolledAccordion(props: UncontrolledAccordionPropsType) {
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

export function SecretUncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
}

export function SecretUncontrolledAccordionBody(props: AccordionBodyPropsType) {
    let [collapsed, setCollapsed] = useState(true);

    if (collapsed) {
        return (
            <div>
                {/*<button onClick={() => setCollapsed(false)}>collapse</button>*/}
                <ul style={{listStyle:"none"}}>
                    <li>css</li>
                    <li>HTML</li>
                    <li>JS</li>
                    <li>TS</li>
                </ul>
            </div>
        )
    } else {
        return <button onClick={() => setCollapsed(true)}>expand</button>
    }
}

export const UncontrolledAccordion = React.memo(SecretUncontrolledAccordion)
export const UncontrolledAccordionTitle = React.memo(SecretUncontrolledAccordionTitle)
export const UncontrolledAccordionBody = React.memo(SecretUncontrolledAccordionBody)
