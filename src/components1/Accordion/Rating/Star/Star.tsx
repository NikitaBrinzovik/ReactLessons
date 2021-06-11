import React from "react";
import {RatingValueType} from "../Rating";

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onPick: (value: RatingValueType) => void

}

function SecretStar(props: StarPropsType) {

        return <button onClick={ () => { props.onPick(props.value)} }>
            {props.selected
                ? <b style={{backgroundColor:"gold"}}> star</b>
                : " star"}
        </button>


}
const Star = React.memo(SecretStar)
export default Star;
