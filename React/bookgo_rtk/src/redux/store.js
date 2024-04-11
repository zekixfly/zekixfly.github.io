import { configureStore } from '@reduxjs/toolkit';
import bestdealReducer from './reducers/bestdealSlice'
import settingsReducer from './reducers/settingsSlice'

export default configureStore({
    reducer: {
        bestdeal: bestdealReducer,
        settings: settingsReducer,
    },
});