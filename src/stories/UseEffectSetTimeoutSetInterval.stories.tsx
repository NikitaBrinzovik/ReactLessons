import React, {useEffect, useState} from "react";

export default {
    title: "useEffect setTimeout, setInterval"
}

export const SimpleExample2 = () => {
    let [counter, setCounter] = useState(1)
    let [fake, setFake] = useState(1)

    console.log('SimpleExample2')

    //    setTimeout
    useEffect(()=>{
        console.log('useEffect');

        setTimeout(()=>{
            console.log('setTimeout');
            document.title = counter.toString();//смотреть через iframe
        }, 1000)
    }, [fake])

    //    setInterval
    useEffect(()=>{
        console.log('useEffect');

        setInterval(()=>{
            setCounter((state) => state + 1)
            console.log('setInterval is counting: ' + counter);
        }, 1000)
    }, [])


    return <>
        Hello,     C : {counter}     F : {fake}
        <div>
            <button onClick={() => setCounter(counter + 1)}>+counter</button>
            <button onClick={() => setFake(fake + 1)}>+fake</button>
        </div>

    </>

}