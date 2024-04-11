import { ADD_NEWPRODUCT, ADD_BESTSELLER, PLACE_SEARCHITEM, ADD_TRACKITEM, PLACE_TRACKITEM, REMOVE_TRACKITEM, IS_CHECKED, IS_FIRST, IS_LOADING, ERR } from '../constant'

export const addNewProducts = newProducts => ({type:ADD_NEWPRODUCT,data:newProducts})
export const addBestSellers = bestSellers => ({type:ADD_BESTSELLER,data:bestSellers})
export const placeSearchItems = searchItems => ({type:PLACE_SEARCHITEM,data:searchItems})
export const addTrackItems = trackItems => ({type:ADD_TRACKITEM,data:trackItems})
export const placeTrackItems = trackItems => ({type:PLACE_TRACKITEM,data:trackItems})
export const removeTrackItems = id => ({type:REMOVE_TRACKITEM,data:id})

export const isChecked = (id,boolean) => ({type:IS_CHECKED,data:{id,boolean}})
export const isFirstBoolean = boolean => ({type:IS_FIRST,data:boolean})
export const isLoadingBoolean = boolean => ({type:IS_LOADING,data:boolean})
export const err = errMsg => ({type:ERR,data:errMsg})