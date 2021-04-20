import UncontrolledStar from "./UncontrolledStar";
import React, {useState} from "react";

type RatingPropsType = {

}

function UncontrolledRating(props: RatingPropsType) {

    console.log("Rating is rendering")
    let [value, setValue] = useState(4)
    return (
        <div>
            <UncontrolledStar selected={ value > 0 } setValue={ () => { setValue(1) } } />
            <UncontrolledStar selected={ value > 1 } setValue={ () => { setValue(2) } }/>
            <UncontrolledStar selected={ value > 2 } setValue={ () => { setValue(3) } }/>
            <UncontrolledStar selected={ value > 3 } setValue={ () => { setValue(4) } }/>
            <UncontrolledStar selected={ value > 4 } setValue={ () => { setValue(5) } }/>
        </div>
    )
}

export default UncontrolledRating;