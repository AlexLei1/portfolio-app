import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICursor {
	cursorVariant: string
}

const initialState: ICursor = {
	cursorVariant: 'inactive'
}

export const cursorSlice = createSlice({
	name: 'cursor',
	initialState,
	reducers: {
		toggleCursor: (state, {payload: cursorVariant}: PayloadAction<string>) => {
				state.cursorVariant = cursorVariant
		}
	},
})

export const {actions, reducer} = cursorSlice