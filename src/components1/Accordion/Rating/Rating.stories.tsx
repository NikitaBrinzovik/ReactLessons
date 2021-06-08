import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import Rating, {RatingPropsType, RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const EmptyRating = () => <Rating value={0} onPick={x=>x}/>;
export const Rating1 = () => <Rating value={1} onPick={x=>x}/>;
export const Rating2 = () => <Rating value={2} onPick={x=>x}/>;
export const Rating3 = () => <Rating value={3} onPick={x=>x}/>;
export const Rating4 = () => <Rating value={4} onPick={x=>x}/>;
export const Rating5 = () => <Rating value={5} onPick={x=>x}/>;
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3);
    return <Rating value={rating} onPick={setRating}/>;
}
