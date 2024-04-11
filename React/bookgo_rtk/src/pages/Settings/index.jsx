import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../../redux/reducers/settingsSlice'
import './index.sass'
import zh from '../../lexicon/zh'
import en from '../../lexicon/en'
import jp from '../../lexicon/jp'
import ko from '../../lexicon/ko'
import fr from '../../lexicon/fr'

export default function Settings() {
  const dispatch = useDispatch();
  const { lexicon: { settings: { title:langSettingsTitle, language:langSettingsLanguage, languageFamily }}} = useSelector(state => state.settings)
  const handleLanguage = event => {
    const { target } = event
    switch(target.lang){
      case 'zh':        
        dispatch(setLanguage(zh));
        break;
      case 'en':
        dispatch(setLanguage(en));
        break;
      case 'jp':
        dispatch(setLanguage(jp));
        break;
      case 'ko':
        dispatch(setLanguage(ko));
        break;
      case 'fr':
        dispatch(setLanguage(fr));
        break;
      default:
    }
  }

  return (
      <div className='settings'>
          <h3 className='settings-title'>{langSettingsTitle}</h3>
          <div className='language' onClick={handleLanguage}>
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