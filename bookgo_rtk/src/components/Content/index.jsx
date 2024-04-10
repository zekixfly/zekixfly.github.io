import React, { useEffect } from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addNewProducts, addBestSellers, isFirstBoolean, isLoadingBoolean, err } from '../../redux/reducers/bestdealSlice'

import Home from '../../pages/Home'
import TrackList from '../../pages/TrackList'
import Settings from '../../pages/Settings'
import './index.sass'

export default function Content() {
  const dispatch = useDispatch()

  useEffect(() => {
    // componentDidMount
    (async ()=>{
      dispatch(isFirstBoolean(false))
      dispatch(isLoadingBoolean(true))
      try {
        const response = await fetch('./jsondata/data.json')
        const jsonArray = await response.json()
    
        // 首頁自動呈現new product
        const filterNewProduct = jsonArray.filter((bookObj)=>{
          return (bookObj?.category?.indexOf('new') !== -1 && bookObj?.category?.indexOf('new') !== undefined)
        })
        dispatch(addNewProducts(filterNewProduct))
        // 首頁自動呈現best sellers
        const filterBestSellers = jsonArray.filter((bookObj)=>{
          return (bookObj?.category?.indexOf('hot') !== -1 && bookObj?.category?.indexOf('hot') !== undefined)
        })
        dispatch(addBestSellers(filterBestSellers))
        dispatch(isFirstBoolean(true))
        dispatch(isLoadingBoolean(false))
      } catch (error) {
        console.warn('請求出錯',error)
        dispatch(err(error.message))
        dispatch(isLoadingBoolean(false))
      }        
    })()
  }, []);

  return (
    <article>
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='tracklist' element={<TrackList/>}/>
        <Route path='settings' element={<Settings/>}/>
        <Route path='*' element={<Navigate to='home'/>}/>
      </Routes>
    </article>
  )
}