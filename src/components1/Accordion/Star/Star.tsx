import React from "react";
import {RatingValueType} from "../Rating/Rating";

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onPick: (value: RatingValueType) => void

}

function Star(props: StarPropsType) {

        return <button onClick={ () => { props.onPick(props.value)} }>
            {props.selected
                ? <b style={{backgroundColor:"gold"}}> star</b>
                : " star"}
        </button>


}

export default Star;
