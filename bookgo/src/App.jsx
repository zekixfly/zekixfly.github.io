import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setLanguage } from './redux/actions/settings'
import Nav from './components/Nav'
import Content from './components/Content'
import zh from './lexicon/zh'
import en from './lexicon/en'
import jp from './lexicon/jp'
import ko from './lexicon/ko'
import fr from './lexicon/fr'
import './App.sass'

class App extends Component {

  componentDidMount(){
    const { setLanguage } = this.props
    let BrowserLanguage = "";
		if(navigator.languages) {
			BrowserLanguage = navigator.languages[0].toLowerCase();
		}
		else {
			BrowserLanguage = (navigator.language || navigator.userLanguage).toLowerCase();
		}
		switch(BrowserLanguage){
      case 'zh':
      case 'zh-tw':
      case 'zh-hk':
      case 'zh-cn':
        setLanguage(zh)
        break;
      case 'en':
      case 'en-us':
      case 'en-ca':
      case 'en-gb':
      case 'en-gb-oxendict':
      case 'en-za':
      case 'en-in':
      case 'en-nz':
      case 'en-au':
        setLanguage(en)
        break;
      case 'ja':
        setLanguage(jp)
        break;
      case 'ko':
        setLanguage(ko)
        break;
      case 'fr':
        setLanguage(fr)
        break;
      default:
        setLanguage(en)
        break;
    }
  }

  render() {
    return (
      <HashRouter>
        <div className='bookgo-wrap'>
          <Nav />
          <Content />
        </div>
      </HashRouter>
    )
  }
}

export default connect(
  state=>({}),
  { setLanguage }
)(App)