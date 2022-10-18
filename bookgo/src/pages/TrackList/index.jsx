import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTrackItems, placeTrackItems, removeTrackItems, isChecked } from '../../redux/actions/bestdeal'
import { Button, Checkbox } from 'antd'
import './index.sass'

class TrackList extends Component {

  handleCheck = (id) => {
    return event => {
      const { isChecked } = this.props
      isChecked(id,event.target.checked)
    }
  }
  handleCheckAll = event =>{
    const { trackItems, placeTrackItems } = this.props
    const newTrackItems = trackItems.map(trackItemObj=>{
      return {...trackItemObj,checked:event.target.checked}
    })
    placeTrackItems(newTrackItems)
  }

  handleDelete = (id) => {
    const { removeTrackItems, langTrackDeleteAlert } = this.props
    if(window.confirm(langTrackDeleteAlert)){
      removeTrackItems(id)
    }    
  }

  handleClearAllCheck = () => {
    const { trackItems, placeTrackItems, langTrackClearConfirm, langTrackCheckAlert } = this.props
    // if(trackItems.some(trackItemObj=> trackItemObj.checked === true)) {
    //   if(window.confirm('確定要清除所勾選的商品嗎?') === false) return
    // }else{
    //   alert('請先勾選要清除的商品！'); return
    // }
    
    if(trackItems.some(trackItemObj=> trackItemObj.checked === true) ? window.confirm(langTrackClearConfirm) === false ? true : false : alert(langTrackCheckAlert)) return
    
    const newTrackItems = trackItems.filter(trackItemObj=>{
      return trackItemObj.checked !== true
    })
    placeTrackItems(newTrackItems)
  }

  render() {
    const { 
      trackItems, 
      langTrackTitle,
      langTrackCover,
      langTrackName,
      langTrackPrice,
      langTrackAction,
      langTrackTWD,
      langTrackDirect,
      langTrackDelete,
      langTrackNotTrack,
      langTrackTotalNumber,
      langTrackTotalAmount,
      langTrackClearTracked
    } = this.props
    const checkCount = trackItems.reduce((prev,currentObj)=>{
      return prev + (currentObj.checked ? 1 : 0)
    },0)
    return (
      <div  className='tracklist'>
        <h3 className='tracklist-title'>{langTrackTitle}</h3>
        <div className='track-item-title'>
          <div className='checkbox-title'><Checkbox onChange={this.handleCheckAll} checked={checkCount === trackItems.length && trackItems.length !== 0 ? true : false}/></div>
          <div className="cover-title">{langTrackCover}</div>
          <div className="detail-title">{langTrackName}</div>
          <div className="price-title">{langTrackPrice}</div>
          <div className="action-title">{langTrackAction}</div>
        </div>
        <div className='track-item-content'>
        {
          trackItems.length > 0 ? 
          <ul>
            {
              trackItems.map(bookObj => {
                return (
                  <li key={bookObj.id} className="track-item">
                    <Checkbox className='book-checkbox' checked={bookObj.checked} onChange={this.handleCheck(bookObj.id)}/>
                    <div className="book-cover">
                      <img src={bookObj.imageUrl} alt="" />
                    </div>
                    <div className="book-detail">                    
                      <div className="title">{bookObj.title}</div>
                      <div className="description">{bookObj.introduction}</div>
                    </div>
                    <div className="book-price">
                      <div className="price">{bookObj.price?.currentPrice}<i>{langTrackTWD}</i></div>
                    </div>
                    <div className="book-track">
                      <Button className="cart-btn" type="link" href={bookObj.url} target="_blank">
                        {langTrackDirect}
                      </Button>
                      <Button className='delete-btn' type="primary" onClick={()=> this.handleDelete(bookObj.id)} danger>{langTrackDelete}</Button>
                    </div>
                  </li>
                )
              })
            }
          </ul> : <h2 style={{fontWeight:'bold'}}>{langTrackNotTrack}</h2>
        }
        </div>
        <div className='track-item-footer'>
          
          <div className='total-detail'>
            {langTrackTotalNumber}: <span className="total-number">{ trackItems.length }</span>，{langTrackTotalAmount}: <span className="total-amount">{ trackItems.reduce((prevValue,currentObj)=>{ return prevValue + currentObj.price.currentPrice },0) }</span>{langTrackTWD}
          </div>
          <Button style={{'display': trackItems.length > 0 ? 'block' : 'none'}} onClick={this.handleClearAllCheck} danger>{langTrackClearTracked}</Button>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({ 
    trackItems: state.bestdeal.trackItems, 
    langTrackTitle: state.settings.lexicon.track.title,
    langTrackCover: state.settings.lexicon.track.cover,
    langTrackName: state.settings.lexicon.track.name,
    langTrackPrice: state.settings.lexicon.track.price,
    langTrackAction: state.settings.lexicon.track.action,
    langTrackTWD: state.settings.lexicon.track.twd,
    langTrackDirect: state.settings.lexicon.track.direct,
    langTrackDelete: state.settings.lexicon.track.delete,
    langTrackDeleteAlert: state.settings.lexicon.track.deleteAlert,
    langTrackNotTrack: state.settings.lexicon.track.notTrack,
    langTrackTotalNumber: state.settings.lexicon.track.totalNumber,
    langTrackTotalAmount: state.settings.lexicon.track.totalAmount,
    langTrackClearTracked: state.settings.lexicon.track.clearTracked,
    langTrackClearConfirm: state.settings.lexicon.track.clearConfirm,
    langTrackCheckAlert: state.settings.lexicon.track.checkAlert,
   }),
  { addTrackItems, placeTrackItems, removeTrackItems, isChecked }
)(TrackList)