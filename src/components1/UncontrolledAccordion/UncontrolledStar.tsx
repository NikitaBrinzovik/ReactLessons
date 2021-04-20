import React, {Dispatch, SetStateAction, useState} from "react";

type StarPropsType = {
    selected: boolean
    setValue: () => void//Dispatch<SetStateAction<number>>
    // value: 1 | 2 | 3 | 4 | 5
}

function UncontrolledStar(props: StarPropsType) {
    // let [star, setStar] = useState(true)
    return <button onClick={ () => {props.setValue()} }>
        {props.selected
            ? <b style={{backgroundColor:"gold"}}> star </b>
            : " star "}
    </button>

    // if (props.selected) {
    //     return <span><b>star</b> </span>;
    // } else {
    //     return <span>star </span>;
    // }
}

export default UncontrolledStar;
