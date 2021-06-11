import React, {useReducer, useState} from "react";

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

type ActionType = {
    type: string
}
//он тут избыточен, но мы просто тренеруемся
export type StateType = {
    collapsed: boolean
}
export const reducer = (state:StateType, action:ActionType):StateType => {
    if(action.type === "TOGGLE_COLLAPSED"){
        const stateCopy = {...state}
        stateCopy.collapsed = !state.collapsed
        return stateCopy;
        //запись короче:
        //return = {...state, collapsed: !state.collapsed}
    }
    return state;
}


export function SecretUncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    //let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    console.log("Accordion is rendering")
    return (
        <div>
            <UncontrolledAccordionTitle
                title={props.titleValue}
                //onClick={() => {setCollapsed(!collapsed)}}-через стейт
                onClick={() => {dispatch({type:"TOGGLE_COLLAPSED"})}}
            />
            {/*{ !collapsed && <UncontrolledAccordionBody /> } -через стейт*/}
            { !state.collapsed && <UncontrolledAccordionBody /> }
        </div>
    );
}

export function SecretUncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
}

export function SecretUncontrolledAccordionBody(props: AccordionBodyPropsType) {
    let [collapsed, setCollapsed] = useState(false);

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
