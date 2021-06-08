import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';


export default {
    title: 'input',
    //component: Button,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
}

export const UncontrolledInput = () => <input/>;
export const TrackedValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(event) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    } }/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    return <><input /> <button onClick={ () => {setValue(value)}}> save </button> - actual value:{value}</>

}


export const ControlledInputWithFixValue = () => <input value={"ggg"}/>;