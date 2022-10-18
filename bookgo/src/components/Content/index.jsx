import React, { Component } from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { addNewProducts, addBestSellers, isLoadingBoolean, err } from '../../redux/actions/bestdeal'
import Home from '../../pages/Home'
import TrackList from '../../pages/TrackList'
import Settings from '../../pages/Settings'
import './index.sass'

class Content extends Component {
  
  async componentDidMount(){
    // 網頁一載入先將JSON裡的每一個物件加入唯一識別ID
    try {
      const response = await fetch('./jsondata/data.json')
      const jsonArray = await response.json()

      // 首頁自動呈現new product
      const filterNewProduct = jsonArray.filter((bookObj)=>{
        return (bookObj?.category?.indexOf('new') !== -1 && bookObj?.category?.indexOf('new') !== undefined)
      })
      this.props.addNewProducts(filterNewProduct)
      // 首頁自動呈現best sellers
      const filterBestSellers = jsonArray.filter((bookObj)=>{
        return (bookObj?.category?.indexOf('hot') !== -1 && bookObj?.category?.indexOf('hot') !== undefined)
      })
      this.props.addBestSellers(filterBestSellers)

    } catch (error) {
      console.warn('請求出錯',error);
      this.props.err(error.message)
      this.props.isLoadingBoolean(false)
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
  {addNewProducts, addBestSellers, isLoadingBoolean, err}
)(Content)