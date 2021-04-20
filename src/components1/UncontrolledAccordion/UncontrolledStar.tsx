import React from "react";

type StarPropsType = {
    selected: boolean
}

function UncontrolledStar(props: StarPropsType) {
    if (props.selected) {
        return <span><b>star</b> </span>;
    } else {
        return <span>star </span>;
    }
}

export default UncontrolledStar;
