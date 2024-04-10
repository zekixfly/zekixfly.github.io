import React from 'react'
import { Input, Button, Divider } from 'antd';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { placeSearchItems, isFirstBoolean, isLoadingBoolean, err } from '../../../redux/reducers/bestdealSlice'
import './index.sass'

export default function Header() {
  const dispatch = useDispatch();
  const { lexicon: { home: { search:langHomeSearch, searchAlert:langHomeSearchAlert }}} = useSelector(state => state.settings);
  const searchRef = React.createRef();
  
  const handleSearch = async (event) => {
    const { keyCode } = event
    if (keyCode !== 13 && event.type !== 'click') return
    if (searchRef.current.input.value.trim() === '') {
      alert(langHomeSearchAlert)
      return
    }
    dispatch(isFirstBoolean(false));
    dispatch(isLoadingBoolean(true));

    try {
      const response = await fetch('./jsondata/data.json')
      const jsonArray = await response.json()
      const filterJSON = jsonArray.filter((bookObj) => {
        return (bookObj?.title.indexOf(searchRef.current.input.value) !== -1 && bookObj?.title.indexOf(searchRef.current.input.value) !== undefined) || Boolean(bookObj?.author?.filter(author => author?.indexOf(searchRef.current.input.value) !== -1).length)
      })
      dispatch(placeSearchItems(filterJSON));
      dispatch(isLoadingBoolean(false));
    } catch (error) {
      console.warn('請求出錯',error)
      dispatch(err(error.message));
      dispatch(isLoadingBoolean(false));
    }
  }

  return (
    <div className="header">
      <Input ref={searchRef} onKeyUp={handleSearch} className='search' placeholder={langHomeSearch} suffix={<SearchOutlined style={{ color: "rgba(0,0,0,0.5)", fontSize: 'x-large' }} onClick={handleSearch}/>} />
      <div className="member-info">
        <Button type="link" style={{ fontSize: '20px' }}>
          <ShoppingCartOutlined />
        </Button>
        <Divider type="vertical" style={{ borderLeft: "1px solid lightgray", fontSize: '20px' }} />
        <Button type="link" style={{ color: "rgba(0,0,0,0.5)" }}>Hi, Guest.</Button>
      </div>
    </div>
  )
}