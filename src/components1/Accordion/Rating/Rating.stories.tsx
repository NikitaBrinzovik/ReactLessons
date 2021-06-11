import React, {useState} from 'react';
import { Meta } from '@storybook/react';
import Rating, { RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const SecretEmptyRating = () => <Rating value={0} onPick={x=>x}/>;
export const SecretRating1 = () => <Rating value={1} onPick={x=>x}/>;
export const SecretRating2 = () => <Rating value={2} onPick={x=>x}/>;
export const SecretRating3 = () => <Rating value={3} onPick={x=>x}/>;
export const SecretRating4 = () => <Rating value={4} onPick={x=>x}/>;
export const SecretRating5 = () => <Rating value={5} onPick={x=>x}/>;
export const SecretChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3);
    return <Rating value={rating} onPick={setRating}/>;
}

export const EmptyRating= React.memo(SecretEmptyRating)
export const Rating1= React.memo(SecretRating1)
export const Rating2= React.memo(SecretRating2)
export const Rating3= React.memo(SecretRating3)
export const Rating4= React.memo(SecretRating4)
export const Rating5= React.memo(SecretRating5)
export const ChangeRating= React.memo(SecretChangeRating)
