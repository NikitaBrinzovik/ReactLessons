import Star from "./Star";
import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: RatingValueType
    onPick: (value:RatingValueType) => void
}

function Rating(props: RatingPropsType) {

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
    // if (props.value === 1) {
    //     return <div>
    //         <Star selected={true}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //     </div>
    // }
    // if (props.value === 2) {
    //     return <div>
    //         <Star selected={true}/>
    //         <Star selected={true}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //     </div>
    // }
    // if (props.value === 3) {
    //     return <div>
    //         <Star selected={true}/>
    //         <Star selected={true}/>
    //         <Star selected={true}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //     </div>
    // }
    // if (props.value === 4) {
    //     return <div>
    //         <Star selected={true}/>
    //         <Star selected={true}/>
    //         <Star selected={true}/>
    //         <Star selected={true}/>
    //         <Star selected={false}/>
    //     </div>
    // }
    // if (props.value === 5) {
    //     return <div>
    //         <Star selected={true}/>
    //         <Star selected={true}/>
    //         <Star selected={true}/>
    //         <Star selected={true}/>
    //         <Star selected={true}/>
    //     </div>
    // }
    //
    // return <div>
    //     <Star selected={false}/>
    //     <Star selected={false}/>
    //     <Star selected={false}/>
    //     <Star selected={false}/>
    //     <Star selected={false}/>
    // </div>


}

export default Rating;

