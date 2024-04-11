import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookGoNavLink from '../BookGoNavLink'
import './index.sass'

class Nav extends Component {
  render() {
    const {langHome,langTrackList,langSettings} = this.props
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
}

export default connect(
  state=>({
    langHome: state.settings.lexicon.nav.home,
    langTrackList: state.settings.lexicon.nav.tracklist,
    langSettings: state.settings.lexicon.nav.settings,
  }),
  {}
)(Nav)