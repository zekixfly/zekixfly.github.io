import React from 'react'
import { useSelector } from 'react-redux'
import BookGoNavLink from '../BookGoNavLink'
import './index.sass'

export default function Nav() {
  const { lexicon: { nav: { home:langHome, tracklist:langTrackList, settings:langSettings }}} = useSelector(state => state.settings)
  return (
    <nav>
      <div className="nav-wrap">
        <h1><a href='./'>BookGO</a></h1>
        <div className="nav-link-wrap">
          <BookGoNavLink to='home'>{langHome}</BookGoNavLink>
          <BookGoNavLink to='tracklist'>{langTrackList}</BookGoNavLink>
          <BookGoNavLink to='settings'>{langSettings}</BookGoNavLink>
        </div>          
      </div>
    </nav>
  )
}