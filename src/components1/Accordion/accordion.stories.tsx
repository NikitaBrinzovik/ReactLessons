import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./accordion";

// чтоб не дублировать код, создадим переменную для Категорий:
const CategoryObj = (categoryName: "main" | 'Event' | 'Color') => ({
    table: {category: categoryName}
});
export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        color: {
            ...CategoryObj('Color'),
            /*control: 'color',
            table: {
                //в контролс создали категорию colors
                category: 'Colors'
            }*/
        },
        onAccordionTitleChange: {
            ...CategoryObj('Event')
            //создаём категорию в сторибук. Смотри 'controls'
            //table: {category: "Events"}
        },
        onClick: {
            //table: {category: "Events"}
            ...CategoryObj('Event')
        },
        items: {
            ...CategoryObj("main")
        },
        collapsed: {
            ...CategoryObj("main")
        },
        titleValue: {
            ...CategoryObj("main")
        },
    },
} as Meta;

const Template: Story<AccordionPropsType> =
    (args) => <Accordion {...args}/>;

//const callbackOnClick = action('some item was clicked')
const callback = action("Accordion event fired ");
const callbackProps = {//общие пропсыю деструктиризация
    //collapsed:false,
    onAccordionTitleChange: callback,
}

export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    ...callbackProps,
    collapsed: true,
    titleValue: "Menu",
    //items: {[]},
    //onClick:callbackOnClick,
}

export const UnCollapsedMode = Template.bind({});
UnCollapsedMode.args = {
    ...callbackProps,
    collapsed: false,
    titleValue: "Users",
    items: [{value: 1, name: "Nick"}, {value: 2, name: "Dima"}],
}

export const ChangeAccordionCondition: Story<AccordionPropsType> = (args) => {
    const [condition, setCondition] = useState<boolean>(true);
    return <Accordion
        {...args}
        collapsed={condition}
        onAccordionTitleChange={() => setCondition(!condition)}
    />
};
ChangeAccordionCondition.args = {
    //color:"green",
    titleValue: "Menu",
    items: [{value: 1, name: "Nick"}, {value: 2, name: "Dima"}],
    onClick: (value) => {
        alert(`user with ID ${value}`)
    },
}