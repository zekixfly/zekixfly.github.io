import { ADD_NEWPRODUCT, ADD_BESTSELLER, PLACE_SEARCHITEM, ADD_TRACKITEM, PLACE_TRACKITEM, REMOVE_TRACKITEM, IS_CHECKED, IS_FIRST, IS_LOADING, ERR } from '../constant'

const initState = {
    newProducts: [],
    bestSellers: [],
    searchItems: [],
    trackItems: [],
    isFirst: true,
    isLoading: false,
    err: '',
}

export default function bestdealReducer(preState=initState,action){
    const {type,data} = action
    switch (type) {
        case ADD_NEWPRODUCT:
            return {...preState, newProducts: [...data,...preState.newProducts]}
        case ADD_BESTSELLER:
            return {...preState, bestSellers: [...data,...preState.bestSellers]}
        case PLACE_SEARCHITEM:
            return {...preState, searchItems: [...data]}
        case ADD_TRACKITEM:
            return {...preState, trackItems: [...data,...preState.trackItems]}
        case PLACE_TRACKITEM:
            return {...preState, trackItems: [...data]}
        case REMOVE_TRACKITEM:
            return {...preState, trackItems: preState.trackItems.filter( trackObj=> trackObj.id !== data )}
        case IS_CHECKED:
            return {...preState, trackItems: preState.trackItems.map( trackObj=> { if(trackObj.id === data.id) return {...trackObj,checked:data.boolean}; else return trackObj } )}
        case IS_FIRST:
            return {...preState, isFirst: data}
        case IS_LOADING:
            return {...preState, isLoading: data}
        case ERR:
            return {...preState, err: data}
        default:
            return preState
    }
}