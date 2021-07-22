import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

type PropsType = {
    mode?: "digital" | "analog"
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {//создали для ассинхронных действий
        const myIntervalID = setInterval(() => {
            setDate(new Date())//точное время)
        }, 1000)//задержка секунда

        return () => {//вызовется, либо при перерисовке, либо при смерти
            clearInterval(myIntervalID) //
        }
    }, [])


    let view

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break;
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }

    return view
}
export type ClockViewPropsType = {
    date: Date
}
