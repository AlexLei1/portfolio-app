
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISchool } from 'types/school.interface';

const initialState: ISchool = {
	id: 1
}

export const schoolSlice = createSlice({
	name: 'school',
	initialState,
	reducers: {
		toggleSchool: (state, {payload: school}: PayloadAction<ISchool>) => {
			if (state.id !== school.id) {
				state.id = school.id
			} else {
				state.id 
			}
		}
	}
})

export const {actions, reducer} = schoolSlice