import React, {useState} from "react";
import s from "./onOff.module.css";
type LampType = {
    //on: boolean


}

export function Lamp(props:LampType) {
    let [on,setOn] = useState(true);
    //let on = true;

    const onStyle = {
        width: "20px",
        height: "30px",
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "10px",
        padding: "2px",
        marginTop: "10px",
        backgroundColor: on ? "green" : "",
    };
    const offStyle = {
        width: "20px",
        height: "30px",
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "" : "red",
    };
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "green" : "red",
    };

    return (
        <div className={s.ee}>
            <div style={onStyle} onClick={() => {setOn(true)}}>on</div>
            <div style={offStyle} onClick={() => {setOn(false)}}>off</div>

            <button style={indicatorStyle}>f</button>
        </div>
    )

}