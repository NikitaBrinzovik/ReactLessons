import UncontrolledStar from "./UncontrolledStar";
import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function UncontrolledRating(props: RatingPropsType) {

    console.log("Rating is rendering")

    return (
        <div>
            <UncontrolledStar selected={props.value > 0}/>
            <UncontrolledStar selected={props.value > 1}/>
            <UncontrolledStar selected={props.value > 2}/>
            <UncontrolledStar selected={props.value > 3}/>
            <UncontrolledStar selected={props.value > 4}/>
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

    return <div>
        <UncontrolledStar selected={false}/>
        <UncontrolledStar selected={false}/>
        <UncontrolledStar selected={false}/>
        <UncontrolledStar selected={false}/>
        <UncontrolledStar selected={false}/>
    </div>


}

export default UncontrolledRating;