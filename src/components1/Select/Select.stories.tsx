import { Select, SelectPropsType} from "./Select";
import {Meta, Story} from "@storybook/react";
import React, { useState} from "react";

export default {
    title: 'Select',
    component: Select,
    argTypes: {
        ourOnChange: {table: 'func'}
    }
} as Meta

export const SelectExample: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState('2');

    return <Select
        {...args}
        value={value}
        ourOnChange={setValue}
    />
}

export const SelectExampleWithoutValue = () => {
    const [value, setValue] = useState(null);
    return <>
        <Select
            //ourOnChange={action(`user with ID`)}
            ourOnChange={setValue}
            value={value}
            items={[{value: "1", title: 'minsk'}, {value: "2", title: 'spb'},]}
        />
    </>
}

SelectExample.args = {
    //value: '2',
    //ourOnChange: (value) => {action(`user with ID ${value} trying to do something`)()},
    items: [{value: "1", title: 'minsk'}, {value: "2", title: 'spb'},{value: "3", title: 'kiev'}]
}

//export const SelectExampleWithoutValue = React.memo(SecretSelectExampleWithoutValue)
//export const SelectExample = React.memo(SecretSelectExample)