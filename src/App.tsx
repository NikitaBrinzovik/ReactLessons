import React, {useState} from 'react';
import './App.css';
import Accordion from './components1/Accordion/accordion';
import Rating, {RatingValueType} from './components1/Accordion/Rating';
import {Lamp} from "./components1/onOff/onOff";
import UncontrolledAccordion from "./components1/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from './components1/UncontrolledAccordion/UncontrolledRating';




function App(props:any) {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className="App">
            <Lamp />
            <Lamp />

            <hr />
            <PageTitle title={"This is Uncontrolled components"}/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={"Menu"}/>

            <hr />
            <PageTitle title={"This is Controlled components"}/>
            <Rating value={ratingValue} onPick={setRatingValue}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>


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
