import React from "react";

type AccordionBodyPropsType = {
    // collapsed: () => void
}
export function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody is rendering")

    return (
        <ul>
            <li>css</li>
            <li>HTML</li>
            <li>JS</li>
            <li>TS</li>
        </ul>)
}