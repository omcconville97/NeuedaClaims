import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    insuranceTypes : [],
    lastFetch : null,
}

const reducer = (state = initialState, action) => {
    if (action.type === "updateInsuranceTypes") {
        return {...state, insuranceTypes : action.value, lastFetch: new Date().getTime() }
    } 
    return state;
}

const store = configureStore({reducer : reducer});
export default store;