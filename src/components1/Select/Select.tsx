export type ItemType = {
    value: any
    title: string
}
export type SelectPropsType = {
    value: any
    ourOnChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    return <div>
        <div>{}</div>
        {props.items.map(i => <div>{i.title}</div>)}
    </div>
}