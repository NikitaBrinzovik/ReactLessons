import {ItemType, Select, SelectPropsType} from "./Select";
import {Meta, Story} from "@storybook/react";
import {ChangeEvent, useState} from "react";

export default {
    title: 'Select',
    component: Select,
    argTypes: {}
} as Meta

export const ControlledSelect: Story<SelectPropsType> = (args) => {
    const [parentValue, setParentValue] = useState('');

    let ourOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    };
    return <Select {...args} ourOnChange={ourOnChange} value={parentValue}/>
}

ControlledSelect.args = {
    //value: 'fff',
    // ourOnChange: (value) => {
    //     alert(`user with ID ${value} trying to do something`)
    // },
    items: [{value: 1, title: 'minsk'}, {value: 1, title: 'spb'},]
}