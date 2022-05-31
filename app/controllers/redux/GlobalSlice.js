import { createSlice } from '@reduxjs/toolkit'

const GlobalSlice = createSlice({
	name: 'slice/app',
	initialState: {
		appState: 'active',
		initialScreenName: 'Home',
		language: 'en',
	},
	reducers: {
		setAppState: (state, action) => {
			if (action.payload?.appState) state.appState = action.payload.appState
		},
		setInitScreenName: (state, action) => {
			if (action.payload?.name) state.initialScreenName = action.payload.name
		},
		changeLanguage: (state, action) => {
			if (action.payload?.language) state.language = action.payload.language
		},
	},
})

export default GlobalSlice
export const GlobalActions = GlobalSlice.actions
