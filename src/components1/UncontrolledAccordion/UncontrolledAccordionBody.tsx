import React, {useState} from "react";

type AccordionBodyPropsType = {
    // collapsed: boolean
}

export function UncontrolledAccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody is rendering")
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