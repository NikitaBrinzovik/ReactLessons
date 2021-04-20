import React, {useState} from "react";
import s from "./onOff.module.css";

type LampType = {
    on: boolean
    onChange:(on:boolean)=> void
}

export function Lamp(props:LampType) {

    const onStyle = {
        width: "20px",
        height: "30px",
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "10px",
        padding: "2px",
        marginTop: "10px",
        backgroundColor: props.on ? "green" : "",
    };
    const offStyle = {
        width: "20px",
        height: "30px",
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.on ? "" : "red",
    };
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.on ? "green" : "red",
    };

    return (
        <div className={s.ee}>
            <div style={onStyle} onClick={() => {props.onChange(true)}}>on</div>
            <div style={offStyle} onClick={() => {props.onChange(false)}}>off</div>

            <button style={indicatorStyle}>f</button>
        </div>
    )

}