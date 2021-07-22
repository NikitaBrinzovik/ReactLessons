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
};
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
};

export const ControlledInputWithFixValue = () => <input value={"hard-code"}/>;

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");
    let ourOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={ourOnChange}/>
};

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true);
    let ourOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    };
    return <input type="checkbox" checked={parentValue} onChange={ourOnChange}/>
};
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState('');
    //const[parentValue, setParentValue] = useState<string | null>(null);
    let ourOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    };
    return <select value={parentValue} onChange={ourOnChange}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>
    </select>
};