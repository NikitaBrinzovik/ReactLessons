import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./accordion";

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;
const callback = action("Accordion event fired ");

export const CollapsedMode= () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} />;
export const UnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}/>;

export const ChangeAccordionCondition = () => {
    const [condition, setCondition] = useState<boolean>(true);
    return <Accordion titleValue={"Menu"} collapsed={condition} onChange={() => setCondition(!condition)}/>};