import React, {useState} from "react";
import {RatingValueType} from "../../Accordion/Rating/Rating";

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange:(value:RatingValueType)=>void
}
type StarPropsType = {
    selected: boolean
    setValue: () => void//Dispatch<SetStateAction<number>>
    // value: 1 | 2 | 3 | 4 | 5
}


export function SecretUncontrolledRating(props: RatingPropsType) {
    //let [value, setValue] = useState(4)
    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            <UncontrolledStar selected={ value > 0 } setValue={ () => { setValue(1) } } />
            {/*для storybook пришлось усложнить код, см след примеры*/}
            <UncontrolledStar selected={ value > 1 } setValue={ () => { setValue(2); props.onChange(2) } }/>
            <UncontrolledStar selected={ value > 2 } setValue={ () => { setValue(3); props.onChange(3) } }/>
            <UncontrolledStar selected={ value > 3 } setValue={ () => { setValue(4); props.onChange(4) } }/>
            <UncontrolledStar selected={ value > 4 } setValue={ () => { setValue(5); props.onChange(5) } }/>
        </div>
    )
}

export function SecretUncontrolledStar(props: StarPropsType) {
    // let [star, setStar] = useState(true)
    return <button onClick={ () => {props.setValue()} }>
        {props.selected
            ? <b style={{backgroundColor:"gold"}}> star </b>
            : " star "}
    </button>
}

export const UncontrolledStar = React.memo(SecretUncontrolledStar)
export const UncontrolledRating = React.memo(SecretUncontrolledRating)