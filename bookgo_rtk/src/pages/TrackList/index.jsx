import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { placeTrackItems, removeTrackItems, isChecked } from '../../redux/reducers/bestdealSlice'
import { Button, Checkbox } from 'antd'
import './index.sass'

export default function TrackList() {
  const dispatch = useDispatch();
  const { trackItems } = useSelector(state => state.bestdeal);
  const { lexicon: { track: { 
    title:langTrackTitle, 
    cover:langTrackCover, 
    name:langTrackName, 
    price:langTrackPrice, 
    action:langTrackAction, 
    twd:langTrackTWD, 
    direct:langTrackDirect, 
    delete:langTrackDelete, 
    deleteAlert:langTrackDeleteAlert, 
    notTrack:langTrackNotTrack,
    totalNumber:langTrackTotalNumber,
    totalAmount:langTrackTotalAmount,
    clearTracked:langTrackClearTracked,
    clearConfirm:langTrackClearConfirm,
    checkAlert:langTrackCheckAlert
  }}} = useSelector(state => state.settings);

  const handleCheck = (id) => {
    return event => {
      dispatch(isChecked({id:id, boolean:event.target.checked}));
    }
  }
  const handleCheckAll = event =>{
    const newTrackItems = trackItems.map(trackItemObj=>{
      return {...trackItemObj,checked:event.target.checked}
    })
    dispatch(placeTrackItems(newTrackItems));
  }

  const handleDelete = (id) => {
    if(window.confirm(langTrackDeleteAlert)){
      dispatch(removeTrackItems(id));
    }    
  }

  const handleClearAllCheck = () => {
    // if(trackItems.some(trackItemObj=> trackItemObj.checked === true)) {
    //   if(window.confirm('確定要清除所勾選的商品嗎?') === false) return
    // }else{
    //   alert('請先勾選要清除的商品！'); return
    // }
    
    if(trackItems.some(trackItemObj=> trackItemObj.checked === true) ? window.confirm(langTrackClearConfirm) === false ? true : false : alert(langTrackCheckAlert)) return
    
    const newTrackItems = trackItems.filter(trackItemObj=>{
      return trackItemObj.checked !== true
    })
    dispatch(placeTrackItems(newTrackItems));
  }

  const checkCount = trackItems.reduce((prev,currentObj)=>{
    return prev + (currentObj.checked ? 1 : 0)
  },0)
  return (
    <div  className='tracklist'>
      <h3 className='tracklist-title'>{langTrackTitle}</h3>
      <div className='track-item-title'>
        <div className='checkbox-title'><Checkbox onChange={handleCheckAll} checked={checkCount === trackItems.length && trackItems.length !== 0 ? true : false}/></div>
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
                  <Checkbox className='book-checkbox' checked={bookObj.checked} onChange={handleCheck(bookObj.id)}/>
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
                    <Button className='delete-btn' type="primary" onClick={()=> handleDelete(bookObj.id)} danger>{langTrackDelete}</Button>
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
        <Button style={{'display': trackItems.length > 0 ? 'block' : 'none'}} onClick={handleClearAllCheck} danger>{langTrackClearTracked}</Button>
      </div>
    </div>
  )
}