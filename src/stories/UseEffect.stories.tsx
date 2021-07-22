import React, {useEffect, useState} from "react";

/*export default {
    title: "useEffect demo"
}*/

export const SimpleExample = () => {
    let [counter, setCounter] = useState(1)
    let [fake, setFake] = useState(1)

    console.log('SimpleExample')

    //Наиболее популярные варианты использования useEffect:
    useEffect(() => {
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = "User ";
    })

    //отрисовка эффекта с разными зависимостями [] :
    useEffect(() => {
        console.log('useEffect: every render');
    })
    useEffect(() => {
        console.log('useEffect: only first render (componentDidMount)');
    }, [])
    useEffect(() => {
        console.log('useEffect: first render and every time with counter');
    }, [counter])

    //

    useEffect(() => {
        console.log('useEffect');
        document.title = counter.toString();//смотреть через iframe
    })


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>+counter</button>
        <button onClick={() => setFake(fake + 1)}>+fake</button>
    </>

}

//UseEffect SetTimeout SetInterval
export const useEffectSetTimeoutSetInterval = () => {
    let [counter, setCounter] = useState(1)
    let [fake, setFake] = useState(1)

    console.log('SimpleExample2')

    //    setTimeout
    useEffect(() => {
        console.log('useEffect');

        setTimeout(() => {
            console.log('setTimeout');
            document.title = counter.toString();//смотреть через iframe
        }, 1000)

    }, [fake])

    //    setInterval
    useEffect(() => {
        console.log('useEffect');

        const intervalID = setInterval(() => {
            setCounter((state) => state + 1)
            console.log('setInterval is counting: ' + counter);
        }, 1000)

        return () => {//зачистка
            clearInterval(intervalID)
        }
    }, [])


    return <>
        Hello, C : {counter} F : {fake}
        <div>
            <button onClick={() => setCounter(counter + 1)}>+counter</button>
            <button onClick={() => setFake(fake + 1)}>+fake</button>
        </div>
    </>
}

//урок 24
export const ResetEffectExample = () => {
    let [counter, setCounter] = useState(1)

    console.log("Component rendered" + counter);//первая

    useEffect(() => {

        console.log("Effect occurred" + counter) //second

        return () => {
            console.log('RESET EFFECT' + counter) //либо при запуске по-новой эффекта, либо при смерти компоненты
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}


export const KeyTrackerExample = () => {
    const [text, setText] = useState('')
    //let [counter, setCounter] = useState(1)

    console.log("Component rendered" + text);//

    useEffect(() => {
        //хотим узнать что, что-то происходит за пределами компоненты
        const handler = (e: KeyboardEvent) => {//при нажатии клавиши
            console.log(e.key);
            setText(text + e.key)

        }
        window.addEventListener('keypress', handler)
        return () => window.removeEventListener('keypress', handler)//убиваем такой-же ф-ией, что и создали
    }, [text])


    return <>
        Hello: {text}

    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')
    //let [counter, setCounter] = useState(1)

    console.log("Component rendered" + text);//

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setText('3 seconds pass')
        }, 3000)
        return () => {
            clearTimeout(timeoutID)
        }
    }, [text])


    return <>
        Hello: {text}

    </>
}

export default {
    title: "useEffect",
    component: SimpleExample, useEffectSetTimeoutSetInterval, ResetEffectExample, KeyTrackerExample, SetTimeoutExample
}