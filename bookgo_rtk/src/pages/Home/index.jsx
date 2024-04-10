import React from 'react'
import Header from './Header'
import BestDeal from './BestDeal'
import './index.sass'

export default function Home() {
  return (
    <div className='home'>
      <Header />        
      <BestDeal />
    </div>
  ) 
}