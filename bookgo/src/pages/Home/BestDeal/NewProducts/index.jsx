import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewProducts, addTrackItems } from '../../../../redux/actions/bestdeal'
import { Button } from 'antd'

class NewProducts extends Component {

  trackBtn = false

  handleTrack = (id) => {
    const { newProducts, trackItems, addTrackItems } = this.props
    if (trackItems.some(trackObj => trackObj.id === id)) {
      return
    } else {
      const trackItem = newProducts.filter(bookObj => {
        return bookObj.id === id
      }).map(bookObj=>({...bookObj,checked:false}))
      addTrackItems(trackItem)
    }
  }

  render() {
    const { 
      newProducts, 
      trackItems, 
      langNewProducts, 
      langDirect, 
      langTrack, 
      langTracked 
    } = this.props
    return (
      <ul>
        <h3 className='bestdeal-title'>{langNewProducts}</h3>
        {
          newProducts.map(bookObj => {
            this.trackBtn = trackItems.some(trackObj => trackObj.id === bookObj.id)
            return (
              <li key={bookObj.id} className="index-item">
                <div className="book-cover">
                  <img src={bookObj.imageUrl} alt="" />
                </div>
                <div className="book-detail">
                  <div className="description">{bookObj.introduction}</div>
                </div>
                <div className="book-track">
                  <Button className="cart-btn" type="link" href={bookObj.url} target="_blank">
                    {langDirect}
                  </Button>
                  <Button style={{'color': this.trackBtn ? 'red':'', 'cursor': this.trackBtn ? 'default': 'pointer'}} onClick={() => { this.handleTrack(bookObj.id) }} className="track-btn" type="link"><i>{this.trackBtn?'':'+'}</i>{this.trackBtn ? langTracked:langTrack}</Button>
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
  state => (
    {
      newProducts: state.bestdeal.newProducts,
      trackItems: state.bestdeal.trackItems,
      langNewProducts: state.settings.lexicon.home.newproducts,
      langDirect: state.settings.lexicon.home.direct,
      langTrack: state.settings.lexicon.home.track,
      langTracked: state.settings.lexicon.home.tracked,
    }
  ),
  { addNewProducts, addTrackItems }
)(NewProducts)