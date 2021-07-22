import React from "react";
import {ClockViewPropsType} from "./Clock";


const atiZeroString = (num: number) => num < 10 ? "0" + num : num//если число <10, добавляем ноль вперёд

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{atiZeroString(date.getHours())}</span>
        :
        <span>{atiZeroString(date.getMinutes())}</span>
        :
        {/*const secondStrings = atiZeroString(date.getSeconds())
                <span>{secondStrings}</span>*/}
        <span>{atiZeroString(date.getSeconds())}</span>
    </>

}