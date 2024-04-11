import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrackItems } from '../../../../redux/reducers/bestdealSlice'
import { Button } from 'antd'

export default function NewProducts() {
  const dispatch = useDispatch();
  const { newProducts, trackItems } = useSelector(state => state.bestdeal);
  const { lexicon: { home: { newproducts:langNewProducts, direct:langDirect, track:langTrack, tracked:langTracked }}} = useSelector(state => state.settings);
  let trackBtn = false

  const handleTrack = (id) => {
    if (trackItems.some(trackObj => trackObj.id === id)) {
      return
    } else {
      const trackItem = newProducts.filter(bookObj => {
        return bookObj.id === id
      }).map(bookObj=>({...bookObj,checked:false}))
      dispatch(addTrackItems(trackItem));
    }
  }

  return (
    <ul>
      <h3 className='bestdeal-title'>{langNewProducts}</h3>
      {
        newProducts.map(bookObj => {
          trackBtn = trackItems.some(trackObj => trackObj.id === bookObj.id)
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
                <Button style={{'color': trackBtn ? 'red':'', 'cursor': trackBtn ? 'default': 'pointer'}} onClick={() => { handleTrack(bookObj.id) }} className="track-btn" type="link"><i>{trackBtn?'':'+'}</i>{trackBtn ? langTracked:langTrack}</Button>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}