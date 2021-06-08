import React, {ChangeEvent, useRef, useState} from 'react';


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
    const ourOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }
    return <><input onChange={ourOnChange}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}> save</button>
        - actual value:{value}</>

}


export const ControlledInputWithFixValue = () => <input value={"hard-code"}/>;