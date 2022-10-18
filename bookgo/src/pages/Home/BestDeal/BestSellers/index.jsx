import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBestSellers, addTrackItems } from '../../../../redux/actions/bestdeal'
import { Button } from 'antd'

class BestSellers extends Component {

  trackBtn = false

  handleTrack = (id) => {
    const { bestSellers, trackItems, addTrackItems } = this.props

    if(trackItems.some(trackObj => trackObj.id === id)){
      return
    }else{
      const trackItem = bestSellers.filter(bookObj => {
        return bookObj.id === id
      }).map(bookObj=>({...bookObj,checked:false}))
      addTrackItems(trackItem)      
    }
  }

  render() {
    const { 
      bestSellers, 
      trackItems, 
      langBestSellers,
      langDirect, 
      langTrack, 
      langTracked
    } = this.props
    return (
      <ul>
        <h3 className='bestdeal-title'>{langBestSellers}</h3>
        {
          bestSellers.map(bookObj => {
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
      bestSellers: state.bestdeal.bestSellers,
      trackItems: state.bestdeal.trackItems,
      langBestSellers: state.settings.lexicon.home.bestsellers,
      langDirect: state.settings.lexicon.home.direct,
      langTrack: state.settings.lexicon.home.track,
      langTracked: state.settings.lexicon.home.tracked,
    }
  ),
  { addBestSellers, addTrackItems }
)(BestSellers)