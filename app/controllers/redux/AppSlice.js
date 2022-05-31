import { combineReducers } from 'redux'
import GlobalSlice from './GlobalSlice'
import ConfigSlice from '../../configs/ConfigSlice'

export const appReducers = combineReducers({
	global: GlobalSlice.reducer,
	config: ConfigSlice.reducer,
})
