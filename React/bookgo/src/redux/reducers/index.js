import { combineReducers } from 'redux'
import bestdeal from './bestdeal'
import settings from './settings'

export default combineReducers(
    {
        bestdeal,
        settings
    }
)