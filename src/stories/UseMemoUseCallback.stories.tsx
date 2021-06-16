import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "useMemo and useCallback"
}

//lesson 17 useMemo for difficult counting
export const DifficultCounting = () => {

    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    let resultForA = 1;
    let resultForB = 1;

    resultForA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000) {
                fake++;
                let fakeValue = Math.random();
                console.log(fakeValue)

            }
            resultForA *= i;
        }//вычисления, которые надо будет сделать при изменении зависимостей
        return resultForA
    }, [a]);//второй параметр useMemo и есть зависимости, указ в квадр скобках

    for (let i = 1; i <= b; i++) {
        resultForB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            result for a:{resultForA}
        </div>
        <div>
            result for b:{resultForB}
        </div>
    </>
}

// lesson 17 second half: useMemo helping React.memo
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret: uuu you touch my din-din-don')//мы использовали react.memo и теперь
    //этот лог срабатывает только когда рисуют юзера, а не всю компоненту ExampleReactMemo
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret);

export const HelpsReactMemo = () => {
    console.log('HelpsReactMemo: uts-uts-baby')
    const arr = ["Nick", "Dima", "Polina", "anaconda", "Ana"];
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(arr);
    const addUser = () => {
        let newUser = ( 'userXa ' + new Date().getTime());
        let newUsers = [...users,  newUser];
        setUsers(newUsers)}

    const newArray = useMemo(() => {
        const inNewArray = users.filter(u => u.toLowerCase().indexOf('a')> -1)//не понял зачем toLowerCase
        return inNewArray
        //Запись в одну строку:
        //return users.filter(u => u.toUpperCase().indexOf('a')> -1)
    }, [users])
    //}, [users, counter]) -так будет перерисовываться массив при увеличении счётчика(бессмысленно)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}> add user</button>
        {counter}
        <Users users={newArray}/>
    </>

}
/*const Template: Story<any> = (args) => <HelpsReactMemo {...args} />;
export const ReactMemo = Template.bind({})
ReactMemo.args = {}*/


//  LESSON 18: useCallback
type BooksSecretPropsType ={
    //books: Array<string>
    addBook: ()=>void
}
const BooksSecret = (props:BooksSecretPropsType) => {
    console.log('BooksSecret: oh you touch my din-din-don')//мы использовали react.memo и теперь
    //этот лог срабатывает только когда рисуют books, а не всю компоненту
    return <div>
        <button onClick={() => props.addBook()}> add book</button>
        {/*{props.books.map((book, i) => <div key={i}>{book}</div>)}*/}
    </div>
}

const Books = React.memo(BooksSecret);
export const LikeUseCallbackMemo = () => {
    console.log('LikeUseCallbackMemo: uts-uts-babysss')
    const arr = ["React", "JS", "TS", "for kids", "groack"];
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(arr);

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            let newBooks = [...books,  'Angular ' + new Date().getTime()];
            setBooks(newBooks)
        }
    }, [books])
    const memoizedAddBook2 = useCallback(() => {// тоже самое, что и выше, но без лишней конструкции
            console.log(books)
            let newBooks = [...books,  'Angular ' + new Date().getTime()];
            setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        <Books
            /*addBook={addBook}/>*/
            /*addBook={memoizedAddBook}*/
            addBook={memoizedAddBook2}
        />
    </>

}


