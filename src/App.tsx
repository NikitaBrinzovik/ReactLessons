import React from 'react';
import './App.css';
import Accordion from './components1/Accordion/accordion';
import Rating from './components1/Accordion/Rating';
import {Lamp} from "./components1/onOff/onOff";
import UncontrolledAccordion from "./components1/UncontrolledAccordion/UncontrolledAccordion";


type AppPropsType = {
    numb: number
    message: string
}

function App() {
    return (
        <div className="App">
            <Lamp />
            <Lamp />

            <PageTitle title={"This is App title"}/>

            <Rating value={3}/>
            <Rating value={1}/>
            <Rating value={5}/>
            <UncontrolledAccordion titleValue={"Menu"} collapsed={false}/>


            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}

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
