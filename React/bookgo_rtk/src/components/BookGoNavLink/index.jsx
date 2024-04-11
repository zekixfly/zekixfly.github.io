import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './index.sass'

export default class BookGoNavLink extends Component {
  render() {
    // console.log('BookGoNavLink:',this.props);
    return (
      <NavLink className={({isActive})=>isActive ? 'nav-link active':'nav-link'} {...this.props} children={this.props.children}/>
    )
  }
}
