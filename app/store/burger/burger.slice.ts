import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBurger } from 'types/burger.interface'

const initialState: IBurger = {
	isShow: false
}

export const burgerSlice = createSlice({
	name: 'burger',
	initialState,
	reducers: {
		toggleBurger: (state, {payload: isShow}: PayloadAction<IBurger>) => {
			if (state.isShow === true) {
				state.isShow = false
			} else state.isShow = true
		}
	},
})

export const {actions, reducer} = burgerSlice