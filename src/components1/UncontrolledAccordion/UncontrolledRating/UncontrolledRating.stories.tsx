import React from 'react';
import {  Meta } from '@storybook/react';
import { UncontrolledRating } from './UncontrolledRating';
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const callback = action("raiting changed")

 export const SecretEmptyUncontrolledRating = () => <UncontrolledRating defaultValue={0} onChange={callback}/>;
// export const UncontrolledRating1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>;
// export const UncontrolledRating2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>;
// export const UncontrolledRating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>;
// export const UncontrolledRating4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>;
export const SecretUncontrolledRating5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>;

export const EmptyUncontrolledRating = React.memo(SecretEmptyUncontrolledRating)
export const UncontrolledRating5 = React.memo(SecretUncontrolledRating5)