import styles from './Select.module.css'
import {useEffect, useState, KeyboardEvent} from "react";

export type ItemType = {
    value: any
    title: string
}
export type SelectPropsType = {
    value?: any
    ourOnChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    let [active, setActive] = useState(false)
    let [hovered, setHovered] = useState(props.value)

    const toggleItem = () => setActive(!active)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hovered)

    const onItemClick = (value:any) => {props.ourOnChange(value); toggleItem()}

    useEffect( () => {
        setHovered(props.value);
    }, [props.value])

    const onKeyUp = (e:KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i=0; i< props.items.length; i++){
                if (props.items[i].value === hovered) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[ i + 1 ]
                        : props.items[ i - 1 ];
                    if (pretendentElement) {
                        props.ourOnChange(pretendentElement.value)
                        return;
                    }

                }
            }
            if (!selectedItem) {props.ourOnChange(props.items[0].value)}
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <>
            {/*<div className={styles.select + " " + styles.active}>*/}
            {/*<div className={styles.select + " " + (active ? styles.active : '')}>*/}
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0} >
                <span className={styles.main} onClick={toggleItem}>{selectedItem && selectedItem.title}</span>
                {
                   active &&
                   <div className={styles.items}>
                       {props.items.map(i => <div
                           onMouseEnter={()=>{setHovered(i.value)}}
                           className={styles.item + " " + (hoveredItem  === i ? styles.selected : "")}
                           key={i.value}
                           onClick={() => {onItemClick(i.value)}}
                       >{i.title}

                       </div>)}
                   </div>
                }


            </div>
        </>
    )
}