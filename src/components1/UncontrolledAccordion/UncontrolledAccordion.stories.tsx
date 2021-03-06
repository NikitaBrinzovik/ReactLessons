import React from 'react';
import { Story, Meta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UnconAccordWithREDUCER";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;
//const callback = action("UncontrolledAccordion event fired ");

export const ChangeAccordionCondition = () => {
    return <UncontrolledAccordion titleValue={"Menu"} />
};

//export const ChangeAccordionCondition = React.memo(SecretChangeAccordionCondition)