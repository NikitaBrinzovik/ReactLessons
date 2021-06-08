import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components1/Accordion/accordion';
import Rating, {RatingValueType} from './components1/Accordion/Rating/Rating';
import {UncontrolledAccordion} from "./components1/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from './components1/UncontrolledAccordion/UncontrolledRating/UncontrolledRating';
import {UncontrolledLamp} from "./components1/UncontrolledOnOff/UncontrolledOnOff";
import {Lamp} from "./components1/OnOff/onOff";





function App(props:any) {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [switchOnUnc, setSwitchOnUnc] = useState<boolean>(true)

    const onAccordionTitleChange = () => {setCollapsed(!accordionCollapsed)}
    return (
        <div className="App">
            <UncontrolledLamp onChange={setSwitchOnUnc}/> {switchOnUnc.toString()}
            <UncontrolledLamp onChange={setSwitchOnUnc}/> {switchOnUnc.toString()}

            <hr />
            <Lamp on={switchOn} onChange={(on) => {setSwitchOn(on)}}/>
            <Lamp on={switchOn} onChange={setSwitchOn}/>
            {/*длинная и короткая запись*/}


            <hr />
            <PageTitle title={"This is Uncontrolled components"}/>
            <UncontrolledRating onChange={setRatingValue} defaultValue={ratingValue}/>
            <UncontrolledAccordion titleValue={"Menu"}/>

            <hr />
            <PageTitle title={"This is Controlled components"}/>
            <Rating value={ratingValue} onPick={setRatingValue}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onAccordionTitleChange= {onAccordionTitleChange}/>


            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*Article 2*/}
            {/*<Rating value={5}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Accordion titleValue={"second menu"} collapsed={false}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
