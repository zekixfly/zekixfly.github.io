import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLanguage } from './redux/reducers/settingsSlice'
import Nav from './components/Nav'
import Content from './components/Content'
import zh from './lexicon/zh'
import en from './lexicon/en'
import jp from './lexicon/jp'
import ko from './lexicon/ko'
import fr from './lexicon/fr'
import './App.sass'

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // componentDidMount
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
        dispatch(setLanguage(zh));
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
        dispatch(setLanguage(en));
        break;
      case 'ja':
        dispatch(setLanguage(jp));
        break;
      case 'ko':
        dispatch(setLanguage(ko));
        break;
      case 'fr':
        dispatch(setLanguage(fr));
        break;
      default:
        dispatch(setLanguage(en));
        break;
    }
  }, []);

  return (
    <HashRouter>
      <div className='bookgo-wrap'>
        <Nav />
        <Content />
      </div>
    </HashRouter>
  )
}