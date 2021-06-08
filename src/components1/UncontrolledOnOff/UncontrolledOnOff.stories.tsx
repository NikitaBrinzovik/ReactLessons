import React from 'react';
import {Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledLamp} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledLamp(OnOff)',
    component: UncontrolledLamp,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const callback = action("on or off clicked");

export const LampOn = () => <UncontrolledLamp onChange={callback}/>;
export const LampOff = () => <UncontrolledLamp onChange={callback}/>;

export const DefaultInputValue = () => <input defaultValue={"1"}/>;