import React, {useState} from "react";
import {Meta, Story} from "@storybook/react";

export default {
    title: "React.memo demo",

} as Meta;

export const SecretNewMessagesCounter = (props: {count:number}) => {
    console.log('uuu you touch my ta-la-la')
    return <div>{props.count}</div>
}
export const UsersSecret = (props: { users: Array<string> }) => {
    console.log('uuu you touch my din-din-don')//мы использовали react.memo и теперь
    //этот лог срабатывает только когда рисуют юзера, а не всю компоненту ExampleReactMemo
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret);
const NewMessagesCounter = React.memo(SecretNewMessagesCounter);

export const ExampleReactMemo = () => {
    const arr = ["Nick", "Dima", "Poli"];
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(arr);
    const addUser = () => {
        let newUser = ( 'userX ' + new Date().getTime());
        let newUsers = [...users,  newUser];
        setUsers(newUsers)}
    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={addUser}>add user</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>

}

const Template: Story<any> = (args) => <ExampleReactMemo {...args} />;
export const ReactMemo = Template.bind({})
ReactMemo.args = {}