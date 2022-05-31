import { createSlice } from '@reduxjs/toolkit'
import { generateColor } from '../utils/Utils'

const ConfigSlice = createSlice({
	name: 'slice/config',
	initialState: {
		randomInit: '#fff',
	},
	reducers: {
		randomKey: (state, action) => {
			state.randomInit = generateColor()
		},
	},
})

export default ConfigSlice
export const ConfigActions = ConfigSlice.actions
