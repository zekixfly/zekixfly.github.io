import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoadingOutlined } from '@ant-design/icons';
import Item from './Item'
import NewProducts  from './NewProducts'
import BestSellers  from './BestSellers'
import './index.sass'

class BestDeal extends Component {

  render() {
    const {searchItems, isFirst, isLoading, err, langHomeNotFound } = this.props
    return (
      <div className='bestdeal'>

        {/* <i>歡迎使用，請輸入關鍵字，並按下Enter搜尋！</i> */}
        
        
          {
            isFirst ? 
            <ul>
              <NewProducts />
              <BestSellers />
            </ul> :
            isLoading ? <h2 className='centerMsg'><LoadingOutlined className='loading-icon'/><span className='loading-text'>Loading...</span></h2> :
            err ? <h2 className='centerMsg' style={{color:'red'}}>{err}</h2> :
            searchItems.length > 0 ? <Item /> :
            <h2 className='centerMsg' style={{fontWeight:'bold'}}>{langHomeNotFound}</h2>
          }
        
      </div>
    )
  }
}

export default connect(
  state=>({
    searchItems:state.bestdeal.searchItems,
    isFirst:state.bestdeal.isFirst,
    isLoading:state.bestdeal.isLoading,
    err:state.bestdeal.err,
    langHomeNotFound: state.settings.lexicon.home.notFound
  }),
  {}
)(BestDeal)