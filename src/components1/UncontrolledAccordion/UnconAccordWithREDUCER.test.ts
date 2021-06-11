import {reducer, StateType} from "./UnconAccordWithREDUCER";

test('unit test. reducer switch value', () => {
    //data
    const state:StateType = {
        collapsed: false
    }

    //logic
    const newState = reducer(state, {type:"TOGGLE_COLLAPSED"})


    //expect
    expect(newState.collapsed).toBe(true)


})
test('unit test. ', () => {
    //data
    const state:StateType = {
        collapsed: true
    }

    //expect

    expect(()=>{
        reducer(state, {type:"wrong-name"})
    }).toThrowError();
    //???? почему не проходит??
})