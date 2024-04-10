import React from 'react'
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { addTrackItems } from '../../../../redux/reducers/bestdealSlice'

export default function Item() {
  const dispatch = useDispatch();
  const { searchItems, trackItems } = useSelector(state => state.bestdeal);
  const { lexicon: { home: {direct:langDirect, track:langTrack, tracked:langTracked} } } = useSelector(state => state.settings);
  let trackBtn = false

  const handleTrack = (id) => {
    if (trackItems.some(trackObj => trackObj.id === id)) {
      return
    } else {
      const trackItem = searchItems.filter(bookObj => {
        return bookObj.id === id
      }).map(bookObj=>({...bookObj,checked:false}))
      dispatch(addTrackItems(trackItem));
    }
  }
  
  return (
    <ul>
      {
        searchItems.map(itemObj => {
          trackBtn = trackItems.some(trackObj => trackObj.id === itemObj.id)
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
                <Button style={{'color': trackBtn ? 'red':'', 'cursor': trackBtn ? 'default': 'pointer'}} onClick={() => { handleTrack(id) }} className="track-btn" type="link"><i>{trackBtn?'':'+'}</i>{trackBtn ? langTracked:langTrack}</Button>
              </div>
            </li>
          )
        })          
      }
    </ul>
  )
}