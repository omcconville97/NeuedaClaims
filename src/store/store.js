import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    insuranceType : [],
    lastFetch : null,
}

const reducer = (state = initialState, action) => {
    if (action.type === "updateInsuranceType") {
        return {...state, insuranceType : action.value, lastFetch: new Date().getTime() }
    } 
    return state;
}

const store = configureStore({reducer : reducer});
export default store;