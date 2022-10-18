import React, { Component } from 'react'
import Header from './Header'
import BestDeal from './BestDeal'
import './index.sass'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header />        
        <BestDeal />
      </div>
    )
  }
}
