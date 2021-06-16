import React, {useState} from "react";

export default {
    title: 'useState demo'
}

function generateData () {
    console.log('generateData')
    return 1;
}
export const ExampleUseState = () => {
    console.log('ExampleUseState')
    const [state, setState] = useState<number>(generateData)
    /*const changer = (state:number) => {
        return state + 1;
    }*/

    return (
        <>
            {/*<button onClick={() => setState(changer) }> + </button>*/}
            <button onClick={() => setState(state => state + 1) }> + </button>
            {state}
        </>
    )
}