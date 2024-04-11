// import { ADD_NEWPRODUCT, ADD_BESTSELLER, PLACE_SEARCHITEM, ADD_TRACKITEM, PLACE_TRACKITEM, REMOVE_TRACKITEM, IS_CHECKED, IS_FIRST, IS_LOADING, ERR } from '../constant'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    newProducts: [],
    bestSellers: [],
    searchItems: [],
    trackItems: [],
    isFirst: true,
    isLoading: false,
    err: '',
}

//bestdealSlice
export const bestdealSlice = createSlice({
    name: 'bestdeal',
    initialState,
    reducers: {
        addNewProducts: (state, action) => ({...state, newProducts: [...action.payload,...state.newProducts]}),
        addBestSellers: (state, action) => ({...state, bestSellers: [...action.payload,...state.bestSellers]}),
        placeSearchItems: (state, action) => ({...state, searchItems: [...action.payload]}),
        addTrackItems: (state, action) => ({...state, trackItems: [...action.payload,...state.trackItems]}),
        placeTrackItems: (state, action) => ({...state, trackItems: [...action.payload]}),
        removeTrackItems: (state, action) => ({...state, trackItems: state.trackItems.filter( trackObj=> trackObj.id !== action.payload )}),
        isChecked: (state, action) => ({...state, trackItems: state.trackItems.map( trackObj=> { if(trackObj.id === action.payload.id) return {...trackObj,checked:action.payload.boolean}; else return trackObj } )}),
        isFirstBoolean: (state, action) => ({...state, isFirst: action.payload}),
        isLoadingBoolean: (state, action) => ({...state, isLoading: action.payload}),
        err: (state, action) => ({...state, err: action.payload}),
    }
});

// action creators
export const {
    addNewProducts,
    addBestSellers,
    placeSearchItems,
    addTrackItems,
    placeTrackItems,
    removeTrackItems,
    isChecked,
    isFirstBoolean,
    isLoadingBoolean,
    err
} = bestdealSlice.actions;

// reducer
export default bestdealSlice.reducer;