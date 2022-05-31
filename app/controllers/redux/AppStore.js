import { Store } from 'redux'
import { appReducers } from './AppSlice'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from '@react-native-async-storage/async-storage'
import { createBlacklistFilter, createWhitelistFilter } from 'redux-persist-transform-filter'

import { configureStore } from '@reduxjs/toolkit'

function logger({ getState, dispatch }) {
	return (next) => (action) => {
		console.log('[Redux Logger Middleware-Update State]\n', action.type, action.payload)
		const returnValue = next(action)
		return returnValue
	}
}

const middleware = [thunk, logger]
const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2,
	transforms: [
		createWhitelistFilter('discover', ['members']),
		createBlacklistFilter('account', ['NetworkState']),
	],
	whitelist: ['config', 'global'],
}

/**
 * @param {Store} store
 */
export const store = configureStore({
	reducer: persistReducer(persistConfig, appReducers),
	devTools: process.env.NODE_ENV !== 'production',
	middleware: middleware,
})

export const persistor = persistStore(store, {}, () => {})
