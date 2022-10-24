import React, { Component } from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { addNewProducts, addBestSellers, isFirstBoolean, isLoadingBoolean, err } from '../../redux/actions/bestdeal'
import Home from '../../pages/Home'
import TrackList from '../../pages/TrackList'
import Settings from '../../pages/Settings'
import './index.sass'

class Content extends Component {
  
  async componentDidMount(){
    const { addNewProducts ,addBestSellers, isFirstBoolean, isLoadingBoolean, err } = this.props
    isFirstBoolean(false)
    isLoadingBoolean(true)
    try {
      const response = await fetch('./jsondata/data.json')
      const jsonArray = await response.json()

      // 首頁自動呈現new product
      const filterNewProduct = jsonArray.filter((bookObj)=>{
        return (bookObj?.category?.indexOf('new') !== -1 && bookObj?.category?.indexOf('new') !== undefined)
      })
      addNewProducts(filterNewProduct)
      // 首頁自動呈現best sellers
      const filterBestSellers = jsonArray.filter((bookObj)=>{
        return (bookObj?.category?.indexOf('hot') !== -1 && bookObj?.category?.indexOf('hot') !== undefined)
      })
      addBestSellers(filterBestSellers)
      isFirstBoolean(true)
      isLoadingBoolean(false)
    } catch (error) {
      console.warn('請求出錯',error);
      err(error.message)
      isLoadingBoolean(false)
      // this.setState({err: error.message, isLoadingBoolean:false})      
    }  
  }
  
  render() {
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
}

export default connect(
  state=>({}),
  {addNewProducts, addBestSellers, isFirstBoolean, isLoadingBoolean, err}
)(Content)