import React, { Component } from 'react'
import { Input, Button, Divider } from 'antd';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { placeSearchItems, isFirstBoolean, isLoadingBoolean, err } from '../../../redux/actions/bestdeal'
import './index.sass'



class Header extends Component {

  searchRef = React.createRef();
  
  handleSearch = async (event) => {
    const { placeSearchItems, isFirstBoolean, isLoadingBoolean, err, langHomeSearchAlert } = this.props
    const { keyCode } = event
    if (keyCode !== 13 && event.type !== 'click') return
    if (this.searchRef.current.input.value.trim() === '') {
      alert(langHomeSearchAlert)
      return
    }
    isFirstBoolean(false)
    isLoadingBoolean(true)

    try {
      const response = await fetch('./jsondata/data.json')
      const jsonArray = await response.json()
      const filterJSON = jsonArray.filter((bookObj) => {
        return (bookObj?.title.indexOf(this.searchRef.current.input.value) !== -1 && bookObj?.title.indexOf(this.searchRef.current.input.value) !== undefined) || Boolean(bookObj?.author?.filter(author => author?.indexOf(this.searchRef.current.input.value) !== -1).length)
      })
      placeSearchItems(filterJSON)
      isLoadingBoolean(false)
    } catch (error) {
      console.warn('請求出錯',error)
      err(error.message)
      isLoadingBoolean(false)
    }

  }

  render() {
    const { langHomeSearch } = this.props
    return (
      <div className="header">
        <Input ref={this.searchRef} onKeyUp={this.handleSearch} className='search' placeholder={langHomeSearch} suffix={<SearchOutlined style={{ color: "rgba(0,0,0,0.5)", fontSize: 'x-large' }} onClick={this.handleSearch}/>} />
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
}

export default connect(
  state => ({
    langHomeSearch: state.settings.lexicon.home.search,
    langHomeSearchAlert: state.settings.lexicon.home.searchAlert
  }),
  { placeSearchItems, isFirstBoolean, isLoadingBoolean, err }
)(Header)