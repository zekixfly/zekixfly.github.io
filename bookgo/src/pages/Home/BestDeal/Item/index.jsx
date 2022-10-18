import React, { Component } from 'react'
import { Button } from 'antd';
// import { MessageOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { addTrackItems } from '../../../../redux/actions/bestdeal'

class Item extends Component {

  trackBtn = false

  handleTrack = (id) => {
    const { searchItems, trackItems, addTrackItems } = this.props
    if (trackItems.some(trackObj => trackObj.id === id)) {
      return
    } else {
      const trackItem = searchItems.filter(bookObj => {
        return bookObj.id === id
      }).map(bookObj=>({...bookObj,checked:false}))
      addTrackItems(trackItem)
    }
  }
  
    
  
  render() {    
    const { 
      searchItems, 
      trackItems,
      langDirect, 
      langTrack, 
      langTracked
    } = this.props
    return (
      <ul>
        {
          searchItems.map(itemObj => {
            this.trackBtn = trackItems.some(trackObj => trackObj.id === itemObj.id)
            const { id,title,url,imageUrl,price,introduction } = itemObj
            return (
              <li key={id} className="search-item">
                <div className="book-cover">
                  <img src={imageUrl} alt="" />
                </div>
                <div className="book-detail">
                  <div className="price"><i>$</i>{price?.currentPrice}</div>
                  <div className="title">{title}</div>
                  <div className="description">{introduction}</div>
                </div>
                <div className="book-track">
                  <Button className="cart-btn" type="link" href={url} target="_blank">
                    {langDirect}
                  </Button>
                  <Button style={{'color': this.trackBtn ? 'red':'', 'cursor': this.trackBtn ? 'default': 'pointer'}} onClick={() => { this.handleTrack(id) }} className="track-btn" type="link"><i>{this.trackBtn?'':'+'}</i>{this.trackBtn ? langTracked:langTrack}</Button>
                </div>
              </li>
            )
          })          
        }
      </ul>
    )
  }
}

export default connect(
  state => ({ 
    searchItems: state.bestdeal.searchItems, 
    trackItems: state.bestdeal.trackItems,
    langDirect: state.settings.lexicon.home.direct,
    langTrack: state.settings.lexicon.home.track,
    langTracked: state.settings.lexicon.home.tracked,
  }),
  { addTrackItems }
)(Item)