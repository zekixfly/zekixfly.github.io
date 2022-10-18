import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLanguage } from '../../redux/actions/settings'
import './index.sass'
import zh from '../../lexicon/zh'
import en from '../../lexicon/en'
import jp from '../../lexicon/jp'
import ko from '../../lexicon/ko'
import fr from '../../lexicon/fr'

class Settings extends Component {
  
  handleLanguage = event => {
    const { target } = event
    const { setLanguage } = this.props    
    switch(target.lang){
      case 'zh':        
        setLanguage(zh)
        break;
      case 'en':
        setLanguage(en)
        break;
      case 'jp':
        setLanguage(jp)
        break;
      case 'ko':
        setLanguage(ko)
        break;
      case 'fr':
        setLanguage(fr)
        break;
      default:
    }
  }

  render() {
    const {
      langSettingsTitle,
      langSettingsLanguage,
      languageFamily
    } = this.props
    return (
        <div className='settings'>
            <h3 className='settings-title'>{langSettingsTitle}</h3>
            <div className='language' onClick={this.handleLanguage}>
              {langSettingsLanguage}
              <span lang='zh' className={languageFamily==='zh'?'active':''}>中文</span>              
              <span lang='en' className={languageFamily==='en'?'active':''}>English</span>
              <span lang='jp' className={languageFamily==='jp'?'active':''}>日本語</span>
              <span lang='ko' className={languageFamily==='ko'?'active':''}>한국인</span>
              <span lang='fr' className={languageFamily==='fr'?'active':''}>Français</span>
            </div>
        </div>
    )
  }
}

export default connect(
  state=>({
    langSettingsTitle: state.settings.lexicon.settings.title,
    langSettingsLanguage: state.settings.lexicon.settings.language,
    languageFamily: state.settings.lexicon.settings.languageFamily
  }),
  { setLanguage }
)(Settings)