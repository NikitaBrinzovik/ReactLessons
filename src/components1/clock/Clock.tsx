import React, {useEffect, useState} from "react";

type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {//создали для ассинхронных действий
        const myIntervalID = setInterval(() => {
            setDate(new Date())//точное время)
        }, 1000)//задержка секунда


        //этот ретурн вызовется, либо при перерисовке, либо при смерти
        return () => {
            clearInterval(myIntervalID) //
        }
    }, [])



    const atiZeroString = (num: number) =>  num < 10 ? "0" + num : num//если число от 1-9, добавляем ноль вперёд
    const hoursStrings = atiZeroString(date.getHours())//проверки на двузначность (отправляем в в ф-ию выше)
    //const secondStrings = atiZeroString(date.getSeconds()) //вставили сразу в return без исп переменных


    return <div>
        <span>{hoursStrings}</span>{/*длинный способ*/}
        :
        <span>{atiZeroString(date.getMinutes())}</span>
        :
        <span>{atiZeroString(date.getSeconds())}</span>{/*<span>{secondStrings}</span>*/}
    </div>
}