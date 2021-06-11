import Star from "./Star/Star";
import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: RatingValueType
    onPick: (value:RatingValueType) => void
}

function SecretRating(props: RatingPropsType) {

    console.log("Rating is rendering")

    return (
        <div>
            <Star selected={props.value > 0} onPick={props.onPick} value={1}/>
            <Star selected={props.value > 1} onPick={props.onPick} value={2}/>
            <Star selected={props.value > 2} onPick={props.onPick} value={3}/>
            <Star selected={props.value > 3} onPick={props.onPick} value={4}/>
            <Star selected={props.value > 4} onPick={props.onPick} value={5}/>
        </div>
    )
}

const Rating = React.memo(SecretRating)
export default Rating;

