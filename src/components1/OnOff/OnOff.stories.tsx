import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';

import { Lamp } from './onOff';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Lamp(OnOff) stories',
    component: Lamp,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;
const callback = action("on or off clicked");

export const SecretLampOn= () => <Lamp onChange={callback} on={true}/>;
export const SecretLampOff = () => <Lamp onChange={callback} on={false}/>;
export const SecretChangeLampCondition = () => {
    const [condition, setCondition] = useState<boolean>(true);
    return <Lamp on={condition} onChange={setCondition}/>;
}
export const LampOn = React.memo(SecretLampOn)
export const LampOff = React.memo(SecretLampOff)
export const ChangeLampCondition = React.memo(SecretChangeLampCondition)

