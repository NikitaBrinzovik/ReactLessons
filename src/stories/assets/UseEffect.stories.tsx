import React, {useEffect, useState} from "react";

export default {
    title: "useEffect demo"
}

export const SimpleExample = () => {
     let [counter, setCounter] = useState(1)
     let [fake, setFake] = useState(1)

    console.log('SimpleExample')

    //Наиболее популярные варианты использования useEffect:
    useEffect(()=>{
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = "User ";
    })

    //отрисовка эффекта с разными зависимостями [] :
    useEffect(()=>{
        console.log('useEffect: every render');
    })
    useEffect(()=>{
        console.log('useEffect: only first render (componentDidMount)');
    }, [])
    useEffect(()=>{
        console.log('useEffect: first render and every time with counter');
    }, [counter])

    //

    useEffect(()=>{
        console.log('useEffect');
        document.title = counter.toString();//смотреть через iframe
    })


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>+counter</button>
        <button onClick={() => setFake(fake + 1)}>+fake</button>
    </>

}