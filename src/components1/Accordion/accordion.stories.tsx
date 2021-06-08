import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionBodyPropsType} from "./accordion";


export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;


const callback = action("Accordion event fired ");

const Template: Story<AccordionBodyPropsType> = (args) => <Accordion collapsed={true} titleValue={'menu'}
                                                                     onAccordionTitleChange={() => {
                                                                     }} {...args} />;


const callbackProps = {//общие пропсыю деструктиризация
    collapsed: true,
    onAccordionTitleChange: callback,
}
export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    ...callbackProps,
    titleValue: "Menu",

}
export const UnCollapsedMode = Template.bind({});
UnCollapsedMode.args = {
    ...callbackProps,
    // collapsed:false,
    // onAccordionTitleChange:callback,
    titleValue: "Users",
}
// export const ChangeAccordionCondition = Template.bind({});
// ChangeAccordionCondition.args ={
//     titleValue:"Users",
//     collapsed:condition,
//     onAccordionTitleChange:callback,
// }

//export const CollapsedMode= () => <Accordion titleValue={"Menu"} collapsed={true} onAccordionTitleChange={callback} />;
//export const UnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onAccordionTitleChange={callback}/>;

export const ChangeAccordionCondition = () => {
    const [condition, setCondition] = useState<boolean>(true);
    return <Accordion titleValue={"Menu"}
                      collapsed={condition}
                      onAccordionTitleChange={() => setCondition(!condition)}
    />
};